import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CalendarFeedTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$CalendarFeedTokenPayload>;
export type AggregateCalendarFeedToken = {
    _count: CalendarFeedTokenCountAggregateOutputType | null;
    _min: CalendarFeedTokenMinAggregateOutputType | null;
    _max: CalendarFeedTokenMaxAggregateOutputType | null;
};
export type CalendarFeedTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    createdAt: Date | null;
};
export type CalendarFeedTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    createdAt: Date | null;
};
export type CalendarFeedTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    token: number;
    createdAt: number;
    _all: number;
};
export type CalendarFeedTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    createdAt?: true;
};
export type CalendarFeedTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    createdAt?: true;
};
export type CalendarFeedTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    createdAt?: true;
    _all?: true;
};
export type CalendarFeedTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarFeedTokenWhereInput;
    orderBy?: Prisma.CalendarFeedTokenOrderByWithRelationInput | Prisma.CalendarFeedTokenOrderByWithRelationInput[];
    cursor?: Prisma.CalendarFeedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CalendarFeedTokenCountAggregateInputType;
    _min?: CalendarFeedTokenMinAggregateInputType;
    _max?: CalendarFeedTokenMaxAggregateInputType;
};
export type GetCalendarFeedTokenAggregateType<T extends CalendarFeedTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateCalendarFeedToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalendarFeedToken[P]> : Prisma.GetScalarType<T[P], AggregateCalendarFeedToken[P]>;
};
export type CalendarFeedTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarFeedTokenWhereInput;
    orderBy?: Prisma.CalendarFeedTokenOrderByWithAggregationInput | Prisma.CalendarFeedTokenOrderByWithAggregationInput[];
    by: Prisma.CalendarFeedTokenScalarFieldEnum[] | Prisma.CalendarFeedTokenScalarFieldEnum;
    having?: Prisma.CalendarFeedTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CalendarFeedTokenCountAggregateInputType | true;
    _min?: CalendarFeedTokenMinAggregateInputType;
    _max?: CalendarFeedTokenMaxAggregateInputType;
};
export type CalendarFeedTokenGroupByOutputType = {
    id: string;
    userId: string;
    token: string;
    createdAt: Date;
    _count: CalendarFeedTokenCountAggregateOutputType | null;
    _min: CalendarFeedTokenMinAggregateOutputType | null;
    _max: CalendarFeedTokenMaxAggregateOutputType | null;
};
export type GetCalendarFeedTokenGroupByPayload<T extends CalendarFeedTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CalendarFeedTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CalendarFeedTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CalendarFeedTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CalendarFeedTokenGroupByOutputType[P]>;
}>>;
export type CalendarFeedTokenWhereInput = {
    AND?: Prisma.CalendarFeedTokenWhereInput | Prisma.CalendarFeedTokenWhereInput[];
    OR?: Prisma.CalendarFeedTokenWhereInput[];
    NOT?: Prisma.CalendarFeedTokenWhereInput | Prisma.CalendarFeedTokenWhereInput[];
    id?: Prisma.UuidFilter<"CalendarFeedToken"> | string;
    userId?: Prisma.UuidFilter<"CalendarFeedToken"> | string;
    token?: Prisma.StringFilter<"CalendarFeedToken"> | string;
    createdAt?: Prisma.DateTimeFilter<"CalendarFeedToken"> | Date | string;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type CalendarFeedTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.AppUserOrderByWithRelationInput;
};
export type CalendarFeedTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    token?: string;
    AND?: Prisma.CalendarFeedTokenWhereInput | Prisma.CalendarFeedTokenWhereInput[];
    OR?: Prisma.CalendarFeedTokenWhereInput[];
    NOT?: Prisma.CalendarFeedTokenWhereInput | Prisma.CalendarFeedTokenWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"CalendarFeedToken"> | Date | string;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "userId" | "token">;
export type CalendarFeedTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CalendarFeedTokenCountOrderByAggregateInput;
    _max?: Prisma.CalendarFeedTokenMaxOrderByAggregateInput;
    _min?: Prisma.CalendarFeedTokenMinOrderByAggregateInput;
};
export type CalendarFeedTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.CalendarFeedTokenScalarWhereWithAggregatesInput | Prisma.CalendarFeedTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.CalendarFeedTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CalendarFeedTokenScalarWhereWithAggregatesInput | Prisma.CalendarFeedTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CalendarFeedToken"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"CalendarFeedToken"> | string;
    token?: Prisma.StringWithAggregatesFilter<"CalendarFeedToken"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarFeedToken"> | Date | string;
};
export type CalendarFeedTokenCreateInput = {
    id?: string;
    token: string;
    createdAt?: Date | string;
    user: Prisma.AppUserCreateNestedOneWithoutCalendarFeedTokenInput;
};
export type CalendarFeedTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    token: string;
    createdAt?: Date | string;
};
export type CalendarFeedTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.AppUserUpdateOneRequiredWithoutCalendarFeedTokenNestedInput;
};
export type CalendarFeedTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarFeedTokenCreateManyInput = {
    id?: string;
    userId: string;
    token: string;
    createdAt?: Date | string;
};
export type CalendarFeedTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarFeedTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarFeedTokenNullableScalarRelationFilter = {
    is?: Prisma.CalendarFeedTokenWhereInput | null;
    isNot?: Prisma.CalendarFeedTokenWhereInput | null;
};
export type CalendarFeedTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarFeedTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarFeedTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarFeedTokenCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CalendarFeedTokenCreateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CalendarFeedTokenCreateOrConnectWithoutUserInput;
    connect?: Prisma.CalendarFeedTokenWhereUniqueInput;
};
export type CalendarFeedTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CalendarFeedTokenCreateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CalendarFeedTokenCreateOrConnectWithoutUserInput;
    connect?: Prisma.CalendarFeedTokenWhereUniqueInput;
};
export type CalendarFeedTokenUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarFeedTokenCreateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CalendarFeedTokenCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CalendarFeedTokenUpsertWithoutUserInput;
    disconnect?: Prisma.CalendarFeedTokenWhereInput | boolean;
    delete?: Prisma.CalendarFeedTokenWhereInput | boolean;
    connect?: Prisma.CalendarFeedTokenWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CalendarFeedTokenUpdateToOneWithWhereWithoutUserInput, Prisma.CalendarFeedTokenUpdateWithoutUserInput>, Prisma.CalendarFeedTokenUncheckedUpdateWithoutUserInput>;
};
export type CalendarFeedTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarFeedTokenCreateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CalendarFeedTokenCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CalendarFeedTokenUpsertWithoutUserInput;
    disconnect?: Prisma.CalendarFeedTokenWhereInput | boolean;
    delete?: Prisma.CalendarFeedTokenWhereInput | boolean;
    connect?: Prisma.CalendarFeedTokenWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CalendarFeedTokenUpdateToOneWithWhereWithoutUserInput, Prisma.CalendarFeedTokenUpdateWithoutUserInput>, Prisma.CalendarFeedTokenUncheckedUpdateWithoutUserInput>;
};
export type CalendarFeedTokenCreateWithoutUserInput = {
    id?: string;
    token: string;
    createdAt?: Date | string;
};
export type CalendarFeedTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    token: string;
    createdAt?: Date | string;
};
export type CalendarFeedTokenCreateOrConnectWithoutUserInput = {
    where: Prisma.CalendarFeedTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarFeedTokenCreateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedCreateWithoutUserInput>;
};
export type CalendarFeedTokenUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.CalendarFeedTokenUpdateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CalendarFeedTokenCreateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedCreateWithoutUserInput>;
    where?: Prisma.CalendarFeedTokenWhereInput;
};
export type CalendarFeedTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.CalendarFeedTokenWhereInput;
    data: Prisma.XOR<Prisma.CalendarFeedTokenUpdateWithoutUserInput, Prisma.CalendarFeedTokenUncheckedUpdateWithoutUserInput>;
};
export type CalendarFeedTokenUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarFeedTokenUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarFeedTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarFeedToken"]>;
export type CalendarFeedTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarFeedToken"]>;
export type CalendarFeedTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarFeedToken"]>;
export type CalendarFeedTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    createdAt?: boolean;
};
export type CalendarFeedTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "token" | "createdAt", ExtArgs["result"]["calendarFeedToken"]>;
export type CalendarFeedTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type CalendarFeedTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type CalendarFeedTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $CalendarFeedTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CalendarFeedToken";
    objects: {
        user: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        token: string;
        createdAt: Date;
    }, ExtArgs["result"]["calendarFeedToken"]>;
    composites: {};
};
export type CalendarFeedTokenGetPayload<S extends boolean | null | undefined | CalendarFeedTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload, S>;
export type CalendarFeedTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CalendarFeedTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CalendarFeedTokenCountAggregateInputType | true;
};
export interface CalendarFeedTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CalendarFeedToken'];
        meta: {
            name: 'CalendarFeedToken';
        };
    };
    findUnique<T extends CalendarFeedTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CalendarFeedTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CalendarFeedTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, CalendarFeedTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CalendarFeedTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CalendarFeedTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CalendarFeedTokenFindManyArgs>(args?: Prisma.SelectSubset<T, CalendarFeedTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CalendarFeedTokenCreateArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenCreateArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CalendarFeedTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, CalendarFeedTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CalendarFeedTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CalendarFeedTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CalendarFeedTokenDeleteArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CalendarFeedTokenUpdateArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CalendarFeedTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, CalendarFeedTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CalendarFeedTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CalendarFeedTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CalendarFeedTokenUpsertArgs>(args: Prisma.SelectSubset<T, CalendarFeedTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__CalendarFeedTokenClient<runtime.Types.Result.GetResult<Prisma.$CalendarFeedTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CalendarFeedTokenCountArgs>(args?: Prisma.Subset<T, CalendarFeedTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CalendarFeedTokenCountAggregateOutputType> : number>;
    aggregate<T extends CalendarFeedTokenAggregateArgs>(args: Prisma.Subset<T, CalendarFeedTokenAggregateArgs>): Prisma.PrismaPromise<GetCalendarFeedTokenAggregateType<T>>;
    groupBy<T extends CalendarFeedTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CalendarFeedTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: CalendarFeedTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CalendarFeedTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarFeedTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CalendarFeedTokenFieldRefs;
}
export interface Prisma__CalendarFeedTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CalendarFeedTokenFieldRefs {
    readonly id: Prisma.FieldRef<"CalendarFeedToken", 'String'>;
    readonly userId: Prisma.FieldRef<"CalendarFeedToken", 'String'>;
    readonly token: Prisma.FieldRef<"CalendarFeedToken", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CalendarFeedToken", 'DateTime'>;
}
export type CalendarFeedTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    where: Prisma.CalendarFeedTokenWhereUniqueInput;
};
export type CalendarFeedTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    where: Prisma.CalendarFeedTokenWhereUniqueInput;
};
export type CalendarFeedTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    where?: Prisma.CalendarFeedTokenWhereInput;
    orderBy?: Prisma.CalendarFeedTokenOrderByWithRelationInput | Prisma.CalendarFeedTokenOrderByWithRelationInput[];
    cursor?: Prisma.CalendarFeedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarFeedTokenScalarFieldEnum | Prisma.CalendarFeedTokenScalarFieldEnum[];
};
export type CalendarFeedTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    where?: Prisma.CalendarFeedTokenWhereInput;
    orderBy?: Prisma.CalendarFeedTokenOrderByWithRelationInput | Prisma.CalendarFeedTokenOrderByWithRelationInput[];
    cursor?: Prisma.CalendarFeedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarFeedTokenScalarFieldEnum | Prisma.CalendarFeedTokenScalarFieldEnum[];
};
export type CalendarFeedTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    where?: Prisma.CalendarFeedTokenWhereInput;
    orderBy?: Prisma.CalendarFeedTokenOrderByWithRelationInput | Prisma.CalendarFeedTokenOrderByWithRelationInput[];
    cursor?: Prisma.CalendarFeedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarFeedTokenScalarFieldEnum | Prisma.CalendarFeedTokenScalarFieldEnum[];
};
export type CalendarFeedTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarFeedTokenCreateInput, Prisma.CalendarFeedTokenUncheckedCreateInput>;
};
export type CalendarFeedTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CalendarFeedTokenCreateManyInput | Prisma.CalendarFeedTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarFeedTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    data: Prisma.CalendarFeedTokenCreateManyInput | Prisma.CalendarFeedTokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CalendarFeedTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CalendarFeedTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarFeedTokenUpdateInput, Prisma.CalendarFeedTokenUncheckedUpdateInput>;
    where: Prisma.CalendarFeedTokenWhereUniqueInput;
};
export type CalendarFeedTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CalendarFeedTokenUpdateManyMutationInput, Prisma.CalendarFeedTokenUncheckedUpdateManyInput>;
    where?: Prisma.CalendarFeedTokenWhereInput;
    limit?: number;
};
export type CalendarFeedTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarFeedTokenUpdateManyMutationInput, Prisma.CalendarFeedTokenUncheckedUpdateManyInput>;
    where?: Prisma.CalendarFeedTokenWhereInput;
    limit?: number;
    include?: Prisma.CalendarFeedTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CalendarFeedTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    where: Prisma.CalendarFeedTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarFeedTokenCreateInput, Prisma.CalendarFeedTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CalendarFeedTokenUpdateInput, Prisma.CalendarFeedTokenUncheckedUpdateInput>;
};
export type CalendarFeedTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
    where: Prisma.CalendarFeedTokenWhereUniqueInput;
};
export type CalendarFeedTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarFeedTokenWhereInput;
    limit?: number;
};
export type CalendarFeedTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarFeedTokenSelect<ExtArgs> | null;
    omit?: Prisma.CalendarFeedTokenOmit<ExtArgs> | null;
    include?: Prisma.CalendarFeedTokenInclude<ExtArgs> | null;
};
