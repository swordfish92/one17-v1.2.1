import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskDefaultGatePolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskDefaultGatePolicyPayload>;
export type AggregateTaskDefaultGatePolicy = {
    _count: TaskDefaultGatePolicyCountAggregateOutputType | null;
    _avg: TaskDefaultGatePolicyAvgAggregateOutputType | null;
    _sum: TaskDefaultGatePolicySumAggregateOutputType | null;
    _min: TaskDefaultGatePolicyMinAggregateOutputType | null;
    _max: TaskDefaultGatePolicyMaxAggregateOutputType | null;
};
export type TaskDefaultGatePolicyAvgAggregateOutputType = {
    minDefaultCount: number | null;
};
export type TaskDefaultGatePolicySumAggregateOutputType = {
    minDefaultCount: number | null;
};
export type TaskDefaultGatePolicyMinAggregateOutputType = {
    id: string | null;
    minDefaultCount: number | null;
    severityCode: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type TaskDefaultGatePolicyMaxAggregateOutputType = {
    id: string | null;
    minDefaultCount: number | null;
    severityCode: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type TaskDefaultGatePolicyCountAggregateOutputType = {
    id: number;
    minDefaultCount: number;
    severityCode: number;
    isActive: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type TaskDefaultGatePolicyAvgAggregateInputType = {
    minDefaultCount?: true;
};
export type TaskDefaultGatePolicySumAggregateInputType = {
    minDefaultCount?: true;
};
export type TaskDefaultGatePolicyMinAggregateInputType = {
    id?: true;
    minDefaultCount?: true;
    severityCode?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type TaskDefaultGatePolicyMaxAggregateInputType = {
    id?: true;
    minDefaultCount?: true;
    severityCode?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type TaskDefaultGatePolicyCountAggregateInputType = {
    id?: true;
    minDefaultCount?: true;
    severityCode?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type TaskDefaultGatePolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    orderBy?: Prisma.TaskDefaultGatePolicyOrderByWithRelationInput | Prisma.TaskDefaultGatePolicyOrderByWithRelationInput[];
    cursor?: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskDefaultGatePolicyCountAggregateInputType;
    _avg?: TaskDefaultGatePolicyAvgAggregateInputType;
    _sum?: TaskDefaultGatePolicySumAggregateInputType;
    _min?: TaskDefaultGatePolicyMinAggregateInputType;
    _max?: TaskDefaultGatePolicyMaxAggregateInputType;
};
export type GetTaskDefaultGatePolicyAggregateType<T extends TaskDefaultGatePolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskDefaultGatePolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskDefaultGatePolicy[P]> : Prisma.GetScalarType<T[P], AggregateTaskDefaultGatePolicy[P]>;
};
export type TaskDefaultGatePolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    orderBy?: Prisma.TaskDefaultGatePolicyOrderByWithAggregationInput | Prisma.TaskDefaultGatePolicyOrderByWithAggregationInput[];
    by: Prisma.TaskDefaultGatePolicyScalarFieldEnum[] | Prisma.TaskDefaultGatePolicyScalarFieldEnum;
    having?: Prisma.TaskDefaultGatePolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskDefaultGatePolicyCountAggregateInputType | true;
    _avg?: TaskDefaultGatePolicyAvgAggregateInputType;
    _sum?: TaskDefaultGatePolicySumAggregateInputType;
    _min?: TaskDefaultGatePolicyMinAggregateInputType;
    _max?: TaskDefaultGatePolicyMaxAggregateInputType;
};
export type TaskDefaultGatePolicyGroupByOutputType = {
    id: string;
    minDefaultCount: number;
    severityCode: string;
    isActive: boolean;
    createdByUserId: string;
    createdAt: Date;
    _count: TaskDefaultGatePolicyCountAggregateOutputType | null;
    _avg: TaskDefaultGatePolicyAvgAggregateOutputType | null;
    _sum: TaskDefaultGatePolicySumAggregateOutputType | null;
    _min: TaskDefaultGatePolicyMinAggregateOutputType | null;
    _max: TaskDefaultGatePolicyMaxAggregateOutputType | null;
};
export type GetTaskDefaultGatePolicyGroupByPayload<T extends TaskDefaultGatePolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskDefaultGatePolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskDefaultGatePolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskDefaultGatePolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskDefaultGatePolicyGroupByOutputType[P]>;
}>>;
export type TaskDefaultGatePolicyWhereInput = {
    AND?: Prisma.TaskDefaultGatePolicyWhereInput | Prisma.TaskDefaultGatePolicyWhereInput[];
    OR?: Prisma.TaskDefaultGatePolicyWhereInput[];
    NOT?: Prisma.TaskDefaultGatePolicyWhereInput | Prisma.TaskDefaultGatePolicyWhereInput[];
    id?: Prisma.UuidFilter<"TaskDefaultGatePolicy"> | string;
    minDefaultCount?: Prisma.IntFilter<"TaskDefaultGatePolicy"> | number;
    severityCode?: Prisma.StringFilter<"TaskDefaultGatePolicy"> | string;
    isActive?: Prisma.BoolFilter<"TaskDefaultGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"TaskDefaultGatePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"TaskDefaultGatePolicy"> | Date | string;
    severityConfig?: Prisma.XOR<Prisma.PmsGateSeverityConfigScalarRelationFilter, Prisma.PmsGateSeverityConfigWhereInput>;
};
export type TaskDefaultGatePolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    minDefaultCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    severityConfig?: Prisma.PmsGateSeverityConfigOrderByWithRelationInput;
};
export type TaskDefaultGatePolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    minDefaultCount?: number;
    AND?: Prisma.TaskDefaultGatePolicyWhereInput | Prisma.TaskDefaultGatePolicyWhereInput[];
    OR?: Prisma.TaskDefaultGatePolicyWhereInput[];
    NOT?: Prisma.TaskDefaultGatePolicyWhereInput | Prisma.TaskDefaultGatePolicyWhereInput[];
    severityCode?: Prisma.StringFilter<"TaskDefaultGatePolicy"> | string;
    isActive?: Prisma.BoolFilter<"TaskDefaultGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"TaskDefaultGatePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"TaskDefaultGatePolicy"> | Date | string;
    severityConfig?: Prisma.XOR<Prisma.PmsGateSeverityConfigScalarRelationFilter, Prisma.PmsGateSeverityConfigWhereInput>;
}, "id" | "minDefaultCount">;
export type TaskDefaultGatePolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    minDefaultCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TaskDefaultGatePolicyCountOrderByAggregateInput;
    _avg?: Prisma.TaskDefaultGatePolicyAvgOrderByAggregateInput;
    _max?: Prisma.TaskDefaultGatePolicyMaxOrderByAggregateInput;
    _min?: Prisma.TaskDefaultGatePolicyMinOrderByAggregateInput;
    _sum?: Prisma.TaskDefaultGatePolicySumOrderByAggregateInput;
};
export type TaskDefaultGatePolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskDefaultGatePolicyScalarWhereWithAggregatesInput | Prisma.TaskDefaultGatePolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskDefaultGatePolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskDefaultGatePolicyScalarWhereWithAggregatesInput | Prisma.TaskDefaultGatePolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaskDefaultGatePolicy"> | string;
    minDefaultCount?: Prisma.IntWithAggregatesFilter<"TaskDefaultGatePolicy"> | number;
    severityCode?: Prisma.StringWithAggregatesFilter<"TaskDefaultGatePolicy"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"TaskDefaultGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"TaskDefaultGatePolicy"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaskDefaultGatePolicy"> | Date | string;
};
export type TaskDefaultGatePolicyCreateInput = {
    id?: string;
    minDefaultCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
    severityConfig: Prisma.PmsGateSeverityConfigCreateNestedOneWithoutTaskDefaultGatePoliciesInput;
};
export type TaskDefaultGatePolicyUncheckedCreateInput = {
    id?: string;
    minDefaultCount: number;
    severityCode: string;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type TaskDefaultGatePolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minDefaultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    severityConfig?: Prisma.PmsGateSeverityConfigUpdateOneRequiredWithoutTaskDefaultGatePoliciesNestedInput;
};
export type TaskDefaultGatePolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minDefaultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    severityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskDefaultGatePolicyCreateManyInput = {
    id?: string;
    minDefaultCount: number;
    severityCode: string;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type TaskDefaultGatePolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minDefaultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskDefaultGatePolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minDefaultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    severityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskDefaultGatePolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minDefaultCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaskDefaultGatePolicyAvgOrderByAggregateInput = {
    minDefaultCount?: Prisma.SortOrder;
};
export type TaskDefaultGatePolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minDefaultCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaskDefaultGatePolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minDefaultCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaskDefaultGatePolicySumOrderByAggregateInput = {
    minDefaultCount?: Prisma.SortOrder;
};
export type TaskDefaultGatePolicyListRelationFilter = {
    every?: Prisma.TaskDefaultGatePolicyWhereInput;
    some?: Prisma.TaskDefaultGatePolicyWhereInput;
    none?: Prisma.TaskDefaultGatePolicyWhereInput;
};
export type TaskDefaultGatePolicyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskDefaultGatePolicyCreateNestedManyWithoutSeverityConfigInput = {
    create?: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    createMany?: Prisma.TaskDefaultGatePolicyCreateManySeverityConfigInputEnvelope;
    connect?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
};
export type TaskDefaultGatePolicyUncheckedCreateNestedManyWithoutSeverityConfigInput = {
    create?: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    createMany?: Prisma.TaskDefaultGatePolicyCreateManySeverityConfigInputEnvelope;
    connect?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
};
export type TaskDefaultGatePolicyUpdateManyWithoutSeverityConfigNestedInput = {
    create?: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    upsert?: Prisma.TaskDefaultGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput[];
    createMany?: Prisma.TaskDefaultGatePolicyCreateManySeverityConfigInputEnvelope;
    set?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    disconnect?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    delete?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    connect?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    update?: Prisma.TaskDefaultGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput[];
    updateMany?: Prisma.TaskDefaultGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput[];
    deleteMany?: Prisma.TaskDefaultGatePolicyScalarWhereInput | Prisma.TaskDefaultGatePolicyScalarWhereInput[];
};
export type TaskDefaultGatePolicyUncheckedUpdateManyWithoutSeverityConfigNestedInput = {
    create?: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    upsert?: Prisma.TaskDefaultGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput[];
    createMany?: Prisma.TaskDefaultGatePolicyCreateManySeverityConfigInputEnvelope;
    set?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    disconnect?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    delete?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    connect?: Prisma.TaskDefaultGatePolicyWhereUniqueInput | Prisma.TaskDefaultGatePolicyWhereUniqueInput[];
    update?: Prisma.TaskDefaultGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput[];
    updateMany?: Prisma.TaskDefaultGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput | Prisma.TaskDefaultGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput[];
    deleteMany?: Prisma.TaskDefaultGatePolicyScalarWhereInput | Prisma.TaskDefaultGatePolicyScalarWhereInput[];
};
export type TaskDefaultGatePolicyCreateWithoutSeverityConfigInput = {
    id?: string;
    minDefaultCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput = {
    id?: string;
    minDefaultCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type TaskDefaultGatePolicyCreateOrConnectWithoutSeverityConfigInput = {
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput>;
};
export type TaskDefaultGatePolicyCreateManySeverityConfigInputEnvelope = {
    data: Prisma.TaskDefaultGatePolicyCreateManySeverityConfigInput | Prisma.TaskDefaultGatePolicyCreateManySeverityConfigInput[];
    skipDuplicates?: boolean;
};
export type TaskDefaultGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput = {
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskDefaultGatePolicyUpdateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedUpdateWithoutSeverityConfigInput>;
    create: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedCreateWithoutSeverityConfigInput>;
};
export type TaskDefaultGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput = {
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskDefaultGatePolicyUpdateWithoutSeverityConfigInput, Prisma.TaskDefaultGatePolicyUncheckedUpdateWithoutSeverityConfigInput>;
};
export type TaskDefaultGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput = {
    where: Prisma.TaskDefaultGatePolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskDefaultGatePolicyUpdateManyMutationInput, Prisma.TaskDefaultGatePolicyUncheckedUpdateManyWithoutSeverityConfigInput>;
};
export type TaskDefaultGatePolicyScalarWhereInput = {
    AND?: Prisma.TaskDefaultGatePolicyScalarWhereInput | Prisma.TaskDefaultGatePolicyScalarWhereInput[];
    OR?: Prisma.TaskDefaultGatePolicyScalarWhereInput[];
    NOT?: Prisma.TaskDefaultGatePolicyScalarWhereInput | Prisma.TaskDefaultGatePolicyScalarWhereInput[];
    id?: Prisma.UuidFilter<"TaskDefaultGatePolicy"> | string;
    minDefaultCount?: Prisma.IntFilter<"TaskDefaultGatePolicy"> | number;
    severityCode?: Prisma.StringFilter<"TaskDefaultGatePolicy"> | string;
    isActive?: Prisma.BoolFilter<"TaskDefaultGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"TaskDefaultGatePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"TaskDefaultGatePolicy"> | Date | string;
};
export type TaskDefaultGatePolicyCreateManySeverityConfigInput = {
    id?: string;
    minDefaultCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type TaskDefaultGatePolicyUpdateWithoutSeverityConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minDefaultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskDefaultGatePolicyUncheckedUpdateWithoutSeverityConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minDefaultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskDefaultGatePolicyUncheckedUpdateManyWithoutSeverityConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minDefaultCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskDefaultGatePolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minDefaultCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskDefaultGatePolicy"]>;
export type TaskDefaultGatePolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minDefaultCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskDefaultGatePolicy"]>;
export type TaskDefaultGatePolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minDefaultCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskDefaultGatePolicy"]>;
export type TaskDefaultGatePolicySelectScalar = {
    id?: boolean;
    minDefaultCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type TaskDefaultGatePolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "minDefaultCount" | "severityCode" | "isActive" | "createdByUserId" | "createdAt", ExtArgs["result"]["taskDefaultGatePolicy"]>;
export type TaskDefaultGatePolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
};
export type TaskDefaultGatePolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
};
export type TaskDefaultGatePolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
};
export type $TaskDefaultGatePolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaskDefaultGatePolicy";
    objects: {
        severityConfig: Prisma.$PmsGateSeverityConfigPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        minDefaultCount: number;
        severityCode: string;
        isActive: boolean;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["taskDefaultGatePolicy"]>;
    composites: {};
};
export type TaskDefaultGatePolicyGetPayload<S extends boolean | null | undefined | TaskDefaultGatePolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload, S>;
export type TaskDefaultGatePolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskDefaultGatePolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskDefaultGatePolicyCountAggregateInputType | true;
};
export interface TaskDefaultGatePolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaskDefaultGatePolicy'];
        meta: {
            name: 'TaskDefaultGatePolicy';
        };
    };
    findUnique<T extends TaskDefaultGatePolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskDefaultGatePolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskDefaultGatePolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskDefaultGatePolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskDefaultGatePolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskDefaultGatePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskDefaultGatePolicyFindManyArgs>(args?: Prisma.SelectSubset<T, TaskDefaultGatePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskDefaultGatePolicyCreateArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyCreateArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskDefaultGatePolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskDefaultGatePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskDefaultGatePolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskDefaultGatePolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDefaultGatePolicyDeleteArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskDefaultGatePolicyUpdateArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDefaultGatePolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDefaultGatePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskDefaultGatePolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskDefaultGatePolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskDefaultGatePolicyUpsertArgs>(args: Prisma.SelectSubset<T, TaskDefaultGatePolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskDefaultGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskDefaultGatePolicyCountArgs>(args?: Prisma.Subset<T, TaskDefaultGatePolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskDefaultGatePolicyCountAggregateOutputType> : number>;
    aggregate<T extends TaskDefaultGatePolicyAggregateArgs>(args: Prisma.Subset<T, TaskDefaultGatePolicyAggregateArgs>): Prisma.PrismaPromise<GetTaskDefaultGatePolicyAggregateType<T>>;
    groupBy<T extends TaskDefaultGatePolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskDefaultGatePolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskDefaultGatePolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskDefaultGatePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskDefaultGatePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskDefaultGatePolicyFieldRefs;
}
export interface Prisma__TaskDefaultGatePolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    severityConfig<T extends Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskDefaultGatePolicyFieldRefs {
    readonly id: Prisma.FieldRef<"TaskDefaultGatePolicy", 'String'>;
    readonly minDefaultCount: Prisma.FieldRef<"TaskDefaultGatePolicy", 'Int'>;
    readonly severityCode: Prisma.FieldRef<"TaskDefaultGatePolicy", 'String'>;
    readonly isActive: Prisma.FieldRef<"TaskDefaultGatePolicy", 'Boolean'>;
    readonly createdByUserId: Prisma.FieldRef<"TaskDefaultGatePolicy", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TaskDefaultGatePolicy", 'DateTime'>;
}
export type TaskDefaultGatePolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
};
export type TaskDefaultGatePolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
};
export type TaskDefaultGatePolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    orderBy?: Prisma.TaskDefaultGatePolicyOrderByWithRelationInput | Prisma.TaskDefaultGatePolicyOrderByWithRelationInput[];
    cursor?: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskDefaultGatePolicyScalarFieldEnum | Prisma.TaskDefaultGatePolicyScalarFieldEnum[];
};
export type TaskDefaultGatePolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    orderBy?: Prisma.TaskDefaultGatePolicyOrderByWithRelationInput | Prisma.TaskDefaultGatePolicyOrderByWithRelationInput[];
    cursor?: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskDefaultGatePolicyScalarFieldEnum | Prisma.TaskDefaultGatePolicyScalarFieldEnum[];
};
export type TaskDefaultGatePolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    orderBy?: Prisma.TaskDefaultGatePolicyOrderByWithRelationInput | Prisma.TaskDefaultGatePolicyOrderByWithRelationInput[];
    cursor?: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskDefaultGatePolicyScalarFieldEnum | Prisma.TaskDefaultGatePolicyScalarFieldEnum[];
};
export type TaskDefaultGatePolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateInput, Prisma.TaskDefaultGatePolicyUncheckedCreateInput>;
};
export type TaskDefaultGatePolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskDefaultGatePolicyCreateManyInput | Prisma.TaskDefaultGatePolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskDefaultGatePolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    data: Prisma.TaskDefaultGatePolicyCreateManyInput | Prisma.TaskDefaultGatePolicyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskDefaultGatePolicyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskDefaultGatePolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskDefaultGatePolicyUpdateInput, Prisma.TaskDefaultGatePolicyUncheckedUpdateInput>;
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
};
export type TaskDefaultGatePolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskDefaultGatePolicyUpdateManyMutationInput, Prisma.TaskDefaultGatePolicyUncheckedUpdateManyInput>;
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    limit?: number;
};
export type TaskDefaultGatePolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskDefaultGatePolicyUpdateManyMutationInput, Prisma.TaskDefaultGatePolicyUncheckedUpdateManyInput>;
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    limit?: number;
    include?: Prisma.TaskDefaultGatePolicyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskDefaultGatePolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskDefaultGatePolicyCreateInput, Prisma.TaskDefaultGatePolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskDefaultGatePolicyUpdateInput, Prisma.TaskDefaultGatePolicyUncheckedUpdateInput>;
};
export type TaskDefaultGatePolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
};
export type TaskDefaultGatePolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    limit?: number;
};
export type TaskDefaultGatePolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
};
