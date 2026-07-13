import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveEntitlementModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveEntitlementPayload>;
export type AggregateLeaveEntitlement = {
    _count: LeaveEntitlementCountAggregateOutputType | null;
    _avg: LeaveEntitlementAvgAggregateOutputType | null;
    _sum: LeaveEntitlementSumAggregateOutputType | null;
    _min: LeaveEntitlementMinAggregateOutputType | null;
    _max: LeaveEntitlementMaxAggregateOutputType | null;
};
export type LeaveEntitlementAvgAggregateOutputType = {
    year: number | null;
    entitledDays: runtime.Decimal | null;
    usedDays: runtime.Decimal | null;
};
export type LeaveEntitlementSumAggregateOutputType = {
    year: number | null;
    entitledDays: runtime.Decimal | null;
    usedDays: runtime.Decimal | null;
};
export type LeaveEntitlementMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    leaveTypeCode: string | null;
    year: number | null;
    entitledDays: runtime.Decimal | null;
    usedDays: runtime.Decimal | null;
    createdAt: Date | null;
};
export type LeaveEntitlementMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    leaveTypeCode: string | null;
    year: number | null;
    entitledDays: runtime.Decimal | null;
    usedDays: runtime.Decimal | null;
    createdAt: Date | null;
};
export type LeaveEntitlementCountAggregateOutputType = {
    id: number;
    employeeId: number;
    leaveTypeCode: number;
    year: number;
    entitledDays: number;
    usedDays: number;
    createdAt: number;
    _all: number;
};
export type LeaveEntitlementAvgAggregateInputType = {
    year?: true;
    entitledDays?: true;
    usedDays?: true;
};
export type LeaveEntitlementSumAggregateInputType = {
    year?: true;
    entitledDays?: true;
    usedDays?: true;
};
export type LeaveEntitlementMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    leaveTypeCode?: true;
    year?: true;
    entitledDays?: true;
    usedDays?: true;
    createdAt?: true;
};
export type LeaveEntitlementMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    leaveTypeCode?: true;
    year?: true;
    entitledDays?: true;
    usedDays?: true;
    createdAt?: true;
};
export type LeaveEntitlementCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    leaveTypeCode?: true;
    year?: true;
    entitledDays?: true;
    usedDays?: true;
    createdAt?: true;
    _all?: true;
};
export type LeaveEntitlementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveEntitlementWhereInput;
    orderBy?: Prisma.LeaveEntitlementOrderByWithRelationInput | Prisma.LeaveEntitlementOrderByWithRelationInput[];
    cursor?: Prisma.LeaveEntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveEntitlementCountAggregateInputType;
    _avg?: LeaveEntitlementAvgAggregateInputType;
    _sum?: LeaveEntitlementSumAggregateInputType;
    _min?: LeaveEntitlementMinAggregateInputType;
    _max?: LeaveEntitlementMaxAggregateInputType;
};
export type GetLeaveEntitlementAggregateType<T extends LeaveEntitlementAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveEntitlement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveEntitlement[P]> : Prisma.GetScalarType<T[P], AggregateLeaveEntitlement[P]>;
};
export type LeaveEntitlementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveEntitlementWhereInput;
    orderBy?: Prisma.LeaveEntitlementOrderByWithAggregationInput | Prisma.LeaveEntitlementOrderByWithAggregationInput[];
    by: Prisma.LeaveEntitlementScalarFieldEnum[] | Prisma.LeaveEntitlementScalarFieldEnum;
    having?: Prisma.LeaveEntitlementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveEntitlementCountAggregateInputType | true;
    _avg?: LeaveEntitlementAvgAggregateInputType;
    _sum?: LeaveEntitlementSumAggregateInputType;
    _min?: LeaveEntitlementMinAggregateInputType;
    _max?: LeaveEntitlementMaxAggregateInputType;
};
export type LeaveEntitlementGroupByOutputType = {
    id: string;
    employeeId: string;
    leaveTypeCode: string;
    year: number;
    entitledDays: runtime.Decimal;
    usedDays: runtime.Decimal;
    createdAt: Date;
    _count: LeaveEntitlementCountAggregateOutputType | null;
    _avg: LeaveEntitlementAvgAggregateOutputType | null;
    _sum: LeaveEntitlementSumAggregateOutputType | null;
    _min: LeaveEntitlementMinAggregateOutputType | null;
    _max: LeaveEntitlementMaxAggregateOutputType | null;
};
export type GetLeaveEntitlementGroupByPayload<T extends LeaveEntitlementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveEntitlementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveEntitlementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveEntitlementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveEntitlementGroupByOutputType[P]>;
}>>;
export type LeaveEntitlementWhereInput = {
    AND?: Prisma.LeaveEntitlementWhereInput | Prisma.LeaveEntitlementWhereInput[];
    OR?: Prisma.LeaveEntitlementWhereInput[];
    NOT?: Prisma.LeaveEntitlementWhereInput | Prisma.LeaveEntitlementWhereInput[];
    id?: Prisma.UuidFilter<"LeaveEntitlement"> | string;
    employeeId?: Prisma.UuidFilter<"LeaveEntitlement"> | string;
    leaveTypeCode?: Prisma.StringFilter<"LeaveEntitlement"> | string;
    year?: Prisma.IntFilter<"LeaveEntitlement"> | number;
    entitledDays?: Prisma.DecimalFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveEntitlement"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
};
export type LeaveEntitlementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    entitledDays?: Prisma.SortOrder;
    usedDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    leaveType?: Prisma.LeaveTypeOrderByWithRelationInput;
};
export type LeaveEntitlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeId_leaveTypeCode_year?: Prisma.LeaveEntitlementEmployeeIdLeaveTypeCodeYearCompoundUniqueInput;
    AND?: Prisma.LeaveEntitlementWhereInput | Prisma.LeaveEntitlementWhereInput[];
    OR?: Prisma.LeaveEntitlementWhereInput[];
    NOT?: Prisma.LeaveEntitlementWhereInput | Prisma.LeaveEntitlementWhereInput[];
    employeeId?: Prisma.UuidFilter<"LeaveEntitlement"> | string;
    leaveTypeCode?: Prisma.StringFilter<"LeaveEntitlement"> | string;
    year?: Prisma.IntFilter<"LeaveEntitlement"> | number;
    entitledDays?: Prisma.DecimalFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveEntitlement"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
}, "id" | "employeeId_leaveTypeCode_year">;
export type LeaveEntitlementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    entitledDays?: Prisma.SortOrder;
    usedDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeaveEntitlementCountOrderByAggregateInput;
    _avg?: Prisma.LeaveEntitlementAvgOrderByAggregateInput;
    _max?: Prisma.LeaveEntitlementMaxOrderByAggregateInput;
    _min?: Prisma.LeaveEntitlementMinOrderByAggregateInput;
    _sum?: Prisma.LeaveEntitlementSumOrderByAggregateInput;
};
export type LeaveEntitlementScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveEntitlementScalarWhereWithAggregatesInput | Prisma.LeaveEntitlementScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveEntitlementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveEntitlementScalarWhereWithAggregatesInput | Prisma.LeaveEntitlementScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LeaveEntitlement"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"LeaveEntitlement"> | string;
    leaveTypeCode?: Prisma.StringWithAggregatesFilter<"LeaveEntitlement"> | string;
    year?: Prisma.IntWithAggregatesFilter<"LeaveEntitlement"> | number;
    entitledDays?: Prisma.DecimalWithAggregatesFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalWithAggregatesFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveEntitlement"> | Date | string;
};
export type LeaveEntitlementCreateInput = {
    id?: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveEntitlementsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutEntitlementsInput;
};
export type LeaveEntitlementUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    leaveTypeCode: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type LeaveEntitlementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveEntitlementsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutEntitlementsNestedInput;
};
export type LeaveEntitlementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveEntitlementCreateManyInput = {
    id?: string;
    employeeId: string;
    leaveTypeCode: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type LeaveEntitlementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveEntitlementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveEntitlementListRelationFilter = {
    every?: Prisma.LeaveEntitlementWhereInput;
    some?: Prisma.LeaveEntitlementWhereInput;
    none?: Prisma.LeaveEntitlementWhereInput;
};
export type LeaveEntitlementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveEntitlementEmployeeIdLeaveTypeCodeYearCompoundUniqueInput = {
    employeeId: string;
    leaveTypeCode: string;
    year: number;
};
export type LeaveEntitlementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    entitledDays?: Prisma.SortOrder;
    usedDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveEntitlementAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    entitledDays?: Prisma.SortOrder;
    usedDays?: Prisma.SortOrder;
};
export type LeaveEntitlementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    entitledDays?: Prisma.SortOrder;
    usedDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveEntitlementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    entitledDays?: Prisma.SortOrder;
    usedDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveEntitlementSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    entitledDays?: Prisma.SortOrder;
    usedDays?: Prisma.SortOrder;
};
export type LeaveEntitlementCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveEntitlementCreateWithoutEmployeeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyEmployeeInputEnvelope;
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
};
export type LeaveEntitlementUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveEntitlementCreateWithoutEmployeeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyEmployeeInputEnvelope;
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
};
export type LeaveEntitlementUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveEntitlementCreateWithoutEmployeeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyEmployeeInputEnvelope;
    set?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    disconnect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    delete?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    update?: Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.LeaveEntitlementUpdateManyWithWhereWithoutEmployeeInput | Prisma.LeaveEntitlementUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.LeaveEntitlementScalarWhereInput | Prisma.LeaveEntitlementScalarWhereInput[];
};
export type LeaveEntitlementUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveEntitlementCreateWithoutEmployeeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyEmployeeInputEnvelope;
    set?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    disconnect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    delete?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    update?: Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.LeaveEntitlementUpdateManyWithWhereWithoutEmployeeInput | Prisma.LeaveEntitlementUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.LeaveEntitlementScalarWhereInput | Prisma.LeaveEntitlementScalarWhereInput[];
};
export type LeaveEntitlementCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
};
export type LeaveEntitlementUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
};
export type LeaveEntitlementUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    disconnect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    delete?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    update?: Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveEntitlementUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveEntitlementUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveEntitlementScalarWhereInput | Prisma.LeaveEntitlementScalarWhereInput[];
};
export type LeaveEntitlementUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput[] | Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveEntitlementUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveEntitlementCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    disconnect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    delete?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    connect?: Prisma.LeaveEntitlementWhereUniqueInput | Prisma.LeaveEntitlementWhereUniqueInput[];
    update?: Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveEntitlementUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveEntitlementUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveEntitlementUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveEntitlementScalarWhereInput | Prisma.LeaveEntitlementScalarWhereInput[];
};
export type LeaveEntitlementCreateWithoutEmployeeInput = {
    id?: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutEntitlementsInput;
};
export type LeaveEntitlementUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    leaveTypeCode: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type LeaveEntitlementCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.LeaveEntitlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput>;
};
export type LeaveEntitlementCreateManyEmployeeInputEnvelope = {
    data: Prisma.LeaveEntitlementCreateManyEmployeeInput | Prisma.LeaveEntitlementCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type LeaveEntitlementUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.LeaveEntitlementWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveEntitlementUpdateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutEmployeeInput>;
};
export type LeaveEntitlementUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.LeaveEntitlementWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveEntitlementUpdateWithoutEmployeeInput, Prisma.LeaveEntitlementUncheckedUpdateWithoutEmployeeInput>;
};
export type LeaveEntitlementUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.LeaveEntitlementScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveEntitlementUpdateManyMutationInput, Prisma.LeaveEntitlementUncheckedUpdateManyWithoutEmployeeInput>;
};
export type LeaveEntitlementScalarWhereInput = {
    AND?: Prisma.LeaveEntitlementScalarWhereInput | Prisma.LeaveEntitlementScalarWhereInput[];
    OR?: Prisma.LeaveEntitlementScalarWhereInput[];
    NOT?: Prisma.LeaveEntitlementScalarWhereInput | Prisma.LeaveEntitlementScalarWhereInput[];
    id?: Prisma.UuidFilter<"LeaveEntitlement"> | string;
    employeeId?: Prisma.UuidFilter<"LeaveEntitlement"> | string;
    leaveTypeCode?: Prisma.StringFilter<"LeaveEntitlement"> | string;
    year?: Prisma.IntFilter<"LeaveEntitlement"> | number;
    entitledDays?: Prisma.DecimalFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFilter<"LeaveEntitlement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveEntitlement"> | Date | string;
};
export type LeaveEntitlementCreateWithoutLeaveTypeInput = {
    id?: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveEntitlementsInput;
};
export type LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput = {
    id?: string;
    employeeId: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type LeaveEntitlementCreateOrConnectWithoutLeaveTypeInput = {
    where: Prisma.LeaveEntitlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveEntitlementCreateManyLeaveTypeInputEnvelope = {
    data: Prisma.LeaveEntitlementCreateManyLeaveTypeInput | Prisma.LeaveEntitlementCreateManyLeaveTypeInput[];
    skipDuplicates?: boolean;
};
export type LeaveEntitlementUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveEntitlementWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveEntitlementUpdateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedUpdateWithoutLeaveTypeInput>;
    create: Prisma.XOR<Prisma.LeaveEntitlementCreateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveEntitlementUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveEntitlementWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveEntitlementUpdateWithoutLeaveTypeInput, Prisma.LeaveEntitlementUncheckedUpdateWithoutLeaveTypeInput>;
};
export type LeaveEntitlementUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: Prisma.LeaveEntitlementScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveEntitlementUpdateManyMutationInput, Prisma.LeaveEntitlementUncheckedUpdateManyWithoutLeaveTypeInput>;
};
export type LeaveEntitlementCreateManyEmployeeInput = {
    id?: string;
    leaveTypeCode: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type LeaveEntitlementUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutEntitlementsNestedInput;
};
export type LeaveEntitlementUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveEntitlementUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveEntitlementCreateManyLeaveTypeInput = {
    id?: string;
    employeeId: string;
    year: number;
    entitledDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type LeaveEntitlementUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveEntitlementsNestedInput;
};
export type LeaveEntitlementUncheckedUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveEntitlementUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    entitledDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveEntitlementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    year?: boolean;
    entitledDays?: boolean;
    usedDays?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveEntitlement"]>;
export type LeaveEntitlementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    year?: boolean;
    entitledDays?: boolean;
    usedDays?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveEntitlement"]>;
export type LeaveEntitlementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    year?: boolean;
    entitledDays?: boolean;
    usedDays?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveEntitlement"]>;
export type LeaveEntitlementSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    year?: boolean;
    entitledDays?: boolean;
    usedDays?: boolean;
    createdAt?: boolean;
};
export type LeaveEntitlementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "leaveTypeCode" | "year" | "entitledDays" | "usedDays" | "createdAt", ExtArgs["result"]["leaveEntitlement"]>;
export type LeaveEntitlementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeaveEntitlementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeaveEntitlementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type $LeaveEntitlementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveEntitlement";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        leaveType: Prisma.$LeaveTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        leaveTypeCode: string;
        year: number;
        entitledDays: runtime.Decimal;
        usedDays: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["leaveEntitlement"]>;
    composites: {};
};
export type LeaveEntitlementGetPayload<S extends boolean | null | undefined | LeaveEntitlementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload, S>;
export type LeaveEntitlementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveEntitlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveEntitlementCountAggregateInputType | true;
};
export interface LeaveEntitlementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveEntitlement'];
        meta: {
            name: 'LeaveEntitlement';
        };
    };
    findUnique<T extends LeaveEntitlementFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveEntitlementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveEntitlementFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveEntitlementFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveEntitlementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveEntitlementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveEntitlementFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveEntitlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveEntitlementCreateArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveEntitlementCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveEntitlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveEntitlementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveEntitlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveEntitlementDeleteArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveEntitlementUpdateArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveEntitlementDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveEntitlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveEntitlementUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveEntitlementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveEntitlementUpsertArgs>(args: Prisma.SelectSubset<T, LeaveEntitlementUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveEntitlementClient<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveEntitlementCountArgs>(args?: Prisma.Subset<T, LeaveEntitlementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveEntitlementCountAggregateOutputType> : number>;
    aggregate<T extends LeaveEntitlementAggregateArgs>(args: Prisma.Subset<T, LeaveEntitlementAggregateArgs>): Prisma.PrismaPromise<GetLeaveEntitlementAggregateType<T>>;
    groupBy<T extends LeaveEntitlementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveEntitlementGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveEntitlementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveEntitlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveEntitlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveEntitlementFieldRefs;
}
export interface Prisma__LeaveEntitlementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    leaveType<T extends Prisma.LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveEntitlementFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveEntitlement", 'String'>;
    readonly employeeId: Prisma.FieldRef<"LeaveEntitlement", 'String'>;
    readonly leaveTypeCode: Prisma.FieldRef<"LeaveEntitlement", 'String'>;
    readonly year: Prisma.FieldRef<"LeaveEntitlement", 'Int'>;
    readonly entitledDays: Prisma.FieldRef<"LeaveEntitlement", 'Decimal'>;
    readonly usedDays: Prisma.FieldRef<"LeaveEntitlement", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"LeaveEntitlement", 'DateTime'>;
}
export type LeaveEntitlementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where: Prisma.LeaveEntitlementWhereUniqueInput;
};
export type LeaveEntitlementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where: Prisma.LeaveEntitlementWhereUniqueInput;
};
export type LeaveEntitlementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where?: Prisma.LeaveEntitlementWhereInput;
    orderBy?: Prisma.LeaveEntitlementOrderByWithRelationInput | Prisma.LeaveEntitlementOrderByWithRelationInput[];
    cursor?: Prisma.LeaveEntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveEntitlementScalarFieldEnum | Prisma.LeaveEntitlementScalarFieldEnum[];
};
export type LeaveEntitlementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where?: Prisma.LeaveEntitlementWhereInput;
    orderBy?: Prisma.LeaveEntitlementOrderByWithRelationInput | Prisma.LeaveEntitlementOrderByWithRelationInput[];
    cursor?: Prisma.LeaveEntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveEntitlementScalarFieldEnum | Prisma.LeaveEntitlementScalarFieldEnum[];
};
export type LeaveEntitlementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where?: Prisma.LeaveEntitlementWhereInput;
    orderBy?: Prisma.LeaveEntitlementOrderByWithRelationInput | Prisma.LeaveEntitlementOrderByWithRelationInput[];
    cursor?: Prisma.LeaveEntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveEntitlementScalarFieldEnum | Prisma.LeaveEntitlementScalarFieldEnum[];
};
export type LeaveEntitlementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveEntitlementCreateInput, Prisma.LeaveEntitlementUncheckedCreateInput>;
};
export type LeaveEntitlementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveEntitlementCreateManyInput | Prisma.LeaveEntitlementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveEntitlementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    data: Prisma.LeaveEntitlementCreateManyInput | Prisma.LeaveEntitlementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveEntitlementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveEntitlementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveEntitlementUpdateInput, Prisma.LeaveEntitlementUncheckedUpdateInput>;
    where: Prisma.LeaveEntitlementWhereUniqueInput;
};
export type LeaveEntitlementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveEntitlementUpdateManyMutationInput, Prisma.LeaveEntitlementUncheckedUpdateManyInput>;
    where?: Prisma.LeaveEntitlementWhereInput;
    limit?: number;
};
export type LeaveEntitlementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveEntitlementUpdateManyMutationInput, Prisma.LeaveEntitlementUncheckedUpdateManyInput>;
    where?: Prisma.LeaveEntitlementWhereInput;
    limit?: number;
    include?: Prisma.LeaveEntitlementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveEntitlementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where: Prisma.LeaveEntitlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveEntitlementCreateInput, Prisma.LeaveEntitlementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveEntitlementUpdateInput, Prisma.LeaveEntitlementUncheckedUpdateInput>;
};
export type LeaveEntitlementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where: Prisma.LeaveEntitlementWhereUniqueInput;
};
export type LeaveEntitlementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveEntitlementWhereInput;
    limit?: number;
};
export type LeaveEntitlementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
};
