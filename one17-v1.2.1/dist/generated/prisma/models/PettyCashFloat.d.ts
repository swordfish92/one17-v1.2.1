import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PettyCashFloatModel = runtime.Types.Result.DefaultSelection<Prisma.$PettyCashFloatPayload>;
export type AggregatePettyCashFloat = {
    _count: PettyCashFloatCountAggregateOutputType | null;
    _avg: PettyCashFloatAvgAggregateOutputType | null;
    _sum: PettyCashFloatSumAggregateOutputType | null;
    _min: PettyCashFloatMinAggregateOutputType | null;
    _max: PettyCashFloatMaxAggregateOutputType | null;
};
export type PettyCashFloatAvgAggregateOutputType = {
    floatCeilingKobo: number | null;
    singleVoucherCapKobo: number | null;
};
export type PettyCashFloatSumAggregateOutputType = {
    floatCeilingKobo: bigint | null;
    singleVoucherCapKobo: bigint | null;
};
export type PettyCashFloatMinAggregateOutputType = {
    id: string | null;
    floatCode: string | null;
    custodianUserId: string | null;
    officeLabel: string | null;
    ledgerEntityCode: string | null;
    floatCeilingKobo: bigint | null;
    singleVoucherCapKobo: bigint | null;
    status: $Enums.PettyCashFloatStatus | null;
    establishedByUserId: string | null;
    createdAt: Date | null;
};
export type PettyCashFloatMaxAggregateOutputType = {
    id: string | null;
    floatCode: string | null;
    custodianUserId: string | null;
    officeLabel: string | null;
    ledgerEntityCode: string | null;
    floatCeilingKobo: bigint | null;
    singleVoucherCapKobo: bigint | null;
    status: $Enums.PettyCashFloatStatus | null;
    establishedByUserId: string | null;
    createdAt: Date | null;
};
export type PettyCashFloatCountAggregateOutputType = {
    id: number;
    floatCode: number;
    custodianUserId: number;
    officeLabel: number;
    ledgerEntityCode: number;
    floatCeilingKobo: number;
    singleVoucherCapKobo: number;
    status: number;
    establishedByUserId: number;
    createdAt: number;
    _all: number;
};
export type PettyCashFloatAvgAggregateInputType = {
    floatCeilingKobo?: true;
    singleVoucherCapKobo?: true;
};
export type PettyCashFloatSumAggregateInputType = {
    floatCeilingKobo?: true;
    singleVoucherCapKobo?: true;
};
export type PettyCashFloatMinAggregateInputType = {
    id?: true;
    floatCode?: true;
    custodianUserId?: true;
    officeLabel?: true;
    ledgerEntityCode?: true;
    floatCeilingKobo?: true;
    singleVoucherCapKobo?: true;
    status?: true;
    establishedByUserId?: true;
    createdAt?: true;
};
export type PettyCashFloatMaxAggregateInputType = {
    id?: true;
    floatCode?: true;
    custodianUserId?: true;
    officeLabel?: true;
    ledgerEntityCode?: true;
    floatCeilingKobo?: true;
    singleVoucherCapKobo?: true;
    status?: true;
    establishedByUserId?: true;
    createdAt?: true;
};
export type PettyCashFloatCountAggregateInputType = {
    id?: true;
    floatCode?: true;
    custodianUserId?: true;
    officeLabel?: true;
    ledgerEntityCode?: true;
    floatCeilingKobo?: true;
    singleVoucherCapKobo?: true;
    status?: true;
    establishedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type PettyCashFloatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashFloatWhereInput;
    orderBy?: Prisma.PettyCashFloatOrderByWithRelationInput | Prisma.PettyCashFloatOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashFloatWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PettyCashFloatCountAggregateInputType;
    _avg?: PettyCashFloatAvgAggregateInputType;
    _sum?: PettyCashFloatSumAggregateInputType;
    _min?: PettyCashFloatMinAggregateInputType;
    _max?: PettyCashFloatMaxAggregateInputType;
};
export type GetPettyCashFloatAggregateType<T extends PettyCashFloatAggregateArgs> = {
    [P in keyof T & keyof AggregatePettyCashFloat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePettyCashFloat[P]> : Prisma.GetScalarType<T[P], AggregatePettyCashFloat[P]>;
};
export type PettyCashFloatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashFloatWhereInput;
    orderBy?: Prisma.PettyCashFloatOrderByWithAggregationInput | Prisma.PettyCashFloatOrderByWithAggregationInput[];
    by: Prisma.PettyCashFloatScalarFieldEnum[] | Prisma.PettyCashFloatScalarFieldEnum;
    having?: Prisma.PettyCashFloatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PettyCashFloatCountAggregateInputType | true;
    _avg?: PettyCashFloatAvgAggregateInputType;
    _sum?: PettyCashFloatSumAggregateInputType;
    _min?: PettyCashFloatMinAggregateInputType;
    _max?: PettyCashFloatMaxAggregateInputType;
};
export type PettyCashFloatGroupByOutputType = {
    id: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode: string;
    floatCeilingKobo: bigint;
    singleVoucherCapKobo: bigint;
    status: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt: Date;
    _count: PettyCashFloatCountAggregateOutputType | null;
    _avg: PettyCashFloatAvgAggregateOutputType | null;
    _sum: PettyCashFloatSumAggregateOutputType | null;
    _min: PettyCashFloatMinAggregateOutputType | null;
    _max: PettyCashFloatMaxAggregateOutputType | null;
};
export type GetPettyCashFloatGroupByPayload<T extends PettyCashFloatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PettyCashFloatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PettyCashFloatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PettyCashFloatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PettyCashFloatGroupByOutputType[P]>;
}>>;
export type PettyCashFloatWhereInput = {
    AND?: Prisma.PettyCashFloatWhereInput | Prisma.PettyCashFloatWhereInput[];
    OR?: Prisma.PettyCashFloatWhereInput[];
    NOT?: Prisma.PettyCashFloatWhereInput | Prisma.PettyCashFloatWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    floatCode?: Prisma.StringFilter<"PettyCashFloat"> | string;
    custodianUserId?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    officeLabel?: Prisma.StringFilter<"PettyCashFloat"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PettyCashFloat"> | string;
    floatCeilingKobo?: Prisma.BigIntFilter<"PettyCashFloat"> | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFilter<"PettyCashFloat"> | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFilter<"PettyCashFloat"> | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    createdAt?: Prisma.DateTimeFilter<"PettyCashFloat"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    vouchers?: Prisma.PettyCashVoucherListRelationFilter;
    claims?: Prisma.PettyCashReplenishmentClaimListRelationFilter;
    spotChecks?: Prisma.PettyCashSpotCheckListRelationFilter;
};
export type PettyCashFloatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    floatCode?: Prisma.SortOrder;
    custodianUserId?: Prisma.SortOrder;
    officeLabel?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    floatCeilingKobo?: Prisma.SortOrder;
    singleVoucherCapKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    establishedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    vouchers?: Prisma.PettyCashVoucherOrderByRelationAggregateInput;
    claims?: Prisma.PettyCashReplenishmentClaimOrderByRelationAggregateInput;
    spotChecks?: Prisma.PettyCashSpotCheckOrderByRelationAggregateInput;
};
export type PettyCashFloatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    floatCode?: string;
    AND?: Prisma.PettyCashFloatWhereInput | Prisma.PettyCashFloatWhereInput[];
    OR?: Prisma.PettyCashFloatWhereInput[];
    NOT?: Prisma.PettyCashFloatWhereInput | Prisma.PettyCashFloatWhereInput[];
    custodianUserId?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    officeLabel?: Prisma.StringFilter<"PettyCashFloat"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PettyCashFloat"> | string;
    floatCeilingKobo?: Prisma.BigIntFilter<"PettyCashFloat"> | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFilter<"PettyCashFloat"> | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFilter<"PettyCashFloat"> | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    createdAt?: Prisma.DateTimeFilter<"PettyCashFloat"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    vouchers?: Prisma.PettyCashVoucherListRelationFilter;
    claims?: Prisma.PettyCashReplenishmentClaimListRelationFilter;
    spotChecks?: Prisma.PettyCashSpotCheckListRelationFilter;
}, "id" | "floatCode">;
export type PettyCashFloatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    floatCode?: Prisma.SortOrder;
    custodianUserId?: Prisma.SortOrder;
    officeLabel?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    floatCeilingKobo?: Prisma.SortOrder;
    singleVoucherCapKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    establishedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PettyCashFloatCountOrderByAggregateInput;
    _avg?: Prisma.PettyCashFloatAvgOrderByAggregateInput;
    _max?: Prisma.PettyCashFloatMaxOrderByAggregateInput;
    _min?: Prisma.PettyCashFloatMinOrderByAggregateInput;
    _sum?: Prisma.PettyCashFloatSumOrderByAggregateInput;
};
export type PettyCashFloatScalarWhereWithAggregatesInput = {
    AND?: Prisma.PettyCashFloatScalarWhereWithAggregatesInput | Prisma.PettyCashFloatScalarWhereWithAggregatesInput[];
    OR?: Prisma.PettyCashFloatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PettyCashFloatScalarWhereWithAggregatesInput | Prisma.PettyCashFloatScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PettyCashFloat"> | string;
    floatCode?: Prisma.StringWithAggregatesFilter<"PettyCashFloat"> | string;
    custodianUserId?: Prisma.UuidWithAggregatesFilter<"PettyCashFloat"> | string;
    officeLabel?: Prisma.StringWithAggregatesFilter<"PettyCashFloat"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"PettyCashFloat"> | string;
    floatCeilingKobo?: Prisma.BigIntWithAggregatesFilter<"PettyCashFloat"> | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntWithAggregatesFilter<"PettyCashFloat"> | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusWithAggregatesFilter<"PettyCashFloat"> | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.UuidWithAggregatesFilter<"PettyCashFloat"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PettyCashFloat"> | Date | string;
};
export type PettyCashFloatCreateInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    ledgerEntity?: Prisma.LedgerEntityCreateNestedOneWithoutPettyCashFloatsInput;
    vouchers?: Prisma.PettyCashVoucherCreateNestedManyWithoutFloatInput;
    claims?: Prisma.PettyCashReplenishmentClaimCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatUncheckedCreateInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode?: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedCreateNestedManyWithoutFloatInput;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPettyCashFloatsNestedInput;
    vouchers?: Prisma.PettyCashVoucherUpdateManyWithoutFloatNestedInput;
    claims?: Prisma.PettyCashReplenishmentClaimUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedUpdateManyWithoutFloatNestedInput;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatCreateManyInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode?: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashFloatUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashFloatUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashFloatListRelationFilter = {
    every?: Prisma.PettyCashFloatWhereInput;
    some?: Prisma.PettyCashFloatWhereInput;
    none?: Prisma.PettyCashFloatWhereInput;
};
export type PettyCashFloatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PettyCashFloatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatCode?: Prisma.SortOrder;
    custodianUserId?: Prisma.SortOrder;
    officeLabel?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    floatCeilingKobo?: Prisma.SortOrder;
    singleVoucherCapKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    establishedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashFloatAvgOrderByAggregateInput = {
    floatCeilingKobo?: Prisma.SortOrder;
    singleVoucherCapKobo?: Prisma.SortOrder;
};
export type PettyCashFloatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatCode?: Prisma.SortOrder;
    custodianUserId?: Prisma.SortOrder;
    officeLabel?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    floatCeilingKobo?: Prisma.SortOrder;
    singleVoucherCapKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    establishedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashFloatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    floatCode?: Prisma.SortOrder;
    custodianUserId?: Prisma.SortOrder;
    officeLabel?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    floatCeilingKobo?: Prisma.SortOrder;
    singleVoucherCapKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    establishedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PettyCashFloatSumOrderByAggregateInput = {
    floatCeilingKobo?: Prisma.SortOrder;
    singleVoucherCapKobo?: Prisma.SortOrder;
};
export type PettyCashFloatScalarRelationFilter = {
    is?: Prisma.PettyCashFloatWhereInput;
    isNot?: Prisma.PettyCashFloatWhereInput;
};
export type PettyCashFloatCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput> | Prisma.PettyCashFloatCreateWithoutLedgerEntityInput[] | Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput | Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PettyCashFloatCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
};
export type PettyCashFloatUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput> | Prisma.PettyCashFloatCreateWithoutLedgerEntityInput[] | Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput | Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.PettyCashFloatCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
};
export type PettyCashFloatUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput> | Prisma.PettyCashFloatCreateWithoutLedgerEntityInput[] | Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput | Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PettyCashFloatUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PettyCashFloatUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PettyCashFloatCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    disconnect?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    delete?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    connect?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    update?: Prisma.PettyCashFloatUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PettyCashFloatUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PettyCashFloatUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PettyCashFloatUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PettyCashFloatScalarWhereInput | Prisma.PettyCashFloatScalarWhereInput[];
};
export type PettyCashFloatUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput> | Prisma.PettyCashFloatCreateWithoutLedgerEntityInput[] | Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput | Prisma.PettyCashFloatCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.PettyCashFloatUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.PettyCashFloatUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.PettyCashFloatCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    disconnect?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    delete?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    connect?: Prisma.PettyCashFloatWhereUniqueInput | Prisma.PettyCashFloatWhereUniqueInput[];
    update?: Prisma.PettyCashFloatUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.PettyCashFloatUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.PettyCashFloatUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.PettyCashFloatUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.PettyCashFloatScalarWhereInput | Prisma.PettyCashFloatScalarWhereInput[];
};
export type EnumPettyCashFloatStatusFieldUpdateOperationsInput = {
    set?: $Enums.PettyCashFloatStatus;
};
export type PettyCashFloatCreateNestedOneWithoutVouchersInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutVouchersInput, Prisma.PettyCashFloatUncheckedCreateWithoutVouchersInput>;
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutVouchersInput;
    connect?: Prisma.PettyCashFloatWhereUniqueInput;
};
export type PettyCashFloatUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutVouchersInput, Prisma.PettyCashFloatUncheckedCreateWithoutVouchersInput>;
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutVouchersInput;
    upsert?: Prisma.PettyCashFloatUpsertWithoutVouchersInput;
    connect?: Prisma.PettyCashFloatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PettyCashFloatUpdateToOneWithWhereWithoutVouchersInput, Prisma.PettyCashFloatUpdateWithoutVouchersInput>, Prisma.PettyCashFloatUncheckedUpdateWithoutVouchersInput>;
};
export type PettyCashFloatCreateNestedOneWithoutClaimsInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutClaimsInput, Prisma.PettyCashFloatUncheckedCreateWithoutClaimsInput>;
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutClaimsInput;
    connect?: Prisma.PettyCashFloatWhereUniqueInput;
};
export type PettyCashFloatUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutClaimsInput, Prisma.PettyCashFloatUncheckedCreateWithoutClaimsInput>;
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutClaimsInput;
    upsert?: Prisma.PettyCashFloatUpsertWithoutClaimsInput;
    connect?: Prisma.PettyCashFloatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PettyCashFloatUpdateToOneWithWhereWithoutClaimsInput, Prisma.PettyCashFloatUpdateWithoutClaimsInput>, Prisma.PettyCashFloatUncheckedUpdateWithoutClaimsInput>;
};
export type PettyCashFloatCreateNestedOneWithoutSpotChecksInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutSpotChecksInput, Prisma.PettyCashFloatUncheckedCreateWithoutSpotChecksInput>;
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutSpotChecksInput;
    connect?: Prisma.PettyCashFloatWhereUniqueInput;
};
export type PettyCashFloatUpdateOneRequiredWithoutSpotChecksNestedInput = {
    create?: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutSpotChecksInput, Prisma.PettyCashFloatUncheckedCreateWithoutSpotChecksInput>;
    connectOrCreate?: Prisma.PettyCashFloatCreateOrConnectWithoutSpotChecksInput;
    upsert?: Prisma.PettyCashFloatUpsertWithoutSpotChecksInput;
    connect?: Prisma.PettyCashFloatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PettyCashFloatUpdateToOneWithWhereWithoutSpotChecksInput, Prisma.PettyCashFloatUpdateWithoutSpotChecksInput>, Prisma.PettyCashFloatUncheckedUpdateWithoutSpotChecksInput>;
};
export type PettyCashFloatCreateWithoutLedgerEntityInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherCreateNestedManyWithoutFloatInput;
    claims?: Prisma.PettyCashReplenishmentClaimCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedCreateNestedManyWithoutFloatInput;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.PettyCashFloatWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput>;
};
export type PettyCashFloatCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.PettyCashFloatCreateManyLedgerEntityInput | Prisma.PettyCashFloatCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type PettyCashFloatUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PettyCashFloatWhereUniqueInput;
    update: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedCreateWithoutLedgerEntityInput>;
};
export type PettyCashFloatUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.PettyCashFloatWhereUniqueInput;
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutLedgerEntityInput, Prisma.PettyCashFloatUncheckedUpdateWithoutLedgerEntityInput>;
};
export type PettyCashFloatUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.PettyCashFloatScalarWhereInput;
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateManyMutationInput, Prisma.PettyCashFloatUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type PettyCashFloatScalarWhereInput = {
    AND?: Prisma.PettyCashFloatScalarWhereInput | Prisma.PettyCashFloatScalarWhereInput[];
    OR?: Prisma.PettyCashFloatScalarWhereInput[];
    NOT?: Prisma.PettyCashFloatScalarWhereInput | Prisma.PettyCashFloatScalarWhereInput[];
    id?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    floatCode?: Prisma.StringFilter<"PettyCashFloat"> | string;
    custodianUserId?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    officeLabel?: Prisma.StringFilter<"PettyCashFloat"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"PettyCashFloat"> | string;
    floatCeilingKobo?: Prisma.BigIntFilter<"PettyCashFloat"> | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFilter<"PettyCashFloat"> | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFilter<"PettyCashFloat"> | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.UuidFilter<"PettyCashFloat"> | string;
    createdAt?: Prisma.DateTimeFilter<"PettyCashFloat"> | Date | string;
};
export type PettyCashFloatCreateWithoutVouchersInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    ledgerEntity?: Prisma.LedgerEntityCreateNestedOneWithoutPettyCashFloatsInput;
    claims?: Prisma.PettyCashReplenishmentClaimCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatUncheckedCreateWithoutVouchersInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode?: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatCreateOrConnectWithoutVouchersInput = {
    where: Prisma.PettyCashFloatWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutVouchersInput, Prisma.PettyCashFloatUncheckedCreateWithoutVouchersInput>;
};
export type PettyCashFloatUpsertWithoutVouchersInput = {
    update: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutVouchersInput, Prisma.PettyCashFloatUncheckedUpdateWithoutVouchersInput>;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutVouchersInput, Prisma.PettyCashFloatUncheckedCreateWithoutVouchersInput>;
    where?: Prisma.PettyCashFloatWhereInput;
};
export type PettyCashFloatUpdateToOneWithWhereWithoutVouchersInput = {
    where?: Prisma.PettyCashFloatWhereInput;
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutVouchersInput, Prisma.PettyCashFloatUncheckedUpdateWithoutVouchersInput>;
};
export type PettyCashFloatUpdateWithoutVouchersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPettyCashFloatsNestedInput;
    claims?: Prisma.PettyCashReplenishmentClaimUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatUncheckedUpdateWithoutVouchersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatCreateWithoutClaimsInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    ledgerEntity?: Prisma.LedgerEntityCreateNestedOneWithoutPettyCashFloatsInput;
    vouchers?: Prisma.PettyCashVoucherCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatUncheckedCreateWithoutClaimsInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode?: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedCreateNestedManyWithoutFloatInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatCreateOrConnectWithoutClaimsInput = {
    where: Prisma.PettyCashFloatWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutClaimsInput, Prisma.PettyCashFloatUncheckedCreateWithoutClaimsInput>;
};
export type PettyCashFloatUpsertWithoutClaimsInput = {
    update: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutClaimsInput, Prisma.PettyCashFloatUncheckedUpdateWithoutClaimsInput>;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutClaimsInput, Prisma.PettyCashFloatUncheckedCreateWithoutClaimsInput>;
    where?: Prisma.PettyCashFloatWhereInput;
};
export type PettyCashFloatUpdateToOneWithWhereWithoutClaimsInput = {
    where?: Prisma.PettyCashFloatWhereInput;
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutClaimsInput, Prisma.PettyCashFloatUncheckedUpdateWithoutClaimsInput>;
};
export type PettyCashFloatUpdateWithoutClaimsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPettyCashFloatsNestedInput;
    vouchers?: Prisma.PettyCashVoucherUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatUncheckedUpdateWithoutClaimsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatCreateWithoutSpotChecksInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    ledgerEntity?: Prisma.LedgerEntityCreateNestedOneWithoutPettyCashFloatsInput;
    vouchers?: Prisma.PettyCashVoucherCreateNestedManyWithoutFloatInput;
    claims?: Prisma.PettyCashReplenishmentClaimCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatUncheckedCreateWithoutSpotChecksInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    ledgerEntityCode?: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedCreateNestedManyWithoutFloatInput;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedCreateNestedManyWithoutFloatInput;
};
export type PettyCashFloatCreateOrConnectWithoutSpotChecksInput = {
    where: Prisma.PettyCashFloatWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutSpotChecksInput, Prisma.PettyCashFloatUncheckedCreateWithoutSpotChecksInput>;
};
export type PettyCashFloatUpsertWithoutSpotChecksInput = {
    update: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutSpotChecksInput, Prisma.PettyCashFloatUncheckedUpdateWithoutSpotChecksInput>;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateWithoutSpotChecksInput, Prisma.PettyCashFloatUncheckedCreateWithoutSpotChecksInput>;
    where?: Prisma.PettyCashFloatWhereInput;
};
export type PettyCashFloatUpdateToOneWithWhereWithoutSpotChecksInput = {
    where?: Prisma.PettyCashFloatWhereInput;
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateWithoutSpotChecksInput, Prisma.PettyCashFloatUncheckedUpdateWithoutSpotChecksInput>;
};
export type PettyCashFloatUpdateWithoutSpotChecksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutPettyCashFloatsNestedInput;
    vouchers?: Prisma.PettyCashVoucherUpdateManyWithoutFloatNestedInput;
    claims?: Prisma.PettyCashReplenishmentClaimUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatUncheckedUpdateWithoutSpotChecksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedUpdateManyWithoutFloatNestedInput;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatCreateManyLedgerEntityInput = {
    id?: string;
    floatCode: string;
    custodianUserId: string;
    officeLabel: string;
    floatCeilingKobo: bigint | number;
    singleVoucherCapKobo: bigint | number;
    status?: $Enums.PettyCashFloatStatus;
    establishedByUserId: string;
    createdAt?: Date | string;
};
export type PettyCashFloatUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUpdateManyWithoutFloatNestedInput;
    claims?: Prisma.PettyCashReplenishmentClaimUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vouchers?: Prisma.PettyCashVoucherUncheckedUpdateManyWithoutFloatNestedInput;
    claims?: Prisma.PettyCashReplenishmentClaimUncheckedUpdateManyWithoutFloatNestedInput;
    spotChecks?: Prisma.PettyCashSpotCheckUncheckedUpdateManyWithoutFloatNestedInput;
};
export type PettyCashFloatUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCode?: Prisma.StringFieldUpdateOperationsInput | string;
    custodianUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    officeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    floatCeilingKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    singleVoucherCapKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumPettyCashFloatStatusFieldUpdateOperationsInput | $Enums.PettyCashFloatStatus;
    establishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PettyCashFloatCountOutputType = {
    vouchers: number;
    claims: number;
    spotChecks: number;
};
export type PettyCashFloatCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vouchers?: boolean | PettyCashFloatCountOutputTypeCountVouchersArgs;
    claims?: boolean | PettyCashFloatCountOutputTypeCountClaimsArgs;
    spotChecks?: boolean | PettyCashFloatCountOutputTypeCountSpotChecksArgs;
};
export type PettyCashFloatCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatCountOutputTypeSelect<ExtArgs> | null;
};
export type PettyCashFloatCountOutputTypeCountVouchersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashVoucherWhereInput;
};
export type PettyCashFloatCountOutputTypeCountClaimsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
};
export type PettyCashFloatCountOutputTypeCountSpotChecksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashSpotCheckWhereInput;
};
export type PettyCashFloatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatCode?: boolean;
    custodianUserId?: boolean;
    officeLabel?: boolean;
    ledgerEntityCode?: boolean;
    floatCeilingKobo?: boolean;
    singleVoucherCapKobo?: boolean;
    status?: boolean;
    establishedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    vouchers?: boolean | Prisma.PettyCashFloat$vouchersArgs<ExtArgs>;
    claims?: boolean | Prisma.PettyCashFloat$claimsArgs<ExtArgs>;
    spotChecks?: boolean | Prisma.PettyCashFloat$spotChecksArgs<ExtArgs>;
    _count?: boolean | Prisma.PettyCashFloatCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashFloat"]>;
export type PettyCashFloatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatCode?: boolean;
    custodianUserId?: boolean;
    officeLabel?: boolean;
    ledgerEntityCode?: boolean;
    floatCeilingKobo?: boolean;
    singleVoucherCapKobo?: boolean;
    status?: boolean;
    establishedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashFloat"]>;
export type PettyCashFloatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    floatCode?: boolean;
    custodianUserId?: boolean;
    officeLabel?: boolean;
    ledgerEntityCode?: boolean;
    floatCeilingKobo?: boolean;
    singleVoucherCapKobo?: boolean;
    status?: boolean;
    establishedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pettyCashFloat"]>;
export type PettyCashFloatSelectScalar = {
    id?: boolean;
    floatCode?: boolean;
    custodianUserId?: boolean;
    officeLabel?: boolean;
    ledgerEntityCode?: boolean;
    floatCeilingKobo?: boolean;
    singleVoucherCapKobo?: boolean;
    status?: boolean;
    establishedByUserId?: boolean;
    createdAt?: boolean;
};
export type PettyCashFloatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "floatCode" | "custodianUserId" | "officeLabel" | "ledgerEntityCode" | "floatCeilingKobo" | "singleVoucherCapKobo" | "status" | "establishedByUserId" | "createdAt", ExtArgs["result"]["pettyCashFloat"]>;
export type PettyCashFloatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    vouchers?: boolean | Prisma.PettyCashFloat$vouchersArgs<ExtArgs>;
    claims?: boolean | Prisma.PettyCashFloat$claimsArgs<ExtArgs>;
    spotChecks?: boolean | Prisma.PettyCashFloat$spotChecksArgs<ExtArgs>;
    _count?: boolean | Prisma.PettyCashFloatCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PettyCashFloatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type PettyCashFloatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type $PettyCashFloatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PettyCashFloat";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        vouchers: Prisma.$PettyCashVoucherPayload<ExtArgs>[];
        claims: Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>[];
        spotChecks: Prisma.$PettyCashSpotCheckPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        floatCode: string;
        custodianUserId: string;
        officeLabel: string;
        ledgerEntityCode: string;
        floatCeilingKobo: bigint;
        singleVoucherCapKobo: bigint;
        status: $Enums.PettyCashFloatStatus;
        establishedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["pettyCashFloat"]>;
    composites: {};
};
export type PettyCashFloatGetPayload<S extends boolean | null | undefined | PettyCashFloatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload, S>;
export type PettyCashFloatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PettyCashFloatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PettyCashFloatCountAggregateInputType | true;
};
export interface PettyCashFloatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PettyCashFloat'];
        meta: {
            name: 'PettyCashFloat';
        };
    };
    findUnique<T extends PettyCashFloatFindUniqueArgs>(args: Prisma.SelectSubset<T, PettyCashFloatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PettyCashFloatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PettyCashFloatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PettyCashFloatFindFirstArgs>(args?: Prisma.SelectSubset<T, PettyCashFloatFindFirstArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PettyCashFloatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PettyCashFloatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PettyCashFloatFindManyArgs>(args?: Prisma.SelectSubset<T, PettyCashFloatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PettyCashFloatCreateArgs>(args: Prisma.SelectSubset<T, PettyCashFloatCreateArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PettyCashFloatCreateManyArgs>(args?: Prisma.SelectSubset<T, PettyCashFloatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PettyCashFloatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PettyCashFloatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PettyCashFloatDeleteArgs>(args: Prisma.SelectSubset<T, PettyCashFloatDeleteArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PettyCashFloatUpdateArgs>(args: Prisma.SelectSubset<T, PettyCashFloatUpdateArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PettyCashFloatDeleteManyArgs>(args?: Prisma.SelectSubset<T, PettyCashFloatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PettyCashFloatUpdateManyArgs>(args: Prisma.SelectSubset<T, PettyCashFloatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PettyCashFloatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PettyCashFloatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PettyCashFloatUpsertArgs>(args: Prisma.SelectSubset<T, PettyCashFloatUpsertArgs<ExtArgs>>): Prisma.Prisma__PettyCashFloatClient<runtime.Types.Result.GetResult<Prisma.$PettyCashFloatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PettyCashFloatCountArgs>(args?: Prisma.Subset<T, PettyCashFloatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PettyCashFloatCountAggregateOutputType> : number>;
    aggregate<T extends PettyCashFloatAggregateArgs>(args: Prisma.Subset<T, PettyCashFloatAggregateArgs>): Prisma.PrismaPromise<GetPettyCashFloatAggregateType<T>>;
    groupBy<T extends PettyCashFloatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PettyCashFloatGroupByArgs['orderBy'];
    } : {
        orderBy?: PettyCashFloatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PettyCashFloatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPettyCashFloatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PettyCashFloatFieldRefs;
}
export interface Prisma__PettyCashFloatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vouchers<T extends Prisma.PettyCashFloat$vouchersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashFloat$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashVoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    claims<T extends Prisma.PettyCashFloat$claimsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashFloat$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashReplenishmentClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    spotChecks<T extends Prisma.PettyCashFloat$spotChecksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PettyCashFloat$spotChecksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PettyCashSpotCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PettyCashFloatFieldRefs {
    readonly id: Prisma.FieldRef<"PettyCashFloat", 'String'>;
    readonly floatCode: Prisma.FieldRef<"PettyCashFloat", 'String'>;
    readonly custodianUserId: Prisma.FieldRef<"PettyCashFloat", 'String'>;
    readonly officeLabel: Prisma.FieldRef<"PettyCashFloat", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"PettyCashFloat", 'String'>;
    readonly floatCeilingKobo: Prisma.FieldRef<"PettyCashFloat", 'BigInt'>;
    readonly singleVoucherCapKobo: Prisma.FieldRef<"PettyCashFloat", 'BigInt'>;
    readonly status: Prisma.FieldRef<"PettyCashFloat", 'PettyCashFloatStatus'>;
    readonly establishedByUserId: Prisma.FieldRef<"PettyCashFloat", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PettyCashFloat", 'DateTime'>;
}
export type PettyCashFloatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    where: Prisma.PettyCashFloatWhereUniqueInput;
};
export type PettyCashFloatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    where: Prisma.PettyCashFloatWhereUniqueInput;
};
export type PettyCashFloatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    where?: Prisma.PettyCashFloatWhereInput;
    orderBy?: Prisma.PettyCashFloatOrderByWithRelationInput | Prisma.PettyCashFloatOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashFloatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashFloatScalarFieldEnum | Prisma.PettyCashFloatScalarFieldEnum[];
};
export type PettyCashFloatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    where?: Prisma.PettyCashFloatWhereInput;
    orderBy?: Prisma.PettyCashFloatOrderByWithRelationInput | Prisma.PettyCashFloatOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashFloatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashFloatScalarFieldEnum | Prisma.PettyCashFloatScalarFieldEnum[];
};
export type PettyCashFloatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    where?: Prisma.PettyCashFloatWhereInput;
    orderBy?: Prisma.PettyCashFloatOrderByWithRelationInput | Prisma.PettyCashFloatOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashFloatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashFloatScalarFieldEnum | Prisma.PettyCashFloatScalarFieldEnum[];
};
export type PettyCashFloatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashFloatCreateInput, Prisma.PettyCashFloatUncheckedCreateInput>;
};
export type PettyCashFloatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PettyCashFloatCreateManyInput | Prisma.PettyCashFloatCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PettyCashFloatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    data: Prisma.PettyCashFloatCreateManyInput | Prisma.PettyCashFloatCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PettyCashFloatIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PettyCashFloatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateInput, Prisma.PettyCashFloatUncheckedUpdateInput>;
    where: Prisma.PettyCashFloatWhereUniqueInput;
};
export type PettyCashFloatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateManyMutationInput, Prisma.PettyCashFloatUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashFloatWhereInput;
    limit?: number;
};
export type PettyCashFloatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PettyCashFloatUpdateManyMutationInput, Prisma.PettyCashFloatUncheckedUpdateManyInput>;
    where?: Prisma.PettyCashFloatWhereInput;
    limit?: number;
    include?: Prisma.PettyCashFloatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PettyCashFloatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    where: Prisma.PettyCashFloatWhereUniqueInput;
    create: Prisma.XOR<Prisma.PettyCashFloatCreateInput, Prisma.PettyCashFloatUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PettyCashFloatUpdateInput, Prisma.PettyCashFloatUncheckedUpdateInput>;
};
export type PettyCashFloatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
    where: Prisma.PettyCashFloatWhereUniqueInput;
};
export type PettyCashFloatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PettyCashFloatWhereInput;
    limit?: number;
};
export type PettyCashFloat$vouchersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashVoucherSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashVoucherOmit<ExtArgs> | null;
    include?: Prisma.PettyCashVoucherInclude<ExtArgs> | null;
    where?: Prisma.PettyCashVoucherWhereInput;
    orderBy?: Prisma.PettyCashVoucherOrderByWithRelationInput | Prisma.PettyCashVoucherOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashVoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashVoucherScalarFieldEnum | Prisma.PettyCashVoucherScalarFieldEnum[];
};
export type PettyCashFloat$claimsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashReplenishmentClaimSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashReplenishmentClaimOmit<ExtArgs> | null;
    include?: Prisma.PettyCashReplenishmentClaimInclude<ExtArgs> | null;
    where?: Prisma.PettyCashReplenishmentClaimWhereInput;
    orderBy?: Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput | Prisma.PettyCashReplenishmentClaimOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashReplenishmentClaimWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashReplenishmentClaimScalarFieldEnum | Prisma.PettyCashReplenishmentClaimScalarFieldEnum[];
};
export type PettyCashFloat$spotChecksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashSpotCheckSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashSpotCheckOmit<ExtArgs> | null;
    include?: Prisma.PettyCashSpotCheckInclude<ExtArgs> | null;
    where?: Prisma.PettyCashSpotCheckWhereInput;
    orderBy?: Prisma.PettyCashSpotCheckOrderByWithRelationInput | Prisma.PettyCashSpotCheckOrderByWithRelationInput[];
    cursor?: Prisma.PettyCashSpotCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PettyCashSpotCheckScalarFieldEnum | Prisma.PettyCashSpotCheckScalarFieldEnum[];
};
export type PettyCashFloatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PettyCashFloatSelect<ExtArgs> | null;
    omit?: Prisma.PettyCashFloatOmit<ExtArgs> | null;
    include?: Prisma.PettyCashFloatInclude<ExtArgs> | null;
};
