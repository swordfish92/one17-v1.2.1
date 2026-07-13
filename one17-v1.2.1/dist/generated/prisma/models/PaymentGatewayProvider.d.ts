import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentGatewayProviderModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentGatewayProviderPayload>;
export type AggregatePaymentGatewayProvider = {
    _count: PaymentGatewayProviderCountAggregateOutputType | null;
    _avg: PaymentGatewayProviderAvgAggregateOutputType | null;
    _sum: PaymentGatewayProviderSumAggregateOutputType | null;
    _min: PaymentGatewayProviderMinAggregateOutputType | null;
    _max: PaymentGatewayProviderMaxAggregateOutputType | null;
};
export type PaymentGatewayProviderAvgAggregateOutputType = {
    providerSlot: number | null;
};
export type PaymentGatewayProviderSumAggregateOutputType = {
    providerSlot: number | null;
};
export type PaymentGatewayProviderMinAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    name: string | null;
    webhookSecret: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    updatedAt: Date | null;
    pendingName: string | null;
    pendingWebhookSecret: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
};
export type PaymentGatewayProviderMaxAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    name: string | null;
    webhookSecret: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    updatedAt: Date | null;
    pendingName: string | null;
    pendingWebhookSecret: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
};
export type PaymentGatewayProviderCountAggregateOutputType = {
    id: number;
    providerSlot: number;
    name: number;
    webhookSecret: number;
    apiConfig: number;
    isActive: number;
    configuredByUserId: number;
    updatedAt: number;
    pendingName: number;
    pendingWebhookSecret: number;
    pendingApiConfig: number;
    pendingIsActive: number;
    pendingProposedByUserId: number;
    configWorkflowInstanceId: number;
    _all: number;
};
export type PaymentGatewayProviderAvgAggregateInputType = {
    providerSlot?: true;
};
export type PaymentGatewayProviderSumAggregateInputType = {
    providerSlot?: true;
};
export type PaymentGatewayProviderMinAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    webhookSecret?: true;
    isActive?: true;
    configuredByUserId?: true;
    updatedAt?: true;
    pendingName?: true;
    pendingWebhookSecret?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
};
export type PaymentGatewayProviderMaxAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    webhookSecret?: true;
    isActive?: true;
    configuredByUserId?: true;
    updatedAt?: true;
    pendingName?: true;
    pendingWebhookSecret?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
};
export type PaymentGatewayProviderCountAggregateInputType = {
    id?: true;
    providerSlot?: true;
    name?: true;
    webhookSecret?: true;
    apiConfig?: true;
    isActive?: true;
    configuredByUserId?: true;
    updatedAt?: true;
    pendingName?: true;
    pendingWebhookSecret?: true;
    pendingApiConfig?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    _all?: true;
};
export type PaymentGatewayProviderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentGatewayProviderWhereInput;
    orderBy?: Prisma.PaymentGatewayProviderOrderByWithRelationInput | Prisma.PaymentGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentGatewayProviderCountAggregateInputType;
    _avg?: PaymentGatewayProviderAvgAggregateInputType;
    _sum?: PaymentGatewayProviderSumAggregateInputType;
    _min?: PaymentGatewayProviderMinAggregateInputType;
    _max?: PaymentGatewayProviderMaxAggregateInputType;
};
export type GetPaymentGatewayProviderAggregateType<T extends PaymentGatewayProviderAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentGatewayProvider]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentGatewayProvider[P]> : Prisma.GetScalarType<T[P], AggregatePaymentGatewayProvider[P]>;
};
export type PaymentGatewayProviderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentGatewayProviderWhereInput;
    orderBy?: Prisma.PaymentGatewayProviderOrderByWithAggregationInput | Prisma.PaymentGatewayProviderOrderByWithAggregationInput[];
    by: Prisma.PaymentGatewayProviderScalarFieldEnum[] | Prisma.PaymentGatewayProviderScalarFieldEnum;
    having?: Prisma.PaymentGatewayProviderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentGatewayProviderCountAggregateInputType | true;
    _avg?: PaymentGatewayProviderAvgAggregateInputType;
    _sum?: PaymentGatewayProviderSumAggregateInputType;
    _min?: PaymentGatewayProviderMinAggregateInputType;
    _max?: PaymentGatewayProviderMaxAggregateInputType;
};
export type PaymentGatewayProviderGroupByOutputType = {
    id: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig: runtime.JsonValue | null;
    isActive: boolean;
    configuredByUserId: string;
    updatedAt: Date;
    pendingName: string | null;
    pendingWebhookSecret: string | null;
    pendingApiConfig: runtime.JsonValue | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    _count: PaymentGatewayProviderCountAggregateOutputType | null;
    _avg: PaymentGatewayProviderAvgAggregateOutputType | null;
    _sum: PaymentGatewayProviderSumAggregateOutputType | null;
    _min: PaymentGatewayProviderMinAggregateOutputType | null;
    _max: PaymentGatewayProviderMaxAggregateOutputType | null;
};
export type GetPaymentGatewayProviderGroupByPayload<T extends PaymentGatewayProviderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGatewayProviderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGatewayProviderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGatewayProviderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGatewayProviderGroupByOutputType[P]>;
}>>;
export type PaymentGatewayProviderWhereInput = {
    AND?: Prisma.PaymentGatewayProviderWhereInput | Prisma.PaymentGatewayProviderWhereInput[];
    OR?: Prisma.PaymentGatewayProviderWhereInput[];
    NOT?: Prisma.PaymentGatewayProviderWhereInput | Prisma.PaymentGatewayProviderWhereInput[];
    id?: Prisma.UuidFilter<"PaymentGatewayProvider"> | string;
    providerSlot?: Prisma.IntFilter<"PaymentGatewayProvider"> | number;
    name?: Prisma.StringFilter<"PaymentGatewayProvider"> | string;
    webhookSecret?: Prisma.StringFilter<"PaymentGatewayProvider"> | string;
    apiConfig?: Prisma.JsonNullableFilter<"PaymentGatewayProvider">;
    isActive?: Prisma.BoolFilter<"PaymentGatewayProvider"> | boolean;
    configuredByUserId?: Prisma.UuidFilter<"PaymentGatewayProvider"> | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentGatewayProvider"> | Date | string;
    pendingName?: Prisma.StringNullableFilter<"PaymentGatewayProvider"> | string | null;
    pendingWebhookSecret?: Prisma.StringNullableFilter<"PaymentGatewayProvider"> | string | null;
    pendingApiConfig?: Prisma.JsonNullableFilter<"PaymentGatewayProvider">;
    pendingIsActive?: Prisma.BoolNullableFilter<"PaymentGatewayProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"PaymentGatewayProvider"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableFilter<"PaymentGatewayProvider"> | string | null;
    configuredBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    pendingProposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    configWorkflow?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    custodianAccounts?: Prisma.ProductCustodianAccountListRelationFilter;
    inflows?: Prisma.PaymentGatewayInflowListRelationFilter;
};
export type PaymentGatewayProviderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    webhookSecret?: Prisma.SortOrder;
    apiConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingWebhookSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingApiConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configuredBy?: Prisma.AppUserOrderByWithRelationInput;
    pendingProposedBy?: Prisma.AppUserOrderByWithRelationInput;
    configWorkflow?: Prisma.WorkflowInstanceOrderByWithRelationInput;
    custodianAccounts?: Prisma.ProductCustodianAccountOrderByRelationAggregateInput;
    inflows?: Prisma.PaymentGatewayInflowOrderByRelationAggregateInput;
};
export type PaymentGatewayProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerSlot?: number;
    configWorkflowInstanceId?: string;
    AND?: Prisma.PaymentGatewayProviderWhereInput | Prisma.PaymentGatewayProviderWhereInput[];
    OR?: Prisma.PaymentGatewayProviderWhereInput[];
    NOT?: Prisma.PaymentGatewayProviderWhereInput | Prisma.PaymentGatewayProviderWhereInput[];
    name?: Prisma.StringFilter<"PaymentGatewayProvider"> | string;
    webhookSecret?: Prisma.StringFilter<"PaymentGatewayProvider"> | string;
    apiConfig?: Prisma.JsonNullableFilter<"PaymentGatewayProvider">;
    isActive?: Prisma.BoolFilter<"PaymentGatewayProvider"> | boolean;
    configuredByUserId?: Prisma.UuidFilter<"PaymentGatewayProvider"> | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentGatewayProvider"> | Date | string;
    pendingName?: Prisma.StringNullableFilter<"PaymentGatewayProvider"> | string | null;
    pendingWebhookSecret?: Prisma.StringNullableFilter<"PaymentGatewayProvider"> | string | null;
    pendingApiConfig?: Prisma.JsonNullableFilter<"PaymentGatewayProvider">;
    pendingIsActive?: Prisma.BoolNullableFilter<"PaymentGatewayProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"PaymentGatewayProvider"> | string | null;
    configuredBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    pendingProposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    configWorkflow?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    custodianAccounts?: Prisma.ProductCustodianAccountListRelationFilter;
    inflows?: Prisma.PaymentGatewayInflowListRelationFilter;
}, "id" | "providerSlot" | "configWorkflowInstanceId">;
export type PaymentGatewayProviderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    webhookSecret?: Prisma.SortOrder;
    apiConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingWebhookSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingApiConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PaymentGatewayProviderCountOrderByAggregateInput;
    _avg?: Prisma.PaymentGatewayProviderAvgOrderByAggregateInput;
    _max?: Prisma.PaymentGatewayProviderMaxOrderByAggregateInput;
    _min?: Prisma.PaymentGatewayProviderMinOrderByAggregateInput;
    _sum?: Prisma.PaymentGatewayProviderSumOrderByAggregateInput;
};
export type PaymentGatewayProviderScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentGatewayProviderScalarWhereWithAggregatesInput | Prisma.PaymentGatewayProviderScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentGatewayProviderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentGatewayProviderScalarWhereWithAggregatesInput | Prisma.PaymentGatewayProviderScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentGatewayProvider"> | string;
    providerSlot?: Prisma.IntWithAggregatesFilter<"PaymentGatewayProvider"> | number;
    name?: Prisma.StringWithAggregatesFilter<"PaymentGatewayProvider"> | string;
    webhookSecret?: Prisma.StringWithAggregatesFilter<"PaymentGatewayProvider"> | string;
    apiConfig?: Prisma.JsonNullableWithAggregatesFilter<"PaymentGatewayProvider">;
    isActive?: Prisma.BoolWithAggregatesFilter<"PaymentGatewayProvider"> | boolean;
    configuredByUserId?: Prisma.UuidWithAggregatesFilter<"PaymentGatewayProvider"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentGatewayProvider"> | Date | string;
    pendingName?: Prisma.StringNullableWithAggregatesFilter<"PaymentGatewayProvider"> | string | null;
    pendingWebhookSecret?: Prisma.StringNullableWithAggregatesFilter<"PaymentGatewayProvider"> | string | null;
    pendingApiConfig?: Prisma.JsonNullableWithAggregatesFilter<"PaymentGatewayProvider">;
    pendingIsActive?: Prisma.BoolNullableWithAggregatesFilter<"PaymentGatewayProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentGatewayProvider"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"PaymentGatewayProvider"> | string | null;
};
export type PaymentGatewayProviderCreateInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    configuredBy: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProvidersConfiguredInput;
    pendingProposedBy?: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProviderConfigsProposedInput;
    configWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutPaymentGatewayProviderConfigInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderUncheckedCreateInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    configuredByUserId: string;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuredBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentGatewayProvidersConfiguredNestedInput;
    pendingProposedBy?: Prisma.AppUserUpdateOneWithoutPaymentGatewayProviderConfigsProposedNestedInput;
    configWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutPaymentGatewayProviderConfigNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderCreateManyInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    configuredByUserId: string;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
};
export type PaymentGatewayProviderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type PaymentGatewayProviderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentGatewayProviderListRelationFilter = {
    every?: Prisma.PaymentGatewayProviderWhereInput;
    some?: Prisma.PaymentGatewayProviderWhereInput;
    none?: Prisma.PaymentGatewayProviderWhereInput;
};
export type PaymentGatewayProviderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentGatewayProviderNullableScalarRelationFilter = {
    is?: Prisma.PaymentGatewayProviderWhereInput | null;
    isNot?: Prisma.PaymentGatewayProviderWhereInput | null;
};
export type PaymentGatewayProviderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    webhookSecret?: Prisma.SortOrder;
    apiConfig?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingWebhookSecret?: Prisma.SortOrder;
    pendingApiConfig?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
};
export type PaymentGatewayProviderAvgOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type PaymentGatewayProviderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    webhookSecret?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingWebhookSecret?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
};
export type PaymentGatewayProviderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    webhookSecret?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingWebhookSecret?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
};
export type PaymentGatewayProviderSumOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type PaymentGatewayProviderScalarRelationFilter = {
    is?: Prisma.PaymentGatewayProviderWhereInput;
    isNot?: Prisma.PaymentGatewayProviderWhereInput;
};
export type PaymentGatewayProviderCreateNestedManyWithoutConfiguredByInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput> | Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyConfiguredByInputEnvelope;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
};
export type PaymentGatewayProviderCreateNestedManyWithoutPendingProposedByInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput> | Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyPendingProposedByInputEnvelope;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
};
export type PaymentGatewayProviderUncheckedCreateNestedManyWithoutConfiguredByInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput> | Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyConfiguredByInputEnvelope;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
};
export type PaymentGatewayProviderUncheckedCreateNestedManyWithoutPendingProposedByInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput> | Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyPendingProposedByInputEnvelope;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
};
export type PaymentGatewayProviderUpdateManyWithoutConfiguredByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput> | Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput[];
    upsert?: Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutConfiguredByInput | Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutConfiguredByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyConfiguredByInputEnvelope;
    set?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    disconnect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    delete?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    update?: Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutConfiguredByInput | Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutConfiguredByInput[];
    updateMany?: Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutConfiguredByInput | Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutConfiguredByInput[];
    deleteMany?: Prisma.PaymentGatewayProviderScalarWhereInput | Prisma.PaymentGatewayProviderScalarWhereInput[];
};
export type PaymentGatewayProviderUpdateManyWithoutPendingProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput> | Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput[];
    upsert?: Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutPendingProposedByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyPendingProposedByInputEnvelope;
    set?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    disconnect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    delete?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    update?: Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutPendingProposedByInput[];
    updateMany?: Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutPendingProposedByInput[];
    deleteMany?: Prisma.PaymentGatewayProviderScalarWhereInput | Prisma.PaymentGatewayProviderScalarWhereInput[];
};
export type PaymentGatewayProviderUncheckedUpdateManyWithoutConfiguredByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput> | Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput[];
    upsert?: Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutConfiguredByInput | Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutConfiguredByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyConfiguredByInputEnvelope;
    set?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    disconnect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    delete?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    update?: Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutConfiguredByInput | Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutConfiguredByInput[];
    updateMany?: Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutConfiguredByInput | Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutConfiguredByInput[];
    deleteMany?: Prisma.PaymentGatewayProviderScalarWhereInput | Prisma.PaymentGatewayProviderScalarWhereInput[];
};
export type PaymentGatewayProviderUncheckedUpdateManyWithoutPendingProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput> | Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput[] | Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput[];
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput[];
    upsert?: Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderUpsertWithWhereUniqueWithoutPendingProposedByInput[];
    createMany?: Prisma.PaymentGatewayProviderCreateManyPendingProposedByInputEnvelope;
    set?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    disconnect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    delete?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput | Prisma.PaymentGatewayProviderWhereUniqueInput[];
    update?: Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderUpdateWithWhereUniqueWithoutPendingProposedByInput[];
    updateMany?: Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutPendingProposedByInput | Prisma.PaymentGatewayProviderUpdateManyWithWhereWithoutPendingProposedByInput[];
    deleteMany?: Prisma.PaymentGatewayProviderScalarWhereInput | Prisma.PaymentGatewayProviderScalarWhereInput[];
};
export type PaymentGatewayProviderCreateNestedOneWithoutConfigWorkflowInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfigWorkflowInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfigWorkflowInput;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderUncheckedCreateNestedOneWithoutConfigWorkflowInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfigWorkflowInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfigWorkflowInput;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderUpdateOneWithoutConfigWorkflowNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfigWorkflowInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfigWorkflowInput;
    upsert?: Prisma.PaymentGatewayProviderUpsertWithoutConfigWorkflowInput;
    disconnect?: Prisma.PaymentGatewayProviderWhereInput | boolean;
    delete?: Prisma.PaymentGatewayProviderWhereInput | boolean;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentGatewayProviderUpdateToOneWithWhereWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUpdateWithoutConfigWorkflowInput>, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutConfigWorkflowInput>;
};
export type PaymentGatewayProviderUncheckedUpdateOneWithoutConfigWorkflowNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfigWorkflowInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutConfigWorkflowInput;
    upsert?: Prisma.PaymentGatewayProviderUpsertWithoutConfigWorkflowInput;
    disconnect?: Prisma.PaymentGatewayProviderWhereInput | boolean;
    delete?: Prisma.PaymentGatewayProviderWhereInput | boolean;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentGatewayProviderUpdateToOneWithWhereWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUpdateWithoutConfigWorkflowInput>, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutConfigWorkflowInput>;
};
export type PaymentGatewayProviderCreateNestedOneWithoutCustodianAccountsInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutCustodianAccountsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutCustodianAccountsInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutCustodianAccountsInput;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderUpdateOneRequiredWithoutCustodianAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutCustodianAccountsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutCustodianAccountsInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutCustodianAccountsInput;
    upsert?: Prisma.PaymentGatewayProviderUpsertWithoutCustodianAccountsInput;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentGatewayProviderUpdateToOneWithWhereWithoutCustodianAccountsInput, Prisma.PaymentGatewayProviderUpdateWithoutCustodianAccountsInput>, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutCustodianAccountsInput>;
};
export type PaymentGatewayProviderCreateNestedOneWithoutInflowsInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutInflowsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutInflowsInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutInflowsInput;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderUpdateOneRequiredWithoutInflowsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutInflowsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutInflowsInput>;
    connectOrCreate?: Prisma.PaymentGatewayProviderCreateOrConnectWithoutInflowsInput;
    upsert?: Prisma.PaymentGatewayProviderUpsertWithoutInflowsInput;
    connect?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentGatewayProviderUpdateToOneWithWhereWithoutInflowsInput, Prisma.PaymentGatewayProviderUpdateWithoutInflowsInput>, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutInflowsInput>;
};
export type PaymentGatewayProviderCreateWithoutConfiguredByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedBy?: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProviderConfigsProposedInput;
    configWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutPaymentGatewayProviderConfigInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderCreateOrConnectWithoutConfiguredByInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput>;
};
export type PaymentGatewayProviderCreateManyConfiguredByInputEnvelope = {
    data: Prisma.PaymentGatewayProviderCreateManyConfiguredByInput | Prisma.PaymentGatewayProviderCreateManyConfiguredByInput[];
    skipDuplicates?: boolean;
};
export type PaymentGatewayProviderCreateWithoutPendingProposedByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    configuredBy: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProvidersConfiguredInput;
    configWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutPaymentGatewayProviderConfigInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    configuredByUserId: string;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    configWorkflowInstanceId?: string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderCreateOrConnectWithoutPendingProposedByInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput>;
};
export type PaymentGatewayProviderCreateManyPendingProposedByInputEnvelope = {
    data: Prisma.PaymentGatewayProviderCreateManyPendingProposedByInput | Prisma.PaymentGatewayProviderCreateManyPendingProposedByInput[];
    skipDuplicates?: boolean;
};
export type PaymentGatewayProviderUpsertWithWhereUniqueWithoutConfiguredByInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutConfiguredByInput>;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfiguredByInput>;
};
export type PaymentGatewayProviderUpdateWithWhereUniqueWithoutConfiguredByInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutConfiguredByInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutConfiguredByInput>;
};
export type PaymentGatewayProviderUpdateManyWithWhereWithoutConfiguredByInput = {
    where: Prisma.PaymentGatewayProviderScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateManyMutationInput, Prisma.PaymentGatewayProviderUncheckedUpdateManyWithoutConfiguredByInput>;
};
export type PaymentGatewayProviderScalarWhereInput = {
    AND?: Prisma.PaymentGatewayProviderScalarWhereInput | Prisma.PaymentGatewayProviderScalarWhereInput[];
    OR?: Prisma.PaymentGatewayProviderScalarWhereInput[];
    NOT?: Prisma.PaymentGatewayProviderScalarWhereInput | Prisma.PaymentGatewayProviderScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentGatewayProvider"> | string;
    providerSlot?: Prisma.IntFilter<"PaymentGatewayProvider"> | number;
    name?: Prisma.StringFilter<"PaymentGatewayProvider"> | string;
    webhookSecret?: Prisma.StringFilter<"PaymentGatewayProvider"> | string;
    apiConfig?: Prisma.JsonNullableFilter<"PaymentGatewayProvider">;
    isActive?: Prisma.BoolFilter<"PaymentGatewayProvider"> | boolean;
    configuredByUserId?: Prisma.UuidFilter<"PaymentGatewayProvider"> | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentGatewayProvider"> | Date | string;
    pendingName?: Prisma.StringNullableFilter<"PaymentGatewayProvider"> | string | null;
    pendingWebhookSecret?: Prisma.StringNullableFilter<"PaymentGatewayProvider"> | string | null;
    pendingApiConfig?: Prisma.JsonNullableFilter<"PaymentGatewayProvider">;
    pendingIsActive?: Prisma.BoolNullableFilter<"PaymentGatewayProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"PaymentGatewayProvider"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableFilter<"PaymentGatewayProvider"> | string | null;
};
export type PaymentGatewayProviderUpsertWithWhereUniqueWithoutPendingProposedByInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutPendingProposedByInput>;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutPendingProposedByInput>;
};
export type PaymentGatewayProviderUpdateWithWhereUniqueWithoutPendingProposedByInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutPendingProposedByInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutPendingProposedByInput>;
};
export type PaymentGatewayProviderUpdateManyWithWhereWithoutPendingProposedByInput = {
    where: Prisma.PaymentGatewayProviderScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateManyMutationInput, Prisma.PaymentGatewayProviderUncheckedUpdateManyWithoutPendingProposedByInput>;
};
export type PaymentGatewayProviderCreateWithoutConfigWorkflowInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    configuredBy: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProvidersConfiguredInput;
    pendingProposedBy?: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProviderConfigsProposedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderUncheckedCreateWithoutConfigWorkflowInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    configuredByUserId: string;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProviderInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderCreateOrConnectWithoutConfigWorkflowInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfigWorkflowInput>;
};
export type PaymentGatewayProviderUpsertWithoutConfigWorkflowInput = {
    update: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutConfigWorkflowInput>;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutConfigWorkflowInput>;
    where?: Prisma.PaymentGatewayProviderWhereInput;
};
export type PaymentGatewayProviderUpdateToOneWithWhereWithoutConfigWorkflowInput = {
    where?: Prisma.PaymentGatewayProviderWhereInput;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutConfigWorkflowInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutConfigWorkflowInput>;
};
export type PaymentGatewayProviderUpdateWithoutConfigWorkflowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuredBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentGatewayProvidersConfiguredNestedInput;
    pendingProposedBy?: Prisma.AppUserUpdateOneWithoutPaymentGatewayProviderConfigsProposedNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateWithoutConfigWorkflowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderCreateWithoutCustodianAccountsInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    configuredBy: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProvidersConfiguredInput;
    pendingProposedBy?: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProviderConfigsProposedInput;
    configWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutPaymentGatewayProviderConfigInput;
    inflows?: Prisma.PaymentGatewayInflowCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderUncheckedCreateWithoutCustodianAccountsInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    configuredByUserId: string;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    inflows?: Prisma.PaymentGatewayInflowUncheckedCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderCreateOrConnectWithoutCustodianAccountsInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutCustodianAccountsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutCustodianAccountsInput>;
};
export type PaymentGatewayProviderUpsertWithoutCustodianAccountsInput = {
    update: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutCustodianAccountsInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutCustodianAccountsInput>;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutCustodianAccountsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutCustodianAccountsInput>;
    where?: Prisma.PaymentGatewayProviderWhereInput;
};
export type PaymentGatewayProviderUpdateToOneWithWhereWithoutCustodianAccountsInput = {
    where?: Prisma.PaymentGatewayProviderWhereInput;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutCustodianAccountsInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutCustodianAccountsInput>;
};
export type PaymentGatewayProviderUpdateWithoutCustodianAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuredBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentGatewayProvidersConfiguredNestedInput;
    pendingProposedBy?: Prisma.AppUserUpdateOneWithoutPaymentGatewayProviderConfigsProposedNestedInput;
    configWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutPaymentGatewayProviderConfigNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateWithoutCustodianAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inflows?: Prisma.PaymentGatewayInflowUncheckedUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderCreateWithoutInflowsInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    configuredBy: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProvidersConfiguredInput;
    pendingProposedBy?: Prisma.AppUserCreateNestedOneWithoutPaymentGatewayProviderConfigsProposedInput;
    configWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutPaymentGatewayProviderConfigInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderUncheckedCreateWithoutInflowsInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    configuredByUserId: string;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProviderInput;
};
export type PaymentGatewayProviderCreateOrConnectWithoutInflowsInput = {
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutInflowsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutInflowsInput>;
};
export type PaymentGatewayProviderUpsertWithoutInflowsInput = {
    update: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutInflowsInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutInflowsInput>;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateWithoutInflowsInput, Prisma.PaymentGatewayProviderUncheckedCreateWithoutInflowsInput>;
    where?: Prisma.PaymentGatewayProviderWhereInput;
};
export type PaymentGatewayProviderUpdateToOneWithWhereWithoutInflowsInput = {
    where?: Prisma.PaymentGatewayProviderWhereInput;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateWithoutInflowsInput, Prisma.PaymentGatewayProviderUncheckedUpdateWithoutInflowsInput>;
};
export type PaymentGatewayProviderUpdateWithoutInflowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuredBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentGatewayProvidersConfiguredNestedInput;
    pendingProposedBy?: Prisma.AppUserUpdateOneWithoutPaymentGatewayProviderConfigsProposedNestedInput;
    configWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutPaymentGatewayProviderConfigNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateWithoutInflowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderCreateManyConfiguredByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
};
export type PaymentGatewayProviderCreateManyPendingProposedByInput = {
    id?: string;
    providerSlot: number;
    name: string;
    webhookSecret: string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    configuredByUserId: string;
    updatedAt?: Date | string;
    pendingName?: string | null;
    pendingWebhookSecret?: string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: boolean | null;
    configWorkflowInstanceId?: string | null;
};
export type PaymentGatewayProviderUpdateWithoutConfiguredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedBy?: Prisma.AppUserUpdateOneWithoutPaymentGatewayProviderConfigsProposedNestedInput;
    configWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutPaymentGatewayProviderConfigNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateWithoutConfiguredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateManyWithoutConfiguredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentGatewayProviderUpdateWithoutPendingProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    configuredBy?: Prisma.AppUserUpdateOneRequiredWithoutPaymentGatewayProvidersConfiguredNestedInput;
    configWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutPaymentGatewayProviderConfigNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateWithoutPendingProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProviderNestedInput;
    inflows?: Prisma.PaymentGatewayInflowUncheckedUpdateManyWithoutProviderNestedInput;
};
export type PaymentGatewayProviderUncheckedUpdateManyWithoutPendingProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    webhookSecret?: Prisma.StringFieldUpdateOperationsInput | string;
    apiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingApiConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PaymentGatewayProviderCountOutputType = {
    custodianAccounts: number;
    inflows: number;
};
export type PaymentGatewayProviderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    custodianAccounts?: boolean | PaymentGatewayProviderCountOutputTypeCountCustodianAccountsArgs;
    inflows?: boolean | PaymentGatewayProviderCountOutputTypeCountInflowsArgs;
};
export type PaymentGatewayProviderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentGatewayProviderCountOutputTypeCountCustodianAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCustodianAccountWhereInput;
};
export type PaymentGatewayProviderCountOutputTypeCountInflowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentGatewayInflowWhereInput;
};
export type PaymentGatewayProviderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    webhookSecret?: boolean;
    apiConfig?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    updatedAt?: boolean;
    pendingName?: boolean;
    pendingWebhookSecret?: boolean;
    pendingApiConfig?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    configuredBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    pendingProposedBy?: boolean | Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs>;
    configWorkflow?: boolean | Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs>;
    custodianAccounts?: boolean | Prisma.PaymentGatewayProvider$custodianAccountsArgs<ExtArgs>;
    inflows?: boolean | Prisma.PaymentGatewayProvider$inflowsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentGatewayProviderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentGatewayProvider"]>;
export type PaymentGatewayProviderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    webhookSecret?: boolean;
    apiConfig?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    updatedAt?: boolean;
    pendingName?: boolean;
    pendingWebhookSecret?: boolean;
    pendingApiConfig?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    configuredBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    pendingProposedBy?: boolean | Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs>;
    configWorkflow?: boolean | Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs>;
}, ExtArgs["result"]["paymentGatewayProvider"]>;
export type PaymentGatewayProviderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    webhookSecret?: boolean;
    apiConfig?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    updatedAt?: boolean;
    pendingName?: boolean;
    pendingWebhookSecret?: boolean;
    pendingApiConfig?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    configuredBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    pendingProposedBy?: boolean | Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs>;
    configWorkflow?: boolean | Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs>;
}, ExtArgs["result"]["paymentGatewayProvider"]>;
export type PaymentGatewayProviderSelectScalar = {
    id?: boolean;
    providerSlot?: boolean;
    name?: boolean;
    webhookSecret?: boolean;
    apiConfig?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    updatedAt?: boolean;
    pendingName?: boolean;
    pendingWebhookSecret?: boolean;
    pendingApiConfig?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
};
export type PaymentGatewayProviderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerSlot" | "name" | "webhookSecret" | "apiConfig" | "isActive" | "configuredByUserId" | "updatedAt" | "pendingName" | "pendingWebhookSecret" | "pendingApiConfig" | "pendingIsActive" | "pendingProposedByUserId" | "configWorkflowInstanceId", ExtArgs["result"]["paymentGatewayProvider"]>;
export type PaymentGatewayProviderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    configuredBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    pendingProposedBy?: boolean | Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs>;
    configWorkflow?: boolean | Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs>;
    custodianAccounts?: boolean | Prisma.PaymentGatewayProvider$custodianAccountsArgs<ExtArgs>;
    inflows?: boolean | Prisma.PaymentGatewayProvider$inflowsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentGatewayProviderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PaymentGatewayProviderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    configuredBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    pendingProposedBy?: boolean | Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs>;
    configWorkflow?: boolean | Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs>;
};
export type PaymentGatewayProviderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    configuredBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    pendingProposedBy?: boolean | Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs>;
    configWorkflow?: boolean | Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs>;
};
export type $PaymentGatewayProviderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentGatewayProvider";
    objects: {
        configuredBy: Prisma.$AppUserPayload<ExtArgs>;
        pendingProposedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        configWorkflow: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
        custodianAccounts: Prisma.$ProductCustodianAccountPayload<ExtArgs>[];
        inflows: Prisma.$PaymentGatewayInflowPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerSlot: number;
        name: string;
        webhookSecret: string;
        apiConfig: runtime.JsonValue | null;
        isActive: boolean;
        configuredByUserId: string;
        updatedAt: Date;
        pendingName: string | null;
        pendingWebhookSecret: string | null;
        pendingApiConfig: runtime.JsonValue | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
    }, ExtArgs["result"]["paymentGatewayProvider"]>;
    composites: {};
};
export type PaymentGatewayProviderGetPayload<S extends boolean | null | undefined | PaymentGatewayProviderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload, S>;
export type PaymentGatewayProviderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentGatewayProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentGatewayProviderCountAggregateInputType | true;
};
export interface PaymentGatewayProviderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentGatewayProvider'];
        meta: {
            name: 'PaymentGatewayProvider';
        };
    };
    findUnique<T extends PaymentGatewayProviderFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentGatewayProviderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentGatewayProviderFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentGatewayProviderFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentGatewayProviderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentGatewayProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentGatewayProviderFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentGatewayProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentGatewayProviderCreateArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentGatewayProviderCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentGatewayProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentGatewayProviderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentGatewayProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentGatewayProviderDeleteArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentGatewayProviderUpdateArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentGatewayProviderDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentGatewayProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentGatewayProviderUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentGatewayProviderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentGatewayProviderUpsertArgs>(args: Prisma.SelectSubset<T, PaymentGatewayProviderUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentGatewayProviderCountArgs>(args?: Prisma.Subset<T, PaymentGatewayProviderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentGatewayProviderCountAggregateOutputType> : number>;
    aggregate<T extends PaymentGatewayProviderAggregateArgs>(args: Prisma.Subset<T, PaymentGatewayProviderAggregateArgs>): Prisma.PrismaPromise<GetPaymentGatewayProviderAggregateType<T>>;
    groupBy<T extends PaymentGatewayProviderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentGatewayProviderGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentGatewayProviderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentGatewayProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGatewayProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentGatewayProviderFieldRefs;
}
export interface Prisma__PaymentGatewayProviderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    configuredBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pendingProposedBy<T extends Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentGatewayProvider$pendingProposedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    configWorkflow<T extends Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentGatewayProvider$configWorkflowArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    custodianAccounts<T extends Prisma.PaymentGatewayProvider$custodianAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentGatewayProvider$custodianAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCustodianAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inflows<T extends Prisma.PaymentGatewayProvider$inflowsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentGatewayProvider$inflowsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentGatewayInflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentGatewayProviderFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
    readonly providerSlot: Prisma.FieldRef<"PaymentGatewayProvider", 'Int'>;
    readonly name: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
    readonly webhookSecret: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
    readonly apiConfig: Prisma.FieldRef<"PaymentGatewayProvider", 'Json'>;
    readonly isActive: Prisma.FieldRef<"PaymentGatewayProvider", 'Boolean'>;
    readonly configuredByUserId: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"PaymentGatewayProvider", 'DateTime'>;
    readonly pendingName: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
    readonly pendingWebhookSecret: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
    readonly pendingApiConfig: Prisma.FieldRef<"PaymentGatewayProvider", 'Json'>;
    readonly pendingIsActive: Prisma.FieldRef<"PaymentGatewayProvider", 'Boolean'>;
    readonly pendingProposedByUserId: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
    readonly configWorkflowInstanceId: Prisma.FieldRef<"PaymentGatewayProvider", 'String'>;
}
export type PaymentGatewayProviderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    where?: Prisma.PaymentGatewayProviderWhereInput;
    orderBy?: Prisma.PaymentGatewayProviderOrderByWithRelationInput | Prisma.PaymentGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentGatewayProviderScalarFieldEnum | Prisma.PaymentGatewayProviderScalarFieldEnum[];
};
export type PaymentGatewayProviderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    where?: Prisma.PaymentGatewayProviderWhereInput;
    orderBy?: Prisma.PaymentGatewayProviderOrderByWithRelationInput | Prisma.PaymentGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentGatewayProviderScalarFieldEnum | Prisma.PaymentGatewayProviderScalarFieldEnum[];
};
export type PaymentGatewayProviderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    where?: Prisma.PaymentGatewayProviderWhereInput;
    orderBy?: Prisma.PaymentGatewayProviderOrderByWithRelationInput | Prisma.PaymentGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.PaymentGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentGatewayProviderScalarFieldEnum | Prisma.PaymentGatewayProviderScalarFieldEnum[];
};
export type PaymentGatewayProviderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderCreateInput, Prisma.PaymentGatewayProviderUncheckedCreateInput>;
};
export type PaymentGatewayProviderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentGatewayProviderCreateManyInput | Prisma.PaymentGatewayProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentGatewayProviderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    data: Prisma.PaymentGatewayProviderCreateManyInput | Prisma.PaymentGatewayProviderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentGatewayProviderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentGatewayProviderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateInput, Prisma.PaymentGatewayProviderUncheckedUpdateInput>;
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateManyMutationInput, Prisma.PaymentGatewayProviderUncheckedUpdateManyInput>;
    where?: Prisma.PaymentGatewayProviderWhereInput;
    limit?: number;
};
export type PaymentGatewayProviderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateManyMutationInput, Prisma.PaymentGatewayProviderUncheckedUpdateManyInput>;
    where?: Prisma.PaymentGatewayProviderWhereInput;
    limit?: number;
    include?: Prisma.PaymentGatewayProviderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentGatewayProviderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentGatewayProviderCreateInput, Prisma.PaymentGatewayProviderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentGatewayProviderUpdateInput, Prisma.PaymentGatewayProviderUncheckedUpdateInput>;
};
export type PaymentGatewayProviderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.PaymentGatewayProviderWhereUniqueInput;
};
export type PaymentGatewayProviderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentGatewayProviderWhereInput;
    limit?: number;
};
export type PaymentGatewayProvider$pendingProposedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type PaymentGatewayProvider$configWorkflowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type PaymentGatewayProvider$custodianAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCustodianAccountSelect<ExtArgs> | null;
    omit?: Prisma.ProductCustodianAccountOmit<ExtArgs> | null;
    include?: Prisma.ProductCustodianAccountInclude<ExtArgs> | null;
    where?: Prisma.ProductCustodianAccountWhereInput;
    orderBy?: Prisma.ProductCustodianAccountOrderByWithRelationInput | Prisma.ProductCustodianAccountOrderByWithRelationInput[];
    cursor?: Prisma.ProductCustodianAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductCustodianAccountScalarFieldEnum | Prisma.ProductCustodianAccountScalarFieldEnum[];
};
export type PaymentGatewayProvider$inflowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayInflowSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayInflowOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayInflowInclude<ExtArgs> | null;
    where?: Prisma.PaymentGatewayInflowWhereInput;
    orderBy?: Prisma.PaymentGatewayInflowOrderByWithRelationInput | Prisma.PaymentGatewayInflowOrderByWithRelationInput[];
    cursor?: Prisma.PaymentGatewayInflowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentGatewayInflowScalarFieldEnum | Prisma.PaymentGatewayInflowScalarFieldEnum[];
};
export type PaymentGatewayProviderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.PaymentGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.PaymentGatewayProviderInclude<ExtArgs> | null;
};
