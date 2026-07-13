import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComplaintSlaConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$ComplaintSlaConfigPayload>;
export type AggregateComplaintSlaConfig = {
    _count: ComplaintSlaConfigCountAggregateOutputType | null;
    _avg: ComplaintSlaConfigAvgAggregateOutputType | null;
    _sum: ComplaintSlaConfigSumAggregateOutputType | null;
    _min: ComplaintSlaConfigMinAggregateOutputType | null;
    _max: ComplaintSlaConfigMaxAggregateOutputType | null;
};
export type ComplaintSlaConfigAvgAggregateOutputType = {
    id: number | null;
    version: number | null;
    slaDays: number | null;
    amberThresholdPct: number | null;
};
export type ComplaintSlaConfigSumAggregateOutputType = {
    id: number | null;
    version: number | null;
    slaDays: number | null;
    amberThresholdPct: number | null;
};
export type ComplaintSlaConfigMinAggregateOutputType = {
    id: number | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    slaDays: number | null;
    amberThresholdPct: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type ComplaintSlaConfigMaxAggregateOutputType = {
    id: number | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    slaDays: number | null;
    amberThresholdPct: number | null;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type ComplaintSlaConfigCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    slaDays: number;
    amberThresholdPct: number;
    boardResolutionRef: number;
    approvedByUserId: number;
    createdAt: number;
    _all: number;
};
export type ComplaintSlaConfigAvgAggregateInputType = {
    id?: true;
    version?: true;
    slaDays?: true;
    amberThresholdPct?: true;
};
export type ComplaintSlaConfigSumAggregateInputType = {
    id?: true;
    version?: true;
    slaDays?: true;
    amberThresholdPct?: true;
};
export type ComplaintSlaConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    slaDays?: true;
    amberThresholdPct?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type ComplaintSlaConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    slaDays?: true;
    amberThresholdPct?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type ComplaintSlaConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    slaDays?: true;
    amberThresholdPct?: true;
    boardResolutionRef?: true;
    approvedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type ComplaintSlaConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplaintSlaConfigWhereInput;
    orderBy?: Prisma.ComplaintSlaConfigOrderByWithRelationInput | Prisma.ComplaintSlaConfigOrderByWithRelationInput[];
    cursor?: Prisma.ComplaintSlaConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComplaintSlaConfigCountAggregateInputType;
    _avg?: ComplaintSlaConfigAvgAggregateInputType;
    _sum?: ComplaintSlaConfigSumAggregateInputType;
    _min?: ComplaintSlaConfigMinAggregateInputType;
    _max?: ComplaintSlaConfigMaxAggregateInputType;
};
export type GetComplaintSlaConfigAggregateType<T extends ComplaintSlaConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateComplaintSlaConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComplaintSlaConfig[P]> : Prisma.GetScalarType<T[P], AggregateComplaintSlaConfig[P]>;
};
export type ComplaintSlaConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplaintSlaConfigWhereInput;
    orderBy?: Prisma.ComplaintSlaConfigOrderByWithAggregationInput | Prisma.ComplaintSlaConfigOrderByWithAggregationInput[];
    by: Prisma.ComplaintSlaConfigScalarFieldEnum[] | Prisma.ComplaintSlaConfigScalarFieldEnum;
    having?: Prisma.ComplaintSlaConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComplaintSlaConfigCountAggregateInputType | true;
    _avg?: ComplaintSlaConfigAvgAggregateInputType;
    _sum?: ComplaintSlaConfigSumAggregateInputType;
    _min?: ComplaintSlaConfigMinAggregateInputType;
    _max?: ComplaintSlaConfigMaxAggregateInputType;
};
export type ComplaintSlaConfigGroupByOutputType = {
    id: number;
    version: number;
    status: $Enums.GovernedItemStatus;
    slaDays: number;
    amberThresholdPct: number;
    boardResolutionRef: string | null;
    approvedByUserId: string | null;
    createdAt: Date;
    _count: ComplaintSlaConfigCountAggregateOutputType | null;
    _avg: ComplaintSlaConfigAvgAggregateOutputType | null;
    _sum: ComplaintSlaConfigSumAggregateOutputType | null;
    _min: ComplaintSlaConfigMinAggregateOutputType | null;
    _max: ComplaintSlaConfigMaxAggregateOutputType | null;
};
export type GetComplaintSlaConfigGroupByPayload<T extends ComplaintSlaConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComplaintSlaConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComplaintSlaConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComplaintSlaConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComplaintSlaConfigGroupByOutputType[P]>;
}>>;
export type ComplaintSlaConfigWhereInput = {
    AND?: Prisma.ComplaintSlaConfigWhereInput | Prisma.ComplaintSlaConfigWhereInput[];
    OR?: Prisma.ComplaintSlaConfigWhereInput[];
    NOT?: Prisma.ComplaintSlaConfigWhereInput | Prisma.ComplaintSlaConfigWhereInput[];
    id?: Prisma.IntFilter<"ComplaintSlaConfig"> | number;
    version?: Prisma.IntFilter<"ComplaintSlaConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"ComplaintSlaConfig"> | $Enums.GovernedItemStatus;
    slaDays?: Prisma.IntFilter<"ComplaintSlaConfig"> | number;
    amberThresholdPct?: Prisma.IntFilter<"ComplaintSlaConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"ComplaintSlaConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"ComplaintSlaConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplaintSlaConfig"> | Date | string;
};
export type ComplaintSlaConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    slaDays?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplaintSlaConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ComplaintSlaConfigWhereInput | Prisma.ComplaintSlaConfigWhereInput[];
    OR?: Prisma.ComplaintSlaConfigWhereInput[];
    NOT?: Prisma.ComplaintSlaConfigWhereInput | Prisma.ComplaintSlaConfigWhereInput[];
    version?: Prisma.IntFilter<"ComplaintSlaConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"ComplaintSlaConfig"> | $Enums.GovernedItemStatus;
    slaDays?: Prisma.IntFilter<"ComplaintSlaConfig"> | number;
    amberThresholdPct?: Prisma.IntFilter<"ComplaintSlaConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableFilter<"ComplaintSlaConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"ComplaintSlaConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ComplaintSlaConfig"> | Date | string;
}, "id">;
export type ComplaintSlaConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    slaDays?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ComplaintSlaConfigCountOrderByAggregateInput;
    _avg?: Prisma.ComplaintSlaConfigAvgOrderByAggregateInput;
    _max?: Prisma.ComplaintSlaConfigMaxOrderByAggregateInput;
    _min?: Prisma.ComplaintSlaConfigMinOrderByAggregateInput;
    _sum?: Prisma.ComplaintSlaConfigSumOrderByAggregateInput;
};
export type ComplaintSlaConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComplaintSlaConfigScalarWhereWithAggregatesInput | Prisma.ComplaintSlaConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComplaintSlaConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComplaintSlaConfigScalarWhereWithAggregatesInput | Prisma.ComplaintSlaConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ComplaintSlaConfig"> | number;
    version?: Prisma.IntWithAggregatesFilter<"ComplaintSlaConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"ComplaintSlaConfig"> | $Enums.GovernedItemStatus;
    slaDays?: Prisma.IntWithAggregatesFilter<"ComplaintSlaConfig"> | number;
    amberThresholdPct?: Prisma.IntWithAggregatesFilter<"ComplaintSlaConfig"> | number;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"ComplaintSlaConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ComplaintSlaConfig"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ComplaintSlaConfig"> | Date | string;
};
export type ComplaintSlaConfigCreateInput = {
    id?: number;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    slaDays: number;
    amberThresholdPct: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type ComplaintSlaConfigUncheckedCreateInput = {
    id?: number;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    slaDays: number;
    amberThresholdPct: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type ComplaintSlaConfigUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    slaDays?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplaintSlaConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    slaDays?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplaintSlaConfigCreateManyInput = {
    id?: number;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    slaDays: number;
    amberThresholdPct: number;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type ComplaintSlaConfigUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    slaDays?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplaintSlaConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    slaDays?: Prisma.IntFieldUpdateOperationsInput | number;
    amberThresholdPct?: Prisma.IntFieldUpdateOperationsInput | number;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplaintSlaConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    slaDays?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplaintSlaConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    slaDays?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
};
export type ComplaintSlaConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    slaDays?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplaintSlaConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    slaDays?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplaintSlaConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    slaDays?: Prisma.SortOrder;
    amberThresholdPct?: Prisma.SortOrder;
};
export type ComplaintSlaConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    slaDays?: boolean;
    amberThresholdPct?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["complaintSlaConfig"]>;
export type ComplaintSlaConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    slaDays?: boolean;
    amberThresholdPct?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["complaintSlaConfig"]>;
export type ComplaintSlaConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    slaDays?: boolean;
    amberThresholdPct?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["complaintSlaConfig"]>;
export type ComplaintSlaConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    slaDays?: boolean;
    amberThresholdPct?: boolean;
    boardResolutionRef?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
};
export type ComplaintSlaConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "slaDays" | "amberThresholdPct" | "boardResolutionRef" | "approvedByUserId" | "createdAt", ExtArgs["result"]["complaintSlaConfig"]>;
export type $ComplaintSlaConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComplaintSlaConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        version: number;
        status: $Enums.GovernedItemStatus;
        slaDays: number;
        amberThresholdPct: number;
        boardResolutionRef: string | null;
        approvedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["complaintSlaConfig"]>;
    composites: {};
};
export type ComplaintSlaConfigGetPayload<S extends boolean | null | undefined | ComplaintSlaConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload, S>;
export type ComplaintSlaConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComplaintSlaConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComplaintSlaConfigCountAggregateInputType | true;
};
export interface ComplaintSlaConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComplaintSlaConfig'];
        meta: {
            name: 'ComplaintSlaConfig';
        };
    };
    findUnique<T extends ComplaintSlaConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComplaintSlaConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComplaintSlaConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, ComplaintSlaConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComplaintSlaConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComplaintSlaConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComplaintSlaConfigFindManyArgs>(args?: Prisma.SelectSubset<T, ComplaintSlaConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComplaintSlaConfigCreateArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigCreateArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComplaintSlaConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, ComplaintSlaConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComplaintSlaConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComplaintSlaConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComplaintSlaConfigDeleteArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComplaintSlaConfigUpdateArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComplaintSlaConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComplaintSlaConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComplaintSlaConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComplaintSlaConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComplaintSlaConfigUpsertArgs>(args: Prisma.SelectSubset<T, ComplaintSlaConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__ComplaintSlaConfigClient<runtime.Types.Result.GetResult<Prisma.$ComplaintSlaConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComplaintSlaConfigCountArgs>(args?: Prisma.Subset<T, ComplaintSlaConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComplaintSlaConfigCountAggregateOutputType> : number>;
    aggregate<T extends ComplaintSlaConfigAggregateArgs>(args: Prisma.Subset<T, ComplaintSlaConfigAggregateArgs>): Prisma.PrismaPromise<GetComplaintSlaConfigAggregateType<T>>;
    groupBy<T extends ComplaintSlaConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComplaintSlaConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: ComplaintSlaConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComplaintSlaConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintSlaConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComplaintSlaConfigFieldRefs;
}
export interface Prisma__ComplaintSlaConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComplaintSlaConfigFieldRefs {
    readonly id: Prisma.FieldRef<"ComplaintSlaConfig", 'Int'>;
    readonly version: Prisma.FieldRef<"ComplaintSlaConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"ComplaintSlaConfig", 'GovernedItemStatus'>;
    readonly slaDays: Prisma.FieldRef<"ComplaintSlaConfig", 'Int'>;
    readonly amberThresholdPct: Prisma.FieldRef<"ComplaintSlaConfig", 'Int'>;
    readonly boardResolutionRef: Prisma.FieldRef<"ComplaintSlaConfig", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"ComplaintSlaConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ComplaintSlaConfig", 'DateTime'>;
}
export type ComplaintSlaConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    where: Prisma.ComplaintSlaConfigWhereUniqueInput;
};
export type ComplaintSlaConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    where: Prisma.ComplaintSlaConfigWhereUniqueInput;
};
export type ComplaintSlaConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    where?: Prisma.ComplaintSlaConfigWhereInput;
    orderBy?: Prisma.ComplaintSlaConfigOrderByWithRelationInput | Prisma.ComplaintSlaConfigOrderByWithRelationInput[];
    cursor?: Prisma.ComplaintSlaConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplaintSlaConfigScalarFieldEnum | Prisma.ComplaintSlaConfigScalarFieldEnum[];
};
export type ComplaintSlaConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    where?: Prisma.ComplaintSlaConfigWhereInput;
    orderBy?: Prisma.ComplaintSlaConfigOrderByWithRelationInput | Prisma.ComplaintSlaConfigOrderByWithRelationInput[];
    cursor?: Prisma.ComplaintSlaConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplaintSlaConfigScalarFieldEnum | Prisma.ComplaintSlaConfigScalarFieldEnum[];
};
export type ComplaintSlaConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    where?: Prisma.ComplaintSlaConfigWhereInput;
    orderBy?: Prisma.ComplaintSlaConfigOrderByWithRelationInput | Prisma.ComplaintSlaConfigOrderByWithRelationInput[];
    cursor?: Prisma.ComplaintSlaConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplaintSlaConfigScalarFieldEnum | Prisma.ComplaintSlaConfigScalarFieldEnum[];
};
export type ComplaintSlaConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplaintSlaConfigCreateInput, Prisma.ComplaintSlaConfigUncheckedCreateInput>;
};
export type ComplaintSlaConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComplaintSlaConfigCreateManyInput | Prisma.ComplaintSlaConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComplaintSlaConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    data: Prisma.ComplaintSlaConfigCreateManyInput | Prisma.ComplaintSlaConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComplaintSlaConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplaintSlaConfigUpdateInput, Prisma.ComplaintSlaConfigUncheckedUpdateInput>;
    where: Prisma.ComplaintSlaConfigWhereUniqueInput;
};
export type ComplaintSlaConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComplaintSlaConfigUpdateManyMutationInput, Prisma.ComplaintSlaConfigUncheckedUpdateManyInput>;
    where?: Prisma.ComplaintSlaConfigWhereInput;
    limit?: number;
};
export type ComplaintSlaConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplaintSlaConfigUpdateManyMutationInput, Prisma.ComplaintSlaConfigUncheckedUpdateManyInput>;
    where?: Prisma.ComplaintSlaConfigWhereInput;
    limit?: number;
};
export type ComplaintSlaConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    where: Prisma.ComplaintSlaConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplaintSlaConfigCreateInput, Prisma.ComplaintSlaConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComplaintSlaConfigUpdateInput, Prisma.ComplaintSlaConfigUncheckedUpdateInput>;
};
export type ComplaintSlaConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
    where: Prisma.ComplaintSlaConfigWhereUniqueInput;
};
export type ComplaintSlaConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplaintSlaConfigWhereInput;
    limit?: number;
};
export type ComplaintSlaConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplaintSlaConfigSelect<ExtArgs> | null;
    omit?: Prisma.ComplaintSlaConfigOmit<ExtArgs> | null;
};
