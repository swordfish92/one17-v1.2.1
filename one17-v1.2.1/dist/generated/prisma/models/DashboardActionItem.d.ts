import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DashboardActionItemModel = runtime.Types.Result.DefaultSelection<Prisma.$DashboardActionItemPayload>;
export type AggregateDashboardActionItem = {
    _count: DashboardActionItemCountAggregateOutputType | null;
    _min: DashboardActionItemMinAggregateOutputType | null;
    _max: DashboardActionItemMaxAggregateOutputType | null;
};
export type DashboardActionItemMinAggregateOutputType = {
    id: string | null;
    audience: string | null;
    title: string | null;
    detail: string | null;
    owner: string | null;
    dueLabel: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type DashboardActionItemMaxAggregateOutputType = {
    id: string | null;
    audience: string | null;
    title: string | null;
    detail: string | null;
    owner: string | null;
    dueLabel: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type DashboardActionItemCountAggregateOutputType = {
    id: number;
    audience: number;
    title: number;
    detail: number;
    owner: number;
    dueLabel: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type DashboardActionItemMinAggregateInputType = {
    id?: true;
    audience?: true;
    title?: true;
    detail?: true;
    owner?: true;
    dueLabel?: true;
    isActive?: true;
    createdAt?: true;
};
export type DashboardActionItemMaxAggregateInputType = {
    id?: true;
    audience?: true;
    title?: true;
    detail?: true;
    owner?: true;
    dueLabel?: true;
    isActive?: true;
    createdAt?: true;
};
export type DashboardActionItemCountAggregateInputType = {
    id?: true;
    audience?: true;
    title?: true;
    detail?: true;
    owner?: true;
    dueLabel?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type DashboardActionItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardActionItemWhereInput;
    orderBy?: Prisma.DashboardActionItemOrderByWithRelationInput | Prisma.DashboardActionItemOrderByWithRelationInput[];
    cursor?: Prisma.DashboardActionItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DashboardActionItemCountAggregateInputType;
    _min?: DashboardActionItemMinAggregateInputType;
    _max?: DashboardActionItemMaxAggregateInputType;
};
export type GetDashboardActionItemAggregateType<T extends DashboardActionItemAggregateArgs> = {
    [P in keyof T & keyof AggregateDashboardActionItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDashboardActionItem[P]> : Prisma.GetScalarType<T[P], AggregateDashboardActionItem[P]>;
};
export type DashboardActionItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardActionItemWhereInput;
    orderBy?: Prisma.DashboardActionItemOrderByWithAggregationInput | Prisma.DashboardActionItemOrderByWithAggregationInput[];
    by: Prisma.DashboardActionItemScalarFieldEnum[] | Prisma.DashboardActionItemScalarFieldEnum;
    having?: Prisma.DashboardActionItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DashboardActionItemCountAggregateInputType | true;
    _min?: DashboardActionItemMinAggregateInputType;
    _max?: DashboardActionItemMaxAggregateInputType;
};
export type DashboardActionItemGroupByOutputType = {
    id: string;
    audience: string;
    title: string;
    detail: string;
    owner: string;
    dueLabel: string;
    isActive: boolean;
    createdAt: Date;
    _count: DashboardActionItemCountAggregateOutputType | null;
    _min: DashboardActionItemMinAggregateOutputType | null;
    _max: DashboardActionItemMaxAggregateOutputType | null;
};
export type GetDashboardActionItemGroupByPayload<T extends DashboardActionItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DashboardActionItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DashboardActionItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DashboardActionItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DashboardActionItemGroupByOutputType[P]>;
}>>;
export type DashboardActionItemWhereInput = {
    AND?: Prisma.DashboardActionItemWhereInput | Prisma.DashboardActionItemWhereInput[];
    OR?: Prisma.DashboardActionItemWhereInput[];
    NOT?: Prisma.DashboardActionItemWhereInput | Prisma.DashboardActionItemWhereInput[];
    id?: Prisma.UuidFilter<"DashboardActionItem"> | string;
    audience?: Prisma.StringFilter<"DashboardActionItem"> | string;
    title?: Prisma.StringFilter<"DashboardActionItem"> | string;
    detail?: Prisma.StringFilter<"DashboardActionItem"> | string;
    owner?: Prisma.StringFilter<"DashboardActionItem"> | string;
    dueLabel?: Prisma.StringFilter<"DashboardActionItem"> | string;
    isActive?: Prisma.BoolFilter<"DashboardActionItem"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DashboardActionItem"> | Date | string;
};
export type DashboardActionItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    detail?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardActionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DashboardActionItemWhereInput | Prisma.DashboardActionItemWhereInput[];
    OR?: Prisma.DashboardActionItemWhereInput[];
    NOT?: Prisma.DashboardActionItemWhereInput | Prisma.DashboardActionItemWhereInput[];
    audience?: Prisma.StringFilter<"DashboardActionItem"> | string;
    title?: Prisma.StringFilter<"DashboardActionItem"> | string;
    detail?: Prisma.StringFilter<"DashboardActionItem"> | string;
    owner?: Prisma.StringFilter<"DashboardActionItem"> | string;
    dueLabel?: Prisma.StringFilter<"DashboardActionItem"> | string;
    isActive?: Prisma.BoolFilter<"DashboardActionItem"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DashboardActionItem"> | Date | string;
}, "id">;
export type DashboardActionItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    detail?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DashboardActionItemCountOrderByAggregateInput;
    _max?: Prisma.DashboardActionItemMaxOrderByAggregateInput;
    _min?: Prisma.DashboardActionItemMinOrderByAggregateInput;
};
export type DashboardActionItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.DashboardActionItemScalarWhereWithAggregatesInput | Prisma.DashboardActionItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.DashboardActionItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DashboardActionItemScalarWhereWithAggregatesInput | Prisma.DashboardActionItemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DashboardActionItem"> | string;
    audience?: Prisma.StringWithAggregatesFilter<"DashboardActionItem"> | string;
    title?: Prisma.StringWithAggregatesFilter<"DashboardActionItem"> | string;
    detail?: Prisma.StringWithAggregatesFilter<"DashboardActionItem"> | string;
    owner?: Prisma.StringWithAggregatesFilter<"DashboardActionItem"> | string;
    dueLabel?: Prisma.StringWithAggregatesFilter<"DashboardActionItem"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"DashboardActionItem"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DashboardActionItem"> | Date | string;
};
export type DashboardActionItemCreateInput = {
    id?: string;
    audience: string;
    title: string;
    detail: string;
    owner: string;
    dueLabel: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type DashboardActionItemUncheckedCreateInput = {
    id?: string;
    audience: string;
    title: string;
    detail: string;
    owner: string;
    dueLabel: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type DashboardActionItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    detail?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    dueLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardActionItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    detail?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    dueLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardActionItemCreateManyInput = {
    id?: string;
    audience: string;
    title: string;
    detail: string;
    owner: string;
    dueLabel: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type DashboardActionItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    detail?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    dueLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardActionItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    detail?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    dueLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardActionItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    detail?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardActionItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    detail?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardActionItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    detail?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardActionItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    audience?: boolean;
    title?: boolean;
    detail?: boolean;
    owner?: boolean;
    dueLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dashboardActionItem"]>;
export type DashboardActionItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    audience?: boolean;
    title?: boolean;
    detail?: boolean;
    owner?: boolean;
    dueLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dashboardActionItem"]>;
export type DashboardActionItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    audience?: boolean;
    title?: boolean;
    detail?: boolean;
    owner?: boolean;
    dueLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dashboardActionItem"]>;
export type DashboardActionItemSelectScalar = {
    id?: boolean;
    audience?: boolean;
    title?: boolean;
    detail?: boolean;
    owner?: boolean;
    dueLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type DashboardActionItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "audience" | "title" | "detail" | "owner" | "dueLabel" | "isActive" | "createdAt", ExtArgs["result"]["dashboardActionItem"]>;
export type $DashboardActionItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DashboardActionItem";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        audience: string;
        title: string;
        detail: string;
        owner: string;
        dueLabel: string;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["dashboardActionItem"]>;
    composites: {};
};
export type DashboardActionItemGetPayload<S extends boolean | null | undefined | DashboardActionItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload, S>;
export type DashboardActionItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DashboardActionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DashboardActionItemCountAggregateInputType | true;
};
export interface DashboardActionItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DashboardActionItem'];
        meta: {
            name: 'DashboardActionItem';
        };
    };
    findUnique<T extends DashboardActionItemFindUniqueArgs>(args: Prisma.SelectSubset<T, DashboardActionItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DashboardActionItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DashboardActionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DashboardActionItemFindFirstArgs>(args?: Prisma.SelectSubset<T, DashboardActionItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DashboardActionItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DashboardActionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DashboardActionItemFindManyArgs>(args?: Prisma.SelectSubset<T, DashboardActionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DashboardActionItemCreateArgs>(args: Prisma.SelectSubset<T, DashboardActionItemCreateArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DashboardActionItemCreateManyArgs>(args?: Prisma.SelectSubset<T, DashboardActionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DashboardActionItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DashboardActionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DashboardActionItemDeleteArgs>(args: Prisma.SelectSubset<T, DashboardActionItemDeleteArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DashboardActionItemUpdateArgs>(args: Prisma.SelectSubset<T, DashboardActionItemUpdateArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DashboardActionItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, DashboardActionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DashboardActionItemUpdateManyArgs>(args: Prisma.SelectSubset<T, DashboardActionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DashboardActionItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DashboardActionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DashboardActionItemUpsertArgs>(args: Prisma.SelectSubset<T, DashboardActionItemUpsertArgs<ExtArgs>>): Prisma.Prisma__DashboardActionItemClient<runtime.Types.Result.GetResult<Prisma.$DashboardActionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DashboardActionItemCountArgs>(args?: Prisma.Subset<T, DashboardActionItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DashboardActionItemCountAggregateOutputType> : number>;
    aggregate<T extends DashboardActionItemAggregateArgs>(args: Prisma.Subset<T, DashboardActionItemAggregateArgs>): Prisma.PrismaPromise<GetDashboardActionItemAggregateType<T>>;
    groupBy<T extends DashboardActionItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DashboardActionItemGroupByArgs['orderBy'];
    } : {
        orderBy?: DashboardActionItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DashboardActionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardActionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DashboardActionItemFieldRefs;
}
export interface Prisma__DashboardActionItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DashboardActionItemFieldRefs {
    readonly id: Prisma.FieldRef<"DashboardActionItem", 'String'>;
    readonly audience: Prisma.FieldRef<"DashboardActionItem", 'String'>;
    readonly title: Prisma.FieldRef<"DashboardActionItem", 'String'>;
    readonly detail: Prisma.FieldRef<"DashboardActionItem", 'String'>;
    readonly owner: Prisma.FieldRef<"DashboardActionItem", 'String'>;
    readonly dueLabel: Prisma.FieldRef<"DashboardActionItem", 'String'>;
    readonly isActive: Prisma.FieldRef<"DashboardActionItem", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"DashboardActionItem", 'DateTime'>;
}
export type DashboardActionItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    where: Prisma.DashboardActionItemWhereUniqueInput;
};
export type DashboardActionItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    where: Prisma.DashboardActionItemWhereUniqueInput;
};
export type DashboardActionItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    where?: Prisma.DashboardActionItemWhereInput;
    orderBy?: Prisma.DashboardActionItemOrderByWithRelationInput | Prisma.DashboardActionItemOrderByWithRelationInput[];
    cursor?: Prisma.DashboardActionItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardActionItemScalarFieldEnum | Prisma.DashboardActionItemScalarFieldEnum[];
};
export type DashboardActionItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    where?: Prisma.DashboardActionItemWhereInput;
    orderBy?: Prisma.DashboardActionItemOrderByWithRelationInput | Prisma.DashboardActionItemOrderByWithRelationInput[];
    cursor?: Prisma.DashboardActionItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardActionItemScalarFieldEnum | Prisma.DashboardActionItemScalarFieldEnum[];
};
export type DashboardActionItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    where?: Prisma.DashboardActionItemWhereInput;
    orderBy?: Prisma.DashboardActionItemOrderByWithRelationInput | Prisma.DashboardActionItemOrderByWithRelationInput[];
    cursor?: Prisma.DashboardActionItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardActionItemScalarFieldEnum | Prisma.DashboardActionItemScalarFieldEnum[];
};
export type DashboardActionItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardActionItemCreateInput, Prisma.DashboardActionItemUncheckedCreateInput>;
};
export type DashboardActionItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DashboardActionItemCreateManyInput | Prisma.DashboardActionItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DashboardActionItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    data: Prisma.DashboardActionItemCreateManyInput | Prisma.DashboardActionItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DashboardActionItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardActionItemUpdateInput, Prisma.DashboardActionItemUncheckedUpdateInput>;
    where: Prisma.DashboardActionItemWhereUniqueInput;
};
export type DashboardActionItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DashboardActionItemUpdateManyMutationInput, Prisma.DashboardActionItemUncheckedUpdateManyInput>;
    where?: Prisma.DashboardActionItemWhereInput;
    limit?: number;
};
export type DashboardActionItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardActionItemUpdateManyMutationInput, Prisma.DashboardActionItemUncheckedUpdateManyInput>;
    where?: Prisma.DashboardActionItemWhereInput;
    limit?: number;
};
export type DashboardActionItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    where: Prisma.DashboardActionItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.DashboardActionItemCreateInput, Prisma.DashboardActionItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DashboardActionItemUpdateInput, Prisma.DashboardActionItemUncheckedUpdateInput>;
};
export type DashboardActionItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
    where: Prisma.DashboardActionItemWhereUniqueInput;
};
export type DashboardActionItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardActionItemWhereInput;
    limit?: number;
};
export type DashboardActionItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardActionItemSelect<ExtArgs> | null;
    omit?: Prisma.DashboardActionItemOmit<ExtArgs> | null;
};
