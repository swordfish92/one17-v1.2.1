import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MarketingSubscriberModel = runtime.Types.Result.DefaultSelection<Prisma.$MarketingSubscriberPayload>;
export type AggregateMarketingSubscriber = {
    _count: MarketingSubscriberCountAggregateOutputType | null;
    _avg: MarketingSubscriberAvgAggregateOutputType | null;
    _sum: MarketingSubscriberSumAggregateOutputType | null;
    _min: MarketingSubscriberMinAggregateOutputType | null;
    _max: MarketingSubscriberMaxAggregateOutputType | null;
};
export type MarketingSubscriberAvgAggregateOutputType = {
    consentNoticeVersion: number | null;
};
export type MarketingSubscriberSumAggregateOutputType = {
    consentNoticeVersion: number | null;
};
export type MarketingSubscriberMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    fullName: string | null;
    subscribed: boolean | null;
    unsubscribeToken: string | null;
    subscribedAt: Date | null;
    unsubscribedAt: Date | null;
    consentedAt: Date | null;
    consentNoticeVersion: number | null;
};
export type MarketingSubscriberMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    fullName: string | null;
    subscribed: boolean | null;
    unsubscribeToken: string | null;
    subscribedAt: Date | null;
    unsubscribedAt: Date | null;
    consentedAt: Date | null;
    consentNoticeVersion: number | null;
};
export type MarketingSubscriberCountAggregateOutputType = {
    id: number;
    email: number;
    fullName: number;
    segments: number;
    subscribed: number;
    unsubscribeToken: number;
    subscribedAt: number;
    unsubscribedAt: number;
    consentedAt: number;
    consentNoticeVersion: number;
    _all: number;
};
export type MarketingSubscriberAvgAggregateInputType = {
    consentNoticeVersion?: true;
};
export type MarketingSubscriberSumAggregateInputType = {
    consentNoticeVersion?: true;
};
export type MarketingSubscriberMinAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    subscribed?: true;
    unsubscribeToken?: true;
    subscribedAt?: true;
    unsubscribedAt?: true;
    consentedAt?: true;
    consentNoticeVersion?: true;
};
export type MarketingSubscriberMaxAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    subscribed?: true;
    unsubscribeToken?: true;
    subscribedAt?: true;
    unsubscribedAt?: true;
    consentedAt?: true;
    consentNoticeVersion?: true;
};
export type MarketingSubscriberCountAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    segments?: true;
    subscribed?: true;
    unsubscribeToken?: true;
    subscribedAt?: true;
    unsubscribedAt?: true;
    consentedAt?: true;
    consentNoticeVersion?: true;
    _all?: true;
};
export type MarketingSubscriberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingSubscriberWhereInput;
    orderBy?: Prisma.MarketingSubscriberOrderByWithRelationInput | Prisma.MarketingSubscriberOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSubscriberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MarketingSubscriberCountAggregateInputType;
    _avg?: MarketingSubscriberAvgAggregateInputType;
    _sum?: MarketingSubscriberSumAggregateInputType;
    _min?: MarketingSubscriberMinAggregateInputType;
    _max?: MarketingSubscriberMaxAggregateInputType;
};
export type GetMarketingSubscriberAggregateType<T extends MarketingSubscriberAggregateArgs> = {
    [P in keyof T & keyof AggregateMarketingSubscriber]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMarketingSubscriber[P]> : Prisma.GetScalarType<T[P], AggregateMarketingSubscriber[P]>;
};
export type MarketingSubscriberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingSubscriberWhereInput;
    orderBy?: Prisma.MarketingSubscriberOrderByWithAggregationInput | Prisma.MarketingSubscriberOrderByWithAggregationInput[];
    by: Prisma.MarketingSubscriberScalarFieldEnum[] | Prisma.MarketingSubscriberScalarFieldEnum;
    having?: Prisma.MarketingSubscriberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarketingSubscriberCountAggregateInputType | true;
    _avg?: MarketingSubscriberAvgAggregateInputType;
    _sum?: MarketingSubscriberSumAggregateInputType;
    _min?: MarketingSubscriberMinAggregateInputType;
    _max?: MarketingSubscriberMaxAggregateInputType;
};
export type MarketingSubscriberGroupByOutputType = {
    id: string;
    email: string;
    fullName: string | null;
    segments: string[];
    subscribed: boolean;
    unsubscribeToken: string;
    subscribedAt: Date;
    unsubscribedAt: Date | null;
    consentedAt: Date | null;
    consentNoticeVersion: number | null;
    _count: MarketingSubscriberCountAggregateOutputType | null;
    _avg: MarketingSubscriberAvgAggregateOutputType | null;
    _sum: MarketingSubscriberSumAggregateOutputType | null;
    _min: MarketingSubscriberMinAggregateOutputType | null;
    _max: MarketingSubscriberMaxAggregateOutputType | null;
};
export type GetMarketingSubscriberGroupByPayload<T extends MarketingSubscriberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MarketingSubscriberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MarketingSubscriberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MarketingSubscriberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MarketingSubscriberGroupByOutputType[P]>;
}>>;
export type MarketingSubscriberWhereInput = {
    AND?: Prisma.MarketingSubscriberWhereInput | Prisma.MarketingSubscriberWhereInput[];
    OR?: Prisma.MarketingSubscriberWhereInput[];
    NOT?: Prisma.MarketingSubscriberWhereInput | Prisma.MarketingSubscriberWhereInput[];
    id?: Prisma.UuidFilter<"MarketingSubscriber"> | string;
    email?: Prisma.StringFilter<"MarketingSubscriber"> | string;
    fullName?: Prisma.StringNullableFilter<"MarketingSubscriber"> | string | null;
    segments?: Prisma.StringNullableListFilter<"MarketingSubscriber">;
    subscribed?: Prisma.BoolFilter<"MarketingSubscriber"> | boolean;
    unsubscribeToken?: Prisma.StringFilter<"MarketingSubscriber"> | string;
    subscribedAt?: Prisma.DateTimeFilter<"MarketingSubscriber"> | Date | string;
    unsubscribedAt?: Prisma.DateTimeNullableFilter<"MarketingSubscriber"> | Date | string | null;
    consentedAt?: Prisma.DateTimeNullableFilter<"MarketingSubscriber"> | Date | string | null;
    consentNoticeVersion?: Prisma.IntNullableFilter<"MarketingSubscriber"> | number | null;
};
export type MarketingSubscriberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    segments?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    unsubscribeToken?: Prisma.SortOrder;
    subscribedAt?: Prisma.SortOrder;
    unsubscribedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    consentedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    consentNoticeVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type MarketingSubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    unsubscribeToken?: string;
    AND?: Prisma.MarketingSubscriberWhereInput | Prisma.MarketingSubscriberWhereInput[];
    OR?: Prisma.MarketingSubscriberWhereInput[];
    NOT?: Prisma.MarketingSubscriberWhereInput | Prisma.MarketingSubscriberWhereInput[];
    fullName?: Prisma.StringNullableFilter<"MarketingSubscriber"> | string | null;
    segments?: Prisma.StringNullableListFilter<"MarketingSubscriber">;
    subscribed?: Prisma.BoolFilter<"MarketingSubscriber"> | boolean;
    subscribedAt?: Prisma.DateTimeFilter<"MarketingSubscriber"> | Date | string;
    unsubscribedAt?: Prisma.DateTimeNullableFilter<"MarketingSubscriber"> | Date | string | null;
    consentedAt?: Prisma.DateTimeNullableFilter<"MarketingSubscriber"> | Date | string | null;
    consentNoticeVersion?: Prisma.IntNullableFilter<"MarketingSubscriber"> | number | null;
}, "id" | "email" | "unsubscribeToken">;
export type MarketingSubscriberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    segments?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    unsubscribeToken?: Prisma.SortOrder;
    subscribedAt?: Prisma.SortOrder;
    unsubscribedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    consentedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    consentNoticeVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MarketingSubscriberCountOrderByAggregateInput;
    _avg?: Prisma.MarketingSubscriberAvgOrderByAggregateInput;
    _max?: Prisma.MarketingSubscriberMaxOrderByAggregateInput;
    _min?: Prisma.MarketingSubscriberMinOrderByAggregateInput;
    _sum?: Prisma.MarketingSubscriberSumOrderByAggregateInput;
};
export type MarketingSubscriberScalarWhereWithAggregatesInput = {
    AND?: Prisma.MarketingSubscriberScalarWhereWithAggregatesInput | Prisma.MarketingSubscriberScalarWhereWithAggregatesInput[];
    OR?: Prisma.MarketingSubscriberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MarketingSubscriberScalarWhereWithAggregatesInput | Prisma.MarketingSubscriberScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MarketingSubscriber"> | string;
    email?: Prisma.StringWithAggregatesFilter<"MarketingSubscriber"> | string;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"MarketingSubscriber"> | string | null;
    segments?: Prisma.StringNullableListFilter<"MarketingSubscriber">;
    subscribed?: Prisma.BoolWithAggregatesFilter<"MarketingSubscriber"> | boolean;
    unsubscribeToken?: Prisma.StringWithAggregatesFilter<"MarketingSubscriber"> | string;
    subscribedAt?: Prisma.DateTimeWithAggregatesFilter<"MarketingSubscriber"> | Date | string;
    unsubscribedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MarketingSubscriber"> | Date | string | null;
    consentedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MarketingSubscriber"> | Date | string | null;
    consentNoticeVersion?: Prisma.IntNullableWithAggregatesFilter<"MarketingSubscriber"> | number | null;
};
export type MarketingSubscriberCreateInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    segments?: Prisma.MarketingSubscriberCreatesegmentsInput | string[];
    subscribed?: boolean;
    unsubscribeToken: string;
    subscribedAt?: Date | string;
    unsubscribedAt?: Date | string | null;
    consentedAt?: Date | string | null;
    consentNoticeVersion?: number | null;
};
export type MarketingSubscriberUncheckedCreateInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    segments?: Prisma.MarketingSubscriberCreatesegmentsInput | string[];
    subscribed?: boolean;
    unsubscribeToken: string;
    subscribedAt?: Date | string;
    unsubscribedAt?: Date | string | null;
    consentedAt?: Date | string | null;
    consentNoticeVersion?: number | null;
};
export type MarketingSubscriberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    segments?: Prisma.MarketingSubscriberUpdatesegmentsInput | string[];
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unsubscribeToken?: Prisma.StringFieldUpdateOperationsInput | string;
    subscribedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unsubscribedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentNoticeVersion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MarketingSubscriberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    segments?: Prisma.MarketingSubscriberUpdatesegmentsInput | string[];
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unsubscribeToken?: Prisma.StringFieldUpdateOperationsInput | string;
    subscribedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unsubscribedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentNoticeVersion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MarketingSubscriberCreateManyInput = {
    id?: string;
    email: string;
    fullName?: string | null;
    segments?: Prisma.MarketingSubscriberCreatesegmentsInput | string[];
    subscribed?: boolean;
    unsubscribeToken: string;
    subscribedAt?: Date | string;
    unsubscribedAt?: Date | string | null;
    consentedAt?: Date | string | null;
    consentNoticeVersion?: number | null;
};
export type MarketingSubscriberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    segments?: Prisma.MarketingSubscriberUpdatesegmentsInput | string[];
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unsubscribeToken?: Prisma.StringFieldUpdateOperationsInput | string;
    subscribedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unsubscribedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentNoticeVersion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MarketingSubscriberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    segments?: Prisma.MarketingSubscriberUpdatesegmentsInput | string[];
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unsubscribeToken?: Prisma.StringFieldUpdateOperationsInput | string;
    subscribedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unsubscribedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    consentNoticeVersion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MarketingSubscriberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    segments?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    unsubscribeToken?: Prisma.SortOrder;
    subscribedAt?: Prisma.SortOrder;
    unsubscribedAt?: Prisma.SortOrder;
    consentedAt?: Prisma.SortOrder;
    consentNoticeVersion?: Prisma.SortOrder;
};
export type MarketingSubscriberAvgOrderByAggregateInput = {
    consentNoticeVersion?: Prisma.SortOrder;
};
export type MarketingSubscriberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    unsubscribeToken?: Prisma.SortOrder;
    subscribedAt?: Prisma.SortOrder;
    unsubscribedAt?: Prisma.SortOrder;
    consentedAt?: Prisma.SortOrder;
    consentNoticeVersion?: Prisma.SortOrder;
};
export type MarketingSubscriberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    unsubscribeToken?: Prisma.SortOrder;
    subscribedAt?: Prisma.SortOrder;
    unsubscribedAt?: Prisma.SortOrder;
    consentedAt?: Prisma.SortOrder;
    consentNoticeVersion?: Prisma.SortOrder;
};
export type MarketingSubscriberSumOrderByAggregateInput = {
    consentNoticeVersion?: Prisma.SortOrder;
};
export type MarketingSubscriberCreatesegmentsInput = {
    set: string[];
};
export type MarketingSubscriberUpdatesegmentsInput = {
    set?: string[];
    push?: string | string[];
};
export type MarketingSubscriberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    segments?: boolean;
    subscribed?: boolean;
    unsubscribeToken?: boolean;
    subscribedAt?: boolean;
    unsubscribedAt?: boolean;
    consentedAt?: boolean;
    consentNoticeVersion?: boolean;
}, ExtArgs["result"]["marketingSubscriber"]>;
export type MarketingSubscriberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    segments?: boolean;
    subscribed?: boolean;
    unsubscribeToken?: boolean;
    subscribedAt?: boolean;
    unsubscribedAt?: boolean;
    consentedAt?: boolean;
    consentNoticeVersion?: boolean;
}, ExtArgs["result"]["marketingSubscriber"]>;
export type MarketingSubscriberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    segments?: boolean;
    subscribed?: boolean;
    unsubscribeToken?: boolean;
    subscribedAt?: boolean;
    unsubscribedAt?: boolean;
    consentedAt?: boolean;
    consentNoticeVersion?: boolean;
}, ExtArgs["result"]["marketingSubscriber"]>;
export type MarketingSubscriberSelectScalar = {
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    segments?: boolean;
    subscribed?: boolean;
    unsubscribeToken?: boolean;
    subscribedAt?: boolean;
    unsubscribedAt?: boolean;
    consentedAt?: boolean;
    consentNoticeVersion?: boolean;
};
export type MarketingSubscriberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "fullName" | "segments" | "subscribed" | "unsubscribeToken" | "subscribedAt" | "unsubscribedAt" | "consentedAt" | "consentNoticeVersion", ExtArgs["result"]["marketingSubscriber"]>;
export type $MarketingSubscriberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MarketingSubscriber";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        fullName: string | null;
        segments: string[];
        subscribed: boolean;
        unsubscribeToken: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        consentedAt: Date | null;
        consentNoticeVersion: number | null;
    }, ExtArgs["result"]["marketingSubscriber"]>;
    composites: {};
};
export type MarketingSubscriberGetPayload<S extends boolean | null | undefined | MarketingSubscriberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload, S>;
export type MarketingSubscriberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MarketingSubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MarketingSubscriberCountAggregateInputType | true;
};
export interface MarketingSubscriberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MarketingSubscriber'];
        meta: {
            name: 'MarketingSubscriber';
        };
    };
    findUnique<T extends MarketingSubscriberFindUniqueArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MarketingSubscriberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MarketingSubscriberFindFirstArgs>(args?: Prisma.SelectSubset<T, MarketingSubscriberFindFirstArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MarketingSubscriberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MarketingSubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MarketingSubscriberFindManyArgs>(args?: Prisma.SelectSubset<T, MarketingSubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MarketingSubscriberCreateArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberCreateArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MarketingSubscriberCreateManyArgs>(args?: Prisma.SelectSubset<T, MarketingSubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MarketingSubscriberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MarketingSubscriberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MarketingSubscriberDeleteArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberDeleteArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MarketingSubscriberUpdateArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberUpdateArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MarketingSubscriberDeleteManyArgs>(args?: Prisma.SelectSubset<T, MarketingSubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MarketingSubscriberUpdateManyArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MarketingSubscriberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MarketingSubscriberUpsertArgs>(args: Prisma.SelectSubset<T, MarketingSubscriberUpsertArgs<ExtArgs>>): Prisma.Prisma__MarketingSubscriberClient<runtime.Types.Result.GetResult<Prisma.$MarketingSubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MarketingSubscriberCountArgs>(args?: Prisma.Subset<T, MarketingSubscriberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MarketingSubscriberCountAggregateOutputType> : number>;
    aggregate<T extends MarketingSubscriberAggregateArgs>(args: Prisma.Subset<T, MarketingSubscriberAggregateArgs>): Prisma.PrismaPromise<GetMarketingSubscriberAggregateType<T>>;
    groupBy<T extends MarketingSubscriberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MarketingSubscriberGroupByArgs['orderBy'];
    } : {
        orderBy?: MarketingSubscriberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MarketingSubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MarketingSubscriberFieldRefs;
}
export interface Prisma__MarketingSubscriberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MarketingSubscriberFieldRefs {
    readonly id: Prisma.FieldRef<"MarketingSubscriber", 'String'>;
    readonly email: Prisma.FieldRef<"MarketingSubscriber", 'String'>;
    readonly fullName: Prisma.FieldRef<"MarketingSubscriber", 'String'>;
    readonly segments: Prisma.FieldRef<"MarketingSubscriber", 'String[]'>;
    readonly subscribed: Prisma.FieldRef<"MarketingSubscriber", 'Boolean'>;
    readonly unsubscribeToken: Prisma.FieldRef<"MarketingSubscriber", 'String'>;
    readonly subscribedAt: Prisma.FieldRef<"MarketingSubscriber", 'DateTime'>;
    readonly unsubscribedAt: Prisma.FieldRef<"MarketingSubscriber", 'DateTime'>;
    readonly consentedAt: Prisma.FieldRef<"MarketingSubscriber", 'DateTime'>;
    readonly consentNoticeVersion: Prisma.FieldRef<"MarketingSubscriber", 'Int'>;
}
export type MarketingSubscriberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    where: Prisma.MarketingSubscriberWhereUniqueInput;
};
export type MarketingSubscriberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    where: Prisma.MarketingSubscriberWhereUniqueInput;
};
export type MarketingSubscriberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    where?: Prisma.MarketingSubscriberWhereInput;
    orderBy?: Prisma.MarketingSubscriberOrderByWithRelationInput | Prisma.MarketingSubscriberOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSubscriberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingSubscriberScalarFieldEnum | Prisma.MarketingSubscriberScalarFieldEnum[];
};
export type MarketingSubscriberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    where?: Prisma.MarketingSubscriberWhereInput;
    orderBy?: Prisma.MarketingSubscriberOrderByWithRelationInput | Prisma.MarketingSubscriberOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSubscriberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingSubscriberScalarFieldEnum | Prisma.MarketingSubscriberScalarFieldEnum[];
};
export type MarketingSubscriberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    where?: Prisma.MarketingSubscriberWhereInput;
    orderBy?: Prisma.MarketingSubscriberOrderByWithRelationInput | Prisma.MarketingSubscriberOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSubscriberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingSubscriberScalarFieldEnum | Prisma.MarketingSubscriberScalarFieldEnum[];
};
export type MarketingSubscriberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingSubscriberCreateInput, Prisma.MarketingSubscriberUncheckedCreateInput>;
};
export type MarketingSubscriberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MarketingSubscriberCreateManyInput | Prisma.MarketingSubscriberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MarketingSubscriberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    data: Prisma.MarketingSubscriberCreateManyInput | Prisma.MarketingSubscriberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MarketingSubscriberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingSubscriberUpdateInput, Prisma.MarketingSubscriberUncheckedUpdateInput>;
    where: Prisma.MarketingSubscriberWhereUniqueInput;
};
export type MarketingSubscriberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MarketingSubscriberUpdateManyMutationInput, Prisma.MarketingSubscriberUncheckedUpdateManyInput>;
    where?: Prisma.MarketingSubscriberWhereInput;
    limit?: number;
};
export type MarketingSubscriberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingSubscriberUpdateManyMutationInput, Prisma.MarketingSubscriberUncheckedUpdateManyInput>;
    where?: Prisma.MarketingSubscriberWhereInput;
    limit?: number;
};
export type MarketingSubscriberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    where: Prisma.MarketingSubscriberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingSubscriberCreateInput, Prisma.MarketingSubscriberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MarketingSubscriberUpdateInput, Prisma.MarketingSubscriberUncheckedUpdateInput>;
};
export type MarketingSubscriberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
    where: Prisma.MarketingSubscriberWhereUniqueInput;
};
export type MarketingSubscriberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingSubscriberWhereInput;
    limit?: number;
};
export type MarketingSubscriberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSubscriberSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSubscriberOmit<ExtArgs> | null;
};
