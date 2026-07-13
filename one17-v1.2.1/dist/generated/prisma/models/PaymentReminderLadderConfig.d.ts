import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentReminderLadderConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentReminderLadderConfigPayload>;
export type AggregatePaymentReminderLadderConfig = {
    _count: PaymentReminderLadderConfigCountAggregateOutputType | null;
    _avg: PaymentReminderLadderConfigAvgAggregateOutputType | null;
    _sum: PaymentReminderLadderConfigSumAggregateOutputType | null;
    _min: PaymentReminderLadderConfigMinAggregateOutputType | null;
    _max: PaymentReminderLadderConfigMaxAggregateOutputType | null;
};
export type PaymentReminderLadderConfigAvgAggregateOutputType = {
    dayOffset: number | null;
};
export type PaymentReminderLadderConfigSumAggregateOutputType = {
    dayOffset: number | null;
};
export type PaymentReminderLadderConfigMinAggregateOutputType = {
    id: string | null;
    dayOffset: number | null;
    notifyManagement: boolean | null;
    createsFollowUpCallTask: boolean | null;
    isPostGraceDefault: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentReminderLadderConfigMaxAggregateOutputType = {
    id: string | null;
    dayOffset: number | null;
    notifyManagement: boolean | null;
    createsFollowUpCallTask: boolean | null;
    isPostGraceDefault: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentReminderLadderConfigCountAggregateOutputType = {
    id: number;
    dayOffset: number;
    channels: number;
    notifyManagement: number;
    createsFollowUpCallTask: number;
    isPostGraceDefault: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaymentReminderLadderConfigAvgAggregateInputType = {
    dayOffset?: true;
};
export type PaymentReminderLadderConfigSumAggregateInputType = {
    dayOffset?: true;
};
export type PaymentReminderLadderConfigMinAggregateInputType = {
    id?: true;
    dayOffset?: true;
    notifyManagement?: true;
    createsFollowUpCallTask?: true;
    isPostGraceDefault?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentReminderLadderConfigMaxAggregateInputType = {
    id?: true;
    dayOffset?: true;
    notifyManagement?: true;
    createsFollowUpCallTask?: true;
    isPostGraceDefault?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentReminderLadderConfigCountAggregateInputType = {
    id?: true;
    dayOffset?: true;
    channels?: true;
    notifyManagement?: true;
    createsFollowUpCallTask?: true;
    isPostGraceDefault?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaymentReminderLadderConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    orderBy?: Prisma.PaymentReminderLadderConfigOrderByWithRelationInput | Prisma.PaymentReminderLadderConfigOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentReminderLadderConfigCountAggregateInputType;
    _avg?: PaymentReminderLadderConfigAvgAggregateInputType;
    _sum?: PaymentReminderLadderConfigSumAggregateInputType;
    _min?: PaymentReminderLadderConfigMinAggregateInputType;
    _max?: PaymentReminderLadderConfigMaxAggregateInputType;
};
export type GetPaymentReminderLadderConfigAggregateType<T extends PaymentReminderLadderConfigAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentReminderLadderConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentReminderLadderConfig[P]> : Prisma.GetScalarType<T[P], AggregatePaymentReminderLadderConfig[P]>;
};
export type PaymentReminderLadderConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    orderBy?: Prisma.PaymentReminderLadderConfigOrderByWithAggregationInput | Prisma.PaymentReminderLadderConfigOrderByWithAggregationInput[];
    by: Prisma.PaymentReminderLadderConfigScalarFieldEnum[] | Prisma.PaymentReminderLadderConfigScalarFieldEnum;
    having?: Prisma.PaymentReminderLadderConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentReminderLadderConfigCountAggregateInputType | true;
    _avg?: PaymentReminderLadderConfigAvgAggregateInputType;
    _sum?: PaymentReminderLadderConfigSumAggregateInputType;
    _min?: PaymentReminderLadderConfigMinAggregateInputType;
    _max?: PaymentReminderLadderConfigMaxAggregateInputType;
};
export type PaymentReminderLadderConfigGroupByOutputType = {
    id: string;
    dayOffset: number;
    channels: runtime.JsonValue;
    notifyManagement: boolean;
    createsFollowUpCallTask: boolean;
    isPostGraceDefault: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentReminderLadderConfigCountAggregateOutputType | null;
    _avg: PaymentReminderLadderConfigAvgAggregateOutputType | null;
    _sum: PaymentReminderLadderConfigSumAggregateOutputType | null;
    _min: PaymentReminderLadderConfigMinAggregateOutputType | null;
    _max: PaymentReminderLadderConfigMaxAggregateOutputType | null;
};
export type GetPaymentReminderLadderConfigGroupByPayload<T extends PaymentReminderLadderConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentReminderLadderConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentReminderLadderConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentReminderLadderConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentReminderLadderConfigGroupByOutputType[P]>;
}>>;
export type PaymentReminderLadderConfigWhereInput = {
    AND?: Prisma.PaymentReminderLadderConfigWhereInput | Prisma.PaymentReminderLadderConfigWhereInput[];
    OR?: Prisma.PaymentReminderLadderConfigWhereInput[];
    NOT?: Prisma.PaymentReminderLadderConfigWhereInput | Prisma.PaymentReminderLadderConfigWhereInput[];
    id?: Prisma.UuidFilter<"PaymentReminderLadderConfig"> | string;
    dayOffset?: Prisma.IntFilter<"PaymentReminderLadderConfig"> | number;
    channels?: Prisma.JsonFilter<"PaymentReminderLadderConfig">;
    notifyManagement?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    createsFollowUpCallTask?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    isPostGraceDefault?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    isActive?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PaymentReminderLadderConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentReminderLadderConfig"> | Date | string;
};
export type PaymentReminderLadderConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    notifyManagement?: Prisma.SortOrder;
    createsFollowUpCallTask?: Prisma.SortOrder;
    isPostGraceDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentReminderLadderConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    dayOffset?: number;
    AND?: Prisma.PaymentReminderLadderConfigWhereInput | Prisma.PaymentReminderLadderConfigWhereInput[];
    OR?: Prisma.PaymentReminderLadderConfigWhereInput[];
    NOT?: Prisma.PaymentReminderLadderConfigWhereInput | Prisma.PaymentReminderLadderConfigWhereInput[];
    channels?: Prisma.JsonFilter<"PaymentReminderLadderConfig">;
    notifyManagement?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    createsFollowUpCallTask?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    isPostGraceDefault?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    isActive?: Prisma.BoolFilter<"PaymentReminderLadderConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PaymentReminderLadderConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentReminderLadderConfig"> | Date | string;
}, "id" | "dayOffset">;
export type PaymentReminderLadderConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    notifyManagement?: Prisma.SortOrder;
    createsFollowUpCallTask?: Prisma.SortOrder;
    isPostGraceDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentReminderLadderConfigCountOrderByAggregateInput;
    _avg?: Prisma.PaymentReminderLadderConfigAvgOrderByAggregateInput;
    _max?: Prisma.PaymentReminderLadderConfigMaxOrderByAggregateInput;
    _min?: Prisma.PaymentReminderLadderConfigMinOrderByAggregateInput;
    _sum?: Prisma.PaymentReminderLadderConfigSumOrderByAggregateInput;
};
export type PaymentReminderLadderConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentReminderLadderConfigScalarWhereWithAggregatesInput | Prisma.PaymentReminderLadderConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentReminderLadderConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentReminderLadderConfigScalarWhereWithAggregatesInput | Prisma.PaymentReminderLadderConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentReminderLadderConfig"> | string;
    dayOffset?: Prisma.IntWithAggregatesFilter<"PaymentReminderLadderConfig"> | number;
    channels?: Prisma.JsonWithAggregatesFilter<"PaymentReminderLadderConfig">;
    notifyManagement?: Prisma.BoolWithAggregatesFilter<"PaymentReminderLadderConfig"> | boolean;
    createsFollowUpCallTask?: Prisma.BoolWithAggregatesFilter<"PaymentReminderLadderConfig"> | boolean;
    isPostGraceDefault?: Prisma.BoolWithAggregatesFilter<"PaymentReminderLadderConfig"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"PaymentReminderLadderConfig"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentReminderLadderConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentReminderLadderConfig"> | Date | string;
};
export type PaymentReminderLadderConfigCreateInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isPostGraceDefault?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentReminderLadderConfigUncheckedCreateInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isPostGraceDefault?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentReminderLadderConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notifyManagement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createsFollowUpCallTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPostGraceDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderLadderConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notifyManagement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createsFollowUpCallTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPostGraceDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderLadderConfigCreateManyInput = {
    id?: string;
    dayOffset: number;
    channels: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isPostGraceDefault?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentReminderLadderConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notifyManagement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createsFollowUpCallTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPostGraceDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderLadderConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOffset?: Prisma.IntFieldUpdateOperationsInput | number;
    channels?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    notifyManagement?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createsFollowUpCallTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isPostGraceDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentReminderLadderConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    notifyManagement?: Prisma.SortOrder;
    createsFollowUpCallTask?: Prisma.SortOrder;
    isPostGraceDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentReminderLadderConfigAvgOrderByAggregateInput = {
    dayOffset?: Prisma.SortOrder;
};
export type PaymentReminderLadderConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    notifyManagement?: Prisma.SortOrder;
    createsFollowUpCallTask?: Prisma.SortOrder;
    isPostGraceDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentReminderLadderConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dayOffset?: Prisma.SortOrder;
    notifyManagement?: Prisma.SortOrder;
    createsFollowUpCallTask?: Prisma.SortOrder;
    isPostGraceDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentReminderLadderConfigSumOrderByAggregateInput = {
    dayOffset?: Prisma.SortOrder;
};
export type PaymentReminderLadderConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isPostGraceDefault?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["paymentReminderLadderConfig"]>;
export type PaymentReminderLadderConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isPostGraceDefault?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["paymentReminderLadderConfig"]>;
export type PaymentReminderLadderConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isPostGraceDefault?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["paymentReminderLadderConfig"]>;
export type PaymentReminderLadderConfigSelectScalar = {
    id?: boolean;
    dayOffset?: boolean;
    channels?: boolean;
    notifyManagement?: boolean;
    createsFollowUpCallTask?: boolean;
    isPostGraceDefault?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaymentReminderLadderConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dayOffset" | "channels" | "notifyManagement" | "createsFollowUpCallTask" | "isPostGraceDefault" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentReminderLadderConfig"]>;
export type $PaymentReminderLadderConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentReminderLadderConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dayOffset: number;
        channels: runtime.JsonValue;
        notifyManagement: boolean;
        createsFollowUpCallTask: boolean;
        isPostGraceDefault: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["paymentReminderLadderConfig"]>;
    composites: {};
};
export type PaymentReminderLadderConfigGetPayload<S extends boolean | null | undefined | PaymentReminderLadderConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload, S>;
export type PaymentReminderLadderConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentReminderLadderConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentReminderLadderConfigCountAggregateInputType | true;
};
export interface PaymentReminderLadderConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentReminderLadderConfig'];
        meta: {
            name: 'PaymentReminderLadderConfig';
        };
    };
    findUnique<T extends PaymentReminderLadderConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentReminderLadderConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentReminderLadderConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentReminderLadderConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentReminderLadderConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentReminderLadderConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentReminderLadderConfigFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderLadderConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentReminderLadderConfigCreateArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentReminderLadderConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderLadderConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentReminderLadderConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentReminderLadderConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentReminderLadderConfigDeleteArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentReminderLadderConfigUpdateArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentReminderLadderConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentReminderLadderConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentReminderLadderConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentReminderLadderConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentReminderLadderConfigUpsertArgs>(args: Prisma.SelectSubset<T, PaymentReminderLadderConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentReminderLadderConfigClient<runtime.Types.Result.GetResult<Prisma.$PaymentReminderLadderConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentReminderLadderConfigCountArgs>(args?: Prisma.Subset<T, PaymentReminderLadderConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentReminderLadderConfigCountAggregateOutputType> : number>;
    aggregate<T extends PaymentReminderLadderConfigAggregateArgs>(args: Prisma.Subset<T, PaymentReminderLadderConfigAggregateArgs>): Prisma.PrismaPromise<GetPaymentReminderLadderConfigAggregateType<T>>;
    groupBy<T extends PaymentReminderLadderConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentReminderLadderConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentReminderLadderConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentReminderLadderConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentReminderLadderConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentReminderLadderConfigFieldRefs;
}
export interface Prisma__PaymentReminderLadderConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentReminderLadderConfigFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentReminderLadderConfig", 'String'>;
    readonly dayOffset: Prisma.FieldRef<"PaymentReminderLadderConfig", 'Int'>;
    readonly channels: Prisma.FieldRef<"PaymentReminderLadderConfig", 'Json'>;
    readonly notifyManagement: Prisma.FieldRef<"PaymentReminderLadderConfig", 'Boolean'>;
    readonly createsFollowUpCallTask: Prisma.FieldRef<"PaymentReminderLadderConfig", 'Boolean'>;
    readonly isPostGraceDefault: Prisma.FieldRef<"PaymentReminderLadderConfig", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"PaymentReminderLadderConfig", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PaymentReminderLadderConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PaymentReminderLadderConfig", 'DateTime'>;
}
export type PaymentReminderLadderConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    where: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
};
export type PaymentReminderLadderConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    where: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
};
export type PaymentReminderLadderConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    orderBy?: Prisma.PaymentReminderLadderConfigOrderByWithRelationInput | Prisma.PaymentReminderLadderConfigOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderLadderConfigScalarFieldEnum | Prisma.PaymentReminderLadderConfigScalarFieldEnum[];
};
export type PaymentReminderLadderConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    orderBy?: Prisma.PaymentReminderLadderConfigOrderByWithRelationInput | Prisma.PaymentReminderLadderConfigOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderLadderConfigScalarFieldEnum | Prisma.PaymentReminderLadderConfigScalarFieldEnum[];
};
export type PaymentReminderLadderConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    orderBy?: Prisma.PaymentReminderLadderConfigOrderByWithRelationInput | Prisma.PaymentReminderLadderConfigOrderByWithRelationInput[];
    cursor?: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentReminderLadderConfigScalarFieldEnum | Prisma.PaymentReminderLadderConfigScalarFieldEnum[];
};
export type PaymentReminderLadderConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderLadderConfigCreateInput, Prisma.PaymentReminderLadderConfigUncheckedCreateInput>;
};
export type PaymentReminderLadderConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentReminderLadderConfigCreateManyInput | Prisma.PaymentReminderLadderConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentReminderLadderConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    data: Prisma.PaymentReminderLadderConfigCreateManyInput | Prisma.PaymentReminderLadderConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentReminderLadderConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderLadderConfigUpdateInput, Prisma.PaymentReminderLadderConfigUncheckedUpdateInput>;
    where: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
};
export type PaymentReminderLadderConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentReminderLadderConfigUpdateManyMutationInput, Prisma.PaymentReminderLadderConfigUncheckedUpdateManyInput>;
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    limit?: number;
};
export type PaymentReminderLadderConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentReminderLadderConfigUpdateManyMutationInput, Prisma.PaymentReminderLadderConfigUncheckedUpdateManyInput>;
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    limit?: number;
};
export type PaymentReminderLadderConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    where: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentReminderLadderConfigCreateInput, Prisma.PaymentReminderLadderConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentReminderLadderConfigUpdateInput, Prisma.PaymentReminderLadderConfigUncheckedUpdateInput>;
};
export type PaymentReminderLadderConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
    where: Prisma.PaymentReminderLadderConfigWhereUniqueInput;
};
export type PaymentReminderLadderConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentReminderLadderConfigWhereInput;
    limit?: number;
};
export type PaymentReminderLadderConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentReminderLadderConfigSelect<ExtArgs> | null;
    omit?: Prisma.PaymentReminderLadderConfigOmit<ExtArgs> | null;
};
