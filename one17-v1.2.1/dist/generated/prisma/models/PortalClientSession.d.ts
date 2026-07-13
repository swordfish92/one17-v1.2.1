import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortalClientSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$PortalClientSessionPayload>;
export type AggregatePortalClientSession = {
    _count: PortalClientSessionCountAggregateOutputType | null;
    _min: PortalClientSessionMinAggregateOutputType | null;
    _max: PortalClientSessionMaxAggregateOutputType | null;
};
export type PortalClientSessionMinAggregateOutputType = {
    id: string | null;
    portalUserId: string | null;
    tokenHash: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
};
export type PortalClientSessionMaxAggregateOutputType = {
    id: string | null;
    portalUserId: string | null;
    tokenHash: string | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
};
export type PortalClientSessionCountAggregateOutputType = {
    id: number;
    portalUserId: number;
    tokenHash: number;
    createdAt: number;
    expiresAt: number;
    revokedAt: number;
    ipAddress: number;
    _all: number;
};
export type PortalClientSessionMinAggregateInputType = {
    id?: true;
    portalUserId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
};
export type PortalClientSessionMaxAggregateInputType = {
    id?: true;
    portalUserId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
};
export type PortalClientSessionCountAggregateInputType = {
    id?: true;
    portalUserId?: true;
    tokenHash?: true;
    createdAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    _all?: true;
};
export type PortalClientSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalClientSessionWhereInput;
    orderBy?: Prisma.PortalClientSessionOrderByWithRelationInput | Prisma.PortalClientSessionOrderByWithRelationInput[];
    cursor?: Prisma.PortalClientSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortalClientSessionCountAggregateInputType;
    _min?: PortalClientSessionMinAggregateInputType;
    _max?: PortalClientSessionMaxAggregateInputType;
};
export type GetPortalClientSessionAggregateType<T extends PortalClientSessionAggregateArgs> = {
    [P in keyof T & keyof AggregatePortalClientSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortalClientSession[P]> : Prisma.GetScalarType<T[P], AggregatePortalClientSession[P]>;
};
export type PortalClientSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalClientSessionWhereInput;
    orderBy?: Prisma.PortalClientSessionOrderByWithAggregationInput | Prisma.PortalClientSessionOrderByWithAggregationInput[];
    by: Prisma.PortalClientSessionScalarFieldEnum[] | Prisma.PortalClientSessionScalarFieldEnum;
    having?: Prisma.PortalClientSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortalClientSessionCountAggregateInputType | true;
    _min?: PortalClientSessionMinAggregateInputType;
    _max?: PortalClientSessionMaxAggregateInputType;
};
export type PortalClientSessionGroupByOutputType = {
    id: string;
    portalUserId: string;
    tokenHash: string;
    createdAt: Date;
    expiresAt: Date;
    revokedAt: Date | null;
    ipAddress: string | null;
    _count: PortalClientSessionCountAggregateOutputType | null;
    _min: PortalClientSessionMinAggregateOutputType | null;
    _max: PortalClientSessionMaxAggregateOutputType | null;
};
export type GetPortalClientSessionGroupByPayload<T extends PortalClientSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortalClientSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortalClientSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortalClientSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortalClientSessionGroupByOutputType[P]>;
}>>;
export type PortalClientSessionWhereInput = {
    AND?: Prisma.PortalClientSessionWhereInput | Prisma.PortalClientSessionWhereInput[];
    OR?: Prisma.PortalClientSessionWhereInput[];
    NOT?: Prisma.PortalClientSessionWhereInput | Prisma.PortalClientSessionWhereInput[];
    id?: Prisma.UuidFilter<"PortalClientSession"> | string;
    portalUserId?: Prisma.UuidFilter<"PortalClientSession"> | string;
    tokenHash?: Prisma.StringFilter<"PortalClientSession"> | string;
    createdAt?: Prisma.DateTimeFilter<"PortalClientSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"PortalClientSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PortalClientSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"PortalClientSession"> | string | null;
    portalUser?: Prisma.XOR<Prisma.PortalClientUserScalarRelationFilter, Prisma.PortalClientUserWhereInput>;
};
export type PortalClientSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    portalUser?: Prisma.PortalClientUserOrderByWithRelationInput;
};
export type PortalClientSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.PortalClientSessionWhereInput | Prisma.PortalClientSessionWhereInput[];
    OR?: Prisma.PortalClientSessionWhereInput[];
    NOT?: Prisma.PortalClientSessionWhereInput | Prisma.PortalClientSessionWhereInput[];
    portalUserId?: Prisma.UuidFilter<"PortalClientSession"> | string;
    createdAt?: Prisma.DateTimeFilter<"PortalClientSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"PortalClientSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PortalClientSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"PortalClientSession"> | string | null;
    portalUser?: Prisma.XOR<Prisma.PortalClientUserScalarRelationFilter, Prisma.PortalClientUserWhereInput>;
}, "id" | "tokenHash">;
export type PortalClientSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PortalClientSessionCountOrderByAggregateInput;
    _max?: Prisma.PortalClientSessionMaxOrderByAggregateInput;
    _min?: Prisma.PortalClientSessionMinOrderByAggregateInput;
};
export type PortalClientSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortalClientSessionScalarWhereWithAggregatesInput | Prisma.PortalClientSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortalClientSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortalClientSessionScalarWhereWithAggregatesInput | Prisma.PortalClientSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PortalClientSession"> | string;
    portalUserId?: Prisma.UuidWithAggregatesFilter<"PortalClientSession"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"PortalClientSession"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PortalClientSession"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"PortalClientSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PortalClientSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"PortalClientSession"> | string | null;
};
export type PortalClientSessionCreateInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    portalUser: Prisma.PortalClientUserCreateNestedOneWithoutSessionsInput;
};
export type PortalClientSessionUncheckedCreateInput = {
    id?: string;
    portalUserId: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalClientSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portalUser?: Prisma.PortalClientUserUpdateOneRequiredWithoutSessionsNestedInput;
};
export type PortalClientSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    portalUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalClientSessionCreateManyInput = {
    id?: string;
    portalUserId: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalClientSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalClientSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    portalUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalClientSessionListRelationFilter = {
    every?: Prisma.PortalClientSessionWhereInput;
    some?: Prisma.PortalClientSessionWhereInput;
    none?: Prisma.PortalClientSessionWhereInput;
};
export type PortalClientSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortalClientSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PortalClientSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PortalClientSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    portalUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type PortalClientSessionCreateNestedManyWithoutPortalUserInput = {
    create?: Prisma.XOR<Prisma.PortalClientSessionCreateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalClientSessionCreateWithoutPortalUserInput[] | Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput[];
    createMany?: Prisma.PortalClientSessionCreateManyPortalUserInputEnvelope;
    connect?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
};
export type PortalClientSessionUncheckedCreateNestedManyWithoutPortalUserInput = {
    create?: Prisma.XOR<Prisma.PortalClientSessionCreateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalClientSessionCreateWithoutPortalUserInput[] | Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput[];
    createMany?: Prisma.PortalClientSessionCreateManyPortalUserInputEnvelope;
    connect?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
};
export type PortalClientSessionUpdateManyWithoutPortalUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortalClientSessionCreateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalClientSessionCreateWithoutPortalUserInput[] | Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput[];
    upsert?: Prisma.PortalClientSessionUpsertWithWhereUniqueWithoutPortalUserInput | Prisma.PortalClientSessionUpsertWithWhereUniqueWithoutPortalUserInput[];
    createMany?: Prisma.PortalClientSessionCreateManyPortalUserInputEnvelope;
    set?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    disconnect?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    delete?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    connect?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    update?: Prisma.PortalClientSessionUpdateWithWhereUniqueWithoutPortalUserInput | Prisma.PortalClientSessionUpdateWithWhereUniqueWithoutPortalUserInput[];
    updateMany?: Prisma.PortalClientSessionUpdateManyWithWhereWithoutPortalUserInput | Prisma.PortalClientSessionUpdateManyWithWhereWithoutPortalUserInput[];
    deleteMany?: Prisma.PortalClientSessionScalarWhereInput | Prisma.PortalClientSessionScalarWhereInput[];
};
export type PortalClientSessionUncheckedUpdateManyWithoutPortalUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortalClientSessionCreateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput> | Prisma.PortalClientSessionCreateWithoutPortalUserInput[] | Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput[];
    connectOrCreate?: Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput | Prisma.PortalClientSessionCreateOrConnectWithoutPortalUserInput[];
    upsert?: Prisma.PortalClientSessionUpsertWithWhereUniqueWithoutPortalUserInput | Prisma.PortalClientSessionUpsertWithWhereUniqueWithoutPortalUserInput[];
    createMany?: Prisma.PortalClientSessionCreateManyPortalUserInputEnvelope;
    set?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    disconnect?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    delete?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    connect?: Prisma.PortalClientSessionWhereUniqueInput | Prisma.PortalClientSessionWhereUniqueInput[];
    update?: Prisma.PortalClientSessionUpdateWithWhereUniqueWithoutPortalUserInput | Prisma.PortalClientSessionUpdateWithWhereUniqueWithoutPortalUserInput[];
    updateMany?: Prisma.PortalClientSessionUpdateManyWithWhereWithoutPortalUserInput | Prisma.PortalClientSessionUpdateManyWithWhereWithoutPortalUserInput[];
    deleteMany?: Prisma.PortalClientSessionScalarWhereInput | Prisma.PortalClientSessionScalarWhereInput[];
};
export type PortalClientSessionCreateWithoutPortalUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalClientSessionUncheckedCreateWithoutPortalUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalClientSessionCreateOrConnectWithoutPortalUserInput = {
    where: Prisma.PortalClientSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalClientSessionCreateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput>;
};
export type PortalClientSessionCreateManyPortalUserInputEnvelope = {
    data: Prisma.PortalClientSessionCreateManyPortalUserInput | Prisma.PortalClientSessionCreateManyPortalUserInput[];
    skipDuplicates?: boolean;
};
export type PortalClientSessionUpsertWithWhereUniqueWithoutPortalUserInput = {
    where: Prisma.PortalClientSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortalClientSessionUpdateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedUpdateWithoutPortalUserInput>;
    create: Prisma.XOR<Prisma.PortalClientSessionCreateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedCreateWithoutPortalUserInput>;
};
export type PortalClientSessionUpdateWithWhereUniqueWithoutPortalUserInput = {
    where: Prisma.PortalClientSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortalClientSessionUpdateWithoutPortalUserInput, Prisma.PortalClientSessionUncheckedUpdateWithoutPortalUserInput>;
};
export type PortalClientSessionUpdateManyWithWhereWithoutPortalUserInput = {
    where: Prisma.PortalClientSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.PortalClientSessionUpdateManyMutationInput, Prisma.PortalClientSessionUncheckedUpdateManyWithoutPortalUserInput>;
};
export type PortalClientSessionScalarWhereInput = {
    AND?: Prisma.PortalClientSessionScalarWhereInput | Prisma.PortalClientSessionScalarWhereInput[];
    OR?: Prisma.PortalClientSessionScalarWhereInput[];
    NOT?: Prisma.PortalClientSessionScalarWhereInput | Prisma.PortalClientSessionScalarWhereInput[];
    id?: Prisma.UuidFilter<"PortalClientSession"> | string;
    portalUserId?: Prisma.UuidFilter<"PortalClientSession"> | string;
    tokenHash?: Prisma.StringFilter<"PortalClientSession"> | string;
    createdAt?: Prisma.DateTimeFilter<"PortalClientSession"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"PortalClientSession"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PortalClientSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"PortalClientSession"> | string | null;
};
export type PortalClientSessionCreateManyPortalUserInput = {
    id?: string;
    tokenHash: string;
    createdAt?: Date | string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type PortalClientSessionUpdateWithoutPortalUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalClientSessionUncheckedUpdateWithoutPortalUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalClientSessionUncheckedUpdateManyWithoutPortalUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PortalClientSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    portalUser?: boolean | Prisma.PortalClientUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalClientSession"]>;
export type PortalClientSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    portalUser?: boolean | Prisma.PortalClientUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalClientSession"]>;
export type PortalClientSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    portalUser?: boolean | Prisma.PortalClientUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portalClientSession"]>;
export type PortalClientSessionSelectScalar = {
    id?: boolean;
    portalUserId?: boolean;
    tokenHash?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
};
export type PortalClientSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "portalUserId" | "tokenHash" | "createdAt" | "expiresAt" | "revokedAt" | "ipAddress", ExtArgs["result"]["portalClientSession"]>;
export type PortalClientSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portalUser?: boolean | Prisma.PortalClientUserDefaultArgs<ExtArgs>;
};
export type PortalClientSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portalUser?: boolean | Prisma.PortalClientUserDefaultArgs<ExtArgs>;
};
export type PortalClientSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    portalUser?: boolean | Prisma.PortalClientUserDefaultArgs<ExtArgs>;
};
export type $PortalClientSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortalClientSession";
    objects: {
        portalUser: Prisma.$PortalClientUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        portalUserId: string;
        tokenHash: string;
        createdAt: Date;
        expiresAt: Date;
        revokedAt: Date | null;
        ipAddress: string | null;
    }, ExtArgs["result"]["portalClientSession"]>;
    composites: {};
};
export type PortalClientSessionGetPayload<S extends boolean | null | undefined | PortalClientSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload, S>;
export type PortalClientSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortalClientSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortalClientSessionCountAggregateInputType | true;
};
export interface PortalClientSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortalClientSession'];
        meta: {
            name: 'PortalClientSession';
        };
    };
    findUnique<T extends PortalClientSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, PortalClientSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortalClientSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortalClientSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortalClientSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, PortalClientSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortalClientSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortalClientSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortalClientSessionFindManyArgs>(args?: Prisma.SelectSubset<T, PortalClientSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortalClientSessionCreateArgs>(args: Prisma.SelectSubset<T, PortalClientSessionCreateArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortalClientSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, PortalClientSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortalClientSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortalClientSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortalClientSessionDeleteArgs>(args: Prisma.SelectSubset<T, PortalClientSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortalClientSessionUpdateArgs>(args: Prisma.SelectSubset<T, PortalClientSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortalClientSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortalClientSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortalClientSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, PortalClientSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortalClientSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortalClientSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortalClientSessionUpsertArgs>(args: Prisma.SelectSubset<T, PortalClientSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__PortalClientSessionClient<runtime.Types.Result.GetResult<Prisma.$PortalClientSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortalClientSessionCountArgs>(args?: Prisma.Subset<T, PortalClientSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortalClientSessionCountAggregateOutputType> : number>;
    aggregate<T extends PortalClientSessionAggregateArgs>(args: Prisma.Subset<T, PortalClientSessionAggregateArgs>): Prisma.PrismaPromise<GetPortalClientSessionAggregateType<T>>;
    groupBy<T extends PortalClientSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortalClientSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: PortalClientSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortalClientSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalClientSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortalClientSessionFieldRefs;
}
export interface Prisma__PortalClientSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    portalUser<T extends Prisma.PortalClientUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortalClientUserDefaultArgs<ExtArgs>>): Prisma.Prisma__PortalClientUserClient<runtime.Types.Result.GetResult<Prisma.$PortalClientUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortalClientSessionFieldRefs {
    readonly id: Prisma.FieldRef<"PortalClientSession", 'String'>;
    readonly portalUserId: Prisma.FieldRef<"PortalClientSession", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"PortalClientSession", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PortalClientSession", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"PortalClientSession", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"PortalClientSession", 'DateTime'>;
    readonly ipAddress: Prisma.FieldRef<"PortalClientSession", 'String'>;
}
export type PortalClientSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
    where: Prisma.PortalClientSessionWhereUniqueInput;
};
export type PortalClientSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
    where: Prisma.PortalClientSessionWhereUniqueInput;
};
export type PortalClientSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortalClientSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortalClientSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortalClientSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalClientSessionCreateInput, Prisma.PortalClientSessionUncheckedCreateInput>;
};
export type PortalClientSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortalClientSessionCreateManyInput | Prisma.PortalClientSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortalClientSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    data: Prisma.PortalClientSessionCreateManyInput | Prisma.PortalClientSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortalClientSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortalClientSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalClientSessionUpdateInput, Prisma.PortalClientSessionUncheckedUpdateInput>;
    where: Prisma.PortalClientSessionWhereUniqueInput;
};
export type PortalClientSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortalClientSessionUpdateManyMutationInput, Prisma.PortalClientSessionUncheckedUpdateManyInput>;
    where?: Prisma.PortalClientSessionWhereInput;
    limit?: number;
};
export type PortalClientSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortalClientSessionUpdateManyMutationInput, Prisma.PortalClientSessionUncheckedUpdateManyInput>;
    where?: Prisma.PortalClientSessionWhereInput;
    limit?: number;
    include?: Prisma.PortalClientSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortalClientSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
    where: Prisma.PortalClientSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortalClientSessionCreateInput, Prisma.PortalClientSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortalClientSessionUpdateInput, Prisma.PortalClientSessionUncheckedUpdateInput>;
};
export type PortalClientSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
    where: Prisma.PortalClientSessionWhereUniqueInput;
};
export type PortalClientSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortalClientSessionWhereInput;
    limit?: number;
};
export type PortalClientSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortalClientSessionSelect<ExtArgs> | null;
    omit?: Prisma.PortalClientSessionOmit<ExtArgs> | null;
    include?: Prisma.PortalClientSessionInclude<ExtArgs> | null;
};
