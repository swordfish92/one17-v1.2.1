import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PurchaseOrderLineModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchaseOrderLinePayload>;
export type AggregatePurchaseOrderLine = {
    _count: PurchaseOrderLineCountAggregateOutputType | null;
    _avg: PurchaseOrderLineAvgAggregateOutputType | null;
    _sum: PurchaseOrderLineSumAggregateOutputType | null;
    _min: PurchaseOrderLineMinAggregateOutputType | null;
    _max: PurchaseOrderLineMaxAggregateOutputType | null;
};
export type PurchaseOrderLineAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPriceKobo: number | null;
    lineAmountKobo: number | null;
};
export type PurchaseOrderLineSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPriceKobo: bigint | null;
    lineAmountKobo: bigint | null;
};
export type PurchaseOrderLineMinAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    description: string | null;
    quantity: runtime.Decimal | null;
    unitPriceKobo: bigint | null;
    lineAmountKobo: bigint | null;
};
export type PurchaseOrderLineMaxAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    description: string | null;
    quantity: runtime.Decimal | null;
    unitPriceKobo: bigint | null;
    lineAmountKobo: bigint | null;
};
export type PurchaseOrderLineCountAggregateOutputType = {
    id: number;
    purchaseOrderId: number;
    description: number;
    quantity: number;
    unitPriceKobo: number;
    lineAmountKobo: number;
    _all: number;
};
export type PurchaseOrderLineAvgAggregateInputType = {
    quantity?: true;
    unitPriceKobo?: true;
    lineAmountKobo?: true;
};
export type PurchaseOrderLineSumAggregateInputType = {
    quantity?: true;
    unitPriceKobo?: true;
    lineAmountKobo?: true;
};
export type PurchaseOrderLineMinAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    description?: true;
    quantity?: true;
    unitPriceKobo?: true;
    lineAmountKobo?: true;
};
export type PurchaseOrderLineMaxAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    description?: true;
    quantity?: true;
    unitPriceKobo?: true;
    lineAmountKobo?: true;
};
export type PurchaseOrderLineCountAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    description?: true;
    quantity?: true;
    unitPriceKobo?: true;
    lineAmountKobo?: true;
    _all?: true;
};
export type PurchaseOrderLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderLineWhereInput;
    orderBy?: Prisma.PurchaseOrderLineOrderByWithRelationInput | Prisma.PurchaseOrderLineOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseOrderLineCountAggregateInputType;
    _avg?: PurchaseOrderLineAvgAggregateInputType;
    _sum?: PurchaseOrderLineSumAggregateInputType;
    _min?: PurchaseOrderLineMinAggregateInputType;
    _max?: PurchaseOrderLineMaxAggregateInputType;
};
export type GetPurchaseOrderLineAggregateType<T extends PurchaseOrderLineAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchaseOrderLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchaseOrderLine[P]> : Prisma.GetScalarType<T[P], AggregatePurchaseOrderLine[P]>;
};
export type PurchaseOrderLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderLineWhereInput;
    orderBy?: Prisma.PurchaseOrderLineOrderByWithAggregationInput | Prisma.PurchaseOrderLineOrderByWithAggregationInput[];
    by: Prisma.PurchaseOrderLineScalarFieldEnum[] | Prisma.PurchaseOrderLineScalarFieldEnum;
    having?: Prisma.PurchaseOrderLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseOrderLineCountAggregateInputType | true;
    _avg?: PurchaseOrderLineAvgAggregateInputType;
    _sum?: PurchaseOrderLineSumAggregateInputType;
    _min?: PurchaseOrderLineMinAggregateInputType;
    _max?: PurchaseOrderLineMaxAggregateInputType;
};
export type PurchaseOrderLineGroupByOutputType = {
    id: string;
    purchaseOrderId: string;
    description: string;
    quantity: runtime.Decimal;
    unitPriceKobo: bigint;
    lineAmountKobo: bigint;
    _count: PurchaseOrderLineCountAggregateOutputType | null;
    _avg: PurchaseOrderLineAvgAggregateOutputType | null;
    _sum: PurchaseOrderLineSumAggregateOutputType | null;
    _min: PurchaseOrderLineMinAggregateOutputType | null;
    _max: PurchaseOrderLineMaxAggregateOutputType | null;
};
export type GetPurchaseOrderLineGroupByPayload<T extends PurchaseOrderLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseOrderLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseOrderLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseOrderLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseOrderLineGroupByOutputType[P]>;
}>>;
export type PurchaseOrderLineWhereInput = {
    AND?: Prisma.PurchaseOrderLineWhereInput | Prisma.PurchaseOrderLineWhereInput[];
    OR?: Prisma.PurchaseOrderLineWhereInput[];
    NOT?: Prisma.PurchaseOrderLineWhereInput | Prisma.PurchaseOrderLineWhereInput[];
    id?: Prisma.UuidFilter<"PurchaseOrderLine"> | string;
    purchaseOrderId?: Prisma.UuidFilter<"PurchaseOrderLine"> | string;
    description?: Prisma.StringFilter<"PurchaseOrderLine"> | string;
    quantity?: Prisma.DecimalFilter<"PurchaseOrderLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFilter<"PurchaseOrderLine"> | bigint | number;
    lineAmountKobo?: Prisma.BigIntFilter<"PurchaseOrderLine"> | bigint | number;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
};
export type PurchaseOrderLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPriceKobo?: Prisma.SortOrder;
    lineAmountKobo?: Prisma.SortOrder;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
};
export type PurchaseOrderLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PurchaseOrderLineWhereInput | Prisma.PurchaseOrderLineWhereInput[];
    OR?: Prisma.PurchaseOrderLineWhereInput[];
    NOT?: Prisma.PurchaseOrderLineWhereInput | Prisma.PurchaseOrderLineWhereInput[];
    purchaseOrderId?: Prisma.UuidFilter<"PurchaseOrderLine"> | string;
    description?: Prisma.StringFilter<"PurchaseOrderLine"> | string;
    quantity?: Prisma.DecimalFilter<"PurchaseOrderLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFilter<"PurchaseOrderLine"> | bigint | number;
    lineAmountKobo?: Prisma.BigIntFilter<"PurchaseOrderLine"> | bigint | number;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
}, "id">;
export type PurchaseOrderLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPriceKobo?: Prisma.SortOrder;
    lineAmountKobo?: Prisma.SortOrder;
    _count?: Prisma.PurchaseOrderLineCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseOrderLineAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseOrderLineMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseOrderLineMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseOrderLineSumOrderByAggregateInput;
};
export type PurchaseOrderLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseOrderLineScalarWhereWithAggregatesInput | Prisma.PurchaseOrderLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseOrderLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseOrderLineScalarWhereWithAggregatesInput | Prisma.PurchaseOrderLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PurchaseOrderLine"> | string;
    purchaseOrderId?: Prisma.UuidWithAggregatesFilter<"PurchaseOrderLine"> | string;
    description?: Prisma.StringWithAggregatesFilter<"PurchaseOrderLine"> | string;
    quantity?: Prisma.DecimalWithAggregatesFilter<"PurchaseOrderLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntWithAggregatesFilter<"PurchaseOrderLine"> | bigint | number;
    lineAmountKobo?: Prisma.BigIntWithAggregatesFilter<"PurchaseOrderLine"> | bigint | number;
};
export type PurchaseOrderLineCreateInput = {
    id?: string;
    description: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo: bigint | number;
    lineAmountKobo: bigint | number;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutLinesInput;
};
export type PurchaseOrderLineUncheckedCreateInput = {
    id?: string;
    purchaseOrderId: string;
    description: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo: bigint | number;
    lineAmountKobo: bigint | number;
};
export type PurchaseOrderLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lineAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutLinesNestedInput;
};
export type PurchaseOrderLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lineAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PurchaseOrderLineCreateManyInput = {
    id?: string;
    purchaseOrderId: string;
    description: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo: bigint | number;
    lineAmountKobo: bigint | number;
};
export type PurchaseOrderLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lineAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PurchaseOrderLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lineAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PurchaseOrderLineListRelationFilter = {
    every?: Prisma.PurchaseOrderLineWhereInput;
    some?: Prisma.PurchaseOrderLineWhereInput;
    none?: Prisma.PurchaseOrderLineWhereInput;
};
export type PurchaseOrderLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseOrderLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPriceKobo?: Prisma.SortOrder;
    lineAmountKobo?: Prisma.SortOrder;
};
export type PurchaseOrderLineAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPriceKobo?: Prisma.SortOrder;
    lineAmountKobo?: Prisma.SortOrder;
};
export type PurchaseOrderLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPriceKobo?: Prisma.SortOrder;
    lineAmountKobo?: Prisma.SortOrder;
};
export type PurchaseOrderLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPriceKobo?: Prisma.SortOrder;
    lineAmountKobo?: Prisma.SortOrder;
};
export type PurchaseOrderLineSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPriceKobo?: Prisma.SortOrder;
    lineAmountKobo?: Prisma.SortOrder;
};
export type PurchaseOrderLineCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderLineCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
};
export type PurchaseOrderLineUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderLineCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
};
export type PurchaseOrderLineUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.PurchaseOrderLineUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderLineCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    update?: Prisma.PurchaseOrderLineUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.PurchaseOrderLineUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.PurchaseOrderLineScalarWhereInput | Prisma.PurchaseOrderLineScalarWhereInput[];
};
export type PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.PurchaseOrderLineUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderLineCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderLineWhereUniqueInput | Prisma.PurchaseOrderLineWhereUniqueInput[];
    update?: Prisma.PurchaseOrderLineUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.PurchaseOrderLineUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.PurchaseOrderLineUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.PurchaseOrderLineScalarWhereInput | Prisma.PurchaseOrderLineScalarWhereInput[];
};
export type PurchaseOrderLineCreateWithoutPurchaseOrderInput = {
    id?: string;
    description: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo: bigint | number;
    lineAmountKobo: bigint | number;
};
export type PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    description: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo: bigint | number;
    lineAmountKobo: bigint | number;
};
export type PurchaseOrderLineCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput>;
};
export type PurchaseOrderLineCreateManyPurchaseOrderInputEnvelope = {
    data: Prisma.PurchaseOrderLineCreateManyPurchaseOrderInput | Prisma.PurchaseOrderLineCreateManyPurchaseOrderInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderLineUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderLineUpdateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderLineCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedCreateWithoutPurchaseOrderInput>;
};
export type PurchaseOrderLineUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderLineUpdateWithoutPurchaseOrderInput, Prisma.PurchaseOrderLineUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type PurchaseOrderLineUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderLineUpdateManyMutationInput, Prisma.PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderInput>;
};
export type PurchaseOrderLineScalarWhereInput = {
    AND?: Prisma.PurchaseOrderLineScalarWhereInput | Prisma.PurchaseOrderLineScalarWhereInput[];
    OR?: Prisma.PurchaseOrderLineScalarWhereInput[];
    NOT?: Prisma.PurchaseOrderLineScalarWhereInput | Prisma.PurchaseOrderLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"PurchaseOrderLine"> | string;
    purchaseOrderId?: Prisma.UuidFilter<"PurchaseOrderLine"> | string;
    description?: Prisma.StringFilter<"PurchaseOrderLine"> | string;
    quantity?: Prisma.DecimalFilter<"PurchaseOrderLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFilter<"PurchaseOrderLine"> | bigint | number;
    lineAmountKobo?: Prisma.BigIntFilter<"PurchaseOrderLine"> | bigint | number;
};
export type PurchaseOrderLineCreateManyPurchaseOrderInput = {
    id?: string;
    description: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo: bigint | number;
    lineAmountKobo: bigint | number;
};
export type PurchaseOrderLineUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lineAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PurchaseOrderLineUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lineAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PurchaseOrderLineUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPriceKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    lineAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type PurchaseOrderLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPriceKobo?: boolean;
    lineAmountKobo?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrderLine"]>;
export type PurchaseOrderLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPriceKobo?: boolean;
    lineAmountKobo?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrderLine"]>;
export type PurchaseOrderLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPriceKobo?: boolean;
    lineAmountKobo?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrderLine"]>;
export type PurchaseOrderLineSelectScalar = {
    id?: boolean;
    purchaseOrderId?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPriceKobo?: boolean;
    lineAmountKobo?: boolean;
};
export type PurchaseOrderLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purchaseOrderId" | "description" | "quantity" | "unitPriceKobo" | "lineAmountKobo", ExtArgs["result"]["purchaseOrderLine"]>;
export type PurchaseOrderLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
};
export type PurchaseOrderLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
};
export type PurchaseOrderLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
};
export type $PurchaseOrderLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PurchaseOrderLine";
    objects: {
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        purchaseOrderId: string;
        description: string;
        quantity: runtime.Decimal;
        unitPriceKobo: bigint;
        lineAmountKobo: bigint;
    }, ExtArgs["result"]["purchaseOrderLine"]>;
    composites: {};
};
export type PurchaseOrderLineGetPayload<S extends boolean | null | undefined | PurchaseOrderLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload, S>;
export type PurchaseOrderLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseOrderLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseOrderLineCountAggregateInputType | true;
};
export interface PurchaseOrderLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrderLine'];
        meta: {
            name: 'PurchaseOrderLine';
        };
    };
    findUnique<T extends PurchaseOrderLineFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseOrderLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseOrderLineFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseOrderLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseOrderLineFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseOrderLineCreateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseOrderLineCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseOrderLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseOrderLineDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseOrderLineUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseOrderLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseOrderLineUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseOrderLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseOrderLineUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseOrderLineUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderLineClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseOrderLineCountArgs>(args?: Prisma.Subset<T, PurchaseOrderLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseOrderLineCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseOrderLineAggregateArgs>(args: Prisma.Subset<T, PurchaseOrderLineAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderLineAggregateType<T>>;
    groupBy<T extends PurchaseOrderLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseOrderLineGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseOrderLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseOrderLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseOrderLineFieldRefs;
}
export interface Prisma__PurchaseOrderLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchaseOrder<T extends Prisma.PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseOrderLineFieldRefs {
    readonly id: Prisma.FieldRef<"PurchaseOrderLine", 'String'>;
    readonly purchaseOrderId: Prisma.FieldRef<"PurchaseOrderLine", 'String'>;
    readonly description: Prisma.FieldRef<"PurchaseOrderLine", 'String'>;
    readonly quantity: Prisma.FieldRef<"PurchaseOrderLine", 'Decimal'>;
    readonly unitPriceKobo: Prisma.FieldRef<"PurchaseOrderLine", 'BigInt'>;
    readonly lineAmountKobo: Prisma.FieldRef<"PurchaseOrderLine", 'BigInt'>;
}
export type PurchaseOrderLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
};
export type PurchaseOrderLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
};
export type PurchaseOrderLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderLineWhereInput;
    orderBy?: Prisma.PurchaseOrderLineOrderByWithRelationInput | Prisma.PurchaseOrderLineOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderLineScalarFieldEnum | Prisma.PurchaseOrderLineScalarFieldEnum[];
};
export type PurchaseOrderLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderLineWhereInput;
    orderBy?: Prisma.PurchaseOrderLineOrderByWithRelationInput | Prisma.PurchaseOrderLineOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderLineScalarFieldEnum | Prisma.PurchaseOrderLineScalarFieldEnum[];
};
export type PurchaseOrderLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderLineWhereInput;
    orderBy?: Prisma.PurchaseOrderLineOrderByWithRelationInput | Prisma.PurchaseOrderLineOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderLineScalarFieldEnum | Prisma.PurchaseOrderLineScalarFieldEnum[];
};
export type PurchaseOrderLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderLineCreateInput, Prisma.PurchaseOrderLineUncheckedCreateInput>;
};
export type PurchaseOrderLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseOrderLineCreateManyInput | Prisma.PurchaseOrderLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    data: Prisma.PurchaseOrderLineCreateManyInput | Prisma.PurchaseOrderLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseOrderLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderLineUpdateInput, Prisma.PurchaseOrderLineUncheckedUpdateInput>;
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
};
export type PurchaseOrderLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseOrderLineUpdateManyMutationInput, Prisma.PurchaseOrderLineUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderLineWhereInput;
    limit?: number;
};
export type PurchaseOrderLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderLineUpdateManyMutationInput, Prisma.PurchaseOrderLineUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderLineWhereInput;
    limit?: number;
    include?: Prisma.PurchaseOrderLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderLineCreateInput, Prisma.PurchaseOrderLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseOrderLineUpdateInput, Prisma.PurchaseOrderLineUncheckedUpdateInput>;
};
export type PurchaseOrderLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderLineWhereUniqueInput;
};
export type PurchaseOrderLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderLineWhereInput;
    limit?: number;
};
export type PurchaseOrderLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderLineSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderLineOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderLineInclude<ExtArgs> | null;
};
