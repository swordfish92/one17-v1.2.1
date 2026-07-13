import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeePersonalRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeePersonalRecordPayload>;
export type AggregateEmployeePersonalRecord = {
    _count: EmployeePersonalRecordCountAggregateOutputType | null;
    _avg: EmployeePersonalRecordAvgAggregateOutputType | null;
    _sum: EmployeePersonalRecordSumAggregateOutputType | null;
    _min: EmployeePersonalRecordMinAggregateOutputType | null;
    _max: EmployeePersonalRecordMaxAggregateOutputType | null;
};
export type EmployeePersonalRecordAvgAggregateOutputType = {
    numberOfChildren: number | null;
};
export type EmployeePersonalRecordSumAggregateOutputType = {
    numberOfChildren: number | null;
};
export type EmployeePersonalRecordMinAggregateOutputType = {
    employeeId: string | null;
    maritalStatus: $Enums.MaritalStatus | null;
    numberOfChildren: number | null;
    residentialAddress: string | null;
    nextOfKinName: string | null;
    nextOfKinRelationship: string | null;
    nextOfKinPhone: string | null;
    nextOfKinAddress: string | null;
    hobbiesInterests: string | null;
    emergencyContactName: string | null;
    emergencyContactPhone: string | null;
    emergencyContactRelationship: string | null;
    updatedAt: Date | null;
};
export type EmployeePersonalRecordMaxAggregateOutputType = {
    employeeId: string | null;
    maritalStatus: $Enums.MaritalStatus | null;
    numberOfChildren: number | null;
    residentialAddress: string | null;
    nextOfKinName: string | null;
    nextOfKinRelationship: string | null;
    nextOfKinPhone: string | null;
    nextOfKinAddress: string | null;
    hobbiesInterests: string | null;
    emergencyContactName: string | null;
    emergencyContactPhone: string | null;
    emergencyContactRelationship: string | null;
    updatedAt: Date | null;
};
export type EmployeePersonalRecordCountAggregateOutputType = {
    employeeId: number;
    maritalStatus: number;
    numberOfChildren: number;
    residentialAddress: number;
    nextOfKinName: number;
    nextOfKinRelationship: number;
    nextOfKinPhone: number;
    nextOfKinAddress: number;
    hobbiesInterests: number;
    emergencyContactName: number;
    emergencyContactPhone: number;
    emergencyContactRelationship: number;
    updatedAt: number;
    _all: number;
};
export type EmployeePersonalRecordAvgAggregateInputType = {
    numberOfChildren?: true;
};
export type EmployeePersonalRecordSumAggregateInputType = {
    numberOfChildren?: true;
};
export type EmployeePersonalRecordMinAggregateInputType = {
    employeeId?: true;
    maritalStatus?: true;
    numberOfChildren?: true;
    residentialAddress?: true;
    nextOfKinName?: true;
    nextOfKinRelationship?: true;
    nextOfKinPhone?: true;
    nextOfKinAddress?: true;
    hobbiesInterests?: true;
    emergencyContactName?: true;
    emergencyContactPhone?: true;
    emergencyContactRelationship?: true;
    updatedAt?: true;
};
export type EmployeePersonalRecordMaxAggregateInputType = {
    employeeId?: true;
    maritalStatus?: true;
    numberOfChildren?: true;
    residentialAddress?: true;
    nextOfKinName?: true;
    nextOfKinRelationship?: true;
    nextOfKinPhone?: true;
    nextOfKinAddress?: true;
    hobbiesInterests?: true;
    emergencyContactName?: true;
    emergencyContactPhone?: true;
    emergencyContactRelationship?: true;
    updatedAt?: true;
};
export type EmployeePersonalRecordCountAggregateInputType = {
    employeeId?: true;
    maritalStatus?: true;
    numberOfChildren?: true;
    residentialAddress?: true;
    nextOfKinName?: true;
    nextOfKinRelationship?: true;
    nextOfKinPhone?: true;
    nextOfKinAddress?: true;
    hobbiesInterests?: true;
    emergencyContactName?: true;
    emergencyContactPhone?: true;
    emergencyContactRelationship?: true;
    updatedAt?: true;
    _all?: true;
};
export type EmployeePersonalRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeePersonalRecordWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordOrderByWithRelationInput | Prisma.EmployeePersonalRecordOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeePersonalRecordCountAggregateInputType;
    _avg?: EmployeePersonalRecordAvgAggregateInputType;
    _sum?: EmployeePersonalRecordSumAggregateInputType;
    _min?: EmployeePersonalRecordMinAggregateInputType;
    _max?: EmployeePersonalRecordMaxAggregateInputType;
};
export type GetEmployeePersonalRecordAggregateType<T extends EmployeePersonalRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeePersonalRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeePersonalRecord[P]> : Prisma.GetScalarType<T[P], AggregateEmployeePersonalRecord[P]>;
};
export type EmployeePersonalRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeePersonalRecordWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordOrderByWithAggregationInput | Prisma.EmployeePersonalRecordOrderByWithAggregationInput[];
    by: Prisma.EmployeePersonalRecordScalarFieldEnum[] | Prisma.EmployeePersonalRecordScalarFieldEnum;
    having?: Prisma.EmployeePersonalRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeePersonalRecordCountAggregateInputType | true;
    _avg?: EmployeePersonalRecordAvgAggregateInputType;
    _sum?: EmployeePersonalRecordSumAggregateInputType;
    _min?: EmployeePersonalRecordMinAggregateInputType;
    _max?: EmployeePersonalRecordMaxAggregateInputType;
};
export type EmployeePersonalRecordGroupByOutputType = {
    employeeId: string;
    maritalStatus: $Enums.MaritalStatus | null;
    numberOfChildren: number | null;
    residentialAddress: string | null;
    nextOfKinName: string | null;
    nextOfKinRelationship: string | null;
    nextOfKinPhone: string | null;
    nextOfKinAddress: string | null;
    hobbiesInterests: string | null;
    emergencyContactName: string | null;
    emergencyContactPhone: string | null;
    emergencyContactRelationship: string | null;
    updatedAt: Date;
    _count: EmployeePersonalRecordCountAggregateOutputType | null;
    _avg: EmployeePersonalRecordAvgAggregateOutputType | null;
    _sum: EmployeePersonalRecordSumAggregateOutputType | null;
    _min: EmployeePersonalRecordMinAggregateOutputType | null;
    _max: EmployeePersonalRecordMaxAggregateOutputType | null;
};
export type GetEmployeePersonalRecordGroupByPayload<T extends EmployeePersonalRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeePersonalRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeePersonalRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeePersonalRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeePersonalRecordGroupByOutputType[P]>;
}>>;
export type EmployeePersonalRecordWhereInput = {
    AND?: Prisma.EmployeePersonalRecordWhereInput | Prisma.EmployeePersonalRecordWhereInput[];
    OR?: Prisma.EmployeePersonalRecordWhereInput[];
    NOT?: Prisma.EmployeePersonalRecordWhereInput | Prisma.EmployeePersonalRecordWhereInput[];
    employeeId?: Prisma.UuidFilter<"EmployeePersonalRecord"> | string;
    maritalStatus?: Prisma.EnumMaritalStatusNullableFilter<"EmployeePersonalRecord"> | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.IntNullableFilter<"EmployeePersonalRecord"> | number | null;
    residentialAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinName?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinRelationship?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinPhone?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    hobbiesInterests?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactName?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactPhone?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactRelationship?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"EmployeePersonalRecord"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type EmployeePersonalRecordOrderByWithRelationInput = {
    employeeId?: Prisma.SortOrder;
    maritalStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    numberOfChildren?: Prisma.SortOrderInput | Prisma.SortOrder;
    residentialAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinName?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinRelationship?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    hobbiesInterests?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContactName?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContactRelationship?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type EmployeePersonalRecordWhereUniqueInput = Prisma.AtLeast<{
    employeeId?: string;
    AND?: Prisma.EmployeePersonalRecordWhereInput | Prisma.EmployeePersonalRecordWhereInput[];
    OR?: Prisma.EmployeePersonalRecordWhereInput[];
    NOT?: Prisma.EmployeePersonalRecordWhereInput | Prisma.EmployeePersonalRecordWhereInput[];
    maritalStatus?: Prisma.EnumMaritalStatusNullableFilter<"EmployeePersonalRecord"> | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.IntNullableFilter<"EmployeePersonalRecord"> | number | null;
    residentialAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinName?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinRelationship?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinPhone?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinAddress?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    hobbiesInterests?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactName?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactPhone?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactRelationship?: Prisma.StringNullableFilter<"EmployeePersonalRecord"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"EmployeePersonalRecord"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "employeeId">;
export type EmployeePersonalRecordOrderByWithAggregationInput = {
    employeeId?: Prisma.SortOrder;
    maritalStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    numberOfChildren?: Prisma.SortOrderInput | Prisma.SortOrder;
    residentialAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinName?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinRelationship?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextOfKinAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    hobbiesInterests?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContactName?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContactRelationship?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeePersonalRecordCountOrderByAggregateInput;
    _avg?: Prisma.EmployeePersonalRecordAvgOrderByAggregateInput;
    _max?: Prisma.EmployeePersonalRecordMaxOrderByAggregateInput;
    _min?: Prisma.EmployeePersonalRecordMinOrderByAggregateInput;
    _sum?: Prisma.EmployeePersonalRecordSumOrderByAggregateInput;
};
export type EmployeePersonalRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeePersonalRecordScalarWhereWithAggregatesInput | Prisma.EmployeePersonalRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeePersonalRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeePersonalRecordScalarWhereWithAggregatesInput | Prisma.EmployeePersonalRecordScalarWhereWithAggregatesInput[];
    employeeId?: Prisma.UuidWithAggregatesFilter<"EmployeePersonalRecord"> | string;
    maritalStatus?: Prisma.EnumMaritalStatusNullableWithAggregatesFilter<"EmployeePersonalRecord"> | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.IntNullableWithAggregatesFilter<"EmployeePersonalRecord"> | number | null;
    residentialAddress?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinName?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinRelationship?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinPhone?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    nextOfKinAddress?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    hobbiesInterests?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactName?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactPhone?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    emergencyContactRelationship?: Prisma.StringNullableWithAggregatesFilter<"EmployeePersonalRecord"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeePersonalRecord"> | Date | string;
};
export type EmployeePersonalRecordCreateInput = {
    maritalStatus?: $Enums.MaritalStatus | null;
    numberOfChildren?: number | null;
    residentialAddress?: string | null;
    nextOfKinName?: string | null;
    nextOfKinRelationship?: string | null;
    nextOfKinPhone?: string | null;
    nextOfKinAddress?: string | null;
    hobbiesInterests?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelationship?: string | null;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutPersonalRecordInput;
};
export type EmployeePersonalRecordUncheckedCreateInput = {
    employeeId: string;
    maritalStatus?: $Enums.MaritalStatus | null;
    numberOfChildren?: number | null;
    residentialAddress?: string | null;
    nextOfKinName?: string | null;
    nextOfKinRelationship?: string | null;
    nextOfKinPhone?: string | null;
    nextOfKinAddress?: string | null;
    hobbiesInterests?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelationship?: string | null;
    updatedAt?: Date | string;
};
export type EmployeePersonalRecordUpdateInput = {
    maritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    residentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobbiesInterests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPersonalRecordNestedInput;
};
export type EmployeePersonalRecordUncheckedUpdateInput = {
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    maritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    residentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobbiesInterests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordCreateManyInput = {
    employeeId: string;
    maritalStatus?: $Enums.MaritalStatus | null;
    numberOfChildren?: number | null;
    residentialAddress?: string | null;
    nextOfKinName?: string | null;
    nextOfKinRelationship?: string | null;
    nextOfKinPhone?: string | null;
    nextOfKinAddress?: string | null;
    hobbiesInterests?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelationship?: string | null;
    updatedAt?: Date | string;
};
export type EmployeePersonalRecordUpdateManyMutationInput = {
    maritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    residentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobbiesInterests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordUncheckedUpdateManyInput = {
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    maritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    residentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobbiesInterests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordNullableScalarRelationFilter = {
    is?: Prisma.EmployeePersonalRecordWhereInput | null;
    isNot?: Prisma.EmployeePersonalRecordWhereInput | null;
};
export type EmployeePersonalRecordCountOrderByAggregateInput = {
    employeeId?: Prisma.SortOrder;
    maritalStatus?: Prisma.SortOrder;
    numberOfChildren?: Prisma.SortOrder;
    residentialAddress?: Prisma.SortOrder;
    nextOfKinName?: Prisma.SortOrder;
    nextOfKinRelationship?: Prisma.SortOrder;
    nextOfKinPhone?: Prisma.SortOrder;
    nextOfKinAddress?: Prisma.SortOrder;
    hobbiesInterests?: Prisma.SortOrder;
    emergencyContactName?: Prisma.SortOrder;
    emergencyContactPhone?: Prisma.SortOrder;
    emergencyContactRelationship?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeePersonalRecordAvgOrderByAggregateInput = {
    numberOfChildren?: Prisma.SortOrder;
};
export type EmployeePersonalRecordMaxOrderByAggregateInput = {
    employeeId?: Prisma.SortOrder;
    maritalStatus?: Prisma.SortOrder;
    numberOfChildren?: Prisma.SortOrder;
    residentialAddress?: Prisma.SortOrder;
    nextOfKinName?: Prisma.SortOrder;
    nextOfKinRelationship?: Prisma.SortOrder;
    nextOfKinPhone?: Prisma.SortOrder;
    nextOfKinAddress?: Prisma.SortOrder;
    hobbiesInterests?: Prisma.SortOrder;
    emergencyContactName?: Prisma.SortOrder;
    emergencyContactPhone?: Prisma.SortOrder;
    emergencyContactRelationship?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeePersonalRecordMinOrderByAggregateInput = {
    employeeId?: Prisma.SortOrder;
    maritalStatus?: Prisma.SortOrder;
    numberOfChildren?: Prisma.SortOrder;
    residentialAddress?: Prisma.SortOrder;
    nextOfKinName?: Prisma.SortOrder;
    nextOfKinRelationship?: Prisma.SortOrder;
    nextOfKinPhone?: Prisma.SortOrder;
    nextOfKinAddress?: Prisma.SortOrder;
    hobbiesInterests?: Prisma.SortOrder;
    emergencyContactName?: Prisma.SortOrder;
    emergencyContactPhone?: Prisma.SortOrder;
    emergencyContactRelationship?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeePersonalRecordSumOrderByAggregateInput = {
    numberOfChildren?: Prisma.SortOrder;
};
export type EmployeePersonalRecordCreateNestedOneWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.EmployeePersonalRecordCreateOrConnectWithoutEmployeeInput;
    connect?: Prisma.EmployeePersonalRecordWhereUniqueInput;
};
export type EmployeePersonalRecordUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.EmployeePersonalRecordCreateOrConnectWithoutEmployeeInput;
    connect?: Prisma.EmployeePersonalRecordWhereUniqueInput;
};
export type EmployeePersonalRecordUpdateOneWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.EmployeePersonalRecordCreateOrConnectWithoutEmployeeInput;
    upsert?: Prisma.EmployeePersonalRecordUpsertWithoutEmployeeInput;
    disconnect?: Prisma.EmployeePersonalRecordWhereInput | boolean;
    delete?: Prisma.EmployeePersonalRecordWhereInput | boolean;
    connect?: Prisma.EmployeePersonalRecordWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeePersonalRecordUpdateToOneWithWhereWithoutEmployeeInput, Prisma.EmployeePersonalRecordUpdateWithoutEmployeeInput>, Prisma.EmployeePersonalRecordUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeePersonalRecordUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeePersonalRecordCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.EmployeePersonalRecordCreateOrConnectWithoutEmployeeInput;
    upsert?: Prisma.EmployeePersonalRecordUpsertWithoutEmployeeInput;
    disconnect?: Prisma.EmployeePersonalRecordWhereInput | boolean;
    delete?: Prisma.EmployeePersonalRecordWhereInput | boolean;
    connect?: Prisma.EmployeePersonalRecordWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeePersonalRecordUpdateToOneWithWhereWithoutEmployeeInput, Prisma.EmployeePersonalRecordUpdateWithoutEmployeeInput>, Prisma.EmployeePersonalRecordUncheckedUpdateWithoutEmployeeInput>;
};
export type NullableEnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus | null;
};
export type EmployeePersonalRecordCreateWithoutEmployeeInput = {
    maritalStatus?: $Enums.MaritalStatus | null;
    numberOfChildren?: number | null;
    residentialAddress?: string | null;
    nextOfKinName?: string | null;
    nextOfKinRelationship?: string | null;
    nextOfKinPhone?: string | null;
    nextOfKinAddress?: string | null;
    hobbiesInterests?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelationship?: string | null;
    updatedAt?: Date | string;
};
export type EmployeePersonalRecordUncheckedCreateWithoutEmployeeInput = {
    maritalStatus?: $Enums.MaritalStatus | null;
    numberOfChildren?: number | null;
    residentialAddress?: string | null;
    nextOfKinName?: string | null;
    nextOfKinRelationship?: string | null;
    nextOfKinPhone?: string | null;
    nextOfKinAddress?: string | null;
    hobbiesInterests?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelationship?: string | null;
    updatedAt?: Date | string;
};
export type EmployeePersonalRecordCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EmployeePersonalRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeePersonalRecordCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeePersonalRecordUpsertWithoutEmployeeInput = {
    update: Prisma.XOR<Prisma.EmployeePersonalRecordUpdateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EmployeePersonalRecordCreateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedCreateWithoutEmployeeInput>;
    where?: Prisma.EmployeePersonalRecordWhereInput;
};
export type EmployeePersonalRecordUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: Prisma.EmployeePersonalRecordWhereInput;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordUpdateWithoutEmployeeInput, Prisma.EmployeePersonalRecordUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeePersonalRecordUpdateWithoutEmployeeInput = {
    maritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    residentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobbiesInterests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordUncheckedUpdateWithoutEmployeeInput = {
    maritalStatus?: Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null;
    numberOfChildren?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    residentialAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextOfKinAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobbiesInterests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactRelationship?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeePersonalRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    employeeId?: boolean;
    maritalStatus?: boolean;
    numberOfChildren?: boolean;
    residentialAddress?: boolean;
    nextOfKinName?: boolean;
    nextOfKinRelationship?: boolean;
    nextOfKinPhone?: boolean;
    nextOfKinAddress?: boolean;
    hobbiesInterests?: boolean;
    emergencyContactName?: boolean;
    emergencyContactPhone?: boolean;
    emergencyContactRelationship?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeePersonalRecord"]>;
export type EmployeePersonalRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    employeeId?: boolean;
    maritalStatus?: boolean;
    numberOfChildren?: boolean;
    residentialAddress?: boolean;
    nextOfKinName?: boolean;
    nextOfKinRelationship?: boolean;
    nextOfKinPhone?: boolean;
    nextOfKinAddress?: boolean;
    hobbiesInterests?: boolean;
    emergencyContactName?: boolean;
    emergencyContactPhone?: boolean;
    emergencyContactRelationship?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeePersonalRecord"]>;
export type EmployeePersonalRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    employeeId?: boolean;
    maritalStatus?: boolean;
    numberOfChildren?: boolean;
    residentialAddress?: boolean;
    nextOfKinName?: boolean;
    nextOfKinRelationship?: boolean;
    nextOfKinPhone?: boolean;
    nextOfKinAddress?: boolean;
    hobbiesInterests?: boolean;
    emergencyContactName?: boolean;
    emergencyContactPhone?: boolean;
    emergencyContactRelationship?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeePersonalRecord"]>;
export type EmployeePersonalRecordSelectScalar = {
    employeeId?: boolean;
    maritalStatus?: boolean;
    numberOfChildren?: boolean;
    residentialAddress?: boolean;
    nextOfKinName?: boolean;
    nextOfKinRelationship?: boolean;
    nextOfKinPhone?: boolean;
    nextOfKinAddress?: boolean;
    hobbiesInterests?: boolean;
    emergencyContactName?: boolean;
    emergencyContactPhone?: boolean;
    emergencyContactRelationship?: boolean;
    updatedAt?: boolean;
};
export type EmployeePersonalRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"employeeId" | "maritalStatus" | "numberOfChildren" | "residentialAddress" | "nextOfKinName" | "nextOfKinRelationship" | "nextOfKinPhone" | "nextOfKinAddress" | "hobbiesInterests" | "emergencyContactName" | "emergencyContactPhone" | "emergencyContactRelationship" | "updatedAt", ExtArgs["result"]["employeePersonalRecord"]>;
export type EmployeePersonalRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeePersonalRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeePersonalRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $EmployeePersonalRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeePersonalRecord";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        employeeId: string;
        maritalStatus: $Enums.MaritalStatus | null;
        numberOfChildren: number | null;
        residentialAddress: string | null;
        nextOfKinName: string | null;
        nextOfKinRelationship: string | null;
        nextOfKinPhone: string | null;
        nextOfKinAddress: string | null;
        hobbiesInterests: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        emergencyContactRelationship: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["employeePersonalRecord"]>;
    composites: {};
};
export type EmployeePersonalRecordGetPayload<S extends boolean | null | undefined | EmployeePersonalRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload, S>;
export type EmployeePersonalRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeePersonalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeePersonalRecordCountAggregateInputType | true;
};
export interface EmployeePersonalRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeePersonalRecord'];
        meta: {
            name: 'EmployeePersonalRecord';
        };
    };
    findUnique<T extends EmployeePersonalRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeePersonalRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeePersonalRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeePersonalRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeePersonalRecordFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeePersonalRecordCreateArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeePersonalRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeePersonalRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeePersonalRecordDeleteArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeePersonalRecordUpdateArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeePersonalRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeePersonalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeePersonalRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeePersonalRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeePersonalRecordUpsertArgs>(args: Prisma.SelectSubset<T, EmployeePersonalRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeePersonalRecordClient<runtime.Types.Result.GetResult<Prisma.$EmployeePersonalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeePersonalRecordCountArgs>(args?: Prisma.Subset<T, EmployeePersonalRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeePersonalRecordCountAggregateOutputType> : number>;
    aggregate<T extends EmployeePersonalRecordAggregateArgs>(args: Prisma.Subset<T, EmployeePersonalRecordAggregateArgs>): Prisma.PrismaPromise<GetEmployeePersonalRecordAggregateType<T>>;
    groupBy<T extends EmployeePersonalRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeePersonalRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeePersonalRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeePersonalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeePersonalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeePersonalRecordFieldRefs;
}
export interface Prisma__EmployeePersonalRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeePersonalRecordFieldRefs {
    readonly employeeId: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly maritalStatus: Prisma.FieldRef<"EmployeePersonalRecord", 'MaritalStatus'>;
    readonly numberOfChildren: Prisma.FieldRef<"EmployeePersonalRecord", 'Int'>;
    readonly residentialAddress: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly nextOfKinName: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly nextOfKinRelationship: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly nextOfKinPhone: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly nextOfKinAddress: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly hobbiesInterests: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly emergencyContactName: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly emergencyContactPhone: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly emergencyContactRelationship: Prisma.FieldRef<"EmployeePersonalRecord", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"EmployeePersonalRecord", 'DateTime'>;
}
export type EmployeePersonalRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordWhereUniqueInput;
};
export type EmployeePersonalRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordWhereUniqueInput;
};
export type EmployeePersonalRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    where?: Prisma.EmployeePersonalRecordWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordOrderByWithRelationInput | Prisma.EmployeePersonalRecordOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeePersonalRecordScalarFieldEnum | Prisma.EmployeePersonalRecordScalarFieldEnum[];
};
export type EmployeePersonalRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    where?: Prisma.EmployeePersonalRecordWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordOrderByWithRelationInput | Prisma.EmployeePersonalRecordOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeePersonalRecordScalarFieldEnum | Prisma.EmployeePersonalRecordScalarFieldEnum[];
};
export type EmployeePersonalRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    where?: Prisma.EmployeePersonalRecordWhereInput;
    orderBy?: Prisma.EmployeePersonalRecordOrderByWithRelationInput | Prisma.EmployeePersonalRecordOrderByWithRelationInput[];
    cursor?: Prisma.EmployeePersonalRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeePersonalRecordScalarFieldEnum | Prisma.EmployeePersonalRecordScalarFieldEnum[];
};
export type EmployeePersonalRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordCreateInput, Prisma.EmployeePersonalRecordUncheckedCreateInput>;
};
export type EmployeePersonalRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeePersonalRecordCreateManyInput | Prisma.EmployeePersonalRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeePersonalRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    data: Prisma.EmployeePersonalRecordCreateManyInput | Prisma.EmployeePersonalRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeePersonalRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeePersonalRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordUpdateInput, Prisma.EmployeePersonalRecordUncheckedUpdateInput>;
    where: Prisma.EmployeePersonalRecordWhereUniqueInput;
};
export type EmployeePersonalRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeePersonalRecordUpdateManyMutationInput, Prisma.EmployeePersonalRecordUncheckedUpdateManyInput>;
    where?: Prisma.EmployeePersonalRecordWhereInput;
    limit?: number;
};
export type EmployeePersonalRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeePersonalRecordUpdateManyMutationInput, Prisma.EmployeePersonalRecordUncheckedUpdateManyInput>;
    where?: Prisma.EmployeePersonalRecordWhereInput;
    limit?: number;
    include?: Prisma.EmployeePersonalRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeePersonalRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeePersonalRecordCreateInput, Prisma.EmployeePersonalRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeePersonalRecordUpdateInput, Prisma.EmployeePersonalRecordUncheckedUpdateInput>;
};
export type EmployeePersonalRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
    where: Prisma.EmployeePersonalRecordWhereUniqueInput;
};
export type EmployeePersonalRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeePersonalRecordWhereInput;
    limit?: number;
};
export type EmployeePersonalRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeePersonalRecordSelect<ExtArgs> | null;
    omit?: Prisma.EmployeePersonalRecordOmit<ExtArgs> | null;
    include?: Prisma.EmployeePersonalRecordInclude<ExtArgs> | null;
};
