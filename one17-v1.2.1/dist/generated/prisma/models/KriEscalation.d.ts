import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KriEscalationModel = runtime.Types.Result.DefaultSelection<Prisma.$KriEscalationPayload>;
export type AggregateKriEscalation = {
    _count: KriEscalationCountAggregateOutputType | null;
    _min: KriEscalationMinAggregateOutputType | null;
    _max: KriEscalationMaxAggregateOutputType | null;
};
export type KriEscalationMinAggregateOutputType = {
    id: string | null;
    kriReadingId: string | null;
    kriCode: string | null;
    ledgerEntityCode: string | null;
    ragStatus: $Enums.KriRagStatus | null;
    ownerLabel: string | null;
    escalatedAt: Date | null;
    notifiedAt: Date | null;
};
export type KriEscalationMaxAggregateOutputType = {
    id: string | null;
    kriReadingId: string | null;
    kriCode: string | null;
    ledgerEntityCode: string | null;
    ragStatus: $Enums.KriRagStatus | null;
    ownerLabel: string | null;
    escalatedAt: Date | null;
    notifiedAt: Date | null;
};
export type KriEscalationCountAggregateOutputType = {
    id: number;
    kriReadingId: number;
    kriCode: number;
    ledgerEntityCode: number;
    ragStatus: number;
    ownerLabel: number;
    escalatedAt: number;
    notifiedAt: number;
    _all: number;
};
export type KriEscalationMinAggregateInputType = {
    id?: true;
    kriReadingId?: true;
    kriCode?: true;
    ledgerEntityCode?: true;
    ragStatus?: true;
    ownerLabel?: true;
    escalatedAt?: true;
    notifiedAt?: true;
};
export type KriEscalationMaxAggregateInputType = {
    id?: true;
    kriReadingId?: true;
    kriCode?: true;
    ledgerEntityCode?: true;
    ragStatus?: true;
    ownerLabel?: true;
    escalatedAt?: true;
    notifiedAt?: true;
};
export type KriEscalationCountAggregateInputType = {
    id?: true;
    kriReadingId?: true;
    kriCode?: true;
    ledgerEntityCode?: true;
    ragStatus?: true;
    ownerLabel?: true;
    escalatedAt?: true;
    notifiedAt?: true;
    _all?: true;
};
export type KriEscalationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriEscalationWhereInput;
    orderBy?: Prisma.KriEscalationOrderByWithRelationInput | Prisma.KriEscalationOrderByWithRelationInput[];
    cursor?: Prisma.KriEscalationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KriEscalationCountAggregateInputType;
    _min?: KriEscalationMinAggregateInputType;
    _max?: KriEscalationMaxAggregateInputType;
};
export type GetKriEscalationAggregateType<T extends KriEscalationAggregateArgs> = {
    [P in keyof T & keyof AggregateKriEscalation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKriEscalation[P]> : Prisma.GetScalarType<T[P], AggregateKriEscalation[P]>;
};
export type KriEscalationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriEscalationWhereInput;
    orderBy?: Prisma.KriEscalationOrderByWithAggregationInput | Prisma.KriEscalationOrderByWithAggregationInput[];
    by: Prisma.KriEscalationScalarFieldEnum[] | Prisma.KriEscalationScalarFieldEnum;
    having?: Prisma.KriEscalationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KriEscalationCountAggregateInputType | true;
    _min?: KriEscalationMinAggregateInputType;
    _max?: KriEscalationMaxAggregateInputType;
};
export type KriEscalationGroupByOutputType = {
    id: string;
    kriReadingId: string;
    kriCode: string;
    ledgerEntityCode: string | null;
    ragStatus: $Enums.KriRagStatus;
    ownerLabel: string | null;
    escalatedAt: Date;
    notifiedAt: Date | null;
    _count: KriEscalationCountAggregateOutputType | null;
    _min: KriEscalationMinAggregateOutputType | null;
    _max: KriEscalationMaxAggregateOutputType | null;
};
export type GetKriEscalationGroupByPayload<T extends KriEscalationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KriEscalationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KriEscalationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KriEscalationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KriEscalationGroupByOutputType[P]>;
}>>;
export type KriEscalationWhereInput = {
    AND?: Prisma.KriEscalationWhereInput | Prisma.KriEscalationWhereInput[];
    OR?: Prisma.KriEscalationWhereInput[];
    NOT?: Prisma.KriEscalationWhereInput | Prisma.KriEscalationWhereInput[];
    id?: Prisma.StringFilter<"KriEscalation"> | string;
    kriReadingId?: Prisma.StringFilter<"KriEscalation"> | string;
    kriCode?: Prisma.StringFilter<"KriEscalation"> | string;
    ledgerEntityCode?: Prisma.StringNullableFilter<"KriEscalation"> | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFilter<"KriEscalation"> | $Enums.KriRagStatus;
    ownerLabel?: Prisma.StringNullableFilter<"KriEscalation"> | string | null;
    escalatedAt?: Prisma.DateTimeFilter<"KriEscalation"> | Date | string;
    notifiedAt?: Prisma.DateTimeNullableFilter<"KriEscalation"> | Date | string | null;
};
export type KriEscalationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kriReadingId?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    ownerLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    escalatedAt?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type KriEscalationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.KriEscalationWhereInput | Prisma.KriEscalationWhereInput[];
    OR?: Prisma.KriEscalationWhereInput[];
    NOT?: Prisma.KriEscalationWhereInput | Prisma.KriEscalationWhereInput[];
    kriReadingId?: Prisma.StringFilter<"KriEscalation"> | string;
    kriCode?: Prisma.StringFilter<"KriEscalation"> | string;
    ledgerEntityCode?: Prisma.StringNullableFilter<"KriEscalation"> | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFilter<"KriEscalation"> | $Enums.KriRagStatus;
    ownerLabel?: Prisma.StringNullableFilter<"KriEscalation"> | string | null;
    escalatedAt?: Prisma.DateTimeFilter<"KriEscalation"> | Date | string;
    notifiedAt?: Prisma.DateTimeNullableFilter<"KriEscalation"> | Date | string | null;
}, "id">;
export type KriEscalationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kriReadingId?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    ownerLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    escalatedAt?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.KriEscalationCountOrderByAggregateInput;
    _max?: Prisma.KriEscalationMaxOrderByAggregateInput;
    _min?: Prisma.KriEscalationMinOrderByAggregateInput;
};
export type KriEscalationScalarWhereWithAggregatesInput = {
    AND?: Prisma.KriEscalationScalarWhereWithAggregatesInput | Prisma.KriEscalationScalarWhereWithAggregatesInput[];
    OR?: Prisma.KriEscalationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KriEscalationScalarWhereWithAggregatesInput | Prisma.KriEscalationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KriEscalation"> | string;
    kriReadingId?: Prisma.StringWithAggregatesFilter<"KriEscalation"> | string;
    kriCode?: Prisma.StringWithAggregatesFilter<"KriEscalation"> | string;
    ledgerEntityCode?: Prisma.StringNullableWithAggregatesFilter<"KriEscalation"> | string | null;
    ragStatus?: Prisma.EnumKriRagStatusWithAggregatesFilter<"KriEscalation"> | $Enums.KriRagStatus;
    ownerLabel?: Prisma.StringNullableWithAggregatesFilter<"KriEscalation"> | string | null;
    escalatedAt?: Prisma.DateTimeWithAggregatesFilter<"KriEscalation"> | Date | string;
    notifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"KriEscalation"> | Date | string | null;
};
export type KriEscalationCreateInput = {
    id?: string;
    kriReadingId: string;
    kriCode: string;
    ledgerEntityCode?: string | null;
    ragStatus: $Enums.KriRagStatus;
    ownerLabel?: string | null;
    escalatedAt?: Date | string;
    notifiedAt?: Date | string | null;
};
export type KriEscalationUncheckedCreateInput = {
    id?: string;
    kriReadingId: string;
    kriCode: string;
    ledgerEntityCode?: string | null;
    ragStatus: $Enums.KriRagStatus;
    ownerLabel?: string | null;
    escalatedAt?: Date | string;
    notifiedAt?: Date | string | null;
};
export type KriEscalationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kriReadingId?: Prisma.StringFieldUpdateOperationsInput | string;
    kriCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    ownerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    escalatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type KriEscalationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kriReadingId?: Prisma.StringFieldUpdateOperationsInput | string;
    kriCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    ownerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    escalatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type KriEscalationCreateManyInput = {
    id?: string;
    kriReadingId: string;
    kriCode: string;
    ledgerEntityCode?: string | null;
    ragStatus: $Enums.KriRagStatus;
    ownerLabel?: string | null;
    escalatedAt?: Date | string;
    notifiedAt?: Date | string | null;
};
export type KriEscalationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kriReadingId?: Prisma.StringFieldUpdateOperationsInput | string;
    kriCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    ownerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    escalatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type KriEscalationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kriReadingId?: Prisma.StringFieldUpdateOperationsInput | string;
    kriCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    ownerLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    escalatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type KriEscalationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kriReadingId?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    ownerLabel?: Prisma.SortOrder;
    escalatedAt?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
};
export type KriEscalationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kriReadingId?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    ownerLabel?: Prisma.SortOrder;
    escalatedAt?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
};
export type KriEscalationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kriReadingId?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    ownerLabel?: Prisma.SortOrder;
    escalatedAt?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
};
export type KriEscalationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kriReadingId?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    ragStatus?: boolean;
    ownerLabel?: boolean;
    escalatedAt?: boolean;
    notifiedAt?: boolean;
}, ExtArgs["result"]["kriEscalation"]>;
export type KriEscalationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kriReadingId?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    ragStatus?: boolean;
    ownerLabel?: boolean;
    escalatedAt?: boolean;
    notifiedAt?: boolean;
}, ExtArgs["result"]["kriEscalation"]>;
export type KriEscalationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kriReadingId?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    ragStatus?: boolean;
    ownerLabel?: boolean;
    escalatedAt?: boolean;
    notifiedAt?: boolean;
}, ExtArgs["result"]["kriEscalation"]>;
export type KriEscalationSelectScalar = {
    id?: boolean;
    kriReadingId?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    ragStatus?: boolean;
    ownerLabel?: boolean;
    escalatedAt?: boolean;
    notifiedAt?: boolean;
};
export type KriEscalationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kriReadingId" | "kriCode" | "ledgerEntityCode" | "ragStatus" | "ownerLabel" | "escalatedAt" | "notifiedAt", ExtArgs["result"]["kriEscalation"]>;
export type $KriEscalationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KriEscalation";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kriReadingId: string;
        kriCode: string;
        ledgerEntityCode: string | null;
        ragStatus: $Enums.KriRagStatus;
        ownerLabel: string | null;
        escalatedAt: Date;
        notifiedAt: Date | null;
    }, ExtArgs["result"]["kriEscalation"]>;
    composites: {};
};
export type KriEscalationGetPayload<S extends boolean | null | undefined | KriEscalationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload, S>;
export type KriEscalationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KriEscalationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KriEscalationCountAggregateInputType | true;
};
export interface KriEscalationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KriEscalation'];
        meta: {
            name: 'KriEscalation';
        };
    };
    findUnique<T extends KriEscalationFindUniqueArgs>(args: Prisma.SelectSubset<T, KriEscalationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KriEscalationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KriEscalationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KriEscalationFindFirstArgs>(args?: Prisma.SelectSubset<T, KriEscalationFindFirstArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KriEscalationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KriEscalationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KriEscalationFindManyArgs>(args?: Prisma.SelectSubset<T, KriEscalationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KriEscalationCreateArgs>(args: Prisma.SelectSubset<T, KriEscalationCreateArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KriEscalationCreateManyArgs>(args?: Prisma.SelectSubset<T, KriEscalationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KriEscalationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KriEscalationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KriEscalationDeleteArgs>(args: Prisma.SelectSubset<T, KriEscalationDeleteArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KriEscalationUpdateArgs>(args: Prisma.SelectSubset<T, KriEscalationUpdateArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KriEscalationDeleteManyArgs>(args?: Prisma.SelectSubset<T, KriEscalationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KriEscalationUpdateManyArgs>(args: Prisma.SelectSubset<T, KriEscalationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KriEscalationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KriEscalationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KriEscalationUpsertArgs>(args: Prisma.SelectSubset<T, KriEscalationUpsertArgs<ExtArgs>>): Prisma.Prisma__KriEscalationClient<runtime.Types.Result.GetResult<Prisma.$KriEscalationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KriEscalationCountArgs>(args?: Prisma.Subset<T, KriEscalationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KriEscalationCountAggregateOutputType> : number>;
    aggregate<T extends KriEscalationAggregateArgs>(args: Prisma.Subset<T, KriEscalationAggregateArgs>): Prisma.PrismaPromise<GetKriEscalationAggregateType<T>>;
    groupBy<T extends KriEscalationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KriEscalationGroupByArgs['orderBy'];
    } : {
        orderBy?: KriEscalationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KriEscalationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKriEscalationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KriEscalationFieldRefs;
}
export interface Prisma__KriEscalationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KriEscalationFieldRefs {
    readonly id: Prisma.FieldRef<"KriEscalation", 'String'>;
    readonly kriReadingId: Prisma.FieldRef<"KriEscalation", 'String'>;
    readonly kriCode: Prisma.FieldRef<"KriEscalation", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"KriEscalation", 'String'>;
    readonly ragStatus: Prisma.FieldRef<"KriEscalation", 'KriRagStatus'>;
    readonly ownerLabel: Prisma.FieldRef<"KriEscalation", 'String'>;
    readonly escalatedAt: Prisma.FieldRef<"KriEscalation", 'DateTime'>;
    readonly notifiedAt: Prisma.FieldRef<"KriEscalation", 'DateTime'>;
}
export type KriEscalationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    where: Prisma.KriEscalationWhereUniqueInput;
};
export type KriEscalationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    where: Prisma.KriEscalationWhereUniqueInput;
};
export type KriEscalationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    where?: Prisma.KriEscalationWhereInput;
    orderBy?: Prisma.KriEscalationOrderByWithRelationInput | Prisma.KriEscalationOrderByWithRelationInput[];
    cursor?: Prisma.KriEscalationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriEscalationScalarFieldEnum | Prisma.KriEscalationScalarFieldEnum[];
};
export type KriEscalationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    where?: Prisma.KriEscalationWhereInput;
    orderBy?: Prisma.KriEscalationOrderByWithRelationInput | Prisma.KriEscalationOrderByWithRelationInput[];
    cursor?: Prisma.KriEscalationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriEscalationScalarFieldEnum | Prisma.KriEscalationScalarFieldEnum[];
};
export type KriEscalationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    where?: Prisma.KriEscalationWhereInput;
    orderBy?: Prisma.KriEscalationOrderByWithRelationInput | Prisma.KriEscalationOrderByWithRelationInput[];
    cursor?: Prisma.KriEscalationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriEscalationScalarFieldEnum | Prisma.KriEscalationScalarFieldEnum[];
};
export type KriEscalationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriEscalationCreateInput, Prisma.KriEscalationUncheckedCreateInput>;
};
export type KriEscalationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KriEscalationCreateManyInput | Prisma.KriEscalationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KriEscalationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    data: Prisma.KriEscalationCreateManyInput | Prisma.KriEscalationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KriEscalationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriEscalationUpdateInput, Prisma.KriEscalationUncheckedUpdateInput>;
    where: Prisma.KriEscalationWhereUniqueInput;
};
export type KriEscalationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KriEscalationUpdateManyMutationInput, Prisma.KriEscalationUncheckedUpdateManyInput>;
    where?: Prisma.KriEscalationWhereInput;
    limit?: number;
};
export type KriEscalationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriEscalationUpdateManyMutationInput, Prisma.KriEscalationUncheckedUpdateManyInput>;
    where?: Prisma.KriEscalationWhereInput;
    limit?: number;
};
export type KriEscalationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    where: Prisma.KriEscalationWhereUniqueInput;
    create: Prisma.XOR<Prisma.KriEscalationCreateInput, Prisma.KriEscalationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KriEscalationUpdateInput, Prisma.KriEscalationUncheckedUpdateInput>;
};
export type KriEscalationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
    where: Prisma.KriEscalationWhereUniqueInput;
};
export type KriEscalationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriEscalationWhereInput;
    limit?: number;
};
export type KriEscalationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriEscalationSelect<ExtArgs> | null;
    omit?: Prisma.KriEscalationOmit<ExtArgs> | null;
};
