import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CommercialScreeningProviderModel = runtime.Types.Result.DefaultSelection<Prisma.$CommercialScreeningProviderPayload>;
export type AggregateCommercialScreeningProvider = {
    _count: CommercialScreeningProviderCountAggregateOutputType | null;
    _avg: CommercialScreeningProviderAvgAggregateOutputType | null;
    _sum: CommercialScreeningProviderSumAggregateOutputType | null;
    _min: CommercialScreeningProviderMinAggregateOutputType | null;
    _max: CommercialScreeningProviderMaxAggregateOutputType | null;
};
export type CommercialScreeningProviderAvgAggregateOutputType = {
    providerSlot: number | null;
};
export type CommercialScreeningProviderSumAggregateOutputType = {
    providerSlot: number | null;
};
export type CommercialScreeningProviderMinAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    name: string | null;
    apiKey: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    pendingName: string | null;
    pendingApiKey: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    updatedAt: Date | null;
};
export type CommercialScreeningProviderMaxAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    name: string | null;
    apiKey: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    pendingName: string | null;
    pendingApiKey: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    updatedAt: Date | null;
};
export type CommercialScreeningProviderCountAggregateOutputType = {
    id: number;
    providerSlot: number;
    name: number;
    apiKey: number;
    isActive: number;
    configuredByUserId: number;
    pendingName: number;
    pendingApiKey: number;
    pendingIsActive: number;
    pendingProposedByUserId: number;
    configWorkflowInstanceId: number;
    updatedAt: number;
    _all: number;
};
export type CommercialScreeningProviderAvgAggregateInputType = {
    providerSlot?: true;
};
export type CommercialScreeningProviderSumAggregateInputType = {
    providerSlot?: true;
};
export type CommercialScreeningProviderMinAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    apiKey?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingName?: true;
    pendingApiKey?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    updatedAt?: true;
};
export type CommercialScreeningProviderMaxAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    apiKey?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingName?: true;
    pendingApiKey?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    updatedAt?: true;
};
export type CommercialScreeningProviderCountAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    apiKey?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingName?: true;
    pendingApiKey?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    updatedAt?: true;
    _all?: true;
};
export type CommercialScreeningProviderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommercialScreeningProviderWhereInput;
    orderBy?: Prisma.CommercialScreeningProviderOrderByWithRelationInput | Prisma.CommercialScreeningProviderOrderByWithRelationInput[];
    cursor?: Prisma.CommercialScreeningProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommercialScreeningProviderCountAggregateInputType;
    _avg?: CommercialScreeningProviderAvgAggregateInputType;
    _sum?: CommercialScreeningProviderSumAggregateInputType;
    _min?: CommercialScreeningProviderMinAggregateInputType;
    _max?: CommercialScreeningProviderMaxAggregateInputType;
};
export type GetCommercialScreeningProviderAggregateType<T extends CommercialScreeningProviderAggregateArgs> = {
    [P in keyof T & keyof AggregateCommercialScreeningProvider]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommercialScreeningProvider[P]> : Prisma.GetScalarType<T[P], AggregateCommercialScreeningProvider[P]>;
};
export type CommercialScreeningProviderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommercialScreeningProviderWhereInput;
    orderBy?: Prisma.CommercialScreeningProviderOrderByWithAggregationInput | Prisma.CommercialScreeningProviderOrderByWithAggregationInput[];
    by: Prisma.CommercialScreeningProviderScalarFieldEnum[] | Prisma.CommercialScreeningProviderScalarFieldEnum;
    having?: Prisma.CommercialScreeningProviderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommercialScreeningProviderCountAggregateInputType | true;
    _avg?: CommercialScreeningProviderAvgAggregateInputType;
    _sum?: CommercialScreeningProviderSumAggregateInputType;
    _min?: CommercialScreeningProviderMinAggregateInputType;
    _max?: CommercialScreeningProviderMaxAggregateInputType;
};
export type CommercialScreeningProviderGroupByOutputType = {
    id: string;
    providerSlot: number;
    name: string;
    apiKey: string | null;
    isActive: boolean;
    configuredByUserId: string | null;
    pendingName: string | null;
    pendingApiKey: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    updatedAt: Date;
    _count: CommercialScreeningProviderCountAggregateOutputType | null;
    _avg: CommercialScreeningProviderAvgAggregateOutputType | null;
    _sum: CommercialScreeningProviderSumAggregateOutputType | null;
    _min: CommercialScreeningProviderMinAggregateOutputType | null;
    _max: CommercialScreeningProviderMaxAggregateOutputType | null;
};
export type GetCommercialScreeningProviderGroupByPayload<T extends CommercialScreeningProviderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommercialScreeningProviderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommercialScreeningProviderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommercialScreeningProviderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommercialScreeningProviderGroupByOutputType[P]>;
}>>;
export type CommercialScreeningProviderWhereInput = {
    AND?: Prisma.CommercialScreeningProviderWhereInput | Prisma.CommercialScreeningProviderWhereInput[];
    OR?: Prisma.CommercialScreeningProviderWhereInput[];
    NOT?: Prisma.CommercialScreeningProviderWhereInput | Prisma.CommercialScreeningProviderWhereInput[];
    id?: Prisma.UuidFilter<"CommercialScreeningProvider"> | string;
    providerSlot?: Prisma.IntFilter<"CommercialScreeningProvider"> | number;
    name?: Prisma.StringFilter<"CommercialScreeningProvider"> | string;
    apiKey?: Prisma.StringNullableFilter<"CommercialScreeningProvider"> | string | null;
    isActive?: Prisma.BoolFilter<"CommercialScreeningProvider"> | boolean;
    configuredByUserId?: Prisma.UuidNullableFilter<"CommercialScreeningProvider"> | string | null;
    pendingName?: Prisma.StringNullableFilter<"CommercialScreeningProvider"> | string | null;
    pendingApiKey?: Prisma.StringNullableFilter<"CommercialScreeningProvider"> | string | null;
    pendingIsActive?: Prisma.BoolNullableFilter<"CommercialScreeningProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"CommercialScreeningProvider"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableFilter<"CommercialScreeningProvider"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CommercialScreeningProvider"> | Date | string;
};
export type CommercialScreeningProviderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommercialScreeningProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerSlot?: number;
    configWorkflowInstanceId?: string;
    AND?: Prisma.CommercialScreeningProviderWhereInput | Prisma.CommercialScreeningProviderWhereInput[];
    OR?: Prisma.CommercialScreeningProviderWhereInput[];
    NOT?: Prisma.CommercialScreeningProviderWhereInput | Prisma.CommercialScreeningProviderWhereInput[];
    name?: Prisma.StringFilter<"CommercialScreeningProvider"> | string;
    apiKey?: Prisma.StringNullableFilter<"CommercialScreeningProvider"> | string | null;
    isActive?: Prisma.BoolFilter<"CommercialScreeningProvider"> | boolean;
    configuredByUserId?: Prisma.UuidNullableFilter<"CommercialScreeningProvider"> | string | null;
    pendingName?: Prisma.StringNullableFilter<"CommercialScreeningProvider"> | string | null;
    pendingApiKey?: Prisma.StringNullableFilter<"CommercialScreeningProvider"> | string | null;
    pendingIsActive?: Prisma.BoolNullableFilter<"CommercialScreeningProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"CommercialScreeningProvider"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CommercialScreeningProvider"> | Date | string;
}, "id" | "providerSlot" | "configWorkflowInstanceId">;
export type CommercialScreeningProviderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CommercialScreeningProviderCountOrderByAggregateInput;
    _avg?: Prisma.CommercialScreeningProviderAvgOrderByAggregateInput;
    _max?: Prisma.CommercialScreeningProviderMaxOrderByAggregateInput;
    _min?: Prisma.CommercialScreeningProviderMinOrderByAggregateInput;
    _sum?: Prisma.CommercialScreeningProviderSumOrderByAggregateInput;
};
export type CommercialScreeningProviderScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommercialScreeningProviderScalarWhereWithAggregatesInput | Prisma.CommercialScreeningProviderScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommercialScreeningProviderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommercialScreeningProviderScalarWhereWithAggregatesInput | Prisma.CommercialScreeningProviderScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CommercialScreeningProvider"> | string;
    providerSlot?: Prisma.IntWithAggregatesFilter<"CommercialScreeningProvider"> | number;
    name?: Prisma.StringWithAggregatesFilter<"CommercialScreeningProvider"> | string;
    apiKey?: Prisma.StringNullableWithAggregatesFilter<"CommercialScreeningProvider"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"CommercialScreeningProvider"> | boolean;
    configuredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CommercialScreeningProvider"> | string | null;
    pendingName?: Prisma.StringNullableWithAggregatesFilter<"CommercialScreeningProvider"> | string | null;
    pendingApiKey?: Prisma.StringNullableWithAggregatesFilter<"CommercialScreeningProvider"> | string | null;
    pendingIsActive?: Prisma.BoolNullableWithAggregatesFilter<"CommercialScreeningProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CommercialScreeningProvider"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"CommercialScreeningProvider"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CommercialScreeningProvider"> | Date | string;
};
export type CommercialScreeningProviderCreateInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiKey?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingApiKey?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type CommercialScreeningProviderUncheckedCreateInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiKey?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingApiKey?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type CommercialScreeningProviderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommercialScreeningProviderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommercialScreeningProviderCreateManyInput = {
    id?: string;
    providerSlot: number;
    name: string;
    apiKey?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingApiKey?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type CommercialScreeningProviderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommercialScreeningProviderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommercialScreeningProviderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommercialScreeningProviderAvgOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type CommercialScreeningProviderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommercialScreeningProviderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommercialScreeningProviderSumOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type CommercialScreeningProviderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiKey?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingApiKey?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["commercialScreeningProvider"]>;
export type CommercialScreeningProviderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiKey?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingApiKey?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["commercialScreeningProvider"]>;
export type CommercialScreeningProviderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiKey?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingApiKey?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["commercialScreeningProvider"]>;
export type CommercialScreeningProviderSelectScalar = {
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    apiKey?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingApiKey?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    updatedAt?: boolean;
};
export type CommercialScreeningProviderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerSlot" | "name" | "apiKey" | "isActive" | "configuredByUserId" | "pendingName" | "pendingApiKey" | "pendingIsActive" | "pendingProposedByUserId" | "configWorkflowInstanceId" | "updatedAt", ExtArgs["result"]["commercialScreeningProvider"]>;
export type $CommercialScreeningProviderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommercialScreeningProvider";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerSlot: number;
        name: string;
        apiKey: string | null;
        isActive: boolean;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingApiKey: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["commercialScreeningProvider"]>;
    composites: {};
};
export type CommercialScreeningProviderGetPayload<S extends boolean | null | undefined | CommercialScreeningProviderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload, S>;
export type CommercialScreeningProviderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommercialScreeningProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommercialScreeningProviderCountAggregateInputType | true;
};
export interface CommercialScreeningProviderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommercialScreeningProvider'];
        meta: {
            name: 'CommercialScreeningProvider';
        };
    };
    findUnique<T extends CommercialScreeningProviderFindUniqueArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CommercialScreeningProviderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CommercialScreeningProviderFindFirstArgs>(args?: Prisma.SelectSubset<T, CommercialScreeningProviderFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CommercialScreeningProviderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommercialScreeningProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CommercialScreeningProviderFindManyArgs>(args?: Prisma.SelectSubset<T, CommercialScreeningProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CommercialScreeningProviderCreateArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderCreateArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CommercialScreeningProviderCreateManyArgs>(args?: Prisma.SelectSubset<T, CommercialScreeningProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CommercialScreeningProviderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommercialScreeningProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CommercialScreeningProviderDeleteArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderDeleteArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CommercialScreeningProviderUpdateArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderUpdateArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CommercialScreeningProviderDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommercialScreeningProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CommercialScreeningProviderUpdateManyArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CommercialScreeningProviderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CommercialScreeningProviderUpsertArgs>(args: Prisma.SelectSubset<T, CommercialScreeningProviderUpsertArgs<ExtArgs>>): Prisma.Prisma__CommercialScreeningProviderClient<runtime.Types.Result.GetResult<Prisma.$CommercialScreeningProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CommercialScreeningProviderCountArgs>(args?: Prisma.Subset<T, CommercialScreeningProviderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommercialScreeningProviderCountAggregateOutputType> : number>;
    aggregate<T extends CommercialScreeningProviderAggregateArgs>(args: Prisma.Subset<T, CommercialScreeningProviderAggregateArgs>): Prisma.PrismaPromise<GetCommercialScreeningProviderAggregateType<T>>;
    groupBy<T extends CommercialScreeningProviderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommercialScreeningProviderGroupByArgs['orderBy'];
    } : {
        orderBy?: CommercialScreeningProviderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommercialScreeningProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommercialScreeningProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CommercialScreeningProviderFieldRefs;
}
export interface Prisma__CommercialScreeningProviderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CommercialScreeningProviderFieldRefs {
    readonly id: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly providerSlot: Prisma.FieldRef<"CommercialScreeningProvider", 'Int'>;
    readonly name: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly apiKey: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly isActive: Prisma.FieldRef<"CommercialScreeningProvider", 'Boolean'>;
    readonly configuredByUserId: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly pendingName: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly pendingApiKey: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly pendingIsActive: Prisma.FieldRef<"CommercialScreeningProvider", 'Boolean'>;
    readonly pendingProposedByUserId: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly configWorkflowInstanceId: Prisma.FieldRef<"CommercialScreeningProvider", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"CommercialScreeningProvider", 'DateTime'>;
}
export type CommercialScreeningProviderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    where: Prisma.CommercialScreeningProviderWhereUniqueInput;
};
export type CommercialScreeningProviderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    where: Prisma.CommercialScreeningProviderWhereUniqueInput;
};
export type CommercialScreeningProviderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    where?: Prisma.CommercialScreeningProviderWhereInput;
    orderBy?: Prisma.CommercialScreeningProviderOrderByWithRelationInput | Prisma.CommercialScreeningProviderOrderByWithRelationInput[];
    cursor?: Prisma.CommercialScreeningProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommercialScreeningProviderScalarFieldEnum | Prisma.CommercialScreeningProviderScalarFieldEnum[];
};
export type CommercialScreeningProviderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    where?: Prisma.CommercialScreeningProviderWhereInput;
    orderBy?: Prisma.CommercialScreeningProviderOrderByWithRelationInput | Prisma.CommercialScreeningProviderOrderByWithRelationInput[];
    cursor?: Prisma.CommercialScreeningProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommercialScreeningProviderScalarFieldEnum | Prisma.CommercialScreeningProviderScalarFieldEnum[];
};
export type CommercialScreeningProviderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    where?: Prisma.CommercialScreeningProviderWhereInput;
    orderBy?: Prisma.CommercialScreeningProviderOrderByWithRelationInput | Prisma.CommercialScreeningProviderOrderByWithRelationInput[];
    cursor?: Prisma.CommercialScreeningProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommercialScreeningProviderScalarFieldEnum | Prisma.CommercialScreeningProviderScalarFieldEnum[];
};
export type CommercialScreeningProviderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommercialScreeningProviderCreateInput, Prisma.CommercialScreeningProviderUncheckedCreateInput>;
};
export type CommercialScreeningProviderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CommercialScreeningProviderCreateManyInput | Prisma.CommercialScreeningProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommercialScreeningProviderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    data: Prisma.CommercialScreeningProviderCreateManyInput | Prisma.CommercialScreeningProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommercialScreeningProviderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommercialScreeningProviderUpdateInput, Prisma.CommercialScreeningProviderUncheckedUpdateInput>;
    where: Prisma.CommercialScreeningProviderWhereUniqueInput;
};
export type CommercialScreeningProviderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CommercialScreeningProviderUpdateManyMutationInput, Prisma.CommercialScreeningProviderUncheckedUpdateManyInput>;
    where?: Prisma.CommercialScreeningProviderWhereInput;
    limit?: number;
};
export type CommercialScreeningProviderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommercialScreeningProviderUpdateManyMutationInput, Prisma.CommercialScreeningProviderUncheckedUpdateManyInput>;
    where?: Prisma.CommercialScreeningProviderWhereInput;
    limit?: number;
};
export type CommercialScreeningProviderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    where: Prisma.CommercialScreeningProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommercialScreeningProviderCreateInput, Prisma.CommercialScreeningProviderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CommercialScreeningProviderUpdateInput, Prisma.CommercialScreeningProviderUncheckedUpdateInput>;
};
export type CommercialScreeningProviderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
    where: Prisma.CommercialScreeningProviderWhereUniqueInput;
};
export type CommercialScreeningProviderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommercialScreeningProviderWhereInput;
    limit?: number;
};
export type CommercialScreeningProviderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommercialScreeningProviderSelect<ExtArgs> | null;
    omit?: Prisma.CommercialScreeningProviderOmit<ExtArgs> | null;
};
