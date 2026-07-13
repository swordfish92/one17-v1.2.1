import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TemplateCellMapModel = runtime.Types.Result.DefaultSelection<Prisma.$TemplateCellMapPayload>;
export type AggregateTemplateCellMap = {
    _count: TemplateCellMapCountAggregateOutputType | null;
    _avg: TemplateCellMapAvgAggregateOutputType | null;
    _sum: TemplateCellMapSumAggregateOutputType | null;
    _min: TemplateCellMapMinAggregateOutputType | null;
    _max: TemplateCellMapMaxAggregateOutputType | null;
};
export type TemplateCellMapAvgAggregateOutputType = {
    mapVersion: number | null;
};
export type TemplateCellMapSumAggregateOutputType = {
    mapVersion: number | null;
};
export type TemplateCellMapMinAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    sheetName: string | null;
    cellAddress: string | null;
    label: string | null;
    cellClass: $Enums.CellClass | null;
    sourceKey: string | null;
    staticValue: string | null;
    mapVersion: number | null;
    createdAt: Date | null;
};
export type TemplateCellMapMaxAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    sheetName: string | null;
    cellAddress: string | null;
    label: string | null;
    cellClass: $Enums.CellClass | null;
    sourceKey: string | null;
    staticValue: string | null;
    mapVersion: number | null;
    createdAt: Date | null;
};
export type TemplateCellMapCountAggregateOutputType = {
    id: number;
    regulatorTemplateId: number;
    sheetName: number;
    cellAddress: number;
    label: number;
    cellClass: number;
    sourceKey: number;
    staticValue: number;
    mapVersion: number;
    createdAt: number;
    _all: number;
};
export type TemplateCellMapAvgAggregateInputType = {
    mapVersion?: true;
};
export type TemplateCellMapSumAggregateInputType = {
    mapVersion?: true;
};
export type TemplateCellMapMinAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    sheetName?: true;
    cellAddress?: true;
    label?: true;
    cellClass?: true;
    sourceKey?: true;
    staticValue?: true;
    mapVersion?: true;
    createdAt?: true;
};
export type TemplateCellMapMaxAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    sheetName?: true;
    cellAddress?: true;
    label?: true;
    cellClass?: true;
    sourceKey?: true;
    staticValue?: true;
    mapVersion?: true;
    createdAt?: true;
};
export type TemplateCellMapCountAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    sheetName?: true;
    cellAddress?: true;
    label?: true;
    cellClass?: true;
    sourceKey?: true;
    staticValue?: true;
    mapVersion?: true;
    createdAt?: true;
    _all?: true;
};
export type TemplateCellMapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateCellMapWhereInput;
    orderBy?: Prisma.TemplateCellMapOrderByWithRelationInput | Prisma.TemplateCellMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateCellMapWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TemplateCellMapCountAggregateInputType;
    _avg?: TemplateCellMapAvgAggregateInputType;
    _sum?: TemplateCellMapSumAggregateInputType;
    _min?: TemplateCellMapMinAggregateInputType;
    _max?: TemplateCellMapMaxAggregateInputType;
};
export type GetTemplateCellMapAggregateType<T extends TemplateCellMapAggregateArgs> = {
    [P in keyof T & keyof AggregateTemplateCellMap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTemplateCellMap[P]> : Prisma.GetScalarType<T[P], AggregateTemplateCellMap[P]>;
};
export type TemplateCellMapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateCellMapWhereInput;
    orderBy?: Prisma.TemplateCellMapOrderByWithAggregationInput | Prisma.TemplateCellMapOrderByWithAggregationInput[];
    by: Prisma.TemplateCellMapScalarFieldEnum[] | Prisma.TemplateCellMapScalarFieldEnum;
    having?: Prisma.TemplateCellMapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TemplateCellMapCountAggregateInputType | true;
    _avg?: TemplateCellMapAvgAggregateInputType;
    _sum?: TemplateCellMapSumAggregateInputType;
    _min?: TemplateCellMapMinAggregateInputType;
    _max?: TemplateCellMapMaxAggregateInputType;
};
export type TemplateCellMapGroupByOutputType = {
    id: string;
    regulatorTemplateId: string;
    sheetName: string;
    cellAddress: string;
    label: string | null;
    cellClass: $Enums.CellClass;
    sourceKey: string | null;
    staticValue: string | null;
    mapVersion: number;
    createdAt: Date;
    _count: TemplateCellMapCountAggregateOutputType | null;
    _avg: TemplateCellMapAvgAggregateOutputType | null;
    _sum: TemplateCellMapSumAggregateOutputType | null;
    _min: TemplateCellMapMinAggregateOutputType | null;
    _max: TemplateCellMapMaxAggregateOutputType | null;
};
export type GetTemplateCellMapGroupByPayload<T extends TemplateCellMapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TemplateCellMapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TemplateCellMapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TemplateCellMapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TemplateCellMapGroupByOutputType[P]>;
}>>;
export type TemplateCellMapWhereInput = {
    AND?: Prisma.TemplateCellMapWhereInput | Prisma.TemplateCellMapWhereInput[];
    OR?: Prisma.TemplateCellMapWhereInput[];
    NOT?: Prisma.TemplateCellMapWhereInput | Prisma.TemplateCellMapWhereInput[];
    id?: Prisma.UuidFilter<"TemplateCellMap"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"TemplateCellMap"> | string;
    sheetName?: Prisma.StringFilter<"TemplateCellMap"> | string;
    cellAddress?: Prisma.StringFilter<"TemplateCellMap"> | string;
    label?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    cellClass?: Prisma.EnumCellClassFilter<"TemplateCellMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    staticValue?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    mapVersion?: Prisma.IntFilter<"TemplateCellMap"> | number;
    createdAt?: Prisma.DateTimeFilter<"TemplateCellMap"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
};
export type TemplateCellMapOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    sheetName?: Prisma.SortOrder;
    cellAddress?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    staticValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    regulatorTemplate?: Prisma.RegulatorTemplateOrderByWithRelationInput;
};
export type TemplateCellMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    regulatorTemplateId_sheetName_cellAddress_mapVersion?: Prisma.TemplateCellMapRegulatorTemplateIdSheetNameCellAddressMapVersionCompoundUniqueInput;
    AND?: Prisma.TemplateCellMapWhereInput | Prisma.TemplateCellMapWhereInput[];
    OR?: Prisma.TemplateCellMapWhereInput[];
    NOT?: Prisma.TemplateCellMapWhereInput | Prisma.TemplateCellMapWhereInput[];
    regulatorTemplateId?: Prisma.UuidFilter<"TemplateCellMap"> | string;
    sheetName?: Prisma.StringFilter<"TemplateCellMap"> | string;
    cellAddress?: Prisma.StringFilter<"TemplateCellMap"> | string;
    label?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    cellClass?: Prisma.EnumCellClassFilter<"TemplateCellMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    staticValue?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    mapVersion?: Prisma.IntFilter<"TemplateCellMap"> | number;
    createdAt?: Prisma.DateTimeFilter<"TemplateCellMap"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
}, "id" | "regulatorTemplateId_sheetName_cellAddress_mapVersion">;
export type TemplateCellMapOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    sheetName?: Prisma.SortOrder;
    cellAddress?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    staticValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TemplateCellMapCountOrderByAggregateInput;
    _avg?: Prisma.TemplateCellMapAvgOrderByAggregateInput;
    _max?: Prisma.TemplateCellMapMaxOrderByAggregateInput;
    _min?: Prisma.TemplateCellMapMinOrderByAggregateInput;
    _sum?: Prisma.TemplateCellMapSumOrderByAggregateInput;
};
export type TemplateCellMapScalarWhereWithAggregatesInput = {
    AND?: Prisma.TemplateCellMapScalarWhereWithAggregatesInput | Prisma.TemplateCellMapScalarWhereWithAggregatesInput[];
    OR?: Prisma.TemplateCellMapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TemplateCellMapScalarWhereWithAggregatesInput | Prisma.TemplateCellMapScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TemplateCellMap"> | string;
    regulatorTemplateId?: Prisma.UuidWithAggregatesFilter<"TemplateCellMap"> | string;
    sheetName?: Prisma.StringWithAggregatesFilter<"TemplateCellMap"> | string;
    cellAddress?: Prisma.StringWithAggregatesFilter<"TemplateCellMap"> | string;
    label?: Prisma.StringNullableWithAggregatesFilter<"TemplateCellMap"> | string | null;
    cellClass?: Prisma.EnumCellClassWithAggregatesFilter<"TemplateCellMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableWithAggregatesFilter<"TemplateCellMap"> | string | null;
    staticValue?: Prisma.StringNullableWithAggregatesFilter<"TemplateCellMap"> | string | null;
    mapVersion?: Prisma.IntWithAggregatesFilter<"TemplateCellMap"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TemplateCellMap"> | Date | string;
};
export type TemplateCellMapCreateInput = {
    id?: string;
    sheetName: string;
    cellAddress: string;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
    regulatorTemplate: Prisma.RegulatorTemplateCreateNestedOneWithoutCellMapsInput;
};
export type TemplateCellMapUncheckedCreateInput = {
    id?: string;
    regulatorTemplateId: string;
    sheetName: string;
    cellAddress: string;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateCellMapUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sheetName?: Prisma.StringFieldUpdateOperationsInput | string;
    cellAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regulatorTemplate?: Prisma.RegulatorTemplateUpdateOneRequiredWithoutCellMapsNestedInput;
};
export type TemplateCellMapUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    sheetName?: Prisma.StringFieldUpdateOperationsInput | string;
    cellAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateCellMapCreateManyInput = {
    id?: string;
    regulatorTemplateId: string;
    sheetName: string;
    cellAddress: string;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateCellMapUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sheetName?: Prisma.StringFieldUpdateOperationsInput | string;
    cellAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateCellMapUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    sheetName?: Prisma.StringFieldUpdateOperationsInput | string;
    cellAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateCellMapListRelationFilter = {
    every?: Prisma.TemplateCellMapWhereInput;
    some?: Prisma.TemplateCellMapWhereInput;
    none?: Prisma.TemplateCellMapWhereInput;
};
export type TemplateCellMapOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TemplateCellMapRegulatorTemplateIdSheetNameCellAddressMapVersionCompoundUniqueInput = {
    regulatorTemplateId: string;
    sheetName: string;
    cellAddress: string;
    mapVersion: number;
};
export type TemplateCellMapCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    sheetName?: Prisma.SortOrder;
    cellAddress?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrder;
    staticValue?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TemplateCellMapAvgOrderByAggregateInput = {
    mapVersion?: Prisma.SortOrder;
};
export type TemplateCellMapMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    sheetName?: Prisma.SortOrder;
    cellAddress?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrder;
    staticValue?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TemplateCellMapMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    sheetName?: Prisma.SortOrder;
    cellAddress?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrder;
    staticValue?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TemplateCellMapSumOrderByAggregateInput = {
    mapVersion?: Prisma.SortOrder;
};
export type TemplateCellMapCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateCellMapCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
};
export type TemplateCellMapUncheckedCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateCellMapCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
};
export type TemplateCellMapUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.TemplateCellMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateCellMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateCellMapCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    disconnect?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    delete?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    connect?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    update?: Prisma.TemplateCellMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateCellMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.TemplateCellMapUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.TemplateCellMapUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.TemplateCellMapScalarWhereInput | Prisma.TemplateCellMapScalarWhereInput[];
};
export type TemplateCellMapUncheckedUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.TemplateCellMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateCellMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateCellMapCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    disconnect?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    delete?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    connect?: Prisma.TemplateCellMapWhereUniqueInput | Prisma.TemplateCellMapWhereUniqueInput[];
    update?: Prisma.TemplateCellMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateCellMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.TemplateCellMapUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.TemplateCellMapUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.TemplateCellMapScalarWhereInput | Prisma.TemplateCellMapScalarWhereInput[];
};
export type EnumCellClassFieldUpdateOperationsInput = {
    set?: $Enums.CellClass;
};
export type TemplateCellMapCreateWithoutRegulatorTemplateInput = {
    id?: string;
    sheetName: string;
    cellAddress: string;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput = {
    id?: string;
    sheetName: string;
    cellAddress: string;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateCellMapCreateOrConnectWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateCellMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type TemplateCellMapCreateManyRegulatorTemplateInputEnvelope = {
    data: Prisma.TemplateCellMapCreateManyRegulatorTemplateInput | Prisma.TemplateCellMapCreateManyRegulatorTemplateInput[];
    skipDuplicates?: boolean;
};
export type TemplateCellMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateCellMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.TemplateCellMapUpdateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedUpdateWithoutRegulatorTemplateInput>;
    create: Prisma.XOR<Prisma.TemplateCellMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type TemplateCellMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateCellMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.TemplateCellMapUpdateWithoutRegulatorTemplateInput, Prisma.TemplateCellMapUncheckedUpdateWithoutRegulatorTemplateInput>;
};
export type TemplateCellMapUpdateManyWithWhereWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateCellMapScalarWhereInput;
    data: Prisma.XOR<Prisma.TemplateCellMapUpdateManyMutationInput, Prisma.TemplateCellMapUncheckedUpdateManyWithoutRegulatorTemplateInput>;
};
export type TemplateCellMapScalarWhereInput = {
    AND?: Prisma.TemplateCellMapScalarWhereInput | Prisma.TemplateCellMapScalarWhereInput[];
    OR?: Prisma.TemplateCellMapScalarWhereInput[];
    NOT?: Prisma.TemplateCellMapScalarWhereInput | Prisma.TemplateCellMapScalarWhereInput[];
    id?: Prisma.UuidFilter<"TemplateCellMap"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"TemplateCellMap"> | string;
    sheetName?: Prisma.StringFilter<"TemplateCellMap"> | string;
    cellAddress?: Prisma.StringFilter<"TemplateCellMap"> | string;
    label?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    cellClass?: Prisma.EnumCellClassFilter<"TemplateCellMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    staticValue?: Prisma.StringNullableFilter<"TemplateCellMap"> | string | null;
    mapVersion?: Prisma.IntFilter<"TemplateCellMap"> | number;
    createdAt?: Prisma.DateTimeFilter<"TemplateCellMap"> | Date | string;
};
export type TemplateCellMapCreateManyRegulatorTemplateInput = {
    id?: string;
    sheetName: string;
    cellAddress: string;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateCellMapUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sheetName?: Prisma.StringFieldUpdateOperationsInput | string;
    cellAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateCellMapUncheckedUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sheetName?: Prisma.StringFieldUpdateOperationsInput | string;
    cellAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateCellMapUncheckedUpdateManyWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sheetName?: Prisma.StringFieldUpdateOperationsInput | string;
    cellAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateCellMapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    sheetName?: boolean;
    cellAddress?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateCellMap"]>;
export type TemplateCellMapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    sheetName?: boolean;
    cellAddress?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateCellMap"]>;
export type TemplateCellMapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    sheetName?: boolean;
    cellAddress?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateCellMap"]>;
export type TemplateCellMapSelectScalar = {
    id?: boolean;
    regulatorTemplateId?: boolean;
    sheetName?: boolean;
    cellAddress?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
};
export type TemplateCellMapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "regulatorTemplateId" | "sheetName" | "cellAddress" | "label" | "cellClass" | "sourceKey" | "staticValue" | "mapVersion" | "createdAt", ExtArgs["result"]["templateCellMap"]>;
export type TemplateCellMapInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type TemplateCellMapIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type TemplateCellMapIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type $TemplateCellMapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TemplateCellMap";
    objects: {
        regulatorTemplate: Prisma.$RegulatorTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        regulatorTemplateId: string;
        sheetName: string;
        cellAddress: string;
        label: string | null;
        cellClass: $Enums.CellClass;
        sourceKey: string | null;
        staticValue: string | null;
        mapVersion: number;
        createdAt: Date;
    }, ExtArgs["result"]["templateCellMap"]>;
    composites: {};
};
export type TemplateCellMapGetPayload<S extends boolean | null | undefined | TemplateCellMapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload, S>;
export type TemplateCellMapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TemplateCellMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TemplateCellMapCountAggregateInputType | true;
};
export interface TemplateCellMapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TemplateCellMap'];
        meta: {
            name: 'TemplateCellMap';
        };
    };
    findUnique<T extends TemplateCellMapFindUniqueArgs>(args: Prisma.SelectSubset<T, TemplateCellMapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TemplateCellMapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TemplateCellMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TemplateCellMapFindFirstArgs>(args?: Prisma.SelectSubset<T, TemplateCellMapFindFirstArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TemplateCellMapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TemplateCellMapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TemplateCellMapFindManyArgs>(args?: Prisma.SelectSubset<T, TemplateCellMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TemplateCellMapCreateArgs>(args: Prisma.SelectSubset<T, TemplateCellMapCreateArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TemplateCellMapCreateManyArgs>(args?: Prisma.SelectSubset<T, TemplateCellMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TemplateCellMapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TemplateCellMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TemplateCellMapDeleteArgs>(args: Prisma.SelectSubset<T, TemplateCellMapDeleteArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TemplateCellMapUpdateArgs>(args: Prisma.SelectSubset<T, TemplateCellMapUpdateArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TemplateCellMapDeleteManyArgs>(args?: Prisma.SelectSubset<T, TemplateCellMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TemplateCellMapUpdateManyArgs>(args: Prisma.SelectSubset<T, TemplateCellMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TemplateCellMapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TemplateCellMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TemplateCellMapUpsertArgs>(args: Prisma.SelectSubset<T, TemplateCellMapUpsertArgs<ExtArgs>>): Prisma.Prisma__TemplateCellMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateCellMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TemplateCellMapCountArgs>(args?: Prisma.Subset<T, TemplateCellMapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TemplateCellMapCountAggregateOutputType> : number>;
    aggregate<T extends TemplateCellMapAggregateArgs>(args: Prisma.Subset<T, TemplateCellMapAggregateArgs>): Prisma.PrismaPromise<GetTemplateCellMapAggregateType<T>>;
    groupBy<T extends TemplateCellMapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TemplateCellMapGroupByArgs['orderBy'];
    } : {
        orderBy?: TemplateCellMapGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TemplateCellMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateCellMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TemplateCellMapFieldRefs;
}
export interface Prisma__TemplateCellMapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    regulatorTemplate<T extends Prisma.RegulatorTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegulatorTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TemplateCellMapFieldRefs {
    readonly id: Prisma.FieldRef<"TemplateCellMap", 'String'>;
    readonly regulatorTemplateId: Prisma.FieldRef<"TemplateCellMap", 'String'>;
    readonly sheetName: Prisma.FieldRef<"TemplateCellMap", 'String'>;
    readonly cellAddress: Prisma.FieldRef<"TemplateCellMap", 'String'>;
    readonly label: Prisma.FieldRef<"TemplateCellMap", 'String'>;
    readonly cellClass: Prisma.FieldRef<"TemplateCellMap", 'CellClass'>;
    readonly sourceKey: Prisma.FieldRef<"TemplateCellMap", 'String'>;
    readonly staticValue: Prisma.FieldRef<"TemplateCellMap", 'String'>;
    readonly mapVersion: Prisma.FieldRef<"TemplateCellMap", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TemplateCellMap", 'DateTime'>;
}
export type TemplateCellMapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    where: Prisma.TemplateCellMapWhereUniqueInput;
};
export type TemplateCellMapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    where: Prisma.TemplateCellMapWhereUniqueInput;
};
export type TemplateCellMapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    where?: Prisma.TemplateCellMapWhereInput;
    orderBy?: Prisma.TemplateCellMapOrderByWithRelationInput | Prisma.TemplateCellMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateCellMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateCellMapScalarFieldEnum | Prisma.TemplateCellMapScalarFieldEnum[];
};
export type TemplateCellMapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    where?: Prisma.TemplateCellMapWhereInput;
    orderBy?: Prisma.TemplateCellMapOrderByWithRelationInput | Prisma.TemplateCellMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateCellMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateCellMapScalarFieldEnum | Prisma.TemplateCellMapScalarFieldEnum[];
};
export type TemplateCellMapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    where?: Prisma.TemplateCellMapWhereInput;
    orderBy?: Prisma.TemplateCellMapOrderByWithRelationInput | Prisma.TemplateCellMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateCellMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateCellMapScalarFieldEnum | Prisma.TemplateCellMapScalarFieldEnum[];
};
export type TemplateCellMapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateCellMapCreateInput, Prisma.TemplateCellMapUncheckedCreateInput>;
};
export type TemplateCellMapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TemplateCellMapCreateManyInput | Prisma.TemplateCellMapCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TemplateCellMapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    data: Prisma.TemplateCellMapCreateManyInput | Prisma.TemplateCellMapCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TemplateCellMapIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TemplateCellMapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateCellMapUpdateInput, Prisma.TemplateCellMapUncheckedUpdateInput>;
    where: Prisma.TemplateCellMapWhereUniqueInput;
};
export type TemplateCellMapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TemplateCellMapUpdateManyMutationInput, Prisma.TemplateCellMapUncheckedUpdateManyInput>;
    where?: Prisma.TemplateCellMapWhereInput;
    limit?: number;
};
export type TemplateCellMapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateCellMapUpdateManyMutationInput, Prisma.TemplateCellMapUncheckedUpdateManyInput>;
    where?: Prisma.TemplateCellMapWhereInput;
    limit?: number;
    include?: Prisma.TemplateCellMapIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TemplateCellMapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    where: Prisma.TemplateCellMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateCellMapCreateInput, Prisma.TemplateCellMapUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TemplateCellMapUpdateInput, Prisma.TemplateCellMapUncheckedUpdateInput>;
};
export type TemplateCellMapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
    where: Prisma.TemplateCellMapWhereUniqueInput;
};
export type TemplateCellMapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateCellMapWhereInput;
    limit?: number;
};
export type TemplateCellMapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateCellMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateCellMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateCellMapInclude<ExtArgs> | null;
};
