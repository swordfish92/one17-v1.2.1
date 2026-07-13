import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaxRemittanceDueDateConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxRemittanceDueDateConfigPayload>;
export type AggregateTaxRemittanceDueDateConfig = {
    _count: TaxRemittanceDueDateConfigCountAggregateOutputType | null;
    _avg: TaxRemittanceDueDateConfigAvgAggregateOutputType | null;
    _sum: TaxRemittanceDueDateConfigSumAggregateOutputType | null;
    _min: TaxRemittanceDueDateConfigMinAggregateOutputType | null;
    _max: TaxRemittanceDueDateConfigMaxAggregateOutputType | null;
};
export type TaxRemittanceDueDateConfigAvgAggregateOutputType = {
    dayOfMonthDue: number | null;
};
export type TaxRemittanceDueDateConfigSumAggregateOutputType = {
    dayOfMonthDue: number | null;
};
export type TaxRemittanceDueDateConfigMinAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    authority: string | null;
    dayOfMonthDue: number | null;
    isActive: boolean | null;
};
export type TaxRemittanceDueDateConfigMaxAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    authority: string | null;
    dayOfMonthDue: number | null;
    isActive: boolean | null;
};
export type TaxRemittanceDueDateConfigCountAggregateOutputType = {
    id: number;
    taxType: number;
    authority: number;
    dayOfMonthDue: number;
    isActive: number;
    _all: number;
};
export type TaxRemittanceDueDateConfigAvgAggregateInputType = {
    dayOfMonthDue?: true;
};
export type TaxRemittanceDueDateConfigSumAggregateInputType = {
    dayOfMonthDue?: true;
};
export type TaxRemittanceDueDateConfigMinAggregateInputType = {
    id?: true;
    taxType?: true;
    authority?: true;
    dayOfMonthDue?: true;
    isActive?: true;
};
export type TaxRemittanceDueDateConfigMaxAggregateInputType = {
    id?: true;
    taxType?: true;
    authority?: true;
    dayOfMonthDue?: true;
    isActive?: true;
};
export type TaxRemittanceDueDateConfigCountAggregateInputType = {
    id?: true;
    taxType?: true;
    authority?: true;
    dayOfMonthDue?: true;
    isActive?: true;
    _all?: true;
};
export type TaxRemittanceDueDateConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    orderBy?: Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput | Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaxRemittanceDueDateConfigCountAggregateInputType;
    _avg?: TaxRemittanceDueDateConfigAvgAggregateInputType;
    _sum?: TaxRemittanceDueDateConfigSumAggregateInputType;
    _min?: TaxRemittanceDueDateConfigMinAggregateInputType;
    _max?: TaxRemittanceDueDateConfigMaxAggregateInputType;
};
export type GetTaxRemittanceDueDateConfigAggregateType<T extends TaxRemittanceDueDateConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxRemittanceDueDateConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxRemittanceDueDateConfig[P]> : Prisma.GetScalarType<T[P], AggregateTaxRemittanceDueDateConfig[P]>;
};
export type TaxRemittanceDueDateConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    orderBy?: Prisma.TaxRemittanceDueDateConfigOrderByWithAggregationInput | Prisma.TaxRemittanceDueDateConfigOrderByWithAggregationInput[];
    by: Prisma.TaxRemittanceDueDateConfigScalarFieldEnum[] | Prisma.TaxRemittanceDueDateConfigScalarFieldEnum;
    having?: Prisma.TaxRemittanceDueDateConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxRemittanceDueDateConfigCountAggregateInputType | true;
    _avg?: TaxRemittanceDueDateConfigAvgAggregateInputType;
    _sum?: TaxRemittanceDueDateConfigSumAggregateInputType;
    _min?: TaxRemittanceDueDateConfigMinAggregateInputType;
    _max?: TaxRemittanceDueDateConfigMaxAggregateInputType;
};
export type TaxRemittanceDueDateConfigGroupByOutputType = {
    id: string;
    taxType: $Enums.TaxType;
    authority: string;
    dayOfMonthDue: number;
    isActive: boolean;
    _count: TaxRemittanceDueDateConfigCountAggregateOutputType | null;
    _avg: TaxRemittanceDueDateConfigAvgAggregateOutputType | null;
    _sum: TaxRemittanceDueDateConfigSumAggregateOutputType | null;
    _min: TaxRemittanceDueDateConfigMinAggregateOutputType | null;
    _max: TaxRemittanceDueDateConfigMaxAggregateOutputType | null;
};
export type GetTaxRemittanceDueDateConfigGroupByPayload<T extends TaxRemittanceDueDateConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxRemittanceDueDateConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxRemittanceDueDateConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxRemittanceDueDateConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxRemittanceDueDateConfigGroupByOutputType[P]>;
}>>;
export type TaxRemittanceDueDateConfigWhereInput = {
    AND?: Prisma.TaxRemittanceDueDateConfigWhereInput | Prisma.TaxRemittanceDueDateConfigWhereInput[];
    OR?: Prisma.TaxRemittanceDueDateConfigWhereInput[];
    NOT?: Prisma.TaxRemittanceDueDateConfigWhereInput | Prisma.TaxRemittanceDueDateConfigWhereInput[];
    id?: Prisma.UuidFilter<"TaxRemittanceDueDateConfig"> | string;
    taxType?: Prisma.EnumTaxTypeFilter<"TaxRemittanceDueDateConfig"> | $Enums.TaxType;
    authority?: Prisma.StringFilter<"TaxRemittanceDueDateConfig"> | string;
    dayOfMonthDue?: Prisma.IntFilter<"TaxRemittanceDueDateConfig"> | number;
    isActive?: Prisma.BoolFilter<"TaxRemittanceDueDateConfig"> | boolean;
};
export type TaxRemittanceDueDateConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    dayOfMonthDue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type TaxRemittanceDueDateConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    taxType_authority?: Prisma.TaxRemittanceDueDateConfigTaxTypeAuthorityCompoundUniqueInput;
    AND?: Prisma.TaxRemittanceDueDateConfigWhereInput | Prisma.TaxRemittanceDueDateConfigWhereInput[];
    OR?: Prisma.TaxRemittanceDueDateConfigWhereInput[];
    NOT?: Prisma.TaxRemittanceDueDateConfigWhereInput | Prisma.TaxRemittanceDueDateConfigWhereInput[];
    taxType?: Prisma.EnumTaxTypeFilter<"TaxRemittanceDueDateConfig"> | $Enums.TaxType;
    authority?: Prisma.StringFilter<"TaxRemittanceDueDateConfig"> | string;
    dayOfMonthDue?: Prisma.IntFilter<"TaxRemittanceDueDateConfig"> | number;
    isActive?: Prisma.BoolFilter<"TaxRemittanceDueDateConfig"> | boolean;
}, "id" | "taxType_authority">;
export type TaxRemittanceDueDateConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    dayOfMonthDue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.TaxRemittanceDueDateConfigCountOrderByAggregateInput;
    _avg?: Prisma.TaxRemittanceDueDateConfigAvgOrderByAggregateInput;
    _max?: Prisma.TaxRemittanceDueDateConfigMaxOrderByAggregateInput;
    _min?: Prisma.TaxRemittanceDueDateConfigMinOrderByAggregateInput;
    _sum?: Prisma.TaxRemittanceDueDateConfigSumOrderByAggregateInput;
};
export type TaxRemittanceDueDateConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxRemittanceDueDateConfigScalarWhereWithAggregatesInput | Prisma.TaxRemittanceDueDateConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxRemittanceDueDateConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxRemittanceDueDateConfigScalarWhereWithAggregatesInput | Prisma.TaxRemittanceDueDateConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaxRemittanceDueDateConfig"> | string;
    taxType?: Prisma.EnumTaxTypeWithAggregatesFilter<"TaxRemittanceDueDateConfig"> | $Enums.TaxType;
    authority?: Prisma.StringWithAggregatesFilter<"TaxRemittanceDueDateConfig"> | string;
    dayOfMonthDue?: Prisma.IntWithAggregatesFilter<"TaxRemittanceDueDateConfig"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"TaxRemittanceDueDateConfig"> | boolean;
};
export type TaxRemittanceDueDateConfigCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    dayOfMonthDue: number;
    isActive?: boolean;
};
export type TaxRemittanceDueDateConfigUncheckedCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    dayOfMonthDue: number;
    isActive?: boolean;
};
export type TaxRemittanceDueDateConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfMonthDue?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TaxRemittanceDueDateConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfMonthDue?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TaxRemittanceDueDateConfigCreateManyInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    dayOfMonthDue: number;
    isActive?: boolean;
};
export type TaxRemittanceDueDateConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfMonthDue?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TaxRemittanceDueDateConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfMonthDue?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TaxRemittanceDueDateConfigTaxTypeAuthorityCompoundUniqueInput = {
    taxType: $Enums.TaxType;
    authority: string;
};
export type TaxRemittanceDueDateConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    dayOfMonthDue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type TaxRemittanceDueDateConfigAvgOrderByAggregateInput = {
    dayOfMonthDue?: Prisma.SortOrder;
};
export type TaxRemittanceDueDateConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    dayOfMonthDue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type TaxRemittanceDueDateConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    dayOfMonthDue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type TaxRemittanceDueDateConfigSumOrderByAggregateInput = {
    dayOfMonthDue?: Prisma.SortOrder;
};
export type TaxRemittanceDueDateConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    dayOfMonthDue?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["taxRemittanceDueDateConfig"]>;
export type TaxRemittanceDueDateConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    dayOfMonthDue?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["taxRemittanceDueDateConfig"]>;
export type TaxRemittanceDueDateConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    dayOfMonthDue?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["taxRemittanceDueDateConfig"]>;
export type TaxRemittanceDueDateConfigSelectScalar = {
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    dayOfMonthDue?: boolean;
    isActive?: boolean;
};
export type TaxRemittanceDueDateConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taxType" | "authority" | "dayOfMonthDue" | "isActive", ExtArgs["result"]["taxRemittanceDueDateConfig"]>;
export type $TaxRemittanceDueDateConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxRemittanceDueDateConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taxType: $Enums.TaxType;
        authority: string;
        dayOfMonthDue: number;
        isActive: boolean;
    }, ExtArgs["result"]["taxRemittanceDueDateConfig"]>;
    composites: {};
};
export type TaxRemittanceDueDateConfigGetPayload<S extends boolean | null | undefined | TaxRemittanceDueDateConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload, S>;
export type TaxRemittanceDueDateConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxRemittanceDueDateConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxRemittanceDueDateConfigCountAggregateInputType | true;
};
export interface TaxRemittanceDueDateConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxRemittanceDueDateConfig'];
        meta: {
            name: 'TaxRemittanceDueDateConfig';
        };
    };
    findUnique<T extends TaxRemittanceDueDateConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaxRemittanceDueDateConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaxRemittanceDueDateConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaxRemittanceDueDateConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaxRemittanceDueDateConfigFindManyArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaxRemittanceDueDateConfigCreateArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigCreateArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaxRemittanceDueDateConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaxRemittanceDueDateConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaxRemittanceDueDateConfigDeleteArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaxRemittanceDueDateConfigUpdateArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaxRemittanceDueDateConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaxRemittanceDueDateConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaxRemittanceDueDateConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaxRemittanceDueDateConfigUpsertArgs>(args: Prisma.SelectSubset<T, TaxRemittanceDueDateConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceDueDateConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceDueDateConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaxRemittanceDueDateConfigCountArgs>(args?: Prisma.Subset<T, TaxRemittanceDueDateConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxRemittanceDueDateConfigCountAggregateOutputType> : number>;
    aggregate<T extends TaxRemittanceDueDateConfigAggregateArgs>(args: Prisma.Subset<T, TaxRemittanceDueDateConfigAggregateArgs>): Prisma.PrismaPromise<GetTaxRemittanceDueDateConfigAggregateType<T>>;
    groupBy<T extends TaxRemittanceDueDateConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxRemittanceDueDateConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxRemittanceDueDateConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxRemittanceDueDateConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxRemittanceDueDateConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaxRemittanceDueDateConfigFieldRefs;
}
export interface Prisma__TaxRemittanceDueDateConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaxRemittanceDueDateConfigFieldRefs {
    readonly id: Prisma.FieldRef<"TaxRemittanceDueDateConfig", 'String'>;
    readonly taxType: Prisma.FieldRef<"TaxRemittanceDueDateConfig", 'TaxType'>;
    readonly authority: Prisma.FieldRef<"TaxRemittanceDueDateConfig", 'String'>;
    readonly dayOfMonthDue: Prisma.FieldRef<"TaxRemittanceDueDateConfig", 'Int'>;
    readonly isActive: Prisma.FieldRef<"TaxRemittanceDueDateConfig", 'Boolean'>;
}
export type TaxRemittanceDueDateConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    where: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
};
export type TaxRemittanceDueDateConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    where: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
};
export type TaxRemittanceDueDateConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    orderBy?: Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput | Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRemittanceDueDateConfigScalarFieldEnum | Prisma.TaxRemittanceDueDateConfigScalarFieldEnum[];
};
export type TaxRemittanceDueDateConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    orderBy?: Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput | Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRemittanceDueDateConfigScalarFieldEnum | Prisma.TaxRemittanceDueDateConfigScalarFieldEnum[];
};
export type TaxRemittanceDueDateConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    orderBy?: Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput | Prisma.TaxRemittanceDueDateConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRemittanceDueDateConfigScalarFieldEnum | Prisma.TaxRemittanceDueDateConfigScalarFieldEnum[];
};
export type TaxRemittanceDueDateConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRemittanceDueDateConfigCreateInput, Prisma.TaxRemittanceDueDateConfigUncheckedCreateInput>;
};
export type TaxRemittanceDueDateConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaxRemittanceDueDateConfigCreateManyInput | Prisma.TaxRemittanceDueDateConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxRemittanceDueDateConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    data: Prisma.TaxRemittanceDueDateConfigCreateManyInput | Prisma.TaxRemittanceDueDateConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxRemittanceDueDateConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRemittanceDueDateConfigUpdateInput, Prisma.TaxRemittanceDueDateConfigUncheckedUpdateInput>;
    where: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
};
export type TaxRemittanceDueDateConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaxRemittanceDueDateConfigUpdateManyMutationInput, Prisma.TaxRemittanceDueDateConfigUncheckedUpdateManyInput>;
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    limit?: number;
};
export type TaxRemittanceDueDateConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRemittanceDueDateConfigUpdateManyMutationInput, Prisma.TaxRemittanceDueDateConfigUncheckedUpdateManyInput>;
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    limit?: number;
};
export type TaxRemittanceDueDateConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    where: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRemittanceDueDateConfigCreateInput, Prisma.TaxRemittanceDueDateConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaxRemittanceDueDateConfigUpdateInput, Prisma.TaxRemittanceDueDateConfigUncheckedUpdateInput>;
};
export type TaxRemittanceDueDateConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
    where: Prisma.TaxRemittanceDueDateConfigWhereUniqueInput;
};
export type TaxRemittanceDueDateConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRemittanceDueDateConfigWhereInput;
    limit?: number;
};
export type TaxRemittanceDueDateConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceDueDateConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceDueDateConfigOmit<ExtArgs> | null;
};
