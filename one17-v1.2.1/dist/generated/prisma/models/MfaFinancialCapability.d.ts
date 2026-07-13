import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MfaFinancialCapabilityModel = runtime.Types.Result.DefaultSelection<Prisma.$MfaFinancialCapabilityPayload>;
export type AggregateMfaFinancialCapability = {
    _count: MfaFinancialCapabilityCountAggregateOutputType | null;
    _min: MfaFinancialCapabilityMinAggregateOutputType | null;
    _max: MfaFinancialCapabilityMaxAggregateOutputType | null;
};
export type MfaFinancialCapabilityMinAggregateOutputType = {
    functionCode: string | null;
    addedByUserId: string | null;
    addedAt: Date | null;
};
export type MfaFinancialCapabilityMaxAggregateOutputType = {
    functionCode: string | null;
    addedByUserId: string | null;
    addedAt: Date | null;
};
export type MfaFinancialCapabilityCountAggregateOutputType = {
    functionCode: number;
    addedByUserId: number;
    addedAt: number;
    _all: number;
};
export type MfaFinancialCapabilityMinAggregateInputType = {
    functionCode?: true;
    addedByUserId?: true;
    addedAt?: true;
};
export type MfaFinancialCapabilityMaxAggregateInputType = {
    functionCode?: true;
    addedByUserId?: true;
    addedAt?: true;
};
export type MfaFinancialCapabilityCountAggregateInputType = {
    functionCode?: true;
    addedByUserId?: true;
    addedAt?: true;
    _all?: true;
};
export type MfaFinancialCapabilityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    orderBy?: Prisma.MfaFinancialCapabilityOrderByWithRelationInput | Prisma.MfaFinancialCapabilityOrderByWithRelationInput[];
    cursor?: Prisma.MfaFinancialCapabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MfaFinancialCapabilityCountAggregateInputType;
    _min?: MfaFinancialCapabilityMinAggregateInputType;
    _max?: MfaFinancialCapabilityMaxAggregateInputType;
};
export type GetMfaFinancialCapabilityAggregateType<T extends MfaFinancialCapabilityAggregateArgs> = {
    [P in keyof T & keyof AggregateMfaFinancialCapability]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMfaFinancialCapability[P]> : Prisma.GetScalarType<T[P], AggregateMfaFinancialCapability[P]>;
};
export type MfaFinancialCapabilityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    orderBy?: Prisma.MfaFinancialCapabilityOrderByWithAggregationInput | Prisma.MfaFinancialCapabilityOrderByWithAggregationInput[];
    by: Prisma.MfaFinancialCapabilityScalarFieldEnum[] | Prisma.MfaFinancialCapabilityScalarFieldEnum;
    having?: Prisma.MfaFinancialCapabilityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MfaFinancialCapabilityCountAggregateInputType | true;
    _min?: MfaFinancialCapabilityMinAggregateInputType;
    _max?: MfaFinancialCapabilityMaxAggregateInputType;
};
export type MfaFinancialCapabilityGroupByOutputType = {
    functionCode: string;
    addedByUserId: string;
    addedAt: Date;
    _count: MfaFinancialCapabilityCountAggregateOutputType | null;
    _min: MfaFinancialCapabilityMinAggregateOutputType | null;
    _max: MfaFinancialCapabilityMaxAggregateOutputType | null;
};
export type GetMfaFinancialCapabilityGroupByPayload<T extends MfaFinancialCapabilityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MfaFinancialCapabilityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MfaFinancialCapabilityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MfaFinancialCapabilityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MfaFinancialCapabilityGroupByOutputType[P]>;
}>>;
export type MfaFinancialCapabilityWhereInput = {
    AND?: Prisma.MfaFinancialCapabilityWhereInput | Prisma.MfaFinancialCapabilityWhereInput[];
    OR?: Prisma.MfaFinancialCapabilityWhereInput[];
    NOT?: Prisma.MfaFinancialCapabilityWhereInput | Prisma.MfaFinancialCapabilityWhereInput[];
    functionCode?: Prisma.StringFilter<"MfaFinancialCapability"> | string;
    addedByUserId?: Prisma.UuidFilter<"MfaFinancialCapability"> | string;
    addedAt?: Prisma.DateTimeFilter<"MfaFinancialCapability"> | Date | string;
};
export type MfaFinancialCapabilityOrderByWithRelationInput = {
    functionCode?: Prisma.SortOrder;
    addedByUserId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type MfaFinancialCapabilityWhereUniqueInput = Prisma.AtLeast<{
    functionCode?: string;
    AND?: Prisma.MfaFinancialCapabilityWhereInput | Prisma.MfaFinancialCapabilityWhereInput[];
    OR?: Prisma.MfaFinancialCapabilityWhereInput[];
    NOT?: Prisma.MfaFinancialCapabilityWhereInput | Prisma.MfaFinancialCapabilityWhereInput[];
    addedByUserId?: Prisma.UuidFilter<"MfaFinancialCapability"> | string;
    addedAt?: Prisma.DateTimeFilter<"MfaFinancialCapability"> | Date | string;
}, "functionCode">;
export type MfaFinancialCapabilityOrderByWithAggregationInput = {
    functionCode?: Prisma.SortOrder;
    addedByUserId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    _count?: Prisma.MfaFinancialCapabilityCountOrderByAggregateInput;
    _max?: Prisma.MfaFinancialCapabilityMaxOrderByAggregateInput;
    _min?: Prisma.MfaFinancialCapabilityMinOrderByAggregateInput;
};
export type MfaFinancialCapabilityScalarWhereWithAggregatesInput = {
    AND?: Prisma.MfaFinancialCapabilityScalarWhereWithAggregatesInput | Prisma.MfaFinancialCapabilityScalarWhereWithAggregatesInput[];
    OR?: Prisma.MfaFinancialCapabilityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MfaFinancialCapabilityScalarWhereWithAggregatesInput | Prisma.MfaFinancialCapabilityScalarWhereWithAggregatesInput[];
    functionCode?: Prisma.StringWithAggregatesFilter<"MfaFinancialCapability"> | string;
    addedByUserId?: Prisma.UuidWithAggregatesFilter<"MfaFinancialCapability"> | string;
    addedAt?: Prisma.DateTimeWithAggregatesFilter<"MfaFinancialCapability"> | Date | string;
};
export type MfaFinancialCapabilityCreateInput = {
    functionCode: string;
    addedByUserId: string;
    addedAt?: Date | string;
};
export type MfaFinancialCapabilityUncheckedCreateInput = {
    functionCode: string;
    addedByUserId: string;
    addedAt?: Date | string;
};
export type MfaFinancialCapabilityUpdateInput = {
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    addedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaFinancialCapabilityUncheckedUpdateInput = {
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    addedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaFinancialCapabilityCreateManyInput = {
    functionCode: string;
    addedByUserId: string;
    addedAt?: Date | string;
};
export type MfaFinancialCapabilityUpdateManyMutationInput = {
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    addedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaFinancialCapabilityUncheckedUpdateManyInput = {
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    addedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaFinancialCapabilityCountOrderByAggregateInput = {
    functionCode?: Prisma.SortOrder;
    addedByUserId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type MfaFinancialCapabilityMaxOrderByAggregateInput = {
    functionCode?: Prisma.SortOrder;
    addedByUserId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type MfaFinancialCapabilityMinOrderByAggregateInput = {
    functionCode?: Prisma.SortOrder;
    addedByUserId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type MfaFinancialCapabilitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    functionCode?: boolean;
    addedByUserId?: boolean;
    addedAt?: boolean;
}, ExtArgs["result"]["mfaFinancialCapability"]>;
export type MfaFinancialCapabilitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    functionCode?: boolean;
    addedByUserId?: boolean;
    addedAt?: boolean;
}, ExtArgs["result"]["mfaFinancialCapability"]>;
export type MfaFinancialCapabilitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    functionCode?: boolean;
    addedByUserId?: boolean;
    addedAt?: boolean;
}, ExtArgs["result"]["mfaFinancialCapability"]>;
export type MfaFinancialCapabilitySelectScalar = {
    functionCode?: boolean;
    addedByUserId?: boolean;
    addedAt?: boolean;
};
export type MfaFinancialCapabilityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"functionCode" | "addedByUserId" | "addedAt", ExtArgs["result"]["mfaFinancialCapability"]>;
export type $MfaFinancialCapabilityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MfaFinancialCapability";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        functionCode: string;
        addedByUserId: string;
        addedAt: Date;
    }, ExtArgs["result"]["mfaFinancialCapability"]>;
    composites: {};
};
export type MfaFinancialCapabilityGetPayload<S extends boolean | null | undefined | MfaFinancialCapabilityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload, S>;
export type MfaFinancialCapabilityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MfaFinancialCapabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MfaFinancialCapabilityCountAggregateInputType | true;
};
export interface MfaFinancialCapabilityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MfaFinancialCapability'];
        meta: {
            name: 'MfaFinancialCapability';
        };
    };
    findUnique<T extends MfaFinancialCapabilityFindUniqueArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MfaFinancialCapabilityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MfaFinancialCapabilityFindFirstArgs>(args?: Prisma.SelectSubset<T, MfaFinancialCapabilityFindFirstArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MfaFinancialCapabilityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MfaFinancialCapabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MfaFinancialCapabilityFindManyArgs>(args?: Prisma.SelectSubset<T, MfaFinancialCapabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MfaFinancialCapabilityCreateArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityCreateArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MfaFinancialCapabilityCreateManyArgs>(args?: Prisma.SelectSubset<T, MfaFinancialCapabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MfaFinancialCapabilityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MfaFinancialCapabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MfaFinancialCapabilityDeleteArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityDeleteArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MfaFinancialCapabilityUpdateArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityUpdateArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MfaFinancialCapabilityDeleteManyArgs>(args?: Prisma.SelectSubset<T, MfaFinancialCapabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MfaFinancialCapabilityUpdateManyArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MfaFinancialCapabilityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MfaFinancialCapabilityUpsertArgs>(args: Prisma.SelectSubset<T, MfaFinancialCapabilityUpsertArgs<ExtArgs>>): Prisma.Prisma__MfaFinancialCapabilityClient<runtime.Types.Result.GetResult<Prisma.$MfaFinancialCapabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MfaFinancialCapabilityCountArgs>(args?: Prisma.Subset<T, MfaFinancialCapabilityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MfaFinancialCapabilityCountAggregateOutputType> : number>;
    aggregate<T extends MfaFinancialCapabilityAggregateArgs>(args: Prisma.Subset<T, MfaFinancialCapabilityAggregateArgs>): Prisma.PrismaPromise<GetMfaFinancialCapabilityAggregateType<T>>;
    groupBy<T extends MfaFinancialCapabilityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MfaFinancialCapabilityGroupByArgs['orderBy'];
    } : {
        orderBy?: MfaFinancialCapabilityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MfaFinancialCapabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfaFinancialCapabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MfaFinancialCapabilityFieldRefs;
}
export interface Prisma__MfaFinancialCapabilityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MfaFinancialCapabilityFieldRefs {
    readonly functionCode: Prisma.FieldRef<"MfaFinancialCapability", 'String'>;
    readonly addedByUserId: Prisma.FieldRef<"MfaFinancialCapability", 'String'>;
    readonly addedAt: Prisma.FieldRef<"MfaFinancialCapability", 'DateTime'>;
}
export type MfaFinancialCapabilityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    where: Prisma.MfaFinancialCapabilityWhereUniqueInput;
};
export type MfaFinancialCapabilityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    where: Prisma.MfaFinancialCapabilityWhereUniqueInput;
};
export type MfaFinancialCapabilityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    orderBy?: Prisma.MfaFinancialCapabilityOrderByWithRelationInput | Prisma.MfaFinancialCapabilityOrderByWithRelationInput[];
    cursor?: Prisma.MfaFinancialCapabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaFinancialCapabilityScalarFieldEnum | Prisma.MfaFinancialCapabilityScalarFieldEnum[];
};
export type MfaFinancialCapabilityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    orderBy?: Prisma.MfaFinancialCapabilityOrderByWithRelationInput | Prisma.MfaFinancialCapabilityOrderByWithRelationInput[];
    cursor?: Prisma.MfaFinancialCapabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaFinancialCapabilityScalarFieldEnum | Prisma.MfaFinancialCapabilityScalarFieldEnum[];
};
export type MfaFinancialCapabilityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    orderBy?: Prisma.MfaFinancialCapabilityOrderByWithRelationInput | Prisma.MfaFinancialCapabilityOrderByWithRelationInput[];
    cursor?: Prisma.MfaFinancialCapabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaFinancialCapabilityScalarFieldEnum | Prisma.MfaFinancialCapabilityScalarFieldEnum[];
};
export type MfaFinancialCapabilityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaFinancialCapabilityCreateInput, Prisma.MfaFinancialCapabilityUncheckedCreateInput>;
};
export type MfaFinancialCapabilityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MfaFinancialCapabilityCreateManyInput | Prisma.MfaFinancialCapabilityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MfaFinancialCapabilityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    data: Prisma.MfaFinancialCapabilityCreateManyInput | Prisma.MfaFinancialCapabilityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MfaFinancialCapabilityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaFinancialCapabilityUpdateInput, Prisma.MfaFinancialCapabilityUncheckedUpdateInput>;
    where: Prisma.MfaFinancialCapabilityWhereUniqueInput;
};
export type MfaFinancialCapabilityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MfaFinancialCapabilityUpdateManyMutationInput, Prisma.MfaFinancialCapabilityUncheckedUpdateManyInput>;
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    limit?: number;
};
export type MfaFinancialCapabilityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaFinancialCapabilityUpdateManyMutationInput, Prisma.MfaFinancialCapabilityUncheckedUpdateManyInput>;
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    limit?: number;
};
export type MfaFinancialCapabilityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    where: Prisma.MfaFinancialCapabilityWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaFinancialCapabilityCreateInput, Prisma.MfaFinancialCapabilityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MfaFinancialCapabilityUpdateInput, Prisma.MfaFinancialCapabilityUncheckedUpdateInput>;
};
export type MfaFinancialCapabilityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
    where: Prisma.MfaFinancialCapabilityWhereUniqueInput;
};
export type MfaFinancialCapabilityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaFinancialCapabilityWhereInput;
    limit?: number;
};
export type MfaFinancialCapabilityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaFinancialCapabilitySelect<ExtArgs> | null;
    omit?: Prisma.MfaFinancialCapabilityOmit<ExtArgs> | null;
};
