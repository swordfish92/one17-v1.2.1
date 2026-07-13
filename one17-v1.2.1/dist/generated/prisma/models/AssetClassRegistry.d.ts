import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetClassRegistryModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetClassRegistryPayload>;
export type AggregateAssetClassRegistry = {
    _count: AssetClassRegistryCountAggregateOutputType | null;
    _min: AssetClassRegistryMinAggregateOutputType | null;
    _max: AssetClassRegistryMaxAggregateOutputType | null;
};
export type AssetClassRegistryMinAggregateOutputType = {
    code: string | null;
    label: string | null;
    custodyDefault: $Enums.WmCustodyFlag | null;
    shariahScreeningRule: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type AssetClassRegistryMaxAggregateOutputType = {
    code: string | null;
    label: string | null;
    custodyDefault: $Enums.WmCustodyFlag | null;
    shariahScreeningRule: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type AssetClassRegistryCountAggregateOutputType = {
    code: number;
    label: number;
    custodyDefault: number;
    shariahScreeningRule: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type AssetClassRegistryMinAggregateInputType = {
    code?: true;
    label?: true;
    custodyDefault?: true;
    shariahScreeningRule?: true;
    isActive?: true;
    createdAt?: true;
};
export type AssetClassRegistryMaxAggregateInputType = {
    code?: true;
    label?: true;
    custodyDefault?: true;
    shariahScreeningRule?: true;
    isActive?: true;
    createdAt?: true;
};
export type AssetClassRegistryCountAggregateInputType = {
    code?: true;
    label?: true;
    custodyDefault?: true;
    shariahScreeningRule?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type AssetClassRegistryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetClassRegistryWhereInput;
    orderBy?: Prisma.AssetClassRegistryOrderByWithRelationInput | Prisma.AssetClassRegistryOrderByWithRelationInput[];
    cursor?: Prisma.AssetClassRegistryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetClassRegistryCountAggregateInputType;
    _min?: AssetClassRegistryMinAggregateInputType;
    _max?: AssetClassRegistryMaxAggregateInputType;
};
export type GetAssetClassRegistryAggregateType<T extends AssetClassRegistryAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetClassRegistry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetClassRegistry[P]> : Prisma.GetScalarType<T[P], AggregateAssetClassRegistry[P]>;
};
export type AssetClassRegistryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetClassRegistryWhereInput;
    orderBy?: Prisma.AssetClassRegistryOrderByWithAggregationInput | Prisma.AssetClassRegistryOrderByWithAggregationInput[];
    by: Prisma.AssetClassRegistryScalarFieldEnum[] | Prisma.AssetClassRegistryScalarFieldEnum;
    having?: Prisma.AssetClassRegistryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetClassRegistryCountAggregateInputType | true;
    _min?: AssetClassRegistryMinAggregateInputType;
    _max?: AssetClassRegistryMaxAggregateInputType;
};
export type AssetClassRegistryGroupByOutputType = {
    code: string;
    label: string;
    custodyDefault: $Enums.WmCustodyFlag;
    shariahScreeningRule: string | null;
    isActive: boolean;
    createdAt: Date;
    _count: AssetClassRegistryCountAggregateOutputType | null;
    _min: AssetClassRegistryMinAggregateOutputType | null;
    _max: AssetClassRegistryMaxAggregateOutputType | null;
};
export type GetAssetClassRegistryGroupByPayload<T extends AssetClassRegistryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetClassRegistryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetClassRegistryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetClassRegistryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetClassRegistryGroupByOutputType[P]>;
}>>;
export type AssetClassRegistryWhereInput = {
    AND?: Prisma.AssetClassRegistryWhereInput | Prisma.AssetClassRegistryWhereInput[];
    OR?: Prisma.AssetClassRegistryWhereInput[];
    NOT?: Prisma.AssetClassRegistryWhereInput | Prisma.AssetClassRegistryWhereInput[];
    code?: Prisma.StringFilter<"AssetClassRegistry"> | string;
    label?: Prisma.StringFilter<"AssetClassRegistry"> | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFilter<"AssetClassRegistry"> | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.StringNullableFilter<"AssetClassRegistry"> | string | null;
    isActive?: Prisma.BoolFilter<"AssetClassRegistry"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AssetClassRegistry"> | Date | string;
    clientAssets?: Prisma.WmClientAssetListRelationFilter;
};
export type AssetClassRegistryOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    custodyDefault?: Prisma.SortOrder;
    shariahScreeningRule?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    clientAssets?: Prisma.WmClientAssetOrderByRelationAggregateInput;
};
export type AssetClassRegistryWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.AssetClassRegistryWhereInput | Prisma.AssetClassRegistryWhereInput[];
    OR?: Prisma.AssetClassRegistryWhereInput[];
    NOT?: Prisma.AssetClassRegistryWhereInput | Prisma.AssetClassRegistryWhereInput[];
    label?: Prisma.StringFilter<"AssetClassRegistry"> | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFilter<"AssetClassRegistry"> | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.StringNullableFilter<"AssetClassRegistry"> | string | null;
    isActive?: Prisma.BoolFilter<"AssetClassRegistry"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AssetClassRegistry"> | Date | string;
    clientAssets?: Prisma.WmClientAssetListRelationFilter;
}, "code">;
export type AssetClassRegistryOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    custodyDefault?: Prisma.SortOrder;
    shariahScreeningRule?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AssetClassRegistryCountOrderByAggregateInput;
    _max?: Prisma.AssetClassRegistryMaxOrderByAggregateInput;
    _min?: Prisma.AssetClassRegistryMinOrderByAggregateInput;
};
export type AssetClassRegistryScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetClassRegistryScalarWhereWithAggregatesInput | Prisma.AssetClassRegistryScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetClassRegistryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetClassRegistryScalarWhereWithAggregatesInput | Prisma.AssetClassRegistryScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"AssetClassRegistry"> | string;
    label?: Prisma.StringWithAggregatesFilter<"AssetClassRegistry"> | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagWithAggregatesFilter<"AssetClassRegistry"> | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.StringNullableWithAggregatesFilter<"AssetClassRegistry"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"AssetClassRegistry"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetClassRegistry"> | Date | string;
};
export type AssetClassRegistryCreateInput = {
    code: string;
    label: string;
    custodyDefault: $Enums.WmCustodyFlag;
    shariahScreeningRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    clientAssets?: Prisma.WmClientAssetCreateNestedManyWithoutAssetClassInput;
};
export type AssetClassRegistryUncheckedCreateInput = {
    code: string;
    label: string;
    custodyDefault: $Enums.WmCustodyFlag;
    shariahScreeningRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    clientAssets?: Prisma.WmClientAssetUncheckedCreateNestedManyWithoutAssetClassInput;
};
export type AssetClassRegistryUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientAssets?: Prisma.WmClientAssetUpdateManyWithoutAssetClassNestedInput;
};
export type AssetClassRegistryUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientAssets?: Prisma.WmClientAssetUncheckedUpdateManyWithoutAssetClassNestedInput;
};
export type AssetClassRegistryCreateManyInput = {
    code: string;
    label: string;
    custodyDefault: $Enums.WmCustodyFlag;
    shariahScreeningRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type AssetClassRegistryUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetClassRegistryUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetClassRegistryCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    custodyDefault?: Prisma.SortOrder;
    shariahScreeningRule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetClassRegistryMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    custodyDefault?: Prisma.SortOrder;
    shariahScreeningRule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetClassRegistryMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    custodyDefault?: Prisma.SortOrder;
    shariahScreeningRule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetClassRegistryScalarRelationFilter = {
    is?: Prisma.AssetClassRegistryWhereInput;
    isNot?: Prisma.AssetClassRegistryWhereInput;
};
export type EnumWmCustodyFlagFieldUpdateOperationsInput = {
    set?: $Enums.WmCustodyFlag;
};
export type AssetClassRegistryCreateNestedOneWithoutClientAssetsInput = {
    create?: Prisma.XOR<Prisma.AssetClassRegistryCreateWithoutClientAssetsInput, Prisma.AssetClassRegistryUncheckedCreateWithoutClientAssetsInput>;
    connectOrCreate?: Prisma.AssetClassRegistryCreateOrConnectWithoutClientAssetsInput;
    connect?: Prisma.AssetClassRegistryWhereUniqueInput;
};
export type AssetClassRegistryUpdateOneRequiredWithoutClientAssetsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetClassRegistryCreateWithoutClientAssetsInput, Prisma.AssetClassRegistryUncheckedCreateWithoutClientAssetsInput>;
    connectOrCreate?: Prisma.AssetClassRegistryCreateOrConnectWithoutClientAssetsInput;
    upsert?: Prisma.AssetClassRegistryUpsertWithoutClientAssetsInput;
    connect?: Prisma.AssetClassRegistryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetClassRegistryUpdateToOneWithWhereWithoutClientAssetsInput, Prisma.AssetClassRegistryUpdateWithoutClientAssetsInput>, Prisma.AssetClassRegistryUncheckedUpdateWithoutClientAssetsInput>;
};
export type AssetClassRegistryCreateWithoutClientAssetsInput = {
    code: string;
    label: string;
    custodyDefault: $Enums.WmCustodyFlag;
    shariahScreeningRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type AssetClassRegistryUncheckedCreateWithoutClientAssetsInput = {
    code: string;
    label: string;
    custodyDefault: $Enums.WmCustodyFlag;
    shariahScreeningRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type AssetClassRegistryCreateOrConnectWithoutClientAssetsInput = {
    where: Prisma.AssetClassRegistryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetClassRegistryCreateWithoutClientAssetsInput, Prisma.AssetClassRegistryUncheckedCreateWithoutClientAssetsInput>;
};
export type AssetClassRegistryUpsertWithoutClientAssetsInput = {
    update: Prisma.XOR<Prisma.AssetClassRegistryUpdateWithoutClientAssetsInput, Prisma.AssetClassRegistryUncheckedUpdateWithoutClientAssetsInput>;
    create: Prisma.XOR<Prisma.AssetClassRegistryCreateWithoutClientAssetsInput, Prisma.AssetClassRegistryUncheckedCreateWithoutClientAssetsInput>;
    where?: Prisma.AssetClassRegistryWhereInput;
};
export type AssetClassRegistryUpdateToOneWithWhereWithoutClientAssetsInput = {
    where?: Prisma.AssetClassRegistryWhereInput;
    data: Prisma.XOR<Prisma.AssetClassRegistryUpdateWithoutClientAssetsInput, Prisma.AssetClassRegistryUncheckedUpdateWithoutClientAssetsInput>;
};
export type AssetClassRegistryUpdateWithoutClientAssetsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetClassRegistryUncheckedUpdateWithoutClientAssetsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyDefault?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    shariahScreeningRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetClassRegistryCountOutputType = {
    clientAssets: number;
};
export type AssetClassRegistryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientAssets?: boolean | AssetClassRegistryCountOutputTypeCountClientAssetsArgs;
};
export type AssetClassRegistryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistryCountOutputTypeSelect<ExtArgs> | null;
};
export type AssetClassRegistryCountOutputTypeCountClientAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmClientAssetWhereInput;
};
export type AssetClassRegistrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    custodyDefault?: boolean;
    shariahScreeningRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    clientAssets?: boolean | Prisma.AssetClassRegistry$clientAssetsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetClassRegistryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetClassRegistry"]>;
export type AssetClassRegistrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    custodyDefault?: boolean;
    shariahScreeningRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["assetClassRegistry"]>;
export type AssetClassRegistrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    custodyDefault?: boolean;
    shariahScreeningRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["assetClassRegistry"]>;
export type AssetClassRegistrySelectScalar = {
    code?: boolean;
    label?: boolean;
    custodyDefault?: boolean;
    shariahScreeningRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type AssetClassRegistryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "label" | "custodyDefault" | "shariahScreeningRule" | "isActive" | "createdAt", ExtArgs["result"]["assetClassRegistry"]>;
export type AssetClassRegistryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientAssets?: boolean | Prisma.AssetClassRegistry$clientAssetsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetClassRegistryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssetClassRegistryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AssetClassRegistryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AssetClassRegistryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetClassRegistry";
    objects: {
        clientAssets: Prisma.$WmClientAssetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        label: string;
        custodyDefault: $Enums.WmCustodyFlag;
        shariahScreeningRule: string | null;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["assetClassRegistry"]>;
    composites: {};
};
export type AssetClassRegistryGetPayload<S extends boolean | null | undefined | AssetClassRegistryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload, S>;
export type AssetClassRegistryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetClassRegistryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetClassRegistryCountAggregateInputType | true;
};
export interface AssetClassRegistryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetClassRegistry'];
        meta: {
            name: 'AssetClassRegistry';
        };
    };
    findUnique<T extends AssetClassRegistryFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetClassRegistryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetClassRegistryFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetClassRegistryFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetClassRegistryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetClassRegistryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetClassRegistryFindManyArgs>(args?: Prisma.SelectSubset<T, AssetClassRegistryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetClassRegistryCreateArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryCreateArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetClassRegistryCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetClassRegistryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetClassRegistryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetClassRegistryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetClassRegistryDeleteArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetClassRegistryUpdateArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetClassRegistryDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetClassRegistryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetClassRegistryUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetClassRegistryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetClassRegistryUpsertArgs>(args: Prisma.SelectSubset<T, AssetClassRegistryUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetClassRegistryClient<runtime.Types.Result.GetResult<Prisma.$AssetClassRegistryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetClassRegistryCountArgs>(args?: Prisma.Subset<T, AssetClassRegistryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetClassRegistryCountAggregateOutputType> : number>;
    aggregate<T extends AssetClassRegistryAggregateArgs>(args: Prisma.Subset<T, AssetClassRegistryAggregateArgs>): Prisma.PrismaPromise<GetAssetClassRegistryAggregateType<T>>;
    groupBy<T extends AssetClassRegistryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetClassRegistryGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetClassRegistryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetClassRegistryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetClassRegistryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetClassRegistryFieldRefs;
}
export interface Prisma__AssetClassRegistryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clientAssets<T extends Prisma.AssetClassRegistry$clientAssetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetClassRegistry$clientAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmClientAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetClassRegistryFieldRefs {
    readonly code: Prisma.FieldRef<"AssetClassRegistry", 'String'>;
    readonly label: Prisma.FieldRef<"AssetClassRegistry", 'String'>;
    readonly custodyDefault: Prisma.FieldRef<"AssetClassRegistry", 'WmCustodyFlag'>;
    readonly shariahScreeningRule: Prisma.FieldRef<"AssetClassRegistry", 'String'>;
    readonly isActive: Prisma.FieldRef<"AssetClassRegistry", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"AssetClassRegistry", 'DateTime'>;
}
export type AssetClassRegistryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    where: Prisma.AssetClassRegistryWhereUniqueInput;
};
export type AssetClassRegistryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    where: Prisma.AssetClassRegistryWhereUniqueInput;
};
export type AssetClassRegistryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    where?: Prisma.AssetClassRegistryWhereInput;
    orderBy?: Prisma.AssetClassRegistryOrderByWithRelationInput | Prisma.AssetClassRegistryOrderByWithRelationInput[];
    cursor?: Prisma.AssetClassRegistryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetClassRegistryScalarFieldEnum | Prisma.AssetClassRegistryScalarFieldEnum[];
};
export type AssetClassRegistryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    where?: Prisma.AssetClassRegistryWhereInput;
    orderBy?: Prisma.AssetClassRegistryOrderByWithRelationInput | Prisma.AssetClassRegistryOrderByWithRelationInput[];
    cursor?: Prisma.AssetClassRegistryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetClassRegistryScalarFieldEnum | Prisma.AssetClassRegistryScalarFieldEnum[];
};
export type AssetClassRegistryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    where?: Prisma.AssetClassRegistryWhereInput;
    orderBy?: Prisma.AssetClassRegistryOrderByWithRelationInput | Prisma.AssetClassRegistryOrderByWithRelationInput[];
    cursor?: Prisma.AssetClassRegistryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetClassRegistryScalarFieldEnum | Prisma.AssetClassRegistryScalarFieldEnum[];
};
export type AssetClassRegistryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetClassRegistryCreateInput, Prisma.AssetClassRegistryUncheckedCreateInput>;
};
export type AssetClassRegistryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetClassRegistryCreateManyInput | Prisma.AssetClassRegistryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetClassRegistryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    data: Prisma.AssetClassRegistryCreateManyInput | Prisma.AssetClassRegistryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetClassRegistryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetClassRegistryUpdateInput, Prisma.AssetClassRegistryUncheckedUpdateInput>;
    where: Prisma.AssetClassRegistryWhereUniqueInput;
};
export type AssetClassRegistryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetClassRegistryUpdateManyMutationInput, Prisma.AssetClassRegistryUncheckedUpdateManyInput>;
    where?: Prisma.AssetClassRegistryWhereInput;
    limit?: number;
};
export type AssetClassRegistryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetClassRegistryUpdateManyMutationInput, Prisma.AssetClassRegistryUncheckedUpdateManyInput>;
    where?: Prisma.AssetClassRegistryWhereInput;
    limit?: number;
};
export type AssetClassRegistryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    where: Prisma.AssetClassRegistryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetClassRegistryCreateInput, Prisma.AssetClassRegistryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetClassRegistryUpdateInput, Prisma.AssetClassRegistryUncheckedUpdateInput>;
};
export type AssetClassRegistryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
    where: Prisma.AssetClassRegistryWhereUniqueInput;
};
export type AssetClassRegistryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetClassRegistryWhereInput;
    limit?: number;
};
export type AssetClassRegistry$clientAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetInclude<ExtArgs> | null;
    where?: Prisma.WmClientAssetWhereInput;
    orderBy?: Prisma.WmClientAssetOrderByWithRelationInput | Prisma.WmClientAssetOrderByWithRelationInput[];
    cursor?: Prisma.WmClientAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmClientAssetScalarFieldEnum | Prisma.WmClientAssetScalarFieldEnum[];
};
export type AssetClassRegistryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetClassRegistrySelect<ExtArgs> | null;
    omit?: Prisma.AssetClassRegistryOmit<ExtArgs> | null;
    include?: Prisma.AssetClassRegistryInclude<ExtArgs> | null;
};
