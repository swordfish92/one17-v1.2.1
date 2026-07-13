import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortalClientUserModel = runtime.Types.Result.DefaultSelection<Prisma.$PortalClientUserPayload>;
export type AggregatePortalClientUser = {
    _count: PortalClientUserCountAggregateOutputType | null;
    _avg: PortalClientUserAvgAggregateOutputType | null;
    _sum: PortalClientUserSumAggregateOutputType | null;
    _min: PortalClientUserMinAggregateOutputType | null;
    _max: PortalClientUserMaxAggregateOutputType | null;
};
export type PortalClientUserAvgAggregateOutputType = {
    failedLoginAttempts: number | null;
};
export type PortalClientUserSumAggregateOutputType = {
    failedLoginAttempts: number | null;
};
export type PortalClientUserMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    passwordHash: string | null;
    failedLoginAttempts: number | null;
    lockedUntil: Date | null;
    status: $Enums.UserStatus | null;
    firstLoginAt: Date | null;
    createdAt: Date | null;
};
export type PortalClientUserMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    passwordHash: string | null;
    failedLoginAttempts: number | null;
    lockedUntil: Date | null;
    status: $Enums.UserStatus | null;
    firstLoginAt: Date | null;
    createdAt: Date | null;
};
export type PortalClientUserCountAggregateOutputType = {
    id: number;
    investorId: number;
    passwordHash: number;
    failedLoginAttempts: number;
    lockedUntil: number;
    status: number;
    firstLoginAt: number;
    createdAt: number;
    _all: number;
};
export type PortalClientUserAvgAggregateInputType = {
    failedLoginAttempts?: true;
};
export type PortalClientUserSumAggregateInputType = {
    failedLoginAttempts?: true;
};
export type PortalClientUserMinAggregateInputType = {
    id?: true;
    investorId?: true;
    passwordHash?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    status?: true;
    firstLoginAt?: true;
    createdAt?: true;
};
export type PortalClientUserMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    passwordHash?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    status?: true;
    firstLoginAt?: true;
    createdAt?: true;
};
export type PortalClientUserCountAggregateInputType = {
    id?: true;
    investorId?: true;
    passwordHash?: true;
    failedLoginAttempts?: true;
    lockedUntil?: true;
    status?: true;
    firstLoginAt?: true;
    createdAt?: true;
    _all?: true;
};
export type PortalClientUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalClientUserWhereInput;
    orderBy?: Prisma.PortalClientUserOrderByWithRelationInput | Prisma.PortalClientUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalClientUserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortalClientUserCountAggregateInputType;
    _avg?: PortalClientUserAvgAggregateInputType;
    _sum?: PortalClientUserSumAggregateInputType;
    _min?: PortalClientUserMinAggregateInputType;
    _max?: PortalClientUserMaxAggregateInputType;
};
export type GetPortalClientUserAggregateType<T extends PortalClientUserAggregateArgs> = {
    [P in keyof T & keyof AggregatePortalClientUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortalClientUser[P]> : Prisma.GetScalarType<T[P], AggregatePortalClientUser[P]>;
};
export type PortalClientUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalClientUserWhereInput;
    orderBy?: Prisma.PortalClientUserOrderByWithAggregationInput | Prisma.PortalClientUserOrderByWithAggregationInput[];
    by: Prisma.PortalClientUserScalarFieldEnum[] | Prisma.PortalClientUserScalarFieldEnum;
    having?: Prisma.PortalClientUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortalClientUserCountAggregateInputType | true;
    _avg?: PortalClientUserAvgAggregateInputType;
    _sum?: PortalClientUserSumAggregateInputType;
    _min?: PortalClientUserMinAggregateInputType;
    _max?: PortalClientUserMaxAggregateInputType;
};
export type PortalClientUserGroupByOutputType = {
    id: string;
    investorId: string;
    passwordHash: string | null;
    failedLoginAttempts: number;
    lockedUntil: Date | null;
    status: $Enums.UserStatus;
    firstLoginAt: Date | null;
    createdAt: Date;
    _count: PortalClientUserCountAggregateOutputType | null;
    _avg: PortalClientUserAvgAggregateOutputType | null;
    _sum: PortalClientUserSumAggregateOutputType | null;
    _min: PortalClientUserMinAggregateOutputType | null;
    _max: PortalClientUserMaxAggregateOutputType | null;
};
export type GetPortalClientUserGroupByPayload<T extends PortalClientUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortalClientUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortalClientUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortalClientUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortalClientUserGroupByOutputType[P]>;
}>>;
export type PortalClientUserWhereInput = {
    AND?: Prisma.PortalClientUserWhereInput | Prisma.PortalClientUserWhereInput[];
    OR?: Prisma.PortalClientUserWhereInput[];
    NOT?: Prisma.PortalClientUserWhereInput | Prisma.PortalClientUserWhereInput[];
    id?: Prisma.UuidFilter<"PortalClientUser"> | string;
    investorId?: Prisma.StringFilter<"PortalClientUser"> | string;
    passwordHash?: Prisma.StringNullableFilter<"PortalClientUser"> | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"PortalClientUser"> | number;
    lockedUntil?: Prisma.DateTimeNullableFilter<"PortalClientUser"> | Date | string | null;
    status?: Prisma.EnumUserStatusFilter<"PortalClientUser"> | $Enums.UserStatus;
    firstLoginAt?: Prisma.DateTimeNullableFilter<"PortalClientUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortalClientUser"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    sessions?: Prisma.PortalClientSessionListRelationFilter;
};
export type PortalClientUserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    sessions?: Prisma.PortalClientSessionOrderByRelationAggregateInput;
};
export type PortalClientUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    investorId?: string;
    AND?: Prisma.PortalClientUserWhereInput | Prisma.PortalClientUserWhereInput[];
    OR?: Prisma.PortalClientUserWhereInput[];
    NOT?: Prisma.PortalClientUserWhereInput | Prisma.PortalClientUserWhereInput[];
    passwordHash?: Prisma.StringNullableFilter<"PortalClientUser"> | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"PortalClientUser"> | number;
    lockedUntil?: Prisma.DateTimeNullableFilter<"PortalClientUser"> | Date | string | null;
    status?: Prisma.EnumUserStatusFilter<"PortalClientUser"> | $Enums.UserStatus;
    firstLoginAt?: Prisma.DateTimeNullableFilter<"PortalClientUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortalClientUser"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    sessions?: Prisma.PortalClientSessionListRelationFilter;
}, "id" | "investorId">;
export type PortalClientUserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PortalClientUserCountOrderByAggregateInput;
    _avg?: Prisma.PortalClientUserAvgOrderByAggregateInput;
    _max?: Prisma.PortalClientUserMaxOrderByAggregateInput;
    _min?: Prisma.PortalClientUserMinOrderByAggregateInput;
    _sum?: Prisma.PortalClientUserSumOrderByAggregateInput;
};
export type PortalClientUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortalClientUserScalarWhereWithAggregatesInput | Prisma.PortalClientUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortalClientUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortalClientUserScalarWhereWithAggregatesInput | Prisma.PortalClientUserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PortalClientUser"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"PortalClientUser"> | string;
    passwordHash?: Prisma.StringNullableWithAggregatesFilter<"PortalClientUser"> | string | null;
    failedLoginAttempts?: Prisma.IntWithAggregatesFilter<"PortalClientUser"> | number;
    lockedUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"PortalClientUser"> | Date | string | null;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"PortalClientUser"> | $Enums.UserStatus;
    firstLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PortalClientUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PortalClientUser"> | Date | string;
};
export type PortalClientUserCreateInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutPortalClientUserInput;
    sessions?: Prisma.PortalClientSessionCreateNestedManyWithoutPortalUserInput;
};
export type PortalClientUserUncheckedCreateInput = {
    id?: string;
    investorId: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    sessions?: Prisma.PortalClientSessionUncheckedCreateNestedManyWithoutPortalUserInput;
};
export type PortalClientUserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutPortalClientUserNestedInput;
    sessions?: Prisma.PortalClientSessionUpdateManyWithoutPortalUserNestedInput;
};
export type PortalClientUserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.PortalClientSessionUncheckedUpdateManyWithoutPortalUserNestedInput;
};
export type PortalClientUserCreateManyInput = {
    id?: string;
    investorId: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortalClientUserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortalClientUserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortalClientUserNullableScalarRelationFilter = {
    is?: Prisma.PortalClientUserWhereInput | null;
    isNot?: Prisma.PortalClientUserWhereInput | null;
};
export type PortalClientUserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortalClientUserAvgOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
};
export type PortalClientUserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortalClientUserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lockedUntil?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PortalClientUserSumOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
};
export type PortalClientUserScalarRelationFilter = {
    is?: Prisma.PortalClientUserWhereInput;
    isNot?: Prisma.PortalClientUserWhereInput;
};
export type PortalClientUserCreateNestedOneWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.PortalClientUserCreateWithoutInvestorInput, Prisma.PortalClientUserUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.PortalClientUserCreateOrConnectWithoutInvestorInput;
    connect?: Prisma.PortalClientUserWhereUniqueInput;
};
export type PortalClientUserUncheckedCreateNestedOneWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.PortalClientUserCreateWithoutInvestorInput, Prisma.PortalClientUserUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.PortalClientUserCreateOrConnectWithoutInvestorInput;
    connect?: Prisma.PortalClientUserWhereUniqueInput;
};
export type PortalClientUserUpdateOneWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.PortalClientUserCreateWithoutInvestorInput, Prisma.PortalClientUserUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.PortalClientUserCreateOrConnectWithoutInvestorInput;
    upsert?: Prisma.PortalClientUserUpsertWithoutInvestorInput;
    disconnect?: Prisma.PortalClientUserWhereInput | boolean;
    delete?: Prisma.PortalClientUserWhereInput | boolean;
    connect?: Prisma.PortalClientUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortalClientUserUpdateToOneWithWhereWithoutInvestorInput, Prisma.PortalClientUserUpdateWithoutInvestorInput>, Prisma.PortalClientUserUncheckedUpdateWithoutInvestorInput>;
};
export type PortalClientUserUncheckedUpdateOneWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.PortalClientUserCreateWithoutInvestorInput, Prisma.PortalClientUserUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.PortalClientUserCreateOrConnectWithoutInvestorInput;
    upsert?: Prisma.PortalClientUserUpsertWithoutInvestorInput;
    disconnect?: Prisma.PortalClientUserWhereInput | boolean;
    delete?: Prisma.PortalClientUserWhereInput | boolean;
    connect?: Prisma.PortalClientUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortalClientUserUpdateToOneWithWhereWithoutInvestorInput, Prisma.PortalClientUserUpdateWithoutInvestorInput>, Prisma.PortalClientUserUncheckedUpdateWithoutInvestorInput>;
};
export type PortalClientUserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.PortalClientUserCreateWithoutSessionsInput, Prisma.PortalClientUserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.PortalClientUserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.PortalClientUserWhereUniqueInput;
};
export type PortalClientUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.PortalClientUserCreateWithoutSessionsInput, Prisma.PortalClientUserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.PortalClientUserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.PortalClientUserUpsertWithoutSessionsInput;
    connect?: Prisma.PortalClientUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortalClientUserUpdateToOneWithWhereWithoutSessionsInput, Prisma.PortalClientUserUpdateWithoutSessionsInput>, Prisma.PortalClientUserUncheckedUpdateWithoutSessionsInput>;
};
export type PortalClientUserCreateWithoutInvestorInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    sessions?: Prisma.PortalClientSessionCreateNestedManyWithoutPortalUserInput;
};
export type PortalClientUserUncheckedCreateWithoutInvestorInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    sessions?: Prisma.PortalClientSessionUncheckedCreateNestedManyWithoutPortalUserInput;
};
export type PortalClientUserCreateOrConnectWithoutInvestorInput = {
    where: Prisma.PortalClientUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalClientUserCreateWithoutInvestorInput, Prisma.PortalClientUserUncheckedCreateWithoutInvestorInput>;
};
export type PortalClientUserUpsertWithoutInvestorInput = {
    update: Prisma.XOR<Prisma.PortalClientUserUpdateWithoutInvestorInput, Prisma.PortalClientUserUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.PortalClientUserCreateWithoutInvestorInput, Prisma.PortalClientUserUncheckedCreateWithoutInvestorInput>;
    where?: Prisma.PortalClientUserWhereInput;
};
export type PortalClientUserUpdateToOneWithWhereWithoutInvestorInput = {
    where?: Prisma.PortalClientUserWhereInput;
    data: Prisma.XOR<Prisma.PortalClientUserUpdateWithoutInvestorInput, Prisma.PortalClientUserUncheckedUpdateWithoutInvestorInput>;
};
export type PortalClientUserUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.PortalClientSessionUpdateManyWithoutPortalUserNestedInput;
};
export type PortalClientUserUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.PortalClientSessionUncheckedUpdateManyWithoutPortalUserNestedInput;
};
export type PortalClientUserCreateWithoutSessionsInput = {
    id?: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutPortalClientUserInput;
};
export type PortalClientUserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    investorId: string;
    passwordHash?: string | null;
    failedLoginAttempts?: number;
    lockedUntil?: Date | string | null;
    status?: $Enums.UserStatus;
    firstLoginAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PortalClientUserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.PortalClientUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalClientUserCreateWithoutSessionsInput, Prisma.PortalClientUserUncheckedCreateWithoutSessionsInput>;
};
export type PortalClientUserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.PortalClientUserUpdateWithoutSessionsInput, Prisma.PortalClientUserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.PortalClientUserCreateWithoutSessionsInput, Prisma.PortalClientUserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.PortalClientUserWhereInput;
};
export type PortalClientUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.PortalClientUserWhereInput;
    data: Prisma.XOR<Prisma.PortalClientUserUpdateWithoutSessionsInput, Prisma.PortalClientUserUncheckedUpdateWithoutSessionsInput>;
};
export type PortalClientUserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutPortalClientUserNestedInput;
};
export type PortalClientUserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    firstLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortalClientUserCountOutputType = {
    sessions: number;
};
export type PortalClientUserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | PortalClientUserCountOutputTypeCountSessionsArgs;
};
export type PortalClientUserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserCountOutputTypeSelect<ExtArgs> | null;
};
export type PortalClientUserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalClientSessionWhereInput;
};
export type PortalClientUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.PortalClientUser$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PortalClientUserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalClientUser"]>;
export type PortalClientUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalClientUser"]>;
export type PortalClientUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalClientUser"]>;
export type PortalClientUserSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    passwordHash?: boolean;
    failedLoginAttempts?: boolean;
    lockedUntil?: boolean;
    status?: boolean;
    firstLoginAt?: boolean;
    createdAt?: boolean;
};
export type PortalClientUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "passwordHash" | "failedLoginAttempts" | "lockedUntil" | "status" | "firstLoginAt" | "createdAt", ExtArgs["result"]["portalClientUser"]>;
export type PortalClientUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.PortalClientUser$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PortalClientUserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PortalClientUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
};
export type PortalClientUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
};
export type $PortalClientUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortalClientUser";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        sessions: Prisma.$PortalClientSessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        passwordHash: string | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        status: $Enums.UserStatus;
        firstLoginAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["portalClientUser"]>;
    composites: {};
};
export type PortalClientUserGetPayload<S extends boolean | null | undefined | PortalClientUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload, S>;
export type PortalClientUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortalClientUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortalClientUserCountAggregateInputType | true;
};
export interface PortalClientUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortalClientUser'];
        meta: {
            name: 'PortalClientUser';
        };
    };
    findUnique<T extends PortalClientUserFindUniqueArgs>(args: Prisma.SelectSubset<T, PortalClientUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortalClientUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortalClientUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortalClientUserFindFirstArgs>(args?: Prisma.SelectSubset<T, PortalClientUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortalClientUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortalClientUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortalClientUserFindManyArgs>(args?: Prisma.SelectSubset<T, PortalClientUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortalClientUserCreateArgs>(args: Prisma.SelectSubset<T, PortalClientUserCreateArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortalClientUserCreateManyArgs>(args?: Prisma.SelectSubset<T, PortalClientUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortalClientUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortalClientUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortalClientUserDeleteArgs>(args: Prisma.SelectSubset<T, PortalClientUserDeleteArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortalClientUserUpdateArgs>(args: Prisma.SelectSubset<T, PortalClientUserUpdateArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortalClientUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortalClientUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortalClientUserUpdateManyArgs>(args: Prisma.SelectSubset<T, PortalClientUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortalClientUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortalClientUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortalClientUserUpsertArgs>(args: Prisma.SelectSubset<T, PortalClientUserUpsertArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortalClientUserCountArgs>(args?: Prisma.Subset<T, PortalClientUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortalClientUserCountAggregateOutputType> : number>;
    aggregate<T extends PortalClientUserAggregateArgs>(args: Prisma.Subset<T, PortalClientUserAggregateArgs>): Prisma.PrismaPromise<GetPortalClientUserAggregateType<T>>;
    groupBy<T extends PortalClientUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortalClientUserGroupByArgs['orderBy'];
    } : {
        orderBy?: PortalClientUserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortalClientUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalClientUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortalClientUserFieldRefs;
}
export interface Prisma__PortalClientUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.PortalClientUser$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortalClientUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortalClientUserFieldRefs {
    readonly id: Prisma.FieldRef<"PortalClientUser", 'String'>;
    readonly investorId: Prisma.FieldRef<"PortalClientUser", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"PortalClientUser", 'String'>;
    readonly failedLoginAttempts: Prisma.FieldRef<"PortalClientUser", 'Int'>;
    readonly lockedUntil: Prisma.FieldRef<"PortalClientUser", 'DateTime'>;
    readonly status: Prisma.FieldRef<"PortalClientUser", 'UserStatus'>;
    readonly firstLoginAt: Prisma.FieldRef<"PortalClientUser", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PortalClientUser", 'DateTime'>;
}
export type PortalClientUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    where: Prisma.PortalClientUserWhereUniqueInput;
};
export type PortalClientUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    where: Prisma.PortalClientUserWhereUniqueInput;
};
export type PortalClientUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    where?: Prisma.PortalClientUserWhereInput;
    orderBy?: Prisma.PortalClientUserOrderByWithRelationInput | Prisma.PortalClientUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalClientUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalClientUserScalarFieldEnum | Prisma.PortalClientUserScalarFieldEnum[];
};
export type PortalClientUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    where?: Prisma.PortalClientUserWhereInput;
    orderBy?: Prisma.PortalClientUserOrderByWithRelationInput | Prisma.PortalClientUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalClientUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalClientUserScalarFieldEnum | Prisma.PortalClientUserScalarFieldEnum[];
};
export type PortalClientUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    where?: Prisma.PortalClientUserWhereInput;
    orderBy?: Prisma.PortalClientUserOrderByWithRelationInput | Prisma.PortalClientUserOrderByWithRelationInput[];
    cursor?: Prisma.PortalClientUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalClientUserScalarFieldEnum | Prisma.PortalClientUserScalarFieldEnum[];
};
export type PortalClientUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalClientUserCreateInput, Prisma.PortalClientUserUncheckedCreateInput>;
};
export type PortalClientUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortalClientUserCreateManyInput | Prisma.PortalClientUserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortalClientUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    data: Prisma.PortalClientUserCreateManyInput | Prisma.PortalClientUserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortalClientUserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortalClientUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalClientUserUpdateInput, Prisma.PortalClientUserUncheckedUpdateInput>;
    where: Prisma.PortalClientUserWhereUniqueInput;
};
export type PortalClientUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortalClientUserUpdateManyMutationInput, Prisma.PortalClientUserUncheckedUpdateManyInput>;
    where?: Prisma.PortalClientUserWhereInput;
    limit?: number;
};
export type PortalClientUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalClientUserUpdateManyMutationInput, Prisma.PortalClientUserUncheckedUpdateManyInput>;
    where?: Prisma.PortalClientUserWhereInput;
    limit?: number;
    include?: Prisma.PortalClientUserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortalClientUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    where: Prisma.PortalClientUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalClientUserCreateInput, Prisma.PortalClientUserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortalClientUserUpdateInput, Prisma.PortalClientUserUncheckedUpdateInput>;
};
export type PortalClientUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
    where: Prisma.PortalClientUserWhereUniqueInput;
};
export type PortalClientUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalClientUserWhereInput;
    limit?: number;
};
export type PortalClientUser$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
    where?: Prisma.PortalClientSessionWhereInput;
    orderBy?: Prisma.PortalClientSessionOrderByWithRelationInput | Prisma.PortalClientSessionOrderByWithRelationInput[];
    cursor?: Prisma.PortalClientSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortalClientSessionScalarFieldEnum | Prisma.PortalClientSessionScalarFieldEnum[];
};
export type PortalClientUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientUserSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientUserOmit<ExtArgs> | null;
    include?: Prisma.PortalClientUserInclude<ExtArgs> | null;
};
