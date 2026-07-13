import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NavRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$NavRecordPayload>;
export type AggregateNavRecord = {
    _count: NavRecordCountAggregateOutputType | null;
    _avg: NavRecordAvgAggregateOutputType | null;
    _sum: NavRecordSumAggregateOutputType | null;
    _min: NavRecordMinAggregateOutputType | null;
    _max: NavRecordMaxAggregateOutputType | null;
};
export type NavRecordAvgAggregateOutputType = {
    portfolioMktValKobo: number | null;
    uninvestedCashKobo: number | null;
    accruedUnpaidFeesKobo: number | null;
    totalNavKobo: number | null;
    unitsOutstanding: runtime.Decimal | null;
    navPerUnit: runtime.Decimal | null;
    offerPrice: runtime.Decimal | null;
    bidPrice: runtime.Decimal | null;
};
export type NavRecordSumAggregateOutputType = {
    portfolioMktValKobo: bigint | null;
    uninvestedCashKobo: bigint | null;
    accruedUnpaidFeesKobo: bigint | null;
    totalNavKobo: bigint | null;
    unitsOutstanding: runtime.Decimal | null;
    navPerUnit: runtime.Decimal | null;
    offerPrice: runtime.Decimal | null;
    bidPrice: runtime.Decimal | null;
};
export type NavRecordMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    valuationDate: Date | null;
    portfolioMktValKobo: bigint | null;
    uninvestedCashKobo: bigint | null;
    accruedUnpaidFeesKobo: bigint | null;
    totalNavKobo: bigint | null;
    unitsOutstanding: runtime.Decimal | null;
    navPerUnit: runtime.Decimal | null;
    offerPrice: runtime.Decimal | null;
    bidPrice: runtime.Decimal | null;
    isLocked: boolean | null;
    lockedAt: Date | null;
    createdAt: Date | null;
};
export type NavRecordMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    valuationDate: Date | null;
    portfolioMktValKobo: bigint | null;
    uninvestedCashKobo: bigint | null;
    accruedUnpaidFeesKobo: bigint | null;
    totalNavKobo: bigint | null;
    unitsOutstanding: runtime.Decimal | null;
    navPerUnit: runtime.Decimal | null;
    offerPrice: runtime.Decimal | null;
    bidPrice: runtime.Decimal | null;
    isLocked: boolean | null;
    lockedAt: Date | null;
    createdAt: Date | null;
};
export type NavRecordCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    valuationDate: number;
    portfolioMktValKobo: number;
    uninvestedCashKobo: number;
    accruedUnpaidFeesKobo: number;
    totalNavKobo: number;
    unitsOutstanding: number;
    navPerUnit: number;
    offerPrice: number;
    bidPrice: number;
    isLocked: number;
    lockedAt: number;
    createdAt: number;
    _all: number;
};
export type NavRecordAvgAggregateInputType = {
    portfolioMktValKobo?: true;
    uninvestedCashKobo?: true;
    accruedUnpaidFeesKobo?: true;
    totalNavKobo?: true;
    unitsOutstanding?: true;
    navPerUnit?: true;
    offerPrice?: true;
    bidPrice?: true;
};
export type NavRecordSumAggregateInputType = {
    portfolioMktValKobo?: true;
    uninvestedCashKobo?: true;
    accruedUnpaidFeesKobo?: true;
    totalNavKobo?: true;
    unitsOutstanding?: true;
    navPerUnit?: true;
    offerPrice?: true;
    bidPrice?: true;
};
export type NavRecordMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    valuationDate?: true;
    portfolioMktValKobo?: true;
    uninvestedCashKobo?: true;
    accruedUnpaidFeesKobo?: true;
    totalNavKobo?: true;
    unitsOutstanding?: true;
    navPerUnit?: true;
    offerPrice?: true;
    bidPrice?: true;
    isLocked?: true;
    lockedAt?: true;
    createdAt?: true;
};
export type NavRecordMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    valuationDate?: true;
    portfolioMktValKobo?: true;
    uninvestedCashKobo?: true;
    accruedUnpaidFeesKobo?: true;
    totalNavKobo?: true;
    unitsOutstanding?: true;
    navPerUnit?: true;
    offerPrice?: true;
    bidPrice?: true;
    isLocked?: true;
    lockedAt?: true;
    createdAt?: true;
};
export type NavRecordCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    valuationDate?: true;
    portfolioMktValKobo?: true;
    uninvestedCashKobo?: true;
    accruedUnpaidFeesKobo?: true;
    totalNavKobo?: true;
    unitsOutstanding?: true;
    navPerUnit?: true;
    offerPrice?: true;
    bidPrice?: true;
    isLocked?: true;
    lockedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type NavRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NavRecordWhereInput;
    orderBy?: Prisma.NavRecordOrderByWithRelationInput | Prisma.NavRecordOrderByWithRelationInput[];
    cursor?: Prisma.NavRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NavRecordCountAggregateInputType;
    _avg?: NavRecordAvgAggregateInputType;
    _sum?: NavRecordSumAggregateInputType;
    _min?: NavRecordMinAggregateInputType;
    _max?: NavRecordMaxAggregateInputType;
};
export type GetNavRecordAggregateType<T extends NavRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateNavRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNavRecord[P]> : Prisma.GetScalarType<T[P], AggregateNavRecord[P]>;
};
export type NavRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NavRecordWhereInput;
    orderBy?: Prisma.NavRecordOrderByWithAggregationInput | Prisma.NavRecordOrderByWithAggregationInput[];
    by: Prisma.NavRecordScalarFieldEnum[] | Prisma.NavRecordScalarFieldEnum;
    having?: Prisma.NavRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NavRecordCountAggregateInputType | true;
    _avg?: NavRecordAvgAggregateInputType;
    _sum?: NavRecordSumAggregateInputType;
    _min?: NavRecordMinAggregateInputType;
    _max?: NavRecordMaxAggregateInputType;
};
export type NavRecordGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    valuationDate: Date;
    portfolioMktValKobo: bigint;
    uninvestedCashKobo: bigint;
    accruedUnpaidFeesKobo: bigint;
    totalNavKobo: bigint;
    unitsOutstanding: runtime.Decimal;
    navPerUnit: runtime.Decimal;
    offerPrice: runtime.Decimal;
    bidPrice: runtime.Decimal;
    isLocked: boolean;
    lockedAt: Date | null;
    createdAt: Date;
    _count: NavRecordCountAggregateOutputType | null;
    _avg: NavRecordAvgAggregateOutputType | null;
    _sum: NavRecordSumAggregateOutputType | null;
    _min: NavRecordMinAggregateOutputType | null;
    _max: NavRecordMaxAggregateOutputType | null;
};
export type GetNavRecordGroupByPayload<T extends NavRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NavRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NavRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NavRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NavRecordGroupByOutputType[P]>;
}>>;
export type NavRecordWhereInput = {
    AND?: Prisma.NavRecordWhereInput | Prisma.NavRecordWhereInput[];
    OR?: Prisma.NavRecordWhereInput[];
    NOT?: Prisma.NavRecordWhereInput | Prisma.NavRecordWhereInput[];
    id?: Prisma.UuidFilter<"NavRecord"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"NavRecord"> | string;
    valuationDate?: Prisma.DateTimeFilter<"NavRecord"> | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    totalNavKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    unitsOutstanding?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFilter<"NavRecord"> | boolean;
    lockedAt?: Prisma.DateTimeNullableFilter<"NavRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NavRecord"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
};
export type NavRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    portfolioMktValKobo?: Prisma.SortOrder;
    uninvestedCashKobo?: Prisma.SortOrder;
    accruedUnpaidFeesKobo?: Prisma.SortOrder;
    totalNavKobo?: Prisma.SortOrder;
    unitsOutstanding?: Prisma.SortOrder;
    navPerUnit?: Prisma.SortOrder;
    offerPrice?: Prisma.SortOrder;
    bidPrice?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
};
export type NavRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ledgerEntityCode_valuationDate?: Prisma.NavRecordLedgerEntityCodeValuationDateCompoundUniqueInput;
    AND?: Prisma.NavRecordWhereInput | Prisma.NavRecordWhereInput[];
    OR?: Prisma.NavRecordWhereInput[];
    NOT?: Prisma.NavRecordWhereInput | Prisma.NavRecordWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"NavRecord"> | string;
    valuationDate?: Prisma.DateTimeFilter<"NavRecord"> | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    totalNavKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    unitsOutstanding?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFilter<"NavRecord"> | boolean;
    lockedAt?: Prisma.DateTimeNullableFilter<"NavRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NavRecord"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
}, "id" | "ledgerEntityCode_valuationDate">;
export type NavRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    portfolioMktValKobo?: Prisma.SortOrder;
    uninvestedCashKobo?: Prisma.SortOrder;
    accruedUnpaidFeesKobo?: Prisma.SortOrder;
    totalNavKobo?: Prisma.SortOrder;
    unitsOutstanding?: Prisma.SortOrder;
    navPerUnit?: Prisma.SortOrder;
    offerPrice?: Prisma.SortOrder;
    bidPrice?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.NavRecordCountOrderByAggregateInput;
    _avg?: Prisma.NavRecordAvgOrderByAggregateInput;
    _max?: Prisma.NavRecordMaxOrderByAggregateInput;
    _min?: Prisma.NavRecordMinOrderByAggregateInput;
    _sum?: Prisma.NavRecordSumOrderByAggregateInput;
};
export type NavRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.NavRecordScalarWhereWithAggregatesInput | Prisma.NavRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.NavRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NavRecordScalarWhereWithAggregatesInput | Prisma.NavRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"NavRecord"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"NavRecord"> | string;
    valuationDate?: Prisma.DateTimeWithAggregatesFilter<"NavRecord"> | Date | string;
    portfolioMktValKobo?: Prisma.BigIntWithAggregatesFilter<"NavRecord"> | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntWithAggregatesFilter<"NavRecord"> | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntWithAggregatesFilter<"NavRecord"> | bigint | number;
    totalNavKobo?: Prisma.BigIntWithAggregatesFilter<"NavRecord"> | bigint | number;
    unitsOutstanding?: Prisma.DecimalWithAggregatesFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalWithAggregatesFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalWithAggregatesFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalWithAggregatesFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolWithAggregatesFilter<"NavRecord"> | boolean;
    lockedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"NavRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"NavRecord"> | Date | string;
};
export type NavRecordCreateInput = {
    id?: string;
    valuationDate: Date | string;
    portfolioMktValKobo: bigint | number;
    uninvestedCashKobo: bigint | number;
    accruedUnpaidFeesKobo: bigint | number;
    totalNavKobo: bigint | number;
    unitsOutstanding: runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: boolean;
    lockedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutNavRecordsInput;
};
export type NavRecordUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    portfolioMktValKobo: bigint | number;
    uninvestedCashKobo: bigint | number;
    accruedUnpaidFeesKobo: bigint | number;
    totalNavKobo: bigint | number;
    unitsOutstanding: runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: boolean;
    lockedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NavRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNavKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    unitsOutstanding?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutNavRecordsNestedInput;
};
export type NavRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNavKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    unitsOutstanding?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NavRecordCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    portfolioMktValKobo: bigint | number;
    uninvestedCashKobo: bigint | number;
    accruedUnpaidFeesKobo: bigint | number;
    totalNavKobo: bigint | number;
    unitsOutstanding: runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: boolean;
    lockedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NavRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNavKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    unitsOutstanding?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NavRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNavKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    unitsOutstanding?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NavRecordListRelationFilter = {
    every?: Prisma.NavRecordWhereInput;
    some?: Prisma.NavRecordWhereInput;
    none?: Prisma.NavRecordWhereInput;
};
export type NavRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NavRecordLedgerEntityCodeValuationDateCompoundUniqueInput = {
    ledgerEntityCode: string;
    valuationDate: Date | string;
};
export type NavRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    portfolioMktValKobo?: Prisma.SortOrder;
    uninvestedCashKobo?: Prisma.SortOrder;
    accruedUnpaidFeesKobo?: Prisma.SortOrder;
    totalNavKobo?: Prisma.SortOrder;
    unitsOutstanding?: Prisma.SortOrder;
    navPerUnit?: Prisma.SortOrder;
    offerPrice?: Prisma.SortOrder;
    bidPrice?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NavRecordAvgOrderByAggregateInput = {
    portfolioMktValKobo?: Prisma.SortOrder;
    uninvestedCashKobo?: Prisma.SortOrder;
    accruedUnpaidFeesKobo?: Prisma.SortOrder;
    totalNavKobo?: Prisma.SortOrder;
    unitsOutstanding?: Prisma.SortOrder;
    navPerUnit?: Prisma.SortOrder;
    offerPrice?: Prisma.SortOrder;
    bidPrice?: Prisma.SortOrder;
};
export type NavRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    portfolioMktValKobo?: Prisma.SortOrder;
    uninvestedCashKobo?: Prisma.SortOrder;
    accruedUnpaidFeesKobo?: Prisma.SortOrder;
    totalNavKobo?: Prisma.SortOrder;
    unitsOutstanding?: Prisma.SortOrder;
    navPerUnit?: Prisma.SortOrder;
    offerPrice?: Prisma.SortOrder;
    bidPrice?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NavRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    portfolioMktValKobo?: Prisma.SortOrder;
    uninvestedCashKobo?: Prisma.SortOrder;
    accruedUnpaidFeesKobo?: Prisma.SortOrder;
    totalNavKobo?: Prisma.SortOrder;
    unitsOutstanding?: Prisma.SortOrder;
    navPerUnit?: Prisma.SortOrder;
    offerPrice?: Prisma.SortOrder;
    bidPrice?: Prisma.SortOrder;
    isLocked?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NavRecordSumOrderByAggregateInput = {
    portfolioMktValKobo?: Prisma.SortOrder;
    uninvestedCashKobo?: Prisma.SortOrder;
    accruedUnpaidFeesKobo?: Prisma.SortOrder;
    totalNavKobo?: Prisma.SortOrder;
    unitsOutstanding?: Prisma.SortOrder;
    navPerUnit?: Prisma.SortOrder;
    offerPrice?: Prisma.SortOrder;
    bidPrice?: Prisma.SortOrder;
};
export type NavRecordCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.NavRecordCreateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.NavRecordCreateWithoutLedgerEntityInput[] | Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.NavRecordCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
};
export type NavRecordUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.NavRecordCreateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.NavRecordCreateWithoutLedgerEntityInput[] | Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.NavRecordCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
};
export type NavRecordUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.NavRecordCreateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.NavRecordCreateWithoutLedgerEntityInput[] | Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.NavRecordUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.NavRecordUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.NavRecordCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    disconnect?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    delete?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    connect?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    update?: Prisma.NavRecordUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.NavRecordUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.NavRecordUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.NavRecordUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.NavRecordScalarWhereInput | Prisma.NavRecordScalarWhereInput[];
};
export type NavRecordUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.NavRecordCreateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput> | Prisma.NavRecordCreateWithoutLedgerEntityInput[] | Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput | Prisma.NavRecordCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.NavRecordUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.NavRecordUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.NavRecordCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    disconnect?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    delete?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    connect?: Prisma.NavRecordWhereUniqueInput | Prisma.NavRecordWhereUniqueInput[];
    update?: Prisma.NavRecordUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.NavRecordUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.NavRecordUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.NavRecordUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.NavRecordScalarWhereInput | Prisma.NavRecordScalarWhereInput[];
};
export type NavRecordCreateWithoutLedgerEntityInput = {
    id?: string;
    valuationDate: Date | string;
    portfolioMktValKobo: bigint | number;
    uninvestedCashKobo: bigint | number;
    accruedUnpaidFeesKobo: bigint | number;
    totalNavKobo: bigint | number;
    unitsOutstanding: runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: boolean;
    lockedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NavRecordUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    valuationDate: Date | string;
    portfolioMktValKobo: bigint | number;
    uninvestedCashKobo: bigint | number;
    accruedUnpaidFeesKobo: bigint | number;
    totalNavKobo: bigint | number;
    unitsOutstanding: runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: boolean;
    lockedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NavRecordCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.NavRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.NavRecordCreateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput>;
};
export type NavRecordCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.NavRecordCreateManyLedgerEntityInput | Prisma.NavRecordCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type NavRecordUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.NavRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.NavRecordUpdateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.NavRecordCreateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedCreateWithoutLedgerEntityInput>;
};
export type NavRecordUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.NavRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.NavRecordUpdateWithoutLedgerEntityInput, Prisma.NavRecordUncheckedUpdateWithoutLedgerEntityInput>;
};
export type NavRecordUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.NavRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.NavRecordUpdateManyMutationInput, Prisma.NavRecordUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type NavRecordScalarWhereInput = {
    AND?: Prisma.NavRecordScalarWhereInput | Prisma.NavRecordScalarWhereInput[];
    OR?: Prisma.NavRecordScalarWhereInput[];
    NOT?: Prisma.NavRecordScalarWhereInput | Prisma.NavRecordScalarWhereInput[];
    id?: Prisma.UuidFilter<"NavRecord"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"NavRecord"> | string;
    valuationDate?: Prisma.DateTimeFilter<"NavRecord"> | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    totalNavKobo?: Prisma.BigIntFilter<"NavRecord"> | bigint | number;
    unitsOutstanding?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFilter<"NavRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFilter<"NavRecord"> | boolean;
    lockedAt?: Prisma.DateTimeNullableFilter<"NavRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NavRecord"> | Date | string;
};
export type NavRecordCreateManyLedgerEntityInput = {
    id?: string;
    valuationDate: Date | string;
    portfolioMktValKobo: bigint | number;
    uninvestedCashKobo: bigint | number;
    accruedUnpaidFeesKobo: bigint | number;
    totalNavKobo: bigint | number;
    unitsOutstanding: runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: boolean;
    lockedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NavRecordUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNavKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    unitsOutstanding?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NavRecordUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNavKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    unitsOutstanding?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NavRecordUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    portfolioMktValKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    uninvestedCashKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accruedUnpaidFeesKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNavKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    unitsOutstanding?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    navPerUnit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isLocked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NavRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    portfolioMktValKobo?: boolean;
    uninvestedCashKobo?: boolean;
    accruedUnpaidFeesKobo?: boolean;
    totalNavKobo?: boolean;
    unitsOutstanding?: boolean;
    navPerUnit?: boolean;
    offerPrice?: boolean;
    bidPrice?: boolean;
    isLocked?: boolean;
    lockedAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["navRecord"]>;
export type NavRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    portfolioMktValKobo?: boolean;
    uninvestedCashKobo?: boolean;
    accruedUnpaidFeesKobo?: boolean;
    totalNavKobo?: boolean;
    unitsOutstanding?: boolean;
    navPerUnit?: boolean;
    offerPrice?: boolean;
    bidPrice?: boolean;
    isLocked?: boolean;
    lockedAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["navRecord"]>;
export type NavRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    portfolioMktValKobo?: boolean;
    uninvestedCashKobo?: boolean;
    accruedUnpaidFeesKobo?: boolean;
    totalNavKobo?: boolean;
    unitsOutstanding?: boolean;
    navPerUnit?: boolean;
    offerPrice?: boolean;
    bidPrice?: boolean;
    isLocked?: boolean;
    lockedAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["navRecord"]>;
export type NavRecordSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    portfolioMktValKobo?: boolean;
    uninvestedCashKobo?: boolean;
    accruedUnpaidFeesKobo?: boolean;
    totalNavKobo?: boolean;
    unitsOutstanding?: boolean;
    navPerUnit?: boolean;
    offerPrice?: boolean;
    bidPrice?: boolean;
    isLocked?: boolean;
    lockedAt?: boolean;
    createdAt?: boolean;
};
export type NavRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "valuationDate" | "portfolioMktValKobo" | "uninvestedCashKobo" | "accruedUnpaidFeesKobo" | "totalNavKobo" | "unitsOutstanding" | "navPerUnit" | "offerPrice" | "bidPrice" | "isLocked" | "lockedAt" | "createdAt", ExtArgs["result"]["navRecord"]>;
export type NavRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type NavRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type NavRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type $NavRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NavRecord";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        valuationDate: Date;
        portfolioMktValKobo: bigint;
        uninvestedCashKobo: bigint;
        accruedUnpaidFeesKobo: bigint;
        totalNavKobo: bigint;
        unitsOutstanding: runtime.Decimal;
        navPerUnit: runtime.Decimal;
        offerPrice: runtime.Decimal;
        bidPrice: runtime.Decimal;
        isLocked: boolean;
        lockedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["navRecord"]>;
    composites: {};
};
export type NavRecordGetPayload<S extends boolean | null | undefined | NavRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NavRecordPayload, S>;
export type NavRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NavRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NavRecordCountAggregateInputType | true;
};
export interface NavRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NavRecord'];
        meta: {
            name: 'NavRecord';
        };
    };
    findUnique<T extends NavRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, NavRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NavRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NavRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NavRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, NavRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NavRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NavRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NavRecordFindManyArgs>(args?: Prisma.SelectSubset<T, NavRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NavRecordCreateArgs>(args: Prisma.SelectSubset<T, NavRecordCreateArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NavRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, NavRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NavRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NavRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NavRecordDeleteArgs>(args: Prisma.SelectSubset<T, NavRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NavRecordUpdateArgs>(args: Prisma.SelectSubset<T, NavRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NavRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, NavRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NavRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, NavRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NavRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NavRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NavRecordUpsertArgs>(args: Prisma.SelectSubset<T, NavRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__NavRecordClient<runtime.Types.Result.GetResult<Prisma.$NavRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NavRecordCountArgs>(args?: Prisma.Subset<T, NavRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NavRecordCountAggregateOutputType> : number>;
    aggregate<T extends NavRecordAggregateArgs>(args: Prisma.Subset<T, NavRecordAggregateArgs>): Prisma.PrismaPromise<GetNavRecordAggregateType<T>>;
    groupBy<T extends NavRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NavRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: NavRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NavRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NavRecordFieldRefs;
}
export interface Prisma__NavRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NavRecordFieldRefs {
    readonly id: Prisma.FieldRef<"NavRecord", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"NavRecord", 'String'>;
    readonly valuationDate: Prisma.FieldRef<"NavRecord", 'DateTime'>;
    readonly portfolioMktValKobo: Prisma.FieldRef<"NavRecord", 'BigInt'>;
    readonly uninvestedCashKobo: Prisma.FieldRef<"NavRecord", 'BigInt'>;
    readonly accruedUnpaidFeesKobo: Prisma.FieldRef<"NavRecord", 'BigInt'>;
    readonly totalNavKobo: Prisma.FieldRef<"NavRecord", 'BigInt'>;
    readonly unitsOutstanding: Prisma.FieldRef<"NavRecord", 'Decimal'>;
    readonly navPerUnit: Prisma.FieldRef<"NavRecord", 'Decimal'>;
    readonly offerPrice: Prisma.FieldRef<"NavRecord", 'Decimal'>;
    readonly bidPrice: Prisma.FieldRef<"NavRecord", 'Decimal'>;
    readonly isLocked: Prisma.FieldRef<"NavRecord", 'Boolean'>;
    readonly lockedAt: Prisma.FieldRef<"NavRecord", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"NavRecord", 'DateTime'>;
}
export type NavRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    where: Prisma.NavRecordWhereUniqueInput;
};
export type NavRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    where: Prisma.NavRecordWhereUniqueInput;
};
export type NavRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    where?: Prisma.NavRecordWhereInput;
    orderBy?: Prisma.NavRecordOrderByWithRelationInput | Prisma.NavRecordOrderByWithRelationInput[];
    cursor?: Prisma.NavRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NavRecordScalarFieldEnum | Prisma.NavRecordScalarFieldEnum[];
};
export type NavRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    where?: Prisma.NavRecordWhereInput;
    orderBy?: Prisma.NavRecordOrderByWithRelationInput | Prisma.NavRecordOrderByWithRelationInput[];
    cursor?: Prisma.NavRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NavRecordScalarFieldEnum | Prisma.NavRecordScalarFieldEnum[];
};
export type NavRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    where?: Prisma.NavRecordWhereInput;
    orderBy?: Prisma.NavRecordOrderByWithRelationInput | Prisma.NavRecordOrderByWithRelationInput[];
    cursor?: Prisma.NavRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NavRecordScalarFieldEnum | Prisma.NavRecordScalarFieldEnum[];
};
export type NavRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NavRecordCreateInput, Prisma.NavRecordUncheckedCreateInput>;
};
export type NavRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NavRecordCreateManyInput | Prisma.NavRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NavRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    data: Prisma.NavRecordCreateManyInput | Prisma.NavRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NavRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NavRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NavRecordUpdateInput, Prisma.NavRecordUncheckedUpdateInput>;
    where: Prisma.NavRecordWhereUniqueInput;
};
export type NavRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NavRecordUpdateManyMutationInput, Prisma.NavRecordUncheckedUpdateManyInput>;
    where?: Prisma.NavRecordWhereInput;
    limit?: number;
};
export type NavRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NavRecordUpdateManyMutationInput, Prisma.NavRecordUncheckedUpdateManyInput>;
    where?: Prisma.NavRecordWhereInput;
    limit?: number;
    include?: Prisma.NavRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NavRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    where: Prisma.NavRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.NavRecordCreateInput, Prisma.NavRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NavRecordUpdateInput, Prisma.NavRecordUncheckedUpdateInput>;
};
export type NavRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
    where: Prisma.NavRecordWhereUniqueInput;
};
export type NavRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NavRecordWhereInput;
    limit?: number;
};
export type NavRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NavRecordSelect<ExtArgs> | null;
    omit?: Prisma.NavRecordOmit<ExtArgs> | null;
    include?: Prisma.NavRecordInclude<ExtArgs> | null;
};
