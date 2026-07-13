import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SsbMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$SsbMemberPayload>;
export type AggregateSsbMember = {
    _count: SsbMemberCountAggregateOutputType | null;
    _min: SsbMemberMinAggregateOutputType | null;
    _max: SsbMemberMaxAggregateOutputType | null;
};
export type SsbMemberMinAggregateOutputType = {
    id: string | null;
    memberRef: string | null;
    name: string | null;
    credentials: string | null;
    status: string | null;
    effectiveFrom: Date | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type SsbMemberMaxAggregateOutputType = {
    id: string | null;
    memberRef: string | null;
    name: string | null;
    credentials: string | null;
    status: string | null;
    effectiveFrom: Date | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type SsbMemberCountAggregateOutputType = {
    id: number;
    memberRef: number;
    name: number;
    credentials: number;
    status: number;
    effectiveFrom: number;
    migrationSourceRef: number;
    createdAt: number;
    _all: number;
};
export type SsbMemberMinAggregateInputType = {
    id?: true;
    memberRef?: true;
    name?: true;
    credentials?: true;
    status?: true;
    effectiveFrom?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type SsbMemberMaxAggregateInputType = {
    id?: true;
    memberRef?: true;
    name?: true;
    credentials?: true;
    status?: true;
    effectiveFrom?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type SsbMemberCountAggregateInputType = {
    id?: true;
    memberRef?: true;
    name?: true;
    credentials?: true;
    status?: true;
    effectiveFrom?: true;
    migrationSourceRef?: true;
    createdAt?: true;
    _all?: true;
};
export type SsbMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SsbMemberWhereInput;
    orderBy?: Prisma.SsbMemberOrderByWithRelationInput | Prisma.SsbMemberOrderByWithRelationInput[];
    cursor?: Prisma.SsbMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SsbMemberCountAggregateInputType;
    _min?: SsbMemberMinAggregateInputType;
    _max?: SsbMemberMaxAggregateInputType;
};
export type GetSsbMemberAggregateType<T extends SsbMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateSsbMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSsbMember[P]> : Prisma.GetScalarType<T[P], AggregateSsbMember[P]>;
};
export type SsbMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SsbMemberWhereInput;
    orderBy?: Prisma.SsbMemberOrderByWithAggregationInput | Prisma.SsbMemberOrderByWithAggregationInput[];
    by: Prisma.SsbMemberScalarFieldEnum[] | Prisma.SsbMemberScalarFieldEnum;
    having?: Prisma.SsbMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SsbMemberCountAggregateInputType | true;
    _min?: SsbMemberMinAggregateInputType;
    _max?: SsbMemberMaxAggregateInputType;
};
export type SsbMemberGroupByOutputType = {
    id: string;
    memberRef: string;
    name: string;
    credentials: string | null;
    status: string;
    effectiveFrom: Date | null;
    migrationSourceRef: string | null;
    createdAt: Date;
    _count: SsbMemberCountAggregateOutputType | null;
    _min: SsbMemberMinAggregateOutputType | null;
    _max: SsbMemberMaxAggregateOutputType | null;
};
export type GetSsbMemberGroupByPayload<T extends SsbMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SsbMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SsbMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SsbMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SsbMemberGroupByOutputType[P]>;
}>>;
export type SsbMemberWhereInput = {
    AND?: Prisma.SsbMemberWhereInput | Prisma.SsbMemberWhereInput[];
    OR?: Prisma.SsbMemberWhereInput[];
    NOT?: Prisma.SsbMemberWhereInput | Prisma.SsbMemberWhereInput[];
    id?: Prisma.UuidFilter<"SsbMember"> | string;
    memberRef?: Prisma.StringFilter<"SsbMember"> | string;
    name?: Prisma.StringFilter<"SsbMember"> | string;
    credentials?: Prisma.StringNullableFilter<"SsbMember"> | string | null;
    status?: Prisma.StringFilter<"SsbMember"> | string;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"SsbMember"> | Date | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"SsbMember"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SsbMember"> | Date | string;
    resolutions?: Prisma.SsbResolutionListRelationFilter;
    complianceChecks?: Prisma.ComplianceCheckListRelationFilter;
};
export type SsbMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    memberRef?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    credentials?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolutions?: Prisma.SsbResolutionOrderByRelationAggregateInput;
    complianceChecks?: Prisma.ComplianceCheckOrderByRelationAggregateInput;
};
export type SsbMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    memberRef?: string;
    migrationSourceRef?: string;
    AND?: Prisma.SsbMemberWhereInput | Prisma.SsbMemberWhereInput[];
    OR?: Prisma.SsbMemberWhereInput[];
    NOT?: Prisma.SsbMemberWhereInput | Prisma.SsbMemberWhereInput[];
    name?: Prisma.StringFilter<"SsbMember"> | string;
    credentials?: Prisma.StringNullableFilter<"SsbMember"> | string | null;
    status?: Prisma.StringFilter<"SsbMember"> | string;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"SsbMember"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SsbMember"> | Date | string;
    resolutions?: Prisma.SsbResolutionListRelationFilter;
    complianceChecks?: Prisma.ComplianceCheckListRelationFilter;
}, "id" | "memberRef" | "migrationSourceRef">;
export type SsbMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    memberRef?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    credentials?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SsbMemberCountOrderByAggregateInput;
    _max?: Prisma.SsbMemberMaxOrderByAggregateInput;
    _min?: Prisma.SsbMemberMinOrderByAggregateInput;
};
export type SsbMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.SsbMemberScalarWhereWithAggregatesInput | Prisma.SsbMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.SsbMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SsbMemberScalarWhereWithAggregatesInput | Prisma.SsbMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SsbMember"> | string;
    memberRef?: Prisma.StringWithAggregatesFilter<"SsbMember"> | string;
    name?: Prisma.StringWithAggregatesFilter<"SsbMember"> | string;
    credentials?: Prisma.StringNullableWithAggregatesFilter<"SsbMember"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"SsbMember"> | string;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"SsbMember"> | Date | string | null;
    migrationSourceRef?: Prisma.StringNullableWithAggregatesFilter<"SsbMember"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SsbMember"> | Date | string;
};
export type SsbMemberCreateInput = {
    id?: string;
    memberRef: string;
    name: string;
    credentials?: string | null;
    status?: string;
    effectiveFrom?: Date | string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    resolutions?: Prisma.SsbResolutionCreateNestedManyWithoutProposedByMemberInput;
    complianceChecks?: Prisma.ComplianceCheckCreateNestedManyWithoutReviewedByMemberInput;
};
export type SsbMemberUncheckedCreateInput = {
    id?: string;
    memberRef: string;
    name: string;
    credentials?: string | null;
    status?: string;
    effectiveFrom?: Date | string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    resolutions?: Prisma.SsbResolutionUncheckedCreateNestedManyWithoutProposedByMemberInput;
    complianceChecks?: Prisma.ComplianceCheckUncheckedCreateNestedManyWithoutReviewedByMemberInput;
};
export type SsbMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolutions?: Prisma.SsbResolutionUpdateManyWithoutProposedByMemberNestedInput;
    complianceChecks?: Prisma.ComplianceCheckUpdateManyWithoutReviewedByMemberNestedInput;
};
export type SsbMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolutions?: Prisma.SsbResolutionUncheckedUpdateManyWithoutProposedByMemberNestedInput;
    complianceChecks?: Prisma.ComplianceCheckUncheckedUpdateManyWithoutReviewedByMemberNestedInput;
};
export type SsbMemberCreateManyInput = {
    id?: string;
    memberRef: string;
    name: string;
    credentials?: string | null;
    status?: string;
    effectiveFrom?: Date | string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type SsbMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SsbMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberRef?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    credentials?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SsbMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberRef?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    credentials?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SsbMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    memberRef?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    credentials?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SsbMemberNullableScalarRelationFilter = {
    is?: Prisma.SsbMemberWhereInput | null;
    isNot?: Prisma.SsbMemberWhereInput | null;
};
export type SsbMemberCreateNestedOneWithoutResolutionsInput = {
    create?: Prisma.XOR<Prisma.SsbMemberCreateWithoutResolutionsInput, Prisma.SsbMemberUncheckedCreateWithoutResolutionsInput>;
    connectOrCreate?: Prisma.SsbMemberCreateOrConnectWithoutResolutionsInput;
    connect?: Prisma.SsbMemberWhereUniqueInput;
};
export type SsbMemberUpdateOneWithoutResolutionsNestedInput = {
    create?: Prisma.XOR<Prisma.SsbMemberCreateWithoutResolutionsInput, Prisma.SsbMemberUncheckedCreateWithoutResolutionsInput>;
    connectOrCreate?: Prisma.SsbMemberCreateOrConnectWithoutResolutionsInput;
    upsert?: Prisma.SsbMemberUpsertWithoutResolutionsInput;
    disconnect?: Prisma.SsbMemberWhereInput | boolean;
    delete?: Prisma.SsbMemberWhereInput | boolean;
    connect?: Prisma.SsbMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SsbMemberUpdateToOneWithWhereWithoutResolutionsInput, Prisma.SsbMemberUpdateWithoutResolutionsInput>, Prisma.SsbMemberUncheckedUpdateWithoutResolutionsInput>;
};
export type SsbMemberCreateNestedOneWithoutComplianceChecksInput = {
    create?: Prisma.XOR<Prisma.SsbMemberCreateWithoutComplianceChecksInput, Prisma.SsbMemberUncheckedCreateWithoutComplianceChecksInput>;
    connectOrCreate?: Prisma.SsbMemberCreateOrConnectWithoutComplianceChecksInput;
    connect?: Prisma.SsbMemberWhereUniqueInput;
};
export type SsbMemberUpdateOneWithoutComplianceChecksNestedInput = {
    create?: Prisma.XOR<Prisma.SsbMemberCreateWithoutComplianceChecksInput, Prisma.SsbMemberUncheckedCreateWithoutComplianceChecksInput>;
    connectOrCreate?: Prisma.SsbMemberCreateOrConnectWithoutComplianceChecksInput;
    upsert?: Prisma.SsbMemberUpsertWithoutComplianceChecksInput;
    disconnect?: Prisma.SsbMemberWhereInput | boolean;
    delete?: Prisma.SsbMemberWhereInput | boolean;
    connect?: Prisma.SsbMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SsbMemberUpdateToOneWithWhereWithoutComplianceChecksInput, Prisma.SsbMemberUpdateWithoutComplianceChecksInput>, Prisma.SsbMemberUncheckedUpdateWithoutComplianceChecksInput>;
};
export type SsbMemberCreateWithoutResolutionsInput = {
    id?: string;
    memberRef: string;
    name: string;
    credentials?: string | null;
    status?: string;
    effectiveFrom?: Date | string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    complianceChecks?: Prisma.ComplianceCheckCreateNestedManyWithoutReviewedByMemberInput;
};
export type SsbMemberUncheckedCreateWithoutResolutionsInput = {
    id?: string;
    memberRef: string;
    name: string;
    credentials?: string | null;
    status?: string;
    effectiveFrom?: Date | string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    complianceChecks?: Prisma.ComplianceCheckUncheckedCreateNestedManyWithoutReviewedByMemberInput;
};
export type SsbMemberCreateOrConnectWithoutResolutionsInput = {
    where: Prisma.SsbMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.SsbMemberCreateWithoutResolutionsInput, Prisma.SsbMemberUncheckedCreateWithoutResolutionsInput>;
};
export type SsbMemberUpsertWithoutResolutionsInput = {
    update: Prisma.XOR<Prisma.SsbMemberUpdateWithoutResolutionsInput, Prisma.SsbMemberUncheckedUpdateWithoutResolutionsInput>;
    create: Prisma.XOR<Prisma.SsbMemberCreateWithoutResolutionsInput, Prisma.SsbMemberUncheckedCreateWithoutResolutionsInput>;
    where?: Prisma.SsbMemberWhereInput;
};
export type SsbMemberUpdateToOneWithWhereWithoutResolutionsInput = {
    where?: Prisma.SsbMemberWhereInput;
    data: Prisma.XOR<Prisma.SsbMemberUpdateWithoutResolutionsInput, Prisma.SsbMemberUncheckedUpdateWithoutResolutionsInput>;
};
export type SsbMemberUpdateWithoutResolutionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    complianceChecks?: Prisma.ComplianceCheckUpdateManyWithoutReviewedByMemberNestedInput;
};
export type SsbMemberUncheckedUpdateWithoutResolutionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    complianceChecks?: Prisma.ComplianceCheckUncheckedUpdateManyWithoutReviewedByMemberNestedInput;
};
export type SsbMemberCreateWithoutComplianceChecksInput = {
    id?: string;
    memberRef: string;
    name: string;
    credentials?: string | null;
    status?: string;
    effectiveFrom?: Date | string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    resolutions?: Prisma.SsbResolutionCreateNestedManyWithoutProposedByMemberInput;
};
export type SsbMemberUncheckedCreateWithoutComplianceChecksInput = {
    id?: string;
    memberRef: string;
    name: string;
    credentials?: string | null;
    status?: string;
    effectiveFrom?: Date | string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
    resolutions?: Prisma.SsbResolutionUncheckedCreateNestedManyWithoutProposedByMemberInput;
};
export type SsbMemberCreateOrConnectWithoutComplianceChecksInput = {
    where: Prisma.SsbMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.SsbMemberCreateWithoutComplianceChecksInput, Prisma.SsbMemberUncheckedCreateWithoutComplianceChecksInput>;
};
export type SsbMemberUpsertWithoutComplianceChecksInput = {
    update: Prisma.XOR<Prisma.SsbMemberUpdateWithoutComplianceChecksInput, Prisma.SsbMemberUncheckedUpdateWithoutComplianceChecksInput>;
    create: Prisma.XOR<Prisma.SsbMemberCreateWithoutComplianceChecksInput, Prisma.SsbMemberUncheckedCreateWithoutComplianceChecksInput>;
    where?: Prisma.SsbMemberWhereInput;
};
export type SsbMemberUpdateToOneWithWhereWithoutComplianceChecksInput = {
    where?: Prisma.SsbMemberWhereInput;
    data: Prisma.XOR<Prisma.SsbMemberUpdateWithoutComplianceChecksInput, Prisma.SsbMemberUncheckedUpdateWithoutComplianceChecksInput>;
};
export type SsbMemberUpdateWithoutComplianceChecksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolutions?: Prisma.SsbResolutionUpdateManyWithoutProposedByMemberNestedInput;
};
export type SsbMemberUncheckedUpdateWithoutComplianceChecksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    memberRef?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    credentials?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolutions?: Prisma.SsbResolutionUncheckedUpdateManyWithoutProposedByMemberNestedInput;
};
export type SsbMemberCountOutputType = {
    resolutions: number;
    complianceChecks: number;
};
export type SsbMemberCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resolutions?: boolean | SsbMemberCountOutputTypeCountResolutionsArgs;
    complianceChecks?: boolean | SsbMemberCountOutputTypeCountComplianceChecksArgs;
};
export type SsbMemberCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberCountOutputTypeSelect<ExtArgs> | null;
};
export type SsbMemberCountOutputTypeCountResolutionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SsbResolutionWhereInput;
};
export type SsbMemberCountOutputTypeCountComplianceChecksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceCheckWhereInput;
};
export type SsbMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberRef?: boolean;
    name?: boolean;
    credentials?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
    resolutions?: boolean | Prisma.SsbMember$resolutionsArgs<ExtArgs>;
    complianceChecks?: boolean | Prisma.SsbMember$complianceChecksArgs<ExtArgs>;
    _count?: boolean | Prisma.SsbMemberCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ssbMember"]>;
export type SsbMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberRef?: boolean;
    name?: boolean;
    credentials?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["ssbMember"]>;
export type SsbMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    memberRef?: boolean;
    name?: boolean;
    credentials?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["ssbMember"]>;
export type SsbMemberSelectScalar = {
    id?: boolean;
    memberRef?: boolean;
    name?: boolean;
    credentials?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
};
export type SsbMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "memberRef" | "name" | "credentials" | "status" | "effectiveFrom" | "migrationSourceRef" | "createdAt", ExtArgs["result"]["ssbMember"]>;
export type SsbMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resolutions?: boolean | Prisma.SsbMember$resolutionsArgs<ExtArgs>;
    complianceChecks?: boolean | Prisma.SsbMember$complianceChecksArgs<ExtArgs>;
    _count?: boolean | Prisma.SsbMemberCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SsbMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SsbMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SsbMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SsbMember";
    objects: {
        resolutions: Prisma.$SsbResolutionPayload<ExtArgs>[];
        complianceChecks: Prisma.$ComplianceCheckPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        memberRef: string;
        name: string;
        credentials: string | null;
        status: string;
        effectiveFrom: Date | null;
        migrationSourceRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["ssbMember"]>;
    composites: {};
};
export type SsbMemberGetPayload<S extends boolean | null | undefined | SsbMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload, S>;
export type SsbMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SsbMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SsbMemberCountAggregateInputType | true;
};
export interface SsbMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SsbMember'];
        meta: {
            name: 'SsbMember';
        };
    };
    findUnique<T extends SsbMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, SsbMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SsbMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SsbMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SsbMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, SsbMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SsbMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SsbMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SsbMemberFindManyArgs>(args?: Prisma.SelectSubset<T, SsbMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SsbMemberCreateArgs>(args: Prisma.SelectSubset<T, SsbMemberCreateArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SsbMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, SsbMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SsbMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SsbMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SsbMemberDeleteArgs>(args: Prisma.SelectSubset<T, SsbMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SsbMemberUpdateArgs>(args: Prisma.SelectSubset<T, SsbMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SsbMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, SsbMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SsbMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, SsbMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SsbMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SsbMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SsbMemberUpsertArgs>(args: Prisma.SelectSubset<T, SsbMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__SsbMemberClient<runtime.Types.Result.GetResult<Prisma.$SsbMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SsbMemberCountArgs>(args?: Prisma.Subset<T, SsbMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SsbMemberCountAggregateOutputType> : number>;
    aggregate<T extends SsbMemberAggregateArgs>(args: Prisma.Subset<T, SsbMemberAggregateArgs>): Prisma.PrismaPromise<GetSsbMemberAggregateType<T>>;
    groupBy<T extends SsbMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SsbMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: SsbMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SsbMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSsbMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SsbMemberFieldRefs;
}
export interface Prisma__SsbMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    resolutions<T extends Prisma.SsbMember$resolutionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SsbMember$resolutionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SsbResolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    complianceChecks<T extends Prisma.SsbMember$complianceChecksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SsbMember$complianceChecksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SsbMemberFieldRefs {
    readonly id: Prisma.FieldRef<"SsbMember", 'String'>;
    readonly memberRef: Prisma.FieldRef<"SsbMember", 'String'>;
    readonly name: Prisma.FieldRef<"SsbMember", 'String'>;
    readonly credentials: Prisma.FieldRef<"SsbMember", 'String'>;
    readonly status: Prisma.FieldRef<"SsbMember", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"SsbMember", 'DateTime'>;
    readonly migrationSourceRef: Prisma.FieldRef<"SsbMember", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SsbMember", 'DateTime'>;
}
export type SsbMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where: Prisma.SsbMemberWhereUniqueInput;
};
export type SsbMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where: Prisma.SsbMemberWhereUniqueInput;
};
export type SsbMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where?: Prisma.SsbMemberWhereInput;
    orderBy?: Prisma.SsbMemberOrderByWithRelationInput | Prisma.SsbMemberOrderByWithRelationInput[];
    cursor?: Prisma.SsbMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SsbMemberScalarFieldEnum | Prisma.SsbMemberScalarFieldEnum[];
};
export type SsbMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where?: Prisma.SsbMemberWhereInput;
    orderBy?: Prisma.SsbMemberOrderByWithRelationInput | Prisma.SsbMemberOrderByWithRelationInput[];
    cursor?: Prisma.SsbMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SsbMemberScalarFieldEnum | Prisma.SsbMemberScalarFieldEnum[];
};
export type SsbMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where?: Prisma.SsbMemberWhereInput;
    orderBy?: Prisma.SsbMemberOrderByWithRelationInput | Prisma.SsbMemberOrderByWithRelationInput[];
    cursor?: Prisma.SsbMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SsbMemberScalarFieldEnum | Prisma.SsbMemberScalarFieldEnum[];
};
export type SsbMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SsbMemberCreateInput, Prisma.SsbMemberUncheckedCreateInput>;
};
export type SsbMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SsbMemberCreateManyInput | Prisma.SsbMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SsbMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    data: Prisma.SsbMemberCreateManyInput | Prisma.SsbMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SsbMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SsbMemberUpdateInput, Prisma.SsbMemberUncheckedUpdateInput>;
    where: Prisma.SsbMemberWhereUniqueInput;
};
export type SsbMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SsbMemberUpdateManyMutationInput, Prisma.SsbMemberUncheckedUpdateManyInput>;
    where?: Prisma.SsbMemberWhereInput;
    limit?: number;
};
export type SsbMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SsbMemberUpdateManyMutationInput, Prisma.SsbMemberUncheckedUpdateManyInput>;
    where?: Prisma.SsbMemberWhereInput;
    limit?: number;
};
export type SsbMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where: Prisma.SsbMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.SsbMemberCreateInput, Prisma.SsbMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SsbMemberUpdateInput, Prisma.SsbMemberUncheckedUpdateInput>;
};
export type SsbMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
    where: Prisma.SsbMemberWhereUniqueInput;
};
export type SsbMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SsbMemberWhereInput;
    limit?: number;
};
export type SsbMember$resolutionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SsbMember$complianceChecksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SsbMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SsbMemberSelect<ExtArgs> | null;
    omit?: Prisma.SsbMemberOmit<ExtArgs> | null;
    include?: Prisma.SsbMemberInclude<ExtArgs> | null;
};
