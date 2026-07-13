import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExternalCalendarConnectionModel = runtime.Types.Result.DefaultSelection<Prisma.$ExternalCalendarConnectionPayload>;
export type AggregateExternalCalendarConnection = {
    _count: ExternalCalendarConnectionCountAggregateOutputType | null;
    _min: ExternalCalendarConnectionMinAggregateOutputType | null;
    _max: ExternalCalendarConnectionMaxAggregateOutputType | null;
};
export type ExternalCalendarConnectionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    providerId: string | null;
    accessTokenEncrypted: string | null;
    refreshTokenEncrypted: string | null;
    scope: string | null;
    expiresAt: Date | null;
    connectedAt: Date | null;
    revokedAt: Date | null;
    lastSyncedAt: Date | null;
};
export type ExternalCalendarConnectionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    providerId: string | null;
    accessTokenEncrypted: string | null;
    refreshTokenEncrypted: string | null;
    scope: string | null;
    expiresAt: Date | null;
    connectedAt: Date | null;
    revokedAt: Date | null;
    lastSyncedAt: Date | null;
};
export type ExternalCalendarConnectionCountAggregateOutputType = {
    id: number;
    userId: number;
    providerId: number;
    accessTokenEncrypted: number;
    refreshTokenEncrypted: number;
    scope: number;
    expiresAt: number;
    connectedAt: number;
    revokedAt: number;
    lastSyncedAt: number;
    _all: number;
};
export type ExternalCalendarConnectionMinAggregateInputType = {
    id?: true;
    userId?: true;
    providerId?: true;
    accessTokenEncrypted?: true;
    refreshTokenEncrypted?: true;
    scope?: true;
    expiresAt?: true;
    connectedAt?: true;
    revokedAt?: true;
    lastSyncedAt?: true;
};
export type ExternalCalendarConnectionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    providerId?: true;
    accessTokenEncrypted?: true;
    refreshTokenEncrypted?: true;
    scope?: true;
    expiresAt?: true;
    connectedAt?: true;
    revokedAt?: true;
    lastSyncedAt?: true;
};
export type ExternalCalendarConnectionCountAggregateInputType = {
    id?: true;
    userId?: true;
    providerId?: true;
    accessTokenEncrypted?: true;
    refreshTokenEncrypted?: true;
    scope?: true;
    expiresAt?: true;
    connectedAt?: true;
    revokedAt?: true;
    lastSyncedAt?: true;
    _all?: true;
};
export type ExternalCalendarConnectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    orderBy?: Prisma.ExternalCalendarConnectionOrderByWithRelationInput | Prisma.ExternalCalendarConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExternalCalendarConnectionCountAggregateInputType;
    _min?: ExternalCalendarConnectionMinAggregateInputType;
    _max?: ExternalCalendarConnectionMaxAggregateInputType;
};
export type GetExternalCalendarConnectionAggregateType<T extends ExternalCalendarConnectionAggregateArgs> = {
    [P in keyof T & keyof AggregateExternalCalendarConnection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExternalCalendarConnection[P]> : Prisma.GetScalarType<T[P], AggregateExternalCalendarConnection[P]>;
};
export type ExternalCalendarConnectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    orderBy?: Prisma.ExternalCalendarConnectionOrderByWithAggregationInput | Prisma.ExternalCalendarConnectionOrderByWithAggregationInput[];
    by: Prisma.ExternalCalendarConnectionScalarFieldEnum[] | Prisma.ExternalCalendarConnectionScalarFieldEnum;
    having?: Prisma.ExternalCalendarConnectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExternalCalendarConnectionCountAggregateInputType | true;
    _min?: ExternalCalendarConnectionMinAggregateInputType;
    _max?: ExternalCalendarConnectionMaxAggregateInputType;
};
export type ExternalCalendarConnectionGroupByOutputType = {
    id: string;
    userId: string;
    providerId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted: string | null;
    scope: string;
    expiresAt: Date | null;
    connectedAt: Date;
    revokedAt: Date | null;
    lastSyncedAt: Date | null;
    _count: ExternalCalendarConnectionCountAggregateOutputType | null;
    _min: ExternalCalendarConnectionMinAggregateOutputType | null;
    _max: ExternalCalendarConnectionMaxAggregateOutputType | null;
};
export type GetExternalCalendarConnectionGroupByPayload<T extends ExternalCalendarConnectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExternalCalendarConnectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExternalCalendarConnectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExternalCalendarConnectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExternalCalendarConnectionGroupByOutputType[P]>;
}>>;
export type ExternalCalendarConnectionWhereInput = {
    AND?: Prisma.ExternalCalendarConnectionWhereInput | Prisma.ExternalCalendarConnectionWhereInput[];
    OR?: Prisma.ExternalCalendarConnectionWhereInput[];
    NOT?: Prisma.ExternalCalendarConnectionWhereInput | Prisma.ExternalCalendarConnectionWhereInput[];
    id?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    userId?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    providerId?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    accessTokenEncrypted?: Prisma.StringFilter<"ExternalCalendarConnection"> | string;
    refreshTokenEncrypted?: Prisma.StringNullableFilter<"ExternalCalendarConnection"> | string | null;
    scope?: Prisma.StringFilter<"ExternalCalendarConnection"> | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    connectedAt?: Prisma.DateTimeFilter<"ExternalCalendarConnection"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    lastSyncedAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    provider?: Prisma.XOR<Prisma.CalendarGatewayProviderScalarRelationFilter, Prisma.CalendarGatewayProviderWhereInput>;
};
export type ExternalCalendarConnectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    accessTokenEncrypted?: Prisma.SortOrder;
    refreshTokenEncrypted?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    connectedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.AppUserOrderByWithRelationInput;
    provider?: Prisma.CalendarGatewayProviderOrderByWithRelationInput;
};
export type ExternalCalendarConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_providerId?: Prisma.ExternalCalendarConnectionUserIdProviderIdCompoundUniqueInput;
    AND?: Prisma.ExternalCalendarConnectionWhereInput | Prisma.ExternalCalendarConnectionWhereInput[];
    OR?: Prisma.ExternalCalendarConnectionWhereInput[];
    NOT?: Prisma.ExternalCalendarConnectionWhereInput | Prisma.ExternalCalendarConnectionWhereInput[];
    userId?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    providerId?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    accessTokenEncrypted?: Prisma.StringFilter<"ExternalCalendarConnection"> | string;
    refreshTokenEncrypted?: Prisma.StringNullableFilter<"ExternalCalendarConnection"> | string | null;
    scope?: Prisma.StringFilter<"ExternalCalendarConnection"> | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    connectedAt?: Prisma.DateTimeFilter<"ExternalCalendarConnection"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    lastSyncedAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    provider?: Prisma.XOR<Prisma.CalendarGatewayProviderScalarRelationFilter, Prisma.CalendarGatewayProviderWhereInput>;
}, "id" | "userId_providerId">;
export type ExternalCalendarConnectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    accessTokenEncrypted?: Prisma.SortOrder;
    refreshTokenEncrypted?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    connectedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ExternalCalendarConnectionCountOrderByAggregateInput;
    _max?: Prisma.ExternalCalendarConnectionMaxOrderByAggregateInput;
    _min?: Prisma.ExternalCalendarConnectionMinOrderByAggregateInput;
};
export type ExternalCalendarConnectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExternalCalendarConnectionScalarWhereWithAggregatesInput | Prisma.ExternalCalendarConnectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExternalCalendarConnectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExternalCalendarConnectionScalarWhereWithAggregatesInput | Prisma.ExternalCalendarConnectionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ExternalCalendarConnection"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"ExternalCalendarConnection"> | string;
    providerId?: Prisma.UuidWithAggregatesFilter<"ExternalCalendarConnection"> | string;
    accessTokenEncrypted?: Prisma.StringWithAggregatesFilter<"ExternalCalendarConnection"> | string;
    refreshTokenEncrypted?: Prisma.StringNullableWithAggregatesFilter<"ExternalCalendarConnection"> | string | null;
    scope?: Prisma.StringWithAggregatesFilter<"ExternalCalendarConnection"> | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ExternalCalendarConnection"> | Date | string | null;
    connectedAt?: Prisma.DateTimeWithAggregatesFilter<"ExternalCalendarConnection"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ExternalCalendarConnection"> | Date | string | null;
    lastSyncedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ExternalCalendarConnection"> | Date | string | null;
};
export type ExternalCalendarConnectionCreateInput = {
    id?: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
    user: Prisma.AppUserCreateNestedOneWithoutExternalCalendarConnectionsInput;
    provider: Prisma.CalendarGatewayProviderCreateNestedOneWithoutConnectionsInput;
};
export type ExternalCalendarConnectionUncheckedCreateInput = {
    id?: string;
    userId: string;
    providerId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
};
export type ExternalCalendarConnectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.AppUserUpdateOneRequiredWithoutExternalCalendarConnectionsNestedInput;
    provider?: Prisma.CalendarGatewayProviderUpdateOneRequiredWithoutConnectionsNestedInput;
};
export type ExternalCalendarConnectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExternalCalendarConnectionCreateManyInput = {
    id?: string;
    userId: string;
    providerId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
};
export type ExternalCalendarConnectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExternalCalendarConnectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExternalCalendarConnectionListRelationFilter = {
    every?: Prisma.ExternalCalendarConnectionWhereInput;
    some?: Prisma.ExternalCalendarConnectionWhereInput;
    none?: Prisma.ExternalCalendarConnectionWhereInput;
};
export type ExternalCalendarConnectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExternalCalendarConnectionUserIdProviderIdCompoundUniqueInput = {
    userId: string;
    providerId: string;
};
export type ExternalCalendarConnectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    accessTokenEncrypted?: Prisma.SortOrder;
    refreshTokenEncrypted?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    connectedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
};
export type ExternalCalendarConnectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    accessTokenEncrypted?: Prisma.SortOrder;
    refreshTokenEncrypted?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    connectedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
};
export type ExternalCalendarConnectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    accessTokenEncrypted?: Prisma.SortOrder;
    refreshTokenEncrypted?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    connectedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    lastSyncedAt?: Prisma.SortOrder;
};
export type ExternalCalendarConnectionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput> | Prisma.ExternalCalendarConnectionCreateWithoutUserInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyUserInputEnvelope;
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
};
export type ExternalCalendarConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput> | Prisma.ExternalCalendarConnectionCreateWithoutUserInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyUserInputEnvelope;
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
};
export type ExternalCalendarConnectionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput> | Prisma.ExternalCalendarConnectionCreateWithoutUserInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutUserInput | Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyUserInputEnvelope;
    set?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    disconnect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    delete?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    update?: Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutUserInput | Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutUserInput | Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExternalCalendarConnectionScalarWhereInput | Prisma.ExternalCalendarConnectionScalarWhereInput[];
};
export type ExternalCalendarConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput> | Prisma.ExternalCalendarConnectionCreateWithoutUserInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutUserInput | Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyUserInputEnvelope;
    set?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    disconnect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    delete?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    update?: Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutUserInput | Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutUserInput | Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExternalCalendarConnectionScalarWhereInput | Prisma.ExternalCalendarConnectionScalarWhereInput[];
};
export type ExternalCalendarConnectionCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput> | Prisma.ExternalCalendarConnectionCreateWithoutProviderInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyProviderInputEnvelope;
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
};
export type ExternalCalendarConnectionUncheckedCreateNestedManyWithoutProviderInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput> | Prisma.ExternalCalendarConnectionCreateWithoutProviderInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyProviderInputEnvelope;
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
};
export type ExternalCalendarConnectionUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput> | Prisma.ExternalCalendarConnectionCreateWithoutProviderInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutProviderInput | Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyProviderInputEnvelope;
    set?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    disconnect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    delete?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    update?: Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutProviderInput | Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutProviderInput | Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.ExternalCalendarConnectionScalarWhereInput | Prisma.ExternalCalendarConnectionScalarWhereInput[];
};
export type ExternalCalendarConnectionUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput> | Prisma.ExternalCalendarConnectionCreateWithoutProviderInput[] | Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput | Prisma.ExternalCalendarConnectionCreateOrConnectWithoutProviderInput[];
    upsert?: Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutProviderInput | Prisma.ExternalCalendarConnectionUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: Prisma.ExternalCalendarConnectionCreateManyProviderInputEnvelope;
    set?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    disconnect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    delete?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    connect?: Prisma.ExternalCalendarConnectionWhereUniqueInput | Prisma.ExternalCalendarConnectionWhereUniqueInput[];
    update?: Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutProviderInput | Prisma.ExternalCalendarConnectionUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutProviderInput | Prisma.ExternalCalendarConnectionUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: Prisma.ExternalCalendarConnectionScalarWhereInput | Prisma.ExternalCalendarConnectionScalarWhereInput[];
};
export type ExternalCalendarConnectionCreateWithoutUserInput = {
    id?: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
    provider: Prisma.CalendarGatewayProviderCreateNestedOneWithoutConnectionsInput;
};
export type ExternalCalendarConnectionUncheckedCreateWithoutUserInput = {
    id?: string;
    providerId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
};
export type ExternalCalendarConnectionCreateOrConnectWithoutUserInput = {
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput>;
};
export type ExternalCalendarConnectionCreateManyUserInputEnvelope = {
    data: Prisma.ExternalCalendarConnectionCreateManyUserInput | Prisma.ExternalCalendarConnectionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ExternalCalendarConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutUserInput>;
};
export type ExternalCalendarConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateWithoutUserInput, Prisma.ExternalCalendarConnectionUncheckedUpdateWithoutUserInput>;
};
export type ExternalCalendarConnectionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ExternalCalendarConnectionScalarWhereInput;
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateManyMutationInput, Prisma.ExternalCalendarConnectionUncheckedUpdateManyWithoutUserInput>;
};
export type ExternalCalendarConnectionScalarWhereInput = {
    AND?: Prisma.ExternalCalendarConnectionScalarWhereInput | Prisma.ExternalCalendarConnectionScalarWhereInput[];
    OR?: Prisma.ExternalCalendarConnectionScalarWhereInput[];
    NOT?: Prisma.ExternalCalendarConnectionScalarWhereInput | Prisma.ExternalCalendarConnectionScalarWhereInput[];
    id?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    userId?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    providerId?: Prisma.UuidFilter<"ExternalCalendarConnection"> | string;
    accessTokenEncrypted?: Prisma.StringFilter<"ExternalCalendarConnection"> | string;
    refreshTokenEncrypted?: Prisma.StringNullableFilter<"ExternalCalendarConnection"> | string | null;
    scope?: Prisma.StringFilter<"ExternalCalendarConnection"> | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    connectedAt?: Prisma.DateTimeFilter<"ExternalCalendarConnection"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
    lastSyncedAt?: Prisma.DateTimeNullableFilter<"ExternalCalendarConnection"> | Date | string | null;
};
export type ExternalCalendarConnectionCreateWithoutProviderInput = {
    id?: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
    user: Prisma.AppUserCreateNestedOneWithoutExternalCalendarConnectionsInput;
};
export type ExternalCalendarConnectionUncheckedCreateWithoutProviderInput = {
    id?: string;
    userId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
};
export type ExternalCalendarConnectionCreateOrConnectWithoutProviderInput = {
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput>;
};
export type ExternalCalendarConnectionCreateManyProviderInputEnvelope = {
    data: Prisma.ExternalCalendarConnectionCreateManyProviderInput | Prisma.ExternalCalendarConnectionCreateManyProviderInput[];
    skipDuplicates?: boolean;
};
export type ExternalCalendarConnectionUpsertWithWhereUniqueWithoutProviderInput = {
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedUpdateWithoutProviderInput>;
    create: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedCreateWithoutProviderInput>;
};
export type ExternalCalendarConnectionUpdateWithWhereUniqueWithoutProviderInput = {
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateWithoutProviderInput, Prisma.ExternalCalendarConnectionUncheckedUpdateWithoutProviderInput>;
};
export type ExternalCalendarConnectionUpdateManyWithWhereWithoutProviderInput = {
    where: Prisma.ExternalCalendarConnectionScalarWhereInput;
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateManyMutationInput, Prisma.ExternalCalendarConnectionUncheckedUpdateManyWithoutProviderInput>;
};
export type ExternalCalendarConnectionCreateManyUserInput = {
    id?: string;
    providerId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
};
export type ExternalCalendarConnectionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: Prisma.CalendarGatewayProviderUpdateOneRequiredWithoutConnectionsNestedInput;
};
export type ExternalCalendarConnectionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExternalCalendarConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExternalCalendarConnectionCreateManyProviderInput = {
    id?: string;
    userId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted?: string | null;
    scope: string;
    expiresAt?: Date | string | null;
    connectedAt?: Date | string;
    revokedAt?: Date | string | null;
    lastSyncedAt?: Date | string | null;
};
export type ExternalCalendarConnectionUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.AppUserUpdateOneRequiredWithoutExternalCalendarConnectionsNestedInput;
};
export type ExternalCalendarConnectionUncheckedUpdateWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExternalCalendarConnectionUncheckedUpdateManyWithoutProviderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEncrypted?: Prisma.StringFieldUpdateOperationsInput | string;
    refreshTokenEncrypted?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExternalCalendarConnectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    providerId?: boolean;
    accessTokenEncrypted?: boolean;
    refreshTokenEncrypted?: boolean;
    scope?: boolean;
    expiresAt?: boolean;
    connectedAt?: boolean;
    revokedAt?: boolean;
    lastSyncedAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["externalCalendarConnection"]>;
export type ExternalCalendarConnectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    providerId?: boolean;
    accessTokenEncrypted?: boolean;
    refreshTokenEncrypted?: boolean;
    scope?: boolean;
    expiresAt?: boolean;
    connectedAt?: boolean;
    revokedAt?: boolean;
    lastSyncedAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["externalCalendarConnection"]>;
export type ExternalCalendarConnectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    providerId?: boolean;
    accessTokenEncrypted?: boolean;
    refreshTokenEncrypted?: boolean;
    scope?: boolean;
    expiresAt?: boolean;
    connectedAt?: boolean;
    revokedAt?: boolean;
    lastSyncedAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["externalCalendarConnection"]>;
export type ExternalCalendarConnectionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    providerId?: boolean;
    accessTokenEncrypted?: boolean;
    refreshTokenEncrypted?: boolean;
    scope?: boolean;
    expiresAt?: boolean;
    connectedAt?: boolean;
    revokedAt?: boolean;
    lastSyncedAt?: boolean;
};
export type ExternalCalendarConnectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "providerId" | "accessTokenEncrypted" | "refreshTokenEncrypted" | "scope" | "expiresAt" | "connectedAt" | "revokedAt" | "lastSyncedAt", ExtArgs["result"]["externalCalendarConnection"]>;
export type ExternalCalendarConnectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs>;
};
export type ExternalCalendarConnectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs>;
};
export type ExternalCalendarConnectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    provider?: boolean | Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs>;
};
export type $ExternalCalendarConnectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExternalCalendarConnection";
    objects: {
        user: Prisma.$AppUserPayload<ExtArgs>;
        provider: Prisma.$CalendarGatewayProviderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        providerId: string;
        accessTokenEncrypted: string;
        refreshTokenEncrypted: string | null;
        scope: string;
        expiresAt: Date | null;
        connectedAt: Date;
        revokedAt: Date | null;
        lastSyncedAt: Date | null;
    }, ExtArgs["result"]["externalCalendarConnection"]>;
    composites: {};
};
export type ExternalCalendarConnectionGetPayload<S extends boolean | null | undefined | ExternalCalendarConnectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload, S>;
export type ExternalCalendarConnectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExternalCalendarConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExternalCalendarConnectionCountAggregateInputType | true;
};
export interface ExternalCalendarConnectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExternalCalendarConnection'];
        meta: {
            name: 'ExternalCalendarConnection';
        };
    };
    findUnique<T extends ExternalCalendarConnectionFindUniqueArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExternalCalendarConnectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExternalCalendarConnectionFindFirstArgs>(args?: Prisma.SelectSubset<T, ExternalCalendarConnectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExternalCalendarConnectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExternalCalendarConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExternalCalendarConnectionFindManyArgs>(args?: Prisma.SelectSubset<T, ExternalCalendarConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExternalCalendarConnectionCreateArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionCreateArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExternalCalendarConnectionCreateManyArgs>(args?: Prisma.SelectSubset<T, ExternalCalendarConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExternalCalendarConnectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExternalCalendarConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExternalCalendarConnectionDeleteArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionDeleteArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExternalCalendarConnectionUpdateArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionUpdateArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExternalCalendarConnectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExternalCalendarConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExternalCalendarConnectionUpdateManyArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExternalCalendarConnectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExternalCalendarConnectionUpsertArgs>(args: Prisma.SelectSubset<T, ExternalCalendarConnectionUpsertArgs<ExtArgs>>): Prisma.Prisma__ExternalCalendarConnectionClient<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExternalCalendarConnectionCountArgs>(args?: Prisma.Subset<T, ExternalCalendarConnectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExternalCalendarConnectionCountAggregateOutputType> : number>;
    aggregate<T extends ExternalCalendarConnectionAggregateArgs>(args: Prisma.Subset<T, ExternalCalendarConnectionAggregateArgs>): Prisma.PrismaPromise<GetExternalCalendarConnectionAggregateType<T>>;
    groupBy<T extends ExternalCalendarConnectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExternalCalendarConnectionGroupByArgs['orderBy'];
    } : {
        orderBy?: ExternalCalendarConnectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExternalCalendarConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalCalendarConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExternalCalendarConnectionFieldRefs;
}
export interface Prisma__ExternalCalendarConnectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    provider<T extends Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CalendarGatewayProviderDefaultArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExternalCalendarConnectionFieldRefs {
    readonly id: Prisma.FieldRef<"ExternalCalendarConnection", 'String'>;
    readonly userId: Prisma.FieldRef<"ExternalCalendarConnection", 'String'>;
    readonly providerId: Prisma.FieldRef<"ExternalCalendarConnection", 'String'>;
    readonly accessTokenEncrypted: Prisma.FieldRef<"ExternalCalendarConnection", 'String'>;
    readonly refreshTokenEncrypted: Prisma.FieldRef<"ExternalCalendarConnection", 'String'>;
    readonly scope: Prisma.FieldRef<"ExternalCalendarConnection", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"ExternalCalendarConnection", 'DateTime'>;
    readonly connectedAt: Prisma.FieldRef<"ExternalCalendarConnection", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"ExternalCalendarConnection", 'DateTime'>;
    readonly lastSyncedAt: Prisma.FieldRef<"ExternalCalendarConnection", 'DateTime'>;
}
export type ExternalCalendarConnectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
};
export type ExternalCalendarConnectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
};
export type ExternalCalendarConnectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    orderBy?: Prisma.ExternalCalendarConnectionOrderByWithRelationInput | Prisma.ExternalCalendarConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExternalCalendarConnectionScalarFieldEnum | Prisma.ExternalCalendarConnectionScalarFieldEnum[];
};
export type ExternalCalendarConnectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    orderBy?: Prisma.ExternalCalendarConnectionOrderByWithRelationInput | Prisma.ExternalCalendarConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExternalCalendarConnectionScalarFieldEnum | Prisma.ExternalCalendarConnectionScalarFieldEnum[];
};
export type ExternalCalendarConnectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    orderBy?: Prisma.ExternalCalendarConnectionOrderByWithRelationInput | Prisma.ExternalCalendarConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExternalCalendarConnectionScalarFieldEnum | Prisma.ExternalCalendarConnectionScalarFieldEnum[];
};
export type ExternalCalendarConnectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateInput, Prisma.ExternalCalendarConnectionUncheckedCreateInput>;
};
export type ExternalCalendarConnectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExternalCalendarConnectionCreateManyInput | Prisma.ExternalCalendarConnectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExternalCalendarConnectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    data: Prisma.ExternalCalendarConnectionCreateManyInput | Prisma.ExternalCalendarConnectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExternalCalendarConnectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExternalCalendarConnectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateInput, Prisma.ExternalCalendarConnectionUncheckedUpdateInput>;
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
};
export type ExternalCalendarConnectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateManyMutationInput, Prisma.ExternalCalendarConnectionUncheckedUpdateManyInput>;
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    limit?: number;
};
export type ExternalCalendarConnectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateManyMutationInput, Prisma.ExternalCalendarConnectionUncheckedUpdateManyInput>;
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    limit?: number;
    include?: Prisma.ExternalCalendarConnectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExternalCalendarConnectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExternalCalendarConnectionCreateInput, Prisma.ExternalCalendarConnectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExternalCalendarConnectionUpdateInput, Prisma.ExternalCalendarConnectionUncheckedUpdateInput>;
};
export type ExternalCalendarConnectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where: Prisma.ExternalCalendarConnectionWhereUniqueInput;
};
export type ExternalCalendarConnectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    limit?: number;
};
export type ExternalCalendarConnectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
};
