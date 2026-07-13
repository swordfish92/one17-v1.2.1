import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeIncentiveResultModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeeIncentiveResultPayload>;
export type AggregateEmployeeIncentiveResult = {
    _count: EmployeeIncentiveResultCountAggregateOutputType | null;
    _avg: EmployeeIncentiveResultAvgAggregateOutputType | null;
    _sum: EmployeeIncentiveResultSumAggregateOutputType | null;
    _min: EmployeeIncentiveResultMinAggregateOutputType | null;
    _max: EmployeeIncentiveResultMaxAggregateOutputType | null;
};
export type EmployeeIncentiveResultAvgAggregateOutputType = {
    totalEmolumentKobo: number | null;
    incentivePoolKobo: number | null;
    overallScorePct: runtime.Decimal | null;
    bandPayoutPct: runtime.Decimal | null;
    preGateIncentiveKobo: number | null;
    finalIncentiveKobo: number | null;
};
export type EmployeeIncentiveResultSumAggregateOutputType = {
    totalEmolumentKobo: bigint | null;
    incentivePoolKobo: bigint | null;
    overallScorePct: runtime.Decimal | null;
    bandPayoutPct: runtime.Decimal | null;
    preGateIncentiveKobo: bigint | null;
    finalIncentiveKobo: bigint | null;
};
export type EmployeeIncentiveResultMinAggregateOutputType = {
    id: string | null;
    appraisalCycleId: string | null;
    employeeId: string | null;
    totalEmolumentKobo: bigint | null;
    incentivePoolKobo: bigint | null;
    overallScorePct: runtime.Decimal | null;
    bandPayoutPct: runtime.Decimal | null;
    gateOutcome: $Enums.GateOutcome | null;
    preGateIncentiveKobo: bigint | null;
    finalIncentiveKobo: bigint | null;
    computedAt: Date | null;
};
export type EmployeeIncentiveResultMaxAggregateOutputType = {
    id: string | null;
    appraisalCycleId: string | null;
    employeeId: string | null;
    totalEmolumentKobo: bigint | null;
    incentivePoolKobo: bigint | null;
    overallScorePct: runtime.Decimal | null;
    bandPayoutPct: runtime.Decimal | null;
    gateOutcome: $Enums.GateOutcome | null;
    preGateIncentiveKobo: bigint | null;
    finalIncentiveKobo: bigint | null;
    computedAt: Date | null;
};
export type EmployeeIncentiveResultCountAggregateOutputType = {
    id: number;
    appraisalCycleId: number;
    employeeId: number;
    totalEmolumentKobo: number;
    incentivePoolKobo: number;
    overallScorePct: number;
    bandPayoutPct: number;
    gateOutcome: number;
    preGateIncentiveKobo: number;
    finalIncentiveKobo: number;
    classAllocationKobo: number;
    computedAt: number;
    _all: number;
};
export type EmployeeIncentiveResultAvgAggregateInputType = {
    totalEmolumentKobo?: true;
    incentivePoolKobo?: true;
    overallScorePct?: true;
    bandPayoutPct?: true;
    preGateIncentiveKobo?: true;
    finalIncentiveKobo?: true;
};
export type EmployeeIncentiveResultSumAggregateInputType = {
    totalEmolumentKobo?: true;
    incentivePoolKobo?: true;
    overallScorePct?: true;
    bandPayoutPct?: true;
    preGateIncentiveKobo?: true;
    finalIncentiveKobo?: true;
};
export type EmployeeIncentiveResultMinAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    totalEmolumentKobo?: true;
    incentivePoolKobo?: true;
    overallScorePct?: true;
    bandPayoutPct?: true;
    gateOutcome?: true;
    preGateIncentiveKobo?: true;
    finalIncentiveKobo?: true;
    computedAt?: true;
};
export type EmployeeIncentiveResultMaxAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    totalEmolumentKobo?: true;
    incentivePoolKobo?: true;
    overallScorePct?: true;
    bandPayoutPct?: true;
    gateOutcome?: true;
    preGateIncentiveKobo?: true;
    finalIncentiveKobo?: true;
    computedAt?: true;
};
export type EmployeeIncentiveResultCountAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    totalEmolumentKobo?: true;
    incentivePoolKobo?: true;
    overallScorePct?: true;
    bandPayoutPct?: true;
    gateOutcome?: true;
    preGateIncentiveKobo?: true;
    finalIncentiveKobo?: true;
    classAllocationKobo?: true;
    computedAt?: true;
    _all?: true;
};
export type EmployeeIncentiveResultAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    orderBy?: Prisma.EmployeeIncentiveResultOrderByWithRelationInput | Prisma.EmployeeIncentiveResultOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeIncentiveResultCountAggregateInputType;
    _avg?: EmployeeIncentiveResultAvgAggregateInputType;
    _sum?: EmployeeIncentiveResultSumAggregateInputType;
    _min?: EmployeeIncentiveResultMinAggregateInputType;
    _max?: EmployeeIncentiveResultMaxAggregateInputType;
};
export type GetEmployeeIncentiveResultAggregateType<T extends EmployeeIncentiveResultAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeeIncentiveResult]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeeIncentiveResult[P]> : Prisma.GetScalarType<T[P], AggregateEmployeeIncentiveResult[P]>;
};
export type EmployeeIncentiveResultGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    orderBy?: Prisma.EmployeeIncentiveResultOrderByWithAggregationInput | Prisma.EmployeeIncentiveResultOrderByWithAggregationInput[];
    by: Prisma.EmployeeIncentiveResultScalarFieldEnum[] | Prisma.EmployeeIncentiveResultScalarFieldEnum;
    having?: Prisma.EmployeeIncentiveResultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeIncentiveResultCountAggregateInputType | true;
    _avg?: EmployeeIncentiveResultAvgAggregateInputType;
    _sum?: EmployeeIncentiveResultSumAggregateInputType;
    _min?: EmployeeIncentiveResultMinAggregateInputType;
    _max?: EmployeeIncentiveResultMaxAggregateInputType;
};
export type EmployeeIncentiveResultGroupByOutputType = {
    id: string;
    appraisalCycleId: string;
    employeeId: string;
    totalEmolumentKobo: bigint;
    incentivePoolKobo: bigint;
    overallScorePct: runtime.Decimal;
    bandPayoutPct: runtime.Decimal;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint;
    finalIncentiveKobo: bigint;
    classAllocationKobo: runtime.JsonValue;
    computedAt: Date;
    _count: EmployeeIncentiveResultCountAggregateOutputType | null;
    _avg: EmployeeIncentiveResultAvgAggregateOutputType | null;
    _sum: EmployeeIncentiveResultSumAggregateOutputType | null;
    _min: EmployeeIncentiveResultMinAggregateOutputType | null;
    _max: EmployeeIncentiveResultMaxAggregateOutputType | null;
};
export type GetEmployeeIncentiveResultGroupByPayload<T extends EmployeeIncentiveResultGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeIncentiveResultGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeIncentiveResultGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeIncentiveResultGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeIncentiveResultGroupByOutputType[P]>;
}>>;
export type EmployeeIncentiveResultWhereInput = {
    AND?: Prisma.EmployeeIncentiveResultWhereInput | Prisma.EmployeeIncentiveResultWhereInput[];
    OR?: Prisma.EmployeeIncentiveResultWhereInput[];
    NOT?: Prisma.EmployeeIncentiveResultWhereInput | Prisma.EmployeeIncentiveResultWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    appraisalCycleId?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    totalEmolumentKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    overallScorePct?: Prisma.DecimalFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFilter<"EmployeeIncentiveResult"> | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    classAllocationKobo?: Prisma.JsonFilter<"EmployeeIncentiveResult">;
    computedAt?: Prisma.DateTimeFilter<"EmployeeIncentiveResult"> | Date | string;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleScalarRelationFilter, Prisma.AppraisalCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type EmployeeIncentiveResultOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    totalEmolumentKobo?: Prisma.SortOrder;
    incentivePoolKobo?: Prisma.SortOrder;
    overallScorePct?: Prisma.SortOrder;
    bandPayoutPct?: Prisma.SortOrder;
    gateOutcome?: Prisma.SortOrder;
    preGateIncentiveKobo?: Prisma.SortOrder;
    finalIncentiveKobo?: Prisma.SortOrder;
    classAllocationKobo?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
    appraisalCycle?: Prisma.AppraisalCycleOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type EmployeeIncentiveResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    appraisalCycleId_employeeId?: Prisma.EmployeeIncentiveResultAppraisalCycleIdEmployeeIdCompoundUniqueInput;
    AND?: Prisma.EmployeeIncentiveResultWhereInput | Prisma.EmployeeIncentiveResultWhereInput[];
    OR?: Prisma.EmployeeIncentiveResultWhereInput[];
    NOT?: Prisma.EmployeeIncentiveResultWhereInput | Prisma.EmployeeIncentiveResultWhereInput[];
    appraisalCycleId?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    totalEmolumentKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    overallScorePct?: Prisma.DecimalFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFilter<"EmployeeIncentiveResult"> | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    classAllocationKobo?: Prisma.JsonFilter<"EmployeeIncentiveResult">;
    computedAt?: Prisma.DateTimeFilter<"EmployeeIncentiveResult"> | Date | string;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleScalarRelationFilter, Prisma.AppraisalCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "appraisalCycleId_employeeId">;
export type EmployeeIncentiveResultOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    totalEmolumentKobo?: Prisma.SortOrder;
    incentivePoolKobo?: Prisma.SortOrder;
    overallScorePct?: Prisma.SortOrder;
    bandPayoutPct?: Prisma.SortOrder;
    gateOutcome?: Prisma.SortOrder;
    preGateIncentiveKobo?: Prisma.SortOrder;
    finalIncentiveKobo?: Prisma.SortOrder;
    classAllocationKobo?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeIncentiveResultCountOrderByAggregateInput;
    _avg?: Prisma.EmployeeIncentiveResultAvgOrderByAggregateInput;
    _max?: Prisma.EmployeeIncentiveResultMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeIncentiveResultMinOrderByAggregateInput;
    _sum?: Prisma.EmployeeIncentiveResultSumOrderByAggregateInput;
};
export type EmployeeIncentiveResultScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeIncentiveResultScalarWhereWithAggregatesInput | Prisma.EmployeeIncentiveResultScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeIncentiveResultScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeIncentiveResultScalarWhereWithAggregatesInput | Prisma.EmployeeIncentiveResultScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmployeeIncentiveResult"> | string;
    appraisalCycleId?: Prisma.UuidWithAggregatesFilter<"EmployeeIncentiveResult"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"EmployeeIncentiveResult"> | string;
    totalEmolumentKobo?: Prisma.BigIntWithAggregatesFilter<"EmployeeIncentiveResult"> | bigint | number;
    incentivePoolKobo?: Prisma.BigIntWithAggregatesFilter<"EmployeeIncentiveResult"> | bigint | number;
    overallScorePct?: Prisma.DecimalWithAggregatesFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalWithAggregatesFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeWithAggregatesFilter<"EmployeeIncentiveResult"> | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntWithAggregatesFilter<"EmployeeIncentiveResult"> | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntWithAggregatesFilter<"EmployeeIncentiveResult"> | bigint | number;
    classAllocationKobo?: Prisma.JsonWithAggregatesFilter<"EmployeeIncentiveResult">;
    computedAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeeIncentiveResult"> | Date | string;
};
export type EmployeeIncentiveResultCreateInput = {
    id?: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
    appraisalCycle: Prisma.AppraisalCycleCreateNestedOneWithoutIncentiveResultsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutIncentiveResultsInput;
};
export type EmployeeIncentiveResultUncheckedCreateInput = {
    id?: string;
    appraisalCycleId: string;
    employeeId: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type EmployeeIncentiveResultUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneRequiredWithoutIncentiveResultsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutIncentiveResultsNestedInput;
};
export type EmployeeIncentiveResultUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentiveResultCreateManyInput = {
    id?: string;
    appraisalCycleId: string;
    employeeId: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type EmployeeIncentiveResultUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentiveResultUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentiveResultListRelationFilter = {
    every?: Prisma.EmployeeIncentiveResultWhereInput;
    some?: Prisma.EmployeeIncentiveResultWhereInput;
    none?: Prisma.EmployeeIncentiveResultWhereInput;
};
export type EmployeeIncentiveResultOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeIncentiveResultAppraisalCycleIdEmployeeIdCompoundUniqueInput = {
    appraisalCycleId: string;
    employeeId: string;
};
export type EmployeeIncentiveResultCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    totalEmolumentKobo?: Prisma.SortOrder;
    incentivePoolKobo?: Prisma.SortOrder;
    overallScorePct?: Prisma.SortOrder;
    bandPayoutPct?: Prisma.SortOrder;
    gateOutcome?: Prisma.SortOrder;
    preGateIncentiveKobo?: Prisma.SortOrder;
    finalIncentiveKobo?: Prisma.SortOrder;
    classAllocationKobo?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type EmployeeIncentiveResultAvgOrderByAggregateInput = {
    totalEmolumentKobo?: Prisma.SortOrder;
    incentivePoolKobo?: Prisma.SortOrder;
    overallScorePct?: Prisma.SortOrder;
    bandPayoutPct?: Prisma.SortOrder;
    preGateIncentiveKobo?: Prisma.SortOrder;
    finalIncentiveKobo?: Prisma.SortOrder;
};
export type EmployeeIncentiveResultMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    totalEmolumentKobo?: Prisma.SortOrder;
    incentivePoolKobo?: Prisma.SortOrder;
    overallScorePct?: Prisma.SortOrder;
    bandPayoutPct?: Prisma.SortOrder;
    gateOutcome?: Prisma.SortOrder;
    preGateIncentiveKobo?: Prisma.SortOrder;
    finalIncentiveKobo?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type EmployeeIncentiveResultMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    totalEmolumentKobo?: Prisma.SortOrder;
    incentivePoolKobo?: Prisma.SortOrder;
    overallScorePct?: Prisma.SortOrder;
    bandPayoutPct?: Prisma.SortOrder;
    gateOutcome?: Prisma.SortOrder;
    preGateIncentiveKobo?: Prisma.SortOrder;
    finalIncentiveKobo?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type EmployeeIncentiveResultSumOrderByAggregateInput = {
    totalEmolumentKobo?: Prisma.SortOrder;
    incentivePoolKobo?: Prisma.SortOrder;
    overallScorePct?: Prisma.SortOrder;
    bandPayoutPct?: Prisma.SortOrder;
    preGateIncentiveKobo?: Prisma.SortOrder;
    finalIncentiveKobo?: Prisma.SortOrder;
};
export type EmployeeIncentiveResultCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
};
export type EmployeeIncentiveResultUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
};
export type EmployeeIncentiveResultUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    update?: Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeIncentiveResultScalarWhereInput | Prisma.EmployeeIncentiveResultScalarWhereInput[];
};
export type EmployeeIncentiveResultUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    update?: Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeIncentiveResultScalarWhereInput | Prisma.EmployeeIncentiveResultScalarWhereInput[];
};
export type EmployeeIncentiveResultCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
};
export type EmployeeIncentiveResultUncheckedCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
};
export type EmployeeIncentiveResultUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    update?: Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.EmployeeIncentiveResultScalarWhereInput | Prisma.EmployeeIncentiveResultScalarWhereInput[];
};
export type EmployeeIncentiveResultUncheckedUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput> | Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput[] | Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.EmployeeIncentiveResultCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    disconnect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    delete?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    connect?: Prisma.EmployeeIncentiveResultWhereUniqueInput | Prisma.EmployeeIncentiveResultWhereUniqueInput[];
    update?: Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.EmployeeIncentiveResultUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.EmployeeIncentiveResultScalarWhereInput | Prisma.EmployeeIncentiveResultScalarWhereInput[];
};
export type EmployeeIncentiveResultCreateWithoutEmployeeInput = {
    id?: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
    appraisalCycle: Prisma.AppraisalCycleCreateNestedOneWithoutIncentiveResultsInput;
};
export type EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    appraisalCycleId: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type EmployeeIncentiveResultCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeIncentiveResultCreateManyEmployeeInputEnvelope = {
    data: Prisma.EmployeeIncentiveResultCreateManyEmployeeInput | Prisma.EmployeeIncentiveResultCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type EmployeeIncentiveResultUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeIncentiveResultUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateWithoutEmployeeInput, Prisma.EmployeeIncentiveResultUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeeIncentiveResultUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.EmployeeIncentiveResultScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateManyMutationInput, Prisma.EmployeeIncentiveResultUncheckedUpdateManyWithoutEmployeeInput>;
};
export type EmployeeIncentiveResultScalarWhereInput = {
    AND?: Prisma.EmployeeIncentiveResultScalarWhereInput | Prisma.EmployeeIncentiveResultScalarWhereInput[];
    OR?: Prisma.EmployeeIncentiveResultScalarWhereInput[];
    NOT?: Prisma.EmployeeIncentiveResultScalarWhereInput | Prisma.EmployeeIncentiveResultScalarWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    appraisalCycleId?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeIncentiveResult"> | string;
    totalEmolumentKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    overallScorePct?: Prisma.DecimalFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFilter<"EmployeeIncentiveResult"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFilter<"EmployeeIncentiveResult"> | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFilter<"EmployeeIncentiveResult"> | bigint | number;
    classAllocationKobo?: Prisma.JsonFilter<"EmployeeIncentiveResult">;
    computedAt?: Prisma.DateTimeFilter<"EmployeeIncentiveResult"> | Date | string;
};
export type EmployeeIncentiveResultCreateWithoutAppraisalCycleInput = {
    id?: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutIncentiveResultsInput;
};
export type EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type EmployeeIncentiveResultCreateOrConnectWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput>;
};
export type EmployeeIncentiveResultCreateManyAppraisalCycleInputEnvelope = {
    data: Prisma.EmployeeIncentiveResultCreateManyAppraisalCycleInput | Prisma.EmployeeIncentiveResultCreateManyAppraisalCycleInput[];
    skipDuplicates?: boolean;
};
export type EmployeeIncentiveResultUpsertWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedUpdateWithoutAppraisalCycleInput>;
    create: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedCreateWithoutAppraisalCycleInput>;
};
export type EmployeeIncentiveResultUpdateWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateWithoutAppraisalCycleInput, Prisma.EmployeeIncentiveResultUncheckedUpdateWithoutAppraisalCycleInput>;
};
export type EmployeeIncentiveResultUpdateManyWithWhereWithoutAppraisalCycleInput = {
    where: Prisma.EmployeeIncentiveResultScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateManyMutationInput, Prisma.EmployeeIncentiveResultUncheckedUpdateManyWithoutAppraisalCycleInput>;
};
export type EmployeeIncentiveResultCreateManyEmployeeInput = {
    id?: string;
    appraisalCycleId: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type EmployeeIncentiveResultUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneRequiredWithoutIncentiveResultsNestedInput;
};
export type EmployeeIncentiveResultUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentiveResultUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentiveResultCreateManyAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    totalEmolumentKobo: bigint | number;
    incentivePoolKobo: bigint | number;
    overallScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome: $Enums.GateOutcome;
    preGateIncentiveKobo: bigint | number;
    finalIncentiveKobo: bigint | number;
    classAllocationKobo: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type EmployeeIncentiveResultUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutIncentiveResultsNestedInput;
};
export type EmployeeIncentiveResultUncheckedUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentiveResultUncheckedUpdateManyWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEmolumentKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    incentivePoolKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    overallScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bandPayoutPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    gateOutcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    preGateIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    finalIncentiveKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    classAllocationKobo?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeIncentiveResultSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    totalEmolumentKobo?: boolean;
    incentivePoolKobo?: boolean;
    overallScorePct?: boolean;
    bandPayoutPct?: boolean;
    gateOutcome?: boolean;
    preGateIncentiveKobo?: boolean;
    finalIncentiveKobo?: boolean;
    classAllocationKobo?: boolean;
    computedAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeIncentiveResult"]>;
export type EmployeeIncentiveResultSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    totalEmolumentKobo?: boolean;
    incentivePoolKobo?: boolean;
    overallScorePct?: boolean;
    bandPayoutPct?: boolean;
    gateOutcome?: boolean;
    preGateIncentiveKobo?: boolean;
    finalIncentiveKobo?: boolean;
    classAllocationKobo?: boolean;
    computedAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeIncentiveResult"]>;
export type EmployeeIncentiveResultSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    totalEmolumentKobo?: boolean;
    incentivePoolKobo?: boolean;
    overallScorePct?: boolean;
    bandPayoutPct?: boolean;
    gateOutcome?: boolean;
    preGateIncentiveKobo?: boolean;
    finalIncentiveKobo?: boolean;
    classAllocationKobo?: boolean;
    computedAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeIncentiveResult"]>;
export type EmployeeIncentiveResultSelectScalar = {
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    totalEmolumentKobo?: boolean;
    incentivePoolKobo?: boolean;
    overallScorePct?: boolean;
    bandPayoutPct?: boolean;
    gateOutcome?: boolean;
    preGateIncentiveKobo?: boolean;
    finalIncentiveKobo?: boolean;
    classAllocationKobo?: boolean;
    computedAt?: boolean;
};
export type EmployeeIncentiveResultOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "appraisalCycleId" | "employeeId" | "totalEmolumentKobo" | "incentivePoolKobo" | "overallScorePct" | "bandPayoutPct" | "gateOutcome" | "preGateIncentiveKobo" | "finalIncentiveKobo" | "classAllocationKobo" | "computedAt", ExtArgs["result"]["employeeIncentiveResult"]>;
export type EmployeeIncentiveResultInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeeIncentiveResultIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeeIncentiveResultIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $EmployeeIncentiveResultPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeeIncentiveResult";
    objects: {
        appraisalCycle: Prisma.$AppraisalCyclePayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        appraisalCycleId: string;
        employeeId: string;
        totalEmolumentKobo: bigint;
        incentivePoolKobo: bigint;
        overallScorePct: runtime.Decimal;
        bandPayoutPct: runtime.Decimal;
        gateOutcome: $Enums.GateOutcome;
        preGateIncentiveKobo: bigint;
        finalIncentiveKobo: bigint;
        classAllocationKobo: runtime.JsonValue;
        computedAt: Date;
    }, ExtArgs["result"]["employeeIncentiveResult"]>;
    composites: {};
};
export type EmployeeIncentiveResultGetPayload<S extends boolean | null | undefined | EmployeeIncentiveResultDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload, S>;
export type EmployeeIncentiveResultCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeIncentiveResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeIncentiveResultCountAggregateInputType | true;
};
export interface EmployeeIncentiveResultDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeeIncentiveResult'];
        meta: {
            name: 'EmployeeIncentiveResult';
        };
    };
    findUnique<T extends EmployeeIncentiveResultFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeIncentiveResultFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeIncentiveResultFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentiveResultFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeIncentiveResultFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentiveResultFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeIncentiveResultFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentiveResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeIncentiveResultCreateArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeIncentiveResultCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentiveResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeIncentiveResultCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentiveResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeIncentiveResultDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeIncentiveResultUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeIncentiveResultDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeIncentiveResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeIncentiveResultUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeIncentiveResultUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeIncentiveResultUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeIncentiveResultUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeIncentiveResultClient<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeIncentiveResultCountArgs>(args?: Prisma.Subset<T, EmployeeIncentiveResultCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeIncentiveResultCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeIncentiveResultAggregateArgs>(args: Prisma.Subset<T, EmployeeIncentiveResultAggregateArgs>): Prisma.PrismaPromise<GetEmployeeIncentiveResultAggregateType<T>>;
    groupBy<T extends EmployeeIncentiveResultGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeIncentiveResultGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeIncentiveResultGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeIncentiveResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeIncentiveResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeIncentiveResultFieldRefs;
}
export interface Prisma__EmployeeIncentiveResultClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appraisalCycle<T extends Prisma.AppraisalCycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppraisalCycleDefaultArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeIncentiveResultFieldRefs {
    readonly id: Prisma.FieldRef<"EmployeeIncentiveResult", 'String'>;
    readonly appraisalCycleId: Prisma.FieldRef<"EmployeeIncentiveResult", 'String'>;
    readonly employeeId: Prisma.FieldRef<"EmployeeIncentiveResult", 'String'>;
    readonly totalEmolumentKobo: Prisma.FieldRef<"EmployeeIncentiveResult", 'BigInt'>;
    readonly incentivePoolKobo: Prisma.FieldRef<"EmployeeIncentiveResult", 'BigInt'>;
    readonly overallScorePct: Prisma.FieldRef<"EmployeeIncentiveResult", 'Decimal'>;
    readonly bandPayoutPct: Prisma.FieldRef<"EmployeeIncentiveResult", 'Decimal'>;
    readonly gateOutcome: Prisma.FieldRef<"EmployeeIncentiveResult", 'GateOutcome'>;
    readonly preGateIncentiveKobo: Prisma.FieldRef<"EmployeeIncentiveResult", 'BigInt'>;
    readonly finalIncentiveKobo: Prisma.FieldRef<"EmployeeIncentiveResult", 'BigInt'>;
    readonly classAllocationKobo: Prisma.FieldRef<"EmployeeIncentiveResult", 'Json'>;
    readonly computedAt: Prisma.FieldRef<"EmployeeIncentiveResult", 'DateTime'>;
}
export type EmployeeIncentiveResultFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
};
export type EmployeeIncentiveResultFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
};
export type EmployeeIncentiveResultFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    orderBy?: Prisma.EmployeeIncentiveResultOrderByWithRelationInput | Prisma.EmployeeIncentiveResultOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeIncentiveResultScalarFieldEnum | Prisma.EmployeeIncentiveResultScalarFieldEnum[];
};
export type EmployeeIncentiveResultFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    orderBy?: Prisma.EmployeeIncentiveResultOrderByWithRelationInput | Prisma.EmployeeIncentiveResultOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeIncentiveResultScalarFieldEnum | Prisma.EmployeeIncentiveResultScalarFieldEnum[];
};
export type EmployeeIncentiveResultFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    orderBy?: Prisma.EmployeeIncentiveResultOrderByWithRelationInput | Prisma.EmployeeIncentiveResultOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeIncentiveResultScalarFieldEnum | Prisma.EmployeeIncentiveResultScalarFieldEnum[];
};
export type EmployeeIncentiveResultCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateInput, Prisma.EmployeeIncentiveResultUncheckedCreateInput>;
};
export type EmployeeIncentiveResultCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeIncentiveResultCreateManyInput | Prisma.EmployeeIncentiveResultCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeIncentiveResultCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    data: Prisma.EmployeeIncentiveResultCreateManyInput | Prisma.EmployeeIncentiveResultCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeIncentiveResultIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeIncentiveResultUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateInput, Prisma.EmployeeIncentiveResultUncheckedUpdateInput>;
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
};
export type EmployeeIncentiveResultUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateManyMutationInput, Prisma.EmployeeIncentiveResultUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    limit?: number;
};
export type EmployeeIncentiveResultUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateManyMutationInput, Prisma.EmployeeIncentiveResultUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    limit?: number;
    include?: Prisma.EmployeeIncentiveResultIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeIncentiveResultUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeIncentiveResultCreateInput, Prisma.EmployeeIncentiveResultUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeIncentiveResultUpdateInput, Prisma.EmployeeIncentiveResultUncheckedUpdateInput>;
};
export type EmployeeIncentiveResultDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where: Prisma.EmployeeIncentiveResultWhereUniqueInput;
};
export type EmployeeIncentiveResultDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    limit?: number;
};
export type EmployeeIncentiveResultDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
};
