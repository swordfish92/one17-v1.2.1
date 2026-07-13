"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const one17_ai_service_1 = require("./one17-ai.service");
const ai_provider_credential_service_1 = require("./ai-provider-credential.service");
const ai_provider_clients_1 = require("./ai-provider-clients");
const gateway_secret_crypto_1 = require("../common/gateway-secret-crypto");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const ai = new one17_ai_service_1.One17AIService(prisma, audit, delegation, workflow);
    const credentials = new ai_provider_credential_service_1.AiProviderCredentialService(prisma, audit, delegation, workflow);
    await prisma.aiProviderCredential.deleteMany({});
    const ict = await prisma.appUser.create({ data: { email: `aicred-ict-${RUN}@one17.test`, displayName: 'aicred-ict' } });
    await rbac.assignRole({ userId: ict.id, roleCode: 'ICT' });
    const mdCeo = await prisma.appUser.create({ data: { email: `aicred-mdceo-${RUN}@one17.test`, displayName: 'aicred-mdceo' } });
    await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
    const outsider = await prisma.appUser.create({ data: { email: `aicred-outsider-${RUN}@one17.test`, displayName: 'aicred-outsider' } });
    try {
        await expectReject('outsider (no ICT/MD_CEO role) cannot propose an AI provider credential', () => credentials.proposeCredential({ providerSlot: 1, providerName: 'Anthropic Claude', apiKey: 'sk-ant-fake-key-0001', isActive: true }, outsider.id));
        await expectReject('outsider cannot even VIEW the credential list', () => credentials.listCredentials(outsider.id));
        const proposed = await credentials.proposeCredential({ providerSlot: 1, providerName: 'Anthropic Claude', apiKey: 'sk-ant-fake-key-0001', isActive: true }, ict.id);
        if (proposed.isActive === false && proposed.configWorkflowInstanceId && proposed.pendingProviderName === 'Anthropic Claude') {
            ok('proposeCredential stages the change pending approval -- isActive stays false on a brand-new slot even though the proposer requested isActive:true (invariant 33e/73b: never flips on propose)');
        }
        else {
            fail('credential proposal did not stage correctly / isActive flipped early', proposed);
        }
        const rawRow = await prisma.aiProviderCredential.findUniqueOrThrow({ where: { providerSlot: 1 } });
        if (rawRow.isActive === false && rawRow.apiKey === null && (0, gateway_secret_crypto_1.decryptSecretNullable)(rawRow.pendingApiKey) === 'sk-ant-fake-key-0001') {
            ok('the RAW db row confirms: isActive false, live apiKey still null, the real key sits only in pendingApiKey (encrypted at rest) until approval');
        }
        else {
            fail('raw db row did not match the expected pre-approval state', rawRow);
        }
        if (/^v\d+\.[^.]+\.[^.]+\.[^.]*$/.test(rawRow.pendingApiKey ?? '')) {
            ok('invariant 75(a): pendingApiKey is stored as AES-256-GCM ciphertext at rest, not plaintext');
        }
        else {
            fail('pendingApiKey column does not look encrypted at rest', rawRow.pendingApiKey);
        }
        await expectReject('outsider cannot approve a credential config change', () => credentials.approveCredential(proposed.configWorkflowInstanceId, outsider.id));
        await expectReject('the SAME proposer (ICT) cannot approve their own credential proposal (maker != checker)', () => credentials.approveCredential(proposed.configWorkflowInstanceId, ict.id));
        const approved = await credentials.approveCredential(proposed.configWorkflowInstanceId, mdCeo.id);
        if (approved.isActive === true && approved.hasApiKey && approved.apiKeyPreview?.endsWith('0001') && !approved.configWorkflowInstanceId) {
            ok('MD_CEO approval (a DIFFERENT user than the ICT proposer) is what actually flips the slot ACTIVE -- maker != checker enforced, matching PaymentGatewayService/AttendanceService exactly');
        }
        else {
            fail('credential approval did not go live as expected', approved);
        }
        if (proposed.apiKey === undefined && approved.apiKey === undefined && approved.pendingApiKey === undefined) {
            ok('neither the propose response nor the approve response ever contains a raw "apiKey"/"pendingApiKey" field -- only hasApiKey + a masked preview');
        }
        else {
            fail('a raw apiKey/pendingApiKey field leaked into a serialized response', { proposed, approved });
        }
        const listed = await credentials.listCredentials(mdCeo.id);
        const listedSlot1 = listed.find((c) => c.providerSlot === 1);
        if (listedSlot1.apiKey === undefined && listedSlot1.hasApiKey === true && listedSlot1.apiKeyPreview === '••••0001') {
            ok(`listCredentials(): slot 1 shows hasApiKey=true, apiKeyPreview="${listedSlot1.apiKeyPreview}" -- the real key is never serialized, only a last-4 masked preview, same convention as PaymentGatewayProvider.webhookSecret`);
        }
        else {
            fail('listCredentials() leaked the raw key or masked it incorrectly', listedSlot1);
        }
        const rename = await credentials.proposeCredential({ providerSlot: 1, providerName: 'Anthropic Claude (renamed)', isActive: true }, ict.id);
        await credentials.approveCredential(rename.configWorkflowInstanceId, mdCeo.id);
        const renamed = (await credentials.listCredentials(mdCeo.id)).find((c) => c.providerSlot === 1);
        if (renamed.providerName === 'Anthropic Claude (renamed)' && renamed.hasApiKey && renamed.apiKeyPreview === '••••0001') {
            ok('a rename-only proposal (no apiKey supplied) leaves the previously-approved key intact on approval');
        }
        else {
            fail('rename-only approval unexpectedly touched the key', renamed);
        }
        await expectReject('proposing slot 3 for the first time WITHOUT a baseUrl is refused (the config-defined third vendor has no default endpoint)', () => credentials.proposeCredential({ providerSlot: 3, providerName: 'Self-Hosted Vendor', apiKey: 'sk-third-fake-0003', isActive: true }, ict.id));
        const slot3Proposed = await credentials.proposeCredential({ providerSlot: 3, providerName: 'Self-Hosted Vendor', apiKey: 'sk-third-fake-0003', baseUrl: 'https://llm.example.internal/v1', isActive: false }, ict.id);
        const slot3Approved = await credentials.approveCredential(slot3Proposed.configWorkflowInstanceId, mdCeo.id);
        if (slot3Approved.baseUrl === 'https://llm.example.internal/v1' && slot3Approved.isActive === false) {
            ok('slot 3 approves with its baseUrl set, and (proposer explicitly requested isActive:false) stays INACTIVE post-approval -- a credentialed slot need not be active');
        }
        else {
            fail('slot 3 approval did not carry the baseUrl / isActive as proposed', slot3Approved);
        }
        await expectReject('a SECOND proposal cannot be made while one is already pending for the same slot', () => credentials.proposeCredential({ providerSlot: 1, providerName: 'Duplicate proposal attempt', isActive: true }, ict.id).then(() => credentials.proposeCredential({ providerSlot: 1, providerName: 'Second duplicate proposal', isActive: true }, ict.id)));
        const chatFlag = await prisma.aiCapabilityFlag.findUnique({ where: { capabilityCode: 'AI_CHAT' } });
        if (!chatFlag?.isEnabled) {
            const attempt = await ai.invoke({ askingUserId: ict.id, capabilityCode: 'AI_CHAT', promptText: 'hi', requestedDataPointCodes: [], orgUnitCode: 'ICT' });
            if (attempt.outcome === 'REFUSED' && attempt.refusalReason?.includes('disabled (global flag OFF)')) {
                ok(`credentialing alone changes nothing on the answer path: with a fully APPROVED, ACTIVE Anthropic Claude credential now sitting in slot 1, AI_CHAT is still REFUSED because its own gate-1 flag is OFF: "${attempt.refusalReason}"`);
            }
            else {
                fail('an active credential unexpectedly let a flag-off capability through', attempt);
            }
        }
        else {
            await ai.activateKillSwitch(ict.id, 'ai-provider-credential smoke test -- proving credentialing does not bypass the kill switch');
            const attempt = await ai.invoke({ askingUserId: ict.id, capabilityCode: 'AI_CHAT', promptText: 'hi', requestedDataPointCodes: [], orgUnitCode: 'ICT' });
            await ai.deactivateKillSwitch(ict.id);
            if (attempt.outcome === 'REFUSED' && attempt.refusalReason?.includes('kill switch')) {
                ok(`credentialing alone changes nothing on the answer path: with a fully APPROVED, ACTIVE Anthropic Claude credential in slot 1, the kill switch still drops the request instantly: "${attempt.refusalReason}"`);
            }
            else {
                fail('an active credential unexpectedly let a request through while the kill switch was active', attempt);
            }
        }
        const anthroSpec = (0, ai_provider_clients_1.buildAnthropicRequest)('sk-ant-fake-key-0001', { model: 'claude-opus-4-8', maxTokens: 256, systemPrompt: 'You are helpful.', messages: [{ role: 'user', content: 'Hello' }] });
        if (anthroSpec.url === 'https://api.anthropic.com/v1/messages' &&
            anthroSpec.headers['x-api-key'] === 'sk-ant-fake-key-0001' &&
            anthroSpec.headers['anthropic-version'] === '2023-06-01' &&
            anthroSpec.headers['content-type'] === 'application/json' &&
            anthroSpec.body.model === 'claude-opus-4-8' &&
            anthroSpec.body.max_tokens === 256 &&
            anthroSpec.body.system === 'You are helpful.' &&
            Array.isArray(anthroSpec.body.messages) && anthroSpec.body.messages[0].role === 'user') {
            ok('buildAnthropicRequest(): correct endpoint (POST /v1/messages), x-api-key + anthropic-version headers, and { model, max_tokens, system, messages } body shape');
        }
        else {
            fail('buildAnthropicRequest() built an incorrect request', anthroSpec);
        }
        const emptyKeySpec = (0, ai_provider_clients_1.buildAnthropicRequest)('a-different-key-9999', { model: 'x', maxTokens: 1, messages: [] });
        if (emptyKeySpec.headers['x-api-key'] === 'a-different-key-9999') {
            ok('buildAnthropicRequest() passes the supplied apiKey through verbatim into the x-api-key header -- never silently defaulted or mangled');
        }
        else {
            fail('buildAnthropicRequest() did not pass the apiKey through correctly', emptyKeySpec);
        }
        const openAiSpec = (0, ai_provider_clients_1.buildOpenAiRequest)('sk-oai-fake-key-0002', { model: 'gpt-5.5', maxTokens: 256, systemPrompt: 'You are helpful.', messages: [{ role: 'user', content: 'Hello' }] });
        if (openAiSpec.url === 'https://api.openai.com/v1/chat/completions' &&
            openAiSpec.headers.authorization === 'Bearer sk-oai-fake-key-0002' &&
            openAiSpec.headers['content-type'] === 'application/json' &&
            openAiSpec.body.model === 'gpt-5.5' &&
            Array.isArray(openAiSpec.body.messages) &&
            openAiSpec.body.messages[0].role === 'system' &&
            openAiSpec.body.messages[1].role === 'user') {
            ok('buildOpenAiRequest(): correct endpoint (POST /v1/chat/completions), Authorization: Bearer <key> header, and { model, messages: [system, user] } body shape');
        }
        else {
            fail('buildOpenAiRequest() built an incorrect request', openAiSpec);
        }
        const genericSpec = (0, ai_provider_clients_1.buildGenericOpenAiCompatibleRequest)('sk-third-fake-0003', 'https://llm.example.internal/v1/', { model: 'local-llama', maxTokens: 256, messages: [{ role: 'user', content: 'Hello' }] });
        if (genericSpec.url === 'https://llm.example.internal/v1/chat/completions' &&
            genericSpec.headers.authorization === 'Bearer sk-third-fake-0003' &&
            genericSpec.body.model === 'local-llama') {
            ok(`buildGenericOpenAiCompatibleRequest(): the config-defined third slot correctly targets its OWN configured baseUrl ("${genericSpec.url}"), trailing slash normalized, OpenAI-compatible Bearer auth + body shape`);
        }
        else {
            fail('buildGenericOpenAiCompatibleRequest() built an incorrect request', genericSpec);
        }
    }
    finally {
        await prisma.aiProviderCredential.deleteMany({});
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — AI Provider Credential adapters (invariant 73b, CHECK27) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=ai-provider-credential.smoke.js.map