import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EventJournalConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$EventJournalConfigPayload>;
export type AggregateEventJournalConfig = {
    _count: EventJournalConfigCountAggregateOutputType | null;
    _avg: EventJournalConfigAvgAggregateOutputType | null;
    _sum: EventJournalConfigSumAggregateOutputType | null;
    _min: EventJournalConfigMinAggregateOutputType | null;
    _max: EventJournalConfigMaxAggregateOutputType | null;
};
export type EventJournalConfigAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type EventJournalConfigSumAggregateOutputType = {
    sortOrder: number | null;
};
export type EventJournalConfigMinAggregateOutputType = {
    id: string | null;
    sortOrder: number | null;
    eventType: string | null;
    jeReferencePattern: string | null;
    drAccountCode: string | null;
    drAccountName: string | null;
    crAccountCode: string | null;
    crAccountName: string | null;
    triggerDescription: string | null;
    createdAt: Date | null;
};
export type EventJournalConfigMaxAggregateOutputType = {
    id: string | null;
    sortOrder: number | null;
    eventType: string | null;
    jeReferencePattern: string | null;
    drAccountCode: string | null;
    drAccountName: string | null;
    crAccountCode: string | null;
    crAccountName: string | null;
    triggerDescription: string | null;
    createdAt: Date | null;
};
export type EventJournalConfigCountAggregateOutputType = {
    id: number;
    sortOrder: number;
    eventType: number;
    jeReferencePattern: number;
    drAccountCode: number;
    drAccountName: number;
    crAccountCode: number;
    crAccountName: number;
    triggerDescription: number;
    createdAt: number;
    _all: number;
};
export type EventJournalConfigAvgAggregateInputType = {
    sortOrder?: true;
};
export type EventJournalConfigSumAggregateInputType = {
    sortOrder?: true;
};
export type EventJournalConfigMinAggregateInputType = {
    id?: true;
    sortOrder?: true;
    eventType?: true;
    jeReferencePattern?: true;
    drAccountCode?: true;
    drAccountName?: true;
    crAccountCode?: true;
    crAccountName?: true;
    triggerDescription?: true;
    createdAt?: true;
};
export type EventJournalConfigMaxAggregateInputType = {
    id?: true;
    sortOrder?: true;
    eventType?: true;
    jeReferencePattern?: true;
    drAccountCode?: true;
    drAccountName?: true;
    crAccountCode?: true;
    crAccountName?: true;
    triggerDescription?: true;
    createdAt?: true;
};
export type EventJournalConfigCountAggregateInputType = {
    id?: true;
    sortOrder?: true;
    eventType?: true;
    jeReferencePattern?: true;
    drAccountCode?: true;
    drAccountName?: true;
    crAccountCode?: true;
    crAccountName?: true;
    triggerDescription?: true;
    createdAt?: true;
    _all?: true;
};
export type EventJournalConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventJournalConfigWhereInput;
    orderBy?: Prisma.EventJournalConfigOrderByWithRelationInput | Prisma.EventJournalConfigOrderByWithRelationInput[];
    cursor?: Prisma.EventJournalConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventJournalConfigCountAggregateInputType;
    _avg?: EventJournalConfigAvgAggregateInputType;
    _sum?: EventJournalConfigSumAggregateInputType;
    _min?: EventJournalConfigMinAggregateInputType;
    _max?: EventJournalConfigMaxAggregateInputType;
};
export type GetEventJournalConfigAggregateType<T extends EventJournalConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateEventJournalConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventJournalConfig[P]> : Prisma.GetScalarType<T[P], AggregateEventJournalConfig[P]>;
};
export type EventJournalConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventJournalConfigWhereInput;
    orderBy?: Prisma.EventJournalConfigOrderByWithAggregationInput | Prisma.EventJournalConfigOrderByWithAggregationInput[];
    by: Prisma.EventJournalConfigScalarFieldEnum[] | Prisma.EventJournalConfigScalarFieldEnum;
    having?: Prisma.EventJournalConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventJournalConfigCountAggregateInputType | true;
    _avg?: EventJournalConfigAvgAggregateInputType;
    _sum?: EventJournalConfigSumAggregateInputType;
    _min?: EventJournalConfigMinAggregateInputType;
    _max?: EventJournalConfigMaxAggregateInputType;
};
export type EventJournalConfigGroupByOutputType = {
    id: string;
    sortOrder: number;
    eventType: string;
    jeReferencePattern: string;
    drAccountCode: string;
    drAccountName: string;
    crAccountCode: string;
    crAccountName: string;
    triggerDescription: string;
    createdAt: Date;
    _count: EventJournalConfigCountAggregateOutputType | null;
    _avg: EventJournalConfigAvgAggregateOutputType | null;
    _sum: EventJournalConfigSumAggregateOutputType | null;
    _min: EventJournalConfigMinAggregateOutputType | null;
    _max: EventJournalConfigMaxAggregateOutputType | null;
};
export type GetEventJournalConfigGroupByPayload<T extends EventJournalConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventJournalConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventJournalConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventJournalConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventJournalConfigGroupByOutputType[P]>;
}>>;
export type EventJournalConfigWhereInput = {
    AND?: Prisma.EventJournalConfigWhereInput | Prisma.EventJournalConfigWhereInput[];
    OR?: Prisma.EventJournalConfigWhereInput[];
    NOT?: Prisma.EventJournalConfigWhereInput | Prisma.EventJournalConfigWhereInput[];
    id?: Prisma.UuidFilter<"EventJournalConfig"> | string;
    sortOrder?: Prisma.IntFilter<"EventJournalConfig"> | number;
    eventType?: Prisma.StringFilter<"EventJournalConfig"> | string;
    jeReferencePattern?: Prisma.StringFilter<"EventJournalConfig"> | string;
    drAccountCode?: Prisma.StringFilter<"EventJournalConfig"> | string;
    drAccountName?: Prisma.StringFilter<"EventJournalConfig"> | string;
    crAccountCode?: Prisma.StringFilter<"EventJournalConfig"> | string;
    crAccountName?: Prisma.StringFilter<"EventJournalConfig"> | string;
    triggerDescription?: Prisma.StringFilter<"EventJournalConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"EventJournalConfig"> | Date | string;
};
export type EventJournalConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    jeReferencePattern?: Prisma.SortOrder;
    drAccountCode?: Prisma.SortOrder;
    drAccountName?: Prisma.SortOrder;
    crAccountCode?: Prisma.SortOrder;
    crAccountName?: Prisma.SortOrder;
    triggerDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EventJournalConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventType?: string;
    AND?: Prisma.EventJournalConfigWhereInput | Prisma.EventJournalConfigWhereInput[];
    OR?: Prisma.EventJournalConfigWhereInput[];
    NOT?: Prisma.EventJournalConfigWhereInput | Prisma.EventJournalConfigWhereInput[];
    sortOrder?: Prisma.IntFilter<"EventJournalConfig"> | number;
    jeReferencePattern?: Prisma.StringFilter<"EventJournalConfig"> | string;
    drAccountCode?: Prisma.StringFilter<"EventJournalConfig"> | string;
    drAccountName?: Prisma.StringFilter<"EventJournalConfig"> | string;
    crAccountCode?: Prisma.StringFilter<"EventJournalConfig"> | string;
    crAccountName?: Prisma.StringFilter<"EventJournalConfig"> | string;
    triggerDescription?: Prisma.StringFilter<"EventJournalConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"EventJournalConfig"> | Date | string;
}, "id" | "eventType">;
export type EventJournalConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    jeReferencePattern?: Prisma.SortOrder;
    drAccountCode?: Prisma.SortOrder;
    drAccountName?: Prisma.SortOrder;
    crAccountCode?: Prisma.SortOrder;
    crAccountName?: Prisma.SortOrder;
    triggerDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EventJournalConfigCountOrderByAggregateInput;
    _avg?: Prisma.EventJournalConfigAvgOrderByAggregateInput;
    _max?: Prisma.EventJournalConfigMaxOrderByAggregateInput;
    _min?: Prisma.EventJournalConfigMinOrderByAggregateInput;
    _sum?: Prisma.EventJournalConfigSumOrderByAggregateInput;
};
export type EventJournalConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventJournalConfigScalarWhereWithAggregatesInput | Prisma.EventJournalConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventJournalConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventJournalConfigScalarWhereWithAggregatesInput | Prisma.EventJournalConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EventJournalConfig"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"EventJournalConfig"> | number;
    eventType?: Prisma.StringWithAggregatesFilter<"EventJournalConfig"> | string;
    jeReferencePattern?: Prisma.StringWithAggregatesFilter<"EventJournalConfig"> | string;
    drAccountCode?: Prisma.StringWithAggregatesFilter<"EventJournalConfig"> | string;
    drAccountName?: Prisma.StringWithAggregatesFilter<"EventJournalConfig"> | string;
    crAccountCode?: Prisma.StringWithAggregatesFilter<"EventJournalConfig"> | string;
    crAccountName?: Prisma.StringWithAggregatesFilter<"EventJournalConfig"> | string;
    triggerDescription?: Prisma.StringWithAggregatesFilter<"EventJournalConfig"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventJournalConfig"> | Date | string;
};
export type EventJournalConfigCreateInput = {
    id?: string;
    sortOrder: number;
    eventType: string;
    jeReferencePattern: string;
    drAccountCode: string;
    drAccountName: string;
    crAccountCode: string;
    crAccountName: string;
    triggerDescription: string;
    createdAt?: Date | string;
};
export type EventJournalConfigUncheckedCreateInput = {
    id?: string;
    sortOrder: number;
    eventType: string;
    jeReferencePattern: string;
    drAccountCode: string;
    drAccountName: string;
    crAccountCode: string;
    crAccountName: string;
    triggerDescription: string;
    createdAt?: Date | string;
};
export type EventJournalConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    jeReferencePattern?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventJournalConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    jeReferencePattern?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventJournalConfigCreateManyInput = {
    id?: string;
    sortOrder: number;
    eventType: string;
    jeReferencePattern: string;
    drAccountCode: string;
    drAccountName: string;
    crAccountCode: string;
    crAccountName: string;
    triggerDescription: string;
    createdAt?: Date | string;
};
export type EventJournalConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    jeReferencePattern?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventJournalConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    jeReferencePattern?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    drAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    crAccountName?: Prisma.StringFieldUpdateOperationsInput | string;
    triggerDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventJournalConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    jeReferencePattern?: Prisma.SortOrder;
    drAccountCode?: Prisma.SortOrder;
    drAccountName?: Prisma.SortOrder;
    crAccountCode?: Prisma.SortOrder;
    crAccountName?: Prisma.SortOrder;
    triggerDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EventJournalConfigAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type EventJournalConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    jeReferencePattern?: Prisma.SortOrder;
    drAccountCode?: Prisma.SortOrder;
    drAccountName?: Prisma.SortOrder;
    crAccountCode?: Prisma.SortOrder;
    crAccountName?: Prisma.SortOrder;
    triggerDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EventJournalConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    jeReferencePattern?: Prisma.SortOrder;
    drAccountCode?: Prisma.SortOrder;
    drAccountName?: Prisma.SortOrder;
    crAccountCode?: Prisma.SortOrder;
    crAccountName?: Prisma.SortOrder;
    triggerDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EventJournalConfigSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type EventJournalConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sortOrder?: boolean;
    eventType?: boolean;
    jeReferencePattern?: boolean;
    drAccountCode?: boolean;
    drAccountName?: boolean;
    crAccountCode?: boolean;
    crAccountName?: boolean;
    triggerDescription?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["eventJournalConfig"]>;
export type EventJournalConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sortOrder?: boolean;
    eventType?: boolean;
    jeReferencePattern?: boolean;
    drAccountCode?: boolean;
    drAccountName?: boolean;
    crAccountCode?: boolean;
    crAccountName?: boolean;
    triggerDescription?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["eventJournalConfig"]>;
export type EventJournalConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sortOrder?: boolean;
    eventType?: boolean;
    jeReferencePattern?: boolean;
    drAccountCode?: boolean;
    drAccountName?: boolean;
    crAccountCode?: boolean;
    crAccountName?: boolean;
    triggerDescription?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["eventJournalConfig"]>;
export type EventJournalConfigSelectScalar = {
    id?: boolean;
    sortOrder?: boolean;
    eventType?: boolean;
    jeReferencePattern?: boolean;
    drAccountCode?: boolean;
    drAccountName?: boolean;
    crAccountCode?: boolean;
    crAccountName?: boolean;
    triggerDescription?: boolean;
    createdAt?: boolean;
};
export type EventJournalConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sortOrder" | "eventType" | "jeReferencePattern" | "drAccountCode" | "drAccountName" | "crAccountCode" | "crAccountName" | "triggerDescription" | "createdAt", ExtArgs["result"]["eventJournalConfig"]>;
export type $EventJournalConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventJournalConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sortOrder: number;
        eventType: string;
        jeReferencePattern: string;
        drAccountCode: string;
        drAccountName: string;
        crAccountCode: string;
        crAccountName: string;
        triggerDescription: string;
        createdAt: Date;
    }, ExtArgs["result"]["eventJournalConfig"]>;
    composites: {};
};
export type EventJournalConfigGetPayload<S extends boolean | null | undefined | EventJournalConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload, S>;
export type EventJournalConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventJournalConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventJournalConfigCountAggregateInputType | true;
};
export interface EventJournalConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventJournalConfig'];
        meta: {
            name: 'EventJournalConfig';
        };
    };
    findUnique<T extends EventJournalConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, EventJournalConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventJournalConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventJournalConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventJournalConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, EventJournalConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventJournalConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventJournalConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventJournalConfigFindManyArgs>(args?: Prisma.SelectSubset<T, EventJournalConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventJournalConfigCreateArgs>(args: Prisma.SelectSubset<T, EventJournalConfigCreateArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventJournalConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, EventJournalConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EventJournalConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventJournalConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EventJournalConfigDeleteArgs>(args: Prisma.SelectSubset<T, EventJournalConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventJournalConfigUpdateArgs>(args: Prisma.SelectSubset<T, EventJournalConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventJournalConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventJournalConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventJournalConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, EventJournalConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EventJournalConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventJournalConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EventJournalConfigUpsertArgs>(args: Prisma.SelectSubset<T, EventJournalConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__EventJournalConfigClient<runtime.Types.Result.GetResult<Prisma.$EventJournalConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventJournalConfigCountArgs>(args?: Prisma.Subset<T, EventJournalConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventJournalConfigCountAggregateOutputType> : number>;
    aggregate<T extends EventJournalConfigAggregateArgs>(args: Prisma.Subset<T, EventJournalConfigAggregateArgs>): Prisma.PrismaPromise<GetEventJournalConfigAggregateType<T>>;
    groupBy<T extends EventJournalConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventJournalConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: EventJournalConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventJournalConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventJournalConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventJournalConfigFieldRefs;
}
export interface Prisma__EventJournalConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventJournalConfigFieldRefs {
    readonly id: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"EventJournalConfig", 'Int'>;
    readonly eventType: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly jeReferencePattern: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly drAccountCode: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly drAccountName: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly crAccountCode: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly crAccountName: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly triggerDescription: Prisma.FieldRef<"EventJournalConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EventJournalConfig", 'DateTime'>;
}
export type EventJournalConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    where: Prisma.EventJournalConfigWhereUniqueInput;
};
export type EventJournalConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    where: Prisma.EventJournalConfigWhereUniqueInput;
};
export type EventJournalConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    where?: Prisma.EventJournalConfigWhereInput;
    orderBy?: Prisma.EventJournalConfigOrderByWithRelationInput | Prisma.EventJournalConfigOrderByWithRelationInput[];
    cursor?: Prisma.EventJournalConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventJournalConfigScalarFieldEnum | Prisma.EventJournalConfigScalarFieldEnum[];
};
export type EventJournalConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    where?: Prisma.EventJournalConfigWhereInput;
    orderBy?: Prisma.EventJournalConfigOrderByWithRelationInput | Prisma.EventJournalConfigOrderByWithRelationInput[];
    cursor?: Prisma.EventJournalConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventJournalConfigScalarFieldEnum | Prisma.EventJournalConfigScalarFieldEnum[];
};
export type EventJournalConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    where?: Prisma.EventJournalConfigWhereInput;
    orderBy?: Prisma.EventJournalConfigOrderByWithRelationInput | Prisma.EventJournalConfigOrderByWithRelationInput[];
    cursor?: Prisma.EventJournalConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventJournalConfigScalarFieldEnum | Prisma.EventJournalConfigScalarFieldEnum[];
};
export type EventJournalConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventJournalConfigCreateInput, Prisma.EventJournalConfigUncheckedCreateInput>;
};
export type EventJournalConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventJournalConfigCreateManyInput | Prisma.EventJournalConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventJournalConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    data: Prisma.EventJournalConfigCreateManyInput | Prisma.EventJournalConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventJournalConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventJournalConfigUpdateInput, Prisma.EventJournalConfigUncheckedUpdateInput>;
    where: Prisma.EventJournalConfigWhereUniqueInput;
};
export type EventJournalConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventJournalConfigUpdateManyMutationInput, Prisma.EventJournalConfigUncheckedUpdateManyInput>;
    where?: Prisma.EventJournalConfigWhereInput;
    limit?: number;
};
export type EventJournalConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventJournalConfigUpdateManyMutationInput, Prisma.EventJournalConfigUncheckedUpdateManyInput>;
    where?: Prisma.EventJournalConfigWhereInput;
    limit?: number;
};
export type EventJournalConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    where: Prisma.EventJournalConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventJournalConfigCreateInput, Prisma.EventJournalConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventJournalConfigUpdateInput, Prisma.EventJournalConfigUncheckedUpdateInput>;
};
export type EventJournalConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
    where: Prisma.EventJournalConfigWhereUniqueInput;
};
export type EventJournalConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventJournalConfigWhereInput;
    limit?: number;
};
export type EventJournalConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventJournalConfigSelect<ExtArgs> | null;
    omit?: Prisma.EventJournalConfigOmit<ExtArgs> | null;
};
