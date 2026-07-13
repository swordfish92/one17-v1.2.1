import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComplianceCheckModel = runtime.Types.Result.DefaultSelection<Prisma.$ComplianceCheckPayload>;
export type AggregateComplianceCheck = {
    _count: ComplianceCheckCountAggregateOutputType | null;
    _min: ComplianceCheckMinAggregateOutputType | null;
    _max: ComplianceCheckMaxAggregateOutputType | null;
};
export type ComplianceCheckMinAggregateOutputType = {
    id: string | null;
    checkCode: string | null;
    description: string | null;
    standardApplied: string | null;
    result: string | null;
    frequency: string | null;
    reviewedByMemberId: string | null;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type ComplianceCheckMaxAggregateOutputType = {
    id: string | null;
    checkCode: string | null;
    description: string | null;
    standardApplied: string | null;
    result: string | null;
    frequency: string | null;
    reviewedByMemberId: string | null;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type ComplianceCheckCountAggregateOutputType = {
    id: number;
    checkCode: number;
    description: number;
    standardApplied: number;
    result: number;
    frequency: number;
    reviewedByMemberId: number;
    documentRef: number;
    notes: number;
    migrationSourceRef: number;
    createdAt: number;
    _all: number;
};
export type ComplianceCheckMinAggregateInputType = {
    id?: true;
    checkCode?: true;
    description?: true;
    standardApplied?: true;
    result?: true;
    frequency?: true;
    reviewedByMemberId?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type ComplianceCheckMaxAggregateInputType = {
    id?: true;
    checkCode?: true;
    description?: true;
    standardApplied?: true;
    result?: true;
    frequency?: true;
    reviewedByMemberId?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type ComplianceCheckCountAggregateInputType = {
    id?: true;
    checkCode?: true;
    description?: true;
    standardApplied?: true;
    result?: true;
    frequency?: true;
    reviewedByMemberId?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
    _all?: true;
};
export type ComplianceCheckAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceCheckWhereInput;
    orderBy?: Prisma.ComplianceCheckOrderByWithRelationInput | Prisma.ComplianceCheckOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComplianceCheckCountAggregateInputType;
    _min?: ComplianceCheckMinAggregateInputType;
    _max?: ComplianceCheckMaxAggregateInputType;
};
export type GetComplianceCheckAggregateType<T extends ComplianceCheckAggregateArgs> = {
    [P in keyof T & keyof AggregateComplianceCheck]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComplianceCheck[P]> : Prisma.GetScalarType<T[P], AggregateComplianceCheck[P]>;
};
export type ComplianceCheckGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceCheckWhereInput;
    orderBy?: Prisma.ComplianceCheckOrderByWithAggregationInput | Prisma.ComplianceCheckOrderByWithAggregationInput[];
    by: Prisma.ComplianceCheckScalarFieldEnum[] | Prisma.ComplianceCheckScalarFieldEnum;
    having?: Prisma.ComplianceCheckScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComplianceCheckCountAggregateInputType | true;
    _min?: ComplianceCheckMinAggregateInputType;
    _max?: ComplianceCheckMaxAggregateInputType;
};
export type ComplianceCheckGroupByOutputType = {
    id: string;
    checkCode: string;
    description: string;
    standardApplied: string | null;
    result: string | null;
    frequency: string | null;
    reviewedByMemberId: string | null;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date;
    _count: ComplianceCheckCountAggregateOutputType | null;
    _min: ComplianceCheckMinAggregateOutputType | null;
    _max: ComplianceCheckMaxAggregateOutputType | null;
};
export type GetComplianceCheckGroupByPayload<T extends ComplianceCheckGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComplianceCheckGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComplianceCheckGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComplianceCheckGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComplianceCheckGroupByOutputType[P]>;
}>>;
export type ComplianceCheckWhereInput = {
    AND?: Prisma.ComplianceCheckWhereInput | Prisma.ComplianceCheckWhereInput[];
    OR?: Prisma.ComplianceCheckWhereInput[];
    NOT?: Prisma.ComplianceCheckWhereInput | Prisma.ComplianceCheckWhereInput[];
    id?: Prisma.UuidFilter<"ComplianceCheck"> | string;
    checkCode?: Prisma.StringFilter<"ComplianceCheck"> | string;
    description?: Prisma.StringFilter<"ComplianceCheck"> | string;
    standardApplied?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    result?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    frequency?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    reviewedByMemberId?: Prisma.UuidNullableFilter<"ComplianceCheck"> | string | null;
    documentRef?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    notes?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplianceCheck"> | Date | string;
    reviewedByMember?: Prisma.XOR<Prisma.SsbMemberNullableScalarRelationFilter, Prisma.SsbMemberWhereInput> | null;
};
export type ComplianceCheckOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    checkCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequency?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedByMemberId?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedByMember?: Prisma.SsbMemberOrderByWithRelationInput;
};
export type ComplianceCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    checkCode?: string;
    migrationSourceRef?: string;
    AND?: Prisma.ComplianceCheckWhereInput | Prisma.ComplianceCheckWhereInput[];
    OR?: Prisma.ComplianceCheckWhereInput[];
    NOT?: Prisma.ComplianceCheckWhereInput | Prisma.ComplianceCheckWhereInput[];
    description?: Prisma.StringFilter<"ComplianceCheck"> | string;
    standardApplied?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    result?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    frequency?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    reviewedByMemberId?: Prisma.UuidNullableFilter<"ComplianceCheck"> | string | null;
    documentRef?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    notes?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplianceCheck"> | Date | string;
    reviewedByMember?: Prisma.XOR<Prisma.SsbMemberNullableScalarRelationFilter, Prisma.SsbMemberWhereInput> | null;
}, "id" | "checkCode" | "migrationSourceRef">;
export type ComplianceCheckOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    checkCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequency?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedByMemberId?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ComplianceCheckCountOrderByAggregateInput;
    _max?: Prisma.ComplianceCheckMaxOrderByAggregateInput;
    _min?: Prisma.ComplianceCheckMinOrderByAggregateInput;
};
export type ComplianceCheckScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComplianceCheckScalarWhereWithAggregatesInput | Prisma.ComplianceCheckScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComplianceCheckScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComplianceCheckScalarWhereWithAggregatesInput | Prisma.ComplianceCheckScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ComplianceCheck"> | string;
    checkCode?: Prisma.StringWithAggregatesFilter<"ComplianceCheck"> | string;
    description?: Prisma.StringWithAggregatesFilter<"ComplianceCheck"> | string;
    standardApplied?: Prisma.StringNullableWithAggregatesFilter<"ComplianceCheck"> | string | null;
    result?: Prisma.StringNullableWithAggregatesFilter<"ComplianceCheck"> | string | null;
    frequency?: Prisma.StringNullableWithAggregatesFilter<"ComplianceCheck"> | string | null;
    reviewedByMemberId?: Prisma.UuidNullableWithAggregatesFilter<"ComplianceCheck"> | string | null;
    documentRef?: Prisma.StringNullableWithAggregatesFilter<"ComplianceCheck"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"ComplianceCheck"> | string | null;
    migrationSourceRef?: Prisma.StringNullableWithAggregatesFilter<"ComplianceCheck"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ComplianceCheck"> | Date | string;
};
export type ComplianceCheckCreateInput = {
    id?: string;
    checkCode: string;
    description: string;
    standardApplied?: string | null;
    result?: string | null;
    frequency?: string | null;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    reviewedByMember?: Prisma.SsbMemberCreateNestedOneWithoutComplianceChecksInput;
};
export type ComplianceCheckUncheckedCreateInput = {
    id?: string;
    checkCode: string;
    description: string;
    standardApplied?: string | null;
    result?: string | null;
    frequency?: string | null;
    reviewedByMemberId?: string | null;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type ComplianceCheckUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedByMember?: Prisma.SsbMemberUpdateOneWithoutComplianceChecksNestedInput;
};
export type ComplianceCheckUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedByMemberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceCheckCreateManyInput = {
    id?: string;
    checkCode: string;
    description: string;
    standardApplied?: string | null;
    result?: string | null;
    frequency?: string | null;
    reviewedByMemberId?: string | null;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type ComplianceCheckUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceCheckUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedByMemberId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceCheckListRelationFilter = {
    every?: Prisma.ComplianceCheckWhereInput;
    some?: Prisma.ComplianceCheckWhereInput;
    none?: Prisma.ComplianceCheckWhereInput;
};
export type ComplianceCheckOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ComplianceCheckCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checkCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    reviewedByMemberId?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceCheckMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checkCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    reviewedByMemberId?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceCheckMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checkCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    standardApplied?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    reviewedByMemberId?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceCheckCreateNestedManyWithoutReviewedByMemberInput = {
    create?: Prisma.XOR<Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput> | Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput[] | Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput[];
    connectOrCreate?: Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput | Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput[];
    createMany?: Prisma.ComplianceCheckCreateManyReviewedByMemberInputEnvelope;
    connect?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
};
export type ComplianceCheckUncheckedCreateNestedManyWithoutReviewedByMemberInput = {
    create?: Prisma.XOR<Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput> | Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput[] | Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput[];
    connectOrCreate?: Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput | Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput[];
    createMany?: Prisma.ComplianceCheckCreateManyReviewedByMemberInputEnvelope;
    connect?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
};
export type ComplianceCheckUpdateManyWithoutReviewedByMemberNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput> | Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput[] | Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput[];
    connectOrCreate?: Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput | Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput[];
    upsert?: Prisma.ComplianceCheckUpsertWithWhereUniqueWithoutReviewedByMemberInput | Prisma.ComplianceCheckUpsertWithWhereUniqueWithoutReviewedByMemberInput[];
    createMany?: Prisma.ComplianceCheckCreateManyReviewedByMemberInputEnvelope;
    set?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    disconnect?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    delete?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    connect?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    update?: Prisma.ComplianceCheckUpdateWithWhereUniqueWithoutReviewedByMemberInput | Prisma.ComplianceCheckUpdateWithWhereUniqueWithoutReviewedByMemberInput[];
    updateMany?: Prisma.ComplianceCheckUpdateManyWithWhereWithoutReviewedByMemberInput | Prisma.ComplianceCheckUpdateManyWithWhereWithoutReviewedByMemberInput[];
    deleteMany?: Prisma.ComplianceCheckScalarWhereInput | Prisma.ComplianceCheckScalarWhereInput[];
};
export type ComplianceCheckUncheckedUpdateManyWithoutReviewedByMemberNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput> | Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput[] | Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput[];
    connectOrCreate?: Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput | Prisma.ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput[];
    upsert?: Prisma.ComplianceCheckUpsertWithWhereUniqueWithoutReviewedByMemberInput | Prisma.ComplianceCheckUpsertWithWhereUniqueWithoutReviewedByMemberInput[];
    createMany?: Prisma.ComplianceCheckCreateManyReviewedByMemberInputEnvelope;
    set?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    disconnect?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    delete?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    connect?: Prisma.ComplianceCheckWhereUniqueInput | Prisma.ComplianceCheckWhereUniqueInput[];
    update?: Prisma.ComplianceCheckUpdateWithWhereUniqueWithoutReviewedByMemberInput | Prisma.ComplianceCheckUpdateWithWhereUniqueWithoutReviewedByMemberInput[];
    updateMany?: Prisma.ComplianceCheckUpdateManyWithWhereWithoutReviewedByMemberInput | Prisma.ComplianceCheckUpdateManyWithWhereWithoutReviewedByMemberInput[];
    deleteMany?: Prisma.ComplianceCheckScalarWhereInput | Prisma.ComplianceCheckScalarWhereInput[];
};
export type ComplianceCheckCreateWithoutReviewedByMemberInput = {
    id?: string;
    checkCode: string;
    description: string;
    standardApplied?: string | null;
    result?: string | null;
    frequency?: string | null;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput = {
    id?: string;
    checkCode: string;
    description: string;
    standardApplied?: string | null;
    result?: string | null;
    frequency?: string | null;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type ComplianceCheckCreateOrConnectWithoutReviewedByMemberInput = {
    where: Prisma.ComplianceCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput>;
};
export type ComplianceCheckCreateManyReviewedByMemberInputEnvelope = {
    data: Prisma.ComplianceCheckCreateManyReviewedByMemberInput | Prisma.ComplianceCheckCreateManyReviewedByMemberInput[];
    skipDuplicates?: boolean;
};
export type ComplianceCheckUpsertWithWhereUniqueWithoutReviewedByMemberInput = {
    where: Prisma.ComplianceCheckWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComplianceCheckUpdateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedUpdateWithoutReviewedByMemberInput>;
    create: Prisma.XOR<Prisma.ComplianceCheckCreateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedCreateWithoutReviewedByMemberInput>;
};
export type ComplianceCheckUpdateWithWhereUniqueWithoutReviewedByMemberInput = {
    where: Prisma.ComplianceCheckWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComplianceCheckUpdateWithoutReviewedByMemberInput, Prisma.ComplianceCheckUncheckedUpdateWithoutReviewedByMemberInput>;
};
export type ComplianceCheckUpdateManyWithWhereWithoutReviewedByMemberInput = {
    where: Prisma.ComplianceCheckScalarWhereInput;
    data: Prisma.XOR<Prisma.ComplianceCheckUpdateManyMutationInput, Prisma.ComplianceCheckUncheckedUpdateManyWithoutReviewedByMemberInput>;
};
export type ComplianceCheckScalarWhereInput = {
    AND?: Prisma.ComplianceCheckScalarWhereInput | Prisma.ComplianceCheckScalarWhereInput[];
    OR?: Prisma.ComplianceCheckScalarWhereInput[];
    NOT?: Prisma.ComplianceCheckScalarWhereInput | Prisma.ComplianceCheckScalarWhereInput[];
    id?: Prisma.UuidFilter<"ComplianceCheck"> | string;
    checkCode?: Prisma.StringFilter<"ComplianceCheck"> | string;
    description?: Prisma.StringFilter<"ComplianceCheck"> | string;
    standardApplied?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    result?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    frequency?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    reviewedByMemberId?: Prisma.UuidNullableFilter<"ComplianceCheck"> | string | null;
    documentRef?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    notes?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"ComplianceCheck"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplianceCheck"> | Date | string;
};
export type ComplianceCheckCreateManyReviewedByMemberInput = {
    id?: string;
    checkCode: string;
    description: string;
    standardApplied?: string | null;
    result?: string | null;
    frequency?: string | null;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type ComplianceCheckUpdateWithoutReviewedByMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceCheckUncheckedUpdateWithoutReviewedByMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceCheckUncheckedUpdateManyWithoutReviewedByMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checkCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    standardApplied?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceCheckSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checkCode?: boolean;
    description?: boolean;
    standardApplied?: boolean;
    result?: boolean;
    frequency?: boolean;
    reviewedByMemberId?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
    reviewedByMember?: boolean | Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs>;
}, ExtArgs["result"]["complianceCheck"]>;
export type ComplianceCheckSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checkCode?: boolean;
    description?: boolean;
    standardApplied?: boolean;
    result?: boolean;
    frequency?: boolean;
    reviewedByMemberId?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
    reviewedByMember?: boolean | Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs>;
}, ExtArgs["result"]["complianceCheck"]>;
export type ComplianceCheckSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checkCode?: boolean;
    description?: boolean;
    standardApplied?: boolean;
    result?: boolean;
    frequency?: boolean;
    reviewedByMemberId?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
    reviewedByMember?: boolean | Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs>;
}, ExtArgs["result"]["complianceCheck"]>;
export type ComplianceCheckSelectScalar = {
    id?: boolean;
    checkCode?: boolean;
    description?: boolean;
    standardApplied?: boolean;
    result?: boolean;
    frequency?: boolean;
    reviewedByMemberId?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
};
export type ComplianceCheckOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "checkCode" | "description" | "standardApplied" | "result" | "frequency" | "reviewedByMemberId" | "documentRef" | "notes" | "migrationSourceRef" | "createdAt", ExtArgs["result"]["complianceCheck"]>;
export type ComplianceCheckInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviewedByMember?: boolean | Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs>;
};
export type ComplianceCheckIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviewedByMember?: boolean | Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs>;
};
export type ComplianceCheckIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviewedByMember?: boolean | Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs>;
};
export type $ComplianceCheckPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComplianceCheck";
    objects: {
        reviewedByMember: Prisma.$SsbMemberPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        checkCode: string;
        description: string;
        standardApplied: string | null;
        result: string | null;
        frequency: string | null;
        reviewedByMemberId: string | null;
        documentRef: string | null;
        notes: string | null;
        migrationSourceRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["complianceCheck"]>;
    composites: {};
};
export type ComplianceCheckGetPayload<S extends boolean | null | undefined | ComplianceCheckDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload, S>;
export type ComplianceCheckCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComplianceCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComplianceCheckCountAggregateInputType | true;
};
export interface ComplianceCheckDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComplianceCheck'];
        meta: {
            name: 'ComplianceCheck';
        };
    };
    findUnique<T extends ComplianceCheckFindUniqueArgs>(args: Prisma.SelectSubset<T, ComplianceCheckFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComplianceCheckFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComplianceCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComplianceCheckFindFirstArgs>(args?: Prisma.SelectSubset<T, ComplianceCheckFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComplianceCheckFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComplianceCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComplianceCheckFindManyArgs>(args?: Prisma.SelectSubset<T, ComplianceCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComplianceCheckCreateArgs>(args: Prisma.SelectSubset<T, ComplianceCheckCreateArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComplianceCheckCreateManyArgs>(args?: Prisma.SelectSubset<T, ComplianceCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComplianceCheckCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComplianceCheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComplianceCheckDeleteArgs>(args: Prisma.SelectSubset<T, ComplianceCheckDeleteArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComplianceCheckUpdateArgs>(args: Prisma.SelectSubset<T, ComplianceCheckUpdateArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComplianceCheckDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComplianceCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComplianceCheckUpdateManyArgs>(args: Prisma.SelectSubset<T, ComplianceCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComplianceCheckUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComplianceCheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComplianceCheckUpsertArgs>(args: Prisma.SelectSubset<T, ComplianceCheckUpsertArgs<ExtArgs>>): Prisma.Prisma__ComplianceCheckClient<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComplianceCheckCountArgs>(args?: Prisma.Subset<T, ComplianceCheckCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComplianceCheckCountAggregateOutputType> : number>;
    aggregate<T extends ComplianceCheckAggregateArgs>(args: Prisma.Subset<T, ComplianceCheckAggregateArgs>): Prisma.PrismaPromise<GetComplianceCheckAggregateType<T>>;
    groupBy<T extends ComplianceCheckGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComplianceCheckGroupByArgs['orderBy'];
    } : {
        orderBy?: ComplianceCheckGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComplianceCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComplianceCheckFieldRefs;
}
export interface Prisma__ComplianceCheckClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reviewedByMember<T extends Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComplianceCheck$reviewedByMemberArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComplianceCheckFieldRefs {
    readonly id: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly checkCode: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly description: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly standardApplied: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly result: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly frequency: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly reviewedByMemberId: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly documentRef: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly notes: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly migrationSourceRef: Prisma.FieldRef<"ComplianceCheck", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ComplianceCheck", 'DateTime'>;
}
export type ComplianceCheckFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    where: Prisma.ComplianceCheckWhereUniqueInput;
};
export type ComplianceCheckFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    where: Prisma.ComplianceCheckWhereUniqueInput;
};
export type ComplianceCheckFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    where?: Prisma.ComplianceCheckWhereInput;
    orderBy?: Prisma.ComplianceCheckOrderByWithRelationInput | Prisma.ComplianceCheckOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceCheckScalarFieldEnum | Prisma.ComplianceCheckScalarFieldEnum[];
};
export type ComplianceCheckFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    where?: Prisma.ComplianceCheckWhereInput;
    orderBy?: Prisma.ComplianceCheckOrderByWithRelationInput | Prisma.ComplianceCheckOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceCheckScalarFieldEnum | Prisma.ComplianceCheckScalarFieldEnum[];
};
export type ComplianceCheckFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    where?: Prisma.ComplianceCheckWhereInput;
    orderBy?: Prisma.ComplianceCheckOrderByWithRelationInput | Prisma.ComplianceCheckOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceCheckScalarFieldEnum | Prisma.ComplianceCheckScalarFieldEnum[];
};
export type ComplianceCheckCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceCheckCreateInput, Prisma.ComplianceCheckUncheckedCreateInput>;
};
export type ComplianceCheckCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComplianceCheckCreateManyInput | Prisma.ComplianceCheckCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComplianceCheckCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    data: Prisma.ComplianceCheckCreateManyInput | Prisma.ComplianceCheckCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ComplianceCheckIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ComplianceCheckUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceCheckUpdateInput, Prisma.ComplianceCheckUncheckedUpdateInput>;
    where: Prisma.ComplianceCheckWhereUniqueInput;
};
export type ComplianceCheckUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComplianceCheckUpdateManyMutationInput, Prisma.ComplianceCheckUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceCheckWhereInput;
    limit?: number;
};
export type ComplianceCheckUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceCheckUpdateManyMutationInput, Prisma.ComplianceCheckUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceCheckWhereInput;
    limit?: number;
    include?: Prisma.ComplianceCheckIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ComplianceCheckUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    where: Prisma.ComplianceCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceCheckCreateInput, Prisma.ComplianceCheckUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComplianceCheckUpdateInput, Prisma.ComplianceCheckUncheckedUpdateInput>;
};
export type ComplianceCheckDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
    where: Prisma.ComplianceCheckWhereUniqueInput;
};
export type ComplianceCheckDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceCheckWhereInput;
    limit?: number;
};
export type ComplianceCheck$reviewedByMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where?: Prisma.SsbMemberWhereInput;
};
export type ComplianceCheckDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceCheckSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceCheckOmit<ExtArgs> | null;
    include?: Prisma.ComplianceCheckInclude<ExtArgs> | null;
};
