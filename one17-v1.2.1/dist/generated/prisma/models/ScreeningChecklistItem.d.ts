import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScreeningChecklistItemModel = runtime.Types.Result.DefaultSelection<Prisma.$ScreeningChecklistItemPayload>;
export type AggregateScreeningChecklistItem = {
    _count: ScreeningChecklistItemCountAggregateOutputType | null;
    _avg: ScreeningChecklistItemAvgAggregateOutputType | null;
    _sum: ScreeningChecklistItemSumAggregateOutputType | null;
    _min: ScreeningChecklistItemMinAggregateOutputType | null;
    _max: ScreeningChecklistItemMaxAggregateOutputType | null;
};
export type ScreeningChecklistItemAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ScreeningChecklistItemSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ScreeningChecklistItemMinAggregateOutputType = {
    id: string | null;
    itemCode: string | null;
    description: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type ScreeningChecklistItemMaxAggregateOutputType = {
    id: string | null;
    itemCode: string | null;
    description: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type ScreeningChecklistItemCountAggregateOutputType = {
    id: number;
    itemCode: number;
    description: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type ScreeningChecklistItemAvgAggregateInputType = {
    sortOrder?: true;
};
export type ScreeningChecklistItemSumAggregateInputType = {
    sortOrder?: true;
};
export type ScreeningChecklistItemMinAggregateInputType = {
    id?: true;
    itemCode?: true;
    description?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type ScreeningChecklistItemMaxAggregateInputType = {
    id?: true;
    itemCode?: true;
    description?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type ScreeningChecklistItemCountAggregateInputType = {
    id?: true;
    itemCode?: true;
    description?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type ScreeningChecklistItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningChecklistItemWhereInput;
    orderBy?: Prisma.ScreeningChecklistItemOrderByWithRelationInput | Prisma.ScreeningChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScreeningChecklistItemCountAggregateInputType;
    _avg?: ScreeningChecklistItemAvgAggregateInputType;
    _sum?: ScreeningChecklistItemSumAggregateInputType;
    _min?: ScreeningChecklistItemMinAggregateInputType;
    _max?: ScreeningChecklistItemMaxAggregateInputType;
};
export type GetScreeningChecklistItemAggregateType<T extends ScreeningChecklistItemAggregateArgs> = {
    [P in keyof T & keyof AggregateScreeningChecklistItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScreeningChecklistItem[P]> : Prisma.GetScalarType<T[P], AggregateScreeningChecklistItem[P]>;
};
export type ScreeningChecklistItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningChecklistItemWhereInput;
    orderBy?: Prisma.ScreeningChecklistItemOrderByWithAggregationInput | Prisma.ScreeningChecklistItemOrderByWithAggregationInput[];
    by: Prisma.ScreeningChecklistItemScalarFieldEnum[] | Prisma.ScreeningChecklistItemScalarFieldEnum;
    having?: Prisma.ScreeningChecklistItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScreeningChecklistItemCountAggregateInputType | true;
    _avg?: ScreeningChecklistItemAvgAggregateInputType;
    _sum?: ScreeningChecklistItemSumAggregateInputType;
    _min?: ScreeningChecklistItemMinAggregateInputType;
    _max?: ScreeningChecklistItemMaxAggregateInputType;
};
export type ScreeningChecklistItemGroupByOutputType = {
    id: string;
    itemCode: string;
    description: string;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    _count: ScreeningChecklistItemCountAggregateOutputType | null;
    _avg: ScreeningChecklistItemAvgAggregateOutputType | null;
    _sum: ScreeningChecklistItemSumAggregateOutputType | null;
    _min: ScreeningChecklistItemMinAggregateOutputType | null;
    _max: ScreeningChecklistItemMaxAggregateOutputType | null;
};
export type GetScreeningChecklistItemGroupByPayload<T extends ScreeningChecklistItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScreeningChecklistItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScreeningChecklistItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScreeningChecklistItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScreeningChecklistItemGroupByOutputType[P]>;
}>>;
export type ScreeningChecklistItemWhereInput = {
    AND?: Prisma.ScreeningChecklistItemWhereInput | Prisma.ScreeningChecklistItemWhereInput[];
    OR?: Prisma.ScreeningChecklistItemWhereInput[];
    NOT?: Prisma.ScreeningChecklistItemWhereInput | Prisma.ScreeningChecklistItemWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningChecklistItem"> | string;
    itemCode?: Prisma.StringFilter<"ScreeningChecklistItem"> | string;
    description?: Prisma.StringFilter<"ScreeningChecklistItem"> | string;
    sortOrder?: Prisma.IntFilter<"ScreeningChecklistItem"> | number;
    isActive?: Prisma.BoolFilter<"ScreeningChecklistItem"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ScreeningChecklistItem"> | Date | string;
};
export type ScreeningChecklistItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    itemCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningChecklistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    itemCode?: string;
    AND?: Prisma.ScreeningChecklistItemWhereInput | Prisma.ScreeningChecklistItemWhereInput[];
    OR?: Prisma.ScreeningChecklistItemWhereInput[];
    NOT?: Prisma.ScreeningChecklistItemWhereInput | Prisma.ScreeningChecklistItemWhereInput[];
    description?: Prisma.StringFilter<"ScreeningChecklistItem"> | string;
    sortOrder?: Prisma.IntFilter<"ScreeningChecklistItem"> | number;
    isActive?: Prisma.BoolFilter<"ScreeningChecklistItem"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ScreeningChecklistItem"> | Date | string;
}, "id" | "itemCode">;
export type ScreeningChecklistItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    itemCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScreeningChecklistItemCountOrderByAggregateInput;
    _avg?: Prisma.ScreeningChecklistItemAvgOrderByAggregateInput;
    _max?: Prisma.ScreeningChecklistItemMaxOrderByAggregateInput;
    _min?: Prisma.ScreeningChecklistItemMinOrderByAggregateInput;
    _sum?: Prisma.ScreeningChecklistItemSumOrderByAggregateInput;
};
export type ScreeningChecklistItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScreeningChecklistItemScalarWhereWithAggregatesInput | Prisma.ScreeningChecklistItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScreeningChecklistItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScreeningChecklistItemScalarWhereWithAggregatesInput | Prisma.ScreeningChecklistItemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ScreeningChecklistItem"> | string;
    itemCode?: Prisma.StringWithAggregatesFilter<"ScreeningChecklistItem"> | string;
    description?: Prisma.StringWithAggregatesFilter<"ScreeningChecklistItem"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ScreeningChecklistItem"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"ScreeningChecklistItem"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScreeningChecklistItem"> | Date | string;
};
export type ScreeningChecklistItemCreateInput = {
    id?: string;
    itemCode: string;
    description: string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ScreeningChecklistItemUncheckedCreateInput = {
    id?: string;
    itemCode: string;
    description: string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ScreeningChecklistItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningChecklistItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningChecklistItemCreateManyInput = {
    id?: string;
    itemCode: string;
    description: string;
    sortOrder: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ScreeningChecklistItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningChecklistItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningChecklistItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningChecklistItemAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ScreeningChecklistItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningChecklistItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    itemCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningChecklistItemSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ScreeningChecklistItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemCode?: boolean;
    description?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["screeningChecklistItem"]>;
export type ScreeningChecklistItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemCode?: boolean;
    description?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["screeningChecklistItem"]>;
export type ScreeningChecklistItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    itemCode?: boolean;
    description?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["screeningChecklistItem"]>;
export type ScreeningChecklistItemSelectScalar = {
    id?: boolean;
    itemCode?: boolean;
    description?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type ScreeningChecklistItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "itemCode" | "description" | "sortOrder" | "isActive" | "createdAt", ExtArgs["result"]["screeningChecklistItem"]>;
export type $ScreeningChecklistItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScreeningChecklistItem";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        itemCode: string;
        description: string;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["screeningChecklistItem"]>;
    composites: {};
};
export type ScreeningChecklistItemGetPayload<S extends boolean | null | undefined | ScreeningChecklistItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload, S>;
export type ScreeningChecklistItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScreeningChecklistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScreeningChecklistItemCountAggregateInputType | true;
};
export interface ScreeningChecklistItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScreeningChecklistItem'];
        meta: {
            name: 'ScreeningChecklistItem';
        };
    };
    findUnique<T extends ScreeningChecklistItemFindUniqueArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScreeningChecklistItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScreeningChecklistItemFindFirstArgs>(args?: Prisma.SelectSubset<T, ScreeningChecklistItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScreeningChecklistItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScreeningChecklistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScreeningChecklistItemFindManyArgs>(args?: Prisma.SelectSubset<T, ScreeningChecklistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScreeningChecklistItemCreateArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemCreateArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScreeningChecklistItemCreateManyArgs>(args?: Prisma.SelectSubset<T, ScreeningChecklistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScreeningChecklistItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScreeningChecklistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScreeningChecklistItemDeleteArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemDeleteArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScreeningChecklistItemUpdateArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemUpdateArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScreeningChecklistItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScreeningChecklistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScreeningChecklistItemUpdateManyArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScreeningChecklistItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScreeningChecklistItemUpsertArgs>(args: Prisma.SelectSubset<T, ScreeningChecklistItemUpsertArgs<ExtArgs>>): Prisma.Prisma__ScreeningChecklistItemClient<runtime.Types.Result.GetResult<Prisma.$ScreeningChecklistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScreeningChecklistItemCountArgs>(args?: Prisma.Subset<T, ScreeningChecklistItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScreeningChecklistItemCountAggregateOutputType> : number>;
    aggregate<T extends ScreeningChecklistItemAggregateArgs>(args: Prisma.Subset<T, ScreeningChecklistItemAggregateArgs>): Prisma.PrismaPromise<GetScreeningChecklistItemAggregateType<T>>;
    groupBy<T extends ScreeningChecklistItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScreeningChecklistItemGroupByArgs['orderBy'];
    } : {
        orderBy?: ScreeningChecklistItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScreeningChecklistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningChecklistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScreeningChecklistItemFieldRefs;
}
export interface Prisma__ScreeningChecklistItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScreeningChecklistItemFieldRefs {
    readonly id: Prisma.FieldRef<"ScreeningChecklistItem", 'String'>;
    readonly itemCode: Prisma.FieldRef<"ScreeningChecklistItem", 'String'>;
    readonly description: Prisma.FieldRef<"ScreeningChecklistItem", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"ScreeningChecklistItem", 'Int'>;
    readonly isActive: Prisma.FieldRef<"ScreeningChecklistItem", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ScreeningChecklistItem", 'DateTime'>;
}
export type ScreeningChecklistItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    where: Prisma.ScreeningChecklistItemWhereUniqueInput;
};
export type ScreeningChecklistItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    where: Prisma.ScreeningChecklistItemWhereUniqueInput;
};
export type ScreeningChecklistItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    where?: Prisma.ScreeningChecklistItemWhereInput;
    orderBy?: Prisma.ScreeningChecklistItemOrderByWithRelationInput | Prisma.ScreeningChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningChecklistItemScalarFieldEnum | Prisma.ScreeningChecklistItemScalarFieldEnum[];
};
export type ScreeningChecklistItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    where?: Prisma.ScreeningChecklistItemWhereInput;
    orderBy?: Prisma.ScreeningChecklistItemOrderByWithRelationInput | Prisma.ScreeningChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningChecklistItemScalarFieldEnum | Prisma.ScreeningChecklistItemScalarFieldEnum[];
};
export type ScreeningChecklistItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    where?: Prisma.ScreeningChecklistItemWhereInput;
    orderBy?: Prisma.ScreeningChecklistItemOrderByWithRelationInput | Prisma.ScreeningChecklistItemOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningChecklistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningChecklistItemScalarFieldEnum | Prisma.ScreeningChecklistItemScalarFieldEnum[];
};
export type ScreeningChecklistItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningChecklistItemCreateInput, Prisma.ScreeningChecklistItemUncheckedCreateInput>;
};
export type ScreeningChecklistItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScreeningChecklistItemCreateManyInput | Prisma.ScreeningChecklistItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningChecklistItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    data: Prisma.ScreeningChecklistItemCreateManyInput | Prisma.ScreeningChecklistItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningChecklistItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningChecklistItemUpdateInput, Prisma.ScreeningChecklistItemUncheckedUpdateInput>;
    where: Prisma.ScreeningChecklistItemWhereUniqueInput;
};
export type ScreeningChecklistItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScreeningChecklistItemUpdateManyMutationInput, Prisma.ScreeningChecklistItemUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningChecklistItemWhereInput;
    limit?: number;
};
export type ScreeningChecklistItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningChecklistItemUpdateManyMutationInput, Prisma.ScreeningChecklistItemUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningChecklistItemWhereInput;
    limit?: number;
};
export type ScreeningChecklistItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    where: Prisma.ScreeningChecklistItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningChecklistItemCreateInput, Prisma.ScreeningChecklistItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScreeningChecklistItemUpdateInput, Prisma.ScreeningChecklistItemUncheckedUpdateInput>;
};
export type ScreeningChecklistItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
    where: Prisma.ScreeningChecklistItemWhereUniqueInput;
};
export type ScreeningChecklistItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningChecklistItemWhereInput;
    limit?: number;
};
export type ScreeningChecklistItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningChecklistItemSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningChecklistItemOmit<ExtArgs> | null;
};
