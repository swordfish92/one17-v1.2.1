import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RiskAppetiteCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$RiskAppetiteCategoryPayload>;
export type AggregateRiskAppetiteCategory = {
    _count: RiskAppetiteCategoryCountAggregateOutputType | null;
    _avg: RiskAppetiteCategoryAvgAggregateOutputType | null;
    _sum: RiskAppetiteCategorySumAggregateOutputType | null;
    _min: RiskAppetiteCategoryMinAggregateOutputType | null;
    _max: RiskAppetiteCategoryMaxAggregateOutputType | null;
};
export type RiskAppetiteCategoryAvgAggregateOutputType = {
    sortOrder: number | null;
    greenThreshold: runtime.Decimal | null;
    amberThreshold: runtime.Decimal | null;
    redThreshold: runtime.Decimal | null;
};
export type RiskAppetiteCategorySumAggregateOutputType = {
    sortOrder: number | null;
    greenThreshold: runtime.Decimal | null;
    amberThreshold: runtime.Decimal | null;
    redThreshold: runtime.Decimal | null;
};
export type RiskAppetiteCategoryMinAggregateOutputType = {
    id: string | null;
    matrixVersionId: string | null;
    sortOrder: number | null;
    riskCategory: string | null;
    appetiteStatement: string | null;
    appetiteLevel: string | null;
    direction: $Enums.RiskAppetiteDirection | null;
    isZeroTolerance: boolean | null;
    escalationOwner: string | null;
    greenThreshold: runtime.Decimal | null;
    amberThreshold: runtime.Decimal | null;
    redThreshold: runtime.Decimal | null;
};
export type RiskAppetiteCategoryMaxAggregateOutputType = {
    id: string | null;
    matrixVersionId: string | null;
    sortOrder: number | null;
    riskCategory: string | null;
    appetiteStatement: string | null;
    appetiteLevel: string | null;
    direction: $Enums.RiskAppetiteDirection | null;
    isZeroTolerance: boolean | null;
    escalationOwner: string | null;
    greenThreshold: runtime.Decimal | null;
    amberThreshold: runtime.Decimal | null;
    redThreshold: runtime.Decimal | null;
};
export type RiskAppetiteCategoryCountAggregateOutputType = {
    id: number;
    matrixVersionId: number;
    sortOrder: number;
    riskCategory: number;
    appetiteStatement: number;
    appetiteLevel: number;
    direction: number;
    isZeroTolerance: number;
    escalationOwner: number;
    greenThreshold: number;
    amberThreshold: number;
    redThreshold: number;
    _all: number;
};
export type RiskAppetiteCategoryAvgAggregateInputType = {
    sortOrder?: true;
    greenThreshold?: true;
    amberThreshold?: true;
    redThreshold?: true;
};
export type RiskAppetiteCategorySumAggregateInputType = {
    sortOrder?: true;
    greenThreshold?: true;
    amberThreshold?: true;
    redThreshold?: true;
};
export type RiskAppetiteCategoryMinAggregateInputType = {
    id?: true;
    matrixVersionId?: true;
    sortOrder?: true;
    riskCategory?: true;
    appetiteStatement?: true;
    appetiteLevel?: true;
    direction?: true;
    isZeroTolerance?: true;
    escalationOwner?: true;
    greenThreshold?: true;
    amberThreshold?: true;
    redThreshold?: true;
};
export type RiskAppetiteCategoryMaxAggregateInputType = {
    id?: true;
    matrixVersionId?: true;
    sortOrder?: true;
    riskCategory?: true;
    appetiteStatement?: true;
    appetiteLevel?: true;
    direction?: true;
    isZeroTolerance?: true;
    escalationOwner?: true;
    greenThreshold?: true;
    amberThreshold?: true;
    redThreshold?: true;
};
export type RiskAppetiteCategoryCountAggregateInputType = {
    id?: true;
    matrixVersionId?: true;
    sortOrder?: true;
    riskCategory?: true;
    appetiteStatement?: true;
    appetiteLevel?: true;
    direction?: true;
    isZeroTolerance?: true;
    escalationOwner?: true;
    greenThreshold?: true;
    amberThreshold?: true;
    redThreshold?: true;
    _all?: true;
};
export type RiskAppetiteCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    orderBy?: Prisma.RiskAppetiteCategoryOrderByWithRelationInput | Prisma.RiskAppetiteCategoryOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RiskAppetiteCategoryCountAggregateInputType;
    _avg?: RiskAppetiteCategoryAvgAggregateInputType;
    _sum?: RiskAppetiteCategorySumAggregateInputType;
    _min?: RiskAppetiteCategoryMinAggregateInputType;
    _max?: RiskAppetiteCategoryMaxAggregateInputType;
};
export type GetRiskAppetiteCategoryAggregateType<T extends RiskAppetiteCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateRiskAppetiteCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRiskAppetiteCategory[P]> : Prisma.GetScalarType<T[P], AggregateRiskAppetiteCategory[P]>;
};
export type RiskAppetiteCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    orderBy?: Prisma.RiskAppetiteCategoryOrderByWithAggregationInput | Prisma.RiskAppetiteCategoryOrderByWithAggregationInput[];
    by: Prisma.RiskAppetiteCategoryScalarFieldEnum[] | Prisma.RiskAppetiteCategoryScalarFieldEnum;
    having?: Prisma.RiskAppetiteCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RiskAppetiteCategoryCountAggregateInputType | true;
    _avg?: RiskAppetiteCategoryAvgAggregateInputType;
    _sum?: RiskAppetiteCategorySumAggregateInputType;
    _min?: RiskAppetiteCategoryMinAggregateInputType;
    _max?: RiskAppetiteCategoryMaxAggregateInputType;
};
export type RiskAppetiteCategoryGroupByOutputType = {
    id: string;
    matrixVersionId: string;
    sortOrder: number;
    riskCategory: string;
    appetiteStatement: string | null;
    appetiteLevel: string | null;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance: boolean;
    escalationOwner: string | null;
    greenThreshold: runtime.Decimal | null;
    amberThreshold: runtime.Decimal | null;
    redThreshold: runtime.Decimal | null;
    _count: RiskAppetiteCategoryCountAggregateOutputType | null;
    _avg: RiskAppetiteCategoryAvgAggregateOutputType | null;
    _sum: RiskAppetiteCategorySumAggregateOutputType | null;
    _min: RiskAppetiteCategoryMinAggregateOutputType | null;
    _max: RiskAppetiteCategoryMaxAggregateOutputType | null;
};
export type GetRiskAppetiteCategoryGroupByPayload<T extends RiskAppetiteCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RiskAppetiteCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RiskAppetiteCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RiskAppetiteCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RiskAppetiteCategoryGroupByOutputType[P]>;
}>>;
export type RiskAppetiteCategoryWhereInput = {
    AND?: Prisma.RiskAppetiteCategoryWhereInput | Prisma.RiskAppetiteCategoryWhereInput[];
    OR?: Prisma.RiskAppetiteCategoryWhereInput[];
    NOT?: Prisma.RiskAppetiteCategoryWhereInput | Prisma.RiskAppetiteCategoryWhereInput[];
    id?: Prisma.UuidFilter<"RiskAppetiteCategory"> | string;
    matrixVersionId?: Prisma.UuidFilter<"RiskAppetiteCategory"> | string;
    sortOrder?: Prisma.IntFilter<"RiskAppetiteCategory"> | number;
    riskCategory?: Prisma.StringFilter<"RiskAppetiteCategory"> | string;
    appetiteStatement?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    appetiteLevel?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFilter<"RiskAppetiteCategory"> | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFilter<"RiskAppetiteCategory"> | boolean;
    escalationOwner?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    greenThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    matrixVersion?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionScalarRelationFilter, Prisma.RiskAppetiteMatrixVersionWhereInput>;
};
export type RiskAppetiteCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    appetiteStatement?: Prisma.SortOrderInput | Prisma.SortOrder;
    appetiteLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    escalationOwner?: Prisma.SortOrderInput | Prisma.SortOrder;
    greenThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    amberThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    redThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    matrixVersion?: Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput;
};
export type RiskAppetiteCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    matrixVersionId_sortOrder?: Prisma.RiskAppetiteCategoryMatrixVersionIdSortOrderCompoundUniqueInput;
    AND?: Prisma.RiskAppetiteCategoryWhereInput | Prisma.RiskAppetiteCategoryWhereInput[];
    OR?: Prisma.RiskAppetiteCategoryWhereInput[];
    NOT?: Prisma.RiskAppetiteCategoryWhereInput | Prisma.RiskAppetiteCategoryWhereInput[];
    matrixVersionId?: Prisma.UuidFilter<"RiskAppetiteCategory"> | string;
    sortOrder?: Prisma.IntFilter<"RiskAppetiteCategory"> | number;
    riskCategory?: Prisma.StringFilter<"RiskAppetiteCategory"> | string;
    appetiteStatement?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    appetiteLevel?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFilter<"RiskAppetiteCategory"> | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFilter<"RiskAppetiteCategory"> | boolean;
    escalationOwner?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    greenThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    matrixVersion?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionScalarRelationFilter, Prisma.RiskAppetiteMatrixVersionWhereInput>;
}, "id" | "matrixVersionId_sortOrder">;
export type RiskAppetiteCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    appetiteStatement?: Prisma.SortOrderInput | Prisma.SortOrder;
    appetiteLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    escalationOwner?: Prisma.SortOrderInput | Prisma.SortOrder;
    greenThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    amberThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    redThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RiskAppetiteCategoryCountOrderByAggregateInput;
    _avg?: Prisma.RiskAppetiteCategoryAvgOrderByAggregateInput;
    _max?: Prisma.RiskAppetiteCategoryMaxOrderByAggregateInput;
    _min?: Prisma.RiskAppetiteCategoryMinOrderByAggregateInput;
    _sum?: Prisma.RiskAppetiteCategorySumOrderByAggregateInput;
};
export type RiskAppetiteCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.RiskAppetiteCategoryScalarWhereWithAggregatesInput | Prisma.RiskAppetiteCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.RiskAppetiteCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RiskAppetiteCategoryScalarWhereWithAggregatesInput | Prisma.RiskAppetiteCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RiskAppetiteCategory"> | string;
    matrixVersionId?: Prisma.UuidWithAggregatesFilter<"RiskAppetiteCategory"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"RiskAppetiteCategory"> | number;
    riskCategory?: Prisma.StringWithAggregatesFilter<"RiskAppetiteCategory"> | string;
    appetiteStatement?: Prisma.StringNullableWithAggregatesFilter<"RiskAppetiteCategory"> | string | null;
    appetiteLevel?: Prisma.StringNullableWithAggregatesFilter<"RiskAppetiteCategory"> | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionWithAggregatesFilter<"RiskAppetiteCategory"> | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolWithAggregatesFilter<"RiskAppetiteCategory"> | boolean;
    escalationOwner?: Prisma.StringNullableWithAggregatesFilter<"RiskAppetiteCategory"> | string | null;
    greenThreshold?: Prisma.DecimalNullableWithAggregatesFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.DecimalNullableWithAggregatesFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.DecimalNullableWithAggregatesFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryCreateInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    appetiteStatement?: string | null;
    appetiteLevel?: string | null;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    escalationOwner?: string | null;
    greenThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    matrixVersion: Prisma.RiskAppetiteMatrixVersionCreateNestedOneWithoutCategoriesInput;
};
export type RiskAppetiteCategoryUncheckedCreateInput = {
    id?: string;
    matrixVersionId: string;
    sortOrder: number;
    riskCategory: string;
    appetiteStatement?: string | null;
    appetiteLevel?: string | null;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    escalationOwner?: string | null;
    greenThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    appetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appetiteLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    escalationOwner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    greenThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    matrixVersion?: Prisma.RiskAppetiteMatrixVersionUpdateOneRequiredWithoutCategoriesNestedInput;
};
export type RiskAppetiteCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matrixVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    appetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appetiteLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    escalationOwner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    greenThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryCreateManyInput = {
    id?: string;
    matrixVersionId: string;
    sortOrder: number;
    riskCategory: string;
    appetiteStatement?: string | null;
    appetiteLevel?: string | null;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    escalationOwner?: string | null;
    greenThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    appetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appetiteLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    escalationOwner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    greenThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matrixVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    appetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appetiteLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    escalationOwner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    greenThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryListRelationFilter = {
    every?: Prisma.RiskAppetiteCategoryWhereInput;
    some?: Prisma.RiskAppetiteCategoryWhereInput;
    none?: Prisma.RiskAppetiteCategoryWhereInput;
};
export type RiskAppetiteCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RiskAppetiteCategoryMatrixVersionIdSortOrderCompoundUniqueInput = {
    matrixVersionId: string;
    sortOrder: number;
};
export type RiskAppetiteCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    appetiteStatement?: Prisma.SortOrder;
    appetiteLevel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    escalationOwner?: Prisma.SortOrder;
    greenThreshold?: Prisma.SortOrder;
    amberThreshold?: Prisma.SortOrder;
    redThreshold?: Prisma.SortOrder;
};
export type RiskAppetiteCategoryAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
    greenThreshold?: Prisma.SortOrder;
    amberThreshold?: Prisma.SortOrder;
    redThreshold?: Prisma.SortOrder;
};
export type RiskAppetiteCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    appetiteStatement?: Prisma.SortOrder;
    appetiteLevel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    escalationOwner?: Prisma.SortOrder;
    greenThreshold?: Prisma.SortOrder;
    amberThreshold?: Prisma.SortOrder;
    redThreshold?: Prisma.SortOrder;
};
export type RiskAppetiteCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    appetiteStatement?: Prisma.SortOrder;
    appetiteLevel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    escalationOwner?: Prisma.SortOrder;
    greenThreshold?: Prisma.SortOrder;
    amberThreshold?: Prisma.SortOrder;
    redThreshold?: Prisma.SortOrder;
};
export type RiskAppetiteCategorySumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
    greenThreshold?: Prisma.SortOrder;
    amberThreshold?: Prisma.SortOrder;
    redThreshold?: Prisma.SortOrder;
};
export type RiskAppetiteCategoryCreateNestedManyWithoutMatrixVersionInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput> | Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput[] | Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput[];
    connectOrCreate?: Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput[];
    createMany?: Prisma.RiskAppetiteCategoryCreateManyMatrixVersionInputEnvelope;
    connect?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
};
export type RiskAppetiteCategoryUncheckedCreateNestedManyWithoutMatrixVersionInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput> | Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput[] | Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput[];
    connectOrCreate?: Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput[];
    createMany?: Prisma.RiskAppetiteCategoryCreateManyMatrixVersionInputEnvelope;
    connect?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
};
export type RiskAppetiteCategoryUpdateManyWithoutMatrixVersionNestedInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput> | Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput[] | Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput[];
    connectOrCreate?: Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput[];
    upsert?: Prisma.RiskAppetiteCategoryUpsertWithWhereUniqueWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryUpsertWithWhereUniqueWithoutMatrixVersionInput[];
    createMany?: Prisma.RiskAppetiteCategoryCreateManyMatrixVersionInputEnvelope;
    set?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    disconnect?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    delete?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    connect?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    update?: Prisma.RiskAppetiteCategoryUpdateWithWhereUniqueWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryUpdateWithWhereUniqueWithoutMatrixVersionInput[];
    updateMany?: Prisma.RiskAppetiteCategoryUpdateManyWithWhereWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryUpdateManyWithWhereWithoutMatrixVersionInput[];
    deleteMany?: Prisma.RiskAppetiteCategoryScalarWhereInput | Prisma.RiskAppetiteCategoryScalarWhereInput[];
};
export type RiskAppetiteCategoryUncheckedUpdateManyWithoutMatrixVersionNestedInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput> | Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput[] | Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput[];
    connectOrCreate?: Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput[];
    upsert?: Prisma.RiskAppetiteCategoryUpsertWithWhereUniqueWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryUpsertWithWhereUniqueWithoutMatrixVersionInput[];
    createMany?: Prisma.RiskAppetiteCategoryCreateManyMatrixVersionInputEnvelope;
    set?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    disconnect?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    delete?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    connect?: Prisma.RiskAppetiteCategoryWhereUniqueInput | Prisma.RiskAppetiteCategoryWhereUniqueInput[];
    update?: Prisma.RiskAppetiteCategoryUpdateWithWhereUniqueWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryUpdateWithWhereUniqueWithoutMatrixVersionInput[];
    updateMany?: Prisma.RiskAppetiteCategoryUpdateManyWithWhereWithoutMatrixVersionInput | Prisma.RiskAppetiteCategoryUpdateManyWithWhereWithoutMatrixVersionInput[];
    deleteMany?: Prisma.RiskAppetiteCategoryScalarWhereInput | Prisma.RiskAppetiteCategoryScalarWhereInput[];
};
export type EnumRiskAppetiteDirectionFieldUpdateOperationsInput = {
    set?: $Enums.RiskAppetiteDirection;
};
export type RiskAppetiteCategoryCreateWithoutMatrixVersionInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    appetiteStatement?: string | null;
    appetiteLevel?: string | null;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    escalationOwner?: string | null;
    greenThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    appetiteStatement?: string | null;
    appetiteLevel?: string | null;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    escalationOwner?: string | null;
    greenThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryCreateOrConnectWithoutMatrixVersionInput = {
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput>;
};
export type RiskAppetiteCategoryCreateManyMatrixVersionInputEnvelope = {
    data: Prisma.RiskAppetiteCategoryCreateManyMatrixVersionInput | Prisma.RiskAppetiteCategoryCreateManyMatrixVersionInput[];
    skipDuplicates?: boolean;
};
export type RiskAppetiteCategoryUpsertWithWhereUniqueWithoutMatrixVersionInput = {
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.RiskAppetiteCategoryUpdateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedUpdateWithoutMatrixVersionInput>;
    create: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedCreateWithoutMatrixVersionInput>;
};
export type RiskAppetiteCategoryUpdateWithWhereUniqueWithoutMatrixVersionInput = {
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.RiskAppetiteCategoryUpdateWithoutMatrixVersionInput, Prisma.RiskAppetiteCategoryUncheckedUpdateWithoutMatrixVersionInput>;
};
export type RiskAppetiteCategoryUpdateManyWithWhereWithoutMatrixVersionInput = {
    where: Prisma.RiskAppetiteCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.RiskAppetiteCategoryUpdateManyMutationInput, Prisma.RiskAppetiteCategoryUncheckedUpdateManyWithoutMatrixVersionInput>;
};
export type RiskAppetiteCategoryScalarWhereInput = {
    AND?: Prisma.RiskAppetiteCategoryScalarWhereInput | Prisma.RiskAppetiteCategoryScalarWhereInput[];
    OR?: Prisma.RiskAppetiteCategoryScalarWhereInput[];
    NOT?: Prisma.RiskAppetiteCategoryScalarWhereInput | Prisma.RiskAppetiteCategoryScalarWhereInput[];
    id?: Prisma.UuidFilter<"RiskAppetiteCategory"> | string;
    matrixVersionId?: Prisma.UuidFilter<"RiskAppetiteCategory"> | string;
    sortOrder?: Prisma.IntFilter<"RiskAppetiteCategory"> | number;
    riskCategory?: Prisma.StringFilter<"RiskAppetiteCategory"> | string;
    appetiteStatement?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    appetiteLevel?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFilter<"RiskAppetiteCategory"> | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFilter<"RiskAppetiteCategory"> | boolean;
    escalationOwner?: Prisma.StringNullableFilter<"RiskAppetiteCategory"> | string | null;
    greenThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.DecimalNullableFilter<"RiskAppetiteCategory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryCreateManyMatrixVersionInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    appetiteStatement?: string | null;
    appetiteLevel?: string | null;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    escalationOwner?: string | null;
    greenThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryUpdateWithoutMatrixVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    appetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appetiteLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    escalationOwner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    greenThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryUncheckedUpdateWithoutMatrixVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    appetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appetiteLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    escalationOwner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    greenThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategoryUncheckedUpdateManyWithoutMatrixVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    appetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appetiteLevel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    escalationOwner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    greenThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amberThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    redThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type RiskAppetiteCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matrixVersionId?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    appetiteStatement?: boolean;
    appetiteLevel?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    escalationOwner?: boolean;
    greenThreshold?: boolean;
    amberThreshold?: boolean;
    redThreshold?: boolean;
    matrixVersion?: boolean | Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riskAppetiteCategory"]>;
export type RiskAppetiteCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matrixVersionId?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    appetiteStatement?: boolean;
    appetiteLevel?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    escalationOwner?: boolean;
    greenThreshold?: boolean;
    amberThreshold?: boolean;
    redThreshold?: boolean;
    matrixVersion?: boolean | Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riskAppetiteCategory"]>;
export type RiskAppetiteCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matrixVersionId?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    appetiteStatement?: boolean;
    appetiteLevel?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    escalationOwner?: boolean;
    greenThreshold?: boolean;
    amberThreshold?: boolean;
    redThreshold?: boolean;
    matrixVersion?: boolean | Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riskAppetiteCategory"]>;
export type RiskAppetiteCategorySelectScalar = {
    id?: boolean;
    matrixVersionId?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    appetiteStatement?: boolean;
    appetiteLevel?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    escalationOwner?: boolean;
    greenThreshold?: boolean;
    amberThreshold?: boolean;
    redThreshold?: boolean;
};
export type RiskAppetiteCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "matrixVersionId" | "sortOrder" | "riskCategory" | "appetiteStatement" | "appetiteLevel" | "direction" | "isZeroTolerance" | "escalationOwner" | "greenThreshold" | "amberThreshold" | "redThreshold", ExtArgs["result"]["riskAppetiteCategory"]>;
export type RiskAppetiteCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matrixVersion?: boolean | Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs>;
};
export type RiskAppetiteCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matrixVersion?: boolean | Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs>;
};
export type RiskAppetiteCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matrixVersion?: boolean | Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs>;
};
export type $RiskAppetiteCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RiskAppetiteCategory";
    objects: {
        matrixVersion: Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        matrixVersionId: string;
        sortOrder: number;
        riskCategory: string;
        appetiteStatement: string | null;
        appetiteLevel: string | null;
        direction: $Enums.RiskAppetiteDirection;
        isZeroTolerance: boolean;
        escalationOwner: string | null;
        greenThreshold: runtime.Decimal | null;
        amberThreshold: runtime.Decimal | null;
        redThreshold: runtime.Decimal | null;
    }, ExtArgs["result"]["riskAppetiteCategory"]>;
    composites: {};
};
export type RiskAppetiteCategoryGetPayload<S extends boolean | null | undefined | RiskAppetiteCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload, S>;
export type RiskAppetiteCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RiskAppetiteCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RiskAppetiteCategoryCountAggregateInputType | true;
};
export interface RiskAppetiteCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RiskAppetiteCategory'];
        meta: {
            name: 'RiskAppetiteCategory';
        };
    };
    findUnique<T extends RiskAppetiteCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RiskAppetiteCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RiskAppetiteCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RiskAppetiteCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RiskAppetiteCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RiskAppetiteCategoryCreateArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RiskAppetiteCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RiskAppetiteCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RiskAppetiteCategoryDeleteArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RiskAppetiteCategoryUpdateArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RiskAppetiteCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RiskAppetiteCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RiskAppetiteCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RiskAppetiteCategoryUpsertArgs>(args: Prisma.SelectSubset<T, RiskAppetiteCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteCategoryClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RiskAppetiteCategoryCountArgs>(args?: Prisma.Subset<T, RiskAppetiteCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RiskAppetiteCategoryCountAggregateOutputType> : number>;
    aggregate<T extends RiskAppetiteCategoryAggregateArgs>(args: Prisma.Subset<T, RiskAppetiteCategoryAggregateArgs>): Prisma.PrismaPromise<GetRiskAppetiteCategoryAggregateType<T>>;
    groupBy<T extends RiskAppetiteCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RiskAppetiteCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: RiskAppetiteCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RiskAppetiteCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskAppetiteCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RiskAppetiteCategoryFieldRefs;
}
export interface Prisma__RiskAppetiteCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    matrixVersion<T extends Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RiskAppetiteMatrixVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RiskAppetiteCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"RiskAppetiteCategory", 'String'>;
    readonly matrixVersionId: Prisma.FieldRef<"RiskAppetiteCategory", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"RiskAppetiteCategory", 'Int'>;
    readonly riskCategory: Prisma.FieldRef<"RiskAppetiteCategory", 'String'>;
    readonly appetiteStatement: Prisma.FieldRef<"RiskAppetiteCategory", 'String'>;
    readonly appetiteLevel: Prisma.FieldRef<"RiskAppetiteCategory", 'String'>;
    readonly direction: Prisma.FieldRef<"RiskAppetiteCategory", 'RiskAppetiteDirection'>;
    readonly isZeroTolerance: Prisma.FieldRef<"RiskAppetiteCategory", 'Boolean'>;
    readonly escalationOwner: Prisma.FieldRef<"RiskAppetiteCategory", 'String'>;
    readonly greenThreshold: Prisma.FieldRef<"RiskAppetiteCategory", 'Decimal'>;
    readonly amberThreshold: Prisma.FieldRef<"RiskAppetiteCategory", 'Decimal'>;
    readonly redThreshold: Prisma.FieldRef<"RiskAppetiteCategory", 'Decimal'>;
}
export type RiskAppetiteCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
};
export type RiskAppetiteCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
};
export type RiskAppetiteCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    orderBy?: Prisma.RiskAppetiteCategoryOrderByWithRelationInput | Prisma.RiskAppetiteCategoryOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskAppetiteCategoryScalarFieldEnum | Prisma.RiskAppetiteCategoryScalarFieldEnum[];
};
export type RiskAppetiteCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    orderBy?: Prisma.RiskAppetiteCategoryOrderByWithRelationInput | Prisma.RiskAppetiteCategoryOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskAppetiteCategoryScalarFieldEnum | Prisma.RiskAppetiteCategoryScalarFieldEnum[];
};
export type RiskAppetiteCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    orderBy?: Prisma.RiskAppetiteCategoryOrderByWithRelationInput | Prisma.RiskAppetiteCategoryOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskAppetiteCategoryScalarFieldEnum | Prisma.RiskAppetiteCategoryScalarFieldEnum[];
};
export type RiskAppetiteCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateInput, Prisma.RiskAppetiteCategoryUncheckedCreateInput>;
};
export type RiskAppetiteCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RiskAppetiteCategoryCreateManyInput | Prisma.RiskAppetiteCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiskAppetiteCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    data: Prisma.RiskAppetiteCategoryCreateManyInput | Prisma.RiskAppetiteCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RiskAppetiteCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RiskAppetiteCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskAppetiteCategoryUpdateInput, Prisma.RiskAppetiteCategoryUncheckedUpdateInput>;
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
};
export type RiskAppetiteCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RiskAppetiteCategoryUpdateManyMutationInput, Prisma.RiskAppetiteCategoryUncheckedUpdateManyInput>;
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    limit?: number;
};
export type RiskAppetiteCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskAppetiteCategoryUpdateManyMutationInput, Prisma.RiskAppetiteCategoryUncheckedUpdateManyInput>;
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    limit?: number;
    include?: Prisma.RiskAppetiteCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RiskAppetiteCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskAppetiteCategoryCreateInput, Prisma.RiskAppetiteCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RiskAppetiteCategoryUpdateInput, Prisma.RiskAppetiteCategoryUncheckedUpdateInput>;
};
export type RiskAppetiteCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteCategoryWhereUniqueInput;
};
export type RiskAppetiteCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    limit?: number;
};
export type RiskAppetiteCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
};
