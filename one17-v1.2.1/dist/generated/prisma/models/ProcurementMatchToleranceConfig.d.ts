import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProcurementMatchToleranceConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$ProcurementMatchToleranceConfigPayload>;
export type AggregateProcurementMatchToleranceConfig = {
    _count: ProcurementMatchToleranceConfigCountAggregateOutputType | null;
    _avg: ProcurementMatchToleranceConfigAvgAggregateOutputType | null;
    _sum: ProcurementMatchToleranceConfigSumAggregateOutputType | null;
    _min: ProcurementMatchToleranceConfigMinAggregateOutputType | null;
    _max: ProcurementMatchToleranceConfigMaxAggregateOutputType | null;
};
export type ProcurementMatchToleranceConfigAvgAggregateOutputType = {
    version: number | null;
    tolerancePct: runtime.Decimal | null;
};
export type ProcurementMatchToleranceConfigSumAggregateOutputType = {
    version: number | null;
    tolerancePct: runtime.Decimal | null;
};
export type ProcurementMatchToleranceConfigMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    tolerancePct: runtime.Decimal | null;
    createdAt: Date | null;
};
export type ProcurementMatchToleranceConfigMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    tolerancePct: runtime.Decimal | null;
    createdAt: Date | null;
};
export type ProcurementMatchToleranceConfigCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    tolerancePct: number;
    createdAt: number;
    _all: number;
};
export type ProcurementMatchToleranceConfigAvgAggregateInputType = {
    version?: true;
    tolerancePct?: true;
};
export type ProcurementMatchToleranceConfigSumAggregateInputType = {
    version?: true;
    tolerancePct?: true;
};
export type ProcurementMatchToleranceConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    tolerancePct?: true;
    createdAt?: true;
};
export type ProcurementMatchToleranceConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    tolerancePct?: true;
    createdAt?: true;
};
export type ProcurementMatchToleranceConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    tolerancePct?: true;
    createdAt?: true;
    _all?: true;
};
export type ProcurementMatchToleranceConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    orderBy?: Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput | Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput[];
    cursor?: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProcurementMatchToleranceConfigCountAggregateInputType;
    _avg?: ProcurementMatchToleranceConfigAvgAggregateInputType;
    _sum?: ProcurementMatchToleranceConfigSumAggregateInputType;
    _min?: ProcurementMatchToleranceConfigMinAggregateInputType;
    _max?: ProcurementMatchToleranceConfigMaxAggregateInputType;
};
export type GetProcurementMatchToleranceConfigAggregateType<T extends ProcurementMatchToleranceConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateProcurementMatchToleranceConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProcurementMatchToleranceConfig[P]> : Prisma.GetScalarType<T[P], AggregateProcurementMatchToleranceConfig[P]>;
};
export type ProcurementMatchToleranceConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    orderBy?: Prisma.ProcurementMatchToleranceConfigOrderByWithAggregationInput | Prisma.ProcurementMatchToleranceConfigOrderByWithAggregationInput[];
    by: Prisma.ProcurementMatchToleranceConfigScalarFieldEnum[] | Prisma.ProcurementMatchToleranceConfigScalarFieldEnum;
    having?: Prisma.ProcurementMatchToleranceConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProcurementMatchToleranceConfigCountAggregateInputType | true;
    _avg?: ProcurementMatchToleranceConfigAvgAggregateInputType;
    _sum?: ProcurementMatchToleranceConfigSumAggregateInputType;
    _min?: ProcurementMatchToleranceConfigMinAggregateInputType;
    _max?: ProcurementMatchToleranceConfigMaxAggregateInputType;
};
export type ProcurementMatchToleranceConfigGroupByOutputType = {
    id: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    tolerancePct: runtime.Decimal;
    createdAt: Date;
    _count: ProcurementMatchToleranceConfigCountAggregateOutputType | null;
    _avg: ProcurementMatchToleranceConfigAvgAggregateOutputType | null;
    _sum: ProcurementMatchToleranceConfigSumAggregateOutputType | null;
    _min: ProcurementMatchToleranceConfigMinAggregateOutputType | null;
    _max: ProcurementMatchToleranceConfigMaxAggregateOutputType | null;
};
export type GetProcurementMatchToleranceConfigGroupByPayload<T extends ProcurementMatchToleranceConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProcurementMatchToleranceConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProcurementMatchToleranceConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProcurementMatchToleranceConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProcurementMatchToleranceConfigGroupByOutputType[P]>;
}>>;
export type ProcurementMatchToleranceConfigWhereInput = {
    AND?: Prisma.ProcurementMatchToleranceConfigWhereInput | Prisma.ProcurementMatchToleranceConfigWhereInput[];
    OR?: Prisma.ProcurementMatchToleranceConfigWhereInput[];
    NOT?: Prisma.ProcurementMatchToleranceConfigWhereInput | Prisma.ProcurementMatchToleranceConfigWhereInput[];
    id?: Prisma.UuidFilter<"ProcurementMatchToleranceConfig"> | string;
    version?: Prisma.IntFilter<"ProcurementMatchToleranceConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"ProcurementMatchToleranceConfig"> | $Enums.GovernedItemStatus;
    tolerancePct?: Prisma.DecimalFilter<"ProcurementMatchToleranceConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ProcurementMatchToleranceConfig"> | Date | string;
};
export type ProcurementMatchToleranceConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tolerancePct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProcurementMatchToleranceConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProcurementMatchToleranceConfigWhereInput | Prisma.ProcurementMatchToleranceConfigWhereInput[];
    OR?: Prisma.ProcurementMatchToleranceConfigWhereInput[];
    NOT?: Prisma.ProcurementMatchToleranceConfigWhereInput | Prisma.ProcurementMatchToleranceConfigWhereInput[];
    version?: Prisma.IntFilter<"ProcurementMatchToleranceConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"ProcurementMatchToleranceConfig"> | $Enums.GovernedItemStatus;
    tolerancePct?: Prisma.DecimalFilter<"ProcurementMatchToleranceConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ProcurementMatchToleranceConfig"> | Date | string;
}, "id">;
export type ProcurementMatchToleranceConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tolerancePct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProcurementMatchToleranceConfigCountOrderByAggregateInput;
    _avg?: Prisma.ProcurementMatchToleranceConfigAvgOrderByAggregateInput;
    _max?: Prisma.ProcurementMatchToleranceConfigMaxOrderByAggregateInput;
    _min?: Prisma.ProcurementMatchToleranceConfigMinOrderByAggregateInput;
    _sum?: Prisma.ProcurementMatchToleranceConfigSumOrderByAggregateInput;
};
export type ProcurementMatchToleranceConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProcurementMatchToleranceConfigScalarWhereWithAggregatesInput | Prisma.ProcurementMatchToleranceConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProcurementMatchToleranceConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProcurementMatchToleranceConfigScalarWhereWithAggregatesInput | Prisma.ProcurementMatchToleranceConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ProcurementMatchToleranceConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"ProcurementMatchToleranceConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"ProcurementMatchToleranceConfig"> | $Enums.GovernedItemStatus;
    tolerancePct?: Prisma.DecimalWithAggregatesFilter<"ProcurementMatchToleranceConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProcurementMatchToleranceConfig"> | Date | string;
};
export type ProcurementMatchToleranceConfigCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    tolerancePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ProcurementMatchToleranceConfigUncheckedCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    tolerancePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ProcurementMatchToleranceConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    tolerancePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcurementMatchToleranceConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    tolerancePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcurementMatchToleranceConfigCreateManyInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    tolerancePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ProcurementMatchToleranceConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    tolerancePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcurementMatchToleranceConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    tolerancePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcurementMatchToleranceConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tolerancePct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProcurementMatchToleranceConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    tolerancePct?: Prisma.SortOrder;
};
export type ProcurementMatchToleranceConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tolerancePct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProcurementMatchToleranceConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tolerancePct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProcurementMatchToleranceConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    tolerancePct?: Prisma.SortOrder;
};
export type ProcurementMatchToleranceConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    tolerancePct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["procurementMatchToleranceConfig"]>;
export type ProcurementMatchToleranceConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    tolerancePct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["procurementMatchToleranceConfig"]>;
export type ProcurementMatchToleranceConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    tolerancePct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["procurementMatchToleranceConfig"]>;
export type ProcurementMatchToleranceConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    tolerancePct?: boolean;
    createdAt?: boolean;
};
export type ProcurementMatchToleranceConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "tolerancePct" | "createdAt", ExtArgs["result"]["procurementMatchToleranceConfig"]>;
export type $ProcurementMatchToleranceConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProcurementMatchToleranceConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        tolerancePct: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["procurementMatchToleranceConfig"]>;
    composites: {};
};
export type ProcurementMatchToleranceConfigGetPayload<S extends boolean | null | undefined | ProcurementMatchToleranceConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload, S>;
export type ProcurementMatchToleranceConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProcurementMatchToleranceConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProcurementMatchToleranceConfigCountAggregateInputType | true;
};
export interface ProcurementMatchToleranceConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProcurementMatchToleranceConfig'];
        meta: {
            name: 'ProcurementMatchToleranceConfig';
        };
    };
    findUnique<T extends ProcurementMatchToleranceConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProcurementMatchToleranceConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProcurementMatchToleranceConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProcurementMatchToleranceConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProcurementMatchToleranceConfigFindManyArgs>(args?: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProcurementMatchToleranceConfigCreateArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigCreateArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProcurementMatchToleranceConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProcurementMatchToleranceConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProcurementMatchToleranceConfigDeleteArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProcurementMatchToleranceConfigUpdateArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProcurementMatchToleranceConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProcurementMatchToleranceConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProcurementMatchToleranceConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProcurementMatchToleranceConfigUpsertArgs>(args: Prisma.SelectSubset<T, ProcurementMatchToleranceConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__ProcurementMatchToleranceConfigClient<runtime.Types.Result.GetResult<Prisma.$ProcurementMatchToleranceConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProcurementMatchToleranceConfigCountArgs>(args?: Prisma.Subset<T, ProcurementMatchToleranceConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProcurementMatchToleranceConfigCountAggregateOutputType> : number>;
    aggregate<T extends ProcurementMatchToleranceConfigAggregateArgs>(args: Prisma.Subset<T, ProcurementMatchToleranceConfigAggregateArgs>): Prisma.PrismaPromise<GetProcurementMatchToleranceConfigAggregateType<T>>;
    groupBy<T extends ProcurementMatchToleranceConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProcurementMatchToleranceConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: ProcurementMatchToleranceConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProcurementMatchToleranceConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcurementMatchToleranceConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProcurementMatchToleranceConfigFieldRefs;
}
export interface Prisma__ProcurementMatchToleranceConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProcurementMatchToleranceConfigFieldRefs {
    readonly id: Prisma.FieldRef<"ProcurementMatchToleranceConfig", 'String'>;
    readonly version: Prisma.FieldRef<"ProcurementMatchToleranceConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"ProcurementMatchToleranceConfig", 'GovernedItemStatus'>;
    readonly tolerancePct: Prisma.FieldRef<"ProcurementMatchToleranceConfig", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"ProcurementMatchToleranceConfig", 'DateTime'>;
}
export type ProcurementMatchToleranceConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    where: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
};
export type ProcurementMatchToleranceConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    where: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
};
export type ProcurementMatchToleranceConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    orderBy?: Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput | Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput[];
    cursor?: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProcurementMatchToleranceConfigScalarFieldEnum | Prisma.ProcurementMatchToleranceConfigScalarFieldEnum[];
};
export type ProcurementMatchToleranceConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    orderBy?: Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput | Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput[];
    cursor?: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProcurementMatchToleranceConfigScalarFieldEnum | Prisma.ProcurementMatchToleranceConfigScalarFieldEnum[];
};
export type ProcurementMatchToleranceConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    orderBy?: Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput | Prisma.ProcurementMatchToleranceConfigOrderByWithRelationInput[];
    cursor?: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProcurementMatchToleranceConfigScalarFieldEnum | Prisma.ProcurementMatchToleranceConfigScalarFieldEnum[];
};
export type ProcurementMatchToleranceConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProcurementMatchToleranceConfigCreateInput, Prisma.ProcurementMatchToleranceConfigUncheckedCreateInput>;
};
export type ProcurementMatchToleranceConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProcurementMatchToleranceConfigCreateManyInput | Prisma.ProcurementMatchToleranceConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProcurementMatchToleranceConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    data: Prisma.ProcurementMatchToleranceConfigCreateManyInput | Prisma.ProcurementMatchToleranceConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProcurementMatchToleranceConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProcurementMatchToleranceConfigUpdateInput, Prisma.ProcurementMatchToleranceConfigUncheckedUpdateInput>;
    where: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
};
export type ProcurementMatchToleranceConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProcurementMatchToleranceConfigUpdateManyMutationInput, Prisma.ProcurementMatchToleranceConfigUncheckedUpdateManyInput>;
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    limit?: number;
};
export type ProcurementMatchToleranceConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProcurementMatchToleranceConfigUpdateManyMutationInput, Prisma.ProcurementMatchToleranceConfigUncheckedUpdateManyInput>;
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    limit?: number;
};
export type ProcurementMatchToleranceConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    where: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcurementMatchToleranceConfigCreateInput, Prisma.ProcurementMatchToleranceConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProcurementMatchToleranceConfigUpdateInput, Prisma.ProcurementMatchToleranceConfigUncheckedUpdateInput>;
};
export type ProcurementMatchToleranceConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
    where: Prisma.ProcurementMatchToleranceConfigWhereUniqueInput;
};
export type ProcurementMatchToleranceConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcurementMatchToleranceConfigWhereInput;
    limit?: number;
};
export type ProcurementMatchToleranceConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProcurementMatchToleranceConfigSelect<ExtArgs> | null;
    omit?: Prisma.ProcurementMatchToleranceConfigOmit<ExtArgs> | null;
};
