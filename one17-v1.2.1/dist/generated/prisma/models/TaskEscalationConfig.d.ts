import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskEscalationConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskEscalationConfigPayload>;
export type AggregateTaskEscalationConfig = {
    _count: TaskEscalationConfigCountAggregateOutputType | null;
    _avg: TaskEscalationConfigAvgAggregateOutputType | null;
    _sum: TaskEscalationConfigSumAggregateOutputType | null;
    _min: TaskEscalationConfigMinAggregateOutputType | null;
    _max: TaskEscalationConfigMaxAggregateOutputType | null;
};
export type TaskEscalationConfigAvgAggregateOutputType = {
    id: number | null;
    amberThresholdPct: number | null;
};
export type TaskEscalationConfigSumAggregateOutputType = {
    id: number | null;
    amberThresholdPct: number | null;
};
export type TaskEscalationConfigMinAggregateOutputType = {
    id: number | null;
    amberThresholdPct: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type TaskEscalationConfigMaxAggregateOutputType = {
    id: number | null;
    amberThresholdPct: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type TaskEscalationConfigCountAggregateOutputType = {
    id: number;
    amberThresholdPct: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type TaskEscalationConfigAvgAggregateInputType = {
    id?: true;
    amberThresholdPct?: true;
};
export type TaskEscalationConfigSumAggregateInputType = {
    id?: true;
    amberThresholdPct?: true;
};
export type TaskEscalationConfigMinAggregateInputType = {
    id?: true;
    amberThresholdPct?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type TaskEscalationConfigMaxAggregateInputType = {
    id?: true;
    amberThresholdPct?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type TaskEscalationConfigCountAggregateInputType = {
    id?: true;
    amberThresholdPct?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskEscalationConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskEscalationConfigWhereInput;
    orderBy?: Prisma.TaskEscalationConfigOrderByWithRelationInput | Prisma.TaskEscalationConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaskEscalationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskEscalationConfigCountAggregateInputType;
    _avg?: TaskEscalationConfigAvgAggregateInputType;
    _sum?: TaskEscalationConfigSumAggregateInputType;
    _min?: TaskEscalationConfigMinAggregateInputType;
    _max?: TaskEscalationConfigMaxAggregateInputType;
};
export type GetTaskEscalationConfigAggregateType<T extends TaskEscalationConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskEscalationConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskEscalationConfig[P]> : Prisma.GetScalarType<T[P], AggregateTaskEscalationConfig[P]>;
};
export type TaskEscalationConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskEscalationConfigWhereInput;
    orderBy?: Prisma.TaskEscalationConfigOrderByWithAggregationInput | Prisma.TaskEscalationConfigOrderByWithAggregationInput[];
    by: Prisma.TaskEscalationConfigScalarFieldEnum[] | Prisma.TaskEscalationConfigScalarFieldEnum;
    having?: Prisma.TaskEscalationConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskEscalationConfigCountAggregateInputType | true;
    _avg?: TaskEscalationConfigAvgAggregateInputType;
    _sum?: TaskEscalationConfigSumAggregateInputType;
    _min?: TaskEscalationConfigMinAggregateInputType;
    _max?: TaskEscalationConfigMaxAggregateInputType;
};
export type TaskEscalationConfigGroupByOutputType = {
    id: number;
    amberThresholdPct: number;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: TaskEscalationConfigCountAggregateOutputType | null;
    _avg: TaskEscalationConfigAvgAggregateOutputType | null;
    _sum: TaskEscalationConfigSumAggregateOutputType | null;
    _min: TaskEscalationConfigMinAggregateOutputType | null;
    _max: TaskEscalationConfigMaxAggregateOutputType | null;
};
export type GetTaskEscalationConfigGroupByPayload<T extends TaskEscalationConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskEscalationConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskEscalationConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskEscalationConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskEscalationConfigGroupByOutputType[P]>;
}>>;
export type TaskEscalationConfigWhereInput = {
    AND?: Prisma.TaskEscalationConfigWhereInput | Prisma.TaskEscalationConfigWhereInput[];
    OR?: Prisma.TaskEscalationConfigWhereInput[];
    NOT?: Prisma.TaskEscalationConfigWhereInput | Prisma.TaskEscalationConfigWhereInput[];
    id?: Prisma.IntFilter<"TaskEscalationConfig"> | number;
    amberThresholdPct?: Prisma.IntFilter<"TaskEscalationConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"TaskEscalationConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"TaskEscalationConfig"> | Date | string;
};
export type TaskEscalationConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskEscalationConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TaskEscalationConfigWhereInput | Prisma.TaskEscalationConfigWhereInput[];
    OR?: Prisma.TaskEscalationConfigWhereInput[];
    NOT?: Prisma.TaskEscalationConfigWhereInput | Prisma.TaskEscalationConfigWhereInput[];
    amberThresholdPct?: Prisma.IntFilter<"TaskEscalationConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"TaskEscalationConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"TaskEscalationConfig"> | Date | string;
}, "id">;
export type TaskEscalationConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskEscalationConfigCountOrderByAggregateInput;
    _avg?: Prisma.TaskEscalationConfigAvgOrderByAggregateInput;
    _max?: Prisma.TaskEscalationConfigMaxOrderByAggregateInput;
    _min?: Prisma.TaskEscalationConfigMinOrderByAggregateInput;
    _sum?: Prisma.TaskEscalationConfigSumOrderByAggregateInput;
};
export type TaskEscalationConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskEscalationConfigScalarWhereWithAggregatesInput | Prisma.TaskEscalationConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskEscalationConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskEscalationConfigScalarWhereWithAggregatesInput | Prisma.TaskEscalationConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TaskEscalationConfig"> | number;
    amberThresholdPct?: Prisma.IntWithAggregatesFilter<"TaskEscalationConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"TaskEscalationConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TaskEscalationConfig"> | Date | string;
};
export type TaskEscalationConfigCreateInput = {
    id?: number;
    amberThresholdPct?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type TaskEscalationConfigUncheckedCreateInput = {
    id?: number;
    amberThresholdPct?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type TaskEscalationConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskEscalationConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskEscalationConfigCreateManyInput = {
    id?: number;
    amberThresholdPct?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type TaskEscalationConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskEscalationConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskEscalationConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskEscalationConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
};
export type TaskEscalationConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskEscalationConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskEscalationConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
};
export type TaskEscalationConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amberThresholdPct?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["taskEscalationConfig"]>;
export type TaskEscalationConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amberThresholdPct?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["taskEscalationConfig"]>;
export type TaskEscalationConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amberThresholdPct?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["taskEscalationConfig"]>;
export type TaskEscalationConfigSelectScalar = {
    id?: boolean;
    amberThresholdPct?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type TaskEscalationConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amberThresholdPct" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["taskEscalationConfig"]>;
export type $TaskEscalationConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaskEscalationConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        amberThresholdPct: number;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["taskEscalationConfig"]>;
    composites: {};
};
export type TaskEscalationConfigGetPayload<S extends boolean | null | undefined | TaskEscalationConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload, S>;
export type TaskEscalationConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskEscalationConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskEscalationConfigCountAggregateInputType | true;
};
export interface TaskEscalationConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaskEscalationConfig'];
        meta: {
            name: 'TaskEscalationConfig';
        };
    };
    findUnique<T extends TaskEscalationConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskEscalationConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskEscalationConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskEscalationConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskEscalationConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskEscalationConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskEscalationConfigFindManyArgs>(args?: Prisma.SelectSubset<T, TaskEscalationConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskEscalationConfigCreateArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigCreateArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskEscalationConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskEscalationConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskEscalationConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskEscalationConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskEscalationConfigDeleteArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskEscalationConfigUpdateArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskEscalationConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskEscalationConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskEscalationConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskEscalationConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskEscalationConfigUpsertArgs>(args: Prisma.SelectSubset<T, TaskEscalationConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskEscalationConfigClient<runtime.Types.Result.GetResult<Prisma.$TaskEscalationConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskEscalationConfigCountArgs>(args?: Prisma.Subset<T, TaskEscalationConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskEscalationConfigCountAggregateOutputType> : number>;
    aggregate<T extends TaskEscalationConfigAggregateArgs>(args: Prisma.Subset<T, TaskEscalationConfigAggregateArgs>): Prisma.PrismaPromise<GetTaskEscalationConfigAggregateType<T>>;
    groupBy<T extends TaskEscalationConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskEscalationConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskEscalationConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskEscalationConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskEscalationConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskEscalationConfigFieldRefs;
}
export interface Prisma__TaskEscalationConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskEscalationConfigFieldRefs {
    readonly id: Prisma.FieldRef<"TaskEscalationConfig", 'Int'>;
    readonly amberThresholdPct: Prisma.FieldRef<"TaskEscalationConfig", 'Int'>;
    readonly updatedByUserId: Prisma.FieldRef<"TaskEscalationConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"TaskEscalationConfig", 'DateTime'>;
}
export type TaskEscalationConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    where: Prisma.TaskEscalationConfigWhereUniqueInput;
};
export type TaskEscalationConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    where: Prisma.TaskEscalationConfigWhereUniqueInput;
};
export type TaskEscalationConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    where?: Prisma.TaskEscalationConfigWhereInput;
    orderBy?: Prisma.TaskEscalationConfigOrderByWithRelationInput | Prisma.TaskEscalationConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaskEscalationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskEscalationConfigScalarFieldEnum | Prisma.TaskEscalationConfigScalarFieldEnum[];
};
export type TaskEscalationConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    where?: Prisma.TaskEscalationConfigWhereInput;
    orderBy?: Prisma.TaskEscalationConfigOrderByWithRelationInput | Prisma.TaskEscalationConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaskEscalationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskEscalationConfigScalarFieldEnum | Prisma.TaskEscalationConfigScalarFieldEnum[];
};
export type TaskEscalationConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    where?: Prisma.TaskEscalationConfigWhereInput;
    orderBy?: Prisma.TaskEscalationConfigOrderByWithRelationInput | Prisma.TaskEscalationConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaskEscalationConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskEscalationConfigScalarFieldEnum | Prisma.TaskEscalationConfigScalarFieldEnum[];
};
export type TaskEscalationConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskEscalationConfigCreateInput, Prisma.TaskEscalationConfigUncheckedCreateInput>;
};
export type TaskEscalationConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskEscalationConfigCreateManyInput | Prisma.TaskEscalationConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskEscalationConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    data: Prisma.TaskEscalationConfigCreateManyInput | Prisma.TaskEscalationConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskEscalationConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskEscalationConfigUpdateInput, Prisma.TaskEscalationConfigUncheckedUpdateInput>;
    where: Prisma.TaskEscalationConfigWhereUniqueInput;
};
export type TaskEscalationConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskEscalationConfigUpdateManyMutationInput, Prisma.TaskEscalationConfigUncheckedUpdateManyInput>;
    where?: Prisma.TaskEscalationConfigWhereInput;
    limit?: number;
};
export type TaskEscalationConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskEscalationConfigUpdateManyMutationInput, Prisma.TaskEscalationConfigUncheckedUpdateManyInput>;
    where?: Prisma.TaskEscalationConfigWhereInput;
    limit?: number;
};
export type TaskEscalationConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    where: Prisma.TaskEscalationConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskEscalationConfigCreateInput, Prisma.TaskEscalationConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskEscalationConfigUpdateInput, Prisma.TaskEscalationConfigUncheckedUpdateInput>;
};
export type TaskEscalationConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
    where: Prisma.TaskEscalationConfigWhereUniqueInput;
};
export type TaskEscalationConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskEscalationConfigWhereInput;
    limit?: number;
};
export type TaskEscalationConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskEscalationConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaskEscalationConfigOmit<ExtArgs> | null;
};
