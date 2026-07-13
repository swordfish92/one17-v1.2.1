"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const tax_service_1 = require("../tax/tax.service");
const tax_types_1 = require("../tax/tax.types");
const ops_api_types_1 = require("./ops-api.types");
let TaxController = class TaxController {
    tax;
    constructor(tax) {
        this.tax = tax;
    }
    async listRateVersions(taxType) {
        return this.tax.listRateVersions(taxType);
    }
    async proposeRateVersion(dto, user) {
        try {
            return await this.tax.proposeRateVersion({
                taxType: dto.taxType,
                rates: dto.rates,
                effectiveFrom: new Date(dto.effectiveFrom),
                proposedByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof tax_types_1.TaxError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async listExemptions(taxType) {
        return this.tax.listExemptions(taxType);
    }
    async grantExemption(dto, user) {
        return this.tax.grantExemption({ investorId: dto.investorId, taxType: dto.taxType, reason: dto.reason, grantedByUserId: user.userId });
    }
    async revokeExemption(investorId, taxType, user) {
        return this.tax.revokeExemption(investorId, taxType, user.userId);
    }
    async listFeeInvoices() {
        return this.tax.listFeeInvoices();
    }
    async createFeeInvoice(dto, user) {
        try {
            return await this.tax.createFeeInvoice({
                counterpartyId: dto.counterpartyId,
                investorId: dto.investorId,
                description: dto.description,
                feeAmountKobo: BigInt(dto.feeAmountKobo),
                serviceOrFeeType: dto.serviceOrFeeType,
                invoiceDate: new Date(dto.invoiceDate),
                createdByUserId: user.userId,
            });
        }
        catch (err) {
            if (err instanceof tax_types_1.TaxError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async recognizeVendorInvoiceVat(id, dto, user) {
        try {
            return await this.tax.recognizeVendorInvoiceVat({ vendorInvoiceId: id, serviceOrFeeType: dto.serviceOrFeeType, actorUserId: user.userId });
        }
        catch (err) {
            if (err instanceof tax_types_1.TaxError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async listStampDutyAssessments() {
        return this.tax.listStampDutyAssessments();
    }
    async assessStampDuty(dto, user) {
        return this.tax.assessStampDuty({
            instrumentType: dto.instrumentType,
            entityType: dto.entityType,
            entityId: dto.entityId,
            baseAmountKobo: dto.baseAmountKobo ? BigInt(dto.baseAmountKobo) : undefined,
            transactionDate: new Date(dto.transactionDate),
            assessedByUserId: user.userId,
        });
    }
    async listGlMappings() {
        return this.tax.listGlMappings();
    }
    async configureGlMapping(dto, user) {
        return this.tax.configureGlMapping({ taxType: dto.taxType, payableAccountCode: dto.payableAccountCode, configuredByUserId: user.userId });
    }
    async listRemittanceDueDateConfigs() {
        return this.tax.listRemittanceDueDateConfigs();
    }
    async configureRemittanceDueDate(dto, user) {
        return this.tax.configureRemittanceDueDate({ taxType: dto.taxType, authority: dto.authority, dayOfMonthDue: dto.dayOfMonthDue }, user.userId);
    }
    async listRemittanceBatches(taxType) {
        return this.tax.listRemittanceBatches(taxType);
    }
    async submitRemittanceForApproval(id, user) {
        try {
            return await this.tax.proposeRemittanceApproval(id, user.userId);
        }
        catch (err) {
            if (err instanceof tax_types_1.TaxError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async retryRemittanceLetter(id, user) {
        try {
            return await this.tax.retryRemittanceLetter(id, user.userId);
        }
        catch (err) {
            if (err instanceof tax_types_1.TaxError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async markRemitted(id, user) {
        try {
            return await this.tax.markRemitted(id, user.userId);
        }
        catch (err) {
            if (err instanceof tax_types_1.TaxError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.TaxController = TaxController;
__decorate([
    (0, common_1.Get)('rate-versions'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('taxType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "listRateVersions", null);
__decorate([
    (0, common_1.Post)('rate-versions'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeTaxRateVersionDto, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "proposeRateVersion", null);
__decorate([
    (0, common_1.Get)('exemptions'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('taxType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "listExemptions", null);
__decorate([
    (0, common_1.Post)('exemptions'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.GrantTaxExemptionDto, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "grantExemption", null);
__decorate([
    (0, common_1.Post)('exemptions/:investorId/:taxType/revoke'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Param)('taxType')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "revokeExemption", null);
__decorate([
    (0, common_1.Get)('fee-invoices'),
    (0, requires_capability_decorator_1.RequiresCapability)('FEE_INVOICE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "listFeeInvoices", null);
__decorate([
    (0, common_1.Post)('fee-invoices'),
    (0, requires_capability_decorator_1.RequiresCapability)('FEE_INVOICE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateFeeInvoiceDto, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "createFeeInvoice", null);
__decorate([
    (0, common_1.Post)('vendor-invoices/:id/recognize-vat'),
    (0, requires_capability_decorator_1.RequiresCapability)('FEE_INVOICE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.RecognizeVendorInvoiceVatDto, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "recognizeVendorInvoiceVat", null);
__decorate([
    (0, common_1.Get)('stamp-duty-assessments'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "listStampDutyAssessments", null);
__decorate([
    (0, common_1.Post)('stamp-duty-assessments'),
    (0, requires_capability_decorator_1.RequiresCapability)('FEE_INVOICE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.AssessStampDutyDto, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "assessStampDuty", null);
__decorate([
    (0, common_1.Get)('gl-mappings'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "listGlMappings", null);
__decorate([
    (0, common_1.Post)('gl-mappings'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureTaxGlMappingDto, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "configureGlMapping", null);
__decorate([
    (0, common_1.Get)('remittance-due-date-configs'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_REMITTANCE_MANAGEMENT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "listRemittanceDueDateConfigs", null);
__decorate([
    (0, common_1.Post)('remittance-due-date-configs'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_CONFIGURATION_MANAGEMENT', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ConfigureRemittanceDueDateDto, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "configureRemittanceDueDate", null);
__decorate([
    (0, common_1.Get)('remittance-batches'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_REMITTANCE_MANAGEMENT', 'VIEW'),
    __param(0, (0, common_1.Query)('taxType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "listRemittanceBatches", null);
__decorate([
    (0, common_1.Post)('remittance-batches/:id/submit-for-approval'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_REMITTANCE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "submitRemittanceForApproval", null);
__decorate([
    (0, common_1.Post)('remittance-batches/:id/retry-letter'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_REMITTANCE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "retryRemittanceLetter", null);
__decorate([
    (0, common_1.Post)('remittance-batches/:id/mark-remitted'),
    (0, requires_capability_decorator_1.RequiresCapability)('TAX_REMITTANCE_MANAGEMENT', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaxController.prototype, "markRemitted", null);
exports.TaxController = TaxController = __decorate([
    (0, common_1.Controller)('tax'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [tax_service_1.TaxService])
], TaxController);
//# sourceMappingURL=tax.controller.js.map