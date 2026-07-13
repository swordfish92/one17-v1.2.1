import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmClientAssetValuationModel = runtime.Types.Result.DefaultSelection<Prisma.$WmClientAssetValuationPayload>;
export type AggregateWmClientAssetValuation = {
    _count: WmClientAssetValuationCountAggregateOutputType | null;
    _avg: WmClientAssetValuationAvgAggregateOutputType | null;
    _sum: WmClientAssetValuationSumAggregateOutputType | null;
    _min: WmClientAssetValuationMinAggregateOutputType | null;
    _max: WmClientAssetValuationMaxAggregateOutputType | null;
};
export type WmClientAssetValuationAvgAggregateOutputType = {
    valueKobo: number | null;
};
export type WmClientAssetValuationSumAggregateOutputType = {
    valueKobo: bigint | null;
};
export type WmClientAssetValuationMinAggregateOutputType = {
    id: string | null;
    wmClientAssetId: string | null;
    valuationDate: Date | null;
    valueKobo: bigint | null;
    recordedByUserId: string | null;
    createdAt: Date | null;
};
export type WmClientAssetValuationMaxAggregateOutputType = {
    id: string | null;
    wmClientAssetId: string | null;
    valuationDate: Date | null;
    valueKobo: bigint | null;
    recordedByUserId: string | null;
    createdAt: Date | null;
};
export type WmClientAssetValuationCountAggregateOutputType = {
    id: number;
    wmClientAssetId: number;
    valuationDate: number;
    valueKobo: number;
    recordedByUserId: number;
    createdAt: number;
    _all: number;
};
export type WmClientAssetValuationAvgAggregateInputType = {
    valueKobo?: true;
};
export type WmClientAssetValuationSumAggregateInputType = {
    valueKobo?: true;
};
export type WmClientAssetValuationMinAggregateInputType = {
    id?: true;
    wmClientAssetId?: true;
    valuationDate?: true;
    valueKobo?: true;
    recordedByUserId?: true;
    createdAt?: true;
};
export type WmClientAssetValuationMaxAggregateInputType = {
    id?: true;
    wmClientAssetId?: true;
    valuationDate?: true;
    valueKobo?: true;
    recordedByUserId?: true;
    createdAt?: true;
};
export type WmClientAssetValuationCountAggregateInputType = {
    id?: true;
    wmClientAssetId?: true;
    valuationDate?: true;
    valueKobo?: true;
    recordedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type WmClientAssetValuationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmClientAssetValuationWhereInput;
    orderBy?: Prisma.WmClientAssetValuationOrderByWithRelationInput | Prisma.WmClientAssetValuationOrderByWithRelationInput[];
    cursor?: Prisma.WmClientAssetValuationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmClientAssetValuationCountAggregateInputType;
    _avg?: WmClientAssetValuationAvgAggregateInputType;
    _sum?: WmClientAssetValuationSumAggregateInputType;
    _min?: WmClientAssetValuationMinAggregateInputType;
    _max?: WmClientAssetValuationMaxAggregateInputType;
};
export type GetWmClientAssetValuationAggregateType<T extends WmClientAssetValuationAggregateArgs> = {
    [P in keyof T & keyof AggregateWmClientAssetValuation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmClientAssetValuation[P]> : Prisma.GetScalarType<T[P], AggregateWmClientAssetValuation[P]>;
};
export type WmClientAssetValuationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmClientAssetValuationWhereInput;
    orderBy?: Prisma.WmClientAssetValuationOrderByWithAggregationInput | Prisma.WmClientAssetValuationOrderByWithAggregationInput[];
    by: Prisma.WmClientAssetValuationScalarFieldEnum[] | Prisma.WmClientAssetValuationScalarFieldEnum;
    having?: Prisma.WmClientAssetValuationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmClientAssetValuationCountAggregateInputType | true;
    _avg?: WmClientAssetValuationAvgAggregateInputType;
    _sum?: WmClientAssetValuationSumAggregateInputType;
    _min?: WmClientAssetValuationMinAggregateInputType;
    _max?: WmClientAssetValuationMaxAggregateInputType;
};
export type WmClientAssetValuationGroupByOutputType = {
    id: string;
    wmClientAssetId: string;
    valuationDate: Date;
    valueKobo: bigint;
    recordedByUserId: string;
    createdAt: Date;
    _count: WmClientAssetValuationCountAggregateOutputType | null;
    _avg: WmClientAssetValuationAvgAggregateOutputType | null;
    _sum: WmClientAssetValuationSumAggregateOutputType | null;
    _min: WmClientAssetValuationMinAggregateOutputType | null;
    _max: WmClientAssetValuationMaxAggregateOutputType | null;
};
export type GetWmClientAssetValuationGroupByPayload<T extends WmClientAssetValuationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmClientAssetValuationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmClientAssetValuationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmClientAssetValuationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmClientAssetValuationGroupByOutputType[P]>;
}>>;
export type WmClientAssetValuationWhereInput = {
    AND?: Prisma.WmClientAssetValuationWhereInput | Prisma.WmClientAssetValuationWhereInput[];
    OR?: Prisma.WmClientAssetValuationWhereInput[];
    NOT?: Prisma.WmClientAssetValuationWhereInput | Prisma.WmClientAssetValuationWhereInput[];
    id?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    wmClientAssetId?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    valuationDate?: Prisma.DateTimeFilter<"WmClientAssetValuation"> | Date | string;
    valueKobo?: Prisma.BigIntFilter<"WmClientAssetValuation"> | bigint | number;
    recordedByUserId?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmClientAssetValuation"> | Date | string;
    wmClientAsset?: Prisma.XOR<Prisma.WmClientAssetScalarRelationFilter, Prisma.WmClientAssetWhereInput>;
};
export type WmClientAssetValuationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    valueKobo?: Prisma.SortOrder;
    recordedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wmClientAsset?: Prisma.WmClientAssetOrderByWithRelationInput;
};
export type WmClientAssetValuationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WmClientAssetValuationWhereInput | Prisma.WmClientAssetValuationWhereInput[];
    OR?: Prisma.WmClientAssetValuationWhereInput[];
    NOT?: Prisma.WmClientAssetValuationWhereInput | Prisma.WmClientAssetValuationWhereInput[];
    wmClientAssetId?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    valuationDate?: Prisma.DateTimeFilter<"WmClientAssetValuation"> | Date | string;
    valueKobo?: Prisma.BigIntFilter<"WmClientAssetValuation"> | bigint | number;
    recordedByUserId?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmClientAssetValuation"> | Date | string;
    wmClientAsset?: Prisma.XOR<Prisma.WmClientAssetScalarRelationFilter, Prisma.WmClientAssetWhereInput>;
}, "id">;
export type WmClientAssetValuationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    valueKobo?: Prisma.SortOrder;
    recordedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmClientAssetValuationCountOrderByAggregateInput;
    _avg?: Prisma.WmClientAssetValuationAvgOrderByAggregateInput;
    _max?: Prisma.WmClientAssetValuationMaxOrderByAggregateInput;
    _min?: Prisma.WmClientAssetValuationMinOrderByAggregateInput;
    _sum?: Prisma.WmClientAssetValuationSumOrderByAggregateInput;
};
export type WmClientAssetValuationScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmClientAssetValuationScalarWhereWithAggregatesInput | Prisma.WmClientAssetValuationScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmClientAssetValuationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmClientAssetValuationScalarWhereWithAggregatesInput | Prisma.WmClientAssetValuationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmClientAssetValuation"> | string;
    wmClientAssetId?: Prisma.UuidWithAggregatesFilter<"WmClientAssetValuation"> | string;
    valuationDate?: Prisma.DateTimeWithAggregatesFilter<"WmClientAssetValuation"> | Date | string;
    valueKobo?: Prisma.BigIntWithAggregatesFilter<"WmClientAssetValuation"> | bigint | number;
    recordedByUserId?: Prisma.UuidWithAggregatesFilter<"WmClientAssetValuation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmClientAssetValuation"> | Date | string;
};
export type WmClientAssetValuationCreateInput = {
    id?: string;
    valuationDate: Date | string;
    valueKobo: bigint | number;
    recordedByUserId: string;
    createdAt?: Date | string;
    wmClientAsset: Prisma.WmClientAssetCreateNestedOneWithoutValuationHistoryInput;
};
export type WmClientAssetValuationUncheckedCreateInput = {
    id?: string;
    wmClientAssetId: string;
    valuationDate: Date | string;
    valueKobo: bigint | number;
    recordedByUserId: string;
    createdAt?: Date | string;
};
export type WmClientAssetValuationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recordedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientAsset?: Prisma.WmClientAssetUpdateOneRequiredWithoutValuationHistoryNestedInput;
};
export type WmClientAssetValuationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientAssetId?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recordedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientAssetValuationCreateManyInput = {
    id?: string;
    wmClientAssetId: string;
    valuationDate: Date | string;
    valueKobo: bigint | number;
    recordedByUserId: string;
    createdAt?: Date | string;
};
export type WmClientAssetValuationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recordedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientAssetValuationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientAssetId?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recordedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientAssetValuationListRelationFilter = {
    every?: Prisma.WmClientAssetValuationWhereInput;
    some?: Prisma.WmClientAssetValuationWhereInput;
    none?: Prisma.WmClientAssetValuationWhereInput;
};
export type WmClientAssetValuationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmClientAssetValuationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    valueKobo?: Prisma.SortOrder;
    recordedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmClientAssetValuationAvgOrderByAggregateInput = {
    valueKobo?: Prisma.SortOrder;
};
export type WmClientAssetValuationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    valueKobo?: Prisma.SortOrder;
    recordedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmClientAssetValuationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientAssetId?: Prisma.SortOrder;
    valuationDate?: Prisma.SortOrder;
    valueKobo?: Prisma.SortOrder;
    recordedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmClientAssetValuationSumOrderByAggregateInput = {
    valueKobo?: Prisma.SortOrder;
};
export type WmClientAssetValuationCreateNestedManyWithoutWmClientAssetInput = {
    create?: Prisma.XOR<Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput[] | Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput | Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput[];
    createMany?: Prisma.WmClientAssetValuationCreateManyWmClientAssetInputEnvelope;
    connect?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
};
export type WmClientAssetValuationUncheckedCreateNestedManyWithoutWmClientAssetInput = {
    create?: Prisma.XOR<Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput[] | Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput | Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput[];
    createMany?: Prisma.WmClientAssetValuationCreateManyWmClientAssetInputEnvelope;
    connect?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
};
export type WmClientAssetValuationUpdateManyWithoutWmClientAssetNestedInput = {
    create?: Prisma.XOR<Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput[] | Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput | Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput[];
    upsert?: Prisma.WmClientAssetValuationUpsertWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmClientAssetValuationUpsertWithWhereUniqueWithoutWmClientAssetInput[];
    createMany?: Prisma.WmClientAssetValuationCreateManyWmClientAssetInputEnvelope;
    set?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    disconnect?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    delete?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    connect?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    update?: Prisma.WmClientAssetValuationUpdateWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmClientAssetValuationUpdateWithWhereUniqueWithoutWmClientAssetInput[];
    updateMany?: Prisma.WmClientAssetValuationUpdateManyWithWhereWithoutWmClientAssetInput | Prisma.WmClientAssetValuationUpdateManyWithWhereWithoutWmClientAssetInput[];
    deleteMany?: Prisma.WmClientAssetValuationScalarWhereInput | Prisma.WmClientAssetValuationScalarWhereInput[];
};
export type WmClientAssetValuationUncheckedUpdateManyWithoutWmClientAssetNestedInput = {
    create?: Prisma.XOR<Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput> | Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput[] | Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput[];
    connectOrCreate?: Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput | Prisma.WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput[];
    upsert?: Prisma.WmClientAssetValuationUpsertWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmClientAssetValuationUpsertWithWhereUniqueWithoutWmClientAssetInput[];
    createMany?: Prisma.WmClientAssetValuationCreateManyWmClientAssetInputEnvelope;
    set?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    disconnect?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    delete?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    connect?: Prisma.WmClientAssetValuationWhereUniqueInput | Prisma.WmClientAssetValuationWhereUniqueInput[];
    update?: Prisma.WmClientAssetValuationUpdateWithWhereUniqueWithoutWmClientAssetInput | Prisma.WmClientAssetValuationUpdateWithWhereUniqueWithoutWmClientAssetInput[];
    updateMany?: Prisma.WmClientAssetValuationUpdateManyWithWhereWithoutWmClientAssetInput | Prisma.WmClientAssetValuationUpdateManyWithWhereWithoutWmClientAssetInput[];
    deleteMany?: Prisma.WmClientAssetValuationScalarWhereInput | Prisma.WmClientAssetValuationScalarWhereInput[];
};
export type WmClientAssetValuationCreateWithoutWmClientAssetInput = {
    id?: string;
    valuationDate: Date | string;
    valueKobo: bigint | number;
    recordedByUserId: string;
    createdAt?: Date | string;
};
export type WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput = {
    id?: string;
    valuationDate: Date | string;
    valueKobo: bigint | number;
    recordedByUserId: string;
    createdAt?: Date | string;
};
export type WmClientAssetValuationCreateOrConnectWithoutWmClientAssetInput = {
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput>;
};
export type WmClientAssetValuationCreateManyWmClientAssetInputEnvelope = {
    data: Prisma.WmClientAssetValuationCreateManyWmClientAssetInput | Prisma.WmClientAssetValuationCreateManyWmClientAssetInput[];
    skipDuplicates?: boolean;
};
export type WmClientAssetValuationUpsertWithWhereUniqueWithoutWmClientAssetInput = {
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmClientAssetValuationUpdateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedUpdateWithoutWmClientAssetInput>;
    create: Prisma.XOR<Prisma.WmClientAssetValuationCreateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedCreateWithoutWmClientAssetInput>;
};
export type WmClientAssetValuationUpdateWithWhereUniqueWithoutWmClientAssetInput = {
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmClientAssetValuationUpdateWithoutWmClientAssetInput, Prisma.WmClientAssetValuationUncheckedUpdateWithoutWmClientAssetInput>;
};
export type WmClientAssetValuationUpdateManyWithWhereWithoutWmClientAssetInput = {
    where: Prisma.WmClientAssetValuationScalarWhereInput;
    data: Prisma.XOR<Prisma.WmClientAssetValuationUpdateManyMutationInput, Prisma.WmClientAssetValuationUncheckedUpdateManyWithoutWmClientAssetInput>;
};
export type WmClientAssetValuationScalarWhereInput = {
    AND?: Prisma.WmClientAssetValuationScalarWhereInput | Prisma.WmClientAssetValuationScalarWhereInput[];
    OR?: Prisma.WmClientAssetValuationScalarWhereInput[];
    NOT?: Prisma.WmClientAssetValuationScalarWhereInput | Prisma.WmClientAssetValuationScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    wmClientAssetId?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    valuationDate?: Prisma.DateTimeFilter<"WmClientAssetValuation"> | Date | string;
    valueKobo?: Prisma.BigIntFilter<"WmClientAssetValuation"> | bigint | number;
    recordedByUserId?: Prisma.UuidFilter<"WmClientAssetValuation"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmClientAssetValuation"> | Date | string;
};
export type WmClientAssetValuationCreateManyWmClientAssetInput = {
    id?: string;
    valuationDate: Date | string;
    valueKobo: bigint | number;
    recordedByUserId: string;
    createdAt?: Date | string;
};
export type WmClientAssetValuationUpdateWithoutWmClientAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recordedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientAssetValuationUncheckedUpdateWithoutWmClientAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recordedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientAssetValuationUncheckedUpdateManyWithoutWmClientAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valuationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    recordedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmClientAssetValuationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientAssetId?: boolean;
    valuationDate?: boolean;
    valueKobo?: boolean;
    recordedByUserId?: boolean;
    createdAt?: boolean;
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmClientAssetValuation"]>;
export type WmClientAssetValuationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientAssetId?: boolean;
    valuationDate?: boolean;
    valueKobo?: boolean;
    recordedByUserId?: boolean;
    createdAt?: boolean;
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmClientAssetValuation"]>;
export type WmClientAssetValuationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientAssetId?: boolean;
    valuationDate?: boolean;
    valueKobo?: boolean;
    recordedByUserId?: boolean;
    createdAt?: boolean;
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmClientAssetValuation"]>;
export type WmClientAssetValuationSelectScalar = {
    id?: boolean;
    wmClientAssetId?: boolean;
    valuationDate?: boolean;
    valueKobo?: boolean;
    recordedByUserId?: boolean;
    createdAt?: boolean;
};
export type WmClientAssetValuationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientAssetId" | "valuationDate" | "valueKobo" | "recordedByUserId" | "createdAt", ExtArgs["result"]["wmClientAssetValuation"]>;
export type WmClientAssetValuationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
};
export type WmClientAssetValuationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
};
export type WmClientAssetValuationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientAsset?: boolean | Prisma.WmClientAssetDefaultArgs<ExtArgs>;
};
export type $WmClientAssetValuationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmClientAssetValuation";
    objects: {
        wmClientAsset: Prisma.$WmClientAssetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientAssetId: string;
        valuationDate: Date;
        valueKobo: bigint;
        recordedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["wmClientAssetValuation"]>;
    composites: {};
};
export type WmClientAssetValuationGetPayload<S extends boolean | null | undefined | WmClientAssetValuationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload, S>;
export type WmClientAssetValuationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmClientAssetValuationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmClientAssetValuationCountAggregateInputType | true;
};
export interface WmClientAssetValuationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmClientAssetValuation'];
        meta: {
            name: 'WmClientAssetValuation';
        };
    };
    findUnique<T extends WmClientAssetValuationFindUniqueArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmClientAssetValuationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmClientAssetValuationFindFirstArgs>(args?: Prisma.SelectSubset<T, WmClientAssetValuationFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmClientAssetValuationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmClientAssetValuationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmClientAssetValuationFindManyArgs>(args?: Prisma.SelectSubset<T, WmClientAssetValuationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmClientAssetValuationCreateArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationCreateArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmClientAssetValuationCreateManyArgs>(args?: Prisma.SelectSubset<T, WmClientAssetValuationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmClientAssetValuationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmClientAssetValuationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmClientAssetValuationDeleteArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationDeleteArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmClientAssetValuationUpdateArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationUpdateArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmClientAssetValuationDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmClientAssetValuationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmClientAssetValuationUpdateManyArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmClientAssetValuationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmClientAssetValuationUpsertArgs>(args: Prisma.SelectSubset<T, WmClientAssetValuationUpsertArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetValuationClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetValuationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmClientAssetValuationCountArgs>(args?: Prisma.Subset<T, WmClientAssetValuationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmClientAssetValuationCountAggregateOutputType> : number>;
    aggregate<T extends WmClientAssetValuationAggregateArgs>(args: Prisma.Subset<T, WmClientAssetValuationAggregateArgs>): Prisma.PrismaPromise<GetWmClientAssetValuationAggregateType<T>>;
    groupBy<T extends WmClientAssetValuationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmClientAssetValuationGroupByArgs['orderBy'];
    } : {
        orderBy?: WmClientAssetValuationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmClientAssetValuationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmClientAssetValuationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmClientAssetValuationFieldRefs;
}
export interface Prisma__WmClientAssetValuationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientAsset<T extends Prisma.WmClientAssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientAssetDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientAssetClient<runtime.Types.Result.GetResult<Prisma.$WmClientAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmClientAssetValuationFieldRefs {
    readonly id: Prisma.FieldRef<"WmClientAssetValuation", 'String'>;
    readonly wmClientAssetId: Prisma.FieldRef<"WmClientAssetValuation", 'String'>;
    readonly valuationDate: Prisma.FieldRef<"WmClientAssetValuation", 'DateTime'>;
    readonly valueKobo: Prisma.FieldRef<"WmClientAssetValuation", 'BigInt'>;
    readonly recordedByUserId: Prisma.FieldRef<"WmClientAssetValuation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WmClientAssetValuation", 'DateTime'>;
}
export type WmClientAssetValuationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
};
export type WmClientAssetValuationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
};
export type WmClientAssetValuationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    where?: Prisma.WmClientAssetValuationWhereInput;
    orderBy?: Prisma.WmClientAssetValuationOrderByWithRelationInput | Prisma.WmClientAssetValuationOrderByWithRelationInput[];
    cursor?: Prisma.WmClientAssetValuationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmClientAssetValuationScalarFieldEnum | Prisma.WmClientAssetValuationScalarFieldEnum[];
};
export type WmClientAssetValuationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    where?: Prisma.WmClientAssetValuationWhereInput;
    orderBy?: Prisma.WmClientAssetValuationOrderByWithRelationInput | Prisma.WmClientAssetValuationOrderByWithRelationInput[];
    cursor?: Prisma.WmClientAssetValuationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmClientAssetValuationScalarFieldEnum | Prisma.WmClientAssetValuationScalarFieldEnum[];
};
export type WmClientAssetValuationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    where?: Prisma.WmClientAssetValuationWhereInput;
    orderBy?: Prisma.WmClientAssetValuationOrderByWithRelationInput | Prisma.WmClientAssetValuationOrderByWithRelationInput[];
    cursor?: Prisma.WmClientAssetValuationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmClientAssetValuationScalarFieldEnum | Prisma.WmClientAssetValuationScalarFieldEnum[];
};
export type WmClientAssetValuationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmClientAssetValuationCreateInput, Prisma.WmClientAssetValuationUncheckedCreateInput>;
};
export type WmClientAssetValuationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmClientAssetValuationCreateManyInput | Prisma.WmClientAssetValuationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmClientAssetValuationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    data: Prisma.WmClientAssetValuationCreateManyInput | Prisma.WmClientAssetValuationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmClientAssetValuationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmClientAssetValuationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmClientAssetValuationUpdateInput, Prisma.WmClientAssetValuationUncheckedUpdateInput>;
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
};
export type WmClientAssetValuationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmClientAssetValuationUpdateManyMutationInput, Prisma.WmClientAssetValuationUncheckedUpdateManyInput>;
    where?: Prisma.WmClientAssetValuationWhereInput;
    limit?: number;
};
export type WmClientAssetValuationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmClientAssetValuationUpdateManyMutationInput, Prisma.WmClientAssetValuationUncheckedUpdateManyInput>;
    where?: Prisma.WmClientAssetValuationWhereInput;
    limit?: number;
    include?: Prisma.WmClientAssetValuationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmClientAssetValuationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmClientAssetValuationCreateInput, Prisma.WmClientAssetValuationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmClientAssetValuationUpdateInput, Prisma.WmClientAssetValuationUncheckedUpdateInput>;
};
export type WmClientAssetValuationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
    where: Prisma.WmClientAssetValuationWhereUniqueInput;
};
export type WmClientAssetValuationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmClientAssetValuationWhereInput;
    limit?: number;
};
export type WmClientAssetValuationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmClientAssetValuationSelect<ExtArgs> | null;
    omit?: Prisma.WmClientAssetValuationOmit<ExtArgs> | null;
    include?: Prisma.WmClientAssetValuationInclude<ExtArgs> | null;
};
