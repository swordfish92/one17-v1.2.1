import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VendorInvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$VendorInvoicePayload>;
export type AggregateVendorInvoice = {
    _count: VendorInvoiceCountAggregateOutputType | null;
    _avg: VendorInvoiceAvgAggregateOutputType | null;
    _sum: VendorInvoiceSumAggregateOutputType | null;
    _min: VendorInvoiceMinAggregateOutputType | null;
    _max: VendorInvoiceMaxAggregateOutputType | null;
};
export type VendorInvoiceAvgAggregateOutputType = {
    invoiceAmountKobo: number | null;
    vatKobo: number | null;
};
export type VendorInvoiceSumAggregateOutputType = {
    invoiceAmountKobo: bigint | null;
    vatKobo: bigint | null;
};
export type VendorInvoiceMinAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    vendorId: string | null;
    invoiceNumber: string | null;
    invoiceAmountKobo: bigint | null;
    invoiceDate: Date | null;
    status: $Enums.VendorInvoiceStatus | null;
    matchVarianceNote: string | null;
    matchedAt: Date | null;
    journalEntryId: string | null;
    paidJournalEntryId: string | null;
    vatKobo: bigint | null;
    recognizedVatRateVersionId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type VendorInvoiceMaxAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    vendorId: string | null;
    invoiceNumber: string | null;
    invoiceAmountKobo: bigint | null;
    invoiceDate: Date | null;
    status: $Enums.VendorInvoiceStatus | null;
    matchVarianceNote: string | null;
    matchedAt: Date | null;
    journalEntryId: string | null;
    paidJournalEntryId: string | null;
    vatKobo: bigint | null;
    recognizedVatRateVersionId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type VendorInvoiceCountAggregateOutputType = {
    id: number;
    purchaseOrderId: number;
    vendorId: number;
    invoiceNumber: number;
    invoiceAmountKobo: number;
    invoiceDate: number;
    status: number;
    matchVarianceNote: number;
    matchedAt: number;
    journalEntryId: number;
    paidJournalEntryId: number;
    vatKobo: number;
    recognizedVatRateVersionId: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type VendorInvoiceAvgAggregateInputType = {
    invoiceAmountKobo?: true;
    vatKobo?: true;
};
export type VendorInvoiceSumAggregateInputType = {
    invoiceAmountKobo?: true;
    vatKobo?: true;
};
export type VendorInvoiceMinAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    vendorId?: true;
    invoiceNumber?: true;
    invoiceAmountKobo?: true;
    invoiceDate?: true;
    status?: true;
    matchVarianceNote?: true;
    matchedAt?: true;
    journalEntryId?: true;
    paidJournalEntryId?: true;
    vatKobo?: true;
    recognizedVatRateVersionId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type VendorInvoiceMaxAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    vendorId?: true;
    invoiceNumber?: true;
    invoiceAmountKobo?: true;
    invoiceDate?: true;
    status?: true;
    matchVarianceNote?: true;
    matchedAt?: true;
    journalEntryId?: true;
    paidJournalEntryId?: true;
    vatKobo?: true;
    recognizedVatRateVersionId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type VendorInvoiceCountAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    vendorId?: true;
    invoiceNumber?: true;
    invoiceAmountKobo?: true;
    invoiceDate?: true;
    status?: true;
    matchVarianceNote?: true;
    matchedAt?: true;
    journalEntryId?: true;
    paidJournalEntryId?: true;
    vatKobo?: true;
    recognizedVatRateVersionId?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type VendorInvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorInvoiceWhereInput;
    orderBy?: Prisma.VendorInvoiceOrderByWithRelationInput | Prisma.VendorInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.VendorInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VendorInvoiceCountAggregateInputType;
    _avg?: VendorInvoiceAvgAggregateInputType;
    _sum?: VendorInvoiceSumAggregateInputType;
    _min?: VendorInvoiceMinAggregateInputType;
    _max?: VendorInvoiceMaxAggregateInputType;
};
export type GetVendorInvoiceAggregateType<T extends VendorInvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateVendorInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVendorInvoice[P]> : Prisma.GetScalarType<T[P], AggregateVendorInvoice[P]>;
};
export type VendorInvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorInvoiceWhereInput;
    orderBy?: Prisma.VendorInvoiceOrderByWithAggregationInput | Prisma.VendorInvoiceOrderByWithAggregationInput[];
    by: Prisma.VendorInvoiceScalarFieldEnum[] | Prisma.VendorInvoiceScalarFieldEnum;
    having?: Prisma.VendorInvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VendorInvoiceCountAggregateInputType | true;
    _avg?: VendorInvoiceAvgAggregateInputType;
    _sum?: VendorInvoiceSumAggregateInputType;
    _min?: VendorInvoiceMinAggregateInputType;
    _max?: VendorInvoiceMaxAggregateInputType;
};
export type VendorInvoiceGroupByOutputType = {
    id: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint;
    invoiceDate: Date;
    status: $Enums.VendorInvoiceStatus;
    matchVarianceNote: string | null;
    matchedAt: Date | null;
    journalEntryId: string | null;
    paidJournalEntryId: string | null;
    vatKobo: bigint;
    recognizedVatRateVersionId: string | null;
    createdByUserId: string;
    createdAt: Date;
    _count: VendorInvoiceCountAggregateOutputType | null;
    _avg: VendorInvoiceAvgAggregateOutputType | null;
    _sum: VendorInvoiceSumAggregateOutputType | null;
    _min: VendorInvoiceMinAggregateOutputType | null;
    _max: VendorInvoiceMaxAggregateOutputType | null;
};
export type GetVendorInvoiceGroupByPayload<T extends VendorInvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VendorInvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VendorInvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VendorInvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VendorInvoiceGroupByOutputType[P]>;
}>>;
export type VendorInvoiceWhereInput = {
    AND?: Prisma.VendorInvoiceWhereInput | Prisma.VendorInvoiceWhereInput[];
    OR?: Prisma.VendorInvoiceWhereInput[];
    NOT?: Prisma.VendorInvoiceWhereInput | Prisma.VendorInvoiceWhereInput[];
    id?: Prisma.UuidFilter<"VendorInvoice"> | string;
    purchaseOrderId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    vendorId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"VendorInvoice"> | string;
    invoiceAmountKobo?: Prisma.BigIntFilter<"VendorInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeFilter<"VendorInvoice"> | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFilter<"VendorInvoice"> | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.StringNullableFilter<"VendorInvoice"> | string | null;
    matchedAt?: Prisma.DateTimeNullableFilter<"VendorInvoice"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    paidJournalEntryId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    vatKobo?: Prisma.BigIntFilter<"VendorInvoice"> | bigint | number;
    recognizedVatRateVersionId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"VendorInvoice"> | Date | string;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    paymentBatchLines?: Prisma.PaymentBatchLineListRelationFilter;
    recognizedVatRateVersion?: Prisma.XOR<Prisma.TaxRateVersionNullableScalarRelationFilter, Prisma.TaxRateVersionWhereInput> | null;
};
export type VendorInvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    invoiceAmountKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchVarianceNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidJournalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    recognizedVatRateVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
    vendor?: Prisma.VendorOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    paymentBatchLines?: Prisma.PaymentBatchLineOrderByRelationAggregateInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionOrderByWithRelationInput;
};
export type VendorInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    vendorId_invoiceNumber?: Prisma.VendorInvoiceVendorIdInvoiceNumberCompoundUniqueInput;
    AND?: Prisma.VendorInvoiceWhereInput | Prisma.VendorInvoiceWhereInput[];
    OR?: Prisma.VendorInvoiceWhereInput[];
    NOT?: Prisma.VendorInvoiceWhereInput | Prisma.VendorInvoiceWhereInput[];
    purchaseOrderId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    vendorId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"VendorInvoice"> | string;
    invoiceAmountKobo?: Prisma.BigIntFilter<"VendorInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeFilter<"VendorInvoice"> | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFilter<"VendorInvoice"> | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.StringNullableFilter<"VendorInvoice"> | string | null;
    matchedAt?: Prisma.DateTimeNullableFilter<"VendorInvoice"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    paidJournalEntryId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    vatKobo?: Prisma.BigIntFilter<"VendorInvoice"> | bigint | number;
    recognizedVatRateVersionId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"VendorInvoice"> | Date | string;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    paymentBatchLines?: Prisma.PaymentBatchLineListRelationFilter;
    recognizedVatRateVersion?: Prisma.XOR<Prisma.TaxRateVersionNullableScalarRelationFilter, Prisma.TaxRateVersionWhereInput> | null;
}, "id" | "vendorId_invoiceNumber">;
export type VendorInvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    invoiceAmountKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchVarianceNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidJournalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    recognizedVatRateVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.VendorInvoiceCountOrderByAggregateInput;
    _avg?: Prisma.VendorInvoiceAvgOrderByAggregateInput;
    _max?: Prisma.VendorInvoiceMaxOrderByAggregateInput;
    _min?: Prisma.VendorInvoiceMinOrderByAggregateInput;
    _sum?: Prisma.VendorInvoiceSumOrderByAggregateInput;
};
export type VendorInvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.VendorInvoiceScalarWhereWithAggregatesInput | Prisma.VendorInvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.VendorInvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VendorInvoiceScalarWhereWithAggregatesInput | Prisma.VendorInvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"VendorInvoice"> | string;
    purchaseOrderId?: Prisma.UuidWithAggregatesFilter<"VendorInvoice"> | string;
    vendorId?: Prisma.UuidWithAggregatesFilter<"VendorInvoice"> | string;
    invoiceNumber?: Prisma.StringWithAggregatesFilter<"VendorInvoice"> | string;
    invoiceAmountKobo?: Prisma.BigIntWithAggregatesFilter<"VendorInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeWithAggregatesFilter<"VendorInvoice"> | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusWithAggregatesFilter<"VendorInvoice"> | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.StringNullableWithAggregatesFilter<"VendorInvoice"> | string | null;
    matchedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"VendorInvoice"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableWithAggregatesFilter<"VendorInvoice"> | string | null;
    paidJournalEntryId?: Prisma.UuidNullableWithAggregatesFilter<"VendorInvoice"> | string | null;
    vatKobo?: Prisma.BigIntWithAggregatesFilter<"VendorInvoice"> | bigint | number;
    recognizedVatRateVersionId?: Prisma.UuidNullableWithAggregatesFilter<"VendorInvoice"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"VendorInvoice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VendorInvoice"> | Date | string;
};
export type VendorInvoiceCreateInput = {
    id?: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutVendorInvoicesInput;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorInvoicesCreatedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineCreateNestedManyWithoutVendorInvoiceInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutRecognizedVatInvoicesInput;
};
export type VendorInvoiceUncheckedCreateInput = {
    id?: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutVendorInvoiceInput;
};
export type VendorInvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorInvoicesCreatedNestedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineUpdateManyWithoutVendorInvoiceNestedInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutRecognizedVatInvoicesNestedInput;
};
export type VendorInvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceNestedInput;
};
export type VendorInvoiceCreateManyInput = {
    id?: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type VendorInvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorInvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorInvoiceListRelationFilter = {
    every?: Prisma.VendorInvoiceWhereInput;
    some?: Prisma.VendorInvoiceWhereInput;
    none?: Prisma.VendorInvoiceWhereInput;
};
export type VendorInvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VendorInvoiceVendorIdInvoiceNumberCompoundUniqueInput = {
    vendorId: string;
    invoiceNumber: string;
};
export type VendorInvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    invoiceAmountKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchVarianceNote?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    paidJournalEntryId?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    recognizedVatRateVersionId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VendorInvoiceAvgOrderByAggregateInput = {
    invoiceAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
};
export type VendorInvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    invoiceAmountKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchVarianceNote?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    paidJournalEntryId?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    recognizedVatRateVersionId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VendorInvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    invoiceAmountKobo?: Prisma.SortOrder;
    invoiceDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchVarianceNote?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    paidJournalEntryId?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
    recognizedVatRateVersionId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VendorInvoiceSumOrderByAggregateInput = {
    invoiceAmountKobo?: Prisma.SortOrder;
    vatKobo?: Prisma.SortOrder;
};
export type VendorInvoiceScalarRelationFilter = {
    is?: Prisma.VendorInvoiceWhereInput;
    isNot?: Prisma.VendorInvoiceWhereInput;
};
export type VendorInvoiceCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.VendorInvoiceCreateWithoutCreatedByInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.VendorInvoiceCreateManyCreatedByInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.VendorInvoiceCreateWithoutCreatedByInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.VendorInvoiceCreateManyCreatedByInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.VendorInvoiceCreateWithoutCreatedByInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.VendorInvoiceCreateManyCreatedByInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutCreatedByInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type VendorInvoiceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput> | Prisma.VendorInvoiceCreateWithoutCreatedByInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput | Prisma.VendorInvoiceCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.VendorInvoiceCreateManyCreatedByInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutCreatedByInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type VendorInvoiceCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutVendorInput, Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput> | Prisma.VendorInvoiceCreateWithoutVendorInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput | Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.VendorInvoiceCreateManyVendorInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutVendorInput, Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput> | Prisma.VendorInvoiceCreateWithoutVendorInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput | Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.VendorInvoiceCreateManyVendorInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutVendorInput, Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput> | Prisma.VendorInvoiceCreateWithoutVendorInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput | Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutVendorInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.VendorInvoiceCreateManyVendorInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutVendorInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutVendorInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type VendorInvoiceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutVendorInput, Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput> | Prisma.VendorInvoiceCreateWithoutVendorInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput | Prisma.VendorInvoiceCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutVendorInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.VendorInvoiceCreateManyVendorInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutVendorInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutVendorInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type VendorInvoiceCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput> | Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput | Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.VendorInvoiceCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput> | Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput | Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.VendorInvoiceCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput> | Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput | Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.VendorInvoiceCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput> | Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput | Prisma.VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.VendorInvoiceCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type EnumVendorInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.VendorInvoiceStatus;
};
export type VendorInvoiceCreateNestedOneWithoutPaymentBatchLinesInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPaymentBatchLinesInput, Prisma.VendorInvoiceUncheckedCreateWithoutPaymentBatchLinesInput>;
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutPaymentBatchLinesInput;
    connect?: Prisma.VendorInvoiceWhereUniqueInput;
};
export type VendorInvoiceUpdateOneRequiredWithoutPaymentBatchLinesNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPaymentBatchLinesInput, Prisma.VendorInvoiceUncheckedCreateWithoutPaymentBatchLinesInput>;
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutPaymentBatchLinesInput;
    upsert?: Prisma.VendorInvoiceUpsertWithoutPaymentBatchLinesInput;
    connect?: Prisma.VendorInvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorInvoiceUpdateToOneWithWhereWithoutPaymentBatchLinesInput, Prisma.VendorInvoiceUpdateWithoutPaymentBatchLinesInput>, Prisma.VendorInvoiceUncheckedUpdateWithoutPaymentBatchLinesInput>;
};
export type VendorInvoiceCreateNestedManyWithoutRecognizedVatRateVersionInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput> | Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput[];
    createMany?: Prisma.VendorInvoiceCreateManyRecognizedVatRateVersionInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUncheckedCreateNestedManyWithoutRecognizedVatRateVersionInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput> | Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput[];
    createMany?: Prisma.VendorInvoiceCreateManyRecognizedVatRateVersionInputEnvelope;
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
};
export type VendorInvoiceUpdateManyWithoutRecognizedVatRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput> | Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutRecognizedVatRateVersionInput[];
    createMany?: Prisma.VendorInvoiceCreateManyRecognizedVatRateVersionInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutRecognizedVatRateVersionInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutRecognizedVatRateVersionInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput> | Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput[] | Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput[];
    connectOrCreate?: Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput[];
    upsert?: Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceUpsertWithWhereUniqueWithoutRecognizedVatRateVersionInput[];
    createMany?: Prisma.VendorInvoiceCreateManyRecognizedVatRateVersionInputEnvelope;
    set?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    disconnect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    delete?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    connect?: Prisma.VendorInvoiceWhereUniqueInput | Prisma.VendorInvoiceWhereUniqueInput[];
    update?: Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceUpdateWithWhereUniqueWithoutRecognizedVatRateVersionInput[];
    updateMany?: Prisma.VendorInvoiceUpdateManyWithWhereWithoutRecognizedVatRateVersionInput | Prisma.VendorInvoiceUpdateManyWithWhereWithoutRecognizedVatRateVersionInput[];
    deleteMany?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
};
export type VendorInvoiceCreateWithoutCreatedByInput = {
    id?: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutVendorInvoicesInput;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorInvoicesInput;
    paymentBatchLines?: Prisma.PaymentBatchLineCreateNestedManyWithoutVendorInvoiceInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutRecognizedVatInvoicesInput;
};
export type VendorInvoiceUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdAt?: Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutVendorInvoiceInput;
};
export type VendorInvoiceCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput>;
};
export type VendorInvoiceCreateManyCreatedByInputEnvelope = {
    data: Prisma.VendorInvoiceCreateManyCreatedByInput | Prisma.VendorInvoiceCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type VendorInvoiceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedCreateWithoutCreatedByInput>;
};
export type VendorInvoiceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutCreatedByInput, Prisma.VendorInvoiceUncheckedUpdateWithoutCreatedByInput>;
};
export type VendorInvoiceUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.VendorInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateManyMutationInput, Prisma.VendorInvoiceUncheckedUpdateManyWithoutCreatedByInput>;
};
export type VendorInvoiceScalarWhereInput = {
    AND?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
    OR?: Prisma.VendorInvoiceScalarWhereInput[];
    NOT?: Prisma.VendorInvoiceScalarWhereInput | Prisma.VendorInvoiceScalarWhereInput[];
    id?: Prisma.UuidFilter<"VendorInvoice"> | string;
    purchaseOrderId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    vendorId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"VendorInvoice"> | string;
    invoiceAmountKobo?: Prisma.BigIntFilter<"VendorInvoice"> | bigint | number;
    invoiceDate?: Prisma.DateTimeFilter<"VendorInvoice"> | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFilter<"VendorInvoice"> | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.StringNullableFilter<"VendorInvoice"> | string | null;
    matchedAt?: Prisma.DateTimeNullableFilter<"VendorInvoice"> | Date | string | null;
    journalEntryId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    paidJournalEntryId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    vatKobo?: Prisma.BigIntFilter<"VendorInvoice"> | bigint | number;
    recognizedVatRateVersionId?: Prisma.UuidNullableFilter<"VendorInvoice"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"VendorInvoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"VendorInvoice"> | Date | string;
};
export type VendorInvoiceCreateWithoutVendorInput = {
    id?: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutVendorInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorInvoicesCreatedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineCreateNestedManyWithoutVendorInvoiceInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutRecognizedVatInvoicesInput;
};
export type VendorInvoiceUncheckedCreateWithoutVendorInput = {
    id?: string;
    purchaseOrderId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutVendorInvoiceInput;
};
export type VendorInvoiceCreateOrConnectWithoutVendorInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutVendorInput, Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput>;
};
export type VendorInvoiceCreateManyVendorInputEnvelope = {
    data: Prisma.VendorInvoiceCreateManyVendorInput | Prisma.VendorInvoiceCreateManyVendorInput[];
    skipDuplicates?: boolean;
};
export type VendorInvoiceUpsertWithWhereUniqueWithoutVendorInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutVendorInput, Prisma.VendorInvoiceUncheckedUpdateWithoutVendorInput>;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutVendorInput, Prisma.VendorInvoiceUncheckedCreateWithoutVendorInput>;
};
export type VendorInvoiceUpdateWithWhereUniqueWithoutVendorInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutVendorInput, Prisma.VendorInvoiceUncheckedUpdateWithoutVendorInput>;
};
export type VendorInvoiceUpdateManyWithWhereWithoutVendorInput = {
    where: Prisma.VendorInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateManyMutationInput, Prisma.VendorInvoiceUncheckedUpdateManyWithoutVendorInput>;
};
export type VendorInvoiceCreateWithoutPurchaseOrderInput = {
    id?: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdAt?: Date | string;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorInvoicesCreatedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineCreateNestedManyWithoutVendorInvoiceInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutRecognizedVatInvoicesInput;
};
export type VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutVendorInvoiceInput;
};
export type VendorInvoiceCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput>;
};
export type VendorInvoiceCreateManyPurchaseOrderInputEnvelope = {
    data: Prisma.VendorInvoiceCreateManyPurchaseOrderInput | Prisma.VendorInvoiceCreateManyPurchaseOrderInput[];
    skipDuplicates?: boolean;
};
export type VendorInvoiceUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedCreateWithoutPurchaseOrderInput>;
};
export type VendorInvoiceUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutPurchaseOrderInput, Prisma.VendorInvoiceUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type VendorInvoiceUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: Prisma.VendorInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateManyMutationInput, Prisma.VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderInput>;
};
export type VendorInvoiceCreateWithoutPaymentBatchLinesInput = {
    id?: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutVendorInvoicesInput;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorInvoicesCreatedInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutRecognizedVatInvoicesInput;
};
export type VendorInvoiceUncheckedCreateWithoutPaymentBatchLinesInput = {
    id?: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type VendorInvoiceCreateOrConnectWithoutPaymentBatchLinesInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPaymentBatchLinesInput, Prisma.VendorInvoiceUncheckedCreateWithoutPaymentBatchLinesInput>;
};
export type VendorInvoiceUpsertWithoutPaymentBatchLinesInput = {
    update: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutPaymentBatchLinesInput, Prisma.VendorInvoiceUncheckedUpdateWithoutPaymentBatchLinesInput>;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutPaymentBatchLinesInput, Prisma.VendorInvoiceUncheckedCreateWithoutPaymentBatchLinesInput>;
    where?: Prisma.VendorInvoiceWhereInput;
};
export type VendorInvoiceUpdateToOneWithWhereWithoutPaymentBatchLinesInput = {
    where?: Prisma.VendorInvoiceWhereInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutPaymentBatchLinesInput, Prisma.VendorInvoiceUncheckedUpdateWithoutPaymentBatchLinesInput>;
};
export type VendorInvoiceUpdateWithoutPaymentBatchLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorInvoicesCreatedNestedInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutRecognizedVatInvoicesNestedInput;
};
export type VendorInvoiceUncheckedUpdateWithoutPaymentBatchLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorInvoiceCreateWithoutRecognizedVatRateVersionInput = {
    id?: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutVendorInvoicesInput;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorInvoicesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutVendorInvoicesCreatedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineCreateNestedManyWithoutVendorInvoiceInput;
};
export type VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput = {
    id?: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdByUserId: string;
    createdAt?: Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedCreateNestedManyWithoutVendorInvoiceInput;
};
export type VendorInvoiceCreateOrConnectWithoutRecognizedVatRateVersionInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput>;
};
export type VendorInvoiceCreateManyRecognizedVatRateVersionInputEnvelope = {
    data: Prisma.VendorInvoiceCreateManyRecognizedVatRateVersionInput | Prisma.VendorInvoiceCreateManyRecognizedVatRateVersionInput[];
    skipDuplicates?: boolean;
};
export type VendorInvoiceUpsertWithWhereUniqueWithoutRecognizedVatRateVersionInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedUpdateWithoutRecognizedVatRateVersionInput>;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedCreateWithoutRecognizedVatRateVersionInput>;
};
export type VendorInvoiceUpdateWithWhereUniqueWithoutRecognizedVatRateVersionInput = {
    where: Prisma.VendorInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateWithoutRecognizedVatRateVersionInput, Prisma.VendorInvoiceUncheckedUpdateWithoutRecognizedVatRateVersionInput>;
};
export type VendorInvoiceUpdateManyWithWhereWithoutRecognizedVatRateVersionInput = {
    where: Prisma.VendorInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateManyMutationInput, Prisma.VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionInput>;
};
export type VendorInvoiceCreateManyCreatedByInput = {
    id?: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdAt?: Date | string;
};
export type VendorInvoiceUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineUpdateManyWithoutVendorInvoiceNestedInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutRecognizedVatInvoicesNestedInput;
};
export type VendorInvoiceUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceNestedInput;
};
export type VendorInvoiceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorInvoiceCreateManyVendorInput = {
    id?: string;
    purchaseOrderId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type VendorInvoiceUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorInvoicesCreatedNestedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineUpdateManyWithoutVendorInvoiceNestedInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutRecognizedVatInvoicesNestedInput;
};
export type VendorInvoiceUncheckedUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceNestedInput;
};
export type VendorInvoiceUncheckedUpdateManyWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorInvoiceCreateManyPurchaseOrderInput = {
    id?: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    recognizedVatRateVersionId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type VendorInvoiceUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorInvoicesCreatedNestedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineUpdateManyWithoutVendorInvoiceNestedInput;
    recognizedVatRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutRecognizedVatInvoicesNestedInput;
};
export type VendorInvoiceUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceNestedInput;
};
export type VendorInvoiceUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recognizedVatRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorInvoiceCreateManyRecognizedVatRateVersionInput = {
    id?: string;
    purchaseOrderId: string;
    vendorId: string;
    invoiceNumber: string;
    invoiceAmountKobo: bigint | number;
    invoiceDate: Date | string;
    status?: $Enums.VendorInvoiceStatus;
    matchVarianceNote?: string | null;
    matchedAt?: Date | string | null;
    journalEntryId?: string | null;
    paidJournalEntryId?: string | null;
    vatKobo?: bigint | number;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type VendorInvoiceUpdateWithoutRecognizedVatRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorInvoicesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutVendorInvoicesCreatedNestedInput;
    paymentBatchLines?: Prisma.PaymentBatchLineUpdateManyWithoutVendorInvoiceNestedInput;
};
export type VendorInvoiceUncheckedUpdateWithoutRecognizedVatRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentBatchLines?: Prisma.PaymentBatchLineUncheckedUpdateManyWithoutVendorInvoiceNestedInput;
};
export type VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    invoiceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumVendorInvoiceStatusFieldUpdateOperationsInput | $Enums.VendorInvoiceStatus;
    matchVarianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorInvoiceCountOutputType = {
    paymentBatchLines: number;
};
export type VendorInvoiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paymentBatchLines?: boolean | VendorInvoiceCountOutputTypeCountPaymentBatchLinesArgs;
};
export type VendorInvoiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceCountOutputTypeSelect<ExtArgs> | null;
};
export type VendorInvoiceCountOutputTypeCountPaymentBatchLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentBatchLineWhereInput;
};
export type VendorInvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    vendorId?: boolean;
    invoiceNumber?: boolean;
    invoiceAmountKobo?: boolean;
    invoiceDate?: boolean;
    status?: boolean;
    matchVarianceNote?: boolean;
    matchedAt?: boolean;
    journalEntryId?: boolean;
    paidJournalEntryId?: boolean;
    vatKobo?: boolean;
    recognizedVatRateVersionId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    paymentBatchLines?: boolean | Prisma.VendorInvoice$paymentBatchLinesArgs<ExtArgs>;
    recognizedVatRateVersion?: boolean | Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorInvoiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendorInvoice"]>;
export type VendorInvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    vendorId?: boolean;
    invoiceNumber?: boolean;
    invoiceAmountKobo?: boolean;
    invoiceDate?: boolean;
    status?: boolean;
    matchVarianceNote?: boolean;
    matchedAt?: boolean;
    journalEntryId?: boolean;
    paidJournalEntryId?: boolean;
    vatKobo?: boolean;
    recognizedVatRateVersionId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    recognizedVatRateVersion?: boolean | Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs>;
}, ExtArgs["result"]["vendorInvoice"]>;
export type VendorInvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    vendorId?: boolean;
    invoiceNumber?: boolean;
    invoiceAmountKobo?: boolean;
    invoiceDate?: boolean;
    status?: boolean;
    matchVarianceNote?: boolean;
    matchedAt?: boolean;
    journalEntryId?: boolean;
    paidJournalEntryId?: boolean;
    vatKobo?: boolean;
    recognizedVatRateVersionId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    recognizedVatRateVersion?: boolean | Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs>;
}, ExtArgs["result"]["vendorInvoice"]>;
export type VendorInvoiceSelectScalar = {
    id?: boolean;
    purchaseOrderId?: boolean;
    vendorId?: boolean;
    invoiceNumber?: boolean;
    invoiceAmountKobo?: boolean;
    invoiceDate?: boolean;
    status?: boolean;
    matchVarianceNote?: boolean;
    matchedAt?: boolean;
    journalEntryId?: boolean;
    paidJournalEntryId?: boolean;
    vatKobo?: boolean;
    recognizedVatRateVersionId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type VendorInvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purchaseOrderId" | "vendorId" | "invoiceNumber" | "invoiceAmountKobo" | "invoiceDate" | "status" | "matchVarianceNote" | "matchedAt" | "journalEntryId" | "paidJournalEntryId" | "vatKobo" | "recognizedVatRateVersionId" | "createdByUserId" | "createdAt", ExtArgs["result"]["vendorInvoice"]>;
export type VendorInvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    paymentBatchLines?: boolean | Prisma.VendorInvoice$paymentBatchLinesArgs<ExtArgs>;
    recognizedVatRateVersion?: boolean | Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorInvoiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VendorInvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    recognizedVatRateVersion?: boolean | Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs>;
};
export type VendorInvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    recognizedVatRateVersion?: boolean | Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs>;
};
export type $VendorInvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VendorInvoice";
    objects: {
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>;
        vendor: Prisma.$VendorPayload<ExtArgs>;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        paymentBatchLines: Prisma.$PaymentBatchLinePayload<ExtArgs>[];
        recognizedVatRateVersion: Prisma.$TaxRateVersionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        purchaseOrderId: string;
        vendorId: string;
        invoiceNumber: string;
        invoiceAmountKobo: bigint;
        invoiceDate: Date;
        status: $Enums.VendorInvoiceStatus;
        matchVarianceNote: string | null;
        matchedAt: Date | null;
        journalEntryId: string | null;
        paidJournalEntryId: string | null;
        vatKobo: bigint;
        recognizedVatRateVersionId: string | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["vendorInvoice"]>;
    composites: {};
};
export type VendorInvoiceGetPayload<S extends boolean | null | undefined | VendorInvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload, S>;
export type VendorInvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VendorInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VendorInvoiceCountAggregateInputType | true;
};
export interface VendorInvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VendorInvoice'];
        meta: {
            name: 'VendorInvoice';
        };
    };
    findUnique<T extends VendorInvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, VendorInvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VendorInvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VendorInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VendorInvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, VendorInvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VendorInvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VendorInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VendorInvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, VendorInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VendorInvoiceCreateArgs>(args: Prisma.SelectSubset<T, VendorInvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VendorInvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, VendorInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VendorInvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VendorInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VendorInvoiceDeleteArgs>(args: Prisma.SelectSubset<T, VendorInvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VendorInvoiceUpdateArgs>(args: Prisma.SelectSubset<T, VendorInvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VendorInvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, VendorInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VendorInvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, VendorInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VendorInvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VendorInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VendorInvoiceUpsertArgs>(args: Prisma.SelectSubset<T, VendorInvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__VendorInvoiceClient<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VendorInvoiceCountArgs>(args?: Prisma.Subset<T, VendorInvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VendorInvoiceCountAggregateOutputType> : number>;
    aggregate<T extends VendorInvoiceAggregateArgs>(args: Prisma.Subset<T, VendorInvoiceAggregateArgs>): Prisma.PrismaPromise<GetVendorInvoiceAggregateType<T>>;
    groupBy<T extends VendorInvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VendorInvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: VendorInvoiceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VendorInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VendorInvoiceFieldRefs;
}
export interface Prisma__VendorInvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchaseOrder<T extends Prisma.PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vendor<T extends Prisma.VendorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    paymentBatchLines<T extends Prisma.VendorInvoice$paymentBatchLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorInvoice$paymentBatchLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentBatchLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    recognizedVatRateVersion<T extends Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorInvoice$recognizedVatRateVersionArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VendorInvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly purchaseOrderId: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly vendorId: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly invoiceNumber: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly invoiceAmountKobo: Prisma.FieldRef<"VendorInvoice", 'BigInt'>;
    readonly invoiceDate: Prisma.FieldRef<"VendorInvoice", 'DateTime'>;
    readonly status: Prisma.FieldRef<"VendorInvoice", 'VendorInvoiceStatus'>;
    readonly matchVarianceNote: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly matchedAt: Prisma.FieldRef<"VendorInvoice", 'DateTime'>;
    readonly journalEntryId: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly paidJournalEntryId: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly vatKobo: Prisma.FieldRef<"VendorInvoice", 'BigInt'>;
    readonly recognizedVatRateVersionId: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"VendorInvoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"VendorInvoice", 'DateTime'>;
}
export type VendorInvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where: Prisma.VendorInvoiceWhereUniqueInput;
};
export type VendorInvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where: Prisma.VendorInvoiceWhereUniqueInput;
};
export type VendorInvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where?: Prisma.VendorInvoiceWhereInput;
    orderBy?: Prisma.VendorInvoiceOrderByWithRelationInput | Prisma.VendorInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.VendorInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorInvoiceScalarFieldEnum | Prisma.VendorInvoiceScalarFieldEnum[];
};
export type VendorInvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where?: Prisma.VendorInvoiceWhereInput;
    orderBy?: Prisma.VendorInvoiceOrderByWithRelationInput | Prisma.VendorInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.VendorInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorInvoiceScalarFieldEnum | Prisma.VendorInvoiceScalarFieldEnum[];
};
export type VendorInvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where?: Prisma.VendorInvoiceWhereInput;
    orderBy?: Prisma.VendorInvoiceOrderByWithRelationInput | Prisma.VendorInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.VendorInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorInvoiceScalarFieldEnum | Prisma.VendorInvoiceScalarFieldEnum[];
};
export type VendorInvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorInvoiceCreateInput, Prisma.VendorInvoiceUncheckedCreateInput>;
};
export type VendorInvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VendorInvoiceCreateManyInput | Prisma.VendorInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VendorInvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    data: Prisma.VendorInvoiceCreateManyInput | Prisma.VendorInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VendorInvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VendorInvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateInput, Prisma.VendorInvoiceUncheckedUpdateInput>;
    where: Prisma.VendorInvoiceWhereUniqueInput;
};
export type VendorInvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateManyMutationInput, Prisma.VendorInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.VendorInvoiceWhereInput;
    limit?: number;
};
export type VendorInvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorInvoiceUpdateManyMutationInput, Prisma.VendorInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.VendorInvoiceWhereInput;
    limit?: number;
    include?: Prisma.VendorInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VendorInvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where: Prisma.VendorInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorInvoiceCreateInput, Prisma.VendorInvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VendorInvoiceUpdateInput, Prisma.VendorInvoiceUncheckedUpdateInput>;
};
export type VendorInvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
    where: Prisma.VendorInvoiceWhereUniqueInput;
};
export type VendorInvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorInvoiceWhereInput;
    limit?: number;
};
export type VendorInvoice$paymentBatchLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentBatchLineSelect<ExtArgs> | null;
    omit?: Prisma.PaymentBatchLineOmit<ExtArgs> | null;
    include?: Prisma.PaymentBatchLineInclude<ExtArgs> | null;
    where?: Prisma.PaymentBatchLineWhereInput;
    orderBy?: Prisma.PaymentBatchLineOrderByWithRelationInput | Prisma.PaymentBatchLineOrderByWithRelationInput[];
    cursor?: Prisma.PaymentBatchLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentBatchLineScalarFieldEnum | Prisma.PaymentBatchLineScalarFieldEnum[];
};
export type VendorInvoice$recognizedVatRateVersionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type VendorInvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.VendorInvoiceOmit<ExtArgs> | null;
    include?: Prisma.VendorInvoiceInclude<ExtArgs> | null;
};
