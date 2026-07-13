import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeePersonalRecordChangeRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeePersonalRecordChangeRequestPayload>;
export type AggregateEmployeePersonalRecordChangeRequest = {
    _count: EmployeePersonalRecordChangeRequestCountAggregateOutputType | null;
    _min: EmployeePersonalRecordChangeRequestMinAggregateOutputType | null;
    _max: EmployeePersonalRecordChangeRequestMaxAggregateOutputType | null;
};
export type EmployeePersonalRecordChangeRequestMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    proposedMaritalStatus: $Enums.MaritalStatus | null;
    proposedResidentialAddress: string | null;
    proposedNextOfKinName: string | null;
    proposedNextOfKinRelationship: string | null;
    proposedNextOfKinPhone: string | null;
    proposedNextOfKinAddress: string | null;
    status: $Enums.PersonalRecordChangeStatus | null;
    workflowInstanceId: string | null;
    requestedByUserId: string | null;
    createdAt: Date | null;
};
export type EmployeePersonalRecordChangeRequestMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    proposedMaritalStatus: $Enums.MaritalStatus | null;
    proposedResidentialAddress: string | null;
    proposedNextOfKinName: string | null;
    proposedNextOfKinRelationship: string | null;
    proposedNextOfKinPhone: string | null;
    proposedNextOfKinAddress: string | null;
    status: $Enums.PersonalRecordChangeStatus | null;
    workflowInstanceId: string | null;
    requestedByUserId: string | null;
    createdAt: Date | null;
};
export type EmployeePersonalRecordChangeRequestCountAggregateOutputType = {
    id: number;
    employeeId: number;
    proposedMaritalStatus: number;
    proposedResidentialAddress: number;
    proposedNextOfKinName: number;
    proposedNextOfKinRelationship: number;
    proposedNextOfKinPhone: number;
    proposedNextOfKinAddress: number;
    status: number;
    workflowInstanceId: number;
    requestedByUserId: number;
    createdAt: number;
    _all: number;
};
export type EmployeePersonalRecordChangeRequestMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    proposedMaritalStatus?: true;
    proposedResidentialAddress?: true;
    proposedNextOfKinName?: true;
    proposedNextOfKinRelationship?: true;
    proposedNextOfKinPhone?: true;
    proposedNextOfKinAddress?: true;
    status?: true;
    workflowInstanceId?: true;
    requestedByUserId?: true;
    createdAt?: true;
};
export type EmployeePersonalRecordChangeRequestMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    proposedMaritalStatus?: true;
    proposedResidentialAddress?: true;
    proposedNextOfKinName?: true;
    proposedNextOfKinRelationship?: true;
    proposedNextOfKinPhone?: true;
    proposedNextOfKinAddress?: true;
    status?: true;
    workflowInstanceId?: true;
    requestedByUserId?: true;
    createdAt?: true;
};
export type EmployeePersonalRecordChangeRequestCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    proposedMaritalStatus?: true;
    proposedResidentialAddress?: true;
    proposedNextOfKinName?: true;
    proposedNextOfKinRelationship?: true;
    proposedNextOfKinPhone?: true;
    proposedNextOfKinAddress?: true;
    status?: true;
    workflowInstanceId?: true;
    requestedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type EmployeePersonalRecordChangeRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput | Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeePersonalRecordChangeRequestCountAggregateInputType;
    _min?: EmployeePersonalRecordChangeRequestMinAggregateInputType;
    _max?: EmployeePersonalRecordChangeRequestMaxAggregateInputType;
};
export type GetEmployeePersonalRecordChangeRequestAggregateType<T extends EmployeePersonalRecordChangeRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeePersonalRecordChangeRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeePersonalRecordChangeRequest[P]> : Prisma.GetScalarType<T[P], AggregateEmployeePersonalRecordChangeRequest[P]>;
};
export type EmployeePersonalRecordChangeRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordChangeRequestOrderByWithAggregationInput | Prisma.EmployeePersonalRecordChangeRequestOrderByWithAggregationInput[];
    by: Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum[] | Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum;
    having?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeePersonalRecordChangeRequestCountAggregateInputType | true;
    _min?: EmployeePersonalRecordChangeRequestMinAggregateInputType;
    _max?: EmployeePersonalRecordChangeRequestMaxAggregateInputType;
};
export type EmployeePersonalRecordChangeRequestGroupByOutputType = {
    id: string;
    employeeId: string;
    proposedMaritalStatus: $Enums.MaritalStatus | null;
    proposedResidentialAddress: string | null;
    proposedNextOfKinName: string | null;
    proposedNextOfKinRelationship: string | null;
    proposedNextOfKinPhone: string | null;
    proposedNextOfKinAddress: string | null;
    status: $Enums.PersonalRecordChangeStatus;
    workflowInstanceId: string | null;
    requestedByUserId: string;
    createdAt: Date;
    _count: EmployeePersonalRecordChangeRequestCountAggregateOutputType | null;
    _min: EmployeePersonalRecordChangeRequestMinAggregateOutputType | null;
    _max: EmployeePersonalRecordChangeRequestMaxAggregateOutputType | null;
};
export type GetEmployeePersonalRecordChangeRequestGroupByPayload<T extends EmployeePersonalRecordChangeRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeePersonalRecordChangeRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeePersonalRecordChangeRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeePersonalRecordChangeRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeePersonalRecordChangeRequestGroupByOutputType[P]>;
}>>;
export type EmployeePersonalRecordChangeRequestWhereInput = {
    AND?: Prisma.EmployeePersonalRecordChangeRequestWhereInput | Prisma.EmployeePersonalRecordChangeRequestWhereInput[];
    OR?: Prisma.EmployeePersonalRecordChangeRequestWhereInput[];
    NOT?: Prisma.EmployeePersonalRecordChangeRequestWhereInput | Prisma.EmployeePersonalRecordChangeRequestWhereInput[];
    id?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    proposedMaritalStatus?: Prisma.EnumMaritalStatusNullableFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinName?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinRelationship?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinPhone?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    requestedByUserId?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmployeePersonalRecordChangeRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type EmployeePersonalRecordChangeRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedMaritalStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedResidentialAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinName?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinRelationship?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type EmployeePersonalRecordChangeRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.EmployeePersonalRecordChangeRequestWhereInput | Prisma.EmployeePersonalRecordChangeRequestWhereInput[];
    OR?: Prisma.EmployeePersonalRecordChangeRequestWhereInput[];
    NOT?: Prisma.EmployeePersonalRecordChangeRequestWhereInput | Prisma.EmployeePersonalRecordChangeRequestWhereInput[];
    employeeId?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    proposedMaritalStatus?: Prisma.EnumMaritalStatusNullableFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinName?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinRelationship?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinPhone?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.PersonalRecordChangeStatus;
    requestedByUserId?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmployeePersonalRecordChangeRequest"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "workflowInstanceId">;
export type EmployeePersonalRecordChangeRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedMaritalStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedResidentialAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinName?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinRelationship?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedNextOfKinAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeePersonalRecordChangeRequestCountOrderByAggregateInput;
    _max?: Prisma.EmployeePersonalRecordChangeRequestMaxOrderByAggregateInput;
    _min?: Prisma.EmployeePersonalRecordChangeRequestMinOrderByAggregateInput;
};
export type EmployeePersonalRecordChangeRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereWithAggregatesInput | Prisma.EmployeePersonalRecordChangeRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereWithAggregatesInput | Prisma.EmployeePersonalRecordChangeRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string;
    proposedMaritalStatus?: Prisma.EnumMaritalStatusNullableWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinName?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinRelationship?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinPhone?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinAddress?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeePersonalRecordChangeRequest"> | Date | string;
};
export type EmployeePersonalRecordChangeRequestCreateInput = {
    id?: string;
    proposedMaritalStatus?: $Enums.MaritalStatus | null;
    proposedResidentialAddress?: string | null;
    proposedNextOfKinName?: string | null;
    proposedNextOfKinRelationship?: string | null;
    proposedNextOfKinPhone?: string | null;
    proposedNextOfKinAddress?: string | null;
    status?: $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: string | null;
    requestedByUserId: string;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutPersonalRecordChangeRequestsInput;
};
export type EmployeePersonalRecordChangeRequestUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    proposedMaritalStatus?: $Enums.MaritalStatus | null;
    proposedResidentialAddress?: string | null;
    proposedNextOfKinName?: string | null;
    proposedNextOfKinRelationship?: string | null;
    proposedNextOfKinPhone?: string | null;
    proposedNextOfKinAddress?: string | null;
    status?: $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: string | null;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EmployeePersonalRecordChangeRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedMaritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFieldUpdateOperationsInput | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPersonalRecordChangeRequestsNestedInput;
};
export type EmployeePersonalRecordChangeRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedMaritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFieldUpdateOperationsInput | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordChangeRequestCreateManyInput = {
    id?: string;
    employeeId: string;
    proposedMaritalStatus?: $Enums.MaritalStatus | null;
    proposedResidentialAddress?: string | null;
    proposedNextOfKinName?: string | null;
    proposedNextOfKinRelationship?: string | null;
    proposedNextOfKinPhone?: string | null;
    proposedNextOfKinAddress?: string | null;
    status?: $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: string | null;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EmployeePersonalRecordChangeRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedMaritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFieldUpdateOperationsInput | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordChangeRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedMaritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFieldUpdateOperationsInput | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordChangeRequestListRelationFilter = {
    every?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    some?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    none?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
};
export type EmployeePersonalRecordChangeRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeePersonalRecordChangeRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedMaritalStatus?: Prisma.SortOrder;
    proposedResidentialAddress?: Prisma.SortOrder;
    proposedNextOfKinName?: Prisma.SortOrder;
    proposedNextOfKinRelationship?: Prisma.SortOrder;
    proposedNextOfKinPhone?: Prisma.SortOrder;
    proposedNextOfKinAddress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeePersonalRecordChangeRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedMaritalStatus?: Prisma.SortOrder;
    proposedResidentialAddress?: Prisma.SortOrder;
    proposedNextOfKinName?: Prisma.SortOrder;
    proposedNextOfKinRelationship?: Prisma.SortOrder;
    proposedNextOfKinPhone?: Prisma.SortOrder;
    proposedNextOfKinAddress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeePersonalRecordChangeRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    proposedMaritalStatus?: Prisma.SortOrder;
    proposedResidentialAddress?: Prisma.SortOrder;
    proposedNextOfKinName?: Prisma.SortOrder;
    proposedNextOfKinRelationship?: Prisma.SortOrder;
    proposedNextOfKinPhone?: Prisma.SortOrder;
    proposedNextOfKinAddress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeePersonalRecordChangeRequestCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeePersonalRecordChangeRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
};
export type EmployeePersonalRecordChangeRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeePersonalRecordChangeRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
};
export type EmployeePersonalRecordChangeRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeePersonalRecordChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeePersonalRecordChangeRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    delete?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    connect?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    update?: Prisma.EmployeePersonalRecordChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeePersonalRecordChangeRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput | Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput[];
};
export type EmployeePersonalRecordChangeRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput[] | Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeePersonalRecordChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeePersonalRecordChangeRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    delete?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    connect?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput | Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput[];
    update?: Prisma.EmployeePersonalRecordChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeePersonalRecordChangeRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput | Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput[];
};
export type EnumPersonalRecordChangeStatusFieldUpdateOperationsInput = {
    set?: $Enums.PersonalRecordChangeStatus;
};
export type EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput = {
    id?: string;
    proposedMaritalStatus?: $Enums.MaritalStatus | null;
    proposedResidentialAddress?: string | null;
    proposedNextOfKinName?: string | null;
    proposedNextOfKinRelationship?: string | null;
    proposedNextOfKinPhone?: string | null;
    proposedNextOfKinAddress?: string | null;
    status?: $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: string | null;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    proposedMaritalStatus?: $Enums.MaritalStatus | null;
    proposedResidentialAddress?: string | null;
    proposedNextOfKinName?: string | null;
    proposedNextOfKinRelationship?: string | null;
    proposedNextOfKinPhone?: string | null;
    proposedNextOfKinAddress?: string | null;
    status?: $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: string | null;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EmployeePersonalRecordChangeRequestCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeePersonalRecordChangeRequestCreateManyEmployeeInputEnvelope = {
    data: Prisma.EmployeePersonalRecordChangeRequestCreateManyEmployeeInput | Prisma.EmployeePersonalRecordChangeRequestCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type EmployeePersonalRecordChangeRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestUpdateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeePersonalRecordChangeRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestUpdateWithoutEmployeeInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeePersonalRecordChangeRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestUpdateManyMutationInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedUpdateManyWithoutEmployeeInput>;
};
export type EmployeePersonalRecordChangeRequestScalarWhereInput = {
    AND?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput | Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput[];
    OR?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput[];
    NOT?: Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput | Prisma.EmployeePersonalRecordChangeRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    proposedMaritalStatus?: Prisma.EnumMaritalStatusNullableFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinName?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinRelationship?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinPhone?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    proposedNextOfKinAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFilter<"EmployeePersonalRecordChangeRequest"> | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.StringNullableFilter<"EmployeePersonalRecordChangeRequest"> | string | null;
    requestedByUserId?: Prisma.UuidFilter<"EmployeePersonalRecordChangeRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmployeePersonalRecordChangeRequest"> | Date | string;
};
export type EmployeePersonalRecordChangeRequestCreateManyEmployeeInput = {
    id?: string;
    proposedMaritalStatus?: $Enums.MaritalStatus | null;
    proposedResidentialAddress?: string | null;
    proposedNextOfKinName?: string | null;
    proposedNextOfKinRelationship?: string | null;
    proposedNextOfKinPhone?: string | null;
    proposedNextOfKinAddress?: string | null;
    status?: $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: string | null;
    requestedByUserId: string;
    createdAt?: Date | string;
};
export type EmployeePersonalRecordChangeRequestUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedMaritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFieldUpdateOperationsInput | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordChangeRequestUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedMaritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFieldUpdateOperationsInput | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordChangeRequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedMaritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    proposedResidentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedNextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPersonalRecordChangeStatusFieldUpdateOperationsInput | $Enums.PersonalRecordChangeStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordChangeRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    proposedMaritalStatus?: boolean;
    proposedResidentialAddress?: boolean;
    proposedNextOfKinName?: boolean;
    proposedNextOfKinRelationship?: boolean;
    proposedNextOfKinPhone?: boolean;
    proposedNextOfKinAddress?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeePersonalRecordChangeRequest"]>;
export type EmployeePersonalRecordChangeRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    proposedMaritalStatus?: boolean;
    proposedResidentialAddress?: boolean;
    proposedNextOfKinName?: boolean;
    proposedNextOfKinRelationship?: boolean;
    proposedNextOfKinPhone?: boolean;
    proposedNextOfKinAddress?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeePersonalRecordChangeRequest"]>;
export type EmployeePersonalRecordChangeRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    proposedMaritalStatus?: boolean;
    proposedResidentialAddress?: boolean;
    proposedNextOfKinName?: boolean;
    proposedNextOfKinRelationship?: boolean;
    proposedNextOfKinPhone?: boolean;
    proposedNextOfKinAddress?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeePersonalRecordChangeRequest"]>;
export type EmployeePersonalRecordChangeRequestSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    proposedMaritalStatus?: boolean;
    proposedResidentialAddress?: boolean;
    proposedNextOfKinName?: boolean;
    proposedNextOfKinRelationship?: boolean;
    proposedNextOfKinPhone?: boolean;
    proposedNextOfKinAddress?: boolean;
    status?: boolean;
    workflowInstanceId?: boolean;
    requestedByUserId?: boolean;
    createdAt?: boolean;
};
export type EmployeePersonalRecordChangeRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "proposedMaritalStatus" | "proposedResidentialAddress" | "proposedNextOfKinName" | "proposedNextOfKinRelationship" | "proposedNextOfKinPhone" | "proposedNextOfKinAddress" | "status" | "workflowInstanceId" | "requestedByUserId" | "createdAt", ExtArgs["result"]["employeePersonalRecordChangeRequest"]>;
export type EmployeePersonalRecordChangeRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeePersonalRecordChangeRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeePersonalRecordChangeRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $EmployeePersonalRecordChangeRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeePersonalRecordChangeRequest";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        proposedMaritalStatus: $Enums.MaritalStatus | null;
        proposedResidentialAddress: string | null;
        proposedNextOfKinName: string | null;
        proposedNextOfKinRelationship: string | null;
        proposedNextOfKinPhone: string | null;
        proposedNextOfKinAddress: string | null;
        status: $Enums.PersonalRecordChangeStatus;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["employeePersonalRecordChangeRequest"]>;
    composites: {};
};
export type EmployeePersonalRecordChangeRequestGetPayload<S extends boolean | null | undefined | EmployeePersonalRecordChangeRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload, S>;
export type EmployeePersonalRecordChangeRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeePersonalRecordChangeRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeePersonalRecordChangeRequestCountAggregateInputType | true;
};
export interface EmployeePersonalRecordChangeRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeePersonalRecordChangeRequest'];
        meta: {
            name: 'EmployeePersonalRecordChangeRequest';
        };
    };
    findUnique<T extends EmployeePersonalRecordChangeRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeePersonalRecordChangeRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeePersonalRecordChangeRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeePersonalRecordChangeRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeePersonalRecordChangeRequestFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeePersonalRecordChangeRequestCreateArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeePersonalRecordChangeRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeePersonalRecordChangeRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeePersonalRecordChangeRequestDeleteArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeePersonalRecordChangeRequestUpdateArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeePersonalRecordChangeRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeePersonalRecordChangeRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeePersonalRecordChangeRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeePersonalRecordChangeRequestUpsertArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordChangeRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordChangeRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeePersonalRecordChangeRequestCountArgs>(args?: Prisma.Subset<T, EmployeePersonalRecordChangeRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeePersonalRecordChangeRequestCountAggregateOutputType> : number>;
    aggregate<T extends EmployeePersonalRecordChangeRequestAggregateArgs>(args: Prisma.Subset<T, EmployeePersonalRecordChangeRequestAggregateArgs>): Prisma.PrismaPromise<GetEmployeePersonalRecordChangeRequestAggregateType<T>>;
    groupBy<T extends EmployeePersonalRecordChangeRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeePersonalRecordChangeRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeePersonalRecordChangeRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeePersonalRecordChangeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeePersonalRecordChangeRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeePersonalRecordChangeRequestFieldRefs;
}
export interface Prisma__EmployeePersonalRecordChangeRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeePersonalRecordChangeRequestFieldRefs {
    readonly id: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly employeeId: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly proposedMaritalStatus: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'MaritalStatus'>;
    readonly proposedResidentialAddress: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly proposedNextOfKinName: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly proposedNextOfKinRelationship: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly proposedNextOfKinPhone: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly proposedNextOfKinAddress: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly status: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'PersonalRecordChangeStatus'>;
    readonly workflowInstanceId: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly requestedByUserId: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmployeePersonalRecordChangeRequest", 'DateTime'>;
}
export type EmployeePersonalRecordChangeRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
};
export type EmployeePersonalRecordChangeRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
};
export type EmployeePersonalRecordChangeRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput | Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum | Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum[];
};
export type EmployeePersonalRecordChangeRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput | Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum | Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum[];
};
export type EmployeePersonalRecordChangeRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput | Prisma.EmployeePersonalRecordChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum | Prisma.EmployeePersonalRecordChangeRequestScalarFieldEnum[];
};
export type EmployeePersonalRecordChangeRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateInput>;
};
export type EmployeePersonalRecordChangeRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeePersonalRecordChangeRequestCreateManyInput | Prisma.EmployeePersonalRecordChangeRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeePersonalRecordChangeRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    data: Prisma.EmployeePersonalRecordChangeRequestCreateManyInput | Prisma.EmployeePersonalRecordChangeRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeePersonalRecordChangeRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeePersonalRecordChangeRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestUpdateInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedUpdateInput>;
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
};
export type EmployeePersonalRecordChangeRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestUpdateManyMutationInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedUpdateManyInput>;
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    limit?: number;
};
export type EmployeePersonalRecordChangeRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestUpdateManyMutationInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedUpdateManyInput>;
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    limit?: number;
    include?: Prisma.EmployeePersonalRecordChangeRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeePersonalRecordChangeRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestCreateInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeePersonalRecordChangeRequestUpdateInput, Prisma.EmployeePersonalRecordChangeRequestUncheckedUpdateInput>;
};
export type EmployeePersonalRecordChangeRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordChangeRequestWhereUniqueInput;
};
export type EmployeePersonalRecordChangeRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeePersonalRecordChangeRequestWhereInput;
    limit?: number;
};
export type EmployeePersonalRecordChangeRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordChangeRequestInclude<ExtArgs> | null;
};
