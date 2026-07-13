import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortfolioMarketValueEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$PortfolioMarketValueEntryPayload>;
export type AggregatePortfolioMarketValueEntry = {
    _count: PortfolioMarketValueEntryCountAggregateOutputType | null;
    _avg: PortfolioMarketValueEntryAvgAggregateOutputType | null;
    _sum: PortfolioMarketValueEntrySumAggregateOutputType | null;
    _min: PortfolioMarketValueEntryMinAggregateOutputType | null;
    _max: PortfolioMarketValueEntryMaxAggregateOutputType | null;
};
export type PortfolioMarketValueEntryAvgAggregateOutputType = {
    version: number | null;
    marketValueKobo: number | null;
};
export type PortfolioMarketValueEntrySumAggregateOutputType = {
    version: number | null;
    marketValueKobo: bigint | null;
};
export type PortfolioMarketValueEntryMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    valuationDate: Date | null;
    version: number | null;
    marketValueKobo: bigint | null;
    status: $Enums.GovernedItemStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
};
export type PortfolioMarketValueEntryMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    valuationDate: Date | null;
    version: number | null;
    marketValueKobo: bigint | null;
    status: $Enums.GovernedItemStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
};
export type PortfolioMarketValueEntryCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    valuationDate: number;
    version: number;
    marketValueKobo: number;
    status: number;
    proposedByUserId: number;
    approvedByUserId: number;
    approvedAt: number;
    createdAt: number;
    _all: number;
};
export type PortfolioMarketValueEntryAvgAggregateInputType = {
    version?: true;
    marketValueKobo?: true;
};
export type PortfolioMarketValueEntrySumAggregateInputType = {
    version?: true;
    marketValueKobo?: true;
};
export type PortfolioMarketValueEntryMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    valuationDate?: true;
    version?: true;
    marketValueKobo?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    createdAt?: true;
};
export type PortfolioMarketValueEntryMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    valuationDate?: true;
    version?: true;
    marketValueKobo?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    createdAt?: true;
};
export type PortfolioMarketValueEntryCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    valuationDate?: true;
    version?: true;
    marketValueKobo?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type PortfolioMarketValueEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    orderBy?: Prisma.PortfolioMarketValueEntryOrderByWithRelationInput | Prisma.PortfolioMarketValueEntryOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortfolioMarketValueEntryCountAggregateInputType;
    _avg?: PortfolioMarketValueEntryAvgAggregateInputType;
    _sum?: PortfolioMarketValueEntrySumAggregateInputType;
    _min?: PortfolioMarketValueEntryMinAggregateInputType;
    _max?: PortfolioMarketValueEntryMaxAggregateInputType;
};
export type GetPortfolioMarketValueEntryAggregateType<T extends PortfolioMarketValueEntryAggregateArgs> = {
    [P in keyof T & keyof AggregatePortfolioMarketValueEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortfolioMarketValueEntry[P]> : Prisma.GetScalarType<T[P], AggregatePortfolioMarketValueEntry[P]>;
};
export type PortfolioMarketValueEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    orderBy?: Prisma.PortfolioMarketValueEntryOrderByWithAggregationInput | Prisma.PortfolioMarketValueEntryOrderByWithAggregationInput[];
    by: Prisma.PortfolioMarketValueEntryScalarFieldEnum[] | Prisma.PortfolioMarketValueEntryScalarFieldEnum;
    having?: Prisma.PortfolioMarketValueEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortfolioMarketValueEntryCountAggregateInputType | true;
    _avg?: PortfolioMarketValueEntryAvgAggregateInputType;
    _sum?: PortfolioMarketValueEntrySumAggregateInputType;
    _min?: PortfolioMarketValueEntryMinAggregateInputType;
    _max?: PortfolioMarketValueEntryMaxAggregateInputType;
};
export type PortfolioMarketValueEntryGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    valuationDate: Date;
    version: number;
    marketValueKobo: bigint;
    status: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    createdAt: Date;
    _count: PortfolioMarketValueEntryCountAggregateOutputType | null;
    _avg: PortfolioMarketValueEntryAvgAggregateOutputType | null;
    _sum: PortfolioMarketValueEntrySumAggregateOutputType | null;
    _min: PortfolioMarketValueEntryMinAggregateOutputType | null;
    _max: PortfolioMarketValueEntryMaxAggregateOutputType | null;
};
export type GetPortfolioMarketValueEntryGroupByPayload<T extends PortfolioMarketValueEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortfolioMarketValueEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortfolioMarketValueEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortfolioMarketValueEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortfolioMarketValueEntryGroupByOutputType[P]>;
}>>;
export type PortfolioMarketValueEntryWhereInput = {
    AND?: Prisma.PortfolioMarketValueEntryWhereInput | Prisma.PortfolioMarketValueEntryWhereInput[];
    OR?: Prisma.PortfolioMarketValueEntryWhereInput[];
    NOT?: Prisma.PortfolioMarketValueEntryWhereInput | Prisma.PortfolioMarketValueEntryWhereInput[];
    id?: Prisma.UuidFilter<"PortfolioMarketValueEntry"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PortfolioMarketValueEntry"> | string;
    valuationDate?: Prisma.DateTimeFilter<"PortfolioMarketValueEntry"> | Date | string;
    version?: Prisma.IntFilter<"PortfolioMarketValueEntry"> | number;
    marketValueKobo?: Prisma.BigIntFilter<"PortfolioMarketValueEntry"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"PortfolioMarketValueEntry"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidFilter<"PortfolioMarketValueEntry"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"PortfolioMarketValueEntry"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"PortfolioMarketValueEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortfolioMarketValueEntry"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    proposedByUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedByUser?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type PortfolioMarketValueEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    marketValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    proposedByUser?: Prisma.AppUserOrderByWithRelationInput;
    approvedByUser?: Prisma.AppUserOrderByWithRelationInput;
};
export type PortfolioMarketValueEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ledgerEntityCode_valuationDate_version?: Prisma.PortfolioMarketValueEntryLedgerEntityCodeValuationDateVersionCompoundUniqueInput;
    AND?: Prisma.PortfolioMarketValueEntryWhereInput | Prisma.PortfolioMarketValueEntryWhereInput[];
    OR?: Prisma.PortfolioMarketValueEntryWhereInput[];
    NOT?: Prisma.PortfolioMarketValueEntryWhereInput | Prisma.PortfolioMarketValueEntryWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"PortfolioMarketValueEntry"> | string;
    valuationDate?: Prisma.DateTimeFilter<"PortfolioMarketValueEntry"> | Date | string;
    version?: Prisma.IntFilter<"PortfolioMarketValueEntry"> | number;
    marketValueKobo?: Prisma.BigIntFilter<"PortfolioMarketValueEntry"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"PortfolioMarketValueEntry"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidFilter<"PortfolioMarketValueEntry"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"PortfolioMarketValueEntry"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"PortfolioMarketValueEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortfolioMarketValueEntry"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    proposedByUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedByUser?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "ledgerEntityCode_valuationDate_version">;
export type PortfolioMarketValueEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    marketValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PortfolioMarketValueEntryCountOrderByAggregateInput;
    _avg?: Prisma.PortfolioMarketValueEntryAvgOrderByAggregateInput;
    _max?: Prisma.PortfolioMarketValueEntryMaxOrderByAggregateInput;
    _min?: Prisma.PortfolioMarketValueEntryMinOrderByAggregateInput;
    _sum?: Prisma.PortfolioMarketValueEntrySumOrderByAggregateInput;
};
export type PortfolioMarketValueEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortfolioMarketValueEntryScalarWhereWithAggregatesInput | Prisma.PortfolioMarketValueEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortfolioMarketValueEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortfolioMarketValueEntryScalarWhereWithAggregatesInput | Prisma.PortfolioMarketValueEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PortfolioMarketValueEntry"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"PortfolioMarketValueEntry"> | string;
    valuationDate?: Prisma.DateTimeWithAggregatesFilter<"PortfolioMarketValueEntry"> | Date | string;
    version?: Prisma.IntWithAggregatesFilter<"PortfolioMarketValueEntry"> | number;
    marketValueKobo?: Prisma.BigIntWithAggregatesFilter<"PortfolioMarketValueEntry"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"PortfolioMarketValueEntry"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidWithAggregatesFilter<"PortfolioMarketValueEntry"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PortfolioMarketValueEntry"> | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PortfolioMarketValueEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PortfolioMarketValueEntry"> | Date | string;
};
export type PortfolioMarketValueEntryCreateInput = {
    id?: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPortfolioMarketValueEntriesInput;
    proposedByUser: Prisma.AppUserCreateNestedOneWithoutPortfolioMarketValueEntriesProposedInput;
    approvedByUser?: Prisma.AppUserCreateNestedOneWithoutPortfolioMarketValueEntriesApprovedInput;
};
export type PortfolioMarketValueEntryUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPortfolioMarketValueEntriesNestedInput;
    proposedByUser?: Prisma.AppUserUpdateOneRequiredWithoutPortfolioMarketValueEntriesProposedNestedInput;
    approvedByUser?: Prisma.AppUserUpdateOneWithoutPortfolioMarketValueEntriesApprovedNestedInput;
};
export type PortfolioMarketValueEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryListRelationFilter = {
    every?: Prisma.PortfolioMarketValueEntryWhereInput;
    some?: Prisma.PortfolioMarketValueEntryWhereInput;
    none?: Prisma.PortfolioMarketValueEntryWhereInput;
};
export type PortfolioMarketValueEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortfolioMarketValueEntryLedgerEntityCodeValuationDateVersionCompoundUniqueInput = {
    ledgerEntityCode: string;
    valuationDate: Date | string;
    version: number;
};
export type PortfolioMarketValueEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    marketValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortfolioMarketValueEntryAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    marketValueKobo?: Prisma.SortOrder;
};
export type PortfolioMarketValueEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    marketValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortfolioMarketValueEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    marketValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortfolioMarketValueEntrySumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    marketValueKobo?: Prisma.SortOrder;
};
export type PortfolioMarketValueEntryCreateNestedManyWithoutProposedByUserInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyProposedByUserInputEnvelope;
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
};
export type PortfolioMarketValueEntryCreateNestedManyWithoutApprovedByUserInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyApprovedByUserInputEnvelope;
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
};
export type PortfolioMarketValueEntryUncheckedCreateNestedManyWithoutProposedByUserInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyProposedByUserInputEnvelope;
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
};
export type PortfolioMarketValueEntryUncheckedCreateNestedManyWithoutApprovedByUserInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyApprovedByUserInputEnvelope;
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
};
export type PortfolioMarketValueEntryUpdateManyWithoutProposedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput[];
    upsert?: Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutProposedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyProposedByUserInputEnvelope;
    set?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    delete?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    update?: Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutProposedByUserInput[];
    updateMany?: Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutProposedByUserInput[];
    deleteMany?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
};
export type PortfolioMarketValueEntryUpdateManyWithoutApprovedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput[];
    upsert?: Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutApprovedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyApprovedByUserInputEnvelope;
    set?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    delete?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    update?: Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutApprovedByUserInput[];
    updateMany?: Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutApprovedByUserInput[];
    deleteMany?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
};
export type PortfolioMarketValueEntryUncheckedUpdateManyWithoutProposedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput[];
    upsert?: Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutProposedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyProposedByUserInputEnvelope;
    set?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    delete?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    update?: Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutProposedByUserInput[];
    updateMany?: Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutProposedByUserInput | Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutProposedByUserInput[];
    deleteMany?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
};
export type PortfolioMarketValueEntryUncheckedUpdateManyWithoutApprovedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput> | Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput[];
    upsert?: Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutApprovedByUserInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyApprovedByUserInputEnvelope;
    set?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    delete?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    update?: Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutApprovedByUserInput[];
    updateMany?: Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutApprovedByUserInput | Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutApprovedByUserInput[];
    deleteMany?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
};
export type PortfolioMarketValueEntryCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
};
export type PortfolioMarketValueEntryUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
};
export type PortfolioMarketValueEntryUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    delete?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    update?: Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
};
export type PortfolioMarketValueEntryUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput[] | Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PortfolioMarketValueEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    delete?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    connect?: Prisma.PortfolioMarketValueEntryWhereUniqueInput | Prisma.PortfolioMarketValueEntryWhereUniqueInput[];
    update?: Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PortfolioMarketValueEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
};
export type PortfolioMarketValueEntryCreateWithoutProposedByUserInput = {
    id?: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPortfolioMarketValueEntriesInput;
    approvedByUser?: Prisma.AppUserCreateNestedOneWithoutPortfolioMarketValueEntriesApprovedInput;
};
export type PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryCreateOrConnectWithoutProposedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput>;
};
export type PortfolioMarketValueEntryCreateManyProposedByUserInputEnvelope = {
    data: Prisma.PortfolioMarketValueEntryCreateManyProposedByUserInput | Prisma.PortfolioMarketValueEntryCreateManyProposedByUserInput[];
    skipDuplicates?: boolean;
};
export type PortfolioMarketValueEntryCreateWithoutApprovedByUserInput = {
    id?: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutPortfolioMarketValueEntriesInput;
    proposedByUser: Prisma.AppUserCreateNestedOneWithoutPortfolioMarketValueEntriesProposedInput;
};
export type PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryCreateOrConnectWithoutApprovedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput>;
};
export type PortfolioMarketValueEntryCreateManyApprovedByUserInputEnvelope = {
    data: Prisma.PortfolioMarketValueEntryCreateManyApprovedByUserInput | Prisma.PortfolioMarketValueEntryCreateManyApprovedByUserInput[];
    skipDuplicates?: boolean;
};
export type PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutProposedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateWithoutProposedByUserInput>;
    create: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutProposedByUserInput>;
};
export type PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutProposedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateWithoutProposedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateWithoutProposedByUserInput>;
};
export type PortfolioMarketValueEntryUpdateManyWithWhereWithoutProposedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateManyMutationInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateManyWithoutProposedByUserInput>;
};
export type PortfolioMarketValueEntryScalarWhereInput = {
    AND?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
    OR?: Prisma.PortfolioMarketValueEntryScalarWhereInput[];
    NOT?: Prisma.PortfolioMarketValueEntryScalarWhereInput | Prisma.PortfolioMarketValueEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"PortfolioMarketValueEntry"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PortfolioMarketValueEntry"> | string;
    valuationDate?: Prisma.DateTimeFilter<"PortfolioMarketValueEntry"> | Date | string;
    version?: Prisma.IntFilter<"PortfolioMarketValueEntry"> | number;
    marketValueKobo?: Prisma.BigIntFilter<"PortfolioMarketValueEntry"> | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"PortfolioMarketValueEntry"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidFilter<"PortfolioMarketValueEntry"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"PortfolioMarketValueEntry"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"PortfolioMarketValueEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortfolioMarketValueEntry"> | Date | string;
};
export type PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutApprovedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateWithoutApprovedByUserInput>;
    create: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutApprovedByUserInput>;
};
export type PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutApprovedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateWithoutApprovedByUserInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateWithoutApprovedByUserInput>;
};
export type PortfolioMarketValueEntryUpdateManyWithWhereWithoutApprovedByUserInput = {
    where: Prisma.PortfolioMarketValueEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateManyMutationInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateManyWithoutApprovedByUserInput>;
};
export type PortfolioMarketValueEntryCreateWithoutLedgerEntityInput = {
    id?: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    proposedByUser: Prisma.AppUserCreateNestedOneWithoutPortfolioMarketValueEntriesProposedInput;
    approvedByUser?: Prisma.AppUserCreateNestedOneWithoutPortfolioMarketValueEntriesApprovedInput;
};
export type PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type PortfolioMarketValueEntryCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.PortfolioMarketValueEntryCreateManyLedgerEntityInput | Prisma.PortfolioMarketValueEntryCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type PortfolioMarketValueEntryUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type PortfolioMarketValueEntryUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateWithoutLedgerEntityInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateWithoutLedgerEntityInput>;
};
export type PortfolioMarketValueEntryUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.PortfolioMarketValueEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateManyMutationInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type PortfolioMarketValueEntryCreateManyProposedByUserInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryCreateManyApprovedByUserInput = {
    id?: string;
    ledgerEntityCode: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryUpdateWithoutProposedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPortfolioMarketValueEntriesNestedInput;
    approvedByUser?: Prisma.AppUserUpdateOneWithoutPortfolioMarketValueEntriesApprovedNestedInput;
};
export type PortfolioMarketValueEntryUncheckedUpdateWithoutProposedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryUncheckedUpdateManyWithoutProposedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryUpdateWithoutApprovedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPortfolioMarketValueEntriesNestedInput;
    proposedByUser?: Prisma.AppUserUpdateOneRequiredWithoutPortfolioMarketValueEntriesProposedNestedInput;
};
export type PortfolioMarketValueEntryUncheckedUpdateWithoutApprovedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryUncheckedUpdateManyWithoutApprovedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryCreateManyLedgerEntityInput = {
    id?: string;
    valuationDate: Date | string;
    version: number;
    marketValueKobo: bigint | number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortfolioMarketValueEntryUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUser?: Prisma.AppUserUpdateOneRequiredWithoutPortfolioMarketValueEntriesProposedNestedInput;
    approvedByUser?: Prisma.AppUserUpdateOneWithoutPortfolioMarketValueEntriesApprovedNestedInput;
};
export type PortfolioMarketValueEntryUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntryUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    marketValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioMarketValueEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    version?: boolean;
    marketValueKobo?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioMarketValueEntry"]>;
export type PortfolioMarketValueEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    version?: boolean;
    marketValueKobo?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioMarketValueEntry"]>;
export type PortfolioMarketValueEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    version?: boolean;
    marketValueKobo?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioMarketValueEntry"]>;
export type PortfolioMarketValueEntrySelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    valuationDate?: boolean;
    version?: boolean;
    marketValueKobo?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
};
export type PortfolioMarketValueEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "valuationDate" | "version" | "marketValueKobo" | "status" | "proposedByUserId" | "approvedByUserId" | "approvedAt" | "createdAt", ExtArgs["result"]["portfolioMarketValueEntry"]>;
export type PortfolioMarketValueEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs>;
};
export type PortfolioMarketValueEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs>;
};
export type PortfolioMarketValueEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs>;
};
export type $PortfolioMarketValueEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortfolioMarketValueEntry";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        proposedByUser: Prisma.$AppUserPayload<ExtArgs>;
        approvedByUser: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        valuationDate: Date;
        version: number;
        marketValueKobo: bigint;
        status: $Enums.GovernedItemStatus;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["portfolioMarketValueEntry"]>;
    composites: {};
};
export type PortfolioMarketValueEntryGetPayload<S extends boolean | null | undefined | PortfolioMarketValueEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload, S>;
export type PortfolioMarketValueEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortfolioMarketValueEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortfolioMarketValueEntryCountAggregateInputType | true;
};
export interface PortfolioMarketValueEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortfolioMarketValueEntry'];
        meta: {
            name: 'PortfolioMarketValueEntry';
        };
    };
    findUnique<T extends PortfolioMarketValueEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortfolioMarketValueEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortfolioMarketValueEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, PortfolioMarketValueEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortfolioMarketValueEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortfolioMarketValueEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortfolioMarketValueEntryFindManyArgs>(args?: Prisma.SelectSubset<T, PortfolioMarketValueEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortfolioMarketValueEntryCreateArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryCreateArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortfolioMarketValueEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, PortfolioMarketValueEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortfolioMarketValueEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortfolioMarketValueEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortfolioMarketValueEntryDeleteArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortfolioMarketValueEntryUpdateArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortfolioMarketValueEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortfolioMarketValueEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortfolioMarketValueEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortfolioMarketValueEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortfolioMarketValueEntryUpsertArgs>(args: Prisma.SelectSubset<T, PortfolioMarketValueEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__PortfolioMarketValueEntryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioMarketValueEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortfolioMarketValueEntryCountArgs>(args?: Prisma.Subset<T, PortfolioMarketValueEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortfolioMarketValueEntryCountAggregateOutputType> : number>;
    aggregate<T extends PortfolioMarketValueEntryAggregateArgs>(args: Prisma.Subset<T, PortfolioMarketValueEntryAggregateArgs>): Prisma.PrismaPromise<GetPortfolioMarketValueEntryAggregateType<T>>;
    groupBy<T extends PortfolioMarketValueEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortfolioMarketValueEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: PortfolioMarketValueEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortfolioMarketValueEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioMarketValueEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortfolioMarketValueEntryFieldRefs;
}
export interface Prisma__PortfolioMarketValueEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proposedByUser<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedByUser<T extends Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortfolioMarketValueEntryFieldRefs {
    readonly id: Prisma.FieldRef<"PortfolioMarketValueEntry", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"PortfolioMarketValueEntry", 'String'>;
    readonly valuationDate: Prisma.FieldRef<"PortfolioMarketValueEntry", 'DateTime'>;
    readonly version: Prisma.FieldRef<"PortfolioMarketValueEntry", 'Int'>;
    readonly marketValueKobo: Prisma.FieldRef<"PortfolioMarketValueEntry", 'BigInt'>;
    readonly status: Prisma.FieldRef<"PortfolioMarketValueEntry", 'GovernedItemStatus'>;
    readonly proposedByUserId: Prisma.FieldRef<"PortfolioMarketValueEntry", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"PortfolioMarketValueEntry", 'String'>;
    readonly approvedAt: Prisma.FieldRef<"PortfolioMarketValueEntry", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PortfolioMarketValueEntry", 'DateTime'>;
}
export type PortfolioMarketValueEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
};
export type PortfolioMarketValueEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
};
export type PortfolioMarketValueEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    orderBy?: Prisma.PortfolioMarketValueEntryOrderByWithRelationInput | Prisma.PortfolioMarketValueEntryOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioMarketValueEntryScalarFieldEnum | Prisma.PortfolioMarketValueEntryScalarFieldEnum[];
};
export type PortfolioMarketValueEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    orderBy?: Prisma.PortfolioMarketValueEntryOrderByWithRelationInput | Prisma.PortfolioMarketValueEntryOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioMarketValueEntryScalarFieldEnum | Prisma.PortfolioMarketValueEntryScalarFieldEnum[];
};
export type PortfolioMarketValueEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    orderBy?: Prisma.PortfolioMarketValueEntryOrderByWithRelationInput | Prisma.PortfolioMarketValueEntryOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioMarketValueEntryScalarFieldEnum | Prisma.PortfolioMarketValueEntryScalarFieldEnum[];
};
export type PortfolioMarketValueEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateInput, Prisma.PortfolioMarketValueEntryUncheckedCreateInput>;
};
export type PortfolioMarketValueEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortfolioMarketValueEntryCreateManyInput | Prisma.PortfolioMarketValueEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioMarketValueEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    data: Prisma.PortfolioMarketValueEntryCreateManyInput | Prisma.PortfolioMarketValueEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortfolioMarketValueEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortfolioMarketValueEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateInput>;
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
};
export type PortfolioMarketValueEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateManyMutationInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    limit?: number;
};
export type PortfolioMarketValueEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateManyMutationInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    limit?: number;
    include?: Prisma.PortfolioMarketValueEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortfolioMarketValueEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioMarketValueEntryCreateInput, Prisma.PortfolioMarketValueEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortfolioMarketValueEntryUpdateInput, Prisma.PortfolioMarketValueEntryUncheckedUpdateInput>;
};
export type PortfolioMarketValueEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
    where: Prisma.PortfolioMarketValueEntryWhereUniqueInput;
};
export type PortfolioMarketValueEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioMarketValueEntryWhereInput;
    limit?: number;
};
export type PortfolioMarketValueEntry$approvedByUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type PortfolioMarketValueEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioMarketValueEntrySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioMarketValueEntryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioMarketValueEntryInclude<ExtArgs> | null;
};
