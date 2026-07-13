import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayoutCompilationLineModel = runtime.Types.Result.DefaultSelection<Prisma.$PayoutCompilationLinePayload>;
export type AggregatePayoutCompilationLine = {
    _count: PayoutCompilationLineCountAggregateOutputType | null;
    _avg: PayoutCompilationLineAvgAggregateOutputType | null;
    _sum: PayoutCompilationLineSumAggregateOutputType | null;
    _min: PayoutCompilationLineMinAggregateOutputType | null;
    _max: PayoutCompilationLineMaxAggregateOutputType | null;
};
export type PayoutCompilationLineAvgAggregateOutputType = {
    grossKobo: number | null;
    whtKobo: number | null;
    netKobo: number | null;
};
export type PayoutCompilationLineSumAggregateOutputType = {
    grossKobo: bigint | null;
    whtKobo: bigint | null;
    netKobo: bigint | null;
};
export type PayoutCompilationLineMinAggregateOutputType = {
    id: string | null;
    batchId: string | null;
    investorId: string | null;
    productAccountId: string | null;
    ndMandateAccountId: string | null;
    grossKobo: bigint | null;
    whtKobo: bigint | null;
    netKobo: bigint | null;
    whtExempt: boolean | null;
    whtRateVersionId: string | null;
};
export type PayoutCompilationLineMaxAggregateOutputType = {
    id: string | null;
    batchId: string | null;
    investorId: string | null;
    productAccountId: string | null;
    ndMandateAccountId: string | null;
    grossKobo: bigint | null;
    whtKobo: bigint | null;
    netKobo: bigint | null;
    whtExempt: boolean | null;
    whtRateVersionId: string | null;
};
export type PayoutCompilationLineCountAggregateOutputType = {
    id: number;
    batchId: number;
    investorId: number;
    productAccountId: number;
    ndMandateAccountId: number;
    grossKobo: number;
    whtKobo: number;
    netKobo: number;
    whtExempt: number;
    whtRateVersionId: number;
    _all: number;
};
export type PayoutCompilationLineAvgAggregateInputType = {
    grossKobo?: true;
    whtKobo?: true;
    netKobo?: true;
};
export type PayoutCompilationLineSumAggregateInputType = {
    grossKobo?: true;
    whtKobo?: true;
    netKobo?: true;
};
export type PayoutCompilationLineMinAggregateInputType = {
    id?: true;
    batchId?: true;
    investorId?: true;
    productAccountId?: true;
    ndMandateAccountId?: true;
    grossKobo?: true;
    whtKobo?: true;
    netKobo?: true;
    whtExempt?: true;
    whtRateVersionId?: true;
};
export type PayoutCompilationLineMaxAggregateInputType = {
    id?: true;
    batchId?: true;
    investorId?: true;
    productAccountId?: true;
    ndMandateAccountId?: true;
    grossKobo?: true;
    whtKobo?: true;
    netKobo?: true;
    whtExempt?: true;
    whtRateVersionId?: true;
};
export type PayoutCompilationLineCountAggregateInputType = {
    id?: true;
    batchId?: true;
    investorId?: true;
    productAccountId?: true;
    ndMandateAccountId?: true;
    grossKobo?: true;
    whtKobo?: true;
    netKobo?: true;
    whtExempt?: true;
    whtRateVersionId?: true;
    _all?: true;
};
export type PayoutCompilationLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationLineWhereInput;
    orderBy?: Prisma.PayoutCompilationLineOrderByWithRelationInput | Prisma.PayoutCompilationLineOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayoutCompilationLineCountAggregateInputType;
    _avg?: PayoutCompilationLineAvgAggregateInputType;
    _sum?: PayoutCompilationLineSumAggregateInputType;
    _min?: PayoutCompilationLineMinAggregateInputType;
    _max?: PayoutCompilationLineMaxAggregateInputType;
};
export type GetPayoutCompilationLineAggregateType<T extends PayoutCompilationLineAggregateArgs> = {
    [P in keyof T & keyof AggregatePayoutCompilationLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayoutCompilationLine[P]> : Prisma.GetScalarType<T[P], AggregatePayoutCompilationLine[P]>;
};
export type PayoutCompilationLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationLineWhereInput;
    orderBy?: Prisma.PayoutCompilationLineOrderByWithAggregationInput | Prisma.PayoutCompilationLineOrderByWithAggregationInput[];
    by: Prisma.PayoutCompilationLineScalarFieldEnum[] | Prisma.PayoutCompilationLineScalarFieldEnum;
    having?: Prisma.PayoutCompilationLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayoutCompilationLineCountAggregateInputType | true;
    _avg?: PayoutCompilationLineAvgAggregateInputType;
    _sum?: PayoutCompilationLineSumAggregateInputType;
    _min?: PayoutCompilationLineMinAggregateInputType;
    _max?: PayoutCompilationLineMaxAggregateInputType;
};
export type PayoutCompilationLineGroupByOutputType = {
    id: string;
    batchId: string;
    investorId: string;
    productAccountId: string | null;
    ndMandateAccountId: string | null;
    grossKobo: bigint;
    whtKobo: bigint;
    netKobo: bigint;
    whtExempt: boolean;
    whtRateVersionId: string | null;
    _count: PayoutCompilationLineCountAggregateOutputType | null;
    _avg: PayoutCompilationLineAvgAggregateOutputType | null;
    _sum: PayoutCompilationLineSumAggregateOutputType | null;
    _min: PayoutCompilationLineMinAggregateOutputType | null;
    _max: PayoutCompilationLineMaxAggregateOutputType | null;
};
export type GetPayoutCompilationLineGroupByPayload<T extends PayoutCompilationLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayoutCompilationLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayoutCompilationLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayoutCompilationLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayoutCompilationLineGroupByOutputType[P]>;
}>>;
export type PayoutCompilationLineWhereInput = {
    AND?: Prisma.PayoutCompilationLineWhereInput | Prisma.PayoutCompilationLineWhereInput[];
    OR?: Prisma.PayoutCompilationLineWhereInput[];
    NOT?: Prisma.PayoutCompilationLineWhereInput | Prisma.PayoutCompilationLineWhereInput[];
    id?: Prisma.UuidFilter<"PayoutCompilationLine"> | string;
    batchId?: Prisma.UuidFilter<"PayoutCompilationLine"> | string;
    investorId?: Prisma.StringFilter<"PayoutCompilationLine"> | string;
    productAccountId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    grossKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    whtKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    netKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    whtExempt?: Prisma.BoolFilter<"PayoutCompilationLine"> | boolean;
    whtRateVersionId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    batch?: Prisma.XOR<Prisma.PayoutCompilationBatchScalarRelationFilter, Prisma.PayoutCompilationBatchWhereInput>;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    productAccount?: Prisma.XOR<Prisma.ProductAccountNullableScalarRelationFilter, Prisma.ProductAccountWhereInput> | null;
    ndMandateAccount?: Prisma.XOR<Prisma.NdMandateAccountNullableScalarRelationFilter, Prisma.NdMandateAccountWhereInput> | null;
    whtRateVersion?: Prisma.XOR<Prisma.TaxRateVersionNullableScalarRelationFilter, Prisma.TaxRateVersionWhereInput> | null;
};
export type PayoutCompilationLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    whtKobo?: Prisma.SortOrder;
    netKobo?: Prisma.SortOrder;
    whtExempt?: Prisma.SortOrder;
    whtRateVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    batch?: Prisma.PayoutCompilationBatchOrderByWithRelationInput;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    productAccount?: Prisma.ProductAccountOrderByWithRelationInput;
    ndMandateAccount?: Prisma.NdMandateAccountOrderByWithRelationInput;
    whtRateVersion?: Prisma.TaxRateVersionOrderByWithRelationInput;
};
export type PayoutCompilationLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PayoutCompilationLineWhereInput | Prisma.PayoutCompilationLineWhereInput[];
    OR?: Prisma.PayoutCompilationLineWhereInput[];
    NOT?: Prisma.PayoutCompilationLineWhereInput | Prisma.PayoutCompilationLineWhereInput[];
    batchId?: Prisma.UuidFilter<"PayoutCompilationLine"> | string;
    investorId?: Prisma.StringFilter<"PayoutCompilationLine"> | string;
    productAccountId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    grossKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    whtKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    netKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    whtExempt?: Prisma.BoolFilter<"PayoutCompilationLine"> | boolean;
    whtRateVersionId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    batch?: Prisma.XOR<Prisma.PayoutCompilationBatchScalarRelationFilter, Prisma.PayoutCompilationBatchWhereInput>;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    productAccount?: Prisma.XOR<Prisma.ProductAccountNullableScalarRelationFilter, Prisma.ProductAccountWhereInput> | null;
    ndMandateAccount?: Prisma.XOR<Prisma.NdMandateAccountNullableScalarRelationFilter, Prisma.NdMandateAccountWhereInput> | null;
    whtRateVersion?: Prisma.XOR<Prisma.TaxRateVersionNullableScalarRelationFilter, Prisma.TaxRateVersionWhereInput> | null;
}, "id">;
export type PayoutCompilationLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    whtKobo?: Prisma.SortOrder;
    netKobo?: Prisma.SortOrder;
    whtExempt?: Prisma.SortOrder;
    whtRateVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PayoutCompilationLineCountOrderByAggregateInput;
    _avg?: Prisma.PayoutCompilationLineAvgOrderByAggregateInput;
    _max?: Prisma.PayoutCompilationLineMaxOrderByAggregateInput;
    _min?: Prisma.PayoutCompilationLineMinOrderByAggregateInput;
    _sum?: Prisma.PayoutCompilationLineSumOrderByAggregateInput;
};
export type PayoutCompilationLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayoutCompilationLineScalarWhereWithAggregatesInput | Prisma.PayoutCompilationLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayoutCompilationLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayoutCompilationLineScalarWhereWithAggregatesInput | Prisma.PayoutCompilationLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PayoutCompilationLine"> | string;
    batchId?: Prisma.UuidWithAggregatesFilter<"PayoutCompilationLine"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"PayoutCompilationLine"> | string;
    productAccountId?: Prisma.UuidNullableWithAggregatesFilter<"PayoutCompilationLine"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableWithAggregatesFilter<"PayoutCompilationLine"> | string | null;
    grossKobo?: Prisma.BigIntWithAggregatesFilter<"PayoutCompilationLine"> | bigint | number;
    whtKobo?: Prisma.BigIntWithAggregatesFilter<"PayoutCompilationLine"> | bigint | number;
    netKobo?: Prisma.BigIntWithAggregatesFilter<"PayoutCompilationLine"> | bigint | number;
    whtExempt?: Prisma.BoolWithAggregatesFilter<"PayoutCompilationLine"> | boolean;
    whtRateVersionId?: Prisma.UuidNullableWithAggregatesFilter<"PayoutCompilationLine"> | string | null;
};
export type PayoutCompilationLineCreateInput = {
    id?: string;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    batch: Prisma.PayoutCompilationBatchCreateNestedOneWithoutLinesInput;
    investor: Prisma.InvestorCreateNestedOneWithoutPayoutCompilationLinesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    whtRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutPayoutLinesInput;
};
export type PayoutCompilationLineUncheckedCreateInput = {
    id?: string;
    batchId: string;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batch?: Prisma.PayoutCompilationBatchUpdateOneRequiredWithoutLinesNestedInput;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutPayoutCompilationLinesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    whtRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutPayoutLinesNestedInput;
};
export type PayoutCompilationLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineCreateManyInput = {
    id?: string;
    batchId: string;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PayoutCompilationLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineListRelationFilter = {
    every?: Prisma.PayoutCompilationLineWhereInput;
    some?: Prisma.PayoutCompilationLineWhereInput;
    none?: Prisma.PayoutCompilationLineWhereInput;
};
export type PayoutCompilationLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayoutCompilationLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    whtKobo?: Prisma.SortOrder;
    netKobo?: Prisma.SortOrder;
    whtExempt?: Prisma.SortOrder;
    whtRateVersionId?: Prisma.SortOrder;
};
export type PayoutCompilationLineAvgOrderByAggregateInput = {
    grossKobo?: Prisma.SortOrder;
    whtKobo?: Prisma.SortOrder;
    netKobo?: Prisma.SortOrder;
};
export type PayoutCompilationLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    whtKobo?: Prisma.SortOrder;
    netKobo?: Prisma.SortOrder;
    whtExempt?: Prisma.SortOrder;
    whtRateVersionId?: Prisma.SortOrder;
};
export type PayoutCompilationLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    whtKobo?: Prisma.SortOrder;
    netKobo?: Prisma.SortOrder;
    whtExempt?: Prisma.SortOrder;
    whtRateVersionId?: Prisma.SortOrder;
};
export type PayoutCompilationLineSumOrderByAggregateInput = {
    grossKobo?: Prisma.SortOrder;
    whtKobo?: Prisma.SortOrder;
    netKobo?: Prisma.SortOrder;
};
export type PayoutCompilationLineCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput> | Prisma.PayoutCompilationLineCreateWithoutInvestorInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyInvestorInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput> | Prisma.PayoutCompilationLineCreateWithoutInvestorInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyInvestorInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput> | Prisma.PayoutCompilationLineCreateWithoutInvestorInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutInvestorInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyInvestorInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutInvestorInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutInvestorInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput> | Prisma.PayoutCompilationLineCreateWithoutInvestorInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutInvestorInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyInvestorInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutInvestorInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutInvestorInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineCreateNestedManyWithoutProductAccountInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput> | Prisma.PayoutCompilationLineCreateWithoutProductAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyProductAccountInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUncheckedCreateNestedManyWithoutProductAccountInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput> | Prisma.PayoutCompilationLineCreateWithoutProductAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyProductAccountInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUpdateManyWithoutProductAccountNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput> | Prisma.PayoutCompilationLineCreateWithoutProductAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutProductAccountInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutProductAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyProductAccountInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutProductAccountInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutProductAccountInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutProductAccountInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutProductAccountInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutProductAccountNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput> | Prisma.PayoutCompilationLineCreateWithoutProductAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutProductAccountInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutProductAccountInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutProductAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyProductAccountInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutProductAccountInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutProductAccountInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutProductAccountInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutProductAccountInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineCreateNestedManyWithoutNdMandateAccountInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput> | Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyNdMandateAccountInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUncheckedCreateNestedManyWithoutNdMandateAccountInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput> | Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyNdMandateAccountInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUpdateManyWithoutNdMandateAccountNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput> | Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutNdMandateAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyNdMandateAccountInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutNdMandateAccountInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutNdMandateAccountInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutNdMandateAccountNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput> | Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutNdMandateAccountInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyNdMandateAccountInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutNdMandateAccountInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutNdMandateAccountInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutNdMandateAccountInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput> | Prisma.PayoutCompilationLineCreateWithoutBatchInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyBatchInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUncheckedCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput> | Prisma.PayoutCompilationLineCreateWithoutBatchInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyBatchInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput> | Prisma.PayoutCompilationLineCreateWithoutBatchInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutBatchInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyBatchInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutBatchInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutBatchInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput> | Prisma.PayoutCompilationLineCreateWithoutBatchInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutBatchInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyBatchInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutBatchInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutBatchInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineCreateNestedManyWithoutWhtRateVersionInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput> | Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyWhtRateVersionInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUncheckedCreateNestedManyWithoutWhtRateVersionInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput> | Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyWhtRateVersionInputEnvelope;
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
};
export type PayoutCompilationLineUpdateManyWithoutWhtRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput> | Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutWhtRateVersionInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyWhtRateVersionInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutWhtRateVersionInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutWhtRateVersionInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput> | Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput[] | Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput[];
    connectOrCreate?: Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput[];
    upsert?: Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineUpsertWithWhereUniqueWithoutWhtRateVersionInput[];
    createMany?: Prisma.PayoutCompilationLineCreateManyWhtRateVersionInputEnvelope;
    set?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationLineWhereUniqueInput | Prisma.PayoutCompilationLineWhereUniqueInput[];
    update?: Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineUpdateWithWhereUniqueWithoutWhtRateVersionInput[];
    updateMany?: Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutWhtRateVersionInput | Prisma.PayoutCompilationLineUpdateManyWithWhereWithoutWhtRateVersionInput[];
    deleteMany?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
};
export type PayoutCompilationLineCreateWithoutInvestorInput = {
    id?: string;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    batch: Prisma.PayoutCompilationBatchCreateNestedOneWithoutLinesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    whtRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutPayoutLinesInput;
};
export type PayoutCompilationLineUncheckedCreateWithoutInvestorInput = {
    id?: string;
    batchId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineCreateOrConnectWithoutInvestorInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput>;
};
export type PayoutCompilationLineCreateManyInvestorInputEnvelope = {
    data: Prisma.PayoutCompilationLineCreateManyInvestorInput | Prisma.PayoutCompilationLineCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationLineUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutInvestorInput>;
};
export type PayoutCompilationLineUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutInvestorInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutInvestorInput>;
};
export type PayoutCompilationLineUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.PayoutCompilationLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateManyMutationInput, Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutInvestorInput>;
};
export type PayoutCompilationLineScalarWhereInput = {
    AND?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
    OR?: Prisma.PayoutCompilationLineScalarWhereInput[];
    NOT?: Prisma.PayoutCompilationLineScalarWhereInput | Prisma.PayoutCompilationLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"PayoutCompilationLine"> | string;
    batchId?: Prisma.UuidFilter<"PayoutCompilationLine"> | string;
    investorId?: Prisma.StringFilter<"PayoutCompilationLine"> | string;
    productAccountId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
    grossKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    whtKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    netKobo?: Prisma.BigIntFilter<"PayoutCompilationLine"> | bigint | number;
    whtExempt?: Prisma.BoolFilter<"PayoutCompilationLine"> | boolean;
    whtRateVersionId?: Prisma.UuidNullableFilter<"PayoutCompilationLine"> | string | null;
};
export type PayoutCompilationLineCreateWithoutProductAccountInput = {
    id?: string;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    batch: Prisma.PayoutCompilationBatchCreateNestedOneWithoutLinesInput;
    investor: Prisma.InvestorCreateNestedOneWithoutPayoutCompilationLinesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    whtRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutPayoutLinesInput;
};
export type PayoutCompilationLineUncheckedCreateWithoutProductAccountInput = {
    id?: string;
    batchId: string;
    investorId: string;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineCreateOrConnectWithoutProductAccountInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput>;
};
export type PayoutCompilationLineCreateManyProductAccountInputEnvelope = {
    data: Prisma.PayoutCompilationLineCreateManyProductAccountInput | Prisma.PayoutCompilationLineCreateManyProductAccountInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationLineUpsertWithWhereUniqueWithoutProductAccountInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutProductAccountInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutProductAccountInput>;
};
export type PayoutCompilationLineUpdateWithWhereUniqueWithoutProductAccountInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutProductAccountInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutProductAccountInput>;
};
export type PayoutCompilationLineUpdateManyWithWhereWithoutProductAccountInput = {
    where: Prisma.PayoutCompilationLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateManyMutationInput, Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutProductAccountInput>;
};
export type PayoutCompilationLineCreateWithoutNdMandateAccountInput = {
    id?: string;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    batch: Prisma.PayoutCompilationBatchCreateNestedOneWithoutLinesInput;
    investor: Prisma.InvestorCreateNestedOneWithoutPayoutCompilationLinesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    whtRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutPayoutLinesInput;
};
export type PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput = {
    id?: string;
    batchId: string;
    investorId: string;
    productAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineCreateOrConnectWithoutNdMandateAccountInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput>;
};
export type PayoutCompilationLineCreateManyNdMandateAccountInputEnvelope = {
    data: Prisma.PayoutCompilationLineCreateManyNdMandateAccountInput | Prisma.PayoutCompilationLineCreateManyNdMandateAccountInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationLineUpsertWithWhereUniqueWithoutNdMandateAccountInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutNdMandateAccountInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutNdMandateAccountInput>;
};
export type PayoutCompilationLineUpdateWithWhereUniqueWithoutNdMandateAccountInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutNdMandateAccountInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutNdMandateAccountInput>;
};
export type PayoutCompilationLineUpdateManyWithWhereWithoutNdMandateAccountInput = {
    where: Prisma.PayoutCompilationLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateManyMutationInput, Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutNdMandateAccountInput>;
};
export type PayoutCompilationLineCreateWithoutBatchInput = {
    id?: string;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    investor: Prisma.InvestorCreateNestedOneWithoutPayoutCompilationLinesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    whtRateVersion?: Prisma.TaxRateVersionCreateNestedOneWithoutPayoutLinesInput;
};
export type PayoutCompilationLineUncheckedCreateWithoutBatchInput = {
    id?: string;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineCreateOrConnectWithoutBatchInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput>;
};
export type PayoutCompilationLineCreateManyBatchInputEnvelope = {
    data: Prisma.PayoutCompilationLineCreateManyBatchInput | Prisma.PayoutCompilationLineCreateManyBatchInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationLineUpsertWithWhereUniqueWithoutBatchInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutBatchInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutBatchInput>;
};
export type PayoutCompilationLineUpdateWithWhereUniqueWithoutBatchInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutBatchInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutBatchInput>;
};
export type PayoutCompilationLineUpdateManyWithWhereWithoutBatchInput = {
    where: Prisma.PayoutCompilationLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateManyMutationInput, Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutBatchInput>;
};
export type PayoutCompilationLineCreateWithoutWhtRateVersionInput = {
    id?: string;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    batch: Prisma.PayoutCompilationBatchCreateNestedOneWithoutLinesInput;
    investor: Prisma.InvestorCreateNestedOneWithoutPayoutCompilationLinesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutPayoutCompilationLinesInput;
};
export type PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput = {
    id?: string;
    batchId: string;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
};
export type PayoutCompilationLineCreateOrConnectWithoutWhtRateVersionInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput>;
};
export type PayoutCompilationLineCreateManyWhtRateVersionInputEnvelope = {
    data: Prisma.PayoutCompilationLineCreateManyWhtRateVersionInput | Prisma.PayoutCompilationLineCreateManyWhtRateVersionInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationLineUpsertWithWhereUniqueWithoutWhtRateVersionInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutWhtRateVersionInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedCreateWithoutWhtRateVersionInput>;
};
export type PayoutCompilationLineUpdateWithWhereUniqueWithoutWhtRateVersionInput = {
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateWithoutWhtRateVersionInput, Prisma.PayoutCompilationLineUncheckedUpdateWithoutWhtRateVersionInput>;
};
export type PayoutCompilationLineUpdateManyWithWhereWithoutWhtRateVersionInput = {
    where: Prisma.PayoutCompilationLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateManyMutationInput, Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionInput>;
};
export type PayoutCompilationLineCreateManyInvestorInput = {
    id?: string;
    batchId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batch?: Prisma.PayoutCompilationBatchUpdateOneRequiredWithoutLinesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    whtRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutPayoutLinesNestedInput;
};
export type PayoutCompilationLineUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineCreateManyProductAccountInput = {
    id?: string;
    batchId: string;
    investorId: string;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineUpdateWithoutProductAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batch?: Prisma.PayoutCompilationBatchUpdateOneRequiredWithoutLinesNestedInput;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutPayoutCompilationLinesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    whtRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutPayoutLinesNestedInput;
};
export type PayoutCompilationLineUncheckedUpdateWithoutProductAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutProductAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineCreateManyNdMandateAccountInput = {
    id?: string;
    batchId: string;
    investorId: string;
    productAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineUpdateWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batch?: Prisma.PayoutCompilationBatchUpdateOneRequiredWithoutLinesNestedInput;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutPayoutCompilationLinesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    whtRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutPayoutLinesNestedInput;
};
export type PayoutCompilationLineUncheckedUpdateWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineCreateManyBatchInput = {
    id?: string;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
    whtRateVersionId?: string | null;
};
export type PayoutCompilationLineUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutPayoutCompilationLinesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    whtRateVersion?: Prisma.TaxRateVersionUpdateOneWithoutPayoutLinesNestedInput;
};
export type PayoutCompilationLineUncheckedUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    whtRateVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PayoutCompilationLineCreateManyWhtRateVersionInput = {
    id?: string;
    batchId: string;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    grossKobo: bigint | number;
    whtKobo?: bigint | number;
    netKobo: bigint | number;
    whtExempt?: boolean;
};
export type PayoutCompilationLineUpdateWithoutWhtRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    batch?: Prisma.PayoutCompilationBatchUpdateOneRequiredWithoutLinesNestedInput;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutPayoutCompilationLinesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutPayoutCompilationLinesNestedInput;
};
export type PayoutCompilationLineUncheckedUpdateWithoutWhtRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PayoutCompilationLineUncheckedUpdateManyWithoutWhtRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    whtExempt?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PayoutCompilationLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    grossKobo?: boolean;
    whtKobo?: boolean;
    netKobo?: boolean;
    whtExempt?: boolean;
    whtRateVersionId?: boolean;
    batch?: boolean | Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs>;
    whtRateVersion?: boolean | Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs>;
}, ExtArgs["result"]["payoutCompilationLine"]>;
export type PayoutCompilationLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    grossKobo?: boolean;
    whtKobo?: boolean;
    netKobo?: boolean;
    whtExempt?: boolean;
    whtRateVersionId?: boolean;
    batch?: boolean | Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs>;
    whtRateVersion?: boolean | Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs>;
}, ExtArgs["result"]["payoutCompilationLine"]>;
export type PayoutCompilationLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    grossKobo?: boolean;
    whtKobo?: boolean;
    netKobo?: boolean;
    whtExempt?: boolean;
    whtRateVersionId?: boolean;
    batch?: boolean | Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs>;
    whtRateVersion?: boolean | Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs>;
}, ExtArgs["result"]["payoutCompilationLine"]>;
export type PayoutCompilationLineSelectScalar = {
    id?: boolean;
    batchId?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    grossKobo?: boolean;
    whtKobo?: boolean;
    netKobo?: boolean;
    whtExempt?: boolean;
    whtRateVersionId?: boolean;
};
export type PayoutCompilationLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batchId" | "investorId" | "productAccountId" | "ndMandateAccountId" | "grossKobo" | "whtKobo" | "netKobo" | "whtExempt" | "whtRateVersionId", ExtArgs["result"]["payoutCompilationLine"]>;
export type PayoutCompilationLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs>;
    whtRateVersion?: boolean | Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs>;
};
export type PayoutCompilationLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs>;
    whtRateVersion?: boolean | Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs>;
};
export type PayoutCompilationLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs>;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs>;
    whtRateVersion?: boolean | Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs>;
};
export type $PayoutCompilationLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayoutCompilationLine";
    objects: {
        batch: Prisma.$PayoutCompilationBatchPayload<ExtArgs>;
        investor: Prisma.$InvestorPayload<ExtArgs>;
        productAccount: Prisma.$ProductAccountPayload<ExtArgs> | null;
        ndMandateAccount: Prisma.$NdMandateAccountPayload<ExtArgs> | null;
        whtRateVersion: Prisma.$TaxRateVersionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        batchId: string;
        investorId: string;
        productAccountId: string | null;
        ndMandateAccountId: string | null;
        grossKobo: bigint;
        whtKobo: bigint;
        netKobo: bigint;
        whtExempt: boolean;
        whtRateVersionId: string | null;
    }, ExtArgs["result"]["payoutCompilationLine"]>;
    composites: {};
};
export type PayoutCompilationLineGetPayload<S extends boolean | null | undefined | PayoutCompilationLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload, S>;
export type PayoutCompilationLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayoutCompilationLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayoutCompilationLineCountAggregateInputType | true;
};
export interface PayoutCompilationLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayoutCompilationLine'];
        meta: {
            name: 'PayoutCompilationLine';
        };
    };
    findUnique<T extends PayoutCompilationLineFindUniqueArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayoutCompilationLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayoutCompilationLineFindFirstArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayoutCompilationLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayoutCompilationLineFindManyArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayoutCompilationLineCreateArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineCreateArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayoutCompilationLineCreateManyArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayoutCompilationLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayoutCompilationLineDeleteArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineDeleteArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayoutCompilationLineUpdateArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineUpdateArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayoutCompilationLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayoutCompilationLineUpdateManyArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayoutCompilationLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayoutCompilationLineUpsertArgs>(args: Prisma.SelectSubset<T, PayoutCompilationLineUpsertArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationLineClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayoutCompilationLineCountArgs>(args?: Prisma.Subset<T, PayoutCompilationLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayoutCompilationLineCountAggregateOutputType> : number>;
    aggregate<T extends PayoutCompilationLineAggregateArgs>(args: Prisma.Subset<T, PayoutCompilationLineAggregateArgs>): Prisma.PrismaPromise<GetPayoutCompilationLineAggregateType<T>>;
    groupBy<T extends PayoutCompilationLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayoutCompilationLineGroupByArgs['orderBy'];
    } : {
        orderBy?: PayoutCompilationLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayoutCompilationLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutCompilationLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayoutCompilationLineFieldRefs;
}
export interface Prisma__PayoutCompilationLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    batch<T extends Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutCompilationBatchDefaultArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productAccount<T extends Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutCompilationLine$productAccountArgs<ExtArgs>>): Prisma.Prisma__ProductAccountClient<runtime.Types.Result.GetResult<Prisma.$ProductAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ndMandateAccount<T extends Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutCompilationLine$ndMandateAccountArgs<ExtArgs>>): Prisma.Prisma__NdMandateAccountClient<runtime.Types.Result.GetResult<Prisma.$NdMandateAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    whtRateVersion<T extends Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutCompilationLine$whtRateVersionArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayoutCompilationLineFieldRefs {
    readonly id: Prisma.FieldRef<"PayoutCompilationLine", 'String'>;
    readonly batchId: Prisma.FieldRef<"PayoutCompilationLine", 'String'>;
    readonly investorId: Prisma.FieldRef<"PayoutCompilationLine", 'String'>;
    readonly productAccountId: Prisma.FieldRef<"PayoutCompilationLine", 'String'>;
    readonly ndMandateAccountId: Prisma.FieldRef<"PayoutCompilationLine", 'String'>;
    readonly grossKobo: Prisma.FieldRef<"PayoutCompilationLine", 'BigInt'>;
    readonly whtKobo: Prisma.FieldRef<"PayoutCompilationLine", 'BigInt'>;
    readonly netKobo: Prisma.FieldRef<"PayoutCompilationLine", 'BigInt'>;
    readonly whtExempt: Prisma.FieldRef<"PayoutCompilationLine", 'Boolean'>;
    readonly whtRateVersionId: Prisma.FieldRef<"PayoutCompilationLine", 'String'>;
}
export type PayoutCompilationLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
};
export type PayoutCompilationLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
};
export type PayoutCompilationLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where?: Prisma.PayoutCompilationLineWhereInput;
    orderBy?: Prisma.PayoutCompilationLineOrderByWithRelationInput | Prisma.PayoutCompilationLineOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutCompilationLineScalarFieldEnum | Prisma.PayoutCompilationLineScalarFieldEnum[];
};
export type PayoutCompilationLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where?: Prisma.PayoutCompilationLineWhereInput;
    orderBy?: Prisma.PayoutCompilationLineOrderByWithRelationInput | Prisma.PayoutCompilationLineOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutCompilationLineScalarFieldEnum | Prisma.PayoutCompilationLineScalarFieldEnum[];
};
export type PayoutCompilationLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where?: Prisma.PayoutCompilationLineWhereInput;
    orderBy?: Prisma.PayoutCompilationLineOrderByWithRelationInput | Prisma.PayoutCompilationLineOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutCompilationLineScalarFieldEnum | Prisma.PayoutCompilationLineScalarFieldEnum[];
};
export type PayoutCompilationLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCompilationLineCreateInput, Prisma.PayoutCompilationLineUncheckedCreateInput>;
};
export type PayoutCompilationLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayoutCompilationLineCreateManyInput | Prisma.PayoutCompilationLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    data: Prisma.PayoutCompilationLineCreateManyInput | Prisma.PayoutCompilationLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayoutCompilationLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayoutCompilationLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateInput, Prisma.PayoutCompilationLineUncheckedUpdateInput>;
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
};
export type PayoutCompilationLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateManyMutationInput, Prisma.PayoutCompilationLineUncheckedUpdateManyInput>;
    where?: Prisma.PayoutCompilationLineWhereInput;
    limit?: number;
};
export type PayoutCompilationLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCompilationLineUpdateManyMutationInput, Prisma.PayoutCompilationLineUncheckedUpdateManyInput>;
    where?: Prisma.PayoutCompilationLineWhereInput;
    limit?: number;
    include?: Prisma.PayoutCompilationLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayoutCompilationLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationLineCreateInput, Prisma.PayoutCompilationLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayoutCompilationLineUpdateInput, Prisma.PayoutCompilationLineUncheckedUpdateInput>;
};
export type PayoutCompilationLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationLineWhereUniqueInput;
};
export type PayoutCompilationLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationLineWhereInput;
    limit?: number;
};
export type PayoutCompilationLine$productAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductAccountSelect<ExtArgs> | null;
    omit?: Prisma.ProductAccountOmit<ExtArgs> | null;
    include?: Prisma.ProductAccountInclude<ExtArgs> | null;
    where?: Prisma.ProductAccountWhereInput;
};
export type PayoutCompilationLine$ndMandateAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateAccountSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateAccountOmit<ExtArgs> | null;
    include?: Prisma.NdMandateAccountInclude<ExtArgs> | null;
    where?: Prisma.NdMandateAccountWhereInput;
};
export type PayoutCompilationLine$whtRateVersionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRateVersionSelect<ExtArgs> | null;
    omit?: Prisma.TaxRateVersionOmit<ExtArgs> | null;
    include?: Prisma.TaxRateVersionInclude<ExtArgs> | null;
    where?: Prisma.TaxRateVersionWhereInput;
};
export type PayoutCompilationLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationLineSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationLineOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationLineInclude<ExtArgs> | null;
};
