import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DataPointCatalogModel = runtime.Types.Result.DefaultSelection<Prisma.$DataPointCatalogPayload>;
export type AggregateDataPointCatalog = {
    _count: DataPointCatalogCountAggregateOutputType | null;
    _min: DataPointCatalogMinAggregateOutputType | null;
    _max: DataPointCatalogMaxAggregateOutputType | null;
};
export type DataPointCatalogMinAggregateOutputType = {
    code: string | null;
    label: string | null;
    description: string | null;
    requiredFunctionCode: string | null;
    requiredLevel: string | null;
    sourceType: $Enums.DataPointSourceType | null;
    sourceRef: string | null;
    containsPersonalData: boolean | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
};
export type DataPointCatalogMaxAggregateOutputType = {
    code: string | null;
    label: string | null;
    description: string | null;
    requiredFunctionCode: string | null;
    requiredLevel: string | null;
    sourceType: $Enums.DataPointSourceType | null;
    sourceRef: string | null;
    containsPersonalData: boolean | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
};
export type DataPointCatalogCountAggregateOutputType = {
    code: number;
    label: number;
    description: number;
    requiredFunctionCode: number;
    requiredLevel: number;
    sourceType: number;
    sourceRef: number;
    containsPersonalData: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type DataPointCatalogMinAggregateInputType = {
    code?: true;
    label?: true;
    description?: true;
    requiredFunctionCode?: true;
    requiredLevel?: true;
    sourceType?: true;
    sourceRef?: true;
    containsPersonalData?: true;
    status?: true;
    createdAt?: true;
};
export type DataPointCatalogMaxAggregateInputType = {
    code?: true;
    label?: true;
    description?: true;
    requiredFunctionCode?: true;
    requiredLevel?: true;
    sourceType?: true;
    sourceRef?: true;
    containsPersonalData?: true;
    status?: true;
    createdAt?: true;
};
export type DataPointCatalogCountAggregateInputType = {
    code?: true;
    label?: true;
    description?: true;
    requiredFunctionCode?: true;
    requiredLevel?: true;
    sourceType?: true;
    sourceRef?: true;
    containsPersonalData?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type DataPointCatalogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DataPointCatalogWhereInput;
    orderBy?: Prisma.DataPointCatalogOrderByWithRelationInput | Prisma.DataPointCatalogOrderByWithRelationInput[];
    cursor?: Prisma.DataPointCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DataPointCatalogCountAggregateInputType;
    _min?: DataPointCatalogMinAggregateInputType;
    _max?: DataPointCatalogMaxAggregateInputType;
};
export type GetDataPointCatalogAggregateType<T extends DataPointCatalogAggregateArgs> = {
    [P in keyof T & keyof AggregateDataPointCatalog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDataPointCatalog[P]> : Prisma.GetScalarType<T[P], AggregateDataPointCatalog[P]>;
};
export type DataPointCatalogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DataPointCatalogWhereInput;
    orderBy?: Prisma.DataPointCatalogOrderByWithAggregationInput | Prisma.DataPointCatalogOrderByWithAggregationInput[];
    by: Prisma.DataPointCatalogScalarFieldEnum[] | Prisma.DataPointCatalogScalarFieldEnum;
    having?: Prisma.DataPointCatalogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DataPointCatalogCountAggregateInputType | true;
    _min?: DataPointCatalogMinAggregateInputType;
    _max?: DataPointCatalogMaxAggregateInputType;
};
export type DataPointCatalogGroupByOutputType = {
    code: string;
    label: string;
    description: string;
    requiredFunctionCode: string;
    requiredLevel: string;
    sourceType: $Enums.DataPointSourceType;
    sourceRef: string;
    containsPersonalData: boolean;
    status: $Enums.GovernedItemStatus;
    createdAt: Date;
    _count: DataPointCatalogCountAggregateOutputType | null;
    _min: DataPointCatalogMinAggregateOutputType | null;
    _max: DataPointCatalogMaxAggregateOutputType | null;
};
export type GetDataPointCatalogGroupByPayload<T extends DataPointCatalogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DataPointCatalogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DataPointCatalogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DataPointCatalogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DataPointCatalogGroupByOutputType[P]>;
}>>;
export type DataPointCatalogWhereInput = {
    AND?: Prisma.DataPointCatalogWhereInput | Prisma.DataPointCatalogWhereInput[];
    OR?: Prisma.DataPointCatalogWhereInput[];
    NOT?: Prisma.DataPointCatalogWhereInput | Prisma.DataPointCatalogWhereInput[];
    code?: Prisma.StringFilter<"DataPointCatalog"> | string;
    label?: Prisma.StringFilter<"DataPointCatalog"> | string;
    description?: Prisma.StringFilter<"DataPointCatalog"> | string;
    requiredFunctionCode?: Prisma.StringFilter<"DataPointCatalog"> | string;
    requiredLevel?: Prisma.StringFilter<"DataPointCatalog"> | string;
    sourceType?: Prisma.EnumDataPointSourceTypeFilter<"DataPointCatalog"> | $Enums.DataPointSourceType;
    sourceRef?: Prisma.StringFilter<"DataPointCatalog"> | string;
    containsPersonalData?: Prisma.BoolFilter<"DataPointCatalog"> | boolean;
    status?: Prisma.EnumGovernedItemStatusFilter<"DataPointCatalog"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"DataPointCatalog"> | Date | string;
};
export type DataPointCatalogOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiredLevel?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    containsPersonalData?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DataPointCatalogWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.DataPointCatalogWhereInput | Prisma.DataPointCatalogWhereInput[];
    OR?: Prisma.DataPointCatalogWhereInput[];
    NOT?: Prisma.DataPointCatalogWhereInput | Prisma.DataPointCatalogWhereInput[];
    label?: Prisma.StringFilter<"DataPointCatalog"> | string;
    description?: Prisma.StringFilter<"DataPointCatalog"> | string;
    requiredFunctionCode?: Prisma.StringFilter<"DataPointCatalog"> | string;
    requiredLevel?: Prisma.StringFilter<"DataPointCatalog"> | string;
    sourceType?: Prisma.EnumDataPointSourceTypeFilter<"DataPointCatalog"> | $Enums.DataPointSourceType;
    sourceRef?: Prisma.StringFilter<"DataPointCatalog"> | string;
    containsPersonalData?: Prisma.BoolFilter<"DataPointCatalog"> | boolean;
    status?: Prisma.EnumGovernedItemStatusFilter<"DataPointCatalog"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"DataPointCatalog"> | Date | string;
}, "code">;
export type DataPointCatalogOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiredLevel?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    containsPersonalData?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DataPointCatalogCountOrderByAggregateInput;
    _max?: Prisma.DataPointCatalogMaxOrderByAggregateInput;
    _min?: Prisma.DataPointCatalogMinOrderByAggregateInput;
};
export type DataPointCatalogScalarWhereWithAggregatesInput = {
    AND?: Prisma.DataPointCatalogScalarWhereWithAggregatesInput | Prisma.DataPointCatalogScalarWhereWithAggregatesInput[];
    OR?: Prisma.DataPointCatalogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DataPointCatalogScalarWhereWithAggregatesInput | Prisma.DataPointCatalogScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"DataPointCatalog"> | string;
    label?: Prisma.StringWithAggregatesFilter<"DataPointCatalog"> | string;
    description?: Prisma.StringWithAggregatesFilter<"DataPointCatalog"> | string;
    requiredFunctionCode?: Prisma.StringWithAggregatesFilter<"DataPointCatalog"> | string;
    requiredLevel?: Prisma.StringWithAggregatesFilter<"DataPointCatalog"> | string;
    sourceType?: Prisma.EnumDataPointSourceTypeWithAggregatesFilter<"DataPointCatalog"> | $Enums.DataPointSourceType;
    sourceRef?: Prisma.StringWithAggregatesFilter<"DataPointCatalog"> | string;
    containsPersonalData?: Prisma.BoolWithAggregatesFilter<"DataPointCatalog"> | boolean;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"DataPointCatalog"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DataPointCatalog"> | Date | string;
};
export type DataPointCatalogCreateInput = {
    code: string;
    label: string;
    description: string;
    requiredFunctionCode: string;
    requiredLevel: string;
    sourceType: $Enums.DataPointSourceType;
    sourceRef: string;
    containsPersonalData?: boolean;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type DataPointCatalogUncheckedCreateInput = {
    code: string;
    label: string;
    description: string;
    requiredFunctionCode: string;
    requiredLevel: string;
    sourceType: $Enums.DataPointSourceType;
    sourceRef: string;
    containsPersonalData?: boolean;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type DataPointCatalogUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceType?: Prisma.EnumDataPointSourceTypeFieldUpdateOperationsInput | $Enums.DataPointSourceType;
    sourceRef?: Prisma.StringFieldUpdateOperationsInput | string;
    containsPersonalData?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataPointCatalogUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceType?: Prisma.EnumDataPointSourceTypeFieldUpdateOperationsInput | $Enums.DataPointSourceType;
    sourceRef?: Prisma.StringFieldUpdateOperationsInput | string;
    containsPersonalData?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataPointCatalogCreateManyInput = {
    code: string;
    label: string;
    description: string;
    requiredFunctionCode: string;
    requiredLevel: string;
    sourceType: $Enums.DataPointSourceType;
    sourceRef: string;
    containsPersonalData?: boolean;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type DataPointCatalogUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceType?: Prisma.EnumDataPointSourceTypeFieldUpdateOperationsInput | $Enums.DataPointSourceType;
    sourceRef?: Prisma.StringFieldUpdateOperationsInput | string;
    containsPersonalData?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataPointCatalogUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiredLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceType?: Prisma.EnumDataPointSourceTypeFieldUpdateOperationsInput | $Enums.DataPointSourceType;
    sourceRef?: Prisma.StringFieldUpdateOperationsInput | string;
    containsPersonalData?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataPointCatalogCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiredLevel?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    containsPersonalData?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DataPointCatalogMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiredLevel?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    containsPersonalData?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DataPointCatalogMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiredLevel?: Prisma.SortOrder;
    sourceType?: Prisma.SortOrder;
    sourceRef?: Prisma.SortOrder;
    containsPersonalData?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnumDataPointSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DataPointSourceType;
};
export type DataPointCatalogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    description?: boolean;
    requiredFunctionCode?: boolean;
    requiredLevel?: boolean;
    sourceType?: boolean;
    sourceRef?: boolean;
    containsPersonalData?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dataPointCatalog"]>;
export type DataPointCatalogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    description?: boolean;
    requiredFunctionCode?: boolean;
    requiredLevel?: boolean;
    sourceType?: boolean;
    sourceRef?: boolean;
    containsPersonalData?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dataPointCatalog"]>;
export type DataPointCatalogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    description?: boolean;
    requiredFunctionCode?: boolean;
    requiredLevel?: boolean;
    sourceType?: boolean;
    sourceRef?: boolean;
    containsPersonalData?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dataPointCatalog"]>;
export type DataPointCatalogSelectScalar = {
    code?: boolean;
    label?: boolean;
    description?: boolean;
    requiredFunctionCode?: boolean;
    requiredLevel?: boolean;
    sourceType?: boolean;
    sourceRef?: boolean;
    containsPersonalData?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type DataPointCatalogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "label" | "description" | "requiredFunctionCode" | "requiredLevel" | "sourceType" | "sourceRef" | "containsPersonalData" | "status" | "createdAt", ExtArgs["result"]["dataPointCatalog"]>;
export type $DataPointCatalogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DataPointCatalog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        label: string;
        description: string;
        requiredFunctionCode: string;
        requiredLevel: string;
        sourceType: $Enums.DataPointSourceType;
        sourceRef: string;
        containsPersonalData: boolean;
        status: $Enums.GovernedItemStatus;
        createdAt: Date;
    }, ExtArgs["result"]["dataPointCatalog"]>;
    composites: {};
};
export type DataPointCatalogGetPayload<S extends boolean | null | undefined | DataPointCatalogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload, S>;
export type DataPointCatalogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DataPointCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DataPointCatalogCountAggregateInputType | true;
};
export interface DataPointCatalogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DataPointCatalog'];
        meta: {
            name: 'DataPointCatalog';
        };
    };
    findUnique<T extends DataPointCatalogFindUniqueArgs>(args: Prisma.SelectSubset<T, DataPointCatalogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DataPointCatalogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DataPointCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DataPointCatalogFindFirstArgs>(args?: Prisma.SelectSubset<T, DataPointCatalogFindFirstArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DataPointCatalogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DataPointCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DataPointCatalogFindManyArgs>(args?: Prisma.SelectSubset<T, DataPointCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DataPointCatalogCreateArgs>(args: Prisma.SelectSubset<T, DataPointCatalogCreateArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DataPointCatalogCreateManyArgs>(args?: Prisma.SelectSubset<T, DataPointCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DataPointCatalogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DataPointCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DataPointCatalogDeleteArgs>(args: Prisma.SelectSubset<T, DataPointCatalogDeleteArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DataPointCatalogUpdateArgs>(args: Prisma.SelectSubset<T, DataPointCatalogUpdateArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DataPointCatalogDeleteManyArgs>(args?: Prisma.SelectSubset<T, DataPointCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DataPointCatalogUpdateManyArgs>(args: Prisma.SelectSubset<T, DataPointCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DataPointCatalogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DataPointCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DataPointCatalogUpsertArgs>(args: Prisma.SelectSubset<T, DataPointCatalogUpsertArgs<ExtArgs>>): Prisma.Prisma__DataPointCatalogClient<runtime.Types.Result.GetResult<Prisma.$DataPointCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DataPointCatalogCountArgs>(args?: Prisma.Subset<T, DataPointCatalogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DataPointCatalogCountAggregateOutputType> : number>;
    aggregate<T extends DataPointCatalogAggregateArgs>(args: Prisma.Subset<T, DataPointCatalogAggregateArgs>): Prisma.PrismaPromise<GetDataPointCatalogAggregateType<T>>;
    groupBy<T extends DataPointCatalogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DataPointCatalogGroupByArgs['orderBy'];
    } : {
        orderBy?: DataPointCatalogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DataPointCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPointCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DataPointCatalogFieldRefs;
}
export interface Prisma__DataPointCatalogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DataPointCatalogFieldRefs {
    readonly code: Prisma.FieldRef<"DataPointCatalog", 'String'>;
    readonly label: Prisma.FieldRef<"DataPointCatalog", 'String'>;
    readonly description: Prisma.FieldRef<"DataPointCatalog", 'String'>;
    readonly requiredFunctionCode: Prisma.FieldRef<"DataPointCatalog", 'String'>;
    readonly requiredLevel: Prisma.FieldRef<"DataPointCatalog", 'String'>;
    readonly sourceType: Prisma.FieldRef<"DataPointCatalog", 'DataPointSourceType'>;
    readonly sourceRef: Prisma.FieldRef<"DataPointCatalog", 'String'>;
    readonly containsPersonalData: Prisma.FieldRef<"DataPointCatalog", 'Boolean'>;
    readonly status: Prisma.FieldRef<"DataPointCatalog", 'GovernedItemStatus'>;
    readonly createdAt: Prisma.FieldRef<"DataPointCatalog", 'DateTime'>;
}
export type DataPointCatalogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    where: Prisma.DataPointCatalogWhereUniqueInput;
};
export type DataPointCatalogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    where: Prisma.DataPointCatalogWhereUniqueInput;
};
export type DataPointCatalogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    where?: Prisma.DataPointCatalogWhereInput;
    orderBy?: Prisma.DataPointCatalogOrderByWithRelationInput | Prisma.DataPointCatalogOrderByWithRelationInput[];
    cursor?: Prisma.DataPointCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DataPointCatalogScalarFieldEnum | Prisma.DataPointCatalogScalarFieldEnum[];
};
export type DataPointCatalogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    where?: Prisma.DataPointCatalogWhereInput;
    orderBy?: Prisma.DataPointCatalogOrderByWithRelationInput | Prisma.DataPointCatalogOrderByWithRelationInput[];
    cursor?: Prisma.DataPointCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DataPointCatalogScalarFieldEnum | Prisma.DataPointCatalogScalarFieldEnum[];
};
export type DataPointCatalogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    where?: Prisma.DataPointCatalogWhereInput;
    orderBy?: Prisma.DataPointCatalogOrderByWithRelationInput | Prisma.DataPointCatalogOrderByWithRelationInput[];
    cursor?: Prisma.DataPointCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DataPointCatalogScalarFieldEnum | Prisma.DataPointCatalogScalarFieldEnum[];
};
export type DataPointCatalogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DataPointCatalogCreateInput, Prisma.DataPointCatalogUncheckedCreateInput>;
};
export type DataPointCatalogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DataPointCatalogCreateManyInput | Prisma.DataPointCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DataPointCatalogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    data: Prisma.DataPointCatalogCreateManyInput | Prisma.DataPointCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DataPointCatalogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DataPointCatalogUpdateInput, Prisma.DataPointCatalogUncheckedUpdateInput>;
    where: Prisma.DataPointCatalogWhereUniqueInput;
};
export type DataPointCatalogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DataPointCatalogUpdateManyMutationInput, Prisma.DataPointCatalogUncheckedUpdateManyInput>;
    where?: Prisma.DataPointCatalogWhereInput;
    limit?: number;
};
export type DataPointCatalogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DataPointCatalogUpdateManyMutationInput, Prisma.DataPointCatalogUncheckedUpdateManyInput>;
    where?: Prisma.DataPointCatalogWhereInput;
    limit?: number;
};
export type DataPointCatalogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    where: Prisma.DataPointCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.DataPointCatalogCreateInput, Prisma.DataPointCatalogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DataPointCatalogUpdateInput, Prisma.DataPointCatalogUncheckedUpdateInput>;
};
export type DataPointCatalogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
    where: Prisma.DataPointCatalogWhereUniqueInput;
};
export type DataPointCatalogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DataPointCatalogWhereInput;
    limit?: number;
};
export type DataPointCatalogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataPointCatalogSelect<ExtArgs> | null;
    omit?: Prisma.DataPointCatalogOmit<ExtArgs> | null;
};
