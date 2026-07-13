import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NdMandateProvisionalAccrualModel = runtime.Types.Result.DefaultSelection<Prisma.$NdMandateProvisionalAccrualPayload>;
export type AggregateNdMandateProvisionalAccrual = {
    _count: NdMandateProvisionalAccrualCountAggregateOutputType | null;
    _avg: NdMandateProvisionalAccrualAvgAggregateOutputType | null;
    _sum: NdMandateProvisionalAccrualSumAggregateOutputType | null;
    _min: NdMandateProvisionalAccrualMinAggregateOutputType | null;
    _max: NdMandateProvisionalAccrualMaxAggregateOutputType | null;
};
export type NdMandateProvisionalAccrualAvgAggregateOutputType = {
    capitalKobo: number | null;
    expectedRatePct: runtime.Decimal | null;
    provisionalAmountKobo: number | null;
};
export type NdMandateProvisionalAccrualSumAggregateOutputType = {
    capitalKobo: bigint | null;
    expectedRatePct: runtime.Decimal | null;
    provisionalAmountKobo: bigint | null;
};
export type NdMandateProvisionalAccrualMinAggregateOutputType = {
    id: string | null;
    ndMandateAccountId: string | null;
    accrualDate: Date | null;
    capitalKobo: bigint | null;
    expectedRatePct: runtime.Decimal | null;
    provisionalAmountKobo: bigint | null;
    status: $Enums.NdMandateProvisionalStatus | null;
    trueUpJournalRef: string | null;
    reversedAt: Date | null;
    createdAt: Date | null;
};
export type NdMandateProvisionalAccrualMaxAggregateOutputType = {
    id: string | null;
    ndMandateAccountId: string | null;
    accrualDate: Date | null;
    capitalKobo: bigint | null;
    expectedRatePct: runtime.Decimal | null;
    provisionalAmountKobo: bigint | null;
    status: $Enums.NdMandateProvisionalStatus | null;
    trueUpJournalRef: string | null;
    reversedAt: Date | null;
    createdAt: Date | null;
};
export type NdMandateProvisionalAccrualCountAggregateOutputType = {
    id: number;
    ndMandateAccountId: number;
    accrualDate: number;
    capitalKobo: number;
    expectedRatePct: number;
    provisionalAmountKobo: number;
    status: number;
    trueUpJournalRef: number;
    reversedAt: number;
    createdAt: number;
    _all: number;
};
export type NdMandateProvisionalAccrualAvgAggregateInputType = {
    capitalKobo?: true;
    expectedRatePct?: true;
    provisionalAmountKobo?: true;
};
export type NdMandateProvisionalAccrualSumAggregateInputType = {
    capitalKobo?: true;
    expectedRatePct?: true;
    provisionalAmountKobo?: true;
};
export type NdMandateProvisionalAccrualMinAggregateInputType = {
    id?: true;
    ndMandateAccountId?: true;
    accrualDate?: true;
    capitalKobo?: true;
    expectedRatePct?: true;
    provisionalAmountKobo?: true;
    status?: true;
    trueUpJournalRef?: true;
    reversedAt?: true;
    createdAt?: true;
};
export type NdMandateProvisionalAccrualMaxAggregateInputType = {
    id?: true;
    ndMandateAccountId?: true;
    accrualDate?: true;
    capitalKobo?: true;
    expectedRatePct?: true;
    provisionalAmountKobo?: true;
    status?: true;
    trueUpJournalRef?: true;
    reversedAt?: true;
    createdAt?: true;
};
export type NdMandateProvisionalAccrualCountAggregateInputType = {
    id?: true;
    ndMandateAccountId?: true;
    accrualDate?: true;
    capitalKobo?: true;
    expectedRatePct?: true;
    provisionalAmountKobo?: true;
    status?: true;
    trueUpJournalRef?: true;
    reversedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type NdMandateProvisionalAccrualAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    orderBy?: Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput | Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput[];
    cursor?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NdMandateProvisionalAccrualCountAggregateInputType;
    _avg?: NdMandateProvisionalAccrualAvgAggregateInputType;
    _sum?: NdMandateProvisionalAccrualSumAggregateInputType;
    _min?: NdMandateProvisionalAccrualMinAggregateInputType;
    _max?: NdMandateProvisionalAccrualMaxAggregateInputType;
};
export type GetNdMandateProvisionalAccrualAggregateType<T extends NdMandateProvisionalAccrualAggregateArgs> = {
    [P in keyof T & keyof AggregateNdMandateProvisionalAccrual]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNdMandateProvisionalAccrual[P]> : Prisma.GetScalarType<T[P], AggregateNdMandateProvisionalAccrual[P]>;
};
export type NdMandateProvisionalAccrualGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    orderBy?: Prisma.NdMandateProvisionalAccrualOrderByWithAggregationInput | Prisma.NdMandateProvisionalAccrualOrderByWithAggregationInput[];
    by: Prisma.NdMandateProvisionalAccrualScalarFieldEnum[] | Prisma.NdMandateProvisionalAccrualScalarFieldEnum;
    having?: Prisma.NdMandateProvisionalAccrualScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NdMandateProvisionalAccrualCountAggregateInputType | true;
    _avg?: NdMandateProvisionalAccrualAvgAggregateInputType;
    _sum?: NdMandateProvisionalAccrualSumAggregateInputType;
    _min?: NdMandateProvisionalAccrualMinAggregateInputType;
    _max?: NdMandateProvisionalAccrualMaxAggregateInputType;
};
export type NdMandateProvisionalAccrualGroupByOutputType = {
    id: string;
    ndMandateAccountId: string;
    accrualDate: Date;
    capitalKobo: bigint;
    expectedRatePct: runtime.Decimal;
    provisionalAmountKobo: bigint;
    status: $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef: string | null;
    reversedAt: Date | null;
    createdAt: Date;
    _count: NdMandateProvisionalAccrualCountAggregateOutputType | null;
    _avg: NdMandateProvisionalAccrualAvgAggregateOutputType | null;
    _sum: NdMandateProvisionalAccrualSumAggregateOutputType | null;
    _min: NdMandateProvisionalAccrualMinAggregateOutputType | null;
    _max: NdMandateProvisionalAccrualMaxAggregateOutputType | null;
};
export type GetNdMandateProvisionalAccrualGroupByPayload<T extends NdMandateProvisionalAccrualGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NdMandateProvisionalAccrualGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NdMandateProvisionalAccrualGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NdMandateProvisionalAccrualGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NdMandateProvisionalAccrualGroupByOutputType[P]>;
}>>;
export type NdMandateProvisionalAccrualWhereInput = {
    AND?: Prisma.NdMandateProvisionalAccrualWhereInput | Prisma.NdMandateProvisionalAccrualWhereInput[];
    OR?: Prisma.NdMandateProvisionalAccrualWhereInput[];
    NOT?: Prisma.NdMandateProvisionalAccrualWhereInput | Prisma.NdMandateProvisionalAccrualWhereInput[];
    id?: Prisma.UuidFilter<"NdMandateProvisionalAccrual"> | string;
    ndMandateAccountId?: Prisma.UuidFilter<"NdMandateProvisionalAccrual"> | string;
    accrualDate?: Prisma.DateTimeFilter<"NdMandateProvisionalAccrual"> | Date | string;
    capitalKobo?: Prisma.BigIntFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    expectedRatePct?: Prisma.DecimalFilter<"NdMandateProvisionalAccrual"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFilter<"NdMandateProvisionalAccrual"> | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.StringNullableFilter<"NdMandateProvisionalAccrual"> | string | null;
    reversedAt?: Prisma.DateTimeNullableFilter<"NdMandateProvisionalAccrual"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NdMandateProvisionalAccrual"> | Date | string;
    ndMandateAccount?: Prisma.XOR<Prisma.NdMandateAccountScalarRelationFilter, Prisma.NdMandateAccountWhereInput>;
};
export type NdMandateProvisionalAccrualOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    capitalKobo?: Prisma.SortOrder;
    expectedRatePct?: Prisma.SortOrder;
    provisionalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trueUpJournalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    reversedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ndMandateAccount?: Prisma.NdMandateAccountOrderByWithRelationInput;
};
export type NdMandateProvisionalAccrualWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ndMandateAccountId_accrualDate?: Prisma.NdMandateProvisionalAccrualNdMandateAccountIdAccrualDateCompoundUniqueInput;
    AND?: Prisma.NdMandateProvisionalAccrualWhereInput | Prisma.NdMandateProvisionalAccrualWhereInput[];
    OR?: Prisma.NdMandateProvisionalAccrualWhereInput[];
    NOT?: Prisma.NdMandateProvisionalAccrualWhereInput | Prisma.NdMandateProvisionalAccrualWhereInput[];
    ndMandateAccountId?: Prisma.UuidFilter<"NdMandateProvisionalAccrual"> | string;
    accrualDate?: Prisma.DateTimeFilter<"NdMandateProvisionalAccrual"> | Date | string;
    capitalKobo?: Prisma.BigIntFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    expectedRatePct?: Prisma.DecimalFilter<"NdMandateProvisionalAccrual"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFilter<"NdMandateProvisionalAccrual"> | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.StringNullableFilter<"NdMandateProvisionalAccrual"> | string | null;
    reversedAt?: Prisma.DateTimeNullableFilter<"NdMandateProvisionalAccrual"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NdMandateProvisionalAccrual"> | Date | string;
    ndMandateAccount?: Prisma.XOR<Prisma.NdMandateAccountScalarRelationFilter, Prisma.NdMandateAccountWhereInput>;
}, "id" | "ndMandateAccountId_accrualDate">;
export type NdMandateProvisionalAccrualOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    capitalKobo?: Prisma.SortOrder;
    expectedRatePct?: Prisma.SortOrder;
    provisionalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trueUpJournalRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    reversedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.NdMandateProvisionalAccrualCountOrderByAggregateInput;
    _avg?: Prisma.NdMandateProvisionalAccrualAvgOrderByAggregateInput;
    _max?: Prisma.NdMandateProvisionalAccrualMaxOrderByAggregateInput;
    _min?: Prisma.NdMandateProvisionalAccrualMinOrderByAggregateInput;
    _sum?: Prisma.NdMandateProvisionalAccrualSumOrderByAggregateInput;
};
export type NdMandateProvisionalAccrualScalarWhereWithAggregatesInput = {
    AND?: Prisma.NdMandateProvisionalAccrualScalarWhereWithAggregatesInput | Prisma.NdMandateProvisionalAccrualScalarWhereWithAggregatesInput[];
    OR?: Prisma.NdMandateProvisionalAccrualScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NdMandateProvisionalAccrualScalarWhereWithAggregatesInput | Prisma.NdMandateProvisionalAccrualScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"NdMandateProvisionalAccrual"> | string;
    ndMandateAccountId?: Prisma.UuidWithAggregatesFilter<"NdMandateProvisionalAccrual"> | string;
    accrualDate?: Prisma.DateTimeWithAggregatesFilter<"NdMandateProvisionalAccrual"> | Date | string;
    capitalKobo?: Prisma.BigIntWithAggregatesFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    expectedRatePct?: Prisma.DecimalWithAggregatesFilter<"NdMandateProvisionalAccrual"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntWithAggregatesFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusWithAggregatesFilter<"NdMandateProvisionalAccrual"> | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.StringNullableWithAggregatesFilter<"NdMandateProvisionalAccrual"> | string | null;
    reversedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"NdMandateProvisionalAccrual"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"NdMandateProvisionalAccrual"> | Date | string;
};
export type NdMandateProvisionalAccrualCreateInput = {
    id?: string;
    accrualDate: Date | string;
    capitalKobo: bigint | number;
    expectedRatePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo: bigint | number;
    status?: $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: string | null;
    reversedAt?: Date | string | null;
    createdAt?: Date | string;
    ndMandateAccount: Prisma.NdMandateAccountCreateNestedOneWithoutProvisionalAccrualsInput;
};
export type NdMandateProvisionalAccrualUncheckedCreateInput = {
    id?: string;
    ndMandateAccountId: string;
    accrualDate: Date | string;
    capitalKobo: bigint | number;
    expectedRatePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo: bigint | number;
    status?: $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: string | null;
    reversedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NdMandateProvisionalAccrualUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capitalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedRatePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFieldUpdateOperationsInput | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reversedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneRequiredWithoutProvisionalAccrualsNestedInput;
};
export type NdMandateProvisionalAccrualUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ndMandateAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capitalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedRatePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFieldUpdateOperationsInput | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reversedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NdMandateProvisionalAccrualCreateManyInput = {
    id?: string;
    ndMandateAccountId: string;
    accrualDate: Date | string;
    capitalKobo: bigint | number;
    expectedRatePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo: bigint | number;
    status?: $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: string | null;
    reversedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NdMandateProvisionalAccrualUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capitalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedRatePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFieldUpdateOperationsInput | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reversedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NdMandateProvisionalAccrualUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ndMandateAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capitalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedRatePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFieldUpdateOperationsInput | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reversedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NdMandateProvisionalAccrualListRelationFilter = {
    every?: Prisma.NdMandateProvisionalAccrualWhereInput;
    some?: Prisma.NdMandateProvisionalAccrualWhereInput;
    none?: Prisma.NdMandateProvisionalAccrualWhereInput;
};
export type NdMandateProvisionalAccrualOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NdMandateProvisionalAccrualNdMandateAccountIdAccrualDateCompoundUniqueInput = {
    ndMandateAccountId: string;
    accrualDate: Date | string;
};
export type NdMandateProvisionalAccrualCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    capitalKobo?: Prisma.SortOrder;
    expectedRatePct?: Prisma.SortOrder;
    provisionalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trueUpJournalRef?: Prisma.SortOrder;
    reversedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NdMandateProvisionalAccrualAvgOrderByAggregateInput = {
    capitalKobo?: Prisma.SortOrder;
    expectedRatePct?: Prisma.SortOrder;
    provisionalAmountKobo?: Prisma.SortOrder;
};
export type NdMandateProvisionalAccrualMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    capitalKobo?: Prisma.SortOrder;
    expectedRatePct?: Prisma.SortOrder;
    provisionalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trueUpJournalRef?: Prisma.SortOrder;
    reversedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NdMandateProvisionalAccrualMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    accrualDate?: Prisma.SortOrder;
    capitalKobo?: Prisma.SortOrder;
    expectedRatePct?: Prisma.SortOrder;
    provisionalAmountKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trueUpJournalRef?: Prisma.SortOrder;
    reversedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NdMandateProvisionalAccrualSumOrderByAggregateInput = {
    capitalKobo?: Prisma.SortOrder;
    expectedRatePct?: Prisma.SortOrder;
    provisionalAmountKobo?: Prisma.SortOrder;
};
export type NdMandateProvisionalAccrualCreateNestedManyWithoutNdMandateAccountInput = {
    create?: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput> | Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput[] | Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput[];
    createMany?: Prisma.NdMandateProvisionalAccrualCreateManyNdMandateAccountInputEnvelope;
    connect?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
};
export type NdMandateProvisionalAccrualUncheckedCreateNestedManyWithoutNdMandateAccountInput = {
    create?: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput> | Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput[] | Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput[];
    createMany?: Prisma.NdMandateProvisionalAccrualCreateManyNdMandateAccountInputEnvelope;
    connect?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
};
export type NdMandateProvisionalAccrualUpdateManyWithoutNdMandateAccountNestedInput = {
    create?: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput> | Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput[] | Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput[];
    upsert?: Prisma.NdMandateProvisionalAccrualUpsertWithWhereUniqueWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualUpsertWithWhereUniqueWithoutNdMandateAccountInput[];
    createMany?: Prisma.NdMandateProvisionalAccrualCreateManyNdMandateAccountInputEnvelope;
    set?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    disconnect?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    delete?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    connect?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    update?: Prisma.NdMandateProvisionalAccrualUpdateWithWhereUniqueWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualUpdateWithWhereUniqueWithoutNdMandateAccountInput[];
    updateMany?: Prisma.NdMandateProvisionalAccrualUpdateManyWithWhereWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualUpdateManyWithWhereWithoutNdMandateAccountInput[];
    deleteMany?: Prisma.NdMandateProvisionalAccrualScalarWhereInput | Prisma.NdMandateProvisionalAccrualScalarWhereInput[];
};
export type NdMandateProvisionalAccrualUncheckedUpdateManyWithoutNdMandateAccountNestedInput = {
    create?: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput> | Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput[] | Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput[];
    upsert?: Prisma.NdMandateProvisionalAccrualUpsertWithWhereUniqueWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualUpsertWithWhereUniqueWithoutNdMandateAccountInput[];
    createMany?: Prisma.NdMandateProvisionalAccrualCreateManyNdMandateAccountInputEnvelope;
    set?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    disconnect?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    delete?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    connect?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput | Prisma.NdMandateProvisionalAccrualWhereUniqueInput[];
    update?: Prisma.NdMandateProvisionalAccrualUpdateWithWhereUniqueWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualUpdateWithWhereUniqueWithoutNdMandateAccountInput[];
    updateMany?: Prisma.NdMandateProvisionalAccrualUpdateManyWithWhereWithoutNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualUpdateManyWithWhereWithoutNdMandateAccountInput[];
    deleteMany?: Prisma.NdMandateProvisionalAccrualScalarWhereInput | Prisma.NdMandateProvisionalAccrualScalarWhereInput[];
};
export type EnumNdMandateProvisionalStatusFieldUpdateOperationsInput = {
    set?: $Enums.NdMandateProvisionalStatus;
};
export type NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput = {
    id?: string;
    accrualDate: Date | string;
    capitalKobo: bigint | number;
    expectedRatePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo: bigint | number;
    status?: $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: string | null;
    reversedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput = {
    id?: string;
    accrualDate: Date | string;
    capitalKobo: bigint | number;
    expectedRatePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo: bigint | number;
    status?: $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: string | null;
    reversedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NdMandateProvisionalAccrualCreateOrConnectWithoutNdMandateAccountInput = {
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    create: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput>;
};
export type NdMandateProvisionalAccrualCreateManyNdMandateAccountInputEnvelope = {
    data: Prisma.NdMandateProvisionalAccrualCreateManyNdMandateAccountInput | Prisma.NdMandateProvisionalAccrualCreateManyNdMandateAccountInput[];
    skipDuplicates?: boolean;
};
export type NdMandateProvisionalAccrualUpsertWithWhereUniqueWithoutNdMandateAccountInput = {
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    update: Prisma.XOR<Prisma.NdMandateProvisionalAccrualUpdateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedUpdateWithoutNdMandateAccountInput>;
    create: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateWithoutNdMandateAccountInput>;
};
export type NdMandateProvisionalAccrualUpdateWithWhereUniqueWithoutNdMandateAccountInput = {
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    data: Prisma.XOR<Prisma.NdMandateProvisionalAccrualUpdateWithoutNdMandateAccountInput, Prisma.NdMandateProvisionalAccrualUncheckedUpdateWithoutNdMandateAccountInput>;
};
export type NdMandateProvisionalAccrualUpdateManyWithWhereWithoutNdMandateAccountInput = {
    where: Prisma.NdMandateProvisionalAccrualScalarWhereInput;
    data: Prisma.XOR<Prisma.NdMandateProvisionalAccrualUpdateManyMutationInput, Prisma.NdMandateProvisionalAccrualUncheckedUpdateManyWithoutNdMandateAccountInput>;
};
export type NdMandateProvisionalAccrualScalarWhereInput = {
    AND?: Prisma.NdMandateProvisionalAccrualScalarWhereInput | Prisma.NdMandateProvisionalAccrualScalarWhereInput[];
    OR?: Prisma.NdMandateProvisionalAccrualScalarWhereInput[];
    NOT?: Prisma.NdMandateProvisionalAccrualScalarWhereInput | Prisma.NdMandateProvisionalAccrualScalarWhereInput[];
    id?: Prisma.UuidFilter<"NdMandateProvisionalAccrual"> | string;
    ndMandateAccountId?: Prisma.UuidFilter<"NdMandateProvisionalAccrual"> | string;
    accrualDate?: Prisma.DateTimeFilter<"NdMandateProvisionalAccrual"> | Date | string;
    capitalKobo?: Prisma.BigIntFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    expectedRatePct?: Prisma.DecimalFilter<"NdMandateProvisionalAccrual"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFilter<"NdMandateProvisionalAccrual"> | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFilter<"NdMandateProvisionalAccrual"> | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.StringNullableFilter<"NdMandateProvisionalAccrual"> | string | null;
    reversedAt?: Prisma.DateTimeNullableFilter<"NdMandateProvisionalAccrual"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"NdMandateProvisionalAccrual"> | Date | string;
};
export type NdMandateProvisionalAccrualCreateManyNdMandateAccountInput = {
    id?: string;
    accrualDate: Date | string;
    capitalKobo: bigint | number;
    expectedRatePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo: bigint | number;
    status?: $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: string | null;
    reversedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type NdMandateProvisionalAccrualUpdateWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capitalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedRatePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFieldUpdateOperationsInput | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reversedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NdMandateProvisionalAccrualUncheckedUpdateWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capitalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedRatePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFieldUpdateOperationsInput | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reversedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NdMandateProvisionalAccrualUncheckedUpdateManyWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accrualDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capitalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    expectedRatePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    provisionalAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumNdMandateProvisionalStatusFieldUpdateOperationsInput | $Enums.NdMandateProvisionalStatus;
    trueUpJournalRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reversedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NdMandateProvisionalAccrualSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ndMandateAccountId?: boolean;
    accrualDate?: boolean;
    capitalKobo?: boolean;
    expectedRatePct?: boolean;
    provisionalAmountKobo?: boolean;
    status?: boolean;
    trueUpJournalRef?: boolean;
    reversedAt?: boolean;
    createdAt?: boolean;
    ndMandateAccount?: boolean | Prisma.NdMandateAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ndMandateProvisionalAccrual"]>;
export type NdMandateProvisionalAccrualSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ndMandateAccountId?: boolean;
    accrualDate?: boolean;
    capitalKobo?: boolean;
    expectedRatePct?: boolean;
    provisionalAmountKobo?: boolean;
    status?: boolean;
    trueUpJournalRef?: boolean;
    reversedAt?: boolean;
    createdAt?: boolean;
    ndMandateAccount?: boolean | Prisma.NdMandateAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ndMandateProvisionalAccrual"]>;
export type NdMandateProvisionalAccrualSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ndMandateAccountId?: boolean;
    accrualDate?: boolean;
    capitalKobo?: boolean;
    expectedRatePct?: boolean;
    provisionalAmountKobo?: boolean;
    status?: boolean;
    trueUpJournalRef?: boolean;
    reversedAt?: boolean;
    createdAt?: boolean;
    ndMandateAccount?: boolean | Prisma.NdMandateAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ndMandateProvisionalAccrual"]>;
export type NdMandateProvisionalAccrualSelectScalar = {
    id?: boolean;
    ndMandateAccountId?: boolean;
    accrualDate?: boolean;
    capitalKobo?: boolean;
    expectedRatePct?: boolean;
    provisionalAmountKobo?: boolean;
    status?: boolean;
    trueUpJournalRef?: boolean;
    reversedAt?: boolean;
    createdAt?: boolean;
};
export type NdMandateProvisionalAccrualOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ndMandateAccountId" | "accrualDate" | "capitalKobo" | "expectedRatePct" | "provisionalAmountKobo" | "status" | "trueUpJournalRef" | "reversedAt" | "createdAt", ExtArgs["result"]["ndMandateProvisionalAccrual"]>;
export type NdMandateProvisionalAccrualInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ndMandateAccount?: boolean | Prisma.NdMandateAccountDefaultArgs<ExtArgs>;
};
export type NdMandateProvisionalAccrualIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ndMandateAccount?: boolean | Prisma.NdMandateAccountDefaultArgs<ExtArgs>;
};
export type NdMandateProvisionalAccrualIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ndMandateAccount?: boolean | Prisma.NdMandateAccountDefaultArgs<ExtArgs>;
};
export type $NdMandateProvisionalAccrualPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NdMandateProvisionalAccrual";
    objects: {
        ndMandateAccount: Prisma.$NdMandateAccountPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ndMandateAccountId: string;
        accrualDate: Date;
        capitalKobo: bigint;
        expectedRatePct: runtime.Decimal;
        provisionalAmountKobo: bigint;
        status: $Enums.NdMandateProvisionalStatus;
        trueUpJournalRef: string | null;
        reversedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["ndMandateProvisionalAccrual"]>;
    composites: {};
};
export type NdMandateProvisionalAccrualGetPayload<S extends boolean | null | undefined | NdMandateProvisionalAccrualDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload, S>;
export type NdMandateProvisionalAccrualCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NdMandateProvisionalAccrualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NdMandateProvisionalAccrualCountAggregateInputType | true;
};
export interface NdMandateProvisionalAccrualDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NdMandateProvisionalAccrual'];
        meta: {
            name: 'NdMandateProvisionalAccrual';
        };
    };
    findUnique<T extends NdMandateProvisionalAccrualFindUniqueArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NdMandateProvisionalAccrualFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NdMandateProvisionalAccrualFindFirstArgs>(args?: Prisma.SelectSubset<T, NdMandateProvisionalAccrualFindFirstArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NdMandateProvisionalAccrualFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NdMandateProvisionalAccrualFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NdMandateProvisionalAccrualFindManyArgs>(args?: Prisma.SelectSubset<T, NdMandateProvisionalAccrualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NdMandateProvisionalAccrualCreateArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualCreateArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NdMandateProvisionalAccrualCreateManyArgs>(args?: Prisma.SelectSubset<T, NdMandateProvisionalAccrualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NdMandateProvisionalAccrualCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NdMandateProvisionalAccrualCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NdMandateProvisionalAccrualDeleteArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualDeleteArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NdMandateProvisionalAccrualUpdateArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualUpdateArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NdMandateProvisionalAccrualDeleteManyArgs>(args?: Prisma.SelectSubset<T, NdMandateProvisionalAccrualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NdMandateProvisionalAccrualUpdateManyArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NdMandateProvisionalAccrualUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NdMandateProvisionalAccrualUpsertArgs>(args: Prisma.SelectSubset<T, NdMandateProvisionalAccrualUpsertArgs<ExtArgs>>): Prisma.Prisma__NdMandateProvisionalAccrualClient<runtime.Types.Result.GetResult<Prisma.$NdMandateProvisionalAccrualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NdMandateProvisionalAccrualCountArgs>(args?: Prisma.Subset<T, NdMandateProvisionalAccrualCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NdMandateProvisionalAccrualCountAggregateOutputType> : number>;
    aggregate<T extends NdMandateProvisionalAccrualAggregateArgs>(args: Prisma.Subset<T, NdMandateProvisionalAccrualAggregateArgs>): Prisma.PrismaPromise<GetNdMandateProvisionalAccrualAggregateType<T>>;
    groupBy<T extends NdMandateProvisionalAccrualGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NdMandateProvisionalAccrualGroupByArgs['orderBy'];
    } : {
        orderBy?: NdMandateProvisionalAccrualGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NdMandateProvisionalAccrualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNdMandateProvisionalAccrualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NdMandateProvisionalAccrualFieldRefs;
}
export interface Prisma__NdMandateProvisionalAccrualClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ndMandateAccount<T extends Prisma.NdMandateAccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NdMandateAccountDefaultArgs<ExtArgs>>): Prisma.Prisma__NdMandateAccountClient<runtime.Types.Result.GetResult<Prisma.$NdMandateAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NdMandateProvisionalAccrualFieldRefs {
    readonly id: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'String'>;
    readonly ndMandateAccountId: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'String'>;
    readonly accrualDate: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'DateTime'>;
    readonly capitalKobo: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'BigInt'>;
    readonly expectedRatePct: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'Decimal'>;
    readonly provisionalAmountKobo: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'BigInt'>;
    readonly status: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'NdMandateProvisionalStatus'>;
    readonly trueUpJournalRef: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'String'>;
    readonly reversedAt: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"NdMandateProvisionalAccrual", 'DateTime'>;
}
export type NdMandateProvisionalAccrualFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
};
export type NdMandateProvisionalAccrualFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
};
export type NdMandateProvisionalAccrualFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    orderBy?: Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput | Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput[];
    cursor?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NdMandateProvisionalAccrualScalarFieldEnum | Prisma.NdMandateProvisionalAccrualScalarFieldEnum[];
};
export type NdMandateProvisionalAccrualFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    orderBy?: Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput | Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput[];
    cursor?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NdMandateProvisionalAccrualScalarFieldEnum | Prisma.NdMandateProvisionalAccrualScalarFieldEnum[];
};
export type NdMandateProvisionalAccrualFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    orderBy?: Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput | Prisma.NdMandateProvisionalAccrualOrderByWithRelationInput[];
    cursor?: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NdMandateProvisionalAccrualScalarFieldEnum | Prisma.NdMandateProvisionalAccrualScalarFieldEnum[];
};
export type NdMandateProvisionalAccrualCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateInput>;
};
export type NdMandateProvisionalAccrualCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NdMandateProvisionalAccrualCreateManyInput | Prisma.NdMandateProvisionalAccrualCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NdMandateProvisionalAccrualCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    data: Prisma.NdMandateProvisionalAccrualCreateManyInput | Prisma.NdMandateProvisionalAccrualCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NdMandateProvisionalAccrualIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NdMandateProvisionalAccrualUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NdMandateProvisionalAccrualUpdateInput, Prisma.NdMandateProvisionalAccrualUncheckedUpdateInput>;
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
};
export type NdMandateProvisionalAccrualUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NdMandateProvisionalAccrualUpdateManyMutationInput, Prisma.NdMandateProvisionalAccrualUncheckedUpdateManyInput>;
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    limit?: number;
};
export type NdMandateProvisionalAccrualUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NdMandateProvisionalAccrualUpdateManyMutationInput, Prisma.NdMandateProvisionalAccrualUncheckedUpdateManyInput>;
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    limit?: number;
    include?: Prisma.NdMandateProvisionalAccrualIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NdMandateProvisionalAccrualUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
    create: Prisma.XOR<Prisma.NdMandateProvisionalAccrualCreateInput, Prisma.NdMandateProvisionalAccrualUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NdMandateProvisionalAccrualUpdateInput, Prisma.NdMandateProvisionalAccrualUncheckedUpdateInput>;
};
export type NdMandateProvisionalAccrualDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
    where: Prisma.NdMandateProvisionalAccrualWhereUniqueInput;
};
export type NdMandateProvisionalAccrualDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NdMandateProvisionalAccrualWhereInput;
    limit?: number;
};
export type NdMandateProvisionalAccrualDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateProvisionalAccrualSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateProvisionalAccrualOmit<ExtArgs> | null;
    include?: Prisma.NdMandateProvisionalAccrualInclude<ExtArgs> | null;
};
