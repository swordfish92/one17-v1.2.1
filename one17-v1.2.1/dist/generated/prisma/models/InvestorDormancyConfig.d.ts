import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorDormancyConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorDormancyConfigPayload>;
export type AggregateInvestorDormancyConfig = {
    _count: InvestorDormancyConfigCountAggregateOutputType | null;
    _avg: InvestorDormancyConfigAvgAggregateOutputType | null;
    _sum: InvestorDormancyConfigSumAggregateOutputType | null;
    _min: InvestorDormancyConfigMinAggregateOutputType | null;
    _max: InvestorDormancyConfigMaxAggregateOutputType | null;
};
export type InvestorDormancyConfigAvgAggregateOutputType = {
    id: number | null;
    monthsInactiveThreshold: number | null;
};
export type InvestorDormancyConfigSumAggregateOutputType = {
    id: number | null;
    monthsInactiveThreshold: number | null;
};
export type InvestorDormancyConfigMinAggregateOutputType = {
    id: number | null;
    monthsInactiveThreshold: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type InvestorDormancyConfigMaxAggregateOutputType = {
    id: number | null;
    monthsInactiveThreshold: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type InvestorDormancyConfigCountAggregateOutputType = {
    id: number;
    monthsInactiveThreshold: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type InvestorDormancyConfigAvgAggregateInputType = {
    id?: true;
    monthsInactiveThreshold?: true;
};
export type InvestorDormancyConfigSumAggregateInputType = {
    id?: true;
    monthsInactiveThreshold?: true;
};
export type InvestorDormancyConfigMinAggregateInputType = {
    id?: true;
    monthsInactiveThreshold?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type InvestorDormancyConfigMaxAggregateInputType = {
    id?: true;
    monthsInactiveThreshold?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type InvestorDormancyConfigCountAggregateInputType = {
    id?: true;
    monthsInactiveThreshold?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type InvestorDormancyConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorDormancyConfigWhereInput;
    orderBy?: Prisma.InvestorDormancyConfigOrderByWithRelationInput | Prisma.InvestorDormancyConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorDormancyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorDormancyConfigCountAggregateInputType;
    _avg?: InvestorDormancyConfigAvgAggregateInputType;
    _sum?: InvestorDormancyConfigSumAggregateInputType;
    _min?: InvestorDormancyConfigMinAggregateInputType;
    _max?: InvestorDormancyConfigMaxAggregateInputType;
};
export type GetInvestorDormancyConfigAggregateType<T extends InvestorDormancyConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorDormancyConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorDormancyConfig[P]> : Prisma.GetScalarType<T[P], AggregateInvestorDormancyConfig[P]>;
};
export type InvestorDormancyConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorDormancyConfigWhereInput;
    orderBy?: Prisma.InvestorDormancyConfigOrderByWithAggregationInput | Prisma.InvestorDormancyConfigOrderByWithAggregationInput[];
    by: Prisma.InvestorDormancyConfigScalarFieldEnum[] | Prisma.InvestorDormancyConfigScalarFieldEnum;
    having?: Prisma.InvestorDormancyConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorDormancyConfigCountAggregateInputType | true;
    _avg?: InvestorDormancyConfigAvgAggregateInputType;
    _sum?: InvestorDormancyConfigSumAggregateInputType;
    _min?: InvestorDormancyConfigMinAggregateInputType;
    _max?: InvestorDormancyConfigMaxAggregateInputType;
};
export type InvestorDormancyConfigGroupByOutputType = {
    id: number;
    monthsInactiveThreshold: number;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: InvestorDormancyConfigCountAggregateOutputType | null;
    _avg: InvestorDormancyConfigAvgAggregateOutputType | null;
    _sum: InvestorDormancyConfigSumAggregateOutputType | null;
    _min: InvestorDormancyConfigMinAggregateOutputType | null;
    _max: InvestorDormancyConfigMaxAggregateOutputType | null;
};
export type GetInvestorDormancyConfigGroupByPayload<T extends InvestorDormancyConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorDormancyConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorDormancyConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorDormancyConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorDormancyConfigGroupByOutputType[P]>;
}>>;
export type InvestorDormancyConfigWhereInput = {
    AND?: Prisma.InvestorDormancyConfigWhereInput | Prisma.InvestorDormancyConfigWhereInput[];
    OR?: Prisma.InvestorDormancyConfigWhereInput[];
    NOT?: Prisma.InvestorDormancyConfigWhereInput | Prisma.InvestorDormancyConfigWhereInput[];
    id?: Prisma.IntFilter<"InvestorDormancyConfig"> | number;
    monthsInactiveThreshold?: Prisma.IntFilter<"InvestorDormancyConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"InvestorDormancyConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"InvestorDormancyConfig"> | Date | string;
};
export type InvestorDormancyConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    monthsInactiveThreshold?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorDormancyConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.InvestorDormancyConfigWhereInput | Prisma.InvestorDormancyConfigWhereInput[];
    OR?: Prisma.InvestorDormancyConfigWhereInput[];
    NOT?: Prisma.InvestorDormancyConfigWhereInput | Prisma.InvestorDormancyConfigWhereInput[];
    monthsInactiveThreshold?: Prisma.IntFilter<"InvestorDormancyConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"InvestorDormancyConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"InvestorDormancyConfig"> | Date | string;
}, "id">;
export type InvestorDormancyConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    monthsInactiveThreshold?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorDormancyConfigCountOrderByAggregateInput;
    _avg?: Prisma.InvestorDormancyConfigAvgOrderByAggregateInput;
    _max?: Prisma.InvestorDormancyConfigMaxOrderByAggregateInput;
    _min?: Prisma.InvestorDormancyConfigMinOrderByAggregateInput;
    _sum?: Prisma.InvestorDormancyConfigSumOrderByAggregateInput;
};
export type InvestorDormancyConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorDormancyConfigScalarWhereWithAggregatesInput | Prisma.InvestorDormancyConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorDormancyConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorDormancyConfigScalarWhereWithAggregatesInput | Prisma.InvestorDormancyConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"InvestorDormancyConfig"> | number;
    monthsInactiveThreshold?: Prisma.IntWithAggregatesFilter<"InvestorDormancyConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorDormancyConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorDormancyConfig"> | Date | string;
};
export type InvestorDormancyConfigCreateInput = {
    id?: number;
    monthsInactiveThreshold?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type InvestorDormancyConfigUncheckedCreateInput = {
    id?: number;
    monthsInactiveThreshold?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type InvestorDormancyConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monthsInactiveThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorDormancyConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monthsInactiveThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorDormancyConfigCreateManyInput = {
    id?: number;
    monthsInactiveThreshold?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type InvestorDormancyConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monthsInactiveThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorDormancyConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monthsInactiveThreshold?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorDormancyConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthsInactiveThreshold?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorDormancyConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthsInactiveThreshold?: Prisma.SortOrder;
};
export type InvestorDormancyConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthsInactiveThreshold?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorDormancyConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthsInactiveThreshold?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorDormancyConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthsInactiveThreshold?: Prisma.SortOrder;
};
export type InvestorDormancyConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthsInactiveThreshold?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["investorDormancyConfig"]>;
export type InvestorDormancyConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthsInactiveThreshold?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["investorDormancyConfig"]>;
export type InvestorDormancyConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthsInactiveThreshold?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["investorDormancyConfig"]>;
export type InvestorDormancyConfigSelectScalar = {
    id?: boolean;
    monthsInactiveThreshold?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type InvestorDormancyConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "monthsInactiveThreshold" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["investorDormancyConfig"]>;
export type $InvestorDormancyConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorDormancyConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        monthsInactiveThreshold: number;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["investorDormancyConfig"]>;
    composites: {};
};
export type InvestorDormancyConfigGetPayload<S extends boolean | null | undefined | InvestorDormancyConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload, S>;
export type InvestorDormancyConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorDormancyConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorDormancyConfigCountAggregateInputType | true;
};
export interface InvestorDormancyConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorDormancyConfig'];
        meta: {
            name: 'InvestorDormancyConfig';
        };
    };
    findUnique<T extends InvestorDormancyConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorDormancyConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorDormancyConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorDormancyConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorDormancyConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorDormancyConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorDormancyConfigFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorDormancyConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorDormancyConfigCreateArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorDormancyConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorDormancyConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorDormancyConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorDormancyConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorDormancyConfigDeleteArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorDormancyConfigUpdateArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorDormancyConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorDormancyConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorDormancyConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorDormancyConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorDormancyConfigUpsertArgs>(args: Prisma.SelectSubset<T, InvestorDormancyConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorDormancyConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorDormancyConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorDormancyConfigCountArgs>(args?: Prisma.Subset<T, InvestorDormancyConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorDormancyConfigCountAggregateOutputType> : number>;
    aggregate<T extends InvestorDormancyConfigAggregateArgs>(args: Prisma.Subset<T, InvestorDormancyConfigAggregateArgs>): Prisma.PrismaPromise<GetInvestorDormancyConfigAggregateType<T>>;
    groupBy<T extends InvestorDormancyConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorDormancyConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorDormancyConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorDormancyConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorDormancyConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorDormancyConfigFieldRefs;
}
export interface Prisma__InvestorDormancyConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorDormancyConfigFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorDormancyConfig", 'Int'>;
    readonly monthsInactiveThreshold: Prisma.FieldRef<"InvestorDormancyConfig", 'Int'>;
    readonly updatedByUserId: Prisma.FieldRef<"InvestorDormancyConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"InvestorDormancyConfig", 'DateTime'>;
}
export type InvestorDormancyConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorDormancyConfigWhereUniqueInput;
};
export type InvestorDormancyConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorDormancyConfigWhereUniqueInput;
};
export type InvestorDormancyConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorDormancyConfigWhereInput;
    orderBy?: Prisma.InvestorDormancyConfigOrderByWithRelationInput | Prisma.InvestorDormancyConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorDormancyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorDormancyConfigScalarFieldEnum | Prisma.InvestorDormancyConfigScalarFieldEnum[];
};
export type InvestorDormancyConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorDormancyConfigWhereInput;
    orderBy?: Prisma.InvestorDormancyConfigOrderByWithRelationInput | Prisma.InvestorDormancyConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorDormancyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorDormancyConfigScalarFieldEnum | Prisma.InvestorDormancyConfigScalarFieldEnum[];
};
export type InvestorDormancyConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorDormancyConfigWhereInput;
    orderBy?: Prisma.InvestorDormancyConfigOrderByWithRelationInput | Prisma.InvestorDormancyConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorDormancyConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorDormancyConfigScalarFieldEnum | Prisma.InvestorDormancyConfigScalarFieldEnum[];
};
export type InvestorDormancyConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorDormancyConfigCreateInput, Prisma.InvestorDormancyConfigUncheckedCreateInput>;
};
export type InvestorDormancyConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorDormancyConfigCreateManyInput | Prisma.InvestorDormancyConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorDormancyConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    data: Prisma.InvestorDormancyConfigCreateManyInput | Prisma.InvestorDormancyConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorDormancyConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorDormancyConfigUpdateInput, Prisma.InvestorDormancyConfigUncheckedUpdateInput>;
    where: Prisma.InvestorDormancyConfigWhereUniqueInput;
};
export type InvestorDormancyConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorDormancyConfigUpdateManyMutationInput, Prisma.InvestorDormancyConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorDormancyConfigWhereInput;
    limit?: number;
};
export type InvestorDormancyConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorDormancyConfigUpdateManyMutationInput, Prisma.InvestorDormancyConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorDormancyConfigWhereInput;
    limit?: number;
};
export type InvestorDormancyConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorDormancyConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorDormancyConfigCreateInput, Prisma.InvestorDormancyConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorDormancyConfigUpdateInput, Prisma.InvestorDormancyConfigUncheckedUpdateInput>;
};
export type InvestorDormancyConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorDormancyConfigWhereUniqueInput;
};
export type InvestorDormancyConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorDormancyConfigWhereInput;
    limit?: number;
};
export type InvestorDormancyConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorDormancyConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorDormancyConfigOmit<ExtArgs> | null;
};
