import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SavedDashboardModel = runtime.Types.Result.DefaultSelection<Prisma.$SavedDashboardPayload>;
export type AggregateSavedDashboard = {
    _count: SavedDashboardCountAggregateOutputType | null;
    _min: SavedDashboardMinAggregateOutputType | null;
    _max: SavedDashboardMaxAggregateOutputType | null;
};
export type SavedDashboardMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    scope: $Enums.DashboardScope | null;
    ownerUserId: string | null;
    orgUnitCode: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavedDashboardMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    scope: $Enums.DashboardScope | null;
    ownerUserId: string | null;
    orgUnitCode: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavedDashboardCountAggregateOutputType = {
    id: number;
    name: number;
    scope: number;
    ownerUserId: number;
    orgUnitCode: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SavedDashboardMinAggregateInputType = {
    id?: true;
    name?: true;
    scope?: true;
    ownerUserId?: true;
    orgUnitCode?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavedDashboardMaxAggregateInputType = {
    id?: true;
    name?: true;
    scope?: true;
    ownerUserId?: true;
    orgUnitCode?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavedDashboardCountAggregateInputType = {
    id?: true;
    name?: true;
    scope?: true;
    ownerUserId?: true;
    orgUnitCode?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SavedDashboardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedDashboardWhereInput;
    orderBy?: Prisma.SavedDashboardOrderByWithRelationInput | Prisma.SavedDashboardOrderByWithRelationInput[];
    cursor?: Prisma.SavedDashboardWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SavedDashboardCountAggregateInputType;
    _min?: SavedDashboardMinAggregateInputType;
    _max?: SavedDashboardMaxAggregateInputType;
};
export type GetSavedDashboardAggregateType<T extends SavedDashboardAggregateArgs> = {
    [P in keyof T & keyof AggregateSavedDashboard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavedDashboard[P]> : Prisma.GetScalarType<T[P], AggregateSavedDashboard[P]>;
};
export type SavedDashboardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedDashboardWhereInput;
    orderBy?: Prisma.SavedDashboardOrderByWithAggregationInput | Prisma.SavedDashboardOrderByWithAggregationInput[];
    by: Prisma.SavedDashboardScalarFieldEnum[] | Prisma.SavedDashboardScalarFieldEnum;
    having?: Prisma.SavedDashboardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavedDashboardCountAggregateInputType | true;
    _min?: SavedDashboardMinAggregateInputType;
    _max?: SavedDashboardMaxAggregateInputType;
};
export type SavedDashboardGroupByOutputType = {
    id: string;
    name: string;
    scope: $Enums.DashboardScope;
    ownerUserId: string;
    orgUnitCode: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SavedDashboardCountAggregateOutputType | null;
    _min: SavedDashboardMinAggregateOutputType | null;
    _max: SavedDashboardMaxAggregateOutputType | null;
};
export type GetSavedDashboardGroupByPayload<T extends SavedDashboardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavedDashboardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavedDashboardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavedDashboardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavedDashboardGroupByOutputType[P]>;
}>>;
export type SavedDashboardWhereInput = {
    AND?: Prisma.SavedDashboardWhereInput | Prisma.SavedDashboardWhereInput[];
    OR?: Prisma.SavedDashboardWhereInput[];
    NOT?: Prisma.SavedDashboardWhereInput | Prisma.SavedDashboardWhereInput[];
    id?: Prisma.UuidFilter<"SavedDashboard"> | string;
    name?: Prisma.StringFilter<"SavedDashboard"> | string;
    scope?: Prisma.EnumDashboardScopeFilter<"SavedDashboard"> | $Enums.DashboardScope;
    ownerUserId?: Prisma.UuidFilter<"SavedDashboard"> | string;
    orgUnitCode?: Prisma.StringNullableFilter<"SavedDashboard"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavedDashboard"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedDashboard"> | Date | string;
    owner?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    tiles?: Prisma.DashboardTileListRelationFilter;
};
export type SavedDashboardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    owner?: Prisma.AppUserOrderByWithRelationInput;
    tiles?: Prisma.DashboardTileOrderByRelationAggregateInput;
};
export type SavedDashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SavedDashboardWhereInput | Prisma.SavedDashboardWhereInput[];
    OR?: Prisma.SavedDashboardWhereInput[];
    NOT?: Prisma.SavedDashboardWhereInput | Prisma.SavedDashboardWhereInput[];
    name?: Prisma.StringFilter<"SavedDashboard"> | string;
    scope?: Prisma.EnumDashboardScopeFilter<"SavedDashboard"> | $Enums.DashboardScope;
    ownerUserId?: Prisma.UuidFilter<"SavedDashboard"> | string;
    orgUnitCode?: Prisma.StringNullableFilter<"SavedDashboard"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavedDashboard"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedDashboard"> | Date | string;
    owner?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    tiles?: Prisma.DashboardTileListRelationFilter;
}, "id">;
export type SavedDashboardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SavedDashboardCountOrderByAggregateInput;
    _max?: Prisma.SavedDashboardMaxOrderByAggregateInput;
    _min?: Prisma.SavedDashboardMinOrderByAggregateInput;
};
export type SavedDashboardScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavedDashboardScalarWhereWithAggregatesInput | Prisma.SavedDashboardScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavedDashboardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavedDashboardScalarWhereWithAggregatesInput | Prisma.SavedDashboardScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SavedDashboard"> | string;
    name?: Prisma.StringWithAggregatesFilter<"SavedDashboard"> | string;
    scope?: Prisma.EnumDashboardScopeWithAggregatesFilter<"SavedDashboard"> | $Enums.DashboardScope;
    ownerUserId?: Prisma.UuidWithAggregatesFilter<"SavedDashboard"> | string;
    orgUnitCode?: Prisma.StringNullableWithAggregatesFilter<"SavedDashboard"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SavedDashboard"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SavedDashboard"> | Date | string;
};
export type SavedDashboardCreateInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.AppUserCreateNestedOneWithoutSavedDashboardsOwnedInput;
    tiles?: Prisma.DashboardTileCreateNestedManyWithoutDashboardInput;
};
export type SavedDashboardUncheckedCreateInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    ownerUserId: string;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tiles?: Prisma.DashboardTileUncheckedCreateNestedManyWithoutDashboardInput;
};
export type SavedDashboardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.AppUserUpdateOneRequiredWithoutSavedDashboardsOwnedNestedInput;
    tiles?: Prisma.DashboardTileUpdateManyWithoutDashboardNestedInput;
};
export type SavedDashboardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tiles?: Prisma.DashboardTileUncheckedUpdateManyWithoutDashboardNestedInput;
};
export type SavedDashboardCreateManyInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    ownerUserId: string;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedDashboardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDashboardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDashboardListRelationFilter = {
    every?: Prisma.SavedDashboardWhereInput;
    some?: Prisma.SavedDashboardWhereInput;
    none?: Prisma.SavedDashboardWhereInput;
};
export type SavedDashboardOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavedDashboardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedDashboardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedDashboardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    ownerUserId?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedDashboardScalarRelationFilter = {
    is?: Prisma.SavedDashboardWhereInput;
    isNot?: Prisma.SavedDashboardWhereInput;
};
export type SavedDashboardCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.SavedDashboardCreateWithoutOwnerInput, Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput> | Prisma.SavedDashboardCreateWithoutOwnerInput[] | Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput | Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.SavedDashboardCreateManyOwnerInputEnvelope;
    connect?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
};
export type SavedDashboardUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.SavedDashboardCreateWithoutOwnerInput, Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput> | Prisma.SavedDashboardCreateWithoutOwnerInput[] | Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput | Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.SavedDashboardCreateManyOwnerInputEnvelope;
    connect?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
};
export type SavedDashboardUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.SavedDashboardCreateWithoutOwnerInput, Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput> | Prisma.SavedDashboardCreateWithoutOwnerInput[] | Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput | Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.SavedDashboardUpsertWithWhereUniqueWithoutOwnerInput | Prisma.SavedDashboardUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.SavedDashboardCreateManyOwnerInputEnvelope;
    set?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    disconnect?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    delete?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    connect?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    update?: Prisma.SavedDashboardUpdateWithWhereUniqueWithoutOwnerInput | Prisma.SavedDashboardUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.SavedDashboardUpdateManyWithWhereWithoutOwnerInput | Prisma.SavedDashboardUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.SavedDashboardScalarWhereInput | Prisma.SavedDashboardScalarWhereInput[];
};
export type SavedDashboardUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.SavedDashboardCreateWithoutOwnerInput, Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput> | Prisma.SavedDashboardCreateWithoutOwnerInput[] | Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput | Prisma.SavedDashboardCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.SavedDashboardUpsertWithWhereUniqueWithoutOwnerInput | Prisma.SavedDashboardUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.SavedDashboardCreateManyOwnerInputEnvelope;
    set?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    disconnect?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    delete?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    connect?: Prisma.SavedDashboardWhereUniqueInput | Prisma.SavedDashboardWhereUniqueInput[];
    update?: Prisma.SavedDashboardUpdateWithWhereUniqueWithoutOwnerInput | Prisma.SavedDashboardUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.SavedDashboardUpdateManyWithWhereWithoutOwnerInput | Prisma.SavedDashboardUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.SavedDashboardScalarWhereInput | Prisma.SavedDashboardScalarWhereInput[];
};
export type EnumDashboardScopeFieldUpdateOperationsInput = {
    set?: $Enums.DashboardScope;
};
export type SavedDashboardCreateNestedOneWithoutTilesInput = {
    create?: Prisma.XOR<Prisma.SavedDashboardCreateWithoutTilesInput, Prisma.SavedDashboardUncheckedCreateWithoutTilesInput>;
    connectOrCreate?: Prisma.SavedDashboardCreateOrConnectWithoutTilesInput;
    connect?: Prisma.SavedDashboardWhereUniqueInput;
};
export type SavedDashboardUpdateOneRequiredWithoutTilesNestedInput = {
    create?: Prisma.XOR<Prisma.SavedDashboardCreateWithoutTilesInput, Prisma.SavedDashboardUncheckedCreateWithoutTilesInput>;
    connectOrCreate?: Prisma.SavedDashboardCreateOrConnectWithoutTilesInput;
    upsert?: Prisma.SavedDashboardUpsertWithoutTilesInput;
    connect?: Prisma.SavedDashboardWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SavedDashboardUpdateToOneWithWhereWithoutTilesInput, Prisma.SavedDashboardUpdateWithoutTilesInput>, Prisma.SavedDashboardUncheckedUpdateWithoutTilesInput>;
};
export type SavedDashboardCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tiles?: Prisma.DashboardTileCreateNestedManyWithoutDashboardInput;
};
export type SavedDashboardUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tiles?: Prisma.DashboardTileUncheckedCreateNestedManyWithoutDashboardInput;
};
export type SavedDashboardCreateOrConnectWithoutOwnerInput = {
    where: Prisma.SavedDashboardWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedDashboardCreateWithoutOwnerInput, Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput>;
};
export type SavedDashboardCreateManyOwnerInputEnvelope = {
    data: Prisma.SavedDashboardCreateManyOwnerInput | Prisma.SavedDashboardCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type SavedDashboardUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.SavedDashboardWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedDashboardUpdateWithoutOwnerInput, Prisma.SavedDashboardUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.SavedDashboardCreateWithoutOwnerInput, Prisma.SavedDashboardUncheckedCreateWithoutOwnerInput>;
};
export type SavedDashboardUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.SavedDashboardWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedDashboardUpdateWithoutOwnerInput, Prisma.SavedDashboardUncheckedUpdateWithoutOwnerInput>;
};
export type SavedDashboardUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.SavedDashboardScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedDashboardUpdateManyMutationInput, Prisma.SavedDashboardUncheckedUpdateManyWithoutOwnerInput>;
};
export type SavedDashboardScalarWhereInput = {
    AND?: Prisma.SavedDashboardScalarWhereInput | Prisma.SavedDashboardScalarWhereInput[];
    OR?: Prisma.SavedDashboardScalarWhereInput[];
    NOT?: Prisma.SavedDashboardScalarWhereInput | Prisma.SavedDashboardScalarWhereInput[];
    id?: Prisma.UuidFilter<"SavedDashboard"> | string;
    name?: Prisma.StringFilter<"SavedDashboard"> | string;
    scope?: Prisma.EnumDashboardScopeFilter<"SavedDashboard"> | $Enums.DashboardScope;
    ownerUserId?: Prisma.UuidFilter<"SavedDashboard"> | string;
    orgUnitCode?: Prisma.StringNullableFilter<"SavedDashboard"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavedDashboard"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedDashboard"> | Date | string;
};
export type SavedDashboardCreateWithoutTilesInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.AppUserCreateNestedOneWithoutSavedDashboardsOwnedInput;
};
export type SavedDashboardUncheckedCreateWithoutTilesInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    ownerUserId: string;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedDashboardCreateOrConnectWithoutTilesInput = {
    where: Prisma.SavedDashboardWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedDashboardCreateWithoutTilesInput, Prisma.SavedDashboardUncheckedCreateWithoutTilesInput>;
};
export type SavedDashboardUpsertWithoutTilesInput = {
    update: Prisma.XOR<Prisma.SavedDashboardUpdateWithoutTilesInput, Prisma.SavedDashboardUncheckedUpdateWithoutTilesInput>;
    create: Prisma.XOR<Prisma.SavedDashboardCreateWithoutTilesInput, Prisma.SavedDashboardUncheckedCreateWithoutTilesInput>;
    where?: Prisma.SavedDashboardWhereInput;
};
export type SavedDashboardUpdateToOneWithWhereWithoutTilesInput = {
    where?: Prisma.SavedDashboardWhereInput;
    data: Prisma.XOR<Prisma.SavedDashboardUpdateWithoutTilesInput, Prisma.SavedDashboardUncheckedUpdateWithoutTilesInput>;
};
export type SavedDashboardUpdateWithoutTilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.AppUserUpdateOneRequiredWithoutSavedDashboardsOwnedNestedInput;
};
export type SavedDashboardUncheckedUpdateWithoutTilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    ownerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDashboardCreateManyOwnerInput = {
    id?: string;
    name: string;
    scope: $Enums.DashboardScope;
    orgUnitCode?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedDashboardUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tiles?: Prisma.DashboardTileUpdateManyWithoutDashboardNestedInput;
};
export type SavedDashboardUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tiles?: Prisma.DashboardTileUncheckedUpdateManyWithoutDashboardNestedInput;
};
export type SavedDashboardUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumDashboardScopeFieldUpdateOperationsInput | $Enums.DashboardScope;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDashboardCountOutputType = {
    tiles: number;
};
export type SavedDashboardCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tiles?: boolean | SavedDashboardCountOutputTypeCountTilesArgs;
};
export type SavedDashboardCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardCountOutputTypeSelect<ExtArgs> | null;
};
export type SavedDashboardCountOutputTypeCountTilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardTileWhereInput;
};
export type SavedDashboardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    scope?: boolean;
    ownerUserId?: boolean;
    orgUnitCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    tiles?: boolean | Prisma.SavedDashboard$tilesArgs<ExtArgs>;
    _count?: boolean | Prisma.SavedDashboardCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedDashboard"]>;
export type SavedDashboardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    scope?: boolean;
    ownerUserId?: boolean;
    orgUnitCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedDashboard"]>;
export type SavedDashboardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    scope?: boolean;
    ownerUserId?: boolean;
    orgUnitCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedDashboard"]>;
export type SavedDashboardSelectScalar = {
    id?: boolean;
    name?: boolean;
    scope?: boolean;
    ownerUserId?: boolean;
    orgUnitCode?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SavedDashboardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "scope" | "ownerUserId" | "orgUnitCode" | "createdAt" | "updatedAt", ExtArgs["result"]["savedDashboard"]>;
export type SavedDashboardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    tiles?: boolean | Prisma.SavedDashboard$tilesArgs<ExtArgs>;
    _count?: boolean | Prisma.SavedDashboardCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SavedDashboardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type SavedDashboardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $SavedDashboardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavedDashboard";
    objects: {
        owner: Prisma.$AppUserPayload<ExtArgs>;
        tiles: Prisma.$DashboardTilePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        scope: $Enums.DashboardScope;
        ownerUserId: string;
        orgUnitCode: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["savedDashboard"]>;
    composites: {};
};
export type SavedDashboardGetPayload<S extends boolean | null | undefined | SavedDashboardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload, S>;
export type SavedDashboardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavedDashboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavedDashboardCountAggregateInputType | true;
};
export interface SavedDashboardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavedDashboard'];
        meta: {
            name: 'SavedDashboard';
        };
    };
    findUnique<T extends SavedDashboardFindUniqueArgs>(args: Prisma.SelectSubset<T, SavedDashboardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SavedDashboardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavedDashboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SavedDashboardFindFirstArgs>(args?: Prisma.SelectSubset<T, SavedDashboardFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SavedDashboardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavedDashboardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SavedDashboardFindManyArgs>(args?: Prisma.SelectSubset<T, SavedDashboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SavedDashboardCreateArgs>(args: Prisma.SelectSubset<T, SavedDashboardCreateArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SavedDashboardCreateManyArgs>(args?: Prisma.SelectSubset<T, SavedDashboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SavedDashboardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SavedDashboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SavedDashboardDeleteArgs>(args: Prisma.SelectSubset<T, SavedDashboardDeleteArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SavedDashboardUpdateArgs>(args: Prisma.SelectSubset<T, SavedDashboardUpdateArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SavedDashboardDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavedDashboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SavedDashboardUpdateManyArgs>(args: Prisma.SelectSubset<T, SavedDashboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SavedDashboardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SavedDashboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SavedDashboardUpsertArgs>(args: Prisma.SelectSubset<T, SavedDashboardUpsertArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SavedDashboardCountArgs>(args?: Prisma.Subset<T, SavedDashboardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavedDashboardCountAggregateOutputType> : number>;
    aggregate<T extends SavedDashboardAggregateArgs>(args: Prisma.Subset<T, SavedDashboardAggregateArgs>): Prisma.PrismaPromise<GetSavedDashboardAggregateType<T>>;
    groupBy<T extends SavedDashboardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavedDashboardGroupByArgs['orderBy'];
    } : {
        orderBy?: SavedDashboardGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavedDashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SavedDashboardFieldRefs;
}
export interface Prisma__SavedDashboardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tiles<T extends Prisma.SavedDashboard$tilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavedDashboard$tilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SavedDashboardFieldRefs {
    readonly id: Prisma.FieldRef<"SavedDashboard", 'String'>;
    readonly name: Prisma.FieldRef<"SavedDashboard", 'String'>;
    readonly scope: Prisma.FieldRef<"SavedDashboard", 'DashboardScope'>;
    readonly ownerUserId: Prisma.FieldRef<"SavedDashboard", 'String'>;
    readonly orgUnitCode: Prisma.FieldRef<"SavedDashboard", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SavedDashboard", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SavedDashboard", 'DateTime'>;
}
export type SavedDashboardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    where: Prisma.SavedDashboardWhereUniqueInput;
};
export type SavedDashboardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    where: Prisma.SavedDashboardWhereUniqueInput;
};
export type SavedDashboardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    where?: Prisma.SavedDashboardWhereInput;
    orderBy?: Prisma.SavedDashboardOrderByWithRelationInput | Prisma.SavedDashboardOrderByWithRelationInput[];
    cursor?: Prisma.SavedDashboardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedDashboardScalarFieldEnum | Prisma.SavedDashboardScalarFieldEnum[];
};
export type SavedDashboardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    where?: Prisma.SavedDashboardWhereInput;
    orderBy?: Prisma.SavedDashboardOrderByWithRelationInput | Prisma.SavedDashboardOrderByWithRelationInput[];
    cursor?: Prisma.SavedDashboardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedDashboardScalarFieldEnum | Prisma.SavedDashboardScalarFieldEnum[];
};
export type SavedDashboardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    where?: Prisma.SavedDashboardWhereInput;
    orderBy?: Prisma.SavedDashboardOrderByWithRelationInput | Prisma.SavedDashboardOrderByWithRelationInput[];
    cursor?: Prisma.SavedDashboardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedDashboardScalarFieldEnum | Prisma.SavedDashboardScalarFieldEnum[];
};
export type SavedDashboardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedDashboardCreateInput, Prisma.SavedDashboardUncheckedCreateInput>;
};
export type SavedDashboardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SavedDashboardCreateManyInput | Prisma.SavedDashboardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SavedDashboardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    data: Prisma.SavedDashboardCreateManyInput | Prisma.SavedDashboardCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SavedDashboardIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SavedDashboardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedDashboardUpdateInput, Prisma.SavedDashboardUncheckedUpdateInput>;
    where: Prisma.SavedDashboardWhereUniqueInput;
};
export type SavedDashboardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SavedDashboardUpdateManyMutationInput, Prisma.SavedDashboardUncheckedUpdateManyInput>;
    where?: Prisma.SavedDashboardWhereInput;
    limit?: number;
};
export type SavedDashboardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedDashboardUpdateManyMutationInput, Prisma.SavedDashboardUncheckedUpdateManyInput>;
    where?: Prisma.SavedDashboardWhereInput;
    limit?: number;
    include?: Prisma.SavedDashboardIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SavedDashboardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    where: Prisma.SavedDashboardWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedDashboardCreateInput, Prisma.SavedDashboardUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SavedDashboardUpdateInput, Prisma.SavedDashboardUncheckedUpdateInput>;
};
export type SavedDashboardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
    where: Prisma.SavedDashboardWhereUniqueInput;
};
export type SavedDashboardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedDashboardWhereInput;
    limit?: number;
};
export type SavedDashboard$tilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where?: Prisma.DashboardTileWhereInput;
    orderBy?: Prisma.DashboardTileOrderByWithRelationInput | Prisma.DashboardTileOrderByWithRelationInput[];
    cursor?: Prisma.DashboardTileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardTileScalarFieldEnum | Prisma.DashboardTileScalarFieldEnum[];
};
export type SavedDashboardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDashboardSelect<ExtArgs> | null;
    omit?: Prisma.SavedDashboardOmit<ExtArgs> | null;
    include?: Prisma.SavedDashboardInclude<ExtArgs> | null;
};
