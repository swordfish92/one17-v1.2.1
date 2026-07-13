import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceLatenessGatePolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceLatenessGatePolicyPayload>;
export type AggregateAttendanceLatenessGatePolicy = {
    _count: AttendanceLatenessGatePolicyCountAggregateOutputType | null;
    _avg: AttendanceLatenessGatePolicyAvgAggregateOutputType | null;
    _sum: AttendanceLatenessGatePolicySumAggregateOutputType | null;
    _min: AttendanceLatenessGatePolicyMinAggregateOutputType | null;
    _max: AttendanceLatenessGatePolicyMaxAggregateOutputType | null;
};
export type AttendanceLatenessGatePolicyAvgAggregateOutputType = {
    minLateCount: number | null;
};
export type AttendanceLatenessGatePolicySumAggregateOutputType = {
    minLateCount: number | null;
};
export type AttendanceLatenessGatePolicyMinAggregateOutputType = {
    id: string | null;
    minLateCount: number | null;
    severityCode: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type AttendanceLatenessGatePolicyMaxAggregateOutputType = {
    id: string | null;
    minLateCount: number | null;
    severityCode: string | null;
    isActive: boolean | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type AttendanceLatenessGatePolicyCountAggregateOutputType = {
    id: number;
    minLateCount: number;
    severityCode: number;
    isActive: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type AttendanceLatenessGatePolicyAvgAggregateInputType = {
    minLateCount?: true;
};
export type AttendanceLatenessGatePolicySumAggregateInputType = {
    minLateCount?: true;
};
export type AttendanceLatenessGatePolicyMinAggregateInputType = {
    id?: true;
    minLateCount?: true;
    severityCode?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type AttendanceLatenessGatePolicyMaxAggregateInputType = {
    id?: true;
    minLateCount?: true;
    severityCode?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type AttendanceLatenessGatePolicyCountAggregateInputType = {
    id?: true;
    minLateCount?: true;
    severityCode?: true;
    isActive?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendanceLatenessGatePolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    orderBy?: Prisma.AttendanceLatenessGatePolicyOrderByWithRelationInput | Prisma.AttendanceLatenessGatePolicyOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceLatenessGatePolicyCountAggregateInputType;
    _avg?: AttendanceLatenessGatePolicyAvgAggregateInputType;
    _sum?: AttendanceLatenessGatePolicySumAggregateInputType;
    _min?: AttendanceLatenessGatePolicyMinAggregateInputType;
    _max?: AttendanceLatenessGatePolicyMaxAggregateInputType;
};
export type GetAttendanceLatenessGatePolicyAggregateType<T extends AttendanceLatenessGatePolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceLatenessGatePolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceLatenessGatePolicy[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceLatenessGatePolicy[P]>;
};
export type AttendanceLatenessGatePolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    orderBy?: Prisma.AttendanceLatenessGatePolicyOrderByWithAggregationInput | Prisma.AttendanceLatenessGatePolicyOrderByWithAggregationInput[];
    by: Prisma.AttendanceLatenessGatePolicyScalarFieldEnum[] | Prisma.AttendanceLatenessGatePolicyScalarFieldEnum;
    having?: Prisma.AttendanceLatenessGatePolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceLatenessGatePolicyCountAggregateInputType | true;
    _avg?: AttendanceLatenessGatePolicyAvgAggregateInputType;
    _sum?: AttendanceLatenessGatePolicySumAggregateInputType;
    _min?: AttendanceLatenessGatePolicyMinAggregateInputType;
    _max?: AttendanceLatenessGatePolicyMaxAggregateInputType;
};
export type AttendanceLatenessGatePolicyGroupByOutputType = {
    id: string;
    minLateCount: number;
    severityCode: string;
    isActive: boolean;
    createdByUserId: string;
    createdAt: Date;
    _count: AttendanceLatenessGatePolicyCountAggregateOutputType | null;
    _avg: AttendanceLatenessGatePolicyAvgAggregateOutputType | null;
    _sum: AttendanceLatenessGatePolicySumAggregateOutputType | null;
    _min: AttendanceLatenessGatePolicyMinAggregateOutputType | null;
    _max: AttendanceLatenessGatePolicyMaxAggregateOutputType | null;
};
export type GetAttendanceLatenessGatePolicyGroupByPayload<T extends AttendanceLatenessGatePolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceLatenessGatePolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceLatenessGatePolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceLatenessGatePolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceLatenessGatePolicyGroupByOutputType[P]>;
}>>;
export type AttendanceLatenessGatePolicyWhereInput = {
    AND?: Prisma.AttendanceLatenessGatePolicyWhereInput | Prisma.AttendanceLatenessGatePolicyWhereInput[];
    OR?: Prisma.AttendanceLatenessGatePolicyWhereInput[];
    NOT?: Prisma.AttendanceLatenessGatePolicyWhereInput | Prisma.AttendanceLatenessGatePolicyWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceLatenessGatePolicy"> | string;
    minLateCount?: Prisma.IntFilter<"AttendanceLatenessGatePolicy"> | number;
    severityCode?: Prisma.StringFilter<"AttendanceLatenessGatePolicy"> | string;
    isActive?: Prisma.BoolFilter<"AttendanceLatenessGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"AttendanceLatenessGatePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"AttendanceLatenessGatePolicy"> | Date | string;
    severityConfig?: Prisma.XOR<Prisma.PmsGateSeverityConfigScalarRelationFilter, Prisma.PmsGateSeverityConfigWhereInput>;
};
export type AttendanceLatenessGatePolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    minLateCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    severityConfig?: Prisma.PmsGateSeverityConfigOrderByWithRelationInput;
};
export type AttendanceLatenessGatePolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    minLateCount?: number;
    AND?: Prisma.AttendanceLatenessGatePolicyWhereInput | Prisma.AttendanceLatenessGatePolicyWhereInput[];
    OR?: Prisma.AttendanceLatenessGatePolicyWhereInput[];
    NOT?: Prisma.AttendanceLatenessGatePolicyWhereInput | Prisma.AttendanceLatenessGatePolicyWhereInput[];
    severityCode?: Prisma.StringFilter<"AttendanceLatenessGatePolicy"> | string;
    isActive?: Prisma.BoolFilter<"AttendanceLatenessGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"AttendanceLatenessGatePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"AttendanceLatenessGatePolicy"> | Date | string;
    severityConfig?: Prisma.XOR<Prisma.PmsGateSeverityConfigScalarRelationFilter, Prisma.PmsGateSeverityConfigWhereInput>;
}, "id" | "minLateCount">;
export type AttendanceLatenessGatePolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    minLateCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceLatenessGatePolicyCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceLatenessGatePolicyAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceLatenessGatePolicyMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceLatenessGatePolicyMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceLatenessGatePolicySumOrderByAggregateInput;
};
export type AttendanceLatenessGatePolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceLatenessGatePolicyScalarWhereWithAggregatesInput | Prisma.AttendanceLatenessGatePolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceLatenessGatePolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceLatenessGatePolicyScalarWhereWithAggregatesInput | Prisma.AttendanceLatenessGatePolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AttendanceLatenessGatePolicy"> | string;
    minLateCount?: Prisma.IntWithAggregatesFilter<"AttendanceLatenessGatePolicy"> | number;
    severityCode?: Prisma.StringWithAggregatesFilter<"AttendanceLatenessGatePolicy"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"AttendanceLatenessGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"AttendanceLatenessGatePolicy"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceLatenessGatePolicy"> | Date | string;
};
export type AttendanceLatenessGatePolicyCreateInput = {
    id?: string;
    minLateCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
    severityConfig: Prisma.PmsGateSeverityConfigCreateNestedOneWithoutAttendanceLatenessGatePoliciesInput;
};
export type AttendanceLatenessGatePolicyUncheckedCreateInput = {
    id?: string;
    minLateCount: number;
    severityCode: string;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLatenessGatePolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minLateCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    severityConfig?: Prisma.PmsGateSeverityConfigUpdateOneRequiredWithoutAttendanceLatenessGatePoliciesNestedInput;
};
export type AttendanceLatenessGatePolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minLateCount?: Prisma.IntFieldUpdateOperationsInput | number;
    severityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLatenessGatePolicyCreateManyInput = {
    id?: string;
    minLateCount: number;
    severityCode: string;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLatenessGatePolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minLateCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLatenessGatePolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minLateCount?: Prisma.IntFieldUpdateOperationsInput | number;
    severityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLatenessGatePolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minLateCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceLatenessGatePolicyAvgOrderByAggregateInput = {
    minLateCount?: Prisma.SortOrder;
};
export type AttendanceLatenessGatePolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minLateCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceLatenessGatePolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minLateCount?: Prisma.SortOrder;
    severityCode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceLatenessGatePolicySumOrderByAggregateInput = {
    minLateCount?: Prisma.SortOrder;
};
export type AttendanceLatenessGatePolicyListRelationFilter = {
    every?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    some?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    none?: Prisma.AttendanceLatenessGatePolicyWhereInput;
};
export type AttendanceLatenessGatePolicyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceLatenessGatePolicyCreateNestedManyWithoutSeverityConfigInput = {
    create?: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    createMany?: Prisma.AttendanceLatenessGatePolicyCreateManySeverityConfigInputEnvelope;
    connect?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
};
export type AttendanceLatenessGatePolicyUncheckedCreateNestedManyWithoutSeverityConfigInput = {
    create?: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    createMany?: Prisma.AttendanceLatenessGatePolicyCreateManySeverityConfigInputEnvelope;
    connect?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
};
export type AttendanceLatenessGatePolicyUpdateManyWithoutSeverityConfigNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    upsert?: Prisma.AttendanceLatenessGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput[];
    createMany?: Prisma.AttendanceLatenessGatePolicyCreateManySeverityConfigInputEnvelope;
    set?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    disconnect?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    delete?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    connect?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    update?: Prisma.AttendanceLatenessGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput[];
    updateMany?: Prisma.AttendanceLatenessGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput[];
    deleteMany?: Prisma.AttendanceLatenessGatePolicyScalarWhereInput | Prisma.AttendanceLatenessGatePolicyScalarWhereInput[];
};
export type AttendanceLatenessGatePolicyUncheckedUpdateManyWithoutSeverityConfigNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput> | Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput[] | Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput[];
    connectOrCreate?: Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput[];
    upsert?: Prisma.AttendanceLatenessGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput[];
    createMany?: Prisma.AttendanceLatenessGatePolicyCreateManySeverityConfigInputEnvelope;
    set?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    disconnect?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    delete?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    connect?: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput | Prisma.AttendanceLatenessGatePolicyWhereUniqueInput[];
    update?: Prisma.AttendanceLatenessGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput[];
    updateMany?: Prisma.AttendanceLatenessGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput | Prisma.AttendanceLatenessGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput[];
    deleteMany?: Prisma.AttendanceLatenessGatePolicyScalarWhereInput | Prisma.AttendanceLatenessGatePolicyScalarWhereInput[];
};
export type AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput = {
    id?: string;
    minLateCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput = {
    id?: string;
    minLateCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLatenessGatePolicyCreateOrConnectWithoutSeverityConfigInput = {
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput>;
};
export type AttendanceLatenessGatePolicyCreateManySeverityConfigInputEnvelope = {
    data: Prisma.AttendanceLatenessGatePolicyCreateManySeverityConfigInput | Prisma.AttendanceLatenessGatePolicyCreateManySeverityConfigInput[];
    skipDuplicates?: boolean;
};
export type AttendanceLatenessGatePolicyUpsertWithWhereUniqueWithoutSeverityConfigInput = {
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyUpdateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedUpdateWithoutSeverityConfigInput>;
    create: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateWithoutSeverityConfigInput>;
};
export type AttendanceLatenessGatePolicyUpdateWithWhereUniqueWithoutSeverityConfigInput = {
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyUpdateWithoutSeverityConfigInput, Prisma.AttendanceLatenessGatePolicyUncheckedUpdateWithoutSeverityConfigInput>;
};
export type AttendanceLatenessGatePolicyUpdateManyWithWhereWithoutSeverityConfigInput = {
    where: Prisma.AttendanceLatenessGatePolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyUpdateManyMutationInput, Prisma.AttendanceLatenessGatePolicyUncheckedUpdateManyWithoutSeverityConfigInput>;
};
export type AttendanceLatenessGatePolicyScalarWhereInput = {
    AND?: Prisma.AttendanceLatenessGatePolicyScalarWhereInput | Prisma.AttendanceLatenessGatePolicyScalarWhereInput[];
    OR?: Prisma.AttendanceLatenessGatePolicyScalarWhereInput[];
    NOT?: Prisma.AttendanceLatenessGatePolicyScalarWhereInput | Prisma.AttendanceLatenessGatePolicyScalarWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceLatenessGatePolicy"> | string;
    minLateCount?: Prisma.IntFilter<"AttendanceLatenessGatePolicy"> | number;
    severityCode?: Prisma.StringFilter<"AttendanceLatenessGatePolicy"> | string;
    isActive?: Prisma.BoolFilter<"AttendanceLatenessGatePolicy"> | boolean;
    createdByUserId?: Prisma.UuidFilter<"AttendanceLatenessGatePolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"AttendanceLatenessGatePolicy"> | Date | string;
};
export type AttendanceLatenessGatePolicyCreateManySeverityConfigInput = {
    id?: string;
    minLateCount: number;
    isActive?: boolean;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLatenessGatePolicyUpdateWithoutSeverityConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minLateCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLatenessGatePolicyUncheckedUpdateWithoutSeverityConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minLateCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLatenessGatePolicyUncheckedUpdateManyWithoutSeverityConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minLateCount?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLatenessGatePolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minLateCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceLatenessGatePolicy"]>;
export type AttendanceLatenessGatePolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minLateCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceLatenessGatePolicy"]>;
export type AttendanceLatenessGatePolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minLateCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceLatenessGatePolicy"]>;
export type AttendanceLatenessGatePolicySelectScalar = {
    id?: boolean;
    minLateCount?: boolean;
    severityCode?: boolean;
    isActive?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type AttendanceLatenessGatePolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "minLateCount" | "severityCode" | "isActive" | "createdByUserId" | "createdAt", ExtArgs["result"]["attendanceLatenessGatePolicy"]>;
export type AttendanceLatenessGatePolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
};
export type AttendanceLatenessGatePolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
};
export type AttendanceLatenessGatePolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    severityConfig?: boolean | Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>;
};
export type $AttendanceLatenessGatePolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceLatenessGatePolicy";
    objects: {
        severityConfig: Prisma.$PmsGateSeverityConfigPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        minLateCount: number;
        severityCode: string;
        isActive: boolean;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["attendanceLatenessGatePolicy"]>;
    composites: {};
};
export type AttendanceLatenessGatePolicyGetPayload<S extends boolean | null | undefined | AttendanceLatenessGatePolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload, S>;
export type AttendanceLatenessGatePolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceLatenessGatePolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceLatenessGatePolicyCountAggregateInputType | true;
};
export interface AttendanceLatenessGatePolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceLatenessGatePolicy'];
        meta: {
            name: 'AttendanceLatenessGatePolicy';
        };
    };
    findUnique<T extends AttendanceLatenessGatePolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceLatenessGatePolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceLatenessGatePolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceLatenessGatePolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceLatenessGatePolicyFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceLatenessGatePolicyCreateArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceLatenessGatePolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceLatenessGatePolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceLatenessGatePolicyDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceLatenessGatePolicyUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceLatenessGatePolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceLatenessGatePolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceLatenessGatePolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceLatenessGatePolicyUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceLatenessGatePolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceLatenessGatePolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLatenessGatePolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceLatenessGatePolicyCountArgs>(args?: Prisma.Subset<T, AttendanceLatenessGatePolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceLatenessGatePolicyCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceLatenessGatePolicyAggregateArgs>(args: Prisma.Subset<T, AttendanceLatenessGatePolicyAggregateArgs>): Prisma.PrismaPromise<GetAttendanceLatenessGatePolicyAggregateType<T>>;
    groupBy<T extends AttendanceLatenessGatePolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceLatenessGatePolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceLatenessGatePolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceLatenessGatePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceLatenessGatePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceLatenessGatePolicyFieldRefs;
}
export interface Prisma__AttendanceLatenessGatePolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    severityConfig<T extends Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PmsGateSeverityConfigDefaultArgs<ExtArgs>>): Prisma.Prisma__PmsGateSeverityConfigClient<runtime.Types.Result.GetResult<Prisma.$PmsGateSeverityConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceLatenessGatePolicyFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceLatenessGatePolicy", 'String'>;
    readonly minLateCount: Prisma.FieldRef<"AttendanceLatenessGatePolicy", 'Int'>;
    readonly severityCode: Prisma.FieldRef<"AttendanceLatenessGatePolicy", 'String'>;
    readonly isActive: Prisma.FieldRef<"AttendanceLatenessGatePolicy", 'Boolean'>;
    readonly createdByUserId: Prisma.FieldRef<"AttendanceLatenessGatePolicy", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceLatenessGatePolicy", 'DateTime'>;
}
export type AttendanceLatenessGatePolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
};
export type AttendanceLatenessGatePolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
};
export type AttendanceLatenessGatePolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceLatenessGatePolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceLatenessGatePolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceLatenessGatePolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateInput>;
};
export type AttendanceLatenessGatePolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceLatenessGatePolicyCreateManyInput | Prisma.AttendanceLatenessGatePolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceLatenessGatePolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    data: Prisma.AttendanceLatenessGatePolicyCreateManyInput | Prisma.AttendanceLatenessGatePolicyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceLatenessGatePolicyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceLatenessGatePolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyUpdateInput, Prisma.AttendanceLatenessGatePolicyUncheckedUpdateInput>;
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
};
export type AttendanceLatenessGatePolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyUpdateManyMutationInput, Prisma.AttendanceLatenessGatePolicyUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    limit?: number;
};
export type AttendanceLatenessGatePolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyUpdateManyMutationInput, Prisma.AttendanceLatenessGatePolicyUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    limit?: number;
    include?: Prisma.AttendanceLatenessGatePolicyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceLatenessGatePolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyCreateInput, Prisma.AttendanceLatenessGatePolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceLatenessGatePolicyUpdateInput, Prisma.AttendanceLatenessGatePolicyUncheckedUpdateInput>;
};
export type AttendanceLatenessGatePolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
    where: Prisma.AttendanceLatenessGatePolicyWhereUniqueInput;
};
export type AttendanceLatenessGatePolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceLatenessGatePolicyWhereInput;
    limit?: number;
};
export type AttendanceLatenessGatePolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLatenessGatePolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLatenessGatePolicyOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLatenessGatePolicyInclude<ExtArgs> | null;
};
