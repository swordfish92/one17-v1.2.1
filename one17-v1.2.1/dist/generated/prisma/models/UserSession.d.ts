import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$UserSessionPayload>;
export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null;
    _min: UserSessionMinAggregateOutputType | null;
    _max: UserSessionMaxAggregateOutputType | null;
};
export type UserSessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
    userAgent: string | null;
    mfaPending: boolean | null;
};
export type UserSessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
    userAgent: string | null;
    mfaPending: boolean | null;
};
export type UserSessionCountAggregateOutputType = {
    id: number;
    userId: number;
    tokenHash: number;
    createdAt: number;
    expiresAt: number;
    revokedAt: number;
    ipAddress: number;
    userAgent: number;
    mfaPending: number;
    _all: number;
};
export type UserSessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    userAgent?: true;
    mfaPending?: true;
};
export type UserSessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    userAgent?: true;
    mfaPending?: true;
};
export type UserSessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    userAgent?: true;
    mfaPending?: true;
    _all?: true;
};
export type UserSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSessionWhereInput;
    orderBy?: Prisma.UserSessionOrderByWithRelationInput | Prisma.UserSessionOrderByWithRelationInput[];
    cursor?: Prisma.UserSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserSessionCountAggregateInputType;
    _min?: UserSessionMinAggregateInputType;
    _max?: UserSessionMaxAggregateInputType;
};
export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserSession[P]> : Prisma.GetScalarType<T[P], AggregateUserSession[P]>;
};
export type UserSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSessionWhereInput;
    orderBy?: Prisma.UserSessionOrderByWithAggregationInput | Prisma.UserSessionOrderByWithAggregationInput[];
    by: Prisma.UserSessionScalarFieldEnum[] | Prisma.UserSessionScalarFieldEnum;
    having?: Prisma.UserSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserSessionCountAggregateInputType | true;
    _min?: UserSessionMinAggregateInputType;
    _max?: UserSessionMaxAggregateInputType;
};
export type UserSessionGroupByOutputType = {
    id: string;
    userId: string;
    tokenHash: string;
    createdAt: Date;
    expiresAt: Date;
    revokedAt: Date | null;
    ipAddress: string | null;
    userAgent: string | null;
    mfaPending: boolean;
    _count: UserSessionCountAggregateOutputType | null;
    _min: UserSessionMinAggregateOutputType | null;
    _max: UserSessionMaxAggregateOutputType | null;
};
export type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserSessionGroupByOutputType[P]>;
}>>;
export type UserSessionWhereInput = {
    AND?: Prisma.UserSessionWhereInput | Prisma.UserSessionWhereInput[];
    OR?: Prisma.UserSessionWhereInput[];
    NOT?: Prisma.UserSessionWhereInput | Prisma.UserSessionWhereInput[];
    id?: Prisma.UuidFilter<"UserSession"> | string;
    userId?: Prisma.UuidFilter<"UserSession"> | string;
    tokenHash?: Prisma.StringFilter<"UserSession"> | string;
    createdAt?: Prisma.DateTimeFilter<"UserSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"UserSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"UserSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"UserSession"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"UserSession"> | string | null;
    mfaPending?: Prisma.BoolFilter<"UserSession"> | boolean;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type UserSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    mfaPending?: Prisma.SortOrder;
    user?: Prisma.AppUserOrderByWithRelationInput;
};
export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.UserSessionWhereInput | Prisma.UserSessionWhereInput[];
    OR?: Prisma.UserSessionWhereInput[];
    NOT?: Prisma.UserSessionWhereInput | Prisma.UserSessionWhereInput[];
    userId?: Prisma.UuidFilter<"UserSession"> | string;
    createdAt?: Prisma.DateTimeFilter<"UserSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"UserSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"UserSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"UserSession"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"UserSession"> | string | null;
    mfaPending?: Prisma.BoolFilter<"UserSession"> | boolean;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "tokenHash">;
export type UserSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    mfaPending?: Prisma.SortOrder;
    _count?: Prisma.UserSessionCountOrderByAggregateInput;
    _max?: Prisma.UserSessionMaxOrderByAggregateInput;
    _min?: Prisma.UserSessionMinOrderByAggregateInput;
};
export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserSessionScalarWhereWithAggregatesInput | Prisma.UserSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserSessionScalarWhereWithAggregatesInput | Prisma.UserSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"UserSession"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"UserSession"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"UserSession"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserSession"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"UserSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"UserSession"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"UserSession"> | string | null;
    mfaPending?: Prisma.BoolWithAggregatesFilter<"UserSession"> | boolean;
};
export type UserSessionCreateInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    mfaPending?: boolean;
    user: Prisma.AppUserCreateNestedOneWithoutSessionsInput;
};
export type UserSessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    mfaPending?: boolean;
};
export type UserSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaPending?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.AppUserUpdateOneRequiredWithoutSessionsNestedInput;
};
export type UserSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaPending?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserSessionCreateManyInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    mfaPending?: boolean;
};
export type UserSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaPending?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaPending?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserSessionListRelationFilter = {
    every?: Prisma.UserSessionWhereInput;
    some?: Prisma.UserSessionWhereInput;
    none?: Prisma.UserSessionWhereInput;
};
export type UserSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    mfaPending?: Prisma.SortOrder;
};
export type UserSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    mfaPending?: Prisma.SortOrder;
};
export type UserSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    mfaPending?: Prisma.SortOrder;
};
export type UserSessionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserSessionCreateWithoutUserInput, Prisma.UserSessionUncheckedCreateWithoutUserInput> | Prisma.UserSessionCreateWithoutUserInput[] | Prisma.UserSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSessionCreateOrConnectWithoutUserInput | Prisma.UserSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserSessionCreateManyUserInputEnvelope;
    connect?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
};
export type UserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserSessionCreateWithoutUserInput, Prisma.UserSessionUncheckedCreateWithoutUserInput> | Prisma.UserSessionCreateWithoutUserInput[] | Prisma.UserSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSessionCreateOrConnectWithoutUserInput | Prisma.UserSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserSessionCreateManyUserInputEnvelope;
    connect?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
};
export type UserSessionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserSessionCreateWithoutUserInput, Prisma.UserSessionUncheckedCreateWithoutUserInput> | Prisma.UserSessionCreateWithoutUserInput[] | Prisma.UserSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSessionCreateOrConnectWithoutUserInput | Prisma.UserSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.UserSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserSessionCreateManyUserInputEnvelope;
    set?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    disconnect?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    delete?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    connect?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    update?: Prisma.UserSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.UserSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserSessionUpdateManyWithWhereWithoutUserInput | Prisma.UserSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserSessionScalarWhereInput | Prisma.UserSessionScalarWhereInput[];
};
export type UserSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserSessionCreateWithoutUserInput, Prisma.UserSessionUncheckedCreateWithoutUserInput> | Prisma.UserSessionCreateWithoutUserInput[] | Prisma.UserSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSessionCreateOrConnectWithoutUserInput | Prisma.UserSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.UserSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserSessionCreateManyUserInputEnvelope;
    set?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    disconnect?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    delete?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    connect?: Prisma.UserSessionWhereUniqueInput | Prisma.UserSessionWhereUniqueInput[];
    update?: Prisma.UserSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.UserSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserSessionUpdateManyWithWhereWithoutUserInput | Prisma.UserSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserSessionScalarWhereInput | Prisma.UserSessionScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UserSessionCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    mfaPending?: boolean;
};
export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    mfaPending?: boolean;
};
export type UserSessionCreateOrConnectWithoutUserInput = {
    where: Prisma.UserSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserSessionCreateWithoutUserInput, Prisma.UserSessionUncheckedCreateWithoutUserInput>;
};
export type UserSessionCreateManyUserInputEnvelope = {
    data: Prisma.UserSessionCreateManyUserInput | Prisma.UserSessionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserSessionUpdateWithoutUserInput, Prisma.UserSessionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserSessionCreateWithoutUserInput, Prisma.UserSessionUncheckedCreateWithoutUserInput>;
};
export type UserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserSessionUpdateWithoutUserInput, Prisma.UserSessionUncheckedUpdateWithoutUserInput>;
};
export type UserSessionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.UserSessionUpdateManyMutationInput, Prisma.UserSessionUncheckedUpdateManyWithoutUserInput>;
};
export type UserSessionScalarWhereInput = {
    AND?: Prisma.UserSessionScalarWhereInput | Prisma.UserSessionScalarWhereInput[];
    OR?: Prisma.UserSessionScalarWhereInput[];
    NOT?: Prisma.UserSessionScalarWhereInput | Prisma.UserSessionScalarWhereInput[];
    id?: Prisma.UuidFilter<"UserSession"> | string;
    userId?: Prisma.UuidFilter<"UserSession"> | string;
    tokenHash?: Prisma.StringFilter<"UserSession"> | string;
    createdAt?: Prisma.DateTimeFilter<"UserSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"UserSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"UserSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"UserSession"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"UserSession"> | string | null;
    mfaPending?: Prisma.BoolFilter<"UserSession"> | boolean;
};
export type UserSessionCreateManyUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    mfaPending?: boolean;
};
export type UserSessionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaPending?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserSessionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaPending?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserSessionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaPending?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    mfaPending?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userSession"]>;
export type UserSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    mfaPending?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userSession"]>;
export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    mfaPending?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userSession"]>;
export type UserSessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    mfaPending?: boolean;
};
export type UserSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "tokenHash" | "createdAt" | "expiresAt" | "revokedAt" | "ipAddress" | "userAgent" | "mfaPending", ExtArgs["result"]["userSession"]>;
export type UserSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $UserSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserSession";
    objects: {
        user: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        tokenHash: string;
        createdAt: Date;
        expiresAt: Date;
        revokedAt: Date | null;
        ipAddress: string | null;
        userAgent: string | null;
        mfaPending: boolean;
    }, ExtArgs["result"]["userSession"]>;
    composites: {};
};
export type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserSessionPayload, S>;
export type UserSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserSessionCountAggregateInputType | true;
};
export interface UserSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserSession'];
        meta: {
            name: 'UserSession';
        };
    };
    findUnique<T extends UserSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserSessionFindManyArgs>(args?: Prisma.SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserSessionCreateArgs>(args: Prisma.SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserSessionDeleteArgs>(args: Prisma.SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserSessionUpdateArgs>(args: Prisma.SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserSessionUpsertArgs>(args: Prisma.SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__UserSessionClient<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserSessionCountArgs>(args?: Prisma.Subset<T, UserSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserSessionCountAggregateOutputType> : number>;
    aggregate<T extends UserSessionAggregateArgs>(args: Prisma.Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>;
    groupBy<T extends UserSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: UserSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserSessionFieldRefs;
}
export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserSessionFieldRefs {
    readonly id: Prisma.FieldRef<"UserSession", 'String'>;
    readonly userId: Prisma.FieldRef<"UserSession", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"UserSession", 'String'>;
    readonly createdAt: Prisma.FieldRef<"UserSession", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"UserSession", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"UserSession", 'DateTime'>;
    readonly ipAddress: Prisma.FieldRef<"UserSession", 'String'>;
    readonly userAgent: Prisma.FieldRef<"UserSession", 'String'>;
    readonly mfaPending: Prisma.FieldRef<"UserSession", 'Boolean'>;
}
export type UserSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where: Prisma.UserSessionWhereUniqueInput;
};
export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where: Prisma.UserSessionWhereUniqueInput;
};
export type UserSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where?: Prisma.UserSessionWhereInput;
    orderBy?: Prisma.UserSessionOrderByWithRelationInput | Prisma.UserSessionOrderByWithRelationInput[];
    cursor?: Prisma.UserSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSessionScalarFieldEnum | Prisma.UserSessionScalarFieldEnum[];
};
export type UserSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where?: Prisma.UserSessionWhereInput;
    orderBy?: Prisma.UserSessionOrderByWithRelationInput | Prisma.UserSessionOrderByWithRelationInput[];
    cursor?: Prisma.UserSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSessionScalarFieldEnum | Prisma.UserSessionScalarFieldEnum[];
};
export type UserSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where?: Prisma.UserSessionWhereInput;
    orderBy?: Prisma.UserSessionOrderByWithRelationInput | Prisma.UserSessionOrderByWithRelationInput[];
    cursor?: Prisma.UserSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSessionScalarFieldEnum | Prisma.UserSessionScalarFieldEnum[];
};
export type UserSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSessionCreateInput, Prisma.UserSessionUncheckedCreateInput>;
};
export type UserSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserSessionCreateManyInput | Prisma.UserSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    data: Prisma.UserSessionCreateManyInput | Prisma.UserSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSessionUpdateInput, Prisma.UserSessionUncheckedUpdateInput>;
    where: Prisma.UserSessionWhereUniqueInput;
};
export type UserSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserSessionUpdateManyMutationInput, Prisma.UserSessionUncheckedUpdateManyInput>;
    where?: Prisma.UserSessionWhereInput;
    limit?: number;
};
export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSessionUpdateManyMutationInput, Prisma.UserSessionUncheckedUpdateManyInput>;
    where?: Prisma.UserSessionWhereInput;
    limit?: number;
    include?: Prisma.UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where: Prisma.UserSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserSessionCreateInput, Prisma.UserSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserSessionUpdateInput, Prisma.UserSessionUncheckedUpdateInput>;
};
export type UserSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where: Prisma.UserSessionWhereUniqueInput;
};
export type UserSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSessionWhereInput;
    limit?: number;
};
export type UserSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
};
