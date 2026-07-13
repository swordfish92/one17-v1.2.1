import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CounterpartyFacilityApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$CounterpartyFacilityApplicationPayload>;
export type AggregateCounterpartyFacilityApplication = {
    _count: CounterpartyFacilityApplicationCountAggregateOutputType | null;
    _avg: CounterpartyFacilityApplicationAvgAggregateOutputType | null;
    _sum: CounterpartyFacilityApplicationSumAggregateOutputType | null;
    _min: CounterpartyFacilityApplicationMinAggregateOutputType | null;
    _max: CounterpartyFacilityApplicationMaxAggregateOutputType | null;
};
export type CounterpartyFacilityApplicationAvgAggregateOutputType = {
    requestedAmountKobo: number | null;
    targetedReturnPct: runtime.Decimal | null;
};
export type CounterpartyFacilityApplicationSumAggregateOutputType = {
    requestedAmountKobo: bigint | null;
    targetedReturnPct: runtime.Decimal | null;
};
export type CounterpartyFacilityApplicationMinAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    requestedAmountKobo: bigint | null;
    purpose: string | null;
    status: $Enums.FacilityApplicationStatus | null;
    workflowInstanceId: string | null;
    disbursedByUserId: string | null;
    disbursedAt: Date | null;
    targetedReturnPct: runtime.Decimal | null;
    termsRecordedByUserId: string | null;
    termsRecordedAt: Date | null;
    createdAt: Date | null;
};
export type CounterpartyFacilityApplicationMaxAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    requestedAmountKobo: bigint | null;
    purpose: string | null;
    status: $Enums.FacilityApplicationStatus | null;
    workflowInstanceId: string | null;
    disbursedByUserId: string | null;
    disbursedAt: Date | null;
    targetedReturnPct: runtime.Decimal | null;
    termsRecordedByUserId: string | null;
    termsRecordedAt: Date | null;
    createdAt: Date | null;
};
export type CounterpartyFacilityApplicationCountAggregateOutputType = {
    id: number;
    counterpartyId: number;
    requestedAmountKobo: number;
    purpose: number;
    status: number;
    workflowInstanceId: number;
    disbursedByUserId: number;
    disbursedAt: number;
    targetedReturnPct: number;
    termsRecordedByUserId: number;
    termsRecordedAt: number;
    createdAt: number;
    _all: number;
};
export type CounterpartyFacilityApplicationAvgAggregateInputType = {
    requestedAmountKobo?: true;
    targetedReturnPct?: true;
};
export type CounterpartyFacilityApplicationSumAggregateInputType = {
    requestedAmountKobo?: true;
    targetedReturnPct?: true;
};
export type CounterpartyFacilityApplicationMinAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    requestedAmountKobo?: true;
    purpose?: true;
    status?: true;
    workflowInstanceId?: true;
    disbursedByUserId?: true;
    disbursedAt?: true;
    targetedReturnPct?: true;
    termsRecordedByUserId?: true;
    termsRecordedAt?: true;
    createdAt?: true;
};
export type CounterpartyFacilityApplicationMaxAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    requestedAmountKobo?: true;
    purpose?: true;
    status?: true;
    workflowInstanceId?: true;
    disbursedByUserId?: true;
    disbursedAt?: true;
    targetedReturnPct?: true;
    termsRecordedByUserId?: true;
    termsRecordedAt?: true;
    createdAt?: true;
};
export type CounterpartyFacilityApplicationCountAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    requestedAmountKobo?: true;
    purpose?: true;
    status?: true;
    workflowInstanceId?: true;
    disbursedByUserId?: true;
    disbursedAt?: true;
    targetedReturnPct?: true;
    termsRecordedByUserId?: true;
    termsRecordedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CounterpartyFacilityApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    orderBy?: Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput | Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CounterpartyFacilityApplicationCountAggregateInputType;
    _avg?: CounterpartyFacilityApplicationAvgAggregateInputType;
    _sum?: CounterpartyFacilityApplicationSumAggregateInputType;
    _min?: CounterpartyFacilityApplicationMinAggregateInputType;
    _max?: CounterpartyFacilityApplicationMaxAggregateInputType;
};
export type GetCounterpartyFacilityApplicationAggregateType<T extends CounterpartyFacilityApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateCounterpartyFacilityApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCounterpartyFacilityApplication[P]> : Prisma.GetScalarType<T[P], AggregateCounterpartyFacilityApplication[P]>;
};
export type CounterpartyFacilityApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    orderBy?: Prisma.CounterpartyFacilityApplicationOrderByWithAggregationInput | Prisma.CounterpartyFacilityApplicationOrderByWithAggregationInput[];
    by: Prisma.CounterpartyFacilityApplicationScalarFieldEnum[] | Prisma.CounterpartyFacilityApplicationScalarFieldEnum;
    having?: Prisma.CounterpartyFacilityApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CounterpartyFacilityApplicationCountAggregateInputType | true;
    _avg?: CounterpartyFacilityApplicationAvgAggregateInputType;
    _sum?: CounterpartyFacilityApplicationSumAggregateInputType;
    _min?: CounterpartyFacilityApplicationMinAggregateInputType;
    _max?: CounterpartyFacilityApplicationMaxAggregateInputType;
};
export type CounterpartyFacilityApplicationGroupByOutputType = {
    id: string;
    counterpartyId: string;
    requestedAmountKobo: bigint;
    purpose: string;
    status: $Enums.FacilityApplicationStatus;
    workflowInstanceId: string | null;
    disbursedByUserId: string | null;
    disbursedAt: Date | null;
    targetedReturnPct: runtime.Decimal | null;
    termsRecordedByUserId: string | null;
    termsRecordedAt: Date | null;
    createdAt: Date;
    _count: CounterpartyFacilityApplicationCountAggregateOutputType | null;
    _avg: CounterpartyFacilityApplicationAvgAggregateOutputType | null;
    _sum: CounterpartyFacilityApplicationSumAggregateOutputType | null;
    _min: CounterpartyFacilityApplicationMinAggregateOutputType | null;
    _max: CounterpartyFacilityApplicationMaxAggregateOutputType | null;
};
export type GetCounterpartyFacilityApplicationGroupByPayload<T extends CounterpartyFacilityApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CounterpartyFacilityApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CounterpartyFacilityApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CounterpartyFacilityApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CounterpartyFacilityApplicationGroupByOutputType[P]>;
}>>;
export type CounterpartyFacilityApplicationWhereInput = {
    AND?: Prisma.CounterpartyFacilityApplicationWhereInput | Prisma.CounterpartyFacilityApplicationWhereInput[];
    OR?: Prisma.CounterpartyFacilityApplicationWhereInput[];
    NOT?: Prisma.CounterpartyFacilityApplicationWhereInput | Prisma.CounterpartyFacilityApplicationWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyFacilityApplication"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyFacilityApplication"> | string;
    requestedAmountKobo?: Prisma.BigIntFilter<"CounterpartyFacilityApplication"> | bigint | number;
    purpose?: Prisma.StringFilter<"CounterpartyFacilityApplication"> | string;
    status?: Prisma.EnumFacilityApplicationStatusFilter<"CounterpartyFacilityApplication"> | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    disbursedByUserId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    targetedReturnPct?: Prisma.DecimalNullableFilter<"CounterpartyFacilityApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    termsRecordedAt?: Prisma.DateTimeNullableFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyFacilityApplication"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    disbursedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    termsRecordedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationListRelationFilter;
    investmentMemos?: Prisma.InvestmentMemoListRelationFilter;
};
export type CounterpartyFacilityApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetedReturnPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    termsRecordedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    termsRecordedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    disbursedBy?: Prisma.AppUserOrderByWithRelationInput;
    termsRecordedBy?: Prisma.AppUserOrderByWithRelationInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationOrderByRelationAggregateInput;
    investmentMemos?: Prisma.InvestmentMemoOrderByRelationAggregateInput;
};
export type CounterpartyFacilityApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.CounterpartyFacilityApplicationWhereInput | Prisma.CounterpartyFacilityApplicationWhereInput[];
    OR?: Prisma.CounterpartyFacilityApplicationWhereInput[];
    NOT?: Prisma.CounterpartyFacilityApplicationWhereInput | Prisma.CounterpartyFacilityApplicationWhereInput[];
    counterpartyId?: Prisma.UuidFilter<"CounterpartyFacilityApplication"> | string;
    requestedAmountKobo?: Prisma.BigIntFilter<"CounterpartyFacilityApplication"> | bigint | number;
    purpose?: Prisma.StringFilter<"CounterpartyFacilityApplication"> | string;
    status?: Prisma.EnumFacilityApplicationStatusFilter<"CounterpartyFacilityApplication"> | $Enums.FacilityApplicationStatus;
    disbursedByUserId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    targetedReturnPct?: Prisma.DecimalNullableFilter<"CounterpartyFacilityApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    termsRecordedAt?: Prisma.DateTimeNullableFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyFacilityApplication"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    disbursedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    termsRecordedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationListRelationFilter;
    investmentMemos?: Prisma.InvestmentMemoListRelationFilter;
}, "id" | "workflowInstanceId">;
export type CounterpartyFacilityApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetedReturnPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    termsRecordedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    termsRecordedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CounterpartyFacilityApplicationCountOrderByAggregateInput;
    _avg?: Prisma.CounterpartyFacilityApplicationAvgOrderByAggregateInput;
    _max?: Prisma.CounterpartyFacilityApplicationMaxOrderByAggregateInput;
    _min?: Prisma.CounterpartyFacilityApplicationMinOrderByAggregateInput;
    _sum?: Prisma.CounterpartyFacilityApplicationSumOrderByAggregateInput;
};
export type CounterpartyFacilityApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.CounterpartyFacilityApplicationScalarWhereWithAggregatesInput | Prisma.CounterpartyFacilityApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.CounterpartyFacilityApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CounterpartyFacilityApplicationScalarWhereWithAggregatesInput | Prisma.CounterpartyFacilityApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CounterpartyFacilityApplication"> | string;
    counterpartyId?: Prisma.UuidWithAggregatesFilter<"CounterpartyFacilityApplication"> | string;
    requestedAmountKobo?: Prisma.BigIntWithAggregatesFilter<"CounterpartyFacilityApplication"> | bigint | number;
    purpose?: Prisma.StringWithAggregatesFilter<"CounterpartyFacilityApplication"> | string;
    status?: Prisma.EnumFacilityApplicationStatusWithAggregatesFilter<"CounterpartyFacilityApplication"> | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyFacilityApplication"> | string | null;
    disbursedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyFacilityApplication"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    targetedReturnPct?: Prisma.DecimalNullableWithAggregatesFilter<"CounterpartyFacilityApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyFacilityApplication"> | string | null;
    termsRecordedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CounterpartyFacilityApplication"> | Date | string;
};
export type CounterpartyFacilityApplicationCreateInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutFacilityApplicationsInput;
    disbursedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationsDisbursedInput;
    termsRecordedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationTermsRecordedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationUncheckedCreateInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutFacilityApplicationsNestedInput;
    disbursedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationsDisbursedNestedInput;
    termsRecordedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationTermsRecordedNestedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationCreateManyInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CounterpartyFacilityApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyFacilityApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyFacilityApplicationListRelationFilter = {
    every?: Prisma.CounterpartyFacilityApplicationWhereInput;
    some?: Prisma.CounterpartyFacilityApplicationWhereInput;
    none?: Prisma.CounterpartyFacilityApplicationWhereInput;
};
export type CounterpartyFacilityApplicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CounterpartyFacilityApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrder;
    targetedReturnPct?: Prisma.SortOrder;
    termsRecordedByUserId?: Prisma.SortOrder;
    termsRecordedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyFacilityApplicationAvgOrderByAggregateInput = {
    requestedAmountKobo?: Prisma.SortOrder;
    targetedReturnPct?: Prisma.SortOrder;
};
export type CounterpartyFacilityApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrder;
    targetedReturnPct?: Prisma.SortOrder;
    termsRecordedByUserId?: Prisma.SortOrder;
    termsRecordedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyFacilityApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    requestedAmountKobo?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    disbursedByUserId?: Prisma.SortOrder;
    disbursedAt?: Prisma.SortOrder;
    targetedReturnPct?: Prisma.SortOrder;
    termsRecordedByUserId?: Prisma.SortOrder;
    termsRecordedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyFacilityApplicationSumOrderByAggregateInput = {
    requestedAmountKobo?: Prisma.SortOrder;
    targetedReturnPct?: Prisma.SortOrder;
};
export type CounterpartyFacilityApplicationScalarRelationFilter = {
    is?: Prisma.CounterpartyFacilityApplicationWhereInput;
    isNot?: Prisma.CounterpartyFacilityApplicationWhereInput;
};
export type CounterpartyFacilityApplicationNullableScalarRelationFilter = {
    is?: Prisma.CounterpartyFacilityApplicationWhereInput | null;
    isNot?: Prisma.CounterpartyFacilityApplicationWhereInput | null;
};
export type CounterpartyFacilityApplicationCreateNestedManyWithoutDisbursedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyDisbursedByInputEnvelope;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
};
export type CounterpartyFacilityApplicationCreateNestedManyWithoutTermsRecordedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyTermsRecordedByInputEnvelope;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
};
export type CounterpartyFacilityApplicationUncheckedCreateNestedManyWithoutDisbursedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyDisbursedByInputEnvelope;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
};
export type CounterpartyFacilityApplicationUncheckedCreateNestedManyWithoutTermsRecordedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyTermsRecordedByInputEnvelope;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
};
export type CounterpartyFacilityApplicationUpdateManyWithoutDisbursedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput[];
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutDisbursedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyDisbursedByInputEnvelope;
    set?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    delete?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    update?: Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutDisbursedByInput[];
    updateMany?: Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutDisbursedByInput[];
    deleteMany?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
};
export type CounterpartyFacilityApplicationUpdateManyWithoutTermsRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput[];
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutTermsRecordedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyTermsRecordedByInputEnvelope;
    set?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    delete?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    update?: Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutTermsRecordedByInput[];
    updateMany?: Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutTermsRecordedByInput[];
    deleteMany?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
};
export type CounterpartyFacilityApplicationUncheckedUpdateManyWithoutDisbursedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput[];
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutDisbursedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyDisbursedByInputEnvelope;
    set?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    delete?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    update?: Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutDisbursedByInput[];
    updateMany?: Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutDisbursedByInput | Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutDisbursedByInput[];
    deleteMany?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
};
export type CounterpartyFacilityApplicationUncheckedUpdateManyWithoutTermsRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput[];
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutTermsRecordedByInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyTermsRecordedByInputEnvelope;
    set?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    delete?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    update?: Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutTermsRecordedByInput[];
    updateMany?: Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutTermsRecordedByInput[];
    deleteMany?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
};
export type CounterpartyFacilityApplicationCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
};
export type CounterpartyFacilityApplicationUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
};
export type CounterpartyFacilityApplicationUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    delete?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    update?: Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
};
export type CounterpartyFacilityApplicationUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput[] | Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyFacilityApplicationCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    delete?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput | Prisma.CounterpartyFacilityApplicationWhereUniqueInput[];
    update?: Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyFacilityApplicationUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
};
export type EnumFacilityApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.FacilityApplicationStatus;
};
export type CounterpartyFacilityApplicationCreateNestedOneWithoutInvestmentMemosInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutInvestmentMemosInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutInvestmentMemosInput>;
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutInvestmentMemosInput;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
};
export type CounterpartyFacilityApplicationUpdateOneRequiredWithoutInvestmentMemosNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutInvestmentMemosInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutInvestmentMemosInput>;
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutInvestmentMemosInput;
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithoutInvestmentMemosInput;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateToOneWithWhereWithoutInvestmentMemosInput, Prisma.CounterpartyFacilityApplicationUpdateWithoutInvestmentMemosInput>, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutInvestmentMemosInput>;
};
export type CounterpartyFacilityApplicationCreateNestedOneWithoutRepaymentObligationsInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutRepaymentObligationsInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutRepaymentObligationsInput>;
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutRepaymentObligationsInput;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
};
export type CounterpartyFacilityApplicationUpdateOneWithoutRepaymentObligationsNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutRepaymentObligationsInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutRepaymentObligationsInput>;
    connectOrCreate?: Prisma.CounterpartyFacilityApplicationCreateOrConnectWithoutRepaymentObligationsInput;
    upsert?: Prisma.CounterpartyFacilityApplicationUpsertWithoutRepaymentObligationsInput;
    disconnect?: Prisma.CounterpartyFacilityApplicationWhereInput | boolean;
    delete?: Prisma.CounterpartyFacilityApplicationWhereInput | boolean;
    connect?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateToOneWithWhereWithoutRepaymentObligationsInput, Prisma.CounterpartyFacilityApplicationUpdateWithoutRepaymentObligationsInput>, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutRepaymentObligationsInput>;
};
export type CounterpartyFacilityApplicationCreateWithoutDisbursedByInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutFacilityApplicationsInput;
    termsRecordedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationTermsRecordedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationCreateOrConnectWithoutDisbursedByInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput>;
};
export type CounterpartyFacilityApplicationCreateManyDisbursedByInputEnvelope = {
    data: Prisma.CounterpartyFacilityApplicationCreateManyDisbursedByInput | Prisma.CounterpartyFacilityApplicationCreateManyDisbursedByInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutFacilityApplicationsInput;
    disbursedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationsDisbursedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationCreateOrConnectWithoutTermsRecordedByInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput>;
};
export type CounterpartyFacilityApplicationCreateManyTermsRecordedByInputEnvelope = {
    data: Prisma.CounterpartyFacilityApplicationCreateManyTermsRecordedByInput | Prisma.CounterpartyFacilityApplicationCreateManyTermsRecordedByInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutDisbursedByInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutDisbursedByInput>;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutDisbursedByInput>;
};
export type CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutDisbursedByInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutDisbursedByInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutDisbursedByInput>;
};
export type CounterpartyFacilityApplicationUpdateManyWithWhereWithoutDisbursedByInput = {
    where: Prisma.CounterpartyFacilityApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateManyMutationInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateManyWithoutDisbursedByInput>;
};
export type CounterpartyFacilityApplicationScalarWhereInput = {
    AND?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
    OR?: Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
    NOT?: Prisma.CounterpartyFacilityApplicationScalarWhereInput | Prisma.CounterpartyFacilityApplicationScalarWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyFacilityApplication"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyFacilityApplication"> | string;
    requestedAmountKobo?: Prisma.BigIntFilter<"CounterpartyFacilityApplication"> | bigint | number;
    purpose?: Prisma.StringFilter<"CounterpartyFacilityApplication"> | string;
    status?: Prisma.EnumFacilityApplicationStatusFilter<"CounterpartyFacilityApplication"> | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    disbursedByUserId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    disbursedAt?: Prisma.DateTimeNullableFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    targetedReturnPct?: Prisma.DecimalNullableFilter<"CounterpartyFacilityApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.UuidNullableFilter<"CounterpartyFacilityApplication"> | string | null;
    termsRecordedAt?: Prisma.DateTimeNullableFilter<"CounterpartyFacilityApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyFacilityApplication"> | Date | string;
};
export type CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutTermsRecordedByInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutTermsRecordedByInput>;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutTermsRecordedByInput>;
};
export type CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutTermsRecordedByInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutTermsRecordedByInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutTermsRecordedByInput>;
};
export type CounterpartyFacilityApplicationUpdateManyWithWhereWithoutTermsRecordedByInput = {
    where: Prisma.CounterpartyFacilityApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateManyMutationInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateManyWithoutTermsRecordedByInput>;
};
export type CounterpartyFacilityApplicationCreateWithoutCounterpartyInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    disbursedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationsDisbursedInput;
    termsRecordedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationTermsRecordedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedCreateNestedManyWithoutFacilityApplicationInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyFacilityApplicationCreateManyCounterpartyInputEnvelope = {
    data: Prisma.CounterpartyFacilityApplicationCreateManyCounterpartyInput | Prisma.CounterpartyFacilityApplicationCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyFacilityApplicationUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyFacilityApplicationUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutCounterpartyInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutCounterpartyInput>;
};
export type CounterpartyFacilityApplicationUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.CounterpartyFacilityApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateManyMutationInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type CounterpartyFacilityApplicationCreateWithoutInvestmentMemosInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutFacilityApplicationsInput;
    disbursedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationsDisbursedInput;
    termsRecordedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationTermsRecordedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationUncheckedCreateWithoutInvestmentMemosInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationCreateOrConnectWithoutInvestmentMemosInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutInvestmentMemosInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutInvestmentMemosInput>;
};
export type CounterpartyFacilityApplicationUpsertWithoutInvestmentMemosInput = {
    update: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutInvestmentMemosInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutInvestmentMemosInput>;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutInvestmentMemosInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutInvestmentMemosInput>;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
};
export type CounterpartyFacilityApplicationUpdateToOneWithWhereWithoutInvestmentMemosInput = {
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutInvestmentMemosInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutInvestmentMemosInput>;
};
export type CounterpartyFacilityApplicationUpdateWithoutInvestmentMemosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutFacilityApplicationsNestedInput;
    disbursedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationsDisbursedNestedInput;
    termsRecordedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationTermsRecordedNestedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateWithoutInvestmentMemosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationCreateWithoutRepaymentObligationsInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutFacilityApplicationsInput;
    disbursedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationsDisbursedInput;
    termsRecordedBy?: Prisma.AppUserCreateNestedOneWithoutFacilityApplicationTermsRecordedInput;
    investmentMemos?: Prisma.InvestmentMemoCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationUncheckedCreateWithoutRepaymentObligationsInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
    investmentMemos?: Prisma.InvestmentMemoUncheckedCreateNestedManyWithoutFacilityApplicationInput;
};
export type CounterpartyFacilityApplicationCreateOrConnectWithoutRepaymentObligationsInput = {
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutRepaymentObligationsInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutRepaymentObligationsInput>;
};
export type CounterpartyFacilityApplicationUpsertWithoutRepaymentObligationsInput = {
    update: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutRepaymentObligationsInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutRepaymentObligationsInput>;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateWithoutRepaymentObligationsInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateWithoutRepaymentObligationsInput>;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
};
export type CounterpartyFacilityApplicationUpdateToOneWithWhereWithoutRepaymentObligationsInput = {
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateWithoutRepaymentObligationsInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateWithoutRepaymentObligationsInput>;
};
export type CounterpartyFacilityApplicationUpdateWithoutRepaymentObligationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutFacilityApplicationsNestedInput;
    disbursedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationsDisbursedNestedInput;
    termsRecordedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationTermsRecordedNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateWithoutRepaymentObligationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investmentMemos?: Prisma.InvestmentMemoUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationCreateManyDisbursedByInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CounterpartyFacilityApplicationCreateManyTermsRecordedByInput = {
    id?: string;
    counterpartyId: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CounterpartyFacilityApplicationUpdateWithoutDisbursedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutFacilityApplicationsNestedInput;
    termsRecordedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationTermsRecordedNestedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateWithoutDisbursedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateManyWithoutDisbursedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyFacilityApplicationUpdateWithoutTermsRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutFacilityApplicationsNestedInput;
    disbursedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationsDisbursedNestedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateWithoutTermsRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateManyWithoutTermsRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyFacilityApplicationCreateManyCounterpartyInput = {
    id?: string;
    requestedAmountKobo: bigint | number;
    purpose: string;
    status?: $Enums.FacilityApplicationStatus;
    workflowInstanceId?: string | null;
    disbursedByUserId?: string | null;
    disbursedAt?: Date | string | null;
    targetedReturnPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: string | null;
    termsRecordedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CounterpartyFacilityApplicationUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disbursedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationsDisbursedNestedInput;
    termsRecordedBy?: Prisma.AppUserUpdateOneWithoutFacilityApplicationTermsRecordedNestedInput;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repaymentObligations?: Prisma.CounterpartyRepaymentObligationUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
    investmentMemos?: Prisma.InvestmentMemoUncheckedUpdateManyWithoutFacilityApplicationNestedInput;
};
export type CounterpartyFacilityApplicationUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumFacilityApplicationStatusFieldUpdateOperationsInput | $Enums.FacilityApplicationStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disbursedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    targetedReturnPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    termsRecordedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    termsRecordedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyFacilityApplicationCountOutputType = {
    repaymentObligations: number;
    investmentMemos: number;
};
export type CounterpartyFacilityApplicationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repaymentObligations?: boolean | CounterpartyFacilityApplicationCountOutputTypeCountRepaymentObligationsArgs;
    investmentMemos?: boolean | CounterpartyFacilityApplicationCountOutputTypeCountInvestmentMemosArgs;
};
export type CounterpartyFacilityApplicationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationCountOutputTypeSelect<ExtArgs> | null;
};
export type CounterpartyFacilityApplicationCountOutputTypeCountRepaymentObligationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
};
export type CounterpartyFacilityApplicationCountOutputTypeCountInvestmentMemosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentMemoWhereInput;
};
export type CounterpartyFacilityApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    requestedAmountKobo?: boolean;
    purpose?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    targetedReturnPct?: boolean;
    termsRecordedByUserId?: boolean;
    termsRecordedAt?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    disbursedBy?: boolean | Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs>;
    termsRecordedBy?: boolean | Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs>;
    repaymentObligations?: boolean | Prisma.CounterpartyFacilityApplication$repaymentObligationsArgs<ExtArgs>;
    investmentMemos?: boolean | Prisma.CounterpartyFacilityApplication$investmentMemosArgs<ExtArgs>;
    _count?: boolean | Prisma.CounterpartyFacilityApplicationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyFacilityApplication"]>;
export type CounterpartyFacilityApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    requestedAmountKobo?: boolean;
    purpose?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    targetedReturnPct?: boolean;
    termsRecordedByUserId?: boolean;
    termsRecordedAt?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    disbursedBy?: boolean | Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs>;
    termsRecordedBy?: boolean | Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyFacilityApplication"]>;
export type CounterpartyFacilityApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    requestedAmountKobo?: boolean;
    purpose?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    targetedReturnPct?: boolean;
    termsRecordedByUserId?: boolean;
    termsRecordedAt?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    disbursedBy?: boolean | Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs>;
    termsRecordedBy?: boolean | Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyFacilityApplication"]>;
export type CounterpartyFacilityApplicationSelectScalar = {
    id?: boolean;
    counterpartyId?: boolean;
    requestedAmountKobo?: boolean;
    purpose?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    disbursedByUserId?: boolean;
    disbursedAt?: boolean;
    targetedReturnPct?: boolean;
    termsRecordedByUserId?: boolean;
    termsRecordedAt?: boolean;
    createdAt?: boolean;
};
export type CounterpartyFacilityApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "counterpartyId" | "requestedAmountKobo" | "purpose" | "status" | "workflowInstanceId" | "disbursedByUserId" | "disbursedAt" | "targetedReturnPct" | "termsRecordedByUserId" | "termsRecordedAt" | "createdAt", ExtArgs["result"]["counterpartyFacilityApplication"]>;
export type CounterpartyFacilityApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    disbursedBy?: boolean | Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs>;
    termsRecordedBy?: boolean | Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs>;
    repaymentObligations?: boolean | Prisma.CounterpartyFacilityApplication$repaymentObligationsArgs<ExtArgs>;
    investmentMemos?: boolean | Prisma.CounterpartyFacilityApplication$investmentMemosArgs<ExtArgs>;
    _count?: boolean | Prisma.CounterpartyFacilityApplicationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CounterpartyFacilityApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    disbursedBy?: boolean | Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs>;
    termsRecordedBy?: boolean | Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs>;
};
export type CounterpartyFacilityApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    disbursedBy?: boolean | Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs>;
    termsRecordedBy?: boolean | Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs>;
};
export type $CounterpartyFacilityApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CounterpartyFacilityApplication";
    objects: {
        counterparty: Prisma.$CounterpartyPayload<ExtArgs>;
        disbursedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        termsRecordedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        repaymentObligations: Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>[];
        investmentMemos: Prisma.$InvestmentMemoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        counterpartyId: string;
        requestedAmountKobo: bigint;
        purpose: string;
        status: $Enums.FacilityApplicationStatus;
        workflowInstanceId: string | null;
        disbursedByUserId: string | null;
        disbursedAt: Date | null;
        targetedReturnPct: runtime.Decimal | null;
        termsRecordedByUserId: string | null;
        termsRecordedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["counterpartyFacilityApplication"]>;
    composites: {};
};
export type CounterpartyFacilityApplicationGetPayload<S extends boolean | null | undefined | CounterpartyFacilityApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload, S>;
export type CounterpartyFacilityApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CounterpartyFacilityApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CounterpartyFacilityApplicationCountAggregateInputType | true;
};
export interface CounterpartyFacilityApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CounterpartyFacilityApplication'];
        meta: {
            name: 'CounterpartyFacilityApplication';
        };
    };
    findUnique<T extends CounterpartyFacilityApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CounterpartyFacilityApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CounterpartyFacilityApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, CounterpartyFacilityApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CounterpartyFacilityApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CounterpartyFacilityApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CounterpartyFacilityApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyFacilityApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CounterpartyFacilityApplicationCreateArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CounterpartyFacilityApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyFacilityApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CounterpartyFacilityApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CounterpartyFacilityApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CounterpartyFacilityApplicationDeleteArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CounterpartyFacilityApplicationUpdateArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CounterpartyFacilityApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyFacilityApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CounterpartyFacilityApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CounterpartyFacilityApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CounterpartyFacilityApplicationUpsertArgs>(args: Prisma.SelectSubset<T, CounterpartyFacilityApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__CounterpartyFacilityApplicationClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyFacilityApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CounterpartyFacilityApplicationCountArgs>(args?: Prisma.Subset<T, CounterpartyFacilityApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CounterpartyFacilityApplicationCountAggregateOutputType> : number>;
    aggregate<T extends CounterpartyFacilityApplicationAggregateArgs>(args: Prisma.Subset<T, CounterpartyFacilityApplicationAggregateArgs>): Prisma.PrismaPromise<GetCounterpartyFacilityApplicationAggregateType<T>>;
    groupBy<T extends CounterpartyFacilityApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CounterpartyFacilityApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: CounterpartyFacilityApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CounterpartyFacilityApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterpartyFacilityApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CounterpartyFacilityApplicationFieldRefs;
}
export interface Prisma__CounterpartyFacilityApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    counterparty<T extends Prisma.CounterpartyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    disbursedBy<T extends Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyFacilityApplication$disbursedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    termsRecordedBy<T extends Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    repaymentObligations<T extends Prisma.CounterpartyFacilityApplication$repaymentObligationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyFacilityApplication$repaymentObligationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyRepaymentObligationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    investmentMemos<T extends Prisma.CounterpartyFacilityApplication$investmentMemosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyFacilityApplication$investmentMemosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentMemoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CounterpartyFacilityApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"CounterpartyFacilityApplication", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"CounterpartyFacilityApplication", 'String'>;
    readonly requestedAmountKobo: Prisma.FieldRef<"CounterpartyFacilityApplication", 'BigInt'>;
    readonly purpose: Prisma.FieldRef<"CounterpartyFacilityApplication", 'String'>;
    readonly status: Prisma.FieldRef<"CounterpartyFacilityApplication", 'FacilityApplicationStatus'>;
    readonly workflowInstanceId: Prisma.FieldRef<"CounterpartyFacilityApplication", 'String'>;
    readonly disbursedByUserId: Prisma.FieldRef<"CounterpartyFacilityApplication", 'String'>;
    readonly disbursedAt: Prisma.FieldRef<"CounterpartyFacilityApplication", 'DateTime'>;
    readonly targetedReturnPct: Prisma.FieldRef<"CounterpartyFacilityApplication", 'Decimal'>;
    readonly termsRecordedByUserId: Prisma.FieldRef<"CounterpartyFacilityApplication", 'String'>;
    readonly termsRecordedAt: Prisma.FieldRef<"CounterpartyFacilityApplication", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CounterpartyFacilityApplication", 'DateTime'>;
}
export type CounterpartyFacilityApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
};
export type CounterpartyFacilityApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
};
export type CounterpartyFacilityApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    orderBy?: Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput | Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyFacilityApplicationScalarFieldEnum | Prisma.CounterpartyFacilityApplicationScalarFieldEnum[];
};
export type CounterpartyFacilityApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    orderBy?: Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput | Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyFacilityApplicationScalarFieldEnum | Prisma.CounterpartyFacilityApplicationScalarFieldEnum[];
};
export type CounterpartyFacilityApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    orderBy?: Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput | Prisma.CounterpartyFacilityApplicationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyFacilityApplicationScalarFieldEnum | Prisma.CounterpartyFacilityApplicationScalarFieldEnum[];
};
export type CounterpartyFacilityApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateInput>;
};
export type CounterpartyFacilityApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CounterpartyFacilityApplicationCreateManyInput | Prisma.CounterpartyFacilityApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyFacilityApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    data: Prisma.CounterpartyFacilityApplicationCreateManyInput | Prisma.CounterpartyFacilityApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CounterpartyFacilityApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyFacilityApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateInput>;
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
};
export type CounterpartyFacilityApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateManyMutationInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    limit?: number;
};
export type CounterpartyFacilityApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateManyMutationInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    limit?: number;
    include?: Prisma.CounterpartyFacilityApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyFacilityApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyFacilityApplicationCreateInput, Prisma.CounterpartyFacilityApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CounterpartyFacilityApplicationUpdateInput, Prisma.CounterpartyFacilityApplicationUncheckedUpdateInput>;
};
export type CounterpartyFacilityApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
    where: Prisma.CounterpartyFacilityApplicationWhereUniqueInput;
};
export type CounterpartyFacilityApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyFacilityApplicationWhereInput;
    limit?: number;
};
export type CounterpartyFacilityApplication$disbursedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type CounterpartyFacilityApplication$termsRecordedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type CounterpartyFacilityApplication$repaymentObligationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyRepaymentObligationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyRepaymentObligationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyRepaymentObligationInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyRepaymentObligationWhereInput;
    orderBy?: Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput | Prisma.CounterpartyRepaymentObligationOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyRepaymentObligationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyRepaymentObligationScalarFieldEnum | Prisma.CounterpartyRepaymentObligationScalarFieldEnum[];
};
export type CounterpartyFacilityApplication$investmentMemosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentMemoSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentMemoOmit<ExtArgs> | null;
    include?: Prisma.InvestmentMemoInclude<ExtArgs> | null;
    where?: Prisma.InvestmentMemoWhereInput;
    orderBy?: Prisma.InvestmentMemoOrderByWithRelationInput | Prisma.InvestmentMemoOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentMemoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentMemoScalarFieldEnum | Prisma.InvestmentMemoScalarFieldEnum[];
};
export type CounterpartyFacilityApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyFacilityApplicationSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyFacilityApplicationOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyFacilityApplicationInclude<ExtArgs> | null;
};
