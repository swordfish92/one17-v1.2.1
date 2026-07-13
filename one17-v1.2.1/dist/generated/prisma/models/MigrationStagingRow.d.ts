import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MigrationStagingRowModel = runtime.Types.Result.DefaultSelection<Prisma.$MigrationStagingRowPayload>;
export type AggregateMigrationStagingRow = {
    _count: MigrationStagingRowCountAggregateOutputType | null;
    _avg: MigrationStagingRowAvgAggregateOutputType | null;
    _sum: MigrationStagingRowSumAggregateOutputType | null;
    _min: MigrationStagingRowMinAggregateOutputType | null;
    _max: MigrationStagingRowMaxAggregateOutputType | null;
};
export type MigrationStagingRowAvgAggregateOutputType = {
    rowNumber: number | null;
};
export type MigrationStagingRowSumAggregateOutputType = {
    rowNumber: number | null;
};
export type MigrationStagingRowMinAggregateOutputType = {
    id: string | null;
    batchId: string | null;
    rowNumber: number | null;
    isDemoRow: boolean | null;
    status: $Enums.StagingRowStatus | null;
    promotedEntityId: string | null;
    createdAt: Date | null;
};
export type MigrationStagingRowMaxAggregateOutputType = {
    id: string | null;
    batchId: string | null;
    rowNumber: number | null;
    isDemoRow: boolean | null;
    status: $Enums.StagingRowStatus | null;
    promotedEntityId: string | null;
    createdAt: Date | null;
};
export type MigrationStagingRowCountAggregateOutputType = {
    id: number;
    batchId: number;
    rowNumber: number;
    rawData: number;
    isDemoRow: number;
    status: number;
    rejectionReasons: number;
    promotedEntityId: number;
    createdAt: number;
    _all: number;
};
export type MigrationStagingRowAvgAggregateInputType = {
    rowNumber?: true;
};
export type MigrationStagingRowSumAggregateInputType = {
    rowNumber?: true;
};
export type MigrationStagingRowMinAggregateInputType = {
    id?: true;
    batchId?: true;
    rowNumber?: true;
    isDemoRow?: true;
    status?: true;
    promotedEntityId?: true;
    createdAt?: true;
};
export type MigrationStagingRowMaxAggregateInputType = {
    id?: true;
    batchId?: true;
    rowNumber?: true;
    isDemoRow?: true;
    status?: true;
    promotedEntityId?: true;
    createdAt?: true;
};
export type MigrationStagingRowCountAggregateInputType = {
    id?: true;
    batchId?: true;
    rowNumber?: true;
    rawData?: true;
    isDemoRow?: true;
    status?: true;
    rejectionReasons?: true;
    promotedEntityId?: true;
    createdAt?: true;
    _all?: true;
};
export type MigrationStagingRowAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationStagingRowWhereInput;
    orderBy?: Prisma.MigrationStagingRowOrderByWithRelationInput | Prisma.MigrationStagingRowOrderByWithRelationInput[];
    cursor?: Prisma.MigrationStagingRowWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MigrationStagingRowCountAggregateInputType;
    _avg?: MigrationStagingRowAvgAggregateInputType;
    _sum?: MigrationStagingRowSumAggregateInputType;
    _min?: MigrationStagingRowMinAggregateInputType;
    _max?: MigrationStagingRowMaxAggregateInputType;
};
export type GetMigrationStagingRowAggregateType<T extends MigrationStagingRowAggregateArgs> = {
    [P in keyof T & keyof AggregateMigrationStagingRow]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMigrationStagingRow[P]> : Prisma.GetScalarType<T[P], AggregateMigrationStagingRow[P]>;
};
export type MigrationStagingRowGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationStagingRowWhereInput;
    orderBy?: Prisma.MigrationStagingRowOrderByWithAggregationInput | Prisma.MigrationStagingRowOrderByWithAggregationInput[];
    by: Prisma.MigrationStagingRowScalarFieldEnum[] | Prisma.MigrationStagingRowScalarFieldEnum;
    having?: Prisma.MigrationStagingRowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MigrationStagingRowCountAggregateInputType | true;
    _avg?: MigrationStagingRowAvgAggregateInputType;
    _sum?: MigrationStagingRowSumAggregateInputType;
    _min?: MigrationStagingRowMinAggregateInputType;
    _max?: MigrationStagingRowMaxAggregateInputType;
};
export type MigrationStagingRowGroupByOutputType = {
    id: string;
    batchId: string;
    rowNumber: number;
    rawData: runtime.JsonValue;
    isDemoRow: boolean;
    status: $Enums.StagingRowStatus;
    rejectionReasons: runtime.JsonValue;
    promotedEntityId: string | null;
    createdAt: Date;
    _count: MigrationStagingRowCountAggregateOutputType | null;
    _avg: MigrationStagingRowAvgAggregateOutputType | null;
    _sum: MigrationStagingRowSumAggregateOutputType | null;
    _min: MigrationStagingRowMinAggregateOutputType | null;
    _max: MigrationStagingRowMaxAggregateOutputType | null;
};
export type GetMigrationStagingRowGroupByPayload<T extends MigrationStagingRowGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MigrationStagingRowGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MigrationStagingRowGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MigrationStagingRowGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MigrationStagingRowGroupByOutputType[P]>;
}>>;
export type MigrationStagingRowWhereInput = {
    AND?: Prisma.MigrationStagingRowWhereInput | Prisma.MigrationStagingRowWhereInput[];
    OR?: Prisma.MigrationStagingRowWhereInput[];
    NOT?: Prisma.MigrationStagingRowWhereInput | Prisma.MigrationStagingRowWhereInput[];
    id?: Prisma.UuidFilter<"MigrationStagingRow"> | string;
    batchId?: Prisma.UuidFilter<"MigrationStagingRow"> | string;
    rowNumber?: Prisma.IntFilter<"MigrationStagingRow"> | number;
    rawData?: Prisma.JsonFilter<"MigrationStagingRow">;
    isDemoRow?: Prisma.BoolFilter<"MigrationStagingRow"> | boolean;
    status?: Prisma.EnumStagingRowStatusFilter<"MigrationStagingRow"> | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonFilter<"MigrationStagingRow">;
    promotedEntityId?: Prisma.StringNullableFilter<"MigrationStagingRow"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MigrationStagingRow"> | Date | string;
    batch?: Prisma.XOR<Prisma.MigrationBatchScalarRelationFilter, Prisma.MigrationBatchWhereInput>;
};
export type MigrationStagingRowOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    rawData?: Prisma.SortOrder;
    isDemoRow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReasons?: Prisma.SortOrder;
    promotedEntityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    batch?: Prisma.MigrationBatchOrderByWithRelationInput;
};
export type MigrationStagingRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    batchId_rowNumber?: Prisma.MigrationStagingRowBatchIdRowNumberCompoundUniqueInput;
    AND?: Prisma.MigrationStagingRowWhereInput | Prisma.MigrationStagingRowWhereInput[];
    OR?: Prisma.MigrationStagingRowWhereInput[];
    NOT?: Prisma.MigrationStagingRowWhereInput | Prisma.MigrationStagingRowWhereInput[];
    batchId?: Prisma.UuidFilter<"MigrationStagingRow"> | string;
    rowNumber?: Prisma.IntFilter<"MigrationStagingRow"> | number;
    rawData?: Prisma.JsonFilter<"MigrationStagingRow">;
    isDemoRow?: Prisma.BoolFilter<"MigrationStagingRow"> | boolean;
    status?: Prisma.EnumStagingRowStatusFilter<"MigrationStagingRow"> | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonFilter<"MigrationStagingRow">;
    promotedEntityId?: Prisma.StringNullableFilter<"MigrationStagingRow"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MigrationStagingRow"> | Date | string;
    batch?: Prisma.XOR<Prisma.MigrationBatchScalarRelationFilter, Prisma.MigrationBatchWhereInput>;
}, "id" | "batchId_rowNumber">;
export type MigrationStagingRowOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    rawData?: Prisma.SortOrder;
    isDemoRow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReasons?: Prisma.SortOrder;
    promotedEntityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MigrationStagingRowCountOrderByAggregateInput;
    _avg?: Prisma.MigrationStagingRowAvgOrderByAggregateInput;
    _max?: Prisma.MigrationStagingRowMaxOrderByAggregateInput;
    _min?: Prisma.MigrationStagingRowMinOrderByAggregateInput;
    _sum?: Prisma.MigrationStagingRowSumOrderByAggregateInput;
};
export type MigrationStagingRowScalarWhereWithAggregatesInput = {
    AND?: Prisma.MigrationStagingRowScalarWhereWithAggregatesInput | Prisma.MigrationStagingRowScalarWhereWithAggregatesInput[];
    OR?: Prisma.MigrationStagingRowScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MigrationStagingRowScalarWhereWithAggregatesInput | Prisma.MigrationStagingRowScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MigrationStagingRow"> | string;
    batchId?: Prisma.UuidWithAggregatesFilter<"MigrationStagingRow"> | string;
    rowNumber?: Prisma.IntWithAggregatesFilter<"MigrationStagingRow"> | number;
    rawData?: Prisma.JsonWithAggregatesFilter<"MigrationStagingRow">;
    isDemoRow?: Prisma.BoolWithAggregatesFilter<"MigrationStagingRow"> | boolean;
    status?: Prisma.EnumStagingRowStatusWithAggregatesFilter<"MigrationStagingRow"> | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonWithAggregatesFilter<"MigrationStagingRow">;
    promotedEntityId?: Prisma.StringNullableWithAggregatesFilter<"MigrationStagingRow"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MigrationStagingRow"> | Date | string;
};
export type MigrationStagingRowCreateInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: boolean;
    status?: $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: string | null;
    createdAt?: Date | string;
    batch: Prisma.MigrationBatchCreateNestedOneWithoutRowsInput;
};
export type MigrationStagingRowUncheckedCreateInput = {
    id?: string;
    batchId: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: boolean;
    status?: $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: string | null;
    createdAt?: Date | string;
};
export type MigrationStagingRowUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumStagingRowStatusFieldUpdateOperationsInput | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batch?: Prisma.MigrationBatchUpdateOneRequiredWithoutRowsNestedInput;
};
export type MigrationStagingRowUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumStagingRowStatusFieldUpdateOperationsInput | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationStagingRowCreateManyInput = {
    id?: string;
    batchId: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: boolean;
    status?: $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: string | null;
    createdAt?: Date | string;
};
export type MigrationStagingRowUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumStagingRowStatusFieldUpdateOperationsInput | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationStagingRowUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumStagingRowStatusFieldUpdateOperationsInput | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationStagingRowListRelationFilter = {
    every?: Prisma.MigrationStagingRowWhereInput;
    some?: Prisma.MigrationStagingRowWhereInput;
    none?: Prisma.MigrationStagingRowWhereInput;
};
export type MigrationStagingRowOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MigrationStagingRowBatchIdRowNumberCompoundUniqueInput = {
    batchId: string;
    rowNumber: number;
};
export type MigrationStagingRowCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    rawData?: Prisma.SortOrder;
    isDemoRow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReasons?: Prisma.SortOrder;
    promotedEntityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MigrationStagingRowAvgOrderByAggregateInput = {
    rowNumber?: Prisma.SortOrder;
};
export type MigrationStagingRowMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    isDemoRow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    promotedEntityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MigrationStagingRowMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    isDemoRow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    promotedEntityId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MigrationStagingRowSumOrderByAggregateInput = {
    rowNumber?: Prisma.SortOrder;
};
export type MigrationStagingRowCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.MigrationStagingRowCreateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput> | Prisma.MigrationStagingRowCreateWithoutBatchInput[] | Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput | Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.MigrationStagingRowCreateManyBatchInputEnvelope;
    connect?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
};
export type MigrationStagingRowUncheckedCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.MigrationStagingRowCreateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput> | Prisma.MigrationStagingRowCreateWithoutBatchInput[] | Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput | Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.MigrationStagingRowCreateManyBatchInputEnvelope;
    connect?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
};
export type MigrationStagingRowUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationStagingRowCreateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput> | Prisma.MigrationStagingRowCreateWithoutBatchInput[] | Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput | Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.MigrationStagingRowUpsertWithWhereUniqueWithoutBatchInput | Prisma.MigrationStagingRowUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.MigrationStagingRowCreateManyBatchInputEnvelope;
    set?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    disconnect?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    delete?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    connect?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    update?: Prisma.MigrationStagingRowUpdateWithWhereUniqueWithoutBatchInput | Prisma.MigrationStagingRowUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.MigrationStagingRowUpdateManyWithWhereWithoutBatchInput | Prisma.MigrationStagingRowUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.MigrationStagingRowScalarWhereInput | Prisma.MigrationStagingRowScalarWhereInput[];
};
export type MigrationStagingRowUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationStagingRowCreateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput> | Prisma.MigrationStagingRowCreateWithoutBatchInput[] | Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput | Prisma.MigrationStagingRowCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.MigrationStagingRowUpsertWithWhereUniqueWithoutBatchInput | Prisma.MigrationStagingRowUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.MigrationStagingRowCreateManyBatchInputEnvelope;
    set?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    disconnect?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    delete?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    connect?: Prisma.MigrationStagingRowWhereUniqueInput | Prisma.MigrationStagingRowWhereUniqueInput[];
    update?: Prisma.MigrationStagingRowUpdateWithWhereUniqueWithoutBatchInput | Prisma.MigrationStagingRowUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.MigrationStagingRowUpdateManyWithWhereWithoutBatchInput | Prisma.MigrationStagingRowUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.MigrationStagingRowScalarWhereInput | Prisma.MigrationStagingRowScalarWhereInput[];
};
export type EnumStagingRowStatusFieldUpdateOperationsInput = {
    set?: $Enums.StagingRowStatus;
};
export type MigrationStagingRowCreateWithoutBatchInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: boolean;
    status?: $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: string | null;
    createdAt?: Date | string;
};
export type MigrationStagingRowUncheckedCreateWithoutBatchInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: boolean;
    status?: $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: string | null;
    createdAt?: Date | string;
};
export type MigrationStagingRowCreateOrConnectWithoutBatchInput = {
    where: Prisma.MigrationStagingRowWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationStagingRowCreateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput>;
};
export type MigrationStagingRowCreateManyBatchInputEnvelope = {
    data: Prisma.MigrationStagingRowCreateManyBatchInput | Prisma.MigrationStagingRowCreateManyBatchInput[];
    skipDuplicates?: boolean;
};
export type MigrationStagingRowUpsertWithWhereUniqueWithoutBatchInput = {
    where: Prisma.MigrationStagingRowWhereUniqueInput;
    update: Prisma.XOR<Prisma.MigrationStagingRowUpdateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedUpdateWithoutBatchInput>;
    create: Prisma.XOR<Prisma.MigrationStagingRowCreateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedCreateWithoutBatchInput>;
};
export type MigrationStagingRowUpdateWithWhereUniqueWithoutBatchInput = {
    where: Prisma.MigrationStagingRowWhereUniqueInput;
    data: Prisma.XOR<Prisma.MigrationStagingRowUpdateWithoutBatchInput, Prisma.MigrationStagingRowUncheckedUpdateWithoutBatchInput>;
};
export type MigrationStagingRowUpdateManyWithWhereWithoutBatchInput = {
    where: Prisma.MigrationStagingRowScalarWhereInput;
    data: Prisma.XOR<Prisma.MigrationStagingRowUpdateManyMutationInput, Prisma.MigrationStagingRowUncheckedUpdateManyWithoutBatchInput>;
};
export type MigrationStagingRowScalarWhereInput = {
    AND?: Prisma.MigrationStagingRowScalarWhereInput | Prisma.MigrationStagingRowScalarWhereInput[];
    OR?: Prisma.MigrationStagingRowScalarWhereInput[];
    NOT?: Prisma.MigrationStagingRowScalarWhereInput | Prisma.MigrationStagingRowScalarWhereInput[];
    id?: Prisma.UuidFilter<"MigrationStagingRow"> | string;
    batchId?: Prisma.UuidFilter<"MigrationStagingRow"> | string;
    rowNumber?: Prisma.IntFilter<"MigrationStagingRow"> | number;
    rawData?: Prisma.JsonFilter<"MigrationStagingRow">;
    isDemoRow?: Prisma.BoolFilter<"MigrationStagingRow"> | boolean;
    status?: Prisma.EnumStagingRowStatusFilter<"MigrationStagingRow"> | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonFilter<"MigrationStagingRow">;
    promotedEntityId?: Prisma.StringNullableFilter<"MigrationStagingRow"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MigrationStagingRow"> | Date | string;
};
export type MigrationStagingRowCreateManyBatchInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: boolean;
    status?: $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: string | null;
    createdAt?: Date | string;
};
export type MigrationStagingRowUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumStagingRowStatusFieldUpdateOperationsInput | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationStagingRowUncheckedUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumStagingRowStatusFieldUpdateOperationsInput | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationStagingRowUncheckedUpdateManyWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isDemoRow?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumStagingRowStatusFieldUpdateOperationsInput | $Enums.StagingRowStatus;
    rejectionReasons?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    promotedEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationStagingRowSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    isDemoRow?: boolean;
    status?: boolean;
    rejectionReasons?: boolean;
    promotedEntityId?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.MigrationBatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationStagingRow"]>;
export type MigrationStagingRowSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    isDemoRow?: boolean;
    status?: boolean;
    rejectionReasons?: boolean;
    promotedEntityId?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.MigrationBatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationStagingRow"]>;
export type MigrationStagingRowSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    isDemoRow?: boolean;
    status?: boolean;
    rejectionReasons?: boolean;
    promotedEntityId?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.MigrationBatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationStagingRow"]>;
export type MigrationStagingRowSelectScalar = {
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    isDemoRow?: boolean;
    status?: boolean;
    rejectionReasons?: boolean;
    promotedEntityId?: boolean;
    createdAt?: boolean;
};
export type MigrationStagingRowOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batchId" | "rowNumber" | "rawData" | "isDemoRow" | "status" | "rejectionReasons" | "promotedEntityId" | "createdAt", ExtArgs["result"]["migrationStagingRow"]>;
export type MigrationStagingRowInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.MigrationBatchDefaultArgs<ExtArgs>;
};
export type MigrationStagingRowIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.MigrationBatchDefaultArgs<ExtArgs>;
};
export type MigrationStagingRowIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.MigrationBatchDefaultArgs<ExtArgs>;
};
export type $MigrationStagingRowPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MigrationStagingRow";
    objects: {
        batch: Prisma.$MigrationBatchPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        batchId: string;
        rowNumber: number;
        rawData: runtime.JsonValue;
        isDemoRow: boolean;
        status: $Enums.StagingRowStatus;
        rejectionReasons: runtime.JsonValue;
        promotedEntityId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["migrationStagingRow"]>;
    composites: {};
};
export type MigrationStagingRowGetPayload<S extends boolean | null | undefined | MigrationStagingRowDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload, S>;
export type MigrationStagingRowCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MigrationStagingRowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MigrationStagingRowCountAggregateInputType | true;
};
export interface MigrationStagingRowDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MigrationStagingRow'];
        meta: {
            name: 'MigrationStagingRow';
        };
    };
    findUnique<T extends MigrationStagingRowFindUniqueArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MigrationStagingRowFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MigrationStagingRowFindFirstArgs>(args?: Prisma.SelectSubset<T, MigrationStagingRowFindFirstArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MigrationStagingRowFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MigrationStagingRowFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MigrationStagingRowFindManyArgs>(args?: Prisma.SelectSubset<T, MigrationStagingRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MigrationStagingRowCreateArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowCreateArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MigrationStagingRowCreateManyArgs>(args?: Prisma.SelectSubset<T, MigrationStagingRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MigrationStagingRowCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MigrationStagingRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MigrationStagingRowDeleteArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowDeleteArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MigrationStagingRowUpdateArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowUpdateArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MigrationStagingRowDeleteManyArgs>(args?: Prisma.SelectSubset<T, MigrationStagingRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MigrationStagingRowUpdateManyArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MigrationStagingRowUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MigrationStagingRowUpsertArgs>(args: Prisma.SelectSubset<T, MigrationStagingRowUpsertArgs<ExtArgs>>): Prisma.Prisma__MigrationStagingRowClient<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MigrationStagingRowCountArgs>(args?: Prisma.Subset<T, MigrationStagingRowCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MigrationStagingRowCountAggregateOutputType> : number>;
    aggregate<T extends MigrationStagingRowAggregateArgs>(args: Prisma.Subset<T, MigrationStagingRowAggregateArgs>): Prisma.PrismaPromise<GetMigrationStagingRowAggregateType<T>>;
    groupBy<T extends MigrationStagingRowGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MigrationStagingRowGroupByArgs['orderBy'];
    } : {
        orderBy?: MigrationStagingRowGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MigrationStagingRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationStagingRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MigrationStagingRowFieldRefs;
}
export interface Prisma__MigrationStagingRowClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    batch<T extends Prisma.MigrationBatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MigrationBatchDefaultArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MigrationStagingRowFieldRefs {
    readonly id: Prisma.FieldRef<"MigrationStagingRow", 'String'>;
    readonly batchId: Prisma.FieldRef<"MigrationStagingRow", 'String'>;
    readonly rowNumber: Prisma.FieldRef<"MigrationStagingRow", 'Int'>;
    readonly rawData: Prisma.FieldRef<"MigrationStagingRow", 'Json'>;
    readonly isDemoRow: Prisma.FieldRef<"MigrationStagingRow", 'Boolean'>;
    readonly status: Prisma.FieldRef<"MigrationStagingRow", 'StagingRowStatus'>;
    readonly rejectionReasons: Prisma.FieldRef<"MigrationStagingRow", 'Json'>;
    readonly promotedEntityId: Prisma.FieldRef<"MigrationStagingRow", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MigrationStagingRow", 'DateTime'>;
}
export type MigrationStagingRowFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where: Prisma.MigrationStagingRowWhereUniqueInput;
};
export type MigrationStagingRowFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where: Prisma.MigrationStagingRowWhereUniqueInput;
};
export type MigrationStagingRowFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where?: Prisma.MigrationStagingRowWhereInput;
    orderBy?: Prisma.MigrationStagingRowOrderByWithRelationInput | Prisma.MigrationStagingRowOrderByWithRelationInput[];
    cursor?: Prisma.MigrationStagingRowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationStagingRowScalarFieldEnum | Prisma.MigrationStagingRowScalarFieldEnum[];
};
export type MigrationStagingRowFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where?: Prisma.MigrationStagingRowWhereInput;
    orderBy?: Prisma.MigrationStagingRowOrderByWithRelationInput | Prisma.MigrationStagingRowOrderByWithRelationInput[];
    cursor?: Prisma.MigrationStagingRowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationStagingRowScalarFieldEnum | Prisma.MigrationStagingRowScalarFieldEnum[];
};
export type MigrationStagingRowFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where?: Prisma.MigrationStagingRowWhereInput;
    orderBy?: Prisma.MigrationStagingRowOrderByWithRelationInput | Prisma.MigrationStagingRowOrderByWithRelationInput[];
    cursor?: Prisma.MigrationStagingRowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationStagingRowScalarFieldEnum | Prisma.MigrationStagingRowScalarFieldEnum[];
};
export type MigrationStagingRowCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MigrationStagingRowCreateInput, Prisma.MigrationStagingRowUncheckedCreateInput>;
};
export type MigrationStagingRowCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MigrationStagingRowCreateManyInput | Prisma.MigrationStagingRowCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MigrationStagingRowCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    data: Prisma.MigrationStagingRowCreateManyInput | Prisma.MigrationStagingRowCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MigrationStagingRowIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MigrationStagingRowUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MigrationStagingRowUpdateInput, Prisma.MigrationStagingRowUncheckedUpdateInput>;
    where: Prisma.MigrationStagingRowWhereUniqueInput;
};
export type MigrationStagingRowUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MigrationStagingRowUpdateManyMutationInput, Prisma.MigrationStagingRowUncheckedUpdateManyInput>;
    where?: Prisma.MigrationStagingRowWhereInput;
    limit?: number;
};
export type MigrationStagingRowUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MigrationStagingRowUpdateManyMutationInput, Prisma.MigrationStagingRowUncheckedUpdateManyInput>;
    where?: Prisma.MigrationStagingRowWhereInput;
    limit?: number;
    include?: Prisma.MigrationStagingRowIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MigrationStagingRowUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where: Prisma.MigrationStagingRowWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationStagingRowCreateInput, Prisma.MigrationStagingRowUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MigrationStagingRowUpdateInput, Prisma.MigrationStagingRowUncheckedUpdateInput>;
};
export type MigrationStagingRowDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where: Prisma.MigrationStagingRowWhereUniqueInput;
};
export type MigrationStagingRowDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationStagingRowWhereInput;
    limit?: number;
};
export type MigrationStagingRowDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
};
