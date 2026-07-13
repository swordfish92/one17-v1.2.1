import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortfolioPositionModel = runtime.Types.Result.DefaultSelection<Prisma.$PortfolioPositionPayload>;
export type AggregatePortfolioPosition = {
    _count: PortfolioPositionCountAggregateOutputType | null;
    _avg: PortfolioPositionAvgAggregateOutputType | null;
    _sum: PortfolioPositionSumAggregateOutputType | null;
    _min: PortfolioPositionMinAggregateOutputType | null;
    _max: PortfolioPositionMaxAggregateOutputType | null;
};
export type PortfolioPositionAvgAggregateOutputType = {
    principalKobo: number | null;
    ratePct: runtime.Decimal | null;
    repaidKobo: number | null;
    markPriceKobo: number | null;
    markQty: runtime.Decimal | null;
};
export type PortfolioPositionSumAggregateOutputType = {
    principalKobo: bigint | null;
    ratePct: runtime.Decimal | null;
    repaidKobo: bigint | null;
    markPriceKobo: bigint | null;
    markQty: runtime.Decimal | null;
};
export type PortfolioPositionMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    contractType: string | null;
    isEquity: boolean | null;
    principalKobo: bigint | null;
    ratePct: runtime.Decimal | null;
    entryDate: Date | null;
    maturityDate: Date | null;
    repaidKobo: bigint | null;
    markPriceKobo: bigint | null;
    markQty: runtime.Decimal | null;
    status: $Enums.PortfolioPositionStatus | null;
    createdAt: Date | null;
};
export type PortfolioPositionMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    contractType: string | null;
    isEquity: boolean | null;
    principalKobo: bigint | null;
    ratePct: runtime.Decimal | null;
    entryDate: Date | null;
    maturityDate: Date | null;
    repaidKobo: bigint | null;
    markPriceKobo: bigint | null;
    markQty: runtime.Decimal | null;
    status: $Enums.PortfolioPositionStatus | null;
    createdAt: Date | null;
};
export type PortfolioPositionCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    contractType: number;
    isEquity: number;
    principalKobo: number;
    ratePct: number;
    entryDate: number;
    maturityDate: number;
    repaidKobo: number;
    markPriceKobo: number;
    markQty: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type PortfolioPositionAvgAggregateInputType = {
    principalKobo?: true;
    ratePct?: true;
    repaidKobo?: true;
    markPriceKobo?: true;
    markQty?: true;
};
export type PortfolioPositionSumAggregateInputType = {
    principalKobo?: true;
    ratePct?: true;
    repaidKobo?: true;
    markPriceKobo?: true;
    markQty?: true;
};
export type PortfolioPositionMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    contractType?: true;
    isEquity?: true;
    principalKobo?: true;
    ratePct?: true;
    entryDate?: true;
    maturityDate?: true;
    repaidKobo?: true;
    markPriceKobo?: true;
    markQty?: true;
    status?: true;
    createdAt?: true;
};
export type PortfolioPositionMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    contractType?: true;
    isEquity?: true;
    principalKobo?: true;
    ratePct?: true;
    entryDate?: true;
    maturityDate?: true;
    repaidKobo?: true;
    markPriceKobo?: true;
    markQty?: true;
    status?: true;
    createdAt?: true;
};
export type PortfolioPositionCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    contractType?: true;
    isEquity?: true;
    principalKobo?: true;
    ratePct?: true;
    entryDate?: true;
    maturityDate?: true;
    repaidKobo?: true;
    markPriceKobo?: true;
    markQty?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type PortfolioPositionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioPositionWhereInput;
    orderBy?: Prisma.PortfolioPositionOrderByWithRelationInput | Prisma.PortfolioPositionOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioPositionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortfolioPositionCountAggregateInputType;
    _avg?: PortfolioPositionAvgAggregateInputType;
    _sum?: PortfolioPositionSumAggregateInputType;
    _min?: PortfolioPositionMinAggregateInputType;
    _max?: PortfolioPositionMaxAggregateInputType;
};
export type GetPortfolioPositionAggregateType<T extends PortfolioPositionAggregateArgs> = {
    [P in keyof T & keyof AggregatePortfolioPosition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortfolioPosition[P]> : Prisma.GetScalarType<T[P], AggregatePortfolioPosition[P]>;
};
export type PortfolioPositionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioPositionWhereInput;
    orderBy?: Prisma.PortfolioPositionOrderByWithAggregationInput | Prisma.PortfolioPositionOrderByWithAggregationInput[];
    by: Prisma.PortfolioPositionScalarFieldEnum[] | Prisma.PortfolioPositionScalarFieldEnum;
    having?: Prisma.PortfolioPositionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortfolioPositionCountAggregateInputType | true;
    _avg?: PortfolioPositionAvgAggregateInputType;
    _sum?: PortfolioPositionSumAggregateInputType;
    _min?: PortfolioPositionMinAggregateInputType;
    _max?: PortfolioPositionMaxAggregateInputType;
};
export type PortfolioPositionGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    contractType: string;
    isEquity: boolean;
    principalKobo: bigint;
    ratePct: runtime.Decimal | null;
    entryDate: Date;
    maturityDate: Date | null;
    repaidKobo: bigint;
    markPriceKobo: bigint | null;
    markQty: runtime.Decimal | null;
    status: $Enums.PortfolioPositionStatus;
    createdAt: Date;
    _count: PortfolioPositionCountAggregateOutputType | null;
    _avg: PortfolioPositionAvgAggregateOutputType | null;
    _sum: PortfolioPositionSumAggregateOutputType | null;
    _min: PortfolioPositionMinAggregateOutputType | null;
    _max: PortfolioPositionMaxAggregateOutputType | null;
};
export type GetPortfolioPositionGroupByPayload<T extends PortfolioPositionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortfolioPositionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortfolioPositionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortfolioPositionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortfolioPositionGroupByOutputType[P]>;
}>>;
export type PortfolioPositionWhereInput = {
    AND?: Prisma.PortfolioPositionWhereInput | Prisma.PortfolioPositionWhereInput[];
    OR?: Prisma.PortfolioPositionWhereInput[];
    NOT?: Prisma.PortfolioPositionWhereInput | Prisma.PortfolioPositionWhereInput[];
    id?: Prisma.UuidFilter<"PortfolioPosition"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PortfolioPosition"> | string;
    contractType?: Prisma.StringFilter<"PortfolioPosition"> | string;
    isEquity?: Prisma.BoolFilter<"PortfolioPosition"> | boolean;
    principalKobo?: Prisma.BigIntFilter<"PortfolioPosition"> | bigint | number;
    ratePct?: Prisma.DecimalNullableFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFilter<"PortfolioPosition"> | Date | string;
    maturityDate?: Prisma.DateTimeNullableFilter<"PortfolioPosition"> | Date | string | null;
    repaidKobo?: Prisma.BigIntFilter<"PortfolioPosition"> | bigint | number;
    markPriceKobo?: Prisma.BigIntNullableFilter<"PortfolioPosition"> | bigint | number | null;
    markQty?: Prisma.DecimalNullableFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFilter<"PortfolioPosition"> | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFilter<"PortfolioPosition"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
};
export type PortfolioPositionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    contractType?: Prisma.SortOrder;
    isEquity?: Prisma.SortOrder;
    principalKobo?: Prisma.SortOrder;
    ratePct?: Prisma.SortOrderInput | Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    maturityDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    repaidKobo?: Prisma.SortOrder;
    markPriceKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    markQty?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
};
export type PortfolioPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PortfolioPositionWhereInput | Prisma.PortfolioPositionWhereInput[];
    OR?: Prisma.PortfolioPositionWhereInput[];
    NOT?: Prisma.PortfolioPositionWhereInput | Prisma.PortfolioPositionWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"PortfolioPosition"> | string;
    contractType?: Prisma.StringFilter<"PortfolioPosition"> | string;
    isEquity?: Prisma.BoolFilter<"PortfolioPosition"> | boolean;
    principalKobo?: Prisma.BigIntFilter<"PortfolioPosition"> | bigint | number;
    ratePct?: Prisma.DecimalNullableFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFilter<"PortfolioPosition"> | Date | string;
    maturityDate?: Prisma.DateTimeNullableFilter<"PortfolioPosition"> | Date | string | null;
    repaidKobo?: Prisma.BigIntFilter<"PortfolioPosition"> | bigint | number;
    markPriceKobo?: Prisma.BigIntNullableFilter<"PortfolioPosition"> | bigint | number | null;
    markQty?: Prisma.DecimalNullableFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFilter<"PortfolioPosition"> | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFilter<"PortfolioPosition"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
}, "id">;
export type PortfolioPositionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    contractType?: Prisma.SortOrder;
    isEquity?: Prisma.SortOrder;
    principalKobo?: Prisma.SortOrder;
    ratePct?: Prisma.SortOrderInput | Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    maturityDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    repaidKobo?: Prisma.SortOrder;
    markPriceKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    markQty?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PortfolioPositionCountOrderByAggregateInput;
    _avg?: Prisma.PortfolioPositionAvgOrderByAggregateInput;
    _max?: Prisma.PortfolioPositionMaxOrderByAggregateInput;
    _min?: Prisma.PortfolioPositionMinOrderByAggregateInput;
    _sum?: Prisma.PortfolioPositionSumOrderByAggregateInput;
};
export type PortfolioPositionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortfolioPositionScalarWhereWithAggregatesInput | Prisma.PortfolioPositionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortfolioPositionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortfolioPositionScalarWhereWithAggregatesInput | Prisma.PortfolioPositionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PortfolioPosition"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"PortfolioPosition"> | string;
    contractType?: Prisma.StringWithAggregatesFilter<"PortfolioPosition"> | string;
    isEquity?: Prisma.BoolWithAggregatesFilter<"PortfolioPosition"> | boolean;
    principalKobo?: Prisma.BigIntWithAggregatesFilter<"PortfolioPosition"> | bigint | number;
    ratePct?: Prisma.DecimalNullableWithAggregatesFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeWithAggregatesFilter<"PortfolioPosition"> | Date | string;
    maturityDate?: Prisma.DateTimeNullableWithAggregatesFilter<"PortfolioPosition"> | Date | string | null;
    repaidKobo?: Prisma.BigIntWithAggregatesFilter<"PortfolioPosition"> | bigint | number;
    markPriceKobo?: Prisma.BigIntNullableWithAggregatesFilter<"PortfolioPosition"> | bigint | number | null;
    markQty?: Prisma.DecimalNullableWithAggregatesFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusWithAggregatesFilter<"PortfolioPosition"> | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PortfolioPosition"> | Date | string;
};
export type PortfolioPositionCreateInput = {
    id?: string;
    contractType: string;
    isEquity?: boolean;
    principalKobo: bigint | number;
    ratePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate: Date | string;
    maturityDate?: Date | string | null;
    repaidKobo?: bigint | number;
    markPriceKobo?: bigint | number | null;
    markQty?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.PortfolioPositionStatus;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPortfolioPositionsInput;
};
export type PortfolioPositionUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    contractType: string;
    isEquity?: boolean;
    principalKobo: bigint | number;
    ratePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate: Date | string;
    maturityDate?: Date | string | null;
    repaidKobo?: bigint | number;
    markPriceKobo?: bigint | number | null;
    markQty?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.PortfolioPositionStatus;
    createdAt?: Date | string;
};
export type PortfolioPositionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contractType?: Prisma.StringFieldUpdateOperationsInput | string;
    isEquity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    principalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ratePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maturityDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repaidKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    markPriceKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    markQty?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFieldUpdateOperationsInput | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPortfolioPositionsNestedInput;
};
export type PortfolioPositionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contractType?: Prisma.StringFieldUpdateOperationsInput | string;
    isEquity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    principalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ratePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maturityDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repaidKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    markPriceKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    markQty?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFieldUpdateOperationsInput | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioPositionCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    contractType: string;
    isEquity?: boolean;
    principalKobo: bigint | number;
    ratePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate: Date | string;
    maturityDate?: Date | string | null;
    repaidKobo?: bigint | number;
    markPriceKobo?: bigint | number | null;
    markQty?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.PortfolioPositionStatus;
    createdAt?: Date | string;
};
export type PortfolioPositionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contractType?: Prisma.StringFieldUpdateOperationsInput | string;
    isEquity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    principalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ratePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maturityDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repaidKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    markPriceKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    markQty?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFieldUpdateOperationsInput | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioPositionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    contractType?: Prisma.StringFieldUpdateOperationsInput | string;
    isEquity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    principalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ratePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maturityDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repaidKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    markPriceKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    markQty?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFieldUpdateOperationsInput | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioPositionListRelationFilter = {
    every?: Prisma.PortfolioPositionWhereInput;
    some?: Prisma.PortfolioPositionWhereInput;
    none?: Prisma.PortfolioPositionWhereInput;
};
export type PortfolioPositionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortfolioPositionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    contractType?: Prisma.SortOrder;
    isEquity?: Prisma.SortOrder;
    principalKobo?: Prisma.SortOrder;
    ratePct?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    maturityDate?: Prisma.SortOrder;
    repaidKobo?: Prisma.SortOrder;
    markPriceKobo?: Prisma.SortOrder;
    markQty?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortfolioPositionAvgOrderByAggregateInput = {
    principalKobo?: Prisma.SortOrder;
    ratePct?: Prisma.SortOrder;
    repaidKobo?: Prisma.SortOrder;
    markPriceKobo?: Prisma.SortOrder;
    markQty?: Prisma.SortOrder;
};
export type PortfolioPositionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    contractType?: Prisma.SortOrder;
    isEquity?: Prisma.SortOrder;
    principalKobo?: Prisma.SortOrder;
    ratePct?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    maturityDate?: Prisma.SortOrder;
    repaidKobo?: Prisma.SortOrder;
    markPriceKobo?: Prisma.SortOrder;
    markQty?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortfolioPositionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    contractType?: Prisma.SortOrder;
    isEquity?: Prisma.SortOrder;
    principalKobo?: Prisma.SortOrder;
    ratePct?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    maturityDate?: Prisma.SortOrder;
    repaidKobo?: Prisma.SortOrder;
    markPriceKobo?: Prisma.SortOrder;
    markQty?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortfolioPositionSumOrderByAggregateInput = {
    principalKobo?: Prisma.SortOrder;
    ratePct?: Prisma.SortOrder;
    repaidKobo?: Prisma.SortOrder;
    markPriceKobo?: Prisma.SortOrder;
    markQty?: Prisma.SortOrder;
};
export type PortfolioPositionCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PortfolioPositionCreateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioPositionCreateWithoutLedgerEntityInput[] | Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioPositionCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
};
export type PortfolioPositionUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PortfolioPositionCreateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioPositionCreateWithoutLedgerEntityInput[] | Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioPositionCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
};
export type PortfolioPositionUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioPositionCreateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioPositionCreateWithoutLedgerEntityInput[] | Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PortfolioPositionUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioPositionUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioPositionCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    disconnect?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    delete?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    connect?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    update?: Prisma.PortfolioPositionUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioPositionUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PortfolioPositionUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PortfolioPositionUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PortfolioPositionScalarWhereInput | Prisma.PortfolioPositionScalarWhereInput[];
};
export type PortfolioPositionUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioPositionCreateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioPositionCreateWithoutLedgerEntityInput[] | Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioPositionCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PortfolioPositionUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioPositionUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioPositionCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    disconnect?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    delete?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    connect?: Prisma.PortfolioPositionWhereUniqueInput | Prisma.PortfolioPositionWhereUniqueInput[];
    update?: Prisma.PortfolioPositionUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioPositionUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PortfolioPositionUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PortfolioPositionUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PortfolioPositionScalarWhereInput | Prisma.PortfolioPositionScalarWhereInput[];
};
export type EnumPortfolioPositionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PortfolioPositionStatus;
};
export type PortfolioPositionCreateWithoutLedgerEntityInput = {
    id?: string;
    contractType: string;
    isEquity?: boolean;
    principalKobo: bigint | number;
    ratePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate: Date | string;
    maturityDate?: Date | string | null;
    repaidKobo?: bigint | number;
    markPriceKobo?: bigint | number | null;
    markQty?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.PortfolioPositionStatus;
    createdAt?: Date | string;
};
export type PortfolioPositionUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    contractType: string;
    isEquity?: boolean;
    principalKobo: bigint | number;
    ratePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate: Date | string;
    maturityDate?: Date | string | null;
    repaidKobo?: bigint | number;
    markPriceKobo?: bigint | number | null;
    markQty?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.PortfolioPositionStatus;
    createdAt?: Date | string;
};
export type PortfolioPositionCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.PortfolioPositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioPositionCreateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput>;
};
export type PortfolioPositionCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.PortfolioPositionCreateManyLedgerEntityInput | Prisma.PortfolioPositionCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type PortfolioPositionUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PortfolioPositionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioPositionUpdateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.PortfolioPositionCreateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedCreateWithoutLedgerEntityInput>;
};
export type PortfolioPositionUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PortfolioPositionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioPositionUpdateWithoutLedgerEntityInput, Prisma.PortfolioPositionUncheckedUpdateWithoutLedgerEntityInput>;
};
export type PortfolioPositionUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.PortfolioPositionScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioPositionUpdateManyMutationInput, Prisma.PortfolioPositionUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type PortfolioPositionScalarWhereInput = {
    AND?: Prisma.PortfolioPositionScalarWhereInput | Prisma.PortfolioPositionScalarWhereInput[];
    OR?: Prisma.PortfolioPositionScalarWhereInput[];
    NOT?: Prisma.PortfolioPositionScalarWhereInput | Prisma.PortfolioPositionScalarWhereInput[];
    id?: Prisma.UuidFilter<"PortfolioPosition"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PortfolioPosition"> | string;
    contractType?: Prisma.StringFilter<"PortfolioPosition"> | string;
    isEquity?: Prisma.BoolFilter<"PortfolioPosition"> | boolean;
    principalKobo?: Prisma.BigIntFilter<"PortfolioPosition"> | bigint | number;
    ratePct?: Prisma.DecimalNullableFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFilter<"PortfolioPosition"> | Date | string;
    maturityDate?: Prisma.DateTimeNullableFilter<"PortfolioPosition"> | Date | string | null;
    repaidKobo?: Prisma.BigIntFilter<"PortfolioPosition"> | bigint | number;
    markPriceKobo?: Prisma.BigIntNullableFilter<"PortfolioPosition"> | bigint | number | null;
    markQty?: Prisma.DecimalNullableFilter<"PortfolioPosition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFilter<"PortfolioPosition"> | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFilter<"PortfolioPosition"> | Date | string;
};
export type PortfolioPositionCreateManyLedgerEntityInput = {
    id?: string;
    contractType: string;
    isEquity?: boolean;
    principalKobo: bigint | number;
    ratePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate: Date | string;
    maturityDate?: Date | string | null;
    repaidKobo?: bigint | number;
    markPriceKobo?: bigint | number | null;
    markQty?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.PortfolioPositionStatus;
    createdAt?: Date | string;
};
export type PortfolioPositionUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contractType?: Prisma.StringFieldUpdateOperationsInput | string;
    isEquity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    principalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ratePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maturityDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repaidKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    markPriceKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    markQty?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFieldUpdateOperationsInput | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioPositionUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contractType?: Prisma.StringFieldUpdateOperationsInput | string;
    isEquity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    principalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ratePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maturityDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repaidKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    markPriceKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    markQty?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFieldUpdateOperationsInput | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioPositionUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contractType?: Prisma.StringFieldUpdateOperationsInput | string;
    isEquity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    principalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ratePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    maturityDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repaidKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    markPriceKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    markQty?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumPortfolioPositionStatusFieldUpdateOperationsInput | $Enums.PortfolioPositionStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioPositionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    contractType?: boolean;
    isEquity?: boolean;
    principalKobo?: boolean;
    ratePct?: boolean;
    entryDate?: boolean;
    maturityDate?: boolean;
    repaidKobo?: boolean;
    markPriceKobo?: boolean;
    markQty?: boolean;
    status?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioPosition"]>;
export type PortfolioPositionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    contractType?: boolean;
    isEquity?: boolean;
    principalKobo?: boolean;
    ratePct?: boolean;
    entryDate?: boolean;
    maturityDate?: boolean;
    repaidKobo?: boolean;
    markPriceKobo?: boolean;
    markQty?: boolean;
    status?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioPosition"]>;
export type PortfolioPositionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    contractType?: boolean;
    isEquity?: boolean;
    principalKobo?: boolean;
    ratePct?: boolean;
    entryDate?: boolean;
    maturityDate?: boolean;
    repaidKobo?: boolean;
    markPriceKobo?: boolean;
    markQty?: boolean;
    status?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioPosition"]>;
export type PortfolioPositionSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    contractType?: boolean;
    isEquity?: boolean;
    principalKobo?: boolean;
    ratePct?: boolean;
    entryDate?: boolean;
    maturityDate?: boolean;
    repaidKobo?: boolean;
    markPriceKobo?: boolean;
    markQty?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type PortfolioPositionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "contractType" | "isEquity" | "principalKobo" | "ratePct" | "entryDate" | "maturityDate" | "repaidKobo" | "markPriceKobo" | "markQty" | "status" | "createdAt", ExtArgs["result"]["portfolioPosition"]>;
export type PortfolioPositionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type PortfolioPositionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type PortfolioPositionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type $PortfolioPositionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortfolioPosition";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        contractType: string;
        isEquity: boolean;
        principalKobo: bigint;
        ratePct: runtime.Decimal | null;
        entryDate: Date;
        maturityDate: Date | null;
        repaidKobo: bigint;
        markPriceKobo: bigint | null;
        markQty: runtime.Decimal | null;
        status: $Enums.PortfolioPositionStatus;
        createdAt: Date;
    }, ExtArgs["result"]["portfolioPosition"]>;
    composites: {};
};
export type PortfolioPositionGetPayload<S extends boolean | null | undefined | PortfolioPositionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload, S>;
export type PortfolioPositionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortfolioPositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortfolioPositionCountAggregateInputType | true;
};
export interface PortfolioPositionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortfolioPosition'];
        meta: {
            name: 'PortfolioPosition';
        };
    };
    findUnique<T extends PortfolioPositionFindUniqueArgs>(args: Prisma.SelectSubset<T, PortfolioPositionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortfolioPositionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortfolioPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortfolioPositionFindFirstArgs>(args?: Prisma.SelectSubset<T, PortfolioPositionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortfolioPositionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortfolioPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortfolioPositionFindManyArgs>(args?: Prisma.SelectSubset<T, PortfolioPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortfolioPositionCreateArgs>(args: Prisma.SelectSubset<T, PortfolioPositionCreateArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortfolioPositionCreateManyArgs>(args?: Prisma.SelectSubset<T, PortfolioPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortfolioPositionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortfolioPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortfolioPositionDeleteArgs>(args: Prisma.SelectSubset<T, PortfolioPositionDeleteArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortfolioPositionUpdateArgs>(args: Prisma.SelectSubset<T, PortfolioPositionUpdateArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortfolioPositionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortfolioPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortfolioPositionUpdateManyArgs>(args: Prisma.SelectSubset<T, PortfolioPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortfolioPositionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortfolioPositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortfolioPositionUpsertArgs>(args: Prisma.SelectSubset<T, PortfolioPositionUpsertArgs<ExtArgs>>): Prisma.Prisma__PortfolioPositionClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortfolioPositionCountArgs>(args?: Prisma.Subset<T, PortfolioPositionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortfolioPositionCountAggregateOutputType> : number>;
    aggregate<T extends PortfolioPositionAggregateArgs>(args: Prisma.Subset<T, PortfolioPositionAggregateArgs>): Prisma.PrismaPromise<GetPortfolioPositionAggregateType<T>>;
    groupBy<T extends PortfolioPositionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortfolioPositionGroupByArgs['orderBy'];
    } : {
        orderBy?: PortfolioPositionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortfolioPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortfolioPositionFieldRefs;
}
export interface Prisma__PortfolioPositionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortfolioPositionFieldRefs {
    readonly id: Prisma.FieldRef<"PortfolioPosition", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"PortfolioPosition", 'String'>;
    readonly contractType: Prisma.FieldRef<"PortfolioPosition", 'String'>;
    readonly isEquity: Prisma.FieldRef<"PortfolioPosition", 'Boolean'>;
    readonly principalKobo: Prisma.FieldRef<"PortfolioPosition", 'BigInt'>;
    readonly ratePct: Prisma.FieldRef<"PortfolioPosition", 'Decimal'>;
    readonly entryDate: Prisma.FieldRef<"PortfolioPosition", 'DateTime'>;
    readonly maturityDate: Prisma.FieldRef<"PortfolioPosition", 'DateTime'>;
    readonly repaidKobo: Prisma.FieldRef<"PortfolioPosition", 'BigInt'>;
    readonly markPriceKobo: Prisma.FieldRef<"PortfolioPosition", 'BigInt'>;
    readonly markQty: Prisma.FieldRef<"PortfolioPosition", 'Decimal'>;
    readonly status: Prisma.FieldRef<"PortfolioPosition", 'PortfolioPositionStatus'>;
    readonly createdAt: Prisma.FieldRef<"PortfolioPosition", 'DateTime'>;
}
export type PortfolioPositionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    where: Prisma.PortfolioPositionWhereUniqueInput;
};
export type PortfolioPositionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    where: Prisma.PortfolioPositionWhereUniqueInput;
};
export type PortfolioPositionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    where?: Prisma.PortfolioPositionWhereInput;
    orderBy?: Prisma.PortfolioPositionOrderByWithRelationInput | Prisma.PortfolioPositionOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioPositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioPositionScalarFieldEnum | Prisma.PortfolioPositionScalarFieldEnum[];
};
export type PortfolioPositionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    where?: Prisma.PortfolioPositionWhereInput;
    orderBy?: Prisma.PortfolioPositionOrderByWithRelationInput | Prisma.PortfolioPositionOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioPositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioPositionScalarFieldEnum | Prisma.PortfolioPositionScalarFieldEnum[];
};
export type PortfolioPositionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    where?: Prisma.PortfolioPositionWhereInput;
    orderBy?: Prisma.PortfolioPositionOrderByWithRelationInput | Prisma.PortfolioPositionOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioPositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioPositionScalarFieldEnum | Prisma.PortfolioPositionScalarFieldEnum[];
};
export type PortfolioPositionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioPositionCreateInput, Prisma.PortfolioPositionUncheckedCreateInput>;
};
export type PortfolioPositionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortfolioPositionCreateManyInput | Prisma.PortfolioPositionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioPositionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    data: Prisma.PortfolioPositionCreateManyInput | Prisma.PortfolioPositionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortfolioPositionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortfolioPositionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioPositionUpdateInput, Prisma.PortfolioPositionUncheckedUpdateInput>;
    where: Prisma.PortfolioPositionWhereUniqueInput;
};
export type PortfolioPositionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortfolioPositionUpdateManyMutationInput, Prisma.PortfolioPositionUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioPositionWhereInput;
    limit?: number;
};
export type PortfolioPositionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioPositionUpdateManyMutationInput, Prisma.PortfolioPositionUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioPositionWhereInput;
    limit?: number;
    include?: Prisma.PortfolioPositionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortfolioPositionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    where: Prisma.PortfolioPositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioPositionCreateInput, Prisma.PortfolioPositionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortfolioPositionUpdateInput, Prisma.PortfolioPositionUncheckedUpdateInput>;
};
export type PortfolioPositionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
    where: Prisma.PortfolioPositionWhereUniqueInput;
};
export type PortfolioPositionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioPositionWhereInput;
    limit?: number;
};
export type PortfolioPositionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioPositionSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioPositionOmit<ExtArgs> | null;
    include?: Prisma.PortfolioPositionInclude<ExtArgs> | null;
};
