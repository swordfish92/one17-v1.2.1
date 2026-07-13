import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorSanctionsRescreeningConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorSanctionsRescreeningConfigPayload>;
export type AggregateInvestorSanctionsRescreeningConfig = {
    _count: InvestorSanctionsRescreeningConfigCountAggregateOutputType | null;
    _avg: InvestorSanctionsRescreeningConfigAvgAggregateOutputType | null;
    _sum: InvestorSanctionsRescreeningConfigSumAggregateOutputType | null;
    _min: InvestorSanctionsRescreeningConfigMinAggregateOutputType | null;
    _max: InvestorSanctionsRescreeningConfigMaxAggregateOutputType | null;
};
export type InvestorSanctionsRescreeningConfigAvgAggregateOutputType = {
    id: number | null;
    frequencyMonths: number | null;
};
export type InvestorSanctionsRescreeningConfigSumAggregateOutputType = {
    id: number | null;
    frequencyMonths: number | null;
};
export type InvestorSanctionsRescreeningConfigMinAggregateOutputType = {
    id: number | null;
    frequencyMonths: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type InvestorSanctionsRescreeningConfigMaxAggregateOutputType = {
    id: number | null;
    frequencyMonths: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type InvestorSanctionsRescreeningConfigCountAggregateOutputType = {
    id: number;
    frequencyMonths: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type InvestorSanctionsRescreeningConfigAvgAggregateInputType = {
    id?: true;
    frequencyMonths?: true;
};
export type InvestorSanctionsRescreeningConfigSumAggregateInputType = {
    id?: true;
    frequencyMonths?: true;
};
export type InvestorSanctionsRescreeningConfigMinAggregateInputType = {
    id?: true;
    frequencyMonths?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type InvestorSanctionsRescreeningConfigMaxAggregateInputType = {
    id?: true;
    frequencyMonths?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type InvestorSanctionsRescreeningConfigCountAggregateInputType = {
    id?: true;
    frequencyMonths?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type InvestorSanctionsRescreeningConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    orderBy?: Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput | Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorSanctionsRescreeningConfigCountAggregateInputType;
    _avg?: InvestorSanctionsRescreeningConfigAvgAggregateInputType;
    _sum?: InvestorSanctionsRescreeningConfigSumAggregateInputType;
    _min?: InvestorSanctionsRescreeningConfigMinAggregateInputType;
    _max?: InvestorSanctionsRescreeningConfigMaxAggregateInputType;
};
export type GetInvestorSanctionsRescreeningConfigAggregateType<T extends InvestorSanctionsRescreeningConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorSanctionsRescreeningConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorSanctionsRescreeningConfig[P]> : Prisma.GetScalarType<T[P], AggregateInvestorSanctionsRescreeningConfig[P]>;
};
export type InvestorSanctionsRescreeningConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    orderBy?: Prisma.InvestorSanctionsRescreeningConfigOrderByWithAggregationInput | Prisma.InvestorSanctionsRescreeningConfigOrderByWithAggregationInput[];
    by: Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum[] | Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum;
    having?: Prisma.InvestorSanctionsRescreeningConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorSanctionsRescreeningConfigCountAggregateInputType | true;
    _avg?: InvestorSanctionsRescreeningConfigAvgAggregateInputType;
    _sum?: InvestorSanctionsRescreeningConfigSumAggregateInputType;
    _min?: InvestorSanctionsRescreeningConfigMinAggregateInputType;
    _max?: InvestorSanctionsRescreeningConfigMaxAggregateInputType;
};
export type InvestorSanctionsRescreeningConfigGroupByOutputType = {
    id: number;
    frequencyMonths: number;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: InvestorSanctionsRescreeningConfigCountAggregateOutputType | null;
    _avg: InvestorSanctionsRescreeningConfigAvgAggregateOutputType | null;
    _sum: InvestorSanctionsRescreeningConfigSumAggregateOutputType | null;
    _min: InvestorSanctionsRescreeningConfigMinAggregateOutputType | null;
    _max: InvestorSanctionsRescreeningConfigMaxAggregateOutputType | null;
};
export type GetInvestorSanctionsRescreeningConfigGroupByPayload<T extends InvestorSanctionsRescreeningConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorSanctionsRescreeningConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorSanctionsRescreeningConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorSanctionsRescreeningConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorSanctionsRescreeningConfigGroupByOutputType[P]>;
}>>;
export type InvestorSanctionsRescreeningConfigWhereInput = {
    AND?: Prisma.InvestorSanctionsRescreeningConfigWhereInput | Prisma.InvestorSanctionsRescreeningConfigWhereInput[];
    OR?: Prisma.InvestorSanctionsRescreeningConfigWhereInput[];
    NOT?: Prisma.InvestorSanctionsRescreeningConfigWhereInput | Prisma.InvestorSanctionsRescreeningConfigWhereInput[];
    id?: Prisma.IntFilter<"InvestorSanctionsRescreeningConfig"> | number;
    frequencyMonths?: Prisma.IntFilter<"InvestorSanctionsRescreeningConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"InvestorSanctionsRescreeningConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"InvestorSanctionsRescreeningConfig"> | Date | string;
};
export type InvestorSanctionsRescreeningConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    frequencyMonths?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorSanctionsRescreeningConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.InvestorSanctionsRescreeningConfigWhereInput | Prisma.InvestorSanctionsRescreeningConfigWhereInput[];
    OR?: Prisma.InvestorSanctionsRescreeningConfigWhereInput[];
    NOT?: Prisma.InvestorSanctionsRescreeningConfigWhereInput | Prisma.InvestorSanctionsRescreeningConfigWhereInput[];
    frequencyMonths?: Prisma.IntFilter<"InvestorSanctionsRescreeningConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"InvestorSanctionsRescreeningConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"InvestorSanctionsRescreeningConfig"> | Date | string;
}, "id">;
export type InvestorSanctionsRescreeningConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    frequencyMonths?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorSanctionsRescreeningConfigCountOrderByAggregateInput;
    _avg?: Prisma.InvestorSanctionsRescreeningConfigAvgOrderByAggregateInput;
    _max?: Prisma.InvestorSanctionsRescreeningConfigMaxOrderByAggregateInput;
    _min?: Prisma.InvestorSanctionsRescreeningConfigMinOrderByAggregateInput;
    _sum?: Prisma.InvestorSanctionsRescreeningConfigSumOrderByAggregateInput;
};
export type InvestorSanctionsRescreeningConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorSanctionsRescreeningConfigScalarWhereWithAggregatesInput | Prisma.InvestorSanctionsRescreeningConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorSanctionsRescreeningConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorSanctionsRescreeningConfigScalarWhereWithAggregatesInput | Prisma.InvestorSanctionsRescreeningConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"InvestorSanctionsRescreeningConfig"> | number;
    frequencyMonths?: Prisma.IntWithAggregatesFilter<"InvestorSanctionsRescreeningConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorSanctionsRescreeningConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorSanctionsRescreeningConfig"> | Date | string;
};
export type InvestorSanctionsRescreeningConfigCreateInput = {
    id?: number;
    frequencyMonths?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type InvestorSanctionsRescreeningConfigUncheckedCreateInput = {
    id?: number;
    frequencyMonths?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type InvestorSanctionsRescreeningConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorSanctionsRescreeningConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorSanctionsRescreeningConfigCreateManyInput = {
    id?: number;
    frequencyMonths?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type InvestorSanctionsRescreeningConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorSanctionsRescreeningConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    frequencyMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorSanctionsRescreeningConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frequencyMonths?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorSanctionsRescreeningConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frequencyMonths?: Prisma.SortOrder;
};
export type InvestorSanctionsRescreeningConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frequencyMonths?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorSanctionsRescreeningConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frequencyMonths?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvestorSanctionsRescreeningConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    frequencyMonths?: Prisma.SortOrder;
};
export type InvestorSanctionsRescreeningConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    frequencyMonths?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["investorSanctionsRescreeningConfig"]>;
export type InvestorSanctionsRescreeningConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    frequencyMonths?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["investorSanctionsRescreeningConfig"]>;
export type InvestorSanctionsRescreeningConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    frequencyMonths?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["investorSanctionsRescreeningConfig"]>;
export type InvestorSanctionsRescreeningConfigSelectScalar = {
    id?: boolean;
    frequencyMonths?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type InvestorSanctionsRescreeningConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "frequencyMonths" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["investorSanctionsRescreeningConfig"]>;
export type $InvestorSanctionsRescreeningConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorSanctionsRescreeningConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        frequencyMonths: number;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["investorSanctionsRescreeningConfig"]>;
    composites: {};
};
export type InvestorSanctionsRescreeningConfigGetPayload<S extends boolean | null | undefined | InvestorSanctionsRescreeningConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload, S>;
export type InvestorSanctionsRescreeningConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorSanctionsRescreeningConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorSanctionsRescreeningConfigCountAggregateInputType | true;
};
export interface InvestorSanctionsRescreeningConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorSanctionsRescreeningConfig'];
        meta: {
            name: 'InvestorSanctionsRescreeningConfig';
        };
    };
    findUnique<T extends InvestorSanctionsRescreeningConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorSanctionsRescreeningConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorSanctionsRescreeningConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorSanctionsRescreeningConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorSanctionsRescreeningConfigFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorSanctionsRescreeningConfigCreateArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorSanctionsRescreeningConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorSanctionsRescreeningConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorSanctionsRescreeningConfigDeleteArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorSanctionsRescreeningConfigUpdateArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorSanctionsRescreeningConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorSanctionsRescreeningConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorSanctionsRescreeningConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorSanctionsRescreeningConfigUpsertArgs>(args: Prisma.SelectSubset<T, InvestorSanctionsRescreeningConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorSanctionsRescreeningConfigClient<runtime.Types.Result.GetResult<Prisma.$InvestorSanctionsRescreeningConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorSanctionsRescreeningConfigCountArgs>(args?: Prisma.Subset<T, InvestorSanctionsRescreeningConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorSanctionsRescreeningConfigCountAggregateOutputType> : number>;
    aggregate<T extends InvestorSanctionsRescreeningConfigAggregateArgs>(args: Prisma.Subset<T, InvestorSanctionsRescreeningConfigAggregateArgs>): Prisma.PrismaPromise<GetInvestorSanctionsRescreeningConfigAggregateType<T>>;
    groupBy<T extends InvestorSanctionsRescreeningConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorSanctionsRescreeningConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorSanctionsRescreeningConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorSanctionsRescreeningConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorSanctionsRescreeningConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorSanctionsRescreeningConfigFieldRefs;
}
export interface Prisma__InvestorSanctionsRescreeningConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorSanctionsRescreeningConfigFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorSanctionsRescreeningConfig", 'Int'>;
    readonly frequencyMonths: Prisma.FieldRef<"InvestorSanctionsRescreeningConfig", 'Int'>;
    readonly updatedByUserId: Prisma.FieldRef<"InvestorSanctionsRescreeningConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"InvestorSanctionsRescreeningConfig", 'DateTime'>;
}
export type InvestorSanctionsRescreeningConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
};
export type InvestorSanctionsRescreeningConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
};
export type InvestorSanctionsRescreeningConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    orderBy?: Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput | Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum | Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum[];
};
export type InvestorSanctionsRescreeningConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    orderBy?: Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput | Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum | Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum[];
};
export type InvestorSanctionsRescreeningConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    orderBy?: Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput | Prisma.InvestorSanctionsRescreeningConfigOrderByWithRelationInput[];
    cursor?: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum | Prisma.InvestorSanctionsRescreeningConfigScalarFieldEnum[];
};
export type InvestorSanctionsRescreeningConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorSanctionsRescreeningConfigCreateInput, Prisma.InvestorSanctionsRescreeningConfigUncheckedCreateInput>;
};
export type InvestorSanctionsRescreeningConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorSanctionsRescreeningConfigCreateManyInput | Prisma.InvestorSanctionsRescreeningConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorSanctionsRescreeningConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    data: Prisma.InvestorSanctionsRescreeningConfigCreateManyInput | Prisma.InvestorSanctionsRescreeningConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorSanctionsRescreeningConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorSanctionsRescreeningConfigUpdateInput, Prisma.InvestorSanctionsRescreeningConfigUncheckedUpdateInput>;
    where: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
};
export type InvestorSanctionsRescreeningConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorSanctionsRescreeningConfigUpdateManyMutationInput, Prisma.InvestorSanctionsRescreeningConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    limit?: number;
};
export type InvestorSanctionsRescreeningConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorSanctionsRescreeningConfigUpdateManyMutationInput, Prisma.InvestorSanctionsRescreeningConfigUncheckedUpdateManyInput>;
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    limit?: number;
};
export type InvestorSanctionsRescreeningConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorSanctionsRescreeningConfigCreateInput, Prisma.InvestorSanctionsRescreeningConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorSanctionsRescreeningConfigUpdateInput, Prisma.InvestorSanctionsRescreeningConfigUncheckedUpdateInput>;
};
export type InvestorSanctionsRescreeningConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
    where: Prisma.InvestorSanctionsRescreeningConfigWhereUniqueInput;
};
export type InvestorSanctionsRescreeningConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorSanctionsRescreeningConfigWhereInput;
    limit?: number;
};
export type InvestorSanctionsRescreeningConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSanctionsRescreeningConfigSelect<ExtArgs> | null;
    omit?: Prisma.InvestorSanctionsRescreeningConfigOmit<ExtArgs> | null;
};
