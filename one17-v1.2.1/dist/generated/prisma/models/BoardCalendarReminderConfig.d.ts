import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoardCalendarReminderConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardCalendarReminderConfigPayload>;
export type AggregateBoardCalendarReminderConfig = {
    _count: BoardCalendarReminderConfigCountAggregateOutputType | null;
    _avg: BoardCalendarReminderConfigAvgAggregateOutputType | null;
    _sum: BoardCalendarReminderConfigSumAggregateOutputType | null;
    _min: BoardCalendarReminderConfigMinAggregateOutputType | null;
    _max: BoardCalendarReminderConfigMaxAggregateOutputType | null;
};
export type BoardCalendarReminderConfigAvgAggregateOutputType = {
    id: number | null;
    daysBefore: number | null;
};
export type BoardCalendarReminderConfigSumAggregateOutputType = {
    id: number | null;
    daysBefore: number | null;
};
export type BoardCalendarReminderConfigMinAggregateOutputType = {
    id: number | null;
    daysBefore: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type BoardCalendarReminderConfigMaxAggregateOutputType = {
    id: number | null;
    daysBefore: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type BoardCalendarReminderConfigCountAggregateOutputType = {
    id: number;
    daysBefore: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type BoardCalendarReminderConfigAvgAggregateInputType = {
    id?: true;
    daysBefore?: true;
};
export type BoardCalendarReminderConfigSumAggregateInputType = {
    id?: true;
    daysBefore?: true;
};
export type BoardCalendarReminderConfigMinAggregateInputType = {
    id?: true;
    daysBefore?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type BoardCalendarReminderConfigMaxAggregateInputType = {
    id?: true;
    daysBefore?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type BoardCalendarReminderConfigCountAggregateInputType = {
    id?: true;
    daysBefore?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type BoardCalendarReminderConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    orderBy?: Prisma.BoardCalendarReminderConfigOrderByWithRelationInput | Prisma.BoardCalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardCalendarReminderConfigCountAggregateInputType;
    _avg?: BoardCalendarReminderConfigAvgAggregateInputType;
    _sum?: BoardCalendarReminderConfigSumAggregateInputType;
    _min?: BoardCalendarReminderConfigMinAggregateInputType;
    _max?: BoardCalendarReminderConfigMaxAggregateInputType;
};
export type GetBoardCalendarReminderConfigAggregateType<T extends BoardCalendarReminderConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateBoardCalendarReminderConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoardCalendarReminderConfig[P]> : Prisma.GetScalarType<T[P], AggregateBoardCalendarReminderConfig[P]>;
};
export type BoardCalendarReminderConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    orderBy?: Prisma.BoardCalendarReminderConfigOrderByWithAggregationInput | Prisma.BoardCalendarReminderConfigOrderByWithAggregationInput[];
    by: Prisma.BoardCalendarReminderConfigScalarFieldEnum[] | Prisma.BoardCalendarReminderConfigScalarFieldEnum;
    having?: Prisma.BoardCalendarReminderConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardCalendarReminderConfigCountAggregateInputType | true;
    _avg?: BoardCalendarReminderConfigAvgAggregateInputType;
    _sum?: BoardCalendarReminderConfigSumAggregateInputType;
    _min?: BoardCalendarReminderConfigMinAggregateInputType;
    _max?: BoardCalendarReminderConfigMaxAggregateInputType;
};
export type BoardCalendarReminderConfigGroupByOutputType = {
    id: number;
    daysBefore: number;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: BoardCalendarReminderConfigCountAggregateOutputType | null;
    _avg: BoardCalendarReminderConfigAvgAggregateOutputType | null;
    _sum: BoardCalendarReminderConfigSumAggregateOutputType | null;
    _min: BoardCalendarReminderConfigMinAggregateOutputType | null;
    _max: BoardCalendarReminderConfigMaxAggregateOutputType | null;
};
export type GetBoardCalendarReminderConfigGroupByPayload<T extends BoardCalendarReminderConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardCalendarReminderConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardCalendarReminderConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardCalendarReminderConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardCalendarReminderConfigGroupByOutputType[P]>;
}>>;
export type BoardCalendarReminderConfigWhereInput = {
    AND?: Prisma.BoardCalendarReminderConfigWhereInput | Prisma.BoardCalendarReminderConfigWhereInput[];
    OR?: Prisma.BoardCalendarReminderConfigWhereInput[];
    NOT?: Prisma.BoardCalendarReminderConfigWhereInput | Prisma.BoardCalendarReminderConfigWhereInput[];
    id?: Prisma.IntFilter<"BoardCalendarReminderConfig"> | number;
    daysBefore?: Prisma.IntFilter<"BoardCalendarReminderConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"BoardCalendarReminderConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BoardCalendarReminderConfig"> | Date | string;
};
export type BoardCalendarReminderConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    daysBefore?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BoardCalendarReminderConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BoardCalendarReminderConfigWhereInput | Prisma.BoardCalendarReminderConfigWhereInput[];
    OR?: Prisma.BoardCalendarReminderConfigWhereInput[];
    NOT?: Prisma.BoardCalendarReminderConfigWhereInput | Prisma.BoardCalendarReminderConfigWhereInput[];
    daysBefore?: Prisma.IntFilter<"BoardCalendarReminderConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"BoardCalendarReminderConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"BoardCalendarReminderConfig"> | Date | string;
}, "id">;
export type BoardCalendarReminderConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    daysBefore?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BoardCalendarReminderConfigCountOrderByAggregateInput;
    _avg?: Prisma.BoardCalendarReminderConfigAvgOrderByAggregateInput;
    _max?: Prisma.BoardCalendarReminderConfigMaxOrderByAggregateInput;
    _min?: Prisma.BoardCalendarReminderConfigMinOrderByAggregateInput;
    _sum?: Prisma.BoardCalendarReminderConfigSumOrderByAggregateInput;
};
export type BoardCalendarReminderConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardCalendarReminderConfigScalarWhereWithAggregatesInput | Prisma.BoardCalendarReminderConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardCalendarReminderConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardCalendarReminderConfigScalarWhereWithAggregatesInput | Prisma.BoardCalendarReminderConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BoardCalendarReminderConfig"> | number;
    daysBefore?: Prisma.IntWithAggregatesFilter<"BoardCalendarReminderConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BoardCalendarReminderConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BoardCalendarReminderConfig"> | Date | string;
};
export type BoardCalendarReminderConfigCreateInput = {
    id?: number;
    daysBefore?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type BoardCalendarReminderConfigUncheckedCreateInput = {
    id?: number;
    daysBefore?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type BoardCalendarReminderConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    daysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarReminderConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    daysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarReminderConfigCreateManyInput = {
    id?: number;
    daysBefore?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type BoardCalendarReminderConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    daysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarReminderConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    daysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCalendarReminderConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    daysBefore?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BoardCalendarReminderConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    daysBefore?: Prisma.SortOrder;
};
export type BoardCalendarReminderConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    daysBefore?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BoardCalendarReminderConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    daysBefore?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BoardCalendarReminderConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    daysBefore?: Prisma.SortOrder;
};
export type BoardCalendarReminderConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    daysBefore?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["boardCalendarReminderConfig"]>;
export type BoardCalendarReminderConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    daysBefore?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["boardCalendarReminderConfig"]>;
export type BoardCalendarReminderConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    daysBefore?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["boardCalendarReminderConfig"]>;
export type BoardCalendarReminderConfigSelectScalar = {
    id?: boolean;
    daysBefore?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type BoardCalendarReminderConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "daysBefore" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["boardCalendarReminderConfig"]>;
export type $BoardCalendarReminderConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BoardCalendarReminderConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        daysBefore: number;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["boardCalendarReminderConfig"]>;
    composites: {};
};
export type BoardCalendarReminderConfigGetPayload<S extends boolean | null | undefined | BoardCalendarReminderConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload, S>;
export type BoardCalendarReminderConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardCalendarReminderConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardCalendarReminderConfigCountAggregateInputType | true;
};
export interface BoardCalendarReminderConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BoardCalendarReminderConfig'];
        meta: {
            name: 'BoardCalendarReminderConfig';
        };
    };
    findUnique<T extends BoardCalendarReminderConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardCalendarReminderConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardCalendarReminderConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardCalendarReminderConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardCalendarReminderConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardCalendarReminderConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardCalendarReminderConfigFindManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarReminderConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardCalendarReminderConfigCreateArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigCreateArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardCalendarReminderConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarReminderConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoardCalendarReminderConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardCalendarReminderConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoardCalendarReminderConfigDeleteArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardCalendarReminderConfigUpdateArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardCalendarReminderConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardCalendarReminderConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardCalendarReminderConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoardCalendarReminderConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoardCalendarReminderConfigUpsertArgs>(args: Prisma.SelectSubset<T, BoardCalendarReminderConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardCalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$BoardCalendarReminderConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardCalendarReminderConfigCountArgs>(args?: Prisma.Subset<T, BoardCalendarReminderConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardCalendarReminderConfigCountAggregateOutputType> : number>;
    aggregate<T extends BoardCalendarReminderConfigAggregateArgs>(args: Prisma.Subset<T, BoardCalendarReminderConfigAggregateArgs>): Prisma.PrismaPromise<GetBoardCalendarReminderConfigAggregateType<T>>;
    groupBy<T extends BoardCalendarReminderConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardCalendarReminderConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardCalendarReminderConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardCalendarReminderConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardCalendarReminderConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardCalendarReminderConfigFieldRefs;
}
export interface Prisma__BoardCalendarReminderConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardCalendarReminderConfigFieldRefs {
    readonly id: Prisma.FieldRef<"BoardCalendarReminderConfig", 'Int'>;
    readonly daysBefore: Prisma.FieldRef<"BoardCalendarReminderConfig", 'Int'>;
    readonly updatedByUserId: Prisma.FieldRef<"BoardCalendarReminderConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"BoardCalendarReminderConfig", 'DateTime'>;
}
export type BoardCalendarReminderConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
};
export type BoardCalendarReminderConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
};
export type BoardCalendarReminderConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    orderBy?: Prisma.BoardCalendarReminderConfigOrderByWithRelationInput | Prisma.BoardCalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarReminderConfigScalarFieldEnum | Prisma.BoardCalendarReminderConfigScalarFieldEnum[];
};
export type BoardCalendarReminderConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    orderBy?: Prisma.BoardCalendarReminderConfigOrderByWithRelationInput | Prisma.BoardCalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarReminderConfigScalarFieldEnum | Prisma.BoardCalendarReminderConfigScalarFieldEnum[];
};
export type BoardCalendarReminderConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    orderBy?: Prisma.BoardCalendarReminderConfigOrderByWithRelationInput | Prisma.BoardCalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardCalendarReminderConfigScalarFieldEnum | Prisma.BoardCalendarReminderConfigScalarFieldEnum[];
};
export type BoardCalendarReminderConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarReminderConfigCreateInput, Prisma.BoardCalendarReminderConfigUncheckedCreateInput>;
};
export type BoardCalendarReminderConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardCalendarReminderConfigCreateManyInput | Prisma.BoardCalendarReminderConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarReminderConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.BoardCalendarReminderConfigCreateManyInput | Prisma.BoardCalendarReminderConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardCalendarReminderConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarReminderConfigUpdateInput, Prisma.BoardCalendarReminderConfigUncheckedUpdateInput>;
    where: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
};
export type BoardCalendarReminderConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardCalendarReminderConfigUpdateManyMutationInput, Prisma.BoardCalendarReminderConfigUncheckedUpdateManyInput>;
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    limit?: number;
};
export type BoardCalendarReminderConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCalendarReminderConfigUpdateManyMutationInput, Prisma.BoardCalendarReminderConfigUncheckedUpdateManyInput>;
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    limit?: number;
};
export type BoardCalendarReminderConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCalendarReminderConfigCreateInput, Prisma.BoardCalendarReminderConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardCalendarReminderConfigUpdateInput, Prisma.BoardCalendarReminderConfigUncheckedUpdateInput>;
};
export type BoardCalendarReminderConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.BoardCalendarReminderConfigWhereUniqueInput;
};
export type BoardCalendarReminderConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardCalendarReminderConfigWhereInput;
    limit?: number;
};
export type BoardCalendarReminderConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.BoardCalendarReminderConfigOmit<ExtArgs> | null;
};
