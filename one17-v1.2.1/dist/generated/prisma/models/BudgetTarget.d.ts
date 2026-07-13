import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BudgetTargetModel = runtime.Types.Result.DefaultSelection<Prisma.$BudgetTargetPayload>;
export type AggregateBudgetTarget = {
    _count: BudgetTargetCountAggregateOutputType | null;
    _avg: BudgetTargetAvgAggregateOutputType | null;
    _sum: BudgetTargetSumAggregateOutputType | null;
    _min: BudgetTargetMinAggregateOutputType | null;
    _max: BudgetTargetMaxAggregateOutputType | null;
};
export type BudgetTargetAvgAggregateOutputType = {
    month: number | null;
    value: runtime.Decimal | null;
};
export type BudgetTargetSumAggregateOutputType = {
    month: number | null;
    value: runtime.Decimal | null;
};
export type BudgetTargetMinAggregateOutputType = {
    id: string | null;
    budgetVersionId: string | null;
    targetType: string | null;
    month: number | null;
    value: runtime.Decimal | null;
    unit: string | null;
    sourceSheetRef: string | null;
    createdAt: Date | null;
};
export type BudgetTargetMaxAggregateOutputType = {
    id: string | null;
    budgetVersionId: string | null;
    targetType: string | null;
    month: number | null;
    value: runtime.Decimal | null;
    unit: string | null;
    sourceSheetRef: string | null;
    createdAt: Date | null;
};
export type BudgetTargetCountAggregateOutputType = {
    id: number;
    budgetVersionId: number;
    targetType: number;
    month: number;
    value: number;
    unit: number;
    sourceSheetRef: number;
    createdAt: number;
    _all: number;
};
export type BudgetTargetAvgAggregateInputType = {
    month?: true;
    value?: true;
};
export type BudgetTargetSumAggregateInputType = {
    month?: true;
    value?: true;
};
export type BudgetTargetMinAggregateInputType = {
    id?: true;
    budgetVersionId?: true;
    targetType?: true;
    month?: true;
    value?: true;
    unit?: true;
    sourceSheetRef?: true;
    createdAt?: true;
};
export type BudgetTargetMaxAggregateInputType = {
    id?: true;
    budgetVersionId?: true;
    targetType?: true;
    month?: true;
    value?: true;
    unit?: true;
    sourceSheetRef?: true;
    createdAt?: true;
};
export type BudgetTargetCountAggregateInputType = {
    id?: true;
    budgetVersionId?: true;
    targetType?: true;
    month?: true;
    value?: true;
    unit?: true;
    sourceSheetRef?: true;
    createdAt?: true;
    _all?: true;
};
export type BudgetTargetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetTargetWhereInput;
    orderBy?: Prisma.BudgetTargetOrderByWithRelationInput | Prisma.BudgetTargetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetTargetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BudgetTargetCountAggregateInputType;
    _avg?: BudgetTargetAvgAggregateInputType;
    _sum?: BudgetTargetSumAggregateInputType;
    _min?: BudgetTargetMinAggregateInputType;
    _max?: BudgetTargetMaxAggregateInputType;
};
export type GetBudgetTargetAggregateType<T extends BudgetTargetAggregateArgs> = {
    [P in keyof T & keyof AggregateBudgetTarget]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBudgetTarget[P]> : Prisma.GetScalarType<T[P], AggregateBudgetTarget[P]>;
};
export type BudgetTargetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetTargetWhereInput;
    orderBy?: Prisma.BudgetTargetOrderByWithAggregationInput | Prisma.BudgetTargetOrderByWithAggregationInput[];
    by: Prisma.BudgetTargetScalarFieldEnum[] | Prisma.BudgetTargetScalarFieldEnum;
    having?: Prisma.BudgetTargetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BudgetTargetCountAggregateInputType | true;
    _avg?: BudgetTargetAvgAggregateInputType;
    _sum?: BudgetTargetSumAggregateInputType;
    _min?: BudgetTargetMinAggregateInputType;
    _max?: BudgetTargetMaxAggregateInputType;
};
export type BudgetTargetGroupByOutputType = {
    id: string;
    budgetVersionId: string;
    targetType: string;
    month: number | null;
    value: runtime.Decimal;
    unit: string;
    sourceSheetRef: string;
    createdAt: Date;
    _count: BudgetTargetCountAggregateOutputType | null;
    _avg: BudgetTargetAvgAggregateOutputType | null;
    _sum: BudgetTargetSumAggregateOutputType | null;
    _min: BudgetTargetMinAggregateOutputType | null;
    _max: BudgetTargetMaxAggregateOutputType | null;
};
export type GetBudgetTargetGroupByPayload<T extends BudgetTargetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BudgetTargetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BudgetTargetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BudgetTargetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BudgetTargetGroupByOutputType[P]>;
}>>;
export type BudgetTargetWhereInput = {
    AND?: Prisma.BudgetTargetWhereInput | Prisma.BudgetTargetWhereInput[];
    OR?: Prisma.BudgetTargetWhereInput[];
    NOT?: Prisma.BudgetTargetWhereInput | Prisma.BudgetTargetWhereInput[];
    id?: Prisma.UuidFilter<"BudgetTarget"> | string;
    budgetVersionId?: Prisma.UuidFilter<"BudgetTarget"> | string;
    targetType?: Prisma.StringFilter<"BudgetTarget"> | string;
    month?: Prisma.IntNullableFilter<"BudgetTarget"> | number | null;
    value?: Prisma.DecimalFilter<"BudgetTarget"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFilter<"BudgetTarget"> | string;
    sourceSheetRef?: Prisma.StringFilter<"BudgetTarget"> | string;
    createdAt?: Prisma.DateTimeFilter<"BudgetTarget"> | Date | string;
    budgetVersion?: Prisma.XOR<Prisma.BudgetVersionScalarRelationFilter, Prisma.BudgetVersionWhereInput>;
};
export type BudgetTargetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    month?: Prisma.SortOrderInput | Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    budgetVersion?: Prisma.BudgetVersionOrderByWithRelationInput;
};
export type BudgetTargetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BudgetTargetWhereInput | Prisma.BudgetTargetWhereInput[];
    OR?: Prisma.BudgetTargetWhereInput[];
    NOT?: Prisma.BudgetTargetWhereInput | Prisma.BudgetTargetWhereInput[];
    budgetVersionId?: Prisma.UuidFilter<"BudgetTarget"> | string;
    targetType?: Prisma.StringFilter<"BudgetTarget"> | string;
    month?: Prisma.IntNullableFilter<"BudgetTarget"> | number | null;
    value?: Prisma.DecimalFilter<"BudgetTarget"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFilter<"BudgetTarget"> | string;
    sourceSheetRef?: Prisma.StringFilter<"BudgetTarget"> | string;
    createdAt?: Prisma.DateTimeFilter<"BudgetTarget"> | Date | string;
    budgetVersion?: Prisma.XOR<Prisma.BudgetVersionScalarRelationFilter, Prisma.BudgetVersionWhereInput>;
}, "id">;
export type BudgetTargetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    month?: Prisma.SortOrderInput | Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BudgetTargetCountOrderByAggregateInput;
    _avg?: Prisma.BudgetTargetAvgOrderByAggregateInput;
    _max?: Prisma.BudgetTargetMaxOrderByAggregateInput;
    _min?: Prisma.BudgetTargetMinOrderByAggregateInput;
    _sum?: Prisma.BudgetTargetSumOrderByAggregateInput;
};
export type BudgetTargetScalarWhereWithAggregatesInput = {
    AND?: Prisma.BudgetTargetScalarWhereWithAggregatesInput | Prisma.BudgetTargetScalarWhereWithAggregatesInput[];
    OR?: Prisma.BudgetTargetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BudgetTargetScalarWhereWithAggregatesInput | Prisma.BudgetTargetScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BudgetTarget"> | string;
    budgetVersionId?: Prisma.UuidWithAggregatesFilter<"BudgetTarget"> | string;
    targetType?: Prisma.StringWithAggregatesFilter<"BudgetTarget"> | string;
    month?: Prisma.IntNullableWithAggregatesFilter<"BudgetTarget"> | number | null;
    value?: Prisma.DecimalWithAggregatesFilter<"BudgetTarget"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringWithAggregatesFilter<"BudgetTarget"> | string;
    sourceSheetRef?: Prisma.StringWithAggregatesFilter<"BudgetTarget"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BudgetTarget"> | Date | string;
};
export type BudgetTargetCreateInput = {
    id?: string;
    targetType: string;
    month?: number | null;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit: string;
    sourceSheetRef: string;
    createdAt?: Date | string;
    budgetVersion: Prisma.BudgetVersionCreateNestedOneWithoutTargetsInput;
};
export type BudgetTargetUncheckedCreateInput = {
    id?: string;
    budgetVersionId: string;
    targetType: string;
    month?: number | null;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit: string;
    sourceSheetRef: string;
    createdAt?: Date | string;
};
export type BudgetTargetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budgetVersion?: Prisma.BudgetVersionUpdateOneRequiredWithoutTargetsNestedInput;
};
export type BudgetTargetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetTargetCreateManyInput = {
    id?: string;
    budgetVersionId: string;
    targetType: string;
    month?: number | null;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit: string;
    sourceSheetRef: string;
    createdAt?: Date | string;
};
export type BudgetTargetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetTargetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetTargetListRelationFilter = {
    every?: Prisma.BudgetTargetWhereInput;
    some?: Prisma.BudgetTargetWhereInput;
    none?: Prisma.BudgetTargetWhereInput;
};
export type BudgetTargetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BudgetTargetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetTargetAvgOrderByAggregateInput = {
    month?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type BudgetTargetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetTargetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetVersionId?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    sourceSheetRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetTargetSumOrderByAggregateInput = {
    month?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type BudgetTargetCreateNestedManyWithoutBudgetVersionInput = {
    create?: Prisma.XOR<Prisma.BudgetTargetCreateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetTargetCreateWithoutBudgetVersionInput[] | Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetTargetCreateManyBudgetVersionInputEnvelope;
    connect?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
};
export type BudgetTargetUncheckedCreateNestedManyWithoutBudgetVersionInput = {
    create?: Prisma.XOR<Prisma.BudgetTargetCreateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetTargetCreateWithoutBudgetVersionInput[] | Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetTargetCreateManyBudgetVersionInputEnvelope;
    connect?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
};
export type BudgetTargetUpdateManyWithoutBudgetVersionNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetTargetCreateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetTargetCreateWithoutBudgetVersionInput[] | Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput[];
    upsert?: Prisma.BudgetTargetUpsertWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetTargetUpsertWithWhereUniqueWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetTargetCreateManyBudgetVersionInputEnvelope;
    set?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    disconnect?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    delete?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    connect?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    update?: Prisma.BudgetTargetUpdateWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetTargetUpdateWithWhereUniqueWithoutBudgetVersionInput[];
    updateMany?: Prisma.BudgetTargetUpdateManyWithWhereWithoutBudgetVersionInput | Prisma.BudgetTargetUpdateManyWithWhereWithoutBudgetVersionInput[];
    deleteMany?: Prisma.BudgetTargetScalarWhereInput | Prisma.BudgetTargetScalarWhereInput[];
};
export type BudgetTargetUncheckedUpdateManyWithoutBudgetVersionNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetTargetCreateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput> | Prisma.BudgetTargetCreateWithoutBudgetVersionInput[] | Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput[];
    connectOrCreate?: Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput | Prisma.BudgetTargetCreateOrConnectWithoutBudgetVersionInput[];
    upsert?: Prisma.BudgetTargetUpsertWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetTargetUpsertWithWhereUniqueWithoutBudgetVersionInput[];
    createMany?: Prisma.BudgetTargetCreateManyBudgetVersionInputEnvelope;
    set?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    disconnect?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    delete?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    connect?: Prisma.BudgetTargetWhereUniqueInput | Prisma.BudgetTargetWhereUniqueInput[];
    update?: Prisma.BudgetTargetUpdateWithWhereUniqueWithoutBudgetVersionInput | Prisma.BudgetTargetUpdateWithWhereUniqueWithoutBudgetVersionInput[];
    updateMany?: Prisma.BudgetTargetUpdateManyWithWhereWithoutBudgetVersionInput | Prisma.BudgetTargetUpdateManyWithWhereWithoutBudgetVersionInput[];
    deleteMany?: Prisma.BudgetTargetScalarWhereInput | Prisma.BudgetTargetScalarWhereInput[];
};
export type BudgetTargetCreateWithoutBudgetVersionInput = {
    id?: string;
    targetType: string;
    month?: number | null;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit: string;
    sourceSheetRef: string;
    createdAt?: Date | string;
};
export type BudgetTargetUncheckedCreateWithoutBudgetVersionInput = {
    id?: string;
    targetType: string;
    month?: number | null;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit: string;
    sourceSheetRef: string;
    createdAt?: Date | string;
};
export type BudgetTargetCreateOrConnectWithoutBudgetVersionInput = {
    where: Prisma.BudgetTargetWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetTargetCreateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput>;
};
export type BudgetTargetCreateManyBudgetVersionInputEnvelope = {
    data: Prisma.BudgetTargetCreateManyBudgetVersionInput | Prisma.BudgetTargetCreateManyBudgetVersionInput[];
    skipDuplicates?: boolean;
};
export type BudgetTargetUpsertWithWhereUniqueWithoutBudgetVersionInput = {
    where: Prisma.BudgetTargetWhereUniqueInput;
    update: Prisma.XOR<Prisma.BudgetTargetUpdateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedUpdateWithoutBudgetVersionInput>;
    create: Prisma.XOR<Prisma.BudgetTargetCreateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedCreateWithoutBudgetVersionInput>;
};
export type BudgetTargetUpdateWithWhereUniqueWithoutBudgetVersionInput = {
    where: Prisma.BudgetTargetWhereUniqueInput;
    data: Prisma.XOR<Prisma.BudgetTargetUpdateWithoutBudgetVersionInput, Prisma.BudgetTargetUncheckedUpdateWithoutBudgetVersionInput>;
};
export type BudgetTargetUpdateManyWithWhereWithoutBudgetVersionInput = {
    where: Prisma.BudgetTargetScalarWhereInput;
    data: Prisma.XOR<Prisma.BudgetTargetUpdateManyMutationInput, Prisma.BudgetTargetUncheckedUpdateManyWithoutBudgetVersionInput>;
};
export type BudgetTargetScalarWhereInput = {
    AND?: Prisma.BudgetTargetScalarWhereInput | Prisma.BudgetTargetScalarWhereInput[];
    OR?: Prisma.BudgetTargetScalarWhereInput[];
    NOT?: Prisma.BudgetTargetScalarWhereInput | Prisma.BudgetTargetScalarWhereInput[];
    id?: Prisma.UuidFilter<"BudgetTarget"> | string;
    budgetVersionId?: Prisma.UuidFilter<"BudgetTarget"> | string;
    targetType?: Prisma.StringFilter<"BudgetTarget"> | string;
    month?: Prisma.IntNullableFilter<"BudgetTarget"> | number | null;
    value?: Prisma.DecimalFilter<"BudgetTarget"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFilter<"BudgetTarget"> | string;
    sourceSheetRef?: Prisma.StringFilter<"BudgetTarget"> | string;
    createdAt?: Prisma.DateTimeFilter<"BudgetTarget"> | Date | string;
};
export type BudgetTargetCreateManyBudgetVersionInput = {
    id?: string;
    targetType: string;
    month?: number | null;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit: string;
    sourceSheetRef: string;
    createdAt?: Date | string;
};
export type BudgetTargetUpdateWithoutBudgetVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetTargetUncheckedUpdateWithoutBudgetVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetTargetUncheckedUpdateManyWithoutBudgetVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceSheetRef?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetTargetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetVersionId?: boolean;
    targetType?: boolean;
    month?: boolean;
    value?: boolean;
    unit?: boolean;
    sourceSheetRef?: boolean;
    createdAt?: boolean;
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetTarget"]>;
export type BudgetTargetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetVersionId?: boolean;
    targetType?: boolean;
    month?: boolean;
    value?: boolean;
    unit?: boolean;
    sourceSheetRef?: boolean;
    createdAt?: boolean;
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetTarget"]>;
export type BudgetTargetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    budgetVersionId?: boolean;
    targetType?: boolean;
    month?: boolean;
    value?: boolean;
    unit?: boolean;
    sourceSheetRef?: boolean;
    createdAt?: boolean;
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetTarget"]>;
export type BudgetTargetSelectScalar = {
    id?: boolean;
    budgetVersionId?: boolean;
    targetType?: boolean;
    month?: boolean;
    value?: boolean;
    unit?: boolean;
    sourceSheetRef?: boolean;
    createdAt?: boolean;
};
export type BudgetTargetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "budgetVersionId" | "targetType" | "month" | "value" | "unit" | "sourceSheetRef" | "createdAt", ExtArgs["result"]["budgetTarget"]>;
export type BudgetTargetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
};
export type BudgetTargetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
};
export type BudgetTargetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    budgetVersion?: boolean | Prisma.BudgetVersionDefaultArgs<ExtArgs>;
};
export type $BudgetTargetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BudgetTarget";
    objects: {
        budgetVersion: Prisma.$BudgetVersionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        budgetVersionId: string;
        targetType: string;
        month: number | null;
        value: runtime.Decimal;
        unit: string;
        sourceSheetRef: string;
        createdAt: Date;
    }, ExtArgs["result"]["budgetTarget"]>;
    composites: {};
};
export type BudgetTargetGetPayload<S extends boolean | null | undefined | BudgetTargetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload, S>;
export type BudgetTargetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BudgetTargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BudgetTargetCountAggregateInputType | true;
};
export interface BudgetTargetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BudgetTarget'];
        meta: {
            name: 'BudgetTarget';
        };
    };
    findUnique<T extends BudgetTargetFindUniqueArgs>(args: Prisma.SelectSubset<T, BudgetTargetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BudgetTargetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BudgetTargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BudgetTargetFindFirstArgs>(args?: Prisma.SelectSubset<T, BudgetTargetFindFirstArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BudgetTargetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BudgetTargetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BudgetTargetFindManyArgs>(args?: Prisma.SelectSubset<T, BudgetTargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BudgetTargetCreateArgs>(args: Prisma.SelectSubset<T, BudgetTargetCreateArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BudgetTargetCreateManyArgs>(args?: Prisma.SelectSubset<T, BudgetTargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BudgetTargetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BudgetTargetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BudgetTargetDeleteArgs>(args: Prisma.SelectSubset<T, BudgetTargetDeleteArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BudgetTargetUpdateArgs>(args: Prisma.SelectSubset<T, BudgetTargetUpdateArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BudgetTargetDeleteManyArgs>(args?: Prisma.SelectSubset<T, BudgetTargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BudgetTargetUpdateManyArgs>(args: Prisma.SelectSubset<T, BudgetTargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BudgetTargetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BudgetTargetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BudgetTargetUpsertArgs>(args: Prisma.SelectSubset<T, BudgetTargetUpsertArgs<ExtArgs>>): Prisma.Prisma__BudgetTargetClient<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BudgetTargetCountArgs>(args?: Prisma.Subset<T, BudgetTargetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BudgetTargetCountAggregateOutputType> : number>;
    aggregate<T extends BudgetTargetAggregateArgs>(args: Prisma.Subset<T, BudgetTargetAggregateArgs>): Prisma.PrismaPromise<GetBudgetTargetAggregateType<T>>;
    groupBy<T extends BudgetTargetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BudgetTargetGroupByArgs['orderBy'];
    } : {
        orderBy?: BudgetTargetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BudgetTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BudgetTargetFieldRefs;
}
export interface Prisma__BudgetTargetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    budgetVersion<T extends Prisma.BudgetVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BudgetTargetFieldRefs {
    readonly id: Prisma.FieldRef<"BudgetTarget", 'String'>;
    readonly budgetVersionId: Prisma.FieldRef<"BudgetTarget", 'String'>;
    readonly targetType: Prisma.FieldRef<"BudgetTarget", 'String'>;
    readonly month: Prisma.FieldRef<"BudgetTarget", 'Int'>;
    readonly value: Prisma.FieldRef<"BudgetTarget", 'Decimal'>;
    readonly unit: Prisma.FieldRef<"BudgetTarget", 'String'>;
    readonly sourceSheetRef: Prisma.FieldRef<"BudgetTarget", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BudgetTarget", 'DateTime'>;
}
export type BudgetTargetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where: Prisma.BudgetTargetWhereUniqueInput;
};
export type BudgetTargetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where: Prisma.BudgetTargetWhereUniqueInput;
};
export type BudgetTargetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where?: Prisma.BudgetTargetWhereInput;
    orderBy?: Prisma.BudgetTargetOrderByWithRelationInput | Prisma.BudgetTargetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetTargetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetTargetScalarFieldEnum | Prisma.BudgetTargetScalarFieldEnum[];
};
export type BudgetTargetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where?: Prisma.BudgetTargetWhereInput;
    orderBy?: Prisma.BudgetTargetOrderByWithRelationInput | Prisma.BudgetTargetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetTargetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetTargetScalarFieldEnum | Prisma.BudgetTargetScalarFieldEnum[];
};
export type BudgetTargetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where?: Prisma.BudgetTargetWhereInput;
    orderBy?: Prisma.BudgetTargetOrderByWithRelationInput | Prisma.BudgetTargetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetTargetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetTargetScalarFieldEnum | Prisma.BudgetTargetScalarFieldEnum[];
};
export type BudgetTargetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetTargetCreateInput, Prisma.BudgetTargetUncheckedCreateInput>;
};
export type BudgetTargetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BudgetTargetCreateManyInput | Prisma.BudgetTargetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BudgetTargetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    data: Prisma.BudgetTargetCreateManyInput | Prisma.BudgetTargetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BudgetTargetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BudgetTargetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetTargetUpdateInput, Prisma.BudgetTargetUncheckedUpdateInput>;
    where: Prisma.BudgetTargetWhereUniqueInput;
};
export type BudgetTargetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BudgetTargetUpdateManyMutationInput, Prisma.BudgetTargetUncheckedUpdateManyInput>;
    where?: Prisma.BudgetTargetWhereInput;
    limit?: number;
};
export type BudgetTargetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetTargetUpdateManyMutationInput, Prisma.BudgetTargetUncheckedUpdateManyInput>;
    where?: Prisma.BudgetTargetWhereInput;
    limit?: number;
    include?: Prisma.BudgetTargetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BudgetTargetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where: Prisma.BudgetTargetWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetTargetCreateInput, Prisma.BudgetTargetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BudgetTargetUpdateInput, Prisma.BudgetTargetUncheckedUpdateInput>;
};
export type BudgetTargetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where: Prisma.BudgetTargetWhereUniqueInput;
};
export type BudgetTargetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetTargetWhereInput;
    limit?: number;
};
export type BudgetTargetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
};
