import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductMinAggregateOutputType = {
    code: string | null;
    name: string | null;
    engineType: $Enums.ProductEngineType | null;
    status: $Enums.ProductStatus | null;
    createdAt: Date | null;
    shariahApprovedAt: Date | null;
    shariahApprovalRef: string | null;
    setupWorkflowInstanceId: string | null;
};
export type ProductMaxAggregateOutputType = {
    code: string | null;
    name: string | null;
    engineType: $Enums.ProductEngineType | null;
    status: $Enums.ProductStatus | null;
    createdAt: Date | null;
    shariahApprovedAt: Date | null;
    shariahApprovalRef: string | null;
    setupWorkflowInstanceId: string | null;
};
export type ProductCountAggregateOutputType = {
    code: number;
    name: number;
    engineType: number;
    status: number;
    createdAt: number;
    shariahApprovedAt: number;
    shariahApprovalRef: number;
    setupWorkflowInstanceId: number;
    _all: number;
};
export type ProductMinAggregateInputType = {
    code?: true;
    name?: true;
    engineType?: true;
    status?: true;
    createdAt?: true;
    shariahApprovedAt?: true;
    shariahApprovalRef?: true;
    setupWorkflowInstanceId?: true;
};
export type ProductMaxAggregateInputType = {
    code?: true;
    name?: true;
    engineType?: true;
    status?: true;
    createdAt?: true;
    shariahApprovedAt?: true;
    shariahApprovalRef?: true;
    setupWorkflowInstanceId?: true;
};
export type ProductCountAggregateInputType = {
    code?: true;
    name?: true;
    engineType?: true;
    status?: true;
    createdAt?: true;
    shariahApprovedAt?: true;
    shariahApprovalRef?: true;
    setupWorkflowInstanceId?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status: $Enums.ProductStatus;
    createdAt: Date;
    shariahApprovedAt: Date | null;
    shariahApprovalRef: string | null;
    setupWorkflowInstanceId: string | null;
    _count: ProductCountAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    code?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    engineType?: Prisma.EnumProductEngineTypeFilter<"Product"> | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFilter<"Product"> | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    shariahApprovedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    shariahApprovalRef?: Prisma.StringNullableFilter<"Product"> | string | null;
    setupWorkflowInstanceId?: Prisma.UuidNullableFilter<"Product"> | string | null;
    parameterVersions?: Prisma.ProductParametersListRelationFilter;
    ledgerEntities?: Prisma.LedgerEntityListRelationFilter;
    productAccounts?: Prisma.ProductAccountListRelationFilter;
    subscriptionRequests?: Prisma.SubscriptionRequestListRelationFilter;
    setupWorkflow?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    custodianAccounts?: Prisma.ProductCustodianAccountListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    engineType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shariahApprovedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    shariahApprovalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    setupWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    parameterVersions?: Prisma.ProductParametersOrderByRelationAggregateInput;
    ledgerEntities?: Prisma.LedgerEntityOrderByRelationAggregateInput;
    productAccounts?: Prisma.ProductAccountOrderByRelationAggregateInput;
    subscriptionRequests?: Prisma.SubscriptionRequestOrderByRelationAggregateInput;
    setupWorkflow?: Prisma.WorkflowInstanceOrderByWithRelationInput;
    custodianAccounts?: Prisma.ProductCustodianAccountOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    setupWorkflowInstanceId?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    name?: Prisma.StringFilter<"Product"> | string;
    engineType?: Prisma.EnumProductEngineTypeFilter<"Product"> | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFilter<"Product"> | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    shariahApprovedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    shariahApprovalRef?: Prisma.StringNullableFilter<"Product"> | string | null;
    parameterVersions?: Prisma.ProductParametersListRelationFilter;
    ledgerEntities?: Prisma.LedgerEntityListRelationFilter;
    productAccounts?: Prisma.ProductAccountListRelationFilter;
    subscriptionRequests?: Prisma.SubscriptionRequestListRelationFilter;
    setupWorkflow?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    custodianAccounts?: Prisma.ProductCustodianAccountListRelationFilter;
}, "code" | "setupWorkflowInstanceId">;
export type ProductOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    engineType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shariahApprovedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    shariahApprovalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    setupWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    engineType?: Prisma.EnumProductEngineTypeWithAggregatesFilter<"Product"> | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    shariahApprovedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null;
    shariahApprovalRef?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    setupWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"Product"> | string | null;
};
export type ProductCreateInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    parameterVersions?: Prisma.ProductParametersCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestCreateNestedManyWithoutProductInput;
    setupWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutProductSetupInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    setupWorkflowInstanceId?: string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountUncheckedCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedCreateNestedManyWithoutProductInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUpdateManyWithoutProductNestedInput;
    setupWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutProductSetupNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setupWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUncheckedUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedUpdateManyWithoutProductNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    setupWorkflowInstanceId?: string | null;
};
export type ProductUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setupWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductNullableScalarRelationFilter = {
    is?: Prisma.ProductWhereInput | null;
    isNot?: Prisma.ProductWhereInput | null;
};
export type ProductCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    engineType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shariahApprovedAt?: Prisma.SortOrder;
    shariahApprovalRef?: Prisma.SortOrder;
    setupWorkflowInstanceId?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    engineType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shariahApprovedAt?: Prisma.SortOrder;
    shariahApprovalRef?: Prisma.SortOrder;
    setupWorkflowInstanceId?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    engineType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shariahApprovedAt?: Prisma.SortOrder;
    shariahApprovalRef?: Prisma.SortOrder;
    setupWorkflowInstanceId?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCreateNestedOneWithoutSetupWorkflowInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSetupWorkflowInput, Prisma.ProductUncheckedCreateWithoutSetupWorkflowInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSetupWorkflowInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUncheckedCreateNestedOneWithoutSetupWorkflowInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSetupWorkflowInput, Prisma.ProductUncheckedCreateWithoutSetupWorkflowInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSetupWorkflowInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutSetupWorkflowNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSetupWorkflowInput, Prisma.ProductUncheckedCreateWithoutSetupWorkflowInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSetupWorkflowInput;
    upsert?: Prisma.ProductUpsertWithoutSetupWorkflowInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutSetupWorkflowInput, Prisma.ProductUpdateWithoutSetupWorkflowInput>, Prisma.ProductUncheckedUpdateWithoutSetupWorkflowInput>;
};
export type ProductUncheckedUpdateOneWithoutSetupWorkflowNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSetupWorkflowInput, Prisma.ProductUncheckedCreateWithoutSetupWorkflowInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSetupWorkflowInput;
    upsert?: Prisma.ProductUpsertWithoutSetupWorkflowInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutSetupWorkflowInput, Prisma.ProductUpdateWithoutSetupWorkflowInput>, Prisma.ProductUncheckedUpdateWithoutSetupWorkflowInput>;
};
export type EnumProductEngineTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductEngineType;
};
export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus;
};
export type ProductCreateNestedOneWithoutParameterVersionsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutParameterVersionsInput, Prisma.ProductUncheckedCreateWithoutParameterVersionsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutParameterVersionsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutParameterVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutParameterVersionsInput, Prisma.ProductUncheckedCreateWithoutParameterVersionsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutParameterVersionsInput;
    upsert?: Prisma.ProductUpsertWithoutParameterVersionsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutParameterVersionsInput, Prisma.ProductUpdateWithoutParameterVersionsInput>, Prisma.ProductUncheckedUpdateWithoutParameterVersionsInput>;
};
export type ProductCreateNestedOneWithoutProductAccountsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductAccountsInput, Prisma.ProductUncheckedCreateWithoutProductAccountsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductAccountsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutProductAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductAccountsInput, Prisma.ProductUncheckedCreateWithoutProductAccountsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductAccountsInput;
    upsert?: Prisma.ProductUpsertWithoutProductAccountsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutProductAccountsInput, Prisma.ProductUpdateWithoutProductAccountsInput>, Prisma.ProductUncheckedUpdateWithoutProductAccountsInput>;
};
export type ProductCreateNestedOneWithoutSubscriptionRequestsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSubscriptionRequestsInput, Prisma.ProductUncheckedCreateWithoutSubscriptionRequestsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSubscriptionRequestsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutSubscriptionRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSubscriptionRequestsInput, Prisma.ProductUncheckedCreateWithoutSubscriptionRequestsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSubscriptionRequestsInput;
    upsert?: Prisma.ProductUpsertWithoutSubscriptionRequestsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutSubscriptionRequestsInput, Prisma.ProductUpdateWithoutSubscriptionRequestsInput>, Prisma.ProductUncheckedUpdateWithoutSubscriptionRequestsInput>;
};
export type ProductCreateNestedOneWithoutLedgerEntitiesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutLedgerEntitiesInput, Prisma.ProductUncheckedCreateWithoutLedgerEntitiesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutLedgerEntitiesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutLedgerEntitiesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutLedgerEntitiesInput, Prisma.ProductUncheckedCreateWithoutLedgerEntitiesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutLedgerEntitiesInput;
    upsert?: Prisma.ProductUpsertWithoutLedgerEntitiesInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutLedgerEntitiesInput, Prisma.ProductUpdateWithoutLedgerEntitiesInput>, Prisma.ProductUncheckedUpdateWithoutLedgerEntitiesInput>;
};
export type ProductCreateNestedOneWithoutCustodianAccountsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCustodianAccountsInput, Prisma.ProductUncheckedCreateWithoutCustodianAccountsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCustodianAccountsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutCustodianAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCustodianAccountsInput, Prisma.ProductUncheckedCreateWithoutCustodianAccountsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCustodianAccountsInput;
    upsert?: Prisma.ProductUpsertWithoutCustodianAccountsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutCustodianAccountsInput, Prisma.ProductUpdateWithoutCustodianAccountsInput>, Prisma.ProductUncheckedUpdateWithoutCustodianAccountsInput>;
};
export type ProductCreateWithoutSetupWorkflowInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    parameterVersions?: Prisma.ProductParametersCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestCreateNestedManyWithoutProductInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutSetupWorkflowInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountUncheckedCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedCreateNestedManyWithoutProductInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutSetupWorkflowInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSetupWorkflowInput, Prisma.ProductUncheckedCreateWithoutSetupWorkflowInput>;
};
export type ProductUpsertWithoutSetupWorkflowInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutSetupWorkflowInput, Prisma.ProductUncheckedUpdateWithoutSetupWorkflowInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSetupWorkflowInput, Prisma.ProductUncheckedCreateWithoutSetupWorkflowInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutSetupWorkflowInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutSetupWorkflowInput, Prisma.ProductUncheckedUpdateWithoutSetupWorkflowInput>;
};
export type ProductUpdateWithoutSetupWorkflowInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUpdateManyWithoutProductNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutSetupWorkflowInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUncheckedUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedUpdateManyWithoutProductNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutParameterVersionsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    ledgerEntities?: Prisma.LedgerEntityCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestCreateNestedManyWithoutProductInput;
    setupWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutProductSetupInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutParameterVersionsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    setupWorkflowInstanceId?: string | null;
    ledgerEntities?: Prisma.LedgerEntityUncheckedCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountUncheckedCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedCreateNestedManyWithoutProductInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutParameterVersionsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutParameterVersionsInput, Prisma.ProductUncheckedCreateWithoutParameterVersionsInput>;
};
export type ProductUpsertWithoutParameterVersionsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutParameterVersionsInput, Prisma.ProductUncheckedUpdateWithoutParameterVersionsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutParameterVersionsInput, Prisma.ProductUncheckedCreateWithoutParameterVersionsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutParameterVersionsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutParameterVersionsInput, Prisma.ProductUncheckedUpdateWithoutParameterVersionsInput>;
};
export type ProductUpdateWithoutParameterVersionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntities?: Prisma.LedgerEntityUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUpdateManyWithoutProductNestedInput;
    setupWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutProductSetupNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutParameterVersionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setupWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntities?: Prisma.LedgerEntityUncheckedUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUncheckedUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedUpdateManyWithoutProductNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutProductAccountsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    parameterVersions?: Prisma.ProductParametersCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestCreateNestedManyWithoutProductInput;
    setupWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutProductSetupInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutProductAccountsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    setupWorkflowInstanceId?: string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedCreateNestedManyWithoutProductInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutProductAccountsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductAccountsInput, Prisma.ProductUncheckedCreateWithoutProductAccountsInput>;
};
export type ProductUpsertWithoutProductAccountsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutProductAccountsInput, Prisma.ProductUncheckedUpdateWithoutProductAccountsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductAccountsInput, Prisma.ProductUncheckedCreateWithoutProductAccountsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutProductAccountsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutProductAccountsInput, Prisma.ProductUncheckedUpdateWithoutProductAccountsInput>;
};
export type ProductUpdateWithoutProductAccountsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUpdateManyWithoutProductNestedInput;
    setupWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutProductSetupNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutProductAccountsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setupWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedUpdateManyWithoutProductNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutSubscriptionRequestsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    parameterVersions?: Prisma.ProductParametersCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountCreateNestedManyWithoutProductInput;
    setupWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutProductSetupInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutSubscriptionRequestsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    setupWorkflowInstanceId?: string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountUncheckedCreateNestedManyWithoutProductInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutSubscriptionRequestsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSubscriptionRequestsInput, Prisma.ProductUncheckedCreateWithoutSubscriptionRequestsInput>;
};
export type ProductUpsertWithoutSubscriptionRequestsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutSubscriptionRequestsInput, Prisma.ProductUncheckedUpdateWithoutSubscriptionRequestsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSubscriptionRequestsInput, Prisma.ProductUncheckedCreateWithoutSubscriptionRequestsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutSubscriptionRequestsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutSubscriptionRequestsInput, Prisma.ProductUncheckedUpdateWithoutSubscriptionRequestsInput>;
};
export type ProductUpdateWithoutSubscriptionRequestsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUpdateManyWithoutProductNestedInput;
    setupWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutProductSetupNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutSubscriptionRequestsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setupWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUncheckedUpdateManyWithoutProductNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutLedgerEntitiesInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    parameterVersions?: Prisma.ProductParametersCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestCreateNestedManyWithoutProductInput;
    setupWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutProductSetupInput;
    custodianAccounts?: Prisma.ProductCustodianAccountCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutLedgerEntitiesInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    setupWorkflowInstanceId?: string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountUncheckedCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedCreateNestedManyWithoutProductInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutLedgerEntitiesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutLedgerEntitiesInput, Prisma.ProductUncheckedCreateWithoutLedgerEntitiesInput>;
};
export type ProductUpsertWithoutLedgerEntitiesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutLedgerEntitiesInput, Prisma.ProductUncheckedUpdateWithoutLedgerEntitiesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutLedgerEntitiesInput, Prisma.ProductUncheckedCreateWithoutLedgerEntitiesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutLedgerEntitiesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutLedgerEntitiesInput, Prisma.ProductUncheckedUpdateWithoutLedgerEntitiesInput>;
};
export type ProductUpdateWithoutLedgerEntitiesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUpdateManyWithoutProductNestedInput;
    setupWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutProductSetupNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutLedgerEntitiesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setupWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUncheckedUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedUpdateManyWithoutProductNestedInput;
    custodianAccounts?: Prisma.ProductCustodianAccountUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutCustodianAccountsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    parameterVersions?: Prisma.ProductParametersCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestCreateNestedManyWithoutProductInput;
    setupWorkflow?: Prisma.WorkflowInstanceCreateNestedOneWithoutProductSetupInput;
};
export type ProductUncheckedCreateWithoutCustodianAccountsInput = {
    code: string;
    name: string;
    engineType: $Enums.ProductEngineType;
    status?: $Enums.ProductStatus;
    createdAt?: Date | string;
    shariahApprovedAt?: Date | string | null;
    shariahApprovalRef?: string | null;
    setupWorkflowInstanceId?: string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedCreateNestedManyWithoutProductInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedCreateNestedManyWithoutProductInput;
    productAccounts?: Prisma.ProductAccountUncheckedCreateNestedManyWithoutProductInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCustodianAccountsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCustodianAccountsInput, Prisma.ProductUncheckedCreateWithoutCustodianAccountsInput>;
};
export type ProductUpsertWithoutCustodianAccountsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCustodianAccountsInput, Prisma.ProductUncheckedUpdateWithoutCustodianAccountsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCustodianAccountsInput, Prisma.ProductUncheckedCreateWithoutCustodianAccountsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutCustodianAccountsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCustodianAccountsInput, Prisma.ProductUncheckedUpdateWithoutCustodianAccountsInput>;
};
export type ProductUpdateWithoutCustodianAccountsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUpdateManyWithoutProductNestedInput;
    setupWorkflow?: Prisma.WorkflowInstanceUpdateOneWithoutProductSetupNestedInput;
};
export type ProductUncheckedUpdateWithoutCustodianAccountsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    engineType?: Prisma.EnumProductEngineTypeFieldUpdateOperationsInput | $Enums.ProductEngineType;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shariahApprovedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shariahApprovalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setupWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parameterVersions?: Prisma.ProductParametersUncheckedUpdateManyWithoutProductNestedInput;
    ledgerEntities?: Prisma.LedgerEntityUncheckedUpdateManyWithoutProductNestedInput;
    productAccounts?: Prisma.ProductAccountUncheckedUpdateManyWithoutProductNestedInput;
    subscriptionRequests?: Prisma.SubscriptionRequestUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCountOutputType = {
    parameterVersions: number;
    ledgerEntities: number;
    productAccounts: number;
    subscriptionRequests: number;
    custodianAccounts: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parameterVersions?: boolean | ProductCountOutputTypeCountParameterVersionsArgs;
    ledgerEntities?: boolean | ProductCountOutputTypeCountLedgerEntitiesArgs;
    productAccounts?: boolean | ProductCountOutputTypeCountProductAccountsArgs;
    subscriptionRequests?: boolean | ProductCountOutputTypeCountSubscriptionRequestsArgs;
    custodianAccounts?: boolean | ProductCountOutputTypeCountCustodianAccountsArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountParameterVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductParametersWhereInput;
};
export type ProductCountOutputTypeCountLedgerEntitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntityWhereInput;
};
export type ProductCountOutputTypeCountProductAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductAccountWhereInput;
};
export type ProductCountOutputTypeCountSubscriptionRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionRequestWhereInput;
};
export type ProductCountOutputTypeCountCustodianAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCustodianAccountWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    engineType?: boolean;
    status?: boolean;
    createdAt?: boolean;
    shariahApprovedAt?: boolean;
    shariahApprovalRef?: boolean;
    setupWorkflowInstanceId?: boolean;
    parameterVersions?: boolean | Prisma.Product$parameterVersionsArgs<ExtArgs>;
    ledgerEntities?: boolean | Prisma.Product$ledgerEntitiesArgs<ExtArgs>;
    productAccounts?: boolean | Prisma.Product$productAccountsArgs<ExtArgs>;
    subscriptionRequests?: boolean | Prisma.Product$subscriptionRequestsArgs<ExtArgs>;
    setupWorkflow?: boolean | Prisma.Product$setupWorkflowArgs<ExtArgs>;
    custodianAccounts?: boolean | Prisma.Product$custodianAccountsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    engineType?: boolean;
    status?: boolean;
    createdAt?: boolean;
    shariahApprovedAt?: boolean;
    shariahApprovalRef?: boolean;
    setupWorkflowInstanceId?: boolean;
    setupWorkflow?: boolean | Prisma.Product$setupWorkflowArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    engineType?: boolean;
    status?: boolean;
    createdAt?: boolean;
    shariahApprovedAt?: boolean;
    shariahApprovalRef?: boolean;
    setupWorkflowInstanceId?: boolean;
    setupWorkflow?: boolean | Prisma.Product$setupWorkflowArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    code?: boolean;
    name?: boolean;
    engineType?: boolean;
    status?: boolean;
    createdAt?: boolean;
    shariahApprovedAt?: boolean;
    shariahApprovalRef?: boolean;
    setupWorkflowInstanceId?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "name" | "engineType" | "status" | "createdAt" | "shariahApprovedAt" | "shariahApprovalRef" | "setupWorkflowInstanceId", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parameterVersions?: boolean | Prisma.Product$parameterVersionsArgs<ExtArgs>;
    ledgerEntities?: boolean | Prisma.Product$ledgerEntitiesArgs<ExtArgs>;
    productAccounts?: boolean | Prisma.Product$productAccountsArgs<ExtArgs>;
    subscriptionRequests?: boolean | Prisma.Product$subscriptionRequestsArgs<ExtArgs>;
    setupWorkflow?: boolean | Prisma.Product$setupWorkflowArgs<ExtArgs>;
    custodianAccounts?: boolean | Prisma.Product$custodianAccountsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    setupWorkflow?: boolean | Prisma.Product$setupWorkflowArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    setupWorkflow?: boolean | Prisma.Product$setupWorkflowArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        parameterVersions: Prisma.$ProductParametersPayload<ExtArgs>[];
        ledgerEntities: Prisma.$LedgerEntityPayload<ExtArgs>[];
        productAccounts: Prisma.$ProductAccountPayload<ExtArgs>[];
        subscriptionRequests: Prisma.$SubscriptionRequestPayload<ExtArgs>[];
        setupWorkflow: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
        custodianAccounts: Prisma.$ProductCustodianAccountPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        name: string;
        engineType: $Enums.ProductEngineType;
        status: $Enums.ProductStatus;
        createdAt: Date;
        shariahApprovedAt: Date | null;
        shariahApprovalRef: string | null;
        setupWorkflowInstanceId: string | null;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parameterVersions<T extends Prisma.Product$parameterVersionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$parameterVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductParametersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ledgerEntities<T extends Prisma.Product$ledgerEntitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$ledgerEntitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productAccounts<T extends Prisma.Product$productAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$productAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subscriptionRequests<T extends Prisma.Product$subscriptionRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$subscriptionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    setupWorkflow<T extends Prisma.Product$setupWorkflowArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$setupWorkflowArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    custodianAccounts<T extends Prisma.Product$custodianAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$custodianAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCustodianAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly code: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly engineType: Prisma.FieldRef<"Product", 'ProductEngineType'>;
    readonly status: Prisma.FieldRef<"Product", 'ProductStatus'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly shariahApprovedAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly shariahApprovalRef: Prisma.FieldRef<"Product", 'String'>;
    readonly setupWorkflowInstanceId: Prisma.FieldRef<"Product", 'String'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$parameterVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductParametersSelect<ExtArgs> | null;
    omit?: Prisma.ProductParametersOmit<ExtArgs> | null;
    include?: Prisma.ProductParametersInclude<ExtArgs> | null;
    where?: Prisma.ProductParametersWhereInput;
    orderBy?: Prisma.ProductParametersOrderByWithRelationInput | Prisma.ProductParametersOrderByWithRelationInput[];
    cursor?: Prisma.ProductParametersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductParametersScalarFieldEnum | Prisma.ProductParametersScalarFieldEnum[];
};
export type Product$ledgerEntitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntitySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntityOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntityInclude<ExtArgs> | null;
    where?: Prisma.LedgerEntityWhereInput;
    orderBy?: Prisma.LedgerEntityOrderByWithRelationInput | Prisma.LedgerEntityOrderByWithRelationInput[];
    cursor?: Prisma.LedgerEntityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerEntityScalarFieldEnum | Prisma.LedgerEntityScalarFieldEnum[];
};
export type Product$productAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductAccountSelect<ExtArgs> | null;
    omit?: Prisma.ProductAccountOmit<ExtArgs> | null;
    include?: Prisma.ProductAccountInclude<ExtArgs> | null;
    where?: Prisma.ProductAccountWhereInput;
    orderBy?: Prisma.ProductAccountOrderByWithRelationInput | Prisma.ProductAccountOrderByWithRelationInput[];
    cursor?: Prisma.ProductAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductAccountScalarFieldEnum | Prisma.ProductAccountScalarFieldEnum[];
};
export type Product$subscriptionRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionRequestSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionRequestOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionRequestInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionRequestWhereInput;
    orderBy?: Prisma.SubscriptionRequestOrderByWithRelationInput | Prisma.SubscriptionRequestOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionRequestScalarFieldEnum | Prisma.SubscriptionRequestScalarFieldEnum[];
};
export type Product$setupWorkflowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type Product$custodianAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
