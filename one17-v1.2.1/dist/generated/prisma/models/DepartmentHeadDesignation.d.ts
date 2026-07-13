import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepartmentHeadDesignationModel = runtime.Types.Result.DefaultSelection<Prisma.$DepartmentHeadDesignationPayload>;
export type AggregateDepartmentHeadDesignation = {
    _count: DepartmentHeadDesignationCountAggregateOutputType | null;
    _min: DepartmentHeadDesignationMinAggregateOutputType | null;
    _max: DepartmentHeadDesignationMaxAggregateOutputType | null;
};
export type DepartmentHeadDesignationMinAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    employeeId: string | null;
    status: $Enums.DepartmentHeadDesignationStatus | null;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type DepartmentHeadDesignationMaxAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    employeeId: string | null;
    status: $Enums.DepartmentHeadDesignationStatus | null;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type DepartmentHeadDesignationCountAggregateOutputType = {
    id: number;
    orgUnitCode: number;
    employeeId: number;
    status: number;
    effectiveFrom: number;
    effectiveTo: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type DepartmentHeadDesignationMinAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    employeeId?: true;
    status?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type DepartmentHeadDesignationMaxAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    employeeId?: true;
    status?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type DepartmentHeadDesignationCountAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    employeeId?: true;
    status?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type DepartmentHeadDesignationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    orderBy?: Prisma.DepartmentHeadDesignationOrderByWithRelationInput | Prisma.DepartmentHeadDesignationOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepartmentHeadDesignationCountAggregateInputType;
    _min?: DepartmentHeadDesignationMinAggregateInputType;
    _max?: DepartmentHeadDesignationMaxAggregateInputType;
};
export type GetDepartmentHeadDesignationAggregateType<T extends DepartmentHeadDesignationAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartmentHeadDesignation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepartmentHeadDesignation[P]> : Prisma.GetScalarType<T[P], AggregateDepartmentHeadDesignation[P]>;
};
export type DepartmentHeadDesignationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    orderBy?: Prisma.DepartmentHeadDesignationOrderByWithAggregationInput | Prisma.DepartmentHeadDesignationOrderByWithAggregationInput[];
    by: Prisma.DepartmentHeadDesignationScalarFieldEnum[] | Prisma.DepartmentHeadDesignationScalarFieldEnum;
    having?: Prisma.DepartmentHeadDesignationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentHeadDesignationCountAggregateInputType | true;
    _min?: DepartmentHeadDesignationMinAggregateInputType;
    _max?: DepartmentHeadDesignationMaxAggregateInputType;
};
export type DepartmentHeadDesignationGroupByOutputType = {
    id: string;
    orgUnitCode: string;
    employeeId: string;
    status: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
    proposedByUserId: string;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: DepartmentHeadDesignationCountAggregateOutputType | null;
    _min: DepartmentHeadDesignationMinAggregateOutputType | null;
    _max: DepartmentHeadDesignationMaxAggregateOutputType | null;
};
export type GetDepartmentHeadDesignationGroupByPayload<T extends DepartmentHeadDesignationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepartmentHeadDesignationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepartmentHeadDesignationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepartmentHeadDesignationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepartmentHeadDesignationGroupByOutputType[P]>;
}>>;
export type DepartmentHeadDesignationWhereInput = {
    AND?: Prisma.DepartmentHeadDesignationWhereInput | Prisma.DepartmentHeadDesignationWhereInput[];
    OR?: Prisma.DepartmentHeadDesignationWhereInput[];
    NOT?: Prisma.DepartmentHeadDesignationWhereInput | Prisma.DepartmentHeadDesignationWhereInput[];
    id?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    orgUnitCode?: Prisma.StringFilter<"DepartmentHeadDesignation"> | string;
    employeeId?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFilter<"DepartmentHeadDesignation"> | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"DepartmentHeadDesignation"> | Date | string | null;
    effectiveTo?: Prisma.DateTimeNullableFilter<"DepartmentHeadDesignation"> | Date | string | null;
    proposedByUserId?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"DepartmentHeadDesignation"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"DepartmentHeadDesignation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DepartmentHeadDesignation"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type DepartmentHeadDesignationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    orgUnit?: Prisma.OrgUnitOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    proposedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type DepartmentHeadDesignationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.DepartmentHeadDesignationWhereInput | Prisma.DepartmentHeadDesignationWhereInput[];
    OR?: Prisma.DepartmentHeadDesignationWhereInput[];
    NOT?: Prisma.DepartmentHeadDesignationWhereInput | Prisma.DepartmentHeadDesignationWhereInput[];
    orgUnitCode?: Prisma.StringFilter<"DepartmentHeadDesignation"> | string;
    employeeId?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFilter<"DepartmentHeadDesignation"> | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"DepartmentHeadDesignation"> | Date | string | null;
    effectiveTo?: Prisma.DateTimeNullableFilter<"DepartmentHeadDesignation"> | Date | string | null;
    proposedByUserId?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"DepartmentHeadDesignation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DepartmentHeadDesignation"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type DepartmentHeadDesignationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DepartmentHeadDesignationCountOrderByAggregateInput;
    _max?: Prisma.DepartmentHeadDesignationMaxOrderByAggregateInput;
    _min?: Prisma.DepartmentHeadDesignationMinOrderByAggregateInput;
};
export type DepartmentHeadDesignationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepartmentHeadDesignationScalarWhereWithAggregatesInput | Prisma.DepartmentHeadDesignationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepartmentHeadDesignationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepartmentHeadDesignationScalarWhereWithAggregatesInput | Prisma.DepartmentHeadDesignationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DepartmentHeadDesignation"> | string;
    orgUnitCode?: Prisma.StringWithAggregatesFilter<"DepartmentHeadDesignation"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"DepartmentHeadDesignation"> | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusWithAggregatesFilter<"DepartmentHeadDesignation"> | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"DepartmentHeadDesignation"> | Date | string | null;
    effectiveTo?: Prisma.DateTimeNullableWithAggregatesFilter<"DepartmentHeadDesignation"> | Date | string | null;
    proposedByUserId?: Prisma.UuidWithAggregatesFilter<"DepartmentHeadDesignation"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"DepartmentHeadDesignation"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"DepartmentHeadDesignation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DepartmentHeadDesignation"> | Date | string;
};
export type DepartmentHeadDesignationCreateInput = {
    id?: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsApprovedInput;
};
export type DepartmentHeadDesignationUncheckedCreateInput = {
    id?: string;
    orgUnitCode: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutDepartmentHeadDesignationsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutDepartmentHeadDesignationsApprovedNestedInput;
};
export type DepartmentHeadDesignationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationCreateManyInput = {
    id?: string;
    orgUnitCode: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationListRelationFilter = {
    every?: Prisma.DepartmentHeadDesignationWhereInput;
    some?: Prisma.DepartmentHeadDesignationWhereInput;
    none?: Prisma.DepartmentHeadDesignationWhereInput;
};
export type DepartmentHeadDesignationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DepartmentHeadDesignationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepartmentHeadDesignationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepartmentHeadDesignationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DepartmentHeadDesignationCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyProposedByInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyApprovedByInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationUncheckedCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyProposedByInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyApprovedByInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutProposedByInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyProposedByInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutProposedByInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutProposedByInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type DepartmentHeadDesignationUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyApprovedByInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutApprovedByInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutProposedByInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyProposedByInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutProposedByInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutProposedByInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput> | Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyApprovedByInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutApprovedByInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type DepartmentHeadDesignationCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput> | Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationUncheckedCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput> | Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput> | Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyOrgUnitInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput> | Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyOrgUnitInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutOrgUnitInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type DepartmentHeadDesignationCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
};
export type DepartmentHeadDesignationUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyEmployeeInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutEmployeeInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput[] | Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput | Prisma.DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.DepartmentHeadDesignationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.DepartmentHeadDesignationCreateManyEmployeeInputEnvelope;
    set?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    disconnect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    delete?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    connect?: Prisma.DepartmentHeadDesignationWhereUniqueInput | Prisma.DepartmentHeadDesignationWhereUniqueInput[];
    update?: Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.DepartmentHeadDesignationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutEmployeeInput | Prisma.DepartmentHeadDesignationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
};
export type EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput = {
    set?: $Enums.DepartmentHeadDesignationStatus;
};
export type DepartmentHeadDesignationCreateWithoutProposedByInput = {
    id?: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsApprovedInput;
};
export type DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput = {
    id?: string;
    orgUnitCode: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationCreateOrConnectWithoutProposedByInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput>;
};
export type DepartmentHeadDesignationCreateManyProposedByInputEnvelope = {
    data: Prisma.DepartmentHeadDesignationCreateManyProposedByInput | Prisma.DepartmentHeadDesignationCreateManyProposedByInput[];
    skipDuplicates?: boolean;
};
export type DepartmentHeadDesignationCreateWithoutApprovedByInput = {
    id?: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsProposedInput;
};
export type DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    orgUnitCode: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput>;
};
export type DepartmentHeadDesignationCreateManyApprovedByInputEnvelope = {
    data: Prisma.DepartmentHeadDesignationCreateManyApprovedByInput | Prisma.DepartmentHeadDesignationCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type DepartmentHeadDesignationUpsertWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutProposedByInput>;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutProposedByInput>;
};
export type DepartmentHeadDesignationUpdateWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutProposedByInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutProposedByInput>;
};
export type DepartmentHeadDesignationUpdateManyWithWhereWithoutProposedByInput = {
    where: Prisma.DepartmentHeadDesignationScalarWhereInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateManyMutationInput, Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutProposedByInput>;
};
export type DepartmentHeadDesignationScalarWhereInput = {
    AND?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
    OR?: Prisma.DepartmentHeadDesignationScalarWhereInput[];
    NOT?: Prisma.DepartmentHeadDesignationScalarWhereInput | Prisma.DepartmentHeadDesignationScalarWhereInput[];
    id?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    orgUnitCode?: Prisma.StringFilter<"DepartmentHeadDesignation"> | string;
    employeeId?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFilter<"DepartmentHeadDesignation"> | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"DepartmentHeadDesignation"> | Date | string | null;
    effectiveTo?: Prisma.DateTimeNullableFilter<"DepartmentHeadDesignation"> | Date | string | null;
    proposedByUserId?: Prisma.UuidFilter<"DepartmentHeadDesignation"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"DepartmentHeadDesignation"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"DepartmentHeadDesignation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DepartmentHeadDesignation"> | Date | string;
};
export type DepartmentHeadDesignationUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutApprovedByInput>;
};
export type DepartmentHeadDesignationUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutApprovedByInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutApprovedByInput>;
};
export type DepartmentHeadDesignationUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.DepartmentHeadDesignationScalarWhereInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateManyMutationInput, Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutApprovedByInput>;
};
export type DepartmentHeadDesignationCreateWithoutOrgUnitInput = {
    id?: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsApprovedInput;
};
export type DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput = {
    id?: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationCreateOrConnectWithoutOrgUnitInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput>;
};
export type DepartmentHeadDesignationCreateManyOrgUnitInputEnvelope = {
    data: Prisma.DepartmentHeadDesignationCreateManyOrgUnitInput | Prisma.DepartmentHeadDesignationCreateManyOrgUnitInput[];
    skipDuplicates?: boolean;
};
export type DepartmentHeadDesignationUpsertWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutOrgUnitInput>;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutOrgUnitInput>;
};
export type DepartmentHeadDesignationUpdateWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutOrgUnitInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutOrgUnitInput>;
};
export type DepartmentHeadDesignationUpdateManyWithWhereWithoutOrgUnitInput = {
    where: Prisma.DepartmentHeadDesignationScalarWhereInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateManyMutationInput, Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitInput>;
};
export type DepartmentHeadDesignationCreateWithoutEmployeeInput = {
    id?: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutDepartmentHeadDesignationsInput;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutDepartmentHeadDesignationsApprovedInput;
};
export type DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    orgUnitCode: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput>;
};
export type DepartmentHeadDesignationCreateManyEmployeeInputEnvelope = {
    data: Prisma.DepartmentHeadDesignationCreateManyEmployeeInput | Prisma.DepartmentHeadDesignationCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type DepartmentHeadDesignationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedCreateWithoutEmployeeInput>;
};
export type DepartmentHeadDesignationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateWithoutEmployeeInput, Prisma.DepartmentHeadDesignationUncheckedUpdateWithoutEmployeeInput>;
};
export type DepartmentHeadDesignationUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.DepartmentHeadDesignationScalarWhereInput;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateManyMutationInput, Prisma.DepartmentHeadDesignationUncheckedUpdateManyWithoutEmployeeInput>;
};
export type DepartmentHeadDesignationCreateManyProposedByInput = {
    id?: string;
    orgUnitCode: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationCreateManyApprovedByInput = {
    id?: string;
    orgUnitCode: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutDepartmentHeadDesignationsApprovedNestedInput;
};
export type DepartmentHeadDesignationUncheckedUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutDepartmentHeadDesignationsProposedNestedInput;
};
export type DepartmentHeadDesignationUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationCreateManyOrgUnitInput = {
    id?: string;
    employeeId: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutDepartmentHeadDesignationsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutDepartmentHeadDesignationsApprovedNestedInput;
};
export type DepartmentHeadDesignationUncheckedUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationCreateManyEmployeeInput = {
    id?: string;
    orgUnitCode: string;
    status?: $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Date | string | null;
    effectiveTo?: Date | string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DepartmentHeadDesignationUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutDepartmentHeadDesignationsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutDepartmentHeadDesignationsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutDepartmentHeadDesignationsApprovedNestedInput;
};
export type DepartmentHeadDesignationUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartmentHeadDesignationStatusFieldUpdateOperationsInput | $Enums.DepartmentHeadDesignationStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentHeadDesignationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    employeeId?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["departmentHeadDesignation"]>;
export type DepartmentHeadDesignationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    employeeId?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["departmentHeadDesignation"]>;
export type DepartmentHeadDesignationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    employeeId?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["departmentHeadDesignation"]>;
export type DepartmentHeadDesignationSelectScalar = {
    id?: boolean;
    orgUnitCode?: boolean;
    employeeId?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type DepartmentHeadDesignationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orgUnitCode" | "employeeId" | "status" | "effectiveFrom" | "effectiveTo" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["departmentHeadDesignation"]>;
export type DepartmentHeadDesignationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs>;
};
export type DepartmentHeadDesignationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs>;
};
export type DepartmentHeadDesignationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs>;
};
export type $DepartmentHeadDesignationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DepartmentHeadDesignation";
    objects: {
        orgUnit: Prisma.$OrgUnitPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
        proposedBy: Prisma.$AppUserPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orgUnitCode: string;
        employeeId: string;
        status: $Enums.DepartmentHeadDesignationStatus;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["departmentHeadDesignation"]>;
    composites: {};
};
export type DepartmentHeadDesignationGetPayload<S extends boolean | null | undefined | DepartmentHeadDesignationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload, S>;
export type DepartmentHeadDesignationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepartmentHeadDesignationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepartmentHeadDesignationCountAggregateInputType | true;
};
export interface DepartmentHeadDesignationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DepartmentHeadDesignation'];
        meta: {
            name: 'DepartmentHeadDesignation';
        };
    };
    findUnique<T extends DepartmentHeadDesignationFindUniqueArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepartmentHeadDesignationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepartmentHeadDesignationFindFirstArgs>(args?: Prisma.SelectSubset<T, DepartmentHeadDesignationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepartmentHeadDesignationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepartmentHeadDesignationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepartmentHeadDesignationFindManyArgs>(args?: Prisma.SelectSubset<T, DepartmentHeadDesignationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepartmentHeadDesignationCreateArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationCreateArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepartmentHeadDesignationCreateManyArgs>(args?: Prisma.SelectSubset<T, DepartmentHeadDesignationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepartmentHeadDesignationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepartmentHeadDesignationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepartmentHeadDesignationDeleteArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationDeleteArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepartmentHeadDesignationUpdateArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationUpdateArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepartmentHeadDesignationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepartmentHeadDesignationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepartmentHeadDesignationUpdateManyArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepartmentHeadDesignationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepartmentHeadDesignationUpsertArgs>(args: Prisma.SelectSubset<T, DepartmentHeadDesignationUpsertArgs<ExtArgs>>): Prisma.Prisma__DepartmentHeadDesignationClient<runtime.Types.Result.GetResult<Prisma.$DepartmentHeadDesignationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepartmentHeadDesignationCountArgs>(args?: Prisma.Subset<T, DepartmentHeadDesignationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepartmentHeadDesignationCountAggregateOutputType> : number>;
    aggregate<T extends DepartmentHeadDesignationAggregateArgs>(args: Prisma.Subset<T, DepartmentHeadDesignationAggregateArgs>): Prisma.PrismaPromise<GetDepartmentHeadDesignationAggregateType<T>>;
    groupBy<T extends DepartmentHeadDesignationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepartmentHeadDesignationGroupByArgs['orderBy'];
    } : {
        orderBy?: DepartmentHeadDesignationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepartmentHeadDesignationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentHeadDesignationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepartmentHeadDesignationFieldRefs;
}
export interface Prisma__DepartmentHeadDesignationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orgUnit<T extends Prisma.OrgUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proposedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentHeadDesignation$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepartmentHeadDesignationFieldRefs {
    readonly id: Prisma.FieldRef<"DepartmentHeadDesignation", 'String'>;
    readonly orgUnitCode: Prisma.FieldRef<"DepartmentHeadDesignation", 'String'>;
    readonly employeeId: Prisma.FieldRef<"DepartmentHeadDesignation", 'String'>;
    readonly status: Prisma.FieldRef<"DepartmentHeadDesignation", 'DepartmentHeadDesignationStatus'>;
    readonly effectiveFrom: Prisma.FieldRef<"DepartmentHeadDesignation", 'DateTime'>;
    readonly effectiveTo: Prisma.FieldRef<"DepartmentHeadDesignation", 'DateTime'>;
    readonly proposedByUserId: Prisma.FieldRef<"DepartmentHeadDesignation", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"DepartmentHeadDesignation", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"DepartmentHeadDesignation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DepartmentHeadDesignation", 'DateTime'>;
}
export type DepartmentHeadDesignationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
};
export type DepartmentHeadDesignationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
};
export type DepartmentHeadDesignationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    orderBy?: Prisma.DepartmentHeadDesignationOrderByWithRelationInput | Prisma.DepartmentHeadDesignationOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentHeadDesignationScalarFieldEnum | Prisma.DepartmentHeadDesignationScalarFieldEnum[];
};
export type DepartmentHeadDesignationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    orderBy?: Prisma.DepartmentHeadDesignationOrderByWithRelationInput | Prisma.DepartmentHeadDesignationOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentHeadDesignationScalarFieldEnum | Prisma.DepartmentHeadDesignationScalarFieldEnum[];
};
export type DepartmentHeadDesignationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    orderBy?: Prisma.DepartmentHeadDesignationOrderByWithRelationInput | Prisma.DepartmentHeadDesignationOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentHeadDesignationScalarFieldEnum | Prisma.DepartmentHeadDesignationScalarFieldEnum[];
};
export type DepartmentHeadDesignationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateInput, Prisma.DepartmentHeadDesignationUncheckedCreateInput>;
};
export type DepartmentHeadDesignationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepartmentHeadDesignationCreateManyInput | Prisma.DepartmentHeadDesignationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentHeadDesignationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    data: Prisma.DepartmentHeadDesignationCreateManyInput | Prisma.DepartmentHeadDesignationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DepartmentHeadDesignationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DepartmentHeadDesignationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateInput, Prisma.DepartmentHeadDesignationUncheckedUpdateInput>;
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
};
export type DepartmentHeadDesignationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateManyMutationInput, Prisma.DepartmentHeadDesignationUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    limit?: number;
};
export type DepartmentHeadDesignationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateManyMutationInput, Prisma.DepartmentHeadDesignationUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    limit?: number;
    include?: Prisma.DepartmentHeadDesignationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DepartmentHeadDesignationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentHeadDesignationCreateInput, Prisma.DepartmentHeadDesignationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepartmentHeadDesignationUpdateInput, Prisma.DepartmentHeadDesignationUncheckedUpdateInput>;
};
export type DepartmentHeadDesignationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
    where: Prisma.DepartmentHeadDesignationWhereUniqueInput;
};
export type DepartmentHeadDesignationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentHeadDesignationWhereInput;
    limit?: number;
};
export type DepartmentHeadDesignation$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type DepartmentHeadDesignationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentHeadDesignationSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentHeadDesignationOmit<ExtArgs> | null;
    include?: Prisma.DepartmentHeadDesignationInclude<ExtArgs> | null;
};
