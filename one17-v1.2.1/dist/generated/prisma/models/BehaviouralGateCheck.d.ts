import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BehaviouralGateCheckModel = runtime.Types.Result.DefaultSelection<Prisma.$BehaviouralGateCheckPayload>;
export type AggregateBehaviouralGateCheck = {
    _count: BehaviouralGateCheckCountAggregateOutputType | null;
    _avg: BehaviouralGateCheckAvgAggregateOutputType | null;
    _sum: BehaviouralGateCheckSumAggregateOutputType | null;
    _min: BehaviouralGateCheckMinAggregateOutputType | null;
    _max: BehaviouralGateCheckMaxAggregateOutputType | null;
};
export type BehaviouralGateCheckAvgAggregateOutputType = {
    cappedPct: runtime.Decimal | null;
};
export type BehaviouralGateCheckSumAggregateOutputType = {
    cappedPct: runtime.Decimal | null;
};
export type BehaviouralGateCheckMinAggregateOutputType = {
    id: string | null;
    appraisalCycleId: string | null;
    employeeId: string | null;
    attendanceOk: boolean | null;
    ethicalConductOk: boolean | null;
    trendsViolation: boolean | null;
    disciplinaryNote: string | null;
    evidenceRef: string | null;
    outcome: $Enums.GateOutcome | null;
    cappedPct: runtime.Decimal | null;
    assessedByUserId: string | null;
    createdAt: Date | null;
};
export type BehaviouralGateCheckMaxAggregateOutputType = {
    id: string | null;
    appraisalCycleId: string | null;
    employeeId: string | null;
    attendanceOk: boolean | null;
    ethicalConductOk: boolean | null;
    trendsViolation: boolean | null;
    disciplinaryNote: string | null;
    evidenceRef: string | null;
    outcome: $Enums.GateOutcome | null;
    cappedPct: runtime.Decimal | null;
    assessedByUserId: string | null;
    createdAt: Date | null;
};
export type BehaviouralGateCheckCountAggregateOutputType = {
    id: number;
    appraisalCycleId: number;
    employeeId: number;
    attendanceOk: number;
    ethicalConductOk: number;
    trendsViolation: number;
    disciplinaryNote: number;
    evidenceRef: number;
    outcome: number;
    cappedPct: number;
    assessedByUserId: number;
    createdAt: number;
    _all: number;
};
export type BehaviouralGateCheckAvgAggregateInputType = {
    cappedPct?: true;
};
export type BehaviouralGateCheckSumAggregateInputType = {
    cappedPct?: true;
};
export type BehaviouralGateCheckMinAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    attendanceOk?: true;
    ethicalConductOk?: true;
    trendsViolation?: true;
    disciplinaryNote?: true;
    evidenceRef?: true;
    outcome?: true;
    cappedPct?: true;
    assessedByUserId?: true;
    createdAt?: true;
};
export type BehaviouralGateCheckMaxAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    attendanceOk?: true;
    ethicalConductOk?: true;
    trendsViolation?: true;
    disciplinaryNote?: true;
    evidenceRef?: true;
    outcome?: true;
    cappedPct?: true;
    assessedByUserId?: true;
    createdAt?: true;
};
export type BehaviouralGateCheckCountAggregateInputType = {
    id?: true;
    appraisalCycleId?: true;
    employeeId?: true;
    attendanceOk?: true;
    ethicalConductOk?: true;
    trendsViolation?: true;
    disciplinaryNote?: true;
    evidenceRef?: true;
    outcome?: true;
    cappedPct?: true;
    assessedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type BehaviouralGateCheckAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BehaviouralGateCheckWhereInput;
    orderBy?: Prisma.BehaviouralGateCheckOrderByWithRelationInput | Prisma.BehaviouralGateCheckOrderByWithRelationInput[];
    cursor?: Prisma.BehaviouralGateCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BehaviouralGateCheckCountAggregateInputType;
    _avg?: BehaviouralGateCheckAvgAggregateInputType;
    _sum?: BehaviouralGateCheckSumAggregateInputType;
    _min?: BehaviouralGateCheckMinAggregateInputType;
    _max?: BehaviouralGateCheckMaxAggregateInputType;
};
export type GetBehaviouralGateCheckAggregateType<T extends BehaviouralGateCheckAggregateArgs> = {
    [P in keyof T & keyof AggregateBehaviouralGateCheck]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBehaviouralGateCheck[P]> : Prisma.GetScalarType<T[P], AggregateBehaviouralGateCheck[P]>;
};
export type BehaviouralGateCheckGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BehaviouralGateCheckWhereInput;
    orderBy?: Prisma.BehaviouralGateCheckOrderByWithAggregationInput | Prisma.BehaviouralGateCheckOrderByWithAggregationInput[];
    by: Prisma.BehaviouralGateCheckScalarFieldEnum[] | Prisma.BehaviouralGateCheckScalarFieldEnum;
    having?: Prisma.BehaviouralGateCheckScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BehaviouralGateCheckCountAggregateInputType | true;
    _avg?: BehaviouralGateCheckAvgAggregateInputType;
    _sum?: BehaviouralGateCheckSumAggregateInputType;
    _min?: BehaviouralGateCheckMinAggregateInputType;
    _max?: BehaviouralGateCheckMaxAggregateInputType;
};
export type BehaviouralGateCheckGroupByOutputType = {
    id: string;
    appraisalCycleId: string;
    employeeId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation: boolean;
    disciplinaryNote: string | null;
    evidenceRef: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct: runtime.Decimal | null;
    assessedByUserId: string;
    createdAt: Date;
    _count: BehaviouralGateCheckCountAggregateOutputType | null;
    _avg: BehaviouralGateCheckAvgAggregateOutputType | null;
    _sum: BehaviouralGateCheckSumAggregateOutputType | null;
    _min: BehaviouralGateCheckMinAggregateOutputType | null;
    _max: BehaviouralGateCheckMaxAggregateOutputType | null;
};
export type GetBehaviouralGateCheckGroupByPayload<T extends BehaviouralGateCheckGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BehaviouralGateCheckGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BehaviouralGateCheckGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BehaviouralGateCheckGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BehaviouralGateCheckGroupByOutputType[P]>;
}>>;
export type BehaviouralGateCheckWhereInput = {
    AND?: Prisma.BehaviouralGateCheckWhereInput | Prisma.BehaviouralGateCheckWhereInput[];
    OR?: Prisma.BehaviouralGateCheckWhereInput[];
    NOT?: Prisma.BehaviouralGateCheckWhereInput | Prisma.BehaviouralGateCheckWhereInput[];
    id?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    appraisalCycleId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    employeeId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    attendanceOk?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    ethicalConductOk?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    trendsViolation?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    disciplinaryNote?: Prisma.StringNullableFilter<"BehaviouralGateCheck"> | string | null;
    evidenceRef?: Prisma.StringNullableFilter<"BehaviouralGateCheck"> | string | null;
    outcome?: Prisma.EnumGateOutcomeFilter<"BehaviouralGateCheck"> | $Enums.GateOutcome;
    cappedPct?: Prisma.DecimalNullableFilter<"BehaviouralGateCheck"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    createdAt?: Prisma.DateTimeFilter<"BehaviouralGateCheck"> | Date | string;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleScalarRelationFilter, Prisma.AppraisalCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type BehaviouralGateCheckOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceOk?: Prisma.SortOrder;
    ethicalConductOk?: Prisma.SortOrder;
    trendsViolation?: Prisma.SortOrder;
    disciplinaryNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    appraisalCycle?: Prisma.AppraisalCycleOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type BehaviouralGateCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    appraisalCycleId_employeeId?: Prisma.BehaviouralGateCheckAppraisalCycleIdEmployeeIdCompoundUniqueInput;
    AND?: Prisma.BehaviouralGateCheckWhereInput | Prisma.BehaviouralGateCheckWhereInput[];
    OR?: Prisma.BehaviouralGateCheckWhereInput[];
    NOT?: Prisma.BehaviouralGateCheckWhereInput | Prisma.BehaviouralGateCheckWhereInput[];
    appraisalCycleId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    employeeId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    attendanceOk?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    ethicalConductOk?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    trendsViolation?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    disciplinaryNote?: Prisma.StringNullableFilter<"BehaviouralGateCheck"> | string | null;
    evidenceRef?: Prisma.StringNullableFilter<"BehaviouralGateCheck"> | string | null;
    outcome?: Prisma.EnumGateOutcomeFilter<"BehaviouralGateCheck"> | $Enums.GateOutcome;
    cappedPct?: Prisma.DecimalNullableFilter<"BehaviouralGateCheck"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    createdAt?: Prisma.DateTimeFilter<"BehaviouralGateCheck"> | Date | string;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleScalarRelationFilter, Prisma.AppraisalCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "appraisalCycleId_employeeId">;
export type BehaviouralGateCheckOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceOk?: Prisma.SortOrder;
    ethicalConductOk?: Prisma.SortOrder;
    trendsViolation?: Prisma.SortOrder;
    disciplinaryNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BehaviouralGateCheckCountOrderByAggregateInput;
    _avg?: Prisma.BehaviouralGateCheckAvgOrderByAggregateInput;
    _max?: Prisma.BehaviouralGateCheckMaxOrderByAggregateInput;
    _min?: Prisma.BehaviouralGateCheckMinOrderByAggregateInput;
    _sum?: Prisma.BehaviouralGateCheckSumOrderByAggregateInput;
};
export type BehaviouralGateCheckScalarWhereWithAggregatesInput = {
    AND?: Prisma.BehaviouralGateCheckScalarWhereWithAggregatesInput | Prisma.BehaviouralGateCheckScalarWhereWithAggregatesInput[];
    OR?: Prisma.BehaviouralGateCheckScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BehaviouralGateCheckScalarWhereWithAggregatesInput | Prisma.BehaviouralGateCheckScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BehaviouralGateCheck"> | string;
    appraisalCycleId?: Prisma.UuidWithAggregatesFilter<"BehaviouralGateCheck"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"BehaviouralGateCheck"> | string;
    attendanceOk?: Prisma.BoolWithAggregatesFilter<"BehaviouralGateCheck"> | boolean;
    ethicalConductOk?: Prisma.BoolWithAggregatesFilter<"BehaviouralGateCheck"> | boolean;
    trendsViolation?: Prisma.BoolWithAggregatesFilter<"BehaviouralGateCheck"> | boolean;
    disciplinaryNote?: Prisma.StringNullableWithAggregatesFilter<"BehaviouralGateCheck"> | string | null;
    evidenceRef?: Prisma.StringNullableWithAggregatesFilter<"BehaviouralGateCheck"> | string | null;
    outcome?: Prisma.EnumGateOutcomeWithAggregatesFilter<"BehaviouralGateCheck"> | $Enums.GateOutcome;
    cappedPct?: Prisma.DecimalNullableWithAggregatesFilter<"BehaviouralGateCheck"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.UuidWithAggregatesFilter<"BehaviouralGateCheck"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BehaviouralGateCheck"> | Date | string;
};
export type BehaviouralGateCheckCreateInput = {
    id?: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
    appraisalCycle: Prisma.AppraisalCycleCreateNestedOneWithoutGateChecksInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutGateChecksInput;
};
export type BehaviouralGateCheckUncheckedCreateInput = {
    id?: string;
    appraisalCycleId: string;
    employeeId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
};
export type BehaviouralGateCheckUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneRequiredWithoutGateChecksNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutGateChecksNestedInput;
};
export type BehaviouralGateCheckUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BehaviouralGateCheckCreateManyInput = {
    id?: string;
    appraisalCycleId: string;
    employeeId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
};
export type BehaviouralGateCheckUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BehaviouralGateCheckUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BehaviouralGateCheckListRelationFilter = {
    every?: Prisma.BehaviouralGateCheckWhereInput;
    some?: Prisma.BehaviouralGateCheckWhereInput;
    none?: Prisma.BehaviouralGateCheckWhereInput;
};
export type BehaviouralGateCheckOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BehaviouralGateCheckAppraisalCycleIdEmployeeIdCompoundUniqueInput = {
    appraisalCycleId: string;
    employeeId: string;
};
export type BehaviouralGateCheckCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceOk?: Prisma.SortOrder;
    ethicalConductOk?: Prisma.SortOrder;
    trendsViolation?: Prisma.SortOrder;
    disciplinaryNote?: Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BehaviouralGateCheckAvgOrderByAggregateInput = {
    cappedPct?: Prisma.SortOrder;
};
export type BehaviouralGateCheckMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceOk?: Prisma.SortOrder;
    ethicalConductOk?: Prisma.SortOrder;
    trendsViolation?: Prisma.SortOrder;
    disciplinaryNote?: Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BehaviouralGateCheckMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    attendanceOk?: Prisma.SortOrder;
    ethicalConductOk?: Prisma.SortOrder;
    trendsViolation?: Prisma.SortOrder;
    disciplinaryNote?: Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BehaviouralGateCheckSumOrderByAggregateInput = {
    cappedPct?: Prisma.SortOrder;
};
export type BehaviouralGateCheckCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput> | Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyEmployeeInputEnvelope;
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
};
export type BehaviouralGateCheckUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput> | Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyEmployeeInputEnvelope;
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
};
export type BehaviouralGateCheckUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput> | Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyEmployeeInputEnvelope;
    set?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    disconnect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    delete?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    update?: Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutEmployeeInput | Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.BehaviouralGateCheckScalarWhereInput | Prisma.BehaviouralGateCheckScalarWhereInput[];
};
export type BehaviouralGateCheckUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput> | Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyEmployeeInputEnvelope;
    set?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    disconnect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    delete?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    update?: Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutEmployeeInput | Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.BehaviouralGateCheckScalarWhereInput | Prisma.BehaviouralGateCheckScalarWhereInput[];
};
export type BehaviouralGateCheckCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput> | Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
};
export type BehaviouralGateCheckUncheckedCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput> | Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
};
export type BehaviouralGateCheckUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput> | Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    disconnect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    delete?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    update?: Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.BehaviouralGateCheckScalarWhereInput | Prisma.BehaviouralGateCheckScalarWhereInput[];
};
export type BehaviouralGateCheckUncheckedUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput> | Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput[] | Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.BehaviouralGateCheckCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    disconnect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    delete?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    connect?: Prisma.BehaviouralGateCheckWhereUniqueInput | Prisma.BehaviouralGateCheckWhereUniqueInput[];
    update?: Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.BehaviouralGateCheckUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.BehaviouralGateCheckScalarWhereInput | Prisma.BehaviouralGateCheckScalarWhereInput[];
};
export type BehaviouralGateCheckCreateWithoutEmployeeInput = {
    id?: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
    appraisalCycle: Prisma.AppraisalCycleCreateNestedOneWithoutGateChecksInput;
};
export type BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    appraisalCycleId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
};
export type BehaviouralGateCheckCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput>;
};
export type BehaviouralGateCheckCreateManyEmployeeInputEnvelope = {
    data: Prisma.BehaviouralGateCheckCreateManyEmployeeInput | Prisma.BehaviouralGateCheckCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type BehaviouralGateCheckUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
    update: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutEmployeeInput>;
};
export type BehaviouralGateCheckUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
    data: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateWithoutEmployeeInput, Prisma.BehaviouralGateCheckUncheckedUpdateWithoutEmployeeInput>;
};
export type BehaviouralGateCheckUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.BehaviouralGateCheckScalarWhereInput;
    data: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateManyMutationInput, Prisma.BehaviouralGateCheckUncheckedUpdateManyWithoutEmployeeInput>;
};
export type BehaviouralGateCheckScalarWhereInput = {
    AND?: Prisma.BehaviouralGateCheckScalarWhereInput | Prisma.BehaviouralGateCheckScalarWhereInput[];
    OR?: Prisma.BehaviouralGateCheckScalarWhereInput[];
    NOT?: Prisma.BehaviouralGateCheckScalarWhereInput | Prisma.BehaviouralGateCheckScalarWhereInput[];
    id?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    appraisalCycleId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    employeeId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    attendanceOk?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    ethicalConductOk?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    trendsViolation?: Prisma.BoolFilter<"BehaviouralGateCheck"> | boolean;
    disciplinaryNote?: Prisma.StringNullableFilter<"BehaviouralGateCheck"> | string | null;
    evidenceRef?: Prisma.StringNullableFilter<"BehaviouralGateCheck"> | string | null;
    outcome?: Prisma.EnumGateOutcomeFilter<"BehaviouralGateCheck"> | $Enums.GateOutcome;
    cappedPct?: Prisma.DecimalNullableFilter<"BehaviouralGateCheck"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.UuidFilter<"BehaviouralGateCheck"> | string;
    createdAt?: Prisma.DateTimeFilter<"BehaviouralGateCheck"> | Date | string;
};
export type BehaviouralGateCheckCreateWithoutAppraisalCycleInput = {
    id?: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutGateChecksInput;
};
export type BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
};
export type BehaviouralGateCheckCreateOrConnectWithoutAppraisalCycleInput = {
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput>;
};
export type BehaviouralGateCheckCreateManyAppraisalCycleInputEnvelope = {
    data: Prisma.BehaviouralGateCheckCreateManyAppraisalCycleInput | Prisma.BehaviouralGateCheckCreateManyAppraisalCycleInput[];
    skipDuplicates?: boolean;
};
export type BehaviouralGateCheckUpsertWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
    update: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedUpdateWithoutAppraisalCycleInput>;
    create: Prisma.XOR<Prisma.BehaviouralGateCheckCreateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedCreateWithoutAppraisalCycleInput>;
};
export type BehaviouralGateCheckUpdateWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
    data: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateWithoutAppraisalCycleInput, Prisma.BehaviouralGateCheckUncheckedUpdateWithoutAppraisalCycleInput>;
};
export type BehaviouralGateCheckUpdateManyWithWhereWithoutAppraisalCycleInput = {
    where: Prisma.BehaviouralGateCheckScalarWhereInput;
    data: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateManyMutationInput, Prisma.BehaviouralGateCheckUncheckedUpdateManyWithoutAppraisalCycleInput>;
};
export type BehaviouralGateCheckCreateManyEmployeeInput = {
    id?: string;
    appraisalCycleId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
};
export type BehaviouralGateCheckUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneRequiredWithoutGateChecksNestedInput;
};
export type BehaviouralGateCheckUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BehaviouralGateCheckUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appraisalCycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BehaviouralGateCheckCreateManyAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    attendanceOk: boolean;
    ethicalConductOk: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: string | null;
    evidenceRef?: string | null;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId: string;
    createdAt?: Date | string;
};
export type BehaviouralGateCheckUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutGateChecksNestedInput;
};
export type BehaviouralGateCheckUncheckedUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BehaviouralGateCheckUncheckedUpdateManyWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ethicalConductOk?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    trendsViolation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    disciplinaryNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BehaviouralGateCheckSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    attendanceOk?: boolean;
    ethicalConductOk?: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: boolean;
    evidenceRef?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    assessedByUserId?: boolean;
    createdAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["behaviouralGateCheck"]>;
export type BehaviouralGateCheckSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    attendanceOk?: boolean;
    ethicalConductOk?: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: boolean;
    evidenceRef?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    assessedByUserId?: boolean;
    createdAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["behaviouralGateCheck"]>;
export type BehaviouralGateCheckSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    attendanceOk?: boolean;
    ethicalConductOk?: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: boolean;
    evidenceRef?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    assessedByUserId?: boolean;
    createdAt?: boolean;
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["behaviouralGateCheck"]>;
export type BehaviouralGateCheckSelectScalar = {
    id?: boolean;
    appraisalCycleId?: boolean;
    employeeId?: boolean;
    attendanceOk?: boolean;
    ethicalConductOk?: boolean;
    trendsViolation?: boolean;
    disciplinaryNote?: boolean;
    evidenceRef?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    assessedByUserId?: boolean;
    createdAt?: boolean;
};
export type BehaviouralGateCheckOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "appraisalCycleId" | "employeeId" | "attendanceOk" | "ethicalConductOk" | "trendsViolation" | "disciplinaryNote" | "evidenceRef" | "outcome" | "cappedPct" | "assessedByUserId" | "createdAt", ExtArgs["result"]["behaviouralGateCheck"]>;
export type BehaviouralGateCheckInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type BehaviouralGateCheckIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type BehaviouralGateCheckIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appraisalCycle?: boolean | Prisma.AppraisalCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $BehaviouralGateCheckPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BehaviouralGateCheck";
    objects: {
        appraisalCycle: Prisma.$AppraisalCyclePayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        appraisalCycleId: string;
        employeeId: string;
        attendanceOk: boolean;
        ethicalConductOk: boolean;
        trendsViolation: boolean;
        disciplinaryNote: string | null;
        evidenceRef: string | null;
        outcome: $Enums.GateOutcome;
        cappedPct: runtime.Decimal | null;
        assessedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["behaviouralGateCheck"]>;
    composites: {};
};
export type BehaviouralGateCheckGetPayload<S extends boolean | null | undefined | BehaviouralGateCheckDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload, S>;
export type BehaviouralGateCheckCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BehaviouralGateCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BehaviouralGateCheckCountAggregateInputType | true;
};
export interface BehaviouralGateCheckDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BehaviouralGateCheck'];
        meta: {
            name: 'BehaviouralGateCheck';
        };
    };
    findUnique<T extends BehaviouralGateCheckFindUniqueArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BehaviouralGateCheckFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BehaviouralGateCheckFindFirstArgs>(args?: Prisma.SelectSubset<T, BehaviouralGateCheckFindFirstArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BehaviouralGateCheckFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BehaviouralGateCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BehaviouralGateCheckFindManyArgs>(args?: Prisma.SelectSubset<T, BehaviouralGateCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BehaviouralGateCheckCreateArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckCreateArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BehaviouralGateCheckCreateManyArgs>(args?: Prisma.SelectSubset<T, BehaviouralGateCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BehaviouralGateCheckCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BehaviouralGateCheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BehaviouralGateCheckDeleteArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckDeleteArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BehaviouralGateCheckUpdateArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckUpdateArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BehaviouralGateCheckDeleteManyArgs>(args?: Prisma.SelectSubset<T, BehaviouralGateCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BehaviouralGateCheckUpdateManyArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BehaviouralGateCheckUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BehaviouralGateCheckUpsertArgs>(args: Prisma.SelectSubset<T, BehaviouralGateCheckUpsertArgs<ExtArgs>>): Prisma.Prisma__BehaviouralGateCheckClient<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BehaviouralGateCheckCountArgs>(args?: Prisma.Subset<T, BehaviouralGateCheckCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BehaviouralGateCheckCountAggregateOutputType> : number>;
    aggregate<T extends BehaviouralGateCheckAggregateArgs>(args: Prisma.Subset<T, BehaviouralGateCheckAggregateArgs>): Prisma.PrismaPromise<GetBehaviouralGateCheckAggregateType<T>>;
    groupBy<T extends BehaviouralGateCheckGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BehaviouralGateCheckGroupByArgs['orderBy'];
    } : {
        orderBy?: BehaviouralGateCheckGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BehaviouralGateCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBehaviouralGateCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BehaviouralGateCheckFieldRefs;
}
export interface Prisma__BehaviouralGateCheckClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appraisalCycle<T extends Prisma.AppraisalCycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppraisalCycleDefaultArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BehaviouralGateCheckFieldRefs {
    readonly id: Prisma.FieldRef<"BehaviouralGateCheck", 'String'>;
    readonly appraisalCycleId: Prisma.FieldRef<"BehaviouralGateCheck", 'String'>;
    readonly employeeId: Prisma.FieldRef<"BehaviouralGateCheck", 'String'>;
    readonly attendanceOk: Prisma.FieldRef<"BehaviouralGateCheck", 'Boolean'>;
    readonly ethicalConductOk: Prisma.FieldRef<"BehaviouralGateCheck", 'Boolean'>;
    readonly trendsViolation: Prisma.FieldRef<"BehaviouralGateCheck", 'Boolean'>;
    readonly disciplinaryNote: Prisma.FieldRef<"BehaviouralGateCheck", 'String'>;
    readonly evidenceRef: Prisma.FieldRef<"BehaviouralGateCheck", 'String'>;
    readonly outcome: Prisma.FieldRef<"BehaviouralGateCheck", 'GateOutcome'>;
    readonly cappedPct: Prisma.FieldRef<"BehaviouralGateCheck", 'Decimal'>;
    readonly assessedByUserId: Prisma.FieldRef<"BehaviouralGateCheck", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BehaviouralGateCheck", 'DateTime'>;
}
export type BehaviouralGateCheckFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
};
export type BehaviouralGateCheckFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
};
export type BehaviouralGateCheckFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where?: Prisma.BehaviouralGateCheckWhereInput;
    orderBy?: Prisma.BehaviouralGateCheckOrderByWithRelationInput | Prisma.BehaviouralGateCheckOrderByWithRelationInput[];
    cursor?: Prisma.BehaviouralGateCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BehaviouralGateCheckScalarFieldEnum | Prisma.BehaviouralGateCheckScalarFieldEnum[];
};
export type BehaviouralGateCheckFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where?: Prisma.BehaviouralGateCheckWhereInput;
    orderBy?: Prisma.BehaviouralGateCheckOrderByWithRelationInput | Prisma.BehaviouralGateCheckOrderByWithRelationInput[];
    cursor?: Prisma.BehaviouralGateCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BehaviouralGateCheckScalarFieldEnum | Prisma.BehaviouralGateCheckScalarFieldEnum[];
};
export type BehaviouralGateCheckFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where?: Prisma.BehaviouralGateCheckWhereInput;
    orderBy?: Prisma.BehaviouralGateCheckOrderByWithRelationInput | Prisma.BehaviouralGateCheckOrderByWithRelationInput[];
    cursor?: Prisma.BehaviouralGateCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BehaviouralGateCheckScalarFieldEnum | Prisma.BehaviouralGateCheckScalarFieldEnum[];
};
export type BehaviouralGateCheckCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BehaviouralGateCheckCreateInput, Prisma.BehaviouralGateCheckUncheckedCreateInput>;
};
export type BehaviouralGateCheckCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BehaviouralGateCheckCreateManyInput | Prisma.BehaviouralGateCheckCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BehaviouralGateCheckCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    data: Prisma.BehaviouralGateCheckCreateManyInput | Prisma.BehaviouralGateCheckCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BehaviouralGateCheckIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BehaviouralGateCheckUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateInput, Prisma.BehaviouralGateCheckUncheckedUpdateInput>;
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
};
export type BehaviouralGateCheckUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateManyMutationInput, Prisma.BehaviouralGateCheckUncheckedUpdateManyInput>;
    where?: Prisma.BehaviouralGateCheckWhereInput;
    limit?: number;
};
export type BehaviouralGateCheckUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateManyMutationInput, Prisma.BehaviouralGateCheckUncheckedUpdateManyInput>;
    where?: Prisma.BehaviouralGateCheckWhereInput;
    limit?: number;
    include?: Prisma.BehaviouralGateCheckIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BehaviouralGateCheckUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.BehaviouralGateCheckCreateInput, Prisma.BehaviouralGateCheckUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BehaviouralGateCheckUpdateInput, Prisma.BehaviouralGateCheckUncheckedUpdateInput>;
};
export type BehaviouralGateCheckDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where: Prisma.BehaviouralGateCheckWhereUniqueInput;
};
export type BehaviouralGateCheckDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BehaviouralGateCheckWhereInput;
    limit?: number;
};
export type BehaviouralGateCheckDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
};
