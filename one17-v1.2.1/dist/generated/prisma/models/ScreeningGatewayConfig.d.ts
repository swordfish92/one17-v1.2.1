import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScreeningGatewayConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$ScreeningGatewayConfigPayload>;
export type AggregateScreeningGatewayConfig = {
    _count: ScreeningGatewayConfigCountAggregateOutputType | null;
    _avg: ScreeningGatewayConfigAvgAggregateOutputType | null;
    _sum: ScreeningGatewayConfigSumAggregateOutputType | null;
    _min: ScreeningGatewayConfigMinAggregateOutputType | null;
    _max: ScreeningGatewayConfigMaxAggregateOutputType | null;
};
export type ScreeningGatewayConfigAvgAggregateOutputType = {
    id: number | null;
    matchThresholdScore: number | null;
    redThresholdScore: number | null;
    freshnessMaxAgeDays: number | null;
};
export type ScreeningGatewayConfigSumAggregateOutputType = {
    id: number | null;
    matchThresholdScore: number | null;
    redThresholdScore: number | null;
    freshnessMaxAgeDays: number | null;
};
export type ScreeningGatewayConfigMinAggregateOutputType = {
    id: number | null;
    activeProviderMode: $Enums.ScreeningProviderMode | null;
    matchThresholdScore: number | null;
    redThresholdScore: number | null;
    freshnessMaxAgeDays: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type ScreeningGatewayConfigMaxAggregateOutputType = {
    id: number | null;
    activeProviderMode: $Enums.ScreeningProviderMode | null;
    matchThresholdScore: number | null;
    redThresholdScore: number | null;
    freshnessMaxAgeDays: number | null;
    updatedByUserId: string | null;
    updatedAt: Date | null;
};
export type ScreeningGatewayConfigCountAggregateOutputType = {
    id: number;
    activeProviderMode: number;
    matchThresholdScore: number;
    redThresholdScore: number;
    freshnessMaxAgeDays: number;
    updatedByUserId: number;
    updatedAt: number;
    _all: number;
};
export type ScreeningGatewayConfigAvgAggregateInputType = {
    id?: true;
    matchThresholdScore?: true;
    redThresholdScore?: true;
    freshnessMaxAgeDays?: true;
};
export type ScreeningGatewayConfigSumAggregateInputType = {
    id?: true;
    matchThresholdScore?: true;
    redThresholdScore?: true;
    freshnessMaxAgeDays?: true;
};
export type ScreeningGatewayConfigMinAggregateInputType = {
    id?: true;
    activeProviderMode?: true;
    matchThresholdScore?: true;
    redThresholdScore?: true;
    freshnessMaxAgeDays?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type ScreeningGatewayConfigMaxAggregateInputType = {
    id?: true;
    activeProviderMode?: true;
    matchThresholdScore?: true;
    redThresholdScore?: true;
    freshnessMaxAgeDays?: true;
    updatedByUserId?: true;
    updatedAt?: true;
};
export type ScreeningGatewayConfigCountAggregateInputType = {
    id?: true;
    activeProviderMode?: true;
    matchThresholdScore?: true;
    redThresholdScore?: true;
    freshnessMaxAgeDays?: true;
    updatedByUserId?: true;
    updatedAt?: true;
    _all?: true;
};
export type ScreeningGatewayConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    orderBy?: Prisma.ScreeningGatewayConfigOrderByWithRelationInput | Prisma.ScreeningGatewayConfigOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningGatewayConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScreeningGatewayConfigCountAggregateInputType;
    _avg?: ScreeningGatewayConfigAvgAggregateInputType;
    _sum?: ScreeningGatewayConfigSumAggregateInputType;
    _min?: ScreeningGatewayConfigMinAggregateInputType;
    _max?: ScreeningGatewayConfigMaxAggregateInputType;
};
export type GetScreeningGatewayConfigAggregateType<T extends ScreeningGatewayConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateScreeningGatewayConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScreeningGatewayConfig[P]> : Prisma.GetScalarType<T[P], AggregateScreeningGatewayConfig[P]>;
};
export type ScreeningGatewayConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    orderBy?: Prisma.ScreeningGatewayConfigOrderByWithAggregationInput | Prisma.ScreeningGatewayConfigOrderByWithAggregationInput[];
    by: Prisma.ScreeningGatewayConfigScalarFieldEnum[] | Prisma.ScreeningGatewayConfigScalarFieldEnum;
    having?: Prisma.ScreeningGatewayConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScreeningGatewayConfigCountAggregateInputType | true;
    _avg?: ScreeningGatewayConfigAvgAggregateInputType;
    _sum?: ScreeningGatewayConfigSumAggregateInputType;
    _min?: ScreeningGatewayConfigMinAggregateInputType;
    _max?: ScreeningGatewayConfigMaxAggregateInputType;
};
export type ScreeningGatewayConfigGroupByOutputType = {
    id: number;
    activeProviderMode: $Enums.ScreeningProviderMode;
    matchThresholdScore: number;
    redThresholdScore: number;
    freshnessMaxAgeDays: number;
    updatedByUserId: string | null;
    updatedAt: Date;
    _count: ScreeningGatewayConfigCountAggregateOutputType | null;
    _avg: ScreeningGatewayConfigAvgAggregateOutputType | null;
    _sum: ScreeningGatewayConfigSumAggregateOutputType | null;
    _min: ScreeningGatewayConfigMinAggregateOutputType | null;
    _max: ScreeningGatewayConfigMaxAggregateOutputType | null;
};
export type GetScreeningGatewayConfigGroupByPayload<T extends ScreeningGatewayConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScreeningGatewayConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScreeningGatewayConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScreeningGatewayConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScreeningGatewayConfigGroupByOutputType[P]>;
}>>;
export type ScreeningGatewayConfigWhereInput = {
    AND?: Prisma.ScreeningGatewayConfigWhereInput | Prisma.ScreeningGatewayConfigWhereInput[];
    OR?: Prisma.ScreeningGatewayConfigWhereInput[];
    NOT?: Prisma.ScreeningGatewayConfigWhereInput | Prisma.ScreeningGatewayConfigWhereInput[];
    id?: Prisma.IntFilter<"ScreeningGatewayConfig"> | number;
    activeProviderMode?: Prisma.EnumScreeningProviderModeFilter<"ScreeningGatewayConfig"> | $Enums.ScreeningProviderMode;
    matchThresholdScore?: Prisma.IntFilter<"ScreeningGatewayConfig"> | number;
    redThresholdScore?: Prisma.IntFilter<"ScreeningGatewayConfig"> | number;
    freshnessMaxAgeDays?: Prisma.IntFilter<"ScreeningGatewayConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"ScreeningGatewayConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScreeningGatewayConfig"> | Date | string;
};
export type ScreeningGatewayConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    activeProviderMode?: Prisma.SortOrder;
    matchThresholdScore?: Prisma.SortOrder;
    redThresholdScore?: Prisma.SortOrder;
    freshnessMaxAgeDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScreeningGatewayConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ScreeningGatewayConfigWhereInput | Prisma.ScreeningGatewayConfigWhereInput[];
    OR?: Prisma.ScreeningGatewayConfigWhereInput[];
    NOT?: Prisma.ScreeningGatewayConfigWhereInput | Prisma.ScreeningGatewayConfigWhereInput[];
    activeProviderMode?: Prisma.EnumScreeningProviderModeFilter<"ScreeningGatewayConfig"> | $Enums.ScreeningProviderMode;
    matchThresholdScore?: Prisma.IntFilter<"ScreeningGatewayConfig"> | number;
    redThresholdScore?: Prisma.IntFilter<"ScreeningGatewayConfig"> | number;
    freshnessMaxAgeDays?: Prisma.IntFilter<"ScreeningGatewayConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableFilter<"ScreeningGatewayConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"ScreeningGatewayConfig"> | Date | string;
}, "id">;
export type ScreeningGatewayConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    activeProviderMode?: Prisma.SortOrder;
    matchThresholdScore?: Prisma.SortOrder;
    redThresholdScore?: Prisma.SortOrder;
    freshnessMaxAgeDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ScreeningGatewayConfigCountOrderByAggregateInput;
    _avg?: Prisma.ScreeningGatewayConfigAvgOrderByAggregateInput;
    _max?: Prisma.ScreeningGatewayConfigMaxOrderByAggregateInput;
    _min?: Prisma.ScreeningGatewayConfigMinOrderByAggregateInput;
    _sum?: Prisma.ScreeningGatewayConfigSumOrderByAggregateInput;
};
export type ScreeningGatewayConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScreeningGatewayConfigScalarWhereWithAggregatesInput | Prisma.ScreeningGatewayConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScreeningGatewayConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScreeningGatewayConfigScalarWhereWithAggregatesInput | Prisma.ScreeningGatewayConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ScreeningGatewayConfig"> | number;
    activeProviderMode?: Prisma.EnumScreeningProviderModeWithAggregatesFilter<"ScreeningGatewayConfig"> | $Enums.ScreeningProviderMode;
    matchThresholdScore?: Prisma.IntWithAggregatesFilter<"ScreeningGatewayConfig"> | number;
    redThresholdScore?: Prisma.IntWithAggregatesFilter<"ScreeningGatewayConfig"> | number;
    freshnessMaxAgeDays?: Prisma.IntWithAggregatesFilter<"ScreeningGatewayConfig"> | number;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScreeningGatewayConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ScreeningGatewayConfig"> | Date | string;
};
export type ScreeningGatewayConfigCreateInput = {
    id?: number;
    activeProviderMode?: $Enums.ScreeningProviderMode;
    matchThresholdScore?: number;
    redThresholdScore?: number;
    freshnessMaxAgeDays?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type ScreeningGatewayConfigUncheckedCreateInput = {
    id?: number;
    activeProviderMode?: $Enums.ScreeningProviderMode;
    matchThresholdScore?: number;
    redThresholdScore?: number;
    freshnessMaxAgeDays?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type ScreeningGatewayConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activeProviderMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    matchThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    redThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    freshnessMaxAgeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningGatewayConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activeProviderMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    matchThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    redThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    freshnessMaxAgeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningGatewayConfigCreateManyInput = {
    id?: number;
    activeProviderMode?: $Enums.ScreeningProviderMode;
    matchThresholdScore?: number;
    redThresholdScore?: number;
    freshnessMaxAgeDays?: number;
    updatedByUserId?: string | null;
    updatedAt?: Date | string;
};
export type ScreeningGatewayConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activeProviderMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    matchThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    redThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    freshnessMaxAgeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningGatewayConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activeProviderMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    matchThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    redThresholdScore?: Prisma.IntFieldUpdateOperationsInput | number;
    freshnessMaxAgeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningGatewayConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activeProviderMode?: Prisma.SortOrder;
    matchThresholdScore?: Prisma.SortOrder;
    redThresholdScore?: Prisma.SortOrder;
    freshnessMaxAgeDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScreeningGatewayConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchThresholdScore?: Prisma.SortOrder;
    redThresholdScore?: Prisma.SortOrder;
    freshnessMaxAgeDays?: Prisma.SortOrder;
};
export type ScreeningGatewayConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activeProviderMode?: Prisma.SortOrder;
    matchThresholdScore?: Prisma.SortOrder;
    redThresholdScore?: Prisma.SortOrder;
    freshnessMaxAgeDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScreeningGatewayConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activeProviderMode?: Prisma.SortOrder;
    matchThresholdScore?: Prisma.SortOrder;
    redThresholdScore?: Prisma.SortOrder;
    freshnessMaxAgeDays?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScreeningGatewayConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchThresholdScore?: Prisma.SortOrder;
    redThresholdScore?: Prisma.SortOrder;
    freshnessMaxAgeDays?: Prisma.SortOrder;
};
export type EnumScreeningProviderModeFieldUpdateOperationsInput = {
    set?: $Enums.ScreeningProviderMode;
};
export type ScreeningGatewayConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    activeProviderMode?: boolean;
    matchThresholdScore?: boolean;
    redThresholdScore?: boolean;
    freshnessMaxAgeDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["screeningGatewayConfig"]>;
export type ScreeningGatewayConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    activeProviderMode?: boolean;
    matchThresholdScore?: boolean;
    redThresholdScore?: boolean;
    freshnessMaxAgeDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["screeningGatewayConfig"]>;
export type ScreeningGatewayConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    activeProviderMode?: boolean;
    matchThresholdScore?: boolean;
    redThresholdScore?: boolean;
    freshnessMaxAgeDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["screeningGatewayConfig"]>;
export type ScreeningGatewayConfigSelectScalar = {
    id?: boolean;
    activeProviderMode?: boolean;
    matchThresholdScore?: boolean;
    redThresholdScore?: boolean;
    freshnessMaxAgeDays?: boolean;
    updatedByUserId?: boolean;
    updatedAt?: boolean;
};
export type ScreeningGatewayConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "activeProviderMode" | "matchThresholdScore" | "redThresholdScore" | "freshnessMaxAgeDays" | "updatedByUserId" | "updatedAt", ExtArgs["result"]["screeningGatewayConfig"]>;
export type $ScreeningGatewayConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScreeningGatewayConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        activeProviderMode: $Enums.ScreeningProviderMode;
        matchThresholdScore: number;
        redThresholdScore: number;
        freshnessMaxAgeDays: number;
        updatedByUserId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["screeningGatewayConfig"]>;
    composites: {};
};
export type ScreeningGatewayConfigGetPayload<S extends boolean | null | undefined | ScreeningGatewayConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload, S>;
export type ScreeningGatewayConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScreeningGatewayConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScreeningGatewayConfigCountAggregateInputType | true;
};
export interface ScreeningGatewayConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScreeningGatewayConfig'];
        meta: {
            name: 'ScreeningGatewayConfig';
        };
    };
    findUnique<T extends ScreeningGatewayConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScreeningGatewayConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScreeningGatewayConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, ScreeningGatewayConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScreeningGatewayConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScreeningGatewayConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScreeningGatewayConfigFindManyArgs>(args?: Prisma.SelectSubset<T, ScreeningGatewayConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScreeningGatewayConfigCreateArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigCreateArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScreeningGatewayConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, ScreeningGatewayConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScreeningGatewayConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScreeningGatewayConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScreeningGatewayConfigDeleteArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScreeningGatewayConfigUpdateArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScreeningGatewayConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScreeningGatewayConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScreeningGatewayConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScreeningGatewayConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScreeningGatewayConfigUpsertArgs>(args: Prisma.SelectSubset<T, ScreeningGatewayConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__ScreeningGatewayConfigClient<runtime.Types.Result.GetResult<Prisma.$ScreeningGatewayConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScreeningGatewayConfigCountArgs>(args?: Prisma.Subset<T, ScreeningGatewayConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScreeningGatewayConfigCountAggregateOutputType> : number>;
    aggregate<T extends ScreeningGatewayConfigAggregateArgs>(args: Prisma.Subset<T, ScreeningGatewayConfigAggregateArgs>): Prisma.PrismaPromise<GetScreeningGatewayConfigAggregateType<T>>;
    groupBy<T extends ScreeningGatewayConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScreeningGatewayConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: ScreeningGatewayConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScreeningGatewayConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningGatewayConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScreeningGatewayConfigFieldRefs;
}
export interface Prisma__ScreeningGatewayConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScreeningGatewayConfigFieldRefs {
    readonly id: Prisma.FieldRef<"ScreeningGatewayConfig", 'Int'>;
    readonly activeProviderMode: Prisma.FieldRef<"ScreeningGatewayConfig", 'ScreeningProviderMode'>;
    readonly matchThresholdScore: Prisma.FieldRef<"ScreeningGatewayConfig", 'Int'>;
    readonly redThresholdScore: Prisma.FieldRef<"ScreeningGatewayConfig", 'Int'>;
    readonly freshnessMaxAgeDays: Prisma.FieldRef<"ScreeningGatewayConfig", 'Int'>;
    readonly updatedByUserId: Prisma.FieldRef<"ScreeningGatewayConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"ScreeningGatewayConfig", 'DateTime'>;
}
export type ScreeningGatewayConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    where: Prisma.ScreeningGatewayConfigWhereUniqueInput;
};
export type ScreeningGatewayConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    where: Prisma.ScreeningGatewayConfigWhereUniqueInput;
};
export type ScreeningGatewayConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    orderBy?: Prisma.ScreeningGatewayConfigOrderByWithRelationInput | Prisma.ScreeningGatewayConfigOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningGatewayConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningGatewayConfigScalarFieldEnum | Prisma.ScreeningGatewayConfigScalarFieldEnum[];
};
export type ScreeningGatewayConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    orderBy?: Prisma.ScreeningGatewayConfigOrderByWithRelationInput | Prisma.ScreeningGatewayConfigOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningGatewayConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningGatewayConfigScalarFieldEnum | Prisma.ScreeningGatewayConfigScalarFieldEnum[];
};
export type ScreeningGatewayConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    orderBy?: Prisma.ScreeningGatewayConfigOrderByWithRelationInput | Prisma.ScreeningGatewayConfigOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningGatewayConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningGatewayConfigScalarFieldEnum | Prisma.ScreeningGatewayConfigScalarFieldEnum[];
};
export type ScreeningGatewayConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningGatewayConfigCreateInput, Prisma.ScreeningGatewayConfigUncheckedCreateInput>;
};
export type ScreeningGatewayConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScreeningGatewayConfigCreateManyInput | Prisma.ScreeningGatewayConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningGatewayConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    data: Prisma.ScreeningGatewayConfigCreateManyInput | Prisma.ScreeningGatewayConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningGatewayConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningGatewayConfigUpdateInput, Prisma.ScreeningGatewayConfigUncheckedUpdateInput>;
    where: Prisma.ScreeningGatewayConfigWhereUniqueInput;
};
export type ScreeningGatewayConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScreeningGatewayConfigUpdateManyMutationInput, Prisma.ScreeningGatewayConfigUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    limit?: number;
};
export type ScreeningGatewayConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningGatewayConfigUpdateManyMutationInput, Prisma.ScreeningGatewayConfigUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    limit?: number;
};
export type ScreeningGatewayConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    where: Prisma.ScreeningGatewayConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningGatewayConfigCreateInput, Prisma.ScreeningGatewayConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScreeningGatewayConfigUpdateInput, Prisma.ScreeningGatewayConfigUncheckedUpdateInput>;
};
export type ScreeningGatewayConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
    where: Prisma.ScreeningGatewayConfigWhereUniqueInput;
};
export type ScreeningGatewayConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningGatewayConfigWhereInput;
    limit?: number;
};
export type ScreeningGatewayConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningGatewayConfigSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningGatewayConfigOmit<ExtArgs> | null;
};
