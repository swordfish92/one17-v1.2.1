import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SsbResolutionModel = runtime.Types.Result.DefaultSelection<Prisma.$SsbResolutionPayload>;
export type AggregateSsbResolution = {
    _count: SsbResolutionCountAggregateOutputType | null;
    _min: SsbResolutionMinAggregateOutputType | null;
    _max: SsbResolutionMaxAggregateOutputType | null;
};
export type SsbResolutionMinAggregateOutputType = {
    id: string | null;
    resolutionRef: string | null;
    resolutionDate: Date | null;
    proposedByMemberId: string | null;
    summary: string | null;
    standardApplied: string | null;
    voteResult: string | null;
    effectiveDate: Date | null;
    status: string | null;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type SsbResolutionMaxAggregateOutputType = {
    id: string | null;
    resolutionRef: string | null;
    resolutionDate: Date | null;
    proposedByMemberId: string | null;
    summary: string | null;
    standardApplied: string | null;
    voteResult: string | null;
    effectiveDate: Date | null;
    status: string | null;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type SsbResolutionCountAggregateOutputType = {
    id: number;
    resolutionRef: number;
    resolutionDate: number;
    proposedByMemberId: number;
    summary: number;
    standardApplied: number;
    voteResult: number;
    effectiveDate: number;
    status: number;
    documentRef: number;
    notes: number;
    migrationSourceRef: number;
    createdAt: number;
    _all: number;
};
export type SsbResolutionMinAggregateInputType = {
    id?: true;
    resolutionRef?: true;
    resolutionDate?: true;
    proposedByMemberId?: true;
    summary?: true;
    standardApplied?: true;
    voteResult?: true;
    effectiveDate?: true;
    status?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type SsbResolutionMaxAggregateInputType = {
    id?: true;
    resolutionRef?: true;
    resolutionDate?: true;
    proposedByMemberId?: true;
    summary?: true;
    standardApplied?: true;
    voteResult?: true;
    effectiveDate?: true;
    status?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type SsbResolutionCountAggregateInputType = {
    id?: true;
    resolutionRef?: true;
    resolutionDate?: true;
    proposedByMemberId?: true;
    summary?: true;
    standardApplied?: true;
    voteResult?: true;
    effectiveDate?: true;
    status?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
    _all?: true;
};
export type SsbResolutionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SsbResolutionWhereInput;
    orderBy?: Prisma.SsbResolutionOrderByWithRelationInput | Prisma.SsbResolutionOrderByWithRelationInput[];
    cursor?: Prisma.SsbResolutionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SsbResolutionCountAggregateInputType;
    _min?: SsbResolutionMinAggregateInputType;
    _max?: SsbResolutionMaxAggregateInputType;
};
export type GetSsbResolutionAggregateType<T extends SsbResolutionAggregateArgs> = {
    [P in keyof T & keyof AggregateSsbResolution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSsbResolution[P]> : Prisma.GetScalarType<T[P], AggregateSsbResolution[P]>;
};
export type SsbResolutionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SsbResolutionWhereInput;
    orderBy?: Prisma.SsbResolutionOrderByWithAggregationInput | Prisma.SsbResolutionOrderByWithAggregationInput[];
    by: Prisma.SsbResolutionScalarFieldEnum[] | Prisma.SsbResolutionScalarFieldEnum;
    having?: Prisma.SsbResolutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SsbResolutionCountAggregateInputType | true;
    _min?: SsbResolutionMinAggregateInputType;
    _max?: SsbResolutionMaxAggregateInputType;
};
export type SsbResolutionGroupByOutputType = {
    id: string;
    resolutionRef: string;
    resolutionDate: Date | null;
    proposedByMemberId: string | null;
    summary: string;
    standardApplied: string | null;
    voteResult: string | null;
    effectiveDate: Date | null;
    status: string;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date;
    _count: SsbResolutionCountAggregateOutputType | null;
    _min: SsbResolutionMinAggregateOutputType | null;
    _max: SsbResolutionMaxAggregateOutputType | null;
};
export type GetSsbResolutionGroupByPayload<T extends SsbResolutionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SsbResolutionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SsbResolutionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SsbResolutionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SsbResolutionGroupByOutputType[P]>;
}>>;
export type SsbResolutionWhereInput = {
    AND?: Prisma.SsbResolutionWhereInput | Prisma.SsbResolutionWhereInput[];
    OR?: Prisma.SsbResolutionWhereInput[];
    NOT?: Prisma.SsbResolutionWhereInput | Prisma.SsbResolutionWhereInput[];
    id?: Prisma.UuidFilter<"SsbResolution"> | string;
    resolutionRef?: Prisma.StringFilter<"SsbResolution"> | string;
    resolutionDate?: Prisma.DateTimeNullableFilter<"SsbResolution"> | Date | string | null;
    proposedByMemberId?: Prisma.UuidNullableFilter<"SsbResolution"> | string | null;
    summary?: Prisma.StringFilter<"SsbResolution"> | string;
    standardApplied?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    voteResult?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableFilter<"SsbResolution"> | Date | string | null;
    status?: Prisma.StringFilter<"SsbResolution"> | string;
    documentRef?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    notes?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SsbResolution"> | Date | string;
    proposedByMember?: Prisma.XOR<Prisma.SsbMemberNullableScalarRelationFilter, Prisma.SsbMemberWhereInput> | null;
};
export type SsbResolutionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    resolutionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByMemberId?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrderInput | Prisma.SortOrder;
    voteResult?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedByMember?: Prisma.SsbMemberOrderByWithRelationInput;
};
export type SsbResolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    resolutionRef?: string;
    migrationSourceRef?: string;
    AND?: Prisma.SsbResolutionWhereInput | Prisma.SsbResolutionWhereInput[];
    OR?: Prisma.SsbResolutionWhereInput[];
    NOT?: Prisma.SsbResolutionWhereInput | Prisma.SsbResolutionWhereInput[];
    resolutionDate?: Prisma.DateTimeNullableFilter<"SsbResolution"> | Date | string | null;
    proposedByMemberId?: Prisma.UuidNullableFilter<"SsbResolution"> | string | null;
    summary?: Prisma.StringFilter<"SsbResolution"> | string;
    standardApplied?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    voteResult?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableFilter<"SsbResolution"> | Date | string | null;
    status?: Prisma.StringFilter<"SsbResolution"> | string;
    documentRef?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    notes?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SsbResolution"> | Date | string;
    proposedByMember?: Prisma.XOR<Prisma.SsbMemberNullableScalarRelationFilter, Prisma.SsbMemberWhereInput> | null;
}, "id" | "resolutionRef" | "migrationSourceRef">;
export type SsbResolutionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    resolutionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByMemberId?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrderInput | Prisma.SortOrder;
    voteResult?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SsbResolutionCountOrderByAggregateInput;
    _max?: Prisma.SsbResolutionMaxOrderByAggregateInput;
    _min?: Prisma.SsbResolutionMinOrderByAggregateInput;
};
export type SsbResolutionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SsbResolutionScalarWhereWithAggregatesInput | Prisma.SsbResolutionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SsbResolutionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SsbResolutionScalarWhereWithAggregatesInput | Prisma.SsbResolutionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SsbResolution"> | string;
    resolutionRef?: Prisma.StringWithAggregatesFilter<"SsbResolution"> | string;
    resolutionDate?: Prisma.DateTimeNullableWithAggregatesFilter<"SsbResolution"> | Date | string | null;
    proposedByMemberId?: Prisma.UuidNullableWithAggregatesFilter<"SsbResolution"> | string | null;
    summary?: Prisma.StringWithAggregatesFilter<"SsbResolution"> | string;
    standardApplied?: Prisma.StringNullableWithAggregatesFilter<"SsbResolution"> | string | null;
    voteResult?: Prisma.StringNullableWithAggregatesFilter<"SsbResolution"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableWithAggregatesFilter<"SsbResolution"> | Date | string | null;
    status?: Prisma.StringWithAggregatesFilter<"SsbResolution"> | string;
    documentRef?: Prisma.StringNullableWithAggregatesFilter<"SsbResolution"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"SsbResolution"> | string | null;
    migrationSourceRef?: Prisma.StringNullableWithAggregatesFilter<"SsbResolution"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SsbResolution"> | Date | string;
};
export type SsbResolutionCreateInput = {
    id?: string;
    resolutionRef: string;
    resolutionDate?: Date | string | null;
    summary: string;
    standardApplied?: string | null;
    voteResult?: string | null;
    effectiveDate?: Date | string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    proposedByMember?: Prisma.SsbMemberCreateNestedOneWithoutResolutionsInput;
};
export type SsbResolutionUncheckedCreateInput = {
    id?: string;
    resolutionRef: string;
    resolutionDate?: Date | string | null;
    proposedByMemberId?: string | null;
    summary: string;
    standardApplied?: string | null;
    voteResult?: string | null;
    effectiveDate?: Date | string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type SsbResolutionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionRef?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voteResult?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByMember?: Prisma.SsbMemberUpdateOneWithoutResolutionsNestedInput;
};
export type SsbResolutionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionRef?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByMemberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voteResult?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbResolutionCreateManyInput = {
    id?: string;
    resolutionRef: string;
    resolutionDate?: Date | string | null;
    proposedByMemberId?: string | null;
    summary: string;
    standardApplied?: string | null;
    voteResult?: string | null;
    effectiveDate?: Date | string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type SsbResolutionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionRef?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voteResult?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbResolutionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionRef?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByMemberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voteResult?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbResolutionListRelationFilter = {
    every?: Prisma.SsbResolutionWhereInput;
    some?: Prisma.SsbResolutionWhereInput;
    none?: Prisma.SsbResolutionWhereInput;
};
export type SsbResolutionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SsbResolutionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    resolutionDate?: Prisma.SortOrder;
    proposedByMemberId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrder;
    voteResult?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SsbResolutionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    resolutionDate?: Prisma.SortOrder;
    proposedByMemberId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrder;
    voteResult?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SsbResolutionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    resolutionDate?: Prisma.SortOrder;
    proposedByMemberId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrder;
    voteResult?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SsbResolutionCreateNestedManyWithoutProposedByMemberInput = {
    create?: Prisma.XOR<Prisma.SsbResolutionCreateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput> | Prisma.SsbResolutionCreateWithoutProposedByMemberInput[] | Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput[];
    connectOrCreate?: Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput | Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput[];
    createMany?: Prisma.SsbResolutionCreateManyProposedByMemberInputEnvelope;
    connect?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
};
export type SsbResolutionUncheckedCreateNestedManyWithoutProposedByMemberInput = {
    create?: Prisma.XOR<Prisma.SsbResolutionCreateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput> | Prisma.SsbResolutionCreateWithoutProposedByMemberInput[] | Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput[];
    connectOrCreate?: Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput | Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput[];
    createMany?: Prisma.SsbResolutionCreateManyProposedByMemberInputEnvelope;
    connect?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
};
export type SsbResolutionUpdateManyWithoutProposedByMemberNestedInput = {
    create?: Prisma.XOR<Prisma.SsbResolutionCreateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput> | Prisma.SsbResolutionCreateWithoutProposedByMemberInput[] | Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput[];
    connectOrCreate?: Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput | Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput[];
    upsert?: Prisma.SsbResolutionUpsertWithWhereUniqueWithoutProposedByMemberInput | Prisma.SsbResolutionUpsertWithWhereUniqueWithoutProposedByMemberInput[];
    createMany?: Prisma.SsbResolutionCreateManyProposedByMemberInputEnvelope;
    set?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    disconnect?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    delete?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    connect?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    update?: Prisma.SsbResolutionUpdateWithWhereUniqueWithoutProposedByMemberInput | Prisma.SsbResolutionUpdateWithWhereUniqueWithoutProposedByMemberInput[];
    updateMany?: Prisma.SsbResolutionUpdateManyWithWhereWithoutProposedByMemberInput | Prisma.SsbResolutionUpdateManyWithWhereWithoutProposedByMemberInput[];
    deleteMany?: Prisma.SsbResolutionScalarWhereInput | Prisma.SsbResolutionScalarWhereInput[];
};
export type SsbResolutionUncheckedUpdateManyWithoutProposedByMemberNestedInput = {
    create?: Prisma.XOR<Prisma.SsbResolutionCreateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput> | Prisma.SsbResolutionCreateWithoutProposedByMemberInput[] | Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput[];
    connectOrCreate?: Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput | Prisma.SsbResolutionCreateOrConnectWithoutProposedByMemberInput[];
    upsert?: Prisma.SsbResolutionUpsertWithWhereUniqueWithoutProposedByMemberInput | Prisma.SsbResolutionUpsertWithWhereUniqueWithoutProposedByMemberInput[];
    createMany?: Prisma.SsbResolutionCreateManyProposedByMemberInputEnvelope;
    set?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    disconnect?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    delete?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    connect?: Prisma.SsbResolutionWhereUniqueInput | Prisma.SsbResolutionWhereUniqueInput[];
    update?: Prisma.SsbResolutionUpdateWithWhereUniqueWithoutProposedByMemberInput | Prisma.SsbResolutionUpdateWithWhereUniqueWithoutProposedByMemberInput[];
    updateMany?: Prisma.SsbResolutionUpdateManyWithWhereWithoutProposedByMemberInput | Prisma.SsbResolutionUpdateManyWithWhereWithoutProposedByMemberInput[];
    deleteMany?: Prisma.SsbResolutionScalarWhereInput | Prisma.SsbResolutionScalarWhereInput[];
};
export type SsbResolutionCreateWithoutProposedByMemberInput = {
    id?: string;
    resolutionRef: string;
    resolutionDate?: Date | string | null;
    summary: string;
    standardApplied?: string | null;
    voteResult?: string | null;
    effectiveDate?: Date | string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type SsbResolutionUncheckedCreateWithoutProposedByMemberInput = {
    id?: string;
    resolutionRef: string;
    resolutionDate?: Date | string | null;
    summary: string;
    standardApplied?: string | null;
    voteResult?: string | null;
    effectiveDate?: Date | string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type SsbResolutionCreateOrConnectWithoutProposedByMemberInput = {
    where: Prisma.SsbResolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SsbResolutionCreateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput>;
};
export type SsbResolutionCreateManyProposedByMemberInputEnvelope = {
    data: Prisma.SsbResolutionCreateManyProposedByMemberInput | Prisma.SsbResolutionCreateManyProposedByMemberInput[];
    skipDuplicates?: boolean;
};
export type SsbResolutionUpsertWithWhereUniqueWithoutProposedByMemberInput = {
    where: Prisma.SsbResolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SsbResolutionUpdateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedUpdateWithoutProposedByMemberInput>;
    create: Prisma.XOR<Prisma.SsbResolutionCreateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedCreateWithoutProposedByMemberInput>;
};
export type SsbResolutionUpdateWithWhereUniqueWithoutProposedByMemberInput = {
    where: Prisma.SsbResolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SsbResolutionUpdateWithoutProposedByMemberInput, Prisma.SsbResolutionUncheckedUpdateWithoutProposedByMemberInput>;
};
export type SsbResolutionUpdateManyWithWhereWithoutProposedByMemberInput = {
    where: Prisma.SsbResolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.SsbResolutionUpdateManyMutationInput, Prisma.SsbResolutionUncheckedUpdateManyWithoutProposedByMemberInput>;
};
export type SsbResolutionScalarWhereInput = {
    AND?: Prisma.SsbResolutionScalarWhereInput | Prisma.SsbResolutionScalarWhereInput[];
    OR?: Prisma.SsbResolutionScalarWhereInput[];
    NOT?: Prisma.SsbResolutionScalarWhereInput | Prisma.SsbResolutionScalarWhereInput[];
    id?: Prisma.UuidFilter<"SsbResolution"> | string;
    resolutionRef?: Prisma.StringFilter<"SsbResolution"> | string;
    resolutionDate?: Prisma.DateTimeNullableFilter<"SsbResolution"> | Date | string | null;
    proposedByMemberId?: Prisma.UuidNullableFilter<"SsbResolution"> | string | null;
    summary?: Prisma.StringFilter<"SsbResolution"> | string;
    standardApplied?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    voteResult?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableFilter<"SsbResolution"> | Date | string | null;
    status?: Prisma.StringFilter<"SsbResolution"> | string;
    documentRef?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    notes?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"SsbResolution"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SsbResolution"> | Date | string;
};
export type SsbResolutionCreateManyProposedByMemberInput = {
    id?: string;
    resolutionRef: string;
    resolutionDate?: Date | string | null;
    summary: string;
    standardApplied?: string | null;
    voteResult?: string | null;
    effectiveDate?: Date | string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type SsbResolutionUpdateWithoutProposedByMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionRef?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voteResult?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbResolutionUncheckedUpdateWithoutProposedByMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionRef?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voteResult?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbResolutionUncheckedUpdateManyWithoutProposedByMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionRef?: Prisma.StringFieldUpdateOperationsInput | string;
    resolutionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voteResult?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbResolutionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resolutionRef?: boolean;
    resolutionDate?: boolean;
    proposedByMemberId?: boolean;
    summary?: boolean;
    standardApplied?: boolean;
    voteResult?: boolean;
    effectiveDate?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
    proposedByMember?: boolean | Prisma.SsbResolution$proposedByMemberArgs<ExtArgs>;
}, ExtArgs["result"]["ssbResolution"]>;
export type SsbResolutionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resolutionRef?: boolean;
    resolutionDate?: boolean;
    proposedByMemberId?: boolean;
    summary?: boolean;
    standardApplied?: boolean;
    voteResult?: boolean;
    effectiveDate?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
    proposedByMember?: boolean | Prisma.SsbResolution$proposedByMemberArgs<ExtArgs>;
}, ExtArgs["result"]["ssbResolution"]>;
export type SsbResolutionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resolutionRef?: boolean;
    resolutionDate?: boolean;
    proposedByMemberId?: boolean;
    summary?: boolean;
    standardApplied?: boolean;
    voteResult?: boolean;
    effectiveDate?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
    proposedByMember?: boolean | Prisma.SsbResolution$proposedByMemberArgs<ExtArgs>;
}, ExtArgs["result"]["ssbResolution"]>;
export type SsbResolutionSelectScalar = {
    id?: boolean;
    resolutionRef?: boolean;
    resolutionDate?: boolean;
    proposedByMemberId?: boolean;
    summary?: boolean;
    standardApplied?: boolean;
    voteResult?: boolean;
    effectiveDate?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
};
export type SsbResolutionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "resolutionRef" | "resolutionDate" | "proposedByMemberId" | "summary" | "standardApplied" | "voteResult" | "effectiveDate" | "status" | "documentRef" | "notes" | "migrationSourceRef" | "createdAt", ExtArgs["result"]["ssbResolution"]>;
export type SsbResolutionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedByMember?: boolean | Prisma.SsbResolution$proposedByMemberArgs<ExtArgs>;
};
export type SsbResolutionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedByMember?: boolean | Prisma.SsbResolution$proposedByMemberArgs<ExtArgs>;
};
export type SsbResolutionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedByMember?: boolean | Prisma.SsbResolution$proposedByMemberArgs<ExtArgs>;
};
export type $SsbResolutionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SsbResolution";
    objects: {
        proposedByMember: Prisma.$SsbMemberPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        resolutionRef: string;
        resolutionDate: Date | null;
        proposedByMemberId: string | null;
        summary: string;
        standardApplied: string | null;
        voteResult: string | null;
        effectiveDate: Date | null;
        status: string;
        documentRef: string | null;
        notes: string | null;
        migrationSourceRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["ssbResolution"]>;
    composites: {};
};
export type SsbResolutionGetPayload<S extends boolean | null | undefined | SsbResolutionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload, S>;
export type SsbResolutionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SsbResolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SsbResolutionCountAggregateInputType | true;
};
export interface SsbResolutionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SsbResolution'];
        meta: {
            name: 'SsbResolution';
        };
    };
    findUnique<T extends SsbResolutionFindUniqueArgs>(args: Prisma.SelectSubset<T, SsbResolutionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SsbResolutionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SsbResolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SsbResolutionFindFirstArgs>(args?: Prisma.SelectSubset<T, SsbResolutionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SsbResolutionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SsbResolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SsbResolutionFindManyArgs>(args?: Prisma.SelectSubset<T, SsbResolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SsbResolutionCreateArgs>(args: Prisma.SelectSubset<T, SsbResolutionCreateArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SsbResolutionCreateManyArgs>(args?: Prisma.SelectSubset<T, SsbResolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SsbResolutionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SsbResolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SsbResolutionDeleteArgs>(args: Prisma.SelectSubset<T, SsbResolutionDeleteArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SsbResolutionUpdateArgs>(args: Prisma.SelectSubset<T, SsbResolutionUpdateArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SsbResolutionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SsbResolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SsbResolutionUpdateManyArgs>(args: Prisma.SelectSubset<T, SsbResolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SsbResolutionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SsbResolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SsbResolutionUpsertArgs>(args: Prisma.SelectSubset<T, SsbResolutionUpsertArgs<ExtArgs>>): Prisma.Prisma__SsbResolutionClient<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SsbResolutionCountArgs>(args?: Prisma.Subset<T, SsbResolutionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SsbResolutionCountAggregateOutputType> : number>;
    aggregate<T extends SsbResolutionAggregateArgs>(args: Prisma.Subset<T, SsbResolutionAggregateArgs>): Prisma.PrismaPromise<GetSsbResolutionAggregateType<T>>;
    groupBy<T extends SsbResolutionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SsbResolutionGroupByArgs['orderBy'];
    } : {
        orderBy?: SsbResolutionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SsbResolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSsbResolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SsbResolutionFieldRefs;
}
export interface Prisma__SsbResolutionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposedByMember<T extends Prisma.SsbResolution$proposedByMemberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SsbResolution$proposedByMemberArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SsbResolutionFieldRefs {
    readonly id: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly resolutionRef: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly resolutionDate: Prisma.FieldRef<"SsbResolution", 'DateTime'>;
    readonly proposedByMemberId: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly summary: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly standardApplied: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly voteResult: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly effectiveDate: Prisma.FieldRef<"SsbResolution", 'DateTime'>;
    readonly status: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly documentRef: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly notes: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly migrationSourceRef: Prisma.FieldRef<"SsbResolution", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SsbResolution", 'DateTime'>;
}
export type SsbResolutionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    where: Prisma.SsbResolutionWhereUniqueInput;
};
export type SsbResolutionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    where: Prisma.SsbResolutionWhereUniqueInput;
};
export type SsbResolutionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    where?: Prisma.SsbResolutionWhereInput;
    orderBy?: Prisma.SsbResolutionOrderByWithRelationInput | Prisma.SsbResolutionOrderByWithRelationInput[];
    cursor?: Prisma.SsbResolutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SsbResolutionScalarFieldEnum | Prisma.SsbResolutionScalarFieldEnum[];
};
export type SsbResolutionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    where?: Prisma.SsbResolutionWhereInput;
    orderBy?: Prisma.SsbResolutionOrderByWithRelationInput | Prisma.SsbResolutionOrderByWithRelationInput[];
    cursor?: Prisma.SsbResolutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SsbResolutionScalarFieldEnum | Prisma.SsbResolutionScalarFieldEnum[];
};
export type SsbResolutionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    where?: Prisma.SsbResolutionWhereInput;
    orderBy?: Prisma.SsbResolutionOrderByWithRelationInput | Prisma.SsbResolutionOrderByWithRelationInput[];
    cursor?: Prisma.SsbResolutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SsbResolutionScalarFieldEnum | Prisma.SsbResolutionScalarFieldEnum[];
};
export type SsbResolutionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SsbResolutionCreateInput, Prisma.SsbResolutionUncheckedCreateInput>;
};
export type SsbResolutionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SsbResolutionCreateManyInput | Prisma.SsbResolutionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SsbResolutionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    data: Prisma.SsbResolutionCreateManyInput | Prisma.SsbResolutionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SsbResolutionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SsbResolutionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SsbResolutionUpdateInput, Prisma.SsbResolutionUncheckedUpdateInput>;
    where: Prisma.SsbResolutionWhereUniqueInput;
};
export type SsbResolutionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SsbResolutionUpdateManyMutationInput, Prisma.SsbResolutionUncheckedUpdateManyInput>;
    where?: Prisma.SsbResolutionWhereInput;
    limit?: number;
};
export type SsbResolutionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SsbResolutionUpdateManyMutationInput, Prisma.SsbResolutionUncheckedUpdateManyInput>;
    where?: Prisma.SsbResolutionWhereInput;
    limit?: number;
    include?: Prisma.SsbResolutionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SsbResolutionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    where: Prisma.SsbResolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SsbResolutionCreateInput, Prisma.SsbResolutionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SsbResolutionUpdateInput, Prisma.SsbResolutionUncheckedUpdateInput>;
};
export type SsbResolutionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
    where: Prisma.SsbResolutionWhereUniqueInput;
};
export type SsbResolutionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SsbResolutionWhereInput;
    limit?: number;
};
export type SsbResolution$proposedByMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where?: Prisma.SsbMemberWhereInput;
};
export type SsbResolutionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbResolutionSelect<ExtArgs> | null;
    omit?: Prisma.SsbResolutionOmit<ExtArgs> | null;
    include?: Prisma.SsbResolutionInclude<ExtArgs> | null;
};
