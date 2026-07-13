import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReplaySourceRowModel = runtime.Types.Result.DefaultSelection<Prisma.$ReplaySourceRowPayload>;
export type AggregateReplaySourceRow = {
    _count: ReplaySourceRowCountAggregateOutputType | null;
    _avg: ReplaySourceRowAvgAggregateOutputType | null;
    _sum: ReplaySourceRowSumAggregateOutputType | null;
    _min: ReplaySourceRowMinAggregateOutputType | null;
    _max: ReplaySourceRowMaxAggregateOutputType | null;
};
export type ReplaySourceRowAvgAggregateOutputType = {
    rowNumber: number | null;
};
export type ReplaySourceRowSumAggregateOutputType = {
    rowNumber: number | null;
};
export type ReplaySourceRowMinAggregateOutputType = {
    id: string | null;
    batchId: string | null;
    rowNumber: number | null;
    createdAt: Date | null;
};
export type ReplaySourceRowMaxAggregateOutputType = {
    id: string | null;
    batchId: string | null;
    rowNumber: number | null;
    createdAt: Date | null;
};
export type ReplaySourceRowCountAggregateOutputType = {
    id: number;
    batchId: number;
    rowNumber: number;
    rawData: number;
    createdAt: number;
    _all: number;
};
export type ReplaySourceRowAvgAggregateInputType = {
    rowNumber?: true;
};
export type ReplaySourceRowSumAggregateInputType = {
    rowNumber?: true;
};
export type ReplaySourceRowMinAggregateInputType = {
    id?: true;
    batchId?: true;
    rowNumber?: true;
    createdAt?: true;
};
export type ReplaySourceRowMaxAggregateInputType = {
    id?: true;
    batchId?: true;
    rowNumber?: true;
    createdAt?: true;
};
export type ReplaySourceRowCountAggregateInputType = {
    id?: true;
    batchId?: true;
    rowNumber?: true;
    rawData?: true;
    createdAt?: true;
    _all?: true;
};
export type ReplaySourceRowAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplaySourceRowWhereInput;
    orderBy?: Prisma.ReplaySourceRowOrderByWithRelationInput | Prisma.ReplaySourceRowOrderByWithRelationInput[];
    cursor?: Prisma.ReplaySourceRowWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReplaySourceRowCountAggregateInputType;
    _avg?: ReplaySourceRowAvgAggregateInputType;
    _sum?: ReplaySourceRowSumAggregateInputType;
    _min?: ReplaySourceRowMinAggregateInputType;
    _max?: ReplaySourceRowMaxAggregateInputType;
};
export type GetReplaySourceRowAggregateType<T extends ReplaySourceRowAggregateArgs> = {
    [P in keyof T & keyof AggregateReplaySourceRow]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReplaySourceRow[P]> : Prisma.GetScalarType<T[P], AggregateReplaySourceRow[P]>;
};
export type ReplaySourceRowGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplaySourceRowWhereInput;
    orderBy?: Prisma.ReplaySourceRowOrderByWithAggregationInput | Prisma.ReplaySourceRowOrderByWithAggregationInput[];
    by: Prisma.ReplaySourceRowScalarFieldEnum[] | Prisma.ReplaySourceRowScalarFieldEnum;
    having?: Prisma.ReplaySourceRowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReplaySourceRowCountAggregateInputType | true;
    _avg?: ReplaySourceRowAvgAggregateInputType;
    _sum?: ReplaySourceRowSumAggregateInputType;
    _min?: ReplaySourceRowMinAggregateInputType;
    _max?: ReplaySourceRowMaxAggregateInputType;
};
export type ReplaySourceRowGroupByOutputType = {
    id: string;
    batchId: string;
    rowNumber: number;
    rawData: runtime.JsonValue;
    createdAt: Date;
    _count: ReplaySourceRowCountAggregateOutputType | null;
    _avg: ReplaySourceRowAvgAggregateOutputType | null;
    _sum: ReplaySourceRowSumAggregateOutputType | null;
    _min: ReplaySourceRowMinAggregateOutputType | null;
    _max: ReplaySourceRowMaxAggregateOutputType | null;
};
export type GetReplaySourceRowGroupByPayload<T extends ReplaySourceRowGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReplaySourceRowGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReplaySourceRowGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReplaySourceRowGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReplaySourceRowGroupByOutputType[P]>;
}>>;
export type ReplaySourceRowWhereInput = {
    AND?: Prisma.ReplaySourceRowWhereInput | Prisma.ReplaySourceRowWhereInput[];
    OR?: Prisma.ReplaySourceRowWhereInput[];
    NOT?: Prisma.ReplaySourceRowWhereInput | Prisma.ReplaySourceRowWhereInput[];
    id?: Prisma.UuidFilter<"ReplaySourceRow"> | string;
    batchId?: Prisma.UuidFilter<"ReplaySourceRow"> | string;
    rowNumber?: Prisma.IntFilter<"ReplaySourceRow"> | number;
    rawData?: Prisma.JsonFilter<"ReplaySourceRow">;
    createdAt?: Prisma.DateTimeFilter<"ReplaySourceRow"> | Date | string;
    batch?: Prisma.XOR<Prisma.ReplayBatchScalarRelationFilter, Prisma.ReplayBatchWhereInput>;
};
export type ReplaySourceRowOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    rawData?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    batch?: Prisma.ReplayBatchOrderByWithRelationInput;
};
export type ReplaySourceRowWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    batchId_rowNumber?: Prisma.ReplaySourceRowBatchIdRowNumberCompoundUniqueInput;
    AND?: Prisma.ReplaySourceRowWhereInput | Prisma.ReplaySourceRowWhereInput[];
    OR?: Prisma.ReplaySourceRowWhereInput[];
    NOT?: Prisma.ReplaySourceRowWhereInput | Prisma.ReplaySourceRowWhereInput[];
    batchId?: Prisma.UuidFilter<"ReplaySourceRow"> | string;
    rowNumber?: Prisma.IntFilter<"ReplaySourceRow"> | number;
    rawData?: Prisma.JsonFilter<"ReplaySourceRow">;
    createdAt?: Prisma.DateTimeFilter<"ReplaySourceRow"> | Date | string;
    batch?: Prisma.XOR<Prisma.ReplayBatchScalarRelationFilter, Prisma.ReplayBatchWhereInput>;
}, "id" | "batchId_rowNumber">;
export type ReplaySourceRowOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    rawData?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReplaySourceRowCountOrderByAggregateInput;
    _avg?: Prisma.ReplaySourceRowAvgOrderByAggregateInput;
    _max?: Prisma.ReplaySourceRowMaxOrderByAggregateInput;
    _min?: Prisma.ReplaySourceRowMinOrderByAggregateInput;
    _sum?: Prisma.ReplaySourceRowSumOrderByAggregateInput;
};
export type ReplaySourceRowScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReplaySourceRowScalarWhereWithAggregatesInput | Prisma.ReplaySourceRowScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReplaySourceRowScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReplaySourceRowScalarWhereWithAggregatesInput | Prisma.ReplaySourceRowScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ReplaySourceRow"> | string;
    batchId?: Prisma.UuidWithAggregatesFilter<"ReplaySourceRow"> | string;
    rowNumber?: Prisma.IntWithAggregatesFilter<"ReplaySourceRow"> | number;
    rawData?: Prisma.JsonWithAggregatesFilter<"ReplaySourceRow">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ReplaySourceRow"> | Date | string;
};
export type ReplaySourceRowCreateInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    batch: Prisma.ReplayBatchCreateNestedOneWithoutRowsInput;
};
export type ReplaySourceRowUncheckedCreateInput = {
    id?: string;
    batchId: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ReplaySourceRowUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batch?: Prisma.ReplayBatchUpdateOneRequiredWithoutRowsNestedInput;
};
export type ReplaySourceRowUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplaySourceRowCreateManyInput = {
    id?: string;
    batchId: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ReplaySourceRowUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplaySourceRowUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplaySourceRowListRelationFilter = {
    every?: Prisma.ReplaySourceRowWhereInput;
    some?: Prisma.ReplaySourceRowWhereInput;
    none?: Prisma.ReplaySourceRowWhereInput;
};
export type ReplaySourceRowOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReplaySourceRowBatchIdRowNumberCompoundUniqueInput = {
    batchId: string;
    rowNumber: number;
};
export type ReplaySourceRowCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    rawData?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReplaySourceRowAvgOrderByAggregateInput = {
    rowNumber?: Prisma.SortOrder;
};
export type ReplaySourceRowMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReplaySourceRowMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    rowNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReplaySourceRowSumOrderByAggregateInput = {
    rowNumber?: Prisma.SortOrder;
};
export type ReplaySourceRowCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.ReplaySourceRowCreateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput> | Prisma.ReplaySourceRowCreateWithoutBatchInput[] | Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput | Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.ReplaySourceRowCreateManyBatchInputEnvelope;
    connect?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
};
export type ReplaySourceRowUncheckedCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.ReplaySourceRowCreateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput> | Prisma.ReplaySourceRowCreateWithoutBatchInput[] | Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput | Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.ReplaySourceRowCreateManyBatchInputEnvelope;
    connect?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
};
export type ReplaySourceRowUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.ReplaySourceRowCreateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput> | Prisma.ReplaySourceRowCreateWithoutBatchInput[] | Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput | Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.ReplaySourceRowUpsertWithWhereUniqueWithoutBatchInput | Prisma.ReplaySourceRowUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.ReplaySourceRowCreateManyBatchInputEnvelope;
    set?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    disconnect?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    delete?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    connect?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    update?: Prisma.ReplaySourceRowUpdateWithWhereUniqueWithoutBatchInput | Prisma.ReplaySourceRowUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.ReplaySourceRowUpdateManyWithWhereWithoutBatchInput | Prisma.ReplaySourceRowUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.ReplaySourceRowScalarWhereInput | Prisma.ReplaySourceRowScalarWhereInput[];
};
export type ReplaySourceRowUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.ReplaySourceRowCreateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput> | Prisma.ReplaySourceRowCreateWithoutBatchInput[] | Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput | Prisma.ReplaySourceRowCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.ReplaySourceRowUpsertWithWhereUniqueWithoutBatchInput | Prisma.ReplaySourceRowUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.ReplaySourceRowCreateManyBatchInputEnvelope;
    set?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    disconnect?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    delete?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    connect?: Prisma.ReplaySourceRowWhereUniqueInput | Prisma.ReplaySourceRowWhereUniqueInput[];
    update?: Prisma.ReplaySourceRowUpdateWithWhereUniqueWithoutBatchInput | Prisma.ReplaySourceRowUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.ReplaySourceRowUpdateManyWithWhereWithoutBatchInput | Prisma.ReplaySourceRowUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.ReplaySourceRowScalarWhereInput | Prisma.ReplaySourceRowScalarWhereInput[];
};
export type ReplaySourceRowCreateWithoutBatchInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ReplaySourceRowUncheckedCreateWithoutBatchInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ReplaySourceRowCreateOrConnectWithoutBatchInput = {
    where: Prisma.ReplaySourceRowWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplaySourceRowCreateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput>;
};
export type ReplaySourceRowCreateManyBatchInputEnvelope = {
    data: Prisma.ReplaySourceRowCreateManyBatchInput | Prisma.ReplaySourceRowCreateManyBatchInput[];
    skipDuplicates?: boolean;
};
export type ReplaySourceRowUpsertWithWhereUniqueWithoutBatchInput = {
    where: Prisma.ReplaySourceRowWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReplaySourceRowUpdateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedUpdateWithoutBatchInput>;
    create: Prisma.XOR<Prisma.ReplaySourceRowCreateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedCreateWithoutBatchInput>;
};
export type ReplaySourceRowUpdateWithWhereUniqueWithoutBatchInput = {
    where: Prisma.ReplaySourceRowWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReplaySourceRowUpdateWithoutBatchInput, Prisma.ReplaySourceRowUncheckedUpdateWithoutBatchInput>;
};
export type ReplaySourceRowUpdateManyWithWhereWithoutBatchInput = {
    where: Prisma.ReplaySourceRowScalarWhereInput;
    data: Prisma.XOR<Prisma.ReplaySourceRowUpdateManyMutationInput, Prisma.ReplaySourceRowUncheckedUpdateManyWithoutBatchInput>;
};
export type ReplaySourceRowScalarWhereInput = {
    AND?: Prisma.ReplaySourceRowScalarWhereInput | Prisma.ReplaySourceRowScalarWhereInput[];
    OR?: Prisma.ReplaySourceRowScalarWhereInput[];
    NOT?: Prisma.ReplaySourceRowScalarWhereInput | Prisma.ReplaySourceRowScalarWhereInput[];
    id?: Prisma.UuidFilter<"ReplaySourceRow"> | string;
    batchId?: Prisma.UuidFilter<"ReplaySourceRow"> | string;
    rowNumber?: Prisma.IntFilter<"ReplaySourceRow"> | number;
    rawData?: Prisma.JsonFilter<"ReplaySourceRow">;
    createdAt?: Prisma.DateTimeFilter<"ReplaySourceRow"> | Date | string;
};
export type ReplaySourceRowCreateManyBatchInput = {
    id?: string;
    rowNumber: number;
    rawData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ReplaySourceRowUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplaySourceRowUncheckedUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplaySourceRowUncheckedUpdateManyWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rowNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    rawData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReplaySourceRowSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.ReplayBatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replaySourceRow"]>;
export type ReplaySourceRowSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.ReplayBatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replaySourceRow"]>;
export type ReplaySourceRowSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    createdAt?: boolean;
    batch?: boolean | Prisma.ReplayBatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replaySourceRow"]>;
export type ReplaySourceRowSelectScalar = {
    id?: boolean;
    batchId?: boolean;
    rowNumber?: boolean;
    rawData?: boolean;
    createdAt?: boolean;
};
export type ReplaySourceRowOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batchId" | "rowNumber" | "rawData" | "createdAt", ExtArgs["result"]["replaySourceRow"]>;
export type ReplaySourceRowInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.ReplayBatchDefaultArgs<ExtArgs>;
};
export type ReplaySourceRowIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.ReplayBatchDefaultArgs<ExtArgs>;
};
export type ReplaySourceRowIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batch?: boolean | Prisma.ReplayBatchDefaultArgs<ExtArgs>;
};
export type $ReplaySourceRowPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReplaySourceRow";
    objects: {
        batch: Prisma.$ReplayBatchPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        batchId: string;
        rowNumber: number;
        rawData: runtime.JsonValue;
        createdAt: Date;
    }, ExtArgs["result"]["replaySourceRow"]>;
    composites: {};
};
export type ReplaySourceRowGetPayload<S extends boolean | null | undefined | ReplaySourceRowDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload, S>;
export type ReplaySourceRowCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReplaySourceRowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReplaySourceRowCountAggregateInputType | true;
};
export interface ReplaySourceRowDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReplaySourceRow'];
        meta: {
            name: 'ReplaySourceRow';
        };
    };
    findUnique<T extends ReplaySourceRowFindUniqueArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReplaySourceRowFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReplaySourceRowFindFirstArgs>(args?: Prisma.SelectSubset<T, ReplaySourceRowFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReplaySourceRowFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReplaySourceRowFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReplaySourceRowFindManyArgs>(args?: Prisma.SelectSubset<T, ReplaySourceRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReplaySourceRowCreateArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowCreateArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReplaySourceRowCreateManyArgs>(args?: Prisma.SelectSubset<T, ReplaySourceRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReplaySourceRowCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReplaySourceRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReplaySourceRowDeleteArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowDeleteArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReplaySourceRowUpdateArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowUpdateArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReplaySourceRowDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReplaySourceRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReplaySourceRowUpdateManyArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReplaySourceRowUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReplaySourceRowUpsertArgs>(args: Prisma.SelectSubset<T, ReplaySourceRowUpsertArgs<ExtArgs>>): Prisma.Prisma__ReplaySourceRowClient<runtime.Types.Result.GetResult<Prisma.$ReplaySourceRowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReplaySourceRowCountArgs>(args?: Prisma.Subset<T, ReplaySourceRowCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReplaySourceRowCountAggregateOutputType> : number>;
    aggregate<T extends ReplaySourceRowAggregateArgs>(args: Prisma.Subset<T, ReplaySourceRowAggregateArgs>): Prisma.PrismaPromise<GetReplaySourceRowAggregateType<T>>;
    groupBy<T extends ReplaySourceRowGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReplaySourceRowGroupByArgs['orderBy'];
    } : {
        orderBy?: ReplaySourceRowGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReplaySourceRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplaySourceRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReplaySourceRowFieldRefs;
}
export interface Prisma__ReplaySourceRowClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    batch<T extends Prisma.ReplayBatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReplayBatchDefaultArgs<ExtArgs>>): Prisma.Prisma__ReplayBatchClient<runtime.Types.Result.GetResult<Prisma.$ReplayBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReplaySourceRowFieldRefs {
    readonly id: Prisma.FieldRef<"ReplaySourceRow", 'String'>;
    readonly batchId: Prisma.FieldRef<"ReplaySourceRow", 'String'>;
    readonly rowNumber: Prisma.FieldRef<"ReplaySourceRow", 'Int'>;
    readonly rawData: Prisma.FieldRef<"ReplaySourceRow", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ReplaySourceRow", 'DateTime'>;
}
export type ReplaySourceRowFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
    where: Prisma.ReplaySourceRowWhereUniqueInput;
};
export type ReplaySourceRowFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
    where: Prisma.ReplaySourceRowWhereUniqueInput;
};
export type ReplaySourceRowFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReplaySourceRowFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReplaySourceRowFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReplaySourceRowCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplaySourceRowCreateInput, Prisma.ReplaySourceRowUncheckedCreateInput>;
};
export type ReplaySourceRowCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReplaySourceRowCreateManyInput | Prisma.ReplaySourceRowCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReplaySourceRowCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    data: Prisma.ReplaySourceRowCreateManyInput | Prisma.ReplaySourceRowCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReplaySourceRowIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReplaySourceRowUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplaySourceRowUpdateInput, Prisma.ReplaySourceRowUncheckedUpdateInput>;
    where: Prisma.ReplaySourceRowWhereUniqueInput;
};
export type ReplaySourceRowUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReplaySourceRowUpdateManyMutationInput, Prisma.ReplaySourceRowUncheckedUpdateManyInput>;
    where?: Prisma.ReplaySourceRowWhereInput;
    limit?: number;
};
export type ReplaySourceRowUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplaySourceRowUpdateManyMutationInput, Prisma.ReplaySourceRowUncheckedUpdateManyInput>;
    where?: Prisma.ReplaySourceRowWhereInput;
    limit?: number;
    include?: Prisma.ReplaySourceRowIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReplaySourceRowUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
    where: Prisma.ReplaySourceRowWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplaySourceRowCreateInput, Prisma.ReplaySourceRowUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReplaySourceRowUpdateInput, Prisma.ReplaySourceRowUncheckedUpdateInput>;
};
export type ReplaySourceRowDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
    where: Prisma.ReplaySourceRowWhereUniqueInput;
};
export type ReplaySourceRowDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplaySourceRowWhereInput;
    limit?: number;
};
export type ReplaySourceRowDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplaySourceRowSelect<ExtArgs> | null;
    omit?: Prisma.ReplaySourceRowOmit<ExtArgs> | null;
    include?: Prisma.ReplaySourceRowInclude<ExtArgs> | null;
};
