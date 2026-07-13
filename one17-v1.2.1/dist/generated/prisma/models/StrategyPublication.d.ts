import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StrategyPublicationModel = runtime.Types.Result.DefaultSelection<Prisma.$StrategyPublicationPayload>;
export type AggregateStrategyPublication = {
    _count: StrategyPublicationCountAggregateOutputType | null;
    _min: StrategyPublicationMinAggregateOutputType | null;
    _max: StrategyPublicationMaxAggregateOutputType | null;
};
export type StrategyPublicationMinAggregateOutputType = {
    id: string | null;
    summary: string | null;
    publishedByUserId: string | null;
    publishedAt: Date | null;
};
export type StrategyPublicationMaxAggregateOutputType = {
    id: string | null;
    summary: string | null;
    publishedByUserId: string | null;
    publishedAt: Date | null;
};
export type StrategyPublicationCountAggregateOutputType = {
    id: number;
    summary: number;
    publishedByUserId: number;
    publishedAt: number;
    _all: number;
};
export type StrategyPublicationMinAggregateInputType = {
    id?: true;
    summary?: true;
    publishedByUserId?: true;
    publishedAt?: true;
};
export type StrategyPublicationMaxAggregateInputType = {
    id?: true;
    summary?: true;
    publishedByUserId?: true;
    publishedAt?: true;
};
export type StrategyPublicationCountAggregateInputType = {
    id?: true;
    summary?: true;
    publishedByUserId?: true;
    publishedAt?: true;
    _all?: true;
};
export type StrategyPublicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyPublicationWhereInput;
    orderBy?: Prisma.StrategyPublicationOrderByWithRelationInput | Prisma.StrategyPublicationOrderByWithRelationInput[];
    cursor?: Prisma.StrategyPublicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StrategyPublicationCountAggregateInputType;
    _min?: StrategyPublicationMinAggregateInputType;
    _max?: StrategyPublicationMaxAggregateInputType;
};
export type GetStrategyPublicationAggregateType<T extends StrategyPublicationAggregateArgs> = {
    [P in keyof T & keyof AggregateStrategyPublication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStrategyPublication[P]> : Prisma.GetScalarType<T[P], AggregateStrategyPublication[P]>;
};
export type StrategyPublicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyPublicationWhereInput;
    orderBy?: Prisma.StrategyPublicationOrderByWithAggregationInput | Prisma.StrategyPublicationOrderByWithAggregationInput[];
    by: Prisma.StrategyPublicationScalarFieldEnum[] | Prisma.StrategyPublicationScalarFieldEnum;
    having?: Prisma.StrategyPublicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StrategyPublicationCountAggregateInputType | true;
    _min?: StrategyPublicationMinAggregateInputType;
    _max?: StrategyPublicationMaxAggregateInputType;
};
export type StrategyPublicationGroupByOutputType = {
    id: string;
    summary: string;
    publishedByUserId: string;
    publishedAt: Date;
    _count: StrategyPublicationCountAggregateOutputType | null;
    _min: StrategyPublicationMinAggregateOutputType | null;
    _max: StrategyPublicationMaxAggregateOutputType | null;
};
export type GetStrategyPublicationGroupByPayload<T extends StrategyPublicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StrategyPublicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StrategyPublicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StrategyPublicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StrategyPublicationGroupByOutputType[P]>;
}>>;
export type StrategyPublicationWhereInput = {
    AND?: Prisma.StrategyPublicationWhereInput | Prisma.StrategyPublicationWhereInput[];
    OR?: Prisma.StrategyPublicationWhereInput[];
    NOT?: Prisma.StrategyPublicationWhereInput | Prisma.StrategyPublicationWhereInput[];
    id?: Prisma.UuidFilter<"StrategyPublication"> | string;
    summary?: Prisma.StringFilter<"StrategyPublication"> | string;
    publishedByUserId?: Prisma.UuidFilter<"StrategyPublication"> | string;
    publishedAt?: Prisma.DateTimeFilter<"StrategyPublication"> | Date | string;
    publishedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    acknowledgments?: Prisma.StrategyAcknowledgmentListRelationFilter;
};
export type StrategyPublicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    publishedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    publishedBy?: Prisma.AppUserOrderByWithRelationInput;
    acknowledgments?: Prisma.StrategyAcknowledgmentOrderByRelationAggregateInput;
};
export type StrategyPublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StrategyPublicationWhereInput | Prisma.StrategyPublicationWhereInput[];
    OR?: Prisma.StrategyPublicationWhereInput[];
    NOT?: Prisma.StrategyPublicationWhereInput | Prisma.StrategyPublicationWhereInput[];
    summary?: Prisma.StringFilter<"StrategyPublication"> | string;
    publishedByUserId?: Prisma.UuidFilter<"StrategyPublication"> | string;
    publishedAt?: Prisma.DateTimeFilter<"StrategyPublication"> | Date | string;
    publishedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    acknowledgments?: Prisma.StrategyAcknowledgmentListRelationFilter;
}, "id">;
export type StrategyPublicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    publishedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    _count?: Prisma.StrategyPublicationCountOrderByAggregateInput;
    _max?: Prisma.StrategyPublicationMaxOrderByAggregateInput;
    _min?: Prisma.StrategyPublicationMinOrderByAggregateInput;
};
export type StrategyPublicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.StrategyPublicationScalarWhereWithAggregatesInput | Prisma.StrategyPublicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.StrategyPublicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StrategyPublicationScalarWhereWithAggregatesInput | Prisma.StrategyPublicationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StrategyPublication"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"StrategyPublication"> | string;
    publishedByUserId?: Prisma.UuidWithAggregatesFilter<"StrategyPublication"> | string;
    publishedAt?: Prisma.DateTimeWithAggregatesFilter<"StrategyPublication"> | Date | string;
};
export type StrategyPublicationCreateInput = {
    id?: string;
    summary: string;
    publishedAt?: Date | string;
    publishedBy: Prisma.AppUserCreateNestedOneWithoutStrategyPublicationsInput;
    acknowledgments?: Prisma.StrategyAcknowledgmentCreateNestedManyWithoutPublicationInput;
};
export type StrategyPublicationUncheckedCreateInput = {
    id?: string;
    summary: string;
    publishedByUserId: string;
    publishedAt?: Date | string;
    acknowledgments?: Prisma.StrategyAcknowledgmentUncheckedCreateNestedManyWithoutPublicationInput;
};
export type StrategyPublicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    publishedBy?: Prisma.AppUserUpdateOneRequiredWithoutStrategyPublicationsNestedInput;
    acknowledgments?: Prisma.StrategyAcknowledgmentUpdateManyWithoutPublicationNestedInput;
};
export type StrategyPublicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgments?: Prisma.StrategyAcknowledgmentUncheckedUpdateManyWithoutPublicationNestedInput;
};
export type StrategyPublicationCreateManyInput = {
    id?: string;
    summary: string;
    publishedByUserId: string;
    publishedAt?: Date | string;
};
export type StrategyPublicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyPublicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyPublicationListRelationFilter = {
    every?: Prisma.StrategyPublicationWhereInput;
    some?: Prisma.StrategyPublicationWhereInput;
    none?: Prisma.StrategyPublicationWhereInput;
};
export type StrategyPublicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StrategyPublicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    publishedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
};
export type StrategyPublicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    publishedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
};
export type StrategyPublicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    publishedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
};
export type StrategyPublicationScalarRelationFilter = {
    is?: Prisma.StrategyPublicationWhereInput;
    isNot?: Prisma.StrategyPublicationWhereInput;
};
export type StrategyPublicationCreateNestedManyWithoutPublishedByInput = {
    create?: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput> | Prisma.StrategyPublicationCreateWithoutPublishedByInput[] | Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput[];
    connectOrCreate?: Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput | Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput[];
    createMany?: Prisma.StrategyPublicationCreateManyPublishedByInputEnvelope;
    connect?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
};
export type StrategyPublicationUncheckedCreateNestedManyWithoutPublishedByInput = {
    create?: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput> | Prisma.StrategyPublicationCreateWithoutPublishedByInput[] | Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput[];
    connectOrCreate?: Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput | Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput[];
    createMany?: Prisma.StrategyPublicationCreateManyPublishedByInputEnvelope;
    connect?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
};
export type StrategyPublicationUpdateManyWithoutPublishedByNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput> | Prisma.StrategyPublicationCreateWithoutPublishedByInput[] | Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput[];
    connectOrCreate?: Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput | Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput[];
    upsert?: Prisma.StrategyPublicationUpsertWithWhereUniqueWithoutPublishedByInput | Prisma.StrategyPublicationUpsertWithWhereUniqueWithoutPublishedByInput[];
    createMany?: Prisma.StrategyPublicationCreateManyPublishedByInputEnvelope;
    set?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    disconnect?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    delete?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    connect?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    update?: Prisma.StrategyPublicationUpdateWithWhereUniqueWithoutPublishedByInput | Prisma.StrategyPublicationUpdateWithWhereUniqueWithoutPublishedByInput[];
    updateMany?: Prisma.StrategyPublicationUpdateManyWithWhereWithoutPublishedByInput | Prisma.StrategyPublicationUpdateManyWithWhereWithoutPublishedByInput[];
    deleteMany?: Prisma.StrategyPublicationScalarWhereInput | Prisma.StrategyPublicationScalarWhereInput[];
};
export type StrategyPublicationUncheckedUpdateManyWithoutPublishedByNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput> | Prisma.StrategyPublicationCreateWithoutPublishedByInput[] | Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput[];
    connectOrCreate?: Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput | Prisma.StrategyPublicationCreateOrConnectWithoutPublishedByInput[];
    upsert?: Prisma.StrategyPublicationUpsertWithWhereUniqueWithoutPublishedByInput | Prisma.StrategyPublicationUpsertWithWhereUniqueWithoutPublishedByInput[];
    createMany?: Prisma.StrategyPublicationCreateManyPublishedByInputEnvelope;
    set?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    disconnect?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    delete?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    connect?: Prisma.StrategyPublicationWhereUniqueInput | Prisma.StrategyPublicationWhereUniqueInput[];
    update?: Prisma.StrategyPublicationUpdateWithWhereUniqueWithoutPublishedByInput | Prisma.StrategyPublicationUpdateWithWhereUniqueWithoutPublishedByInput[];
    updateMany?: Prisma.StrategyPublicationUpdateManyWithWhereWithoutPublishedByInput | Prisma.StrategyPublicationUpdateManyWithWhereWithoutPublishedByInput[];
    deleteMany?: Prisma.StrategyPublicationScalarWhereInput | Prisma.StrategyPublicationScalarWhereInput[];
};
export type StrategyPublicationCreateNestedOneWithoutAcknowledgmentsInput = {
    create?: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutAcknowledgmentsInput, Prisma.StrategyPublicationUncheckedCreateWithoutAcknowledgmentsInput>;
    connectOrCreate?: Prisma.StrategyPublicationCreateOrConnectWithoutAcknowledgmentsInput;
    connect?: Prisma.StrategyPublicationWhereUniqueInput;
};
export type StrategyPublicationUpdateOneRequiredWithoutAcknowledgmentsNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutAcknowledgmentsInput, Prisma.StrategyPublicationUncheckedCreateWithoutAcknowledgmentsInput>;
    connectOrCreate?: Prisma.StrategyPublicationCreateOrConnectWithoutAcknowledgmentsInput;
    upsert?: Prisma.StrategyPublicationUpsertWithoutAcknowledgmentsInput;
    connect?: Prisma.StrategyPublicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StrategyPublicationUpdateToOneWithWhereWithoutAcknowledgmentsInput, Prisma.StrategyPublicationUpdateWithoutAcknowledgmentsInput>, Prisma.StrategyPublicationUncheckedUpdateWithoutAcknowledgmentsInput>;
};
export type StrategyPublicationCreateWithoutPublishedByInput = {
    id?: string;
    summary: string;
    publishedAt?: Date | string;
    acknowledgments?: Prisma.StrategyAcknowledgmentCreateNestedManyWithoutPublicationInput;
};
export type StrategyPublicationUncheckedCreateWithoutPublishedByInput = {
    id?: string;
    summary: string;
    publishedAt?: Date | string;
    acknowledgments?: Prisma.StrategyAcknowledgmentUncheckedCreateNestedManyWithoutPublicationInput;
};
export type StrategyPublicationCreateOrConnectWithoutPublishedByInput = {
    where: Prisma.StrategyPublicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput>;
};
export type StrategyPublicationCreateManyPublishedByInputEnvelope = {
    data: Prisma.StrategyPublicationCreateManyPublishedByInput | Prisma.StrategyPublicationCreateManyPublishedByInput[];
    skipDuplicates?: boolean;
};
export type StrategyPublicationUpsertWithWhereUniqueWithoutPublishedByInput = {
    where: Prisma.StrategyPublicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.StrategyPublicationUpdateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedUpdateWithoutPublishedByInput>;
    create: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedCreateWithoutPublishedByInput>;
};
export type StrategyPublicationUpdateWithWhereUniqueWithoutPublishedByInput = {
    where: Prisma.StrategyPublicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.StrategyPublicationUpdateWithoutPublishedByInput, Prisma.StrategyPublicationUncheckedUpdateWithoutPublishedByInput>;
};
export type StrategyPublicationUpdateManyWithWhereWithoutPublishedByInput = {
    where: Prisma.StrategyPublicationScalarWhereInput;
    data: Prisma.XOR<Prisma.StrategyPublicationUpdateManyMutationInput, Prisma.StrategyPublicationUncheckedUpdateManyWithoutPublishedByInput>;
};
export type StrategyPublicationScalarWhereInput = {
    AND?: Prisma.StrategyPublicationScalarWhereInput | Prisma.StrategyPublicationScalarWhereInput[];
    OR?: Prisma.StrategyPublicationScalarWhereInput[];
    NOT?: Prisma.StrategyPublicationScalarWhereInput | Prisma.StrategyPublicationScalarWhereInput[];
    id?: Prisma.UuidFilter<"StrategyPublication"> | string;
    summary?: Prisma.StringFilter<"StrategyPublication"> | string;
    publishedByUserId?: Prisma.UuidFilter<"StrategyPublication"> | string;
    publishedAt?: Prisma.DateTimeFilter<"StrategyPublication"> | Date | string;
};
export type StrategyPublicationCreateWithoutAcknowledgmentsInput = {
    id?: string;
    summary: string;
    publishedAt?: Date | string;
    publishedBy: Prisma.AppUserCreateNestedOneWithoutStrategyPublicationsInput;
};
export type StrategyPublicationUncheckedCreateWithoutAcknowledgmentsInput = {
    id?: string;
    summary: string;
    publishedByUserId: string;
    publishedAt?: Date | string;
};
export type StrategyPublicationCreateOrConnectWithoutAcknowledgmentsInput = {
    where: Prisma.StrategyPublicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutAcknowledgmentsInput, Prisma.StrategyPublicationUncheckedCreateWithoutAcknowledgmentsInput>;
};
export type StrategyPublicationUpsertWithoutAcknowledgmentsInput = {
    update: Prisma.XOR<Prisma.StrategyPublicationUpdateWithoutAcknowledgmentsInput, Prisma.StrategyPublicationUncheckedUpdateWithoutAcknowledgmentsInput>;
    create: Prisma.XOR<Prisma.StrategyPublicationCreateWithoutAcknowledgmentsInput, Prisma.StrategyPublicationUncheckedCreateWithoutAcknowledgmentsInput>;
    where?: Prisma.StrategyPublicationWhereInput;
};
export type StrategyPublicationUpdateToOneWithWhereWithoutAcknowledgmentsInput = {
    where?: Prisma.StrategyPublicationWhereInput;
    data: Prisma.XOR<Prisma.StrategyPublicationUpdateWithoutAcknowledgmentsInput, Prisma.StrategyPublicationUncheckedUpdateWithoutAcknowledgmentsInput>;
};
export type StrategyPublicationUpdateWithoutAcknowledgmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    publishedBy?: Prisma.AppUserUpdateOneRequiredWithoutStrategyPublicationsNestedInput;
};
export type StrategyPublicationUncheckedUpdateWithoutAcknowledgmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyPublicationCreateManyPublishedByInput = {
    id?: string;
    summary: string;
    publishedAt?: Date | string;
};
export type StrategyPublicationUpdateWithoutPublishedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgments?: Prisma.StrategyAcknowledgmentUpdateManyWithoutPublicationNestedInput;
};
export type StrategyPublicationUncheckedUpdateWithoutPublishedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgments?: Prisma.StrategyAcknowledgmentUncheckedUpdateManyWithoutPublicationNestedInput;
};
export type StrategyPublicationUncheckedUpdateManyWithoutPublishedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    publishedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyPublicationCountOutputType = {
    acknowledgments: number;
};
export type StrategyPublicationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    acknowledgments?: boolean | StrategyPublicationCountOutputTypeCountAcknowledgmentsArgs;
};
export type StrategyPublicationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationCountOutputTypeSelect<ExtArgs> | null;
};
export type StrategyPublicationCountOutputTypeCountAcknowledgmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyAcknowledgmentWhereInput;
};
export type StrategyPublicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    summary?: boolean;
    publishedByUserId?: boolean;
    publishedAt?: boolean;
    publishedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgments?: boolean | Prisma.StrategyPublication$acknowledgmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategyPublicationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategyPublication"]>;
export type StrategyPublicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    summary?: boolean;
    publishedByUserId?: boolean;
    publishedAt?: boolean;
    publishedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategyPublication"]>;
export type StrategyPublicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    summary?: boolean;
    publishedByUserId?: boolean;
    publishedAt?: boolean;
    publishedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategyPublication"]>;
export type StrategyPublicationSelectScalar = {
    id?: boolean;
    summary?: boolean;
    publishedByUserId?: boolean;
    publishedAt?: boolean;
};
export type StrategyPublicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "summary" | "publishedByUserId" | "publishedAt", ExtArgs["result"]["strategyPublication"]>;
export type StrategyPublicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    publishedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgments?: boolean | Prisma.StrategyPublication$acknowledgmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategyPublicationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StrategyPublicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    publishedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type StrategyPublicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    publishedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $StrategyPublicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StrategyPublication";
    objects: {
        publishedBy: Prisma.$AppUserPayload<ExtArgs>;
        acknowledgments: Prisma.$StrategyAcknowledgmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        summary: string;
        publishedByUserId: string;
        publishedAt: Date;
    }, ExtArgs["result"]["strategyPublication"]>;
    composites: {};
};
export type StrategyPublicationGetPayload<S extends boolean | null | undefined | StrategyPublicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload, S>;
export type StrategyPublicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StrategyPublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StrategyPublicationCountAggregateInputType | true;
};
export interface StrategyPublicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StrategyPublication'];
        meta: {
            name: 'StrategyPublication';
        };
    };
    findUnique<T extends StrategyPublicationFindUniqueArgs>(args: Prisma.SelectSubset<T, StrategyPublicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StrategyPublicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StrategyPublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StrategyPublicationFindFirstArgs>(args?: Prisma.SelectSubset<T, StrategyPublicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StrategyPublicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StrategyPublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StrategyPublicationFindManyArgs>(args?: Prisma.SelectSubset<T, StrategyPublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StrategyPublicationCreateArgs>(args: Prisma.SelectSubset<T, StrategyPublicationCreateArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StrategyPublicationCreateManyArgs>(args?: Prisma.SelectSubset<T, StrategyPublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StrategyPublicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StrategyPublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StrategyPublicationDeleteArgs>(args: Prisma.SelectSubset<T, StrategyPublicationDeleteArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StrategyPublicationUpdateArgs>(args: Prisma.SelectSubset<T, StrategyPublicationUpdateArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StrategyPublicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, StrategyPublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StrategyPublicationUpdateManyArgs>(args: Prisma.SelectSubset<T, StrategyPublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StrategyPublicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StrategyPublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StrategyPublicationUpsertArgs>(args: Prisma.SelectSubset<T, StrategyPublicationUpsertArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StrategyPublicationCountArgs>(args?: Prisma.Subset<T, StrategyPublicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StrategyPublicationCountAggregateOutputType> : number>;
    aggregate<T extends StrategyPublicationAggregateArgs>(args: Prisma.Subset<T, StrategyPublicationAggregateArgs>): Prisma.PrismaPromise<GetStrategyPublicationAggregateType<T>>;
    groupBy<T extends StrategyPublicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StrategyPublicationGroupByArgs['orderBy'];
    } : {
        orderBy?: StrategyPublicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StrategyPublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrategyPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StrategyPublicationFieldRefs;
}
export interface Prisma__StrategyPublicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    publishedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    acknowledgments<T extends Prisma.StrategyPublication$acknowledgmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategyPublication$acknowledgmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StrategyPublicationFieldRefs {
    readonly id: Prisma.FieldRef<"StrategyPublication", 'String'>;
    readonly summary: Prisma.FieldRef<"StrategyPublication", 'String'>;
    readonly publishedByUserId: Prisma.FieldRef<"StrategyPublication", 'String'>;
    readonly publishedAt: Prisma.FieldRef<"StrategyPublication", 'DateTime'>;
}
export type StrategyPublicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    where: Prisma.StrategyPublicationWhereUniqueInput;
};
export type StrategyPublicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    where: Prisma.StrategyPublicationWhereUniqueInput;
};
export type StrategyPublicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    where?: Prisma.StrategyPublicationWhereInput;
    orderBy?: Prisma.StrategyPublicationOrderByWithRelationInput | Prisma.StrategyPublicationOrderByWithRelationInput[];
    cursor?: Prisma.StrategyPublicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyPublicationScalarFieldEnum | Prisma.StrategyPublicationScalarFieldEnum[];
};
export type StrategyPublicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    where?: Prisma.StrategyPublicationWhereInput;
    orderBy?: Prisma.StrategyPublicationOrderByWithRelationInput | Prisma.StrategyPublicationOrderByWithRelationInput[];
    cursor?: Prisma.StrategyPublicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyPublicationScalarFieldEnum | Prisma.StrategyPublicationScalarFieldEnum[];
};
export type StrategyPublicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    where?: Prisma.StrategyPublicationWhereInput;
    orderBy?: Prisma.StrategyPublicationOrderByWithRelationInput | Prisma.StrategyPublicationOrderByWithRelationInput[];
    cursor?: Prisma.StrategyPublicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyPublicationScalarFieldEnum | Prisma.StrategyPublicationScalarFieldEnum[];
};
export type StrategyPublicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyPublicationCreateInput, Prisma.StrategyPublicationUncheckedCreateInput>;
};
export type StrategyPublicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StrategyPublicationCreateManyInput | Prisma.StrategyPublicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategyPublicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    data: Prisma.StrategyPublicationCreateManyInput | Prisma.StrategyPublicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StrategyPublicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StrategyPublicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyPublicationUpdateInput, Prisma.StrategyPublicationUncheckedUpdateInput>;
    where: Prisma.StrategyPublicationWhereUniqueInput;
};
export type StrategyPublicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StrategyPublicationUpdateManyMutationInput, Prisma.StrategyPublicationUncheckedUpdateManyInput>;
    where?: Prisma.StrategyPublicationWhereInput;
    limit?: number;
};
export type StrategyPublicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyPublicationUpdateManyMutationInput, Prisma.StrategyPublicationUncheckedUpdateManyInput>;
    where?: Prisma.StrategyPublicationWhereInput;
    limit?: number;
    include?: Prisma.StrategyPublicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StrategyPublicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    where: Prisma.StrategyPublicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyPublicationCreateInput, Prisma.StrategyPublicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StrategyPublicationUpdateInput, Prisma.StrategyPublicationUncheckedUpdateInput>;
};
export type StrategyPublicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
    where: Prisma.StrategyPublicationWhereUniqueInput;
};
export type StrategyPublicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyPublicationWhereInput;
    limit?: number;
};
export type StrategyPublication$acknowledgmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
    where?: Prisma.StrategyAcknowledgmentWhereInput;
    orderBy?: Prisma.StrategyAcknowledgmentOrderByWithRelationInput | Prisma.StrategyAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyAcknowledgmentScalarFieldEnum | Prisma.StrategyAcknowledgmentScalarFieldEnum[];
};
export type StrategyPublicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyPublicationSelect<ExtArgs> | null;
    omit?: Prisma.StrategyPublicationOmit<ExtArgs> | null;
    include?: Prisma.StrategyPublicationInclude<ExtArgs> | null;
};
