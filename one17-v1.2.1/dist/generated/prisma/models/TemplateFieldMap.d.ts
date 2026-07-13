import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TemplateFieldMapModel = runtime.Types.Result.DefaultSelection<Prisma.$TemplateFieldMapPayload>;
export type AggregateTemplateFieldMap = {
    _count: TemplateFieldMapCountAggregateOutputType | null;
    _avg: TemplateFieldMapAvgAggregateOutputType | null;
    _sum: TemplateFieldMapSumAggregateOutputType | null;
    _min: TemplateFieldMapMinAggregateOutputType | null;
    _max: TemplateFieldMapMaxAggregateOutputType | null;
};
export type TemplateFieldMapAvgAggregateOutputType = {
    page: number | null;
    xPt: number | null;
    yPt: number | null;
    fontSizePt: number | null;
    mapVersion: number | null;
};
export type TemplateFieldMapSumAggregateOutputType = {
    page: number | null;
    xPt: number | null;
    yPt: number | null;
    fontSizePt: number | null;
    mapVersion: number | null;
};
export type TemplateFieldMapMinAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    page: number | null;
    fieldName: string | null;
    xPt: number | null;
    yPt: number | null;
    fontSizePt: number | null;
    label: string | null;
    cellClass: $Enums.CellClass | null;
    sourceKey: string | null;
    staticValue: string | null;
    mapVersion: number | null;
    createdAt: Date | null;
};
export type TemplateFieldMapMaxAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    page: number | null;
    fieldName: string | null;
    xPt: number | null;
    yPt: number | null;
    fontSizePt: number | null;
    label: string | null;
    cellClass: $Enums.CellClass | null;
    sourceKey: string | null;
    staticValue: string | null;
    mapVersion: number | null;
    createdAt: Date | null;
};
export type TemplateFieldMapCountAggregateOutputType = {
    id: number;
    regulatorTemplateId: number;
    page: number;
    fieldName: number;
    xPt: number;
    yPt: number;
    fontSizePt: number;
    label: number;
    cellClass: number;
    sourceKey: number;
    staticValue: number;
    mapVersion: number;
    createdAt: number;
    _all: number;
};
export type TemplateFieldMapAvgAggregateInputType = {
    page?: true;
    xPt?: true;
    yPt?: true;
    fontSizePt?: true;
    mapVersion?: true;
};
export type TemplateFieldMapSumAggregateInputType = {
    page?: true;
    xPt?: true;
    yPt?: true;
    fontSizePt?: true;
    mapVersion?: true;
};
export type TemplateFieldMapMinAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    page?: true;
    fieldName?: true;
    xPt?: true;
    yPt?: true;
    fontSizePt?: true;
    label?: true;
    cellClass?: true;
    sourceKey?: true;
    staticValue?: true;
    mapVersion?: true;
    createdAt?: true;
};
export type TemplateFieldMapMaxAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    page?: true;
    fieldName?: true;
    xPt?: true;
    yPt?: true;
    fontSizePt?: true;
    label?: true;
    cellClass?: true;
    sourceKey?: true;
    staticValue?: true;
    mapVersion?: true;
    createdAt?: true;
};
export type TemplateFieldMapCountAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    page?: true;
    fieldName?: true;
    xPt?: true;
    yPt?: true;
    fontSizePt?: true;
    label?: true;
    cellClass?: true;
    sourceKey?: true;
    staticValue?: true;
    mapVersion?: true;
    createdAt?: true;
    _all?: true;
};
export type TemplateFieldMapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateFieldMapWhereInput;
    orderBy?: Prisma.TemplateFieldMapOrderByWithRelationInput | Prisma.TemplateFieldMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldMapWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TemplateFieldMapCountAggregateInputType;
    _avg?: TemplateFieldMapAvgAggregateInputType;
    _sum?: TemplateFieldMapSumAggregateInputType;
    _min?: TemplateFieldMapMinAggregateInputType;
    _max?: TemplateFieldMapMaxAggregateInputType;
};
export type GetTemplateFieldMapAggregateType<T extends TemplateFieldMapAggregateArgs> = {
    [P in keyof T & keyof AggregateTemplateFieldMap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTemplateFieldMap[P]> : Prisma.GetScalarType<T[P], AggregateTemplateFieldMap[P]>;
};
export type TemplateFieldMapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateFieldMapWhereInput;
    orderBy?: Prisma.TemplateFieldMapOrderByWithAggregationInput | Prisma.TemplateFieldMapOrderByWithAggregationInput[];
    by: Prisma.TemplateFieldMapScalarFieldEnum[] | Prisma.TemplateFieldMapScalarFieldEnum;
    having?: Prisma.TemplateFieldMapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TemplateFieldMapCountAggregateInputType | true;
    _avg?: TemplateFieldMapAvgAggregateInputType;
    _sum?: TemplateFieldMapSumAggregateInputType;
    _min?: TemplateFieldMapMinAggregateInputType;
    _max?: TemplateFieldMapMaxAggregateInputType;
};
export type TemplateFieldMapGroupByOutputType = {
    id: string;
    regulatorTemplateId: string;
    page: number;
    fieldName: string | null;
    xPt: number | null;
    yPt: number | null;
    fontSizePt: number | null;
    label: string | null;
    cellClass: $Enums.CellClass;
    sourceKey: string | null;
    staticValue: string | null;
    mapVersion: number;
    createdAt: Date;
    _count: TemplateFieldMapCountAggregateOutputType | null;
    _avg: TemplateFieldMapAvgAggregateOutputType | null;
    _sum: TemplateFieldMapSumAggregateOutputType | null;
    _min: TemplateFieldMapMinAggregateOutputType | null;
    _max: TemplateFieldMapMaxAggregateOutputType | null;
};
export type GetTemplateFieldMapGroupByPayload<T extends TemplateFieldMapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TemplateFieldMapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TemplateFieldMapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TemplateFieldMapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TemplateFieldMapGroupByOutputType[P]>;
}>>;
export type TemplateFieldMapWhereInput = {
    AND?: Prisma.TemplateFieldMapWhereInput | Prisma.TemplateFieldMapWhereInput[];
    OR?: Prisma.TemplateFieldMapWhereInput[];
    NOT?: Prisma.TemplateFieldMapWhereInput | Prisma.TemplateFieldMapWhereInput[];
    id?: Prisma.UuidFilter<"TemplateFieldMap"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"TemplateFieldMap"> | string;
    page?: Prisma.IntFilter<"TemplateFieldMap"> | number;
    fieldName?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    xPt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    yPt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    fontSizePt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    label?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    cellClass?: Prisma.EnumCellClassFilter<"TemplateFieldMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    staticValue?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    mapVersion?: Prisma.IntFilter<"TemplateFieldMap"> | number;
    createdAt?: Prisma.DateTimeFilter<"TemplateFieldMap"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
};
export type TemplateFieldMapOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrderInput | Prisma.SortOrder;
    xPt?: Prisma.SortOrderInput | Prisma.SortOrder;
    yPt?: Prisma.SortOrderInput | Prisma.SortOrder;
    fontSizePt?: Prisma.SortOrderInput | Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    staticValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    regulatorTemplate?: Prisma.RegulatorTemplateOrderByWithRelationInput;
};
export type TemplateFieldMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    regulatorTemplateId_page_fieldName_mapVersion?: Prisma.TemplateFieldMapRegulatorTemplateIdPageFieldNameMapVersionCompoundUniqueInput;
    AND?: Prisma.TemplateFieldMapWhereInput | Prisma.TemplateFieldMapWhereInput[];
    OR?: Prisma.TemplateFieldMapWhereInput[];
    NOT?: Prisma.TemplateFieldMapWhereInput | Prisma.TemplateFieldMapWhereInput[];
    regulatorTemplateId?: Prisma.UuidFilter<"TemplateFieldMap"> | string;
    page?: Prisma.IntFilter<"TemplateFieldMap"> | number;
    fieldName?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    xPt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    yPt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    fontSizePt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    label?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    cellClass?: Prisma.EnumCellClassFilter<"TemplateFieldMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    staticValue?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    mapVersion?: Prisma.IntFilter<"TemplateFieldMap"> | number;
    createdAt?: Prisma.DateTimeFilter<"TemplateFieldMap"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
}, "id" | "regulatorTemplateId_page_fieldName_mapVersion">;
export type TemplateFieldMapOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrderInput | Prisma.SortOrder;
    xPt?: Prisma.SortOrderInput | Prisma.SortOrder;
    yPt?: Prisma.SortOrderInput | Prisma.SortOrder;
    fontSizePt?: Prisma.SortOrderInput | Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    staticValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TemplateFieldMapCountOrderByAggregateInput;
    _avg?: Prisma.TemplateFieldMapAvgOrderByAggregateInput;
    _max?: Prisma.TemplateFieldMapMaxOrderByAggregateInput;
    _min?: Prisma.TemplateFieldMapMinOrderByAggregateInput;
    _sum?: Prisma.TemplateFieldMapSumOrderByAggregateInput;
};
export type TemplateFieldMapScalarWhereWithAggregatesInput = {
    AND?: Prisma.TemplateFieldMapScalarWhereWithAggregatesInput | Prisma.TemplateFieldMapScalarWhereWithAggregatesInput[];
    OR?: Prisma.TemplateFieldMapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TemplateFieldMapScalarWhereWithAggregatesInput | Prisma.TemplateFieldMapScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TemplateFieldMap"> | string;
    regulatorTemplateId?: Prisma.UuidWithAggregatesFilter<"TemplateFieldMap"> | string;
    page?: Prisma.IntWithAggregatesFilter<"TemplateFieldMap"> | number;
    fieldName?: Prisma.StringNullableWithAggregatesFilter<"TemplateFieldMap"> | string | null;
    xPt?: Prisma.FloatNullableWithAggregatesFilter<"TemplateFieldMap"> | number | null;
    yPt?: Prisma.FloatNullableWithAggregatesFilter<"TemplateFieldMap"> | number | null;
    fontSizePt?: Prisma.FloatNullableWithAggregatesFilter<"TemplateFieldMap"> | number | null;
    label?: Prisma.StringNullableWithAggregatesFilter<"TemplateFieldMap"> | string | null;
    cellClass?: Prisma.EnumCellClassWithAggregatesFilter<"TemplateFieldMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableWithAggregatesFilter<"TemplateFieldMap"> | string | null;
    staticValue?: Prisma.StringNullableWithAggregatesFilter<"TemplateFieldMap"> | string | null;
    mapVersion?: Prisma.IntWithAggregatesFilter<"TemplateFieldMap"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TemplateFieldMap"> | Date | string;
};
export type TemplateFieldMapCreateInput = {
    id?: string;
    page: number;
    fieldName?: string | null;
    xPt?: number | null;
    yPt?: number | null;
    fontSizePt?: number | null;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
    regulatorTemplate: Prisma.RegulatorTemplateCreateNestedOneWithoutFieldMapsInput;
};
export type TemplateFieldMapUncheckedCreateInput = {
    id?: string;
    regulatorTemplateId: string;
    page: number;
    fieldName?: string | null;
    xPt?: number | null;
    yPt?: number | null;
    fontSizePt?: number | null;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateFieldMapUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    xPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    yPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fontSizePt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regulatorTemplate?: Prisma.RegulatorTemplateUpdateOneRequiredWithoutFieldMapsNestedInput;
};
export type TemplateFieldMapUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    xPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    yPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fontSizePt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateFieldMapCreateManyInput = {
    id?: string;
    regulatorTemplateId: string;
    page: number;
    fieldName?: string | null;
    xPt?: number | null;
    yPt?: number | null;
    fontSizePt?: number | null;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateFieldMapUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    xPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    yPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fontSizePt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateFieldMapUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    xPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    yPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fontSizePt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateFieldMapListRelationFilter = {
    every?: Prisma.TemplateFieldMapWhereInput;
    some?: Prisma.TemplateFieldMapWhereInput;
    none?: Prisma.TemplateFieldMapWhereInput;
};
export type TemplateFieldMapOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TemplateFieldMapRegulatorTemplateIdPageFieldNameMapVersionCompoundUniqueInput = {
    regulatorTemplateId: string;
    page: number;
    fieldName: string;
    mapVersion: number;
};
export type TemplateFieldMapCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrder;
    xPt?: Prisma.SortOrder;
    yPt?: Prisma.SortOrder;
    fontSizePt?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrder;
    staticValue?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TemplateFieldMapAvgOrderByAggregateInput = {
    page?: Prisma.SortOrder;
    xPt?: Prisma.SortOrder;
    yPt?: Prisma.SortOrder;
    fontSizePt?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
};
export type TemplateFieldMapMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrder;
    xPt?: Prisma.SortOrder;
    yPt?: Prisma.SortOrder;
    fontSizePt?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrder;
    staticValue?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TemplateFieldMapMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    fieldName?: Prisma.SortOrder;
    xPt?: Prisma.SortOrder;
    yPt?: Prisma.SortOrder;
    fontSizePt?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    cellClass?: Prisma.SortOrder;
    sourceKey?: Prisma.SortOrder;
    staticValue?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TemplateFieldMapSumOrderByAggregateInput = {
    page?: Prisma.SortOrder;
    xPt?: Prisma.SortOrder;
    yPt?: Prisma.SortOrder;
    fontSizePt?: Prisma.SortOrder;
    mapVersion?: Prisma.SortOrder;
};
export type TemplateFieldMapCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateFieldMapCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
};
export type TemplateFieldMapUncheckedCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateFieldMapCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
};
export type TemplateFieldMapUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.TemplateFieldMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateFieldMapCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    disconnect?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    delete?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    connect?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    update?: Prisma.TemplateFieldMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.TemplateFieldMapUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.TemplateFieldMapScalarWhereInput | Prisma.TemplateFieldMapScalarWhereInput[];
};
export type TemplateFieldMapUncheckedUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput[] | Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.TemplateFieldMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.TemplateFieldMapCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    disconnect?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    delete?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    connect?: Prisma.TemplateFieldMapWhereUniqueInput | Prisma.TemplateFieldMapWhereUniqueInput[];
    update?: Prisma.TemplateFieldMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.TemplateFieldMapUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.TemplateFieldMapUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.TemplateFieldMapScalarWhereInput | Prisma.TemplateFieldMapScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TemplateFieldMapCreateWithoutRegulatorTemplateInput = {
    id?: string;
    page: number;
    fieldName?: string | null;
    xPt?: number | null;
    yPt?: number | null;
    fontSizePt?: number | null;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput = {
    id?: string;
    page: number;
    fieldName?: string | null;
    xPt?: number | null;
    yPt?: number | null;
    fontSizePt?: number | null;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateFieldMapCreateOrConnectWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateFieldMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type TemplateFieldMapCreateManyRegulatorTemplateInputEnvelope = {
    data: Prisma.TemplateFieldMapCreateManyRegulatorTemplateInput | Prisma.TemplateFieldMapCreateManyRegulatorTemplateInput[];
    skipDuplicates?: boolean;
};
export type TemplateFieldMapUpsertWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateFieldMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.TemplateFieldMapUpdateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedUpdateWithoutRegulatorTemplateInput>;
    create: Prisma.XOR<Prisma.TemplateFieldMapCreateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type TemplateFieldMapUpdateWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateFieldMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.TemplateFieldMapUpdateWithoutRegulatorTemplateInput, Prisma.TemplateFieldMapUncheckedUpdateWithoutRegulatorTemplateInput>;
};
export type TemplateFieldMapUpdateManyWithWhereWithoutRegulatorTemplateInput = {
    where: Prisma.TemplateFieldMapScalarWhereInput;
    data: Prisma.XOR<Prisma.TemplateFieldMapUpdateManyMutationInput, Prisma.TemplateFieldMapUncheckedUpdateManyWithoutRegulatorTemplateInput>;
};
export type TemplateFieldMapScalarWhereInput = {
    AND?: Prisma.TemplateFieldMapScalarWhereInput | Prisma.TemplateFieldMapScalarWhereInput[];
    OR?: Prisma.TemplateFieldMapScalarWhereInput[];
    NOT?: Prisma.TemplateFieldMapScalarWhereInput | Prisma.TemplateFieldMapScalarWhereInput[];
    id?: Prisma.UuidFilter<"TemplateFieldMap"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"TemplateFieldMap"> | string;
    page?: Prisma.IntFilter<"TemplateFieldMap"> | number;
    fieldName?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    xPt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    yPt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    fontSizePt?: Prisma.FloatNullableFilter<"TemplateFieldMap"> | number | null;
    label?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    cellClass?: Prisma.EnumCellClassFilter<"TemplateFieldMap"> | $Enums.CellClass;
    sourceKey?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    staticValue?: Prisma.StringNullableFilter<"TemplateFieldMap"> | string | null;
    mapVersion?: Prisma.IntFilter<"TemplateFieldMap"> | number;
    createdAt?: Prisma.DateTimeFilter<"TemplateFieldMap"> | Date | string;
};
export type TemplateFieldMapCreateManyRegulatorTemplateInput = {
    id?: string;
    page: number;
    fieldName?: string | null;
    xPt?: number | null;
    yPt?: number | null;
    fontSizePt?: number | null;
    label?: string | null;
    cellClass: $Enums.CellClass;
    sourceKey?: string | null;
    staticValue?: string | null;
    mapVersion?: number;
    createdAt?: Date | string;
};
export type TemplateFieldMapUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    xPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    yPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fontSizePt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateFieldMapUncheckedUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    xPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    yPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fontSizePt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateFieldMapUncheckedUpdateManyWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.IntFieldUpdateOperationsInput | number;
    fieldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    xPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    yPt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fontSizePt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cellClass?: Prisma.EnumCellClassFieldUpdateOperationsInput | $Enums.CellClass;
    sourceKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staticValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapVersion?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateFieldMapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    page?: boolean;
    fieldName?: boolean;
    xPt?: boolean;
    yPt?: boolean;
    fontSizePt?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateFieldMap"]>;
export type TemplateFieldMapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    page?: boolean;
    fieldName?: boolean;
    xPt?: boolean;
    yPt?: boolean;
    fontSizePt?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateFieldMap"]>;
export type TemplateFieldMapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    page?: boolean;
    fieldName?: boolean;
    xPt?: boolean;
    yPt?: boolean;
    fontSizePt?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateFieldMap"]>;
export type TemplateFieldMapSelectScalar = {
    id?: boolean;
    regulatorTemplateId?: boolean;
    page?: boolean;
    fieldName?: boolean;
    xPt?: boolean;
    yPt?: boolean;
    fontSizePt?: boolean;
    label?: boolean;
    cellClass?: boolean;
    sourceKey?: boolean;
    staticValue?: boolean;
    mapVersion?: boolean;
    createdAt?: boolean;
};
export type TemplateFieldMapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "regulatorTemplateId" | "page" | "fieldName" | "xPt" | "yPt" | "fontSizePt" | "label" | "cellClass" | "sourceKey" | "staticValue" | "mapVersion" | "createdAt", ExtArgs["result"]["templateFieldMap"]>;
export type TemplateFieldMapInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type TemplateFieldMapIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type TemplateFieldMapIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type $TemplateFieldMapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TemplateFieldMap";
    objects: {
        regulatorTemplate: Prisma.$RegulatorTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        regulatorTemplateId: string;
        page: number;
        fieldName: string | null;
        xPt: number | null;
        yPt: number | null;
        fontSizePt: number | null;
        label: string | null;
        cellClass: $Enums.CellClass;
        sourceKey: string | null;
        staticValue: string | null;
        mapVersion: number;
        createdAt: Date;
    }, ExtArgs["result"]["templateFieldMap"]>;
    composites: {};
};
export type TemplateFieldMapGetPayload<S extends boolean | null | undefined | TemplateFieldMapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload, S>;
export type TemplateFieldMapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TemplateFieldMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TemplateFieldMapCountAggregateInputType | true;
};
export interface TemplateFieldMapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TemplateFieldMap'];
        meta: {
            name: 'TemplateFieldMap';
        };
    };
    findUnique<T extends TemplateFieldMapFindUniqueArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TemplateFieldMapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TemplateFieldMapFindFirstArgs>(args?: Prisma.SelectSubset<T, TemplateFieldMapFindFirstArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TemplateFieldMapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TemplateFieldMapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TemplateFieldMapFindManyArgs>(args?: Prisma.SelectSubset<T, TemplateFieldMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TemplateFieldMapCreateArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapCreateArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TemplateFieldMapCreateManyArgs>(args?: Prisma.SelectSubset<T, TemplateFieldMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TemplateFieldMapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TemplateFieldMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TemplateFieldMapDeleteArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapDeleteArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TemplateFieldMapUpdateArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapUpdateArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TemplateFieldMapDeleteManyArgs>(args?: Prisma.SelectSubset<T, TemplateFieldMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TemplateFieldMapUpdateManyArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TemplateFieldMapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TemplateFieldMapUpsertArgs>(args: Prisma.SelectSubset<T, TemplateFieldMapUpsertArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldMapClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TemplateFieldMapCountArgs>(args?: Prisma.Subset<T, TemplateFieldMapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TemplateFieldMapCountAggregateOutputType> : number>;
    aggregate<T extends TemplateFieldMapAggregateArgs>(args: Prisma.Subset<T, TemplateFieldMapAggregateArgs>): Prisma.PrismaPromise<GetTemplateFieldMapAggregateType<T>>;
    groupBy<T extends TemplateFieldMapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TemplateFieldMapGroupByArgs['orderBy'];
    } : {
        orderBy?: TemplateFieldMapGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TemplateFieldMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateFieldMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TemplateFieldMapFieldRefs;
}
export interface Prisma__TemplateFieldMapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    regulatorTemplate<T extends Prisma.RegulatorTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegulatorTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TemplateFieldMapFieldRefs {
    readonly id: Prisma.FieldRef<"TemplateFieldMap", 'String'>;
    readonly regulatorTemplateId: Prisma.FieldRef<"TemplateFieldMap", 'String'>;
    readonly page: Prisma.FieldRef<"TemplateFieldMap", 'Int'>;
    readonly fieldName: Prisma.FieldRef<"TemplateFieldMap", 'String'>;
    readonly xPt: Prisma.FieldRef<"TemplateFieldMap", 'Float'>;
    readonly yPt: Prisma.FieldRef<"TemplateFieldMap", 'Float'>;
    readonly fontSizePt: Prisma.FieldRef<"TemplateFieldMap", 'Float'>;
    readonly label: Prisma.FieldRef<"TemplateFieldMap", 'String'>;
    readonly cellClass: Prisma.FieldRef<"TemplateFieldMap", 'CellClass'>;
    readonly sourceKey: Prisma.FieldRef<"TemplateFieldMap", 'String'>;
    readonly staticValue: Prisma.FieldRef<"TemplateFieldMap", 'String'>;
    readonly mapVersion: Prisma.FieldRef<"TemplateFieldMap", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TemplateFieldMap", 'DateTime'>;
}
export type TemplateFieldMapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldMapWhereUniqueInput;
};
export type TemplateFieldMapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldMapWhereUniqueInput;
};
export type TemplateFieldMapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    where?: Prisma.TemplateFieldMapWhereInput;
    orderBy?: Prisma.TemplateFieldMapOrderByWithRelationInput | Prisma.TemplateFieldMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateFieldMapScalarFieldEnum | Prisma.TemplateFieldMapScalarFieldEnum[];
};
export type TemplateFieldMapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    where?: Prisma.TemplateFieldMapWhereInput;
    orderBy?: Prisma.TemplateFieldMapOrderByWithRelationInput | Prisma.TemplateFieldMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateFieldMapScalarFieldEnum | Prisma.TemplateFieldMapScalarFieldEnum[];
};
export type TemplateFieldMapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    where?: Prisma.TemplateFieldMapWhereInput;
    orderBy?: Prisma.TemplateFieldMapOrderByWithRelationInput | Prisma.TemplateFieldMapOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateFieldMapScalarFieldEnum | Prisma.TemplateFieldMapScalarFieldEnum[];
};
export type TemplateFieldMapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateFieldMapCreateInput, Prisma.TemplateFieldMapUncheckedCreateInput>;
};
export type TemplateFieldMapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TemplateFieldMapCreateManyInput | Prisma.TemplateFieldMapCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TemplateFieldMapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    data: Prisma.TemplateFieldMapCreateManyInput | Prisma.TemplateFieldMapCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TemplateFieldMapIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TemplateFieldMapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateFieldMapUpdateInput, Prisma.TemplateFieldMapUncheckedUpdateInput>;
    where: Prisma.TemplateFieldMapWhereUniqueInput;
};
export type TemplateFieldMapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TemplateFieldMapUpdateManyMutationInput, Prisma.TemplateFieldMapUncheckedUpdateManyInput>;
    where?: Prisma.TemplateFieldMapWhereInput;
    limit?: number;
};
export type TemplateFieldMapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateFieldMapUpdateManyMutationInput, Prisma.TemplateFieldMapUncheckedUpdateManyInput>;
    where?: Prisma.TemplateFieldMapWhereInput;
    limit?: number;
    include?: Prisma.TemplateFieldMapIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TemplateFieldMapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateFieldMapCreateInput, Prisma.TemplateFieldMapUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TemplateFieldMapUpdateInput, Prisma.TemplateFieldMapUncheckedUpdateInput>;
};
export type TemplateFieldMapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldMapWhereUniqueInput;
};
export type TemplateFieldMapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateFieldMapWhereInput;
    limit?: number;
};
export type TemplateFieldMapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldMapSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldMapOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldMapInclude<ExtArgs> | null;
};
