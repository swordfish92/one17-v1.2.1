import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortalCounterpartyUserModel = runtime.Types.Result.DefaultSelection<Prisma.$PortalCounterpartyUserPayload>;
export type AggregatePortalCounterpartyUser = {
    _count: PortalCounterpartyUserCountAggregateOutputType | null;
    _avg: PortalCounterpartyUserAvgAggregateOutputType | null;
    _sum: PortalCounterpartyUserSumAggregateOutputType | null;
    _min: PortalCounterpartyUserMinAggregateOutputType | null;
    _max: PortalCounterpartyUserMaxAggregateOutputType | null;
};
export type PortalCounterpartyUserAvgAggregateOutputType = {
    failedLoginAttempts: number | null;
};
export type PortalCounterpartyUserSumAggregateOutputType = {
    failedLoginAttempts: number | null;
};
export type PortalCounterpartyUserMinAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    passwordHash: string | null;
    failedLoginAttempts: number | null;
    lockedUntil: Date | null;
    status: $Enums.UserStatus | null;
    firstLoginAt: Date | null;
    createdAt: Date | null;
};
export type PortalCounterpartyUserMaxAggregateOutputType = {
    id: string | null;
    counterpartyId: string | null;
    passwordHash: string | null;
    failedLoginAttempts: number | null;
    lockedUntil: Date | null;
    status: $Enums.UserStatus | null;
    firstLoginAt: Date | null;
    createdAt: Date | null;
};
export type PortalCounterpartyUserCountAggregateOutputType = {
    id: number;
    counterpartyId: number;
    passwordHash: number;
    failedLoginAttempts: number;
    lockedUntil: number;
    status: number;
    firstLoginAt: number;
    createdAt: number;
    _all: number;
};
export type PortalCounterpartyUserAvgAggregateInputType = {
    failedLoginAttempts?: true;
};
export type PortalCounterpartyUserSumAggregateInputType = {
    failedLoginAttempts?: true;
};
export type PortalCounterpartyUserMinAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    passwordHash?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    status?: true;
    firstLoginAt?: true;
    createdAt?: true;
};
export type PortalCounterpartyUserMaxAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    passwordHash?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    status?: true;
    firstLoginAt?: true;
    createdAt?: true;
};
export type PortalCounterpartyUserCountAggregateInputType = {
    id?: true;
    counterpartyId?: true;
    passwordHash?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    status?: true;
    firstLoginAt?: true;
    createdAt?: true;
    _all?: true;
};
export type PortalCounterpartyUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalCounterpartyUserWhereInput;
    orderBy?: Prisma.PortalCounterpartyUserOrderByWithRelationInput | Prisma.PortalCounterpartyUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartyUserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortalCounterpartyUserCountAggregateInputType;
    _avg?: PortalCounterpartyUserAvgAggregateInputType;
    _sum?: PortalCounterpartyUserSumAggregateInputType;
    _min?: PortalCounterpartyUserMinAggregateInputType;
    _max?: PortalCounterpartyUserMaxAggregateInputType;
};
export type GetPortalCounterpartyUserAggregateType<T extends PortalCounterpartyUserAggregateArgs> = {
    [P in keyof T & keyof AggregatePortalCounterpartyUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortalCounterpartyUser[P]> : Prisma.GetScalarType<T[P], AggregatePortalCounterpartyUser[P]>;
};
export type PortalCounterpartyUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalCounterpartyUserWhereInput;
    orderBy?: Prisma.PortalCounterpartyUserOrderByWithAggregationInput | Prisma.PortalCounterpartyUserOrderByWithAggregationInput[];
    by: Prisma.PortalCounterpartyUserScalarFieldEnum[] | Prisma.PortalCounterpartyUserScalarFieldEnum;
    having?: Prisma.PortalCounterpartyUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortalCounterpartyUserCountAggregateInputType | true;
    _avg?: PortalCounterpartyUserAvgAggregateInputType;
    _sum?: PortalCounterpartyUserSumAggregateInputType;
    _min?: PortalCounterpartyUserMinAggregateInputType;
    _max?: PortalCounterpartyUserMaxAggregateInputType;
};
export type PortalCounterpartyUserGroupByOutputType = {
    id: string;
    counterpartyId: string;
    passwordHash: string | null;
    failedLoginAttempts: number;
    lockedUntil: Date | null;
    status: $Enums.UserStatus;
    firstLoginAt: Date | null;
    createdAt: Date;
    _count: PortalCounterpartyUserCountAggregateOutputType | null;
    _avg: PortalCounterpartyUserAvgAggregateOutputType | null;
    _sum: PortalCounterpartyUserSumAggregateOutputType | null;
    _min: PortalCounterpartyUserMinAggregateOutputType | null;
    _max: PortalCounterpartyUserMaxAggregateOutputType | null;
};
export type GetPortalCounterpartyUserGroupByPayload<T extends PortalCounterpartyUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortalCounterpartyUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortalCounterpartyUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortalCounterpartyUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortalCounterpartyUserGroupByOutputType[P]>;
}>>;
export type PortalCounterpartyUserWhereInput = {
    AND?: Prisma.PortalCounterpartyUserWhereInput | Prisma.PortalCounterpartyUserWhereInput[];
    OR?: Prisma.PortalCounterpartyUserWhereInput[];
    NOT?: Prisma.PortalCounterpartyUserWhereInput | Prisma.PortalCounterpartyUserWhereInput[];
    id?: Prisma.UuidFilter<"PortalCounterpartyUser"> | string;
    counterpartyId?: Prisma.UuidFilter<"PortalCounterpartyUser"> | string;
    passwordHash?: Prisma.StringNullableFilter<"PortalCounterpartyUser"> | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"PortalCounterpartyUser"> | number;
    lockedUntil?: Prisma.DateTimeNullableFilter<"PortalCounterpartyUser"> | Date | string | null;
    status?: Prisma.EnumUserStatusFilter<"PortalCounterpartyUser"> | $Enums.UserStatus;
    firstLoginAt?: Prisma.DateTimeNullableFilter<"PortalCounterpartyUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortalCounterpartyUser"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    sessions?: Prisma.PortalCounterpartySessionListRelationFilter;
};
export type PortalCounterpartyUserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    sessions?: Prisma.PortalCounterpartySessionOrderByRelationAggregateInput;
};
export type PortalCounterpartyUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    counterpartyId?: string;
    AND?: Prisma.PortalCounterpartyUserWhereInput | Prisma.PortalCounterpartyUserWhereInput[];
    OR?: Prisma.PortalCounterpartyUserWhereInput[];
    NOT?: Prisma.PortalCounterpartyUserWhereInput | Prisma.PortalCounterpartyUserWhereInput[];
    passwordHash?: Prisma.StringNullableFilter<"PortalCounterpartyUser"> | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"PortalCounterpartyUser"> | number;
    lockedUntil?: Prisma.DateTimeNullableFilter<"PortalCounterpartyUser"> | Date | string | null;
    status?: Prisma.EnumUserStatusFilter<"PortalCounterpartyUser"> | $Enums.UserStatus;
    firstLoginAt?: Prisma.DateTimeNullableFilter<"PortalCounterpartyUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortalCounterpartyUser"> | Date | string;
    counterparty?: Prisma.XOR<Prisma.CounterpartyScalarRelationFilter, Prisma.CounterpartyWhereInput>;
    sessions?: Prisma.PortalCounterpartySessionListRelationFilter;
}, "id" | "counterpartyId">;
export type PortalCounterpartyUserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PortalCounterpartyUserCountOrderByAggregateInput;
    _avg?: Prisma.PortalCounterpartyUserAvgOrderByAggregateInput;
    _max?: Prisma.PortalCounterpartyUserMaxOrderByAggregateInput;
    _min?: Prisma.PortalCounterpartyUserMinOrderByAggregateInput;
    _sum?: Prisma.PortalCounterpartyUserSumOrderByAggregateInput;
};
export type PortalCounterpartyUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortalCounterpartyUserScalarWhereWithAggregatesInput | Prisma.PortalCounterpartyUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortalCounterpartyUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortalCounterpartyUserScalarWhereWithAggregatesInput | Prisma.PortalCounterpartyUserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PortalCounterpartyUser"> | string;
    counterpartyId?: Prisma.UuidWithAggregatesFilter<"PortalCounterpartyUser"> | string;
    passwordHash?: Prisma.StringNullableWithAggregatesFilter<"PortalCounterpartyUser"> | string | null;
    failedLoginAttempts?: Prisma.IntWithAggregatesFilter<"PortalCounterpartyUser"> | number;
    lockedUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"PortalCounterpartyUser"> | Date | string | null;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"PortalCounterpartyUser"> | $Enums.UserStatus;
    firstLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PortalCounterpartyUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PortalCounterpartyUser"> | Date | string;
};
export type PortalCounterpartyUserCreateInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutPortalUserInput;
    sessions?: Prisma.PortalCounterpartySessionCreateNestedManyWithoutPortalUserInput;
};
export type PortalCounterpartyUserUncheckedCreateInput = {
    id?: string;
    counterpartyId: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    sessions?: Prisma.PortalCounterpartySessionUncheckedCreateNestedManyWithoutPortalUserInput;
};
export type PortalCounterpartyUserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutPortalUserNestedInput;
    sessions?: Prisma.PortalCounterpartySessionUpdateManyWithoutPortalUserNestedInput;
};
export type PortalCounterpartyUserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.PortalCounterpartySessionUncheckedUpdateManyWithoutPortalUserNestedInput;
};
export type PortalCounterpartyUserCreateManyInput = {
    id?: string;
    counterpartyId: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortalCounterpartyUserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortalCounterpartyUserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortalCounterpartyUserNullableScalarRelationFilter = {
    is?: Prisma.PortalCounterpartyUserWhereInput | null;
    isNot?: Prisma.PortalCounterpartyUserWhereInput | null;
};
export type PortalCounterpartyUserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortalCounterpartyUserAvgOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
};
export type PortalCounterpartyUserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortalCounterpartyUserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortalCounterpartyUserSumOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
};
export type PortalCounterpartyUserScalarRelationFilter = {
    is?: Prisma.PortalCounterpartyUserWhereInput;
    isNot?: Prisma.PortalCounterpartyUserWhereInput;
};
export type PortalCounterpartyUserCreateNestedOneWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutCounterpartyInput>;
    connectOrCreate?: Prisma.PortalCounterpartyUserCreateOrConnectWithoutCounterpartyInput;
    connect?: Prisma.PortalCounterpartyUserWhereUniqueInput;
};
export type PortalCounterpartyUserUncheckedCreateNestedOneWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutCounterpartyInput>;
    connectOrCreate?: Prisma.PortalCounterpartyUserCreateOrConnectWithoutCounterpartyInput;
    connect?: Prisma.PortalCounterpartyUserWhereUniqueInput;
};
export type PortalCounterpartyUserUpdateOneWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutCounterpartyInput>;
    connectOrCreate?: Prisma.PortalCounterpartyUserCreateOrConnectWithoutCounterpartyInput;
    upsert?: Prisma.PortalCounterpartyUserUpsertWithoutCounterpartyInput;
    disconnect?: Prisma.PortalCounterpartyUserWhereInput | boolean;
    delete?: Prisma.PortalCounterpartyUserWhereInput | boolean;
    connect?: Prisma.PortalCounterpartyUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortalCounterpartyUserUpdateToOneWithWhereWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUpdateWithoutCounterpartyInput>, Prisma.PortalCounterpartyUserUncheckedUpdateWithoutCounterpartyInput>;
};
export type PortalCounterpartyUserUncheckedUpdateOneWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutCounterpartyInput>;
    connectOrCreate?: Prisma.PortalCounterpartyUserCreateOrConnectWithoutCounterpartyInput;
    upsert?: Prisma.PortalCounterpartyUserUpsertWithoutCounterpartyInput;
    disconnect?: Prisma.PortalCounterpartyUserWhereInput | boolean;
    delete?: Prisma.PortalCounterpartyUserWhereInput | boolean;
    connect?: Prisma.PortalCounterpartyUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortalCounterpartyUserUpdateToOneWithWhereWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUpdateWithoutCounterpartyInput>, Prisma.PortalCounterpartyUserUncheckedUpdateWithoutCounterpartyInput>;
};
export type PortalCounterpartyUserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutSessionsInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.PortalCounterpartyUserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.PortalCounterpartyUserWhereUniqueInput;
};
export type PortalCounterpartyUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutSessionsInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.PortalCounterpartyUserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.PortalCounterpartyUserUpsertWithoutSessionsInput;
    connect?: Prisma.PortalCounterpartyUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortalCounterpartyUserUpdateToOneWithWhereWithoutSessionsInput, Prisma.PortalCounterpartyUserUpdateWithoutSessionsInput>, Prisma.PortalCounterpartyUserUncheckedUpdateWithoutSessionsInput>;
};
export type PortalCounterpartyUserCreateWithoutCounterpartyInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    sessions?: Prisma.PortalCounterpartySessionCreateNestedManyWithoutPortalUserInput;
};
export type PortalCounterpartyUserUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    sessions?: Prisma.PortalCounterpartySessionUncheckedCreateNestedManyWithoutPortalUserInput;
};
export type PortalCounterpartyUserCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.PortalCounterpartyUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutCounterpartyInput>;
};
export type PortalCounterpartyUserUpsertWithoutCounterpartyInput = {
    update: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutCounterpartyInput>;
    where?: Prisma.PortalCounterpartyUserWhereInput;
};
export type PortalCounterpartyUserUpdateToOneWithWhereWithoutCounterpartyInput = {
    where?: Prisma.PortalCounterpartyUserWhereInput;
    data: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateWithoutCounterpartyInput, Prisma.PortalCounterpartyUserUncheckedUpdateWithoutCounterpartyInput>;
};
export type PortalCounterpartyUserUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.PortalCounterpartySessionUpdateManyWithoutPortalUserNestedInput;
};
export type PortalCounterpartyUserUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.PortalCounterpartySessionUncheckedUpdateManyWithoutPortalUserNestedInput;
};
export type PortalCounterpartyUserCreateWithoutSessionsInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    counterparty: Prisma.CounterpartyCreateNestedOneWithoutPortalUserInput;
};
export type PortalCounterpartyUserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    counterpartyId: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortalCounterpartyUserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.PortalCounterpartyUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutSessionsInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutSessionsInput>;
};
export type PortalCounterpartyUserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateWithoutSessionsInput, Prisma.PortalCounterpartyUserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.PortalCounterpartyUserCreateWithoutSessionsInput, Prisma.PortalCounterpartyUserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.PortalCounterpartyUserWhereInput;
};
export type PortalCounterpartyUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.PortalCounterpartyUserWhereInput;
    data: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateWithoutSessionsInput, Prisma.PortalCounterpartyUserUncheckedUpdateWithoutSessionsInput>;
};
export type PortalCounterpartyUserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    counterparty?: Prisma.CounterpartyUpdateOneRequiredWithoutPortalUserNestedInput;
};
export type PortalCounterpartyUserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    counterpartyId?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortalCounterpartyUserCountOutputType = {
    sessions: number;
};
export type PortalCounterpartyUserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | PortalCounterpartyUserCountOutputTypeCountSessionsArgs;
};
export type PortalCounterpartyUserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserCountOutputTypeSelect<ExtArgs> | null;
};
export type PortalCounterpartyUserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalCounterpartySessionWhereInput;
};
export type PortalCounterpartyUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.PortalCounterpartyUser$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PortalCounterpartyUserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalCounterpartyUser"]>;
export type PortalCounterpartyUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalCounterpartyUser"]>;
export type PortalCounterpartyUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    counterpartyId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalCounterpartyUser"]>;
export type PortalCounterpartyUserSelectScalar = {
    id?: boolean;
    counterpartyId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
};
export type PortalCounterpartyUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "counterpartyId" | "passwordHash" | "failedLoginAttempts" | "lockedUntil" | "status" | "firstLoginAt" | "createdAt", ExtArgs["result"]["portalCounterpartyUser"]>;
export type PortalCounterpartyUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.PortalCounterpartyUser$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PortalCounterpartyUserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PortalCounterpartyUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
};
export type PortalCounterpartyUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    counterparty?: boolean | Prisma.CounterpartyDefaultArgs<ExtArgs>;
};
export type $PortalCounterpartyUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortalCounterpartyUser";
    objects: {
        counterparty: Prisma.$CounterpartyPayload<ExtArgs>;
        sessions: Prisma.$PortalCounterpartySessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        counterpartyId: string;
        passwordHash: string | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        status: $Enums.UserStatus;
        firstLoginAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["portalCounterpartyUser"]>;
    composites: {};
};
export type PortalCounterpartyUserGetPayload<S extends boolean | null | undefined | PortalCounterpartyUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload, S>;
export type PortalCounterpartyUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortalCounterpartyUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortalCounterpartyUserCountAggregateInputType | true;
};
export interface PortalCounterpartyUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortalCounterpartyUser'];
        meta: {
            name: 'PortalCounterpartyUser';
        };
    };
    findUnique<T extends PortalCounterpartyUserFindUniqueArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortalCounterpartyUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortalCounterpartyUserFindFirstArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartyUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortalCounterpartyUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartyUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortalCounterpartyUserFindManyArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartyUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortalCounterpartyUserCreateArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserCreateArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortalCounterpartyUserCreateManyArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartyUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortalCounterpartyUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartyUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortalCounterpartyUserDeleteArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserDeleteArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortalCounterpartyUserUpdateArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserUpdateArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortalCounterpartyUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortalCounterpartyUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortalCounterpartyUserUpdateManyArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortalCounterpartyUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortalCounterpartyUserUpsertArgs>(args: Prisma.SelectSubset<T, PortalCounterpartyUserUpsertArgs<ExtArgs>>): Prisma.Prisma__PortalCounterpartyUserClient<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartyUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortalCounterpartyUserCountArgs>(args?: Prisma.Subset<T, PortalCounterpartyUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortalCounterpartyUserCountAggregateOutputType> : number>;
    aggregate<T extends PortalCounterpartyUserAggregateArgs>(args: Prisma.Subset<T, PortalCounterpartyUserAggregateArgs>): Prisma.PrismaPromise<GetPortalCounterpartyUserAggregateType<T>>;
    groupBy<T extends PortalCounterpartyUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortalCounterpartyUserGroupByArgs['orderBy'];
    } : {
        orderBy?: PortalCounterpartyUserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortalCounterpartyUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalCounterpartyUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortalCounterpartyUserFieldRefs;
}
export interface Prisma__PortalCounterpartyUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    counterparty<T extends Prisma.CounterpartyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CounterpartyDefaultArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.PortalCounterpartyUser$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortalCounterpartyUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalCounterpartySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortalCounterpartyUserFieldRefs {
    readonly id: Prisma.FieldRef<"PortalCounterpartyUser", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"PortalCounterpartyUser", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"PortalCounterpartyUser", 'String'>;
    readonly failedLoginAttempts: Prisma.FieldRef<"PortalCounterpartyUser", 'Int'>;
    readonly lockedUntil: Prisma.FieldRef<"PortalCounterpartyUser", 'DateTime'>;
    readonly status: Prisma.FieldRef<"PortalCounterpartyUser", 'UserStatus'>;
    readonly firstLoginAt: Prisma.FieldRef<"PortalCounterpartyUser", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PortalCounterpartyUser", 'DateTime'>;
}
export type PortalCounterpartyUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartyUserWhereUniqueInput;
};
export type PortalCounterpartyUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartyUserWhereUniqueInput;
};
export type PortalCounterpartyUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    where?: Prisma.PortalCounterpartyUserWhereInput;
    orderBy?: Prisma.PortalCounterpartyUserOrderByWithRelationInput | Prisma.PortalCounterpartyUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartyUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalCounterpartyUserScalarFieldEnum | Prisma.PortalCounterpartyUserScalarFieldEnum[];
};
export type PortalCounterpartyUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    where?: Prisma.PortalCounterpartyUserWhereInput;
    orderBy?: Prisma.PortalCounterpartyUserOrderByWithRelationInput | Prisma.PortalCounterpartyUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartyUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalCounterpartyUserScalarFieldEnum | Prisma.PortalCounterpartyUserScalarFieldEnum[];
};
export type PortalCounterpartyUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    where?: Prisma.PortalCounterpartyUserWhereInput;
    orderBy?: Prisma.PortalCounterpartyUserOrderByWithRelationInput | Prisma.PortalCounterpartyUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalCounterpartyUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalCounterpartyUserScalarFieldEnum | Prisma.PortalCounterpartyUserScalarFieldEnum[];
};
export type PortalCounterpartyUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalCounterpartyUserCreateInput, Prisma.PortalCounterpartyUserUncheckedCreateInput>;
};
export type PortalCounterpartyUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortalCounterpartyUserCreateManyInput | Prisma.PortalCounterpartyUserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortalCounterpartyUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    data: Prisma.PortalCounterpartyUserCreateManyInput | Prisma.PortalCounterpartyUserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortalCounterpartyUserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortalCounterpartyUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateInput, Prisma.PortalCounterpartyUserUncheckedUpdateInput>;
    where: Prisma.PortalCounterpartyUserWhereUniqueInput;
};
export type PortalCounterpartyUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateManyMutationInput, Prisma.PortalCounterpartyUserUncheckedUpdateManyInput>;
    where?: Prisma.PortalCounterpartyUserWhereInput;
    limit?: number;
};
export type PortalCounterpartyUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateManyMutationInput, Prisma.PortalCounterpartyUserUncheckedUpdateManyInput>;
    where?: Prisma.PortalCounterpartyUserWhereInput;
    limit?: number;
    include?: Prisma.PortalCounterpartyUserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortalCounterpartyUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartyUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalCounterpartyUserCreateInput, Prisma.PortalCounterpartyUserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortalCounterpartyUserUpdateInput, Prisma.PortalCounterpartyUserUncheckedUpdateInput>;
};
export type PortalCounterpartyUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
    where: Prisma.PortalCounterpartyUserWhereUniqueInput;
};
export type PortalCounterpartyUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalCounterpartyUserWhereInput;
    limit?: number;
};
export type PortalCounterpartyUser$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortalCounterpartyUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalCounterpartyUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalCounterpartyUserOmit<ExtArgs> | null;
    include?: Prisma.PortalCounterpartyUserInclude<ExtArgs> | null;
};
