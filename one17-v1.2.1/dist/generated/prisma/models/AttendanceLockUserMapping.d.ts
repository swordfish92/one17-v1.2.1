import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceLockUserMappingModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceLockUserMappingPayload>;
export type AggregateAttendanceLockUserMapping = {
    _count: AttendanceLockUserMappingCountAggregateOutputType | null;
    _min: AttendanceLockUserMappingMinAggregateOutputType | null;
    _max: AttendanceLockUserMappingMaxAggregateOutputType | null;
};
export type AttendanceLockUserMappingMinAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    deviceUserRef: string | null;
    employeeId: string | null;
    mappedByUserId: string | null;
    createdAt: Date | null;
};
export type AttendanceLockUserMappingMaxAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    deviceUserRef: string | null;
    employeeId: string | null;
    mappedByUserId: string | null;
    createdAt: Date | null;
};
export type AttendanceLockUserMappingCountAggregateOutputType = {
    id: number;
    providerId: number;
    deviceUserRef: number;
    employeeId: number;
    mappedByUserId: number;
    createdAt: number;
    _all: number;
};
export type AttendanceLockUserMappingMinAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceUserRef?: true;
    employeeId?: true;
    mappedByUserId?: true;
    createdAt?: true;
};
export type AttendanceLockUserMappingMaxAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceUserRef?: true;
    employeeId?: true;
    mappedByUserId?: true;
    createdAt?: true;
};
export type AttendanceLockUserMappingCountAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceUserRef?: true;
    employeeId?: true;
    mappedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendanceLockUserMappingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    orderBy?: Prisma.AttendanceLockUserMappingOrderByWithRelationInput | Prisma.AttendanceLockUserMappingOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceLockUserMappingCountAggregateInputType;
    _min?: AttendanceLockUserMappingMinAggregateInputType;
    _max?: AttendanceLockUserMappingMaxAggregateInputType;
};
export type GetAttendanceLockUserMappingAggregateType<T extends AttendanceLockUserMappingAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceLockUserMapping]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceLockUserMapping[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceLockUserMapping[P]>;
};
export type AttendanceLockUserMappingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    orderBy?: Prisma.AttendanceLockUserMappingOrderByWithAggregationInput | Prisma.AttendanceLockUserMappingOrderByWithAggregationInput[];
    by: Prisma.AttendanceLockUserMappingScalarFieldEnum[] | Prisma.AttendanceLockUserMappingScalarFieldEnum;
    having?: Prisma.AttendanceLockUserMappingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceLockUserMappingCountAggregateInputType | true;
    _min?: AttendanceLockUserMappingMinAggregateInputType;
    _max?: AttendanceLockUserMappingMaxAggregateInputType;
};
export type AttendanceLockUserMappingGroupByOutputType = {
    id: string;
    providerId: string;
    deviceUserRef: string;
    employeeId: string;
    mappedByUserId: string;
    createdAt: Date;
    _count: AttendanceLockUserMappingCountAggregateOutputType | null;
    _min: AttendanceLockUserMappingMinAggregateOutputType | null;
    _max: AttendanceLockUserMappingMaxAggregateOutputType | null;
};
export type GetAttendanceLockUserMappingGroupByPayload<T extends AttendanceLockUserMappingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceLockUserMappingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceLockUserMappingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceLockUserMappingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceLockUserMappingGroupByOutputType[P]>;
}>>;
export type AttendanceLockUserMappingWhereInput = {
    AND?: Prisma.AttendanceLockUserMappingWhereInput | Prisma.AttendanceLockUserMappingWhereInput[];
    OR?: Prisma.AttendanceLockUserMappingWhereInput[];
    NOT?: Prisma.AttendanceLockUserMappingWhereInput | Prisma.AttendanceLockUserMappingWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    providerId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    deviceUserRef?: Prisma.StringFilter<"AttendanceLockUserMapping"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    mappedByUserId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    createdAt?: Prisma.DateTimeFilter<"AttendanceLockUserMapping"> | Date | string;
    provider?: Prisma.XOR<Prisma.AttendanceProviderScalarRelationFilter, Prisma.AttendanceProviderWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type AttendanceLockUserMappingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    mappedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    provider?: Prisma.AttendanceProviderOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type AttendanceLockUserMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerId_deviceUserRef?: Prisma.AttendanceLockUserMappingProviderIdDeviceUserRefCompoundUniqueInput;
    AND?: Prisma.AttendanceLockUserMappingWhereInput | Prisma.AttendanceLockUserMappingWhereInput[];
    OR?: Prisma.AttendanceLockUserMappingWhereInput[];
    NOT?: Prisma.AttendanceLockUserMappingWhereInput | Prisma.AttendanceLockUserMappingWhereInput[];
    providerId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    deviceUserRef?: Prisma.StringFilter<"AttendanceLockUserMapping"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    mappedByUserId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    createdAt?: Prisma.DateTimeFilter<"AttendanceLockUserMapping"> | Date | string;
    provider?: Prisma.XOR<Prisma.AttendanceProviderScalarRelationFilter, Prisma.AttendanceProviderWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "providerId_deviceUserRef">;
export type AttendanceLockUserMappingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    mappedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceLockUserMappingCountOrderByAggregateInput;
    _max?: Prisma.AttendanceLockUserMappingMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceLockUserMappingMinOrderByAggregateInput;
};
export type AttendanceLockUserMappingScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceLockUserMappingScalarWhereWithAggregatesInput | Prisma.AttendanceLockUserMappingScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceLockUserMappingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceLockUserMappingScalarWhereWithAggregatesInput | Prisma.AttendanceLockUserMappingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AttendanceLockUserMapping"> | string;
    providerId?: Prisma.UuidWithAggregatesFilter<"AttendanceLockUserMapping"> | string;
    deviceUserRef?: Prisma.StringWithAggregatesFilter<"AttendanceLockUserMapping"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"AttendanceLockUserMapping"> | string;
    mappedByUserId?: Prisma.UuidWithAggregatesFilter<"AttendanceLockUserMapping"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceLockUserMapping"> | Date | string;
};
export type AttendanceLockUserMappingCreateInput = {
    id?: string;
    deviceUserRef: string;
    mappedByUserId: string;
    createdAt?: Date | string;
    provider: Prisma.AttendanceProviderCreateNestedOneWithoutMappingsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceLockUserMappingsInput;
};
export type AttendanceLockUserMappingUncheckedCreateInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    employeeId: string;
    mappedByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLockUserMappingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: Prisma.AttendanceProviderUpdateOneRequiredWithoutMappingsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceLockUserMappingsNestedInput;
};
export type AttendanceLockUserMappingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLockUserMappingCreateManyInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    employeeId: string;
    mappedByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLockUserMappingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLockUserMappingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLockUserMappingListRelationFilter = {
    every?: Prisma.AttendanceLockUserMappingWhereInput;
    some?: Prisma.AttendanceLockUserMappingWhereInput;
    none?: Prisma.AttendanceLockUserMappingWhereInput;
};
export type AttendanceLockUserMappingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceLockUserMappingProviderIdDeviceUserRefCompoundUniqueInput = {
    providerId: string;
    deviceUserRef: string;
};
export type AttendanceLockUserMappingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    mappedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceLockUserMappingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    mappedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceLockUserMappingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceUserRef?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    mappedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceLockUserMappingCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
};
export type AttendanceLockUserMappingUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
};
export type AttendanceLockUserMappingUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    disconnect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    delete?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    update?: Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceLockUserMappingScalarWhereInput | Prisma.AttendanceLockUserMappingScalarWhereInput[];
};
export type AttendanceLockUserMappingUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    disconnect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    delete?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    update?: Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceLockUserMappingScalarWhereInput | Prisma.AttendanceLockUserMappingScalarWhereInput[];
};
export type AttendanceLockUserMappingCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput> | Prisma.AttendanceLockUserMappingCreateWithoutProviderInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyProviderInputEnvelope;
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
};
export type AttendanceLockUserMappingUncheckedCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput> | Prisma.AttendanceLockUserMappingCreateWithoutProviderInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyProviderInputEnvelope;
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
};
export type AttendanceLockUserMappingUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput> | Prisma.AttendanceLockUserMappingCreateWithoutProviderInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutProviderInput | Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyProviderInputEnvelope;
    set?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    disconnect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    delete?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    update?: Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutProviderInput | Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutProviderInput | Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.AttendanceLockUserMappingScalarWhereInput | Prisma.AttendanceLockUserMappingScalarWhereInput[];
};
export type AttendanceLockUserMappingUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput> | Prisma.AttendanceLockUserMappingCreateWithoutProviderInput[] | Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput | Prisma.AttendanceLockUserMappingCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutProviderInput | Prisma.AttendanceLockUserMappingUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.AttendanceLockUserMappingCreateManyProviderInputEnvelope;
    set?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    disconnect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    delete?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    connect?: Prisma.AttendanceLockUserMappingWhereUniqueInput | Prisma.AttendanceLockUserMappingWhereUniqueInput[];
    update?: Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutProviderInput | Prisma.AttendanceLockUserMappingUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutProviderInput | Prisma.AttendanceLockUserMappingUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.AttendanceLockUserMappingScalarWhereInput | Prisma.AttendanceLockUserMappingScalarWhereInput[];
};
export type AttendanceLockUserMappingCreateWithoutEmployeeInput = {
    id?: string;
    deviceUserRef: string;
    mappedByUserId: string;
    createdAt?: Date | string;
    provider: Prisma.AttendanceProviderCreateNestedOneWithoutMappingsInput;
};
export type AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    mappedByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLockUserMappingCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceLockUserMappingCreateManyEmployeeInputEnvelope = {
    data: Prisma.AttendanceLockUserMappingCreateManyEmployeeInput | Prisma.AttendanceLockUserMappingCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type AttendanceLockUserMappingUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceLockUserMappingUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateWithoutEmployeeInput, Prisma.AttendanceLockUserMappingUncheckedUpdateWithoutEmployeeInput>;
};
export type AttendanceLockUserMappingUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.AttendanceLockUserMappingScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateManyMutationInput, Prisma.AttendanceLockUserMappingUncheckedUpdateManyWithoutEmployeeInput>;
};
export type AttendanceLockUserMappingScalarWhereInput = {
    AND?: Prisma.AttendanceLockUserMappingScalarWhereInput | Prisma.AttendanceLockUserMappingScalarWhereInput[];
    OR?: Prisma.AttendanceLockUserMappingScalarWhereInput[];
    NOT?: Prisma.AttendanceLockUserMappingScalarWhereInput | Prisma.AttendanceLockUserMappingScalarWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    providerId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    deviceUserRef?: Prisma.StringFilter<"AttendanceLockUserMapping"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    mappedByUserId?: Prisma.UuidFilter<"AttendanceLockUserMapping"> | string;
    createdAt?: Prisma.DateTimeFilter<"AttendanceLockUserMapping"> | Date | string;
};
export type AttendanceLockUserMappingCreateWithoutProviderInput = {
    id?: string;
    deviceUserRef: string;
    mappedByUserId: string;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceLockUserMappingsInput;
};
export type AttendanceLockUserMappingUncheckedCreateWithoutProviderInput = {
    id?: string;
    deviceUserRef: string;
    employeeId: string;
    mappedByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLockUserMappingCreateOrConnectWithoutProviderInput = {
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput>;
};
export type AttendanceLockUserMappingCreateManyProviderInputEnvelope = {
    data: Prisma.AttendanceLockUserMappingCreateManyProviderInput | Prisma.AttendanceLockUserMappingCreateManyProviderInput[];
    skipDuplicates?: boolean;
};
export type AttendanceLockUserMappingUpsertWithWhereUniqueWithoutProviderInput = {
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedUpdateWithoutProviderInput>;
    create: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedCreateWithoutProviderInput>;
};
export type AttendanceLockUserMappingUpdateWithWhereUniqueWithoutProviderInput = {
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateWithoutProviderInput, Prisma.AttendanceLockUserMappingUncheckedUpdateWithoutProviderInput>;
};
export type AttendanceLockUserMappingUpdateManyWithWhereWithoutProviderInput = {
    where: Prisma.AttendanceLockUserMappingScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateManyMutationInput, Prisma.AttendanceLockUserMappingUncheckedUpdateManyWithoutProviderInput>;
};
export type AttendanceLockUserMappingCreateManyEmployeeInput = {
    id?: string;
    providerId: string;
    deviceUserRef: string;
    mappedByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLockUserMappingUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: Prisma.AttendanceProviderUpdateOneRequiredWithoutMappingsNestedInput;
};
export type AttendanceLockUserMappingUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLockUserMappingUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLockUserMappingCreateManyProviderInput = {
    id?: string;
    deviceUserRef: string;
    employeeId: string;
    mappedByUserId: string;
    createdAt?: Date | string;
};
export type AttendanceLockUserMappingUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceLockUserMappingsNestedInput;
};
export type AttendanceLockUserMappingUncheckedUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLockUserMappingUncheckedUpdateManyWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceUserRef?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    mappedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceLockUserMappingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    mappedByUserId?: boolean;
    createdAt?: boolean;
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceLockUserMapping"]>;
export type AttendanceLockUserMappingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    mappedByUserId?: boolean;
    createdAt?: boolean;
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceLockUserMapping"]>;
export type AttendanceLockUserMappingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    mappedByUserId?: boolean;
    createdAt?: boolean;
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceLockUserMapping"]>;
export type AttendanceLockUserMappingSelectScalar = {
    id?: boolean;
    providerId?: boolean;
    deviceUserRef?: boolean;
    employeeId?: boolean;
    mappedByUserId?: boolean;
    createdAt?: boolean;
};
export type AttendanceLockUserMappingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerId" | "deviceUserRef" | "employeeId" | "mappedByUserId" | "createdAt", ExtArgs["result"]["attendanceLockUserMapping"]>;
export type AttendanceLockUserMappingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type AttendanceLockUserMappingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type AttendanceLockUserMappingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provider?: boolean | Prisma.AttendanceProviderDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $AttendanceLockUserMappingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceLockUserMapping";
    objects: {
        provider: Prisma.$AttendanceProviderPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerId: string;
        deviceUserRef: string;
        employeeId: string;
        mappedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["attendanceLockUserMapping"]>;
    composites: {};
};
export type AttendanceLockUserMappingGetPayload<S extends boolean | null | undefined | AttendanceLockUserMappingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload, S>;
export type AttendanceLockUserMappingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceLockUserMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceLockUserMappingCountAggregateInputType | true;
};
export interface AttendanceLockUserMappingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceLockUserMapping'];
        meta: {
            name: 'AttendanceLockUserMapping';
        };
    };
    findUnique<T extends AttendanceLockUserMappingFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceLockUserMappingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceLockUserMappingFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceLockUserMappingFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceLockUserMappingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceLockUserMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceLockUserMappingFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceLockUserMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceLockUserMappingCreateArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceLockUserMappingCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceLockUserMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceLockUserMappingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceLockUserMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceLockUserMappingDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceLockUserMappingUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceLockUserMappingDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceLockUserMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceLockUserMappingUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceLockUserMappingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceLockUserMappingUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceLockUserMappingUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceLockUserMappingClient<runtime.Types.Result.GetResult<Prisma.$AttendanceLockUserMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceLockUserMappingCountArgs>(args?: Prisma.Subset<T, AttendanceLockUserMappingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceLockUserMappingCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceLockUserMappingAggregateArgs>(args: Prisma.Subset<T, AttendanceLockUserMappingAggregateArgs>): Prisma.PrismaPromise<GetAttendanceLockUserMappingAggregateType<T>>;
    groupBy<T extends AttendanceLockUserMappingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceLockUserMappingGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceLockUserMappingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceLockUserMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceLockUserMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceLockUserMappingFieldRefs;
}
export interface Prisma__AttendanceLockUserMappingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    provider<T extends Prisma.AttendanceProviderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceProviderDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceProviderClient<runtime.Types.Result.GetResult<Prisma.$AttendanceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceLockUserMappingFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceLockUserMapping", 'String'>;
    readonly providerId: Prisma.FieldRef<"AttendanceLockUserMapping", 'String'>;
    readonly deviceUserRef: Prisma.FieldRef<"AttendanceLockUserMapping", 'String'>;
    readonly employeeId: Prisma.FieldRef<"AttendanceLockUserMapping", 'String'>;
    readonly mappedByUserId: Prisma.FieldRef<"AttendanceLockUserMapping", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceLockUserMapping", 'DateTime'>;
}
export type AttendanceLockUserMappingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
};
export type AttendanceLockUserMappingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
};
export type AttendanceLockUserMappingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    orderBy?: Prisma.AttendanceLockUserMappingOrderByWithRelationInput | Prisma.AttendanceLockUserMappingOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceLockUserMappingScalarFieldEnum | Prisma.AttendanceLockUserMappingScalarFieldEnum[];
};
export type AttendanceLockUserMappingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    orderBy?: Prisma.AttendanceLockUserMappingOrderByWithRelationInput | Prisma.AttendanceLockUserMappingOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceLockUserMappingScalarFieldEnum | Prisma.AttendanceLockUserMappingScalarFieldEnum[];
};
export type AttendanceLockUserMappingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    orderBy?: Prisma.AttendanceLockUserMappingOrderByWithRelationInput | Prisma.AttendanceLockUserMappingOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceLockUserMappingScalarFieldEnum | Prisma.AttendanceLockUserMappingScalarFieldEnum[];
};
export type AttendanceLockUserMappingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateInput, Prisma.AttendanceLockUserMappingUncheckedCreateInput>;
};
export type AttendanceLockUserMappingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceLockUserMappingCreateManyInput | Prisma.AttendanceLockUserMappingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceLockUserMappingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    data: Prisma.AttendanceLockUserMappingCreateManyInput | Prisma.AttendanceLockUserMappingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceLockUserMappingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceLockUserMappingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateInput, Prisma.AttendanceLockUserMappingUncheckedUpdateInput>;
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
};
export type AttendanceLockUserMappingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateManyMutationInput, Prisma.AttendanceLockUserMappingUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    limit?: number;
};
export type AttendanceLockUserMappingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateManyMutationInput, Prisma.AttendanceLockUserMappingUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    limit?: number;
    include?: Prisma.AttendanceLockUserMappingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceLockUserMappingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceLockUserMappingCreateInput, Prisma.AttendanceLockUserMappingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceLockUserMappingUpdateInput, Prisma.AttendanceLockUserMappingUncheckedUpdateInput>;
};
export type AttendanceLockUserMappingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
    where: Prisma.AttendanceLockUserMappingWhereUniqueInput;
};
export type AttendanceLockUserMappingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceLockUserMappingWhereInput;
    limit?: number;
};
export type AttendanceLockUserMappingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceLockUserMappingSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceLockUserMappingOmit<ExtArgs> | null;
    include?: Prisma.AttendanceLockUserMappingInclude<ExtArgs> | null;
};
