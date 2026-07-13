import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StakeholderReportRunModel = runtime.Types.Result.DefaultSelection<Prisma.$StakeholderReportRunPayload>;
export type AggregateStakeholderReportRun = {
    _count: StakeholderReportRunCountAggregateOutputType | null;
    _min: StakeholderReportRunMinAggregateOutputType | null;
    _max: StakeholderReportRunMaxAggregateOutputType | null;
};
export type StakeholderReportRunMinAggregateOutputType = {
    id: string | null;
    department: string | null;
    reportType: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    aiDraftedNarrative: string | null;
    aiInteractionLogId: string | null;
    status: $Enums.StakeholderReportStatus | null;
    audienceClass: $Enums.StakeholderAudienceClass | null;
    generatedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type StakeholderReportRunMaxAggregateOutputType = {
    id: string | null;
    department: string | null;
    reportType: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    aiDraftedNarrative: string | null;
    aiInteractionLogId: string | null;
    status: $Enums.StakeholderReportStatus | null;
    audienceClass: $Enums.StakeholderAudienceClass | null;
    generatedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type StakeholderReportRunCountAggregateOutputType = {
    id: number;
    department: number;
    reportType: number;
    periodStart: number;
    periodEnd: number;
    figures: number;
    aiDraftedNarrative: number;
    aiInteractionLogId: number;
    status: number;
    audienceClass: number;
    generatedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type StakeholderReportRunMinAggregateInputType = {
    id?: true;
    department?: true;
    reportType?: true;
    periodStart?: true;
    periodEnd?: true;
    aiDraftedNarrative?: true;
    aiInteractionLogId?: true;
    status?: true;
    audienceClass?: true;
    generatedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type StakeholderReportRunMaxAggregateInputType = {
    id?: true;
    department?: true;
    reportType?: true;
    periodStart?: true;
    periodEnd?: true;
    aiDraftedNarrative?: true;
    aiInteractionLogId?: true;
    status?: true;
    audienceClass?: true;
    generatedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type StakeholderReportRunCountAggregateInputType = {
    id?: true;
    department?: true;
    reportType?: true;
    periodStart?: true;
    periodEnd?: true;
    figures?: true;
    aiDraftedNarrative?: true;
    aiInteractionLogId?: true;
    status?: true;
    audienceClass?: true;
    generatedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type StakeholderReportRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StakeholderReportRunWhereInput;
    orderBy?: Prisma.StakeholderReportRunOrderByWithRelationInput | Prisma.StakeholderReportRunOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StakeholderReportRunCountAggregateInputType;
    _min?: StakeholderReportRunMinAggregateInputType;
    _max?: StakeholderReportRunMaxAggregateInputType;
};
export type GetStakeholderReportRunAggregateType<T extends StakeholderReportRunAggregateArgs> = {
    [P in keyof T & keyof AggregateStakeholderReportRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStakeholderReportRun[P]> : Prisma.GetScalarType<T[P], AggregateStakeholderReportRun[P]>;
};
export type StakeholderReportRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StakeholderReportRunWhereInput;
    orderBy?: Prisma.StakeholderReportRunOrderByWithAggregationInput | Prisma.StakeholderReportRunOrderByWithAggregationInput[];
    by: Prisma.StakeholderReportRunScalarFieldEnum[] | Prisma.StakeholderReportRunScalarFieldEnum;
    having?: Prisma.StakeholderReportRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StakeholderReportRunCountAggregateInputType | true;
    _min?: StakeholderReportRunMinAggregateInputType;
    _max?: StakeholderReportRunMaxAggregateInputType;
};
export type StakeholderReportRunGroupByOutputType = {
    id: string;
    department: string;
    reportType: string;
    periodStart: Date;
    periodEnd: Date;
    figures: runtime.JsonValue;
    aiDraftedNarrative: string | null;
    aiInteractionLogId: string | null;
    status: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    generatedByUserId: string;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: StakeholderReportRunCountAggregateOutputType | null;
    _min: StakeholderReportRunMinAggregateOutputType | null;
    _max: StakeholderReportRunMaxAggregateOutputType | null;
};
export type GetStakeholderReportRunGroupByPayload<T extends StakeholderReportRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StakeholderReportRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StakeholderReportRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StakeholderReportRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StakeholderReportRunGroupByOutputType[P]>;
}>>;
export type StakeholderReportRunWhereInput = {
    AND?: Prisma.StakeholderReportRunWhereInput | Prisma.StakeholderReportRunWhereInput[];
    OR?: Prisma.StakeholderReportRunWhereInput[];
    NOT?: Prisma.StakeholderReportRunWhereInput | Prisma.StakeholderReportRunWhereInput[];
    id?: Prisma.UuidFilter<"StakeholderReportRun"> | string;
    department?: Prisma.StringFilter<"StakeholderReportRun"> | string;
    reportType?: Prisma.StringFilter<"StakeholderReportRun"> | string;
    periodStart?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    figures?: Prisma.JsonFilter<"StakeholderReportRun">;
    aiDraftedNarrative?: Prisma.StringNullableFilter<"StakeholderReportRun"> | string | null;
    aiInteractionLogId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    status?: Prisma.EnumStakeholderReportStatusFilter<"StakeholderReportRun"> | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFilter<"StakeholderReportRun"> | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.UuidFilter<"StakeholderReportRun"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    generatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    distributions?: Prisma.StakeholderDistributionLogListRelationFilter;
};
export type StakeholderReportRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    aiDraftedNarrative?: Prisma.SortOrderInput | Prisma.SortOrder;
    aiInteractionLogId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    generatedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
    distributions?: Prisma.StakeholderDistributionLogOrderByRelationAggregateInput;
};
export type StakeholderReportRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.StakeholderReportRunWhereInput | Prisma.StakeholderReportRunWhereInput[];
    OR?: Prisma.StakeholderReportRunWhereInput[];
    NOT?: Prisma.StakeholderReportRunWhereInput | Prisma.StakeholderReportRunWhereInput[];
    department?: Prisma.StringFilter<"StakeholderReportRun"> | string;
    reportType?: Prisma.StringFilter<"StakeholderReportRun"> | string;
    periodStart?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    figures?: Prisma.JsonFilter<"StakeholderReportRun">;
    aiDraftedNarrative?: Prisma.StringNullableFilter<"StakeholderReportRun"> | string | null;
    aiInteractionLogId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    status?: Prisma.EnumStakeholderReportStatusFilter<"StakeholderReportRun"> | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFilter<"StakeholderReportRun"> | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.UuidFilter<"StakeholderReportRun"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    generatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    distributions?: Prisma.StakeholderDistributionLogListRelationFilter;
}, "id" | "workflowInstanceId">;
export type StakeholderReportRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    aiDraftedNarrative?: Prisma.SortOrderInput | Prisma.SortOrder;
    aiInteractionLogId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StakeholderReportRunCountOrderByAggregateInput;
    _max?: Prisma.StakeholderReportRunMaxOrderByAggregateInput;
    _min?: Prisma.StakeholderReportRunMinOrderByAggregateInput;
};
export type StakeholderReportRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.StakeholderReportRunScalarWhereWithAggregatesInput | Prisma.StakeholderReportRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.StakeholderReportRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StakeholderReportRunScalarWhereWithAggregatesInput | Prisma.StakeholderReportRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StakeholderReportRun"> | string;
    department?: Prisma.StringWithAggregatesFilter<"StakeholderReportRun"> | string;
    reportType?: Prisma.StringWithAggregatesFilter<"StakeholderReportRun"> | string;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"StakeholderReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"StakeholderReportRun"> | Date | string;
    figures?: Prisma.JsonWithAggregatesFilter<"StakeholderReportRun">;
    aiDraftedNarrative?: Prisma.StringNullableWithAggregatesFilter<"StakeholderReportRun"> | string | null;
    aiInteractionLogId?: Prisma.UuidNullableWithAggregatesFilter<"StakeholderReportRun"> | string | null;
    status?: Prisma.EnumStakeholderReportStatusWithAggregatesFilter<"StakeholderReportRun"> | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassWithAggregatesFilter<"StakeholderReportRun"> | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.UuidWithAggregatesFilter<"StakeholderReportRun"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StakeholderReportRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"StakeholderReportRun"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StakeholderReportRun"> | Date | string;
};
export type StakeholderReportRunCreateInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    generatedBy: Prisma.AppUserCreateNestedOneWithoutStakeholderReportsGeneratedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutStakeholderReportsApprovedInput;
    distributions?: Prisma.StakeholderDistributionLogCreateNestedManyWithoutStakeholderReportRunInput;
};
export type StakeholderReportRunUncheckedCreateInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    distributions?: Prisma.StakeholderDistributionLogUncheckedCreateNestedManyWithoutStakeholderReportRunInput;
};
export type StakeholderReportRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    generatedBy?: Prisma.AppUserUpdateOneRequiredWithoutStakeholderReportsGeneratedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutStakeholderReportsApprovedNestedInput;
    distributions?: Prisma.StakeholderDistributionLogUpdateManyWithoutStakeholderReportRunNestedInput;
};
export type StakeholderReportRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    distributions?: Prisma.StakeholderDistributionLogUncheckedUpdateManyWithoutStakeholderReportRunNestedInput;
};
export type StakeholderReportRunCreateManyInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type StakeholderReportRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderReportRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderReportRunListRelationFilter = {
    every?: Prisma.StakeholderReportRunWhereInput;
    some?: Prisma.StakeholderReportRunWhereInput;
    none?: Prisma.StakeholderReportRunWhereInput;
};
export type StakeholderReportRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StakeholderReportRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    aiDraftedNarrative?: Prisma.SortOrder;
    aiInteractionLogId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StakeholderReportRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    aiDraftedNarrative?: Prisma.SortOrder;
    aiInteractionLogId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StakeholderReportRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    aiDraftedNarrative?: Prisma.SortOrder;
    aiInteractionLogId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StakeholderReportRunScalarRelationFilter = {
    is?: Prisma.StakeholderReportRunWhereInput;
    isNot?: Prisma.StakeholderReportRunWhereInput;
};
export type StakeholderReportRunCreateNestedManyWithoutGeneratedByInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.StakeholderReportRunCreateWithoutGeneratedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyGeneratedByInputEnvelope;
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
};
export type StakeholderReportRunCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput> | Prisma.StakeholderReportRunCreateWithoutApprovedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyApprovedByInputEnvelope;
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
};
export type StakeholderReportRunUncheckedCreateNestedManyWithoutGeneratedByInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.StakeholderReportRunCreateWithoutGeneratedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyGeneratedByInputEnvelope;
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
};
export type StakeholderReportRunUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput> | Prisma.StakeholderReportRunCreateWithoutApprovedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyApprovedByInputEnvelope;
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
};
export type StakeholderReportRunUpdateManyWithoutGeneratedByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.StakeholderReportRunCreateWithoutGeneratedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput[];
    upsert?: Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutGeneratedByInput | Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutGeneratedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyGeneratedByInputEnvelope;
    set?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    disconnect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    delete?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    update?: Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutGeneratedByInput | Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutGeneratedByInput[];
    updateMany?: Prisma.StakeholderReportRunUpdateManyWithWhereWithoutGeneratedByInput | Prisma.StakeholderReportRunUpdateManyWithWhereWithoutGeneratedByInput[];
    deleteMany?: Prisma.StakeholderReportRunScalarWhereInput | Prisma.StakeholderReportRunScalarWhereInput[];
};
export type StakeholderReportRunUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput> | Prisma.StakeholderReportRunCreateWithoutApprovedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyApprovedByInputEnvelope;
    set?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    disconnect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    delete?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    update?: Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.StakeholderReportRunUpdateManyWithWhereWithoutApprovedByInput | Prisma.StakeholderReportRunUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.StakeholderReportRunScalarWhereInput | Prisma.StakeholderReportRunScalarWhereInput[];
};
export type StakeholderReportRunUncheckedUpdateManyWithoutGeneratedByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.StakeholderReportRunCreateWithoutGeneratedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutGeneratedByInput[];
    upsert?: Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutGeneratedByInput | Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutGeneratedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyGeneratedByInputEnvelope;
    set?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    disconnect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    delete?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    update?: Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutGeneratedByInput | Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutGeneratedByInput[];
    updateMany?: Prisma.StakeholderReportRunUpdateManyWithWhereWithoutGeneratedByInput | Prisma.StakeholderReportRunUpdateManyWithWhereWithoutGeneratedByInput[];
    deleteMany?: Prisma.StakeholderReportRunScalarWhereInput | Prisma.StakeholderReportRunScalarWhereInput[];
};
export type StakeholderReportRunUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput> | Prisma.StakeholderReportRunCreateWithoutApprovedByInput[] | Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput | Prisma.StakeholderReportRunCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.StakeholderReportRunUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.StakeholderReportRunCreateManyApprovedByInputEnvelope;
    set?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    disconnect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    delete?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    connect?: Prisma.StakeholderReportRunWhereUniqueInput | Prisma.StakeholderReportRunWhereUniqueInput[];
    update?: Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.StakeholderReportRunUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.StakeholderReportRunUpdateManyWithWhereWithoutApprovedByInput | Prisma.StakeholderReportRunUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.StakeholderReportRunScalarWhereInput | Prisma.StakeholderReportRunScalarWhereInput[];
};
export type EnumStakeholderReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.StakeholderReportStatus;
};
export type EnumStakeholderAudienceClassFieldUpdateOperationsInput = {
    set?: $Enums.StakeholderAudienceClass;
};
export type StakeholderReportRunCreateNestedOneWithoutDistributionsInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutDistributionsInput, Prisma.StakeholderReportRunUncheckedCreateWithoutDistributionsInput>;
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutDistributionsInput;
    connect?: Prisma.StakeholderReportRunWhereUniqueInput;
};
export type StakeholderReportRunUpdateOneRequiredWithoutDistributionsNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutDistributionsInput, Prisma.StakeholderReportRunUncheckedCreateWithoutDistributionsInput>;
    connectOrCreate?: Prisma.StakeholderReportRunCreateOrConnectWithoutDistributionsInput;
    upsert?: Prisma.StakeholderReportRunUpsertWithoutDistributionsInput;
    connect?: Prisma.StakeholderReportRunWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StakeholderReportRunUpdateToOneWithWhereWithoutDistributionsInput, Prisma.StakeholderReportRunUpdateWithoutDistributionsInput>, Prisma.StakeholderReportRunUncheckedUpdateWithoutDistributionsInput>;
};
export type StakeholderReportRunCreateWithoutGeneratedByInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutStakeholderReportsApprovedInput;
    distributions?: Prisma.StakeholderDistributionLogCreateNestedManyWithoutStakeholderReportRunInput;
};
export type StakeholderReportRunUncheckedCreateWithoutGeneratedByInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    distributions?: Prisma.StakeholderDistributionLogUncheckedCreateNestedManyWithoutStakeholderReportRunInput;
};
export type StakeholderReportRunCreateOrConnectWithoutGeneratedByInput = {
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput>;
};
export type StakeholderReportRunCreateManyGeneratedByInputEnvelope = {
    data: Prisma.StakeholderReportRunCreateManyGeneratedByInput | Prisma.StakeholderReportRunCreateManyGeneratedByInput[];
    skipDuplicates?: boolean;
};
export type StakeholderReportRunCreateWithoutApprovedByInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    generatedBy: Prisma.AppUserCreateNestedOneWithoutStakeholderReportsGeneratedInput;
    distributions?: Prisma.StakeholderDistributionLogCreateNestedManyWithoutStakeholderReportRunInput;
};
export type StakeholderReportRunUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    generatedByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    distributions?: Prisma.StakeholderDistributionLogUncheckedCreateNestedManyWithoutStakeholderReportRunInput;
};
export type StakeholderReportRunCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput>;
};
export type StakeholderReportRunCreateManyApprovedByInputEnvelope = {
    data: Prisma.StakeholderReportRunCreateManyApprovedByInput | Prisma.StakeholderReportRunCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type StakeholderReportRunUpsertWithWhereUniqueWithoutGeneratedByInput = {
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.StakeholderReportRunUpdateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedUpdateWithoutGeneratedByInput>;
    create: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutGeneratedByInput>;
};
export type StakeholderReportRunUpdateWithWhereUniqueWithoutGeneratedByInput = {
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateWithoutGeneratedByInput, Prisma.StakeholderReportRunUncheckedUpdateWithoutGeneratedByInput>;
};
export type StakeholderReportRunUpdateManyWithWhereWithoutGeneratedByInput = {
    where: Prisma.StakeholderReportRunScalarWhereInput;
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateManyMutationInput, Prisma.StakeholderReportRunUncheckedUpdateManyWithoutGeneratedByInput>;
};
export type StakeholderReportRunScalarWhereInput = {
    AND?: Prisma.StakeholderReportRunScalarWhereInput | Prisma.StakeholderReportRunScalarWhereInput[];
    OR?: Prisma.StakeholderReportRunScalarWhereInput[];
    NOT?: Prisma.StakeholderReportRunScalarWhereInput | Prisma.StakeholderReportRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"StakeholderReportRun"> | string;
    department?: Prisma.StringFilter<"StakeholderReportRun"> | string;
    reportType?: Prisma.StringFilter<"StakeholderReportRun"> | string;
    periodStart?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
    figures?: Prisma.JsonFilter<"StakeholderReportRun">;
    aiDraftedNarrative?: Prisma.StringNullableFilter<"StakeholderReportRun"> | string | null;
    aiInteractionLogId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    status?: Prisma.EnumStakeholderReportStatusFilter<"StakeholderReportRun"> | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFilter<"StakeholderReportRun"> | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.UuidFilter<"StakeholderReportRun"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"StakeholderReportRun"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"StakeholderReportRun"> | Date | string;
};
export type StakeholderReportRunUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.StakeholderReportRunUpdateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedCreateWithoutApprovedByInput>;
};
export type StakeholderReportRunUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateWithoutApprovedByInput, Prisma.StakeholderReportRunUncheckedUpdateWithoutApprovedByInput>;
};
export type StakeholderReportRunUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.StakeholderReportRunScalarWhereInput;
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateManyMutationInput, Prisma.StakeholderReportRunUncheckedUpdateManyWithoutApprovedByInput>;
};
export type StakeholderReportRunCreateWithoutDistributionsInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    generatedBy: Prisma.AppUserCreateNestedOneWithoutStakeholderReportsGeneratedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutStakeholderReportsApprovedInput;
};
export type StakeholderReportRunUncheckedCreateWithoutDistributionsInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type StakeholderReportRunCreateOrConnectWithoutDistributionsInput = {
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutDistributionsInput, Prisma.StakeholderReportRunUncheckedCreateWithoutDistributionsInput>;
};
export type StakeholderReportRunUpsertWithoutDistributionsInput = {
    update: Prisma.XOR<Prisma.StakeholderReportRunUpdateWithoutDistributionsInput, Prisma.StakeholderReportRunUncheckedUpdateWithoutDistributionsInput>;
    create: Prisma.XOR<Prisma.StakeholderReportRunCreateWithoutDistributionsInput, Prisma.StakeholderReportRunUncheckedCreateWithoutDistributionsInput>;
    where?: Prisma.StakeholderReportRunWhereInput;
};
export type StakeholderReportRunUpdateToOneWithWhereWithoutDistributionsInput = {
    where?: Prisma.StakeholderReportRunWhereInput;
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateWithoutDistributionsInput, Prisma.StakeholderReportRunUncheckedUpdateWithoutDistributionsInput>;
};
export type StakeholderReportRunUpdateWithoutDistributionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    generatedBy?: Prisma.AppUserUpdateOneRequiredWithoutStakeholderReportsGeneratedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutStakeholderReportsApprovedNestedInput;
};
export type StakeholderReportRunUncheckedUpdateWithoutDistributionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderReportRunCreateManyGeneratedByInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type StakeholderReportRunCreateManyApprovedByInput = {
    id?: string;
    department: string;
    reportType: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: string | null;
    aiInteractionLogId?: string | null;
    status?: $Enums.StakeholderReportStatus;
    audienceClass: $Enums.StakeholderAudienceClass;
    generatedByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type StakeholderReportRunUpdateWithoutGeneratedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedBy?: Prisma.AppUserUpdateOneWithoutStakeholderReportsApprovedNestedInput;
    distributions?: Prisma.StakeholderDistributionLogUpdateManyWithoutStakeholderReportRunNestedInput;
};
export type StakeholderReportRunUncheckedUpdateWithoutGeneratedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    distributions?: Prisma.StakeholderDistributionLogUncheckedUpdateManyWithoutStakeholderReportRunNestedInput;
};
export type StakeholderReportRunUncheckedUpdateManyWithoutGeneratedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderReportRunUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    generatedBy?: Prisma.AppUserUpdateOneRequiredWithoutStakeholderReportsGeneratedNestedInput;
    distributions?: Prisma.StakeholderDistributionLogUpdateManyWithoutStakeholderReportRunNestedInput;
};
export type StakeholderReportRunUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    distributions?: Prisma.StakeholderDistributionLogUncheckedUpdateManyWithoutStakeholderReportRunNestedInput;
};
export type StakeholderReportRunUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    aiDraftedNarrative?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aiInteractionLogId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStakeholderReportStatusFieldUpdateOperationsInput | $Enums.StakeholderReportStatus;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderReportRunCountOutputType = {
    distributions: number;
};
export type StakeholderReportRunCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    distributions?: boolean | StakeholderReportRunCountOutputTypeCountDistributionsArgs;
};
export type StakeholderReportRunCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunCountOutputTypeSelect<ExtArgs> | null;
};
export type StakeholderReportRunCountOutputTypeCountDistributionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StakeholderDistributionLogWhereInput;
};
export type StakeholderReportRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    department?: boolean;
    reportType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    figures?: boolean;
    aiDraftedNarrative?: boolean;
    aiInteractionLogId?: boolean;
    status?: boolean;
    audienceClass?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StakeholderReportRun$approvedByArgs<ExtArgs>;
    distributions?: boolean | Prisma.StakeholderReportRun$distributionsArgs<ExtArgs>;
    _count?: boolean | Prisma.StakeholderReportRunCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stakeholderReportRun"]>;
export type StakeholderReportRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    department?: boolean;
    reportType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    figures?: boolean;
    aiDraftedNarrative?: boolean;
    aiInteractionLogId?: boolean;
    status?: boolean;
    audienceClass?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StakeholderReportRun$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["stakeholderReportRun"]>;
export type StakeholderReportRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    department?: boolean;
    reportType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    figures?: boolean;
    aiDraftedNarrative?: boolean;
    aiInteractionLogId?: boolean;
    status?: boolean;
    audienceClass?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StakeholderReportRun$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["stakeholderReportRun"]>;
export type StakeholderReportRunSelectScalar = {
    id?: boolean;
    department?: boolean;
    reportType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    figures?: boolean;
    aiDraftedNarrative?: boolean;
    aiInteractionLogId?: boolean;
    status?: boolean;
    audienceClass?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type StakeholderReportRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "department" | "reportType" | "periodStart" | "periodEnd" | "figures" | "aiDraftedNarrative" | "aiInteractionLogId" | "status" | "audienceClass" | "generatedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["stakeholderReportRun"]>;
export type StakeholderReportRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StakeholderReportRun$approvedByArgs<ExtArgs>;
    distributions?: boolean | Prisma.StakeholderReportRun$distributionsArgs<ExtArgs>;
    _count?: boolean | Prisma.StakeholderReportRunCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StakeholderReportRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StakeholderReportRun$approvedByArgs<ExtArgs>;
};
export type StakeholderReportRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StakeholderReportRun$approvedByArgs<ExtArgs>;
};
export type $StakeholderReportRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StakeholderReportRun";
    objects: {
        generatedBy: Prisma.$AppUserPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        distributions: Prisma.$StakeholderDistributionLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        department: string;
        reportType: string;
        periodStart: Date;
        periodEnd: Date;
        figures: runtime.JsonValue;
        aiDraftedNarrative: string | null;
        aiInteractionLogId: string | null;
        status: $Enums.StakeholderReportStatus;
        audienceClass: $Enums.StakeholderAudienceClass;
        generatedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["stakeholderReportRun"]>;
    composites: {};
};
export type StakeholderReportRunGetPayload<S extends boolean | null | undefined | StakeholderReportRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload, S>;
export type StakeholderReportRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StakeholderReportRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StakeholderReportRunCountAggregateInputType | true;
};
export interface StakeholderReportRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StakeholderReportRun'];
        meta: {
            name: 'StakeholderReportRun';
        };
    };
    findUnique<T extends StakeholderReportRunFindUniqueArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StakeholderReportRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StakeholderReportRunFindFirstArgs>(args?: Prisma.SelectSubset<T, StakeholderReportRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StakeholderReportRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StakeholderReportRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StakeholderReportRunFindManyArgs>(args?: Prisma.SelectSubset<T, StakeholderReportRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StakeholderReportRunCreateArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunCreateArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StakeholderReportRunCreateManyArgs>(args?: Prisma.SelectSubset<T, StakeholderReportRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StakeholderReportRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StakeholderReportRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StakeholderReportRunDeleteArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunDeleteArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StakeholderReportRunUpdateArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunUpdateArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StakeholderReportRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, StakeholderReportRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StakeholderReportRunUpdateManyArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StakeholderReportRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StakeholderReportRunUpsertArgs>(args: Prisma.SelectSubset<T, StakeholderReportRunUpsertArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StakeholderReportRunCountArgs>(args?: Prisma.Subset<T, StakeholderReportRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StakeholderReportRunCountAggregateOutputType> : number>;
    aggregate<T extends StakeholderReportRunAggregateArgs>(args: Prisma.Subset<T, StakeholderReportRunAggregateArgs>): Prisma.PrismaPromise<GetStakeholderReportRunAggregateType<T>>;
    groupBy<T extends StakeholderReportRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StakeholderReportRunGroupByArgs['orderBy'];
    } : {
        orderBy?: StakeholderReportRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StakeholderReportRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeholderReportRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StakeholderReportRunFieldRefs;
}
export interface Prisma__StakeholderReportRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    generatedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.StakeholderReportRun$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StakeholderReportRun$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    distributions<T extends Prisma.StakeholderReportRun$distributionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StakeholderReportRun$distributionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StakeholderReportRunFieldRefs {
    readonly id: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly department: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly reportType: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly periodStart: Prisma.FieldRef<"StakeholderReportRun", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"StakeholderReportRun", 'DateTime'>;
    readonly figures: Prisma.FieldRef<"StakeholderReportRun", 'Json'>;
    readonly aiDraftedNarrative: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly aiInteractionLogId: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly status: Prisma.FieldRef<"StakeholderReportRun", 'StakeholderReportStatus'>;
    readonly audienceClass: Prisma.FieldRef<"StakeholderReportRun", 'StakeholderAudienceClass'>;
    readonly generatedByUserId: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"StakeholderReportRun", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StakeholderReportRun", 'DateTime'>;
}
export type StakeholderReportRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    where: Prisma.StakeholderReportRunWhereUniqueInput;
};
export type StakeholderReportRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    where: Prisma.StakeholderReportRunWhereUniqueInput;
};
export type StakeholderReportRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    where?: Prisma.StakeholderReportRunWhereInput;
    orderBy?: Prisma.StakeholderReportRunOrderByWithRelationInput | Prisma.StakeholderReportRunOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StakeholderReportRunScalarFieldEnum | Prisma.StakeholderReportRunScalarFieldEnum[];
};
export type StakeholderReportRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    where?: Prisma.StakeholderReportRunWhereInput;
    orderBy?: Prisma.StakeholderReportRunOrderByWithRelationInput | Prisma.StakeholderReportRunOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StakeholderReportRunScalarFieldEnum | Prisma.StakeholderReportRunScalarFieldEnum[];
};
export type StakeholderReportRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    where?: Prisma.StakeholderReportRunWhereInput;
    orderBy?: Prisma.StakeholderReportRunOrderByWithRelationInput | Prisma.StakeholderReportRunOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StakeholderReportRunScalarFieldEnum | Prisma.StakeholderReportRunScalarFieldEnum[];
};
export type StakeholderReportRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StakeholderReportRunCreateInput, Prisma.StakeholderReportRunUncheckedCreateInput>;
};
export type StakeholderReportRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StakeholderReportRunCreateManyInput | Prisma.StakeholderReportRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StakeholderReportRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    data: Prisma.StakeholderReportRunCreateManyInput | Prisma.StakeholderReportRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StakeholderReportRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StakeholderReportRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateInput, Prisma.StakeholderReportRunUncheckedUpdateInput>;
    where: Prisma.StakeholderReportRunWhereUniqueInput;
};
export type StakeholderReportRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateManyMutationInput, Prisma.StakeholderReportRunUncheckedUpdateManyInput>;
    where?: Prisma.StakeholderReportRunWhereInput;
    limit?: number;
};
export type StakeholderReportRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StakeholderReportRunUpdateManyMutationInput, Prisma.StakeholderReportRunUncheckedUpdateManyInput>;
    where?: Prisma.StakeholderReportRunWhereInput;
    limit?: number;
    include?: Prisma.StakeholderReportRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StakeholderReportRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    where: Prisma.StakeholderReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderReportRunCreateInput, Prisma.StakeholderReportRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StakeholderReportRunUpdateInput, Prisma.StakeholderReportRunUncheckedUpdateInput>;
};
export type StakeholderReportRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
    where: Prisma.StakeholderReportRunWhereUniqueInput;
};
export type StakeholderReportRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StakeholderReportRunWhereInput;
    limit?: number;
};
export type StakeholderReportRun$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type StakeholderReportRun$distributionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where?: Prisma.StakeholderDistributionLogWhereInput;
    orderBy?: Prisma.StakeholderDistributionLogOrderByWithRelationInput | Prisma.StakeholderDistributionLogOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderDistributionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StakeholderDistributionLogScalarFieldEnum | Prisma.StakeholderDistributionLogScalarFieldEnum[];
};
export type StakeholderReportRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderReportRunSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderReportRunOmit<ExtArgs> | null;
    include?: Prisma.StakeholderReportRunInclude<ExtArgs> | null;
};
