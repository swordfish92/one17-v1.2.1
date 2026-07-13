import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaxRateVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxRateVersionPayload>;
export type AggregateTaxRateVersion = {
    _count: TaxRateVersionCountAggregateOutputType | null;
    _avg: TaxRateVersionAvgAggregateOutputType | null;
    _sum: TaxRateVersionSumAggregateOutputType | null;
    _min: TaxRateVersionMinAggregateOutputType | null;
    _max: TaxRateVersionMaxAggregateOutputType | null;
};
export type TaxRateVersionAvgAggregateOutputType = {
    version: number | null;
};
export type TaxRateVersionSumAggregateOutputType = {
    version: number | null;
};
export type TaxRateVersionMinAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    effectiveFrom: Date | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type TaxRateVersionMaxAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    effectiveFrom: Date | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type TaxRateVersionCountAggregateOutputType = {
    id: number;
    taxType: number;
    version: number;
    rates: number;
    status: number;
    effectiveFrom: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type TaxRateVersionAvgAggregateInputType = {
    version?: true;
};
export type TaxRateVersionSumAggregateInputType = {
    version?: true;
};
export type TaxRateVersionMinAggregateInputType = {
    id?: true;
    taxType?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type TaxRateVersionMaxAggregateInputType = {
    id?: true;
    taxType?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type TaxRateVersionCountAggregateInputType = {
    id?: true;
    taxType?: true;
    version?: true;
    rates?: true;
    status?: true;
    effectiveFrom?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type TaxRateVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRateVersionWhereInput;
    orderBy?: Prisma.TaxRateVersionOrderByWithRelationInput | Prisma.TaxRateVersionOrderByWithRelationInput[];
    cursor?: Prisma.TaxRateVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaxRateVersionCountAggregateInputType;
    _avg?: TaxRateVersionAvgAggregateInputType;
    _sum?: TaxRateVersionSumAggregateInputType;
    _min?: TaxRateVersionMinAggregateInputType;
    _max?: TaxRateVersionMaxAggregateInputType;
};
export type GetTaxRateVersionAggregateType<T extends TaxRateVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxRateVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxRateVersion[P]> : Prisma.GetScalarType<T[P], AggregateTaxRateVersion[P]>;
};
export type TaxRateVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRateVersionWhereInput;
    orderBy?: Prisma.TaxRateVersionOrderByWithAggregationInput | Prisma.TaxRateVersionOrderByWithAggregationInput[];
    by: Prisma.TaxRateVersionScalarFieldEnum[] | Prisma.TaxRateVersionScalarFieldEnum;
    having?: Prisma.TaxRateVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxRateVersionCountAggregateInputType | true;
    _avg?: TaxRateVersionAvgAggregateInputType;
    _sum?: TaxRateVersionSumAggregateInputType;
    _min?: TaxRateVersionMinAggregateInputType;
    _max?: TaxRateVersionMaxAggregateInputType;
};
export type TaxRateVersionGroupByOutputType = {
    id: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: runtime.JsonValue;
    status: $Enums.GovernedItemStatus;
    effectiveFrom: Date;
    proposedByUserId: string;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: TaxRateVersionCountAggregateOutputType | null;
    _avg: TaxRateVersionAvgAggregateOutputType | null;
    _sum: TaxRateVersionSumAggregateOutputType | null;
    _min: TaxRateVersionMinAggregateOutputType | null;
    _max: TaxRateVersionMaxAggregateOutputType | null;
};
export type GetTaxRateVersionGroupByPayload<T extends TaxRateVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxRateVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxRateVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxRateVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxRateVersionGroupByOutputType[P]>;
}>>;
export type TaxRateVersionWhereInput = {
    AND?: Prisma.TaxRateVersionWhereInput | Prisma.TaxRateVersionWhereInput[];
    OR?: Prisma.TaxRateVersionWhereInput[];
    NOT?: Prisma.TaxRateVersionWhereInput | Prisma.TaxRateVersionWhereInput[];
    id?: Prisma.UuidFilter<"TaxRateVersion"> | string;
    taxType?: Prisma.EnumTaxTypeFilter<"TaxRateVersion"> | $Enums.TaxType;
    version?: Prisma.IntFilter<"TaxRateVersion"> | number;
    rates?: Prisma.JsonFilter<"TaxRateVersion">;
    status?: Prisma.EnumGovernedItemStatusFilter<"TaxRateVersion"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFilter<"TaxRateVersion"> | Date | string;
    proposedByUserId?: Prisma.UuidFilter<"TaxRateVersion"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"TaxRateVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"TaxRateVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaxRateVersion"> | Date | string;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    payoutLines?: Prisma.PayoutCompilationLineListRelationFilter;
    recognizedVatInvoices?: Prisma.VendorInvoiceListRelationFilter;
    feeInvoices?: Prisma.FeeInvoiceListRelationFilter;
    stampDutyAssessments?: Prisma.StampDutyAssessmentListRelationFilter;
};
export type TaxRateVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    rates?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
    payoutLines?: Prisma.PayoutCompilationLineOrderByRelationAggregateInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceOrderByRelationAggregateInput;
    feeInvoices?: Prisma.FeeInvoiceOrderByRelationAggregateInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentOrderByRelationAggregateInput;
};
export type TaxRateVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    taxType_version?: Prisma.TaxRateVersionTaxTypeVersionCompoundUniqueInput;
    AND?: Prisma.TaxRateVersionWhereInput | Prisma.TaxRateVersionWhereInput[];
    OR?: Prisma.TaxRateVersionWhereInput[];
    NOT?: Prisma.TaxRateVersionWhereInput | Prisma.TaxRateVersionWhereInput[];
    taxType?: Prisma.EnumTaxTypeFilter<"TaxRateVersion"> | $Enums.TaxType;
    version?: Prisma.IntFilter<"TaxRateVersion"> | number;
    rates?: Prisma.JsonFilter<"TaxRateVersion">;
    status?: Prisma.EnumGovernedItemStatusFilter<"TaxRateVersion"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFilter<"TaxRateVersion"> | Date | string;
    proposedByUserId?: Prisma.UuidFilter<"TaxRateVersion"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"TaxRateVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaxRateVersion"> | Date | string;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    payoutLines?: Prisma.PayoutCompilationLineListRelationFilter;
    recognizedVatInvoices?: Prisma.VendorInvoiceListRelationFilter;
    feeInvoices?: Prisma.FeeInvoiceListRelationFilter;
    stampDutyAssessments?: Prisma.StampDutyAssessmentListRelationFilter;
}, "id" | "workflowInstanceId" | "taxType_version">;
export type TaxRateVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    rates?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TaxRateVersionCountOrderByAggregateInput;
    _avg?: Prisma.TaxRateVersionAvgOrderByAggregateInput;
    _max?: Prisma.TaxRateVersionMaxOrderByAggregateInput;
    _min?: Prisma.TaxRateVersionMinOrderByAggregateInput;
    _sum?: Prisma.TaxRateVersionSumOrderByAggregateInput;
};
export type TaxRateVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxRateVersionScalarWhereWithAggregatesInput | Prisma.TaxRateVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxRateVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxRateVersionScalarWhereWithAggregatesInput | Prisma.TaxRateVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaxRateVersion"> | string;
    taxType?: Prisma.EnumTaxTypeWithAggregatesFilter<"TaxRateVersion"> | $Enums.TaxType;
    version?: Prisma.IntWithAggregatesFilter<"TaxRateVersion"> | number;
    rates?: Prisma.JsonWithAggregatesFilter<"TaxRateVersion">;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"TaxRateVersion"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"TaxRateVersion"> | Date | string;
    proposedByUserId?: Prisma.UuidWithAggregatesFilter<"TaxRateVersion"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"TaxRateVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"TaxRateVersion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaxRateVersion"> | Date | string;
};
export type TaxRateVersionCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutTaxRateVersionsProposedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRateVersionInput;
    payoutLines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionUncheckedCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutTaxRateVersionsProposedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRateVersionNestedInput;
    payoutLines?: Prisma.PayoutCompilationLineUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionCreateManyInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TaxRateVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRateVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRateVersionListRelationFilter = {
    every?: Prisma.TaxRateVersionWhereInput;
    some?: Prisma.TaxRateVersionWhereInput;
    none?: Prisma.TaxRateVersionWhereInput;
};
export type TaxRateVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaxRateVersionNullableScalarRelationFilter = {
    is?: Prisma.TaxRateVersionWhereInput | null;
    isNot?: Prisma.TaxRateVersionWhereInput | null;
};
export type TaxRateVersionTaxTypeVersionCompoundUniqueInput = {
    taxType: $Enums.TaxType;
    version: number;
};
export type TaxRateVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    rates?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRateVersionAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type TaxRateVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRateVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRateVersionSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type TaxRateVersionScalarRelationFilter = {
    is?: Prisma.TaxRateVersionWhereInput;
    isNot?: Prisma.TaxRateVersionWhereInput;
};
export type TaxRateVersionCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput> | Prisma.TaxRateVersionCreateWithoutProposedByInput[] | Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput | Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.TaxRateVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
};
export type TaxRateVersionUncheckedCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput> | Prisma.TaxRateVersionCreateWithoutProposedByInput[] | Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput | Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.TaxRateVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
};
export type TaxRateVersionUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput> | Prisma.TaxRateVersionCreateWithoutProposedByInput[] | Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput | Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.TaxRateVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.TaxRateVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.TaxRateVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    disconnect?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    delete?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    connect?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    update?: Prisma.TaxRateVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.TaxRateVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.TaxRateVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.TaxRateVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.TaxRateVersionScalarWhereInput | Prisma.TaxRateVersionScalarWhereInput[];
};
export type TaxRateVersionUncheckedUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput> | Prisma.TaxRateVersionCreateWithoutProposedByInput[] | Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput | Prisma.TaxRateVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.TaxRateVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.TaxRateVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.TaxRateVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    disconnect?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    delete?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    connect?: Prisma.TaxRateVersionWhereUniqueInput | Prisma.TaxRateVersionWhereUniqueInput[];
    update?: Prisma.TaxRateVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.TaxRateVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.TaxRateVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.TaxRateVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.TaxRateVersionScalarWhereInput | Prisma.TaxRateVersionScalarWhereInput[];
};
export type TaxRateVersionCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.TaxRateVersionUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.TaxRateVersionWhereInput | boolean;
    delete?: Prisma.TaxRateVersionWhereInput | boolean;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRateVersionUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUpdateWithoutWorkflowInstanceInput>, Prisma.TaxRateVersionUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type TaxRateVersionUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.TaxRateVersionUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.TaxRateVersionWhereInput | boolean;
    delete?: Prisma.TaxRateVersionWhereInput | boolean;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRateVersionUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUpdateWithoutWorkflowInstanceInput>, Prisma.TaxRateVersionUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type TaxRateVersionCreateNestedOneWithoutRecognizedVatInvoicesInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutRecognizedVatInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutRecognizedVatInvoicesInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutRecognizedVatInvoicesInput;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionUpdateOneWithoutRecognizedVatInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutRecognizedVatInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutRecognizedVatInvoicesInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutRecognizedVatInvoicesInput;
    upsert?: Prisma.TaxRateVersionUpsertWithoutRecognizedVatInvoicesInput;
    disconnect?: Prisma.TaxRateVersionWhereInput | boolean;
    delete?: Prisma.TaxRateVersionWhereInput | boolean;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRateVersionUpdateToOneWithWhereWithoutRecognizedVatInvoicesInput, Prisma.TaxRateVersionUpdateWithoutRecognizedVatInvoicesInput>, Prisma.TaxRateVersionUncheckedUpdateWithoutRecognizedVatInvoicesInput>;
};
export type TaxRateVersionCreateNestedOneWithoutPayoutLinesInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutPayoutLinesInput, Prisma.TaxRateVersionUncheckedCreateWithoutPayoutLinesInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutPayoutLinesInput;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionUpdateOneWithoutPayoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutPayoutLinesInput, Prisma.TaxRateVersionUncheckedCreateWithoutPayoutLinesInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutPayoutLinesInput;
    upsert?: Prisma.TaxRateVersionUpsertWithoutPayoutLinesInput;
    disconnect?: Prisma.TaxRateVersionWhereInput | boolean;
    delete?: Prisma.TaxRateVersionWhereInput | boolean;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRateVersionUpdateToOneWithWhereWithoutPayoutLinesInput, Prisma.TaxRateVersionUpdateWithoutPayoutLinesInput>, Prisma.TaxRateVersionUncheckedUpdateWithoutPayoutLinesInput>;
};
export type EnumTaxTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaxType;
};
export type TaxRateVersionCreateNestedOneWithoutFeeInvoicesInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutFeeInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutFeeInvoicesInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutFeeInvoicesInput;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionUpdateOneWithoutFeeInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutFeeInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutFeeInvoicesInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutFeeInvoicesInput;
    upsert?: Prisma.TaxRateVersionUpsertWithoutFeeInvoicesInput;
    disconnect?: Prisma.TaxRateVersionWhereInput | boolean;
    delete?: Prisma.TaxRateVersionWhereInput | boolean;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRateVersionUpdateToOneWithWhereWithoutFeeInvoicesInput, Prisma.TaxRateVersionUpdateWithoutFeeInvoicesInput>, Prisma.TaxRateVersionUncheckedUpdateWithoutFeeInvoicesInput>;
};
export type TaxRateVersionCreateNestedOneWithoutStampDutyAssessmentsInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutStampDutyAssessmentsInput, Prisma.TaxRateVersionUncheckedCreateWithoutStampDutyAssessmentsInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutStampDutyAssessmentsInput;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionUpdateOneRequiredWithoutStampDutyAssessmentsNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutStampDutyAssessmentsInput, Prisma.TaxRateVersionUncheckedCreateWithoutStampDutyAssessmentsInput>;
    connectOrCreate?: Prisma.TaxRateVersionCreateOrConnectWithoutStampDutyAssessmentsInput;
    upsert?: Prisma.TaxRateVersionUpsertWithoutStampDutyAssessmentsInput;
    connect?: Prisma.TaxRateVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRateVersionUpdateToOneWithWhereWithoutStampDutyAssessmentsInput, Prisma.TaxRateVersionUpdateWithoutStampDutyAssessmentsInput>, Prisma.TaxRateVersionUncheckedUpdateWithoutStampDutyAssessmentsInput>;
};
export type TaxRateVersionCreateWithoutProposedByInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRateVersionInput;
    payoutLines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionUncheckedCreateWithoutProposedByInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionCreateOrConnectWithoutProposedByInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput>;
};
export type TaxRateVersionCreateManyProposedByInputEnvelope = {
    data: Prisma.TaxRateVersionCreateManyProposedByInput | Prisma.TaxRateVersionCreateManyProposedByInput[];
    skipDuplicates?: boolean;
};
export type TaxRateVersionUpsertWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedUpdateWithoutProposedByInput>;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedCreateWithoutProposedByInput>;
};
export type TaxRateVersionUpdateWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutProposedByInput, Prisma.TaxRateVersionUncheckedUpdateWithoutProposedByInput>;
};
export type TaxRateVersionUpdateManyWithWhereWithoutProposedByInput = {
    where: Prisma.TaxRateVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateManyMutationInput, Prisma.TaxRateVersionUncheckedUpdateManyWithoutProposedByInput>;
};
export type TaxRateVersionScalarWhereInput = {
    AND?: Prisma.TaxRateVersionScalarWhereInput | Prisma.TaxRateVersionScalarWhereInput[];
    OR?: Prisma.TaxRateVersionScalarWhereInput[];
    NOT?: Prisma.TaxRateVersionScalarWhereInput | Prisma.TaxRateVersionScalarWhereInput[];
    id?: Prisma.UuidFilter<"TaxRateVersion"> | string;
    taxType?: Prisma.EnumTaxTypeFilter<"TaxRateVersion"> | $Enums.TaxType;
    version?: Prisma.IntFilter<"TaxRateVersion"> | number;
    rates?: Prisma.JsonFilter<"TaxRateVersion">;
    status?: Prisma.EnumGovernedItemStatusFilter<"TaxRateVersion"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFilter<"TaxRateVersion"> | Date | string;
    proposedByUserId?: Prisma.UuidFilter<"TaxRateVersion"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"TaxRateVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"TaxRateVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaxRateVersion"> | Date | string;
};
export type TaxRateVersionCreateWithoutWorkflowInstanceInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutTaxRateVersionsProposedInput;
    payoutLines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type TaxRateVersionUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type TaxRateVersionUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.TaxRateVersionWhereInput;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutWorkflowInstanceInput, Prisma.TaxRateVersionUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type TaxRateVersionUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutTaxRateVersionsProposedNestedInput;
    payoutLines?: Prisma.PayoutCompilationLineUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionCreateWithoutRecognizedVatInvoicesInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutTaxRateVersionsProposedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRateVersionInput;
    payoutLines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutWhtRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionUncheckedCreateWithoutRecognizedVatInvoicesInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutWhtRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionCreateOrConnectWithoutRecognizedVatInvoicesInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutRecognizedVatInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutRecognizedVatInvoicesInput>;
};
export type TaxRateVersionUpsertWithoutRecognizedVatInvoicesInput = {
    update: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutRecognizedVatInvoicesInput, Prisma.TaxRateVersionUncheckedUpdateWithoutRecognizedVatInvoicesInput>;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutRecognizedVatInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutRecognizedVatInvoicesInput>;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type TaxRateVersionUpdateToOneWithWhereWithoutRecognizedVatInvoicesInput = {
    where?: Prisma.TaxRateVersionWhereInput;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutRecognizedVatInvoicesInput, Prisma.TaxRateVersionUncheckedUpdateWithoutRecognizedVatInvoicesInput>;
};
export type TaxRateVersionUpdateWithoutRecognizedVatInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutTaxRateVersionsProposedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRateVersionNestedInput;
    payoutLines?: Prisma.PayoutCompilationLineUpdateManyWithoutWhtRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateWithoutRecognizedVatInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionCreateWithoutPayoutLinesInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutTaxRateVersionsProposedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionUncheckedCreateWithoutPayoutLinesInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedCreateNestedManyWithoutVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionCreateOrConnectWithoutPayoutLinesInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutPayoutLinesInput, Prisma.TaxRateVersionUncheckedCreateWithoutPayoutLinesInput>;
};
export type TaxRateVersionUpsertWithoutPayoutLinesInput = {
    update: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutPayoutLinesInput, Prisma.TaxRateVersionUncheckedUpdateWithoutPayoutLinesInput>;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutPayoutLinesInput, Prisma.TaxRateVersionUncheckedCreateWithoutPayoutLinesInput>;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type TaxRateVersionUpdateToOneWithWhereWithoutPayoutLinesInput = {
    where?: Prisma.TaxRateVersionWhereInput;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutPayoutLinesInput, Prisma.TaxRateVersionUncheckedUpdateWithoutPayoutLinesInput>;
};
export type TaxRateVersionUpdateWithoutPayoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutTaxRateVersionsProposedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateWithoutPayoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionCreateWithoutFeeInvoicesInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutTaxRateVersionsProposedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRateVersionInput;
    payoutLines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutRecognizedVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionUncheckedCreateWithoutFeeInvoicesInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutRecognizedVatRateVersionInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedCreateNestedManyWithoutTaxRateVersionInput;
};
export type TaxRateVersionCreateOrConnectWithoutFeeInvoicesInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutFeeInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutFeeInvoicesInput>;
};
export type TaxRateVersionUpsertWithoutFeeInvoicesInput = {
    update: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutFeeInvoicesInput, Prisma.TaxRateVersionUncheckedUpdateWithoutFeeInvoicesInput>;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutFeeInvoicesInput, Prisma.TaxRateVersionUncheckedCreateWithoutFeeInvoicesInput>;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type TaxRateVersionUpdateToOneWithWhereWithoutFeeInvoicesInput = {
    where?: Prisma.TaxRateVersionWhereInput;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutFeeInvoicesInput, Prisma.TaxRateVersionUncheckedUpdateWithoutFeeInvoicesInput>;
};
export type TaxRateVersionUpdateWithoutFeeInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutTaxRateVersionsProposedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRateVersionNestedInput;
    payoutLines?: Prisma.PayoutCompilationLineUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateWithoutFeeInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionCreateWithoutStampDutyAssessmentsInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutTaxRateVersionsProposedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRateVersionInput;
    payoutLines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceCreateNestedManyWithoutVatRateVersionInput;
};
export type TaxRateVersionUncheckedCreateWithoutStampDutyAssessmentsInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutWhtRateVersionInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedCreateNestedManyWithoutRecognizedVatRateVersionInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedCreateNestedManyWithoutVatRateVersionInput;
};
export type TaxRateVersionCreateOrConnectWithoutStampDutyAssessmentsInput = {
    where: Prisma.TaxRateVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutStampDutyAssessmentsInput, Prisma.TaxRateVersionUncheckedCreateWithoutStampDutyAssessmentsInput>;
};
export type TaxRateVersionUpsertWithoutStampDutyAssessmentsInput = {
    update: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutStampDutyAssessmentsInput, Prisma.TaxRateVersionUncheckedUpdateWithoutStampDutyAssessmentsInput>;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateWithoutStampDutyAssessmentsInput, Prisma.TaxRateVersionUncheckedCreateWithoutStampDutyAssessmentsInput>;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type TaxRateVersionUpdateToOneWithWhereWithoutStampDutyAssessmentsInput = {
    where?: Prisma.TaxRateVersionWhereInput;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateWithoutStampDutyAssessmentsInput, Prisma.TaxRateVersionUncheckedUpdateWithoutStampDutyAssessmentsInput>;
};
export type TaxRateVersionUpdateWithoutStampDutyAssessmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutTaxRateVersionsProposedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRateVersionNestedInput;
    payoutLines?: Prisma.PayoutCompilationLineUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUpdateManyWithoutVatRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateWithoutStampDutyAssessmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionNestedInput;
};
export type TaxRateVersionCreateManyProposedByInput = {
    id?: string;
    taxType: $Enums.TaxType;
    version: number;
    rates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TaxRateVersionUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRateVersionNestedInput;
    payoutLines?: Prisma.PayoutCompilationLineUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payoutLines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionNestedInput;
    recognizedVatInvoices?: Prisma.VendorInvoiceUncheckedUpdateManyWithoutRecognizedVatRateVersionNestedInput;
    feeInvoices?: Prisma.FeeInvoiceUncheckedUpdateManyWithoutVatRateVersionNestedInput;
    stampDutyAssessments?: Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionNestedInput;
};
export type TaxRateVersionUncheckedUpdateManyWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    rates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRateVersionCountOutputType = {
    payoutLines: number;
    recognizedVatInvoices: number;
    feeInvoices: number;
    stampDutyAssessments: number;
};
export type TaxRateVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payoutLines?: boolean | TaxRateVersionCountOutputTypeCountPayoutLinesArgs;
    recognizedVatInvoices?: boolean | TaxRateVersionCountOutputTypeCountRecognizedVatInvoicesArgs;
    feeInvoices?: boolean | TaxRateVersionCountOutputTypeCountFeeInvoicesArgs;
    stampDutyAssessments?: boolean | TaxRateVersionCountOutputTypeCountStampDutyAssessmentsArgs;
};
export type TaxRateVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type TaxRateVersionCountOutputTypeCountPayoutLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationLineWhereInput;
};
export type TaxRateVersionCountOutputTypeCountRecognizedVatInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorInvoiceWhereInput;
};
export type TaxRateVersionCountOutputTypeCountFeeInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeInvoiceWhereInput;
};
export type TaxRateVersionCountOutputTypeCountStampDutyAssessmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StampDutyAssessmentWhereInput;
};
export type TaxRateVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    version?: boolean;
    rates?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs>;
    payoutLines?: boolean | Prisma.TaxRateVersion$payoutLinesArgs<ExtArgs>;
    recognizedVatInvoices?: boolean | Prisma.TaxRateVersion$recognizedVatInvoicesArgs<ExtArgs>;
    feeInvoices?: boolean | Prisma.TaxRateVersion$feeInvoicesArgs<ExtArgs>;
    stampDutyAssessments?: boolean | Prisma.TaxRateVersion$stampDutyAssessmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaxRateVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxRateVersion"]>;
export type TaxRateVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    version?: boolean;
    rates?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["taxRateVersion"]>;
export type TaxRateVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    version?: boolean;
    rates?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["taxRateVersion"]>;
export type TaxRateVersionSelectScalar = {
    id?: boolean;
    taxType?: boolean;
    version?: boolean;
    rates?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type TaxRateVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taxType" | "version" | "rates" | "status" | "effectiveFrom" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["taxRateVersion"]>;
export type TaxRateVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs>;
    payoutLines?: boolean | Prisma.TaxRateVersion$payoutLinesArgs<ExtArgs>;
    recognizedVatInvoices?: boolean | Prisma.TaxRateVersion$recognizedVatInvoicesArgs<ExtArgs>;
    feeInvoices?: boolean | Prisma.TaxRateVersion$feeInvoicesArgs<ExtArgs>;
    stampDutyAssessments?: boolean | Prisma.TaxRateVersion$stampDutyAssessmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaxRateVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TaxRateVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs>;
};
export type TaxRateVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs>;
};
export type $TaxRateVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxRateVersion";
    objects: {
        proposedBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
        payoutLines: Prisma.$PayoutCompilationLinePayload<ExtArgs>[];
        recognizedVatInvoices: Prisma.$VendorInvoicePayload<ExtArgs>[];
        feeInvoices: Prisma.$FeeInvoicePayload<ExtArgs>[];
        stampDutyAssessments: Prisma.$StampDutyAssessmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taxType: $Enums.TaxType;
        version: number;
        rates: runtime.JsonValue;
        status: $Enums.GovernedItemStatus;
        effectiveFrom: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["taxRateVersion"]>;
    composites: {};
};
export type TaxRateVersionGetPayload<S extends boolean | null | undefined | TaxRateVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload, S>;
export type TaxRateVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxRateVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxRateVersionCountAggregateInputType | true;
};
export interface TaxRateVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxRateVersion'];
        meta: {
            name: 'TaxRateVersion';
        };
    };
    findUnique<T extends TaxRateVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxRateVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaxRateVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxRateVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaxRateVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxRateVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaxRateVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxRateVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaxRateVersionFindManyArgs>(args?: Prisma.SelectSubset<T, TaxRateVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaxRateVersionCreateArgs>(args: Prisma.SelectSubset<T, TaxRateVersionCreateArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaxRateVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxRateVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaxRateVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxRateVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaxRateVersionDeleteArgs>(args: Prisma.SelectSubset<T, TaxRateVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaxRateVersionUpdateArgs>(args: Prisma.SelectSubset<T, TaxRateVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaxRateVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxRateVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaxRateVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxRateVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaxRateVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxRateVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaxRateVersionUpsertArgs>(args: Prisma.SelectSubset<T, TaxRateVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaxRateVersionCountArgs>(args?: Prisma.Subset<T, TaxRateVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxRateVersionCountAggregateOutputType> : number>;
    aggregate<T extends TaxRateVersionAggregateArgs>(args: Prisma.Subset<T, TaxRateVersionAggregateArgs>): Prisma.PrismaPromise<GetTaxRateVersionAggregateType<T>>;
    groupBy<T extends TaxRateVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxRateVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxRateVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxRateVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxRateVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaxRateVersionFieldRefs;
}
export interface Prisma__TaxRateVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRateVersion$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payoutLines<T extends Prisma.TaxRateVersion$payoutLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRateVersion$payoutLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    recognizedVatInvoices<T extends Prisma.TaxRateVersion$recognizedVatInvoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRateVersion$recognizedVatInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feeInvoices<T extends Prisma.TaxRateVersion$feeInvoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRateVersion$feeInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stampDutyAssessments<T extends Prisma.TaxRateVersion$stampDutyAssessmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRateVersion$stampDutyAssessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaxRateVersionFieldRefs {
    readonly id: Prisma.FieldRef<"TaxRateVersion", 'String'>;
    readonly taxType: Prisma.FieldRef<"TaxRateVersion", 'TaxType'>;
    readonly version: Prisma.FieldRef<"TaxRateVersion", 'Int'>;
    readonly rates: Prisma.FieldRef<"TaxRateVersion", 'Json'>;
    readonly status: Prisma.FieldRef<"TaxRateVersion", 'GovernedItemStatus'>;
    readonly effectiveFrom: Prisma.FieldRef<"TaxRateVersion", 'DateTime'>;
    readonly proposedByUserId: Prisma.FieldRef<"TaxRateVersion", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"TaxRateVersion", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"TaxRateVersion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TaxRateVersion", 'DateTime'>;
}
export type TaxRateVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where?: Prisma.TaxRateVersionWhereInput;
    orderBy?: Prisma.TaxRateVersionOrderByWithRelationInput | Prisma.TaxRateVersionOrderByWithRelationInput[];
    cursor?: Prisma.TaxRateVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRateVersionScalarFieldEnum | Prisma.TaxRateVersionScalarFieldEnum[];
};
export type TaxRateVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where?: Prisma.TaxRateVersionWhereInput;
    orderBy?: Prisma.TaxRateVersionOrderByWithRelationInput | Prisma.TaxRateVersionOrderByWithRelationInput[];
    cursor?: Prisma.TaxRateVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRateVersionScalarFieldEnum | Prisma.TaxRateVersionScalarFieldEnum[];
};
export type TaxRateVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where?: Prisma.TaxRateVersionWhereInput;
    orderBy?: Prisma.TaxRateVersionOrderByWithRelationInput | Prisma.TaxRateVersionOrderByWithRelationInput[];
    cursor?: Prisma.TaxRateVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRateVersionScalarFieldEnum | Prisma.TaxRateVersionScalarFieldEnum[];
};
export type TaxRateVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRateVersionCreateInput, Prisma.TaxRateVersionUncheckedCreateInput>;
};
export type TaxRateVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaxRateVersionCreateManyInput | Prisma.TaxRateVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxRateVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    data: Prisma.TaxRateVersionCreateManyInput | Prisma.TaxRateVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaxRateVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaxRateVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateInput, Prisma.TaxRateVersionUncheckedUpdateInput>;
    where: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateManyMutationInput, Prisma.TaxRateVersionUncheckedUpdateManyInput>;
    where?: Prisma.TaxRateVersionWhereInput;
    limit?: number;
};
export type TaxRateVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRateVersionUpdateManyMutationInput, Prisma.TaxRateVersionUncheckedUpdateManyInput>;
    where?: Prisma.TaxRateVersionWhereInput;
    limit?: number;
    include?: Prisma.TaxRateVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaxRateVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where: Prisma.TaxRateVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRateVersionCreateInput, Prisma.TaxRateVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaxRateVersionUpdateInput, Prisma.TaxRateVersionUncheckedUpdateInput>;
};
export type TaxRateVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where: Prisma.TaxRateVersionWhereUniqueInput;
};
export type TaxRateVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRateVersionWhereInput;
    limit?: number;
};
export type TaxRateVersion$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type TaxRateVersion$payoutLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where?: Prisma.PayoutCompilationLineWhereInput;
    orderBy?: Prisma.PayoutCompilationLineOrderByWithRelationInput | Prisma.PayoutCompilationLineOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutCompilationLineScalarFieldEnum | Prisma.PayoutCompilationLineScalarFieldEnum[];
};
export type TaxRateVersion$recognizedVatInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaxRateVersion$feeInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.FeeInvoiceOmit<ExtArgs> | null;
    include?: Prisma.FeeInvoiceInclude<ExtArgs> | null;
    where?: Prisma.FeeInvoiceWhereInput;
    orderBy?: Prisma.FeeInvoiceOrderByWithRelationInput | Prisma.FeeInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.FeeInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeInvoiceScalarFieldEnum | Prisma.FeeInvoiceScalarFieldEnum[];
};
export type TaxRateVersion$stampDutyAssessmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where?: Prisma.StampDutyAssessmentWhereInput;
    orderBy?: Prisma.StampDutyAssessmentOrderByWithRelationInput | Prisma.StampDutyAssessmentOrderByWithRelationInput[];
    cursor?: Prisma.StampDutyAssessmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StampDutyAssessmentScalarFieldEnum | Prisma.StampDutyAssessmentScalarFieldEnum[];
};
export type TaxRateVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
};
