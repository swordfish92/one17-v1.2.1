import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BudgetLineModel = runtime.Types.Result.DefaultSelection<Prisma.$BudgetLinePayload>;
export type AggregateBudgetLine = {
    _count: BudgetLineCountAggregateOutputType | null;
    _avg: BudgetLineAvgAggregateOutputType | null;
    _sum: BudgetLineSumAggregateOutputType | null;
    _min: BudgetLineMinAggregateOutputType | null;
    _max: BudgetLineMaxAggregateOutputType | null;
};
export type BudgetLineAvgAggregateOutputType = {
    driverRateOrFactor: runtime.Decimal | null;
};
export type BudgetLineSumAggregateOutputType = {
    driverRateOrFactor: runtime.Decimal | null;
};
export type BudgetLineMinAggregateOutputType = {
    id: string | null;
    budgetVersionId: string | null;
    ledgerEntityCode: string | null;
    budgetLineGroup: string | null;
    lineDescription: string | null;
    class: $Enums.BudgetLineClass | null;
    phasingMethod: $Enums.BudgetPhasingMethod | null;
    driverBasis: string | null;
    driverRateOrFactor: runtime.Decimal | null;
    sourceSheetRef: string | null;
    isActive: boolean | null;
    flaggedReason: string | null;
    valuesAsGiven: boolean | null;
    createdAt: Date | null;
};
export type BudgetLineMaxAggregateOutputType = {
    id: string | null;
    budgetVersionId: string | null;
    ledgerEntityCode: string | null;
    budgetLineGroup: string | null;
    lineDescription: string | null;
    class: $Enums.BudgetLineClass | null;
    phasingMethod: $Enums.BudgetPhasingMethod | null;
    driverBasis: string | null;
    driverRateOrFactor: runtime.Decimal | null;
    sourceSheetRef: string | null;
    isActive: boolean | null;
    flaggedReason: string | null;
    valuesAsGiven: boolean | null;
    createdAt: Date | null;
};
export type BudgetLineCountAggregateOutputType = {
    id: number;
    budgetVersionId: number;
    ledgerEntityCode: number;
    budgetLineGroup: number;
    lineDescription: number;
    class: number;
    phasingMethod: number;
    driverBasis: number;
    driverRateOrFactor: number;
    escalatorFactorsJson: number;
    sourceSheetRef: number;
    isActive: number;
    flaggedReason: number;
    valuesAsGiven: number;
    createdAt: number;
    _all: number;
};
export type BudgetLineAvgAggregateInputType = {
    driverRateOrFactor?: true;
};
export type BudgetLineSumAggregateInputType = {
    driverRateOrFactor?: true;
};
export type BudgetLineMinAggregateInputType = {
    id?: true;
    budgetVersionId?: true;
    ledgerEntityCode?: true;
    budgetLineGroup?: true;
    lineDescription?: true;
    class?: true;
    phasingMethod?: true;
    driverBasis?: true;
    driverRateOrFactor?: true;
    sourceSheetRef?: true;
    isActive?: true;
    flaggedReason?: true;
    valuesAsGiven?: true;
    createdAt?: true;
};
export type BudgetLineMaxAggregateInputType = {
    id?: true;
    budgetVersionId?: true;
    ledgerEntityCode?: true;
    budgetLineGroup?: true;
    lineDescription?: true;
    class?: true;
    phasingMethod?: true;
    driverBasis?: true;
    driverRateOrFactor?: true;
    sourceSheetRef?: true;
    isActive?: true;
    flaggedReason?: true;
    valuesAsGiven?: true;
    createdAt?: true;
};
export type BudgetLineCountAggregateInputType = {
    id?: true;
    budgetVersionId?: true;
    ledgerEntityCode?: true;
    budgetLineGroup?: true;
    lineDescription?: true;
    class?: true;
    phasingMethod?: true;
    driverBasis?: true;
    driverRateOrFactor?: true;
    escalatorFactorsJson?: true;
    sourceSheetRef?: true;
    isActive?: true;
    flaggedReason?: true;
    valuesAsGiven?: true;
    createdAt?: true;
    _all?: true;
};
export type BudgetLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineWhereInput;
    orderBy?: Prisma.BudgetLineOrderByWithRelationInput | Prisma.BudgetLineOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BudgetLineCountAggregateInputType;
    _avg?: BudgetLineAvgAggregateInputType;
    _sum?: BudgetLineSumAggregateInputType;
    _min?: BudgetLineMinAggregateInputType;
    _max?: BudgetLineMaxAggregateInputType;
};
export type GetBudgetLineAggregateType<T extends BudgetLineAggregateArgs> = {
    [P in keyof T & keyof AggregateBudgetLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBudgetLine[P]> : Prisma.GetScalarType<T[P], AggregateBudgetLine[P]>;
};
export type BudgetLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineWhereInput;
    orderBy?: Prisma.BudgetLineOrderByWithAggregationInput | Prisma.BudgetLineOrderByWithAggregationInput[];
    by: Prisma.BudgetLineScalarFieldEnum[] | Prisma.BudgetLineScalarFieldEnum;
    having?: Prisma.BudgetLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BudgetLineCountAggregateInputType | true;
    _avg?: BudgetLineAvgAggregateInputType;
    _sum?: BudgetLineSumAggregateInputType;
    _min?: BudgetLineMinAggregateInputType;
    _max?: BudgetLineMaxAggregateInputType;
};
export type BudgetLineGroupByOutputType = {
    id: string;
    budgetVersionId: string;
    ledgerEntityCode: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis: string | null;
    driverRateOrFactor: runtime.Decimal | null;
    escalatorFactorsJson: runtime.JsonValue | null;
    sourceSheetRef: string;
    isActive: boolean;
    flaggedReason: string | null;
    valuesAsGiven: boolean;
    createdAt: Date;
    _count: BudgetLineCountAggregateOutputType | null;
    _avg: BudgetLineAvgAggregateOutputType | null;
    _sum: BudgetLineSumAggregateOutputType | null;
    _min: BudgetLineMinAggregateOutputType | null;
    _max: BudgetLineMaxAggregateOutputType | null;
};
export type GetBudgetLineGroupByPayload<T extends BudgetLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BudgetLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BudgetLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BudgetLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BudgetLineGroupByOutputType[P]>;
}>>;
export type BudgetLineWhereInput = {
    AND?: Prisma.BudgetLineWhereInput | Prisma.BudgetLineWhereInput[];
    OR?: Prisma.BudgetLineWhereInput[];
    NOT?: Prisma.BudgetLineWhereInput | Prisma.BudgetLineWhereInput[];
    id?: Prisma.UuidFilter<"BudgetLine"> | string;
    budgetVersionId?: Prisma.UuidFilter<"BudgetLine"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"BudgetLine"> | string;
    budgetLineGroup?: Prisma.StringFilter<"BudgetLine"> | string;
    lineDescription?: Prisma.StringFilter<"BudgetLine"> | string;
    class?: Prisma.EnumBudgetLineClassFilter<"BudgetLine"> | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFilter<"BudgetLine"> | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.StringNullableFilter<"BudgetLine"> | string | null;
    driverRateOrFactor?: Prisma.DecimalNullableFilter<"BudgetLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.JsonNullableFilter<"BudgetLine">;
    sourceSheetRef?: Prisma.StringFilter<"BudgetLine"> | string;
    isActive?: Prisma.BoolFilter<"BudgetLine"> | boolean;
    flaggedReason?: Prisma.StringNullableFilter<"BudgetLine"> | string | null;
    valuesAsGiven?: Prisma.BoolFilter<"BudgetLine"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BudgetLine"> | Date | string;
    budgetVersion?: Prisma.XOR<Prisma.BudgetVersionScalarRelationFilter, Prisma.BudgetVersionWhereInput>;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountListRelationFilter;
    encumbrances?: Prisma.EncumbranceListRelationFilter;
};
export type BudgetLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    budgetLineGroup?: Prisma.SortOrder;
    lineDescription?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    phasingMethod?: Prisma.SortOrder;
    driverBasis?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverRateOrFactor?: Prisma.SortOrderInput | Prisma.SortOrder;
    escalatorFactorsJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    flaggedReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    valuesAsGiven?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    budgetVersion?: Prisma.BudgetVersionOrderByWithRelationInput;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountOrderByRelationAggregateInput;
    encumbrances?: Prisma.EncumbranceOrderByRelationAggregateInput;
};
export type BudgetLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BudgetLineWhereInput | Prisma.BudgetLineWhereInput[];
    OR?: Prisma.BudgetLineWhereInput[];
    NOT?: Prisma.BudgetLineWhereInput | Prisma.BudgetLineWhereInput[];
    budgetVersionId?: Prisma.UuidFilter<"BudgetLine"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"BudgetLine"> | string;
    budgetLineGroup?: Prisma.StringFilter<"BudgetLine"> | string;
    lineDescription?: Prisma.StringFilter<"BudgetLine"> | string;
    class?: Prisma.EnumBudgetLineClassFilter<"BudgetLine"> | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFilter<"BudgetLine"> | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.StringNullableFilter<"BudgetLine"> | string | null;
    driverRateOrFactor?: Prisma.DecimalNullableFilter<"BudgetLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.JsonNullableFilter<"BudgetLine">;
    sourceSheetRef?: Prisma.StringFilter<"BudgetLine"> | string;
    isActive?: Prisma.BoolFilter<"BudgetLine"> | boolean;
    flaggedReason?: Prisma.StringNullableFilter<"BudgetLine"> | string | null;
    valuesAsGiven?: Prisma.BoolFilter<"BudgetLine"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BudgetLine"> | Date | string;
    budgetVersion?: Prisma.XOR<Prisma.BudgetVersionScalarRelationFilter, Prisma.BudgetVersionWhereInput>;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountListRelationFilter;
    encumbrances?: Prisma.EncumbranceListRelationFilter;
}, "id">;
export type BudgetLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    budgetLineGroup?: Prisma.SortOrder;
    lineDescription?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    phasingMethod?: Prisma.SortOrder;
    driverBasis?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverRateOrFactor?: Prisma.SortOrderInput | Prisma.SortOrder;
    escalatorFactorsJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    flaggedReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    valuesAsGiven?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BudgetLineCountOrderByAggregateInput;
    _avg?: Prisma.BudgetLineAvgOrderByAggregateInput;
    _max?: Prisma.BudgetLineMaxOrderByAggregateInput;
    _min?: Prisma.BudgetLineMinOrderByAggregateInput;
    _sum?: Prisma.BudgetLineSumOrderByAggregateInput;
};
export type BudgetLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.BudgetLineScalarWhereWithAggregatesInput | Prisma.BudgetLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.BudgetLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BudgetLineScalarWhereWithAggregatesInput | Prisma.BudgetLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BudgetLine"> | string;
    budgetVersionId?: Prisma.UuidWithAggregatesFilter<"BudgetLine"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"BudgetLine"> | string;
    budgetLineGroup?: Prisma.StringWithAggregatesFilter<"BudgetLine"> | string;
    lineDescription?: Prisma.StringWithAggregatesFilter<"BudgetLine"> | string;
    class?: Prisma.EnumBudgetLineClassWithAggregatesFilter<"BudgetLine"> | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodWithAggregatesFilter<"BudgetLine"> | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.StringNullableWithAggregatesFilter<"BudgetLine"> | string | null;
    driverRateOrFactor?: Prisma.DecimalNullableWithAggregatesFilter<"BudgetLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.JsonNullableWithAggregatesFilter<"BudgetLine">;
    sourceSheetRef?: Prisma.StringWithAggregatesFilter<"BudgetLine"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"BudgetLine"> | boolean;
    flaggedReason?: Prisma.StringNullableWithAggregatesFilter<"BudgetLine"> | string | null;
    valuesAsGiven?: Prisma.BoolWithAggregatesFilter<"BudgetLine"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BudgetLine"> | Date | string;
};
export type BudgetLineCreateInput = {
    id?: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    budgetVersion: Prisma.BudgetVersionCreateNestedOneWithoutLinesInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBudgetLinesInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountCreateNestedManyWithoutBudgetLineInput;
    encumbrances?: Prisma.EncumbranceCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineUncheckedCreateInput = {
    id?: string;
    budgetVersionId: string;
    ledgerEntityCode: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedCreateNestedManyWithoutBudgetLineInput;
    encumbrances?: Prisma.EncumbranceUncheckedCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetVersion?: Prisma.BudgetVersionUpdateOneRequiredWithoutLinesNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBudgetLinesNestedInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUpdateManyWithoutBudgetLineNestedInput;
    encumbrances?: Prisma.EncumbranceUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedUpdateManyWithoutBudgetLineNestedInput;
    encumbrances?: Prisma.EncumbranceUncheckedUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineCreateManyInput = {
    id?: string;
    budgetVersionId: string;
    ledgerEntityCode: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
};
export type BudgetLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineListRelationFilter = {
    every?: Prisma.BudgetLineWhereInput;
    some?: Prisma.BudgetLineWhereInput;
    none?: Prisma.BudgetLineWhereInput;
};
export type BudgetLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BudgetLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    budgetLineGroup?: Prisma.SortOrder;
    lineDescription?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    phasingMethod?: Prisma.SortOrder;
    driverBasis?: Prisma.SortOrder;
    driverRateOrFactor?: Prisma.SortOrder;
    escalatorFactorsJson?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    flaggedReason?: Prisma.SortOrder;
    valuesAsGiven?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetLineAvgOrderByAggregateInput = {
    driverRateOrFactor?: Prisma.SortOrder;
};
export type BudgetLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    budgetLineGroup?: Prisma.SortOrder;
    lineDescription?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    phasingMethod?: Prisma.SortOrder;
    driverBasis?: Prisma.SortOrder;
    driverRateOrFactor?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    flaggedReason?: Prisma.SortOrder;
    valuesAsGiven?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    budgetLineGroup?: Prisma.SortOrder;
    lineDescription?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    phasingMethod?: Prisma.SortOrder;
    driverBasis?: Prisma.SortOrder;
    driverRateOrFactor?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    flaggedReason?: Prisma.SortOrder;
    valuesAsGiven?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetLineSumOrderByAggregateInput = {
    driverRateOrFactor?: Prisma.SortOrder;
};
export type BudgetLineScalarRelationFilter = {
    is?: Prisma.BudgetLineWhereInput;
    isNot?: Prisma.BudgetLineWhereInput;
};
export type BudgetLineCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BudgetLineCreateWithoutLedgerEntityInput[] | Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.BudgetLineCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
};
export type BudgetLineUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BudgetLineCreateWithoutLedgerEntityInput[] | Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.BudgetLineCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
};
export type BudgetLineUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BudgetLineCreateWithoutLedgerEntityInput[] | Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.BudgetLineUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.BudgetLineUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.BudgetLineCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    disconnect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    delete?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    update?: Prisma.BudgetLineUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.BudgetLineUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.BudgetLineUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.BudgetLineUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.BudgetLineScalarWhereInput | Prisma.BudgetLineScalarWhereInput[];
};
export type BudgetLineUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput> | Prisma.BudgetLineCreateWithoutLedgerEntityInput[] | Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput | Prisma.BudgetLineCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.BudgetLineUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.BudgetLineUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.BudgetLineCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    disconnect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    delete?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    update?: Prisma.BudgetLineUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.BudgetLineUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.BudgetLineUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.BudgetLineUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.BudgetLineScalarWhereInput | Prisma.BudgetLineScalarWhereInput[];
};
export type BudgetLineCreateNestedManyWithoutBudgetVersionInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetLineCreateWithoutBudgetVersionInput[] | Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetLineCreateManyBudgetVersionInputEnvelope;
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
};
export type BudgetLineUncheckedCreateNestedManyWithoutBudgetVersionInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetLineCreateWithoutBudgetVersionInput[] | Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetLineCreateManyBudgetVersionInputEnvelope;
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
};
export type BudgetLineUpdateManyWithoutBudgetVersionNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetLineCreateWithoutBudgetVersionInput[] | Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput[];
    upsert?: Prisma.BudgetLineUpsertWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetLineUpsertWithWhereUniqueWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetLineCreateManyBudgetVersionInputEnvelope;
    set?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    disconnect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    delete?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    update?: Prisma.BudgetLineUpdateWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetLineUpdateWithWhereUniqueWithoutBudgetVersionInput[];
    updateMany?: Prisma.BudgetLineUpdateManyWithWhereWithoutBudgetVersionInput | Prisma.BudgetLineUpdateManyWithWhereWithoutBudgetVersionInput[];
    deleteMany?: Prisma.BudgetLineScalarWhereInput | Prisma.BudgetLineScalarWhereInput[];
};
export type BudgetLineUncheckedUpdateManyWithoutBudgetVersionNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetLineCreateWithoutBudgetVersionInput[] | Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetLineCreateOrConnectWithoutBudgetVersionInput[];
    upsert?: Prisma.BudgetLineUpsertWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetLineUpsertWithWhereUniqueWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetLineCreateManyBudgetVersionInputEnvelope;
    set?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    disconnect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    delete?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    connect?: Prisma.BudgetLineWhereUniqueInput | Prisma.BudgetLineWhereUniqueInput[];
    update?: Prisma.BudgetLineUpdateWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetLineUpdateWithWhereUniqueWithoutBudgetVersionInput[];
    updateMany?: Prisma.BudgetLineUpdateManyWithWhereWithoutBudgetVersionInput | Prisma.BudgetLineUpdateManyWithWhereWithoutBudgetVersionInput[];
    deleteMany?: Prisma.BudgetLineScalarWhereInput | Prisma.BudgetLineScalarWhereInput[];
};
export type EnumBudgetLineClassFieldUpdateOperationsInput = {
    set?: $Enums.BudgetLineClass;
};
export type EnumBudgetPhasingMethodFieldUpdateOperationsInput = {
    set?: $Enums.BudgetPhasingMethod;
};
export type BudgetLineCreateNestedOneWithoutMonthlyAmountsInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutMonthlyAmountsInput, Prisma.BudgetLineUncheckedCreateWithoutMonthlyAmountsInput>;
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutMonthlyAmountsInput;
    connect?: Prisma.BudgetLineWhereUniqueInput;
};
export type BudgetLineUpdateOneRequiredWithoutMonthlyAmountsNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutMonthlyAmountsInput, Prisma.BudgetLineUncheckedCreateWithoutMonthlyAmountsInput>;
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutMonthlyAmountsInput;
    upsert?: Prisma.BudgetLineUpsertWithoutMonthlyAmountsInput;
    connect?: Prisma.BudgetLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BudgetLineUpdateToOneWithWhereWithoutMonthlyAmountsInput, Prisma.BudgetLineUpdateWithoutMonthlyAmountsInput>, Prisma.BudgetLineUncheckedUpdateWithoutMonthlyAmountsInput>;
};
export type BudgetLineCreateNestedOneWithoutEncumbrancesInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutEncumbrancesInput, Prisma.BudgetLineUncheckedCreateWithoutEncumbrancesInput>;
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutEncumbrancesInput;
    connect?: Prisma.BudgetLineWhereUniqueInput;
};
export type BudgetLineUpdateOneRequiredWithoutEncumbrancesNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetLineCreateWithoutEncumbrancesInput, Prisma.BudgetLineUncheckedCreateWithoutEncumbrancesInput>;
    connectOrCreate?: Prisma.BudgetLineCreateOrConnectWithoutEncumbrancesInput;
    upsert?: Prisma.BudgetLineUpsertWithoutEncumbrancesInput;
    connect?: Prisma.BudgetLineWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BudgetLineUpdateToOneWithWhereWithoutEncumbrancesInput, Prisma.BudgetLineUpdateWithoutEncumbrancesInput>, Prisma.BudgetLineUncheckedUpdateWithoutEncumbrancesInput>;
};
export type BudgetLineCreateWithoutLedgerEntityInput = {
    id?: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    budgetVersion: Prisma.BudgetVersionCreateNestedOneWithoutLinesInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountCreateNestedManyWithoutBudgetLineInput;
    encumbrances?: Prisma.EncumbranceCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    budgetVersionId: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedCreateNestedManyWithoutBudgetLineInput;
    encumbrances?: Prisma.EncumbranceUncheckedCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput>;
};
export type BudgetLineCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.BudgetLineCreateManyLedgerEntityInput | Prisma.BudgetLineCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type BudgetLineUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.BudgetLineUpdateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedCreateWithoutLedgerEntityInput>;
};
export type BudgetLineUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.BudgetLineUpdateWithoutLedgerEntityInput, Prisma.BudgetLineUncheckedUpdateWithoutLedgerEntityInput>;
};
export type BudgetLineUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.BudgetLineScalarWhereInput;
    data: Prisma.XOR<Prisma.BudgetLineUpdateManyMutationInput, Prisma.BudgetLineUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type BudgetLineScalarWhereInput = {
    AND?: Prisma.BudgetLineScalarWhereInput | Prisma.BudgetLineScalarWhereInput[];
    OR?: Prisma.BudgetLineScalarWhereInput[];
    NOT?: Prisma.BudgetLineScalarWhereInput | Prisma.BudgetLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"BudgetLine"> | string;
    budgetVersionId?: Prisma.UuidFilter<"BudgetLine"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"BudgetLine"> | string;
    budgetLineGroup?: Prisma.StringFilter<"BudgetLine"> | string;
    lineDescription?: Prisma.StringFilter<"BudgetLine"> | string;
    class?: Prisma.EnumBudgetLineClassFilter<"BudgetLine"> | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFilter<"BudgetLine"> | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.StringNullableFilter<"BudgetLine"> | string | null;
    driverRateOrFactor?: Prisma.DecimalNullableFilter<"BudgetLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.JsonNullableFilter<"BudgetLine">;
    sourceSheetRef?: Prisma.StringFilter<"BudgetLine"> | string;
    isActive?: Prisma.BoolFilter<"BudgetLine"> | boolean;
    flaggedReason?: Prisma.StringNullableFilter<"BudgetLine"> | string | null;
    valuesAsGiven?: Prisma.BoolFilter<"BudgetLine"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BudgetLine"> | Date | string;
};
export type BudgetLineCreateWithoutBudgetVersionInput = {
    id?: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBudgetLinesInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountCreateNestedManyWithoutBudgetLineInput;
    encumbrances?: Prisma.EncumbranceCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineUncheckedCreateWithoutBudgetVersionInput = {
    id?: string;
    ledgerEntityCode: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedCreateNestedManyWithoutBudgetLineInput;
    encumbrances?: Prisma.EncumbranceUncheckedCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineCreateOrConnectWithoutBudgetVersionInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput>;
};
export type BudgetLineCreateManyBudgetVersionInputEnvelope = {
    data: Prisma.BudgetLineCreateManyBudgetVersionInput | Prisma.BudgetLineCreateManyBudgetVersionInput[];
    skipDuplicates?: boolean;
};
export type BudgetLineUpsertWithWhereUniqueWithoutBudgetVersionInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.BudgetLineUpdateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedUpdateWithoutBudgetVersionInput>;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedCreateWithoutBudgetVersionInput>;
};
export type BudgetLineUpdateWithWhereUniqueWithoutBudgetVersionInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.BudgetLineUpdateWithoutBudgetVersionInput, Prisma.BudgetLineUncheckedUpdateWithoutBudgetVersionInput>;
};
export type BudgetLineUpdateManyWithWhereWithoutBudgetVersionInput = {
    where: Prisma.BudgetLineScalarWhereInput;
    data: Prisma.XOR<Prisma.BudgetLineUpdateManyMutationInput, Prisma.BudgetLineUncheckedUpdateManyWithoutBudgetVersionInput>;
};
export type BudgetLineCreateWithoutMonthlyAmountsInput = {
    id?: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    budgetVersion: Prisma.BudgetVersionCreateNestedOneWithoutLinesInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBudgetLinesInput;
    encumbrances?: Prisma.EncumbranceCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineUncheckedCreateWithoutMonthlyAmountsInput = {
    id?: string;
    budgetVersionId: string;
    ledgerEntityCode: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    encumbrances?: Prisma.EncumbranceUncheckedCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineCreateOrConnectWithoutMonthlyAmountsInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutMonthlyAmountsInput, Prisma.BudgetLineUncheckedCreateWithoutMonthlyAmountsInput>;
};
export type BudgetLineUpsertWithoutMonthlyAmountsInput = {
    update: Prisma.XOR<Prisma.BudgetLineUpdateWithoutMonthlyAmountsInput, Prisma.BudgetLineUncheckedUpdateWithoutMonthlyAmountsInput>;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutMonthlyAmountsInput, Prisma.BudgetLineUncheckedCreateWithoutMonthlyAmountsInput>;
    where?: Prisma.BudgetLineWhereInput;
};
export type BudgetLineUpdateToOneWithWhereWithoutMonthlyAmountsInput = {
    where?: Prisma.BudgetLineWhereInput;
    data: Prisma.XOR<Prisma.BudgetLineUpdateWithoutMonthlyAmountsInput, Prisma.BudgetLineUncheckedUpdateWithoutMonthlyAmountsInput>;
};
export type BudgetLineUpdateWithoutMonthlyAmountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetVersion?: Prisma.BudgetVersionUpdateOneRequiredWithoutLinesNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBudgetLinesNestedInput;
    encumbrances?: Prisma.EncumbranceUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineUncheckedUpdateWithoutMonthlyAmountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encumbrances?: Prisma.EncumbranceUncheckedUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineCreateWithoutEncumbrancesInput = {
    id?: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    budgetVersion: Prisma.BudgetVersionCreateNestedOneWithoutLinesInput;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutBudgetLinesInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineUncheckedCreateWithoutEncumbrancesInput = {
    id?: string;
    budgetVersionId: string;
    ledgerEntityCode: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedCreateNestedManyWithoutBudgetLineInput;
};
export type BudgetLineCreateOrConnectWithoutEncumbrancesInput = {
    where: Prisma.BudgetLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutEncumbrancesInput, Prisma.BudgetLineUncheckedCreateWithoutEncumbrancesInput>;
};
export type BudgetLineUpsertWithoutEncumbrancesInput = {
    update: Prisma.XOR<Prisma.BudgetLineUpdateWithoutEncumbrancesInput, Prisma.BudgetLineUncheckedUpdateWithoutEncumbrancesInput>;
    create: Prisma.XOR<Prisma.BudgetLineCreateWithoutEncumbrancesInput, Prisma.BudgetLineUncheckedCreateWithoutEncumbrancesInput>;
    where?: Prisma.BudgetLineWhereInput;
};
export type BudgetLineUpdateToOneWithWhereWithoutEncumbrancesInput = {
    where?: Prisma.BudgetLineWhereInput;
    data: Prisma.XOR<Prisma.BudgetLineUpdateWithoutEncumbrancesInput, Prisma.BudgetLineUncheckedUpdateWithoutEncumbrancesInput>;
};
export type BudgetLineUpdateWithoutEncumbrancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetVersion?: Prisma.BudgetVersionUpdateOneRequiredWithoutLinesNestedInput;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBudgetLinesNestedInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineUncheckedUpdateWithoutEncumbrancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineCreateManyLedgerEntityInput = {
    id?: string;
    budgetVersionId: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
};
export type BudgetLineUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetVersion?: Prisma.BudgetVersionUpdateOneRequiredWithoutLinesNestedInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUpdateManyWithoutBudgetLineNestedInput;
    encumbrances?: Prisma.EncumbranceUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedUpdateManyWithoutBudgetLineNestedInput;
    encumbrances?: Prisma.EncumbranceUncheckedUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineCreateManyBudgetVersionInput = {
    id?: string;
    ledgerEntityCode: string;
    budgetLineGroup: string;
    lineDescription: string;
    class: $Enums.BudgetLineClass;
    phasingMethod: $Enums.BudgetPhasingMethod;
    driverBasis?: string | null;
    driverRateOrFactor?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef: string;
    isActive?: boolean;
    flaggedReason?: string | null;
    valuesAsGiven?: boolean;
    createdAt?: Date | string;
};
export type BudgetLineUpdateWithoutBudgetVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutBudgetLinesNestedInput;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUpdateManyWithoutBudgetLineNestedInput;
    encumbrances?: Prisma.EncumbranceUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineUncheckedUpdateWithoutBudgetVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyAmounts?: Prisma.BudgetLineMonthlyAmountUncheckedUpdateManyWithoutBudgetLineNestedInput;
    encumbrances?: Prisma.EncumbranceUncheckedUpdateManyWithoutBudgetLineNestedInput;
};
export type BudgetLineUncheckedUpdateManyWithoutBudgetVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetLineGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    lineDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.EnumBudgetLineClassFieldUpdateOperationsInput | $Enums.BudgetLineClass;
    phasingMethod?: Prisma.EnumBudgetPhasingMethodFieldUpdateOperationsInput | $Enums.BudgetPhasingMethod;
    driverBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverRateOrFactor?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    escalatorFactorsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    flaggedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuesAsGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetLineCountOutputType = {
    monthlyAmounts: number;
    encumbrances: number;
};
export type BudgetLineCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    monthlyAmounts?: boolean | BudgetLineCountOutputTypeCountMonthlyAmountsArgs;
    encumbrances?: boolean | BudgetLineCountOutputTypeCountEncumbrancesArgs;
};
export type BudgetLineCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineCountOutputTypeSelect<ExtArgs> | null;
};
export type BudgetLineCountOutputTypeCountMonthlyAmountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
};
export type BudgetLineCountOutputTypeCountEncumbrancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncumbranceWhereInput;
};
export type BudgetLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetVersionId?: boolean;
    ledgerEntityCode?: boolean;
    budgetLineGroup?: boolean;
    lineDescription?: boolean;
    class?: boolean;
    phasingMethod?: boolean;
    driverBasis?: boolean;
    driverRateOrFactor?: boolean;
    escalatorFactorsJson?: boolean;
    sourceSheetRef?: boolean;
    isActive?: boolean;
    flaggedReason?: boolean;
    valuesAsGiven?: boolean;
    createdAt?: boolean;
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    monthlyAmounts?: boolean | Prisma.BudgetLine$monthlyAmountsArgs<ExtArgs>;
    encumbrances?: boolean | Prisma.BudgetLine$encumbrancesArgs<ExtArgs>;
    _count?: boolean | Prisma.BudgetLineCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetLine"]>;
export type BudgetLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetVersionId?: boolean;
    ledgerEntityCode?: boolean;
    budgetLineGroup?: boolean;
    lineDescription?: boolean;
    class?: boolean;
    phasingMethod?: boolean;
    driverBasis?: boolean;
    driverRateOrFactor?: boolean;
    escalatorFactorsJson?: boolean;
    sourceSheetRef?: boolean;
    isActive?: boolean;
    flaggedReason?: boolean;
    valuesAsGiven?: boolean;
    createdAt?: boolean;
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetLine"]>;
export type BudgetLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetVersionId?: boolean;
    ledgerEntityCode?: boolean;
    budgetLineGroup?: boolean;
    lineDescription?: boolean;
    class?: boolean;
    phasingMethod?: boolean;
    driverBasis?: boolean;
    driverRateOrFactor?: boolean;
    escalatorFactorsJson?: boolean;
    sourceSheetRef?: boolean;
    isActive?: boolean;
    flaggedReason?: boolean;
    valuesAsGiven?: boolean;
    createdAt?: boolean;
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetLine"]>;
export type BudgetLineSelectScalar = {
    id?: boolean;
    budgetVersionId?: boolean;
    ledgerEntityCode?: boolean;
    budgetLineGroup?: boolean;
    lineDescription?: boolean;
    class?: boolean;
    phasingMethod?: boolean;
    driverBasis?: boolean;
    driverRateOrFactor?: boolean;
    escalatorFactorsJson?: boolean;
    sourceSheetRef?: boolean;
    isActive?: boolean;
    flaggedReason?: boolean;
    valuesAsGiven?: boolean;
    createdAt?: boolean;
};
export type BudgetLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "budgetVersionId" | "ledgerEntityCode" | "budgetLineGroup" | "lineDescription" | "class" | "phasingMethod" | "driverBasis" | "driverRateOrFactor" | "escalatorFactorsJson" | "sourceSheetRef" | "isActive" | "flaggedReason" | "valuesAsGiven" | "createdAt", ExtArgs["result"]["budgetLine"]>;
export type BudgetLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    monthlyAmounts?: boolean | Prisma.BudgetLine$monthlyAmountsArgs<ExtArgs>;
    encumbrances?: boolean | Prisma.BudgetLine$encumbrancesArgs<ExtArgs>;
    _count?: boolean | Prisma.BudgetLineCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BudgetLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type BudgetLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
};
export type $BudgetLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BudgetLine";
    objects: {
        budgetVersion: Prisma.$BudgetVersionPayload<ExtArgs>;
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        monthlyAmounts: Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>[];
        encumbrances: Prisma.$EncumbrancePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        budgetVersionId: string;
        ledgerEntityCode: string;
        budgetLineGroup: string;
        lineDescription: string;
        class: $Enums.BudgetLineClass;
        phasingMethod: $Enums.BudgetPhasingMethod;
        driverBasis: string | null;
        driverRateOrFactor: runtime.Decimal | null;
        escalatorFactorsJson: runtime.JsonValue | null;
        sourceSheetRef: string;
        isActive: boolean;
        flaggedReason: string | null;
        valuesAsGiven: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["budgetLine"]>;
    composites: {};
};
export type BudgetLineGetPayload<S extends boolean | null | undefined | BudgetLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload, S>;
export type BudgetLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BudgetLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BudgetLineCountAggregateInputType | true;
};
export interface BudgetLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BudgetLine'];
        meta: {
            name: 'BudgetLine';
        };
    };
    findUnique<T extends BudgetLineFindUniqueArgs>(args: Prisma.SelectSubset<T, BudgetLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BudgetLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BudgetLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BudgetLineFindFirstArgs>(args?: Prisma.SelectSubset<T, BudgetLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BudgetLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BudgetLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BudgetLineFindManyArgs>(args?: Prisma.SelectSubset<T, BudgetLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BudgetLineCreateArgs>(args: Prisma.SelectSubset<T, BudgetLineCreateArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BudgetLineCreateManyArgs>(args?: Prisma.SelectSubset<T, BudgetLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BudgetLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BudgetLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BudgetLineDeleteArgs>(args: Prisma.SelectSubset<T, BudgetLineDeleteArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BudgetLineUpdateArgs>(args: Prisma.SelectSubset<T, BudgetLineUpdateArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BudgetLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, BudgetLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BudgetLineUpdateManyArgs>(args: Prisma.SelectSubset<T, BudgetLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BudgetLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BudgetLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BudgetLineUpsertArgs>(args: Prisma.SelectSubset<T, BudgetLineUpsertArgs<ExtArgs>>): Prisma.Prisma__BudgetLineClient<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BudgetLineCountArgs>(args?: Prisma.Subset<T, BudgetLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BudgetLineCountAggregateOutputType> : number>;
    aggregate<T extends BudgetLineAggregateArgs>(args: Prisma.Subset<T, BudgetLineAggregateArgs>): Prisma.PrismaPromise<GetBudgetLineAggregateType<T>>;
    groupBy<T extends BudgetLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BudgetLineGroupByArgs['orderBy'];
    } : {
        orderBy?: BudgetLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BudgetLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BudgetLineFieldRefs;
}
export interface Prisma__BudgetLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    budgetVersion<T extends Prisma.BudgetVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    monthlyAmounts<T extends Prisma.BudgetLine$monthlyAmountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetLine$monthlyAmountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLineMonthlyAmountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    encumbrances<T extends Prisma.BudgetLine$encumbrancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetLine$encumbrancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncumbrancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BudgetLineFieldRefs {
    readonly id: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly budgetVersionId: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly budgetLineGroup: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly lineDescription: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly class: Prisma.FieldRef<"BudgetLine", 'BudgetLineClass'>;
    readonly phasingMethod: Prisma.FieldRef<"BudgetLine", 'BudgetPhasingMethod'>;
    readonly driverBasis: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly driverRateOrFactor: Prisma.FieldRef<"BudgetLine", 'Decimal'>;
    readonly escalatorFactorsJson: Prisma.FieldRef<"BudgetLine", 'Json'>;
    readonly sourceSheetRef: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly isActive: Prisma.FieldRef<"BudgetLine", 'Boolean'>;
    readonly flaggedReason: Prisma.FieldRef<"BudgetLine", 'String'>;
    readonly valuesAsGiven: Prisma.FieldRef<"BudgetLine", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"BudgetLine", 'DateTime'>;
}
export type BudgetLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where: Prisma.BudgetLineWhereUniqueInput;
};
export type BudgetLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where: Prisma.BudgetLineWhereUniqueInput;
};
export type BudgetLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineWhereInput;
    orderBy?: Prisma.BudgetLineOrderByWithRelationInput | Prisma.BudgetLineOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineScalarFieldEnum | Prisma.BudgetLineScalarFieldEnum[];
};
export type BudgetLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineWhereInput;
    orderBy?: Prisma.BudgetLineOrderByWithRelationInput | Prisma.BudgetLineOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineScalarFieldEnum | Prisma.BudgetLineScalarFieldEnum[];
};
export type BudgetLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineWhereInput;
    orderBy?: Prisma.BudgetLineOrderByWithRelationInput | Prisma.BudgetLineOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineScalarFieldEnum | Prisma.BudgetLineScalarFieldEnum[];
};
export type BudgetLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetLineCreateInput, Prisma.BudgetLineUncheckedCreateInput>;
};
export type BudgetLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BudgetLineCreateManyInput | Prisma.BudgetLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BudgetLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    data: Prisma.BudgetLineCreateManyInput | Prisma.BudgetLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BudgetLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BudgetLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetLineUpdateInput, Prisma.BudgetLineUncheckedUpdateInput>;
    where: Prisma.BudgetLineWhereUniqueInput;
};
export type BudgetLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BudgetLineUpdateManyMutationInput, Prisma.BudgetLineUncheckedUpdateManyInput>;
    where?: Prisma.BudgetLineWhereInput;
    limit?: number;
};
export type BudgetLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetLineUpdateManyMutationInput, Prisma.BudgetLineUncheckedUpdateManyInput>;
    where?: Prisma.BudgetLineWhereInput;
    limit?: number;
    include?: Prisma.BudgetLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BudgetLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where: Prisma.BudgetLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetLineCreateInput, Prisma.BudgetLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BudgetLineUpdateInput, Prisma.BudgetLineUncheckedUpdateInput>;
};
export type BudgetLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where: Prisma.BudgetLineWhereUniqueInput;
};
export type BudgetLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineWhereInput;
    limit?: number;
};
export type BudgetLine$monthlyAmountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineMonthlyAmountSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineMonthlyAmountOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineMonthlyAmountInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineMonthlyAmountWhereInput;
    orderBy?: Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput | Prisma.BudgetLineMonthlyAmountOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineMonthlyAmountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineMonthlyAmountScalarFieldEnum | Prisma.BudgetLineMonthlyAmountScalarFieldEnum[];
};
export type BudgetLine$encumbrancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncumbranceSelect<ExtArgs> | null;
    omit?: Prisma.EncumbranceOmit<ExtArgs> | null;
    include?: Prisma.EncumbranceInclude<ExtArgs> | null;
    where?: Prisma.EncumbranceWhereInput;
    orderBy?: Prisma.EncumbranceOrderByWithRelationInput | Prisma.EncumbranceOrderByWithRelationInput[];
    cursor?: Prisma.EncumbranceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncumbranceScalarFieldEnum | Prisma.EncumbranceScalarFieldEnum[];
};
export type BudgetLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
};
