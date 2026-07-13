import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ZakatAssessmentRunModel = runtime.Types.Result.DefaultSelection<Prisma.$ZakatAssessmentRunPayload>;
export type AggregateZakatAssessmentRun = {
    _count: ZakatAssessmentRunCountAggregateOutputType | null;
    _avg: ZakatAssessmentRunAvgAggregateOutputType | null;
    _sum: ZakatAssessmentRunSumAggregateOutputType | null;
    _min: ZakatAssessmentRunMinAggregateOutputType | null;
    _max: ZakatAssessmentRunMaxAggregateOutputType | null;
};
export type ZakatAssessmentRunAvgAggregateOutputType = {
    netZakatableKobo: number | null;
    zakatDueKobo: number | null;
};
export type ZakatAssessmentRunSumAggregateOutputType = {
    netZakatableKobo: bigint | null;
    zakatDueKobo: bigint | null;
};
export type ZakatAssessmentRunMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    assessmentDateGregorian: Date | null;
    assessmentDateHijri: string | null;
    rateBasis: $Enums.ZakatRateBasis | null;
    status: $Enums.ZakatAssessmentStatus | null;
    netZakatableKobo: bigint | null;
    zakatDueKobo: bigint | null;
    workflowInstanceId: string | null;
    certifiedByUserId: string | null;
    certifiedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type ZakatAssessmentRunMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    assessmentDateGregorian: Date | null;
    assessmentDateHijri: string | null;
    rateBasis: $Enums.ZakatRateBasis | null;
    status: $Enums.ZakatAssessmentStatus | null;
    netZakatableKobo: bigint | null;
    zakatDueKobo: bigint | null;
    workflowInstanceId: string | null;
    certifiedByUserId: string | null;
    certifiedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type ZakatAssessmentRunCountAggregateOutputType = {
    id: number;
    investorId: number;
    assessmentDateGregorian: number;
    assessmentDateHijri: number;
    rateBasis: number;
    status: number;
    oneSeventeenBalancesSnapshot: number;
    netZakatableKobo: number;
    zakatDueKobo: number;
    workflowInstanceId: number;
    certifiedByUserId: number;
    certifiedAt: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type ZakatAssessmentRunAvgAggregateInputType = {
    netZakatableKobo?: true;
    zakatDueKobo?: true;
};
export type ZakatAssessmentRunSumAggregateInputType = {
    netZakatableKobo?: true;
    zakatDueKobo?: true;
};
export type ZakatAssessmentRunMinAggregateInputType = {
    id?: true;
    investorId?: true;
    assessmentDateGregorian?: true;
    assessmentDateHijri?: true;
    rateBasis?: true;
    status?: true;
    netZakatableKobo?: true;
    zakatDueKobo?: true;
    workflowInstanceId?: true;
    certifiedByUserId?: true;
    certifiedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type ZakatAssessmentRunMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    assessmentDateGregorian?: true;
    assessmentDateHijri?: true;
    rateBasis?: true;
    status?: true;
    netZakatableKobo?: true;
    zakatDueKobo?: true;
    workflowInstanceId?: true;
    certifiedByUserId?: true;
    certifiedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type ZakatAssessmentRunCountAggregateInputType = {
    id?: true;
    investorId?: true;
    assessmentDateGregorian?: true;
    assessmentDateHijri?: true;
    rateBasis?: true;
    status?: true;
    oneSeventeenBalancesSnapshot?: true;
    netZakatableKobo?: true;
    zakatDueKobo?: true;
    workflowInstanceId?: true;
    certifiedByUserId?: true;
    certifiedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type ZakatAssessmentRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatAssessmentRunWhereInput;
    orderBy?: Prisma.ZakatAssessmentRunOrderByWithRelationInput | Prisma.ZakatAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.ZakatAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ZakatAssessmentRunCountAggregateInputType;
    _avg?: ZakatAssessmentRunAvgAggregateInputType;
    _sum?: ZakatAssessmentRunSumAggregateInputType;
    _min?: ZakatAssessmentRunMinAggregateInputType;
    _max?: ZakatAssessmentRunMaxAggregateInputType;
};
export type GetZakatAssessmentRunAggregateType<T extends ZakatAssessmentRunAggregateArgs> = {
    [P in keyof T & keyof AggregateZakatAssessmentRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZakatAssessmentRun[P]> : Prisma.GetScalarType<T[P], AggregateZakatAssessmentRun[P]>;
};
export type ZakatAssessmentRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatAssessmentRunWhereInput;
    orderBy?: Prisma.ZakatAssessmentRunOrderByWithAggregationInput | Prisma.ZakatAssessmentRunOrderByWithAggregationInput[];
    by: Prisma.ZakatAssessmentRunScalarFieldEnum[] | Prisma.ZakatAssessmentRunScalarFieldEnum;
    having?: Prisma.ZakatAssessmentRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZakatAssessmentRunCountAggregateInputType | true;
    _avg?: ZakatAssessmentRunAvgAggregateInputType;
    _sum?: ZakatAssessmentRunSumAggregateInputType;
    _min?: ZakatAssessmentRunMinAggregateInputType;
    _max?: ZakatAssessmentRunMaxAggregateInputType;
};
export type ZakatAssessmentRunGroupByOutputType = {
    id: string;
    investorId: string;
    assessmentDateGregorian: Date;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: runtime.JsonValue;
    netZakatableKobo: bigint | null;
    zakatDueKobo: bigint | null;
    workflowInstanceId: string | null;
    certifiedByUserId: string | null;
    certifiedAt: Date | null;
    createdByUserId: string;
    createdAt: Date;
    _count: ZakatAssessmentRunCountAggregateOutputType | null;
    _avg: ZakatAssessmentRunAvgAggregateOutputType | null;
    _sum: ZakatAssessmentRunSumAggregateOutputType | null;
    _min: ZakatAssessmentRunMinAggregateOutputType | null;
    _max: ZakatAssessmentRunMaxAggregateOutputType | null;
};
export type GetZakatAssessmentRunGroupByPayload<T extends ZakatAssessmentRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZakatAssessmentRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZakatAssessmentRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZakatAssessmentRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZakatAssessmentRunGroupByOutputType[P]>;
}>>;
export type ZakatAssessmentRunWhereInput = {
    AND?: Prisma.ZakatAssessmentRunWhereInput | Prisma.ZakatAssessmentRunWhereInput[];
    OR?: Prisma.ZakatAssessmentRunWhereInput[];
    NOT?: Prisma.ZakatAssessmentRunWhereInput | Prisma.ZakatAssessmentRunWhereInput[];
    id?: Prisma.UuidFilter<"ZakatAssessmentRun"> | string;
    investorId?: Prisma.StringFilter<"ZakatAssessmentRun"> | string;
    assessmentDateGregorian?: Prisma.DateTimeFilter<"ZakatAssessmentRun"> | Date | string;
    assessmentDateHijri?: Prisma.StringFilter<"ZakatAssessmentRun"> | string;
    rateBasis?: Prisma.EnumZakatRateBasisFilter<"ZakatAssessmentRun"> | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFilter<"ZakatAssessmentRun"> | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonFilter<"ZakatAssessmentRun">;
    netZakatableKobo?: Prisma.BigIntNullableFilter<"ZakatAssessmentRun"> | bigint | number | null;
    zakatDueKobo?: Prisma.BigIntNullableFilter<"ZakatAssessmentRun"> | bigint | number | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"ZakatAssessmentRun"> | string | null;
    certifiedByUserId?: Prisma.UuidNullableFilter<"ZakatAssessmentRun"> | string | null;
    certifiedAt?: Prisma.DateTimeNullableFilter<"ZakatAssessmentRun"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"ZakatAssessmentRun"> | string;
    createdAt?: Prisma.DateTimeFilter<"ZakatAssessmentRun"> | Date | string;
    subscription?: Prisma.XOR<Prisma.ZakatClientSubscriptionScalarRelationFilter, Prisma.ZakatClientSubscriptionWhereInput>;
    items?: Prisma.ZakatDeclaredItemListRelationFilter;
};
export type ZakatAssessmentRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    assessmentDateGregorian?: Prisma.SortOrder;
    assessmentDateHijri?: Prisma.SortOrder;
    rateBasis?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    oneSeventeenBalancesSnapshot?: Prisma.SortOrder;
    netZakatableKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    zakatDueKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    certifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    subscription?: Prisma.ZakatClientSubscriptionOrderByWithRelationInput;
    items?: Prisma.ZakatDeclaredItemOrderByRelationAggregateInput;
};
export type ZakatAssessmentRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.ZakatAssessmentRunWhereInput | Prisma.ZakatAssessmentRunWhereInput[];
    OR?: Prisma.ZakatAssessmentRunWhereInput[];
    NOT?: Prisma.ZakatAssessmentRunWhereInput | Prisma.ZakatAssessmentRunWhereInput[];
    investorId?: Prisma.StringFilter<"ZakatAssessmentRun"> | string;
    assessmentDateGregorian?: Prisma.DateTimeFilter<"ZakatAssessmentRun"> | Date | string;
    assessmentDateHijri?: Prisma.StringFilter<"ZakatAssessmentRun"> | string;
    rateBasis?: Prisma.EnumZakatRateBasisFilter<"ZakatAssessmentRun"> | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFilter<"ZakatAssessmentRun"> | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonFilter<"ZakatAssessmentRun">;
    netZakatableKobo?: Prisma.BigIntNullableFilter<"ZakatAssessmentRun"> | bigint | number | null;
    zakatDueKobo?: Prisma.BigIntNullableFilter<"ZakatAssessmentRun"> | bigint | number | null;
    certifiedByUserId?: Prisma.UuidNullableFilter<"ZakatAssessmentRun"> | string | null;
    certifiedAt?: Prisma.DateTimeNullableFilter<"ZakatAssessmentRun"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"ZakatAssessmentRun"> | string;
    createdAt?: Prisma.DateTimeFilter<"ZakatAssessmentRun"> | Date | string;
    subscription?: Prisma.XOR<Prisma.ZakatClientSubscriptionScalarRelationFilter, Prisma.ZakatClientSubscriptionWhereInput>;
    items?: Prisma.ZakatDeclaredItemListRelationFilter;
}, "id" | "workflowInstanceId">;
export type ZakatAssessmentRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    assessmentDateGregorian?: Prisma.SortOrder;
    assessmentDateHijri?: Prisma.SortOrder;
    rateBasis?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    oneSeventeenBalancesSnapshot?: Prisma.SortOrder;
    netZakatableKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    zakatDueKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    certifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ZakatAssessmentRunCountOrderByAggregateInput;
    _avg?: Prisma.ZakatAssessmentRunAvgOrderByAggregateInput;
    _max?: Prisma.ZakatAssessmentRunMaxOrderByAggregateInput;
    _min?: Prisma.ZakatAssessmentRunMinOrderByAggregateInput;
    _sum?: Prisma.ZakatAssessmentRunSumOrderByAggregateInput;
};
export type ZakatAssessmentRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.ZakatAssessmentRunScalarWhereWithAggregatesInput | Prisma.ZakatAssessmentRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.ZakatAssessmentRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ZakatAssessmentRunScalarWhereWithAggregatesInput | Prisma.ZakatAssessmentRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ZakatAssessmentRun"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"ZakatAssessmentRun"> | string;
    assessmentDateGregorian?: Prisma.DateTimeWithAggregatesFilter<"ZakatAssessmentRun"> | Date | string;
    assessmentDateHijri?: Prisma.StringWithAggregatesFilter<"ZakatAssessmentRun"> | string;
    rateBasis?: Prisma.EnumZakatRateBasisWithAggregatesFilter<"ZakatAssessmentRun"> | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusWithAggregatesFilter<"ZakatAssessmentRun"> | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonWithAggregatesFilter<"ZakatAssessmentRun">;
    netZakatableKobo?: Prisma.BigIntNullableWithAggregatesFilter<"ZakatAssessmentRun"> | bigint | number | null;
    zakatDueKobo?: Prisma.BigIntNullableWithAggregatesFilter<"ZakatAssessmentRun"> | bigint | number | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatAssessmentRun"> | string | null;
    certifiedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatAssessmentRun"> | string | null;
    certifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ZakatAssessmentRun"> | Date | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"ZakatAssessmentRun"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ZakatAssessmentRun"> | Date | string;
};
export type ZakatAssessmentRunCreateInput = {
    id?: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    subscription: Prisma.ZakatClientSubscriptionCreateNestedOneWithoutRunsInput;
    items?: Prisma.ZakatDeclaredItemCreateNestedManyWithoutRunInput;
};
export type ZakatAssessmentRunUncheckedCreateInput = {
    id?: string;
    investorId: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    items?: Prisma.ZakatDeclaredItemUncheckedCreateNestedManyWithoutRunInput;
};
export type ZakatAssessmentRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.ZakatClientSubscriptionUpdateOneRequiredWithoutRunsNestedInput;
    items?: Prisma.ZakatDeclaredItemUpdateManyWithoutRunNestedInput;
};
export type ZakatAssessmentRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ZakatDeclaredItemUncheckedUpdateManyWithoutRunNestedInput;
};
export type ZakatAssessmentRunCreateManyInput = {
    id?: string;
    investorId: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ZakatAssessmentRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatAssessmentRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatAssessmentRunListRelationFilter = {
    every?: Prisma.ZakatAssessmentRunWhereInput;
    some?: Prisma.ZakatAssessmentRunWhereInput;
    none?: Prisma.ZakatAssessmentRunWhereInput;
};
export type ZakatAssessmentRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ZakatAssessmentRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    assessmentDateGregorian?: Prisma.SortOrder;
    assessmentDateHijri?: Prisma.SortOrder;
    rateBasis?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    oneSeventeenBalancesSnapshot?: Prisma.SortOrder;
    netZakatableKobo?: Prisma.SortOrder;
    zakatDueKobo?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrder;
    certifiedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ZakatAssessmentRunAvgOrderByAggregateInput = {
    netZakatableKobo?: Prisma.SortOrder;
    zakatDueKobo?: Prisma.SortOrder;
};
export type ZakatAssessmentRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    assessmentDateGregorian?: Prisma.SortOrder;
    assessmentDateHijri?: Prisma.SortOrder;
    rateBasis?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    netZakatableKobo?: Prisma.SortOrder;
    zakatDueKobo?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrder;
    certifiedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ZakatAssessmentRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    assessmentDateGregorian?: Prisma.SortOrder;
    assessmentDateHijri?: Prisma.SortOrder;
    rateBasis?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    netZakatableKobo?: Prisma.SortOrder;
    zakatDueKobo?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    certifiedByUserId?: Prisma.SortOrder;
    certifiedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ZakatAssessmentRunSumOrderByAggregateInput = {
    netZakatableKobo?: Prisma.SortOrder;
    zakatDueKobo?: Prisma.SortOrder;
};
export type ZakatAssessmentRunScalarRelationFilter = {
    is?: Prisma.ZakatAssessmentRunWhereInput;
    isNot?: Prisma.ZakatAssessmentRunWhereInput;
};
export type ZakatAssessmentRunCreateNestedManyWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput> | Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput[] | Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput | Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput[];
    createMany?: Prisma.ZakatAssessmentRunCreateManySubscriptionInputEnvelope;
    connect?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
};
export type ZakatAssessmentRunUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput> | Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput[] | Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput | Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput[];
    createMany?: Prisma.ZakatAssessmentRunCreateManySubscriptionInputEnvelope;
    connect?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
};
export type ZakatAssessmentRunUpdateManyWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput> | Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput[] | Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput | Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput[];
    upsert?: Prisma.ZakatAssessmentRunUpsertWithWhereUniqueWithoutSubscriptionInput | Prisma.ZakatAssessmentRunUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: Prisma.ZakatAssessmentRunCreateManySubscriptionInputEnvelope;
    set?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    disconnect?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    delete?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    connect?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    update?: Prisma.ZakatAssessmentRunUpdateWithWhereUniqueWithoutSubscriptionInput | Prisma.ZakatAssessmentRunUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?: Prisma.ZakatAssessmentRunUpdateManyWithWhereWithoutSubscriptionInput | Prisma.ZakatAssessmentRunUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: Prisma.ZakatAssessmentRunScalarWhereInput | Prisma.ZakatAssessmentRunScalarWhereInput[];
};
export type ZakatAssessmentRunUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput> | Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput[] | Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput | Prisma.ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput[];
    upsert?: Prisma.ZakatAssessmentRunUpsertWithWhereUniqueWithoutSubscriptionInput | Prisma.ZakatAssessmentRunUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: Prisma.ZakatAssessmentRunCreateManySubscriptionInputEnvelope;
    set?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    disconnect?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    delete?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    connect?: Prisma.ZakatAssessmentRunWhereUniqueInput | Prisma.ZakatAssessmentRunWhereUniqueInput[];
    update?: Prisma.ZakatAssessmentRunUpdateWithWhereUniqueWithoutSubscriptionInput | Prisma.ZakatAssessmentRunUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?: Prisma.ZakatAssessmentRunUpdateManyWithWhereWithoutSubscriptionInput | Prisma.ZakatAssessmentRunUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: Prisma.ZakatAssessmentRunScalarWhereInput | Prisma.ZakatAssessmentRunScalarWhereInput[];
};
export type EnumZakatRateBasisFieldUpdateOperationsInput = {
    set?: $Enums.ZakatRateBasis;
};
export type EnumZakatAssessmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ZakatAssessmentStatus;
};
export type ZakatAssessmentRunCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutItemsInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ZakatAssessmentRunCreateOrConnectWithoutItemsInput;
    connect?: Prisma.ZakatAssessmentRunWhereUniqueInput;
};
export type ZakatAssessmentRunUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutItemsInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ZakatAssessmentRunCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.ZakatAssessmentRunUpsertWithoutItemsInput;
    connect?: Prisma.ZakatAssessmentRunWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ZakatAssessmentRunUpdateToOneWithWhereWithoutItemsInput, Prisma.ZakatAssessmentRunUpdateWithoutItemsInput>, Prisma.ZakatAssessmentRunUncheckedUpdateWithoutItemsInput>;
};
export type ZakatAssessmentRunCreateWithoutSubscriptionInput = {
    id?: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    items?: Prisma.ZakatDeclaredItemCreateNestedManyWithoutRunInput;
};
export type ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    items?: Prisma.ZakatDeclaredItemUncheckedCreateNestedManyWithoutRunInput;
};
export type ZakatAssessmentRunCreateOrConnectWithoutSubscriptionInput = {
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput>;
};
export type ZakatAssessmentRunCreateManySubscriptionInputEnvelope = {
    data: Prisma.ZakatAssessmentRunCreateManySubscriptionInput | Prisma.ZakatAssessmentRunCreateManySubscriptionInput[];
    skipDuplicates?: boolean;
};
export type ZakatAssessmentRunUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedUpdateWithoutSubscriptionInput>;
    create: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutSubscriptionInput>;
};
export type ZakatAssessmentRunUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateWithoutSubscriptionInput, Prisma.ZakatAssessmentRunUncheckedUpdateWithoutSubscriptionInput>;
};
export type ZakatAssessmentRunUpdateManyWithWhereWithoutSubscriptionInput = {
    where: Prisma.ZakatAssessmentRunScalarWhereInput;
    data: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateManyMutationInput, Prisma.ZakatAssessmentRunUncheckedUpdateManyWithoutSubscriptionInput>;
};
export type ZakatAssessmentRunScalarWhereInput = {
    AND?: Prisma.ZakatAssessmentRunScalarWhereInput | Prisma.ZakatAssessmentRunScalarWhereInput[];
    OR?: Prisma.ZakatAssessmentRunScalarWhereInput[];
    NOT?: Prisma.ZakatAssessmentRunScalarWhereInput | Prisma.ZakatAssessmentRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"ZakatAssessmentRun"> | string;
    investorId?: Prisma.StringFilter<"ZakatAssessmentRun"> | string;
    assessmentDateGregorian?: Prisma.DateTimeFilter<"ZakatAssessmentRun"> | Date | string;
    assessmentDateHijri?: Prisma.StringFilter<"ZakatAssessmentRun"> | string;
    rateBasis?: Prisma.EnumZakatRateBasisFilter<"ZakatAssessmentRun"> | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFilter<"ZakatAssessmentRun"> | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonFilter<"ZakatAssessmentRun">;
    netZakatableKobo?: Prisma.BigIntNullableFilter<"ZakatAssessmentRun"> | bigint | number | null;
    zakatDueKobo?: Prisma.BigIntNullableFilter<"ZakatAssessmentRun"> | bigint | number | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"ZakatAssessmentRun"> | string | null;
    certifiedByUserId?: Prisma.UuidNullableFilter<"ZakatAssessmentRun"> | string | null;
    certifiedAt?: Prisma.DateTimeNullableFilter<"ZakatAssessmentRun"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"ZakatAssessmentRun"> | string;
    createdAt?: Prisma.DateTimeFilter<"ZakatAssessmentRun"> | Date | string;
};
export type ZakatAssessmentRunCreateWithoutItemsInput = {
    id?: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    subscription: Prisma.ZakatClientSubscriptionCreateNestedOneWithoutRunsInput;
};
export type ZakatAssessmentRunUncheckedCreateWithoutItemsInput = {
    id?: string;
    investorId: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ZakatAssessmentRunCreateOrConnectWithoutItemsInput = {
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutItemsInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutItemsInput>;
};
export type ZakatAssessmentRunUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateWithoutItemsInput, Prisma.ZakatAssessmentRunUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ZakatAssessmentRunCreateWithoutItemsInput, Prisma.ZakatAssessmentRunUncheckedCreateWithoutItemsInput>;
    where?: Prisma.ZakatAssessmentRunWhereInput;
};
export type ZakatAssessmentRunUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.ZakatAssessmentRunWhereInput;
    data: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateWithoutItemsInput, Prisma.ZakatAssessmentRunUncheckedUpdateWithoutItemsInput>;
};
export type ZakatAssessmentRunUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.ZakatClientSubscriptionUpdateOneRequiredWithoutRunsNestedInput;
};
export type ZakatAssessmentRunUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatAssessmentRunCreateManySubscriptionInput = {
    id?: string;
    assessmentDateGregorian: Date | string;
    assessmentDateHijri: string;
    rateBasis: $Enums.ZakatRateBasis;
    status?: $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: bigint | number | null;
    zakatDueKobo?: bigint | number | null;
    workflowInstanceId?: string | null;
    certifiedByUserId?: string | null;
    certifiedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ZakatAssessmentRunUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ZakatDeclaredItemUpdateManyWithoutRunNestedInput;
};
export type ZakatAssessmentRunUncheckedUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ZakatDeclaredItemUncheckedUpdateManyWithoutRunNestedInput;
};
export type ZakatAssessmentRunUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assessmentDateGregorian?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentDateHijri?: Prisma.StringFieldUpdateOperationsInput | string;
    rateBasis?: Prisma.EnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis;
    status?: Prisma.EnumZakatAssessmentStatusFieldUpdateOperationsInput | $Enums.ZakatAssessmentStatus;
    oneSeventeenBalancesSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    netZakatableKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    zakatDueKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatAssessmentRunCountOutputType = {
    items: number;
};
export type ZakatAssessmentRunCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | ZakatAssessmentRunCountOutputTypeCountItemsArgs;
};
export type ZakatAssessmentRunCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunCountOutputTypeSelect<ExtArgs> | null;
};
export type ZakatAssessmentRunCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatDeclaredItemWhereInput;
};
export type ZakatAssessmentRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    assessmentDateGregorian?: boolean;
    assessmentDateHijri?: boolean;
    rateBasis?: boolean;
    status?: boolean;
    oneSeventeenBalancesSnapshot?: boolean;
    netZakatableKobo?: boolean;
    zakatDueKobo?: boolean;
    workflowInstanceId?: boolean;
    certifiedByUserId?: boolean;
    certifiedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    subscription?: boolean | Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.ZakatAssessmentRun$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ZakatAssessmentRunCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatAssessmentRun"]>;
export type ZakatAssessmentRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    assessmentDateGregorian?: boolean;
    assessmentDateHijri?: boolean;
    rateBasis?: boolean;
    status?: boolean;
    oneSeventeenBalancesSnapshot?: boolean;
    netZakatableKobo?: boolean;
    zakatDueKobo?: boolean;
    workflowInstanceId?: boolean;
    certifiedByUserId?: boolean;
    certifiedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    subscription?: boolean | Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatAssessmentRun"]>;
export type ZakatAssessmentRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    assessmentDateGregorian?: boolean;
    assessmentDateHijri?: boolean;
    rateBasis?: boolean;
    status?: boolean;
    oneSeventeenBalancesSnapshot?: boolean;
    netZakatableKobo?: boolean;
    zakatDueKobo?: boolean;
    workflowInstanceId?: boolean;
    certifiedByUserId?: boolean;
    certifiedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    subscription?: boolean | Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatAssessmentRun"]>;
export type ZakatAssessmentRunSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    assessmentDateGregorian?: boolean;
    assessmentDateHijri?: boolean;
    rateBasis?: boolean;
    status?: boolean;
    oneSeventeenBalancesSnapshot?: boolean;
    netZakatableKobo?: boolean;
    zakatDueKobo?: boolean;
    workflowInstanceId?: boolean;
    certifiedByUserId?: boolean;
    certifiedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type ZakatAssessmentRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "assessmentDateGregorian" | "assessmentDateHijri" | "rateBasis" | "status" | "oneSeventeenBalancesSnapshot" | "netZakatableKobo" | "zakatDueKobo" | "workflowInstanceId" | "certifiedByUserId" | "certifiedAt" | "createdByUserId" | "createdAt", ExtArgs["result"]["zakatAssessmentRun"]>;
export type ZakatAssessmentRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscription?: boolean | Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.ZakatAssessmentRun$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ZakatAssessmentRunCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ZakatAssessmentRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscription?: boolean | Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs>;
};
export type ZakatAssessmentRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscription?: boolean | Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs>;
};
export type $ZakatAssessmentRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ZakatAssessmentRun";
    objects: {
        subscription: Prisma.$ZakatClientSubscriptionPayload<ExtArgs>;
        items: Prisma.$ZakatDeclaredItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        assessmentDateGregorian: Date;
        assessmentDateHijri: string;
        rateBasis: $Enums.ZakatRateBasis;
        status: $Enums.ZakatAssessmentStatus;
        oneSeventeenBalancesSnapshot: runtime.JsonValue;
        netZakatableKobo: bigint | null;
        zakatDueKobo: bigint | null;
        workflowInstanceId: string | null;
        certifiedByUserId: string | null;
        certifiedAt: Date | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["zakatAssessmentRun"]>;
    composites: {};
};
export type ZakatAssessmentRunGetPayload<S extends boolean | null | undefined | ZakatAssessmentRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload, S>;
export type ZakatAssessmentRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ZakatAssessmentRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZakatAssessmentRunCountAggregateInputType | true;
};
export interface ZakatAssessmentRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ZakatAssessmentRun'];
        meta: {
            name: 'ZakatAssessmentRun';
        };
    };
    findUnique<T extends ZakatAssessmentRunFindUniqueArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ZakatAssessmentRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ZakatAssessmentRunFindFirstArgs>(args?: Prisma.SelectSubset<T, ZakatAssessmentRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ZakatAssessmentRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ZakatAssessmentRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ZakatAssessmentRunFindManyArgs>(args?: Prisma.SelectSubset<T, ZakatAssessmentRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ZakatAssessmentRunCreateArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunCreateArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ZakatAssessmentRunCreateManyArgs>(args?: Prisma.SelectSubset<T, ZakatAssessmentRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ZakatAssessmentRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ZakatAssessmentRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ZakatAssessmentRunDeleteArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunDeleteArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ZakatAssessmentRunUpdateArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunUpdateArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ZakatAssessmentRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, ZakatAssessmentRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ZakatAssessmentRunUpdateManyArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ZakatAssessmentRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ZakatAssessmentRunUpsertArgs>(args: Prisma.SelectSubset<T, ZakatAssessmentRunUpsertArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ZakatAssessmentRunCountArgs>(args?: Prisma.Subset<T, ZakatAssessmentRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZakatAssessmentRunCountAggregateOutputType> : number>;
    aggregate<T extends ZakatAssessmentRunAggregateArgs>(args: Prisma.Subset<T, ZakatAssessmentRunAggregateArgs>): Prisma.PrismaPromise<GetZakatAssessmentRunAggregateType<T>>;
    groupBy<T extends ZakatAssessmentRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ZakatAssessmentRunGroupByArgs['orderBy'];
    } : {
        orderBy?: ZakatAssessmentRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ZakatAssessmentRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZakatAssessmentRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ZakatAssessmentRunFieldRefs;
}
export interface Prisma__ZakatAssessmentRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subscription<T extends Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ZakatClientSubscriptionDefaultArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.ZakatAssessmentRun$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ZakatAssessmentRun$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ZakatAssessmentRunFieldRefs {
    readonly id: Prisma.FieldRef<"ZakatAssessmentRun", 'String'>;
    readonly investorId: Prisma.FieldRef<"ZakatAssessmentRun", 'String'>;
    readonly assessmentDateGregorian: Prisma.FieldRef<"ZakatAssessmentRun", 'DateTime'>;
    readonly assessmentDateHijri: Prisma.FieldRef<"ZakatAssessmentRun", 'String'>;
    readonly rateBasis: Prisma.FieldRef<"ZakatAssessmentRun", 'ZakatRateBasis'>;
    readonly status: Prisma.FieldRef<"ZakatAssessmentRun", 'ZakatAssessmentStatus'>;
    readonly oneSeventeenBalancesSnapshot: Prisma.FieldRef<"ZakatAssessmentRun", 'Json'>;
    readonly netZakatableKobo: Prisma.FieldRef<"ZakatAssessmentRun", 'BigInt'>;
    readonly zakatDueKobo: Prisma.FieldRef<"ZakatAssessmentRun", 'BigInt'>;
    readonly workflowInstanceId: Prisma.FieldRef<"ZakatAssessmentRun", 'String'>;
    readonly certifiedByUserId: Prisma.FieldRef<"ZakatAssessmentRun", 'String'>;
    readonly certifiedAt: Prisma.FieldRef<"ZakatAssessmentRun", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"ZakatAssessmentRun", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ZakatAssessmentRun", 'DateTime'>;
}
export type ZakatAssessmentRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
};
export type ZakatAssessmentRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
};
export type ZakatAssessmentRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.ZakatAssessmentRunWhereInput;
    orderBy?: Prisma.ZakatAssessmentRunOrderByWithRelationInput | Prisma.ZakatAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.ZakatAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatAssessmentRunScalarFieldEnum | Prisma.ZakatAssessmentRunScalarFieldEnum[];
};
export type ZakatAssessmentRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.ZakatAssessmentRunWhereInput;
    orderBy?: Prisma.ZakatAssessmentRunOrderByWithRelationInput | Prisma.ZakatAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.ZakatAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatAssessmentRunScalarFieldEnum | Prisma.ZakatAssessmentRunScalarFieldEnum[];
};
export type ZakatAssessmentRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.ZakatAssessmentRunWhereInput;
    orderBy?: Prisma.ZakatAssessmentRunOrderByWithRelationInput | Prisma.ZakatAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.ZakatAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatAssessmentRunScalarFieldEnum | Prisma.ZakatAssessmentRunScalarFieldEnum[];
};
export type ZakatAssessmentRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatAssessmentRunCreateInput, Prisma.ZakatAssessmentRunUncheckedCreateInput>;
};
export type ZakatAssessmentRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ZakatAssessmentRunCreateManyInput | Prisma.ZakatAssessmentRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ZakatAssessmentRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    data: Prisma.ZakatAssessmentRunCreateManyInput | Prisma.ZakatAssessmentRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ZakatAssessmentRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ZakatAssessmentRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateInput, Prisma.ZakatAssessmentRunUncheckedUpdateInput>;
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
};
export type ZakatAssessmentRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateManyMutationInput, Prisma.ZakatAssessmentRunUncheckedUpdateManyInput>;
    where?: Prisma.ZakatAssessmentRunWhereInput;
    limit?: number;
};
export type ZakatAssessmentRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateManyMutationInput, Prisma.ZakatAssessmentRunUncheckedUpdateManyInput>;
    where?: Prisma.ZakatAssessmentRunWhereInput;
    limit?: number;
    include?: Prisma.ZakatAssessmentRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ZakatAssessmentRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatAssessmentRunCreateInput, Prisma.ZakatAssessmentRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ZakatAssessmentRunUpdateInput, Prisma.ZakatAssessmentRunUncheckedUpdateInput>;
};
export type ZakatAssessmentRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.ZakatAssessmentRunWhereUniqueInput;
};
export type ZakatAssessmentRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatAssessmentRunWhereInput;
    limit?: number;
};
export type ZakatAssessmentRun$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where?: Prisma.ZakatDeclaredItemWhereInput;
    orderBy?: Prisma.ZakatDeclaredItemOrderByWithRelationInput | Prisma.ZakatDeclaredItemOrderByWithRelationInput[];
    cursor?: Prisma.ZakatDeclaredItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatDeclaredItemScalarFieldEnum | Prisma.ZakatDeclaredItemScalarFieldEnum[];
};
export type ZakatAssessmentRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
};
