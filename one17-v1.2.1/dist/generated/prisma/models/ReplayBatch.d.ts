import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReplayBatchModel = runtime.Types.Result.DefaultSelection<Prisma.$ReplayBatchPayload>;
export type AggregateReplayBatch = {
    _count: ReplayBatchCountAggregateOutputType | null;
    _avg: ReplayBatchAvgAggregateOutputType | null;
    _sum: ReplayBatchSumAggregateOutputType | null;
    _min: ReplayBatchMinAggregateOutputType | null;
    _max: ReplayBatchMaxAggregateOutputType | null;
};
export type ReplayBatchAvgAggregateOutputType = {
    totalRows: number | null;
};
export type ReplayBatchSumAggregateOutputType = {
    totalRows: number | null;
};
export type ReplayBatchMinAggregateOutputType = {
    id: string | null;
    sourceCode: string | null;
    fileName: string | null;
    totalRows: number | null;
    ingestedByUserId: string | null;
    createdAt: Date | null;
};
export type ReplayBatchMaxAggregateOutputType = {
    id: string | null;
    sourceCode: string | null;
    fileName: string | null;
    totalRows: number | null;
    ingestedByUserId: string | null;
    createdAt: Date | null;
};
export type ReplayBatchCountAggregateOutputType = {
    id: number;
    sourceCode: number;
    fileName: number;
    totalRows: number;
    ingestedByUserId: number;
    createdAt: number;
    _all: number;
};
export type ReplayBatchAvgAggregateInputType = {
    totalRows?: true;
};
export type ReplayBatchSumAggregateInputType = {
    totalRows?: true;
};
export type ReplayBatchMinAggregateInputType = {
    id?: true;
    sourceCode?: true;
    fileName?: true;
    totalRows?: true;
    ingestedByUserId?: true;
    createdAt?: true;
};
export type ReplayBatchMaxAggregateInputType = {
    id?: true;
    sourceCode?: true;
    fileName?: true;
    totalRows?: true;
    ingestedByUserId?: true;
    createdAt?: true;
};
export type ReplayBatchCountAggregateInputType = {
    id?: true;
    sourceCode?: true;
    fileName?: true;
    totalRows?: true;
    ingestedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type ReplayBatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplayBatchWhereInput;
    orderBy?: Prisma.ReplayBatchOrderByWithRelationInput | Prisma.ReplayBatchOrderByWithRelationInput[];
    cursor?: Prisma.ReplayBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReplayBatchCountAggregateInputType;
    _avg?: ReplayBatchAvgAggregateInputType;
    _sum?: ReplayBatchSumAggregateInputType;
    _min?: ReplayBatchMinAggregateInputType;
    _max?: ReplayBatchMaxAggregateInputType;
};
export type GetReplayBatchAggregateType<T extends ReplayBatchAggregateArgs> = {
    [P in keyof T & keyof AggregateReplayBatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReplayBatch[P]> : Prisma.GetScalarType<T[P], AggregateReplayBatch[P]>;
};
export type ReplayBatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplayBatchWhereInput;
    orderBy?: Prisma.ReplayBatchOrderByWithAggregationInput | Prisma.ReplayBatchOrderByWithAggregationInput[];
    by: Prisma.ReplayBatchScalarFieldEnum[] | Prisma.ReplayBatchScalarFieldEnum;
    having?: Prisma.ReplayBatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReplayBatchCountAggregateInputType | true;
    _avg?: ReplayBatchAvgAggregateInputType;
    _sum?: ReplayBatchSumAggregateInputType;
    _min?: ReplayBatchMinAggregateInputType;
    _max?: ReplayBatchMaxAggregateInputType;
};
export type ReplayBatchGroupByOutputType = {
    id: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    ingestedByUserId: string;
    createdAt: Date;
    _count: ReplayBatchCountAggregateOutputType | null;
    _avg: ReplayBatchAvgAggregateOutputType | null;
    _sum: ReplayBatchSumAggregateOutputType | null;
    _min: ReplayBatchMinAggregateOutputType | null;
    _max: ReplayBatchMaxAggregateOutputType | null;
};
export type GetReplayBatchGroupByPayload<T extends ReplayBatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReplayBatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReplayBatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReplayBatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReplayBatchGroupByOutputType[P]>;
}>>;
export type ReplayBatchWhereInput = {
    AND?: Prisma.ReplayBatchWhereInput | Prisma.ReplayBatchWhereInput[];
    OR?: Prisma.ReplayBatchWhereInput[];
    NOT?: Prisma.ReplayBatchWhereInput | Prisma.ReplayBatchWhereInput[];
    id?: Prisma.UuidFilter<"ReplayBatch"> | string;
    sourceCode?: Prisma.StringFilter<"ReplayBatch"> | string;
    fileName?: Prisma.StringFilter<"ReplayBatch"> | string;
    totalRows?: Prisma.IntFilter<"ReplayBatch"> | number;
    ingestedByUserId?: Prisma.UuidFilter<"ReplayBatch"> | string;
    createdAt?: Prisma.DateTimeFilter<"ReplayBatch"> | Date | string;
    ingestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    rows?: Prisma.ReplaySourceRowListRelationFilter;
};
export type ReplayBatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    ingestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ingestedBy?: Prisma.AppUserOrderByWithRelationInput;
    rows?: Prisma.ReplaySourceRowOrderByRelationAggregateInput;
};
export type ReplayBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReplayBatchWhereInput | Prisma.ReplayBatchWhereInput[];
    OR?: Prisma.ReplayBatchWhereInput[];
    NOT?: Prisma.ReplayBatchWhereInput | Prisma.ReplayBatchWhereInput[];
    sourceCode?: Prisma.StringFilter<"ReplayBatch"> | string;
    fileName?: Prisma.StringFilter<"ReplayBatch"> | string;
    totalRows?: Prisma.IntFilter<"ReplayBatch"> | number;
    ingestedByUserId?: Prisma.UuidFilter<"ReplayBatch"> | string;
    createdAt?: Prisma.DateTimeFilter<"ReplayBatch"> | Date | string;
    ingestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    rows?: Prisma.ReplaySourceRowListRelationFilter;
}, "id">;
export type ReplayBatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    ingestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReplayBatchCountOrderByAggregateInput;
    _avg?: Prisma.ReplayBatchAvgOrderByAggregateInput;
    _max?: Prisma.ReplayBatchMaxOrderByAggregateInput;
    _min?: Prisma.ReplayBatchMinOrderByAggregateInput;
    _sum?: Prisma.ReplayBatchSumOrderByAggregateInput;
};
export type ReplayBatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReplayBatchScalarWhereWithAggregatesInput | Prisma.ReplayBatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReplayBatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReplayBatchScalarWhereWithAggregatesInput | Prisma.ReplayBatchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ReplayBatch"> | string;
    sourceCode?: Prisma.StringWithAggregatesFilter<"ReplayBatch"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"ReplayBatch"> | string;
    totalRows?: Prisma.IntWithAggregatesFilter<"ReplayBatch"> | number;
    ingestedByUserId?: Prisma.UuidWithAggregatesFilter<"ReplayBatch"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ReplayBatch"> | Date | string;
};
export type ReplayBatchCreateInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    createdAt?: Date | string;
    ingestedBy: Prisma.AppUserCreateNestedOneWithoutReplayBatchesIngestedInput;
    rows?: Prisma.ReplaySourceRowCreateNestedManyWithoutBatchInput;
};
export type ReplayBatchUncheckedCreateInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    ingestedByUserId: string;
    createdAt?: Date | string;
    rows?: Prisma.ReplaySourceRowUncheckedCreateNestedManyWithoutBatchInput;
};
export type ReplayBatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingestedBy?: Prisma.AppUserUpdateOneRequiredWithoutReplayBatchesIngestedNestedInput;
    rows?: Prisma.ReplaySourceRowUpdateManyWithoutBatchNestedInput;
};
export type ReplayBatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    ingestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rows?: Prisma.ReplaySourceRowUncheckedUpdateManyWithoutBatchNestedInput;
};
export type ReplayBatchCreateManyInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    ingestedByUserId: string;
    createdAt?: Date | string;
};
export type ReplayBatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplayBatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    ingestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplayBatchListRelationFilter = {
    every?: Prisma.ReplayBatchWhereInput;
    some?: Prisma.ReplayBatchWhereInput;
    none?: Prisma.ReplayBatchWhereInput;
};
export type ReplayBatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReplayBatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    ingestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReplayBatchAvgOrderByAggregateInput = {
    totalRows?: Prisma.SortOrder;
};
export type ReplayBatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    ingestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReplayBatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    ingestedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReplayBatchSumOrderByAggregateInput = {
    totalRows?: Prisma.SortOrder;
};
export type ReplayBatchScalarRelationFilter = {
    is?: Prisma.ReplayBatchWhereInput;
    isNot?: Prisma.ReplayBatchWhereInput;
};
export type ReplayBatchCreateNestedManyWithoutIngestedByInput = {
    create?: Prisma.XOR<Prisma.ReplayBatchCreateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput> | Prisma.ReplayBatchCreateWithoutIngestedByInput[] | Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput[];
    connectOrCreate?: Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput | Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput[];
    createMany?: Prisma.ReplayBatchCreateManyIngestedByInputEnvelope;
    connect?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
};
export type ReplayBatchUncheckedCreateNestedManyWithoutIngestedByInput = {
    create?: Prisma.XOR<Prisma.ReplayBatchCreateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput> | Prisma.ReplayBatchCreateWithoutIngestedByInput[] | Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput[];
    connectOrCreate?: Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput | Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput[];
    createMany?: Prisma.ReplayBatchCreateManyIngestedByInputEnvelope;
    connect?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
};
export type ReplayBatchUpdateManyWithoutIngestedByNestedInput = {
    create?: Prisma.XOR<Prisma.ReplayBatchCreateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput> | Prisma.ReplayBatchCreateWithoutIngestedByInput[] | Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput[];
    connectOrCreate?: Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput | Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput[];
    upsert?: Prisma.ReplayBatchUpsertWithWhereUniqueWithoutIngestedByInput | Prisma.ReplayBatchUpsertWithWhereUniqueWithoutIngestedByInput[];
    createMany?: Prisma.ReplayBatchCreateManyIngestedByInputEnvelope;
    set?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    disconnect?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    delete?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    connect?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    update?: Prisma.ReplayBatchUpdateWithWhereUniqueWithoutIngestedByInput | Prisma.ReplayBatchUpdateWithWhereUniqueWithoutIngestedByInput[];
    updateMany?: Prisma.ReplayBatchUpdateManyWithWhereWithoutIngestedByInput | Prisma.ReplayBatchUpdateManyWithWhereWithoutIngestedByInput[];
    deleteMany?: Prisma.ReplayBatchScalarWhereInput | Prisma.ReplayBatchScalarWhereInput[];
};
export type ReplayBatchUncheckedUpdateManyWithoutIngestedByNestedInput = {
    create?: Prisma.XOR<Prisma.ReplayBatchCreateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput> | Prisma.ReplayBatchCreateWithoutIngestedByInput[] | Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput[];
    connectOrCreate?: Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput | Prisma.ReplayBatchCreateOrConnectWithoutIngestedByInput[];
    upsert?: Prisma.ReplayBatchUpsertWithWhereUniqueWithoutIngestedByInput | Prisma.ReplayBatchUpsertWithWhereUniqueWithoutIngestedByInput[];
    createMany?: Prisma.ReplayBatchCreateManyIngestedByInputEnvelope;
    set?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    disconnect?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    delete?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    connect?: Prisma.ReplayBatchWhereUniqueInput | Prisma.ReplayBatchWhereUniqueInput[];
    update?: Prisma.ReplayBatchUpdateWithWhereUniqueWithoutIngestedByInput | Prisma.ReplayBatchUpdateWithWhereUniqueWithoutIngestedByInput[];
    updateMany?: Prisma.ReplayBatchUpdateManyWithWhereWithoutIngestedByInput | Prisma.ReplayBatchUpdateManyWithWhereWithoutIngestedByInput[];
    deleteMany?: Prisma.ReplayBatchScalarWhereInput | Prisma.ReplayBatchScalarWhereInput[];
};
export type ReplayBatchCreateNestedOneWithoutRowsInput = {
    create?: Prisma.XOR<Prisma.ReplayBatchCreateWithoutRowsInput, Prisma.ReplayBatchUncheckedCreateWithoutRowsInput>;
    connectOrCreate?: Prisma.ReplayBatchCreateOrConnectWithoutRowsInput;
    connect?: Prisma.ReplayBatchWhereUniqueInput;
};
export type ReplayBatchUpdateOneRequiredWithoutRowsNestedInput = {
    create?: Prisma.XOR<Prisma.ReplayBatchCreateWithoutRowsInput, Prisma.ReplayBatchUncheckedCreateWithoutRowsInput>;
    connectOrCreate?: Prisma.ReplayBatchCreateOrConnectWithoutRowsInput;
    upsert?: Prisma.ReplayBatchUpsertWithoutRowsInput;
    connect?: Prisma.ReplayBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReplayBatchUpdateToOneWithWhereWithoutRowsInput, Prisma.ReplayBatchUpdateWithoutRowsInput>, Prisma.ReplayBatchUncheckedUpdateWithoutRowsInput>;
};
export type ReplayBatchCreateWithoutIngestedByInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    createdAt?: Date | string;
    rows?: Prisma.ReplaySourceRowCreateNestedManyWithoutBatchInput;
};
export type ReplayBatchUncheckedCreateWithoutIngestedByInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    createdAt?: Date | string;
    rows?: Prisma.ReplaySourceRowUncheckedCreateNestedManyWithoutBatchInput;
};
export type ReplayBatchCreateOrConnectWithoutIngestedByInput = {
    where: Prisma.ReplayBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplayBatchCreateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput>;
};
export type ReplayBatchCreateManyIngestedByInputEnvelope = {
    data: Prisma.ReplayBatchCreateManyIngestedByInput | Prisma.ReplayBatchCreateManyIngestedByInput[];
    skipDuplicates?: boolean;
};
export type ReplayBatchUpsertWithWhereUniqueWithoutIngestedByInput = {
    where: Prisma.ReplayBatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReplayBatchUpdateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedUpdateWithoutIngestedByInput>;
    create: Prisma.XOR<Prisma.ReplayBatchCreateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedCreateWithoutIngestedByInput>;
};
export type ReplayBatchUpdateWithWhereUniqueWithoutIngestedByInput = {
    where: Prisma.ReplayBatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReplayBatchUpdateWithoutIngestedByInput, Prisma.ReplayBatchUncheckedUpdateWithoutIngestedByInput>;
};
export type ReplayBatchUpdateManyWithWhereWithoutIngestedByInput = {
    where: Prisma.ReplayBatchScalarWhereInput;
    data: Prisma.XOR<Prisma.ReplayBatchUpdateManyMutationInput, Prisma.ReplayBatchUncheckedUpdateManyWithoutIngestedByInput>;
};
export type ReplayBatchScalarWhereInput = {
    AND?: Prisma.ReplayBatchScalarWhereInput | Prisma.ReplayBatchScalarWhereInput[];
    OR?: Prisma.ReplayBatchScalarWhereInput[];
    NOT?: Prisma.ReplayBatchScalarWhereInput | Prisma.ReplayBatchScalarWhereInput[];
    id?: Prisma.UuidFilter<"ReplayBatch"> | string;
    sourceCode?: Prisma.StringFilter<"ReplayBatch"> | string;
    fileName?: Prisma.StringFilter<"ReplayBatch"> | string;
    totalRows?: Prisma.IntFilter<"ReplayBatch"> | number;
    ingestedByUserId?: Prisma.UuidFilter<"ReplayBatch"> | string;
    createdAt?: Prisma.DateTimeFilter<"ReplayBatch"> | Date | string;
};
export type ReplayBatchCreateWithoutRowsInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    createdAt?: Date | string;
    ingestedBy: Prisma.AppUserCreateNestedOneWithoutReplayBatchesIngestedInput;
};
export type ReplayBatchUncheckedCreateWithoutRowsInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    ingestedByUserId: string;
    createdAt?: Date | string;
};
export type ReplayBatchCreateOrConnectWithoutRowsInput = {
    where: Prisma.ReplayBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplayBatchCreateWithoutRowsInput, Prisma.ReplayBatchUncheckedCreateWithoutRowsInput>;
};
export type ReplayBatchUpsertWithoutRowsInput = {
    update: Prisma.XOR<Prisma.ReplayBatchUpdateWithoutRowsInput, Prisma.ReplayBatchUncheckedUpdateWithoutRowsInput>;
    create: Prisma.XOR<Prisma.ReplayBatchCreateWithoutRowsInput, Prisma.ReplayBatchUncheckedCreateWithoutRowsInput>;
    where?: Prisma.ReplayBatchWhereInput;
};
export type ReplayBatchUpdateToOneWithWhereWithoutRowsInput = {
    where?: Prisma.ReplayBatchWhereInput;
    data: Prisma.XOR<Prisma.ReplayBatchUpdateWithoutRowsInput, Prisma.ReplayBatchUncheckedUpdateWithoutRowsInput>;
};
export type ReplayBatchUpdateWithoutRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingestedBy?: Prisma.AppUserUpdateOneRequiredWithoutReplayBatchesIngestedNestedInput;
};
export type ReplayBatchUncheckedUpdateWithoutRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    ingestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplayBatchCreateManyIngestedByInput = {
    id?: string;
    sourceCode: string;
    fileName: string;
    totalRows: number;
    createdAt?: Date | string;
};
export type ReplayBatchUpdateWithoutIngestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rows?: Prisma.ReplaySourceRowUpdateManyWithoutBatchNestedInput;
};
export type ReplayBatchUncheckedUpdateWithoutIngestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rows?: Prisma.ReplaySourceRowUncheckedUpdateManyWithoutBatchNestedInput;
};
export type ReplayBatchUncheckedUpdateManyWithoutIngestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplayBatchCountOutputType = {
    rows: number;
};
export type ReplayBatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rows?: boolean | ReplayBatchCountOutputTypeCountRowsArgs;
};
export type ReplayBatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchCountOutputTypeSelect<ExtArgs> | null;
};
export type ReplayBatchCountOutputTypeCountRowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplaySourceRowWhereInput;
};
export type ReplayBatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    fileName?: boolean;
    totalRows?: boolean;
    ingestedByUserId?: boolean;
    createdAt?: boolean;
    ingestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    rows?: boolean | Prisma.ReplayBatch$rowsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReplayBatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replayBatch"]>;
export type ReplayBatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    fileName?: boolean;
    totalRows?: boolean;
    ingestedByUserId?: boolean;
    createdAt?: boolean;
    ingestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replayBatch"]>;
export type ReplayBatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    fileName?: boolean;
    totalRows?: boolean;
    ingestedByUserId?: boolean;
    createdAt?: boolean;
    ingestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replayBatch"]>;
export type ReplayBatchSelectScalar = {
    id?: boolean;
    sourceCode?: boolean;
    fileName?: boolean;
    totalRows?: boolean;
    ingestedByUserId?: boolean;
    createdAt?: boolean;
};
export type ReplayBatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sourceCode" | "fileName" | "totalRows" | "ingestedByUserId" | "createdAt", ExtArgs["result"]["replayBatch"]>;
export type ReplayBatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ingestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    rows?: boolean | Prisma.ReplayBatch$rowsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReplayBatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReplayBatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ingestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type ReplayBatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ingestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $ReplayBatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReplayBatch";
    objects: {
        ingestedBy: Prisma.$AppUserPayload<ExtArgs>;
        rows: Prisma.$ReplaySourceRowPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sourceCode: string;
        fileName: string;
        totalRows: number;
        ingestedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["replayBatch"]>;
    composites: {};
};
export type ReplayBatchGetPayload<S extends boolean | null | undefined | ReplayBatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload, S>;
export type ReplayBatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReplayBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReplayBatchCountAggregateInputType | true;
};
export interface ReplayBatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReplayBatch'];
        meta: {
            name: 'ReplayBatch';
        };
    };
    findUnique<T extends ReplayBatchFindUniqueArgs>(args: Prisma.SelectSubset<T, ReplayBatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReplayBatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReplayBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReplayBatchFindFirstArgs>(args?: Prisma.SelectSubset<T, ReplayBatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReplayBatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReplayBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReplayBatchFindManyArgs>(args?: Prisma.SelectSubset<T, ReplayBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReplayBatchCreateArgs>(args: Prisma.SelectSubset<T, ReplayBatchCreateArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReplayBatchCreateManyArgs>(args?: Prisma.SelectSubset<T, ReplayBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReplayBatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReplayBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReplayBatchDeleteArgs>(args: Prisma.SelectSubset<T, ReplayBatchDeleteArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReplayBatchUpdateArgs>(args: Prisma.SelectSubset<T, ReplayBatchUpdateArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReplayBatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReplayBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReplayBatchUpdateManyArgs>(args: Prisma.SelectSubset<T, ReplayBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReplayBatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReplayBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReplayBatchUpsertArgs>(args: Prisma.SelectSubset<T, ReplayBatchUpsertArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReplayBatchCountArgs>(args?: Prisma.Subset<T, ReplayBatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReplayBatchCountAggregateOutputType> : number>;
    aggregate<T extends ReplayBatchAggregateArgs>(args: Prisma.Subset<T, ReplayBatchAggregateArgs>): Prisma.PrismaPromise<GetReplayBatchAggregateType<T>>;
    groupBy<T extends ReplayBatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReplayBatchGroupByArgs['orderBy'];
    } : {
        orderBy?: ReplayBatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReplayBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplayBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReplayBatchFieldRefs;
}
export interface Prisma__ReplayBatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ingestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rows<T extends Prisma.ReplayBatch$rowsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReplayBatch$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReplayBatchFieldRefs {
    readonly id: Prisma.FieldRef<"ReplayBatch", 'String'>;
    readonly sourceCode: Prisma.FieldRef<"ReplayBatch", 'String'>;
    readonly fileName: Prisma.FieldRef<"ReplayBatch", 'String'>;
    readonly totalRows: Prisma.FieldRef<"ReplayBatch", 'Int'>;
    readonly ingestedByUserId: Prisma.FieldRef<"ReplayBatch", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ReplayBatch", 'DateTime'>;
}
export type ReplayBatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    where: Prisma.ReplayBatchWhereUniqueInput;
};
export type ReplayBatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    where: Prisma.ReplayBatchWhereUniqueInput;
};
export type ReplayBatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    where?: Prisma.ReplayBatchWhereInput;
    orderBy?: Prisma.ReplayBatchOrderByWithRelationInput | Prisma.ReplayBatchOrderByWithRelationInput[];
    cursor?: Prisma.ReplayBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplayBatchScalarFieldEnum | Prisma.ReplayBatchScalarFieldEnum[];
};
export type ReplayBatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    where?: Prisma.ReplayBatchWhereInput;
    orderBy?: Prisma.ReplayBatchOrderByWithRelationInput | Prisma.ReplayBatchOrderByWithRelationInput[];
    cursor?: Prisma.ReplayBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplayBatchScalarFieldEnum | Prisma.ReplayBatchScalarFieldEnum[];
};
export type ReplayBatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    where?: Prisma.ReplayBatchWhereInput;
    orderBy?: Prisma.ReplayBatchOrderByWithRelationInput | Prisma.ReplayBatchOrderByWithRelationInput[];
    cursor?: Prisma.ReplayBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplayBatchScalarFieldEnum | Prisma.ReplayBatchScalarFieldEnum[];
};
export type ReplayBatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplayBatchCreateInput, Prisma.ReplayBatchUncheckedCreateInput>;
};
export type ReplayBatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReplayBatchCreateManyInput | Prisma.ReplayBatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReplayBatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    data: Prisma.ReplayBatchCreateManyInput | Prisma.ReplayBatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReplayBatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReplayBatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplayBatchUpdateInput, Prisma.ReplayBatchUncheckedUpdateInput>;
    where: Prisma.ReplayBatchWhereUniqueInput;
};
export type ReplayBatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReplayBatchUpdateManyMutationInput, Prisma.ReplayBatchUncheckedUpdateManyInput>;
    where?: Prisma.ReplayBatchWhereInput;
    limit?: number;
};
export type ReplayBatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplayBatchUpdateManyMutationInput, Prisma.ReplayBatchUncheckedUpdateManyInput>;
    where?: Prisma.ReplayBatchWhereInput;
    limit?: number;
    include?: Prisma.ReplayBatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReplayBatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    where: Prisma.ReplayBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplayBatchCreateInput, Prisma.ReplayBatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReplayBatchUpdateInput, Prisma.ReplayBatchUncheckedUpdateInput>;
};
export type ReplayBatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
    where: Prisma.ReplayBatchWhereUniqueInput;
};
export type ReplayBatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplayBatchWhereInput;
    limit?: number;
};
export type ReplayBatch$rowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
    where?: Prisma.ReplaySourceRowWhereInput;
    orderBy?: Prisma.ReplaySourceRowOrderByWithRelationInput | Prisma.ReplaySourceRowOrderByWithRelationInput[];
    cursor?: Prisma.ReplaySourceRowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplaySourceRowScalarFieldEnum | Prisma.ReplaySourceRowScalarFieldEnum[];
};
export type ReplayBatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplayBatchSelect<ExtArgs> | null;
    omit?: Prisma.ReplayBatchOmit<ExtArgs> | null;
    include?: Prisma.ReplayBatchInclude<ExtArgs> | null;
};
