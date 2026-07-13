import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WorkflowTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkflowTypePayload>;
export type AggregateWorkflowType = {
    _count: WorkflowTypeCountAggregateOutputType | null;
    _min: WorkflowTypeMinAggregateOutputType | null;
    _max: WorkflowTypeMaxAggregateOutputType | null;
};
export type WorkflowTypeMinAggregateOutputType = {
    code: string | null;
    description: string | null;
};
export type WorkflowTypeMaxAggregateOutputType = {
    code: string | null;
    description: string | null;
};
export type WorkflowTypeCountAggregateOutputType = {
    code: number;
    description: number;
    _all: number;
};
export type WorkflowTypeMinAggregateInputType = {
    code?: true;
    description?: true;
};
export type WorkflowTypeMaxAggregateInputType = {
    code?: true;
    description?: true;
};
export type WorkflowTypeCountAggregateInputType = {
    code?: true;
    description?: true;
    _all?: true;
};
export type WorkflowTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowTypeWhereInput;
    orderBy?: Prisma.WorkflowTypeOrderByWithRelationInput | Prisma.WorkflowTypeOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WorkflowTypeCountAggregateInputType;
    _min?: WorkflowTypeMinAggregateInputType;
    _max?: WorkflowTypeMaxAggregateInputType;
};
export type GetWorkflowTypeAggregateType<T extends WorkflowTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkflowType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkflowType[P]> : Prisma.GetScalarType<T[P], AggregateWorkflowType[P]>;
};
export type WorkflowTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowTypeWhereInput;
    orderBy?: Prisma.WorkflowTypeOrderByWithAggregationInput | Prisma.WorkflowTypeOrderByWithAggregationInput[];
    by: Prisma.WorkflowTypeScalarFieldEnum[] | Prisma.WorkflowTypeScalarFieldEnum;
    having?: Prisma.WorkflowTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkflowTypeCountAggregateInputType | true;
    _min?: WorkflowTypeMinAggregateInputType;
    _max?: WorkflowTypeMaxAggregateInputType;
};
export type WorkflowTypeGroupByOutputType = {
    code: string;
    description: string | null;
    _count: WorkflowTypeCountAggregateOutputType | null;
    _min: WorkflowTypeMinAggregateOutputType | null;
    _max: WorkflowTypeMaxAggregateOutputType | null;
};
export type GetWorkflowTypeGroupByPayload<T extends WorkflowTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkflowTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkflowTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkflowTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkflowTypeGroupByOutputType[P]>;
}>>;
export type WorkflowTypeWhereInput = {
    AND?: Prisma.WorkflowTypeWhereInput | Prisma.WorkflowTypeWhereInput[];
    OR?: Prisma.WorkflowTypeWhereInput[];
    NOT?: Prisma.WorkflowTypeWhereInput | Prisma.WorkflowTypeWhereInput[];
    code?: Prisma.StringFilter<"WorkflowType"> | string;
    description?: Prisma.StringNullableFilter<"WorkflowType"> | string | null;
    approvalRules?: Prisma.ApprovalRuleListRelationFilter;
    approvalChainVersions?: Prisma.ApprovalChainVersionListRelationFilter;
    instances?: Prisma.WorkflowInstanceListRelationFilter;
};
export type WorkflowTypeOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvalRules?: Prisma.ApprovalRuleOrderByRelationAggregateInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionOrderByRelationAggregateInput;
    instances?: Prisma.WorkflowInstanceOrderByRelationAggregateInput;
};
export type WorkflowTypeWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.WorkflowTypeWhereInput | Prisma.WorkflowTypeWhereInput[];
    OR?: Prisma.WorkflowTypeWhereInput[];
    NOT?: Prisma.WorkflowTypeWhereInput | Prisma.WorkflowTypeWhereInput[];
    description?: Prisma.StringNullableFilter<"WorkflowType"> | string | null;
    approvalRules?: Prisma.ApprovalRuleListRelationFilter;
    approvalChainVersions?: Prisma.ApprovalChainVersionListRelationFilter;
    instances?: Prisma.WorkflowInstanceListRelationFilter;
}, "code">;
export type WorkflowTypeOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.WorkflowTypeCountOrderByAggregateInput;
    _max?: Prisma.WorkflowTypeMaxOrderByAggregateInput;
    _min?: Prisma.WorkflowTypeMinOrderByAggregateInput;
};
export type WorkflowTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkflowTypeScalarWhereWithAggregatesInput | Prisma.WorkflowTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkflowTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkflowTypeScalarWhereWithAggregatesInput | Prisma.WorkflowTypeScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"WorkflowType"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"WorkflowType"> | string | null;
};
export type WorkflowTypeCreateInput = {
    code: string;
    description?: string | null;
    approvalRules?: Prisma.ApprovalRuleCreateNestedManyWithoutWorkflowTypeInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionCreateNestedManyWithoutWorkflowTypeInput;
    instances?: Prisma.WorkflowInstanceCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeUncheckedCreateInput = {
    code: string;
    description?: string | null;
    approvalRules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutWorkflowTypeInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionUncheckedCreateNestedManyWithoutWorkflowTypeInput;
    instances?: Prisma.WorkflowInstanceUncheckedCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRules?: Prisma.ApprovalRuleUpdateManyWithoutWorkflowTypeNestedInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionUpdateManyWithoutWorkflowTypeNestedInput;
    instances?: Prisma.WorkflowInstanceUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
    instances?: Prisma.WorkflowInstanceUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeCreateManyInput = {
    code: string;
    description?: string | null;
};
export type WorkflowTypeUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowTypeUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowTypeCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type WorkflowTypeMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type WorkflowTypeMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type WorkflowTypeScalarRelationFilter = {
    is?: Prisma.WorkflowTypeWhereInput;
    isNot?: Prisma.WorkflowTypeWhereInput;
};
export type WorkflowTypeCreateNestedOneWithoutApprovalChainVersionsInput = {
    create?: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalChainVersionsInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalChainVersionsInput>;
    connectOrCreate?: Prisma.WorkflowTypeCreateOrConnectWithoutApprovalChainVersionsInput;
    connect?: Prisma.WorkflowTypeWhereUniqueInput;
};
export type WorkflowTypeUpdateOneRequiredWithoutApprovalChainVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalChainVersionsInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalChainVersionsInput>;
    connectOrCreate?: Prisma.WorkflowTypeCreateOrConnectWithoutApprovalChainVersionsInput;
    upsert?: Prisma.WorkflowTypeUpsertWithoutApprovalChainVersionsInput;
    connect?: Prisma.WorkflowTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkflowTypeUpdateToOneWithWhereWithoutApprovalChainVersionsInput, Prisma.WorkflowTypeUpdateWithoutApprovalChainVersionsInput>, Prisma.WorkflowTypeUncheckedUpdateWithoutApprovalChainVersionsInput>;
};
export type WorkflowTypeCreateNestedOneWithoutApprovalRulesInput = {
    create?: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalRulesInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalRulesInput>;
    connectOrCreate?: Prisma.WorkflowTypeCreateOrConnectWithoutApprovalRulesInput;
    connect?: Prisma.WorkflowTypeWhereUniqueInput;
};
export type WorkflowTypeUpdateOneRequiredWithoutApprovalRulesNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalRulesInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalRulesInput>;
    connectOrCreate?: Prisma.WorkflowTypeCreateOrConnectWithoutApprovalRulesInput;
    upsert?: Prisma.WorkflowTypeUpsertWithoutApprovalRulesInput;
    connect?: Prisma.WorkflowTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkflowTypeUpdateToOneWithWhereWithoutApprovalRulesInput, Prisma.WorkflowTypeUpdateWithoutApprovalRulesInput>, Prisma.WorkflowTypeUncheckedUpdateWithoutApprovalRulesInput>;
};
export type WorkflowTypeCreateNestedOneWithoutInstancesInput = {
    create?: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutInstancesInput, Prisma.WorkflowTypeUncheckedCreateWithoutInstancesInput>;
    connectOrCreate?: Prisma.WorkflowTypeCreateOrConnectWithoutInstancesInput;
    connect?: Prisma.WorkflowTypeWhereUniqueInput;
};
export type WorkflowTypeUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutInstancesInput, Prisma.WorkflowTypeUncheckedCreateWithoutInstancesInput>;
    connectOrCreate?: Prisma.WorkflowTypeCreateOrConnectWithoutInstancesInput;
    upsert?: Prisma.WorkflowTypeUpsertWithoutInstancesInput;
    connect?: Prisma.WorkflowTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkflowTypeUpdateToOneWithWhereWithoutInstancesInput, Prisma.WorkflowTypeUpdateWithoutInstancesInput>, Prisma.WorkflowTypeUncheckedUpdateWithoutInstancesInput>;
};
export type WorkflowTypeCreateWithoutApprovalChainVersionsInput = {
    code: string;
    description?: string | null;
    approvalRules?: Prisma.ApprovalRuleCreateNestedManyWithoutWorkflowTypeInput;
    instances?: Prisma.WorkflowInstanceCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeUncheckedCreateWithoutApprovalChainVersionsInput = {
    code: string;
    description?: string | null;
    approvalRules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutWorkflowTypeInput;
    instances?: Prisma.WorkflowInstanceUncheckedCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeCreateOrConnectWithoutApprovalChainVersionsInput = {
    where: Prisma.WorkflowTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalChainVersionsInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalChainVersionsInput>;
};
export type WorkflowTypeUpsertWithoutApprovalChainVersionsInput = {
    update: Prisma.XOR<Prisma.WorkflowTypeUpdateWithoutApprovalChainVersionsInput, Prisma.WorkflowTypeUncheckedUpdateWithoutApprovalChainVersionsInput>;
    create: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalChainVersionsInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalChainVersionsInput>;
    where?: Prisma.WorkflowTypeWhereInput;
};
export type WorkflowTypeUpdateToOneWithWhereWithoutApprovalChainVersionsInput = {
    where?: Prisma.WorkflowTypeWhereInput;
    data: Prisma.XOR<Prisma.WorkflowTypeUpdateWithoutApprovalChainVersionsInput, Prisma.WorkflowTypeUncheckedUpdateWithoutApprovalChainVersionsInput>;
};
export type WorkflowTypeUpdateWithoutApprovalChainVersionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRules?: Prisma.ApprovalRuleUpdateManyWithoutWorkflowTypeNestedInput;
    instances?: Prisma.WorkflowInstanceUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeUncheckedUpdateWithoutApprovalChainVersionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
    instances?: Prisma.WorkflowInstanceUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeCreateWithoutApprovalRulesInput = {
    code: string;
    description?: string | null;
    approvalChainVersions?: Prisma.ApprovalChainVersionCreateNestedManyWithoutWorkflowTypeInput;
    instances?: Prisma.WorkflowInstanceCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeUncheckedCreateWithoutApprovalRulesInput = {
    code: string;
    description?: string | null;
    approvalChainVersions?: Prisma.ApprovalChainVersionUncheckedCreateNestedManyWithoutWorkflowTypeInput;
    instances?: Prisma.WorkflowInstanceUncheckedCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeCreateOrConnectWithoutApprovalRulesInput = {
    where: Prisma.WorkflowTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalRulesInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalRulesInput>;
};
export type WorkflowTypeUpsertWithoutApprovalRulesInput = {
    update: Prisma.XOR<Prisma.WorkflowTypeUpdateWithoutApprovalRulesInput, Prisma.WorkflowTypeUncheckedUpdateWithoutApprovalRulesInput>;
    create: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutApprovalRulesInput, Prisma.WorkflowTypeUncheckedCreateWithoutApprovalRulesInput>;
    where?: Prisma.WorkflowTypeWhereInput;
};
export type WorkflowTypeUpdateToOneWithWhereWithoutApprovalRulesInput = {
    where?: Prisma.WorkflowTypeWhereInput;
    data: Prisma.XOR<Prisma.WorkflowTypeUpdateWithoutApprovalRulesInput, Prisma.WorkflowTypeUncheckedUpdateWithoutApprovalRulesInput>;
};
export type WorkflowTypeUpdateWithoutApprovalRulesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalChainVersions?: Prisma.ApprovalChainVersionUpdateManyWithoutWorkflowTypeNestedInput;
    instances?: Prisma.WorkflowInstanceUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeUncheckedUpdateWithoutApprovalRulesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalChainVersions?: Prisma.ApprovalChainVersionUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
    instances?: Prisma.WorkflowInstanceUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeCreateWithoutInstancesInput = {
    code: string;
    description?: string | null;
    approvalRules?: Prisma.ApprovalRuleCreateNestedManyWithoutWorkflowTypeInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeUncheckedCreateWithoutInstancesInput = {
    code: string;
    description?: string | null;
    approvalRules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutWorkflowTypeInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionUncheckedCreateNestedManyWithoutWorkflowTypeInput;
};
export type WorkflowTypeCreateOrConnectWithoutInstancesInput = {
    where: Prisma.WorkflowTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutInstancesInput, Prisma.WorkflowTypeUncheckedCreateWithoutInstancesInput>;
};
export type WorkflowTypeUpsertWithoutInstancesInput = {
    update: Prisma.XOR<Prisma.WorkflowTypeUpdateWithoutInstancesInput, Prisma.WorkflowTypeUncheckedUpdateWithoutInstancesInput>;
    create: Prisma.XOR<Prisma.WorkflowTypeCreateWithoutInstancesInput, Prisma.WorkflowTypeUncheckedCreateWithoutInstancesInput>;
    where?: Prisma.WorkflowTypeWhereInput;
};
export type WorkflowTypeUpdateToOneWithWhereWithoutInstancesInput = {
    where?: Prisma.WorkflowTypeWhereInput;
    data: Prisma.XOR<Prisma.WorkflowTypeUpdateWithoutInstancesInput, Prisma.WorkflowTypeUncheckedUpdateWithoutInstancesInput>;
};
export type WorkflowTypeUpdateWithoutInstancesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRules?: Prisma.ApprovalRuleUpdateManyWithoutWorkflowTypeNestedInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeUncheckedUpdateWithoutInstancesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
    approvalChainVersions?: Prisma.ApprovalChainVersionUncheckedUpdateManyWithoutWorkflowTypeNestedInput;
};
export type WorkflowTypeCountOutputType = {
    approvalRules: number;
    approvalChainVersions: number;
    instances: number;
};
export type WorkflowTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvalRules?: boolean | WorkflowTypeCountOutputTypeCountApprovalRulesArgs;
    approvalChainVersions?: boolean | WorkflowTypeCountOutputTypeCountApprovalChainVersionsArgs;
    instances?: boolean | WorkflowTypeCountOutputTypeCountInstancesArgs;
};
export type WorkflowTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type WorkflowTypeCountOutputTypeCountApprovalRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRuleWhereInput;
};
export type WorkflowTypeCountOutputTypeCountApprovalChainVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalChainVersionWhereInput;
};
export type WorkflowTypeCountOutputTypeCountInstancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type WorkflowTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    description?: boolean;
    approvalRules?: boolean | Prisma.WorkflowType$approvalRulesArgs<ExtArgs>;
    approvalChainVersions?: boolean | Prisma.WorkflowType$approvalChainVersionsArgs<ExtArgs>;
    instances?: boolean | Prisma.WorkflowType$instancesArgs<ExtArgs>;
    _count?: boolean | Prisma.WorkflowTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workflowType"]>;
export type WorkflowTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["workflowType"]>;
export type WorkflowTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["workflowType"]>;
export type WorkflowTypeSelectScalar = {
    code?: boolean;
    description?: boolean;
};
export type WorkflowTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "description", ExtArgs["result"]["workflowType"]>;
export type WorkflowTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvalRules?: boolean | Prisma.WorkflowType$approvalRulesArgs<ExtArgs>;
    approvalChainVersions?: boolean | Prisma.WorkflowType$approvalChainVersionsArgs<ExtArgs>;
    instances?: boolean | Prisma.WorkflowType$instancesArgs<ExtArgs>;
    _count?: boolean | Prisma.WorkflowTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WorkflowTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type WorkflowTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $WorkflowTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkflowType";
    objects: {
        approvalRules: Prisma.$ApprovalRulePayload<ExtArgs>[];
        approvalChainVersions: Prisma.$ApprovalChainVersionPayload<ExtArgs>[];
        instances: Prisma.$WorkflowInstancePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        description: string | null;
    }, ExtArgs["result"]["workflowType"]>;
    composites: {};
};
export type WorkflowTypeGetPayload<S extends boolean | null | undefined | WorkflowTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload, S>;
export type WorkflowTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkflowTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkflowTypeCountAggregateInputType | true;
};
export interface WorkflowTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkflowType'];
        meta: {
            name: 'WorkflowType';
        };
    };
    findUnique<T extends WorkflowTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkflowTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WorkflowTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkflowTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WorkflowTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkflowTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WorkflowTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkflowTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WorkflowTypeFindManyArgs>(args?: Prisma.SelectSubset<T, WorkflowTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WorkflowTypeCreateArgs>(args: Prisma.SelectSubset<T, WorkflowTypeCreateArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WorkflowTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkflowTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WorkflowTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkflowTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WorkflowTypeDeleteArgs>(args: Prisma.SelectSubset<T, WorkflowTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WorkflowTypeUpdateArgs>(args: Prisma.SelectSubset<T, WorkflowTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WorkflowTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkflowTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WorkflowTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkflowTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WorkflowTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkflowTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WorkflowTypeUpsertArgs>(args: Prisma.SelectSubset<T, WorkflowTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WorkflowTypeCountArgs>(args?: Prisma.Subset<T, WorkflowTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkflowTypeCountAggregateOutputType> : number>;
    aggregate<T extends WorkflowTypeAggregateArgs>(args: Prisma.Subset<T, WorkflowTypeAggregateArgs>): Prisma.PrismaPromise<GetWorkflowTypeAggregateType<T>>;
    groupBy<T extends WorkflowTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkflowTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkflowTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkflowTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WorkflowTypeFieldRefs;
}
export interface Prisma__WorkflowTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    approvalRules<T extends Prisma.WorkflowType$approvalRulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkflowType$approvalRulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvalChainVersions<T extends Prisma.WorkflowType$approvalChainVersionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkflowType$approvalChainVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    instances<T extends Prisma.WorkflowType$instancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkflowType$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WorkflowTypeFieldRefs {
    readonly code: Prisma.FieldRef<"WorkflowType", 'String'>;
    readonly description: Prisma.FieldRef<"WorkflowType", 'String'>;
}
export type WorkflowTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    where: Prisma.WorkflowTypeWhereUniqueInput;
};
export type WorkflowTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    where: Prisma.WorkflowTypeWhereUniqueInput;
};
export type WorkflowTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    where?: Prisma.WorkflowTypeWhereInput;
    orderBy?: Prisma.WorkflowTypeOrderByWithRelationInput | Prisma.WorkflowTypeOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkflowTypeScalarFieldEnum | Prisma.WorkflowTypeScalarFieldEnum[];
};
export type WorkflowTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    where?: Prisma.WorkflowTypeWhereInput;
    orderBy?: Prisma.WorkflowTypeOrderByWithRelationInput | Prisma.WorkflowTypeOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkflowTypeScalarFieldEnum | Prisma.WorkflowTypeScalarFieldEnum[];
};
export type WorkflowTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    where?: Prisma.WorkflowTypeWhereInput;
    orderBy?: Prisma.WorkflowTypeOrderByWithRelationInput | Prisma.WorkflowTypeOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkflowTypeScalarFieldEnum | Prisma.WorkflowTypeScalarFieldEnum[];
};
export type WorkflowTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowTypeCreateInput, Prisma.WorkflowTypeUncheckedCreateInput>;
};
export type WorkflowTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WorkflowTypeCreateManyInput | Prisma.WorkflowTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkflowTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    data: Prisma.WorkflowTypeCreateManyInput | Prisma.WorkflowTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkflowTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowTypeUpdateInput, Prisma.WorkflowTypeUncheckedUpdateInput>;
    where: Prisma.WorkflowTypeWhereUniqueInput;
};
export type WorkflowTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WorkflowTypeUpdateManyMutationInput, Prisma.WorkflowTypeUncheckedUpdateManyInput>;
    where?: Prisma.WorkflowTypeWhereInput;
    limit?: number;
};
export type WorkflowTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowTypeUpdateManyMutationInput, Prisma.WorkflowTypeUncheckedUpdateManyInput>;
    where?: Prisma.WorkflowTypeWhereInput;
    limit?: number;
};
export type WorkflowTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    where: Prisma.WorkflowTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowTypeCreateInput, Prisma.WorkflowTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WorkflowTypeUpdateInput, Prisma.WorkflowTypeUncheckedUpdateInput>;
};
export type WorkflowTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
    where: Prisma.WorkflowTypeWhereUniqueInput;
};
export type WorkflowTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowTypeWhereInput;
    limit?: number;
};
export type WorkflowType$approvalRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRuleWhereInput;
    orderBy?: Prisma.ApprovalRuleOrderByWithRelationInput | Prisma.ApprovalRuleOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRuleScalarFieldEnum | Prisma.ApprovalRuleScalarFieldEnum[];
};
export type WorkflowType$approvalChainVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where?: Prisma.ApprovalChainVersionWhereInput;
    orderBy?: Prisma.ApprovalChainVersionOrderByWithRelationInput | Prisma.ApprovalChainVersionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalChainVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalChainVersionScalarFieldEnum | Prisma.ApprovalChainVersionScalarFieldEnum[];
};
export type WorkflowType$instancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
    orderBy?: Prisma.WorkflowInstanceOrderByWithRelationInput | Prisma.WorkflowInstanceOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowInstanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkflowInstanceScalarFieldEnum | Prisma.WorkflowInstanceScalarFieldEnum[];
};
export type WorkflowTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowTypeSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowTypeOmit<ExtArgs> | null;
    include?: Prisma.WorkflowTypeInclude<ExtArgs> | null;
};
