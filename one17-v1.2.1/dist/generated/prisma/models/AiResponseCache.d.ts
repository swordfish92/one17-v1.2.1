import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiResponseCacheModel = runtime.Types.Result.DefaultSelection<Prisma.$AiResponseCachePayload>;
export type AggregateAiResponseCache = {
    _count: AiResponseCacheCountAggregateOutputType | null;
    _min: AiResponseCacheMinAggregateOutputType | null;
    _max: AiResponseCacheMaxAggregateOutputType | null;
};
export type AiResponseCacheMinAggregateOutputType = {
    cacheKey: string | null;
    capabilityCode: string | null;
    responseText: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
};
export type AiResponseCacheMaxAggregateOutputType = {
    cacheKey: string | null;
    capabilityCode: string | null;
    responseText: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
};
export type AiResponseCacheCountAggregateOutputType = {
    cacheKey: number;
    capabilityCode: number;
    responseText: number;
    createdAt: number;
    expiresAt: number;
    _all: number;
};
export type AiResponseCacheMinAggregateInputType = {
    cacheKey?: true;
    capabilityCode?: true;
    responseText?: true;
    createdAt?: true;
    expiresAt?: true;
};
export type AiResponseCacheMaxAggregateInputType = {
    cacheKey?: true;
    capabilityCode?: true;
    responseText?: true;
    createdAt?: true;
    expiresAt?: true;
};
export type AiResponseCacheCountAggregateInputType = {
    cacheKey?: true;
    capabilityCode?: true;
    responseText?: true;
    createdAt?: true;
    expiresAt?: true;
    _all?: true;
};
export type AiResponseCacheAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiResponseCacheWhereInput;
    orderBy?: Prisma.AiResponseCacheOrderByWithRelationInput | Prisma.AiResponseCacheOrderByWithRelationInput[];
    cursor?: Prisma.AiResponseCacheWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiResponseCacheCountAggregateInputType;
    _min?: AiResponseCacheMinAggregateInputType;
    _max?: AiResponseCacheMaxAggregateInputType;
};
export type GetAiResponseCacheAggregateType<T extends AiResponseCacheAggregateArgs> = {
    [P in keyof T & keyof AggregateAiResponseCache]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiResponseCache[P]> : Prisma.GetScalarType<T[P], AggregateAiResponseCache[P]>;
};
export type AiResponseCacheGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiResponseCacheWhereInput;
    orderBy?: Prisma.AiResponseCacheOrderByWithAggregationInput | Prisma.AiResponseCacheOrderByWithAggregationInput[];
    by: Prisma.AiResponseCacheScalarFieldEnum[] | Prisma.AiResponseCacheScalarFieldEnum;
    having?: Prisma.AiResponseCacheScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiResponseCacheCountAggregateInputType | true;
    _min?: AiResponseCacheMinAggregateInputType;
    _max?: AiResponseCacheMaxAggregateInputType;
};
export type AiResponseCacheGroupByOutputType = {
    cacheKey: string;
    capabilityCode: string;
    responseText: string;
    createdAt: Date;
    expiresAt: Date;
    _count: AiResponseCacheCountAggregateOutputType | null;
    _min: AiResponseCacheMinAggregateOutputType | null;
    _max: AiResponseCacheMaxAggregateOutputType | null;
};
export type GetAiResponseCacheGroupByPayload<T extends AiResponseCacheGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiResponseCacheGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiResponseCacheGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiResponseCacheGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiResponseCacheGroupByOutputType[P]>;
}>>;
export type AiResponseCacheWhereInput = {
    AND?: Prisma.AiResponseCacheWhereInput | Prisma.AiResponseCacheWhereInput[];
    OR?: Prisma.AiResponseCacheWhereInput[];
    NOT?: Prisma.AiResponseCacheWhereInput | Prisma.AiResponseCacheWhereInput[];
    cacheKey?: Prisma.StringFilter<"AiResponseCache"> | string;
    capabilityCode?: Prisma.StringFilter<"AiResponseCache"> | string;
    responseText?: Prisma.StringFilter<"AiResponseCache"> | string;
    createdAt?: Prisma.DateTimeFilter<"AiResponseCache"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"AiResponseCache"> | Date | string;
};
export type AiResponseCacheOrderByWithRelationInput = {
    cacheKey?: Prisma.SortOrder;
    capabilityCode?: Prisma.SortOrder;
    responseText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type AiResponseCacheWhereUniqueInput = Prisma.AtLeast<{
    cacheKey?: string;
    AND?: Prisma.AiResponseCacheWhereInput | Prisma.AiResponseCacheWhereInput[];
    OR?: Prisma.AiResponseCacheWhereInput[];
    NOT?: Prisma.AiResponseCacheWhereInput | Prisma.AiResponseCacheWhereInput[];
    capabilityCode?: Prisma.StringFilter<"AiResponseCache"> | string;
    responseText?: Prisma.StringFilter<"AiResponseCache"> | string;
    createdAt?: Prisma.DateTimeFilter<"AiResponseCache"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"AiResponseCache"> | Date | string;
}, "cacheKey">;
export type AiResponseCacheOrderByWithAggregationInput = {
    cacheKey?: Prisma.SortOrder;
    capabilityCode?: Prisma.SortOrder;
    responseText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    _count?: Prisma.AiResponseCacheCountOrderByAggregateInput;
    _max?: Prisma.AiResponseCacheMaxOrderByAggregateInput;
    _min?: Prisma.AiResponseCacheMinOrderByAggregateInput;
};
export type AiResponseCacheScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiResponseCacheScalarWhereWithAggregatesInput | Prisma.AiResponseCacheScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiResponseCacheScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiResponseCacheScalarWhereWithAggregatesInput | Prisma.AiResponseCacheScalarWhereWithAggregatesInput[];
    cacheKey?: Prisma.StringWithAggregatesFilter<"AiResponseCache"> | string;
    capabilityCode?: Prisma.StringWithAggregatesFilter<"AiResponseCache"> | string;
    responseText?: Prisma.StringWithAggregatesFilter<"AiResponseCache"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AiResponseCache"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"AiResponseCache"> | Date | string;
};
export type AiResponseCacheCreateInput = {
    cacheKey: string;
    capabilityCode: string;
    responseText: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
};
export type AiResponseCacheUncheckedCreateInput = {
    cacheKey: string;
    capabilityCode: string;
    responseText: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
};
export type AiResponseCacheUpdateInput = {
    cacheKey?: Prisma.StringFieldUpdateOperationsInput | string;
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    responseText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiResponseCacheUncheckedUpdateInput = {
    cacheKey?: Prisma.StringFieldUpdateOperationsInput | string;
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    responseText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiResponseCacheCreateManyInput = {
    cacheKey: string;
    capabilityCode: string;
    responseText: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
};
export type AiResponseCacheUpdateManyMutationInput = {
    cacheKey?: Prisma.StringFieldUpdateOperationsInput | string;
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    responseText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiResponseCacheUncheckedUpdateManyInput = {
    cacheKey?: Prisma.StringFieldUpdateOperationsInput | string;
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    responseText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiResponseCacheCountOrderByAggregateInput = {
    cacheKey?: Prisma.SortOrder;
    capabilityCode?: Prisma.SortOrder;
    responseText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type AiResponseCacheMaxOrderByAggregateInput = {
    cacheKey?: Prisma.SortOrder;
    capabilityCode?: Prisma.SortOrder;
    responseText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type AiResponseCacheMinOrderByAggregateInput = {
    cacheKey?: Prisma.SortOrder;
    capabilityCode?: Prisma.SortOrder;
    responseText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type AiResponseCacheSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cacheKey?: boolean;
    capabilityCode?: boolean;
    responseText?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
}, ExtArgs["result"]["aiResponseCache"]>;
export type AiResponseCacheSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cacheKey?: boolean;
    capabilityCode?: boolean;
    responseText?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
}, ExtArgs["result"]["aiResponseCache"]>;
export type AiResponseCacheSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cacheKey?: boolean;
    capabilityCode?: boolean;
    responseText?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
}, ExtArgs["result"]["aiResponseCache"]>;
export type AiResponseCacheSelectScalar = {
    cacheKey?: boolean;
    capabilityCode?: boolean;
    responseText?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
};
export type AiResponseCacheOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cacheKey" | "capabilityCode" | "responseText" | "createdAt" | "expiresAt", ExtArgs["result"]["aiResponseCache"]>;
export type $AiResponseCachePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiResponseCache";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cacheKey: string;
        capabilityCode: string;
        responseText: string;
        createdAt: Date;
        expiresAt: Date;
    }, ExtArgs["result"]["aiResponseCache"]>;
    composites: {};
};
export type AiResponseCacheGetPayload<S extends boolean | null | undefined | AiResponseCacheDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload, S>;
export type AiResponseCacheCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiResponseCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiResponseCacheCountAggregateInputType | true;
};
export interface AiResponseCacheDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiResponseCache'];
        meta: {
            name: 'AiResponseCache';
        };
    };
    findUnique<T extends AiResponseCacheFindUniqueArgs>(args: Prisma.SelectSubset<T, AiResponseCacheFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiResponseCacheFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiResponseCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiResponseCacheFindFirstArgs>(args?: Prisma.SelectSubset<T, AiResponseCacheFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiResponseCacheFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiResponseCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiResponseCacheFindManyArgs>(args?: Prisma.SelectSubset<T, AiResponseCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiResponseCacheCreateArgs>(args: Prisma.SelectSubset<T, AiResponseCacheCreateArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiResponseCacheCreateManyArgs>(args?: Prisma.SelectSubset<T, AiResponseCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiResponseCacheCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiResponseCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiResponseCacheDeleteArgs>(args: Prisma.SelectSubset<T, AiResponseCacheDeleteArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiResponseCacheUpdateArgs>(args: Prisma.SelectSubset<T, AiResponseCacheUpdateArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiResponseCacheDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiResponseCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiResponseCacheUpdateManyArgs>(args: Prisma.SelectSubset<T, AiResponseCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiResponseCacheUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiResponseCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiResponseCacheUpsertArgs>(args: Prisma.SelectSubset<T, AiResponseCacheUpsertArgs<ExtArgs>>): Prisma.Prisma__AiResponseCacheClient<runtime.Types.Result.GetResult<Prisma.$AiResponseCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiResponseCacheCountArgs>(args?: Prisma.Subset<T, AiResponseCacheCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiResponseCacheCountAggregateOutputType> : number>;
    aggregate<T extends AiResponseCacheAggregateArgs>(args: Prisma.Subset<T, AiResponseCacheAggregateArgs>): Prisma.PrismaPromise<GetAiResponseCacheAggregateType<T>>;
    groupBy<T extends AiResponseCacheGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiResponseCacheGroupByArgs['orderBy'];
    } : {
        orderBy?: AiResponseCacheGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiResponseCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiResponseCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiResponseCacheFieldRefs;
}
export interface Prisma__AiResponseCacheClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiResponseCacheFieldRefs {
    readonly cacheKey: Prisma.FieldRef<"AiResponseCache", 'String'>;
    readonly capabilityCode: Prisma.FieldRef<"AiResponseCache", 'String'>;
    readonly responseText: Prisma.FieldRef<"AiResponseCache", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AiResponseCache", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"AiResponseCache", 'DateTime'>;
}
export type AiResponseCacheFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    where: Prisma.AiResponseCacheWhereUniqueInput;
};
export type AiResponseCacheFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    where: Prisma.AiResponseCacheWhereUniqueInput;
};
export type AiResponseCacheFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    where?: Prisma.AiResponseCacheWhereInput;
    orderBy?: Prisma.AiResponseCacheOrderByWithRelationInput | Prisma.AiResponseCacheOrderByWithRelationInput[];
    cursor?: Prisma.AiResponseCacheWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiResponseCacheScalarFieldEnum | Prisma.AiResponseCacheScalarFieldEnum[];
};
export type AiResponseCacheFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    where?: Prisma.AiResponseCacheWhereInput;
    orderBy?: Prisma.AiResponseCacheOrderByWithRelationInput | Prisma.AiResponseCacheOrderByWithRelationInput[];
    cursor?: Prisma.AiResponseCacheWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiResponseCacheScalarFieldEnum | Prisma.AiResponseCacheScalarFieldEnum[];
};
export type AiResponseCacheFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    where?: Prisma.AiResponseCacheWhereInput;
    orderBy?: Prisma.AiResponseCacheOrderByWithRelationInput | Prisma.AiResponseCacheOrderByWithRelationInput[];
    cursor?: Prisma.AiResponseCacheWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiResponseCacheScalarFieldEnum | Prisma.AiResponseCacheScalarFieldEnum[];
};
export type AiResponseCacheCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiResponseCacheCreateInput, Prisma.AiResponseCacheUncheckedCreateInput>;
};
export type AiResponseCacheCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiResponseCacheCreateManyInput | Prisma.AiResponseCacheCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiResponseCacheCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    data: Prisma.AiResponseCacheCreateManyInput | Prisma.AiResponseCacheCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiResponseCacheUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiResponseCacheUpdateInput, Prisma.AiResponseCacheUncheckedUpdateInput>;
    where: Prisma.AiResponseCacheWhereUniqueInput;
};
export type AiResponseCacheUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiResponseCacheUpdateManyMutationInput, Prisma.AiResponseCacheUncheckedUpdateManyInput>;
    where?: Prisma.AiResponseCacheWhereInput;
    limit?: number;
};
export type AiResponseCacheUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiResponseCacheUpdateManyMutationInput, Prisma.AiResponseCacheUncheckedUpdateManyInput>;
    where?: Prisma.AiResponseCacheWhereInput;
    limit?: number;
};
export type AiResponseCacheUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    where: Prisma.AiResponseCacheWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiResponseCacheCreateInput, Prisma.AiResponseCacheUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiResponseCacheUpdateInput, Prisma.AiResponseCacheUncheckedUpdateInput>;
};
export type AiResponseCacheDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
    where: Prisma.AiResponseCacheWhereUniqueInput;
};
export type AiResponseCacheDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiResponseCacheWhereInput;
    limit?: number;
};
export type AiResponseCacheDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiResponseCacheSelect<ExtArgs> | null;
    omit?: Prisma.AiResponseCacheOmit<ExtArgs> | null;
};
