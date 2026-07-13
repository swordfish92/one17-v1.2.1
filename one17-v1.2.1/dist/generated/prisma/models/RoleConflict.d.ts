import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoleConflictModel = runtime.Types.Result.DefaultSelection<Prisma.$RoleConflictPayload>;
export type AggregateRoleConflict = {
    _count: RoleConflictCountAggregateOutputType | null;
    _min: RoleConflictMinAggregateOutputType | null;
    _max: RoleConflictMaxAggregateOutputType | null;
};
export type RoleConflictMinAggregateOutputType = {
    roleACode: string | null;
    roleBCode: string | null;
    reason: string | null;
};
export type RoleConflictMaxAggregateOutputType = {
    roleACode: string | null;
    roleBCode: string | null;
    reason: string | null;
};
export type RoleConflictCountAggregateOutputType = {
    roleACode: number;
    roleBCode: number;
    reason: number;
    _all: number;
};
export type RoleConflictMinAggregateInputType = {
    roleACode?: true;
    roleBCode?: true;
    reason?: true;
};
export type RoleConflictMaxAggregateInputType = {
    roleACode?: true;
    roleBCode?: true;
    reason?: true;
};
export type RoleConflictCountAggregateInputType = {
    roleACode?: true;
    roleBCode?: true;
    reason?: true;
    _all?: true;
};
export type RoleConflictAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleConflictWhereInput;
    orderBy?: Prisma.RoleConflictOrderByWithRelationInput | Prisma.RoleConflictOrderByWithRelationInput[];
    cursor?: Prisma.RoleConflictWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoleConflictCountAggregateInputType;
    _min?: RoleConflictMinAggregateInputType;
    _max?: RoleConflictMaxAggregateInputType;
};
export type GetRoleConflictAggregateType<T extends RoleConflictAggregateArgs> = {
    [P in keyof T & keyof AggregateRoleConflict]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoleConflict[P]> : Prisma.GetScalarType<T[P], AggregateRoleConflict[P]>;
};
export type RoleConflictGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleConflictWhereInput;
    orderBy?: Prisma.RoleConflictOrderByWithAggregationInput | Prisma.RoleConflictOrderByWithAggregationInput[];
    by: Prisma.RoleConflictScalarFieldEnum[] | Prisma.RoleConflictScalarFieldEnum;
    having?: Prisma.RoleConflictScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleConflictCountAggregateInputType | true;
    _min?: RoleConflictMinAggregateInputType;
    _max?: RoleConflictMaxAggregateInputType;
};
export type RoleConflictGroupByOutputType = {
    roleACode: string;
    roleBCode: string;
    reason: string;
    _count: RoleConflictCountAggregateOutputType | null;
    _min: RoleConflictMinAggregateOutputType | null;
    _max: RoleConflictMaxAggregateOutputType | null;
};
export type GetRoleConflictGroupByPayload<T extends RoleConflictGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoleConflictGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoleConflictGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoleConflictGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoleConflictGroupByOutputType[P]>;
}>>;
export type RoleConflictWhereInput = {
    AND?: Prisma.RoleConflictWhereInput | Prisma.RoleConflictWhereInput[];
    OR?: Prisma.RoleConflictWhereInput[];
    NOT?: Prisma.RoleConflictWhereInput | Prisma.RoleConflictWhereInput[];
    roleACode?: Prisma.StringFilter<"RoleConflict"> | string;
    roleBCode?: Prisma.StringFilter<"RoleConflict"> | string;
    reason?: Prisma.StringFilter<"RoleConflict"> | string;
    roleA?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
    roleB?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
};
export type RoleConflictOrderByWithRelationInput = {
    roleACode?: Prisma.SortOrder;
    roleBCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    roleA?: Prisma.RoleOrderByWithRelationInput;
    roleB?: Prisma.RoleOrderByWithRelationInput;
};
export type RoleConflictWhereUniqueInput = Prisma.AtLeast<{
    roleACode_roleBCode?: Prisma.RoleConflictRoleACodeRoleBCodeCompoundUniqueInput;
    AND?: Prisma.RoleConflictWhereInput | Prisma.RoleConflictWhereInput[];
    OR?: Prisma.RoleConflictWhereInput[];
    NOT?: Prisma.RoleConflictWhereInput | Prisma.RoleConflictWhereInput[];
    roleACode?: Prisma.StringFilter<"RoleConflict"> | string;
    roleBCode?: Prisma.StringFilter<"RoleConflict"> | string;
    reason?: Prisma.StringFilter<"RoleConflict"> | string;
    roleA?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
    roleB?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
}, "roleACode_roleBCode">;
export type RoleConflictOrderByWithAggregationInput = {
    roleACode?: Prisma.SortOrder;
    roleBCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    _count?: Prisma.RoleConflictCountOrderByAggregateInput;
    _max?: Prisma.RoleConflictMaxOrderByAggregateInput;
    _min?: Prisma.RoleConflictMinOrderByAggregateInput;
};
export type RoleConflictScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoleConflictScalarWhereWithAggregatesInput | Prisma.RoleConflictScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoleConflictScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoleConflictScalarWhereWithAggregatesInput | Prisma.RoleConflictScalarWhereWithAggregatesInput[];
    roleACode?: Prisma.StringWithAggregatesFilter<"RoleConflict"> | string;
    roleBCode?: Prisma.StringWithAggregatesFilter<"RoleConflict"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"RoleConflict"> | string;
};
export type RoleConflictCreateInput = {
    reason: string;
    roleA: Prisma.RoleCreateNestedOneWithoutConflictsAsAInput;
    roleB: Prisma.RoleCreateNestedOneWithoutConflictsAsBInput;
};
export type RoleConflictUncheckedCreateInput = {
    roleACode: string;
    roleBCode: string;
    reason: string;
};
export type RoleConflictUpdateInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    roleA?: Prisma.RoleUpdateOneRequiredWithoutConflictsAsANestedInput;
    roleB?: Prisma.RoleUpdateOneRequiredWithoutConflictsAsBNestedInput;
};
export type RoleConflictUncheckedUpdateInput = {
    roleACode?: Prisma.StringFieldUpdateOperationsInput | string;
    roleBCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RoleConflictCreateManyInput = {
    roleACode: string;
    roleBCode: string;
    reason: string;
};
export type RoleConflictUpdateManyMutationInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RoleConflictUncheckedUpdateManyInput = {
    roleACode?: Prisma.StringFieldUpdateOperationsInput | string;
    roleBCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RoleConflictListRelationFilter = {
    every?: Prisma.RoleConflictWhereInput;
    some?: Prisma.RoleConflictWhereInput;
    none?: Prisma.RoleConflictWhereInput;
};
export type RoleConflictOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoleConflictRoleACodeRoleBCodeCompoundUniqueInput = {
    roleACode: string;
    roleBCode: string;
};
export type RoleConflictCountOrderByAggregateInput = {
    roleACode?: Prisma.SortOrder;
    roleBCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type RoleConflictMaxOrderByAggregateInput = {
    roleACode?: Prisma.SortOrder;
    roleBCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type RoleConflictMinOrderByAggregateInput = {
    roleACode?: Prisma.SortOrder;
    roleBCode?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type RoleConflictCreateNestedManyWithoutRoleAInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleAInput, Prisma.RoleConflictUncheckedCreateWithoutRoleAInput> | Prisma.RoleConflictCreateWithoutRoleAInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleAInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleAInput | Prisma.RoleConflictCreateOrConnectWithoutRoleAInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleAInputEnvelope;
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
};
export type RoleConflictCreateNestedManyWithoutRoleBInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleBInput, Prisma.RoleConflictUncheckedCreateWithoutRoleBInput> | Prisma.RoleConflictCreateWithoutRoleBInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleBInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleBInput | Prisma.RoleConflictCreateOrConnectWithoutRoleBInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleBInputEnvelope;
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
};
export type RoleConflictUncheckedCreateNestedManyWithoutRoleAInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleAInput, Prisma.RoleConflictUncheckedCreateWithoutRoleAInput> | Prisma.RoleConflictCreateWithoutRoleAInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleAInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleAInput | Prisma.RoleConflictCreateOrConnectWithoutRoleAInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleAInputEnvelope;
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
};
export type RoleConflictUncheckedCreateNestedManyWithoutRoleBInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleBInput, Prisma.RoleConflictUncheckedCreateWithoutRoleBInput> | Prisma.RoleConflictCreateWithoutRoleBInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleBInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleBInput | Prisma.RoleConflictCreateOrConnectWithoutRoleBInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleBInputEnvelope;
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
};
export type RoleConflictUpdateManyWithoutRoleANestedInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleAInput, Prisma.RoleConflictUncheckedCreateWithoutRoleAInput> | Prisma.RoleConflictCreateWithoutRoleAInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleAInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleAInput | Prisma.RoleConflictCreateOrConnectWithoutRoleAInput[];
    upsert?: Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleAInput | Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleAInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleAInputEnvelope;
    set?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    disconnect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    delete?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    update?: Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleAInput | Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleAInput[];
    updateMany?: Prisma.RoleConflictUpdateManyWithWhereWithoutRoleAInput | Prisma.RoleConflictUpdateManyWithWhereWithoutRoleAInput[];
    deleteMany?: Prisma.RoleConflictScalarWhereInput | Prisma.RoleConflictScalarWhereInput[];
};
export type RoleConflictUpdateManyWithoutRoleBNestedInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleBInput, Prisma.RoleConflictUncheckedCreateWithoutRoleBInput> | Prisma.RoleConflictCreateWithoutRoleBInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleBInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleBInput | Prisma.RoleConflictCreateOrConnectWithoutRoleBInput[];
    upsert?: Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleBInput | Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleBInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleBInputEnvelope;
    set?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    disconnect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    delete?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    update?: Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleBInput | Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleBInput[];
    updateMany?: Prisma.RoleConflictUpdateManyWithWhereWithoutRoleBInput | Prisma.RoleConflictUpdateManyWithWhereWithoutRoleBInput[];
    deleteMany?: Prisma.RoleConflictScalarWhereInput | Prisma.RoleConflictScalarWhereInput[];
};
export type RoleConflictUncheckedUpdateManyWithoutRoleANestedInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleAInput, Prisma.RoleConflictUncheckedCreateWithoutRoleAInput> | Prisma.RoleConflictCreateWithoutRoleAInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleAInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleAInput | Prisma.RoleConflictCreateOrConnectWithoutRoleAInput[];
    upsert?: Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleAInput | Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleAInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleAInputEnvelope;
    set?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    disconnect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    delete?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    update?: Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleAInput | Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleAInput[];
    updateMany?: Prisma.RoleConflictUpdateManyWithWhereWithoutRoleAInput | Prisma.RoleConflictUpdateManyWithWhereWithoutRoleAInput[];
    deleteMany?: Prisma.RoleConflictScalarWhereInput | Prisma.RoleConflictScalarWhereInput[];
};
export type RoleConflictUncheckedUpdateManyWithoutRoleBNestedInput = {
    create?: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleBInput, Prisma.RoleConflictUncheckedCreateWithoutRoleBInput> | Prisma.RoleConflictCreateWithoutRoleBInput[] | Prisma.RoleConflictUncheckedCreateWithoutRoleBInput[];
    connectOrCreate?: Prisma.RoleConflictCreateOrConnectWithoutRoleBInput | Prisma.RoleConflictCreateOrConnectWithoutRoleBInput[];
    upsert?: Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleBInput | Prisma.RoleConflictUpsertWithWhereUniqueWithoutRoleBInput[];
    createMany?: Prisma.RoleConflictCreateManyRoleBInputEnvelope;
    set?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    disconnect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    delete?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    connect?: Prisma.RoleConflictWhereUniqueInput | Prisma.RoleConflictWhereUniqueInput[];
    update?: Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleBInput | Prisma.RoleConflictUpdateWithWhereUniqueWithoutRoleBInput[];
    updateMany?: Prisma.RoleConflictUpdateManyWithWhereWithoutRoleBInput | Prisma.RoleConflictUpdateManyWithWhereWithoutRoleBInput[];
    deleteMany?: Prisma.RoleConflictScalarWhereInput | Prisma.RoleConflictScalarWhereInput[];
};
export type RoleConflictCreateWithoutRoleAInput = {
    reason: string;
    roleB: Prisma.RoleCreateNestedOneWithoutConflictsAsBInput;
};
export type RoleConflictUncheckedCreateWithoutRoleAInput = {
    roleBCode: string;
    reason: string;
};
export type RoleConflictCreateOrConnectWithoutRoleAInput = {
    where: Prisma.RoleConflictWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleAInput, Prisma.RoleConflictUncheckedCreateWithoutRoleAInput>;
};
export type RoleConflictCreateManyRoleAInputEnvelope = {
    data: Prisma.RoleConflictCreateManyRoleAInput | Prisma.RoleConflictCreateManyRoleAInput[];
    skipDuplicates?: boolean;
};
export type RoleConflictCreateWithoutRoleBInput = {
    reason: string;
    roleA: Prisma.RoleCreateNestedOneWithoutConflictsAsAInput;
};
export type RoleConflictUncheckedCreateWithoutRoleBInput = {
    roleACode: string;
    reason: string;
};
export type RoleConflictCreateOrConnectWithoutRoleBInput = {
    where: Prisma.RoleConflictWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleBInput, Prisma.RoleConflictUncheckedCreateWithoutRoleBInput>;
};
export type RoleConflictCreateManyRoleBInputEnvelope = {
    data: Prisma.RoleConflictCreateManyRoleBInput | Prisma.RoleConflictCreateManyRoleBInput[];
    skipDuplicates?: boolean;
};
export type RoleConflictUpsertWithWhereUniqueWithoutRoleAInput = {
    where: Prisma.RoleConflictWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleConflictUpdateWithoutRoleAInput, Prisma.RoleConflictUncheckedUpdateWithoutRoleAInput>;
    create: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleAInput, Prisma.RoleConflictUncheckedCreateWithoutRoleAInput>;
};
export type RoleConflictUpdateWithWhereUniqueWithoutRoleAInput = {
    where: Prisma.RoleConflictWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleConflictUpdateWithoutRoleAInput, Prisma.RoleConflictUncheckedUpdateWithoutRoleAInput>;
};
export type RoleConflictUpdateManyWithWhereWithoutRoleAInput = {
    where: Prisma.RoleConflictScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleConflictUpdateManyMutationInput, Prisma.RoleConflictUncheckedUpdateManyWithoutRoleAInput>;
};
export type RoleConflictScalarWhereInput = {
    AND?: Prisma.RoleConflictScalarWhereInput | Prisma.RoleConflictScalarWhereInput[];
    OR?: Prisma.RoleConflictScalarWhereInput[];
    NOT?: Prisma.RoleConflictScalarWhereInput | Prisma.RoleConflictScalarWhereInput[];
    roleACode?: Prisma.StringFilter<"RoleConflict"> | string;
    roleBCode?: Prisma.StringFilter<"RoleConflict"> | string;
    reason?: Prisma.StringFilter<"RoleConflict"> | string;
};
export type RoleConflictUpsertWithWhereUniqueWithoutRoleBInput = {
    where: Prisma.RoleConflictWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleConflictUpdateWithoutRoleBInput, Prisma.RoleConflictUncheckedUpdateWithoutRoleBInput>;
    create: Prisma.XOR<Prisma.RoleConflictCreateWithoutRoleBInput, Prisma.RoleConflictUncheckedCreateWithoutRoleBInput>;
};
export type RoleConflictUpdateWithWhereUniqueWithoutRoleBInput = {
    where: Prisma.RoleConflictWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleConflictUpdateWithoutRoleBInput, Prisma.RoleConflictUncheckedUpdateWithoutRoleBInput>;
};
export type RoleConflictUpdateManyWithWhereWithoutRoleBInput = {
    where: Prisma.RoleConflictScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleConflictUpdateManyMutationInput, Prisma.RoleConflictUncheckedUpdateManyWithoutRoleBInput>;
};
export type RoleConflictCreateManyRoleAInput = {
    roleBCode: string;
    reason: string;
};
export type RoleConflictCreateManyRoleBInput = {
    roleACode: string;
    reason: string;
};
export type RoleConflictUpdateWithoutRoleAInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    roleB?: Prisma.RoleUpdateOneRequiredWithoutConflictsAsBNestedInput;
};
export type RoleConflictUncheckedUpdateWithoutRoleAInput = {
    roleBCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RoleConflictUncheckedUpdateManyWithoutRoleAInput = {
    roleBCode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RoleConflictUpdateWithoutRoleBInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    roleA?: Prisma.RoleUpdateOneRequiredWithoutConflictsAsANestedInput;
};
export type RoleConflictUncheckedUpdateWithoutRoleBInput = {
    roleACode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RoleConflictUncheckedUpdateManyWithoutRoleBInput = {
    roleACode?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RoleConflictSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roleACode?: boolean;
    roleBCode?: boolean;
    reason?: boolean;
    roleA?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    roleB?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleConflict"]>;
export type RoleConflictSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roleACode?: boolean;
    roleBCode?: boolean;
    reason?: boolean;
    roleA?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    roleB?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleConflict"]>;
export type RoleConflictSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roleACode?: boolean;
    roleBCode?: boolean;
    reason?: boolean;
    roleA?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    roleB?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleConflict"]>;
export type RoleConflictSelectScalar = {
    roleACode?: boolean;
    roleBCode?: boolean;
    reason?: boolean;
};
export type RoleConflictOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"roleACode" | "roleBCode" | "reason", ExtArgs["result"]["roleConflict"]>;
export type RoleConflictInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roleA?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    roleB?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type RoleConflictIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roleA?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    roleB?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type RoleConflictIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roleA?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    roleB?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $RoleConflictPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RoleConflict";
    objects: {
        roleA: Prisma.$RolePayload<ExtArgs>;
        roleB: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        roleACode: string;
        roleBCode: string;
        reason: string;
    }, ExtArgs["result"]["roleConflict"]>;
    composites: {};
};
export type RoleConflictGetPayload<S extends boolean | null | undefined | RoleConflictDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload, S>;
export type RoleConflictCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoleConflictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleConflictCountAggregateInputType | true;
};
export interface RoleConflictDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RoleConflict'];
        meta: {
            name: 'RoleConflict';
        };
    };
    findUnique<T extends RoleConflictFindUniqueArgs>(args: Prisma.SelectSubset<T, RoleConflictFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoleConflictFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoleConflictFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoleConflictFindFirstArgs>(args?: Prisma.SelectSubset<T, RoleConflictFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoleConflictFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoleConflictFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoleConflictFindManyArgs>(args?: Prisma.SelectSubset<T, RoleConflictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoleConflictCreateArgs>(args: Prisma.SelectSubset<T, RoleConflictCreateArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoleConflictCreateManyArgs>(args?: Prisma.SelectSubset<T, RoleConflictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoleConflictCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoleConflictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoleConflictDeleteArgs>(args: Prisma.SelectSubset<T, RoleConflictDeleteArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoleConflictUpdateArgs>(args: Prisma.SelectSubset<T, RoleConflictUpdateArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoleConflictDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoleConflictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoleConflictUpdateManyArgs>(args: Prisma.SelectSubset<T, RoleConflictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoleConflictUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoleConflictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoleConflictUpsertArgs>(args: Prisma.SelectSubset<T, RoleConflictUpsertArgs<ExtArgs>>): Prisma.Prisma__RoleConflictClient<runtime.Types.Result.GetResult<Prisma.$RoleConflictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoleConflictCountArgs>(args?: Prisma.Subset<T, RoleConflictCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoleConflictCountAggregateOutputType> : number>;
    aggregate<T extends RoleConflictAggregateArgs>(args: Prisma.Subset<T, RoleConflictAggregateArgs>): Prisma.PrismaPromise<GetRoleConflictAggregateType<T>>;
    groupBy<T extends RoleConflictGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoleConflictGroupByArgs['orderBy'];
    } : {
        orderBy?: RoleConflictGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoleConflictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleConflictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoleConflictFieldRefs;
}
export interface Prisma__RoleConflictClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roleA<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    roleB<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoleConflictFieldRefs {
    readonly roleACode: Prisma.FieldRef<"RoleConflict", 'String'>;
    readonly roleBCode: Prisma.FieldRef<"RoleConflict", 'String'>;
    readonly reason: Prisma.FieldRef<"RoleConflict", 'String'>;
}
export type RoleConflictFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    where: Prisma.RoleConflictWhereUniqueInput;
};
export type RoleConflictFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    where: Prisma.RoleConflictWhereUniqueInput;
};
export type RoleConflictFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    where?: Prisma.RoleConflictWhereInput;
    orderBy?: Prisma.RoleConflictOrderByWithRelationInput | Prisma.RoleConflictOrderByWithRelationInput[];
    cursor?: Prisma.RoleConflictWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleConflictScalarFieldEnum | Prisma.RoleConflictScalarFieldEnum[];
};
export type RoleConflictFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    where?: Prisma.RoleConflictWhereInput;
    orderBy?: Prisma.RoleConflictOrderByWithRelationInput | Prisma.RoleConflictOrderByWithRelationInput[];
    cursor?: Prisma.RoleConflictWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleConflictScalarFieldEnum | Prisma.RoleConflictScalarFieldEnum[];
};
export type RoleConflictFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    where?: Prisma.RoleConflictWhereInput;
    orderBy?: Prisma.RoleConflictOrderByWithRelationInput | Prisma.RoleConflictOrderByWithRelationInput[];
    cursor?: Prisma.RoleConflictWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleConflictScalarFieldEnum | Prisma.RoleConflictScalarFieldEnum[];
};
export type RoleConflictCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleConflictCreateInput, Prisma.RoleConflictUncheckedCreateInput>;
};
export type RoleConflictCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoleConflictCreateManyInput | Prisma.RoleConflictCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoleConflictCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    data: Prisma.RoleConflictCreateManyInput | Prisma.RoleConflictCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoleConflictIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoleConflictUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleConflictUpdateInput, Prisma.RoleConflictUncheckedUpdateInput>;
    where: Prisma.RoleConflictWhereUniqueInput;
};
export type RoleConflictUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoleConflictUpdateManyMutationInput, Prisma.RoleConflictUncheckedUpdateManyInput>;
    where?: Prisma.RoleConflictWhereInput;
    limit?: number;
};
export type RoleConflictUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleConflictUpdateManyMutationInput, Prisma.RoleConflictUncheckedUpdateManyInput>;
    where?: Prisma.RoleConflictWhereInput;
    limit?: number;
    include?: Prisma.RoleConflictIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoleConflictUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    where: Prisma.RoleConflictWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleConflictCreateInput, Prisma.RoleConflictUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoleConflictUpdateInput, Prisma.RoleConflictUncheckedUpdateInput>;
};
export type RoleConflictDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
    where: Prisma.RoleConflictWhereUniqueInput;
};
export type RoleConflictDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleConflictWhereInput;
    limit?: number;
};
export type RoleConflictDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleConflictSelect<ExtArgs> | null;
    omit?: Prisma.RoleConflictOmit<ExtArgs> | null;
    include?: Prisma.RoleConflictInclude<ExtArgs> | null;
};
