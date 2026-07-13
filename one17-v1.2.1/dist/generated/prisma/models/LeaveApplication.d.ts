import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveApplicationPayload>;
export type AggregateLeaveApplication = {
    _count: LeaveApplicationCountAggregateOutputType | null;
    _avg: LeaveApplicationAvgAggregateOutputType | null;
    _sum: LeaveApplicationSumAggregateOutputType | null;
    _min: LeaveApplicationMinAggregateOutputType | null;
    _max: LeaveApplicationMaxAggregateOutputType | null;
};
export type LeaveApplicationAvgAggregateOutputType = {
    daysRequested: runtime.Decimal | null;
};
export type LeaveApplicationSumAggregateOutputType = {
    daysRequested: runtime.Decimal | null;
};
export type LeaveApplicationMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    leaveTypeCode: string | null;
    startDate: Date | null;
    endDate: Date | null;
    daysRequested: runtime.Decimal | null;
    reliefOfficerEmployeeId: string | null;
    reason: string | null;
    status: $Enums.LeaveApplicationStatus | null;
    supervisorDecidedByUserId: string | null;
    supervisorDecidedAt: Date | null;
    supervisorNotes: string | null;
    hrAcknowledgedByUserId: string | null;
    hrAcknowledgedAt: Date | null;
    createdAt: Date | null;
};
export type LeaveApplicationMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    leaveTypeCode: string | null;
    startDate: Date | null;
    endDate: Date | null;
    daysRequested: runtime.Decimal | null;
    reliefOfficerEmployeeId: string | null;
    reason: string | null;
    status: $Enums.LeaveApplicationStatus | null;
    supervisorDecidedByUserId: string | null;
    supervisorDecidedAt: Date | null;
    supervisorNotes: string | null;
    hrAcknowledgedByUserId: string | null;
    hrAcknowledgedAt: Date | null;
    createdAt: Date | null;
};
export type LeaveApplicationCountAggregateOutputType = {
    id: number;
    employeeId: number;
    leaveTypeCode: number;
    startDate: number;
    endDate: number;
    daysRequested: number;
    reliefOfficerEmployeeId: number;
    reason: number;
    status: number;
    supervisorDecidedByUserId: number;
    supervisorDecidedAt: number;
    supervisorNotes: number;
    hrAcknowledgedByUserId: number;
    hrAcknowledgedAt: number;
    createdAt: number;
    _all: number;
};
export type LeaveApplicationAvgAggregateInputType = {
    daysRequested?: true;
};
export type LeaveApplicationSumAggregateInputType = {
    daysRequested?: true;
};
export type LeaveApplicationMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    leaveTypeCode?: true;
    startDate?: true;
    endDate?: true;
    daysRequested?: true;
    reliefOfficerEmployeeId?: true;
    reason?: true;
    status?: true;
    supervisorDecidedByUserId?: true;
    supervisorDecidedAt?: true;
    supervisorNotes?: true;
    hrAcknowledgedByUserId?: true;
    hrAcknowledgedAt?: true;
    createdAt?: true;
};
export type LeaveApplicationMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    leaveTypeCode?: true;
    startDate?: true;
    endDate?: true;
    daysRequested?: true;
    reliefOfficerEmployeeId?: true;
    reason?: true;
    status?: true;
    supervisorDecidedByUserId?: true;
    supervisorDecidedAt?: true;
    supervisorNotes?: true;
    hrAcknowledgedByUserId?: true;
    hrAcknowledgedAt?: true;
    createdAt?: true;
};
export type LeaveApplicationCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    leaveTypeCode?: true;
    startDate?: true;
    endDate?: true;
    daysRequested?: true;
    reliefOfficerEmployeeId?: true;
    reason?: true;
    status?: true;
    supervisorDecidedByUserId?: true;
    supervisorDecidedAt?: true;
    supervisorNotes?: true;
    hrAcknowledgedByUserId?: true;
    hrAcknowledgedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type LeaveApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveApplicationWhereInput;
    orderBy?: Prisma.LeaveApplicationOrderByWithRelationInput | Prisma.LeaveApplicationOrderByWithRelationInput[];
    cursor?: Prisma.LeaveApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveApplicationCountAggregateInputType;
    _avg?: LeaveApplicationAvgAggregateInputType;
    _sum?: LeaveApplicationSumAggregateInputType;
    _min?: LeaveApplicationMinAggregateInputType;
    _max?: LeaveApplicationMaxAggregateInputType;
};
export type GetLeaveApplicationAggregateType<T extends LeaveApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveApplication[P]> : Prisma.GetScalarType<T[P], AggregateLeaveApplication[P]>;
};
export type LeaveApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveApplicationWhereInput;
    orderBy?: Prisma.LeaveApplicationOrderByWithAggregationInput | Prisma.LeaveApplicationOrderByWithAggregationInput[];
    by: Prisma.LeaveApplicationScalarFieldEnum[] | Prisma.LeaveApplicationScalarFieldEnum;
    having?: Prisma.LeaveApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveApplicationCountAggregateInputType | true;
    _avg?: LeaveApplicationAvgAggregateInputType;
    _sum?: LeaveApplicationSumAggregateInputType;
    _min?: LeaveApplicationMinAggregateInputType;
    _max?: LeaveApplicationMaxAggregateInputType;
};
export type LeaveApplicationGroupByOutputType = {
    id: string;
    employeeId: string;
    leaveTypeCode: string;
    startDate: Date;
    endDate: Date;
    daysRequested: runtime.Decimal;
    reliefOfficerEmployeeId: string | null;
    reason: string | null;
    status: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId: string | null;
    supervisorDecidedAt: Date | null;
    supervisorNotes: string | null;
    hrAcknowledgedByUserId: string | null;
    hrAcknowledgedAt: Date | null;
    createdAt: Date;
    _count: LeaveApplicationCountAggregateOutputType | null;
    _avg: LeaveApplicationAvgAggregateOutputType | null;
    _sum: LeaveApplicationSumAggregateOutputType | null;
    _min: LeaveApplicationMinAggregateOutputType | null;
    _max: LeaveApplicationMaxAggregateOutputType | null;
};
export type GetLeaveApplicationGroupByPayload<T extends LeaveApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveApplicationGroupByOutputType[P]>;
}>>;
export type LeaveApplicationWhereInput = {
    AND?: Prisma.LeaveApplicationWhereInput | Prisma.LeaveApplicationWhereInput[];
    OR?: Prisma.LeaveApplicationWhereInput[];
    NOT?: Prisma.LeaveApplicationWhereInput | Prisma.LeaveApplicationWhereInput[];
    id?: Prisma.UuidFilter<"LeaveApplication"> | string;
    employeeId?: Prisma.UuidFilter<"LeaveApplication"> | string;
    leaveTypeCode?: Prisma.StringFilter<"LeaveApplication"> | string;
    startDate?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    daysRequested?: Prisma.DecimalFilter<"LeaveApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    reason?: Prisma.StringNullableFilter<"LeaveApplication"> | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFilter<"LeaveApplication"> | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    supervisorDecidedAt?: Prisma.DateTimeNullableFilter<"LeaveApplication"> | Date | string | null;
    supervisorNotes?: Prisma.StringNullableFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedByUserId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedAt?: Prisma.DateTimeNullableFilter<"LeaveApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
    reliefOfficer?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
};
export type LeaveApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    daysRequested?: Prisma.SortOrder;
    reliefOfficerEmployeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supervisorDecidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorDecidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    hrAcknowledgedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    hrAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    leaveType?: Prisma.LeaveTypeOrderByWithRelationInput;
    reliefOfficer?: Prisma.EmployeeOrderByWithRelationInput;
};
export type LeaveApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LeaveApplicationWhereInput | Prisma.LeaveApplicationWhereInput[];
    OR?: Prisma.LeaveApplicationWhereInput[];
    NOT?: Prisma.LeaveApplicationWhereInput | Prisma.LeaveApplicationWhereInput[];
    employeeId?: Prisma.UuidFilter<"LeaveApplication"> | string;
    leaveTypeCode?: Prisma.StringFilter<"LeaveApplication"> | string;
    startDate?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    daysRequested?: Prisma.DecimalFilter<"LeaveApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    reason?: Prisma.StringNullableFilter<"LeaveApplication"> | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFilter<"LeaveApplication"> | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    supervisorDecidedAt?: Prisma.DateTimeNullableFilter<"LeaveApplication"> | Date | string | null;
    supervisorNotes?: Prisma.StringNullableFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedByUserId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedAt?: Prisma.DateTimeNullableFilter<"LeaveApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
    reliefOfficer?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
}, "id">;
export type LeaveApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    daysRequested?: Prisma.SortOrder;
    reliefOfficerEmployeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supervisorDecidedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorDecidedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    hrAcknowledgedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    hrAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeaveApplicationCountOrderByAggregateInput;
    _avg?: Prisma.LeaveApplicationAvgOrderByAggregateInput;
    _max?: Prisma.LeaveApplicationMaxOrderByAggregateInput;
    _min?: Prisma.LeaveApplicationMinOrderByAggregateInput;
    _sum?: Prisma.LeaveApplicationSumOrderByAggregateInput;
};
export type LeaveApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveApplicationScalarWhereWithAggregatesInput | Prisma.LeaveApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveApplicationScalarWhereWithAggregatesInput | Prisma.LeaveApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LeaveApplication"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"LeaveApplication"> | string;
    leaveTypeCode?: Prisma.StringWithAggregatesFilter<"LeaveApplication"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string;
    daysRequested?: Prisma.DecimalWithAggregatesFilter<"LeaveApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.UuidNullableWithAggregatesFilter<"LeaveApplication"> | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"LeaveApplication"> | string | null;
    status?: Prisma.EnumLeaveApplicationStatusWithAggregatesFilter<"LeaveApplication"> | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"LeaveApplication"> | string | null;
    supervisorDecidedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LeaveApplication"> | Date | string | null;
    supervisorNotes?: Prisma.StringNullableWithAggregatesFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LeaveApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string;
};
export type LeaveApplicationCreateInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveApplicationsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutApplicationsInput;
    reliefOfficer?: Prisma.EmployeeCreateNestedOneWithoutLeaveReliefForInput;
};
export type LeaveApplicationUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    leaveTypeCode: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: string | null;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveApplicationsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput;
    reliefOfficer?: Prisma.EmployeeUpdateOneWithoutLeaveReliefForNestedInput;
};
export type LeaveApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationCreateManyInput = {
    id?: string;
    employeeId: string;
    leaveTypeCode: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: string | null;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationListRelationFilter = {
    every?: Prisma.LeaveApplicationWhereInput;
    some?: Prisma.LeaveApplicationWhereInput;
    none?: Prisma.LeaveApplicationWhereInput;
};
export type LeaveApplicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    daysRequested?: Prisma.SortOrder;
    reliefOfficerEmployeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supervisorDecidedByUserId?: Prisma.SortOrder;
    supervisorDecidedAt?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrder;
    hrAcknowledgedByUserId?: Prisma.SortOrder;
    hrAcknowledgedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveApplicationAvgOrderByAggregateInput = {
    daysRequested?: Prisma.SortOrder;
};
export type LeaveApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    daysRequested?: Prisma.SortOrder;
    reliefOfficerEmployeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supervisorDecidedByUserId?: Prisma.SortOrder;
    supervisorDecidedAt?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrder;
    hrAcknowledgedByUserId?: Prisma.SortOrder;
    hrAcknowledgedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeCode?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    daysRequested?: Prisma.SortOrder;
    reliefOfficerEmployeeId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    supervisorDecidedByUserId?: Prisma.SortOrder;
    supervisorDecidedAt?: Prisma.SortOrder;
    supervisorNotes?: Prisma.SortOrder;
    hrAcknowledgedByUserId?: Prisma.SortOrder;
    hrAcknowledgedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveApplicationSumOrderByAggregateInput = {
    daysRequested?: Prisma.SortOrder;
};
export type LeaveApplicationCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveApplicationCreateWithoutEmployeeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput | Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
};
export type LeaveApplicationCreateNestedManyWithoutReliefOfficerInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput> | Prisma.LeaveApplicationCreateWithoutReliefOfficerInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput | Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput[];
    createMany?: Prisma.LeaveApplicationCreateManyReliefOfficerInputEnvelope;
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
};
export type LeaveApplicationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveApplicationCreateWithoutEmployeeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput | Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
};
export type LeaveApplicationUncheckedCreateNestedManyWithoutReliefOfficerInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput> | Prisma.LeaveApplicationCreateWithoutReliefOfficerInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput | Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput[];
    createMany?: Prisma.LeaveApplicationCreateManyReliefOfficerInputEnvelope;
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
};
export type LeaveApplicationUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveApplicationCreateWithoutEmployeeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput | Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyEmployeeInputEnvelope;
    set?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    disconnect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    delete?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    update?: Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput | Prisma.LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
};
export type LeaveApplicationUpdateManyWithoutReliefOfficerNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput> | Prisma.LeaveApplicationCreateWithoutReliefOfficerInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput | Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput[];
    upsert?: Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutReliefOfficerInput | Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutReliefOfficerInput[];
    createMany?: Prisma.LeaveApplicationCreateManyReliefOfficerInputEnvelope;
    set?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    disconnect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    delete?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    update?: Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutReliefOfficerInput | Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutReliefOfficerInput[];
    updateMany?: Prisma.LeaveApplicationUpdateManyWithWhereWithoutReliefOfficerInput | Prisma.LeaveApplicationUpdateManyWithWhereWithoutReliefOfficerInput[];
    deleteMany?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
};
export type LeaveApplicationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveApplicationCreateWithoutEmployeeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput | Prisma.LeaveApplicationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyEmployeeInputEnvelope;
    set?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    disconnect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    delete?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    update?: Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput | Prisma.LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
};
export type LeaveApplicationUncheckedUpdateManyWithoutReliefOfficerNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput> | Prisma.LeaveApplicationCreateWithoutReliefOfficerInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput | Prisma.LeaveApplicationCreateOrConnectWithoutReliefOfficerInput[];
    upsert?: Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutReliefOfficerInput | Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutReliefOfficerInput[];
    createMany?: Prisma.LeaveApplicationCreateManyReliefOfficerInputEnvelope;
    set?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    disconnect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    delete?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    update?: Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutReliefOfficerInput | Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutReliefOfficerInput[];
    updateMany?: Prisma.LeaveApplicationUpdateManyWithWhereWithoutReliefOfficerInput | Prisma.LeaveApplicationUpdateManyWithWhereWithoutReliefOfficerInput[];
    deleteMany?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
};
export type LeaveApplicationCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveApplicationCreateWithoutLeaveTypeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
};
export type LeaveApplicationUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveApplicationCreateWithoutLeaveTypeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
};
export type LeaveApplicationUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveApplicationCreateWithoutLeaveTypeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    disconnect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    delete?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    update?: Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
};
export type LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveApplicationCreateWithoutLeaveTypeInput[] | Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveApplicationCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    disconnect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    delete?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    connect?: Prisma.LeaveApplicationWhereUniqueInput | Prisma.LeaveApplicationWhereUniqueInput[];
    update?: Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
};
export type EnumLeaveApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveApplicationStatus;
};
export type LeaveApplicationCreateWithoutEmployeeInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutApplicationsInput;
    reliefOfficer?: Prisma.EmployeeCreateNestedOneWithoutLeaveReliefForInput;
};
export type LeaveApplicationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    leaveTypeCode: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: string | null;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput>;
};
export type LeaveApplicationCreateManyEmployeeInputEnvelope = {
    data: Prisma.LeaveApplicationCreateManyEmployeeInput | Prisma.LeaveApplicationCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type LeaveApplicationCreateWithoutReliefOfficerInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveApplicationsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutApplicationsInput;
};
export type LeaveApplicationUncheckedCreateWithoutReliefOfficerInput = {
    id?: string;
    employeeId: string;
    leaveTypeCode: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationCreateOrConnectWithoutReliefOfficerInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput>;
};
export type LeaveApplicationCreateManyReliefOfficerInputEnvelope = {
    data: Prisma.LeaveApplicationCreateManyReliefOfficerInput | Prisma.LeaveApplicationCreateManyReliefOfficerInput[];
    skipDuplicates?: boolean;
};
export type LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveApplicationUpdateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedCreateWithoutEmployeeInput>;
};
export type LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateWithoutEmployeeInput, Prisma.LeaveApplicationUncheckedUpdateWithoutEmployeeInput>;
};
export type LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.LeaveApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateManyMutationInput, Prisma.LeaveApplicationUncheckedUpdateManyWithoutEmployeeInput>;
};
export type LeaveApplicationScalarWhereInput = {
    AND?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
    OR?: Prisma.LeaveApplicationScalarWhereInput[];
    NOT?: Prisma.LeaveApplicationScalarWhereInput | Prisma.LeaveApplicationScalarWhereInput[];
    id?: Prisma.UuidFilter<"LeaveApplication"> | string;
    employeeId?: Prisma.UuidFilter<"LeaveApplication"> | string;
    leaveTypeCode?: Prisma.StringFilter<"LeaveApplication"> | string;
    startDate?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
    daysRequested?: Prisma.DecimalFilter<"LeaveApplication"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    reason?: Prisma.StringNullableFilter<"LeaveApplication"> | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFilter<"LeaveApplication"> | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    supervisorDecidedAt?: Prisma.DateTimeNullableFilter<"LeaveApplication"> | Date | string | null;
    supervisorNotes?: Prisma.StringNullableFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedByUserId?: Prisma.UuidNullableFilter<"LeaveApplication"> | string | null;
    hrAcknowledgedAt?: Prisma.DateTimeNullableFilter<"LeaveApplication"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LeaveApplication"> | Date | string;
};
export type LeaveApplicationUpsertWithWhereUniqueWithoutReliefOfficerInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveApplicationUpdateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedUpdateWithoutReliefOfficerInput>;
    create: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedCreateWithoutReliefOfficerInput>;
};
export type LeaveApplicationUpdateWithWhereUniqueWithoutReliefOfficerInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateWithoutReliefOfficerInput, Prisma.LeaveApplicationUncheckedUpdateWithoutReliefOfficerInput>;
};
export type LeaveApplicationUpdateManyWithWhereWithoutReliefOfficerInput = {
    where: Prisma.LeaveApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateManyMutationInput, Prisma.LeaveApplicationUncheckedUpdateManyWithoutReliefOfficerInput>;
};
export type LeaveApplicationCreateWithoutLeaveTypeInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveApplicationsInput;
    reliefOfficer?: Prisma.EmployeeCreateNestedOneWithoutLeaveReliefForInput;
};
export type LeaveApplicationUncheckedCreateWithoutLeaveTypeInput = {
    id?: string;
    employeeId: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: string | null;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationCreateOrConnectWithoutLeaveTypeInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveApplicationCreateManyLeaveTypeInputEnvelope = {
    data: Prisma.LeaveApplicationCreateManyLeaveTypeInput | Prisma.LeaveApplicationCreateManyLeaveTypeInput[];
    skipDuplicates?: boolean;
};
export type LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveApplicationUpdateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedUpdateWithoutLeaveTypeInput>;
    create: Prisma.XOR<Prisma.LeaveApplicationCreateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateWithoutLeaveTypeInput, Prisma.LeaveApplicationUncheckedUpdateWithoutLeaveTypeInput>;
};
export type LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: Prisma.LeaveApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateManyMutationInput, Prisma.LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeInput>;
};
export type LeaveApplicationCreateManyEmployeeInput = {
    id?: string;
    leaveTypeCode: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: string | null;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationCreateManyReliefOfficerInput = {
    id?: string;
    employeeId: string;
    leaveTypeCode: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput;
    reliefOfficer?: Prisma.EmployeeUpdateOneWithoutLeaveReliefForNestedInput;
};
export type LeaveApplicationUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationUpdateWithoutReliefOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveApplicationsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput;
};
export type LeaveApplicationUncheckedUpdateWithoutReliefOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationUncheckedUpdateManyWithoutReliefOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationCreateManyLeaveTypeInput = {
    id?: string;
    employeeId: string;
    startDate: Date | string;
    endDate: Date | string;
    daysRequested: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: string | null;
    reason?: string | null;
    status?: $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: string | null;
    supervisorDecidedAt?: Date | string | null;
    supervisorNotes?: string | null;
    hrAcknowledgedByUserId?: string | null;
    hrAcknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type LeaveApplicationUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveApplicationsNestedInput;
    reliefOfficer?: Prisma.EmployeeUpdateOneWithoutLeaveReliefForNestedInput;
};
export type LeaveApplicationUncheckedUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    daysRequested?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reliefOfficerEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveApplicationStatusFieldUpdateOperationsInput | $Enums.LeaveApplicationStatus;
    supervisorDecidedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supervisorDecidedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    supervisorNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hrAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    daysRequested?: boolean;
    reliefOfficerEmployeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    supervisorDecidedByUserId?: boolean;
    supervisorDecidedAt?: boolean;
    supervisorNotes?: boolean;
    hrAcknowledgedByUserId?: boolean;
    hrAcknowledgedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    reliefOfficer?: boolean | Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs>;
}, ExtArgs["result"]["leaveApplication"]>;
export type LeaveApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    daysRequested?: boolean;
    reliefOfficerEmployeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    supervisorDecidedByUserId?: boolean;
    supervisorDecidedAt?: boolean;
    supervisorNotes?: boolean;
    hrAcknowledgedByUserId?: boolean;
    hrAcknowledgedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    reliefOfficer?: boolean | Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs>;
}, ExtArgs["result"]["leaveApplication"]>;
export type LeaveApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    daysRequested?: boolean;
    reliefOfficerEmployeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    supervisorDecidedByUserId?: boolean;
    supervisorDecidedAt?: boolean;
    supervisorNotes?: boolean;
    hrAcknowledgedByUserId?: boolean;
    hrAcknowledgedAt?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    reliefOfficer?: boolean | Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs>;
}, ExtArgs["result"]["leaveApplication"]>;
export type LeaveApplicationSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    leaveTypeCode?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    daysRequested?: boolean;
    reliefOfficerEmployeeId?: boolean;
    reason?: boolean;
    status?: boolean;
    supervisorDecidedByUserId?: boolean;
    supervisorDecidedAt?: boolean;
    supervisorNotes?: boolean;
    hrAcknowledgedByUserId?: boolean;
    hrAcknowledgedAt?: boolean;
    createdAt?: boolean;
};
export type LeaveApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "leaveTypeCode" | "startDate" | "endDate" | "daysRequested" | "reliefOfficerEmployeeId" | "reason" | "status" | "supervisorDecidedByUserId" | "supervisorDecidedAt" | "supervisorNotes" | "hrAcknowledgedByUserId" | "hrAcknowledgedAt" | "createdAt", ExtArgs["result"]["leaveApplication"]>;
export type LeaveApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    reliefOfficer?: boolean | Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs>;
};
export type LeaveApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    reliefOfficer?: boolean | Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs>;
};
export type LeaveApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    reliefOfficer?: boolean | Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs>;
};
export type $LeaveApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveApplication";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        leaveType: Prisma.$LeaveTypePayload<ExtArgs>;
        reliefOfficer: Prisma.$EmployeePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        leaveTypeCode: string;
        startDate: Date;
        endDate: Date;
        daysRequested: runtime.Decimal;
        reliefOfficerEmployeeId: string | null;
        reason: string | null;
        status: $Enums.LeaveApplicationStatus;
        supervisorDecidedByUserId: string | null;
        supervisorDecidedAt: Date | null;
        supervisorNotes: string | null;
        hrAcknowledgedByUserId: string | null;
        hrAcknowledgedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["leaveApplication"]>;
    composites: {};
};
export type LeaveApplicationGetPayload<S extends boolean | null | undefined | LeaveApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload, S>;
export type LeaveApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveApplicationCountAggregateInputType | true;
};
export interface LeaveApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveApplication'];
        meta: {
            name: 'LeaveApplication';
        };
    };
    findUnique<T extends LeaveApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveApplicationCreateArgs>(args: Prisma.SelectSubset<T, LeaveApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveApplicationDeleteArgs>(args: Prisma.SelectSubset<T, LeaveApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveApplicationUpdateArgs>(args: Prisma.SelectSubset<T, LeaveApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveApplicationUpsertArgs>(args: Prisma.SelectSubset<T, LeaveApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveApplicationClient<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveApplicationCountArgs>(args?: Prisma.Subset<T, LeaveApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveApplicationCountAggregateOutputType> : number>;
    aggregate<T extends LeaveApplicationAggregateArgs>(args: Prisma.Subset<T, LeaveApplicationAggregateArgs>): Prisma.PrismaPromise<GetLeaveApplicationAggregateType<T>>;
    groupBy<T extends LeaveApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveApplicationFieldRefs;
}
export interface Prisma__LeaveApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    leaveType<T extends Prisma.LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reliefOfficer<T extends Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveApplication$reliefOfficerArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly employeeId: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly leaveTypeCode: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly startDate: Prisma.FieldRef<"LeaveApplication", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"LeaveApplication", 'DateTime'>;
    readonly daysRequested: Prisma.FieldRef<"LeaveApplication", 'Decimal'>;
    readonly reliefOfficerEmployeeId: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly reason: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly status: Prisma.FieldRef<"LeaveApplication", 'LeaveApplicationStatus'>;
    readonly supervisorDecidedByUserId: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly supervisorDecidedAt: Prisma.FieldRef<"LeaveApplication", 'DateTime'>;
    readonly supervisorNotes: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly hrAcknowledgedByUserId: Prisma.FieldRef<"LeaveApplication", 'String'>;
    readonly hrAcknowledgedAt: Prisma.FieldRef<"LeaveApplication", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LeaveApplication", 'DateTime'>;
}
export type LeaveApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where: Prisma.LeaveApplicationWhereUniqueInput;
};
export type LeaveApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where: Prisma.LeaveApplicationWhereUniqueInput;
};
export type LeaveApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where?: Prisma.LeaveApplicationWhereInput;
    orderBy?: Prisma.LeaveApplicationOrderByWithRelationInput | Prisma.LeaveApplicationOrderByWithRelationInput[];
    cursor?: Prisma.LeaveApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveApplicationScalarFieldEnum | Prisma.LeaveApplicationScalarFieldEnum[];
};
export type LeaveApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where?: Prisma.LeaveApplicationWhereInput;
    orderBy?: Prisma.LeaveApplicationOrderByWithRelationInput | Prisma.LeaveApplicationOrderByWithRelationInput[];
    cursor?: Prisma.LeaveApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveApplicationScalarFieldEnum | Prisma.LeaveApplicationScalarFieldEnum[];
};
export type LeaveApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where?: Prisma.LeaveApplicationWhereInput;
    orderBy?: Prisma.LeaveApplicationOrderByWithRelationInput | Prisma.LeaveApplicationOrderByWithRelationInput[];
    cursor?: Prisma.LeaveApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveApplicationScalarFieldEnum | Prisma.LeaveApplicationScalarFieldEnum[];
};
export type LeaveApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveApplicationCreateInput, Prisma.LeaveApplicationUncheckedCreateInput>;
};
export type LeaveApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveApplicationCreateManyInput | Prisma.LeaveApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    data: Prisma.LeaveApplicationCreateManyInput | Prisma.LeaveApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateInput, Prisma.LeaveApplicationUncheckedUpdateInput>;
    where: Prisma.LeaveApplicationWhereUniqueInput;
};
export type LeaveApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateManyMutationInput, Prisma.LeaveApplicationUncheckedUpdateManyInput>;
    where?: Prisma.LeaveApplicationWhereInput;
    limit?: number;
};
export type LeaveApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveApplicationUpdateManyMutationInput, Prisma.LeaveApplicationUncheckedUpdateManyInput>;
    where?: Prisma.LeaveApplicationWhereInput;
    limit?: number;
    include?: Prisma.LeaveApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where: Prisma.LeaveApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveApplicationCreateInput, Prisma.LeaveApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveApplicationUpdateInput, Prisma.LeaveApplicationUncheckedUpdateInput>;
};
export type LeaveApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where: Prisma.LeaveApplicationWhereUniqueInput;
};
export type LeaveApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveApplicationWhereInput;
    limit?: number;
};
export type LeaveApplication$reliefOfficerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type LeaveApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
};
