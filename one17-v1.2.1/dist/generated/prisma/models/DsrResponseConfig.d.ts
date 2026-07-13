import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DsrResponseConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$DsrResponseConfigPayload>;
export type AggregateDsrResponseConfig = {
    _count: DsrResponseConfigCountAggregateOutputType | null;
    _avg: DsrResponseConfigAvgAggregateOutputType | null;
    _sum: DsrResponseConfigSumAggregateOutputType | null;
    _min: DsrResponseConfigMinAggregateOutputType | null;
    _max: DsrResponseConfigMaxAggregateOutputType | null;
};
export type DsrResponseConfigAvgAggregateOutputType = {
    id: number | null;
    version: number | null;
    responseDays: number | null;
};
export type DsrResponseConfigSumAggregateOutputType = {
    id: number | null;
    version: number | null;
    responseDays: number | null;
};
export type DsrResponseConfigMinAggregateOutputType = {
    id: number | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    responseDays: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type DsrResponseConfigMaxAggregateOutputType = {
    id: number | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    responseDays: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type DsrResponseConfigCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    responseDays: number;
    boardResolutionRef: number;
    approvedByUserId: number;
    createdAt: number;
    _all: number;
};
export type DsrResponseConfigAvgAggregateInputType = {
    id?: true;
    version?: true;
    responseDays?: true;
};
export type DsrResponseConfigSumAggregateInputType = {
    id?: true;
    version?: true;
    responseDays?: true;
};
export type DsrResponseConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    responseDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type DsrResponseConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    responseDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type DsrResponseConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    responseDays?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type DsrResponseConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DsrResponseConfigWhereInput;
    orderBy?: Prisma.DsrResponseConfigOrderByWithRelationInput | Prisma.DsrResponseConfigOrderByWithRelationInput[];
    cursor?: Prisma.DsrResponseConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DsrResponseConfigCountAggregateInputType;
    _avg?: DsrResponseConfigAvgAggregateInputType;
    _sum?: DsrResponseConfigSumAggregateInputType;
    _min?: DsrResponseConfigMinAggregateInputType;
    _max?: DsrResponseConfigMaxAggregateInputType;
};
export type GetDsrResponseConfigAggregateType<T extends DsrResponseConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateDsrResponseConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDsrResponseConfig[P]> : Prisma.GetScalarType<T[P], AggregateDsrResponseConfig[P]>;
};
export type DsrResponseConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DsrResponseConfigWhereInput;
    orderBy?: Prisma.DsrResponseConfigOrderByWithAggregationInput | Prisma.DsrResponseConfigOrderByWithAggregationInput[];
    by: Prisma.DsrResponseConfigScalarFieldEnum[] | Prisma.DsrResponseConfigScalarFieldEnum;
    having?: Prisma.DsrResponseConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DsrResponseConfigCountAggregateInputType | true;
    _avg?: DsrResponseConfigAvgAggregateInputType;
    _sum?: DsrResponseConfigSumAggregateInputType;
    _min?: DsrResponseConfigMinAggregateInputType;
    _max?: DsrResponseConfigMaxAggregateInputType;
};
export type DsrResponseConfigGroupByOutputType = {
    id: number;
    version: number;
    status: $Enums.GovernedItemStatus;
    responseDays: number;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date;
    _count: DsrResponseConfigCountAggregateOutputType | null;
    _avg: DsrResponseConfigAvgAggregateOutputType | null;
    _sum: DsrResponseConfigSumAggregateOutputType | null;
    _min: DsrResponseConfigMinAggregateOutputType | null;
    _max: DsrResponseConfigMaxAggregateOutputType | null;
};
export type GetDsrResponseConfigGroupByPayload<T extends DsrResponseConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DsrResponseConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DsrResponseConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DsrResponseConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DsrResponseConfigGroupByOutputType[P]>;
}>>;
export type DsrResponseConfigWhereInput = {
    AND?: Prisma.DsrResponseConfigWhereInput | Prisma.DsrResponseConfigWhereInput[];
    OR?: Prisma.DsrResponseConfigWhereInput[];
    NOT?: Prisma.DsrResponseConfigWhereInput | Prisma.DsrResponseConfigWhereInput[];
    id?: Prisma.IntFilter<"DsrResponseConfig"> | number;
    version?: Prisma.IntFilter<"DsrResponseConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"DsrResponseConfig"> | $Enums.GovernedItemStatus;
    responseDays?: Prisma.IntFilter<"DsrResponseConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"DsrResponseConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"DsrResponseConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DsrResponseConfig"> | Date | string;
};
export type DsrResponseConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    responseDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DsrResponseConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DsrResponseConfigWhereInput | Prisma.DsrResponseConfigWhereInput[];
    OR?: Prisma.DsrResponseConfigWhereInput[];
    NOT?: Prisma.DsrResponseConfigWhereInput | Prisma.DsrResponseConfigWhereInput[];
    version?: Prisma.IntFilter<"DsrResponseConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"DsrResponseConfig"> | $Enums.GovernedItemStatus;
    responseDays?: Prisma.IntFilter<"DsrResponseConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"DsrResponseConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"DsrResponseConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DsrResponseConfig"> | Date | string;
}, "id">;
export type DsrResponseConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    responseDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DsrResponseConfigCountOrderByAggregateInput;
    _avg?: Prisma.DsrResponseConfigAvgOrderByAggregateInput;
    _max?: Prisma.DsrResponseConfigMaxOrderByAggregateInput;
    _min?: Prisma.DsrResponseConfigMinOrderByAggregateInput;
    _sum?: Prisma.DsrResponseConfigSumOrderByAggregateInput;
};
export type DsrResponseConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.DsrResponseConfigScalarWhereWithAggregatesInput | Prisma.DsrResponseConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.DsrResponseConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DsrResponseConfigScalarWhereWithAggregatesInput | Prisma.DsrResponseConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DsrResponseConfig"> | number;
    version?: Prisma.IntWithAggregatesFilter<"DsrResponseConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"DsrResponseConfig"> | $Enums.GovernedItemStatus;
    responseDays?: Prisma.IntWithAggregatesFilter<"DsrResponseConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"DsrResponseConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"DsrResponseConfig"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DsrResponseConfig"> | Date | string;
};
export type DsrResponseConfigCreateInput = {
    id?: number;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    responseDays?: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DsrResponseConfigUncheckedCreateInput = {
    id?: number;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    responseDays?: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DsrResponseConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    responseDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsrResponseConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    responseDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsrResponseConfigCreateManyInput = {
    id?: number;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    responseDays?: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DsrResponseConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    responseDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsrResponseConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    responseDays?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsrResponseConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    responseDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DsrResponseConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    responseDays?: Prisma.SortOrder;
};
export type DsrResponseConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    responseDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DsrResponseConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    responseDays?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DsrResponseConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    responseDays?: Prisma.SortOrder;
};
export type DsrResponseConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    responseDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dsrResponseConfig"]>;
export type DsrResponseConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    responseDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dsrResponseConfig"]>;
export type DsrResponseConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    responseDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dsrResponseConfig"]>;
export type DsrResponseConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    responseDays?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
};
export type DsrResponseConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "responseDays" | "boardResolutionRef" | "approvedByUserId" | "createdAt", ExtArgs["result"]["dsrResponseConfig"]>;
export type $DsrResponseConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DsrResponseConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        version: number;
        status: $Enums.GovernedItemStatus;
        responseDays: number;
        boardResolutionRef: string | null;
        approvedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["dsrResponseConfig"]>;
    composites: {};
};
export type DsrResponseConfigGetPayload<S extends boolean | null | undefined | DsrResponseConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload, S>;
export type DsrResponseConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DsrResponseConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DsrResponseConfigCountAggregateInputType | true;
};
export interface DsrResponseConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DsrResponseConfig'];
        meta: {
            name: 'DsrResponseConfig';
        };
    };
    findUnique<T extends DsrResponseConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DsrResponseConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DsrResponseConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, DsrResponseConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DsrResponseConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DsrResponseConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DsrResponseConfigFindManyArgs>(args?: Prisma.SelectSubset<T, DsrResponseConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DsrResponseConfigCreateArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigCreateArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DsrResponseConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, DsrResponseConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DsrResponseConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DsrResponseConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DsrResponseConfigDeleteArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DsrResponseConfigUpdateArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DsrResponseConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, DsrResponseConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DsrResponseConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DsrResponseConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DsrResponseConfigUpsertArgs>(args: Prisma.SelectSubset<T, DsrResponseConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__DsrResponseConfigClient<runtime.Types.Result.GetResult<Prisma.$DsrResponseConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DsrResponseConfigCountArgs>(args?: Prisma.Subset<T, DsrResponseConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DsrResponseConfigCountAggregateOutputType> : number>;
    aggregate<T extends DsrResponseConfigAggregateArgs>(args: Prisma.Subset<T, DsrResponseConfigAggregateArgs>): Prisma.PrismaPromise<GetDsrResponseConfigAggregateType<T>>;
    groupBy<T extends DsrResponseConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DsrResponseConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: DsrResponseConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DsrResponseConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDsrResponseConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DsrResponseConfigFieldRefs;
}
export interface Prisma__DsrResponseConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DsrResponseConfigFieldRefs {
    readonly id: Prisma.FieldRef<"DsrResponseConfig", 'Int'>;
    readonly version: Prisma.FieldRef<"DsrResponseConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"DsrResponseConfig", 'GovernedItemStatus'>;
    readonly responseDays: Prisma.FieldRef<"DsrResponseConfig", 'Int'>;
    readonly boardResolutionRef: Prisma.FieldRef<"DsrResponseConfig", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"DsrResponseConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DsrResponseConfig", 'DateTime'>;
}
export type DsrResponseConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    where: Prisma.DsrResponseConfigWhereUniqueInput;
};
export type DsrResponseConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    where: Prisma.DsrResponseConfigWhereUniqueInput;
};
export type DsrResponseConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    where?: Prisma.DsrResponseConfigWhereInput;
    orderBy?: Prisma.DsrResponseConfigOrderByWithRelationInput | Prisma.DsrResponseConfigOrderByWithRelationInput[];
    cursor?: Prisma.DsrResponseConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DsrResponseConfigScalarFieldEnum | Prisma.DsrResponseConfigScalarFieldEnum[];
};
export type DsrResponseConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    where?: Prisma.DsrResponseConfigWhereInput;
    orderBy?: Prisma.DsrResponseConfigOrderByWithRelationInput | Prisma.DsrResponseConfigOrderByWithRelationInput[];
    cursor?: Prisma.DsrResponseConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DsrResponseConfigScalarFieldEnum | Prisma.DsrResponseConfigScalarFieldEnum[];
};
export type DsrResponseConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    where?: Prisma.DsrResponseConfigWhereInput;
    orderBy?: Prisma.DsrResponseConfigOrderByWithRelationInput | Prisma.DsrResponseConfigOrderByWithRelationInput[];
    cursor?: Prisma.DsrResponseConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DsrResponseConfigScalarFieldEnum | Prisma.DsrResponseConfigScalarFieldEnum[];
};
export type DsrResponseConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.DsrResponseConfigCreateInput, Prisma.DsrResponseConfigUncheckedCreateInput>;
};
export type DsrResponseConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DsrResponseConfigCreateManyInput | Prisma.DsrResponseConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DsrResponseConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    data: Prisma.DsrResponseConfigCreateManyInput | Prisma.DsrResponseConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DsrResponseConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DsrResponseConfigUpdateInput, Prisma.DsrResponseConfigUncheckedUpdateInput>;
    where: Prisma.DsrResponseConfigWhereUniqueInput;
};
export type DsrResponseConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DsrResponseConfigUpdateManyMutationInput, Prisma.DsrResponseConfigUncheckedUpdateManyInput>;
    where?: Prisma.DsrResponseConfigWhereInput;
    limit?: number;
};
export type DsrResponseConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DsrResponseConfigUpdateManyMutationInput, Prisma.DsrResponseConfigUncheckedUpdateManyInput>;
    where?: Prisma.DsrResponseConfigWhereInput;
    limit?: number;
};
export type DsrResponseConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    where: Prisma.DsrResponseConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.DsrResponseConfigCreateInput, Prisma.DsrResponseConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DsrResponseConfigUpdateInput, Prisma.DsrResponseConfigUncheckedUpdateInput>;
};
export type DsrResponseConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
    where: Prisma.DsrResponseConfigWhereUniqueInput;
};
export type DsrResponseConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DsrResponseConfigWhereInput;
    limit?: number;
};
export type DsrResponseConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DsrResponseConfigSelect<ExtArgs> | null;
    omit?: Prisma.DsrResponseConfigOmit<ExtArgs> | null;
};
