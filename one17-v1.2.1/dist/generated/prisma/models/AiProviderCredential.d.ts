import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiProviderCredentialModel = runtime.Types.Result.DefaultSelection<Prisma.$AiProviderCredentialPayload>;
export type AggregateAiProviderCredential = {
    _count: AiProviderCredentialCountAggregateOutputType | null;
    _avg: AiProviderCredentialAvgAggregateOutputType | null;
    _sum: AiProviderCredentialSumAggregateOutputType | null;
    _min: AiProviderCredentialMinAggregateOutputType | null;
    _max: AiProviderCredentialMaxAggregateOutputType | null;
};
export type AiProviderCredentialAvgAggregateOutputType = {
    providerSlot: number | null;
};
export type AiProviderCredentialSumAggregateOutputType = {
    providerSlot: number | null;
};
export type AiProviderCredentialMinAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    providerName: string | null;
    apiKey: string | null;
    baseUrl: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    pendingProviderName: string | null;
    pendingApiKey: string | null;
    pendingBaseUrl: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    createdAt: Date | null;
};
export type AiProviderCredentialMaxAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    providerName: string | null;
    apiKey: string | null;
    baseUrl: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    pendingProviderName: string | null;
    pendingApiKey: string | null;
    pendingBaseUrl: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    createdAt: Date | null;
};
export type AiProviderCredentialCountAggregateOutputType = {
    id: number;
    providerSlot: number;
    providerName: number;
    apiKey: number;
    baseUrl: number;
    isActive: number;
    configuredByUserId: number;
    pendingProviderName: number;
    pendingApiKey: number;
    pendingBaseUrl: number;
    pendingIsActive: number;
    pendingProposedByUserId: number;
    configWorkflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type AiProviderCredentialAvgAggregateInputType = {
    providerSlot?: true;
};
export type AiProviderCredentialSumAggregateInputType = {
    providerSlot?: true;
};
export type AiProviderCredentialMinAggregateInputType = {
    id?: true;
    providerSlot?: true;
    providerName?: true;
    apiKey?: true;
    baseUrl?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingProviderName?: true;
    pendingApiKey?: true;
    pendingBaseUrl?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    createdAt?: true;
};
export type AiProviderCredentialMaxAggregateInputType = {
    id?: true;
    providerSlot?: true;
    providerName?: true;
    apiKey?: true;
    baseUrl?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingProviderName?: true;
    pendingApiKey?: true;
    pendingBaseUrl?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    createdAt?: true;
};
export type AiProviderCredentialCountAggregateInputType = {
    id?: true;
    providerSlot?: true;
    providerName?: true;
    apiKey?: true;
    baseUrl?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingProviderName?: true;
    pendingApiKey?: true;
    pendingBaseUrl?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type AiProviderCredentialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiProviderCredentialWhereInput;
    orderBy?: Prisma.AiProviderCredentialOrderByWithRelationInput | Prisma.AiProviderCredentialOrderByWithRelationInput[];
    cursor?: Prisma.AiProviderCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiProviderCredentialCountAggregateInputType;
    _avg?: AiProviderCredentialAvgAggregateInputType;
    _sum?: AiProviderCredentialSumAggregateInputType;
    _min?: AiProviderCredentialMinAggregateInputType;
    _max?: AiProviderCredentialMaxAggregateInputType;
};
export type GetAiProviderCredentialAggregateType<T extends AiProviderCredentialAggregateArgs> = {
    [P in keyof T & keyof AggregateAiProviderCredential]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiProviderCredential[P]> : Prisma.GetScalarType<T[P], AggregateAiProviderCredential[P]>;
};
export type AiProviderCredentialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiProviderCredentialWhereInput;
    orderBy?: Prisma.AiProviderCredentialOrderByWithAggregationInput | Prisma.AiProviderCredentialOrderByWithAggregationInput[];
    by: Prisma.AiProviderCredentialScalarFieldEnum[] | Prisma.AiProviderCredentialScalarFieldEnum;
    having?: Prisma.AiProviderCredentialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiProviderCredentialCountAggregateInputType | true;
    _avg?: AiProviderCredentialAvgAggregateInputType;
    _sum?: AiProviderCredentialSumAggregateInputType;
    _min?: AiProviderCredentialMinAggregateInputType;
    _max?: AiProviderCredentialMaxAggregateInputType;
};
export type AiProviderCredentialGroupByOutputType = {
    id: string;
    providerSlot: number;
    providerName: string;
    apiKey: string | null;
    baseUrl: string | null;
    isActive: boolean;
    configuredByUserId: string | null;
    pendingProviderName: string | null;
    pendingApiKey: string | null;
    pendingBaseUrl: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    createdAt: Date;
    _count: AiProviderCredentialCountAggregateOutputType | null;
    _avg: AiProviderCredentialAvgAggregateOutputType | null;
    _sum: AiProviderCredentialSumAggregateOutputType | null;
    _min: AiProviderCredentialMinAggregateOutputType | null;
    _max: AiProviderCredentialMaxAggregateOutputType | null;
};
export type GetAiProviderCredentialGroupByPayload<T extends AiProviderCredentialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiProviderCredentialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiProviderCredentialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiProviderCredentialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiProviderCredentialGroupByOutputType[P]>;
}>>;
export type AiProviderCredentialWhereInput = {
    AND?: Prisma.AiProviderCredentialWhereInput | Prisma.AiProviderCredentialWhereInput[];
    OR?: Prisma.AiProviderCredentialWhereInput[];
    NOT?: Prisma.AiProviderCredentialWhereInput | Prisma.AiProviderCredentialWhereInput[];
    id?: Prisma.UuidFilter<"AiProviderCredential"> | string;
    providerSlot?: Prisma.IntFilter<"AiProviderCredential"> | number;
    providerName?: Prisma.StringFilter<"AiProviderCredential"> | string;
    apiKey?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    baseUrl?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    isActive?: Prisma.BoolFilter<"AiProviderCredential"> | boolean;
    configuredByUserId?: Prisma.UuidNullableFilter<"AiProviderCredential"> | string | null;
    pendingProviderName?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    pendingApiKey?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    pendingBaseUrl?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    pendingIsActive?: Prisma.BoolNullableFilter<"AiProviderCredential"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"AiProviderCredential"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableFilter<"AiProviderCredential"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AiProviderCredential"> | Date | string;
};
export type AiProviderCredentialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    baseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProviderName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingBaseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiProviderCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerSlot?: number;
    configWorkflowInstanceId?: string;
    AND?: Prisma.AiProviderCredentialWhereInput | Prisma.AiProviderCredentialWhereInput[];
    OR?: Prisma.AiProviderCredentialWhereInput[];
    NOT?: Prisma.AiProviderCredentialWhereInput | Prisma.AiProviderCredentialWhereInput[];
    providerName?: Prisma.StringFilter<"AiProviderCredential"> | string;
    apiKey?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    baseUrl?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    isActive?: Prisma.BoolFilter<"AiProviderCredential"> | boolean;
    configuredByUserId?: Prisma.UuidNullableFilter<"AiProviderCredential"> | string | null;
    pendingProviderName?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    pendingApiKey?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    pendingBaseUrl?: Prisma.StringNullableFilter<"AiProviderCredential"> | string | null;
    pendingIsActive?: Prisma.BoolNullableFilter<"AiProviderCredential"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"AiProviderCredential"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AiProviderCredential"> | Date | string;
}, "id" | "providerSlot" | "configWorkflowInstanceId">;
export type AiProviderCredentialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    baseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProviderName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingBaseUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AiProviderCredentialCountOrderByAggregateInput;
    _avg?: Prisma.AiProviderCredentialAvgOrderByAggregateInput;
    _max?: Prisma.AiProviderCredentialMaxOrderByAggregateInput;
    _min?: Prisma.AiProviderCredentialMinOrderByAggregateInput;
    _sum?: Prisma.AiProviderCredentialSumOrderByAggregateInput;
};
export type AiProviderCredentialScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiProviderCredentialScalarWhereWithAggregatesInput | Prisma.AiProviderCredentialScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiProviderCredentialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiProviderCredentialScalarWhereWithAggregatesInput | Prisma.AiProviderCredentialScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AiProviderCredential"> | string;
    providerSlot?: Prisma.IntWithAggregatesFilter<"AiProviderCredential"> | number;
    providerName?: Prisma.StringWithAggregatesFilter<"AiProviderCredential"> | string;
    apiKey?: Prisma.StringNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    baseUrl?: Prisma.StringNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"AiProviderCredential"> | boolean;
    configuredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    pendingProviderName?: Prisma.StringNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    pendingApiKey?: Prisma.StringNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    pendingBaseUrl?: Prisma.StringNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    pendingIsActive?: Prisma.BoolNullableWithAggregatesFilter<"AiProviderCredential"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"AiProviderCredential"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AiProviderCredential"> | Date | string;
};
export type AiProviderCredentialCreateInput = {
    id?: string;
    providerSlot: number;
    providerName: string;
    apiKey?: string | null;
    baseUrl?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingProviderName?: string | null;
    pendingApiKey?: string | null;
    pendingBaseUrl?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AiProviderCredentialUncheckedCreateInput = {
    id?: string;
    providerSlot: number;
    providerName: string;
    apiKey?: string | null;
    baseUrl?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingProviderName?: string | null;
    pendingApiKey?: string | null;
    pendingBaseUrl?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AiProviderCredentialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    providerName?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingProviderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiProviderCredentialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    providerName?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingProviderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiProviderCredentialCreateManyInput = {
    id?: string;
    providerSlot: number;
    providerName: string;
    apiKey?: string | null;
    baseUrl?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingProviderName?: string | null;
    pendingApiKey?: string | null;
    pendingBaseUrl?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AiProviderCredentialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    providerName?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingProviderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiProviderCredentialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    providerName?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingProviderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingBaseUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiProviderCredentialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    baseUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingProviderName?: Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrder;
    pendingBaseUrl?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiProviderCredentialAvgOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type AiProviderCredentialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    baseUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingProviderName?: Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrder;
    pendingBaseUrl?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiProviderCredentialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    providerName?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    baseUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingProviderName?: Prisma.SortOrder;
    pendingApiKey?: Prisma.SortOrder;
    pendingBaseUrl?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiProviderCredentialSumOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type AiProviderCredentialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    providerName?: boolean;
    apiKey?: boolean;
    baseUrl?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingProviderName?: boolean;
    pendingApiKey?: boolean;
    pendingBaseUrl?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["aiProviderCredential"]>;
export type AiProviderCredentialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    providerName?: boolean;
    apiKey?: boolean;
    baseUrl?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingProviderName?: boolean;
    pendingApiKey?: boolean;
    pendingBaseUrl?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["aiProviderCredential"]>;
export type AiProviderCredentialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    providerName?: boolean;
    apiKey?: boolean;
    baseUrl?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingProviderName?: boolean;
    pendingApiKey?: boolean;
    pendingBaseUrl?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["aiProviderCredential"]>;
export type AiProviderCredentialSelectScalar = {
    id?: boolean;
    providerSlot?: boolean;
    providerName?: boolean;
    apiKey?: boolean;
    baseUrl?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingProviderName?: boolean;
    pendingApiKey?: boolean;
    pendingBaseUrl?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type AiProviderCredentialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerSlot" | "providerName" | "apiKey" | "baseUrl" | "isActive" | "configuredByUserId" | "pendingProviderName" | "pendingApiKey" | "pendingBaseUrl" | "pendingIsActive" | "pendingProposedByUserId" | "configWorkflowInstanceId" | "createdAt", ExtArgs["result"]["aiProviderCredential"]>;
export type $AiProviderCredentialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiProviderCredential";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerSlot: number;
        providerName: string;
        apiKey: string | null;
        baseUrl: string | null;
        isActive: boolean;
        configuredByUserId: string | null;
        pendingProviderName: string | null;
        pendingApiKey: string | null;
        pendingBaseUrl: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["aiProviderCredential"]>;
    composites: {};
};
export type AiProviderCredentialGetPayload<S extends boolean | null | undefined | AiProviderCredentialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload, S>;
export type AiProviderCredentialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiProviderCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiProviderCredentialCountAggregateInputType | true;
};
export interface AiProviderCredentialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiProviderCredential'];
        meta: {
            name: 'AiProviderCredential';
        };
    };
    findUnique<T extends AiProviderCredentialFindUniqueArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiProviderCredentialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiProviderCredentialFindFirstArgs>(args?: Prisma.SelectSubset<T, AiProviderCredentialFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiProviderCredentialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiProviderCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiProviderCredentialFindManyArgs>(args?: Prisma.SelectSubset<T, AiProviderCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiProviderCredentialCreateArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialCreateArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiProviderCredentialCreateManyArgs>(args?: Prisma.SelectSubset<T, AiProviderCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiProviderCredentialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiProviderCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiProviderCredentialDeleteArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialDeleteArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiProviderCredentialUpdateArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialUpdateArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiProviderCredentialDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiProviderCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiProviderCredentialUpdateManyArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiProviderCredentialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiProviderCredentialUpsertArgs>(args: Prisma.SelectSubset<T, AiProviderCredentialUpsertArgs<ExtArgs>>): Prisma.Prisma__AiProviderCredentialClient<runtime.Types.Result.GetResult<Prisma.$AiProviderCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiProviderCredentialCountArgs>(args?: Prisma.Subset<T, AiProviderCredentialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiProviderCredentialCountAggregateOutputType> : number>;
    aggregate<T extends AiProviderCredentialAggregateArgs>(args: Prisma.Subset<T, AiProviderCredentialAggregateArgs>): Prisma.PrismaPromise<GetAiProviderCredentialAggregateType<T>>;
    groupBy<T extends AiProviderCredentialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiProviderCredentialGroupByArgs['orderBy'];
    } : {
        orderBy?: AiProviderCredentialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiProviderCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiProviderCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiProviderCredentialFieldRefs;
}
export interface Prisma__AiProviderCredentialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiProviderCredentialFieldRefs {
    readonly id: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly providerSlot: Prisma.FieldRef<"AiProviderCredential", 'Int'>;
    readonly providerName: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly apiKey: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly baseUrl: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly isActive: Prisma.FieldRef<"AiProviderCredential", 'Boolean'>;
    readonly configuredByUserId: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly pendingProviderName: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly pendingApiKey: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly pendingBaseUrl: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly pendingIsActive: Prisma.FieldRef<"AiProviderCredential", 'Boolean'>;
    readonly pendingProposedByUserId: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly configWorkflowInstanceId: Prisma.FieldRef<"AiProviderCredential", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AiProviderCredential", 'DateTime'>;
}
export type AiProviderCredentialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    where: Prisma.AiProviderCredentialWhereUniqueInput;
};
export type AiProviderCredentialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    where: Prisma.AiProviderCredentialWhereUniqueInput;
};
export type AiProviderCredentialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    where?: Prisma.AiProviderCredentialWhereInput;
    orderBy?: Prisma.AiProviderCredentialOrderByWithRelationInput | Prisma.AiProviderCredentialOrderByWithRelationInput[];
    cursor?: Prisma.AiProviderCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiProviderCredentialScalarFieldEnum | Prisma.AiProviderCredentialScalarFieldEnum[];
};
export type AiProviderCredentialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    where?: Prisma.AiProviderCredentialWhereInput;
    orderBy?: Prisma.AiProviderCredentialOrderByWithRelationInput | Prisma.AiProviderCredentialOrderByWithRelationInput[];
    cursor?: Prisma.AiProviderCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiProviderCredentialScalarFieldEnum | Prisma.AiProviderCredentialScalarFieldEnum[];
};
export type AiProviderCredentialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    where?: Prisma.AiProviderCredentialWhereInput;
    orderBy?: Prisma.AiProviderCredentialOrderByWithRelationInput | Prisma.AiProviderCredentialOrderByWithRelationInput[];
    cursor?: Prisma.AiProviderCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiProviderCredentialScalarFieldEnum | Prisma.AiProviderCredentialScalarFieldEnum[];
};
export type AiProviderCredentialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiProviderCredentialCreateInput, Prisma.AiProviderCredentialUncheckedCreateInput>;
};
export type AiProviderCredentialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiProviderCredentialCreateManyInput | Prisma.AiProviderCredentialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiProviderCredentialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    data: Prisma.AiProviderCredentialCreateManyInput | Prisma.AiProviderCredentialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiProviderCredentialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiProviderCredentialUpdateInput, Prisma.AiProviderCredentialUncheckedUpdateInput>;
    where: Prisma.AiProviderCredentialWhereUniqueInput;
};
export type AiProviderCredentialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiProviderCredentialUpdateManyMutationInput, Prisma.AiProviderCredentialUncheckedUpdateManyInput>;
    where?: Prisma.AiProviderCredentialWhereInput;
    limit?: number;
};
export type AiProviderCredentialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiProviderCredentialUpdateManyMutationInput, Prisma.AiProviderCredentialUncheckedUpdateManyInput>;
    where?: Prisma.AiProviderCredentialWhereInput;
    limit?: number;
};
export type AiProviderCredentialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    where: Prisma.AiProviderCredentialWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiProviderCredentialCreateInput, Prisma.AiProviderCredentialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiProviderCredentialUpdateInput, Prisma.AiProviderCredentialUncheckedUpdateInput>;
};
export type AiProviderCredentialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
    where: Prisma.AiProviderCredentialWhereUniqueInput;
};
export type AiProviderCredentialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiProviderCredentialWhereInput;
    limit?: number;
};
export type AiProviderCredentialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiProviderCredentialSelect<ExtArgs> | null;
    omit?: Prisma.AiProviderCredentialOmit<ExtArgs> | null;
};
