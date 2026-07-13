import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetRegisterEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetRegisterEntryPayload>;
export type AggregateAssetRegisterEntry = {
    _count: AssetRegisterEntryCountAggregateOutputType | null;
    _avg: AssetRegisterEntryAvgAggregateOutputType | null;
    _sum: AssetRegisterEntrySumAggregateOutputType | null;
    _min: AssetRegisterEntryMinAggregateOutputType | null;
    _max: AssetRegisterEntryMaxAggregateOutputType | null;
};
export type AssetRegisterEntryAvgAggregateOutputType = {
    costKobo: number | null;
    usefulLifeMonths: number | null;
    accumulatedDepreciationKobo: number | null;
};
export type AssetRegisterEntrySumAggregateOutputType = {
    costKobo: bigint | null;
    usefulLifeMonths: number | null;
    accumulatedDepreciationKobo: bigint | null;
};
export type AssetRegisterEntryMinAggregateOutputType = {
    id: string | null;
    assetCode: string | null;
    description: string | null;
    purchaseOrderId: string | null;
    ledgerEntityCode: string | null;
    costKobo: bigint | null;
    acquisitionDate: Date | null;
    usefulLifeMonths: number | null;
    accumulatedDepreciationKobo: bigint | null;
    status: $Enums.AssetStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    disposedAt: Date | null;
};
export type AssetRegisterEntryMaxAggregateOutputType = {
    id: string | null;
    assetCode: string | null;
    description: string | null;
    purchaseOrderId: string | null;
    ledgerEntityCode: string | null;
    costKobo: bigint | null;
    acquisitionDate: Date | null;
    usefulLifeMonths: number | null;
    accumulatedDepreciationKobo: bigint | null;
    status: $Enums.AssetStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
    disposedAt: Date | null;
};
export type AssetRegisterEntryCountAggregateOutputType = {
    id: number;
    assetCode: number;
    description: number;
    purchaseOrderId: number;
    ledgerEntityCode: number;
    costKobo: number;
    acquisitionDate: number;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo: number;
    status: number;
    createdByUserId: number;
    createdAt: number;
    disposedAt: number;
    _all: number;
};
export type AssetRegisterEntryAvgAggregateInputType = {
    costKobo?: true;
    usefulLifeMonths?: true;
    accumulatedDepreciationKobo?: true;
};
export type AssetRegisterEntrySumAggregateInputType = {
    costKobo?: true;
    usefulLifeMonths?: true;
    accumulatedDepreciationKobo?: true;
};
export type AssetRegisterEntryMinAggregateInputType = {
    id?: true;
    assetCode?: true;
    description?: true;
    purchaseOrderId?: true;
    ledgerEntityCode?: true;
    costKobo?: true;
    acquisitionDate?: true;
    usefulLifeMonths?: true;
    accumulatedDepreciationKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    disposedAt?: true;
};
export type AssetRegisterEntryMaxAggregateInputType = {
    id?: true;
    assetCode?: true;
    description?: true;
    purchaseOrderId?: true;
    ledgerEntityCode?: true;
    costKobo?: true;
    acquisitionDate?: true;
    usefulLifeMonths?: true;
    accumulatedDepreciationKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    disposedAt?: true;
};
export type AssetRegisterEntryCountAggregateInputType = {
    id?: true;
    assetCode?: true;
    description?: true;
    purchaseOrderId?: true;
    ledgerEntityCode?: true;
    costKobo?: true;
    acquisitionDate?: true;
    usefulLifeMonths?: true;
    accumulatedDepreciationKobo?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    disposedAt?: true;
    _all?: true;
};
export type AssetRegisterEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRegisterEntryWhereInput;
    orderBy?: Prisma.AssetRegisterEntryOrderByWithRelationInput | Prisma.AssetRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.AssetRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetRegisterEntryCountAggregateInputType;
    _avg?: AssetRegisterEntryAvgAggregateInputType;
    _sum?: AssetRegisterEntrySumAggregateInputType;
    _min?: AssetRegisterEntryMinAggregateInputType;
    _max?: AssetRegisterEntryMaxAggregateInputType;
};
export type GetAssetRegisterEntryAggregateType<T extends AssetRegisterEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetRegisterEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetRegisterEntry[P]> : Prisma.GetScalarType<T[P], AggregateAssetRegisterEntry[P]>;
};
export type AssetRegisterEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRegisterEntryWhereInput;
    orderBy?: Prisma.AssetRegisterEntryOrderByWithAggregationInput | Prisma.AssetRegisterEntryOrderByWithAggregationInput[];
    by: Prisma.AssetRegisterEntryScalarFieldEnum[] | Prisma.AssetRegisterEntryScalarFieldEnum;
    having?: Prisma.AssetRegisterEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetRegisterEntryCountAggregateInputType | true;
    _avg?: AssetRegisterEntryAvgAggregateInputType;
    _sum?: AssetRegisterEntrySumAggregateInputType;
    _min?: AssetRegisterEntryMinAggregateInputType;
    _max?: AssetRegisterEntryMaxAggregateInputType;
};
export type AssetRegisterEntryGroupByOutputType = {
    id: string;
    assetCode: string;
    description: string;
    purchaseOrderId: string | null;
    ledgerEntityCode: string;
    costKobo: bigint;
    acquisitionDate: Date;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo: bigint;
    status: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt: Date;
    disposedAt: Date | null;
    _count: AssetRegisterEntryCountAggregateOutputType | null;
    _avg: AssetRegisterEntryAvgAggregateOutputType | null;
    _sum: AssetRegisterEntrySumAggregateOutputType | null;
    _min: AssetRegisterEntryMinAggregateOutputType | null;
    _max: AssetRegisterEntryMaxAggregateOutputType | null;
};
export type GetAssetRegisterEntryGroupByPayload<T extends AssetRegisterEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetRegisterEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetRegisterEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetRegisterEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetRegisterEntryGroupByOutputType[P]>;
}>>;
export type AssetRegisterEntryWhereInput = {
    AND?: Prisma.AssetRegisterEntryWhereInput | Prisma.AssetRegisterEntryWhereInput[];
    OR?: Prisma.AssetRegisterEntryWhereInput[];
    NOT?: Prisma.AssetRegisterEntryWhereInput | Prisma.AssetRegisterEntryWhereInput[];
    id?: Prisma.UuidFilter<"AssetRegisterEntry"> | string;
    assetCode?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    description?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    purchaseOrderId?: Prisma.UuidNullableFilter<"AssetRegisterEntry"> | string | null;
    ledgerEntityCode?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    costKobo?: Prisma.BigIntFilter<"AssetRegisterEntry"> | bigint | number;
    acquisitionDate?: Prisma.DateTimeFilter<"AssetRegisterEntry"> | Date | string;
    usefulLifeMonths?: Prisma.IntFilter<"AssetRegisterEntry"> | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFilter<"AssetRegisterEntry"> | bigint | number;
    status?: Prisma.EnumAssetStatusFilter<"AssetRegisterEntry"> | $Enums.AssetStatus;
    createdByUserId?: Prisma.UuidFilter<"AssetRegisterEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetRegisterEntry"> | Date | string;
    disposedAt?: Prisma.DateTimeNullableFilter<"AssetRegisterEntry"> | Date | string | null;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderNullableScalarRelationFilter, Prisma.PurchaseOrderWhereInput> | null;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    depreciationRuns?: Prisma.AssetDepreciationRunListRelationFilter;
};
export type AssetRegisterEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    usefulLifeMonths?: Prisma.SortOrder;
    accumulatedDepreciationKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    depreciationRuns?: Prisma.AssetDepreciationRunOrderByRelationAggregateInput;
};
export type AssetRegisterEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    assetCode?: string;
    AND?: Prisma.AssetRegisterEntryWhereInput | Prisma.AssetRegisterEntryWhereInput[];
    OR?: Prisma.AssetRegisterEntryWhereInput[];
    NOT?: Prisma.AssetRegisterEntryWhereInput | Prisma.AssetRegisterEntryWhereInput[];
    description?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    purchaseOrderId?: Prisma.UuidNullableFilter<"AssetRegisterEntry"> | string | null;
    ledgerEntityCode?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    costKobo?: Prisma.BigIntFilter<"AssetRegisterEntry"> | bigint | number;
    acquisitionDate?: Prisma.DateTimeFilter<"AssetRegisterEntry"> | Date | string;
    usefulLifeMonths?: Prisma.IntFilter<"AssetRegisterEntry"> | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFilter<"AssetRegisterEntry"> | bigint | number;
    status?: Prisma.EnumAssetStatusFilter<"AssetRegisterEntry"> | $Enums.AssetStatus;
    createdByUserId?: Prisma.UuidFilter<"AssetRegisterEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetRegisterEntry"> | Date | string;
    disposedAt?: Prisma.DateTimeNullableFilter<"AssetRegisterEntry"> | Date | string | null;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderNullableScalarRelationFilter, Prisma.PurchaseOrderWhereInput> | null;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    depreciationRuns?: Prisma.AssetDepreciationRunListRelationFilter;
}, "id" | "assetCode">;
export type AssetRegisterEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    usefulLifeMonths?: Prisma.SortOrder;
    accumulatedDepreciationKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AssetRegisterEntryCountOrderByAggregateInput;
    _avg?: Prisma.AssetRegisterEntryAvgOrderByAggregateInput;
    _max?: Prisma.AssetRegisterEntryMaxOrderByAggregateInput;
    _min?: Prisma.AssetRegisterEntryMinOrderByAggregateInput;
    _sum?: Prisma.AssetRegisterEntrySumOrderByAggregateInput;
};
export type AssetRegisterEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetRegisterEntryScalarWhereWithAggregatesInput | Prisma.AssetRegisterEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetRegisterEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetRegisterEntryScalarWhereWithAggregatesInput | Prisma.AssetRegisterEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AssetRegisterEntry"> | string;
    assetCode?: Prisma.StringWithAggregatesFilter<"AssetRegisterEntry"> | string;
    description?: Prisma.StringWithAggregatesFilter<"AssetRegisterEntry"> | string;
    purchaseOrderId?: Prisma.UuidNullableWithAggregatesFilter<"AssetRegisterEntry"> | string | null;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"AssetRegisterEntry"> | string;
    costKobo?: Prisma.BigIntWithAggregatesFilter<"AssetRegisterEntry"> | bigint | number;
    acquisitionDate?: Prisma.DateTimeWithAggregatesFilter<"AssetRegisterEntry"> | Date | string;
    usefulLifeMonths?: Prisma.IntWithAggregatesFilter<"AssetRegisterEntry"> | number;
    accumulatedDepreciationKobo?: Prisma.BigIntWithAggregatesFilter<"AssetRegisterEntry"> | bigint | number;
    status?: Prisma.EnumAssetStatusWithAggregatesFilter<"AssetRegisterEntry"> | $Enums.AssetStatus;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"AssetRegisterEntry"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetRegisterEntry"> | Date | string;
    disposedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetRegisterEntry"> | Date | string | null;
};
export type AssetRegisterEntryCreateInput = {
    id?: string;
    assetCode: string;
    description: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutAssetRegisterEntriesInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutAssetRegisterEntriesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutAssetRegisterEntriesCreatedInput;
    depreciationRuns?: Prisma.AssetDepreciationRunCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryUncheckedCreateInput = {
    id?: string;
    assetCode: string;
    description: string;
    purchaseOrderId?: string | null;
    ledgerEntityCode: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutAssetRegisterEntriesNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutAssetRegisterEntriesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutAssetRegisterEntriesCreatedNestedInput;
    depreciationRuns?: Prisma.AssetDepreciationRunUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryCreateManyInput = {
    id?: string;
    assetCode: string;
    description: string;
    purchaseOrderId?: string | null;
    ledgerEntityCode: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
};
export type AssetRegisterEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetRegisterEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetRegisterEntryListRelationFilter = {
    every?: Prisma.AssetRegisterEntryWhereInput;
    some?: Prisma.AssetRegisterEntryWhereInput;
    none?: Prisma.AssetRegisterEntryWhereInput;
};
export type AssetRegisterEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetRegisterEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    usefulLifeMonths?: Prisma.SortOrder;
    accumulatedDepreciationKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
};
export type AssetRegisterEntryAvgOrderByAggregateInput = {
    costKobo?: Prisma.SortOrder;
    usefulLifeMonths?: Prisma.SortOrder;
    accumulatedDepreciationKobo?: Prisma.SortOrder;
};
export type AssetRegisterEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    usefulLifeMonths?: Prisma.SortOrder;
    accumulatedDepreciationKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
};
export type AssetRegisterEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    costKobo?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    usefulLifeMonths?: Prisma.SortOrder;
    accumulatedDepreciationKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    disposedAt?: Prisma.SortOrder;
};
export type AssetRegisterEntrySumOrderByAggregateInput = {
    costKobo?: Prisma.SortOrder;
    usefulLifeMonths?: Prisma.SortOrder;
    accumulatedDepreciationKobo?: Prisma.SortOrder;
};
export type AssetRegisterEntryScalarRelationFilter = {
    is?: Prisma.AssetRegisterEntryWhereInput;
    isNot?: Prisma.AssetRegisterEntryWhereInput;
};
export type AssetRegisterEntryCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput> | Prisma.AssetRegisterEntryCreateWithoutCreatedByInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
};
export type AssetRegisterEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput> | Prisma.AssetRegisterEntryCreateWithoutCreatedByInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
};
export type AssetRegisterEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput> | Prisma.AssetRegisterEntryCreateWithoutCreatedByInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyCreatedByInputEnvelope;
    set?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    delete?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    update?: Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutCreatedByInput | Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
};
export type AssetRegisterEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput> | Prisma.AssetRegisterEntryCreateWithoutCreatedByInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyCreatedByInputEnvelope;
    set?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    delete?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    update?: Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutCreatedByInput | Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
};
export type AssetRegisterEntryCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
};
export type AssetRegisterEntryUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
};
export type AssetRegisterEntryUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    delete?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    update?: Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
};
export type AssetRegisterEntryUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    delete?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    update?: Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
};
export type AssetRegisterEntryCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput> | Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
};
export type AssetRegisterEntryUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput> | Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
};
export type AssetRegisterEntryUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput> | Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    delete?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    update?: Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
};
export type AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput> | Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput[] | Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.AssetRegisterEntryCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    delete?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput | Prisma.AssetRegisterEntryWhereUniqueInput[];
    update?: Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.AssetRegisterEntryUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
};
export type EnumAssetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetStatus;
};
export type AssetRegisterEntryCreateNestedOneWithoutDepreciationRunsInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutDepreciationRunsInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutDepreciationRunsInput>;
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutDepreciationRunsInput;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput;
};
export type AssetRegisterEntryUpdateOneRequiredWithoutDepreciationRunsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutDepreciationRunsInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutDepreciationRunsInput>;
    connectOrCreate?: Prisma.AssetRegisterEntryCreateOrConnectWithoutDepreciationRunsInput;
    upsert?: Prisma.AssetRegisterEntryUpsertWithoutDepreciationRunsInput;
    connect?: Prisma.AssetRegisterEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetRegisterEntryUpdateToOneWithWhereWithoutDepreciationRunsInput, Prisma.AssetRegisterEntryUpdateWithoutDepreciationRunsInput>, Prisma.AssetRegisterEntryUncheckedUpdateWithoutDepreciationRunsInput>;
};
export type AssetRegisterEntryCreateWithoutCreatedByInput = {
    id?: string;
    assetCode: string;
    description: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutAssetRegisterEntriesInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutAssetRegisterEntriesInput;
    depreciationRuns?: Prisma.AssetDepreciationRunCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    assetCode: string;
    description: string;
    purchaseOrderId?: string | null;
    ledgerEntityCode: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput>;
};
export type AssetRegisterEntryCreateManyCreatedByInputEnvelope = {
    data: Prisma.AssetRegisterEntryCreateManyCreatedByInput | Prisma.AssetRegisterEntryCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type AssetRegisterEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutCreatedByInput>;
};
export type AssetRegisterEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutCreatedByInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutCreatedByInput>;
};
export type AssetRegisterEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.AssetRegisterEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateManyMutationInput, Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutCreatedByInput>;
};
export type AssetRegisterEntryScalarWhereInput = {
    AND?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
    OR?: Prisma.AssetRegisterEntryScalarWhereInput[];
    NOT?: Prisma.AssetRegisterEntryScalarWhereInput | Prisma.AssetRegisterEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"AssetRegisterEntry"> | string;
    assetCode?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    description?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    purchaseOrderId?: Prisma.UuidNullableFilter<"AssetRegisterEntry"> | string | null;
    ledgerEntityCode?: Prisma.StringFilter<"AssetRegisterEntry"> | string;
    costKobo?: Prisma.BigIntFilter<"AssetRegisterEntry"> | bigint | number;
    acquisitionDate?: Prisma.DateTimeFilter<"AssetRegisterEntry"> | Date | string;
    usefulLifeMonths?: Prisma.IntFilter<"AssetRegisterEntry"> | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFilter<"AssetRegisterEntry"> | bigint | number;
    status?: Prisma.EnumAssetStatusFilter<"AssetRegisterEntry"> | $Enums.AssetStatus;
    createdByUserId?: Prisma.UuidFilter<"AssetRegisterEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetRegisterEntry"> | Date | string;
    disposedAt?: Prisma.DateTimeNullableFilter<"AssetRegisterEntry"> | Date | string | null;
};
export type AssetRegisterEntryCreateWithoutLedgerEntityInput = {
    id?: string;
    assetCode: string;
    description: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutAssetRegisterEntriesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutAssetRegisterEntriesCreatedInput;
    depreciationRuns?: Prisma.AssetDepreciationRunCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    assetCode: string;
    description: string;
    purchaseOrderId?: string | null;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type AssetRegisterEntryCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.AssetRegisterEntryCreateManyLedgerEntityInput | Prisma.AssetRegisterEntryCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type AssetRegisterEntryUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type AssetRegisterEntryUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutLedgerEntityInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutLedgerEntityInput>;
};
export type AssetRegisterEntryUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.AssetRegisterEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateManyMutationInput, Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type AssetRegisterEntryCreateWithoutPurchaseOrderInput = {
    id?: string;
    assetCode: string;
    description: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutAssetRegisterEntriesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutAssetRegisterEntriesCreatedInput;
    depreciationRuns?: Prisma.AssetDepreciationRunCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    assetCode: string;
    description: string;
    ledgerEntityCode: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedCreateNestedManyWithoutAssetRegisterEntryInput;
};
export type AssetRegisterEntryCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput>;
};
export type AssetRegisterEntryCreateManyPurchaseOrderInputEnvelope = {
    data: Prisma.AssetRegisterEntryCreateManyPurchaseOrderInput | Prisma.AssetRegisterEntryCreateManyPurchaseOrderInput[];
    skipDuplicates?: boolean;
};
export type AssetRegisterEntryUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutPurchaseOrderInput>;
};
export type AssetRegisterEntryUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutPurchaseOrderInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type AssetRegisterEntryUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: Prisma.AssetRegisterEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateManyMutationInput, Prisma.AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderInput>;
};
export type AssetRegisterEntryCreateWithoutDepreciationRunsInput = {
    id?: string;
    assetCode: string;
    description: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderCreateNestedOneWithoutAssetRegisterEntriesInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutAssetRegisterEntriesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutAssetRegisterEntriesCreatedInput;
};
export type AssetRegisterEntryUncheckedCreateWithoutDepreciationRunsInput = {
    id?: string;
    assetCode: string;
    description: string;
    purchaseOrderId?: string | null;
    ledgerEntityCode: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
};
export type AssetRegisterEntryCreateOrConnectWithoutDepreciationRunsInput = {
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutDepreciationRunsInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutDepreciationRunsInput>;
};
export type AssetRegisterEntryUpsertWithoutDepreciationRunsInput = {
    update: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutDepreciationRunsInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutDepreciationRunsInput>;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateWithoutDepreciationRunsInput, Prisma.AssetRegisterEntryUncheckedCreateWithoutDepreciationRunsInput>;
    where?: Prisma.AssetRegisterEntryWhereInput;
};
export type AssetRegisterEntryUpdateToOneWithWhereWithoutDepreciationRunsInput = {
    where?: Prisma.AssetRegisterEntryWhereInput;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateWithoutDepreciationRunsInput, Prisma.AssetRegisterEntryUncheckedUpdateWithoutDepreciationRunsInput>;
};
export type AssetRegisterEntryUpdateWithoutDepreciationRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutAssetRegisterEntriesNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutAssetRegisterEntriesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutAssetRegisterEntriesCreatedNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateWithoutDepreciationRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetRegisterEntryCreateManyCreatedByInput = {
    id?: string;
    assetCode: string;
    description: string;
    purchaseOrderId?: string | null;
    ledgerEntityCode: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
};
export type AssetRegisterEntryUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutAssetRegisterEntriesNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutAssetRegisterEntriesNestedInput;
    depreciationRuns?: Prisma.AssetDepreciationRunUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetRegisterEntryCreateManyLedgerEntityInput = {
    id?: string;
    assetCode: string;
    description: string;
    purchaseOrderId?: string | null;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
};
export type AssetRegisterEntryUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneWithoutAssetRegisterEntriesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutAssetRegisterEntriesCreatedNestedInput;
    depreciationRuns?: Prisma.AssetDepreciationRunUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetRegisterEntryCreateManyPurchaseOrderInput = {
    id?: string;
    assetCode: string;
    description: string;
    ledgerEntityCode: string;
    costKobo: bigint | number;
    acquisitionDate: Date | string;
    usefulLifeMonths: number;
    accumulatedDepreciationKobo?: bigint | number;
    status?: $Enums.AssetStatus;
    createdByUserId: string;
    createdAt?: Date | string;
    disposedAt?: Date | string | null;
};
export type AssetRegisterEntryUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutAssetRegisterEntriesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutAssetRegisterEntriesCreatedNestedInput;
    depreciationRuns?: Prisma.AssetDepreciationRunUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depreciationRuns?: Prisma.AssetDepreciationRunUncheckedUpdateManyWithoutAssetRegisterEntryNestedInput;
};
export type AssetRegisterEntryUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    costKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    acquisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usefulLifeMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    accumulatedDepreciationKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disposedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetRegisterEntryCountOutputType = {
    depreciationRuns: number;
};
export type AssetRegisterEntryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    depreciationRuns?: boolean | AssetRegisterEntryCountOutputTypeCountDepreciationRunsArgs;
};
export type AssetRegisterEntryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntryCountOutputTypeSelect<ExtArgs> | null;
};
export type AssetRegisterEntryCountOutputTypeCountDepreciationRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetDepreciationRunWhereInput;
};
export type AssetRegisterEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetCode?: boolean;
    description?: boolean;
    purchaseOrderId?: boolean;
    ledgerEntityCode?: boolean;
    costKobo?: boolean;
    acquisitionDate?: boolean;
    usefulLifeMonths?: boolean;
    accumulatedDepreciationKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    disposedAt?: boolean;
    purchaseOrder?: boolean | Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    depreciationRuns?: boolean | Prisma.AssetRegisterEntry$depreciationRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetRegisterEntryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetRegisterEntry"]>;
export type AssetRegisterEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetCode?: boolean;
    description?: boolean;
    purchaseOrderId?: boolean;
    ledgerEntityCode?: boolean;
    costKobo?: boolean;
    acquisitionDate?: boolean;
    usefulLifeMonths?: boolean;
    accumulatedDepreciationKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    disposedAt?: boolean;
    purchaseOrder?: boolean | Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetRegisterEntry"]>;
export type AssetRegisterEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetCode?: boolean;
    description?: boolean;
    purchaseOrderId?: boolean;
    ledgerEntityCode?: boolean;
    costKobo?: boolean;
    acquisitionDate?: boolean;
    usefulLifeMonths?: boolean;
    accumulatedDepreciationKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    disposedAt?: boolean;
    purchaseOrder?: boolean | Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetRegisterEntry"]>;
export type AssetRegisterEntrySelectScalar = {
    id?: boolean;
    assetCode?: boolean;
    description?: boolean;
    purchaseOrderId?: boolean;
    ledgerEntityCode?: boolean;
    costKobo?: boolean;
    acquisitionDate?: boolean;
    usefulLifeMonths?: boolean;
    accumulatedDepreciationKobo?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    disposedAt?: boolean;
};
export type AssetRegisterEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetCode" | "description" | "purchaseOrderId" | "ledgerEntityCode" | "costKobo" | "acquisitionDate" | "usefulLifeMonths" | "accumulatedDepreciationKobo" | "status" | "createdByUserId" | "createdAt" | "disposedAt", ExtArgs["result"]["assetRegisterEntry"]>;
export type AssetRegisterEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    depreciationRuns?: boolean | Prisma.AssetRegisterEntry$depreciationRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetRegisterEntryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssetRegisterEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type AssetRegisterEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $AssetRegisterEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetRegisterEntry";
    objects: {
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs> | null;
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        depreciationRuns: Prisma.$AssetDepreciationRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assetCode: string;
        description: string;
        purchaseOrderId: string | null;
        ledgerEntityCode: string;
        costKobo: bigint;
        acquisitionDate: Date;
        usefulLifeMonths: number;
        accumulatedDepreciationKobo: bigint;
        status: $Enums.AssetStatus;
        createdByUserId: string;
        createdAt: Date;
        disposedAt: Date | null;
    }, ExtArgs["result"]["assetRegisterEntry"]>;
    composites: {};
};
export type AssetRegisterEntryGetPayload<S extends boolean | null | undefined | AssetRegisterEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload, S>;
export type AssetRegisterEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetRegisterEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetRegisterEntryCountAggregateInputType | true;
};
export interface AssetRegisterEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetRegisterEntry'];
        meta: {
            name: 'AssetRegisterEntry';
        };
    };
    findUnique<T extends AssetRegisterEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetRegisterEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetRegisterEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetRegisterEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetRegisterEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetRegisterEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetRegisterEntryFindManyArgs>(args?: Prisma.SelectSubset<T, AssetRegisterEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetRegisterEntryCreateArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryCreateArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetRegisterEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetRegisterEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetRegisterEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetRegisterEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetRegisterEntryDeleteArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetRegisterEntryUpdateArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetRegisterEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetRegisterEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetRegisterEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetRegisterEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetRegisterEntryUpsertArgs>(args: Prisma.SelectSubset<T, AssetRegisterEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$AssetRegisterEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetRegisterEntryCountArgs>(args?: Prisma.Subset<T, AssetRegisterEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetRegisterEntryCountAggregateOutputType> : number>;
    aggregate<T extends AssetRegisterEntryAggregateArgs>(args: Prisma.Subset<T, AssetRegisterEntryAggregateArgs>): Prisma.PrismaPromise<GetAssetRegisterEntryAggregateType<T>>;
    groupBy<T extends AssetRegisterEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetRegisterEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetRegisterEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetRegisterEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetRegisterEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetRegisterEntryFieldRefs;
}
export interface Prisma__AssetRegisterEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchaseOrder<T extends Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetRegisterEntry$purchaseOrderArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    depreciationRuns<T extends Prisma.AssetRegisterEntry$depreciationRunsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetRegisterEntry$depreciationRunsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetDepreciationRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetRegisterEntryFieldRefs {
    readonly id: Prisma.FieldRef<"AssetRegisterEntry", 'String'>;
    readonly assetCode: Prisma.FieldRef<"AssetRegisterEntry", 'String'>;
    readonly description: Prisma.FieldRef<"AssetRegisterEntry", 'String'>;
    readonly purchaseOrderId: Prisma.FieldRef<"AssetRegisterEntry", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"AssetRegisterEntry", 'String'>;
    readonly costKobo: Prisma.FieldRef<"AssetRegisterEntry", 'BigInt'>;
    readonly acquisitionDate: Prisma.FieldRef<"AssetRegisterEntry", 'DateTime'>;
    readonly usefulLifeMonths: Prisma.FieldRef<"AssetRegisterEntry", 'Int'>;
    readonly accumulatedDepreciationKobo: Prisma.FieldRef<"AssetRegisterEntry", 'BigInt'>;
    readonly status: Prisma.FieldRef<"AssetRegisterEntry", 'AssetStatus'>;
    readonly createdByUserId: Prisma.FieldRef<"AssetRegisterEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetRegisterEntry", 'DateTime'>;
    readonly disposedAt: Prisma.FieldRef<"AssetRegisterEntry", 'DateTime'>;
}
export type AssetRegisterEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
};
export type AssetRegisterEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
};
export type AssetRegisterEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where?: Prisma.AssetRegisterEntryWhereInput;
    orderBy?: Prisma.AssetRegisterEntryOrderByWithRelationInput | Prisma.AssetRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.AssetRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRegisterEntryScalarFieldEnum | Prisma.AssetRegisterEntryScalarFieldEnum[];
};
export type AssetRegisterEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where?: Prisma.AssetRegisterEntryWhereInput;
    orderBy?: Prisma.AssetRegisterEntryOrderByWithRelationInput | Prisma.AssetRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.AssetRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRegisterEntryScalarFieldEnum | Prisma.AssetRegisterEntryScalarFieldEnum[];
};
export type AssetRegisterEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where?: Prisma.AssetRegisterEntryWhereInput;
    orderBy?: Prisma.AssetRegisterEntryOrderByWithRelationInput | Prisma.AssetRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.AssetRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRegisterEntryScalarFieldEnum | Prisma.AssetRegisterEntryScalarFieldEnum[];
};
export type AssetRegisterEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetRegisterEntryCreateInput, Prisma.AssetRegisterEntryUncheckedCreateInput>;
};
export type AssetRegisterEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetRegisterEntryCreateManyInput | Prisma.AssetRegisterEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetRegisterEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    data: Prisma.AssetRegisterEntryCreateManyInput | Prisma.AssetRegisterEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetRegisterEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetRegisterEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateInput, Prisma.AssetRegisterEntryUncheckedUpdateInput>;
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
};
export type AssetRegisterEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateManyMutationInput, Prisma.AssetRegisterEntryUncheckedUpdateManyInput>;
    where?: Prisma.AssetRegisterEntryWhereInput;
    limit?: number;
};
export type AssetRegisterEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetRegisterEntryUpdateManyMutationInput, Prisma.AssetRegisterEntryUncheckedUpdateManyInput>;
    where?: Prisma.AssetRegisterEntryWhereInput;
    limit?: number;
    include?: Prisma.AssetRegisterEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetRegisterEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRegisterEntryCreateInput, Prisma.AssetRegisterEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetRegisterEntryUpdateInput, Prisma.AssetRegisterEntryUncheckedUpdateInput>;
};
export type AssetRegisterEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.AssetRegisterEntryWhereUniqueInput;
};
export type AssetRegisterEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRegisterEntryWhereInput;
    limit?: number;
};
export type AssetRegisterEntry$purchaseOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type AssetRegisterEntry$depreciationRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetDepreciationRunSelect<ExtArgs> | null;
    omit?: Prisma.AssetDepreciationRunOmit<ExtArgs> | null;
    include?: Prisma.AssetDepreciationRunInclude<ExtArgs> | null;
    where?: Prisma.AssetDepreciationRunWhereInput;
    orderBy?: Prisma.AssetDepreciationRunOrderByWithRelationInput | Prisma.AssetDepreciationRunOrderByWithRelationInput[];
    cursor?: Prisma.AssetDepreciationRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetDepreciationRunScalarFieldEnum | Prisma.AssetDepreciationRunScalarFieldEnum[];
};
export type AssetRegisterEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.AssetRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.AssetRegisterEntryInclude<ExtArgs> | null;
};
