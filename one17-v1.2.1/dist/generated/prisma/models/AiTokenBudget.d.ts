import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiTokenBudgetModel = runtime.Types.Result.DefaultSelection<Prisma.$AiTokenBudgetPayload>;
export type AggregateAiTokenBudget = {
    _count: AiTokenBudgetCountAggregateOutputType | null;
    _avg: AiTokenBudgetAvgAggregateOutputType | null;
    _sum: AiTokenBudgetSumAggregateOutputType | null;
    _min: AiTokenBudgetMinAggregateOutputType | null;
    _max: AiTokenBudgetMaxAggregateOutputType | null;
};
export type AiTokenBudgetAvgAggregateOutputType = {
    periodYear: number | null;
    periodMonth: number | null;
    tokenLimit: number | null;
    tokensConsumed: number | null;
};
export type AiTokenBudgetSumAggregateOutputType = {
    periodYear: number | null;
    periodMonth: number | null;
    tokenLimit: number | null;
    tokensConsumed: number | null;
};
export type AiTokenBudgetMinAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    periodYear: number | null;
    periodMonth: number | null;
    tokenLimit: number | null;
    tokensConsumed: number | null;
};
export type AiTokenBudgetMaxAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    periodYear: number | null;
    periodMonth: number | null;
    tokenLimit: number | null;
    tokensConsumed: number | null;
};
export type AiTokenBudgetCountAggregateOutputType = {
    id: number;
    orgUnitCode: number;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed: number;
    _all: number;
};
export type AiTokenBudgetAvgAggregateInputType = {
    periodYear?: true;
    periodMonth?: true;
    tokenLimit?: true;
    tokensConsumed?: true;
};
export type AiTokenBudgetSumAggregateInputType = {
    periodYear?: true;
    periodMonth?: true;
    tokenLimit?: true;
    tokensConsumed?: true;
};
export type AiTokenBudgetMinAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    periodYear?: true;
    periodMonth?: true;
    tokenLimit?: true;
    tokensConsumed?: true;
};
export type AiTokenBudgetMaxAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    periodYear?: true;
    periodMonth?: true;
    tokenLimit?: true;
    tokensConsumed?: true;
};
export type AiTokenBudgetCountAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    periodYear?: true;
    periodMonth?: true;
    tokenLimit?: true;
    tokensConsumed?: true;
    _all?: true;
};
export type AiTokenBudgetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiTokenBudgetWhereInput;
    orderBy?: Prisma.AiTokenBudgetOrderByWithRelationInput | Prisma.AiTokenBudgetOrderByWithRelationInput[];
    cursor?: Prisma.AiTokenBudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiTokenBudgetCountAggregateInputType;
    _avg?: AiTokenBudgetAvgAggregateInputType;
    _sum?: AiTokenBudgetSumAggregateInputType;
    _min?: AiTokenBudgetMinAggregateInputType;
    _max?: AiTokenBudgetMaxAggregateInputType;
};
export type GetAiTokenBudgetAggregateType<T extends AiTokenBudgetAggregateArgs> = {
    [P in keyof T & keyof AggregateAiTokenBudget]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiTokenBudget[P]> : Prisma.GetScalarType<T[P], AggregateAiTokenBudget[P]>;
};
export type AiTokenBudgetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiTokenBudgetWhereInput;
    orderBy?: Prisma.AiTokenBudgetOrderByWithAggregationInput | Prisma.AiTokenBudgetOrderByWithAggregationInput[];
    by: Prisma.AiTokenBudgetScalarFieldEnum[] | Prisma.AiTokenBudgetScalarFieldEnum;
    having?: Prisma.AiTokenBudgetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiTokenBudgetCountAggregateInputType | true;
    _avg?: AiTokenBudgetAvgAggregateInputType;
    _sum?: AiTokenBudgetSumAggregateInputType;
    _min?: AiTokenBudgetMinAggregateInputType;
    _max?: AiTokenBudgetMaxAggregateInputType;
};
export type AiTokenBudgetGroupByOutputType = {
    id: string;
    orgUnitCode: string;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed: number;
    _count: AiTokenBudgetCountAggregateOutputType | null;
    _avg: AiTokenBudgetAvgAggregateOutputType | null;
    _sum: AiTokenBudgetSumAggregateOutputType | null;
    _min: AiTokenBudgetMinAggregateOutputType | null;
    _max: AiTokenBudgetMaxAggregateOutputType | null;
};
export type GetAiTokenBudgetGroupByPayload<T extends AiTokenBudgetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiTokenBudgetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiTokenBudgetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiTokenBudgetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiTokenBudgetGroupByOutputType[P]>;
}>>;
export type AiTokenBudgetWhereInput = {
    AND?: Prisma.AiTokenBudgetWhereInput | Prisma.AiTokenBudgetWhereInput[];
    OR?: Prisma.AiTokenBudgetWhereInput[];
    NOT?: Prisma.AiTokenBudgetWhereInput | Prisma.AiTokenBudgetWhereInput[];
    id?: Prisma.UuidFilter<"AiTokenBudget"> | string;
    orgUnitCode?: Prisma.StringFilter<"AiTokenBudget"> | string;
    periodYear?: Prisma.IntFilter<"AiTokenBudget"> | number;
    periodMonth?: Prisma.IntFilter<"AiTokenBudget"> | number;
    tokenLimit?: Prisma.IntFilter<"AiTokenBudget"> | number;
    tokensConsumed?: Prisma.IntFilter<"AiTokenBudget"> | number;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
};
export type AiTokenBudgetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    tokenLimit?: Prisma.SortOrder;
    tokensConsumed?: Prisma.SortOrder;
    orgUnit?: Prisma.OrgUnitOrderByWithRelationInput;
};
export type AiTokenBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orgUnitCode_periodYear_periodMonth?: Prisma.AiTokenBudgetOrgUnitCodePeriodYearPeriodMonthCompoundUniqueInput;
    AND?: Prisma.AiTokenBudgetWhereInput | Prisma.AiTokenBudgetWhereInput[];
    OR?: Prisma.AiTokenBudgetWhereInput[];
    NOT?: Prisma.AiTokenBudgetWhereInput | Prisma.AiTokenBudgetWhereInput[];
    orgUnitCode?: Prisma.StringFilter<"AiTokenBudget"> | string;
    periodYear?: Prisma.IntFilter<"AiTokenBudget"> | number;
    periodMonth?: Prisma.IntFilter<"AiTokenBudget"> | number;
    tokenLimit?: Prisma.IntFilter<"AiTokenBudget"> | number;
    tokensConsumed?: Prisma.IntFilter<"AiTokenBudget"> | number;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
}, "id" | "orgUnitCode_periodYear_periodMonth">;
export type AiTokenBudgetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    tokenLimit?: Prisma.SortOrder;
    tokensConsumed?: Prisma.SortOrder;
    _count?: Prisma.AiTokenBudgetCountOrderByAggregateInput;
    _avg?: Prisma.AiTokenBudgetAvgOrderByAggregateInput;
    _max?: Prisma.AiTokenBudgetMaxOrderByAggregateInput;
    _min?: Prisma.AiTokenBudgetMinOrderByAggregateInput;
    _sum?: Prisma.AiTokenBudgetSumOrderByAggregateInput;
};
export type AiTokenBudgetScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiTokenBudgetScalarWhereWithAggregatesInput | Prisma.AiTokenBudgetScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiTokenBudgetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiTokenBudgetScalarWhereWithAggregatesInput | Prisma.AiTokenBudgetScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AiTokenBudget"> | string;
    orgUnitCode?: Prisma.StringWithAggregatesFilter<"AiTokenBudget"> | string;
    periodYear?: Prisma.IntWithAggregatesFilter<"AiTokenBudget"> | number;
    periodMonth?: Prisma.IntWithAggregatesFilter<"AiTokenBudget"> | number;
    tokenLimit?: Prisma.IntWithAggregatesFilter<"AiTokenBudget"> | number;
    tokensConsumed?: Prisma.IntWithAggregatesFilter<"AiTokenBudget"> | number;
};
export type AiTokenBudgetCreateInput = {
    id?: string;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed?: number;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutAiTokenBudgetsInput;
};
export type AiTokenBudgetUncheckedCreateInput = {
    id?: string;
    orgUnitCode: string;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed?: number;
};
export type AiTokenBudgetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    tokensConsumed?: Prisma.IntFieldUpdateOperationsInput | number;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutAiTokenBudgetsNestedInput;
};
export type AiTokenBudgetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    tokensConsumed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AiTokenBudgetCreateManyInput = {
    id?: string;
    orgUnitCode: string;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed?: number;
};
export type AiTokenBudgetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    tokensConsumed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AiTokenBudgetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    tokensConsumed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AiTokenBudgetListRelationFilter = {
    every?: Prisma.AiTokenBudgetWhereInput;
    some?: Prisma.AiTokenBudgetWhereInput;
    none?: Prisma.AiTokenBudgetWhereInput;
};
export type AiTokenBudgetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiTokenBudgetOrgUnitCodePeriodYearPeriodMonthCompoundUniqueInput = {
    orgUnitCode: string;
    periodYear: number;
    periodMonth: number;
};
export type AiTokenBudgetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    tokenLimit?: Prisma.SortOrder;
    tokensConsumed?: Prisma.SortOrder;
};
export type AiTokenBudgetAvgOrderByAggregateInput = {
    periodYear?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    tokenLimit?: Prisma.SortOrder;
    tokensConsumed?: Prisma.SortOrder;
};
export type AiTokenBudgetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    tokenLimit?: Prisma.SortOrder;
    tokensConsumed?: Prisma.SortOrder;
};
export type AiTokenBudgetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    tokenLimit?: Prisma.SortOrder;
    tokensConsumed?: Prisma.SortOrder;
};
export type AiTokenBudgetSumOrderByAggregateInput = {
    periodYear?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    tokenLimit?: Prisma.SortOrder;
    tokensConsumed?: Prisma.SortOrder;
};
export type AiTokenBudgetCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.AiTokenBudgetCreateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput> | Prisma.AiTokenBudgetCreateWithoutOrgUnitInput[] | Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput | Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.AiTokenBudgetCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
};
export type AiTokenBudgetUncheckedCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.AiTokenBudgetCreateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput> | Prisma.AiTokenBudgetCreateWithoutOrgUnitInput[] | Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput | Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.AiTokenBudgetCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
};
export type AiTokenBudgetUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.AiTokenBudgetCreateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput> | Prisma.AiTokenBudgetCreateWithoutOrgUnitInput[] | Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput | Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.AiTokenBudgetUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.AiTokenBudgetUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.AiTokenBudgetCreateManyOrgUnitInputEnvelope;
    set?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    disconnect?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    delete?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    connect?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    update?: Prisma.AiTokenBudgetUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.AiTokenBudgetUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.AiTokenBudgetUpdateManyWithWhereWithoutOrgUnitInput | Prisma.AiTokenBudgetUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.AiTokenBudgetScalarWhereInput | Prisma.AiTokenBudgetScalarWhereInput[];
};
export type AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.AiTokenBudgetCreateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput> | Prisma.AiTokenBudgetCreateWithoutOrgUnitInput[] | Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput | Prisma.AiTokenBudgetCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.AiTokenBudgetUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.AiTokenBudgetUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.AiTokenBudgetCreateManyOrgUnitInputEnvelope;
    set?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    disconnect?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    delete?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    connect?: Prisma.AiTokenBudgetWhereUniqueInput | Prisma.AiTokenBudgetWhereUniqueInput[];
    update?: Prisma.AiTokenBudgetUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.AiTokenBudgetUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.AiTokenBudgetUpdateManyWithWhereWithoutOrgUnitInput | Prisma.AiTokenBudgetUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.AiTokenBudgetScalarWhereInput | Prisma.AiTokenBudgetScalarWhereInput[];
};
export type AiTokenBudgetCreateWithoutOrgUnitInput = {
    id?: string;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed?: number;
};
export type AiTokenBudgetUncheckedCreateWithoutOrgUnitInput = {
    id?: string;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed?: number;
};
export type AiTokenBudgetCreateOrConnectWithoutOrgUnitInput = {
    where: Prisma.AiTokenBudgetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiTokenBudgetCreateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput>;
};
export type AiTokenBudgetCreateManyOrgUnitInputEnvelope = {
    data: Prisma.AiTokenBudgetCreateManyOrgUnitInput | Prisma.AiTokenBudgetCreateManyOrgUnitInput[];
    skipDuplicates?: boolean;
};
export type AiTokenBudgetUpsertWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.AiTokenBudgetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiTokenBudgetUpdateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedUpdateWithoutOrgUnitInput>;
    create: Prisma.XOR<Prisma.AiTokenBudgetCreateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedCreateWithoutOrgUnitInput>;
};
export type AiTokenBudgetUpdateWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.AiTokenBudgetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiTokenBudgetUpdateWithoutOrgUnitInput, Prisma.AiTokenBudgetUncheckedUpdateWithoutOrgUnitInput>;
};
export type AiTokenBudgetUpdateManyWithWhereWithoutOrgUnitInput = {
    where: Prisma.AiTokenBudgetScalarWhereInput;
    data: Prisma.XOR<Prisma.AiTokenBudgetUpdateManyMutationInput, Prisma.AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitInput>;
};
export type AiTokenBudgetScalarWhereInput = {
    AND?: Prisma.AiTokenBudgetScalarWhereInput | Prisma.AiTokenBudgetScalarWhereInput[];
    OR?: Prisma.AiTokenBudgetScalarWhereInput[];
    NOT?: Prisma.AiTokenBudgetScalarWhereInput | Prisma.AiTokenBudgetScalarWhereInput[];
    id?: Prisma.UuidFilter<"AiTokenBudget"> | string;
    orgUnitCode?: Prisma.StringFilter<"AiTokenBudget"> | string;
    periodYear?: Prisma.IntFilter<"AiTokenBudget"> | number;
    periodMonth?: Prisma.IntFilter<"AiTokenBudget"> | number;
    tokenLimit?: Prisma.IntFilter<"AiTokenBudget"> | number;
    tokensConsumed?: Prisma.IntFilter<"AiTokenBudget"> | number;
};
export type AiTokenBudgetCreateManyOrgUnitInput = {
    id?: string;
    periodYear: number;
    periodMonth: number;
    tokenLimit: number;
    tokensConsumed?: number;
};
export type AiTokenBudgetUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    tokensConsumed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AiTokenBudgetUncheckedUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    tokensConsumed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AiTokenBudgetUncheckedUpdateManyWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    tokensConsumed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AiTokenBudgetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    periodYear?: boolean;
    periodMonth?: boolean;
    tokenLimit?: boolean;
    tokensConsumed?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiTokenBudget"]>;
export type AiTokenBudgetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    periodYear?: boolean;
    periodMonth?: boolean;
    tokenLimit?: boolean;
    tokensConsumed?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiTokenBudget"]>;
export type AiTokenBudgetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    periodYear?: boolean;
    periodMonth?: boolean;
    tokenLimit?: boolean;
    tokensConsumed?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiTokenBudget"]>;
export type AiTokenBudgetSelectScalar = {
    id?: boolean;
    orgUnitCode?: boolean;
    periodYear?: boolean;
    periodMonth?: boolean;
    tokenLimit?: boolean;
    tokensConsumed?: boolean;
};
export type AiTokenBudgetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orgUnitCode" | "periodYear" | "periodMonth" | "tokenLimit" | "tokensConsumed", ExtArgs["result"]["aiTokenBudget"]>;
export type AiTokenBudgetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type AiTokenBudgetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type AiTokenBudgetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type $AiTokenBudgetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiTokenBudget";
    objects: {
        orgUnit: Prisma.$OrgUnitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orgUnitCode: string;
        periodYear: number;
        periodMonth: number;
        tokenLimit: number;
        tokensConsumed: number;
    }, ExtArgs["result"]["aiTokenBudget"]>;
    composites: {};
};
export type AiTokenBudgetGetPayload<S extends boolean | null | undefined | AiTokenBudgetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload, S>;
export type AiTokenBudgetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiTokenBudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiTokenBudgetCountAggregateInputType | true;
};
export interface AiTokenBudgetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiTokenBudget'];
        meta: {
            name: 'AiTokenBudget';
        };
    };
    findUnique<T extends AiTokenBudgetFindUniqueArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiTokenBudgetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiTokenBudgetFindFirstArgs>(args?: Prisma.SelectSubset<T, AiTokenBudgetFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiTokenBudgetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiTokenBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiTokenBudgetFindManyArgs>(args?: Prisma.SelectSubset<T, AiTokenBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiTokenBudgetCreateArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetCreateArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiTokenBudgetCreateManyArgs>(args?: Prisma.SelectSubset<T, AiTokenBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiTokenBudgetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiTokenBudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiTokenBudgetDeleteArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetDeleteArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiTokenBudgetUpdateArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetUpdateArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiTokenBudgetDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiTokenBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiTokenBudgetUpdateManyArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiTokenBudgetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiTokenBudgetUpsertArgs>(args: Prisma.SelectSubset<T, AiTokenBudgetUpsertArgs<ExtArgs>>): Prisma.Prisma__AiTokenBudgetClient<runtime.Types.Result.GetResult<Prisma.$AiTokenBudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiTokenBudgetCountArgs>(args?: Prisma.Subset<T, AiTokenBudgetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiTokenBudgetCountAggregateOutputType> : number>;
    aggregate<T extends AiTokenBudgetAggregateArgs>(args: Prisma.Subset<T, AiTokenBudgetAggregateArgs>): Prisma.PrismaPromise<GetAiTokenBudgetAggregateType<T>>;
    groupBy<T extends AiTokenBudgetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiTokenBudgetGroupByArgs['orderBy'];
    } : {
        orderBy?: AiTokenBudgetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiTokenBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiTokenBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiTokenBudgetFieldRefs;
}
export interface Prisma__AiTokenBudgetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orgUnit<T extends Prisma.OrgUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiTokenBudgetFieldRefs {
    readonly id: Prisma.FieldRef<"AiTokenBudget", 'String'>;
    readonly orgUnitCode: Prisma.FieldRef<"AiTokenBudget", 'String'>;
    readonly periodYear: Prisma.FieldRef<"AiTokenBudget", 'Int'>;
    readonly periodMonth: Prisma.FieldRef<"AiTokenBudget", 'Int'>;
    readonly tokenLimit: Prisma.FieldRef<"AiTokenBudget", 'Int'>;
    readonly tokensConsumed: Prisma.FieldRef<"AiTokenBudget", 'Int'>;
}
export type AiTokenBudgetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where: Prisma.AiTokenBudgetWhereUniqueInput;
};
export type AiTokenBudgetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where: Prisma.AiTokenBudgetWhereUniqueInput;
};
export type AiTokenBudgetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where?: Prisma.AiTokenBudgetWhereInput;
    orderBy?: Prisma.AiTokenBudgetOrderByWithRelationInput | Prisma.AiTokenBudgetOrderByWithRelationInput[];
    cursor?: Prisma.AiTokenBudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiTokenBudgetScalarFieldEnum | Prisma.AiTokenBudgetScalarFieldEnum[];
};
export type AiTokenBudgetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where?: Prisma.AiTokenBudgetWhereInput;
    orderBy?: Prisma.AiTokenBudgetOrderByWithRelationInput | Prisma.AiTokenBudgetOrderByWithRelationInput[];
    cursor?: Prisma.AiTokenBudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiTokenBudgetScalarFieldEnum | Prisma.AiTokenBudgetScalarFieldEnum[];
};
export type AiTokenBudgetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where?: Prisma.AiTokenBudgetWhereInput;
    orderBy?: Prisma.AiTokenBudgetOrderByWithRelationInput | Prisma.AiTokenBudgetOrderByWithRelationInput[];
    cursor?: Prisma.AiTokenBudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiTokenBudgetScalarFieldEnum | Prisma.AiTokenBudgetScalarFieldEnum[];
};
export type AiTokenBudgetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiTokenBudgetCreateInput, Prisma.AiTokenBudgetUncheckedCreateInput>;
};
export type AiTokenBudgetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiTokenBudgetCreateManyInput | Prisma.AiTokenBudgetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiTokenBudgetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    data: Prisma.AiTokenBudgetCreateManyInput | Prisma.AiTokenBudgetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AiTokenBudgetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AiTokenBudgetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiTokenBudgetUpdateInput, Prisma.AiTokenBudgetUncheckedUpdateInput>;
    where: Prisma.AiTokenBudgetWhereUniqueInput;
};
export type AiTokenBudgetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiTokenBudgetUpdateManyMutationInput, Prisma.AiTokenBudgetUncheckedUpdateManyInput>;
    where?: Prisma.AiTokenBudgetWhereInput;
    limit?: number;
};
export type AiTokenBudgetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiTokenBudgetUpdateManyMutationInput, Prisma.AiTokenBudgetUncheckedUpdateManyInput>;
    where?: Prisma.AiTokenBudgetWhereInput;
    limit?: number;
    include?: Prisma.AiTokenBudgetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AiTokenBudgetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where: Prisma.AiTokenBudgetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiTokenBudgetCreateInput, Prisma.AiTokenBudgetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiTokenBudgetUpdateInput, Prisma.AiTokenBudgetUncheckedUpdateInput>;
};
export type AiTokenBudgetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
    where: Prisma.AiTokenBudgetWhereUniqueInput;
};
export type AiTokenBudgetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiTokenBudgetWhereInput;
    limit?: number;
};
export type AiTokenBudgetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiTokenBudgetSelect<ExtArgs> | null;
    omit?: Prisma.AiTokenBudgetOmit<ExtArgs> | null;
    include?: Prisma.AiTokenBudgetInclude<ExtArgs> | null;
};
