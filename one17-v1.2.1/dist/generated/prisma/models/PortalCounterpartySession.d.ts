import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortalCounterpartySessionModel = runtime.Types.Result.DefaultSelection<Prisma.$PortalCounterpartySessionPayload>;
export type AggregatePortalCounterpartySession = {
    _count: PortalCounterpartySessionCountAggregateOutputType | null;
    _min: PortalCounterpartySessionMinAggregateOutputType | null;
    _max: PortalCounterpartySessionMaxAggregateOutputType | null;
};
export type PortalCounterpartySessionMinAggregateOutputType = {
    id: string | null;
    portalUserId: string | null;
    tokenHash: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
};
export type PortalCounterpartySessionMaxAggregateOutputType = {
    id: string | null;
    portalUserId: string | null;
    tokenHash: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
};
export type PortalCounterpartySessionCountAggregateOutputType = {
    id: number;
    portalUserId: number;
    tokenHash: number;
    createdAt: number;
    expiresAt: number;
    revokedAt: number;
    ipAddress: number;
    _all: number;
};
export type PortalCounterpartySessionMinAggregateInputType = {
    id?: true;
    portalUserId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
};
export type PortalCounterpartySessionMaxAggregateInputType = {
    id?: true;
    portalUserId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
};
export type PortalCounterpartySessionCountAggregateInputType = {
    id?: true;
    portalUserId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    _all?: true;
};
export type PortalCounterpartySessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalCounterpartySessionWhereInput;
    orderBy?: Prisma.PortalCounterpartySessionOrderByWithRelationInput | Prisma.PortalCounterpartySessionOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartySessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortalCounterpartySessionCountAggregateInputType;
    _min?: PortalCounterpartySessionMinAggregateInputType;
    _max?: PortalCounterpartySessionMaxAggregateInputType;
};
export type GetPortalCounterpartySessionAggregateType<T extends PortalCounterpartySessionAggregateArgs> = {
    [P in keyof T & keyof AggregatePortalCounterpartySession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortalCounterpartySession[P]> : Prisma.GetScalarType<T[P], AggregatePortalCounterpartySession[P]>;
};
export type PortalCounterpartySessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalCounterpartySessionWhereInput;
    orderBy?: Prisma.PortalCounterpartySessionOrderByWithAggregationInput | Prisma.PortalCounterpartySessionOrderByWithAggregationInput[];
    by: Prisma.PortalCounterpartySessionScalarFieldEnum[] | Prisma.PortalCounterpartySessionScalarFieldEnum;
    having?: Prisma.PortalCounterpartySessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortalCounterpartySessionCountAggregateInputType | true;
    _min?: PortalCounterpartySessionMinAggregateInputType;
    _max?: PortalCounterpartySessionMaxAggregateInputType;
};
export type PortalCounterpartySessionGroupByOutputType = {
    id: string;
    portalUserId: string;
    tokenHash: string;
    createdAt: Date;
    expiresAt: Date;
    revokedAt: Date | null;
    ipAddress: string | null;
    _count: PortalCounterpartySessionCountAggregateOutputType | null;
    _min: PortalCounterpartySessionMinAggregateOutputType | null;
    _max: PortalCounterpartySessionMaxAggregateOutputType | null;
};
export type GetPortalCounterpartySessionGroupByPayload<T extends PortalCounterpartySessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortalCounterpartySessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortalCounterpartySessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortalCounterpartySessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortalCounterpartySessionGroupByOutputType[P]>;
}>>;
export type PortalCounterpartySessionWhereInput = {
    AND?: Prisma.PortalCounterpartySessionWhereInput | Prisma.PortalCounterpartySessionWhereInput[];
    OR?: Prisma.PortalCounterpartySessionWhereInput[];
    NOT?: Prisma.PortalCounterpartySessionWhereInput | Prisma.PortalCounterpartySessionWhereInput[];
    id?: Prisma.UuidFilter<"PortalCounterpartySession"> | string;
    portalUserId?: Prisma.UuidFilter<"PortalCounterpartySession"> | string;
    tokenHash?: Prisma.StringFilter<"PortalCounterpartySession"> | string;
    createdAt?: Prisma.DateTimeFilter<"PortalCounterpartySession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"PortalCounterpartySession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PortalCounterpartySession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"PortalCounterpartySession"> | string | null;
    portalUser?: Prisma.XOR<Prisma.PortalCounterpartyUserScalarRelationFilter, Prisma.PortalCounterpartyUserWhereInput>;
};
export type PortalCounterpartySessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    portalUser?: Prisma.PortalCounterpartyUserOrderByWithRelationInput;
};
export type PortalCounterpartySessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.PortalCounterpartySessionWhereInput | Prisma.PortalCounterpartySessionWhereInput[];
    OR?: Prisma.PortalCounterpartySessionWhereInput[];
    NOT?: Prisma.PortalCounterpartySessionWhereInput | Prisma.PortalCounterpartySessionWhereInput[];
    portalUserId?: Prisma.UuidFilter<"PortalCounterpartySession"> | string;
    createdAt?: Prisma.DateTimeFilter<"PortalCounterpartySession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"PortalCounterpartySession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PortalCounterpartySession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"PortalCounterpartySession"> | string | null;
    portalUser?: Prisma.XOR<Prisma.PortalCounterpartyUserScalarRelationFilter, Prisma.PortalCounterpartyUserWhereInput>;
}, "id" | "tokenHash">;
export type PortalCounterpartySessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PortalCounterpartySessionCountOrderByAggregateInput;
    _max?: Prisma.PortalCounterpartySessionMaxOrderByAggregateInput;
    _min?: Prisma.PortalCounterpartySessionMinOrderByAggregateInput;
};
export type PortalCounterpartySessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortalCounterpartySessionScalarWhereWithAggregatesInput | Prisma.PortalCounterpartySessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortalCounterpartySessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortalCounterpartySessionScalarWhereWithAggregatesInput | Prisma.PortalCounterpartySessionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PortalCounterpartySession"> | string;
    portalUserId?: Prisma.UuidWithAggregatesFilter<"PortalCounterpartySession"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"PortalCounterpartySession"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PortalCounterpartySession"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"PortalCounterpartySession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PortalCounterpartySession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"PortalCounterpartySession"> | string | null;
};
export type PortalCounterpartySessionCreateInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    portalUser: Prisma.PortalCounterpartyUserCreateNestedOneWithoutSessionsInput;
};
export type PortalCounterpartySessionUncheckedCreateInput = {
    id?: string;
    portalUserId: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalCounterpartySessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portalUser?: Prisma.PortalCounterpartyUserUpdateOneRequiredWithoutSessionsNestedInput;
};
export type PortalCounterpartySessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    portalUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalCounterpartySessionCreateManyInput = {
    id?: string;
    portalUserId: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalCounterpartySessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalCounterpartySessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    portalUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalCounterpartySessionListRelationFilter = {
    every?: Prisma.PortalCounterpartySessionWhereInput;
    some?: Prisma.PortalCounterpartySessionWhereInput;
    none?: Prisma.PortalCounterpartySessionWhereInput;
};
export type PortalCounterpartySessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortalCounterpartySessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PortalCounterpartySessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PortalCounterpartySessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PortalCounterpartySessionCreateNestedManyWithoutPortalUserInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput[] | Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput[];
    createMany?: Prisma.PortalCounterpartySessionCreateManyPortalUserInputEnvelope;
    connect?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
};
export type PortalCounterpartySessionUncheckedCreateNestedManyWithoutPortalUserInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput[] | Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput[];
    createMany?: Prisma.PortalCounterpartySessionCreateManyPortalUserInputEnvelope;
    connect?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
};
export type PortalCounterpartySessionUpdateManyWithoutPortalUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput[] | Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput[];
    upsert?: Prisma.PortalCounterpartySessionUpsertWithWhereUniqueWithoutPortalUserInput | Prisma.PortalCounterpartySessionUpsertWithWhereUniqueWithoutPortalUserInput[];
    createMany?: Prisma.PortalCounterpartySessionCreateManyPortalUserInputEnvelope;
    set?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    disconnect?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    delete?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    connect?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    update?: Prisma.PortalCounterpartySessionUpdateWithWhereUniqueWithoutPortalUserInput | Prisma.PortalCounterpartySessionUpdateWithWhereUniqueWithoutPortalUserInput[];
    updateMany?: Prisma.PortalCounterpartySessionUpdateManyWithWhereWithoutPortalUserInput | Prisma.PortalCounterpartySessionUpdateManyWithWhereWithoutPortalUserInput[];
    deleteMany?: Prisma.PortalCounterpartySessionScalarWhereInput | Prisma.PortalCounterpartySessionScalarWhereInput[];
};
export type PortalCounterpartySessionUncheckedUpdateManyWithoutPortalUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput[] | Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput[];
    upsert?: Prisma.PortalCounterpartySessionUpsertWithWhereUniqueWithoutPortalUserInput | Prisma.PortalCounterpartySessionUpsertWithWhereUniqueWithoutPortalUserInput[];
    createMany?: Prisma.PortalCounterpartySessionCreateManyPortalUserInputEnvelope;
    set?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    disconnect?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    delete?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    connect?: Prisma.PortalCounterpartySessionWhereUniqueInput | Prisma.PortalCounterpartySessionWhereUniqueInput[];
    update?: Prisma.PortalCounterpartySessionUpdateWithWhereUniqueWithoutPortalUserInput | Prisma.PortalCounterpartySessionUpdateWithWhereUniqueWithoutPortalUserInput[];
    updateMany?: Prisma.PortalCounterpartySessionUpdateManyWithWhereWithoutPortalUserInput | Prisma.PortalCounterpartySessionUpdateManyWithWhereWithoutPortalUserInput[];
    deleteMany?: Prisma.PortalCounterpartySessionScalarWhereInput | Prisma.PortalCounterpartySessionScalarWhereInput[];
};
export type PortalCounterpartySessionCreateWithoutPortalUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalCounterpartySessionCreateOrConnectWithoutPortalUserInput = {
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput>;
};
export type PortalCounterpartySessionCreateManyPortalUserInputEnvelope = {
    data: Prisma.PortalCounterpartySessionCreateManyPortalUserInput | Prisma.PortalCounterpartySessionCreateManyPortalUserInput[];
    skipDuplicates?: boolean;
};
export type PortalCounterpartySessionUpsertWithWhereUniqueWithoutPortalUserInput = {
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortalCounterpartySessionUpdateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedUpdateWithoutPortalUserInput>;
    create: Prisma.XOR<Prisma.PortalCounterpartySessionCreateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedCreateWithoutPortalUserInput>;
};
export type PortalCounterpartySessionUpdateWithWhereUniqueWithoutPortalUserInput = {
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortalCounterpartySessionUpdateWithoutPortalUserInput, Prisma.PortalCounterpartySessionUncheckedUpdateWithoutPortalUserInput>;
};
export type PortalCounterpartySessionUpdateManyWithWhereWithoutPortalUserInput = {
    where: Prisma.PortalCounterpartySessionScalarWhereInput;
    data: Prisma.XOR<Prisma.PortalCounterpartySessionUpdateManyMutationInput, Prisma.PortalCounterpartySessionUncheckedUpdateManyWithoutPortalUserInput>;
};
export type PortalCounterpartySessionScalarWhereInput = {
    AND?: Prisma.PortalCounterpartySessionScalarWhereInput | Prisma.PortalCounterpartySessionScalarWhereInput[];
    OR?: Prisma.PortalCounterpartySessionScalarWhereInput[];
    NOT?: Prisma.PortalCounterpartySessionScalarWhereInput | Prisma.PortalCounterpartySessionScalarWhereInput[];
    id?: Prisma.UuidFilter<"PortalCounterpartySession"> | string;
    portalUserId?: Prisma.UuidFilter<"PortalCounterpartySession"> | string;
    tokenHash?: Prisma.StringFilter<"PortalCounterpartySession"> | string;
    createdAt?: Prisma.DateTimeFilter<"PortalCounterpartySession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"PortalCounterpartySession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PortalCounterpartySession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"PortalCounterpartySession"> | string | null;
};
export type PortalCounterpartySessionCreateManyPortalUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalCounterpartySessionUpdateWithoutPortalUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalCounterpartySessionUncheckedUpdateWithoutPortalUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalCounterpartySessionUncheckedUpdateManyWithoutPortalUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalCounterpartySessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    portalUser?: boolean | Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalCounterpartySession"]>;
export type PortalCounterpartySessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    portalUser?: boolean | Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalCounterpartySession"]>;
export type PortalCounterpartySessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    portalUser?: boolean | Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalCounterpartySession"]>;
export type PortalCounterpartySessionSelectScalar = {
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
};
export type PortalCounterpartySessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "portalUserId" | "tokenHash" | "createdAt" | "expiresAt" | "revokedAt" | "ipAddress", ExtArgs["result"]["portalCounterpartySession"]>;
export type PortalCounterpartySessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portalUser?: boolean | Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs>;
};
export type PortalCounterpartySessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portalUser?: boolean | Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs>;
};
export type PortalCounterpartySessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portalUser?: boolean | Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs>;
};
export type $PortalCounterpartySessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortalCounterpartySession";
    objects: {
        portalUser: Prisma.$PortalCounterpartyUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        portalUserId: string;
        tokenHash: string;
        createdAt: Date;
        expiresAt: Date;
        revokedAt: Date | null;
        ipAddress: string | null;
    }, ExtArgs["result"]["portalCounterpartySession"]>;
    composites: {};
};
export type PortalCounterpartySessionGetPayload<S extends boolean | null | undefined | PortalCounterpartySessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload, S>;
export type PortalCounterpartySessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortalCounterpartySessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortalCounterpartySessionCountAggregateInputType | true;
};
export interface PortalCounterpartySessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortalCounterpartySession'];
        meta: {
            name: 'PortalCounterpartySession';
        };
    };
    findUnique<T extends PortalCounterpartySessionFindUniqueArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortalCounterpartySessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortalCounterpartySessionFindFirstArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartySessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortalCounterpartySessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartySessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortalCounterpartySessionFindManyArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartySessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortalCounterpartySessionCreateArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionCreateArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortalCounterpartySessionCreateManyArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartySessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortalCounterpartySessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartySessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortalCounterpartySessionDeleteArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionDeleteArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortalCounterpartySessionUpdateArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionUpdateArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortalCounterpartySessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartySessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortalCounterpartySessionUpdateManyArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortalCounterpartySessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortalCounterpartySessionUpsertArgs>(args: Prisma.SelectSubset<T, PortalCounterpartySessionUpsertArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartySessionClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortalCounterpartySessionCountArgs>(args?: Prisma.Subset<T, PortalCounterpartySessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortalCounterpartySessionCountAggregateOutputType> : number>;
    aggregate<T extends PortalCounterpartySessionAggregateArgs>(args: Prisma.Subset<T, PortalCounterpartySessionAggregateArgs>): Prisma.PrismaPromise<GetPortalCounterpartySessionAggregateType<T>>;
    groupBy<T extends PortalCounterpartySessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortalCounterpartySessionGroupByArgs['orderBy'];
    } : {
        orderBy?: PortalCounterpartySessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortalCounterpartySessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalCounterpartySessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortalCounterpartySessionFieldRefs;
}
export interface Prisma__PortalCounterpartySessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    portalUser<T extends Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortalCounterpartyUserDefaultArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortalCounterpartySessionFieldRefs {
    readonly id: Prisma.FieldRef<"PortalCounterpartySession", 'String'>;
    readonly portalUserId: Prisma.FieldRef<"PortalCounterpartySession", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"PortalCounterpartySession", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PortalCounterpartySession", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"PortalCounterpartySession", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"PortalCounterpartySession", 'DateTime'>;
    readonly ipAddress: Prisma.FieldRef<"PortalCounterpartySession", 'String'>;
}
export type PortalCounterpartySessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
};
export type PortalCounterpartySessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
};
export type PortalCounterpartySessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    where?: Prisma.PortalCounterpartySessionWhereInput;
    orderBy?: Prisma.PortalCounterpartySessionOrderByWithRelationInput | Prisma.PortalCounterpartySessionOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartySessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalCounterpartySessionScalarFieldEnum | Prisma.PortalCounterpartySessionScalarFieldEnum[];
};
export type PortalCounterpartySessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    where?: Prisma.PortalCounterpartySessionWhereInput;
    orderBy?: Prisma.PortalCounterpartySessionOrderByWithRelationInput | Prisma.PortalCounterpartySessionOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartySessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalCounterpartySessionScalarFieldEnum | Prisma.PortalCounterpartySessionScalarFieldEnum[];
};
export type PortalCounterpartySessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    where?: Prisma.PortalCounterpartySessionWhereInput;
    orderBy?: Prisma.PortalCounterpartySessionOrderByWithRelationInput | Prisma.PortalCounterpartySessionOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartySessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalCounterpartySessionScalarFieldEnum | Prisma.PortalCounterpartySessionScalarFieldEnum[];
};
export type PortalCounterpartySessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalCounterpartySessionCreateInput, Prisma.PortalCounterpartySessionUncheckedCreateInput>;
};
export type PortalCounterpartySessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortalCounterpartySessionCreateManyInput | Prisma.PortalCounterpartySessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortalCounterpartySessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    data: Prisma.PortalCounterpartySessionCreateManyInput | Prisma.PortalCounterpartySessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortalCounterpartySessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortalCounterpartySessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalCounterpartySessionUpdateInput, Prisma.PortalCounterpartySessionUncheckedUpdateInput>;
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
};
export type PortalCounterpartySessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortalCounterpartySessionUpdateManyMutationInput, Prisma.PortalCounterpartySessionUncheckedUpdateManyInput>;
    where?: Prisma.PortalCounterpartySessionWhereInput;
    limit?: number;
};
export type PortalCounterpartySessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalCounterpartySessionUpdateManyMutationInput, Prisma.PortalCounterpartySessionUncheckedUpdateManyInput>;
    where?: Prisma.PortalCounterpartySessionWhereInput;
    limit?: number;
    include?: Prisma.PortalCounterpartySessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortalCounterpartySessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalCounterpartySessionCreateInput, Prisma.PortalCounterpartySessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortalCounterpartySessionUpdateInput, Prisma.PortalCounterpartySessionUncheckedUpdateInput>;
};
export type PortalCounterpartySessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartySessionWhereUniqueInput;
};
export type PortalCounterpartySessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalCounterpartySessionWhereInput;
    limit?: number;
};
export type PortalCounterpartySessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartySessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartySessionOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartySessionInclude<ExtArgs> | null;
};
