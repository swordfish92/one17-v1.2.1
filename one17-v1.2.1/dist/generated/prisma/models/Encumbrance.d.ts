import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncumbranceModel = runtime.Types.Result.DefaultSelection<Prisma.$EncumbrancePayload>;
export type AggregateEncumbrance = {
    _count: EncumbranceCountAggregateOutputType | null;
    _avg: EncumbranceAvgAggregateOutputType | null;
    _sum: EncumbranceSumAggregateOutputType | null;
    _min: EncumbranceMinAggregateOutputType | null;
    _max: EncumbranceMaxAggregateOutputType | null;
};
export type EncumbranceAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type EncumbranceSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type EncumbranceMinAggregateOutputType = {
    id: string | null;
    budgetLineId: string | null;
    description: string | null;
    amountKobo: bigint | null;
    status: $Enums.EncumbranceStatus | null;
    requestedByUserId: string | null;
    createdAt: Date | null;
};
export type EncumbranceMaxAggregateOutputType = {
    id: string | null;
    budgetLineId: string | null;
    description: string | null;
    amountKobo: bigint | null;
    status: $Enums.EncumbranceStatus | null;
    requestedByUserId: string | null;
    createdAt: Date | null;
};
export type EncumbranceCountAggregateOutputType = {
    id: number;
    budgetLineId: number;
    description: number;
    amountKobo: number;
    status: number;
    requestedByUserId: number;
    createdAt: number;
    _all: number;
};
export type EncumbranceAvgAggregateInputType = {
    amountKobo?: true;
};
export type EncumbranceSumAggregateInputType = {
    amountKobo?: true;
};
export type EncumbranceMinAggregateInputType = {
    id?: true;
    budgetLineId?: true;
    description?: true;
    amountKobo?: true;
    status?: true;
    requestedByUserId?: true;
    createdAt?: true;
};
export type EncumbranceMaxAggregateInputType = {
    id?: true;
    budgetLineId?: true;
    description?: true;
    amountKobo?: true;
    status?: true;
    requestedByUserId?: true;
    createdAt?: true;
};
export type EncumbranceCountAggregateInputType = {
    id?: true;
    budgetLineId?: true;
    description?: true;
    amountKobo?: true;
    status?: true;
    requestedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type EncumbranceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncumbranceWhereInput;
    orderBy?: Prisma.EncumbranceOrderByWithRelationInput | Prisma.EncumbranceOrderByWithRelationInput[];
    cursor?: Prisma.EncumbranceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncumbranceCountAggregateInputType;
    _avg?: EncumbranceAvgAggregateInputType;
    _sum?: EncumbranceSumAggregateInputType;
    _min?: EncumbranceMinAggregateInputType;
    _max?: EncumbranceMaxAggregateInputType;
};
export type GetEncumbranceAggregateType<T extends EncumbranceAggregateArgs> = {
    [P in keyof T & keyof AggregateEncumbrance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncumbrance[P]> : Prisma.GetScalarType<T[P], AggregateEncumbrance[P]>;
};
export type EncumbranceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncumbranceWhereInput;
    orderBy?: Prisma.EncumbranceOrderByWithAggregationInput | Prisma.EncumbranceOrderByWithAggregationInput[];
    by: Prisma.EncumbranceScalarFieldEnum[] | Prisma.EncumbranceScalarFieldEnum;
    having?: Prisma.EncumbranceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncumbranceCountAggregateInputType | true;
    _avg?: EncumbranceAvgAggregateInputType;
    _sum?: EncumbranceSumAggregateInputType;
    _min?: EncumbranceMinAggregateInputType;
    _max?: EncumbranceMaxAggregateInputType;
};
export type EncumbranceGroupByOutputType = {
    id: string;
    budgetLineId: string;
    description: string;
    amountKobo: bigint;
    status: $Enums.EncumbranceStatus;
    requestedByUserId: string;
    createdAt: Date;
    _count: EncumbranceCountAggregateOutputType | null;
    _avg: EncumbranceAvgAggregateOutputType | null;
    _sum: EncumbranceSumAggregateOutputType | null;
    _min: EncumbranceMinAggregateOutputType | null;
    _max: EncumbranceMaxAggregateOutputType | null;
};
export type GetEncumbranceGroupByPayload<T extends EncumbranceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncumbranceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncumbranceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncumbranceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncumbranceGroupByOutputType[P]>;
}>>;
export type EncumbranceWhereInput = {
    AND?: Prisma.EncumbranceWhereInput | Prisma.EncumbranceWhereInput[];
    OR?: Prisma.EncumbranceWhereInput[];
    NOT?: Prisma.EncumbranceWhereInput | Prisma.EncumbranceWhereInput[];
    id?: Prisma.UuidFilter<"Encumbrance"> | string;
    budgetLineId?: Prisma.UuidFilter<"Encumbrance"> | string;
    description?: Prisma.StringFilter<"Encumbrance"> | string;
    amountKobo?: Prisma.BigIntFilter<"Encumbrance"> | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFilter<"Encumbrance"> | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.UuidFilter<"Encumbrance"> | string;
    createdAt?: Prisma.DateTimeFilter<"Encumbrance"> | Date | string;
    budgetLine?: Prisma.XOR<Prisma.BudgetLineScalarRelationFilter, Prisma.BudgetLineWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderNullableScalarRelationFilter, Prisma.PurchaseOrderWhereInput> | null;
};
export type EncumbranceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    budgetLine?: Prisma.BudgetLineOrderByWithRelationInput;
    requestedBy?: Prisma.AppUserOrderByWithRelationInput;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
};
export type EncumbranceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EncumbranceWhereInput | Prisma.EncumbranceWhereInput[];
    OR?: Prisma.EncumbranceWhereInput[];
    NOT?: Prisma.EncumbranceWhereInput | Prisma.EncumbranceWhereInput[];
    budgetLineId?: Prisma.UuidFilter<"Encumbrance"> | string;
    description?: Prisma.StringFilter<"Encumbrance"> | string;
    amountKobo?: Prisma.BigIntFilter<"Encumbrance"> | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFilter<"Encumbrance"> | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.UuidFilter<"Encumbrance"> | string;
    createdAt?: Prisma.DateTimeFilter<"Encumbrance"> | Date | string;
    budgetLine?: Prisma.XOR<Prisma.BudgetLineScalarRelationFilter, Prisma.BudgetLineWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderNullableScalarRelationFilter, Prisma.PurchaseOrderWhereInput> | null;
}, "id">;
export type EncumbranceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EncumbranceCountOrderByAggregateInput;
    _avg?: Prisma.EncumbranceAvgOrderByAggregateInput;
    _max?: Prisma.EncumbranceMaxOrderByAggregateInput;
    _min?: Prisma.EncumbranceMinOrderByAggregateInput;
    _sum?: Prisma.EncumbranceSumOrderByAggregateInput;
};
export type EncumbranceScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncumbranceScalarWhereWithAggregatesInput | Prisma.EncumbranceScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncumbranceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncumbranceScalarWhereWithAggregatesInput | Prisma.EncumbranceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Encumbrance"> | string;
    budgetLineId?: Prisma.UuidWithAggregatesFilter<"Encumbrance"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Encumbrance"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"Encumbrance"> | bigint | number;
    status?: Prisma.EnumEncumbranceStatusWithAggregatesFilter<"Encumbrance"> | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"Encumbrance"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Encumbrance"> | Date | string;
};
export type EncumbranceCreateInput = {
    id?: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    createdAt?: Date | string;
    budgetLine: Prisma.BudgetLineCreateNestedOneWithoutEncumbrancesInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEncumbrancesRequestedInput;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutEncumbranceInput;
};
export type EncumbranceUncheckedCreateInput = {
    id?: string;
    budgetLineId: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    requestedByUserId: string;
    createdAt?: Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUncheckedCreateNestedOneWithoutEncumbranceInput;
};
export type EncumbranceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetLine?: Prisma.BudgetLineUpdateOneRequiredWithoutEncumbrancesNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEncumbrancesRequestedNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutEncumbranceNestedInput;
};
export type EncumbranceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUncheckedUpdateOneWithoutEncumbranceNestedInput;
};
export type EncumbranceCreateManyInput = {
    id?: string;
    budgetLineId: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EncumbranceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncumbranceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncumbranceListRelationFilter = {
    every?: Prisma.EncumbranceWhereInput;
    some?: Prisma.EncumbranceWhereInput;
    none?: Prisma.EncumbranceWhereInput;
};
export type EncumbranceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncumbranceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncumbranceAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type EncumbranceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncumbranceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetLineId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncumbranceSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type EncumbranceScalarRelationFilter = {
    is?: Prisma.EncumbranceWhereInput;
    isNot?: Prisma.EncumbranceWhereInput;
};
export type EncumbranceCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutRequestedByInput, Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput> | Prisma.EncumbranceCreateWithoutRequestedByInput[] | Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput | Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.EncumbranceCreateManyRequestedByInputEnvelope;
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
};
export type EncumbranceUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutRequestedByInput, Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput> | Prisma.EncumbranceCreateWithoutRequestedByInput[] | Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput | Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.EncumbranceCreateManyRequestedByInputEnvelope;
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
};
export type EncumbranceUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutRequestedByInput, Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput> | Prisma.EncumbranceCreateWithoutRequestedByInput[] | Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput | Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.EncumbranceUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.EncumbranceUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.EncumbranceCreateManyRequestedByInputEnvelope;
    set?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    disconnect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    delete?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    update?: Prisma.EncumbranceUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.EncumbranceUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.EncumbranceUpdateManyWithWhereWithoutRequestedByInput | Prisma.EncumbranceUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.EncumbranceScalarWhereInput | Prisma.EncumbranceScalarWhereInput[];
};
export type EncumbranceUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutRequestedByInput, Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput> | Prisma.EncumbranceCreateWithoutRequestedByInput[] | Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput | Prisma.EncumbranceCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.EncumbranceUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.EncumbranceUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.EncumbranceCreateManyRequestedByInputEnvelope;
    set?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    disconnect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    delete?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    update?: Prisma.EncumbranceUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.EncumbranceUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.EncumbranceUpdateManyWithWhereWithoutRequestedByInput | Prisma.EncumbranceUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.EncumbranceScalarWhereInput | Prisma.EncumbranceScalarWhereInput[];
};
export type EncumbranceCreateNestedManyWithoutBudgetLineInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput> | Prisma.EncumbranceCreateWithoutBudgetLineInput[] | Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput | Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput[];
    createMany?: Prisma.EncumbranceCreateManyBudgetLineInputEnvelope;
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
};
export type EncumbranceUncheckedCreateNestedManyWithoutBudgetLineInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput> | Prisma.EncumbranceCreateWithoutBudgetLineInput[] | Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput | Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput[];
    createMany?: Prisma.EncumbranceCreateManyBudgetLineInputEnvelope;
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
};
export type EncumbranceUpdateManyWithoutBudgetLineNestedInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput> | Prisma.EncumbranceCreateWithoutBudgetLineInput[] | Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput | Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput[];
    upsert?: Prisma.EncumbranceUpsertWithWhereUniqueWithoutBudgetLineInput | Prisma.EncumbranceUpsertWithWhereUniqueWithoutBudgetLineInput[];
    createMany?: Prisma.EncumbranceCreateManyBudgetLineInputEnvelope;
    set?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    disconnect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    delete?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    update?: Prisma.EncumbranceUpdateWithWhereUniqueWithoutBudgetLineInput | Prisma.EncumbranceUpdateWithWhereUniqueWithoutBudgetLineInput[];
    updateMany?: Prisma.EncumbranceUpdateManyWithWhereWithoutBudgetLineInput | Prisma.EncumbranceUpdateManyWithWhereWithoutBudgetLineInput[];
    deleteMany?: Prisma.EncumbranceScalarWhereInput | Prisma.EncumbranceScalarWhereInput[];
};
export type EncumbranceUncheckedUpdateManyWithoutBudgetLineNestedInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput> | Prisma.EncumbranceCreateWithoutBudgetLineInput[] | Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput[];
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput | Prisma.EncumbranceCreateOrConnectWithoutBudgetLineInput[];
    upsert?: Prisma.EncumbranceUpsertWithWhereUniqueWithoutBudgetLineInput | Prisma.EncumbranceUpsertWithWhereUniqueWithoutBudgetLineInput[];
    createMany?: Prisma.EncumbranceCreateManyBudgetLineInputEnvelope;
    set?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    disconnect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    delete?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    connect?: Prisma.EncumbranceWhereUniqueInput | Prisma.EncumbranceWhereUniqueInput[];
    update?: Prisma.EncumbranceUpdateWithWhereUniqueWithoutBudgetLineInput | Prisma.EncumbranceUpdateWithWhereUniqueWithoutBudgetLineInput[];
    updateMany?: Prisma.EncumbranceUpdateManyWithWhereWithoutBudgetLineInput | Prisma.EncumbranceUpdateManyWithWhereWithoutBudgetLineInput[];
    deleteMany?: Prisma.EncumbranceScalarWhereInput | Prisma.EncumbranceScalarWhereInput[];
};
export type EnumEncumbranceStatusFieldUpdateOperationsInput = {
    set?: $Enums.EncumbranceStatus;
};
export type EncumbranceCreateNestedOneWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutPurchaseOrderInput, Prisma.EncumbranceUncheckedCreateWithoutPurchaseOrderInput>;
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutPurchaseOrderInput;
    connect?: Prisma.EncumbranceWhereUniqueInput;
};
export type EncumbranceUpdateOneRequiredWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.EncumbranceCreateWithoutPurchaseOrderInput, Prisma.EncumbranceUncheckedCreateWithoutPurchaseOrderInput>;
    connectOrCreate?: Prisma.EncumbranceCreateOrConnectWithoutPurchaseOrderInput;
    upsert?: Prisma.EncumbranceUpsertWithoutPurchaseOrderInput;
    connect?: Prisma.EncumbranceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EncumbranceUpdateToOneWithWhereWithoutPurchaseOrderInput, Prisma.EncumbranceUpdateWithoutPurchaseOrderInput>, Prisma.EncumbranceUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type EncumbranceCreateWithoutRequestedByInput = {
    id?: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    createdAt?: Date | string;
    budgetLine: Prisma.BudgetLineCreateNestedOneWithoutEncumbrancesInput;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutEncumbranceInput;
};
export type EncumbranceUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    budgetLineId: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    createdAt?: Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUncheckedCreateNestedOneWithoutEncumbranceInput;
};
export type EncumbranceCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.EncumbranceWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncumbranceCreateWithoutRequestedByInput, Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput>;
};
export type EncumbranceCreateManyRequestedByInputEnvelope = {
    data: Prisma.EncumbranceCreateManyRequestedByInput | Prisma.EncumbranceCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type EncumbranceUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.EncumbranceWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncumbranceUpdateWithoutRequestedByInput, Prisma.EncumbranceUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.EncumbranceCreateWithoutRequestedByInput, Prisma.EncumbranceUncheckedCreateWithoutRequestedByInput>;
};
export type EncumbranceUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.EncumbranceWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncumbranceUpdateWithoutRequestedByInput, Prisma.EncumbranceUncheckedUpdateWithoutRequestedByInput>;
};
export type EncumbranceUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.EncumbranceScalarWhereInput;
    data: Prisma.XOR<Prisma.EncumbranceUpdateManyMutationInput, Prisma.EncumbranceUncheckedUpdateManyWithoutRequestedByInput>;
};
export type EncumbranceScalarWhereInput = {
    AND?: Prisma.EncumbranceScalarWhereInput | Prisma.EncumbranceScalarWhereInput[];
    OR?: Prisma.EncumbranceScalarWhereInput[];
    NOT?: Prisma.EncumbranceScalarWhereInput | Prisma.EncumbranceScalarWhereInput[];
    id?: Prisma.UuidFilter<"Encumbrance"> | string;
    budgetLineId?: Prisma.UuidFilter<"Encumbrance"> | string;
    description?: Prisma.StringFilter<"Encumbrance"> | string;
    amountKobo?: Prisma.BigIntFilter<"Encumbrance"> | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFilter<"Encumbrance"> | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.UuidFilter<"Encumbrance"> | string;
    createdAt?: Prisma.DateTimeFilter<"Encumbrance"> | Date | string;
};
export type EncumbranceCreateWithoutBudgetLineInput = {
    id?: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    createdAt?: Date | string;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEncumbrancesRequestedInput;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutEncumbranceInput;
};
export type EncumbranceUncheckedCreateWithoutBudgetLineInput = {
    id?: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    requestedByUserId: string;
    createdAt?: Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUncheckedCreateNestedOneWithoutEncumbranceInput;
};
export type EncumbranceCreateOrConnectWithoutBudgetLineInput = {
    where: Prisma.EncumbranceWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncumbranceCreateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput>;
};
export type EncumbranceCreateManyBudgetLineInputEnvelope = {
    data: Prisma.EncumbranceCreateManyBudgetLineInput | Prisma.EncumbranceCreateManyBudgetLineInput[];
    skipDuplicates?: boolean;
};
export type EncumbranceUpsertWithWhereUniqueWithoutBudgetLineInput = {
    where: Prisma.EncumbranceWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncumbranceUpdateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedUpdateWithoutBudgetLineInput>;
    create: Prisma.XOR<Prisma.EncumbranceCreateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedCreateWithoutBudgetLineInput>;
};
export type EncumbranceUpdateWithWhereUniqueWithoutBudgetLineInput = {
    where: Prisma.EncumbranceWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncumbranceUpdateWithoutBudgetLineInput, Prisma.EncumbranceUncheckedUpdateWithoutBudgetLineInput>;
};
export type EncumbranceUpdateManyWithWhereWithoutBudgetLineInput = {
    where: Prisma.EncumbranceScalarWhereInput;
    data: Prisma.XOR<Prisma.EncumbranceUpdateManyMutationInput, Prisma.EncumbranceUncheckedUpdateManyWithoutBudgetLineInput>;
};
export type EncumbranceCreateWithoutPurchaseOrderInput = {
    id?: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    createdAt?: Date | string;
    budgetLine: Prisma.BudgetLineCreateNestedOneWithoutEncumbrancesInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutEncumbrancesRequestedInput;
};
export type EncumbranceUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    budgetLineId: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EncumbranceCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.EncumbranceWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncumbranceCreateWithoutPurchaseOrderInput, Prisma.EncumbranceUncheckedCreateWithoutPurchaseOrderInput>;
};
export type EncumbranceUpsertWithoutPurchaseOrderInput = {
    update: Prisma.XOR<Prisma.EncumbranceUpdateWithoutPurchaseOrderInput, Prisma.EncumbranceUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.EncumbranceCreateWithoutPurchaseOrderInput, Prisma.EncumbranceUncheckedCreateWithoutPurchaseOrderInput>;
    where?: Prisma.EncumbranceWhereInput;
};
export type EncumbranceUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: Prisma.EncumbranceWhereInput;
    data: Prisma.XOR<Prisma.EncumbranceUpdateWithoutPurchaseOrderInput, Prisma.EncumbranceUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type EncumbranceUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetLine?: Prisma.BudgetLineUpdateOneRequiredWithoutEncumbrancesNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEncumbrancesRequestedNestedInput;
};
export type EncumbranceUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncumbranceCreateManyRequestedByInput = {
    id?: string;
    budgetLineId: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    createdAt?: Date | string;
};
export type EncumbranceUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetLine?: Prisma.BudgetLineUpdateOneRequiredWithoutEncumbrancesNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutEncumbranceNestedInput;
};
export type EncumbranceUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUncheckedUpdateOneWithoutEncumbranceNestedInput;
};
export type EncumbranceUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncumbranceCreateManyBudgetLineInput = {
    id?: string;
    description: string;
    amountKobo: bigint | number;
    status?: $Enums.EncumbranceStatus;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EncumbranceUpdateWithoutBudgetLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutEncumbrancesRequestedNestedInput;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutEncumbranceNestedInput;
};
export type EncumbranceUncheckedUpdateWithoutBudgetLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUncheckedUpdateOneWithoutEncumbranceNestedInput;
};
export type EncumbranceUncheckedUpdateManyWithoutBudgetLineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumEncumbranceStatusFieldUpdateOperationsInput | $Enums.EncumbranceStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncumbranceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetLineId?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.Encumbrance$purchaseOrderArgs<ExtArgs>;
}, ExtArgs["result"]["encumbrance"]>;
export type EncumbranceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetLineId?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encumbrance"]>;
export type EncumbranceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetLineId?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encumbrance"]>;
export type EncumbranceSelectScalar = {
    id?: boolean;
    budgetLineId?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
};
export type EncumbranceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "budgetLineId" | "description" | "amountKobo" | "status" | "requestedByUserId" | "createdAt", ExtArgs["result"]["encumbrance"]>;
export type EncumbranceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    purchaseOrder?: boolean | Prisma.Encumbrance$purchaseOrderArgs<ExtArgs>;
};
export type EncumbranceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type EncumbranceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetLine?: boolean | Prisma.BudgetLineDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $EncumbrancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Encumbrance";
    objects: {
        budgetLine: Prisma.$BudgetLinePayload<ExtArgs>;
        requestedBy: Prisma.$AppUserPayload<ExtArgs>;
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        budgetLineId: string;
        description: string;
        amountKobo: bigint;
        status: $Enums.EncumbranceStatus;
        requestedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["encumbrance"]>;
    composites: {};
};
export type EncumbranceGetPayload<S extends boolean | null | undefined | EncumbranceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload, S>;
export type EncumbranceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncumbranceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncumbranceCountAggregateInputType | true;
};
export interface EncumbranceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Encumbrance'];
        meta: {
            name: 'Encumbrance';
        };
    };
    findUnique<T extends EncumbranceFindUniqueArgs>(args: Prisma.SelectSubset<T, EncumbranceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncumbranceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncumbranceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncumbranceFindFirstArgs>(args?: Prisma.SelectSubset<T, EncumbranceFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncumbranceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncumbranceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncumbranceFindManyArgs>(args?: Prisma.SelectSubset<T, EncumbranceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncumbranceCreateArgs>(args: Prisma.SelectSubset<T, EncumbranceCreateArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncumbranceCreateManyArgs>(args?: Prisma.SelectSubset<T, EncumbranceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncumbranceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncumbranceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncumbranceDeleteArgs>(args: Prisma.SelectSubset<T, EncumbranceDeleteArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncumbranceUpdateArgs>(args: Prisma.SelectSubset<T, EncumbranceUpdateArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncumbranceDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncumbranceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncumbranceUpdateManyArgs>(args: Prisma.SelectSubset<T, EncumbranceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncumbranceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncumbranceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncumbranceUpsertArgs>(args: Prisma.SelectSubset<T, EncumbranceUpsertArgs<ExtArgs>>): Prisma.Prisma__EncumbranceClient<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncumbranceCountArgs>(args?: Prisma.Subset<T, EncumbranceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncumbranceCountAggregateOutputType> : number>;
    aggregate<T extends EncumbranceAggregateArgs>(args: Prisma.Subset<T, EncumbranceAggregateArgs>): Prisma.PrismaPromise<GetEncumbranceAggregateType<T>>;
    groupBy<T extends EncumbranceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncumbranceGroupByArgs['orderBy'];
    } : {
        orderBy?: EncumbranceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncumbranceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncumbranceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncumbranceFieldRefs;
}
export interface Prisma__EncumbranceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    budgetLine<T extends Prisma.BudgetLineDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetLineDefaultArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchaseOrder<T extends Prisma.Encumbrance$purchaseOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Encumbrance$purchaseOrderArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncumbranceFieldRefs {
    readonly id: Prisma.FieldRef<"Encumbrance", 'String'>;
    readonly budgetLineId: Prisma.FieldRef<"Encumbrance", 'String'>;
    readonly description: Prisma.FieldRef<"Encumbrance", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"Encumbrance", 'BigInt'>;
    readonly status: Prisma.FieldRef<"Encumbrance", 'EncumbranceStatus'>;
    readonly requestedByUserId: Prisma.FieldRef<"Encumbrance", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Encumbrance", 'DateTime'>;
}
export type EncumbranceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where: Prisma.EncumbranceWhereUniqueInput;
};
export type EncumbranceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where: Prisma.EncumbranceWhereUniqueInput;
};
export type EncumbranceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where?: Prisma.EncumbranceWhereInput;
    orderBy?: Prisma.EncumbranceOrderByWithRelationInput | Prisma.EncumbranceOrderByWithRelationInput[];
    cursor?: Prisma.EncumbranceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncumbranceScalarFieldEnum | Prisma.EncumbranceScalarFieldEnum[];
};
export type EncumbranceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where?: Prisma.EncumbranceWhereInput;
    orderBy?: Prisma.EncumbranceOrderByWithRelationInput | Prisma.EncumbranceOrderByWithRelationInput[];
    cursor?: Prisma.EncumbranceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncumbranceScalarFieldEnum | Prisma.EncumbranceScalarFieldEnum[];
};
export type EncumbranceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where?: Prisma.EncumbranceWhereInput;
    orderBy?: Prisma.EncumbranceOrderByWithRelationInput | Prisma.EncumbranceOrderByWithRelationInput[];
    cursor?: Prisma.EncumbranceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncumbranceScalarFieldEnum | Prisma.EncumbranceScalarFieldEnum[];
};
export type EncumbranceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncumbranceCreateInput, Prisma.EncumbranceUncheckedCreateInput>;
};
export type EncumbranceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncumbranceCreateManyInput | Prisma.EncumbranceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncumbranceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    data: Prisma.EncumbranceCreateManyInput | Prisma.EncumbranceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncumbranceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncumbranceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncumbranceUpdateInput, Prisma.EncumbranceUncheckedUpdateInput>;
    where: Prisma.EncumbranceWhereUniqueInput;
};
export type EncumbranceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncumbranceUpdateManyMutationInput, Prisma.EncumbranceUncheckedUpdateManyInput>;
    where?: Prisma.EncumbranceWhereInput;
    limit?: number;
};
export type EncumbranceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncumbranceUpdateManyMutationInput, Prisma.EncumbranceUncheckedUpdateManyInput>;
    where?: Prisma.EncumbranceWhereInput;
    limit?: number;
    include?: Prisma.EncumbranceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncumbranceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where: Prisma.EncumbranceWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncumbranceCreateInput, Prisma.EncumbranceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncumbranceUpdateInput, Prisma.EncumbranceUncheckedUpdateInput>;
};
export type EncumbranceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where: Prisma.EncumbranceWhereUniqueInput;
};
export type EncumbranceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncumbranceWhereInput;
    limit?: number;
};
export type Encumbrance$purchaseOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type EncumbranceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
};
