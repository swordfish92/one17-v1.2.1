import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ZakatNisabConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$ZakatNisabConfigPayload>;
export type AggregateZakatNisabConfig = {
    _count: ZakatNisabConfigCountAggregateOutputType | null;
    _avg: ZakatNisabConfigAvgAggregateOutputType | null;
    _sum: ZakatNisabConfigSumAggregateOutputType | null;
    _min: ZakatNisabConfigMinAggregateOutputType | null;
    _max: ZakatNisabConfigMaxAggregateOutputType | null;
};
export type ZakatNisabConfigAvgAggregateOutputType = {
    id: number | null;
    nisabGoldGrams: runtime.Decimal | null;
    goldPricePerGramKobo: number | null;
};
export type ZakatNisabConfigSumAggregateOutputType = {
    id: number | null;
    nisabGoldGrams: runtime.Decimal | null;
    goldPricePerGramKobo: bigint | null;
};
export type ZakatNisabConfigMinAggregateOutputType = {
    id: number | null;
    nisabGoldGrams: runtime.Decimal | null;
    goldPricePerGramKobo: bigint | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    updatedAt: Date | null;
};
export type ZakatNisabConfigMaxAggregateOutputType = {
    id: number | null;
    nisabGoldGrams: runtime.Decimal | null;
    goldPricePerGramKobo: bigint | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    updatedAt: Date | null;
};
export type ZakatNisabConfigCountAggregateOutputType = {
    id: number;
    nisabGoldGrams: number;
    goldPricePerGramKobo: number;
    approvedByUserId: number;
    approvedAt: number;
    updatedAt: number;
    _all: number;
};
export type ZakatNisabConfigAvgAggregateInputType = {
    id?: true;
    nisabGoldGrams?: true;
    goldPricePerGramKobo?: true;
};
export type ZakatNisabConfigSumAggregateInputType = {
    id?: true;
    nisabGoldGrams?: true;
    goldPricePerGramKobo?: true;
};
export type ZakatNisabConfigMinAggregateInputType = {
    id?: true;
    nisabGoldGrams?: true;
    goldPricePerGramKobo?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    updatedAt?: true;
};
export type ZakatNisabConfigMaxAggregateInputType = {
    id?: true;
    nisabGoldGrams?: true;
    goldPricePerGramKobo?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    updatedAt?: true;
};
export type ZakatNisabConfigCountAggregateInputType = {
    id?: true;
    nisabGoldGrams?: true;
    goldPricePerGramKobo?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ZakatNisabConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatNisabConfigWhereInput;
    orderBy?: Prisma.ZakatNisabConfigOrderByWithRelationInput | Prisma.ZakatNisabConfigOrderByWithRelationInput[];
    cursor?: Prisma.ZakatNisabConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ZakatNisabConfigCountAggregateInputType;
    _avg?: ZakatNisabConfigAvgAggregateInputType;
    _sum?: ZakatNisabConfigSumAggregateInputType;
    _min?: ZakatNisabConfigMinAggregateInputType;
    _max?: ZakatNisabConfigMaxAggregateInputType;
};
export type GetZakatNisabConfigAggregateType<T extends ZakatNisabConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateZakatNisabConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZakatNisabConfig[P]> : Prisma.GetScalarType<T[P], AggregateZakatNisabConfig[P]>;
};
export type ZakatNisabConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatNisabConfigWhereInput;
    orderBy?: Prisma.ZakatNisabConfigOrderByWithAggregationInput | Prisma.ZakatNisabConfigOrderByWithAggregationInput[];
    by: Prisma.ZakatNisabConfigScalarFieldEnum[] | Prisma.ZakatNisabConfigScalarFieldEnum;
    having?: Prisma.ZakatNisabConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZakatNisabConfigCountAggregateInputType | true;
    _avg?: ZakatNisabConfigAvgAggregateInputType;
    _sum?: ZakatNisabConfigSumAggregateInputType;
    _min?: ZakatNisabConfigMinAggregateInputType;
    _max?: ZakatNisabConfigMaxAggregateInputType;
};
export type ZakatNisabConfigGroupByOutputType = {
    id: number;
    nisabGoldGrams: runtime.Decimal | null;
    goldPricePerGramKobo: bigint | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    updatedAt: Date;
    _count: ZakatNisabConfigCountAggregateOutputType | null;
    _avg: ZakatNisabConfigAvgAggregateOutputType | null;
    _sum: ZakatNisabConfigSumAggregateOutputType | null;
    _min: ZakatNisabConfigMinAggregateOutputType | null;
    _max: ZakatNisabConfigMaxAggregateOutputType | null;
};
export type GetZakatNisabConfigGroupByPayload<T extends ZakatNisabConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZakatNisabConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZakatNisabConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZakatNisabConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZakatNisabConfigGroupByOutputType[P]>;
}>>;
export type ZakatNisabConfigWhereInput = {
    AND?: Prisma.ZakatNisabConfigWhereInput | Prisma.ZakatNisabConfigWhereInput[];
    OR?: Prisma.ZakatNisabConfigWhereInput[];
    NOT?: Prisma.ZakatNisabConfigWhereInput | Prisma.ZakatNisabConfigWhereInput[];
    id?: Prisma.IntFilter<"ZakatNisabConfig"> | number;
    nisabGoldGrams?: Prisma.DecimalNullableFilter<"ZakatNisabConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: Prisma.BigIntNullableFilter<"ZakatNisabConfig"> | bigint | number | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"ZakatNisabConfig"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ZakatNisabConfig"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ZakatNisabConfig"> | Date | string;
};
export type ZakatNisabConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nisabGoldGrams?: Prisma.SortOrderInput | Prisma.SortOrder;
    goldPricePerGramKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ZakatNisabConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ZakatNisabConfigWhereInput | Prisma.ZakatNisabConfigWhereInput[];
    OR?: Prisma.ZakatNisabConfigWhereInput[];
    NOT?: Prisma.ZakatNisabConfigWhereInput | Prisma.ZakatNisabConfigWhereInput[];
    nisabGoldGrams?: Prisma.DecimalNullableFilter<"ZakatNisabConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: Prisma.BigIntNullableFilter<"ZakatNisabConfig"> | bigint | number | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"ZakatNisabConfig"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ZakatNisabConfig"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ZakatNisabConfig"> | Date | string;
}, "id">;
export type ZakatNisabConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nisabGoldGrams?: Prisma.SortOrderInput | Prisma.SortOrder;
    goldPricePerGramKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ZakatNisabConfigCountOrderByAggregateInput;
    _avg?: Prisma.ZakatNisabConfigAvgOrderByAggregateInput;
    _max?: Prisma.ZakatNisabConfigMaxOrderByAggregateInput;
    _min?: Prisma.ZakatNisabConfigMinOrderByAggregateInput;
    _sum?: Prisma.ZakatNisabConfigSumOrderByAggregateInput;
};
export type ZakatNisabConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.ZakatNisabConfigScalarWhereWithAggregatesInput | Prisma.ZakatNisabConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.ZakatNisabConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ZakatNisabConfigScalarWhereWithAggregatesInput | Prisma.ZakatNisabConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ZakatNisabConfig"> | number;
    nisabGoldGrams?: Prisma.DecimalNullableWithAggregatesFilter<"ZakatNisabConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: Prisma.BigIntNullableWithAggregatesFilter<"ZakatNisabConfig"> | bigint | number | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatNisabConfig"> | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ZakatNisabConfig"> | Date | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ZakatNisabConfig"> | Date | string;
};
export type ZakatNisabConfigCreateInput = {
    id?: number;
    nisabGoldGrams?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: bigint | number | null;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type ZakatNisabConfigUncheckedCreateInput = {
    id?: number;
    nisabGoldGrams?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: bigint | number | null;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type ZakatNisabConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nisabGoldGrams?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatNisabConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nisabGoldGrams?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatNisabConfigCreateManyInput = {
    id?: number;
    nisabGoldGrams?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: bigint | number | null;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type ZakatNisabConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nisabGoldGrams?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatNisabConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nisabGoldGrams?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    goldPricePerGramKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatNisabConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nisabGoldGrams?: Prisma.SortOrder;
    goldPricePerGramKobo?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ZakatNisabConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nisabGoldGrams?: Prisma.SortOrder;
    goldPricePerGramKobo?: Prisma.SortOrder;
};
export type ZakatNisabConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nisabGoldGrams?: Prisma.SortOrder;
    goldPricePerGramKobo?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ZakatNisabConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nisabGoldGrams?: Prisma.SortOrder;
    goldPricePerGramKobo?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ZakatNisabConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nisabGoldGrams?: Prisma.SortOrder;
    goldPricePerGramKobo?: Prisma.SortOrder;
};
export type ZakatNisabConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nisabGoldGrams?: boolean;
    goldPricePerGramKobo?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["zakatNisabConfig"]>;
export type ZakatNisabConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nisabGoldGrams?: boolean;
    goldPricePerGramKobo?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["zakatNisabConfig"]>;
export type ZakatNisabConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nisabGoldGrams?: boolean;
    goldPricePerGramKobo?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["zakatNisabConfig"]>;
export type ZakatNisabConfigSelectScalar = {
    id?: boolean;
    nisabGoldGrams?: boolean;
    goldPricePerGramKobo?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    updatedAt?: boolean;
};
export type ZakatNisabConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nisabGoldGrams" | "goldPricePerGramKobo" | "approvedByUserId" | "approvedAt" | "updatedAt", ExtArgs["result"]["zakatNisabConfig"]>;
export type $ZakatNisabConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ZakatNisabConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nisabGoldGrams: runtime.Decimal | null;
        goldPricePerGramKobo: bigint | null;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        updatedAt: Date;
    }, ExtArgs["result"]["zakatNisabConfig"]>;
    composites: {};
};
export type ZakatNisabConfigGetPayload<S extends boolean | null | undefined | ZakatNisabConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload, S>;
export type ZakatNisabConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ZakatNisabConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZakatNisabConfigCountAggregateInputType | true;
};
export interface ZakatNisabConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ZakatNisabConfig'];
        meta: {
            name: 'ZakatNisabConfig';
        };
    };
    findUnique<T extends ZakatNisabConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ZakatNisabConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ZakatNisabConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, ZakatNisabConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ZakatNisabConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ZakatNisabConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ZakatNisabConfigFindManyArgs>(args?: Prisma.SelectSubset<T, ZakatNisabConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ZakatNisabConfigCreateArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigCreateArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ZakatNisabConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, ZakatNisabConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ZakatNisabConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ZakatNisabConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ZakatNisabConfigDeleteArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ZakatNisabConfigUpdateArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ZakatNisabConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, ZakatNisabConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ZakatNisabConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ZakatNisabConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ZakatNisabConfigUpsertArgs>(args: Prisma.SelectSubset<T, ZakatNisabConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__ZakatNisabConfigClient<runtime.Types.Result.GetResult<Prisma.$ZakatNisabConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ZakatNisabConfigCountArgs>(args?: Prisma.Subset<T, ZakatNisabConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZakatNisabConfigCountAggregateOutputType> : number>;
    aggregate<T extends ZakatNisabConfigAggregateArgs>(args: Prisma.Subset<T, ZakatNisabConfigAggregateArgs>): Prisma.PrismaPromise<GetZakatNisabConfigAggregateType<T>>;
    groupBy<T extends ZakatNisabConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ZakatNisabConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: ZakatNisabConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ZakatNisabConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZakatNisabConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ZakatNisabConfigFieldRefs;
}
export interface Prisma__ZakatNisabConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ZakatNisabConfigFieldRefs {
    readonly id: Prisma.FieldRef<"ZakatNisabConfig", 'Int'>;
    readonly nisabGoldGrams: Prisma.FieldRef<"ZakatNisabConfig", 'Decimal'>;
    readonly goldPricePerGramKobo: Prisma.FieldRef<"ZakatNisabConfig", 'BigInt'>;
    readonly approvedByUserId: Prisma.FieldRef<"ZakatNisabConfig", 'String'>;
    readonly approvedAt: Prisma.FieldRef<"ZakatNisabConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ZakatNisabConfig", 'DateTime'>;
}
export type ZakatNisabConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    where: Prisma.ZakatNisabConfigWhereUniqueInput;
};
export type ZakatNisabConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    where: Prisma.ZakatNisabConfigWhereUniqueInput;
};
export type ZakatNisabConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    where?: Prisma.ZakatNisabConfigWhereInput;
    orderBy?: Prisma.ZakatNisabConfigOrderByWithRelationInput | Prisma.ZakatNisabConfigOrderByWithRelationInput[];
    cursor?: Prisma.ZakatNisabConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatNisabConfigScalarFieldEnum | Prisma.ZakatNisabConfigScalarFieldEnum[];
};
export type ZakatNisabConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    where?: Prisma.ZakatNisabConfigWhereInput;
    orderBy?: Prisma.ZakatNisabConfigOrderByWithRelationInput | Prisma.ZakatNisabConfigOrderByWithRelationInput[];
    cursor?: Prisma.ZakatNisabConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatNisabConfigScalarFieldEnum | Prisma.ZakatNisabConfigScalarFieldEnum[];
};
export type ZakatNisabConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    where?: Prisma.ZakatNisabConfigWhereInput;
    orderBy?: Prisma.ZakatNisabConfigOrderByWithRelationInput | Prisma.ZakatNisabConfigOrderByWithRelationInput[];
    cursor?: Prisma.ZakatNisabConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatNisabConfigScalarFieldEnum | Prisma.ZakatNisabConfigScalarFieldEnum[];
};
export type ZakatNisabConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatNisabConfigCreateInput, Prisma.ZakatNisabConfigUncheckedCreateInput>;
};
export type ZakatNisabConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ZakatNisabConfigCreateManyInput | Prisma.ZakatNisabConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ZakatNisabConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    data: Prisma.ZakatNisabConfigCreateManyInput | Prisma.ZakatNisabConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ZakatNisabConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatNisabConfigUpdateInput, Prisma.ZakatNisabConfigUncheckedUpdateInput>;
    where: Prisma.ZakatNisabConfigWhereUniqueInput;
};
export type ZakatNisabConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ZakatNisabConfigUpdateManyMutationInput, Prisma.ZakatNisabConfigUncheckedUpdateManyInput>;
    where?: Prisma.ZakatNisabConfigWhereInput;
    limit?: number;
};
export type ZakatNisabConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatNisabConfigUpdateManyMutationInput, Prisma.ZakatNisabConfigUncheckedUpdateManyInput>;
    where?: Prisma.ZakatNisabConfigWhereInput;
    limit?: number;
};
export type ZakatNisabConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    where: Prisma.ZakatNisabConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatNisabConfigCreateInput, Prisma.ZakatNisabConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ZakatNisabConfigUpdateInput, Prisma.ZakatNisabConfigUncheckedUpdateInput>;
};
export type ZakatNisabConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
    where: Prisma.ZakatNisabConfigWhereUniqueInput;
};
export type ZakatNisabConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatNisabConfigWhereInput;
    limit?: number;
};
export type ZakatNisabConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatNisabConfigSelect<ExtArgs> | null;
    omit?: Prisma.ZakatNisabConfigOmit<ExtArgs> | null;
};
