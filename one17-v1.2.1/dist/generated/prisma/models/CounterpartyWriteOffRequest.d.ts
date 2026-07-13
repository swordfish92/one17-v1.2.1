import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CounterpartyWriteOffRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$CounterpartyWriteOffRequestPayload>;
export type AggregateCounterpartyWriteOffRequest = {
    _count: CounterpartyWriteOffRequestCountAggregateOutputType | null;
    _avg: CounterpartyWriteOffRequestAvgAggregateOutputType | null;
    _sum: CounterpartyWriteOffRequestSumAggregateOutputType | null;
    _min: CounterpartyWriteOffRequestMinAggregateOutputType | null;
    _max: CounterpartyWriteOffRequestMaxAggregateOutputType | null;
};
export type CounterpartyWriteOffRequestAvgAggregateOutputType = {
    writeOffAmountKobo: number | null;
};
export type CounterpartyWriteOffRequestSumAggregateOutputType = {
    writeOffAmountKobo: bigint | null;
};
export type CounterpartyWriteOffRequestMinAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    writeOffAmountKobo: bigint | null;
    ledgerEntityCode: string | null;
    investmentAccountCode: string | null;
    reason: string | null;
    status: $Enums.CounterpartyWriteOffStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    postedJournalEntryId: string | null;
    createdAt: Date | null;
};
export type CounterpartyWriteOffRequestMaxAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    writeOffAmountKobo: bigint | null;
    ledgerEntityCode: string | null;
    investmentAccountCode: string | null;
    reason: string | null;
    status: $Enums.CounterpartyWriteOffStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    postedJournalEntryId: string | null;
    createdAt: Date | null;
};
export type CounterpartyWriteOffRequestCountAggregateOutputType = {
    id: number;
    counterpartyId: number;
    writeOffAmountKobo: number;
    ledgerEntityCode: number;
    investmentAccountCode: number;
    reason: number;
    status: number;
    requestedByUserId: number;
    workflowInstanceId: number;
    rejectionNotes: number;
    postedJournalEntryId: number;
    createdAt: number;
    _all: number;
};
export type CounterpartyWriteOffRequestAvgAggregateInputType = {
    writeOffAmountKobo?: true;
};
export type CounterpartyWriteOffRequestSumAggregateInputType = {
    writeOffAmountKobo?: true;
};
export type CounterpartyWriteOffRequestMinAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    writeOffAmountKobo?: true;
    ledgerEntityCode?: true;
    investmentAccountCode?: true;
    reason?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    postedJournalEntryId?: true;
    createdAt?: true;
};
export type CounterpartyWriteOffRequestMaxAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    writeOffAmountKobo?: true;
    ledgerEntityCode?: true;
    investmentAccountCode?: true;
    reason?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    postedJournalEntryId?: true;
    createdAt?: true;
};
export type CounterpartyWriteOffRequestCountAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    writeOffAmountKobo?: true;
    ledgerEntityCode?: true;
    investmentAccountCode?: true;
    reason?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    postedJournalEntryId?: true;
    createdAt?: true;
    _all?: true;
};
export type CounterpartyWriteOffRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    orderBy?: Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput | Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CounterpartyWriteOffRequestCountAggregateInputType;
    _avg?: CounterpartyWriteOffRequestAvgAggregateInputType;
    _sum?: CounterpartyWriteOffRequestSumAggregateInputType;
    _min?: CounterpartyWriteOffRequestMinAggregateInputType;
    _max?: CounterpartyWriteOffRequestMaxAggregateInputType;
};
export type GetCounterpartyWriteOffRequestAggregateType<T extends CounterpartyWriteOffRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateCounterpartyWriteOffRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCounterpartyWriteOffRequest[P]> : Prisma.GetScalarType<T[P], AggregateCounterpartyWriteOffRequest[P]>;
};
export type CounterpartyWriteOffRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    orderBy?: Prisma.CounterpartyWriteOffRequestOrderByWithAggregationInput | Prisma.CounterpartyWriteOffRequestOrderByWithAggregationInput[];
    by: Prisma.CounterpartyWriteOffRequestScalarFieldEnum[] | Prisma.CounterpartyWriteOffRequestScalarFieldEnum;
    having?: Prisma.CounterpartyWriteOffRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CounterpartyWriteOffRequestCountAggregateInputType | true;
    _avg?: CounterpartyWriteOffRequestAvgAggregateInputType;
    _sum?: CounterpartyWriteOffRequestSumAggregateInputType;
    _min?: CounterpartyWriteOffRequestMinAggregateInputType;
    _max?: CounterpartyWriteOffRequestMaxAggregateInputType;
};
export type CounterpartyWriteOffRequestGroupByOutputType = {
    id: string;
    counterpartyId: string;
    writeOffAmountKobo: bigint;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status: $Enums.CounterpartyWriteOffStatus;
    requestedByUserId: string;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    postedJournalEntryId: string | null;
    createdAt: Date;
    _count: CounterpartyWriteOffRequestCountAggregateOutputType | null;
    _avg: CounterpartyWriteOffRequestAvgAggregateOutputType | null;
    _sum: CounterpartyWriteOffRequestSumAggregateOutputType | null;
    _min: CounterpartyWriteOffRequestMinAggregateOutputType | null;
    _max: CounterpartyWriteOffRequestMaxAggregateOutputType | null;
};
export type GetCounterpartyWriteOffRequestGroupByPayload<T extends CounterpartyWriteOffRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CounterpartyWriteOffRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CounterpartyWriteOffRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CounterpartyWriteOffRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CounterpartyWriteOffRequestGroupByOutputType[P]>;
}>>;
export type CounterpartyWriteOffRequestWhereInput = {
    AND?: Prisma.CounterpartyWriteOffRequestWhereInput | Prisma.CounterpartyWriteOffRequestWhereInput[];
    OR?: Prisma.CounterpartyWriteOffRequestWhereInput[];
    NOT?: Prisma.CounterpartyWriteOffRequestWhereInput | Prisma.CounterpartyWriteOffRequestWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    writeOffAmountKobo?: Prisma.BigIntFilter<"CounterpartyWriteOffRequest"> | bigint | number;
    ledgerEntityCode?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    investmentAccountCode?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    reason?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFilter<"CounterpartyWriteOffRequest"> | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    postedJournalEntryId?: Prisma.UuidNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyWriteOffRequest"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
};
export type CounterpartyWriteOffRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    writeOffAmountKobo?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    investmentAccountCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    postedJournalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    requestedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
};
export type CounterpartyWriteOffRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.CounterpartyWriteOffRequestWhereInput | Prisma.CounterpartyWriteOffRequestWhereInput[];
    OR?: Prisma.CounterpartyWriteOffRequestWhereInput[];
    NOT?: Prisma.CounterpartyWriteOffRequestWhereInput | Prisma.CounterpartyWriteOffRequestWhereInput[];
    counterpartyId?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    writeOffAmountKobo?: Prisma.BigIntFilter<"CounterpartyWriteOffRequest"> | bigint | number;
    ledgerEntityCode?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    investmentAccountCode?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    reason?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFilter<"CounterpartyWriteOffRequest"> | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    rejectionNotes?: Prisma.StringNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    postedJournalEntryId?: Prisma.UuidNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyWriteOffRequest"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type CounterpartyWriteOffRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    writeOffAmountKobo?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    investmentAccountCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    postedJournalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CounterpartyWriteOffRequestCountOrderByAggregateInput;
    _avg?: Prisma.CounterpartyWriteOffRequestAvgOrderByAggregateInput;
    _max?: Prisma.CounterpartyWriteOffRequestMaxOrderByAggregateInput;
    _min?: Prisma.CounterpartyWriteOffRequestMinOrderByAggregateInput;
    _sum?: Prisma.CounterpartyWriteOffRequestSumOrderByAggregateInput;
};
export type CounterpartyWriteOffRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.CounterpartyWriteOffRequestScalarWhereWithAggregatesInput | Prisma.CounterpartyWriteOffRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.CounterpartyWriteOffRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CounterpartyWriteOffRequestScalarWhereWithAggregatesInput | Prisma.CounterpartyWriteOffRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string;
    counterpartyId?: Prisma.UuidWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string;
    writeOffAmountKobo?: Prisma.BigIntWithAggregatesFilter<"CounterpartyWriteOffRequest"> | bigint | number;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string;
    investmentAccountCode?: Prisma.StringWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusWithAggregatesFilter<"CounterpartyWriteOffRequest"> | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string | null;
    postedJournalEntryId?: Prisma.UuidNullableWithAggregatesFilter<"CounterpartyWriteOffRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CounterpartyWriteOffRequest"> | Date | string;
};
export type CounterpartyWriteOffRequestCreateInput = {
    id?: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutWriteOffRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutCounterpartyWriteOffRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutCounterpartyWriteOffRequestInput;
};
export type CounterpartyWriteOffRequestUncheckedCreateInput = {
    id?: string;
    counterpartyId: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyWriteOffRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutWriteOffRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutCounterpartyWriteOffRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutCounterpartyWriteOffRequestNestedInput;
};
export type CounterpartyWriteOffRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestCreateManyInput = {
    id?: string;
    counterpartyId: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyWriteOffRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestListRelationFilter = {
    every?: Prisma.CounterpartyWriteOffRequestWhereInput;
    some?: Prisma.CounterpartyWriteOffRequestWhereInput;
    none?: Prisma.CounterpartyWriteOffRequestWhereInput;
};
export type CounterpartyWriteOffRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CounterpartyWriteOffRequestNullableScalarRelationFilter = {
    is?: Prisma.CounterpartyWriteOffRequestWhereInput | null;
    isNot?: Prisma.CounterpartyWriteOffRequestWhereInput | null;
};
export type CounterpartyWriteOffRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    writeOffAmountKobo?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    investmentAccountCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    postedJournalEntryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyWriteOffRequestAvgOrderByAggregateInput = {
    writeOffAmountKobo?: Prisma.SortOrder;
};
export type CounterpartyWriteOffRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    writeOffAmountKobo?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    investmentAccountCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    postedJournalEntryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyWriteOffRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    writeOffAmountKobo?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    investmentAccountCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    postedJournalEntryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CounterpartyWriteOffRequestSumOrderByAggregateInput = {
    writeOffAmountKobo?: Prisma.SortOrder;
};
export type CounterpartyWriteOffRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
};
export type CounterpartyWriteOffRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
};
export type CounterpartyWriteOffRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.CounterpartyWriteOffRequestScalarWhereInput | Prisma.CounterpartyWriteOffRequestScalarWhereInput[];
};
export type CounterpartyWriteOffRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.CounterpartyWriteOffRequestScalarWhereInput | Prisma.CounterpartyWriteOffRequestScalarWhereInput[];
};
export type CounterpartyWriteOffRequestCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
};
export type CounterpartyWriteOffRequestUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
};
export type CounterpartyWriteOffRequestUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.CounterpartyWriteOffRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.CounterpartyWriteOffRequestWhereInput | boolean;
    delete?: Prisma.CounterpartyWriteOffRequestWhereInput | boolean;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUpdateWithoutWorkflowInstanceInput>, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type CounterpartyWriteOffRequestUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.CounterpartyWriteOffRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.CounterpartyWriteOffRequestWhereInput | boolean;
    delete?: Prisma.CounterpartyWriteOffRequestWhereInput | boolean;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUpdateWithoutWorkflowInstanceInput>, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type CounterpartyWriteOffRequestCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
};
export type CounterpartyWriteOffRequestUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
};
export type CounterpartyWriteOffRequestUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyWriteOffRequestScalarWhereInput | Prisma.CounterpartyWriteOffRequestScalarWhereInput[];
};
export type CounterpartyWriteOffRequestUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput> | Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput[] | Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.CounterpartyWriteOffRequestCreateManyCounterpartyInputEnvelope;
    set?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    disconnect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    delete?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    connect?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput | Prisma.CounterpartyWriteOffRequestWhereUniqueInput[];
    update?: Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutCounterpartyInput | Prisma.CounterpartyWriteOffRequestUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.CounterpartyWriteOffRequestScalarWhereInput | Prisma.CounterpartyWriteOffRequestScalarWhereInput[];
};
export type EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput = {
    set?: $Enums.CounterpartyWriteOffStatus;
};
export type CounterpartyWriteOffRequestCreateWithoutRequestedByInput = {
    id?: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutWriteOffRequestsInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutCounterpartyWriteOffRequestInput;
};
export type CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    counterpartyId: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyWriteOffRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput>;
};
export type CounterpartyWriteOffRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.CounterpartyWriteOffRequestCreateManyRequestedByInput | Prisma.CounterpartyWriteOffRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutRequestedByInput>;
};
export type CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateWithoutRequestedByInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type CounterpartyWriteOffRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.CounterpartyWriteOffRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateManyMutationInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type CounterpartyWriteOffRequestScalarWhereInput = {
    AND?: Prisma.CounterpartyWriteOffRequestScalarWhereInput | Prisma.CounterpartyWriteOffRequestScalarWhereInput[];
    OR?: Prisma.CounterpartyWriteOffRequestScalarWhereInput[];
    NOT?: Prisma.CounterpartyWriteOffRequestScalarWhereInput | Prisma.CounterpartyWriteOffRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    counterpartyId?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    writeOffAmountKobo?: Prisma.BigIntFilter<"CounterpartyWriteOffRequest"> | bigint | number;
    ledgerEntityCode?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    investmentAccountCode?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    reason?: Prisma.StringFilter<"CounterpartyWriteOffRequest"> | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFilter<"CounterpartyWriteOffRequest"> | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.UuidFilter<"CounterpartyWriteOffRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    postedJournalEntryId?: Prisma.UuidNullableFilter<"CounterpartyWriteOffRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CounterpartyWriteOffRequest"> | Date | string;
};
export type CounterpartyWriteOffRequestCreateWithoutWorkflowInstanceInput = {
    id?: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutWriteOffRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutCounterpartyWriteOffRequestsMadeInput;
};
export type CounterpartyWriteOffRequestUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    counterpartyId: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    requestedByUserId: string;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyWriteOffRequestCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type CounterpartyWriteOffRequestUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
};
export type CounterpartyWriteOffRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateWithoutWorkflowInstanceInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type CounterpartyWriteOffRequestUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutWriteOffRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutCounterpartyWriteOffRequestsMadeNestedInput;
};
export type CounterpartyWriteOffRequestUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestCreateWithoutCounterpartyInput = {
    id?: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutCounterpartyWriteOffRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutCounterpartyWriteOffRequestInput;
};
export type CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyWriteOffRequestCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyWriteOffRequestCreateManyCounterpartyInputEnvelope = {
    data: Prisma.CounterpartyWriteOffRequestCreateManyCounterpartyInput | Prisma.CounterpartyWriteOffRequestCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyWriteOffRequestUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateWithoutCounterpartyInput>;
};
export type CounterpartyWriteOffRequestUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateWithoutCounterpartyInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateWithoutCounterpartyInput>;
};
export type CounterpartyWriteOffRequestUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.CounterpartyWriteOffRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateManyMutationInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type CounterpartyWriteOffRequestCreateManyRequestedByInput = {
    id?: string;
    counterpartyId: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyWriteOffRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutWriteOffRequestsNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutCounterpartyWriteOffRequestNestedInput;
};
export type CounterpartyWriteOffRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestCreateManyCounterpartyInput = {
    id?: string;
    writeOffAmountKobo: bigint | number;
    ledgerEntityCode: string;
    investmentAccountCode: string;
    reason: string;
    status?: $Enums.CounterpartyWriteOffStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    postedJournalEntryId?: string | null;
    createdAt?: Date | string;
};
export type CounterpartyWriteOffRequestUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutCounterpartyWriteOffRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutCounterpartyWriteOffRequestNestedInput;
};
export type CounterpartyWriteOffRequestUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    writeOffAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    investmentAccountCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCounterpartyWriteOffStatusFieldUpdateOperationsInput | $Enums.CounterpartyWriteOffStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postedJournalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CounterpartyWriteOffRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    writeOffAmountKobo?: boolean;
    ledgerEntityCode?: boolean;
    investmentAccountCode?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    postedJournalEntryId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyWriteOffRequest"]>;
export type CounterpartyWriteOffRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    writeOffAmountKobo?: boolean;
    ledgerEntityCode?: boolean;
    investmentAccountCode?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    postedJournalEntryId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyWriteOffRequest"]>;
export type CounterpartyWriteOffRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    writeOffAmountKobo?: boolean;
    ledgerEntityCode?: boolean;
    investmentAccountCode?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    postedJournalEntryId?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["counterpartyWriteOffRequest"]>;
export type CounterpartyWriteOffRequestSelectScalar = {
    id?: boolean;
    counterpartyId?: boolean;
    writeOffAmountKobo?: boolean;
    ledgerEntityCode?: boolean;
    investmentAccountCode?: boolean;
    reason?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    postedJournalEntryId?: boolean;
    createdAt?: boolean;
};
export type CounterpartyWriteOffRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "counterpartyId" | "writeOffAmountKobo" | "ledgerEntityCode" | "investmentAccountCode" | "reason" | "status" | "requestedByUserId" | "workflowInstanceId" | "rejectionNotes" | "postedJournalEntryId" | "createdAt", ExtArgs["result"]["counterpartyWriteOffRequest"]>;
export type CounterpartyWriteOffRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs>;
};
export type CounterpartyWriteOffRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs>;
};
export type CounterpartyWriteOffRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs>;
};
export type $CounterpartyWriteOffRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CounterpartyWriteOffRequest";
    objects: {
        counterparty: Prisma.$CounterpartyPayload<ExtArgs>;
        requestedBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        counterpartyId: string;
        writeOffAmountKobo: bigint;
        ledgerEntityCode: string;
        investmentAccountCode: string;
        reason: string;
        status: $Enums.CounterpartyWriteOffStatus;
        requestedByUserId: string;
        workflowInstanceId: string | null;
        rejectionNotes: string | null;
        postedJournalEntryId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["counterpartyWriteOffRequest"]>;
    composites: {};
};
export type CounterpartyWriteOffRequestGetPayload<S extends boolean | null | undefined | CounterpartyWriteOffRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload, S>;
export type CounterpartyWriteOffRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CounterpartyWriteOffRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CounterpartyWriteOffRequestCountAggregateInputType | true;
};
export interface CounterpartyWriteOffRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CounterpartyWriteOffRequest'];
        meta: {
            name: 'CounterpartyWriteOffRequest';
        };
    };
    findUnique<T extends CounterpartyWriteOffRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CounterpartyWriteOffRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CounterpartyWriteOffRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, CounterpartyWriteOffRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CounterpartyWriteOffRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CounterpartyWriteOffRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CounterpartyWriteOffRequestFindManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyWriteOffRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CounterpartyWriteOffRequestCreateArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestCreateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CounterpartyWriteOffRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyWriteOffRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CounterpartyWriteOffRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CounterpartyWriteOffRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CounterpartyWriteOffRequestDeleteArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CounterpartyWriteOffRequestUpdateArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CounterpartyWriteOffRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, CounterpartyWriteOffRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CounterpartyWriteOffRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CounterpartyWriteOffRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CounterpartyWriteOffRequestUpsertArgs>(args: Prisma.SelectSubset<T, CounterpartyWriteOffRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__CounterpartyWriteOffRequestClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyWriteOffRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CounterpartyWriteOffRequestCountArgs>(args?: Prisma.Subset<T, CounterpartyWriteOffRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CounterpartyWriteOffRequestCountAggregateOutputType> : number>;
    aggregate<T extends CounterpartyWriteOffRequestAggregateArgs>(args: Prisma.Subset<T, CounterpartyWriteOffRequestAggregateArgs>): Prisma.PrismaPromise<GetCounterpartyWriteOffRequestAggregateType<T>>;
    groupBy<T extends CounterpartyWriteOffRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CounterpartyWriteOffRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: CounterpartyWriteOffRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CounterpartyWriteOffRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterpartyWriteOffRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CounterpartyWriteOffRequestFieldRefs;
}
export interface Prisma__CounterpartyWriteOffRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    counterparty<T extends Prisma.CounterpartyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CounterpartyWriteOffRequestFieldRefs {
    readonly id: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly writeOffAmountKobo: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'BigInt'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly investmentAccountCode: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly reason: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly status: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'CounterpartyWriteOffStatus'>;
    readonly requestedByUserId: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly rejectionNotes: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly postedJournalEntryId: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CounterpartyWriteOffRequest", 'DateTime'>;
}
export type CounterpartyWriteOffRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
};
export type CounterpartyWriteOffRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
};
export type CounterpartyWriteOffRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    orderBy?: Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput | Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyWriteOffRequestScalarFieldEnum | Prisma.CounterpartyWriteOffRequestScalarFieldEnum[];
};
export type CounterpartyWriteOffRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    orderBy?: Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput | Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyWriteOffRequestScalarFieldEnum | Prisma.CounterpartyWriteOffRequestScalarFieldEnum[];
};
export type CounterpartyWriteOffRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    orderBy?: Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput | Prisma.CounterpartyWriteOffRequestOrderByWithRelationInput[];
    cursor?: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CounterpartyWriteOffRequestScalarFieldEnum | Prisma.CounterpartyWriteOffRequestScalarFieldEnum[];
};
export type CounterpartyWriteOffRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateInput>;
};
export type CounterpartyWriteOffRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CounterpartyWriteOffRequestCreateManyInput | Prisma.CounterpartyWriteOffRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CounterpartyWriteOffRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    data: Prisma.CounterpartyWriteOffRequestCreateManyInput | Prisma.CounterpartyWriteOffRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CounterpartyWriteOffRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyWriteOffRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateInput>;
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
};
export type CounterpartyWriteOffRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateManyMutationInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    limit?: number;
};
export type CounterpartyWriteOffRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateManyMutationInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateManyInput>;
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    limit?: number;
    include?: Prisma.CounterpartyWriteOffRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CounterpartyWriteOffRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CounterpartyWriteOffRequestCreateInput, Prisma.CounterpartyWriteOffRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CounterpartyWriteOffRequestUpdateInput, Prisma.CounterpartyWriteOffRequestUncheckedUpdateInput>;
};
export type CounterpartyWriteOffRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
    where: Prisma.CounterpartyWriteOffRequestWhereUniqueInput;
};
export type CounterpartyWriteOffRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CounterpartyWriteOffRequestWhereInput;
    limit?: number;
};
export type CounterpartyWriteOffRequest$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type CounterpartyWriteOffRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartyWriteOffRequestSelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyWriteOffRequestOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyWriteOffRequestInclude<ExtArgs> | null;
};
