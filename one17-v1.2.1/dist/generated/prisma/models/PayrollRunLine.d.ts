import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayrollRunLineModel = runtime.Types.Result.DefaultSelection<Prisma.$PayrollRunLinePayload>;
export type AggregatePayrollRunLine = {
    _count: PayrollRunLineCountAggregateOutputType | null;
    _avg: PayrollRunLineAvgAggregateOutputType | null;
    _sum: PayrollRunLineSumAggregateOutputType | null;
    _min: PayrollRunLineMinAggregateOutputType | null;
    _max: PayrollRunLineMaxAggregateOutputType | null;
};
export type PayrollRunLineAvgAggregateOutputType = {
    grossKobo: number | null;
    payeKobo: number | null;
    pensionKobo: number | null;
    nhfKobo: number | null;
    incentiveKobo: number | null;
    netPayKobo: number | null;
};
export type PayrollRunLineSumAggregateOutputType = {
    grossKobo: bigint | null;
    payeKobo: bigint | null;
    pensionKobo: bigint | null;
    nhfKobo: bigint | null;
    incentiveKobo: bigint | null;
    netPayKobo: bigint | null;
};
export type PayrollRunLineMinAggregateOutputType = {
    id: string | null;
    payrollRunId: string | null;
    employeeId: string | null;
    grossKobo: bigint | null;
    payeKobo: bigint | null;
    pensionKobo: bigint | null;
    nhfKobo: bigint | null;
    incentiveKobo: bigint | null;
    netPayKobo: bigint | null;
};
export type PayrollRunLineMaxAggregateOutputType = {
    id: string | null;
    payrollRunId: string | null;
    employeeId: string | null;
    grossKobo: bigint | null;
    payeKobo: bigint | null;
    pensionKobo: bigint | null;
    nhfKobo: bigint | null;
    incentiveKobo: bigint | null;
    netPayKobo: bigint | null;
};
export type PayrollRunLineCountAggregateOutputType = {
    id: number;
    payrollRunId: number;
    employeeId: number;
    grossKobo: number;
    payeKobo: number;
    pensionKobo: number;
    nhfKobo: number;
    incentiveKobo: number;
    netPayKobo: number;
    _all: number;
};
export type PayrollRunLineAvgAggregateInputType = {
    grossKobo?: true;
    payeKobo?: true;
    pensionKobo?: true;
    nhfKobo?: true;
    incentiveKobo?: true;
    netPayKobo?: true;
};
export type PayrollRunLineSumAggregateInputType = {
    grossKobo?: true;
    payeKobo?: true;
    pensionKobo?: true;
    nhfKobo?: true;
    incentiveKobo?: true;
    netPayKobo?: true;
};
export type PayrollRunLineMinAggregateInputType = {
    id?: true;
    payrollRunId?: true;
    employeeId?: true;
    grossKobo?: true;
    payeKobo?: true;
    pensionKobo?: true;
    nhfKobo?: true;
    incentiveKobo?: true;
    netPayKobo?: true;
};
export type PayrollRunLineMaxAggregateInputType = {
    id?: true;
    payrollRunId?: true;
    employeeId?: true;
    grossKobo?: true;
    payeKobo?: true;
    pensionKobo?: true;
    nhfKobo?: true;
    incentiveKobo?: true;
    netPayKobo?: true;
};
export type PayrollRunLineCountAggregateInputType = {
    id?: true;
    payrollRunId?: true;
    employeeId?: true;
    grossKobo?: true;
    payeKobo?: true;
    pensionKobo?: true;
    nhfKobo?: true;
    incentiveKobo?: true;
    netPayKobo?: true;
    _all?: true;
};
export type PayrollRunLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunLineWhereInput;
    orderBy?: Prisma.PayrollRunLineOrderByWithRelationInput | Prisma.PayrollRunLineOrderByWithRelationInput[];
    cursor?: Prisma.PayrollRunLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayrollRunLineCountAggregateInputType;
    _avg?: PayrollRunLineAvgAggregateInputType;
    _sum?: PayrollRunLineSumAggregateInputType;
    _min?: PayrollRunLineMinAggregateInputType;
    _max?: PayrollRunLineMaxAggregateInputType;
};
export type GetPayrollRunLineAggregateType<T extends PayrollRunLineAggregateArgs> = {
    [P in keyof T & keyof AggregatePayrollRunLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayrollRunLine[P]> : Prisma.GetScalarType<T[P], AggregatePayrollRunLine[P]>;
};
export type PayrollRunLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunLineWhereInput;
    orderBy?: Prisma.PayrollRunLineOrderByWithAggregationInput | Prisma.PayrollRunLineOrderByWithAggregationInput[];
    by: Prisma.PayrollRunLineScalarFieldEnum[] | Prisma.PayrollRunLineScalarFieldEnum;
    having?: Prisma.PayrollRunLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayrollRunLineCountAggregateInputType | true;
    _avg?: PayrollRunLineAvgAggregateInputType;
    _sum?: PayrollRunLineSumAggregateInputType;
    _min?: PayrollRunLineMinAggregateInputType;
    _max?: PayrollRunLineMaxAggregateInputType;
};
export type PayrollRunLineGroupByOutputType = {
    id: string;
    payrollRunId: string;
    employeeId: string;
    grossKobo: bigint;
    payeKobo: bigint;
    pensionKobo: bigint;
    nhfKobo: bigint;
    incentiveKobo: bigint;
    netPayKobo: bigint;
    _count: PayrollRunLineCountAggregateOutputType | null;
    _avg: PayrollRunLineAvgAggregateOutputType | null;
    _sum: PayrollRunLineSumAggregateOutputType | null;
    _min: PayrollRunLineMinAggregateOutputType | null;
    _max: PayrollRunLineMaxAggregateOutputType | null;
};
export type GetPayrollRunLineGroupByPayload<T extends PayrollRunLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayrollRunLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayrollRunLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayrollRunLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayrollRunLineGroupByOutputType[P]>;
}>>;
export type PayrollRunLineWhereInput = {
    AND?: Prisma.PayrollRunLineWhereInput | Prisma.PayrollRunLineWhereInput[];
    OR?: Prisma.PayrollRunLineWhereInput[];
    NOT?: Prisma.PayrollRunLineWhereInput | Prisma.PayrollRunLineWhereInput[];
    id?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    payrollRunId?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    employeeId?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    grossKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    payeKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    pensionKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    nhfKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    incentiveKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    netPayKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    payrollRun?: Prisma.XOR<Prisma.PayrollRunScalarRelationFilter, Prisma.PayrollRunWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type PayrollRunLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    payrollRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    payeKobo?: Prisma.SortOrder;
    pensionKobo?: Prisma.SortOrder;
    nhfKobo?: Prisma.SortOrder;
    incentiveKobo?: Prisma.SortOrder;
    netPayKobo?: Prisma.SortOrder;
    payrollRun?: Prisma.PayrollRunOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type PayrollRunLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    payrollRunId_employeeId?: Prisma.PayrollRunLinePayrollRunIdEmployeeIdCompoundUniqueInput;
    AND?: Prisma.PayrollRunLineWhereInput | Prisma.PayrollRunLineWhereInput[];
    OR?: Prisma.PayrollRunLineWhereInput[];
    NOT?: Prisma.PayrollRunLineWhereInput | Prisma.PayrollRunLineWhereInput[];
    payrollRunId?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    employeeId?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    grossKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    payeKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    pensionKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    nhfKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    incentiveKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    netPayKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    payrollRun?: Prisma.XOR<Prisma.PayrollRunScalarRelationFilter, Prisma.PayrollRunWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "payrollRunId_employeeId">;
export type PayrollRunLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    payrollRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    payeKobo?: Prisma.SortOrder;
    pensionKobo?: Prisma.SortOrder;
    nhfKobo?: Prisma.SortOrder;
    incentiveKobo?: Prisma.SortOrder;
    netPayKobo?: Prisma.SortOrder;
    _count?: Prisma.PayrollRunLineCountOrderByAggregateInput;
    _avg?: Prisma.PayrollRunLineAvgOrderByAggregateInput;
    _max?: Prisma.PayrollRunLineMaxOrderByAggregateInput;
    _min?: Prisma.PayrollRunLineMinOrderByAggregateInput;
    _sum?: Prisma.PayrollRunLineSumOrderByAggregateInput;
};
export type PayrollRunLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayrollRunLineScalarWhereWithAggregatesInput | Prisma.PayrollRunLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayrollRunLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayrollRunLineScalarWhereWithAggregatesInput | Prisma.PayrollRunLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PayrollRunLine"> | string;
    payrollRunId?: Prisma.UuidWithAggregatesFilter<"PayrollRunLine"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"PayrollRunLine"> | string;
    grossKobo?: Prisma.BigIntWithAggregatesFilter<"PayrollRunLine"> | bigint | number;
    payeKobo?: Prisma.BigIntWithAggregatesFilter<"PayrollRunLine"> | bigint | number;
    pensionKobo?: Prisma.BigIntWithAggregatesFilter<"PayrollRunLine"> | bigint | number;
    nhfKobo?: Prisma.BigIntWithAggregatesFilter<"PayrollRunLine"> | bigint | number;
    incentiveKobo?: Prisma.BigIntWithAggregatesFilter<"PayrollRunLine"> | bigint | number;
    netPayKobo?: Prisma.BigIntWithAggregatesFilter<"PayrollRunLine"> | bigint | number;
};
export type PayrollRunLineCreateInput = {
    id?: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
    payrollRun: Prisma.PayrollRunCreateNestedOneWithoutLinesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutPayrollRunLinesInput;
};
export type PayrollRunLineUncheckedCreateInput = {
    id?: string;
    payrollRunId: string;
    employeeId: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
};
export type PayrollRunLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payrollRun?: Prisma.PayrollRunUpdateOneRequiredWithoutLinesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPayrollRunLinesNestedInput;
};
export type PayrollRunLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payrollRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PayrollRunLineCreateManyInput = {
    id?: string;
    payrollRunId: string;
    employeeId: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
};
export type PayrollRunLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PayrollRunLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payrollRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PayrollRunLineListRelationFilter = {
    every?: Prisma.PayrollRunLineWhereInput;
    some?: Prisma.PayrollRunLineWhereInput;
    none?: Prisma.PayrollRunLineWhereInput;
};
export type PayrollRunLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayrollRunLinePayrollRunIdEmployeeIdCompoundUniqueInput = {
    payrollRunId: string;
    employeeId: string;
};
export type PayrollRunLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payrollRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    payeKobo?: Prisma.SortOrder;
    pensionKobo?: Prisma.SortOrder;
    nhfKobo?: Prisma.SortOrder;
    incentiveKobo?: Prisma.SortOrder;
    netPayKobo?: Prisma.SortOrder;
};
export type PayrollRunLineAvgOrderByAggregateInput = {
    grossKobo?: Prisma.SortOrder;
    payeKobo?: Prisma.SortOrder;
    pensionKobo?: Prisma.SortOrder;
    nhfKobo?: Prisma.SortOrder;
    incentiveKobo?: Prisma.SortOrder;
    netPayKobo?: Prisma.SortOrder;
};
export type PayrollRunLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payrollRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    payeKobo?: Prisma.SortOrder;
    pensionKobo?: Prisma.SortOrder;
    nhfKobo?: Prisma.SortOrder;
    incentiveKobo?: Prisma.SortOrder;
    netPayKobo?: Prisma.SortOrder;
};
export type PayrollRunLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payrollRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossKobo?: Prisma.SortOrder;
    payeKobo?: Prisma.SortOrder;
    pensionKobo?: Prisma.SortOrder;
    nhfKobo?: Prisma.SortOrder;
    incentiveKobo?: Prisma.SortOrder;
    netPayKobo?: Prisma.SortOrder;
};
export type PayrollRunLineSumOrderByAggregateInput = {
    grossKobo?: Prisma.SortOrder;
    payeKobo?: Prisma.SortOrder;
    pensionKobo?: Prisma.SortOrder;
    nhfKobo?: Prisma.SortOrder;
    incentiveKobo?: Prisma.SortOrder;
    netPayKobo?: Prisma.SortOrder;
};
export type PayrollRunLineCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollRunLineCreateWithoutEmployeeInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayrollRunLineCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
};
export type PayrollRunLineUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollRunLineCreateWithoutEmployeeInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayrollRunLineCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
};
export type PayrollRunLineUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollRunLineCreateWithoutEmployeeInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayrollRunLineCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    delete?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    update?: Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayrollRunLineUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayrollRunLineUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayrollRunLineScalarWhereInput | Prisma.PayrollRunLineScalarWhereInput[];
};
export type PayrollRunLineUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayrollRunLineCreateWithoutEmployeeInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayrollRunLineCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayrollRunLineCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    delete?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    update?: Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayrollRunLineUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayrollRunLineUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayrollRunLineScalarWhereInput | Prisma.PayrollRunLineScalarWhereInput[];
};
export type PayrollRunLineCreateNestedManyWithoutPayrollRunInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput> | Prisma.PayrollRunLineCreateWithoutPayrollRunInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput | Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput[];
    createMany?: Prisma.PayrollRunLineCreateManyPayrollRunInputEnvelope;
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
};
export type PayrollRunLineUncheckedCreateNestedManyWithoutPayrollRunInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput> | Prisma.PayrollRunLineCreateWithoutPayrollRunInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput | Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput[];
    createMany?: Prisma.PayrollRunLineCreateManyPayrollRunInputEnvelope;
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
};
export type PayrollRunLineUpdateManyWithoutPayrollRunNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput> | Prisma.PayrollRunLineCreateWithoutPayrollRunInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput | Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput[];
    upsert?: Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutPayrollRunInput | Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutPayrollRunInput[];
    createMany?: Prisma.PayrollRunLineCreateManyPayrollRunInputEnvelope;
    set?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    delete?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    update?: Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutPayrollRunInput | Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutPayrollRunInput[];
    updateMany?: Prisma.PayrollRunLineUpdateManyWithWhereWithoutPayrollRunInput | Prisma.PayrollRunLineUpdateManyWithWhereWithoutPayrollRunInput[];
    deleteMany?: Prisma.PayrollRunLineScalarWhereInput | Prisma.PayrollRunLineScalarWhereInput[];
};
export type PayrollRunLineUncheckedUpdateManyWithoutPayrollRunNestedInput = {
    create?: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput> | Prisma.PayrollRunLineCreateWithoutPayrollRunInput[] | Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput[];
    connectOrCreate?: Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput | Prisma.PayrollRunLineCreateOrConnectWithoutPayrollRunInput[];
    upsert?: Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutPayrollRunInput | Prisma.PayrollRunLineUpsertWithWhereUniqueWithoutPayrollRunInput[];
    createMany?: Prisma.PayrollRunLineCreateManyPayrollRunInputEnvelope;
    set?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    delete?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    connect?: Prisma.PayrollRunLineWhereUniqueInput | Prisma.PayrollRunLineWhereUniqueInput[];
    update?: Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutPayrollRunInput | Prisma.PayrollRunLineUpdateWithWhereUniqueWithoutPayrollRunInput[];
    updateMany?: Prisma.PayrollRunLineUpdateManyWithWhereWithoutPayrollRunInput | Prisma.PayrollRunLineUpdateManyWithWhereWithoutPayrollRunInput[];
    deleteMany?: Prisma.PayrollRunLineScalarWhereInput | Prisma.PayrollRunLineScalarWhereInput[];
};
export type PayrollRunLineCreateWithoutEmployeeInput = {
    id?: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
    payrollRun: Prisma.PayrollRunCreateNestedOneWithoutLinesInput;
};
export type PayrollRunLineUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    payrollRunId: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
};
export type PayrollRunLineCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.PayrollRunLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput>;
};
export type PayrollRunLineCreateManyEmployeeInputEnvelope = {
    data: Prisma.PayrollRunLineCreateManyEmployeeInput | Prisma.PayrollRunLineCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type PayrollRunLineUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayrollRunLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayrollRunLineUpdateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedCreateWithoutEmployeeInput>;
};
export type PayrollRunLineUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayrollRunLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayrollRunLineUpdateWithoutEmployeeInput, Prisma.PayrollRunLineUncheckedUpdateWithoutEmployeeInput>;
};
export type PayrollRunLineUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.PayrollRunLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayrollRunLineUpdateManyMutationInput, Prisma.PayrollRunLineUncheckedUpdateManyWithoutEmployeeInput>;
};
export type PayrollRunLineScalarWhereInput = {
    AND?: Prisma.PayrollRunLineScalarWhereInput | Prisma.PayrollRunLineScalarWhereInput[];
    OR?: Prisma.PayrollRunLineScalarWhereInput[];
    NOT?: Prisma.PayrollRunLineScalarWhereInput | Prisma.PayrollRunLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    payrollRunId?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    employeeId?: Prisma.UuidFilter<"PayrollRunLine"> | string;
    grossKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    payeKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    pensionKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    nhfKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    incentiveKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
    netPayKobo?: Prisma.BigIntFilter<"PayrollRunLine"> | bigint | number;
};
export type PayrollRunLineCreateWithoutPayrollRunInput = {
    id?: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
    employee: Prisma.EmployeeCreateNestedOneWithoutPayrollRunLinesInput;
};
export type PayrollRunLineUncheckedCreateWithoutPayrollRunInput = {
    id?: string;
    employeeId: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
};
export type PayrollRunLineCreateOrConnectWithoutPayrollRunInput = {
    where: Prisma.PayrollRunLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput>;
};
export type PayrollRunLineCreateManyPayrollRunInputEnvelope = {
    data: Prisma.PayrollRunLineCreateManyPayrollRunInput | Prisma.PayrollRunLineCreateManyPayrollRunInput[];
    skipDuplicates?: boolean;
};
export type PayrollRunLineUpsertWithWhereUniqueWithoutPayrollRunInput = {
    where: Prisma.PayrollRunLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayrollRunLineUpdateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedUpdateWithoutPayrollRunInput>;
    create: Prisma.XOR<Prisma.PayrollRunLineCreateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedCreateWithoutPayrollRunInput>;
};
export type PayrollRunLineUpdateWithWhereUniqueWithoutPayrollRunInput = {
    where: Prisma.PayrollRunLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayrollRunLineUpdateWithoutPayrollRunInput, Prisma.PayrollRunLineUncheckedUpdateWithoutPayrollRunInput>;
};
export type PayrollRunLineUpdateManyWithWhereWithoutPayrollRunInput = {
    where: Prisma.PayrollRunLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayrollRunLineUpdateManyMutationInput, Prisma.PayrollRunLineUncheckedUpdateManyWithoutPayrollRunInput>;
};
export type PayrollRunLineCreateManyEmployeeInput = {
    id?: string;
    payrollRunId: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
};
export type PayrollRunLineUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payrollRun?: Prisma.PayrollRunUpdateOneRequiredWithoutLinesNestedInput;
};
export type PayrollRunLineUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payrollRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PayrollRunLineUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payrollRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PayrollRunLineCreateManyPayrollRunInput = {
    id?: string;
    employeeId: string;
    grossKobo: bigint | number;
    payeKobo: bigint | number;
    pensionKobo: bigint | number;
    nhfKobo: bigint | number;
    incentiveKobo?: bigint | number;
    netPayKobo: bigint | number;
};
export type PayrollRunLineUpdateWithoutPayrollRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPayrollRunLinesNestedInput;
};
export type PayrollRunLineUncheckedUpdateWithoutPayrollRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PayrollRunLineUncheckedUpdateManyWithoutPayrollRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payeKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    pensionKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nhfKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    netPayKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PayrollRunLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payrollRunId?: boolean;
    employeeId?: boolean;
    grossKobo?: boolean;
    payeKobo?: boolean;
    pensionKobo?: boolean;
    nhfKobo?: boolean;
    incentiveKobo?: boolean;
    netPayKobo?: boolean;
    payrollRun?: boolean | Prisma.PayrollRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payrollRunLine"]>;
export type PayrollRunLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payrollRunId?: boolean;
    employeeId?: boolean;
    grossKobo?: boolean;
    payeKobo?: boolean;
    pensionKobo?: boolean;
    nhfKobo?: boolean;
    incentiveKobo?: boolean;
    netPayKobo?: boolean;
    payrollRun?: boolean | Prisma.PayrollRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payrollRunLine"]>;
export type PayrollRunLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payrollRunId?: boolean;
    employeeId?: boolean;
    grossKobo?: boolean;
    payeKobo?: boolean;
    pensionKobo?: boolean;
    nhfKobo?: boolean;
    incentiveKobo?: boolean;
    netPayKobo?: boolean;
    payrollRun?: boolean | Prisma.PayrollRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payrollRunLine"]>;
export type PayrollRunLineSelectScalar = {
    id?: boolean;
    payrollRunId?: boolean;
    employeeId?: boolean;
    grossKobo?: boolean;
    payeKobo?: boolean;
    pensionKobo?: boolean;
    nhfKobo?: boolean;
    incentiveKobo?: boolean;
    netPayKobo?: boolean;
};
export type PayrollRunLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "payrollRunId" | "employeeId" | "grossKobo" | "payeKobo" | "pensionKobo" | "nhfKobo" | "incentiveKobo" | "netPayKobo", ExtArgs["result"]["payrollRunLine"]>;
export type PayrollRunLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payrollRun?: boolean | Prisma.PayrollRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayrollRunLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payrollRun?: boolean | Prisma.PayrollRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayrollRunLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payrollRun?: boolean | Prisma.PayrollRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $PayrollRunLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayrollRunLine";
    objects: {
        payrollRun: Prisma.$PayrollRunPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        payrollRunId: string;
        employeeId: string;
        grossKobo: bigint;
        payeKobo: bigint;
        pensionKobo: bigint;
        nhfKobo: bigint;
        incentiveKobo: bigint;
        netPayKobo: bigint;
    }, ExtArgs["result"]["payrollRunLine"]>;
    composites: {};
};
export type PayrollRunLineGetPayload<S extends boolean | null | undefined | PayrollRunLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload, S>;
export type PayrollRunLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayrollRunLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayrollRunLineCountAggregateInputType | true;
};
export interface PayrollRunLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayrollRunLine'];
        meta: {
            name: 'PayrollRunLine';
        };
    };
    findUnique<T extends PayrollRunLineFindUniqueArgs>(args: Prisma.SelectSubset<T, PayrollRunLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayrollRunLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayrollRunLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayrollRunLineFindFirstArgs>(args?: Prisma.SelectSubset<T, PayrollRunLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayrollRunLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayrollRunLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayrollRunLineFindManyArgs>(args?: Prisma.SelectSubset<T, PayrollRunLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayrollRunLineCreateArgs>(args: Prisma.SelectSubset<T, PayrollRunLineCreateArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayrollRunLineCreateManyArgs>(args?: Prisma.SelectSubset<T, PayrollRunLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayrollRunLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayrollRunLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayrollRunLineDeleteArgs>(args: Prisma.SelectSubset<T, PayrollRunLineDeleteArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayrollRunLineUpdateArgs>(args: Prisma.SelectSubset<T, PayrollRunLineUpdateArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayrollRunLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayrollRunLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayrollRunLineUpdateManyArgs>(args: Prisma.SelectSubset<T, PayrollRunLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayrollRunLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayrollRunLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayrollRunLineUpsertArgs>(args: Prisma.SelectSubset<T, PayrollRunLineUpsertArgs<ExtArgs>>): Prisma.Prisma__PayrollRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayrollRunLineCountArgs>(args?: Prisma.Subset<T, PayrollRunLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayrollRunLineCountAggregateOutputType> : number>;
    aggregate<T extends PayrollRunLineAggregateArgs>(args: Prisma.Subset<T, PayrollRunLineAggregateArgs>): Prisma.PrismaPromise<GetPayrollRunLineAggregateType<T>>;
    groupBy<T extends PayrollRunLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayrollRunLineGroupByArgs['orderBy'];
    } : {
        orderBy?: PayrollRunLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayrollRunLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollRunLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayrollRunLineFieldRefs;
}
export interface Prisma__PayrollRunLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payrollRun<T extends Prisma.PayrollRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayrollRunDefaultArgs<ExtArgs>>): Prisma.Prisma__PayrollRunClient<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayrollRunLineFieldRefs {
    readonly id: Prisma.FieldRef<"PayrollRunLine", 'String'>;
    readonly payrollRunId: Prisma.FieldRef<"PayrollRunLine", 'String'>;
    readonly employeeId: Prisma.FieldRef<"PayrollRunLine", 'String'>;
    readonly grossKobo: Prisma.FieldRef<"PayrollRunLine", 'BigInt'>;
    readonly payeKobo: Prisma.FieldRef<"PayrollRunLine", 'BigInt'>;
    readonly pensionKobo: Prisma.FieldRef<"PayrollRunLine", 'BigInt'>;
    readonly nhfKobo: Prisma.FieldRef<"PayrollRunLine", 'BigInt'>;
    readonly incentiveKobo: Prisma.FieldRef<"PayrollRunLine", 'BigInt'>;
    readonly netPayKobo: Prisma.FieldRef<"PayrollRunLine", 'BigInt'>;
}
export type PayrollRunLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
    where: Prisma.PayrollRunLineWhereUniqueInput;
};
export type PayrollRunLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
    where: Prisma.PayrollRunLineWhereUniqueInput;
};
export type PayrollRunLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayrollRunLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayrollRunLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayrollRunLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollRunLineCreateInput, Prisma.PayrollRunLineUncheckedCreateInput>;
};
export type PayrollRunLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayrollRunLineCreateManyInput | Prisma.PayrollRunLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayrollRunLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    data: Prisma.PayrollRunLineCreateManyInput | Prisma.PayrollRunLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayrollRunLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayrollRunLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollRunLineUpdateInput, Prisma.PayrollRunLineUncheckedUpdateInput>;
    where: Prisma.PayrollRunLineWhereUniqueInput;
};
export type PayrollRunLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayrollRunLineUpdateManyMutationInput, Prisma.PayrollRunLineUncheckedUpdateManyInput>;
    where?: Prisma.PayrollRunLineWhereInput;
    limit?: number;
};
export type PayrollRunLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayrollRunLineUpdateManyMutationInput, Prisma.PayrollRunLineUncheckedUpdateManyInput>;
    where?: Prisma.PayrollRunLineWhereInput;
    limit?: number;
    include?: Prisma.PayrollRunLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayrollRunLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
    where: Prisma.PayrollRunLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayrollRunLineCreateInput, Prisma.PayrollRunLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayrollRunLineUpdateInput, Prisma.PayrollRunLineUncheckedUpdateInput>;
};
export type PayrollRunLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
    where: Prisma.PayrollRunLineWhereUniqueInput;
};
export type PayrollRunLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunLineWhereInput;
    limit?: number;
};
export type PayrollRunLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunLineInclude<ExtArgs> | null;
};
