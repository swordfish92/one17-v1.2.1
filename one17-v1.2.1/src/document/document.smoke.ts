// Run with: npx tsx src/document/document.smoke.ts
// Invariant 39(a), Tier 1: DOCUMENT_REGISTER upload/attach — the highest-
// value gap the 37(g) completeness audit found. attach() is capability-
// gated (DOCUMENT_REGISTER INITIATE); listFor() has no capability check of
// its own by design (the embedding screen's own capability already gated
// reaching this entityId — see DocumentController's comment).
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from './document.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const documents = new DocumentService(prisma, delegation, audit);

  const finAdmin = await prisma.appUser.create({ data: { email: `doc-fin-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const outsider = await prisma.appUser.create({ data: { email: `doc-outsider-${RUN}@one17.test`, displayName: 'x' } });
  const auditor = await prisma.appUser.create({ data: { email: `doc-auditor-${RUN}@one17.test`, displayName: 'x' } });
  await rbac.assignRole({ userId: auditor.id, roleCode: 'AUDITOR' });

  const entityId = `smoke-entity-${RUN}`;

  await expectReject('outsider (no DOCUMENT_REGISTER) cannot attach a document', () =>
    documents.attach({ entityType: 'risk_appetite_matrix_version', entityId, documentType: 'Board Resolution', fileReference: '/evidence/x.pdf' }, outsider.id));

  const attached = await documents.attach(
    { entityType: 'risk_appetite_matrix_version', entityId, documentType: 'Board Resolution', fileReference: '/evidence/br-2026-01.pdf' },
    finAdmin.id,
  );
  if (attached.fileReference === '/evidence/br-2026-01.pdf' && attached.uploadedByUserId === finAdmin.id) {
    ok('FIN_ADMIN (DOCUMENT_REGISTER INITIATE) attaches a document to an arbitrary entityType/entityId');
  } else {
    fail('attach() did not persist correctly', attached);
  }

  const list = await documents.listFor('risk_appetite_matrix_version', entityId);
  if (list.length === 1 && list[0].id === attached.id) {
    ok('listFor(entityType, entityId) returns exactly the attached document, no capability gate of its own (surrounding screen already gated reaching this entityId)');
  } else {
    fail('listFor did not return the expected row', list);
  }

  const otherEntityList = await documents.listFor('risk_appetite_matrix_version', `not-${entityId}`);
  if (otherEntityList.length === 0) {
    ok('listFor a DIFFERENT entityId returns nothing — polymorphic scoping holds');
  } else {
    fail('listFor leaked documents across entityId', otherEntityList);
  }

  const browseAll = await documents.browse({ entityType: 'risk_appetite_matrix_version' });
  if (browseAll.some((d) => d.id === attached.id)) {
    ok('browse({entityType}) — the cross-entity register surface (AUDITOR-facing) — finds the attached document');
  } else {
    fail('browse() did not surface the attached document', browseAll);
  }

  const browseByDocType = await documents.browse({ documentType: 'board resolution' });
  if (browseByDocType.some((d) => d.id === attached.id)) {
    ok('browse({documentType}) case-insensitive contains match works');
  } else {
    fail('browse() documentType filter did not match', browseByDocType);
  }

  const auditRow = await prisma.auditTrail.findFirst({ where: { entityType: 'document_register_entry', entityId: attached.id, action: 'CREATE' } });
  if (auditRow && auditRow.actorUserId === finAdmin.id) {
    ok('attach() writes an audit_trail row attributing the CREATE to the actor');
  } else {
    fail('no audit_trail row for the attach action', auditRow);
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Document Register upload/attach (invariant 39a, Tier 1) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
