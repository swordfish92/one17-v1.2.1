import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CalendarReminderConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$CalendarReminderConfigPayload>;
export type AggregateCalendarReminderConfig = {
    _count: CalendarReminderConfigCountAggregateOutputType | null;
    _avg: CalendarReminderConfigAvgAggregateOutputType | null;
    _sum: CalendarReminderConfigSumAggregateOutputType | null;
    _min: CalendarReminderConfigMinAggregateOutputType | null;
    _max: CalendarReminderConfigMaxAggregateOutputType | null;
};
export type CalendarReminderConfigAvgAggregateOutputType = {
    id: number | null;
    defaultLeadMinutes: number | null;
};
export type CalendarReminderConfigSumAggregateOutputType = {
    id: number | null;
    defaultLeadMinutes: number | null;
};
export type CalendarReminderConfigMinAggregateOutputType = {
    id: number | null;
    defaultLeadMinutes: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type CalendarReminderConfigMaxAggregateOutputType = {
    id: number | null;
    defaultLeadMinutes: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type CalendarReminderConfigCountAggregateOutputType = {
    id: number;
    defaultLeadMinutes: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type CalendarReminderConfigAvgAggregateInputType = {
    id?: true;
    defaultLeadMinutes?: true;
};
export type CalendarReminderConfigSumAggregateInputType = {
    id?: true;
    defaultLeadMinutes?: true;
};
export type CalendarReminderConfigMinAggregateInputType = {
    id?: true;
    defaultLeadMinutes?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type CalendarReminderConfigMaxAggregateInputType = {
    id?: true;
    defaultLeadMinutes?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type CalendarReminderConfigCountAggregateInputType = {
    id?: true;
    defaultLeadMinutes?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type CalendarReminderConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarReminderConfigWhereInput;
    orderBy?: Prisma.CalendarReminderConfigOrderByWithRelationInput | Prisma.CalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.CalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CalendarReminderConfigCountAggregateInputType;
    _avg?: CalendarReminderConfigAvgAggregateInputType;
    _sum?: CalendarReminderConfigSumAggregateInputType;
    _min?: CalendarReminderConfigMinAggregateInputType;
    _max?: CalendarReminderConfigMaxAggregateInputType;
};
export type GetCalendarReminderConfigAggregateType<T extends CalendarReminderConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateCalendarReminderConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalendarReminderConfig[P]> : Prisma.GetScalarType<T[P], AggregateCalendarReminderConfig[P]>;
};
export type CalendarReminderConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarReminderConfigWhereInput;
    orderBy?: Prisma.CalendarReminderConfigOrderByWithAggregationInput | Prisma.CalendarReminderConfigOrderByWithAggregationInput[];
    by: Prisma.CalendarReminderConfigScalarFieldEnum[] | Prisma.CalendarReminderConfigScalarFieldEnum;
    having?: Prisma.CalendarReminderConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CalendarReminderConfigCountAggregateInputType | true;
    _avg?: CalendarReminderConfigAvgAggregateInputType;
    _sum?: CalendarReminderConfigSumAggregateInputType;
    _min?: CalendarReminderConfigMinAggregateInputType;
    _max?: CalendarReminderConfigMaxAggregateInputType;
};
export type CalendarReminderConfigGroupByOutputType = {
    id: number;
    defaultLeadMinutes: number;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: CalendarReminderConfigCountAggregateOutputType | null;
    _avg: CalendarReminderConfigAvgAggregateOutputType | null;
    _sum: CalendarReminderConfigSumAggregateOutputType | null;
    _min: CalendarReminderConfigMinAggregateOutputType | null;
    _max: CalendarReminderConfigMaxAggregateOutputType | null;
};
export type GetCalendarReminderConfigGroupByPayload<T extends CalendarReminderConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CalendarReminderConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CalendarReminderConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CalendarReminderConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CalendarReminderConfigGroupByOutputType[P]>;
}>>;
export type CalendarReminderConfigWhereInput = {
    AND?: Prisma.CalendarReminderConfigWhereInput | Prisma.CalendarReminderConfigWhereInput[];
    OR?: Prisma.CalendarReminderConfigWhereInput[];
    NOT?: Prisma.CalendarReminderConfigWhereInput | Prisma.CalendarReminderConfigWhereInput[];
    id?: Prisma.IntFilter<"CalendarReminderConfig"> | number;
    defaultLeadMinutes?: Prisma.IntFilter<"CalendarReminderConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"CalendarReminderConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CalendarReminderConfig"> | Date | string;
};
export type CalendarReminderConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    defaultLeadMinutes?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CalendarReminderConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CalendarReminderConfigWhereInput | Prisma.CalendarReminderConfigWhereInput[];
    OR?: Prisma.CalendarReminderConfigWhereInput[];
    NOT?: Prisma.CalendarReminderConfigWhereInput | Prisma.CalendarReminderConfigWhereInput[];
    defaultLeadMinutes?: Prisma.IntFilter<"CalendarReminderConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"CalendarReminderConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CalendarReminderConfig"> | Date | string;
}, "id">;
export type CalendarReminderConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    defaultLeadMinutes?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CalendarReminderConfigCountOrderByAggregateInput;
    _avg?: Prisma.CalendarReminderConfigAvgOrderByAggregateInput;
    _max?: Prisma.CalendarReminderConfigMaxOrderByAggregateInput;
    _min?: Prisma.CalendarReminderConfigMinOrderByAggregateInput;
    _sum?: Prisma.CalendarReminderConfigSumOrderByAggregateInput;
};
export type CalendarReminderConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.CalendarReminderConfigScalarWhereWithAggregatesInput | Prisma.CalendarReminderConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.CalendarReminderConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CalendarReminderConfigScalarWhereWithAggregatesInput | Prisma.CalendarReminderConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CalendarReminderConfig"> | number;
    defaultLeadMinutes?: Prisma.IntWithAggregatesFilter<"CalendarReminderConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CalendarReminderConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarReminderConfig"> | Date | string;
};
export type CalendarReminderConfigCreateInput = {
    id?: number;
    defaultLeadMinutes?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type CalendarReminderConfigUncheckedCreateInput = {
    id?: number;
    defaultLeadMinutes?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type CalendarReminderConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultLeadMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarReminderConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultLeadMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarReminderConfigCreateManyInput = {
    id?: number;
    defaultLeadMinutes?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type CalendarReminderConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultLeadMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarReminderConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultLeadMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarReminderConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultLeadMinutes?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CalendarReminderConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultLeadMinutes?: Prisma.SortOrder;
};
export type CalendarReminderConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultLeadMinutes?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CalendarReminderConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultLeadMinutes?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CalendarReminderConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultLeadMinutes?: Prisma.SortOrder;
};
export type CalendarReminderConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    defaultLeadMinutes?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["calendarReminderConfig"]>;
export type CalendarReminderConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    defaultLeadMinutes?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["calendarReminderConfig"]>;
export type CalendarReminderConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    defaultLeadMinutes?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["calendarReminderConfig"]>;
export type CalendarReminderConfigSelectScalar = {
    id?: boolean;
    defaultLeadMinutes?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type CalendarReminderConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "defaultLeadMinutes" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["calendarReminderConfig"]>;
export type $CalendarReminderConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CalendarReminderConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        defaultLeadMinutes: number;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["calendarReminderConfig"]>;
    composites: {};
};
export type CalendarReminderConfigGetPayload<S extends boolean | null | undefined | CalendarReminderConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload, S>;
export type CalendarReminderConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CalendarReminderConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CalendarReminderConfigCountAggregateInputType | true;
};
export interface CalendarReminderConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CalendarReminderConfig'];
        meta: {
            name: 'CalendarReminderConfig';
        };
    };
    findUnique<T extends CalendarReminderConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CalendarReminderConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CalendarReminderConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, CalendarReminderConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CalendarReminderConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CalendarReminderConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CalendarReminderConfigFindManyArgs>(args?: Prisma.SelectSubset<T, CalendarReminderConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CalendarReminderConfigCreateArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigCreateArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CalendarReminderConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, CalendarReminderConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CalendarReminderConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CalendarReminderConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CalendarReminderConfigDeleteArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CalendarReminderConfigUpdateArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CalendarReminderConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, CalendarReminderConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CalendarReminderConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CalendarReminderConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CalendarReminderConfigUpsertArgs>(args: Prisma.SelectSubset<T, CalendarReminderConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__CalendarReminderConfigClient<runtime.Types.Result.GetResult<Prisma.$CalendarReminderConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CalendarReminderConfigCountArgs>(args?: Prisma.Subset<T, CalendarReminderConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CalendarReminderConfigCountAggregateOutputType> : number>;
    aggregate<T extends CalendarReminderConfigAggregateArgs>(args: Prisma.Subset<T, CalendarReminderConfigAggregateArgs>): Prisma.PrismaPromise<GetCalendarReminderConfigAggregateType<T>>;
    groupBy<T extends CalendarReminderConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CalendarReminderConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: CalendarReminderConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CalendarReminderConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarReminderConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CalendarReminderConfigFieldRefs;
}
export interface Prisma__CalendarReminderConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CalendarReminderConfigFieldRefs {
    readonly id: Prisma.FieldRef<"CalendarReminderConfig", 'Int'>;
    readonly defaultLeadMinutes: Prisma.FieldRef<"CalendarReminderConfig", 'Int'>;
    readonly updatedByUserId: Prisma.FieldRef<"CalendarReminderConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"CalendarReminderConfig", 'DateTime'>;
}
export type CalendarReminderConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.CalendarReminderConfigWhereUniqueInput;
};
export type CalendarReminderConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.CalendarReminderConfigWhereUniqueInput;
};
export type CalendarReminderConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    where?: Prisma.CalendarReminderConfigWhereInput;
    orderBy?: Prisma.CalendarReminderConfigOrderByWithRelationInput | Prisma.CalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.CalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarReminderConfigScalarFieldEnum | Prisma.CalendarReminderConfigScalarFieldEnum[];
};
export type CalendarReminderConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    where?: Prisma.CalendarReminderConfigWhereInput;
    orderBy?: Prisma.CalendarReminderConfigOrderByWithRelationInput | Prisma.CalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.CalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarReminderConfigScalarFieldEnum | Prisma.CalendarReminderConfigScalarFieldEnum[];
};
export type CalendarReminderConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    where?: Prisma.CalendarReminderConfigWhereInput;
    orderBy?: Prisma.CalendarReminderConfigOrderByWithRelationInput | Prisma.CalendarReminderConfigOrderByWithRelationInput[];
    cursor?: Prisma.CalendarReminderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarReminderConfigScalarFieldEnum | Prisma.CalendarReminderConfigScalarFieldEnum[];
};
export type CalendarReminderConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarReminderConfigCreateInput, Prisma.CalendarReminderConfigUncheckedCreateInput>;
};
export type CalendarReminderConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CalendarReminderConfigCreateManyInput | Prisma.CalendarReminderConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarReminderConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.CalendarReminderConfigCreateManyInput | Prisma.CalendarReminderConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarReminderConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarReminderConfigUpdateInput, Prisma.CalendarReminderConfigUncheckedUpdateInput>;
    where: Prisma.CalendarReminderConfigWhereUniqueInput;
};
export type CalendarReminderConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CalendarReminderConfigUpdateManyMutationInput, Prisma.CalendarReminderConfigUncheckedUpdateManyInput>;
    where?: Prisma.CalendarReminderConfigWhereInput;
    limit?: number;
};
export type CalendarReminderConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarReminderConfigUpdateManyMutationInput, Prisma.CalendarReminderConfigUncheckedUpdateManyInput>;
    where?: Prisma.CalendarReminderConfigWhereInput;
    limit?: number;
};
export type CalendarReminderConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.CalendarReminderConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarReminderConfigCreateInput, Prisma.CalendarReminderConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CalendarReminderConfigUpdateInput, Prisma.CalendarReminderConfigUncheckedUpdateInput>;
};
export type CalendarReminderConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
    where: Prisma.CalendarReminderConfigWhereUniqueInput;
};
export type CalendarReminderConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarReminderConfigWhereInput;
    limit?: number;
};
export type CalendarReminderConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarReminderConfigSelect<ExtArgs> | null;
    omit?: Prisma.CalendarReminderConfigOmit<ExtArgs> | null;
};
