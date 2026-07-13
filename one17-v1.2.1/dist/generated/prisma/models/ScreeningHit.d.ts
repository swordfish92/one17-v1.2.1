import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScreeningHitModel = runtime.Types.Result.DefaultSelection<Prisma.$ScreeningHitPayload>;
export type AggregateScreeningHit = {
    _count: ScreeningHitCountAggregateOutputType | null;
    _avg: ScreeningHitAvgAggregateOutputType | null;
    _sum: ScreeningHitSumAggregateOutputType | null;
    _min: ScreeningHitMinAggregateOutputType | null;
    _max: ScreeningHitMaxAggregateOutputType | null;
};
export type ScreeningHitAvgAggregateOutputType = {
    matchScore: number | null;
};
export type ScreeningHitSumAggregateOutputType = {
    matchScore: number | null;
};
export type ScreeningHitMinAggregateOutputType = {
    id: string | null;
    screeningRunId: string | null;
    listEntryId: string | null;
    matchedName: string | null;
    matchScore: number | null;
    status: string | null;
    pendingOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale: string | null;
    decisionProposedByUserId: string | null;
    decisionWorkflowInstanceId: string | null;
    adjudicatedOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale: string | null;
    adjudicatedByUserId: string | null;
    adjudicatedAt: Date | null;
    createdAt: Date | null;
};
export type ScreeningHitMaxAggregateOutputType = {
    id: string | null;
    screeningRunId: string | null;
    listEntryId: string | null;
    matchedName: string | null;
    matchScore: number | null;
    status: string | null;
    pendingOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale: string | null;
    decisionProposedByUserId: string | null;
    decisionWorkflowInstanceId: string | null;
    adjudicatedOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale: string | null;
    adjudicatedByUserId: string | null;
    adjudicatedAt: Date | null;
    createdAt: Date | null;
};
export type ScreeningHitCountAggregateOutputType = {
    id: number;
    screeningRunId: number;
    listEntryId: number;
    matchedName: number;
    matchScore: number;
    status: number;
    pendingOutcome: number;
    pendingRationale: number;
    decisionProposedByUserId: number;
    decisionWorkflowInstanceId: number;
    adjudicatedOutcome: number;
    adjudicatedRationale: number;
    adjudicatedByUserId: number;
    adjudicatedAt: number;
    createdAt: number;
    _all: number;
};
export type ScreeningHitAvgAggregateInputType = {
    matchScore?: true;
};
export type ScreeningHitSumAggregateInputType = {
    matchScore?: true;
};
export type ScreeningHitMinAggregateInputType = {
    id?: true;
    screeningRunId?: true;
    listEntryId?: true;
    matchedName?: true;
    matchScore?: true;
    status?: true;
    pendingOutcome?: true;
    pendingRationale?: true;
    decisionProposedByUserId?: true;
    decisionWorkflowInstanceId?: true;
    adjudicatedOutcome?: true;
    adjudicatedRationale?: true;
    adjudicatedByUserId?: true;
    adjudicatedAt?: true;
    createdAt?: true;
};
export type ScreeningHitMaxAggregateInputType = {
    id?: true;
    screeningRunId?: true;
    listEntryId?: true;
    matchedName?: true;
    matchScore?: true;
    status?: true;
    pendingOutcome?: true;
    pendingRationale?: true;
    decisionProposedByUserId?: true;
    decisionWorkflowInstanceId?: true;
    adjudicatedOutcome?: true;
    adjudicatedRationale?: true;
    adjudicatedByUserId?: true;
    adjudicatedAt?: true;
    createdAt?: true;
};
export type ScreeningHitCountAggregateInputType = {
    id?: true;
    screeningRunId?: true;
    listEntryId?: true;
    matchedName?: true;
    matchScore?: true;
    status?: true;
    pendingOutcome?: true;
    pendingRationale?: true;
    decisionProposedByUserId?: true;
    decisionWorkflowInstanceId?: true;
    adjudicatedOutcome?: true;
    adjudicatedRationale?: true;
    adjudicatedByUserId?: true;
    adjudicatedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ScreeningHitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningHitWhereInput;
    orderBy?: Prisma.ScreeningHitOrderByWithRelationInput | Prisma.ScreeningHitOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningHitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScreeningHitCountAggregateInputType;
    _avg?: ScreeningHitAvgAggregateInputType;
    _sum?: ScreeningHitSumAggregateInputType;
    _min?: ScreeningHitMinAggregateInputType;
    _max?: ScreeningHitMaxAggregateInputType;
};
export type GetScreeningHitAggregateType<T extends ScreeningHitAggregateArgs> = {
    [P in keyof T & keyof AggregateScreeningHit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScreeningHit[P]> : Prisma.GetScalarType<T[P], AggregateScreeningHit[P]>;
};
export type ScreeningHitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningHitWhereInput;
    orderBy?: Prisma.ScreeningHitOrderByWithAggregationInput | Prisma.ScreeningHitOrderByWithAggregationInput[];
    by: Prisma.ScreeningHitScalarFieldEnum[] | Prisma.ScreeningHitScalarFieldEnum;
    having?: Prisma.ScreeningHitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScreeningHitCountAggregateInputType | true;
    _avg?: ScreeningHitAvgAggregateInputType;
    _sum?: ScreeningHitSumAggregateInputType;
    _min?: ScreeningHitMinAggregateInputType;
    _max?: ScreeningHitMaxAggregateInputType;
};
export type ScreeningHitGroupByOutputType = {
    id: string;
    screeningRunId: string;
    listEntryId: string | null;
    matchedName: string;
    matchScore: number;
    status: string;
    pendingOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale: string | null;
    decisionProposedByUserId: string | null;
    decisionWorkflowInstanceId: string | null;
    adjudicatedOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale: string | null;
    adjudicatedByUserId: string | null;
    adjudicatedAt: Date | null;
    createdAt: Date;
    _count: ScreeningHitCountAggregateOutputType | null;
    _avg: ScreeningHitAvgAggregateOutputType | null;
    _sum: ScreeningHitSumAggregateOutputType | null;
    _min: ScreeningHitMinAggregateOutputType | null;
    _max: ScreeningHitMaxAggregateOutputType | null;
};
export type GetScreeningHitGroupByPayload<T extends ScreeningHitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScreeningHitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScreeningHitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScreeningHitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScreeningHitGroupByOutputType[P]>;
}>>;
export type ScreeningHitWhereInput = {
    AND?: Prisma.ScreeningHitWhereInput | Prisma.ScreeningHitWhereInput[];
    OR?: Prisma.ScreeningHitWhereInput[];
    NOT?: Prisma.ScreeningHitWhereInput | Prisma.ScreeningHitWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningHit"> | string;
    screeningRunId?: Prisma.UuidFilter<"ScreeningHit"> | string;
    listEntryId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    matchedName?: Prisma.StringFilter<"ScreeningHit"> | string;
    matchScore?: Prisma.IntFilter<"ScreeningHit"> | number;
    status?: Prisma.StringFilter<"ScreeningHit"> | string;
    pendingOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.StringNullableFilter<"ScreeningHit"> | string | null;
    decisionProposedByUserId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    decisionWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.StringNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedByUserId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedAt?: Prisma.DateTimeNullableFilter<"ScreeningHit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ScreeningHit"> | Date | string;
    run?: Prisma.XOR<Prisma.ScreeningRunScalarRelationFilter, Prisma.ScreeningRunWhereInput>;
    listEntry?: Prisma.XOR<Prisma.ScreeningListEntryNullableScalarRelationFilter, Prisma.ScreeningListEntryWhereInput> | null;
};
export type ScreeningHitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    screeningRunId?: Prisma.SortOrder;
    listEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedName?: Prisma.SortOrder;
    matchScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pendingOutcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingRationale?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedOutcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedRationale?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    run?: Prisma.ScreeningRunOrderByWithRelationInput;
    listEntry?: Prisma.ScreeningListEntryOrderByWithRelationInput;
};
export type ScreeningHitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    decisionWorkflowInstanceId?: string;
    AND?: Prisma.ScreeningHitWhereInput | Prisma.ScreeningHitWhereInput[];
    OR?: Prisma.ScreeningHitWhereInput[];
    NOT?: Prisma.ScreeningHitWhereInput | Prisma.ScreeningHitWhereInput[];
    screeningRunId?: Prisma.UuidFilter<"ScreeningHit"> | string;
    listEntryId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    matchedName?: Prisma.StringFilter<"ScreeningHit"> | string;
    matchScore?: Prisma.IntFilter<"ScreeningHit"> | number;
    status?: Prisma.StringFilter<"ScreeningHit"> | string;
    pendingOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.StringNullableFilter<"ScreeningHit"> | string | null;
    decisionProposedByUserId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.StringNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedByUserId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedAt?: Prisma.DateTimeNullableFilter<"ScreeningHit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ScreeningHit"> | Date | string;
    run?: Prisma.XOR<Prisma.ScreeningRunScalarRelationFilter, Prisma.ScreeningRunWhereInput>;
    listEntry?: Prisma.XOR<Prisma.ScreeningListEntryNullableScalarRelationFilter, Prisma.ScreeningListEntryWhereInput> | null;
}, "id" | "decisionWorkflowInstanceId">;
export type ScreeningHitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    screeningRunId?: Prisma.SortOrder;
    listEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    matchedName?: Prisma.SortOrder;
    matchScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pendingOutcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingRationale?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decisionWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedOutcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedRationale?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjudicatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScreeningHitCountOrderByAggregateInput;
    _avg?: Prisma.ScreeningHitAvgOrderByAggregateInput;
    _max?: Prisma.ScreeningHitMaxOrderByAggregateInput;
    _min?: Prisma.ScreeningHitMinOrderByAggregateInput;
    _sum?: Prisma.ScreeningHitSumOrderByAggregateInput;
};
export type ScreeningHitScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScreeningHitScalarWhereWithAggregatesInput | Prisma.ScreeningHitScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScreeningHitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScreeningHitScalarWhereWithAggregatesInput | Prisma.ScreeningHitScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ScreeningHit"> | string;
    screeningRunId?: Prisma.UuidWithAggregatesFilter<"ScreeningHit"> | string;
    listEntryId?: Prisma.UuidNullableWithAggregatesFilter<"ScreeningHit"> | string | null;
    matchedName?: Prisma.StringWithAggregatesFilter<"ScreeningHit"> | string;
    matchScore?: Prisma.IntWithAggregatesFilter<"ScreeningHit"> | number;
    status?: Prisma.StringWithAggregatesFilter<"ScreeningHit"> | string;
    pendingOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableWithAggregatesFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.StringNullableWithAggregatesFilter<"ScreeningHit"> | string | null;
    decisionProposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScreeningHit"> | string | null;
    decisionWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"ScreeningHit"> | string | null;
    adjudicatedOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableWithAggregatesFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.StringNullableWithAggregatesFilter<"ScreeningHit"> | string | null;
    adjudicatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScreeningHit"> | string | null;
    adjudicatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ScreeningHit"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScreeningHit"> | Date | string;
};
export type ScreeningHitCreateInput = {
    id?: string;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
    run: Prisma.ScreeningRunCreateNestedOneWithoutHitsInput;
    listEntry?: Prisma.ScreeningListEntryCreateNestedOneWithoutHitsInput;
};
export type ScreeningHitUncheckedCreateInput = {
    id?: string;
    screeningRunId: string;
    listEntryId?: string | null;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ScreeningHitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    run?: Prisma.ScreeningRunUpdateOneRequiredWithoutHitsNestedInput;
    listEntry?: Prisma.ScreeningListEntryUpdateOneWithoutHitsNestedInput;
};
export type ScreeningHitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screeningRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    listEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningHitCreateManyInput = {
    id?: string;
    screeningRunId: string;
    listEntryId?: string | null;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ScreeningHitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningHitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screeningRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    listEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningHitListRelationFilter = {
    every?: Prisma.ScreeningHitWhereInput;
    some?: Prisma.ScreeningHitWhereInput;
    none?: Prisma.ScreeningHitWhereInput;
};
export type ScreeningHitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScreeningHitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    screeningRunId?: Prisma.SortOrder;
    listEntryId?: Prisma.SortOrder;
    matchedName?: Prisma.SortOrder;
    matchScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pendingOutcome?: Prisma.SortOrder;
    pendingRationale?: Prisma.SortOrder;
    decisionProposedByUserId?: Prisma.SortOrder;
    decisionWorkflowInstanceId?: Prisma.SortOrder;
    adjudicatedOutcome?: Prisma.SortOrder;
    adjudicatedRationale?: Prisma.SortOrder;
    adjudicatedByUserId?: Prisma.SortOrder;
    adjudicatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningHitAvgOrderByAggregateInput = {
    matchScore?: Prisma.SortOrder;
};
export type ScreeningHitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    screeningRunId?: Prisma.SortOrder;
    listEntryId?: Prisma.SortOrder;
    matchedName?: Prisma.SortOrder;
    matchScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pendingOutcome?: Prisma.SortOrder;
    pendingRationale?: Prisma.SortOrder;
    decisionProposedByUserId?: Prisma.SortOrder;
    decisionWorkflowInstanceId?: Prisma.SortOrder;
    adjudicatedOutcome?: Prisma.SortOrder;
    adjudicatedRationale?: Prisma.SortOrder;
    adjudicatedByUserId?: Prisma.SortOrder;
    adjudicatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningHitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    screeningRunId?: Prisma.SortOrder;
    listEntryId?: Prisma.SortOrder;
    matchedName?: Prisma.SortOrder;
    matchScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pendingOutcome?: Prisma.SortOrder;
    pendingRationale?: Prisma.SortOrder;
    decisionProposedByUserId?: Prisma.SortOrder;
    decisionWorkflowInstanceId?: Prisma.SortOrder;
    adjudicatedOutcome?: Prisma.SortOrder;
    adjudicatedRationale?: Prisma.SortOrder;
    adjudicatedByUserId?: Prisma.SortOrder;
    adjudicatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningHitSumOrderByAggregateInput = {
    matchScore?: Prisma.SortOrder;
};
export type ScreeningHitCreateNestedManyWithoutListEntryInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutListEntryInput, Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput> | Prisma.ScreeningHitCreateWithoutListEntryInput[] | Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput | Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput[];
    createMany?: Prisma.ScreeningHitCreateManyListEntryInputEnvelope;
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
};
export type ScreeningHitUncheckedCreateNestedManyWithoutListEntryInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutListEntryInput, Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput> | Prisma.ScreeningHitCreateWithoutListEntryInput[] | Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput | Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput[];
    createMany?: Prisma.ScreeningHitCreateManyListEntryInputEnvelope;
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
};
export type ScreeningHitUpdateManyWithoutListEntryNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutListEntryInput, Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput> | Prisma.ScreeningHitCreateWithoutListEntryInput[] | Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput | Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput[];
    upsert?: Prisma.ScreeningHitUpsertWithWhereUniqueWithoutListEntryInput | Prisma.ScreeningHitUpsertWithWhereUniqueWithoutListEntryInput[];
    createMany?: Prisma.ScreeningHitCreateManyListEntryInputEnvelope;
    set?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    disconnect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    delete?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    update?: Prisma.ScreeningHitUpdateWithWhereUniqueWithoutListEntryInput | Prisma.ScreeningHitUpdateWithWhereUniqueWithoutListEntryInput[];
    updateMany?: Prisma.ScreeningHitUpdateManyWithWhereWithoutListEntryInput | Prisma.ScreeningHitUpdateManyWithWhereWithoutListEntryInput[];
    deleteMany?: Prisma.ScreeningHitScalarWhereInput | Prisma.ScreeningHitScalarWhereInput[];
};
export type ScreeningHitUncheckedUpdateManyWithoutListEntryNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutListEntryInput, Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput> | Prisma.ScreeningHitCreateWithoutListEntryInput[] | Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput | Prisma.ScreeningHitCreateOrConnectWithoutListEntryInput[];
    upsert?: Prisma.ScreeningHitUpsertWithWhereUniqueWithoutListEntryInput | Prisma.ScreeningHitUpsertWithWhereUniqueWithoutListEntryInput[];
    createMany?: Prisma.ScreeningHitCreateManyListEntryInputEnvelope;
    set?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    disconnect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    delete?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    update?: Prisma.ScreeningHitUpdateWithWhereUniqueWithoutListEntryInput | Prisma.ScreeningHitUpdateWithWhereUniqueWithoutListEntryInput[];
    updateMany?: Prisma.ScreeningHitUpdateManyWithWhereWithoutListEntryInput | Prisma.ScreeningHitUpdateManyWithWhereWithoutListEntryInput[];
    deleteMany?: Prisma.ScreeningHitScalarWhereInput | Prisma.ScreeningHitScalarWhereInput[];
};
export type ScreeningHitCreateNestedManyWithoutRunInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutRunInput, Prisma.ScreeningHitUncheckedCreateWithoutRunInput> | Prisma.ScreeningHitCreateWithoutRunInput[] | Prisma.ScreeningHitUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutRunInput | Prisma.ScreeningHitCreateOrConnectWithoutRunInput[];
    createMany?: Prisma.ScreeningHitCreateManyRunInputEnvelope;
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
};
export type ScreeningHitUncheckedCreateNestedManyWithoutRunInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutRunInput, Prisma.ScreeningHitUncheckedCreateWithoutRunInput> | Prisma.ScreeningHitCreateWithoutRunInput[] | Prisma.ScreeningHitUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutRunInput | Prisma.ScreeningHitCreateOrConnectWithoutRunInput[];
    createMany?: Prisma.ScreeningHitCreateManyRunInputEnvelope;
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
};
export type ScreeningHitUpdateManyWithoutRunNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutRunInput, Prisma.ScreeningHitUncheckedCreateWithoutRunInput> | Prisma.ScreeningHitCreateWithoutRunInput[] | Prisma.ScreeningHitUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutRunInput | Prisma.ScreeningHitCreateOrConnectWithoutRunInput[];
    upsert?: Prisma.ScreeningHitUpsertWithWhereUniqueWithoutRunInput | Prisma.ScreeningHitUpsertWithWhereUniqueWithoutRunInput[];
    createMany?: Prisma.ScreeningHitCreateManyRunInputEnvelope;
    set?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    disconnect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    delete?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    update?: Prisma.ScreeningHitUpdateWithWhereUniqueWithoutRunInput | Prisma.ScreeningHitUpdateWithWhereUniqueWithoutRunInput[];
    updateMany?: Prisma.ScreeningHitUpdateManyWithWhereWithoutRunInput | Prisma.ScreeningHitUpdateManyWithWhereWithoutRunInput[];
    deleteMany?: Prisma.ScreeningHitScalarWhereInput | Prisma.ScreeningHitScalarWhereInput[];
};
export type ScreeningHitUncheckedUpdateManyWithoutRunNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningHitCreateWithoutRunInput, Prisma.ScreeningHitUncheckedCreateWithoutRunInput> | Prisma.ScreeningHitCreateWithoutRunInput[] | Prisma.ScreeningHitUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ScreeningHitCreateOrConnectWithoutRunInput | Prisma.ScreeningHitCreateOrConnectWithoutRunInput[];
    upsert?: Prisma.ScreeningHitUpsertWithWhereUniqueWithoutRunInput | Prisma.ScreeningHitUpsertWithWhereUniqueWithoutRunInput[];
    createMany?: Prisma.ScreeningHitCreateManyRunInputEnvelope;
    set?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    disconnect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    delete?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    connect?: Prisma.ScreeningHitWhereUniqueInput | Prisma.ScreeningHitWhereUniqueInput[];
    update?: Prisma.ScreeningHitUpdateWithWhereUniqueWithoutRunInput | Prisma.ScreeningHitUpdateWithWhereUniqueWithoutRunInput[];
    updateMany?: Prisma.ScreeningHitUpdateManyWithWhereWithoutRunInput | Prisma.ScreeningHitUpdateManyWithWhereWithoutRunInput[];
    deleteMany?: Prisma.ScreeningHitScalarWhereInput | Prisma.ScreeningHitScalarWhereInput[];
};
export type NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.ScreeningHitAdjudicationOutcome | null;
};
export type ScreeningHitCreateWithoutListEntryInput = {
    id?: string;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
    run: Prisma.ScreeningRunCreateNestedOneWithoutHitsInput;
};
export type ScreeningHitUncheckedCreateWithoutListEntryInput = {
    id?: string;
    screeningRunId: string;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ScreeningHitCreateOrConnectWithoutListEntryInput = {
    where: Prisma.ScreeningHitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningHitCreateWithoutListEntryInput, Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput>;
};
export type ScreeningHitCreateManyListEntryInputEnvelope = {
    data: Prisma.ScreeningHitCreateManyListEntryInput | Prisma.ScreeningHitCreateManyListEntryInput[];
    skipDuplicates?: boolean;
};
export type ScreeningHitUpsertWithWhereUniqueWithoutListEntryInput = {
    where: Prisma.ScreeningHitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScreeningHitUpdateWithoutListEntryInput, Prisma.ScreeningHitUncheckedUpdateWithoutListEntryInput>;
    create: Prisma.XOR<Prisma.ScreeningHitCreateWithoutListEntryInput, Prisma.ScreeningHitUncheckedCreateWithoutListEntryInput>;
};
export type ScreeningHitUpdateWithWhereUniqueWithoutListEntryInput = {
    where: Prisma.ScreeningHitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScreeningHitUpdateWithoutListEntryInput, Prisma.ScreeningHitUncheckedUpdateWithoutListEntryInput>;
};
export type ScreeningHitUpdateManyWithWhereWithoutListEntryInput = {
    where: Prisma.ScreeningHitScalarWhereInput;
    data: Prisma.XOR<Prisma.ScreeningHitUpdateManyMutationInput, Prisma.ScreeningHitUncheckedUpdateManyWithoutListEntryInput>;
};
export type ScreeningHitScalarWhereInput = {
    AND?: Prisma.ScreeningHitScalarWhereInput | Prisma.ScreeningHitScalarWhereInput[];
    OR?: Prisma.ScreeningHitScalarWhereInput[];
    NOT?: Prisma.ScreeningHitScalarWhereInput | Prisma.ScreeningHitScalarWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningHit"> | string;
    screeningRunId?: Prisma.UuidFilter<"ScreeningHit"> | string;
    listEntryId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    matchedName?: Prisma.StringFilter<"ScreeningHit"> | string;
    matchScore?: Prisma.IntFilter<"ScreeningHit"> | number;
    status?: Prisma.StringFilter<"ScreeningHit"> | string;
    pendingOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.StringNullableFilter<"ScreeningHit"> | string | null;
    decisionProposedByUserId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    decisionWorkflowInstanceId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedOutcome?: Prisma.EnumScreeningHitAdjudicationOutcomeNullableFilter<"ScreeningHit"> | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.StringNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedByUserId?: Prisma.UuidNullableFilter<"ScreeningHit"> | string | null;
    adjudicatedAt?: Prisma.DateTimeNullableFilter<"ScreeningHit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ScreeningHit"> | Date | string;
};
export type ScreeningHitCreateWithoutRunInput = {
    id?: string;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
    listEntry?: Prisma.ScreeningListEntryCreateNestedOneWithoutHitsInput;
};
export type ScreeningHitUncheckedCreateWithoutRunInput = {
    id?: string;
    listEntryId?: string | null;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ScreeningHitCreateOrConnectWithoutRunInput = {
    where: Prisma.ScreeningHitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningHitCreateWithoutRunInput, Prisma.ScreeningHitUncheckedCreateWithoutRunInput>;
};
export type ScreeningHitCreateManyRunInputEnvelope = {
    data: Prisma.ScreeningHitCreateManyRunInput | Prisma.ScreeningHitCreateManyRunInput[];
    skipDuplicates?: boolean;
};
export type ScreeningHitUpsertWithWhereUniqueWithoutRunInput = {
    where: Prisma.ScreeningHitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScreeningHitUpdateWithoutRunInput, Prisma.ScreeningHitUncheckedUpdateWithoutRunInput>;
    create: Prisma.XOR<Prisma.ScreeningHitCreateWithoutRunInput, Prisma.ScreeningHitUncheckedCreateWithoutRunInput>;
};
export type ScreeningHitUpdateWithWhereUniqueWithoutRunInput = {
    where: Prisma.ScreeningHitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScreeningHitUpdateWithoutRunInput, Prisma.ScreeningHitUncheckedUpdateWithoutRunInput>;
};
export type ScreeningHitUpdateManyWithWhereWithoutRunInput = {
    where: Prisma.ScreeningHitScalarWhereInput;
    data: Prisma.XOR<Prisma.ScreeningHitUpdateManyMutationInput, Prisma.ScreeningHitUncheckedUpdateManyWithoutRunInput>;
};
export type ScreeningHitCreateManyListEntryInput = {
    id?: string;
    screeningRunId: string;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ScreeningHitUpdateWithoutListEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    run?: Prisma.ScreeningRunUpdateOneRequiredWithoutHitsNestedInput;
};
export type ScreeningHitUncheckedUpdateWithoutListEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screeningRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningHitUncheckedUpdateManyWithoutListEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screeningRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningHitCreateManyRunInput = {
    id?: string;
    listEntryId?: string | null;
    matchedName: string;
    matchScore: number;
    status?: string;
    pendingOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: string | null;
    decisionProposedByUserId?: string | null;
    decisionWorkflowInstanceId?: string | null;
    adjudicatedOutcome?: $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: string | null;
    adjudicatedByUserId?: string | null;
    adjudicatedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ScreeningHitUpdateWithoutRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listEntry?: Prisma.ScreeningListEntryUpdateOneWithoutHitsNestedInput;
};
export type ScreeningHitUncheckedUpdateWithoutRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningHitUncheckedUpdateManyWithoutRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matchedName?: Prisma.StringFieldUpdateOperationsInput | string;
    matchScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pendingOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    pendingRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decisionWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedOutcome?: Prisma.NullableEnumScreeningHitAdjudicationOutcomeFieldUpdateOperationsInput | $Enums.ScreeningHitAdjudicationOutcome | null;
    adjudicatedRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjudicatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningHitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    screeningRunId?: boolean;
    listEntryId?: boolean;
    matchedName?: boolean;
    matchScore?: boolean;
    status?: boolean;
    pendingOutcome?: boolean;
    pendingRationale?: boolean;
    decisionProposedByUserId?: boolean;
    decisionWorkflowInstanceId?: boolean;
    adjudicatedOutcome?: boolean;
    adjudicatedRationale?: boolean;
    adjudicatedByUserId?: boolean;
    adjudicatedAt?: boolean;
    createdAt?: boolean;
    run?: boolean | Prisma.ScreeningRunDefaultArgs<ExtArgs>;
    listEntry?: boolean | Prisma.ScreeningHit$listEntryArgs<ExtArgs>;
}, ExtArgs["result"]["screeningHit"]>;
export type ScreeningHitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    screeningRunId?: boolean;
    listEntryId?: boolean;
    matchedName?: boolean;
    matchScore?: boolean;
    status?: boolean;
    pendingOutcome?: boolean;
    pendingRationale?: boolean;
    decisionProposedByUserId?: boolean;
    decisionWorkflowInstanceId?: boolean;
    adjudicatedOutcome?: boolean;
    adjudicatedRationale?: boolean;
    adjudicatedByUserId?: boolean;
    adjudicatedAt?: boolean;
    createdAt?: boolean;
    run?: boolean | Prisma.ScreeningRunDefaultArgs<ExtArgs>;
    listEntry?: boolean | Prisma.ScreeningHit$listEntryArgs<ExtArgs>;
}, ExtArgs["result"]["screeningHit"]>;
export type ScreeningHitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    screeningRunId?: boolean;
    listEntryId?: boolean;
    matchedName?: boolean;
    matchScore?: boolean;
    status?: boolean;
    pendingOutcome?: boolean;
    pendingRationale?: boolean;
    decisionProposedByUserId?: boolean;
    decisionWorkflowInstanceId?: boolean;
    adjudicatedOutcome?: boolean;
    adjudicatedRationale?: boolean;
    adjudicatedByUserId?: boolean;
    adjudicatedAt?: boolean;
    createdAt?: boolean;
    run?: boolean | Prisma.ScreeningRunDefaultArgs<ExtArgs>;
    listEntry?: boolean | Prisma.ScreeningHit$listEntryArgs<ExtArgs>;
}, ExtArgs["result"]["screeningHit"]>;
export type ScreeningHitSelectScalar = {
    id?: boolean;
    screeningRunId?: boolean;
    listEntryId?: boolean;
    matchedName?: boolean;
    matchScore?: boolean;
    status?: boolean;
    pendingOutcome?: boolean;
    pendingRationale?: boolean;
    decisionProposedByUserId?: boolean;
    decisionWorkflowInstanceId?: boolean;
    adjudicatedOutcome?: boolean;
    adjudicatedRationale?: boolean;
    adjudicatedByUserId?: boolean;
    adjudicatedAt?: boolean;
    createdAt?: boolean;
};
export type ScreeningHitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "screeningRunId" | "listEntryId" | "matchedName" | "matchScore" | "status" | "pendingOutcome" | "pendingRationale" | "decisionProposedByUserId" | "decisionWorkflowInstanceId" | "adjudicatedOutcome" | "adjudicatedRationale" | "adjudicatedByUserId" | "adjudicatedAt" | "createdAt", ExtArgs["result"]["screeningHit"]>;
export type ScreeningHitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    run?: boolean | Prisma.ScreeningRunDefaultArgs<ExtArgs>;
    listEntry?: boolean | Prisma.ScreeningHit$listEntryArgs<ExtArgs>;
};
export type ScreeningHitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    run?: boolean | Prisma.ScreeningRunDefaultArgs<ExtArgs>;
    listEntry?: boolean | Prisma.ScreeningHit$listEntryArgs<ExtArgs>;
};
export type ScreeningHitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    run?: boolean | Prisma.ScreeningRunDefaultArgs<ExtArgs>;
    listEntry?: boolean | Prisma.ScreeningHit$listEntryArgs<ExtArgs>;
};
export type $ScreeningHitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScreeningHit";
    objects: {
        run: Prisma.$ScreeningRunPayload<ExtArgs>;
        listEntry: Prisma.$ScreeningListEntryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        screeningRunId: string;
        listEntryId: string | null;
        matchedName: string;
        matchScore: number;
        status: string;
        pendingOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
        pendingRationale: string | null;
        decisionProposedByUserId: string | null;
        decisionWorkflowInstanceId: string | null;
        adjudicatedOutcome: $Enums.ScreeningHitAdjudicationOutcome | null;
        adjudicatedRationale: string | null;
        adjudicatedByUserId: string | null;
        adjudicatedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["screeningHit"]>;
    composites: {};
};
export type ScreeningHitGetPayload<S extends boolean | null | undefined | ScreeningHitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload, S>;
export type ScreeningHitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScreeningHitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScreeningHitCountAggregateInputType | true;
};
export interface ScreeningHitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScreeningHit'];
        meta: {
            name: 'ScreeningHit';
        };
    };
    findUnique<T extends ScreeningHitFindUniqueArgs>(args: Prisma.SelectSubset<T, ScreeningHitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScreeningHitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScreeningHitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScreeningHitFindFirstArgs>(args?: Prisma.SelectSubset<T, ScreeningHitFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScreeningHitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScreeningHitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScreeningHitFindManyArgs>(args?: Prisma.SelectSubset<T, ScreeningHitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScreeningHitCreateArgs>(args: Prisma.SelectSubset<T, ScreeningHitCreateArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScreeningHitCreateManyArgs>(args?: Prisma.SelectSubset<T, ScreeningHitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScreeningHitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScreeningHitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScreeningHitDeleteArgs>(args: Prisma.SelectSubset<T, ScreeningHitDeleteArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScreeningHitUpdateArgs>(args: Prisma.SelectSubset<T, ScreeningHitUpdateArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScreeningHitDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScreeningHitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScreeningHitUpdateManyArgs>(args: Prisma.SelectSubset<T, ScreeningHitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScreeningHitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScreeningHitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScreeningHitUpsertArgs>(args: Prisma.SelectSubset<T, ScreeningHitUpsertArgs<ExtArgs>>): Prisma.Prisma__ScreeningHitClient<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScreeningHitCountArgs>(args?: Prisma.Subset<T, ScreeningHitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScreeningHitCountAggregateOutputType> : number>;
    aggregate<T extends ScreeningHitAggregateArgs>(args: Prisma.Subset<T, ScreeningHitAggregateArgs>): Prisma.PrismaPromise<GetScreeningHitAggregateType<T>>;
    groupBy<T extends ScreeningHitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScreeningHitGroupByArgs['orderBy'];
    } : {
        orderBy?: ScreeningHitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScreeningHitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningHitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScreeningHitFieldRefs;
}
export interface Prisma__ScreeningHitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    run<T extends Prisma.ScreeningRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScreeningRunDefaultArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listEntry<T extends Prisma.ScreeningHit$listEntryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScreeningHit$listEntryArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScreeningHitFieldRefs {
    readonly id: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly screeningRunId: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly listEntryId: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly matchedName: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly matchScore: Prisma.FieldRef<"ScreeningHit", 'Int'>;
    readonly status: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly pendingOutcome: Prisma.FieldRef<"ScreeningHit", 'ScreeningHitAdjudicationOutcome'>;
    readonly pendingRationale: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly decisionProposedByUserId: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly decisionWorkflowInstanceId: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly adjudicatedOutcome: Prisma.FieldRef<"ScreeningHit", 'ScreeningHitAdjudicationOutcome'>;
    readonly adjudicatedRationale: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly adjudicatedByUserId: Prisma.FieldRef<"ScreeningHit", 'String'>;
    readonly adjudicatedAt: Prisma.FieldRef<"ScreeningHit", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ScreeningHit", 'DateTime'>;
}
export type ScreeningHitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where: Prisma.ScreeningHitWhereUniqueInput;
};
export type ScreeningHitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where: Prisma.ScreeningHitWhereUniqueInput;
};
export type ScreeningHitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where?: Prisma.ScreeningHitWhereInput;
    orderBy?: Prisma.ScreeningHitOrderByWithRelationInput | Prisma.ScreeningHitOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningHitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningHitScalarFieldEnum | Prisma.ScreeningHitScalarFieldEnum[];
};
export type ScreeningHitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where?: Prisma.ScreeningHitWhereInput;
    orderBy?: Prisma.ScreeningHitOrderByWithRelationInput | Prisma.ScreeningHitOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningHitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningHitScalarFieldEnum | Prisma.ScreeningHitScalarFieldEnum[];
};
export type ScreeningHitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where?: Prisma.ScreeningHitWhereInput;
    orderBy?: Prisma.ScreeningHitOrderByWithRelationInput | Prisma.ScreeningHitOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningHitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningHitScalarFieldEnum | Prisma.ScreeningHitScalarFieldEnum[];
};
export type ScreeningHitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningHitCreateInput, Prisma.ScreeningHitUncheckedCreateInput>;
};
export type ScreeningHitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScreeningHitCreateManyInput | Prisma.ScreeningHitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningHitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    data: Prisma.ScreeningHitCreateManyInput | Prisma.ScreeningHitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScreeningHitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScreeningHitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningHitUpdateInput, Prisma.ScreeningHitUncheckedUpdateInput>;
    where: Prisma.ScreeningHitWhereUniqueInput;
};
export type ScreeningHitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScreeningHitUpdateManyMutationInput, Prisma.ScreeningHitUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningHitWhereInput;
    limit?: number;
};
export type ScreeningHitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningHitUpdateManyMutationInput, Prisma.ScreeningHitUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningHitWhereInput;
    limit?: number;
    include?: Prisma.ScreeningHitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScreeningHitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where: Prisma.ScreeningHitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningHitCreateInput, Prisma.ScreeningHitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScreeningHitUpdateInput, Prisma.ScreeningHitUncheckedUpdateInput>;
};
export type ScreeningHitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where: Prisma.ScreeningHitWhereUniqueInput;
};
export type ScreeningHitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningHitWhereInput;
    limit?: number;
};
export type ScreeningHit$listEntryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where?: Prisma.ScreeningListEntryWhereInput;
};
export type ScreeningHitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
};
