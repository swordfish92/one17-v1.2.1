import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PmsGateSeverityConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$PmsGateSeverityConfigPayload>;
export type AggregatePmsGateSeverityConfig = {
    _count: PmsGateSeverityConfigCountAggregateOutputType | null;
    _avg: PmsGateSeverityConfigAvgAggregateOutputType | null;
    _sum: PmsGateSeverityConfigSumAggregateOutputType | null;
    _min: PmsGateSeverityConfigMinAggregateOutputType | null;
    _max: PmsGateSeverityConfigMaxAggregateOutputType | null;
};
export type PmsGateSeverityConfigAvgAggregateOutputType = {
    cappedPct: runtime.Decimal | null;
};
export type PmsGateSeverityConfigSumAggregateOutputType = {
    cappedPct: runtime.Decimal | null;
};
export type PmsGateSeverityConfigMinAggregateOutputType = {
    id: string | null;
    severity: string | null;
    outcome: $Enums.GateOutcome | null;
    cappedPct: runtime.Decimal | null;
    createdAt: Date | null;
};
export type PmsGateSeverityConfigMaxAggregateOutputType = {
    id: string | null;
    severity: string | null;
    outcome: $Enums.GateOutcome | null;
    cappedPct: runtime.Decimal | null;
    createdAt: Date | null;
};
export type PmsGateSeverityConfigCountAggregateOutputType = {
    id: number;
    severity: number;
    outcome: number;
    cappedPct: number;
    createdAt: number;
    _all: number;
};
export type PmsGateSeverityConfigAvgAggregateInputType = {
    cappedPct?: true;
};
export type PmsGateSeverityConfigSumAggregateInputType = {
    cappedPct?: true;
};
export type PmsGateSeverityConfigMinAggregateInputType = {
    id?: true;
    severity?: true;
    outcome?: true;
    cappedPct?: true;
    createdAt?: true;
};
export type PmsGateSeverityConfigMaxAggregateInputType = {
    id?: true;
    severity?: true;
    outcome?: true;
    cappedPct?: true;
    createdAt?: true;
};
export type PmsGateSeverityConfigCountAggregateInputType = {
    id?: true;
    severity?: true;
    outcome?: true;
    cappedPct?: true;
    createdAt?: true;
    _all?: true;
};
export type PmsGateSeverityConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    orderBy?: Prisma.PmsGateSeverityConfigOrderByWithRelationInput | Prisma.PmsGateSeverityConfigOrderByWithRelationInput[];
    cursor?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PmsGateSeverityConfigCountAggregateInputType;
    _avg?: PmsGateSeverityConfigAvgAggregateInputType;
    _sum?: PmsGateSeverityConfigSumAggregateInputType;
    _min?: PmsGateSeverityConfigMinAggregateInputType;
    _max?: PmsGateSeverityConfigMaxAggregateInputType;
};
export type GetPmsGateSeverityConfigAggregateType<T extends PmsGateSeverityConfigAggregateArgs> = {
    [P in keyof T & keyof AggregatePmsGateSeverityConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePmsGateSeverityConfig[P]> : Prisma.GetScalarType<T[P], AggregatePmsGateSeverityConfig[P]>;
};
export type PmsGateSeverityConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    orderBy?: Prisma.PmsGateSeverityConfigOrderByWithAggregationInput | Prisma.PmsGateSeverityConfigOrderByWithAggregationInput[];
    by: Prisma.PmsGateSeverityConfigScalarFieldEnum[] | Prisma.PmsGateSeverityConfigScalarFieldEnum;
    having?: Prisma.PmsGateSeverityConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PmsGateSeverityConfigCountAggregateInputType | true;
    _avg?: PmsGateSeverityConfigAvgAggregateInputType;
    _sum?: PmsGateSeverityConfigSumAggregateInputType;
    _min?: PmsGateSeverityConfigMinAggregateInputType;
    _max?: PmsGateSeverityConfigMaxAggregateInputType;
};
export type PmsGateSeverityConfigGroupByOutputType = {
    id: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct: runtime.Decimal | null;
    createdAt: Date;
    _count: PmsGateSeverityConfigCountAggregateOutputType | null;
    _avg: PmsGateSeverityConfigAvgAggregateOutputType | null;
    _sum: PmsGateSeverityConfigSumAggregateOutputType | null;
    _min: PmsGateSeverityConfigMinAggregateOutputType | null;
    _max: PmsGateSeverityConfigMaxAggregateOutputType | null;
};
export type GetPmsGateSeverityConfigGroupByPayload<T extends PmsGateSeverityConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PmsGateSeverityConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PmsGateSeverityConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PmsGateSeverityConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PmsGateSeverityConfigGroupByOutputType[P]>;
}>>;
export type PmsGateSeverityConfigWhereInput = {
    AND?: Prisma.PmsGateSeverityConfigWhereInput | Prisma.PmsGateSeverityConfigWhereInput[];
    OR?: Prisma.PmsGateSeverityConfigWhereInput[];
    NOT?: Prisma.PmsGateSeverityConfigWhereInput | Prisma.PmsGateSeverityConfigWhereInput[];
    id?: Prisma.UuidFilter<"PmsGateSeverityConfig"> | string;
    severity?: Prisma.StringFilter<"PmsGateSeverityConfig"> | string;
    outcome?: Prisma.EnumGateOutcomeFilter<"PmsGateSeverityConfig"> | $Enums.GateOutcome;
    cappedPct?: Prisma.DecimalNullableFilter<"PmsGateSeverityConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"PmsGateSeverityConfig"> | Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyListRelationFilter;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyListRelationFilter;
};
export type PmsGateSeverityConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyOrderByRelationAggregateInput;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyOrderByRelationAggregateInput;
};
export type PmsGateSeverityConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    severity?: string;
    AND?: Prisma.PmsGateSeverityConfigWhereInput | Prisma.PmsGateSeverityConfigWhereInput[];
    OR?: Prisma.PmsGateSeverityConfigWhereInput[];
    NOT?: Prisma.PmsGateSeverityConfigWhereInput | Prisma.PmsGateSeverityConfigWhereInput[];
    outcome?: Prisma.EnumGateOutcomeFilter<"PmsGateSeverityConfig"> | $Enums.GateOutcome;
    cappedPct?: Prisma.DecimalNullableFilter<"PmsGateSeverityConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"PmsGateSeverityConfig"> | Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyListRelationFilter;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyListRelationFilter;
}, "id" | "severity">;
export type PmsGateSeverityConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PmsGateSeverityConfigCountOrderByAggregateInput;
    _avg?: Prisma.PmsGateSeverityConfigAvgOrderByAggregateInput;
    _max?: Prisma.PmsGateSeverityConfigMaxOrderByAggregateInput;
    _min?: Prisma.PmsGateSeverityConfigMinOrderByAggregateInput;
    _sum?: Prisma.PmsGateSeverityConfigSumOrderByAggregateInput;
};
export type PmsGateSeverityConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.PmsGateSeverityConfigScalarWhereWithAggregatesInput | Prisma.PmsGateSeverityConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.PmsGateSeverityConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PmsGateSeverityConfigScalarWhereWithAggregatesInput | Prisma.PmsGateSeverityConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PmsGateSeverityConfig"> | string;
    severity?: Prisma.StringWithAggregatesFilter<"PmsGateSeverityConfig"> | string;
    outcome?: Prisma.EnumGateOutcomeWithAggregatesFilter<"PmsGateSeverityConfig"> | $Enums.GateOutcome;
    cappedPct?: Prisma.DecimalNullableWithAggregatesFilter<"PmsGateSeverityConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PmsGateSeverityConfig"> | Date | string;
};
export type PmsGateSeverityConfigCreateInput = {
    id?: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyCreateNestedManyWithoutSeverityConfigInput;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyCreateNestedManyWithoutSeverityConfigInput;
};
export type PmsGateSeverityConfigUncheckedCreateInput = {
    id?: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyUncheckedCreateNestedManyWithoutSeverityConfigInput;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyUncheckedCreateNestedManyWithoutSeverityConfigInput;
};
export type PmsGateSeverityConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyUpdateManyWithoutSeverityConfigNestedInput;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyUpdateManyWithoutSeverityConfigNestedInput;
};
export type PmsGateSeverityConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyUncheckedUpdateManyWithoutSeverityConfigNestedInput;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyUncheckedUpdateManyWithoutSeverityConfigNestedInput;
};
export type PmsGateSeverityConfigCreateManyInput = {
    id?: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type PmsGateSeverityConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PmsGateSeverityConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PmsGateSeverityConfigScalarRelationFilter = {
    is?: Prisma.PmsGateSeverityConfigWhereInput;
    isNot?: Prisma.PmsGateSeverityConfigWhereInput;
};
export type PmsGateSeverityConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PmsGateSeverityConfigAvgOrderByAggregateInput = {
    cappedPct?: Prisma.SortOrder;
};
export type PmsGateSeverityConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PmsGateSeverityConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    cappedPct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PmsGateSeverityConfigSumOrderByAggregateInput = {
    cappedPct?: Prisma.SortOrder;
};
export type PmsGateSeverityConfigCreateNestedOneWithoutAttendanceLatenessGatePoliciesInput = {
    create?: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutAttendanceLatenessGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutAttendanceLatenessGatePoliciesInput>;
    connectOrCreate?: Prisma.PmsGateSeverityConfigCreateOrConnectWithoutAttendanceLatenessGatePoliciesInput;
    connect?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
};
export type PmsGateSeverityConfigUpdateOneRequiredWithoutAttendanceLatenessGatePoliciesNestedInput = {
    create?: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutAttendanceLatenessGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutAttendanceLatenessGatePoliciesInput>;
    connectOrCreate?: Prisma.PmsGateSeverityConfigCreateOrConnectWithoutAttendanceLatenessGatePoliciesInput;
    upsert?: Prisma.PmsGateSeverityConfigUpsertWithoutAttendanceLatenessGatePoliciesInput;
    connect?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateToOneWithWhereWithoutAttendanceLatenessGatePoliciesInput, Prisma.PmsGateSeverityConfigUpdateWithoutAttendanceLatenessGatePoliciesInput>, Prisma.PmsGateSeverityConfigUncheckedUpdateWithoutAttendanceLatenessGatePoliciesInput>;
};
export type PmsGateSeverityConfigCreateNestedOneWithoutTaskDefaultGatePoliciesInput = {
    create?: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutTaskDefaultGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutTaskDefaultGatePoliciesInput>;
    connectOrCreate?: Prisma.PmsGateSeverityConfigCreateOrConnectWithoutTaskDefaultGatePoliciesInput;
    connect?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
};
export type PmsGateSeverityConfigUpdateOneRequiredWithoutTaskDefaultGatePoliciesNestedInput = {
    create?: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutTaskDefaultGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutTaskDefaultGatePoliciesInput>;
    connectOrCreate?: Prisma.PmsGateSeverityConfigCreateOrConnectWithoutTaskDefaultGatePoliciesInput;
    upsert?: Prisma.PmsGateSeverityConfigUpsertWithoutTaskDefaultGatePoliciesInput;
    connect?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateToOneWithWhereWithoutTaskDefaultGatePoliciesInput, Prisma.PmsGateSeverityConfigUpdateWithoutTaskDefaultGatePoliciesInput>, Prisma.PmsGateSeverityConfigUncheckedUpdateWithoutTaskDefaultGatePoliciesInput>;
};
export type EnumGateOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.GateOutcome;
};
export type PmsGateSeverityConfigCreateWithoutAttendanceLatenessGatePoliciesInput = {
    id?: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyCreateNestedManyWithoutSeverityConfigInput;
};
export type PmsGateSeverityConfigUncheckedCreateWithoutAttendanceLatenessGatePoliciesInput = {
    id?: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyUncheckedCreateNestedManyWithoutSeverityConfigInput;
};
export type PmsGateSeverityConfigCreateOrConnectWithoutAttendanceLatenessGatePoliciesInput = {
    where: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutAttendanceLatenessGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutAttendanceLatenessGatePoliciesInput>;
};
export type PmsGateSeverityConfigUpsertWithoutAttendanceLatenessGatePoliciesInput = {
    update: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateWithoutAttendanceLatenessGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedUpdateWithoutAttendanceLatenessGatePoliciesInput>;
    create: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutAttendanceLatenessGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutAttendanceLatenessGatePoliciesInput>;
    where?: Prisma.PmsGateSeverityConfigWhereInput;
};
export type PmsGateSeverityConfigUpdateToOneWithWhereWithoutAttendanceLatenessGatePoliciesInput = {
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    data: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateWithoutAttendanceLatenessGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedUpdateWithoutAttendanceLatenessGatePoliciesInput>;
};
export type PmsGateSeverityConfigUpdateWithoutAttendanceLatenessGatePoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyUpdateManyWithoutSeverityConfigNestedInput;
};
export type PmsGateSeverityConfigUncheckedUpdateWithoutAttendanceLatenessGatePoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskDefaultGatePolicies?: Prisma.TaskDefaultGatePolicyUncheckedUpdateManyWithoutSeverityConfigNestedInput;
};
export type PmsGateSeverityConfigCreateWithoutTaskDefaultGatePoliciesInput = {
    id?: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyCreateNestedManyWithoutSeverityConfigInput;
};
export type PmsGateSeverityConfigUncheckedCreateWithoutTaskDefaultGatePoliciesInput = {
    id?: string;
    severity: string;
    outcome: $Enums.GateOutcome;
    cappedPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyUncheckedCreateNestedManyWithoutSeverityConfigInput;
};
export type PmsGateSeverityConfigCreateOrConnectWithoutTaskDefaultGatePoliciesInput = {
    where: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutTaskDefaultGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutTaskDefaultGatePoliciesInput>;
};
export type PmsGateSeverityConfigUpsertWithoutTaskDefaultGatePoliciesInput = {
    update: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateWithoutTaskDefaultGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedUpdateWithoutTaskDefaultGatePoliciesInput>;
    create: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateWithoutTaskDefaultGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedCreateWithoutTaskDefaultGatePoliciesInput>;
    where?: Prisma.PmsGateSeverityConfigWhereInput;
};
export type PmsGateSeverityConfigUpdateToOneWithWhereWithoutTaskDefaultGatePoliciesInput = {
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    data: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateWithoutTaskDefaultGatePoliciesInput, Prisma.PmsGateSeverityConfigUncheckedUpdateWithoutTaskDefaultGatePoliciesInput>;
};
export type PmsGateSeverityConfigUpdateWithoutTaskDefaultGatePoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyUpdateManyWithoutSeverityConfigNestedInput;
};
export type PmsGateSeverityConfigUncheckedUpdateWithoutTaskDefaultGatePoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumGateOutcomeFieldUpdateOperationsInput | $Enums.GateOutcome;
    cappedPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendanceLatenessGatePolicies?: Prisma.AttendanceLatenessGatePolicyUncheckedUpdateManyWithoutSeverityConfigNestedInput;
};
export type PmsGateSeverityConfigCountOutputType = {
    taskDefaultGatePolicies: number;
    attendanceLatenessGatePolicies: number;
};
export type PmsGateSeverityConfigCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taskDefaultGatePolicies?: boolean | PmsGateSeverityConfigCountOutputTypeCountTaskDefaultGatePoliciesArgs;
    attendanceLatenessGatePolicies?: boolean | PmsGateSeverityConfigCountOutputTypeCountAttendanceLatenessGatePoliciesArgs;
};
export type PmsGateSeverityConfigCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigCountOutputTypeSelect<ExtArgs> | null;
};
export type PmsGateSeverityConfigCountOutputTypeCountTaskDefaultGatePoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
};
export type PmsGateSeverityConfigCountOutputTypeCountAttendanceLatenessGatePoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceLatenessGatePolicyWhereInput;
};
export type PmsGateSeverityConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    severity?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    createdAt?: boolean;
    taskDefaultGatePolicies?: boolean | Prisma.PmsGateSeverityConfig$taskDefaultGatePoliciesArgs<ExtArgs>;
    attendanceLatenessGatePolicies?: boolean | Prisma.PmsGateSeverityConfig$attendanceLatenessGatePoliciesArgs<ExtArgs>;
    _count?: boolean | Prisma.PmsGateSeverityConfigCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pmsGateSeverityConfig"]>;
export type PmsGateSeverityConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    severity?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["pmsGateSeverityConfig"]>;
export type PmsGateSeverityConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    severity?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["pmsGateSeverityConfig"]>;
export type PmsGateSeverityConfigSelectScalar = {
    id?: boolean;
    severity?: boolean;
    outcome?: boolean;
    cappedPct?: boolean;
    createdAt?: boolean;
};
export type PmsGateSeverityConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "severity" | "outcome" | "cappedPct" | "createdAt", ExtArgs["result"]["pmsGateSeverityConfig"]>;
export type PmsGateSeverityConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taskDefaultGatePolicies?: boolean | Prisma.PmsGateSeverityConfig$taskDefaultGatePoliciesArgs<ExtArgs>;
    attendanceLatenessGatePolicies?: boolean | Prisma.PmsGateSeverityConfig$attendanceLatenessGatePoliciesArgs<ExtArgs>;
    _count?: boolean | Prisma.PmsGateSeverityConfigCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PmsGateSeverityConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PmsGateSeverityConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PmsGateSeverityConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PmsGateSeverityConfig";
    objects: {
        taskDefaultGatePolicies: Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>[];
        attendanceLatenessGatePolicies: Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        severity: string;
        outcome: $Enums.GateOutcome;
        cappedPct: runtime.Decimal | null;
        createdAt: Date;
    }, ExtArgs["result"]["pmsGateSeverityConfig"]>;
    composites: {};
};
export type PmsGateSeverityConfigGetPayload<S extends boolean | null | undefined | PmsGateSeverityConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload, S>;
export type PmsGateSeverityConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PmsGateSeverityConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PmsGateSeverityConfigCountAggregateInputType | true;
};
export interface PmsGateSeverityConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PmsGateSeverityConfig'];
        meta: {
            name: 'PmsGateSeverityConfig';
        };
    };
    findUnique<T extends PmsGateSeverityConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PmsGateSeverityConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PmsGateSeverityConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, PmsGateSeverityConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PmsGateSeverityConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PmsGateSeverityConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PmsGateSeverityConfigFindManyArgs>(args?: Prisma.SelectSubset<T, PmsGateSeverityConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PmsGateSeverityConfigCreateArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigCreateArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PmsGateSeverityConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, PmsGateSeverityConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PmsGateSeverityConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PmsGateSeverityConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PmsGateSeverityConfigDeleteArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PmsGateSeverityConfigUpdateArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PmsGateSeverityConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, PmsGateSeverityConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PmsGateSeverityConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PmsGateSeverityConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PmsGateSeverityConfigUpsertArgs>(args: Prisma.SelectSubset<T, PmsGateSeverityConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PmsGateSeverityConfigCountArgs>(args?: Prisma.Subset<T, PmsGateSeverityConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PmsGateSeverityConfigCountAggregateOutputType> : number>;
    aggregate<T extends PmsGateSeverityConfigAggregateArgs>(args: Prisma.Subset<T, PmsGateSeverityConfigAggregateArgs>): Prisma.PrismaPromise<GetPmsGateSeverityConfigAggregateType<T>>;
    groupBy<T extends PmsGateSeverityConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PmsGateSeverityConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: PmsGateSeverityConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PmsGateSeverityConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPmsGateSeverityConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PmsGateSeverityConfigFieldRefs;
}
export interface Prisma__PmsGateSeverityConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    taskDefaultGatePolicies<T extends Prisma.PmsGateSeverityConfig$taskDefaultGatePoliciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PmsGateSeverityConfig$taskDefaultGatePoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskDefaultGatePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendanceLatenessGatePolicies<T extends Prisma.PmsGateSeverityConfig$attendanceLatenessGatePoliciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PmsGateSeverityConfig$attendanceLatenessGatePoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PmsGateSeverityConfigFieldRefs {
    readonly id: Prisma.FieldRef<"PmsGateSeverityConfig", 'String'>;
    readonly severity: Prisma.FieldRef<"PmsGateSeverityConfig", 'String'>;
    readonly outcome: Prisma.FieldRef<"PmsGateSeverityConfig", 'GateOutcome'>;
    readonly cappedPct: Prisma.FieldRef<"PmsGateSeverityConfig", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"PmsGateSeverityConfig", 'DateTime'>;
}
export type PmsGateSeverityConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    where: Prisma.PmsGateSeverityConfigWhereUniqueInput;
};
export type PmsGateSeverityConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    where: Prisma.PmsGateSeverityConfigWhereUniqueInput;
};
export type PmsGateSeverityConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    orderBy?: Prisma.PmsGateSeverityConfigOrderByWithRelationInput | Prisma.PmsGateSeverityConfigOrderByWithRelationInput[];
    cursor?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PmsGateSeverityConfigScalarFieldEnum | Prisma.PmsGateSeverityConfigScalarFieldEnum[];
};
export type PmsGateSeverityConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    orderBy?: Prisma.PmsGateSeverityConfigOrderByWithRelationInput | Prisma.PmsGateSeverityConfigOrderByWithRelationInput[];
    cursor?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PmsGateSeverityConfigScalarFieldEnum | Prisma.PmsGateSeverityConfigScalarFieldEnum[];
};
export type PmsGateSeverityConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    orderBy?: Prisma.PmsGateSeverityConfigOrderByWithRelationInput | Prisma.PmsGateSeverityConfigOrderByWithRelationInput[];
    cursor?: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PmsGateSeverityConfigScalarFieldEnum | Prisma.PmsGateSeverityConfigScalarFieldEnum[];
};
export type PmsGateSeverityConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateInput, Prisma.PmsGateSeverityConfigUncheckedCreateInput>;
};
export type PmsGateSeverityConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PmsGateSeverityConfigCreateManyInput | Prisma.PmsGateSeverityConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PmsGateSeverityConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    data: Prisma.PmsGateSeverityConfigCreateManyInput | Prisma.PmsGateSeverityConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PmsGateSeverityConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateInput, Prisma.PmsGateSeverityConfigUncheckedUpdateInput>;
    where: Prisma.PmsGateSeverityConfigWhereUniqueInput;
};
export type PmsGateSeverityConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateManyMutationInput, Prisma.PmsGateSeverityConfigUncheckedUpdateManyInput>;
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    limit?: number;
};
export type PmsGateSeverityConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateManyMutationInput, Prisma.PmsGateSeverityConfigUncheckedUpdateManyInput>;
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    limit?: number;
};
export type PmsGateSeverityConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    where: Prisma.PmsGateSeverityConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PmsGateSeverityConfigCreateInput, Prisma.PmsGateSeverityConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PmsGateSeverityConfigUpdateInput, Prisma.PmsGateSeverityConfigUncheckedUpdateInput>;
};
export type PmsGateSeverityConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
    where: Prisma.PmsGateSeverityConfigWhereUniqueInput;
};
export type PmsGateSeverityConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PmsGateSeverityConfigWhereInput;
    limit?: number;
};
export type PmsGateSeverityConfig$taskDefaultGatePoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskDefaultGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.TaskDefaultGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.TaskDefaultGatePolicyInclude<ExtArgs> | null;
    where?: Prisma.TaskDefaultGatePolicyWhereInput;
    orderBy?: Prisma.TaskDefaultGatePolicyOrderByWithRelationInput | Prisma.TaskDefaultGatePolicyOrderByWithRelationInput[];
    cursor?: Prisma.TaskDefaultGatePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskDefaultGatePolicyScalarFieldEnum | Prisma.TaskDefaultGatePolicyScalarFieldEnum[];
};
export type PmsGateSeverityConfig$attendanceLatenessGatePoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
    where?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    orderBy?: Prisma.AttendanceLatenessGatePolicyOrderByWithRelationInput | Prisma.AttendanceLatenessGatePolicyOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceLatenessGatePolicyScalarFieldEnum | Prisma.AttendanceLatenessGatePolicyScalarFieldEnum[];
};
export type PmsGateSeverityConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PmsGateSeverityConfigSelect<ExtArgs> | null;
    omit?: Prisma.PmsGateSeverityConfigOmit<ExtArgs> | null;
    include?: Prisma.PmsGateSeverityConfigInclude<ExtArgs> | null;
};
