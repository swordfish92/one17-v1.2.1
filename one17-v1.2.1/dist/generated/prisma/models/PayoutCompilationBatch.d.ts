import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayoutCompilationBatchModel = runtime.Types.Result.DefaultSelection<Prisma.$PayoutCompilationBatchPayload>;
export type AggregatePayoutCompilationBatch = {
    _count: PayoutCompilationBatchCountAggregateOutputType | null;
    _avg: PayoutCompilationBatchAvgAggregateOutputType | null;
    _sum: PayoutCompilationBatchSumAggregateOutputType | null;
    _min: PayoutCompilationBatchMinAggregateOutputType | null;
    _max: PayoutCompilationBatchMaxAggregateOutputType | null;
};
export type PayoutCompilationBatchAvgAggregateOutputType = {
    totalGrossKobo: number | null;
    totalWhtKobo: number | null;
    totalNetKobo: number | null;
};
export type PayoutCompilationBatchSumAggregateOutputType = {
    totalGrossKobo: bigint | null;
    totalWhtKobo: bigint | null;
    totalNetKobo: bigint | null;
};
export type PayoutCompilationBatchMinAggregateOutputType = {
    id: string | null;
    batchNumber: string | null;
    periodLabel: string | null;
    status: $Enums.PayoutBatchStatus | null;
    totalGrossKobo: bigint | null;
    totalWhtKobo: bigint | null;
    totalNetKobo: bigint | null;
    compiledByUserId: string | null;
    workflowInstanceId: string | null;
    bankInstructionLetterInstanceId: string | null;
    paidAt: Date | null;
    paidByUserId: string | null;
    createdAt: Date | null;
};
export type PayoutCompilationBatchMaxAggregateOutputType = {
    id: string | null;
    batchNumber: string | null;
    periodLabel: string | null;
    status: $Enums.PayoutBatchStatus | null;
    totalGrossKobo: bigint | null;
    totalWhtKobo: bigint | null;
    totalNetKobo: bigint | null;
    compiledByUserId: string | null;
    workflowInstanceId: string | null;
    bankInstructionLetterInstanceId: string | null;
    paidAt: Date | null;
    paidByUserId: string | null;
    createdAt: Date | null;
};
export type PayoutCompilationBatchCountAggregateOutputType = {
    id: number;
    batchNumber: number;
    periodLabel: number;
    status: number;
    totalGrossKobo: number;
    totalWhtKobo: number;
    totalNetKobo: number;
    compiledByUserId: number;
    workflowInstanceId: number;
    bankInstructionLetterInstanceId: number;
    paidAt: number;
    paidByUserId: number;
    createdAt: number;
    _all: number;
};
export type PayoutCompilationBatchAvgAggregateInputType = {
    totalGrossKobo?: true;
    totalWhtKobo?: true;
    totalNetKobo?: true;
};
export type PayoutCompilationBatchSumAggregateInputType = {
    totalGrossKobo?: true;
    totalWhtKobo?: true;
    totalNetKobo?: true;
};
export type PayoutCompilationBatchMinAggregateInputType = {
    id?: true;
    batchNumber?: true;
    periodLabel?: true;
    status?: true;
    totalGrossKobo?: true;
    totalWhtKobo?: true;
    totalNetKobo?: true;
    compiledByUserId?: true;
    workflowInstanceId?: true;
    bankInstructionLetterInstanceId?: true;
    paidAt?: true;
    paidByUserId?: true;
    createdAt?: true;
};
export type PayoutCompilationBatchMaxAggregateInputType = {
    id?: true;
    batchNumber?: true;
    periodLabel?: true;
    status?: true;
    totalGrossKobo?: true;
    totalWhtKobo?: true;
    totalNetKobo?: true;
    compiledByUserId?: true;
    workflowInstanceId?: true;
    bankInstructionLetterInstanceId?: true;
    paidAt?: true;
    paidByUserId?: true;
    createdAt?: true;
};
export type PayoutCompilationBatchCountAggregateInputType = {
    id?: true;
    batchNumber?: true;
    periodLabel?: true;
    status?: true;
    totalGrossKobo?: true;
    totalWhtKobo?: true;
    totalNetKobo?: true;
    compiledByUserId?: true;
    workflowInstanceId?: true;
    bankInstructionLetterInstanceId?: true;
    paidAt?: true;
    paidByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type PayoutCompilationBatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationBatchWhereInput;
    orderBy?: Prisma.PayoutCompilationBatchOrderByWithRelationInput | Prisma.PayoutCompilationBatchOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayoutCompilationBatchCountAggregateInputType;
    _avg?: PayoutCompilationBatchAvgAggregateInputType;
    _sum?: PayoutCompilationBatchSumAggregateInputType;
    _min?: PayoutCompilationBatchMinAggregateInputType;
    _max?: PayoutCompilationBatchMaxAggregateInputType;
};
export type GetPayoutCompilationBatchAggregateType<T extends PayoutCompilationBatchAggregateArgs> = {
    [P in keyof T & keyof AggregatePayoutCompilationBatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayoutCompilationBatch[P]> : Prisma.GetScalarType<T[P], AggregatePayoutCompilationBatch[P]>;
};
export type PayoutCompilationBatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationBatchWhereInput;
    orderBy?: Prisma.PayoutCompilationBatchOrderByWithAggregationInput | Prisma.PayoutCompilationBatchOrderByWithAggregationInput[];
    by: Prisma.PayoutCompilationBatchScalarFieldEnum[] | Prisma.PayoutCompilationBatchScalarFieldEnum;
    having?: Prisma.PayoutCompilationBatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayoutCompilationBatchCountAggregateInputType | true;
    _avg?: PayoutCompilationBatchAvgAggregateInputType;
    _sum?: PayoutCompilationBatchSumAggregateInputType;
    _min?: PayoutCompilationBatchMinAggregateInputType;
    _max?: PayoutCompilationBatchMaxAggregateInputType;
};
export type PayoutCompilationBatchGroupByOutputType = {
    id: string;
    batchNumber: string;
    periodLabel: string;
    status: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint;
    totalWhtKobo: bigint;
    totalNetKobo: bigint;
    compiledByUserId: string;
    workflowInstanceId: string | null;
    bankInstructionLetterInstanceId: string | null;
    paidAt: Date | null;
    paidByUserId: string | null;
    createdAt: Date;
    _count: PayoutCompilationBatchCountAggregateOutputType | null;
    _avg: PayoutCompilationBatchAvgAggregateOutputType | null;
    _sum: PayoutCompilationBatchSumAggregateOutputType | null;
    _min: PayoutCompilationBatchMinAggregateOutputType | null;
    _max: PayoutCompilationBatchMaxAggregateOutputType | null;
};
export type GetPayoutCompilationBatchGroupByPayload<T extends PayoutCompilationBatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayoutCompilationBatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayoutCompilationBatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayoutCompilationBatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayoutCompilationBatchGroupByOutputType[P]>;
}>>;
export type PayoutCompilationBatchWhereInput = {
    AND?: Prisma.PayoutCompilationBatchWhereInput | Prisma.PayoutCompilationBatchWhereInput[];
    OR?: Prisma.PayoutCompilationBatchWhereInput[];
    NOT?: Prisma.PayoutCompilationBatchWhereInput | Prisma.PayoutCompilationBatchWhereInput[];
    id?: Prisma.UuidFilter<"PayoutCompilationBatch"> | string;
    batchNumber?: Prisma.StringFilter<"PayoutCompilationBatch"> | string;
    periodLabel?: Prisma.StringFilter<"PayoutCompilationBatch"> | string;
    status?: Prisma.EnumPayoutBatchStatusFilter<"PayoutCompilationBatch"> | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    totalWhtKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    totalNetKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    compiledByUserId?: Prisma.UuidFilter<"PayoutCompilationBatch"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PayoutCompilationBatch"> | string | null;
    bankInstructionLetterInstanceId?: Prisma.UuidNullableFilter<"PayoutCompilationBatch"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PayoutCompilationBatch"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableFilter<"PayoutCompilationBatch"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PayoutCompilationBatch"> | Date | string;
    compiledBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    bankInstructionLetterInstance?: Prisma.XOR<Prisma.LetterInstanceNullableScalarRelationFilter, Prisma.LetterInstanceWhereInput> | null;
    lines?: Prisma.PayoutCompilationLineListRelationFilter;
};
export type PayoutCompilationBatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalGrossKobo?: Prisma.SortOrder;
    totalWhtKobo?: Prisma.SortOrder;
    totalNetKobo?: Prisma.SortOrder;
    compiledByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankInstructionLetterInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    compiledBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceOrderByWithRelationInput;
    lines?: Prisma.PayoutCompilationLineOrderByRelationAggregateInput;
};
export type PayoutCompilationBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    batchNumber?: string;
    workflowInstanceId?: string;
    bankInstructionLetterInstanceId?: string;
    AND?: Prisma.PayoutCompilationBatchWhereInput | Prisma.PayoutCompilationBatchWhereInput[];
    OR?: Prisma.PayoutCompilationBatchWhereInput[];
    NOT?: Prisma.PayoutCompilationBatchWhereInput | Prisma.PayoutCompilationBatchWhereInput[];
    periodLabel?: Prisma.StringFilter<"PayoutCompilationBatch"> | string;
    status?: Prisma.EnumPayoutBatchStatusFilter<"PayoutCompilationBatch"> | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    totalWhtKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    totalNetKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    compiledByUserId?: Prisma.UuidFilter<"PayoutCompilationBatch"> | string;
    paidAt?: Prisma.DateTimeNullableFilter<"PayoutCompilationBatch"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableFilter<"PayoutCompilationBatch"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PayoutCompilationBatch"> | Date | string;
    compiledBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    bankInstructionLetterInstance?: Prisma.XOR<Prisma.LetterInstanceNullableScalarRelationFilter, Prisma.LetterInstanceWhereInput> | null;
    lines?: Prisma.PayoutCompilationLineListRelationFilter;
}, "id" | "batchNumber" | "workflowInstanceId" | "bankInstructionLetterInstanceId">;
export type PayoutCompilationBatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalGrossKobo?: Prisma.SortOrder;
    totalWhtKobo?: Prisma.SortOrder;
    totalNetKobo?: Prisma.SortOrder;
    compiledByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bankInstructionLetterInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PayoutCompilationBatchCountOrderByAggregateInput;
    _avg?: Prisma.PayoutCompilationBatchAvgOrderByAggregateInput;
    _max?: Prisma.PayoutCompilationBatchMaxOrderByAggregateInput;
    _min?: Prisma.PayoutCompilationBatchMinOrderByAggregateInput;
    _sum?: Prisma.PayoutCompilationBatchSumOrderByAggregateInput;
};
export type PayoutCompilationBatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayoutCompilationBatchScalarWhereWithAggregatesInput | Prisma.PayoutCompilationBatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayoutCompilationBatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayoutCompilationBatchScalarWhereWithAggregatesInput | Prisma.PayoutCompilationBatchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PayoutCompilationBatch"> | string;
    batchNumber?: Prisma.StringWithAggregatesFilter<"PayoutCompilationBatch"> | string;
    periodLabel?: Prisma.StringWithAggregatesFilter<"PayoutCompilationBatch"> | string;
    status?: Prisma.EnumPayoutBatchStatusWithAggregatesFilter<"PayoutCompilationBatch"> | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntWithAggregatesFilter<"PayoutCompilationBatch"> | bigint | number;
    totalWhtKobo?: Prisma.BigIntWithAggregatesFilter<"PayoutCompilationBatch"> | bigint | number;
    totalNetKobo?: Prisma.BigIntWithAggregatesFilter<"PayoutCompilationBatch"> | bigint | number;
    compiledByUserId?: Prisma.UuidWithAggregatesFilter<"PayoutCompilationBatch"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"PayoutCompilationBatch"> | string | null;
    bankInstructionLetterInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"PayoutCompilationBatch"> | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PayoutCompilationBatch"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PayoutCompilationBatch"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PayoutCompilationBatch"> | Date | string;
};
export type PayoutCompilationBatchCreateInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    compiledBy: Prisma.AppUserCreateNestedOneWithoutPayoutBatchesCompiledInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutPayoutCompilationBatchInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceCreateNestedOneWithoutPayoutBatchInput;
    lines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchUncheckedCreateInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    compiledByUserId: string;
    workflowInstanceId?: string | null;
    bankInstructionLetterInstanceId?: string | null;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    compiledBy?: Prisma.AppUserUpdateOneRequiredWithoutPayoutBatchesCompiledNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutPayoutCompilationBatchNestedInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceUpdateOneWithoutPayoutBatchNestedInput;
    lines?: Prisma.PayoutCompilationLineUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    compiledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankInstructionLetterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchCreateManyInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    compiledByUserId: string;
    workflowInstanceId?: string | null;
    bankInstructionLetterInstanceId?: string | null;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
};
export type PayoutCompilationBatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCompilationBatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    compiledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankInstructionLetterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCompilationBatchListRelationFilter = {
    every?: Prisma.PayoutCompilationBatchWhereInput;
    some?: Prisma.PayoutCompilationBatchWhereInput;
    none?: Prisma.PayoutCompilationBatchWhereInput;
};
export type PayoutCompilationBatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayoutCompilationBatchNullableScalarRelationFilter = {
    is?: Prisma.PayoutCompilationBatchWhereInput | null;
    isNot?: Prisma.PayoutCompilationBatchWhereInput | null;
};
export type PayoutCompilationBatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalGrossKobo?: Prisma.SortOrder;
    totalWhtKobo?: Prisma.SortOrder;
    totalNetKobo?: Prisma.SortOrder;
    compiledByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    bankInstructionLetterInstanceId?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutCompilationBatchAvgOrderByAggregateInput = {
    totalGrossKobo?: Prisma.SortOrder;
    totalWhtKobo?: Prisma.SortOrder;
    totalNetKobo?: Prisma.SortOrder;
};
export type PayoutCompilationBatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalGrossKobo?: Prisma.SortOrder;
    totalWhtKobo?: Prisma.SortOrder;
    totalNetKobo?: Prisma.SortOrder;
    compiledByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    bankInstructionLetterInstanceId?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutCompilationBatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalGrossKobo?: Prisma.SortOrder;
    totalWhtKobo?: Prisma.SortOrder;
    totalNetKobo?: Prisma.SortOrder;
    compiledByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    bankInstructionLetterInstanceId?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    paidByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutCompilationBatchSumOrderByAggregateInput = {
    totalGrossKobo?: Prisma.SortOrder;
    totalWhtKobo?: Prisma.SortOrder;
    totalNetKobo?: Prisma.SortOrder;
};
export type PayoutCompilationBatchScalarRelationFilter = {
    is?: Prisma.PayoutCompilationBatchWhereInput;
    isNot?: Prisma.PayoutCompilationBatchWhereInput;
};
export type PayoutCompilationBatchCreateNestedManyWithoutCompiledByInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput> | Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput[] | Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput[];
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput | Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput[];
    createMany?: Prisma.PayoutCompilationBatchCreateManyCompiledByInputEnvelope;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
};
export type PayoutCompilationBatchUncheckedCreateNestedManyWithoutCompiledByInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput> | Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput[] | Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput[];
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput | Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput[];
    createMany?: Prisma.PayoutCompilationBatchCreateManyCompiledByInputEnvelope;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
};
export type PayoutCompilationBatchUpdateManyWithoutCompiledByNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput> | Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput[] | Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput[];
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput | Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput[];
    upsert?: Prisma.PayoutCompilationBatchUpsertWithWhereUniqueWithoutCompiledByInput | Prisma.PayoutCompilationBatchUpsertWithWhereUniqueWithoutCompiledByInput[];
    createMany?: Prisma.PayoutCompilationBatchCreateManyCompiledByInputEnvelope;
    set?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    update?: Prisma.PayoutCompilationBatchUpdateWithWhereUniqueWithoutCompiledByInput | Prisma.PayoutCompilationBatchUpdateWithWhereUniqueWithoutCompiledByInput[];
    updateMany?: Prisma.PayoutCompilationBatchUpdateManyWithWhereWithoutCompiledByInput | Prisma.PayoutCompilationBatchUpdateManyWithWhereWithoutCompiledByInput[];
    deleteMany?: Prisma.PayoutCompilationBatchScalarWhereInput | Prisma.PayoutCompilationBatchScalarWhereInput[];
};
export type PayoutCompilationBatchUncheckedUpdateManyWithoutCompiledByNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput> | Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput[] | Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput[];
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput | Prisma.PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput[];
    upsert?: Prisma.PayoutCompilationBatchUpsertWithWhereUniqueWithoutCompiledByInput | Prisma.PayoutCompilationBatchUpsertWithWhereUniqueWithoutCompiledByInput[];
    createMany?: Prisma.PayoutCompilationBatchCreateManyCompiledByInputEnvelope;
    set?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    disconnect?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    delete?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput | Prisma.PayoutCompilationBatchWhereUniqueInput[];
    update?: Prisma.PayoutCompilationBatchUpdateWithWhereUniqueWithoutCompiledByInput | Prisma.PayoutCompilationBatchUpdateWithWhereUniqueWithoutCompiledByInput[];
    updateMany?: Prisma.PayoutCompilationBatchUpdateManyWithWhereWithoutCompiledByInput | Prisma.PayoutCompilationBatchUpdateManyWithWhereWithoutCompiledByInput[];
    deleteMany?: Prisma.PayoutCompilationBatchScalarWhereInput | Prisma.PayoutCompilationBatchScalarWhereInput[];
};
export type PayoutCompilationBatchCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.PayoutCompilationBatchUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    delete?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayoutCompilationBatchUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUpdateWithoutWorkflowInstanceInput>, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type PayoutCompilationBatchUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.PayoutCompilationBatchUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    delete?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayoutCompilationBatchUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUpdateWithoutWorkflowInstanceInput>, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type PayoutCompilationBatchCreateNestedOneWithoutBankInstructionLetterInstanceInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutBankInstructionLetterInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutBankInstructionLetterInstanceInput;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchUncheckedCreateNestedOneWithoutBankInstructionLetterInstanceInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutBankInstructionLetterInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutBankInstructionLetterInstanceInput;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchUpdateOneWithoutBankInstructionLetterInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutBankInstructionLetterInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutBankInstructionLetterInstanceInput;
    upsert?: Prisma.PayoutCompilationBatchUpsertWithoutBankInstructionLetterInstanceInput;
    disconnect?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    delete?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayoutCompilationBatchUpdateToOneWithWhereWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUpdateWithoutBankInstructionLetterInstanceInput>, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutBankInstructionLetterInstanceInput>;
};
export type PayoutCompilationBatchUncheckedUpdateOneWithoutBankInstructionLetterInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutBankInstructionLetterInstanceInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutBankInstructionLetterInstanceInput;
    upsert?: Prisma.PayoutCompilationBatchUpsertWithoutBankInstructionLetterInstanceInput;
    disconnect?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    delete?: Prisma.PayoutCompilationBatchWhereInput | boolean;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayoutCompilationBatchUpdateToOneWithWhereWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUpdateWithoutBankInstructionLetterInstanceInput>, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutBankInstructionLetterInstanceInput>;
};
export type EnumPayoutBatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutBatchStatus;
};
export type PayoutCompilationBatchCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutLinesInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutLinesInput;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutLinesInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PayoutCompilationBatchCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.PayoutCompilationBatchUpsertWithoutLinesInput;
    connect?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayoutCompilationBatchUpdateToOneWithWhereWithoutLinesInput, Prisma.PayoutCompilationBatchUpdateWithoutLinesInput>, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutLinesInput>;
};
export type PayoutCompilationBatchCreateWithoutCompiledByInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutPayoutCompilationBatchInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceCreateNestedOneWithoutPayoutBatchInput;
    lines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    workflowInstanceId?: string | null;
    bankInstructionLetterInstanceId?: string | null;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchCreateOrConnectWithoutCompiledByInput = {
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput>;
};
export type PayoutCompilationBatchCreateManyCompiledByInputEnvelope = {
    data: Prisma.PayoutCompilationBatchCreateManyCompiledByInput | Prisma.PayoutCompilationBatchCreateManyCompiledByInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationBatchUpsertWithWhereUniqueWithoutCompiledByInput = {
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutCompiledByInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutCompiledByInput>;
};
export type PayoutCompilationBatchUpdateWithWhereUniqueWithoutCompiledByInput = {
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutCompiledByInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutCompiledByInput>;
};
export type PayoutCompilationBatchUpdateManyWithWhereWithoutCompiledByInput = {
    where: Prisma.PayoutCompilationBatchScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateManyMutationInput, Prisma.PayoutCompilationBatchUncheckedUpdateManyWithoutCompiledByInput>;
};
export type PayoutCompilationBatchScalarWhereInput = {
    AND?: Prisma.PayoutCompilationBatchScalarWhereInput | Prisma.PayoutCompilationBatchScalarWhereInput[];
    OR?: Prisma.PayoutCompilationBatchScalarWhereInput[];
    NOT?: Prisma.PayoutCompilationBatchScalarWhereInput | Prisma.PayoutCompilationBatchScalarWhereInput[];
    id?: Prisma.UuidFilter<"PayoutCompilationBatch"> | string;
    batchNumber?: Prisma.StringFilter<"PayoutCompilationBatch"> | string;
    periodLabel?: Prisma.StringFilter<"PayoutCompilationBatch"> | string;
    status?: Prisma.EnumPayoutBatchStatusFilter<"PayoutCompilationBatch"> | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    totalWhtKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    totalNetKobo?: Prisma.BigIntFilter<"PayoutCompilationBatch"> | bigint | number;
    compiledByUserId?: Prisma.UuidFilter<"PayoutCompilationBatch"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PayoutCompilationBatch"> | string | null;
    bankInstructionLetterInstanceId?: Prisma.UuidNullableFilter<"PayoutCompilationBatch"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PayoutCompilationBatch"> | Date | string | null;
    paidByUserId?: Prisma.UuidNullableFilter<"PayoutCompilationBatch"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PayoutCompilationBatch"> | Date | string;
};
export type PayoutCompilationBatchCreateWithoutWorkflowInstanceInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    compiledBy: Prisma.AppUserCreateNestedOneWithoutPayoutBatchesCompiledInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceCreateNestedOneWithoutPayoutBatchInput;
    lines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    compiledByUserId: string;
    bankInstructionLetterInstanceId?: string | null;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type PayoutCompilationBatchUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.PayoutCompilationBatchWhereInput;
};
export type PayoutCompilationBatchUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.PayoutCompilationBatchWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutWorkflowInstanceInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type PayoutCompilationBatchUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    compiledBy?: Prisma.AppUserUpdateOneRequiredWithoutPayoutBatchesCompiledNestedInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceUpdateOneWithoutPayoutBatchNestedInput;
    lines?: Prisma.PayoutCompilationLineUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    compiledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankInstructionLetterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchCreateWithoutBankInstructionLetterInstanceInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    compiledBy: Prisma.AppUserCreateNestedOneWithoutPayoutBatchesCompiledInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutPayoutCompilationBatchInput;
    lines?: Prisma.PayoutCompilationLineCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchUncheckedCreateWithoutBankInstructionLetterInstanceInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    compiledByUserId: string;
    workflowInstanceId?: string | null;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedCreateNestedManyWithoutBatchInput;
};
export type PayoutCompilationBatchCreateOrConnectWithoutBankInstructionLetterInstanceInput = {
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutBankInstructionLetterInstanceInput>;
};
export type PayoutCompilationBatchUpsertWithoutBankInstructionLetterInstanceInput = {
    update: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutBankInstructionLetterInstanceInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutBankInstructionLetterInstanceInput>;
    where?: Prisma.PayoutCompilationBatchWhereInput;
};
export type PayoutCompilationBatchUpdateToOneWithWhereWithoutBankInstructionLetterInstanceInput = {
    where?: Prisma.PayoutCompilationBatchWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutBankInstructionLetterInstanceInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutBankInstructionLetterInstanceInput>;
};
export type PayoutCompilationBatchUpdateWithoutBankInstructionLetterInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    compiledBy?: Prisma.AppUserUpdateOneRequiredWithoutPayoutBatchesCompiledNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutPayoutCompilationBatchNestedInput;
    lines?: Prisma.PayoutCompilationLineUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchUncheckedUpdateWithoutBankInstructionLetterInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    compiledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchCreateWithoutLinesInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
    compiledBy: Prisma.AppUserCreateNestedOneWithoutPayoutBatchesCompiledInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutPayoutCompilationBatchInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceCreateNestedOneWithoutPayoutBatchInput;
};
export type PayoutCompilationBatchUncheckedCreateWithoutLinesInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    compiledByUserId: string;
    workflowInstanceId?: string | null;
    bankInstructionLetterInstanceId?: string | null;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
};
export type PayoutCompilationBatchCreateOrConnectWithoutLinesInput = {
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutLinesInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutLinesInput>;
};
export type PayoutCompilationBatchUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutLinesInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateWithoutLinesInput, Prisma.PayoutCompilationBatchUncheckedCreateWithoutLinesInput>;
    where?: Prisma.PayoutCompilationBatchWhereInput;
};
export type PayoutCompilationBatchUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.PayoutCompilationBatchWhereInput;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateWithoutLinesInput, Prisma.PayoutCompilationBatchUncheckedUpdateWithoutLinesInput>;
};
export type PayoutCompilationBatchUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    compiledBy?: Prisma.AppUserUpdateOneRequiredWithoutPayoutBatchesCompiledNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutPayoutCompilationBatchNestedInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceUpdateOneWithoutPayoutBatchNestedInput;
};
export type PayoutCompilationBatchUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    compiledByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankInstructionLetterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCompilationBatchCreateManyCompiledByInput = {
    id?: string;
    batchNumber: string;
    periodLabel: string;
    status?: $Enums.PayoutBatchStatus;
    totalGrossKobo: bigint | number;
    totalWhtKobo?: bigint | number;
    totalNetKobo: bigint | number;
    workflowInstanceId?: string | null;
    bankInstructionLetterInstanceId?: string | null;
    paidAt?: Date | string | null;
    paidByUserId?: string | null;
    createdAt?: Date | string;
};
export type PayoutCompilationBatchUpdateWithoutCompiledByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutPayoutCompilationBatchNestedInput;
    bankInstructionLetterInstance?: Prisma.LetterInstanceUpdateOneWithoutPayoutBatchNestedInput;
    lines?: Prisma.PayoutCompilationLineUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchUncheckedUpdateWithoutCompiledByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankInstructionLetterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.PayoutCompilationLineUncheckedUpdateManyWithoutBatchNestedInput;
};
export type PayoutCompilationBatchUncheckedUpdateManyWithoutCompiledByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayoutBatchStatusFieldUpdateOperationsInput | $Enums.PayoutBatchStatus;
    totalGrossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalWhtKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    totalNetKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bankInstructionLetterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCompilationBatchCountOutputType = {
    lines: number;
};
export type PayoutCompilationBatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | PayoutCompilationBatchCountOutputTypeCountLinesArgs;
};
export type PayoutCompilationBatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchCountOutputTypeSelect<ExtArgs> | null;
};
export type PayoutCompilationBatchCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationLineWhereInput;
};
export type PayoutCompilationBatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchNumber?: boolean;
    periodLabel?: boolean;
    status?: boolean;
    totalGrossKobo?: boolean;
    totalWhtKobo?: boolean;
    totalNetKobo?: boolean;
    compiledByUserId?: boolean;
    workflowInstanceId?: boolean;
    bankInstructionLetterInstanceId?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdAt?: boolean;
    compiledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs>;
    bankInstructionLetterInstance?: boolean | Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs>;
    lines?: boolean | Prisma.PayoutCompilationBatch$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.PayoutCompilationBatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payoutCompilationBatch"]>;
export type PayoutCompilationBatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchNumber?: boolean;
    periodLabel?: boolean;
    status?: boolean;
    totalGrossKobo?: boolean;
    totalWhtKobo?: boolean;
    totalNetKobo?: boolean;
    compiledByUserId?: boolean;
    workflowInstanceId?: boolean;
    bankInstructionLetterInstanceId?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdAt?: boolean;
    compiledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs>;
    bankInstructionLetterInstance?: boolean | Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["payoutCompilationBatch"]>;
export type PayoutCompilationBatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchNumber?: boolean;
    periodLabel?: boolean;
    status?: boolean;
    totalGrossKobo?: boolean;
    totalWhtKobo?: boolean;
    totalNetKobo?: boolean;
    compiledByUserId?: boolean;
    workflowInstanceId?: boolean;
    bankInstructionLetterInstanceId?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdAt?: boolean;
    compiledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs>;
    bankInstructionLetterInstance?: boolean | Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["payoutCompilationBatch"]>;
export type PayoutCompilationBatchSelectScalar = {
    id?: boolean;
    batchNumber?: boolean;
    periodLabel?: boolean;
    status?: boolean;
    totalGrossKobo?: boolean;
    totalWhtKobo?: boolean;
    totalNetKobo?: boolean;
    compiledByUserId?: boolean;
    workflowInstanceId?: boolean;
    bankInstructionLetterInstanceId?: boolean;
    paidAt?: boolean;
    paidByUserId?: boolean;
    createdAt?: boolean;
};
export type PayoutCompilationBatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batchNumber" | "periodLabel" | "status" | "totalGrossKobo" | "totalWhtKobo" | "totalNetKobo" | "compiledByUserId" | "workflowInstanceId" | "bankInstructionLetterInstanceId" | "paidAt" | "paidByUserId" | "createdAt", ExtArgs["result"]["payoutCompilationBatch"]>;
export type PayoutCompilationBatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    compiledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs>;
    bankInstructionLetterInstance?: boolean | Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs>;
    lines?: boolean | Prisma.PayoutCompilationBatch$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.PayoutCompilationBatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PayoutCompilationBatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    compiledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs>;
    bankInstructionLetterInstance?: boolean | Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs>;
};
export type PayoutCompilationBatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    compiledBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs>;
    bankInstructionLetterInstance?: boolean | Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs>;
};
export type $PayoutCompilationBatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayoutCompilationBatch";
    objects: {
        compiledBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
        bankInstructionLetterInstance: Prisma.$LetterInstancePayload<ExtArgs> | null;
        lines: Prisma.$PayoutCompilationLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        batchNumber: string;
        periodLabel: string;
        status: $Enums.PayoutBatchStatus;
        totalGrossKobo: bigint;
        totalWhtKobo: bigint;
        totalNetKobo: bigint;
        compiledByUserId: string;
        workflowInstanceId: string | null;
        bankInstructionLetterInstanceId: string | null;
        paidAt: Date | null;
        paidByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["payoutCompilationBatch"]>;
    composites: {};
};
export type PayoutCompilationBatchGetPayload<S extends boolean | null | undefined | PayoutCompilationBatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload, S>;
export type PayoutCompilationBatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayoutCompilationBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayoutCompilationBatchCountAggregateInputType | true;
};
export interface PayoutCompilationBatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayoutCompilationBatch'];
        meta: {
            name: 'PayoutCompilationBatch';
        };
    };
    findUnique<T extends PayoutCompilationBatchFindUniqueArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayoutCompilationBatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayoutCompilationBatchFindFirstArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationBatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayoutCompilationBatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayoutCompilationBatchFindManyArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayoutCompilationBatchCreateArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchCreateArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayoutCompilationBatchCreateManyArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayoutCompilationBatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayoutCompilationBatchDeleteArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchDeleteArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayoutCompilationBatchUpdateArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchUpdateArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayoutCompilationBatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayoutCompilationBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayoutCompilationBatchUpdateManyArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayoutCompilationBatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayoutCompilationBatchUpsertArgs>(args: Prisma.SelectSubset<T, PayoutCompilationBatchUpsertArgs<ExtArgs>>): Prisma.Prisma__PayoutCompilationBatchClient<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayoutCompilationBatchCountArgs>(args?: Prisma.Subset<T, PayoutCompilationBatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayoutCompilationBatchCountAggregateOutputType> : number>;
    aggregate<T extends PayoutCompilationBatchAggregateArgs>(args: Prisma.Subset<T, PayoutCompilationBatchAggregateArgs>): Prisma.PrismaPromise<GetPayoutCompilationBatchAggregateType<T>>;
    groupBy<T extends PayoutCompilationBatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayoutCompilationBatchGroupByArgs['orderBy'];
    } : {
        orderBy?: PayoutCompilationBatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayoutCompilationBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutCompilationBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayoutCompilationBatchFieldRefs;
}
export interface Prisma__PayoutCompilationBatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    compiledBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutCompilationBatch$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    bankInstructionLetterInstance<T extends Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs>>): Prisma.Prisma__LetterInstanceClient<runtime.Types.Result.GetResult<Prisma.$LetterInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.PayoutCompilationBatch$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutCompilationBatch$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutCompilationLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayoutCompilationBatchFieldRefs {
    readonly id: Prisma.FieldRef<"PayoutCompilationBatch", 'String'>;
    readonly batchNumber: Prisma.FieldRef<"PayoutCompilationBatch", 'String'>;
    readonly periodLabel: Prisma.FieldRef<"PayoutCompilationBatch", 'String'>;
    readonly status: Prisma.FieldRef<"PayoutCompilationBatch", 'PayoutBatchStatus'>;
    readonly totalGrossKobo: Prisma.FieldRef<"PayoutCompilationBatch", 'BigInt'>;
    readonly totalWhtKobo: Prisma.FieldRef<"PayoutCompilationBatch", 'BigInt'>;
    readonly totalNetKobo: Prisma.FieldRef<"PayoutCompilationBatch", 'BigInt'>;
    readonly compiledByUserId: Prisma.FieldRef<"PayoutCompilationBatch", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"PayoutCompilationBatch", 'String'>;
    readonly bankInstructionLetterInstanceId: Prisma.FieldRef<"PayoutCompilationBatch", 'String'>;
    readonly paidAt: Prisma.FieldRef<"PayoutCompilationBatch", 'DateTime'>;
    readonly paidByUserId: Prisma.FieldRef<"PayoutCompilationBatch", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PayoutCompilationBatch", 'DateTime'>;
}
export type PayoutCompilationBatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    where?: Prisma.PayoutCompilationBatchWhereInput;
    orderBy?: Prisma.PayoutCompilationBatchOrderByWithRelationInput | Prisma.PayoutCompilationBatchOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutCompilationBatchScalarFieldEnum | Prisma.PayoutCompilationBatchScalarFieldEnum[];
};
export type PayoutCompilationBatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    where?: Prisma.PayoutCompilationBatchWhereInput;
    orderBy?: Prisma.PayoutCompilationBatchOrderByWithRelationInput | Prisma.PayoutCompilationBatchOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutCompilationBatchScalarFieldEnum | Prisma.PayoutCompilationBatchScalarFieldEnum[];
};
export type PayoutCompilationBatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    where?: Prisma.PayoutCompilationBatchWhereInput;
    orderBy?: Prisma.PayoutCompilationBatchOrderByWithRelationInput | Prisma.PayoutCompilationBatchOrderByWithRelationInput[];
    cursor?: Prisma.PayoutCompilationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutCompilationBatchScalarFieldEnum | Prisma.PayoutCompilationBatchScalarFieldEnum[];
};
export type PayoutCompilationBatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchCreateInput, Prisma.PayoutCompilationBatchUncheckedCreateInput>;
};
export type PayoutCompilationBatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayoutCompilationBatchCreateManyInput | Prisma.PayoutCompilationBatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayoutCompilationBatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    data: Prisma.PayoutCompilationBatchCreateManyInput | Prisma.PayoutCompilationBatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayoutCompilationBatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayoutCompilationBatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateInput, Prisma.PayoutCompilationBatchUncheckedUpdateInput>;
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateManyMutationInput, Prisma.PayoutCompilationBatchUncheckedUpdateManyInput>;
    where?: Prisma.PayoutCompilationBatchWhereInput;
    limit?: number;
};
export type PayoutCompilationBatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateManyMutationInput, Prisma.PayoutCompilationBatchUncheckedUpdateManyInput>;
    where?: Prisma.PayoutCompilationBatchWhereInput;
    limit?: number;
    include?: Prisma.PayoutCompilationBatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayoutCompilationBatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCompilationBatchCreateInput, Prisma.PayoutCompilationBatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayoutCompilationBatchUpdateInput, Prisma.PayoutCompilationBatchUncheckedUpdateInput>;
};
export type PayoutCompilationBatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
    where: Prisma.PayoutCompilationBatchWhereUniqueInput;
};
export type PayoutCompilationBatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutCompilationBatchWhereInput;
    limit?: number;
};
export type PayoutCompilationBatch$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type PayoutCompilationBatch$bankInstructionLetterInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterInstanceSelect<ExtArgs> | null;
    omit?: Prisma.LetterInstanceOmit<ExtArgs> | null;
    include?: Prisma.LetterInstanceInclude<ExtArgs> | null;
    where?: Prisma.LetterInstanceWhereInput;
};
export type PayoutCompilationBatch$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayoutCompilationBatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutCompilationBatchSelect<ExtArgs> | null;
    omit?: Prisma.PayoutCompilationBatchOmit<ExtArgs> | null;
    include?: Prisma.PayoutCompilationBatchInclude<ExtArgs> | null;
};
