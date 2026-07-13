import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PositionModel = runtime.Types.Result.DefaultSelection<Prisma.$PositionPayload>;
export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null;
    _avg: PositionAvgAggregateOutputType | null;
    _sum: PositionSumAggregateOutputType | null;
    _min: PositionMinAggregateOutputType | null;
    _max: PositionMaxAggregateOutputType | null;
};
export type PositionAvgAggregateOutputType = {
    notch: number | null;
};
export type PositionSumAggregateOutputType = {
    notch: number | null;
};
export type PositionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    orgUnitCode: string | null;
    cadre: string | null;
    notch: number | null;
    createdAt: Date | null;
};
export type PositionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    orgUnitCode: string | null;
    cadre: string | null;
    notch: number | null;
    createdAt: Date | null;
};
export type PositionCountAggregateOutputType = {
    id: number;
    title: number;
    orgUnitCode: number;
    cadre: number;
    notch: number;
    createdAt: number;
    _all: number;
};
export type PositionAvgAggregateInputType = {
    notch?: true;
};
export type PositionSumAggregateInputType = {
    notch?: true;
};
export type PositionMinAggregateInputType = {
    id?: true;
    title?: true;
    orgUnitCode?: true;
    cadre?: true;
    notch?: true;
    createdAt?: true;
};
export type PositionMaxAggregateInputType = {
    id?: true;
    title?: true;
    orgUnitCode?: true;
    cadre?: true;
    notch?: true;
    createdAt?: true;
};
export type PositionCountAggregateInputType = {
    id?: true;
    title?: true;
    orgUnitCode?: true;
    cadre?: true;
    notch?: true;
    createdAt?: true;
    _all?: true;
};
export type PositionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PositionCountAggregateInputType;
    _avg?: PositionAvgAggregateInputType;
    _sum?: PositionSumAggregateInputType;
    _min?: PositionMinAggregateInputType;
    _max?: PositionMaxAggregateInputType;
};
export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
    [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePosition[P]> : Prisma.GetScalarType<T[P], AggregatePosition[P]>;
};
export type PositionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithAggregationInput | Prisma.PositionOrderByWithAggregationInput[];
    by: Prisma.PositionScalarFieldEnum[] | Prisma.PositionScalarFieldEnum;
    having?: Prisma.PositionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PositionCountAggregateInputType | true;
    _avg?: PositionAvgAggregateInputType;
    _sum?: PositionSumAggregateInputType;
    _min?: PositionMinAggregateInputType;
    _max?: PositionMaxAggregateInputType;
};
export type PositionGroupByOutputType = {
    id: string;
    title: string;
    orgUnitCode: string;
    cadre: string;
    notch: number;
    createdAt: Date;
    _count: PositionCountAggregateOutputType | null;
    _avg: PositionAvgAggregateOutputType | null;
    _sum: PositionSumAggregateOutputType | null;
    _min: PositionMinAggregateOutputType | null;
    _max: PositionMaxAggregateOutputType | null;
};
export type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PositionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PositionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PositionGroupByOutputType[P]>;
}>>;
export type PositionWhereInput = {
    AND?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    OR?: Prisma.PositionWhereInput[];
    NOT?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    id?: Prisma.UuidFilter<"Position"> | string;
    title?: Prisma.StringFilter<"Position"> | string;
    orgUnitCode?: Prisma.StringFilter<"Position"> | string;
    cadre?: Prisma.StringFilter<"Position"> | string;
    notch?: Prisma.IntFilter<"Position"> | number;
    createdAt?: Prisma.DateTimeFilter<"Position"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestListRelationFilter;
};
export type PositionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    orgUnit?: Prisma.OrgUnitOrderByWithRelationInput;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestOrderByRelationAggregateInput;
};
export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    title_orgUnitCode?: Prisma.PositionTitleOrgUnitCodeCompoundUniqueInput;
    AND?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    OR?: Prisma.PositionWhereInput[];
    NOT?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    title?: Prisma.StringFilter<"Position"> | string;
    orgUnitCode?: Prisma.StringFilter<"Position"> | string;
    cadre?: Prisma.StringFilter<"Position"> | string;
    notch?: Prisma.IntFilter<"Position"> | number;
    createdAt?: Prisma.DateTimeFilter<"Position"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestListRelationFilter;
}, "id" | "title_orgUnitCode">;
export type PositionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PositionCountOrderByAggregateInput;
    _avg?: Prisma.PositionAvgOrderByAggregateInput;
    _max?: Prisma.PositionMaxOrderByAggregateInput;
    _min?: Prisma.PositionMinOrderByAggregateInput;
    _sum?: Prisma.PositionSumOrderByAggregateInput;
};
export type PositionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PositionScalarWhereWithAggregatesInput | Prisma.PositionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PositionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PositionScalarWhereWithAggregatesInput | Prisma.PositionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Position"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Position"> | string;
    orgUnitCode?: Prisma.StringWithAggregatesFilter<"Position"> | string;
    cadre?: Prisma.StringWithAggregatesFilter<"Position"> | string;
    notch?: Prisma.IntWithAggregatesFilter<"Position"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Position"> | Date | string;
};
export type PositionCreateInput = {
    id?: string;
    title: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutPositionsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutPositionInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestCreateNestedManyWithoutPositionInput;
};
export type PositionUncheckedCreateInput = {
    id?: string;
    title: string;
    orgUnitCode: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutPositionInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUncheckedCreateNestedManyWithoutPositionInput;
};
export type PositionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutPositionsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutPositionNestedInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUpdateManyWithoutPositionNestedInput;
};
export type PositionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutPositionNestedInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUncheckedUpdateManyWithoutPositionNestedInput;
};
export type PositionCreateManyInput = {
    id?: string;
    title: string;
    orgUnitCode: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
};
export type PositionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionListRelationFilter = {
    every?: Prisma.PositionWhereInput;
    some?: Prisma.PositionWhereInput;
    none?: Prisma.PositionWhereInput;
};
export type PositionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PositionTitleOrgUnitCodeCompoundUniqueInput = {
    title: string;
    orgUnitCode: string;
};
export type PositionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PositionAvgOrderByAggregateInput = {
    notch?: Prisma.SortOrder;
};
export type PositionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PositionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PositionSumOrderByAggregateInput = {
    notch?: Prisma.SortOrder;
};
export type PositionScalarRelationFilter = {
    is?: Prisma.PositionWhereInput;
    isNot?: Prisma.PositionWhereInput;
};
export type PositionCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutOrgUnitInput, Prisma.PositionUncheckedCreateWithoutOrgUnitInput> | Prisma.PositionCreateWithoutOrgUnitInput[] | Prisma.PositionUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutOrgUnitInput | Prisma.PositionCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.PositionCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
};
export type PositionUncheckedCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutOrgUnitInput, Prisma.PositionUncheckedCreateWithoutOrgUnitInput> | Prisma.PositionCreateWithoutOrgUnitInput[] | Prisma.PositionUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutOrgUnitInput | Prisma.PositionCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.PositionCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
};
export type PositionUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutOrgUnitInput, Prisma.PositionUncheckedCreateWithoutOrgUnitInput> | Prisma.PositionCreateWithoutOrgUnitInput[] | Prisma.PositionUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutOrgUnitInput | Prisma.PositionCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.PositionUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.PositionUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.PositionCreateManyOrgUnitInputEnvelope;
    set?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    disconnect?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    delete?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    connect?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    update?: Prisma.PositionUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.PositionUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.PositionUpdateManyWithWhereWithoutOrgUnitInput | Prisma.PositionUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.PositionScalarWhereInput | Prisma.PositionScalarWhereInput[];
};
export type PositionUncheckedUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutOrgUnitInput, Prisma.PositionUncheckedCreateWithoutOrgUnitInput> | Prisma.PositionCreateWithoutOrgUnitInput[] | Prisma.PositionUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutOrgUnitInput | Prisma.PositionCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.PositionUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.PositionUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.PositionCreateManyOrgUnitInputEnvelope;
    set?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    disconnect?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    delete?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    connect?: Prisma.PositionWhereUniqueInput | Prisma.PositionWhereUniqueInput[];
    update?: Prisma.PositionUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.PositionUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.PositionUpdateManyWithWhereWithoutOrgUnitInput | Prisma.PositionUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.PositionScalarWhereInput | Prisma.PositionScalarWhereInput[];
};
export type PositionCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutEmployeesInput, Prisma.PositionUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.PositionWhereUniqueInput;
};
export type PositionUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutEmployeesInput, Prisma.PositionUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.PositionUpsertWithoutEmployeesInput;
    connect?: Prisma.PositionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PositionUpdateToOneWithWhereWithoutEmployeesInput, Prisma.PositionUpdateWithoutEmployeesInput>, Prisma.PositionUncheckedUpdateWithoutEmployeesInput>;
};
export type PositionCreateNestedOneWithoutOnboardingRequestsInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutOnboardingRequestsInput, Prisma.PositionUncheckedCreateWithoutOnboardingRequestsInput>;
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutOnboardingRequestsInput;
    connect?: Prisma.PositionWhereUniqueInput;
};
export type PositionUpdateOneRequiredWithoutOnboardingRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutOnboardingRequestsInput, Prisma.PositionUncheckedCreateWithoutOnboardingRequestsInput>;
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutOnboardingRequestsInput;
    upsert?: Prisma.PositionUpsertWithoutOnboardingRequestsInput;
    connect?: Prisma.PositionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PositionUpdateToOneWithWhereWithoutOnboardingRequestsInput, Prisma.PositionUpdateWithoutOnboardingRequestsInput>, Prisma.PositionUncheckedUpdateWithoutOnboardingRequestsInput>;
};
export type PositionCreateWithoutOrgUnitInput = {
    id?: string;
    title: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutPositionInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestCreateNestedManyWithoutPositionInput;
};
export type PositionUncheckedCreateWithoutOrgUnitInput = {
    id?: string;
    title: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutPositionInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUncheckedCreateNestedManyWithoutPositionInput;
};
export type PositionCreateOrConnectWithoutOrgUnitInput = {
    where: Prisma.PositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionCreateWithoutOrgUnitInput, Prisma.PositionUncheckedCreateWithoutOrgUnitInput>;
};
export type PositionCreateManyOrgUnitInputEnvelope = {
    data: Prisma.PositionCreateManyOrgUnitInput | Prisma.PositionCreateManyOrgUnitInput[];
    skipDuplicates?: boolean;
};
export type PositionUpsertWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.PositionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PositionUpdateWithoutOrgUnitInput, Prisma.PositionUncheckedUpdateWithoutOrgUnitInput>;
    create: Prisma.XOR<Prisma.PositionCreateWithoutOrgUnitInput, Prisma.PositionUncheckedCreateWithoutOrgUnitInput>;
};
export type PositionUpdateWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.PositionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PositionUpdateWithoutOrgUnitInput, Prisma.PositionUncheckedUpdateWithoutOrgUnitInput>;
};
export type PositionUpdateManyWithWhereWithoutOrgUnitInput = {
    where: Prisma.PositionScalarWhereInput;
    data: Prisma.XOR<Prisma.PositionUpdateManyMutationInput, Prisma.PositionUncheckedUpdateManyWithoutOrgUnitInput>;
};
export type PositionScalarWhereInput = {
    AND?: Prisma.PositionScalarWhereInput | Prisma.PositionScalarWhereInput[];
    OR?: Prisma.PositionScalarWhereInput[];
    NOT?: Prisma.PositionScalarWhereInput | Prisma.PositionScalarWhereInput[];
    id?: Prisma.UuidFilter<"Position"> | string;
    title?: Prisma.StringFilter<"Position"> | string;
    orgUnitCode?: Prisma.StringFilter<"Position"> | string;
    cadre?: Prisma.StringFilter<"Position"> | string;
    notch?: Prisma.IntFilter<"Position"> | number;
    createdAt?: Prisma.DateTimeFilter<"Position"> | Date | string;
};
export type PositionCreateWithoutEmployeesInput = {
    id?: string;
    title: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutPositionsInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestCreateNestedManyWithoutPositionInput;
};
export type PositionUncheckedCreateWithoutEmployeesInput = {
    id?: string;
    title: string;
    orgUnitCode: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUncheckedCreateNestedManyWithoutPositionInput;
};
export type PositionCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.PositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionCreateWithoutEmployeesInput, Prisma.PositionUncheckedCreateWithoutEmployeesInput>;
};
export type PositionUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.PositionUpdateWithoutEmployeesInput, Prisma.PositionUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.PositionCreateWithoutEmployeesInput, Prisma.PositionUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.PositionWhereInput;
};
export type PositionUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.PositionWhereInput;
    data: Prisma.XOR<Prisma.PositionUpdateWithoutEmployeesInput, Prisma.PositionUncheckedUpdateWithoutEmployeesInput>;
};
export type PositionUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutPositionsNestedInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUpdateManyWithoutPositionNestedInput;
};
export type PositionUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUncheckedUpdateManyWithoutPositionNestedInput;
};
export type PositionCreateWithoutOnboardingRequestsInput = {
    id?: string;
    title: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutPositionsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutPositionInput;
};
export type PositionUncheckedCreateWithoutOnboardingRequestsInput = {
    id?: string;
    title: string;
    orgUnitCode: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutPositionInput;
};
export type PositionCreateOrConnectWithoutOnboardingRequestsInput = {
    where: Prisma.PositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionCreateWithoutOnboardingRequestsInput, Prisma.PositionUncheckedCreateWithoutOnboardingRequestsInput>;
};
export type PositionUpsertWithoutOnboardingRequestsInput = {
    update: Prisma.XOR<Prisma.PositionUpdateWithoutOnboardingRequestsInput, Prisma.PositionUncheckedUpdateWithoutOnboardingRequestsInput>;
    create: Prisma.XOR<Prisma.PositionCreateWithoutOnboardingRequestsInput, Prisma.PositionUncheckedCreateWithoutOnboardingRequestsInput>;
    where?: Prisma.PositionWhereInput;
};
export type PositionUpdateToOneWithWhereWithoutOnboardingRequestsInput = {
    where?: Prisma.PositionWhereInput;
    data: Prisma.XOR<Prisma.PositionUpdateWithoutOnboardingRequestsInput, Prisma.PositionUncheckedUpdateWithoutOnboardingRequestsInput>;
};
export type PositionUpdateWithoutOnboardingRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutPositionsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutPositionNestedInput;
};
export type PositionUncheckedUpdateWithoutOnboardingRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutPositionNestedInput;
};
export type PositionCreateManyOrgUnitInput = {
    id?: string;
    title: string;
    cadre: string;
    notch: number;
    createdAt?: Date | string;
};
export type PositionUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUpdateManyWithoutPositionNestedInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUpdateManyWithoutPositionNestedInput;
};
export type PositionUncheckedUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutPositionNestedInput;
    onboardingRequests?: Prisma.EmployeeOnboardingRequestUncheckedUpdateManyWithoutPositionNestedInput;
};
export type PositionUncheckedUpdateManyWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionCountOutputType = {
    employees: number;
    onboardingRequests: number;
};
export type PositionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | PositionCountOutputTypeCountEmployeesArgs;
    onboardingRequests?: boolean | PositionCountOutputTypeCountOnboardingRequestsArgs;
};
export type PositionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionCountOutputTypeSelect<ExtArgs> | null;
};
export type PositionCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type PositionCountOutputTypeCountOnboardingRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeOnboardingRequestWhereInput;
};
export type PositionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    notch?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.Position$employeesArgs<ExtArgs>;
    onboardingRequests?: boolean | Prisma.Position$onboardingRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.PositionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["position"]>;
export type PositionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    notch?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["position"]>;
export type PositionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    notch?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["position"]>;
export type PositionSelectScalar = {
    id?: boolean;
    title?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    notch?: boolean;
    createdAt?: boolean;
};
export type PositionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "orgUnitCode" | "cadre" | "notch" | "createdAt", ExtArgs["result"]["position"]>;
export type PositionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.Position$employeesArgs<ExtArgs>;
    onboardingRequests?: boolean | Prisma.Position$onboardingRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.PositionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PositionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type PositionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type $PositionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Position";
    objects: {
        orgUnit: Prisma.$OrgUnitPayload<ExtArgs>;
        employees: Prisma.$EmployeePayload<ExtArgs>[];
        onboardingRequests: Prisma.$EmployeeOnboardingRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        orgUnitCode: string;
        cadre: string;
        notch: number;
        createdAt: Date;
    }, ExtArgs["result"]["position"]>;
    composites: {};
};
export type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PositionPayload, S>;
export type PositionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PositionCountAggregateInputType | true;
};
export interface PositionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Position'];
        meta: {
            name: 'Position';
        };
    };
    findUnique<T extends PositionFindUniqueArgs>(args: Prisma.SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PositionFindFirstArgs>(args?: Prisma.SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PositionFindManyArgs>(args?: Prisma.SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PositionCreateArgs>(args: Prisma.SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PositionCreateManyArgs>(args?: Prisma.SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PositionDeleteArgs>(args: Prisma.SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PositionUpdateArgs>(args: Prisma.SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PositionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PositionUpdateManyArgs>(args: Prisma.SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PositionUpsertArgs>(args: Prisma.SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PositionCountArgs>(args?: Prisma.Subset<T, PositionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PositionCountAggregateOutputType> : number>;
    aggregate<T extends PositionAggregateArgs>(args: Prisma.Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>;
    groupBy<T extends PositionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PositionGroupByArgs['orderBy'];
    } : {
        orderBy?: PositionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PositionFieldRefs;
}
export interface Prisma__PositionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orgUnit<T extends Prisma.OrgUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employees<T extends Prisma.Position$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Position$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    onboardingRequests<T extends Prisma.Position$onboardingRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Position$onboardingRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeOnboardingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PositionFieldRefs {
    readonly id: Prisma.FieldRef<"Position", 'String'>;
    readonly title: Prisma.FieldRef<"Position", 'String'>;
    readonly orgUnitCode: Prisma.FieldRef<"Position", 'String'>;
    readonly cadre: Prisma.FieldRef<"Position", 'String'>;
    readonly notch: Prisma.FieldRef<"Position", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Position", 'DateTime'>;
}
export type PositionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionScalarFieldEnum | Prisma.PositionScalarFieldEnum[];
};
export type PositionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionScalarFieldEnum | Prisma.PositionScalarFieldEnum[];
};
export type PositionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionScalarFieldEnum | Prisma.PositionScalarFieldEnum[];
};
export type PositionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionCreateInput, Prisma.PositionUncheckedCreateInput>;
};
export type PositionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PositionCreateManyInput | Prisma.PositionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PositionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    data: Prisma.PositionCreateManyInput | Prisma.PositionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PositionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PositionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionUpdateInput, Prisma.PositionUncheckedUpdateInput>;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PositionUpdateManyMutationInput, Prisma.PositionUncheckedUpdateManyInput>;
    where?: Prisma.PositionWhereInput;
    limit?: number;
};
export type PositionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionUpdateManyMutationInput, Prisma.PositionUncheckedUpdateManyInput>;
    where?: Prisma.PositionWhereInput;
    limit?: number;
    include?: Prisma.PositionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PositionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionCreateInput, Prisma.PositionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PositionUpdateInput, Prisma.PositionUncheckedUpdateInput>;
};
export type PositionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionWhereInput;
    limit?: number;
};
export type Position$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type Position$onboardingRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeOnboardingRequestSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOnboardingRequestOmit<ExtArgs> | null;
    include?: Prisma.EmployeeOnboardingRequestInclude<ExtArgs> | null;
    where?: Prisma.EmployeeOnboardingRequestWhereInput;
    orderBy?: Prisma.EmployeeOnboardingRequestOrderByWithRelationInput | Prisma.EmployeeOnboardingRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeOnboardingRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeOnboardingRequestScalarFieldEnum | Prisma.EmployeeOnboardingRequestScalarFieldEnum[];
};
export type PositionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
};
