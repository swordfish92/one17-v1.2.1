import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RegulatoryFilingRunModel = runtime.Types.Result.DefaultSelection<Prisma.$RegulatoryFilingRunPayload>;
export type AggregateRegulatoryFilingRun = {
    _count: RegulatoryFilingRunCountAggregateOutputType | null;
    _min: RegulatoryFilingRunMinAggregateOutputType | null;
    _max: RegulatoryFilingRunMaxAggregateOutputType | null;
};
export type RegulatoryFilingRunMinAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    ledgerEntityCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    status: $Enums.RegulatoryFilingStatus | null;
    preparedByUserId: string | null;
    certifiedByUserId: string | null;
    workflowInstanceId: string | null;
    secPortalAckRef: string | null;
    submittedAt: Date | null;
    generatedAt: Date | null;
};
export type RegulatoryFilingRunMaxAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    ledgerEntityCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    status: $Enums.RegulatoryFilingStatus | null;
    preparedByUserId: string | null;
    certifiedByUserId: string | null;
    workflowInstanceId: string | null;
    secPortalAckRef: string | null;
    submittedAt: Date | null;
    generatedAt: Date | null;
};
export type RegulatoryFilingRunCountAggregateOutputType = {
    id: number;
    regulatorTemplateId: number;
    ledgerEntityCode: number;
    periodStart: number;
    periodEnd: number;
    status: number;
    figures: number;
    preparedByUserId: number;
    certifiedByUserId: number;
    workflowInstanceId: number;
    secPortalAckRef: number;
    submittedAt: number;
    generatedAt: number;
    _all: number;
};
export type RegulatoryFilingRunMinAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    preparedByUserId?: true;
    certifiedByUserId?: true;
    workflowInstanceId?: true;
    secPortalAckRef?: true;
    submittedAt?: true;
    generatedAt?: true;
};
export type RegulatoryFilingRunMaxAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    preparedByUserId?: true;
    certifiedByUserId?: true;
    workflowInstanceId?: true;
    secPortalAckRef?: true;
    submittedAt?: true;
    generatedAt?: true;
};
export type RegulatoryFilingRunCountAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    figures?: true;
    preparedByUserId?: true;
    certifiedByUserId?: true;
    workflowInstanceId?: true;
    secPortalAckRef?: true;
    submittedAt?: true;
    generatedAt?: true;
    _all?: true;
};
export type RegulatoryFilingRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryFilingRunWhereInput;
    orderBy?: Prisma.RegulatoryFilingRunOrderByWithRelationInput | Prisma.RegulatoryFilingRunOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegulatoryFilingRunCountAggregateInputType;
    _min?: RegulatoryFilingRunMinAggregateInputType;
    _max?: RegulatoryFilingRunMaxAggregateInputType;
};
export type GetRegulatoryFilingRunAggregateType<T extends RegulatoryFilingRunAggregateArgs> = {
    [P in keyof T & keyof AggregateRegulatoryFilingRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegulatoryFilingRun[P]> : Prisma.GetScalarType<T[P], AggregateRegulatoryFilingRun[P]>;
};
export type RegulatoryFilingRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryFilingRunWhereInput;
    orderBy?: Prisma.RegulatoryFilingRunOrderByWithAggregationInput | Prisma.RegulatoryFilingRunOrderByWithAggregationInput[];
    by: Prisma.RegulatoryFilingRunScalarFieldEnum[] | Prisma.RegulatoryFilingRunScalarFieldEnum;
    having?: Prisma.RegulatoryFilingRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegulatoryFilingRunCountAggregateInputType | true;
    _min?: RegulatoryFilingRunMinAggregateInputType;
    _max?: RegulatoryFilingRunMaxAggregateInputType;
};
export type RegulatoryFilingRunGroupByOutputType = {
    id: string;
    regulatorTemplateId: string;
    ledgerEntityCode: string;
    periodStart: Date;
    periodEnd: Date;
    status: $Enums.RegulatoryFilingStatus;
    figures: runtime.JsonValue;
    preparedByUserId: string;
    certifiedByUserId: string | null;
    workflowInstanceId: string | null;
    secPortalAckRef: string | null;
    submittedAt: Date | null;
    generatedAt: Date;
    _count: RegulatoryFilingRunCountAggregateOutputType | null;
    _min: RegulatoryFilingRunMinAggregateOutputType | null;
    _max: RegulatoryFilingRunMaxAggregateOutputType | null;
};
export type GetRegulatoryFilingRunGroupByPayload<T extends RegulatoryFilingRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegulatoryFilingRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegulatoryFilingRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegulatoryFilingRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegulatoryFilingRunGroupByOutputType[P]>;
}>>;
export type RegulatoryFilingRunWhereInput = {
    AND?: Prisma.RegulatoryFilingRunWhereInput | Prisma.RegulatoryFilingRunWhereInput[];
    OR?: Prisma.RegulatoryFilingRunWhereInput[];
    NOT?: Prisma.RegulatoryFilingRunWhereInput | Prisma.RegulatoryFilingRunWhereInput[];
    id?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"RegulatoryFilingRun"> | string;
    periodStart?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFilter<"RegulatoryFilingRun"> | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonFilter<"RegulatoryFilingRun">;
    preparedByUserId?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    certifiedByUserId?: Prisma.UuidNullableFilter<"RegulatoryFilingRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"RegulatoryFilingRun"> | string | null;
    secPortalAckRef?: Prisma.StringNullableFilter<"RegulatoryFilingRun"> | string | null;
    submittedAt?: Prisma.DateTimeNullableFilter<"RegulatoryFilingRun"> | Date | string | null;
    generatedAt?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
};
export type RegulatoryFilingRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    preparedByUserId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    secPortalAckRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    regulatorTemplate?: Prisma.RegulatorTemplateOrderByWithRelationInput;
};
export type RegulatoryFilingRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.RegulatoryFilingRunWhereInput | Prisma.RegulatoryFilingRunWhereInput[];
    OR?: Prisma.RegulatoryFilingRunWhereInput[];
    NOT?: Prisma.RegulatoryFilingRunWhereInput | Prisma.RegulatoryFilingRunWhereInput[];
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"RegulatoryFilingRun"> | string;
    periodStart?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFilter<"RegulatoryFilingRun"> | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonFilter<"RegulatoryFilingRun">;
    preparedByUserId?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    certifiedByUserId?: Prisma.UuidNullableFilter<"RegulatoryFilingRun"> | string | null;
    secPortalAckRef?: Prisma.StringNullableFilter<"RegulatoryFilingRun"> | string | null;
    submittedAt?: Prisma.DateTimeNullableFilter<"RegulatoryFilingRun"> | Date | string | null;
    generatedAt?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
}, "id" | "workflowInstanceId">;
export type RegulatoryFilingRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    preparedByUserId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    secPortalAckRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    _count?: Prisma.RegulatoryFilingRunCountOrderByAggregateInput;
    _max?: Prisma.RegulatoryFilingRunMaxOrderByAggregateInput;
    _min?: Prisma.RegulatoryFilingRunMinOrderByAggregateInput;
};
export type RegulatoryFilingRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegulatoryFilingRunScalarWhereWithAggregatesInput | Prisma.RegulatoryFilingRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegulatoryFilingRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegulatoryFilingRunScalarWhereWithAggregatesInput | Prisma.RegulatoryFilingRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RegulatoryFilingRun"> | string;
    regulatorTemplateId?: Prisma.UuidWithAggregatesFilter<"RegulatoryFilingRun"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"RegulatoryFilingRun"> | string;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"RegulatoryFilingRun"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"RegulatoryFilingRun"> | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusWithAggregatesFilter<"RegulatoryFilingRun"> | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonWithAggregatesFilter<"RegulatoryFilingRun">;
    preparedByUserId?: Prisma.UuidWithAggregatesFilter<"RegulatoryFilingRun"> | string;
    certifiedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"RegulatoryFilingRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"RegulatoryFilingRun"> | string | null;
    secPortalAckRef?: Prisma.StringNullableWithAggregatesFilter<"RegulatoryFilingRun"> | string | null;
    submittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RegulatoryFilingRun"> | Date | string | null;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"RegulatoryFilingRun"> | Date | string;
};
export type RegulatoryFilingRunCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.RegulatoryFilingStatus;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId: string;
    certifiedByUserId?: string | null;
    workflowInstanceId?: string | null;
    secPortalAckRef?: string | null;
    submittedAt?: Date | string | null;
    generatedAt?: Date | string;
    regulatorTemplate: Prisma.RegulatorTemplateCreateNestedOneWithoutFilingRunsInput;
};
export type RegulatoryFilingRunUncheckedCreateInput = {
    id?: string;
    regulatorTemplateId: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.RegulatoryFilingStatus;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId: string;
    certifiedByUserId?: string | null;
    workflowInstanceId?: string | null;
    secPortalAckRef?: string | null;
    submittedAt?: Date | string | null;
    generatedAt?: Date | string;
};
export type RegulatoryFilingRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFieldUpdateOperationsInput | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secPortalAckRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regulatorTemplate?: Prisma.RegulatorTemplateUpdateOneRequiredWithoutFilingRunsNestedInput;
};
export type RegulatoryFilingRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFieldUpdateOperationsInput | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secPortalAckRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingRunCreateManyInput = {
    id?: string;
    regulatorTemplateId: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.RegulatoryFilingStatus;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId: string;
    certifiedByUserId?: string | null;
    workflowInstanceId?: string | null;
    secPortalAckRef?: string | null;
    submittedAt?: Date | string | null;
    generatedAt?: Date | string;
};
export type RegulatoryFilingRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFieldUpdateOperationsInput | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secPortalAckRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFieldUpdateOperationsInput | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secPortalAckRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingRunListRelationFilter = {
    every?: Prisma.RegulatoryFilingRunWhereInput;
    some?: Prisma.RegulatoryFilingRunWhereInput;
    none?: Prisma.RegulatoryFilingRunWhereInput;
};
export type RegulatoryFilingRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegulatoryFilingRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    preparedByUserId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    secPortalAckRef?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type RegulatoryFilingRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    preparedByUserId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    secPortalAckRef?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type RegulatoryFilingRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    preparedByUserId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    secPortalAckRef?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type RegulatoryFilingRunCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingRunCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
};
export type RegulatoryFilingRunUncheckedCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingRunCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
};
export type RegulatoryFilingRunUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.RegulatoryFilingRunUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingRunCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    disconnect?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    delete?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    connect?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    update?: Prisma.RegulatoryFilingRunUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.RegulatoryFilingRunUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.RegulatoryFilingRunScalarWhereInput | Prisma.RegulatoryFilingRunScalarWhereInput[];
};
export type RegulatoryFilingRunUncheckedUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.RegulatoryFilingRunUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingRunCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    disconnect?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    delete?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    connect?: Prisma.RegulatoryFilingRunWhereUniqueInput | Prisma.RegulatoryFilingRunWhereUniqueInput[];
    update?: Prisma.RegulatoryFilingRunUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.RegulatoryFilingRunUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingRunUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.RegulatoryFilingRunScalarWhereInput | Prisma.RegulatoryFilingRunScalarWhereInput[];
};
export type EnumRegulatoryFilingStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegulatoryFilingStatus;
};
export type RegulatoryFilingRunCreateWithoutRegulatorTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.RegulatoryFilingStatus;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId: string;
    certifiedByUserId?: string | null;
    workflowInstanceId?: string | null;
    secPortalAckRef?: string | null;
    submittedAt?: Date | string | null;
    generatedAt?: Date | string;
};
export type RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.RegulatoryFilingStatus;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId: string;
    certifiedByUserId?: string | null;
    workflowInstanceId?: string | null;
    secPortalAckRef?: string | null;
    submittedAt?: Date | string | null;
    generatedAt?: Date | string;
};
export type RegulatoryFilingRunCreateOrConnectWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingRunCreateManyRegulatorTemplateInputEnvelope = {
    data: Prisma.RegulatoryFilingRunCreateManyRegulatorTemplateInput | Prisma.RegulatoryFilingRunCreateManyRegulatorTemplateInput[];
    skipDuplicates?: boolean;
};
export type RegulatoryFilingRunUpsertWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegulatoryFilingRunUpdateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedUpdateWithoutRegulatorTemplateInput>;
    create: Prisma.XOR<Prisma.RegulatoryFilingRunCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingRunUpdateWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegulatoryFilingRunUpdateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingRunUncheckedUpdateWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingRunUpdateManyWithWhereWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingRunScalarWhereInput;
    data: Prisma.XOR<Prisma.RegulatoryFilingRunUpdateManyMutationInput, Prisma.RegulatoryFilingRunUncheckedUpdateManyWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingRunScalarWhereInput = {
    AND?: Prisma.RegulatoryFilingRunScalarWhereInput | Prisma.RegulatoryFilingRunScalarWhereInput[];
    OR?: Prisma.RegulatoryFilingRunScalarWhereInput[];
    NOT?: Prisma.RegulatoryFilingRunScalarWhereInput | Prisma.RegulatoryFilingRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"RegulatoryFilingRun"> | string;
    periodStart?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFilter<"RegulatoryFilingRun"> | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonFilter<"RegulatoryFilingRun">;
    preparedByUserId?: Prisma.UuidFilter<"RegulatoryFilingRun"> | string;
    certifiedByUserId?: Prisma.UuidNullableFilter<"RegulatoryFilingRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"RegulatoryFilingRun"> | string | null;
    secPortalAckRef?: Prisma.StringNullableFilter<"RegulatoryFilingRun"> | string | null;
    submittedAt?: Prisma.DateTimeNullableFilter<"RegulatoryFilingRun"> | Date | string | null;
    generatedAt?: Prisma.DateTimeFilter<"RegulatoryFilingRun"> | Date | string;
};
export type RegulatoryFilingRunCreateManyRegulatorTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.RegulatoryFilingStatus;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId: string;
    certifiedByUserId?: string | null;
    workflowInstanceId?: string | null;
    secPortalAckRef?: string | null;
    submittedAt?: Date | string | null;
    generatedAt?: Date | string;
};
export type RegulatoryFilingRunUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFieldUpdateOperationsInput | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secPortalAckRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingRunUncheckedUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFieldUpdateOperationsInput | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secPortalAckRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingRunUncheckedUpdateManyWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumRegulatoryFilingStatusFieldUpdateOperationsInput | $Enums.RegulatoryFilingStatus;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preparedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secPortalAckRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    figures?: boolean;
    preparedByUserId?: boolean;
    certifiedByUserId?: boolean;
    workflowInstanceId?: boolean;
    secPortalAckRef?: boolean;
    submittedAt?: boolean;
    generatedAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulatoryFilingRun"]>;
export type RegulatoryFilingRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    figures?: boolean;
    preparedByUserId?: boolean;
    certifiedByUserId?: boolean;
    workflowInstanceId?: boolean;
    secPortalAckRef?: boolean;
    submittedAt?: boolean;
    generatedAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulatoryFilingRun"]>;
export type RegulatoryFilingRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    figures?: boolean;
    preparedByUserId?: boolean;
    certifiedByUserId?: boolean;
    workflowInstanceId?: boolean;
    secPortalAckRef?: boolean;
    submittedAt?: boolean;
    generatedAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulatoryFilingRun"]>;
export type RegulatoryFilingRunSelectScalar = {
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    figures?: boolean;
    preparedByUserId?: boolean;
    certifiedByUserId?: boolean;
    workflowInstanceId?: boolean;
    secPortalAckRef?: boolean;
    submittedAt?: boolean;
    generatedAt?: boolean;
};
export type RegulatoryFilingRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "regulatorTemplateId" | "ledgerEntityCode" | "periodStart" | "periodEnd" | "status" | "figures" | "preparedByUserId" | "certifiedByUserId" | "workflowInstanceId" | "secPortalAckRef" | "submittedAt" | "generatedAt", ExtArgs["result"]["regulatoryFilingRun"]>;
export type RegulatoryFilingRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type RegulatoryFilingRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type RegulatoryFilingRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type $RegulatoryFilingRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegulatoryFilingRun";
    objects: {
        regulatorTemplate: Prisma.$RegulatorTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        regulatorTemplateId: string;
        ledgerEntityCode: string;
        periodStart: Date;
        periodEnd: Date;
        status: $Enums.RegulatoryFilingStatus;
        figures: runtime.JsonValue;
        preparedByUserId: string;
        certifiedByUserId: string | null;
        workflowInstanceId: string | null;
        secPortalAckRef: string | null;
        submittedAt: Date | null;
        generatedAt: Date;
    }, ExtArgs["result"]["regulatoryFilingRun"]>;
    composites: {};
};
export type RegulatoryFilingRunGetPayload<S extends boolean | null | undefined | RegulatoryFilingRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload, S>;
export type RegulatoryFilingRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegulatoryFilingRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegulatoryFilingRunCountAggregateInputType | true;
};
export interface RegulatoryFilingRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegulatoryFilingRun'];
        meta: {
            name: 'RegulatoryFilingRun';
        };
    };
    findUnique<T extends RegulatoryFilingRunFindUniqueArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegulatoryFilingRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegulatoryFilingRunFindFirstArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegulatoryFilingRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegulatoryFilingRunFindManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegulatoryFilingRunCreateArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunCreateArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegulatoryFilingRunCreateManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegulatoryFilingRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegulatoryFilingRunDeleteArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunDeleteArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegulatoryFilingRunUpdateArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunUpdateArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegulatoryFilingRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegulatoryFilingRunUpdateManyArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegulatoryFilingRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegulatoryFilingRunUpsertArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingRunUpsertArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingRunClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegulatoryFilingRunCountArgs>(args?: Prisma.Subset<T, RegulatoryFilingRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegulatoryFilingRunCountAggregateOutputType> : number>;
    aggregate<T extends RegulatoryFilingRunAggregateArgs>(args: Prisma.Subset<T, RegulatoryFilingRunAggregateArgs>): Prisma.PrismaPromise<GetRegulatoryFilingRunAggregateType<T>>;
    groupBy<T extends RegulatoryFilingRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegulatoryFilingRunGroupByArgs['orderBy'];
    } : {
        orderBy?: RegulatoryFilingRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegulatoryFilingRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulatoryFilingRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegulatoryFilingRunFieldRefs;
}
export interface Prisma__RegulatoryFilingRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    regulatorTemplate<T extends Prisma.RegulatorTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegulatorTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegulatoryFilingRunFieldRefs {
    readonly id: Prisma.FieldRef<"RegulatoryFilingRun", 'String'>;
    readonly regulatorTemplateId: Prisma.FieldRef<"RegulatoryFilingRun", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"RegulatoryFilingRun", 'String'>;
    readonly periodStart: Prisma.FieldRef<"RegulatoryFilingRun", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"RegulatoryFilingRun", 'DateTime'>;
    readonly status: Prisma.FieldRef<"RegulatoryFilingRun", 'RegulatoryFilingStatus'>;
    readonly figures: Prisma.FieldRef<"RegulatoryFilingRun", 'Json'>;
    readonly preparedByUserId: Prisma.FieldRef<"RegulatoryFilingRun", 'String'>;
    readonly certifiedByUserId: Prisma.FieldRef<"RegulatoryFilingRun", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"RegulatoryFilingRun", 'String'>;
    readonly secPortalAckRef: Prisma.FieldRef<"RegulatoryFilingRun", 'String'>;
    readonly submittedAt: Prisma.FieldRef<"RegulatoryFilingRun", 'DateTime'>;
    readonly generatedAt: Prisma.FieldRef<"RegulatoryFilingRun", 'DateTime'>;
}
export type RegulatoryFilingRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
};
export type RegulatoryFilingRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
};
export type RegulatoryFilingRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    where?: Prisma.RegulatoryFilingRunWhereInput;
    orderBy?: Prisma.RegulatoryFilingRunOrderByWithRelationInput | Prisma.RegulatoryFilingRunOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryFilingRunScalarFieldEnum | Prisma.RegulatoryFilingRunScalarFieldEnum[];
};
export type RegulatoryFilingRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    where?: Prisma.RegulatoryFilingRunWhereInput;
    orderBy?: Prisma.RegulatoryFilingRunOrderByWithRelationInput | Prisma.RegulatoryFilingRunOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryFilingRunScalarFieldEnum | Prisma.RegulatoryFilingRunScalarFieldEnum[];
};
export type RegulatoryFilingRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    where?: Prisma.RegulatoryFilingRunWhereInput;
    orderBy?: Prisma.RegulatoryFilingRunOrderByWithRelationInput | Prisma.RegulatoryFilingRunOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryFilingRunScalarFieldEnum | Prisma.RegulatoryFilingRunScalarFieldEnum[];
};
export type RegulatoryFilingRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryFilingRunCreateInput, Prisma.RegulatoryFilingRunUncheckedCreateInput>;
};
export type RegulatoryFilingRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegulatoryFilingRunCreateManyInput | Prisma.RegulatoryFilingRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegulatoryFilingRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    data: Prisma.RegulatoryFilingRunCreateManyInput | Prisma.RegulatoryFilingRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegulatoryFilingRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegulatoryFilingRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryFilingRunUpdateInput, Prisma.RegulatoryFilingRunUncheckedUpdateInput>;
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
};
export type RegulatoryFilingRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegulatoryFilingRunUpdateManyMutationInput, Prisma.RegulatoryFilingRunUncheckedUpdateManyInput>;
    where?: Prisma.RegulatoryFilingRunWhereInput;
    limit?: number;
};
export type RegulatoryFilingRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryFilingRunUpdateManyMutationInput, Prisma.RegulatoryFilingRunUncheckedUpdateManyInput>;
    where?: Prisma.RegulatoryFilingRunWhereInput;
    limit?: number;
    include?: Prisma.RegulatoryFilingRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegulatoryFilingRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatoryFilingRunCreateInput, Prisma.RegulatoryFilingRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegulatoryFilingRunUpdateInput, Prisma.RegulatoryFilingRunUncheckedUpdateInput>;
};
export type RegulatoryFilingRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingRunWhereUniqueInput;
};
export type RegulatoryFilingRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryFilingRunWhereInput;
    limit?: number;
};
export type RegulatoryFilingRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingRunSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingRunOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingRunInclude<ExtArgs> | null;
};
