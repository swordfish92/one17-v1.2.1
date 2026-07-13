import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayrollRunModel = runtime.Types.Result.DefaultSelection<Prisma.$PayrollRunPayload>;
export type AggregatePayrollRun = {
    _count: PayrollRunCountAggregateOutputType | null;
    _avg: PayrollRunAvgAggregateOutputType | null;
    _sum: PayrollRunSumAggregateOutputType | null;
    _min: PayrollRunMinAggregateOutputType | null;
    _max: PayrollRunMaxAggregateOutputType | null;
};
export type PayrollRunAvgAggregateOutputType = {
    periodMonth: number | null;
    periodYear: number | null;
};
export type PayrollRunSumAggregateOutputType = {
    periodMonth: number | null;
    periodYear: number | null;
};
export type PayrollRunMinAggregateOutputType = {
    id: string | null;
    periodMonth: number | null;
    periodYear: number | null;
    ledgerEntityCode: string | null;
    status: $Enums.PayrollRunStatus | null;
    taxRuleConfigId: string | null;
    journalEntryId: string | null;
    workflowInstanceId: string | null;
    generatedByUserId: string | null;
    approvedByUserId: string | null;
    generatedAt: Date | null;
};
export type PayrollRunMaxAggregateOutputType = {
    id: string | null;
    periodMonth: number | null;
    periodYear: number | null;
    ledgerEntityCode: string | null;
    status: $Enums.PayrollRunStatus | null;
    taxRuleConfigId: string | null;
    journalEntryId: string | null;
    workflowInstanceId: string | null;
    generatedByUserId: string | null;
    approvedByUserId: string | null;
    generatedAt: Date | null;
};
export type PayrollRunCountAggregateOutputType = {
    id: number;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: number;
    status: number;
    taxRuleConfigId: number;
    journalEntryId: number;
    workflowInstanceId: number;
    generatedByUserId: number;
    approvedByUserId: number;
    generatedAt: number;
    _all: number;
};
export type PayrollRunAvgAggregateInputType = {
    periodMonth?: true;
    periodYear?: true;
};
export type PayrollRunSumAggregateInputType = {
    periodMonth?: true;
    periodYear?: true;
};
export type PayrollRunMinAggregateInputType = {
    id?: true;
    periodMonth?: true;
    periodYear?: true;
    ledgerEntityCode?: true;
    status?: true;
    taxRuleConfigId?: true;
    journalEntryId?: true;
    workflowInstanceId?: true;
    generatedByUserId?: true;
    approvedByUserId?: true;
    generatedAt?: true;
};
export type PayrollRunMaxAggregateInputType = {
    id?: true;
    periodMonth?: true;
    periodYear?: true;
    ledgerEntityCode?: true;
    status?: true;
    taxRuleConfigId?: true;
    journalEntryId?: true;
    workflowInstanceId?: true;
    generatedByUserId?: true;
    approvedByUserId?: true;
    generatedAt?: true;
};
export type PayrollRunCountAggregateInputType = {
    id?: true;
    periodMonth?: true;
    periodYear?: true;
    ledgerEntityCode?: true;
    status?: true;
    taxRuleConfigId?: true;
    journalEntryId?: true;
    workflowInstanceId?: true;
    generatedByUserId?: true;
    approvedByUserId?: true;
    generatedAt?: true;
    _all?: true;
};
export type PayrollRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunWhereInput;
    orderBy?: Prisma.PayrollRunOrderByWithRelationInput | Prisma.PayrollRunOrderByWithRelationInput[];
    cursor?: Prisma.PayrollRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayrollRunCountAggregateInputType;
    _avg?: PayrollRunAvgAggregateInputType;
    _sum?: PayrollRunSumAggregateInputType;
    _min?: PayrollRunMinAggregateInputType;
    _max?: PayrollRunMaxAggregateInputType;
};
export type GetPayrollRunAggregateType<T extends PayrollRunAggregateArgs> = {
    [P in keyof T & keyof AggregatePayrollRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayrollRun[P]> : Prisma.GetScalarType<T[P], AggregatePayrollRun[P]>;
};
export type PayrollRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunWhereInput;
    orderBy?: Prisma.PayrollRunOrderByWithAggregationInput | Prisma.PayrollRunOrderByWithAggregationInput[];
    by: Prisma.PayrollRunScalarFieldEnum[] | Prisma.PayrollRunScalarFieldEnum;
    having?: Prisma.PayrollRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayrollRunCountAggregateInputType | true;
    _avg?: PayrollRunAvgAggregateInputType;
    _sum?: PayrollRunSumAggregateInputType;
    _min?: PayrollRunMinAggregateInputType;
    _max?: PayrollRunMaxAggregateInputType;
};
export type PayrollRunGroupByOutputType = {
    id: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status: $Enums.PayrollRunStatus;
    taxRuleConfigId: string;
    journalEntryId: string | null;
    workflowInstanceId: string | null;
    generatedByUserId: string;
    approvedByUserId: string | null;
    generatedAt: Date;
    _count: PayrollRunCountAggregateOutputType | null;
    _avg: PayrollRunAvgAggregateOutputType | null;
    _sum: PayrollRunSumAggregateOutputType | null;
    _min: PayrollRunMinAggregateOutputType | null;
    _max: PayrollRunMaxAggregateOutputType | null;
};
export type GetPayrollRunGroupByPayload<T extends PayrollRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayrollRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayrollRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayrollRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayrollRunGroupByOutputType[P]>;
}>>;
export type PayrollRunWhereInput = {
    AND?: Prisma.PayrollRunWhereInput | Prisma.PayrollRunWhereInput[];
    OR?: Prisma.PayrollRunWhereInput[];
    NOT?: Prisma.PayrollRunWhereInput | Prisma.PayrollRunWhereInput[];
    id?: Prisma.UuidFilter<"PayrollRun"> | string;
    periodMonth?: Prisma.IntFilter<"PayrollRun"> | number;
    periodYear?: Prisma.IntFilter<"PayrollRun"> | number;
    ledgerEntityCode?: Prisma.StringFilter<"PayrollRun"> | string;
    status?: Prisma.EnumPayrollRunStatusFilter<"PayrollRun"> | $Enums.PayrollRunStatus;
    taxRuleConfigId?: Prisma.UuidFilter<"PayrollRun"> | string;
    journalEntryId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    generatedByUserId?: Prisma.UuidFilter<"PayrollRun"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    generatedAt?: Prisma.DateTimeFilter<"PayrollRun"> | Date | string;
    taxRuleConfig?: Prisma.XOR<Prisma.TaxRuleConfigScalarRelationFilter, Prisma.TaxRuleConfigWhereInput>;
    lines?: Prisma.PayrollRunLineListRelationFilter;
};
export type PayrollRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    taxRuleConfigId?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    taxRuleConfig?: Prisma.TaxRuleConfigOrderByWithRelationInput;
    lines?: Prisma.PayrollRunLineOrderByRelationAggregateInput;
};
export type PayrollRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    periodMonth_periodYear_ledgerEntityCode?: Prisma.PayrollRunPeriodMonthPeriodYearLedgerEntityCodeCompoundUniqueInput;
    AND?: Prisma.PayrollRunWhereInput | Prisma.PayrollRunWhereInput[];
    OR?: Prisma.PayrollRunWhereInput[];
    NOT?: Prisma.PayrollRunWhereInput | Prisma.PayrollRunWhereInput[];
    periodMonth?: Prisma.IntFilter<"PayrollRun"> | number;
    periodYear?: Prisma.IntFilter<"PayrollRun"> | number;
    ledgerEntityCode?: Prisma.StringFilter<"PayrollRun"> | string;
    status?: Prisma.EnumPayrollRunStatusFilter<"PayrollRun"> | $Enums.PayrollRunStatus;
    taxRuleConfigId?: Prisma.UuidFilter<"PayrollRun"> | string;
    journalEntryId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    generatedByUserId?: Prisma.UuidFilter<"PayrollRun"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    generatedAt?: Prisma.DateTimeFilter<"PayrollRun"> | Date | string;
    taxRuleConfig?: Prisma.XOR<Prisma.TaxRuleConfigScalarRelationFilter, Prisma.TaxRuleConfigWhereInput>;
    lines?: Prisma.PayrollRunLineListRelationFilter;
}, "id" | "workflowInstanceId" | "periodMonth_periodYear_ledgerEntityCode">;
export type PayrollRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    taxRuleConfigId?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    _count?: Prisma.PayrollRunCountOrderByAggregateInput;
    _avg?: Prisma.PayrollRunAvgOrderByAggregateInput;
    _max?: Prisma.PayrollRunMaxOrderByAggregateInput;
    _min?: Prisma.PayrollRunMinOrderByAggregateInput;
    _sum?: Prisma.PayrollRunSumOrderByAggregateInput;
};
export type PayrollRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayrollRunScalarWhereWithAggregatesInput | Prisma.PayrollRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayrollRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayrollRunScalarWhereWithAggregatesInput | Prisma.PayrollRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PayrollRun"> | string;
    periodMonth?: Prisma.IntWithAggregatesFilter<"PayrollRun"> | number;
    periodYear?: Prisma.IntWithAggregatesFilter<"PayrollRun"> | number;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"PayrollRun"> | string;
    status?: Prisma.EnumPayrollRunStatusWithAggregatesFilter<"PayrollRun"> | $Enums.PayrollRunStatus;
    taxRuleConfigId?: Prisma.UuidWithAggregatesFilter<"PayrollRun"> | string;
    journalEntryId?: Prisma.UuidNullableWithAggregatesFilter<"PayrollRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"PayrollRun"> | string | null;
    generatedByUserId?: Prisma.UuidWithAggregatesFilter<"PayrollRun"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PayrollRun"> | string | null;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"PayrollRun"> | Date | string;
};
export type PayrollRunCreateInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
    taxRuleConfig: Prisma.TaxRuleConfigCreateNestedOneWithoutPayrollRunsInput;
    lines?: Prisma.PayrollRunLineCreateNestedManyWithoutPayrollRunInput;
};
export type PayrollRunUncheckedCreateInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    taxRuleConfigId: string;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
    lines?: Prisma.PayrollRunLineUncheckedCreateNestedManyWithoutPayrollRunInput;
};
export type PayrollRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxRuleConfig?: Prisma.TaxRuleConfigUpdateOneRequiredWithoutPayrollRunsNestedInput;
    lines?: Prisma.PayrollRunLineUpdateManyWithoutPayrollRunNestedInput;
};
export type PayrollRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    taxRuleConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.PayrollRunLineUncheckedUpdateManyWithoutPayrollRunNestedInput;
};
export type PayrollRunCreateManyInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    taxRuleConfigId: string;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
};
export type PayrollRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    taxRuleConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollRunListRelationFilter = {
    every?: Prisma.PayrollRunWhereInput;
    some?: Prisma.PayrollRunWhereInput;
    none?: Prisma.PayrollRunWhereInput;
};
export type PayrollRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayrollRunPeriodMonthPeriodYearLedgerEntityCodeCompoundUniqueInput = {
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
};
export type PayrollRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    taxRuleConfigId?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type PayrollRunAvgOrderByAggregateInput = {
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
};
export type PayrollRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    taxRuleConfigId?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type PayrollRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    taxRuleConfigId?: Prisma.SortOrder;
    journalEntryId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type PayrollRunSumOrderByAggregateInput = {
    periodMonth?: Prisma.SortOrder;
    periodYear?: Prisma.SortOrder;
};
export type PayrollRunScalarRelationFilter = {
    is?: Prisma.PayrollRunWhereInput;
    isNot?: Prisma.PayrollRunWhereInput;
};
export type PayrollRunCreateNestedManyWithoutTaxRuleConfigInput = {
    create?: Prisma.XOR<Prisma.PayrollRunCreateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput> | Prisma.PayrollRunCreateWithoutTaxRuleConfigInput[] | Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput[];
    connectOrCreate?: Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput | Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput[];
    createMany?: Prisma.PayrollRunCreateManyTaxRuleConfigInputEnvelope;
    connect?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
};
export type PayrollRunUncheckedCreateNestedManyWithoutTaxRuleConfigInput = {
    create?: Prisma.XOR<Prisma.PayrollRunCreateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput> | Prisma.PayrollRunCreateWithoutTaxRuleConfigInput[] | Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput[];
    connectOrCreate?: Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput | Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput[];
    createMany?: Prisma.PayrollRunCreateManyTaxRuleConfigInputEnvelope;
    connect?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
};
export type PayrollRunUpdateManyWithoutTaxRuleConfigNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollRunCreateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput> | Prisma.PayrollRunCreateWithoutTaxRuleConfigInput[] | Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput[];
    connectOrCreate?: Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput | Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput[];
    upsert?: Prisma.PayrollRunUpsertWithWhereUniqueWithoutTaxRuleConfigInput | Prisma.PayrollRunUpsertWithWhereUniqueWithoutTaxRuleConfigInput[];
    createMany?: Prisma.PayrollRunCreateManyTaxRuleConfigInputEnvelope;
    set?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    disconnect?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    delete?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    connect?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    update?: Prisma.PayrollRunUpdateWithWhereUniqueWithoutTaxRuleConfigInput | Prisma.PayrollRunUpdateWithWhereUniqueWithoutTaxRuleConfigInput[];
    updateMany?: Prisma.PayrollRunUpdateManyWithWhereWithoutTaxRuleConfigInput | Prisma.PayrollRunUpdateManyWithWhereWithoutTaxRuleConfigInput[];
    deleteMany?: Prisma.PayrollRunScalarWhereInput | Prisma.PayrollRunScalarWhereInput[];
};
export type PayrollRunUncheckedUpdateManyWithoutTaxRuleConfigNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollRunCreateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput> | Prisma.PayrollRunCreateWithoutTaxRuleConfigInput[] | Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput[];
    connectOrCreate?: Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput | Prisma.PayrollRunCreateOrConnectWithoutTaxRuleConfigInput[];
    upsert?: Prisma.PayrollRunUpsertWithWhereUniqueWithoutTaxRuleConfigInput | Prisma.PayrollRunUpsertWithWhereUniqueWithoutTaxRuleConfigInput[];
    createMany?: Prisma.PayrollRunCreateManyTaxRuleConfigInputEnvelope;
    set?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    disconnect?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    delete?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    connect?: Prisma.PayrollRunWhereUniqueInput | Prisma.PayrollRunWhereUniqueInput[];
    update?: Prisma.PayrollRunUpdateWithWhereUniqueWithoutTaxRuleConfigInput | Prisma.PayrollRunUpdateWithWhereUniqueWithoutTaxRuleConfigInput[];
    updateMany?: Prisma.PayrollRunUpdateManyWithWhereWithoutTaxRuleConfigInput | Prisma.PayrollRunUpdateManyWithWhereWithoutTaxRuleConfigInput[];
    deleteMany?: Prisma.PayrollRunScalarWhereInput | Prisma.PayrollRunScalarWhereInput[];
};
export type EnumPayrollRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayrollRunStatus;
};
export type PayrollRunCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.PayrollRunCreateWithoutLinesInput, Prisma.PayrollRunUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PayrollRunCreateOrConnectWithoutLinesInput;
    connect?: Prisma.PayrollRunWhereUniqueInput;
};
export type PayrollRunUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollRunCreateWithoutLinesInput, Prisma.PayrollRunUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.PayrollRunCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.PayrollRunUpsertWithoutLinesInput;
    connect?: Prisma.PayrollRunWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayrollRunUpdateToOneWithWhereWithoutLinesInput, Prisma.PayrollRunUpdateWithoutLinesInput>, Prisma.PayrollRunUncheckedUpdateWithoutLinesInput>;
};
export type PayrollRunCreateWithoutTaxRuleConfigInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
    lines?: Prisma.PayrollRunLineCreateNestedManyWithoutPayrollRunInput;
};
export type PayrollRunUncheckedCreateWithoutTaxRuleConfigInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
    lines?: Prisma.PayrollRunLineUncheckedCreateNestedManyWithoutPayrollRunInput;
};
export type PayrollRunCreateOrConnectWithoutTaxRuleConfigInput = {
    where: Prisma.PayrollRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollRunCreateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput>;
};
export type PayrollRunCreateManyTaxRuleConfigInputEnvelope = {
    data: Prisma.PayrollRunCreateManyTaxRuleConfigInput | Prisma.PayrollRunCreateManyTaxRuleConfigInput[];
    skipDuplicates?: boolean;
};
export type PayrollRunUpsertWithWhereUniqueWithoutTaxRuleConfigInput = {
    where: Prisma.PayrollRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayrollRunUpdateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedUpdateWithoutTaxRuleConfigInput>;
    create: Prisma.XOR<Prisma.PayrollRunCreateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedCreateWithoutTaxRuleConfigInput>;
};
export type PayrollRunUpdateWithWhereUniqueWithoutTaxRuleConfigInput = {
    where: Prisma.PayrollRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayrollRunUpdateWithoutTaxRuleConfigInput, Prisma.PayrollRunUncheckedUpdateWithoutTaxRuleConfigInput>;
};
export type PayrollRunUpdateManyWithWhereWithoutTaxRuleConfigInput = {
    where: Prisma.PayrollRunScalarWhereInput;
    data: Prisma.XOR<Prisma.PayrollRunUpdateManyMutationInput, Prisma.PayrollRunUncheckedUpdateManyWithoutTaxRuleConfigInput>;
};
export type PayrollRunScalarWhereInput = {
    AND?: Prisma.PayrollRunScalarWhereInput | Prisma.PayrollRunScalarWhereInput[];
    OR?: Prisma.PayrollRunScalarWhereInput[];
    NOT?: Prisma.PayrollRunScalarWhereInput | Prisma.PayrollRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"PayrollRun"> | string;
    periodMonth?: Prisma.IntFilter<"PayrollRun"> | number;
    periodYear?: Prisma.IntFilter<"PayrollRun"> | number;
    ledgerEntityCode?: Prisma.StringFilter<"PayrollRun"> | string;
    status?: Prisma.EnumPayrollRunStatusFilter<"PayrollRun"> | $Enums.PayrollRunStatus;
    taxRuleConfigId?: Prisma.UuidFilter<"PayrollRun"> | string;
    journalEntryId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    generatedByUserId?: Prisma.UuidFilter<"PayrollRun"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"PayrollRun"> | string | null;
    generatedAt?: Prisma.DateTimeFilter<"PayrollRun"> | Date | string;
};
export type PayrollRunCreateWithoutLinesInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
    taxRuleConfig: Prisma.TaxRuleConfigCreateNestedOneWithoutPayrollRunsInput;
};
export type PayrollRunUncheckedCreateWithoutLinesInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    taxRuleConfigId: string;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
};
export type PayrollRunCreateOrConnectWithoutLinesInput = {
    where: Prisma.PayrollRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollRunCreateWithoutLinesInput, Prisma.PayrollRunUncheckedCreateWithoutLinesInput>;
};
export type PayrollRunUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.PayrollRunUpdateWithoutLinesInput, Prisma.PayrollRunUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.PayrollRunCreateWithoutLinesInput, Prisma.PayrollRunUncheckedCreateWithoutLinesInput>;
    where?: Prisma.PayrollRunWhereInput;
};
export type PayrollRunUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.PayrollRunWhereInput;
    data: Prisma.XOR<Prisma.PayrollRunUpdateWithoutLinesInput, Prisma.PayrollRunUncheckedUpdateWithoutLinesInput>;
};
export type PayrollRunUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxRuleConfig?: Prisma.TaxRuleConfigUpdateOneRequiredWithoutPayrollRunsNestedInput;
};
export type PayrollRunUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    taxRuleConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollRunCreateManyTaxRuleConfigInput = {
    id?: string;
    periodMonth: number;
    periodYear: number;
    ledgerEntityCode: string;
    status?: $Enums.PayrollRunStatus;
    journalEntryId?: string | null;
    workflowInstanceId?: string | null;
    generatedByUserId: string;
    approvedByUserId?: string | null;
    generatedAt?: Date | string;
};
export type PayrollRunUpdateWithoutTaxRuleConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.PayrollRunLineUpdateManyWithoutPayrollRunNestedInput;
};
export type PayrollRunUncheckedUpdateWithoutTaxRuleConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.PayrollRunLineUncheckedUpdateManyWithoutPayrollRunNestedInput;
};
export type PayrollRunUncheckedUpdateManyWithoutTaxRuleConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    periodYear?: Prisma.IntFieldUpdateOperationsInput | number;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPayrollRunStatusFieldUpdateOperationsInput | $Enums.PayrollRunStatus;
    journalEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayrollRunCountOutputType = {
    lines: number;
};
export type PayrollRunCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | PayrollRunCountOutputTypeCountLinesArgs;
};
export type PayrollRunCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunCountOutputTypeSelect<ExtArgs> | null;
};
export type PayrollRunCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunLineWhereInput;
};
export type PayrollRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    ledgerEntityCode?: boolean;
    status?: boolean;
    taxRuleConfigId?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    generatedAt?: boolean;
    taxRuleConfig?: boolean | Prisma.TaxRuleConfigDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.PayrollRun$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.PayrollRunCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payrollRun"]>;
export type PayrollRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    ledgerEntityCode?: boolean;
    status?: boolean;
    taxRuleConfigId?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    generatedAt?: boolean;
    taxRuleConfig?: boolean | Prisma.TaxRuleConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payrollRun"]>;
export type PayrollRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    ledgerEntityCode?: boolean;
    status?: boolean;
    taxRuleConfigId?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    generatedAt?: boolean;
    taxRuleConfig?: boolean | Prisma.TaxRuleConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payrollRun"]>;
export type PayrollRunSelectScalar = {
    id?: boolean;
    periodMonth?: boolean;
    periodYear?: boolean;
    ledgerEntityCode?: boolean;
    status?: boolean;
    taxRuleConfigId?: boolean;
    journalEntryId?: boolean;
    workflowInstanceId?: boolean;
    generatedByUserId?: boolean;
    approvedByUserId?: boolean;
    generatedAt?: boolean;
};
export type PayrollRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "periodMonth" | "periodYear" | "ledgerEntityCode" | "status" | "taxRuleConfigId" | "journalEntryId" | "workflowInstanceId" | "generatedByUserId" | "approvedByUserId" | "generatedAt", ExtArgs["result"]["payrollRun"]>;
export type PayrollRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxRuleConfig?: boolean | Prisma.TaxRuleConfigDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.PayrollRun$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.PayrollRunCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PayrollRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxRuleConfig?: boolean | Prisma.TaxRuleConfigDefaultArgs<ExtArgs>;
};
export type PayrollRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxRuleConfig?: boolean | Prisma.TaxRuleConfigDefaultArgs<ExtArgs>;
};
export type $PayrollRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayrollRun";
    objects: {
        taxRuleConfig: Prisma.$TaxRuleConfigPayload<ExtArgs>;
        lines: Prisma.$PayrollRunLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        periodMonth: number;
        periodYear: number;
        ledgerEntityCode: string;
        status: $Enums.PayrollRunStatus;
        taxRuleConfigId: string;
        journalEntryId: string | null;
        workflowInstanceId: string | null;
        generatedByUserId: string;
        approvedByUserId: string | null;
        generatedAt: Date;
    }, ExtArgs["result"]["payrollRun"]>;
    composites: {};
};
export type PayrollRunGetPayload<S extends boolean | null | undefined | PayrollRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload, S>;
export type PayrollRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayrollRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayrollRunCountAggregateInputType | true;
};
export interface PayrollRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayrollRun'];
        meta: {
            name: 'PayrollRun';
        };
    };
    findUnique<T extends PayrollRunFindUniqueArgs>(args: Prisma.SelectSubset<T, PayrollRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayrollRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayrollRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayrollRunFindFirstArgs>(args?: Prisma.SelectSubset<T, PayrollRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayrollRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayrollRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayrollRunFindManyArgs>(args?: Prisma.SelectSubset<T, PayrollRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayrollRunCreateArgs>(args: Prisma.SelectSubset<T, PayrollRunCreateArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayrollRunCreateManyArgs>(args?: Prisma.SelectSubset<T, PayrollRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayrollRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayrollRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayrollRunDeleteArgs>(args: Prisma.SelectSubset<T, PayrollRunDeleteArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayrollRunUpdateArgs>(args: Prisma.SelectSubset<T, PayrollRunUpdateArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayrollRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayrollRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayrollRunUpdateManyArgs>(args: Prisma.SelectSubset<T, PayrollRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayrollRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayrollRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayrollRunUpsertArgs>(args: Prisma.SelectSubset<T, PayrollRunUpsertArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayrollRunCountArgs>(args?: Prisma.Subset<T, PayrollRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayrollRunCountAggregateOutputType> : number>;
    aggregate<T extends PayrollRunAggregateArgs>(args: Prisma.Subset<T, PayrollRunAggregateArgs>): Prisma.PrismaPromise<GetPayrollRunAggregateType<T>>;
    groupBy<T extends PayrollRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayrollRunGroupByArgs['orderBy'];
    } : {
        orderBy?: PayrollRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayrollRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayrollRunFieldRefs;
}
export interface Prisma__PayrollRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    taxRuleConfig<T extends Prisma.TaxRuleConfigDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRuleConfigDefaultArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.PayrollRun$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayrollRun$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayrollRunFieldRefs {
    readonly id: Prisma.FieldRef<"PayrollRun", 'String'>;
    readonly periodMonth: Prisma.FieldRef<"PayrollRun", 'Int'>;
    readonly periodYear: Prisma.FieldRef<"PayrollRun", 'Int'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"PayrollRun", 'String'>;
    readonly status: Prisma.FieldRef<"PayrollRun", 'PayrollRunStatus'>;
    readonly taxRuleConfigId: Prisma.FieldRef<"PayrollRun", 'String'>;
    readonly journalEntryId: Prisma.FieldRef<"PayrollRun", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"PayrollRun", 'String'>;
    readonly generatedByUserId: Prisma.FieldRef<"PayrollRun", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"PayrollRun", 'String'>;
    readonly generatedAt: Prisma.FieldRef<"PayrollRun", 'DateTime'>;
}
export type PayrollRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where: Prisma.PayrollRunWhereUniqueInput;
};
export type PayrollRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where: Prisma.PayrollRunWhereUniqueInput;
};
export type PayrollRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where?: Prisma.PayrollRunWhereInput;
    orderBy?: Prisma.PayrollRunOrderByWithRelationInput | Prisma.PayrollRunOrderByWithRelationInput[];
    cursor?: Prisma.PayrollRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayrollRunScalarFieldEnum | Prisma.PayrollRunScalarFieldEnum[];
};
export type PayrollRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where?: Prisma.PayrollRunWhereInput;
    orderBy?: Prisma.PayrollRunOrderByWithRelationInput | Prisma.PayrollRunOrderByWithRelationInput[];
    cursor?: Prisma.PayrollRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayrollRunScalarFieldEnum | Prisma.PayrollRunScalarFieldEnum[];
};
export type PayrollRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where?: Prisma.PayrollRunWhereInput;
    orderBy?: Prisma.PayrollRunOrderByWithRelationInput | Prisma.PayrollRunOrderByWithRelationInput[];
    cursor?: Prisma.PayrollRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayrollRunScalarFieldEnum | Prisma.PayrollRunScalarFieldEnum[];
};
export type PayrollRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollRunCreateInput, Prisma.PayrollRunUncheckedCreateInput>;
};
export type PayrollRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayrollRunCreateManyInput | Prisma.PayrollRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayrollRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    data: Prisma.PayrollRunCreateManyInput | Prisma.PayrollRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayrollRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayrollRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollRunUpdateInput, Prisma.PayrollRunUncheckedUpdateInput>;
    where: Prisma.PayrollRunWhereUniqueInput;
};
export type PayrollRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayrollRunUpdateManyMutationInput, Prisma.PayrollRunUncheckedUpdateManyInput>;
    where?: Prisma.PayrollRunWhereInput;
    limit?: number;
};
export type PayrollRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollRunUpdateManyMutationInput, Prisma.PayrollRunUncheckedUpdateManyInput>;
    where?: Prisma.PayrollRunWhereInput;
    limit?: number;
    include?: Prisma.PayrollRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayrollRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where: Prisma.PayrollRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollRunCreateInput, Prisma.PayrollRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayrollRunUpdateInput, Prisma.PayrollRunUncheckedUpdateInput>;
};
export type PayrollRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where: Prisma.PayrollRunWhereUniqueInput;
};
export type PayrollRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunWhereInput;
    limit?: number;
};
export type PayrollRun$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
    where?: Prisma.PayrollRunLineWhereInput;
    orderBy?: Prisma.PayrollRunLineOrderByWithRelationInput | Prisma.PayrollRunLineOrderByWithRelationInput[];
    cursor?: Prisma.PayrollRunLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayrollRunLineScalarFieldEnum | Prisma.PayrollRunLineScalarFieldEnum[];
};
export type PayrollRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
};
