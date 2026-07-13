import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnterpriseKraModel = runtime.Types.Result.DefaultSelection<Prisma.$EnterpriseKraPayload>;
export type AggregateEnterpriseKra = {
    _count: EnterpriseKraCountAggregateOutputType | null;
    _min: EnterpriseKraMinAggregateOutputType | null;
    _max: EnterpriseKraMaxAggregateOutputType | null;
};
export type EnterpriseKraMinAggregateOutputType = {
    code: string | null;
    name: string | null;
    orgUnitCode: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
};
export type EnterpriseKraMaxAggregateOutputType = {
    code: string | null;
    name: string | null;
    orgUnitCode: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
};
export type EnterpriseKraCountAggregateOutputType = {
    code: number;
    name: number;
    orgUnitCode: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type EnterpriseKraMinAggregateInputType = {
    code?: true;
    name?: true;
    orgUnitCode?: true;
    status?: true;
    createdAt?: true;
};
export type EnterpriseKraMaxAggregateInputType = {
    code?: true;
    name?: true;
    orgUnitCode?: true;
    status?: true;
    createdAt?: true;
};
export type EnterpriseKraCountAggregateInputType = {
    code?: true;
    name?: true;
    orgUnitCode?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type EnterpriseKraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnterpriseKraWhereInput;
    orderBy?: Prisma.EnterpriseKraOrderByWithRelationInput | Prisma.EnterpriseKraOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseKraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnterpriseKraCountAggregateInputType;
    _min?: EnterpriseKraMinAggregateInputType;
    _max?: EnterpriseKraMaxAggregateInputType;
};
export type GetEnterpriseKraAggregateType<T extends EnterpriseKraAggregateArgs> = {
    [P in keyof T & keyof AggregateEnterpriseKra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnterpriseKra[P]> : Prisma.GetScalarType<T[P], AggregateEnterpriseKra[P]>;
};
export type EnterpriseKraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnterpriseKraWhereInput;
    orderBy?: Prisma.EnterpriseKraOrderByWithAggregationInput | Prisma.EnterpriseKraOrderByWithAggregationInput[];
    by: Prisma.EnterpriseKraScalarFieldEnum[] | Prisma.EnterpriseKraScalarFieldEnum;
    having?: Prisma.EnterpriseKraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnterpriseKraCountAggregateInputType | true;
    _min?: EnterpriseKraMinAggregateInputType;
    _max?: EnterpriseKraMaxAggregateInputType;
};
export type EnterpriseKraGroupByOutputType = {
    code: string;
    name: string;
    orgUnitCode: string;
    status: $Enums.GovernedItemStatus;
    createdAt: Date;
    _count: EnterpriseKraCountAggregateOutputType | null;
    _min: EnterpriseKraMinAggregateOutputType | null;
    _max: EnterpriseKraMaxAggregateOutputType | null;
};
export type GetEnterpriseKraGroupByPayload<T extends EnterpriseKraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnterpriseKraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnterpriseKraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnterpriseKraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnterpriseKraGroupByOutputType[P]>;
}>>;
export type EnterpriseKraWhereInput = {
    AND?: Prisma.EnterpriseKraWhereInput | Prisma.EnterpriseKraWhereInput[];
    OR?: Prisma.EnterpriseKraWhereInput[];
    NOT?: Prisma.EnterpriseKraWhereInput | Prisma.EnterpriseKraWhereInput[];
    code?: Prisma.StringFilter<"EnterpriseKra"> | string;
    name?: Prisma.StringFilter<"EnterpriseKra"> | string;
    orgUnitCode?: Prisma.StringFilter<"EnterpriseKra"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"EnterpriseKra"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"EnterpriseKra"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
    objectiveMap?: Prisma.KraObjectiveMapListRelationFilter;
    kpiDefinitions?: Prisma.KpiDefinitionListRelationFilter;
};
export type EnterpriseKraOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    orgUnit?: Prisma.OrgUnitOrderByWithRelationInput;
    objectiveMap?: Prisma.KraObjectiveMapOrderByRelationAggregateInput;
    kpiDefinitions?: Prisma.KpiDefinitionOrderByRelationAggregateInput;
};
export type EnterpriseKraWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.EnterpriseKraWhereInput | Prisma.EnterpriseKraWhereInput[];
    OR?: Prisma.EnterpriseKraWhereInput[];
    NOT?: Prisma.EnterpriseKraWhereInput | Prisma.EnterpriseKraWhereInput[];
    name?: Prisma.StringFilter<"EnterpriseKra"> | string;
    orgUnitCode?: Prisma.StringFilter<"EnterpriseKra"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"EnterpriseKra"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"EnterpriseKra"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
    objectiveMap?: Prisma.KraObjectiveMapListRelationFilter;
    kpiDefinitions?: Prisma.KpiDefinitionListRelationFilter;
}, "code">;
export type EnterpriseKraOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EnterpriseKraCountOrderByAggregateInput;
    _max?: Prisma.EnterpriseKraMaxOrderByAggregateInput;
    _min?: Prisma.EnterpriseKraMinOrderByAggregateInput;
};
export type EnterpriseKraScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnterpriseKraScalarWhereWithAggregatesInput | Prisma.EnterpriseKraScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnterpriseKraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnterpriseKraScalarWhereWithAggregatesInput | Prisma.EnterpriseKraScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"EnterpriseKra"> | string;
    name?: Prisma.StringWithAggregatesFilter<"EnterpriseKra"> | string;
    orgUnitCode?: Prisma.StringWithAggregatesFilter<"EnterpriseKra"> | string;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"EnterpriseKra"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EnterpriseKra"> | Date | string;
};
export type EnterpriseKraCreateInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutKrasInput;
    objectiveMap?: Prisma.KraObjectiveMapCreateNestedManyWithoutKraInput;
    kpiDefinitions?: Prisma.KpiDefinitionCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraUncheckedCreateInput = {
    code: string;
    name: string;
    orgUnitCode: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    objectiveMap?: Prisma.KraObjectiveMapUncheckedCreateNestedManyWithoutKraInput;
    kpiDefinitions?: Prisma.KpiDefinitionUncheckedCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutKrasNestedInput;
    objectiveMap?: Prisma.KraObjectiveMapUpdateManyWithoutKraNestedInput;
    kpiDefinitions?: Prisma.KpiDefinitionUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    objectiveMap?: Prisma.KraObjectiveMapUncheckedUpdateManyWithoutKraNestedInput;
    kpiDefinitions?: Prisma.KpiDefinitionUncheckedUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraCreateManyInput = {
    code: string;
    name: string;
    orgUnitCode: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type EnterpriseKraUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnterpriseKraUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnterpriseKraListRelationFilter = {
    every?: Prisma.EnterpriseKraWhereInput;
    some?: Prisma.EnterpriseKraWhereInput;
    none?: Prisma.EnterpriseKraWhereInput;
};
export type EnterpriseKraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnterpriseKraCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnterpriseKraMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnterpriseKraMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnterpriseKraScalarRelationFilter = {
    is?: Prisma.EnterpriseKraWhereInput;
    isNot?: Prisma.EnterpriseKraWhereInput;
};
export type EnterpriseKraCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput> | Prisma.EnterpriseKraCreateWithoutOrgUnitInput[] | Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput | Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.EnterpriseKraCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
};
export type EnterpriseKraUncheckedCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput> | Prisma.EnterpriseKraCreateWithoutOrgUnitInput[] | Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput | Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.EnterpriseKraCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
};
export type EnterpriseKraUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput> | Prisma.EnterpriseKraCreateWithoutOrgUnitInput[] | Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput | Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.EnterpriseKraUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.EnterpriseKraUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.EnterpriseKraCreateManyOrgUnitInputEnvelope;
    set?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    disconnect?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    delete?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    connect?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    update?: Prisma.EnterpriseKraUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.EnterpriseKraUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.EnterpriseKraUpdateManyWithWhereWithoutOrgUnitInput | Prisma.EnterpriseKraUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.EnterpriseKraScalarWhereInput | Prisma.EnterpriseKraScalarWhereInput[];
};
export type EnterpriseKraUncheckedUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput> | Prisma.EnterpriseKraCreateWithoutOrgUnitInput[] | Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput | Prisma.EnterpriseKraCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.EnterpriseKraUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.EnterpriseKraUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.EnterpriseKraCreateManyOrgUnitInputEnvelope;
    set?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    disconnect?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    delete?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    connect?: Prisma.EnterpriseKraWhereUniqueInput | Prisma.EnterpriseKraWhereUniqueInput[];
    update?: Prisma.EnterpriseKraUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.EnterpriseKraUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.EnterpriseKraUpdateManyWithWhereWithoutOrgUnitInput | Prisma.EnterpriseKraUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.EnterpriseKraScalarWhereInput | Prisma.EnterpriseKraScalarWhereInput[];
};
export type EnterpriseKraCreateNestedOneWithoutObjectiveMapInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutObjectiveMapInput, Prisma.EnterpriseKraUncheckedCreateWithoutObjectiveMapInput>;
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutObjectiveMapInput;
    connect?: Prisma.EnterpriseKraWhereUniqueInput;
};
export type EnterpriseKraUpdateOneRequiredWithoutObjectiveMapNestedInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutObjectiveMapInput, Prisma.EnterpriseKraUncheckedCreateWithoutObjectiveMapInput>;
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutObjectiveMapInput;
    upsert?: Prisma.EnterpriseKraUpsertWithoutObjectiveMapInput;
    connect?: Prisma.EnterpriseKraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EnterpriseKraUpdateToOneWithWhereWithoutObjectiveMapInput, Prisma.EnterpriseKraUpdateWithoutObjectiveMapInput>, Prisma.EnterpriseKraUncheckedUpdateWithoutObjectiveMapInput>;
};
export type EnterpriseKraCreateNestedOneWithoutKpiDefinitionsInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutKpiDefinitionsInput, Prisma.EnterpriseKraUncheckedCreateWithoutKpiDefinitionsInput>;
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutKpiDefinitionsInput;
    connect?: Prisma.EnterpriseKraWhereUniqueInput;
};
export type EnterpriseKraUpdateOneRequiredWithoutKpiDefinitionsNestedInput = {
    create?: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutKpiDefinitionsInput, Prisma.EnterpriseKraUncheckedCreateWithoutKpiDefinitionsInput>;
    connectOrCreate?: Prisma.EnterpriseKraCreateOrConnectWithoutKpiDefinitionsInput;
    upsert?: Prisma.EnterpriseKraUpsertWithoutKpiDefinitionsInput;
    connect?: Prisma.EnterpriseKraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EnterpriseKraUpdateToOneWithWhereWithoutKpiDefinitionsInput, Prisma.EnterpriseKraUpdateWithoutKpiDefinitionsInput>, Prisma.EnterpriseKraUncheckedUpdateWithoutKpiDefinitionsInput>;
};
export type EnterpriseKraCreateWithoutOrgUnitInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    objectiveMap?: Prisma.KraObjectiveMapCreateNestedManyWithoutKraInput;
    kpiDefinitions?: Prisma.KpiDefinitionCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraUncheckedCreateWithoutOrgUnitInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    objectiveMap?: Prisma.KraObjectiveMapUncheckedCreateNestedManyWithoutKraInput;
    kpiDefinitions?: Prisma.KpiDefinitionUncheckedCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraCreateOrConnectWithoutOrgUnitInput = {
    where: Prisma.EnterpriseKraWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput>;
};
export type EnterpriseKraCreateManyOrgUnitInputEnvelope = {
    data: Prisma.EnterpriseKraCreateManyOrgUnitInput | Prisma.EnterpriseKraCreateManyOrgUnitInput[];
    skipDuplicates?: boolean;
};
export type EnterpriseKraUpsertWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.EnterpriseKraWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnterpriseKraUpdateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedUpdateWithoutOrgUnitInput>;
    create: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedCreateWithoutOrgUnitInput>;
};
export type EnterpriseKraUpdateWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.EnterpriseKraWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnterpriseKraUpdateWithoutOrgUnitInput, Prisma.EnterpriseKraUncheckedUpdateWithoutOrgUnitInput>;
};
export type EnterpriseKraUpdateManyWithWhereWithoutOrgUnitInput = {
    where: Prisma.EnterpriseKraScalarWhereInput;
    data: Prisma.XOR<Prisma.EnterpriseKraUpdateManyMutationInput, Prisma.EnterpriseKraUncheckedUpdateManyWithoutOrgUnitInput>;
};
export type EnterpriseKraScalarWhereInput = {
    AND?: Prisma.EnterpriseKraScalarWhereInput | Prisma.EnterpriseKraScalarWhereInput[];
    OR?: Prisma.EnterpriseKraScalarWhereInput[];
    NOT?: Prisma.EnterpriseKraScalarWhereInput | Prisma.EnterpriseKraScalarWhereInput[];
    code?: Prisma.StringFilter<"EnterpriseKra"> | string;
    name?: Prisma.StringFilter<"EnterpriseKra"> | string;
    orgUnitCode?: Prisma.StringFilter<"EnterpriseKra"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"EnterpriseKra"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"EnterpriseKra"> | Date | string;
};
export type EnterpriseKraCreateWithoutObjectiveMapInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutKrasInput;
    kpiDefinitions?: Prisma.KpiDefinitionCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraUncheckedCreateWithoutObjectiveMapInput = {
    code: string;
    name: string;
    orgUnitCode: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    kpiDefinitions?: Prisma.KpiDefinitionUncheckedCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraCreateOrConnectWithoutObjectiveMapInput = {
    where: Prisma.EnterpriseKraWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutObjectiveMapInput, Prisma.EnterpriseKraUncheckedCreateWithoutObjectiveMapInput>;
};
export type EnterpriseKraUpsertWithoutObjectiveMapInput = {
    update: Prisma.XOR<Prisma.EnterpriseKraUpdateWithoutObjectiveMapInput, Prisma.EnterpriseKraUncheckedUpdateWithoutObjectiveMapInput>;
    create: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutObjectiveMapInput, Prisma.EnterpriseKraUncheckedCreateWithoutObjectiveMapInput>;
    where?: Prisma.EnterpriseKraWhereInput;
};
export type EnterpriseKraUpdateToOneWithWhereWithoutObjectiveMapInput = {
    where?: Prisma.EnterpriseKraWhereInput;
    data: Prisma.XOR<Prisma.EnterpriseKraUpdateWithoutObjectiveMapInput, Prisma.EnterpriseKraUncheckedUpdateWithoutObjectiveMapInput>;
};
export type EnterpriseKraUpdateWithoutObjectiveMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutKrasNestedInput;
    kpiDefinitions?: Prisma.KpiDefinitionUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraUncheckedUpdateWithoutObjectiveMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kpiDefinitions?: Prisma.KpiDefinitionUncheckedUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraCreateWithoutKpiDefinitionsInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutKrasInput;
    objectiveMap?: Prisma.KraObjectiveMapCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraUncheckedCreateWithoutKpiDefinitionsInput = {
    code: string;
    name: string;
    orgUnitCode: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    objectiveMap?: Prisma.KraObjectiveMapUncheckedCreateNestedManyWithoutKraInput;
};
export type EnterpriseKraCreateOrConnectWithoutKpiDefinitionsInput = {
    where: Prisma.EnterpriseKraWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutKpiDefinitionsInput, Prisma.EnterpriseKraUncheckedCreateWithoutKpiDefinitionsInput>;
};
export type EnterpriseKraUpsertWithoutKpiDefinitionsInput = {
    update: Prisma.XOR<Prisma.EnterpriseKraUpdateWithoutKpiDefinitionsInput, Prisma.EnterpriseKraUncheckedUpdateWithoutKpiDefinitionsInput>;
    create: Prisma.XOR<Prisma.EnterpriseKraCreateWithoutKpiDefinitionsInput, Prisma.EnterpriseKraUncheckedCreateWithoutKpiDefinitionsInput>;
    where?: Prisma.EnterpriseKraWhereInput;
};
export type EnterpriseKraUpdateToOneWithWhereWithoutKpiDefinitionsInput = {
    where?: Prisma.EnterpriseKraWhereInput;
    data: Prisma.XOR<Prisma.EnterpriseKraUpdateWithoutKpiDefinitionsInput, Prisma.EnterpriseKraUncheckedUpdateWithoutKpiDefinitionsInput>;
};
export type EnterpriseKraUpdateWithoutKpiDefinitionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutKrasNestedInput;
    objectiveMap?: Prisma.KraObjectiveMapUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraUncheckedUpdateWithoutKpiDefinitionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    objectiveMap?: Prisma.KraObjectiveMapUncheckedUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraCreateManyOrgUnitInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type EnterpriseKraUpdateWithoutOrgUnitInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    objectiveMap?: Prisma.KraObjectiveMapUpdateManyWithoutKraNestedInput;
    kpiDefinitions?: Prisma.KpiDefinitionUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraUncheckedUpdateWithoutOrgUnitInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    objectiveMap?: Prisma.KraObjectiveMapUncheckedUpdateManyWithoutKraNestedInput;
    kpiDefinitions?: Prisma.KpiDefinitionUncheckedUpdateManyWithoutKraNestedInput;
};
export type EnterpriseKraUncheckedUpdateManyWithoutOrgUnitInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnterpriseKraCountOutputType = {
    objectiveMap: number;
    kpiDefinitions: number;
};
export type EnterpriseKraCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    objectiveMap?: boolean | EnterpriseKraCountOutputTypeCountObjectiveMapArgs;
    kpiDefinitions?: boolean | EnterpriseKraCountOutputTypeCountKpiDefinitionsArgs;
};
export type EnterpriseKraCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraCountOutputTypeSelect<ExtArgs> | null;
};
export type EnterpriseKraCountOutputTypeCountObjectiveMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KraObjectiveMapWhereInput;
};
export type EnterpriseKraCountOutputTypeCountKpiDefinitionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiDefinitionWhereInput;
};
export type EnterpriseKraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    orgUnitCode?: boolean;
    status?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    objectiveMap?: boolean | Prisma.EnterpriseKra$objectiveMapArgs<ExtArgs>;
    kpiDefinitions?: boolean | Prisma.EnterpriseKra$kpiDefinitionsArgs<ExtArgs>;
    _count?: boolean | Prisma.EnterpriseKraCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enterpriseKra"]>;
export type EnterpriseKraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    orgUnitCode?: boolean;
    status?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enterpriseKra"]>;
export type EnterpriseKraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    orgUnitCode?: boolean;
    status?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enterpriseKra"]>;
export type EnterpriseKraSelectScalar = {
    code?: boolean;
    name?: boolean;
    orgUnitCode?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type EnterpriseKraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "name" | "orgUnitCode" | "status" | "createdAt", ExtArgs["result"]["enterpriseKra"]>;
export type EnterpriseKraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
    objectiveMap?: boolean | Prisma.EnterpriseKra$objectiveMapArgs<ExtArgs>;
    kpiDefinitions?: boolean | Prisma.EnterpriseKra$kpiDefinitionsArgs<ExtArgs>;
    _count?: boolean | Prisma.EnterpriseKraCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EnterpriseKraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type EnterpriseKraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type $EnterpriseKraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EnterpriseKra";
    objects: {
        orgUnit: Prisma.$OrgUnitPayload<ExtArgs>;
        objectiveMap: Prisma.$KraObjectiveMapPayload<ExtArgs>[];
        kpiDefinitions: Prisma.$KpiDefinitionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        name: string;
        orgUnitCode: string;
        status: $Enums.GovernedItemStatus;
        createdAt: Date;
    }, ExtArgs["result"]["enterpriseKra"]>;
    composites: {};
};
export type EnterpriseKraGetPayload<S extends boolean | null | undefined | EnterpriseKraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload, S>;
export type EnterpriseKraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnterpriseKraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnterpriseKraCountAggregateInputType | true;
};
export interface EnterpriseKraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EnterpriseKra'];
        meta: {
            name: 'EnterpriseKra';
        };
    };
    findUnique<T extends EnterpriseKraFindUniqueArgs>(args: Prisma.SelectSubset<T, EnterpriseKraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnterpriseKraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnterpriseKraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnterpriseKraFindFirstArgs>(args?: Prisma.SelectSubset<T, EnterpriseKraFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnterpriseKraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnterpriseKraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnterpriseKraFindManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseKraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnterpriseKraCreateArgs>(args: Prisma.SelectSubset<T, EnterpriseKraCreateArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnterpriseKraCreateManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseKraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnterpriseKraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnterpriseKraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnterpriseKraDeleteArgs>(args: Prisma.SelectSubset<T, EnterpriseKraDeleteArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnterpriseKraUpdateArgs>(args: Prisma.SelectSubset<T, EnterpriseKraUpdateArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnterpriseKraDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseKraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnterpriseKraUpdateManyArgs>(args: Prisma.SelectSubset<T, EnterpriseKraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnterpriseKraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnterpriseKraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnterpriseKraUpsertArgs>(args: Prisma.SelectSubset<T, EnterpriseKraUpsertArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnterpriseKraCountArgs>(args?: Prisma.Subset<T, EnterpriseKraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnterpriseKraCountAggregateOutputType> : number>;
    aggregate<T extends EnterpriseKraAggregateArgs>(args: Prisma.Subset<T, EnterpriseKraAggregateArgs>): Prisma.PrismaPromise<GetEnterpriseKraAggregateType<T>>;
    groupBy<T extends EnterpriseKraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnterpriseKraGroupByArgs['orderBy'];
    } : {
        orderBy?: EnterpriseKraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnterpriseKraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnterpriseKraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnterpriseKraFieldRefs;
}
export interface Prisma__EnterpriseKraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orgUnit<T extends Prisma.OrgUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    objectiveMap<T extends Prisma.EnterpriseKra$objectiveMapArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseKra$objectiveMapArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    kpiDefinitions<T extends Prisma.EnterpriseKra$kpiDefinitionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseKra$kpiDefinitionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnterpriseKraFieldRefs {
    readonly code: Prisma.FieldRef<"EnterpriseKra", 'String'>;
    readonly name: Prisma.FieldRef<"EnterpriseKra", 'String'>;
    readonly orgUnitCode: Prisma.FieldRef<"EnterpriseKra", 'String'>;
    readonly status: Prisma.FieldRef<"EnterpriseKra", 'GovernedItemStatus'>;
    readonly createdAt: Prisma.FieldRef<"EnterpriseKra", 'DateTime'>;
}
export type EnterpriseKraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where: Prisma.EnterpriseKraWhereUniqueInput;
};
export type EnterpriseKraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where: Prisma.EnterpriseKraWhereUniqueInput;
};
export type EnterpriseKraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where?: Prisma.EnterpriseKraWhereInput;
    orderBy?: Prisma.EnterpriseKraOrderByWithRelationInput | Prisma.EnterpriseKraOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseKraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnterpriseKraScalarFieldEnum | Prisma.EnterpriseKraScalarFieldEnum[];
};
export type EnterpriseKraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where?: Prisma.EnterpriseKraWhereInput;
    orderBy?: Prisma.EnterpriseKraOrderByWithRelationInput | Prisma.EnterpriseKraOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseKraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnterpriseKraScalarFieldEnum | Prisma.EnterpriseKraScalarFieldEnum[];
};
export type EnterpriseKraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where?: Prisma.EnterpriseKraWhereInput;
    orderBy?: Prisma.EnterpriseKraOrderByWithRelationInput | Prisma.EnterpriseKraOrderByWithRelationInput[];
    cursor?: Prisma.EnterpriseKraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnterpriseKraScalarFieldEnum | Prisma.EnterpriseKraScalarFieldEnum[];
};
export type EnterpriseKraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnterpriseKraCreateInput, Prisma.EnterpriseKraUncheckedCreateInput>;
};
export type EnterpriseKraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnterpriseKraCreateManyInput | Prisma.EnterpriseKraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnterpriseKraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    data: Prisma.EnterpriseKraCreateManyInput | Prisma.EnterpriseKraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EnterpriseKraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EnterpriseKraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnterpriseKraUpdateInput, Prisma.EnterpriseKraUncheckedUpdateInput>;
    where: Prisma.EnterpriseKraWhereUniqueInput;
};
export type EnterpriseKraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnterpriseKraUpdateManyMutationInput, Prisma.EnterpriseKraUncheckedUpdateManyInput>;
    where?: Prisma.EnterpriseKraWhereInput;
    limit?: number;
};
export type EnterpriseKraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnterpriseKraUpdateManyMutationInput, Prisma.EnterpriseKraUncheckedUpdateManyInput>;
    where?: Prisma.EnterpriseKraWhereInput;
    limit?: number;
    include?: Prisma.EnterpriseKraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EnterpriseKraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where: Prisma.EnterpriseKraWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnterpriseKraCreateInput, Prisma.EnterpriseKraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnterpriseKraUpdateInput, Prisma.EnterpriseKraUncheckedUpdateInput>;
};
export type EnterpriseKraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
    where: Prisma.EnterpriseKraWhereUniqueInput;
};
export type EnterpriseKraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnterpriseKraWhereInput;
    limit?: number;
};
export type EnterpriseKra$objectiveMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where?: Prisma.KraObjectiveMapWhereInput;
    orderBy?: Prisma.KraObjectiveMapOrderByWithRelationInput | Prisma.KraObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.KraObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KraObjectiveMapScalarFieldEnum | Prisma.KraObjectiveMapScalarFieldEnum[];
};
export type EnterpriseKra$kpiDefinitionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KpiDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KpiDefinitionInclude<ExtArgs> | null;
    where?: Prisma.KpiDefinitionWhereInput;
    orderBy?: Prisma.KpiDefinitionOrderByWithRelationInput | Prisma.KpiDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KpiDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiDefinitionScalarFieldEnum | Prisma.KpiDefinitionScalarFieldEnum[];
};
export type EnterpriseKraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnterpriseKraSelect<ExtArgs> | null;
    omit?: Prisma.EnterpriseKraOmit<ExtArgs> | null;
    include?: Prisma.EnterpriseKraInclude<ExtArgs> | null;
};
