import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StrategyAcknowledgmentModel = runtime.Types.Result.DefaultSelection<Prisma.$StrategyAcknowledgmentPayload>;
export type AggregateStrategyAcknowledgment = {
    _count: StrategyAcknowledgmentCountAggregateOutputType | null;
    _min: StrategyAcknowledgmentMinAggregateOutputType | null;
    _max: StrategyAcknowledgmentMaxAggregateOutputType | null;
};
export type StrategyAcknowledgmentMinAggregateOutputType = {
    id: string | null;
    publicationId: string | null;
    appUserId: string | null;
    acknowledgedAt: Date | null;
};
export type StrategyAcknowledgmentMaxAggregateOutputType = {
    id: string | null;
    publicationId: string | null;
    appUserId: string | null;
    acknowledgedAt: Date | null;
};
export type StrategyAcknowledgmentCountAggregateOutputType = {
    id: number;
    publicationId: number;
    appUserId: number;
    acknowledgedAt: number;
    _all: number;
};
export type StrategyAcknowledgmentMinAggregateInputType = {
    id?: true;
    publicationId?: true;
    appUserId?: true;
    acknowledgedAt?: true;
};
export type StrategyAcknowledgmentMaxAggregateInputType = {
    id?: true;
    publicationId?: true;
    appUserId?: true;
    acknowledgedAt?: true;
};
export type StrategyAcknowledgmentCountAggregateInputType = {
    id?: true;
    publicationId?: true;
    appUserId?: true;
    acknowledgedAt?: true;
    _all?: true;
};
export type StrategyAcknowledgmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyAcknowledgmentWhereInput;
    orderBy?: Prisma.StrategyAcknowledgmentOrderByWithRelationInput | Prisma.StrategyAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StrategyAcknowledgmentCountAggregateInputType;
    _min?: StrategyAcknowledgmentMinAggregateInputType;
    _max?: StrategyAcknowledgmentMaxAggregateInputType;
};
export type GetStrategyAcknowledgmentAggregateType<T extends StrategyAcknowledgmentAggregateArgs> = {
    [P in keyof T & keyof AggregateStrategyAcknowledgment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStrategyAcknowledgment[P]> : Prisma.GetScalarType<T[P], AggregateStrategyAcknowledgment[P]>;
};
export type StrategyAcknowledgmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyAcknowledgmentWhereInput;
    orderBy?: Prisma.StrategyAcknowledgmentOrderByWithAggregationInput | Prisma.StrategyAcknowledgmentOrderByWithAggregationInput[];
    by: Prisma.StrategyAcknowledgmentScalarFieldEnum[] | Prisma.StrategyAcknowledgmentScalarFieldEnum;
    having?: Prisma.StrategyAcknowledgmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StrategyAcknowledgmentCountAggregateInputType | true;
    _min?: StrategyAcknowledgmentMinAggregateInputType;
    _max?: StrategyAcknowledgmentMaxAggregateInputType;
};
export type StrategyAcknowledgmentGroupByOutputType = {
    id: string;
    publicationId: string;
    appUserId: string;
    acknowledgedAt: Date;
    _count: StrategyAcknowledgmentCountAggregateOutputType | null;
    _min: StrategyAcknowledgmentMinAggregateOutputType | null;
    _max: StrategyAcknowledgmentMaxAggregateOutputType | null;
};
export type GetStrategyAcknowledgmentGroupByPayload<T extends StrategyAcknowledgmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StrategyAcknowledgmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StrategyAcknowledgmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StrategyAcknowledgmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StrategyAcknowledgmentGroupByOutputType[P]>;
}>>;
export type StrategyAcknowledgmentWhereInput = {
    AND?: Prisma.StrategyAcknowledgmentWhereInput | Prisma.StrategyAcknowledgmentWhereInput[];
    OR?: Prisma.StrategyAcknowledgmentWhereInput[];
    NOT?: Prisma.StrategyAcknowledgmentWhereInput | Prisma.StrategyAcknowledgmentWhereInput[];
    id?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    publicationId?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    appUserId?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    acknowledgedAt?: Prisma.DateTimeFilter<"StrategyAcknowledgment"> | Date | string;
    publication?: Prisma.XOR<Prisma.StrategyPublicationScalarRelationFilter, Prisma.StrategyPublicationWhereInput>;
    appUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type StrategyAcknowledgmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    publicationId?: Prisma.SortOrder;
    appUserId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    publication?: Prisma.StrategyPublicationOrderByWithRelationInput;
    appUser?: Prisma.AppUserOrderByWithRelationInput;
};
export type StrategyAcknowledgmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    publicationId_appUserId?: Prisma.StrategyAcknowledgmentPublicationIdAppUserIdCompoundUniqueInput;
    AND?: Prisma.StrategyAcknowledgmentWhereInput | Prisma.StrategyAcknowledgmentWhereInput[];
    OR?: Prisma.StrategyAcknowledgmentWhereInput[];
    NOT?: Prisma.StrategyAcknowledgmentWhereInput | Prisma.StrategyAcknowledgmentWhereInput[];
    publicationId?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    appUserId?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    acknowledgedAt?: Prisma.DateTimeFilter<"StrategyAcknowledgment"> | Date | string;
    publication?: Prisma.XOR<Prisma.StrategyPublicationScalarRelationFilter, Prisma.StrategyPublicationWhereInput>;
    appUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "publicationId_appUserId">;
export type StrategyAcknowledgmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    publicationId?: Prisma.SortOrder;
    appUserId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    _count?: Prisma.StrategyAcknowledgmentCountOrderByAggregateInput;
    _max?: Prisma.StrategyAcknowledgmentMaxOrderByAggregateInput;
    _min?: Prisma.StrategyAcknowledgmentMinOrderByAggregateInput;
};
export type StrategyAcknowledgmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StrategyAcknowledgmentScalarWhereWithAggregatesInput | Prisma.StrategyAcknowledgmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StrategyAcknowledgmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StrategyAcknowledgmentScalarWhereWithAggregatesInput | Prisma.StrategyAcknowledgmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StrategyAcknowledgment"> | string;
    publicationId?: Prisma.UuidWithAggregatesFilter<"StrategyAcknowledgment"> | string;
    appUserId?: Prisma.UuidWithAggregatesFilter<"StrategyAcknowledgment"> | string;
    acknowledgedAt?: Prisma.DateTimeWithAggregatesFilter<"StrategyAcknowledgment"> | Date | string;
};
export type StrategyAcknowledgmentCreateInput = {
    id?: string;
    acknowledgedAt?: Date | string;
    publication: Prisma.StrategyPublicationCreateNestedOneWithoutAcknowledgmentsInput;
    appUser: Prisma.AppUserCreateNestedOneWithoutStrategyAcknowledgmentsInput;
};
export type StrategyAcknowledgmentUncheckedCreateInput = {
    id?: string;
    publicationId: string;
    appUserId: string;
    acknowledgedAt?: Date | string;
};
export type StrategyAcknowledgmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: Prisma.StrategyPublicationUpdateOneRequiredWithoutAcknowledgmentsNestedInput;
    appUser?: Prisma.AppUserUpdateOneRequiredWithoutStrategyAcknowledgmentsNestedInput;
};
export type StrategyAcknowledgmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    appUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyAcknowledgmentCreateManyInput = {
    id?: string;
    publicationId: string;
    appUserId: string;
    acknowledgedAt?: Date | string;
};
export type StrategyAcknowledgmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyAcknowledgmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    appUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyAcknowledgmentListRelationFilter = {
    every?: Prisma.StrategyAcknowledgmentWhereInput;
    some?: Prisma.StrategyAcknowledgmentWhereInput;
    none?: Prisma.StrategyAcknowledgmentWhereInput;
};
export type StrategyAcknowledgmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StrategyAcknowledgmentPublicationIdAppUserIdCompoundUniqueInput = {
    publicationId: string;
    appUserId: string;
};
export type StrategyAcknowledgmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicationId?: Prisma.SortOrder;
    appUserId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
};
export type StrategyAcknowledgmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicationId?: Prisma.SortOrder;
    appUserId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
};
export type StrategyAcknowledgmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicationId?: Prisma.SortOrder;
    appUserId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
};
export type StrategyAcknowledgmentCreateNestedManyWithoutAppUserInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput> | Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyAppUserInputEnvelope;
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
};
export type StrategyAcknowledgmentUncheckedCreateNestedManyWithoutAppUserInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput> | Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyAppUserInputEnvelope;
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
};
export type StrategyAcknowledgmentUpdateManyWithoutAppUserNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput> | Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput[];
    upsert?: Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutAppUserInput | Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutAppUserInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyAppUserInputEnvelope;
    set?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    update?: Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutAppUserInput | Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutAppUserInput[];
    updateMany?: Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutAppUserInput | Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutAppUserInput[];
    deleteMany?: Prisma.StrategyAcknowledgmentScalarWhereInput | Prisma.StrategyAcknowledgmentScalarWhereInput[];
};
export type StrategyAcknowledgmentUncheckedUpdateManyWithoutAppUserNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput> | Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput[];
    upsert?: Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutAppUserInput | Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutAppUserInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyAppUserInputEnvelope;
    set?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    update?: Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutAppUserInput | Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutAppUserInput[];
    updateMany?: Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutAppUserInput | Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutAppUserInput[];
    deleteMany?: Prisma.StrategyAcknowledgmentScalarWhereInput | Prisma.StrategyAcknowledgmentScalarWhereInput[];
};
export type StrategyAcknowledgmentCreateNestedManyWithoutPublicationInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput> | Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyPublicationInputEnvelope;
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
};
export type StrategyAcknowledgmentUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput> | Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyPublicationInputEnvelope;
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
};
export type StrategyAcknowledgmentUpdateManyWithoutPublicationNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput> | Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput[];
    upsert?: Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutPublicationInput | Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutPublicationInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyPublicationInputEnvelope;
    set?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    update?: Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutPublicationInput | Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutPublicationInput[];
    updateMany?: Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutPublicationInput | Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutPublicationInput[];
    deleteMany?: Prisma.StrategyAcknowledgmentScalarWhereInput | Prisma.StrategyAcknowledgmentScalarWhereInput[];
};
export type StrategyAcknowledgmentUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput> | Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput[] | Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput[];
    connectOrCreate?: Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput | Prisma.StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput[];
    upsert?: Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutPublicationInput | Prisma.StrategyAcknowledgmentUpsertWithWhereUniqueWithoutPublicationInput[];
    createMany?: Prisma.StrategyAcknowledgmentCreateManyPublicationInputEnvelope;
    set?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    disconnect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    delete?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    connect?: Prisma.StrategyAcknowledgmentWhereUniqueInput | Prisma.StrategyAcknowledgmentWhereUniqueInput[];
    update?: Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutPublicationInput | Prisma.StrategyAcknowledgmentUpdateWithWhereUniqueWithoutPublicationInput[];
    updateMany?: Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutPublicationInput | Prisma.StrategyAcknowledgmentUpdateManyWithWhereWithoutPublicationInput[];
    deleteMany?: Prisma.StrategyAcknowledgmentScalarWhereInput | Prisma.StrategyAcknowledgmentScalarWhereInput[];
};
export type StrategyAcknowledgmentCreateWithoutAppUserInput = {
    id?: string;
    acknowledgedAt?: Date | string;
    publication: Prisma.StrategyPublicationCreateNestedOneWithoutAcknowledgmentsInput;
};
export type StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput = {
    id?: string;
    publicationId: string;
    acknowledgedAt?: Date | string;
};
export type StrategyAcknowledgmentCreateOrConnectWithoutAppUserInput = {
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput>;
};
export type StrategyAcknowledgmentCreateManyAppUserInputEnvelope = {
    data: Prisma.StrategyAcknowledgmentCreateManyAppUserInput | Prisma.StrategyAcknowledgmentCreateManyAppUserInput[];
    skipDuplicates?: boolean;
};
export type StrategyAcknowledgmentUpsertWithWhereUniqueWithoutAppUserInput = {
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedUpdateWithoutAppUserInput>;
    create: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutAppUserInput>;
};
export type StrategyAcknowledgmentUpdateWithWhereUniqueWithoutAppUserInput = {
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateWithoutAppUserInput, Prisma.StrategyAcknowledgmentUncheckedUpdateWithoutAppUserInput>;
};
export type StrategyAcknowledgmentUpdateManyWithWhereWithoutAppUserInput = {
    where: Prisma.StrategyAcknowledgmentScalarWhereInput;
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateManyMutationInput, Prisma.StrategyAcknowledgmentUncheckedUpdateManyWithoutAppUserInput>;
};
export type StrategyAcknowledgmentScalarWhereInput = {
    AND?: Prisma.StrategyAcknowledgmentScalarWhereInput | Prisma.StrategyAcknowledgmentScalarWhereInput[];
    OR?: Prisma.StrategyAcknowledgmentScalarWhereInput[];
    NOT?: Prisma.StrategyAcknowledgmentScalarWhereInput | Prisma.StrategyAcknowledgmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    publicationId?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    appUserId?: Prisma.UuidFilter<"StrategyAcknowledgment"> | string;
    acknowledgedAt?: Prisma.DateTimeFilter<"StrategyAcknowledgment"> | Date | string;
};
export type StrategyAcknowledgmentCreateWithoutPublicationInput = {
    id?: string;
    acknowledgedAt?: Date | string;
    appUser: Prisma.AppUserCreateNestedOneWithoutStrategyAcknowledgmentsInput;
};
export type StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput = {
    id?: string;
    appUserId: string;
    acknowledgedAt?: Date | string;
};
export type StrategyAcknowledgmentCreateOrConnectWithoutPublicationInput = {
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput>;
};
export type StrategyAcknowledgmentCreateManyPublicationInputEnvelope = {
    data: Prisma.StrategyAcknowledgmentCreateManyPublicationInput | Prisma.StrategyAcknowledgmentCreateManyPublicationInput[];
    skipDuplicates?: boolean;
};
export type StrategyAcknowledgmentUpsertWithWhereUniqueWithoutPublicationInput = {
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedUpdateWithoutPublicationInput>;
    create: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedCreateWithoutPublicationInput>;
};
export type StrategyAcknowledgmentUpdateWithWhereUniqueWithoutPublicationInput = {
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateWithoutPublicationInput, Prisma.StrategyAcknowledgmentUncheckedUpdateWithoutPublicationInput>;
};
export type StrategyAcknowledgmentUpdateManyWithWhereWithoutPublicationInput = {
    where: Prisma.StrategyAcknowledgmentScalarWhereInput;
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateManyMutationInput, Prisma.StrategyAcknowledgmentUncheckedUpdateManyWithoutPublicationInput>;
};
export type StrategyAcknowledgmentCreateManyAppUserInput = {
    id?: string;
    publicationId: string;
    acknowledgedAt?: Date | string;
};
export type StrategyAcknowledgmentUpdateWithoutAppUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: Prisma.StrategyPublicationUpdateOneRequiredWithoutAcknowledgmentsNestedInput;
};
export type StrategyAcknowledgmentUncheckedUpdateWithoutAppUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyAcknowledgmentUncheckedUpdateManyWithoutAppUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyAcknowledgmentCreateManyPublicationInput = {
    id?: string;
    appUserId: string;
    acknowledgedAt?: Date | string;
};
export type StrategyAcknowledgmentUpdateWithoutPublicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appUser?: Prisma.AppUserUpdateOneRequiredWithoutStrategyAcknowledgmentsNestedInput;
};
export type StrategyAcknowledgmentUncheckedUpdateWithoutPublicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyAcknowledgmentUncheckedUpdateManyWithoutPublicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyAcknowledgmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicationId?: boolean;
    appUserId?: boolean;
    acknowledgedAt?: boolean;
    publication?: boolean | Prisma.StrategyPublicationDefaultArgs<ExtArgs>;
    appUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategyAcknowledgment"]>;
export type StrategyAcknowledgmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicationId?: boolean;
    appUserId?: boolean;
    acknowledgedAt?: boolean;
    publication?: boolean | Prisma.StrategyPublicationDefaultArgs<ExtArgs>;
    appUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategyAcknowledgment"]>;
export type StrategyAcknowledgmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicationId?: boolean;
    appUserId?: boolean;
    acknowledgedAt?: boolean;
    publication?: boolean | Prisma.StrategyPublicationDefaultArgs<ExtArgs>;
    appUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategyAcknowledgment"]>;
export type StrategyAcknowledgmentSelectScalar = {
    id?: boolean;
    publicationId?: boolean;
    appUserId?: boolean;
    acknowledgedAt?: boolean;
};
export type StrategyAcknowledgmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "publicationId" | "appUserId" | "acknowledgedAt", ExtArgs["result"]["strategyAcknowledgment"]>;
export type StrategyAcknowledgmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    publication?: boolean | Prisma.StrategyPublicationDefaultArgs<ExtArgs>;
    appUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type StrategyAcknowledgmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    publication?: boolean | Prisma.StrategyPublicationDefaultArgs<ExtArgs>;
    appUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type StrategyAcknowledgmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    publication?: boolean | Prisma.StrategyPublicationDefaultArgs<ExtArgs>;
    appUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $StrategyAcknowledgmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StrategyAcknowledgment";
    objects: {
        publication: Prisma.$StrategyPublicationPayload<ExtArgs>;
        appUser: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        publicationId: string;
        appUserId: string;
        acknowledgedAt: Date;
    }, ExtArgs["result"]["strategyAcknowledgment"]>;
    composites: {};
};
export type StrategyAcknowledgmentGetPayload<S extends boolean | null | undefined | StrategyAcknowledgmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload, S>;
export type StrategyAcknowledgmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StrategyAcknowledgmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StrategyAcknowledgmentCountAggregateInputType | true;
};
export interface StrategyAcknowledgmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StrategyAcknowledgment'];
        meta: {
            name: 'StrategyAcknowledgment';
        };
    };
    findUnique<T extends StrategyAcknowledgmentFindUniqueArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StrategyAcknowledgmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StrategyAcknowledgmentFindFirstArgs>(args?: Prisma.SelectSubset<T, StrategyAcknowledgmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StrategyAcknowledgmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StrategyAcknowledgmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StrategyAcknowledgmentFindManyArgs>(args?: Prisma.SelectSubset<T, StrategyAcknowledgmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StrategyAcknowledgmentCreateArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentCreateArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StrategyAcknowledgmentCreateManyArgs>(args?: Prisma.SelectSubset<T, StrategyAcknowledgmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StrategyAcknowledgmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StrategyAcknowledgmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StrategyAcknowledgmentDeleteArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentDeleteArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StrategyAcknowledgmentUpdateArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentUpdateArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StrategyAcknowledgmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StrategyAcknowledgmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StrategyAcknowledgmentUpdateManyArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StrategyAcknowledgmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StrategyAcknowledgmentUpsertArgs>(args: Prisma.SelectSubset<T, StrategyAcknowledgmentUpsertArgs<ExtArgs>>): Prisma.Prisma__StrategyAcknowledgmentClient<runtime.Types.Result.GetResult<Prisma.$StrategyAcknowledgmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StrategyAcknowledgmentCountArgs>(args?: Prisma.Subset<T, StrategyAcknowledgmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StrategyAcknowledgmentCountAggregateOutputType> : number>;
    aggregate<T extends StrategyAcknowledgmentAggregateArgs>(args: Prisma.Subset<T, StrategyAcknowledgmentAggregateArgs>): Prisma.PrismaPromise<GetStrategyAcknowledgmentAggregateType<T>>;
    groupBy<T extends StrategyAcknowledgmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StrategyAcknowledgmentGroupByArgs['orderBy'];
    } : {
        orderBy?: StrategyAcknowledgmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StrategyAcknowledgmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrategyAcknowledgmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StrategyAcknowledgmentFieldRefs;
}
export interface Prisma__StrategyAcknowledgmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    publication<T extends Prisma.StrategyPublicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategyPublicationDefaultArgs<ExtArgs>>): Prisma.Prisma__StrategyPublicationClient<runtime.Types.Result.GetResult<Prisma.$StrategyPublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    appUser<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StrategyAcknowledgmentFieldRefs {
    readonly id: Prisma.FieldRef<"StrategyAcknowledgment", 'String'>;
    readonly publicationId: Prisma.FieldRef<"StrategyAcknowledgment", 'String'>;
    readonly appUserId: Prisma.FieldRef<"StrategyAcknowledgment", 'String'>;
    readonly acknowledgedAt: Prisma.FieldRef<"StrategyAcknowledgment", 'DateTime'>;
}
export type StrategyAcknowledgmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
};
export type StrategyAcknowledgmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
};
export type StrategyAcknowledgmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StrategyAcknowledgmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StrategyAcknowledgmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StrategyAcknowledgmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateInput, Prisma.StrategyAcknowledgmentUncheckedCreateInput>;
};
export type StrategyAcknowledgmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StrategyAcknowledgmentCreateManyInput | Prisma.StrategyAcknowledgmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategyAcknowledgmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    data: Prisma.StrategyAcknowledgmentCreateManyInput | Prisma.StrategyAcknowledgmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StrategyAcknowledgmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StrategyAcknowledgmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateInput, Prisma.StrategyAcknowledgmentUncheckedUpdateInput>;
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
};
export type StrategyAcknowledgmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateManyMutationInput, Prisma.StrategyAcknowledgmentUncheckedUpdateManyInput>;
    where?: Prisma.StrategyAcknowledgmentWhereInput;
    limit?: number;
};
export type StrategyAcknowledgmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateManyMutationInput, Prisma.StrategyAcknowledgmentUncheckedUpdateManyInput>;
    where?: Prisma.StrategyAcknowledgmentWhereInput;
    limit?: number;
    include?: Prisma.StrategyAcknowledgmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StrategyAcknowledgmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyAcknowledgmentCreateInput, Prisma.StrategyAcknowledgmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StrategyAcknowledgmentUpdateInput, Prisma.StrategyAcknowledgmentUncheckedUpdateInput>;
};
export type StrategyAcknowledgmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
    where: Prisma.StrategyAcknowledgmentWhereUniqueInput;
};
export type StrategyAcknowledgmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyAcknowledgmentWhereInput;
    limit?: number;
};
export type StrategyAcknowledgmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.StrategyAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.StrategyAcknowledgmentInclude<ExtArgs> | null;
};
