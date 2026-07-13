import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScreeningListDownloadLogModel = runtime.Types.Result.DefaultSelection<Prisma.$ScreeningListDownloadLogPayload>;
export type AggregateScreeningListDownloadLog = {
    _count: ScreeningListDownloadLogCountAggregateOutputType | null;
    _avg: ScreeningListDownloadLogAvgAggregateOutputType | null;
    _sum: ScreeningListDownloadLogSumAggregateOutputType | null;
    _min: ScreeningListDownloadLogMinAggregateOutputType | null;
    _max: ScreeningListDownloadLogMaxAggregateOutputType | null;
};
export type ScreeningListDownloadLogAvgAggregateOutputType = {
    recordCount: number | null;
};
export type ScreeningListDownloadLogSumAggregateOutputType = {
    recordCount: number | null;
};
export type ScreeningListDownloadLogMinAggregateOutputType = {
    id: string | null;
    sourceCode: $Enums.ScreeningListSourceCode | null;
    attemptedAt: Date | null;
    status: string | null;
    recordCount: number | null;
    listVersion: string | null;
    errorMessage: string | null;
};
export type ScreeningListDownloadLogMaxAggregateOutputType = {
    id: string | null;
    sourceCode: $Enums.ScreeningListSourceCode | null;
    attemptedAt: Date | null;
    status: string | null;
    recordCount: number | null;
    listVersion: string | null;
    errorMessage: string | null;
};
export type ScreeningListDownloadLogCountAggregateOutputType = {
    id: number;
    sourceCode: number;
    attemptedAt: number;
    status: number;
    recordCount: number;
    listVersion: number;
    errorMessage: number;
    _all: number;
};
export type ScreeningListDownloadLogAvgAggregateInputType = {
    recordCount?: true;
};
export type ScreeningListDownloadLogSumAggregateInputType = {
    recordCount?: true;
};
export type ScreeningListDownloadLogMinAggregateInputType = {
    id?: true;
    sourceCode?: true;
    attemptedAt?: true;
    status?: true;
    recordCount?: true;
    listVersion?: true;
    errorMessage?: true;
};
export type ScreeningListDownloadLogMaxAggregateInputType = {
    id?: true;
    sourceCode?: true;
    attemptedAt?: true;
    status?: true;
    recordCount?: true;
    listVersion?: true;
    errorMessage?: true;
};
export type ScreeningListDownloadLogCountAggregateInputType = {
    id?: true;
    sourceCode?: true;
    attemptedAt?: true;
    status?: true;
    recordCount?: true;
    listVersion?: true;
    errorMessage?: true;
    _all?: true;
};
export type ScreeningListDownloadLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    orderBy?: Prisma.ScreeningListDownloadLogOrderByWithRelationInput | Prisma.ScreeningListDownloadLogOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScreeningListDownloadLogCountAggregateInputType;
    _avg?: ScreeningListDownloadLogAvgAggregateInputType;
    _sum?: ScreeningListDownloadLogSumAggregateInputType;
    _min?: ScreeningListDownloadLogMinAggregateInputType;
    _max?: ScreeningListDownloadLogMaxAggregateInputType;
};
export type GetScreeningListDownloadLogAggregateType<T extends ScreeningListDownloadLogAggregateArgs> = {
    [P in keyof T & keyof AggregateScreeningListDownloadLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScreeningListDownloadLog[P]> : Prisma.GetScalarType<T[P], AggregateScreeningListDownloadLog[P]>;
};
export type ScreeningListDownloadLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    orderBy?: Prisma.ScreeningListDownloadLogOrderByWithAggregationInput | Prisma.ScreeningListDownloadLogOrderByWithAggregationInput[];
    by: Prisma.ScreeningListDownloadLogScalarFieldEnum[] | Prisma.ScreeningListDownloadLogScalarFieldEnum;
    having?: Prisma.ScreeningListDownloadLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScreeningListDownloadLogCountAggregateInputType | true;
    _avg?: ScreeningListDownloadLogAvgAggregateInputType;
    _sum?: ScreeningListDownloadLogSumAggregateInputType;
    _min?: ScreeningListDownloadLogMinAggregateInputType;
    _max?: ScreeningListDownloadLogMaxAggregateInputType;
};
export type ScreeningListDownloadLogGroupByOutputType = {
    id: string;
    sourceCode: $Enums.ScreeningListSourceCode;
    attemptedAt: Date;
    status: string;
    recordCount: number | null;
    listVersion: string | null;
    errorMessage: string | null;
    _count: ScreeningListDownloadLogCountAggregateOutputType | null;
    _avg: ScreeningListDownloadLogAvgAggregateOutputType | null;
    _sum: ScreeningListDownloadLogSumAggregateOutputType | null;
    _min: ScreeningListDownloadLogMinAggregateOutputType | null;
    _max: ScreeningListDownloadLogMaxAggregateOutputType | null;
};
export type GetScreeningListDownloadLogGroupByPayload<T extends ScreeningListDownloadLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScreeningListDownloadLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScreeningListDownloadLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScreeningListDownloadLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScreeningListDownloadLogGroupByOutputType[P]>;
}>>;
export type ScreeningListDownloadLogWhereInput = {
    AND?: Prisma.ScreeningListDownloadLogWhereInput | Prisma.ScreeningListDownloadLogWhereInput[];
    OR?: Prisma.ScreeningListDownloadLogWhereInput[];
    NOT?: Prisma.ScreeningListDownloadLogWhereInput | Prisma.ScreeningListDownloadLogWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningListDownloadLog"> | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFilter<"ScreeningListDownloadLog"> | $Enums.ScreeningListSourceCode;
    attemptedAt?: Prisma.DateTimeFilter<"ScreeningListDownloadLog"> | Date | string;
    status?: Prisma.StringFilter<"ScreeningListDownloadLog"> | string;
    recordCount?: Prisma.IntNullableFilter<"ScreeningListDownloadLog"> | number | null;
    listVersion?: Prisma.StringNullableFilter<"ScreeningListDownloadLog"> | string | null;
    errorMessage?: Prisma.StringNullableFilter<"ScreeningListDownloadLog"> | string | null;
    source?: Prisma.XOR<Prisma.ScreeningListSourceScalarRelationFilter, Prisma.ScreeningListSourceWhereInput>;
};
export type ScreeningListDownloadLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recordCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    listVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.ScreeningListSourceOrderByWithRelationInput;
};
export type ScreeningListDownloadLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScreeningListDownloadLogWhereInput | Prisma.ScreeningListDownloadLogWhereInput[];
    OR?: Prisma.ScreeningListDownloadLogWhereInput[];
    NOT?: Prisma.ScreeningListDownloadLogWhereInput | Prisma.ScreeningListDownloadLogWhereInput[];
    sourceCode?: Prisma.EnumScreeningListSourceCodeFilter<"ScreeningListDownloadLog"> | $Enums.ScreeningListSourceCode;
    attemptedAt?: Prisma.DateTimeFilter<"ScreeningListDownloadLog"> | Date | string;
    status?: Prisma.StringFilter<"ScreeningListDownloadLog"> | string;
    recordCount?: Prisma.IntNullableFilter<"ScreeningListDownloadLog"> | number | null;
    listVersion?: Prisma.StringNullableFilter<"ScreeningListDownloadLog"> | string | null;
    errorMessage?: Prisma.StringNullableFilter<"ScreeningListDownloadLog"> | string | null;
    source?: Prisma.XOR<Prisma.ScreeningListSourceScalarRelationFilter, Prisma.ScreeningListSourceWhereInput>;
}, "id">;
export type ScreeningListDownloadLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recordCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    listVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ScreeningListDownloadLogCountOrderByAggregateInput;
    _avg?: Prisma.ScreeningListDownloadLogAvgOrderByAggregateInput;
    _max?: Prisma.ScreeningListDownloadLogMaxOrderByAggregateInput;
    _min?: Prisma.ScreeningListDownloadLogMinOrderByAggregateInput;
    _sum?: Prisma.ScreeningListDownloadLogSumOrderByAggregateInput;
};
export type ScreeningListDownloadLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScreeningListDownloadLogScalarWhereWithAggregatesInput | Prisma.ScreeningListDownloadLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScreeningListDownloadLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScreeningListDownloadLogScalarWhereWithAggregatesInput | Prisma.ScreeningListDownloadLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ScreeningListDownloadLog"> | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeWithAggregatesFilter<"ScreeningListDownloadLog"> | $Enums.ScreeningListSourceCode;
    attemptedAt?: Prisma.DateTimeWithAggregatesFilter<"ScreeningListDownloadLog"> | Date | string;
    status?: Prisma.StringWithAggregatesFilter<"ScreeningListDownloadLog"> | string;
    recordCount?: Prisma.IntNullableWithAggregatesFilter<"ScreeningListDownloadLog"> | number | null;
    listVersion?: Prisma.StringNullableWithAggregatesFilter<"ScreeningListDownloadLog"> | string | null;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"ScreeningListDownloadLog"> | string | null;
};
export type ScreeningListDownloadLogCreateInput = {
    id?: string;
    attemptedAt?: Date | string;
    status: string;
    recordCount?: number | null;
    listVersion?: string | null;
    errorMessage?: string | null;
    source: Prisma.ScreeningListSourceCreateNestedOneWithoutDownloadsInput;
};
export type ScreeningListDownloadLogUncheckedCreateInput = {
    id?: string;
    sourceCode: $Enums.ScreeningListSourceCode;
    attemptedAt?: Date | string;
    status: string;
    recordCount?: number | null;
    listVersion?: string | null;
    errorMessage?: string | null;
};
export type ScreeningListDownloadLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recordCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.ScreeningListSourceUpdateOneRequiredWithoutDownloadsNestedInput;
};
export type ScreeningListDownloadLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFieldUpdateOperationsInput | $Enums.ScreeningListSourceCode;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recordCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningListDownloadLogCreateManyInput = {
    id?: string;
    sourceCode: $Enums.ScreeningListSourceCode;
    attemptedAt?: Date | string;
    status: string;
    recordCount?: number | null;
    listVersion?: string | null;
    errorMessage?: string | null;
};
export type ScreeningListDownloadLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recordCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningListDownloadLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFieldUpdateOperationsInput | $Enums.ScreeningListSourceCode;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recordCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningListDownloadLogListRelationFilter = {
    every?: Prisma.ScreeningListDownloadLogWhereInput;
    some?: Prisma.ScreeningListDownloadLogWhereInput;
    none?: Prisma.ScreeningListDownloadLogWhereInput;
};
export type ScreeningListDownloadLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScreeningListDownloadLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recordCount?: Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
};
export type ScreeningListDownloadLogAvgOrderByAggregateInput = {
    recordCount?: Prisma.SortOrder;
};
export type ScreeningListDownloadLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recordCount?: Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
};
export type ScreeningListDownloadLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recordCount?: Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
};
export type ScreeningListDownloadLogSumOrderByAggregateInput = {
    recordCount?: Prisma.SortOrder;
};
export type ScreeningListDownloadLogCreateNestedManyWithoutSourceInput = {
    create?: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListDownloadLogCreateWithoutSourceInput[] | Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput | Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput[];
    createMany?: Prisma.ScreeningListDownloadLogCreateManySourceInputEnvelope;
    connect?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
};
export type ScreeningListDownloadLogUncheckedCreateNestedManyWithoutSourceInput = {
    create?: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListDownloadLogCreateWithoutSourceInput[] | Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput | Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput[];
    createMany?: Prisma.ScreeningListDownloadLogCreateManySourceInputEnvelope;
    connect?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
};
export type ScreeningListDownloadLogUpdateManyWithoutSourceNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListDownloadLogCreateWithoutSourceInput[] | Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput | Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput[];
    upsert?: Prisma.ScreeningListDownloadLogUpsertWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListDownloadLogUpsertWithWhereUniqueWithoutSourceInput[];
    createMany?: Prisma.ScreeningListDownloadLogCreateManySourceInputEnvelope;
    set?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    disconnect?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    delete?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    connect?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    update?: Prisma.ScreeningListDownloadLogUpdateWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListDownloadLogUpdateWithWhereUniqueWithoutSourceInput[];
    updateMany?: Prisma.ScreeningListDownloadLogUpdateManyWithWhereWithoutSourceInput | Prisma.ScreeningListDownloadLogUpdateManyWithWhereWithoutSourceInput[];
    deleteMany?: Prisma.ScreeningListDownloadLogScalarWhereInput | Prisma.ScreeningListDownloadLogScalarWhereInput[];
};
export type ScreeningListDownloadLogUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListDownloadLogCreateWithoutSourceInput[] | Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput | Prisma.ScreeningListDownloadLogCreateOrConnectWithoutSourceInput[];
    upsert?: Prisma.ScreeningListDownloadLogUpsertWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListDownloadLogUpsertWithWhereUniqueWithoutSourceInput[];
    createMany?: Prisma.ScreeningListDownloadLogCreateManySourceInputEnvelope;
    set?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    disconnect?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    delete?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    connect?: Prisma.ScreeningListDownloadLogWhereUniqueInput | Prisma.ScreeningListDownloadLogWhereUniqueInput[];
    update?: Prisma.ScreeningListDownloadLogUpdateWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListDownloadLogUpdateWithWhereUniqueWithoutSourceInput[];
    updateMany?: Prisma.ScreeningListDownloadLogUpdateManyWithWhereWithoutSourceInput | Prisma.ScreeningListDownloadLogUpdateManyWithWhereWithoutSourceInput[];
    deleteMany?: Prisma.ScreeningListDownloadLogScalarWhereInput | Prisma.ScreeningListDownloadLogScalarWhereInput[];
};
export type ScreeningListDownloadLogCreateWithoutSourceInput = {
    id?: string;
    attemptedAt?: Date | string;
    status: string;
    recordCount?: number | null;
    listVersion?: string | null;
    errorMessage?: string | null;
};
export type ScreeningListDownloadLogUncheckedCreateWithoutSourceInput = {
    id?: string;
    attemptedAt?: Date | string;
    status: string;
    recordCount?: number | null;
    listVersion?: string | null;
    errorMessage?: string | null;
};
export type ScreeningListDownloadLogCreateOrConnectWithoutSourceInput = {
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput>;
};
export type ScreeningListDownloadLogCreateManySourceInputEnvelope = {
    data: Prisma.ScreeningListDownloadLogCreateManySourceInput | Prisma.ScreeningListDownloadLogCreateManySourceInput[];
    skipDuplicates?: boolean;
};
export type ScreeningListDownloadLogUpsertWithWhereUniqueWithoutSourceInput = {
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScreeningListDownloadLogUpdateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedUpdateWithoutSourceInput>;
    create: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedCreateWithoutSourceInput>;
};
export type ScreeningListDownloadLogUpdateWithWhereUniqueWithoutSourceInput = {
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScreeningListDownloadLogUpdateWithoutSourceInput, Prisma.ScreeningListDownloadLogUncheckedUpdateWithoutSourceInput>;
};
export type ScreeningListDownloadLogUpdateManyWithWhereWithoutSourceInput = {
    where: Prisma.ScreeningListDownloadLogScalarWhereInput;
    data: Prisma.XOR<Prisma.ScreeningListDownloadLogUpdateManyMutationInput, Prisma.ScreeningListDownloadLogUncheckedUpdateManyWithoutSourceInput>;
};
export type ScreeningListDownloadLogScalarWhereInput = {
    AND?: Prisma.ScreeningListDownloadLogScalarWhereInput | Prisma.ScreeningListDownloadLogScalarWhereInput[];
    OR?: Prisma.ScreeningListDownloadLogScalarWhereInput[];
    NOT?: Prisma.ScreeningListDownloadLogScalarWhereInput | Prisma.ScreeningListDownloadLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningListDownloadLog"> | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFilter<"ScreeningListDownloadLog"> | $Enums.ScreeningListSourceCode;
    attemptedAt?: Prisma.DateTimeFilter<"ScreeningListDownloadLog"> | Date | string;
    status?: Prisma.StringFilter<"ScreeningListDownloadLog"> | string;
    recordCount?: Prisma.IntNullableFilter<"ScreeningListDownloadLog"> | number | null;
    listVersion?: Prisma.StringNullableFilter<"ScreeningListDownloadLog"> | string | null;
    errorMessage?: Prisma.StringNullableFilter<"ScreeningListDownloadLog"> | string | null;
};
export type ScreeningListDownloadLogCreateManySourceInput = {
    id?: string;
    attemptedAt?: Date | string;
    status: string;
    recordCount?: number | null;
    listVersion?: string | null;
    errorMessage?: string | null;
};
export type ScreeningListDownloadLogUpdateWithoutSourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recordCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningListDownloadLogUncheckedUpdateWithoutSourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recordCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningListDownloadLogUncheckedUpdateManyWithoutSourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    recordCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningListDownloadLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    attemptedAt?: boolean;
    status?: boolean;
    recordCount?: boolean;
    listVersion?: boolean;
    errorMessage?: boolean;
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["screeningListDownloadLog"]>;
export type ScreeningListDownloadLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    attemptedAt?: boolean;
    status?: boolean;
    recordCount?: boolean;
    listVersion?: boolean;
    errorMessage?: boolean;
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["screeningListDownloadLog"]>;
export type ScreeningListDownloadLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    attemptedAt?: boolean;
    status?: boolean;
    recordCount?: boolean;
    listVersion?: boolean;
    errorMessage?: boolean;
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["screeningListDownloadLog"]>;
export type ScreeningListDownloadLogSelectScalar = {
    id?: boolean;
    sourceCode?: boolean;
    attemptedAt?: boolean;
    status?: boolean;
    recordCount?: boolean;
    listVersion?: boolean;
    errorMessage?: boolean;
};
export type ScreeningListDownloadLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sourceCode" | "attemptedAt" | "status" | "recordCount" | "listVersion" | "errorMessage", ExtArgs["result"]["screeningListDownloadLog"]>;
export type ScreeningListDownloadLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
};
export type ScreeningListDownloadLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
};
export type ScreeningListDownloadLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
};
export type $ScreeningListDownloadLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScreeningListDownloadLog";
    objects: {
        source: Prisma.$ScreeningListSourcePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sourceCode: $Enums.ScreeningListSourceCode;
        attemptedAt: Date;
        status: string;
        recordCount: number | null;
        listVersion: string | null;
        errorMessage: string | null;
    }, ExtArgs["result"]["screeningListDownloadLog"]>;
    composites: {};
};
export type ScreeningListDownloadLogGetPayload<S extends boolean | null | undefined | ScreeningListDownloadLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload, S>;
export type ScreeningListDownloadLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScreeningListDownloadLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScreeningListDownloadLogCountAggregateInputType | true;
};
export interface ScreeningListDownloadLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScreeningListDownloadLog'];
        meta: {
            name: 'ScreeningListDownloadLog';
        };
    };
    findUnique<T extends ScreeningListDownloadLogFindUniqueArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScreeningListDownloadLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScreeningListDownloadLogFindFirstArgs>(args?: Prisma.SelectSubset<T, ScreeningListDownloadLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScreeningListDownloadLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScreeningListDownloadLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScreeningListDownloadLogFindManyArgs>(args?: Prisma.SelectSubset<T, ScreeningListDownloadLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScreeningListDownloadLogCreateArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogCreateArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScreeningListDownloadLogCreateManyArgs>(args?: Prisma.SelectSubset<T, ScreeningListDownloadLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScreeningListDownloadLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScreeningListDownloadLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScreeningListDownloadLogDeleteArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogDeleteArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScreeningListDownloadLogUpdateArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogUpdateArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScreeningListDownloadLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScreeningListDownloadLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScreeningListDownloadLogUpdateManyArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScreeningListDownloadLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScreeningListDownloadLogUpsertArgs>(args: Prisma.SelectSubset<T, ScreeningListDownloadLogUpsertArgs<ExtArgs>>): Prisma.Prisma__ScreeningListDownloadLogClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListDownloadLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScreeningListDownloadLogCountArgs>(args?: Prisma.Subset<T, ScreeningListDownloadLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScreeningListDownloadLogCountAggregateOutputType> : number>;
    aggregate<T extends ScreeningListDownloadLogAggregateArgs>(args: Prisma.Subset<T, ScreeningListDownloadLogAggregateArgs>): Prisma.PrismaPromise<GetScreeningListDownloadLogAggregateType<T>>;
    groupBy<T extends ScreeningListDownloadLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScreeningListDownloadLogGroupByArgs['orderBy'];
    } : {
        orderBy?: ScreeningListDownloadLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScreeningListDownloadLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningListDownloadLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScreeningListDownloadLogFieldRefs;
}
export interface Prisma__ScreeningListDownloadLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    source<T extends Prisma.ScreeningListSourceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScreeningListSourceDefaultArgs<ExtArgs>>): Prisma.Prisma__ScreeningListSourceClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScreeningListDownloadLogFieldRefs {
    readonly id: Prisma.FieldRef<"ScreeningListDownloadLog", 'String'>;
    readonly sourceCode: Prisma.FieldRef<"ScreeningListDownloadLog", 'ScreeningListSourceCode'>;
    readonly attemptedAt: Prisma.FieldRef<"ScreeningListDownloadLog", 'DateTime'>;
    readonly status: Prisma.FieldRef<"ScreeningListDownloadLog", 'String'>;
    readonly recordCount: Prisma.FieldRef<"ScreeningListDownloadLog", 'Int'>;
    readonly listVersion: Prisma.FieldRef<"ScreeningListDownloadLog", 'String'>;
    readonly errorMessage: Prisma.FieldRef<"ScreeningListDownloadLog", 'String'>;
}
export type ScreeningListDownloadLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
};
export type ScreeningListDownloadLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
};
export type ScreeningListDownloadLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    orderBy?: Prisma.ScreeningListDownloadLogOrderByWithRelationInput | Prisma.ScreeningListDownloadLogOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningListDownloadLogScalarFieldEnum | Prisma.ScreeningListDownloadLogScalarFieldEnum[];
};
export type ScreeningListDownloadLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    orderBy?: Prisma.ScreeningListDownloadLogOrderByWithRelationInput | Prisma.ScreeningListDownloadLogOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningListDownloadLogScalarFieldEnum | Prisma.ScreeningListDownloadLogScalarFieldEnum[];
};
export type ScreeningListDownloadLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    orderBy?: Prisma.ScreeningListDownloadLogOrderByWithRelationInput | Prisma.ScreeningListDownloadLogOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningListDownloadLogScalarFieldEnum | Prisma.ScreeningListDownloadLogScalarFieldEnum[];
};
export type ScreeningListDownloadLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateInput, Prisma.ScreeningListDownloadLogUncheckedCreateInput>;
};
export type ScreeningListDownloadLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScreeningListDownloadLogCreateManyInput | Prisma.ScreeningListDownloadLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningListDownloadLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    data: Prisma.ScreeningListDownloadLogCreateManyInput | Prisma.ScreeningListDownloadLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScreeningListDownloadLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScreeningListDownloadLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningListDownloadLogUpdateInput, Prisma.ScreeningListDownloadLogUncheckedUpdateInput>;
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
};
export type ScreeningListDownloadLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScreeningListDownloadLogUpdateManyMutationInput, Prisma.ScreeningListDownloadLogUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    limit?: number;
};
export type ScreeningListDownloadLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningListDownloadLogUpdateManyMutationInput, Prisma.ScreeningListDownloadLogUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    limit?: number;
    include?: Prisma.ScreeningListDownloadLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScreeningListDownloadLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningListDownloadLogCreateInput, Prisma.ScreeningListDownloadLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScreeningListDownloadLogUpdateInput, Prisma.ScreeningListDownloadLogUncheckedUpdateInput>;
};
export type ScreeningListDownloadLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
    where: Prisma.ScreeningListDownloadLogWhereUniqueInput;
};
export type ScreeningListDownloadLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningListDownloadLogWhereInput;
    limit?: number;
};
export type ScreeningListDownloadLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListDownloadLogSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListDownloadLogOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListDownloadLogInclude<ExtArgs> | null;
};
