import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StressTestRunModel = runtime.Types.Result.DefaultSelection<Prisma.$StressTestRunPayload>;
export type AggregateStressTestRun = {
    _count: StressTestRunCountAggregateOutputType | null;
    _min: StressTestRunMinAggregateOutputType | null;
    _max: StressTestRunMaxAggregateOutputType | null;
};
export type StressTestRunMinAggregateOutputType = {
    id: string | null;
    modelType: $Enums.StressModelType | null;
    runMode: $Enums.StressRunMode | null;
    ledgerEntityCode: string | null;
    scenarioConfigId: string | null;
    ranByUserId: string | null;
    ranAt: Date | null;
    isApprovedBaseline: boolean | null;
    approvalWorkflowInstanceId: string | null;
};
export type StressTestRunMaxAggregateOutputType = {
    id: string | null;
    modelType: $Enums.StressModelType | null;
    runMode: $Enums.StressRunMode | null;
    ledgerEntityCode: string | null;
    scenarioConfigId: string | null;
    ranByUserId: string | null;
    ranAt: Date | null;
    isApprovedBaseline: boolean | null;
    approvalWorkflowInstanceId: string | null;
};
export type StressTestRunCountAggregateOutputType = {
    id: number;
    modelType: number;
    runMode: number;
    ledgerEntityCode: number;
    scenarioConfigId: number;
    inputs: number;
    outputs: number;
    ranByUserId: number;
    ranAt: number;
    isApprovedBaseline: number;
    approvalWorkflowInstanceId: number;
    _all: number;
};
export type StressTestRunMinAggregateInputType = {
    id?: true;
    modelType?: true;
    runMode?: true;
    ledgerEntityCode?: true;
    scenarioConfigId?: true;
    ranByUserId?: true;
    ranAt?: true;
    isApprovedBaseline?: true;
    approvalWorkflowInstanceId?: true;
};
export type StressTestRunMaxAggregateInputType = {
    id?: true;
    modelType?: true;
    runMode?: true;
    ledgerEntityCode?: true;
    scenarioConfigId?: true;
    ranByUserId?: true;
    ranAt?: true;
    isApprovedBaseline?: true;
    approvalWorkflowInstanceId?: true;
};
export type StressTestRunCountAggregateInputType = {
    id?: true;
    modelType?: true;
    runMode?: true;
    ledgerEntityCode?: true;
    scenarioConfigId?: true;
    inputs?: true;
    outputs?: true;
    ranByUserId?: true;
    ranAt?: true;
    isApprovedBaseline?: true;
    approvalWorkflowInstanceId?: true;
    _all?: true;
};
export type StressTestRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StressTestRunWhereInput;
    orderBy?: Prisma.StressTestRunOrderByWithRelationInput | Prisma.StressTestRunOrderByWithRelationInput[];
    cursor?: Prisma.StressTestRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StressTestRunCountAggregateInputType;
    _min?: StressTestRunMinAggregateInputType;
    _max?: StressTestRunMaxAggregateInputType;
};
export type GetStressTestRunAggregateType<T extends StressTestRunAggregateArgs> = {
    [P in keyof T & keyof AggregateStressTestRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStressTestRun[P]> : Prisma.GetScalarType<T[P], AggregateStressTestRun[P]>;
};
export type StressTestRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StressTestRunWhereInput;
    orderBy?: Prisma.StressTestRunOrderByWithAggregationInput | Prisma.StressTestRunOrderByWithAggregationInput[];
    by: Prisma.StressTestRunScalarFieldEnum[] | Prisma.StressTestRunScalarFieldEnum;
    having?: Prisma.StressTestRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StressTestRunCountAggregateInputType | true;
    _min?: StressTestRunMinAggregateInputType;
    _max?: StressTestRunMaxAggregateInputType;
};
export type StressTestRunGroupByOutputType = {
    id: string;
    modelType: $Enums.StressModelType;
    runMode: $Enums.StressRunMode;
    ledgerEntityCode: string;
    scenarioConfigId: string | null;
    inputs: runtime.JsonValue;
    outputs: runtime.JsonValue;
    ranByUserId: string;
    ranAt: Date;
    isApprovedBaseline: boolean;
    approvalWorkflowInstanceId: string | null;
    _count: StressTestRunCountAggregateOutputType | null;
    _min: StressTestRunMinAggregateOutputType | null;
    _max: StressTestRunMaxAggregateOutputType | null;
};
export type GetStressTestRunGroupByPayload<T extends StressTestRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StressTestRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StressTestRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StressTestRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StressTestRunGroupByOutputType[P]>;
}>>;
export type StressTestRunWhereInput = {
    AND?: Prisma.StressTestRunWhereInput | Prisma.StressTestRunWhereInput[];
    OR?: Prisma.StressTestRunWhereInput[];
    NOT?: Prisma.StressTestRunWhereInput | Prisma.StressTestRunWhereInput[];
    id?: Prisma.UuidFilter<"StressTestRun"> | string;
    modelType?: Prisma.EnumStressModelTypeFilter<"StressTestRun"> | $Enums.StressModelType;
    runMode?: Prisma.EnumStressRunModeFilter<"StressTestRun"> | $Enums.StressRunMode;
    ledgerEntityCode?: Prisma.StringFilter<"StressTestRun"> | string;
    scenarioConfigId?: Prisma.UuidNullableFilter<"StressTestRun"> | string | null;
    inputs?: Prisma.JsonFilter<"StressTestRun">;
    outputs?: Prisma.JsonFilter<"StressTestRun">;
    ranByUserId?: Prisma.UuidFilter<"StressTestRun"> | string;
    ranAt?: Prisma.DateTimeFilter<"StressTestRun"> | Date | string;
    isApprovedBaseline?: Prisma.BoolFilter<"StressTestRun"> | boolean;
    approvalWorkflowInstanceId?: Prisma.UuidNullableFilter<"StressTestRun"> | string | null;
};
export type StressTestRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    runMode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrderInput | Prisma.SortOrder;
    inputs?: Prisma.SortOrder;
    outputs?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    ranAt?: Prisma.SortOrder;
    isApprovedBaseline?: Prisma.SortOrder;
    approvalWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type StressTestRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    approvalWorkflowInstanceId?: string;
    AND?: Prisma.StressTestRunWhereInput | Prisma.StressTestRunWhereInput[];
    OR?: Prisma.StressTestRunWhereInput[];
    NOT?: Prisma.StressTestRunWhereInput | Prisma.StressTestRunWhereInput[];
    modelType?: Prisma.EnumStressModelTypeFilter<"StressTestRun"> | $Enums.StressModelType;
    runMode?: Prisma.EnumStressRunModeFilter<"StressTestRun"> | $Enums.StressRunMode;
    ledgerEntityCode?: Prisma.StringFilter<"StressTestRun"> | string;
    scenarioConfigId?: Prisma.UuidNullableFilter<"StressTestRun"> | string | null;
    inputs?: Prisma.JsonFilter<"StressTestRun">;
    outputs?: Prisma.JsonFilter<"StressTestRun">;
    ranByUserId?: Prisma.UuidFilter<"StressTestRun"> | string;
    ranAt?: Prisma.DateTimeFilter<"StressTestRun"> | Date | string;
    isApprovedBaseline?: Prisma.BoolFilter<"StressTestRun"> | boolean;
}, "id" | "approvalWorkflowInstanceId">;
export type StressTestRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    runMode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrderInput | Prisma.SortOrder;
    inputs?: Prisma.SortOrder;
    outputs?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    ranAt?: Prisma.SortOrder;
    isApprovedBaseline?: Prisma.SortOrder;
    approvalWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StressTestRunCountOrderByAggregateInput;
    _max?: Prisma.StressTestRunMaxOrderByAggregateInput;
    _min?: Prisma.StressTestRunMinOrderByAggregateInput;
};
export type StressTestRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.StressTestRunScalarWhereWithAggregatesInput | Prisma.StressTestRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.StressTestRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StressTestRunScalarWhereWithAggregatesInput | Prisma.StressTestRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StressTestRun"> | string;
    modelType?: Prisma.EnumStressModelTypeWithAggregatesFilter<"StressTestRun"> | $Enums.StressModelType;
    runMode?: Prisma.EnumStressRunModeWithAggregatesFilter<"StressTestRun"> | $Enums.StressRunMode;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"StressTestRun"> | string;
    scenarioConfigId?: Prisma.UuidNullableWithAggregatesFilter<"StressTestRun"> | string | null;
    inputs?: Prisma.JsonWithAggregatesFilter<"StressTestRun">;
    outputs?: Prisma.JsonWithAggregatesFilter<"StressTestRun">;
    ranByUserId?: Prisma.UuidWithAggregatesFilter<"StressTestRun"> | string;
    ranAt?: Prisma.DateTimeWithAggregatesFilter<"StressTestRun"> | Date | string;
    isApprovedBaseline?: Prisma.BoolWithAggregatesFilter<"StressTestRun"> | boolean;
    approvalWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"StressTestRun"> | string | null;
};
export type StressTestRunCreateInput = {
    id?: string;
    modelType: $Enums.StressModelType;
    runMode: $Enums.StressRunMode;
    ledgerEntityCode: string;
    scenarioConfigId?: string | null;
    inputs: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outputs: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    ranByUserId: string;
    ranAt?: Date | string;
    isApprovedBaseline?: boolean;
    approvalWorkflowInstanceId?: string | null;
};
export type StressTestRunUncheckedCreateInput = {
    id?: string;
    modelType: $Enums.StressModelType;
    runMode: $Enums.StressRunMode;
    ledgerEntityCode: string;
    scenarioConfigId?: string | null;
    inputs: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outputs: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    ranByUserId: string;
    ranAt?: Date | string;
    isApprovedBaseline?: boolean;
    approvalWorkflowInstanceId?: string | null;
};
export type StressTestRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    runMode?: Prisma.EnumStressRunModeFieldUpdateOperationsInput | $Enums.StressRunMode;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    ranAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isApprovedBaseline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StressTestRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    runMode?: Prisma.EnumStressRunModeFieldUpdateOperationsInput | $Enums.StressRunMode;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    ranAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isApprovedBaseline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StressTestRunCreateManyInput = {
    id?: string;
    modelType: $Enums.StressModelType;
    runMode: $Enums.StressRunMode;
    ledgerEntityCode: string;
    scenarioConfigId?: string | null;
    inputs: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outputs: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    ranByUserId: string;
    ranAt?: Date | string;
    isApprovedBaseline?: boolean;
    approvalWorkflowInstanceId?: string | null;
};
export type StressTestRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    runMode?: Prisma.EnumStressRunModeFieldUpdateOperationsInput | $Enums.StressRunMode;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    ranAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isApprovedBaseline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StressTestRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    runMode?: Prisma.EnumStressRunModeFieldUpdateOperationsInput | $Enums.StressRunMode;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outputs?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    ranAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isApprovedBaseline?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    approvalWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StressTestRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    runMode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    inputs?: Prisma.SortOrder;
    outputs?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    ranAt?: Prisma.SortOrder;
    isApprovedBaseline?: Prisma.SortOrder;
    approvalWorkflowInstanceId?: Prisma.SortOrder;
};
export type StressTestRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    runMode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    ranAt?: Prisma.SortOrder;
    isApprovedBaseline?: Prisma.SortOrder;
    approvalWorkflowInstanceId?: Prisma.SortOrder;
};
export type StressTestRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    runMode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    ranAt?: Prisma.SortOrder;
    isApprovedBaseline?: Prisma.SortOrder;
    approvalWorkflowInstanceId?: Prisma.SortOrder;
};
export type EnumStressRunModeFieldUpdateOperationsInput = {
    set?: $Enums.StressRunMode;
};
export type StressTestRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelType?: boolean;
    runMode?: boolean;
    ledgerEntityCode?: boolean;
    scenarioConfigId?: boolean;
    inputs?: boolean;
    outputs?: boolean;
    ranByUserId?: boolean;
    ranAt?: boolean;
    isApprovedBaseline?: boolean;
    approvalWorkflowInstanceId?: boolean;
}, ExtArgs["result"]["stressTestRun"]>;
export type StressTestRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelType?: boolean;
    runMode?: boolean;
    ledgerEntityCode?: boolean;
    scenarioConfigId?: boolean;
    inputs?: boolean;
    outputs?: boolean;
    ranByUserId?: boolean;
    ranAt?: boolean;
    isApprovedBaseline?: boolean;
    approvalWorkflowInstanceId?: boolean;
}, ExtArgs["result"]["stressTestRun"]>;
export type StressTestRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelType?: boolean;
    runMode?: boolean;
    ledgerEntityCode?: boolean;
    scenarioConfigId?: boolean;
    inputs?: boolean;
    outputs?: boolean;
    ranByUserId?: boolean;
    ranAt?: boolean;
    isApprovedBaseline?: boolean;
    approvalWorkflowInstanceId?: boolean;
}, ExtArgs["result"]["stressTestRun"]>;
export type StressTestRunSelectScalar = {
    id?: boolean;
    modelType?: boolean;
    runMode?: boolean;
    ledgerEntityCode?: boolean;
    scenarioConfigId?: boolean;
    inputs?: boolean;
    outputs?: boolean;
    ranByUserId?: boolean;
    ranAt?: boolean;
    isApprovedBaseline?: boolean;
    approvalWorkflowInstanceId?: boolean;
};
export type StressTestRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modelType" | "runMode" | "ledgerEntityCode" | "scenarioConfigId" | "inputs" | "outputs" | "ranByUserId" | "ranAt" | "isApprovedBaseline" | "approvalWorkflowInstanceId", ExtArgs["result"]["stressTestRun"]>;
export type $StressTestRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StressTestRun";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        modelType: $Enums.StressModelType;
        runMode: $Enums.StressRunMode;
        ledgerEntityCode: string;
        scenarioConfigId: string | null;
        inputs: runtime.JsonValue;
        outputs: runtime.JsonValue;
        ranByUserId: string;
        ranAt: Date;
        isApprovedBaseline: boolean;
        approvalWorkflowInstanceId: string | null;
    }, ExtArgs["result"]["stressTestRun"]>;
    composites: {};
};
export type StressTestRunGetPayload<S extends boolean | null | undefined | StressTestRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload, S>;
export type StressTestRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StressTestRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StressTestRunCountAggregateInputType | true;
};
export interface StressTestRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StressTestRun'];
        meta: {
            name: 'StressTestRun';
        };
    };
    findUnique<T extends StressTestRunFindUniqueArgs>(args: Prisma.SelectSubset<T, StressTestRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StressTestRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StressTestRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StressTestRunFindFirstArgs>(args?: Prisma.SelectSubset<T, StressTestRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StressTestRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StressTestRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StressTestRunFindManyArgs>(args?: Prisma.SelectSubset<T, StressTestRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StressTestRunCreateArgs>(args: Prisma.SelectSubset<T, StressTestRunCreateArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StressTestRunCreateManyArgs>(args?: Prisma.SelectSubset<T, StressTestRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StressTestRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StressTestRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StressTestRunDeleteArgs>(args: Prisma.SelectSubset<T, StressTestRunDeleteArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StressTestRunUpdateArgs>(args: Prisma.SelectSubset<T, StressTestRunUpdateArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StressTestRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, StressTestRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StressTestRunUpdateManyArgs>(args: Prisma.SelectSubset<T, StressTestRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StressTestRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StressTestRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StressTestRunUpsertArgs>(args: Prisma.SelectSubset<T, StressTestRunUpsertArgs<ExtArgs>>): Prisma.Prisma__StressTestRunClient<runtime.Types.Result.GetResult<Prisma.$StressTestRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StressTestRunCountArgs>(args?: Prisma.Subset<T, StressTestRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StressTestRunCountAggregateOutputType> : number>;
    aggregate<T extends StressTestRunAggregateArgs>(args: Prisma.Subset<T, StressTestRunAggregateArgs>): Prisma.PrismaPromise<GetStressTestRunAggregateType<T>>;
    groupBy<T extends StressTestRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StressTestRunGroupByArgs['orderBy'];
    } : {
        orderBy?: StressTestRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StressTestRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStressTestRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StressTestRunFieldRefs;
}
export interface Prisma__StressTestRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StressTestRunFieldRefs {
    readonly id: Prisma.FieldRef<"StressTestRun", 'String'>;
    readonly modelType: Prisma.FieldRef<"StressTestRun", 'StressModelType'>;
    readonly runMode: Prisma.FieldRef<"StressTestRun", 'StressRunMode'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"StressTestRun", 'String'>;
    readonly scenarioConfigId: Prisma.FieldRef<"StressTestRun", 'String'>;
    readonly inputs: Prisma.FieldRef<"StressTestRun", 'Json'>;
    readonly outputs: Prisma.FieldRef<"StressTestRun", 'Json'>;
    readonly ranByUserId: Prisma.FieldRef<"StressTestRun", 'String'>;
    readonly ranAt: Prisma.FieldRef<"StressTestRun", 'DateTime'>;
    readonly isApprovedBaseline: Prisma.FieldRef<"StressTestRun", 'Boolean'>;
    readonly approvalWorkflowInstanceId: Prisma.FieldRef<"StressTestRun", 'String'>;
}
export type StressTestRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    where: Prisma.StressTestRunWhereUniqueInput;
};
export type StressTestRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    where: Prisma.StressTestRunWhereUniqueInput;
};
export type StressTestRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    where?: Prisma.StressTestRunWhereInput;
    orderBy?: Prisma.StressTestRunOrderByWithRelationInput | Prisma.StressTestRunOrderByWithRelationInput[];
    cursor?: Prisma.StressTestRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StressTestRunScalarFieldEnum | Prisma.StressTestRunScalarFieldEnum[];
};
export type StressTestRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    where?: Prisma.StressTestRunWhereInput;
    orderBy?: Prisma.StressTestRunOrderByWithRelationInput | Prisma.StressTestRunOrderByWithRelationInput[];
    cursor?: Prisma.StressTestRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StressTestRunScalarFieldEnum | Prisma.StressTestRunScalarFieldEnum[];
};
export type StressTestRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    where?: Prisma.StressTestRunWhereInput;
    orderBy?: Prisma.StressTestRunOrderByWithRelationInput | Prisma.StressTestRunOrderByWithRelationInput[];
    cursor?: Prisma.StressTestRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StressTestRunScalarFieldEnum | Prisma.StressTestRunScalarFieldEnum[];
};
export type StressTestRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StressTestRunCreateInput, Prisma.StressTestRunUncheckedCreateInput>;
};
export type StressTestRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StressTestRunCreateManyInput | Prisma.StressTestRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StressTestRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    data: Prisma.StressTestRunCreateManyInput | Prisma.StressTestRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StressTestRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StressTestRunUpdateInput, Prisma.StressTestRunUncheckedUpdateInput>;
    where: Prisma.StressTestRunWhereUniqueInput;
};
export type StressTestRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StressTestRunUpdateManyMutationInput, Prisma.StressTestRunUncheckedUpdateManyInput>;
    where?: Prisma.StressTestRunWhereInput;
    limit?: number;
};
export type StressTestRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StressTestRunUpdateManyMutationInput, Prisma.StressTestRunUncheckedUpdateManyInput>;
    where?: Prisma.StressTestRunWhereInput;
    limit?: number;
};
export type StressTestRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    where: Prisma.StressTestRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.StressTestRunCreateInput, Prisma.StressTestRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StressTestRunUpdateInput, Prisma.StressTestRunUncheckedUpdateInput>;
};
export type StressTestRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
    where: Prisma.StressTestRunWhereUniqueInput;
};
export type StressTestRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StressTestRunWhereInput;
    limit?: number;
};
export type StressTestRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressTestRunSelect<ExtArgs> | null;
    omit?: Prisma.StressTestRunOmit<ExtArgs> | null;
};
