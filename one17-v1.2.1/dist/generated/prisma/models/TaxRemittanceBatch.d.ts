import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaxRemittanceBatchModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxRemittanceBatchPayload>;
export type AggregateTaxRemittanceBatch = {
    _count: TaxRemittanceBatchCountAggregateOutputType | null;
    _avg: TaxRemittanceBatchAvgAggregateOutputType | null;
    _sum: TaxRemittanceBatchSumAggregateOutputType | null;
    _min: TaxRemittanceBatchMinAggregateOutputType | null;
    _max: TaxRemittanceBatchMaxAggregateOutputType | null;
};
export type TaxRemittanceBatchAvgAggregateOutputType = {
    totalKobo: number | null;
};
export type TaxRemittanceBatchSumAggregateOutputType = {
    totalKobo: bigint | null;
};
export type TaxRemittanceBatchMinAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    authority: string | null;
    periodLabel: string | null;
    totalKobo: bigint | null;
    status: $Enums.TaxRemittanceStatus | null;
    dueDate: Date | null;
    workflowInstanceId: string | null;
    letterInstanceId: string | null;
    remittedAt: Date | null;
    remittedByUserId: string | null;
    createdAt: Date | null;
};
export type TaxRemittanceBatchMaxAggregateOutputType = {
    id: string | null;
    taxType: $Enums.TaxType | null;
    authority: string | null;
    periodLabel: string | null;
    totalKobo: bigint | null;
    status: $Enums.TaxRemittanceStatus | null;
    dueDate: Date | null;
    workflowInstanceId: string | null;
    letterInstanceId: string | null;
    remittedAt: Date | null;
    remittedByUserId: string | null;
    createdAt: Date | null;
};
export type TaxRemittanceBatchCountAggregateOutputType = {
    id: number;
    taxType: number;
    authority: number;
    periodLabel: number;
    totalKobo: number;
    status: number;
    dueDate: number;
    workflowInstanceId: number;
    letterInstanceId: number;
    remittedAt: number;
    remittedByUserId: number;
    createdAt: number;
    _all: number;
};
export type TaxRemittanceBatchAvgAggregateInputType = {
    totalKobo?: true;
};
export type TaxRemittanceBatchSumAggregateInputType = {
    totalKobo?: true;
};
export type TaxRemittanceBatchMinAggregateInputType = {
    id?: true;
    taxType?: true;
    authority?: true;
    periodLabel?: true;
    totalKobo?: true;
    status?: true;
    dueDate?: true;
    workflowInstanceId?: true;
    letterInstanceId?: true;
    remittedAt?: true;
    remittedByUserId?: true;
    createdAt?: true;
};
export type TaxRemittanceBatchMaxAggregateInputType = {
    id?: true;
    taxType?: true;
    authority?: true;
    periodLabel?: true;
    totalKobo?: true;
    status?: true;
    dueDate?: true;
    workflowInstanceId?: true;
    letterInstanceId?: true;
    remittedAt?: true;
    remittedByUserId?: true;
    createdAt?: true;
};
export type TaxRemittanceBatchCountAggregateInputType = {
    id?: true;
    taxType?: true;
    authority?: true;
    periodLabel?: true;
    totalKobo?: true;
    status?: true;
    dueDate?: true;
    workflowInstanceId?: true;
    letterInstanceId?: true;
    remittedAt?: true;
    remittedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type TaxRemittanceBatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRemittanceBatchWhereInput;
    orderBy?: Prisma.TaxRemittanceBatchOrderByWithRelationInput | Prisma.TaxRemittanceBatchOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaxRemittanceBatchCountAggregateInputType;
    _avg?: TaxRemittanceBatchAvgAggregateInputType;
    _sum?: TaxRemittanceBatchSumAggregateInputType;
    _min?: TaxRemittanceBatchMinAggregateInputType;
    _max?: TaxRemittanceBatchMaxAggregateInputType;
};
export type GetTaxRemittanceBatchAggregateType<T extends TaxRemittanceBatchAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxRemittanceBatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxRemittanceBatch[P]> : Prisma.GetScalarType<T[P], AggregateTaxRemittanceBatch[P]>;
};
export type TaxRemittanceBatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRemittanceBatchWhereInput;
    orderBy?: Prisma.TaxRemittanceBatchOrderByWithAggregationInput | Prisma.TaxRemittanceBatchOrderByWithAggregationInput[];
    by: Prisma.TaxRemittanceBatchScalarFieldEnum[] | Prisma.TaxRemittanceBatchScalarFieldEnum;
    having?: Prisma.TaxRemittanceBatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxRemittanceBatchCountAggregateInputType | true;
    _avg?: TaxRemittanceBatchAvgAggregateInputType;
    _sum?: TaxRemittanceBatchSumAggregateInputType;
    _min?: TaxRemittanceBatchMinAggregateInputType;
    _max?: TaxRemittanceBatchMaxAggregateInputType;
};
export type TaxRemittanceBatchGroupByOutputType = {
    id: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint;
    status: $Enums.TaxRemittanceStatus;
    dueDate: Date;
    workflowInstanceId: string | null;
    letterInstanceId: string | null;
    remittedAt: Date | null;
    remittedByUserId: string | null;
    createdAt: Date;
    _count: TaxRemittanceBatchCountAggregateOutputType | null;
    _avg: TaxRemittanceBatchAvgAggregateOutputType | null;
    _sum: TaxRemittanceBatchSumAggregateOutputType | null;
    _min: TaxRemittanceBatchMinAggregateOutputType | null;
    _max: TaxRemittanceBatchMaxAggregateOutputType | null;
};
export type GetTaxRemittanceBatchGroupByPayload<T extends TaxRemittanceBatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxRemittanceBatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxRemittanceBatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxRemittanceBatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxRemittanceBatchGroupByOutputType[P]>;
}>>;
export type TaxRemittanceBatchWhereInput = {
    AND?: Prisma.TaxRemittanceBatchWhereInput | Prisma.TaxRemittanceBatchWhereInput[];
    OR?: Prisma.TaxRemittanceBatchWhereInput[];
    NOT?: Prisma.TaxRemittanceBatchWhereInput | Prisma.TaxRemittanceBatchWhereInput[];
    id?: Prisma.UuidFilter<"TaxRemittanceBatch"> | string;
    taxType?: Prisma.EnumTaxTypeFilter<"TaxRemittanceBatch"> | $Enums.TaxType;
    authority?: Prisma.StringFilter<"TaxRemittanceBatch"> | string;
    periodLabel?: Prisma.StringFilter<"TaxRemittanceBatch"> | string;
    totalKobo?: Prisma.BigIntFilter<"TaxRemittanceBatch"> | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFilter<"TaxRemittanceBatch"> | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFilter<"TaxRemittanceBatch"> | Date | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"TaxRemittanceBatch"> | string | null;
    letterInstanceId?: Prisma.UuidNullableFilter<"TaxRemittanceBatch"> | string | null;
    remittedAt?: Prisma.DateTimeNullableFilter<"TaxRemittanceBatch"> | Date | string | null;
    remittedByUserId?: Prisma.UuidNullableFilter<"TaxRemittanceBatch"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaxRemittanceBatch"> | Date | string;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    letterInstance?: Prisma.XOR<Prisma.LetterInstanceNullableScalarRelationFilter, Prisma.LetterInstanceWhereInput> | null;
};
export type TaxRemittanceBatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    letterInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    remittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    remittedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
    letterInstance?: Prisma.LetterInstanceOrderByWithRelationInput;
};
export type TaxRemittanceBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    letterInstanceId?: string;
    AND?: Prisma.TaxRemittanceBatchWhereInput | Prisma.TaxRemittanceBatchWhereInput[];
    OR?: Prisma.TaxRemittanceBatchWhereInput[];
    NOT?: Prisma.TaxRemittanceBatchWhereInput | Prisma.TaxRemittanceBatchWhereInput[];
    taxType?: Prisma.EnumTaxTypeFilter<"TaxRemittanceBatch"> | $Enums.TaxType;
    authority?: Prisma.StringFilter<"TaxRemittanceBatch"> | string;
    periodLabel?: Prisma.StringFilter<"TaxRemittanceBatch"> | string;
    totalKobo?: Prisma.BigIntFilter<"TaxRemittanceBatch"> | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFilter<"TaxRemittanceBatch"> | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFilter<"TaxRemittanceBatch"> | Date | string;
    remittedAt?: Prisma.DateTimeNullableFilter<"TaxRemittanceBatch"> | Date | string | null;
    remittedByUserId?: Prisma.UuidNullableFilter<"TaxRemittanceBatch"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaxRemittanceBatch"> | Date | string;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
    letterInstance?: Prisma.XOR<Prisma.LetterInstanceNullableScalarRelationFilter, Prisma.LetterInstanceWhereInput> | null;
}, "id" | "workflowInstanceId" | "letterInstanceId">;
export type TaxRemittanceBatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    letterInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    remittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    remittedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TaxRemittanceBatchCountOrderByAggregateInput;
    _avg?: Prisma.TaxRemittanceBatchAvgOrderByAggregateInput;
    _max?: Prisma.TaxRemittanceBatchMaxOrderByAggregateInput;
    _min?: Prisma.TaxRemittanceBatchMinOrderByAggregateInput;
    _sum?: Prisma.TaxRemittanceBatchSumOrderByAggregateInput;
};
export type TaxRemittanceBatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxRemittanceBatchScalarWhereWithAggregatesInput | Prisma.TaxRemittanceBatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxRemittanceBatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxRemittanceBatchScalarWhereWithAggregatesInput | Prisma.TaxRemittanceBatchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaxRemittanceBatch"> | string;
    taxType?: Prisma.EnumTaxTypeWithAggregatesFilter<"TaxRemittanceBatch"> | $Enums.TaxType;
    authority?: Prisma.StringWithAggregatesFilter<"TaxRemittanceBatch"> | string;
    periodLabel?: Prisma.StringWithAggregatesFilter<"TaxRemittanceBatch"> | string;
    totalKobo?: Prisma.BigIntWithAggregatesFilter<"TaxRemittanceBatch"> | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusWithAggregatesFilter<"TaxRemittanceBatch"> | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"TaxRemittanceBatch"> | Date | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"TaxRemittanceBatch"> | string | null;
    letterInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"TaxRemittanceBatch"> | string | null;
    remittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TaxRemittanceBatch"> | Date | string | null;
    remittedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"TaxRemittanceBatch"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaxRemittanceBatch"> | Date | string;
};
export type TaxRemittanceBatchCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint | number;
    status?: $Enums.TaxRemittanceStatus;
    dueDate: Date | string;
    remittedAt?: Date | string | null;
    remittedByUserId?: string | null;
    createdAt?: Date | string;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRemittanceBatchInput;
    letterInstance?: Prisma.LetterInstanceCreateNestedOneWithoutTaxRemittanceBatchInput;
};
export type TaxRemittanceBatchUncheckedCreateInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint | number;
    status?: $Enums.TaxRemittanceStatus;
    dueDate: Date | string;
    workflowInstanceId?: string | null;
    letterInstanceId?: string | null;
    remittedAt?: Date | string | null;
    remittedByUserId?: string | null;
    createdAt?: Date | string;
};
export type TaxRemittanceBatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRemittanceBatchNestedInput;
    letterInstance?: Prisma.LetterInstanceUpdateOneWithoutTaxRemittanceBatchNestedInput;
};
export type TaxRemittanceBatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    letterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRemittanceBatchCreateManyInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint | number;
    status?: $Enums.TaxRemittanceStatus;
    dueDate: Date | string;
    workflowInstanceId?: string | null;
    letterInstanceId?: string | null;
    remittedAt?: Date | string | null;
    remittedByUserId?: string | null;
    createdAt?: Date | string;
};
export type TaxRemittanceBatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRemittanceBatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    letterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRemittanceBatchNullableScalarRelationFilter = {
    is?: Prisma.TaxRemittanceBatchWhereInput | null;
    isNot?: Prisma.TaxRemittanceBatchWhereInput | null;
};
export type TaxRemittanceBatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    letterInstanceId?: Prisma.SortOrder;
    remittedAt?: Prisma.SortOrder;
    remittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRemittanceBatchAvgOrderByAggregateInput = {
    totalKobo?: Prisma.SortOrder;
};
export type TaxRemittanceBatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    letterInstanceId?: Prisma.SortOrder;
    remittedAt?: Prisma.SortOrder;
    remittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRemittanceBatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxType?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    periodLabel?: Prisma.SortOrder;
    totalKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    letterInstanceId?: Prisma.SortOrder;
    remittedAt?: Prisma.SortOrder;
    remittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRemittanceBatchSumOrderByAggregateInput = {
    totalKobo?: Prisma.SortOrder;
};
export type TaxRemittanceBatchCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.TaxRemittanceBatchUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    delete?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRemittanceBatchUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUpdateWithoutWorkflowInstanceInput>, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type TaxRemittanceBatchUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.TaxRemittanceBatchUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    delete?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRemittanceBatchUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUpdateWithoutWorkflowInstanceInput>, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type TaxRemittanceBatchCreateNestedOneWithoutLetterInstanceInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutLetterInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutLetterInstanceInput;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchUncheckedCreateNestedOneWithoutLetterInstanceInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutLetterInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutLetterInstanceInput;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchUpdateOneWithoutLetterInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutLetterInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutLetterInstanceInput;
    upsert?: Prisma.TaxRemittanceBatchUpsertWithoutLetterInstanceInput;
    disconnect?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    delete?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRemittanceBatchUpdateToOneWithWhereWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUpdateWithoutLetterInstanceInput>, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutLetterInstanceInput>;
};
export type TaxRemittanceBatchUncheckedUpdateOneWithoutLetterInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutLetterInstanceInput>;
    connectOrCreate?: Prisma.TaxRemittanceBatchCreateOrConnectWithoutLetterInstanceInput;
    upsert?: Prisma.TaxRemittanceBatchUpsertWithoutLetterInstanceInput;
    disconnect?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    delete?: Prisma.TaxRemittanceBatchWhereInput | boolean;
    connect?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRemittanceBatchUpdateToOneWithWhereWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUpdateWithoutLetterInstanceInput>, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutLetterInstanceInput>;
};
export type EnumTaxRemittanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaxRemittanceStatus;
};
export type TaxRemittanceBatchCreateWithoutWorkflowInstanceInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint | number;
    status?: $Enums.TaxRemittanceStatus;
    dueDate: Date | string;
    remittedAt?: Date | string | null;
    remittedByUserId?: string | null;
    createdAt?: Date | string;
    letterInstance?: Prisma.LetterInstanceCreateNestedOneWithoutTaxRemittanceBatchInput;
};
export type TaxRemittanceBatchUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint | number;
    status?: $Enums.TaxRemittanceStatus;
    dueDate: Date | string;
    letterInstanceId?: string | null;
    remittedAt?: Date | string | null;
    remittedByUserId?: string | null;
    createdAt?: Date | string;
};
export type TaxRemittanceBatchCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.TaxRemittanceBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type TaxRemittanceBatchUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.TaxRemittanceBatchWhereInput;
};
export type TaxRemittanceBatchUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.TaxRemittanceBatchWhereInput;
    data: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateWithoutWorkflowInstanceInput, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type TaxRemittanceBatchUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    letterInstance?: Prisma.LetterInstanceUpdateOneWithoutTaxRemittanceBatchNestedInput;
};
export type TaxRemittanceBatchUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    letterInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRemittanceBatchCreateWithoutLetterInstanceInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint | number;
    status?: $Enums.TaxRemittanceStatus;
    dueDate: Date | string;
    remittedAt?: Date | string | null;
    remittedByUserId?: string | null;
    createdAt?: Date | string;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutTaxRemittanceBatchInput;
};
export type TaxRemittanceBatchUncheckedCreateWithoutLetterInstanceInput = {
    id?: string;
    taxType: $Enums.TaxType;
    authority: string;
    periodLabel: string;
    totalKobo: bigint | number;
    status?: $Enums.TaxRemittanceStatus;
    dueDate: Date | string;
    workflowInstanceId?: string | null;
    remittedAt?: Date | string | null;
    remittedByUserId?: string | null;
    createdAt?: Date | string;
};
export type TaxRemittanceBatchCreateOrConnectWithoutLetterInstanceInput = {
    where: Prisma.TaxRemittanceBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutLetterInstanceInput>;
};
export type TaxRemittanceBatchUpsertWithoutLetterInstanceInput = {
    update: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutLetterInstanceInput>;
    create: Prisma.XOR<Prisma.TaxRemittanceBatchCreateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedCreateWithoutLetterInstanceInput>;
    where?: Prisma.TaxRemittanceBatchWhereInput;
};
export type TaxRemittanceBatchUpdateToOneWithWhereWithoutLetterInstanceInput = {
    where?: Prisma.TaxRemittanceBatchWhereInput;
    data: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateWithoutLetterInstanceInput, Prisma.TaxRemittanceBatchUncheckedUpdateWithoutLetterInstanceInput>;
};
export type TaxRemittanceBatchUpdateWithoutLetterInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutTaxRemittanceBatchNestedInput;
};
export type TaxRemittanceBatchUncheckedUpdateWithoutLetterInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taxType?: Prisma.EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType;
    authority?: Prisma.StringFieldUpdateOperationsInput | string;
    periodLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    totalKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumTaxRemittanceStatusFieldUpdateOperationsInput | $Enums.TaxRemittanceStatus;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    remittedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRemittanceBatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    periodLabel?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    dueDate?: boolean;
    workflowInstanceId?: boolean;
    letterInstanceId?: boolean;
    remittedAt?: boolean;
    remittedByUserId?: boolean;
    createdAt?: boolean;
    workflowInstance?: boolean | Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs>;
    letterInstance?: boolean | Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["taxRemittanceBatch"]>;
export type TaxRemittanceBatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    periodLabel?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    dueDate?: boolean;
    workflowInstanceId?: boolean;
    letterInstanceId?: boolean;
    remittedAt?: boolean;
    remittedByUserId?: boolean;
    createdAt?: boolean;
    workflowInstance?: boolean | Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs>;
    letterInstance?: boolean | Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["taxRemittanceBatch"]>;
export type TaxRemittanceBatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    periodLabel?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    dueDate?: boolean;
    workflowInstanceId?: boolean;
    letterInstanceId?: boolean;
    remittedAt?: boolean;
    remittedByUserId?: boolean;
    createdAt?: boolean;
    workflowInstance?: boolean | Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs>;
    letterInstance?: boolean | Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["taxRemittanceBatch"]>;
export type TaxRemittanceBatchSelectScalar = {
    id?: boolean;
    taxType?: boolean;
    authority?: boolean;
    periodLabel?: boolean;
    totalKobo?: boolean;
    status?: boolean;
    dueDate?: boolean;
    workflowInstanceId?: boolean;
    letterInstanceId?: boolean;
    remittedAt?: boolean;
    remittedByUserId?: boolean;
    createdAt?: boolean;
};
export type TaxRemittanceBatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taxType" | "authority" | "periodLabel" | "totalKobo" | "status" | "dueDate" | "workflowInstanceId" | "letterInstanceId" | "remittedAt" | "remittedByUserId" | "createdAt", ExtArgs["result"]["taxRemittanceBatch"]>;
export type TaxRemittanceBatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowInstance?: boolean | Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs>;
    letterInstance?: boolean | Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs>;
};
export type TaxRemittanceBatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowInstance?: boolean | Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs>;
    letterInstance?: boolean | Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs>;
};
export type TaxRemittanceBatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowInstance?: boolean | Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs>;
    letterInstance?: boolean | Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs>;
};
export type $TaxRemittanceBatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxRemittanceBatch";
    objects: {
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
        letterInstance: Prisma.$LetterInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taxType: $Enums.TaxType;
        authority: string;
        periodLabel: string;
        totalKobo: bigint;
        status: $Enums.TaxRemittanceStatus;
        dueDate: Date;
        workflowInstanceId: string | null;
        letterInstanceId: string | null;
        remittedAt: Date | null;
        remittedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["taxRemittanceBatch"]>;
    composites: {};
};
export type TaxRemittanceBatchGetPayload<S extends boolean | null | undefined | TaxRemittanceBatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload, S>;
export type TaxRemittanceBatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxRemittanceBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxRemittanceBatchCountAggregateInputType | true;
};
export interface TaxRemittanceBatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxRemittanceBatch'];
        meta: {
            name: 'TaxRemittanceBatch';
        };
    };
    findUnique<T extends TaxRemittanceBatchFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaxRemittanceBatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaxRemittanceBatchFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceBatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaxRemittanceBatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaxRemittanceBatchFindManyArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaxRemittanceBatchCreateArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchCreateArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaxRemittanceBatchCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaxRemittanceBatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaxRemittanceBatchDeleteArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaxRemittanceBatchUpdateArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaxRemittanceBatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxRemittanceBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaxRemittanceBatchUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaxRemittanceBatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaxRemittanceBatchUpsertArgs>(args: Prisma.SelectSubset<T, TaxRemittanceBatchUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxRemittanceBatchClient<runtime.Types.Result.GetResult<Prisma.$TaxRemittanceBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaxRemittanceBatchCountArgs>(args?: Prisma.Subset<T, TaxRemittanceBatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxRemittanceBatchCountAggregateOutputType> : number>;
    aggregate<T extends TaxRemittanceBatchAggregateArgs>(args: Prisma.Subset<T, TaxRemittanceBatchAggregateArgs>): Prisma.PrismaPromise<GetTaxRemittanceBatchAggregateType<T>>;
    groupBy<T extends TaxRemittanceBatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxRemittanceBatchGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxRemittanceBatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxRemittanceBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxRemittanceBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaxRemittanceBatchFieldRefs;
}
export interface Prisma__TaxRemittanceBatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    workflowInstance<T extends Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRemittanceBatch$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    letterInstance<T extends Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRemittanceBatch$letterInstanceArgs<ExtArgs>>): Prisma.Prisma__LetterInstanceClient<runtime.Types.Result.GetResult<Prisma.$LetterInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaxRemittanceBatchFieldRefs {
    readonly id: Prisma.FieldRef<"TaxRemittanceBatch", 'String'>;
    readonly taxType: Prisma.FieldRef<"TaxRemittanceBatch", 'TaxType'>;
    readonly authority: Prisma.FieldRef<"TaxRemittanceBatch", 'String'>;
    readonly periodLabel: Prisma.FieldRef<"TaxRemittanceBatch", 'String'>;
    readonly totalKobo: Prisma.FieldRef<"TaxRemittanceBatch", 'BigInt'>;
    readonly status: Prisma.FieldRef<"TaxRemittanceBatch", 'TaxRemittanceStatus'>;
    readonly dueDate: Prisma.FieldRef<"TaxRemittanceBatch", 'DateTime'>;
    readonly workflowInstanceId: Prisma.FieldRef<"TaxRemittanceBatch", 'String'>;
    readonly letterInstanceId: Prisma.FieldRef<"TaxRemittanceBatch", 'String'>;
    readonly remittedAt: Prisma.FieldRef<"TaxRemittanceBatch", 'DateTime'>;
    readonly remittedByUserId: Prisma.FieldRef<"TaxRemittanceBatch", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TaxRemittanceBatch", 'DateTime'>;
}
export type TaxRemittanceBatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    where: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    where: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    where?: Prisma.TaxRemittanceBatchWhereInput;
    orderBy?: Prisma.TaxRemittanceBatchOrderByWithRelationInput | Prisma.TaxRemittanceBatchOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRemittanceBatchScalarFieldEnum | Prisma.TaxRemittanceBatchScalarFieldEnum[];
};
export type TaxRemittanceBatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    where?: Prisma.TaxRemittanceBatchWhereInput;
    orderBy?: Prisma.TaxRemittanceBatchOrderByWithRelationInput | Prisma.TaxRemittanceBatchOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRemittanceBatchScalarFieldEnum | Prisma.TaxRemittanceBatchScalarFieldEnum[];
};
export type TaxRemittanceBatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    where?: Prisma.TaxRemittanceBatchWhereInput;
    orderBy?: Prisma.TaxRemittanceBatchOrderByWithRelationInput | Prisma.TaxRemittanceBatchOrderByWithRelationInput[];
    cursor?: Prisma.TaxRemittanceBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRemittanceBatchScalarFieldEnum | Prisma.TaxRemittanceBatchScalarFieldEnum[];
};
export type TaxRemittanceBatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRemittanceBatchCreateInput, Prisma.TaxRemittanceBatchUncheckedCreateInput>;
};
export type TaxRemittanceBatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaxRemittanceBatchCreateManyInput | Prisma.TaxRemittanceBatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxRemittanceBatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    data: Prisma.TaxRemittanceBatchCreateManyInput | Prisma.TaxRemittanceBatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaxRemittanceBatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaxRemittanceBatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateInput, Prisma.TaxRemittanceBatchUncheckedUpdateInput>;
    where: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateManyMutationInput, Prisma.TaxRemittanceBatchUncheckedUpdateManyInput>;
    where?: Prisma.TaxRemittanceBatchWhereInput;
    limit?: number;
};
export type TaxRemittanceBatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateManyMutationInput, Prisma.TaxRemittanceBatchUncheckedUpdateManyInput>;
    where?: Prisma.TaxRemittanceBatchWhereInput;
    limit?: number;
    include?: Prisma.TaxRemittanceBatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaxRemittanceBatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    where: Prisma.TaxRemittanceBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRemittanceBatchCreateInput, Prisma.TaxRemittanceBatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaxRemittanceBatchUpdateInput, Prisma.TaxRemittanceBatchUncheckedUpdateInput>;
};
export type TaxRemittanceBatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
    where: Prisma.TaxRemittanceBatchWhereUniqueInput;
};
export type TaxRemittanceBatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRemittanceBatchWhereInput;
    limit?: number;
};
export type TaxRemittanceBatch$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type TaxRemittanceBatch$letterInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterInstanceSelect<ExtArgs> | null;
    omit?: Prisma.LetterInstanceOmit<ExtArgs> | null;
    include?: Prisma.LetterInstanceInclude<ExtArgs> | null;
    where?: Prisma.LetterInstanceWhereInput;
};
export type TaxRemittanceBatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRemittanceBatchSelect<ExtArgs> | null;
    omit?: Prisma.TaxRemittanceBatchOmit<ExtArgs> | null;
    include?: Prisma.TaxRemittanceBatchInclude<ExtArgs> | null;
};
