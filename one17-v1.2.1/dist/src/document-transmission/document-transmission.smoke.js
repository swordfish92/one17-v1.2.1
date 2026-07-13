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
const notification_service_1 = require("../notification/notification.service");
const task_service_1 = require("../task/task.service");
const document_transmission_service_1 = require("./document-transmission.service");
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
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const documentTransmission = new document_transmission_service_1.DocumentTransmissionService(prisma, audit, delegation, notification, task);
    const orgUnitCode = `DOC_TRANSMISSION_SMOKE_${RUN}`;
    await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'Doc Transmission Smoke Dept' } });
    const position = await prisma.position.create({ data: { title: `Officer ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
    const mdUser = await prisma.appUser.create({ data: { email: `doctx-md-${RUN}@one17.test`, displayName: 'md' } });
    await rbac.assignRole({ userId: mdUser.id, roleCode: 'MD_CEO' });
    const csUser = await prisma.appUser.create({ data: { email: `doctx-cs-${RUN}@one17.test`, displayName: 'cs' } });
    await rbac.assignRole({ userId: csUser.id, roleCode: 'CS' });
    const recipientUser = await prisma.appUser.create({ data: { email: `doctx-recipient-${RUN}@one17.test`, displayName: 'recipient' } });
    await rbac.assignRole({ userId: recipientUser.id, roleCode: 'PORT_OFF' });
    const recipientEmployee = await prisma.employee.create({ data: { surname: 'Officer', firstName: `Named${RUN}`, positionId: position.id, orgUnitCode, appUserId: recipientUser.id, hireDate: new Date() } });
    const noEmployeeRecipientUser = await prisma.appUser.create({ data: { email: `doctx-noemp-${RUN}@one17.test`, displayName: 'no-employee-recipient' } });
    await rbac.assignRole({ userId: noEmployeeRecipientUser.id, roleCode: 'AUDITOR' });
    const outsiderUser = await prisma.appUser.create({ data: { email: `doctx-outsider-${RUN}@one17.test`, displayName: 'outsider' } });
    await rbac.assignRole({ userId: outsiderUser.id, roleCode: 'INVESTOR' });
    await expectReject('an outsider without MD_DOCUMENT_TRANSMISSION cannot transmit a document', () => documentTransmission.transmitDocument({ title: 'x', fileReference: 'x', recipientUserIds: [recipientUser.id] }, outsiderUser.id));
    await expectReject('a CS user (VIEW only) cannot transmit a document — MD_CEO is the initiator', () => documentTransmission.transmitDocument({ title: 'x', fileReference: 'x', recipientUserIds: [recipientUser.id] }, csUser.id));
    await expectReject('transmitting with zero recipients is rejected', () => documentTransmission.transmitDocument({ title: 'x', fileReference: 'x', recipientUserIds: [] }, mdUser.id));
    const document = await documentTransmission.transmitDocument({ title: `Board resolution pack ${RUN}`, fileReference: `/documents/res-${RUN}.pdf`, docType: 'BOARD_RESOLUTION', recipientUserIds: [recipientUser.id, noEmployeeRecipientUser.id] }, mdUser.id);
    if (document.title === `Board resolution pack ${RUN}` && document.transmittedByUserId === mdUser.id) {
        ok('MD_CEO transmits a document to named officers (invariant 55b)');
    }
    else {
        fail('transmitDocument did not create the expected document row', document);
    }
    const recipientRow = await prisma.transmittedDocumentRecipient.findUniqueOrThrow({ where: { documentId_recipientUserId: { documentId: document.id, recipientUserId: recipientUser.id } } });
    if (recipientRow.taskId) {
        const generatedTask = await prisma.task.findUniqueOrThrow({ where: { id: recipientRow.taskId } });
        if (generatedTask.assigneeEmployeeId === recipientEmployee.id) {
            ok('a recipient WITH an Employee record gets a REAL Task (invariant 55b: "+ task"), assigned via systemAssignTask');
        }
        else {
            fail('generated task not assigned to the correct employee', generatedTask);
        }
    }
    else {
        fail('expected a taskId for the recipient with an Employee record', recipientRow);
    }
    const noEmployeeRow = await prisma.transmittedDocumentRecipient.findUniqueOrThrow({ where: { documentId_recipientUserId: { documentId: document.id, recipientUserId: noEmployeeRecipientUser.id } } });
    if (!noEmployeeRow.taskId) {
        ok('a recipient WITHOUT an Employee record still gets the register row (no Task, never a hard failure for the whole batch)');
    }
    else {
        fail('expected no taskId for a recipient with no Employee record', noEmployeeRow);
    }
    const recipientNotifications = await prisma.notification.findMany({ where: { recipientUserId: recipientUser.id, title: 'Document transmitted to you' } });
    if (recipientNotifications.length >= 1) {
        ok('the recipient receives a notification of the transmission');
    }
    else {
        fail('expected a transmission notification for the recipient', recipientNotifications);
    }
    await expectReject('an outsider (not a recipient, no VIEW capability) cannot acknowledge a transmission never sent to them', () => documentTransmission.acknowledgeTransmission(document.id, outsiderUser.id));
    const acknowledged = await documentTransmission.acknowledgeTransmission(document.id, recipientUser.id);
    if (acknowledged.acknowledgedAt) {
        ok('the named recipient acknowledges their own transmission — ownership-gated, distinct second action');
    }
    else {
        fail('acknowledgeTransmission did not set acknowledgedAt', acknowledged);
    }
    await expectReject('a transmission already acknowledged cannot be acknowledged twice', () => documentTransmission.acknowledgeTransmission(document.id, recipientUser.id));
    const mdView = await documentTransmission.listDocumentsForViewer(mdUser.id);
    const mdDoc = mdView.find((d) => d.id === document.id);
    if (mdDoc && Array.isArray(mdDoc.recipients) && mdDoc.recipients.length === 2) {
        ok('MD_CEO (capability holder) sees the document with full recipient/acknowledgment status');
    }
    else {
        fail('capability-holder view did not return full recipient status', mdDoc);
    }
    const recipientView = await documentTransmission.listDocumentsForViewer(recipientUser.id);
    if (recipientView.some((d) => d.id === document.id)) {
        ok('the named recipient (no capability) sees the document transmitted to them via the restricted ACL');
    }
    else {
        fail('recipient-scoped view missing the transmitted document', recipientView);
    }
    const outsiderView = await documentTransmission.listDocumentsForViewer(outsiderUser.id);
    if (!outsiderView.some((d) => d.id === document.id)) {
        ok('an outsider who is neither a capability holder nor a named recipient sees nothing (restricted ACL, same shape as BoardMinutes)');
    }
    else {
        fail('outsider incorrectly saw a document never transmitted to them', outsiderView);
    }
    await prisma.task.deleteMany({ where: { assigneeEmployeeId: recipientEmployee.id } });
    await prisma.transmittedDocumentRecipient.deleteMany({ where: { documentId: document.id } });
    await prisma.transmittedDocument.deleteMany({ where: { id: document.id } });
    await prisma.employee.deleteMany({ where: { orgUnitCode } });
    const userIds = [mdUser.id, csUser.id, recipientUser.id, noEmployeeRecipientUser.id, outsiderUser.id];
    await prisma.notification.deleteMany({ where: { recipientUserId: { in: userIds } } });
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.position.deleteMany({ where: { orgUnitCode } });
    await prisma.orgUnit.deleteMany({ where: { code: orgUnitCode } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — MD Document Transmission (invariant 55b) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=document-transmission.smoke.js.map