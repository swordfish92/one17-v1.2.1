import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiCapabilityContextRuleModel = runtime.Types.Result.DefaultSelection<Prisma.$AiCapabilityContextRulePayload>;
export type AggregateAiCapabilityContextRule = {
    _count: AiCapabilityContextRuleCountAggregateOutputType | null;
    _min: AiCapabilityContextRuleMinAggregateOutputType | null;
    _max: AiCapabilityContextRuleMaxAggregateOutputType | null;
};
export type AiCapabilityContextRuleMinAggregateOutputType = {
    capabilityCode: string | null;
    contextType: $Enums.AiContextType | null;
    requiredWorkflowTypeCode: string | null;
    requiredOrgUnitCode: string | null;
};
export type AiCapabilityContextRuleMaxAggregateOutputType = {
    capabilityCode: string | null;
    contextType: $Enums.AiContextType | null;
    requiredWorkflowTypeCode: string | null;
    requiredOrgUnitCode: string | null;
};
export type AiCapabilityContextRuleCountAggregateOutputType = {
    capabilityCode: number;
    contextType: number;
    requiredWorkflowTypeCode: number;
    requiredOrgUnitCode: number;
    _all: number;
};
export type AiCapabilityContextRuleMinAggregateInputType = {
    capabilityCode?: true;
    contextType?: true;
    requiredWorkflowTypeCode?: true;
    requiredOrgUnitCode?: true;
};
export type AiCapabilityContextRuleMaxAggregateInputType = {
    capabilityCode?: true;
    contextType?: true;
    requiredWorkflowTypeCode?: true;
    requiredOrgUnitCode?: true;
};
export type AiCapabilityContextRuleCountAggregateInputType = {
    capabilityCode?: true;
    contextType?: true;
    requiredWorkflowTypeCode?: true;
    requiredOrgUnitCode?: true;
    _all?: true;
};
export type AiCapabilityContextRuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    orderBy?: Prisma.AiCapabilityContextRuleOrderByWithRelationInput | Prisma.AiCapabilityContextRuleOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiCapabilityContextRuleCountAggregateInputType;
    _min?: AiCapabilityContextRuleMinAggregateInputType;
    _max?: AiCapabilityContextRuleMaxAggregateInputType;
};
export type GetAiCapabilityContextRuleAggregateType<T extends AiCapabilityContextRuleAggregateArgs> = {
    [P in keyof T & keyof AggregateAiCapabilityContextRule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiCapabilityContextRule[P]> : Prisma.GetScalarType<T[P], AggregateAiCapabilityContextRule[P]>;
};
export type AiCapabilityContextRuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    orderBy?: Prisma.AiCapabilityContextRuleOrderByWithAggregationInput | Prisma.AiCapabilityContextRuleOrderByWithAggregationInput[];
    by: Prisma.AiCapabilityContextRuleScalarFieldEnum[] | Prisma.AiCapabilityContextRuleScalarFieldEnum;
    having?: Prisma.AiCapabilityContextRuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiCapabilityContextRuleCountAggregateInputType | true;
    _min?: AiCapabilityContextRuleMinAggregateInputType;
    _max?: AiCapabilityContextRuleMaxAggregateInputType;
};
export type AiCapabilityContextRuleGroupByOutputType = {
    capabilityCode: string;
    contextType: $Enums.AiContextType;
    requiredWorkflowTypeCode: string | null;
    requiredOrgUnitCode: string | null;
    _count: AiCapabilityContextRuleCountAggregateOutputType | null;
    _min: AiCapabilityContextRuleMinAggregateOutputType | null;
    _max: AiCapabilityContextRuleMaxAggregateOutputType | null;
};
export type GetAiCapabilityContextRuleGroupByPayload<T extends AiCapabilityContextRuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiCapabilityContextRuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiCapabilityContextRuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiCapabilityContextRuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiCapabilityContextRuleGroupByOutputType[P]>;
}>>;
export type AiCapabilityContextRuleWhereInput = {
    AND?: Prisma.AiCapabilityContextRuleWhereInput | Prisma.AiCapabilityContextRuleWhereInput[];
    OR?: Prisma.AiCapabilityContextRuleWhereInput[];
    NOT?: Prisma.AiCapabilityContextRuleWhereInput | Prisma.AiCapabilityContextRuleWhereInput[];
    capabilityCode?: Prisma.StringFilter<"AiCapabilityContextRule"> | string;
    contextType?: Prisma.EnumAiContextTypeFilter<"AiCapabilityContextRule"> | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.StringNullableFilter<"AiCapabilityContextRule"> | string | null;
    requiredOrgUnitCode?: Prisma.StringNullableFilter<"AiCapabilityContextRule"> | string | null;
    requiredOrgUnit?: Prisma.XOR<Prisma.OrgUnitNullableScalarRelationFilter, Prisma.OrgUnitWhereInput> | null;
};
export type AiCapabilityContextRuleOrderByWithRelationInput = {
    capabilityCode?: Prisma.SortOrder;
    contextType?: Prisma.SortOrder;
    requiredWorkflowTypeCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    requiredOrgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    requiredOrgUnit?: Prisma.OrgUnitOrderByWithRelationInput;
};
export type AiCapabilityContextRuleWhereUniqueInput = Prisma.AtLeast<{
    capabilityCode?: string;
    AND?: Prisma.AiCapabilityContextRuleWhereInput | Prisma.AiCapabilityContextRuleWhereInput[];
    OR?: Prisma.AiCapabilityContextRuleWhereInput[];
    NOT?: Prisma.AiCapabilityContextRuleWhereInput | Prisma.AiCapabilityContextRuleWhereInput[];
    contextType?: Prisma.EnumAiContextTypeFilter<"AiCapabilityContextRule"> | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.StringNullableFilter<"AiCapabilityContextRule"> | string | null;
    requiredOrgUnitCode?: Prisma.StringNullableFilter<"AiCapabilityContextRule"> | string | null;
    requiredOrgUnit?: Prisma.XOR<Prisma.OrgUnitNullableScalarRelationFilter, Prisma.OrgUnitWhereInput> | null;
}, "capabilityCode">;
export type AiCapabilityContextRuleOrderByWithAggregationInput = {
    capabilityCode?: Prisma.SortOrder;
    contextType?: Prisma.SortOrder;
    requiredWorkflowTypeCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    requiredOrgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AiCapabilityContextRuleCountOrderByAggregateInput;
    _max?: Prisma.AiCapabilityContextRuleMaxOrderByAggregateInput;
    _min?: Prisma.AiCapabilityContextRuleMinOrderByAggregateInput;
};
export type AiCapabilityContextRuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiCapabilityContextRuleScalarWhereWithAggregatesInput | Prisma.AiCapabilityContextRuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiCapabilityContextRuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiCapabilityContextRuleScalarWhereWithAggregatesInput | Prisma.AiCapabilityContextRuleScalarWhereWithAggregatesInput[];
    capabilityCode?: Prisma.StringWithAggregatesFilter<"AiCapabilityContextRule"> | string;
    contextType?: Prisma.EnumAiContextTypeWithAggregatesFilter<"AiCapabilityContextRule"> | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.StringNullableWithAggregatesFilter<"AiCapabilityContextRule"> | string | null;
    requiredOrgUnitCode?: Prisma.StringNullableWithAggregatesFilter<"AiCapabilityContextRule"> | string | null;
};
export type AiCapabilityContextRuleCreateInput = {
    capabilityCode: string;
    contextType: $Enums.AiContextType;
    requiredWorkflowTypeCode?: string | null;
    requiredOrgUnit?: Prisma.OrgUnitCreateNestedOneWithoutAiCapabilityContextRulesInput;
};
export type AiCapabilityContextRuleUncheckedCreateInput = {
    capabilityCode: string;
    contextType: $Enums.AiContextType;
    requiredWorkflowTypeCode?: string | null;
    requiredOrgUnitCode?: string | null;
};
export type AiCapabilityContextRuleUpdateInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contextType?: Prisma.EnumAiContextTypeFieldUpdateOperationsInput | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiredOrgUnit?: Prisma.OrgUnitUpdateOneWithoutAiCapabilityContextRulesNestedInput;
};
export type AiCapabilityContextRuleUncheckedUpdateInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contextType?: Prisma.EnumAiContextTypeFieldUpdateOperationsInput | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiredOrgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiCapabilityContextRuleCreateManyInput = {
    capabilityCode: string;
    contextType: $Enums.AiContextType;
    requiredWorkflowTypeCode?: string | null;
    requiredOrgUnitCode?: string | null;
};
export type AiCapabilityContextRuleUpdateManyMutationInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contextType?: Prisma.EnumAiContextTypeFieldUpdateOperationsInput | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiCapabilityContextRuleUncheckedUpdateManyInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contextType?: Prisma.EnumAiContextTypeFieldUpdateOperationsInput | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiredOrgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiCapabilityContextRuleListRelationFilter = {
    every?: Prisma.AiCapabilityContextRuleWhereInput;
    some?: Prisma.AiCapabilityContextRuleWhereInput;
    none?: Prisma.AiCapabilityContextRuleWhereInput;
};
export type AiCapabilityContextRuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiCapabilityContextRuleCountOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    contextType?: Prisma.SortOrder;
    requiredWorkflowTypeCode?: Prisma.SortOrder;
    requiredOrgUnitCode?: Prisma.SortOrder;
};
export type AiCapabilityContextRuleMaxOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    contextType?: Prisma.SortOrder;
    requiredWorkflowTypeCode?: Prisma.SortOrder;
    requiredOrgUnitCode?: Prisma.SortOrder;
};
export type AiCapabilityContextRuleMinOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    contextType?: Prisma.SortOrder;
    requiredWorkflowTypeCode?: Prisma.SortOrder;
    requiredOrgUnitCode?: Prisma.SortOrder;
};
export type AiCapabilityContextRuleCreateNestedManyWithoutRequiredOrgUnitInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput> | Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput[] | Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput[];
    connectOrCreate?: Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput[];
    createMany?: Prisma.AiCapabilityContextRuleCreateManyRequiredOrgUnitInputEnvelope;
    connect?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
};
export type AiCapabilityContextRuleUncheckedCreateNestedManyWithoutRequiredOrgUnitInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput> | Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput[] | Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput[];
    connectOrCreate?: Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput[];
    createMany?: Prisma.AiCapabilityContextRuleCreateManyRequiredOrgUnitInputEnvelope;
    connect?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
};
export type AiCapabilityContextRuleUpdateManyWithoutRequiredOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput> | Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput[] | Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput[];
    connectOrCreate?: Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput[];
    upsert?: Prisma.AiCapabilityContextRuleUpsertWithWhereUniqueWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleUpsertWithWhereUniqueWithoutRequiredOrgUnitInput[];
    createMany?: Prisma.AiCapabilityContextRuleCreateManyRequiredOrgUnitInputEnvelope;
    set?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    disconnect?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    delete?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    connect?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    update?: Prisma.AiCapabilityContextRuleUpdateWithWhereUniqueWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleUpdateWithWhereUniqueWithoutRequiredOrgUnitInput[];
    updateMany?: Prisma.AiCapabilityContextRuleUpdateManyWithWhereWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleUpdateManyWithWhereWithoutRequiredOrgUnitInput[];
    deleteMany?: Prisma.AiCapabilityContextRuleScalarWhereInput | Prisma.AiCapabilityContextRuleScalarWhereInput[];
};
export type AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput> | Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput[] | Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput[];
    connectOrCreate?: Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput[];
    upsert?: Prisma.AiCapabilityContextRuleUpsertWithWhereUniqueWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleUpsertWithWhereUniqueWithoutRequiredOrgUnitInput[];
    createMany?: Prisma.AiCapabilityContextRuleCreateManyRequiredOrgUnitInputEnvelope;
    set?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    disconnect?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    delete?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    connect?: Prisma.AiCapabilityContextRuleWhereUniqueInput | Prisma.AiCapabilityContextRuleWhereUniqueInput[];
    update?: Prisma.AiCapabilityContextRuleUpdateWithWhereUniqueWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleUpdateWithWhereUniqueWithoutRequiredOrgUnitInput[];
    updateMany?: Prisma.AiCapabilityContextRuleUpdateManyWithWhereWithoutRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleUpdateManyWithWhereWithoutRequiredOrgUnitInput[];
    deleteMany?: Prisma.AiCapabilityContextRuleScalarWhereInput | Prisma.AiCapabilityContextRuleScalarWhereInput[];
};
export type EnumAiContextTypeFieldUpdateOperationsInput = {
    set?: $Enums.AiContextType;
};
export type AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput = {
    capabilityCode: string;
    contextType: $Enums.AiContextType;
    requiredWorkflowTypeCode?: string | null;
};
export type AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput = {
    capabilityCode: string;
    contextType: $Enums.AiContextType;
    requiredWorkflowTypeCode?: string | null;
};
export type AiCapabilityContextRuleCreateOrConnectWithoutRequiredOrgUnitInput = {
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput>;
};
export type AiCapabilityContextRuleCreateManyRequiredOrgUnitInputEnvelope = {
    data: Prisma.AiCapabilityContextRuleCreateManyRequiredOrgUnitInput | Prisma.AiCapabilityContextRuleCreateManyRequiredOrgUnitInput[];
    skipDuplicates?: boolean;
};
export type AiCapabilityContextRuleUpsertWithWhereUniqueWithoutRequiredOrgUnitInput = {
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiCapabilityContextRuleUpdateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedUpdateWithoutRequiredOrgUnitInput>;
    create: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedCreateWithoutRequiredOrgUnitInput>;
};
export type AiCapabilityContextRuleUpdateWithWhereUniqueWithoutRequiredOrgUnitInput = {
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiCapabilityContextRuleUpdateWithoutRequiredOrgUnitInput, Prisma.AiCapabilityContextRuleUncheckedUpdateWithoutRequiredOrgUnitInput>;
};
export type AiCapabilityContextRuleUpdateManyWithWhereWithoutRequiredOrgUnitInput = {
    where: Prisma.AiCapabilityContextRuleScalarWhereInput;
    data: Prisma.XOR<Prisma.AiCapabilityContextRuleUpdateManyMutationInput, Prisma.AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitInput>;
};
export type AiCapabilityContextRuleScalarWhereInput = {
    AND?: Prisma.AiCapabilityContextRuleScalarWhereInput | Prisma.AiCapabilityContextRuleScalarWhereInput[];
    OR?: Prisma.AiCapabilityContextRuleScalarWhereInput[];
    NOT?: Prisma.AiCapabilityContextRuleScalarWhereInput | Prisma.AiCapabilityContextRuleScalarWhereInput[];
    capabilityCode?: Prisma.StringFilter<"AiCapabilityContextRule"> | string;
    contextType?: Prisma.EnumAiContextTypeFilter<"AiCapabilityContextRule"> | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.StringNullableFilter<"AiCapabilityContextRule"> | string | null;
    requiredOrgUnitCode?: Prisma.StringNullableFilter<"AiCapabilityContextRule"> | string | null;
};
export type AiCapabilityContextRuleCreateManyRequiredOrgUnitInput = {
    capabilityCode: string;
    contextType: $Enums.AiContextType;
    requiredWorkflowTypeCode?: string | null;
};
export type AiCapabilityContextRuleUpdateWithoutRequiredOrgUnitInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contextType?: Prisma.EnumAiContextTypeFieldUpdateOperationsInput | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiCapabilityContextRuleUncheckedUpdateWithoutRequiredOrgUnitInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contextType?: Prisma.EnumAiContextTypeFieldUpdateOperationsInput | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiCapabilityContextRuleUncheckedUpdateManyWithoutRequiredOrgUnitInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contextType?: Prisma.EnumAiContextTypeFieldUpdateOperationsInput | $Enums.AiContextType;
    requiredWorkflowTypeCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AiCapabilityContextRuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    contextType?: boolean;
    requiredWorkflowTypeCode?: boolean;
    requiredOrgUnitCode?: boolean;
    requiredOrgUnit?: boolean | Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs>;
}, ExtArgs["result"]["aiCapabilityContextRule"]>;
export type AiCapabilityContextRuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    contextType?: boolean;
    requiredWorkflowTypeCode?: boolean;
    requiredOrgUnitCode?: boolean;
    requiredOrgUnit?: boolean | Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs>;
}, ExtArgs["result"]["aiCapabilityContextRule"]>;
export type AiCapabilityContextRuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    contextType?: boolean;
    requiredWorkflowTypeCode?: boolean;
    requiredOrgUnitCode?: boolean;
    requiredOrgUnit?: boolean | Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs>;
}, ExtArgs["result"]["aiCapabilityContextRule"]>;
export type AiCapabilityContextRuleSelectScalar = {
    capabilityCode?: boolean;
    contextType?: boolean;
    requiredWorkflowTypeCode?: boolean;
    requiredOrgUnitCode?: boolean;
};
export type AiCapabilityContextRuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"capabilityCode" | "contextType" | "requiredWorkflowTypeCode" | "requiredOrgUnitCode", ExtArgs["result"]["aiCapabilityContextRule"]>;
export type AiCapabilityContextRuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requiredOrgUnit?: boolean | Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs>;
};
export type AiCapabilityContextRuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requiredOrgUnit?: boolean | Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs>;
};
export type AiCapabilityContextRuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requiredOrgUnit?: boolean | Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs>;
};
export type $AiCapabilityContextRulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiCapabilityContextRule";
    objects: {
        requiredOrgUnit: Prisma.$OrgUnitPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        capabilityCode: string;
        contextType: $Enums.AiContextType;
        requiredWorkflowTypeCode: string | null;
        requiredOrgUnitCode: string | null;
    }, ExtArgs["result"]["aiCapabilityContextRule"]>;
    composites: {};
};
export type AiCapabilityContextRuleGetPayload<S extends boolean | null | undefined | AiCapabilityContextRuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload, S>;
export type AiCapabilityContextRuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiCapabilityContextRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiCapabilityContextRuleCountAggregateInputType | true;
};
export interface AiCapabilityContextRuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiCapabilityContextRule'];
        meta: {
            name: 'AiCapabilityContextRule';
        };
    };
    findUnique<T extends AiCapabilityContextRuleFindUniqueArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiCapabilityContextRuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiCapabilityContextRuleFindFirstArgs>(args?: Prisma.SelectSubset<T, AiCapabilityContextRuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiCapabilityContextRuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiCapabilityContextRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiCapabilityContextRuleFindManyArgs>(args?: Prisma.SelectSubset<T, AiCapabilityContextRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiCapabilityContextRuleCreateArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleCreateArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiCapabilityContextRuleCreateManyArgs>(args?: Prisma.SelectSubset<T, AiCapabilityContextRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiCapabilityContextRuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiCapabilityContextRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiCapabilityContextRuleDeleteArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleDeleteArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiCapabilityContextRuleUpdateArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleUpdateArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiCapabilityContextRuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiCapabilityContextRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiCapabilityContextRuleUpdateManyArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiCapabilityContextRuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiCapabilityContextRuleUpsertArgs>(args: Prisma.SelectSubset<T, AiCapabilityContextRuleUpsertArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityContextRuleClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityContextRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiCapabilityContextRuleCountArgs>(args?: Prisma.Subset<T, AiCapabilityContextRuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiCapabilityContextRuleCountAggregateOutputType> : number>;
    aggregate<T extends AiCapabilityContextRuleAggregateArgs>(args: Prisma.Subset<T, AiCapabilityContextRuleAggregateArgs>): Prisma.PrismaPromise<GetAiCapabilityContextRuleAggregateType<T>>;
    groupBy<T extends AiCapabilityContextRuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiCapabilityContextRuleGroupByArgs['orderBy'];
    } : {
        orderBy?: AiCapabilityContextRuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiCapabilityContextRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiCapabilityContextRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiCapabilityContextRuleFieldRefs;
}
export interface Prisma__AiCapabilityContextRuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    requiredOrgUnit<T extends Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiCapabilityContextRuleFieldRefs {
    readonly capabilityCode: Prisma.FieldRef<"AiCapabilityContextRule", 'String'>;
    readonly contextType: Prisma.FieldRef<"AiCapabilityContextRule", 'AiContextType'>;
    readonly requiredWorkflowTypeCode: Prisma.FieldRef<"AiCapabilityContextRule", 'String'>;
    readonly requiredOrgUnitCode: Prisma.FieldRef<"AiCapabilityContextRule", 'String'>;
}
export type AiCapabilityContextRuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
};
export type AiCapabilityContextRuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
};
export type AiCapabilityContextRuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    orderBy?: Prisma.AiCapabilityContextRuleOrderByWithRelationInput | Prisma.AiCapabilityContextRuleOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiCapabilityContextRuleScalarFieldEnum | Prisma.AiCapabilityContextRuleScalarFieldEnum[];
};
export type AiCapabilityContextRuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    orderBy?: Prisma.AiCapabilityContextRuleOrderByWithRelationInput | Prisma.AiCapabilityContextRuleOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiCapabilityContextRuleScalarFieldEnum | Prisma.AiCapabilityContextRuleScalarFieldEnum[];
};
export type AiCapabilityContextRuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    orderBy?: Prisma.AiCapabilityContextRuleOrderByWithRelationInput | Prisma.AiCapabilityContextRuleOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiCapabilityContextRuleScalarFieldEnum | Prisma.AiCapabilityContextRuleScalarFieldEnum[];
};
export type AiCapabilityContextRuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateInput, Prisma.AiCapabilityContextRuleUncheckedCreateInput>;
};
export type AiCapabilityContextRuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiCapabilityContextRuleCreateManyInput | Prisma.AiCapabilityContextRuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiCapabilityContextRuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    data: Prisma.AiCapabilityContextRuleCreateManyInput | Prisma.AiCapabilityContextRuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AiCapabilityContextRuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AiCapabilityContextRuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiCapabilityContextRuleUpdateInput, Prisma.AiCapabilityContextRuleUncheckedUpdateInput>;
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
};
export type AiCapabilityContextRuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiCapabilityContextRuleUpdateManyMutationInput, Prisma.AiCapabilityContextRuleUncheckedUpdateManyInput>;
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    limit?: number;
};
export type AiCapabilityContextRuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiCapabilityContextRuleUpdateManyMutationInput, Prisma.AiCapabilityContextRuleUncheckedUpdateManyInput>;
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    limit?: number;
    include?: Prisma.AiCapabilityContextRuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AiCapabilityContextRuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiCapabilityContextRuleCreateInput, Prisma.AiCapabilityContextRuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiCapabilityContextRuleUpdateInput, Prisma.AiCapabilityContextRuleUncheckedUpdateInput>;
};
export type AiCapabilityContextRuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityContextRuleWhereUniqueInput;
};
export type AiCapabilityContextRuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiCapabilityContextRuleWhereInput;
    limit?: number;
};
export type AiCapabilityContextRule$requiredOrgUnitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrgUnitSelect<ExtArgs> | null;
    omit?: Prisma.OrgUnitOmit<ExtArgs> | null;
    include?: Prisma.OrgUnitInclude<ExtArgs> | null;
    where?: Prisma.OrgUnitWhereInput;
};
export type AiCapabilityContextRuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityContextRuleSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityContextRuleOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityContextRuleInclude<ExtArgs> | null;
};
