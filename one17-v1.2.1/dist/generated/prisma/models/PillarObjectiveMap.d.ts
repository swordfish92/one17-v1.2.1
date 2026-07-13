import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PillarObjectiveMapModel = runtime.Types.Result.DefaultSelection<Prisma.$PillarObjectiveMapPayload>;
export type AggregatePillarObjectiveMap = {
    _count: PillarObjectiveMapCountAggregateOutputType | null;
    _min: PillarObjectiveMapMinAggregateOutputType | null;
    _max: PillarObjectiveMapMaxAggregateOutputType | null;
};
export type PillarObjectiveMapMinAggregateOutputType = {
    pillarCode: string | null;
    objectiveCode: string | null;
};
export type PillarObjectiveMapMaxAggregateOutputType = {
    pillarCode: string | null;
    objectiveCode: string | null;
};
export type PillarObjectiveMapCountAggregateOutputType = {
    pillarCode: number;
    objectiveCode: number;
    _all: number;
};
export type PillarObjectiveMapMinAggregateInputType = {
    pillarCode?: true;
    objectiveCode?: true;
};
export type PillarObjectiveMapMaxAggregateInputType = {
    pillarCode?: true;
    objectiveCode?: true;
};
export type PillarObjectiveMapCountAggregateInputType = {
    pillarCode?: true;
    objectiveCode?: true;
    _all?: true;
};
export type PillarObjectiveMapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PillarObjectiveMapWhereInput;
    orderBy?: Prisma.PillarObjectiveMapOrderByWithRelationInput | Prisma.PillarObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.PillarObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PillarObjectiveMapCountAggregateInputType;
    _min?: PillarObjectiveMapMinAggregateInputType;
    _max?: PillarObjectiveMapMaxAggregateInputType;
};
export type GetPillarObjectiveMapAggregateType<T extends PillarObjectiveMapAggregateArgs> = {
    [P in keyof T & keyof AggregatePillarObjectiveMap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePillarObjectiveMap[P]> : Prisma.GetScalarType<T[P], AggregatePillarObjectiveMap[P]>;
};
export type PillarObjectiveMapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PillarObjectiveMapWhereInput;
    orderBy?: Prisma.PillarObjectiveMapOrderByWithAggregationInput | Prisma.PillarObjectiveMapOrderByWithAggregationInput[];
    by: Prisma.PillarObjectiveMapScalarFieldEnum[] | Prisma.PillarObjectiveMapScalarFieldEnum;
    having?: Prisma.PillarObjectiveMapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PillarObjectiveMapCountAggregateInputType | true;
    _min?: PillarObjectiveMapMinAggregateInputType;
    _max?: PillarObjectiveMapMaxAggregateInputType;
};
export type PillarObjectiveMapGroupByOutputType = {
    pillarCode: string;
    objectiveCode: string;
    _count: PillarObjectiveMapCountAggregateOutputType | null;
    _min: PillarObjectiveMapMinAggregateOutputType | null;
    _max: PillarObjectiveMapMaxAggregateOutputType | null;
};
export type GetPillarObjectiveMapGroupByPayload<T extends PillarObjectiveMapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PillarObjectiveMapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PillarObjectiveMapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PillarObjectiveMapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PillarObjectiveMapGroupByOutputType[P]>;
}>>;
export type PillarObjectiveMapWhereInput = {
    AND?: Prisma.PillarObjectiveMapWhereInput | Prisma.PillarObjectiveMapWhereInput[];
    OR?: Prisma.PillarObjectiveMapWhereInput[];
    NOT?: Prisma.PillarObjectiveMapWhereInput | Prisma.PillarObjectiveMapWhereInput[];
    pillarCode?: Prisma.StringFilter<"PillarObjectiveMap"> | string;
    objectiveCode?: Prisma.StringFilter<"PillarObjectiveMap"> | string;
    pillar?: Prisma.XOR<Prisma.StrategicPillarScalarRelationFilter, Prisma.StrategicPillarWhereInput>;
    objective?: Prisma.XOR<Prisma.StrategicObjectiveScalarRelationFilter, Prisma.StrategicObjectiveWhereInput>;
};
export type PillarObjectiveMapOrderByWithRelationInput = {
    pillarCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
    pillar?: Prisma.StrategicPillarOrderByWithRelationInput;
    objective?: Prisma.StrategicObjectiveOrderByWithRelationInput;
};
export type PillarObjectiveMapWhereUniqueInput = Prisma.AtLeast<{
    pillarCode_objectiveCode?: Prisma.PillarObjectiveMapPillarCodeObjectiveCodeCompoundUniqueInput;
    AND?: Prisma.PillarObjectiveMapWhereInput | Prisma.PillarObjectiveMapWhereInput[];
    OR?: Prisma.PillarObjectiveMapWhereInput[];
    NOT?: Prisma.PillarObjectiveMapWhereInput | Prisma.PillarObjectiveMapWhereInput[];
    pillarCode?: Prisma.StringFilter<"PillarObjectiveMap"> | string;
    objectiveCode?: Prisma.StringFilter<"PillarObjectiveMap"> | string;
    pillar?: Prisma.XOR<Prisma.StrategicPillarScalarRelationFilter, Prisma.StrategicPillarWhereInput>;
    objective?: Prisma.XOR<Prisma.StrategicObjectiveScalarRelationFilter, Prisma.StrategicObjectiveWhereInput>;
}, "pillarCode_objectiveCode">;
export type PillarObjectiveMapOrderByWithAggregationInput = {
    pillarCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
    _count?: Prisma.PillarObjectiveMapCountOrderByAggregateInput;
    _max?: Prisma.PillarObjectiveMapMaxOrderByAggregateInput;
    _min?: Prisma.PillarObjectiveMapMinOrderByAggregateInput;
};
export type PillarObjectiveMapScalarWhereWithAggregatesInput = {
    AND?: Prisma.PillarObjectiveMapScalarWhereWithAggregatesInput | Prisma.PillarObjectiveMapScalarWhereWithAggregatesInput[];
    OR?: Prisma.PillarObjectiveMapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PillarObjectiveMapScalarWhereWithAggregatesInput | Prisma.PillarObjectiveMapScalarWhereWithAggregatesInput[];
    pillarCode?: Prisma.StringWithAggregatesFilter<"PillarObjectiveMap"> | string;
    objectiveCode?: Prisma.StringWithAggregatesFilter<"PillarObjectiveMap"> | string;
};
export type PillarObjectiveMapCreateInput = {
    pillar: Prisma.StrategicPillarCreateNestedOneWithoutObjectiveMapInput;
    objective: Prisma.StrategicObjectiveCreateNestedOneWithoutPillarMapInput;
};
export type PillarObjectiveMapUncheckedCreateInput = {
    pillarCode: string;
    objectiveCode: string;
};
export type PillarObjectiveMapUpdateInput = {
    pillar?: Prisma.StrategicPillarUpdateOneRequiredWithoutObjectiveMapNestedInput;
    objective?: Prisma.StrategicObjectiveUpdateOneRequiredWithoutPillarMapNestedInput;
};
export type PillarObjectiveMapUncheckedUpdateInput = {
    pillarCode?: Prisma.StringFieldUpdateOperationsInput | string;
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PillarObjectiveMapCreateManyInput = {
    pillarCode: string;
    objectiveCode: string;
};
export type PillarObjectiveMapUpdateManyMutationInput = {};
export type PillarObjectiveMapUncheckedUpdateManyInput = {
    pillarCode?: Prisma.StringFieldUpdateOperationsInput | string;
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PillarObjectiveMapListRelationFilter = {
    every?: Prisma.PillarObjectiveMapWhereInput;
    some?: Prisma.PillarObjectiveMapWhereInput;
    none?: Prisma.PillarObjectiveMapWhereInput;
};
export type PillarObjectiveMapOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PillarObjectiveMapPillarCodeObjectiveCodeCompoundUniqueInput = {
    pillarCode: string;
    objectiveCode: string;
};
export type PillarObjectiveMapCountOrderByAggregateInput = {
    pillarCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
};
export type PillarObjectiveMapMaxOrderByAggregateInput = {
    pillarCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
};
export type PillarObjectiveMapMinOrderByAggregateInput = {
    pillarCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
};
export type PillarObjectiveMapCreateNestedManyWithoutPillarInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput> | Prisma.PillarObjectiveMapCreateWithoutPillarInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyPillarInputEnvelope;
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
};
export type PillarObjectiveMapUncheckedCreateNestedManyWithoutPillarInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput> | Prisma.PillarObjectiveMapCreateWithoutPillarInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyPillarInputEnvelope;
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
};
export type PillarObjectiveMapUpdateManyWithoutPillarNestedInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput> | Prisma.PillarObjectiveMapCreateWithoutPillarInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput[];
    upsert?: Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutPillarInput | Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutPillarInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyPillarInputEnvelope;
    set?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    delete?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    update?: Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutPillarInput | Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutPillarInput[];
    updateMany?: Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutPillarInput | Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutPillarInput[];
    deleteMany?: Prisma.PillarObjectiveMapScalarWhereInput | Prisma.PillarObjectiveMapScalarWhereInput[];
};
export type PillarObjectiveMapUncheckedUpdateManyWithoutPillarNestedInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput> | Prisma.PillarObjectiveMapCreateWithoutPillarInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutPillarInput[];
    upsert?: Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutPillarInput | Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutPillarInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyPillarInputEnvelope;
    set?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    delete?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    update?: Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutPillarInput | Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutPillarInput[];
    updateMany?: Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutPillarInput | Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutPillarInput[];
    deleteMany?: Prisma.PillarObjectiveMapScalarWhereInput | Prisma.PillarObjectiveMapScalarWhereInput[];
};
export type PillarObjectiveMapCreateNestedManyWithoutObjectiveInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.PillarObjectiveMapCreateWithoutObjectiveInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyObjectiveInputEnvelope;
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
};
export type PillarObjectiveMapUncheckedCreateNestedManyWithoutObjectiveInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.PillarObjectiveMapCreateWithoutObjectiveInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyObjectiveInputEnvelope;
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
};
export type PillarObjectiveMapUpdateManyWithoutObjectiveNestedInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.PillarObjectiveMapCreateWithoutObjectiveInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    upsert?: Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput | Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyObjectiveInputEnvelope;
    set?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    delete?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    update?: Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput | Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput[];
    updateMany?: Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutObjectiveInput | Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutObjectiveInput[];
    deleteMany?: Prisma.PillarObjectiveMapScalarWhereInput | Prisma.PillarObjectiveMapScalarWhereInput[];
};
export type PillarObjectiveMapUncheckedUpdateManyWithoutObjectiveNestedInput = {
    create?: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.PillarObjectiveMapCreateWithoutObjectiveInput[] | Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.PillarObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    upsert?: Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput | Prisma.PillarObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput[];
    createMany?: Prisma.PillarObjectiveMapCreateManyObjectiveInputEnvelope;
    set?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    delete?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    connect?: Prisma.PillarObjectiveMapWhereUniqueInput | Prisma.PillarObjectiveMapWhereUniqueInput[];
    update?: Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput | Prisma.PillarObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput[];
    updateMany?: Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutObjectiveInput | Prisma.PillarObjectiveMapUpdateManyWithWhereWithoutObjectiveInput[];
    deleteMany?: Prisma.PillarObjectiveMapScalarWhereInput | Prisma.PillarObjectiveMapScalarWhereInput[];
};
export type PillarObjectiveMapCreateWithoutPillarInput = {
    objective: Prisma.StrategicObjectiveCreateNestedOneWithoutPillarMapInput;
};
export type PillarObjectiveMapUncheckedCreateWithoutPillarInput = {
    objectiveCode: string;
};
export type PillarObjectiveMapCreateOrConnectWithoutPillarInput = {
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput>;
};
export type PillarObjectiveMapCreateManyPillarInputEnvelope = {
    data: Prisma.PillarObjectiveMapCreateManyPillarInput | Prisma.PillarObjectiveMapCreateManyPillarInput[];
    skipDuplicates?: boolean;
};
export type PillarObjectiveMapUpsertWithWhereUniqueWithoutPillarInput = {
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.PillarObjectiveMapUpdateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedUpdateWithoutPillarInput>;
    create: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutPillarInput>;
};
export type PillarObjectiveMapUpdateWithWhereUniqueWithoutPillarInput = {
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.PillarObjectiveMapUpdateWithoutPillarInput, Prisma.PillarObjectiveMapUncheckedUpdateWithoutPillarInput>;
};
export type PillarObjectiveMapUpdateManyWithWhereWithoutPillarInput = {
    where: Prisma.PillarObjectiveMapScalarWhereInput;
    data: Prisma.XOR<Prisma.PillarObjectiveMapUpdateManyMutationInput, Prisma.PillarObjectiveMapUncheckedUpdateManyWithoutPillarInput>;
};
export type PillarObjectiveMapScalarWhereInput = {
    AND?: Prisma.PillarObjectiveMapScalarWhereInput | Prisma.PillarObjectiveMapScalarWhereInput[];
    OR?: Prisma.PillarObjectiveMapScalarWhereInput[];
    NOT?: Prisma.PillarObjectiveMapScalarWhereInput | Prisma.PillarObjectiveMapScalarWhereInput[];
    pillarCode?: Prisma.StringFilter<"PillarObjectiveMap"> | string;
    objectiveCode?: Prisma.StringFilter<"PillarObjectiveMap"> | string;
};
export type PillarObjectiveMapCreateWithoutObjectiveInput = {
    pillar: Prisma.StrategicPillarCreateNestedOneWithoutObjectiveMapInput;
};
export type PillarObjectiveMapUncheckedCreateWithoutObjectiveInput = {
    pillarCode: string;
};
export type PillarObjectiveMapCreateOrConnectWithoutObjectiveInput = {
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput>;
};
export type PillarObjectiveMapCreateManyObjectiveInputEnvelope = {
    data: Prisma.PillarObjectiveMapCreateManyObjectiveInput | Prisma.PillarObjectiveMapCreateManyObjectiveInput[];
    skipDuplicates?: boolean;
};
export type PillarObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput = {
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.PillarObjectiveMapUpdateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedUpdateWithoutObjectiveInput>;
    create: Prisma.XOR<Prisma.PillarObjectiveMapCreateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedCreateWithoutObjectiveInput>;
};
export type PillarObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput = {
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.PillarObjectiveMapUpdateWithoutObjectiveInput, Prisma.PillarObjectiveMapUncheckedUpdateWithoutObjectiveInput>;
};
export type PillarObjectiveMapUpdateManyWithWhereWithoutObjectiveInput = {
    where: Prisma.PillarObjectiveMapScalarWhereInput;
    data: Prisma.XOR<Prisma.PillarObjectiveMapUpdateManyMutationInput, Prisma.PillarObjectiveMapUncheckedUpdateManyWithoutObjectiveInput>;
};
export type PillarObjectiveMapCreateManyPillarInput = {
    objectiveCode: string;
};
export type PillarObjectiveMapUpdateWithoutPillarInput = {
    objective?: Prisma.StrategicObjectiveUpdateOneRequiredWithoutPillarMapNestedInput;
};
export type PillarObjectiveMapUncheckedUpdateWithoutPillarInput = {
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PillarObjectiveMapUncheckedUpdateManyWithoutPillarInput = {
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PillarObjectiveMapCreateManyObjectiveInput = {
    pillarCode: string;
};
export type PillarObjectiveMapUpdateWithoutObjectiveInput = {
    pillar?: Prisma.StrategicPillarUpdateOneRequiredWithoutObjectiveMapNestedInput;
};
export type PillarObjectiveMapUncheckedUpdateWithoutObjectiveInput = {
    pillarCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PillarObjectiveMapUncheckedUpdateManyWithoutObjectiveInput = {
    pillarCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PillarObjectiveMapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pillarCode?: boolean;
    objectiveCode?: boolean;
    pillar?: boolean | Prisma.StrategicPillarDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pillarObjectiveMap"]>;
export type PillarObjectiveMapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pillarCode?: boolean;
    objectiveCode?: boolean;
    pillar?: boolean | Prisma.StrategicPillarDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pillarObjectiveMap"]>;
export type PillarObjectiveMapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pillarCode?: boolean;
    objectiveCode?: boolean;
    pillar?: boolean | Prisma.StrategicPillarDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pillarObjectiveMap"]>;
export type PillarObjectiveMapSelectScalar = {
    pillarCode?: boolean;
    objectiveCode?: boolean;
};
export type PillarObjectiveMapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"pillarCode" | "objectiveCode", ExtArgs["result"]["pillarObjectiveMap"]>;
export type PillarObjectiveMapInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pillar?: boolean | Prisma.StrategicPillarDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
};
export type PillarObjectiveMapIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pillar?: boolean | Prisma.StrategicPillarDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
};
export type PillarObjectiveMapIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pillar?: boolean | Prisma.StrategicPillarDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
};
export type $PillarObjectiveMapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PillarObjectiveMap";
    objects: {
        pillar: Prisma.$StrategicPillarPayload<ExtArgs>;
        objective: Prisma.$StrategicObjectivePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        pillarCode: string;
        objectiveCode: string;
    }, ExtArgs["result"]["pillarObjectiveMap"]>;
    composites: {};
};
export type PillarObjectiveMapGetPayload<S extends boolean | null | undefined | PillarObjectiveMapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload, S>;
export type PillarObjectiveMapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PillarObjectiveMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PillarObjectiveMapCountAggregateInputType | true;
};
export interface PillarObjectiveMapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PillarObjectiveMap'];
        meta: {
            name: 'PillarObjectiveMap';
        };
    };
    findUnique<T extends PillarObjectiveMapFindUniqueArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PillarObjectiveMapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PillarObjectiveMapFindFirstArgs>(args?: Prisma.SelectSubset<T, PillarObjectiveMapFindFirstArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PillarObjectiveMapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PillarObjectiveMapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PillarObjectiveMapFindManyArgs>(args?: Prisma.SelectSubset<T, PillarObjectiveMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PillarObjectiveMapCreateArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapCreateArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PillarObjectiveMapCreateManyArgs>(args?: Prisma.SelectSubset<T, PillarObjectiveMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PillarObjectiveMapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PillarObjectiveMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PillarObjectiveMapDeleteArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapDeleteArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PillarObjectiveMapUpdateArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapUpdateArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PillarObjectiveMapDeleteManyArgs>(args?: Prisma.SelectSubset<T, PillarObjectiveMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PillarObjectiveMapUpdateManyArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PillarObjectiveMapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PillarObjectiveMapUpsertArgs>(args: Prisma.SelectSubset<T, PillarObjectiveMapUpsertArgs<ExtArgs>>): Prisma.Prisma__PillarObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PillarObjectiveMapCountArgs>(args?: Prisma.Subset<T, PillarObjectiveMapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PillarObjectiveMapCountAggregateOutputType> : number>;
    aggregate<T extends PillarObjectiveMapAggregateArgs>(args: Prisma.Subset<T, PillarObjectiveMapAggregateArgs>): Prisma.PrismaPromise<GetPillarObjectiveMapAggregateType<T>>;
    groupBy<T extends PillarObjectiveMapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PillarObjectiveMapGroupByArgs['orderBy'];
    } : {
        orderBy?: PillarObjectiveMapGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PillarObjectiveMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPillarObjectiveMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PillarObjectiveMapFieldRefs;
}
export interface Prisma__PillarObjectiveMapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pillar<T extends Prisma.StrategicPillarDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategicPillarDefaultArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    objective<T extends Prisma.StrategicObjectiveDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategicObjectiveDefaultArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PillarObjectiveMapFieldRefs {
    readonly pillarCode: Prisma.FieldRef<"PillarObjectiveMap", 'String'>;
    readonly objectiveCode: Prisma.FieldRef<"PillarObjectiveMap", 'String'>;
}
export type PillarObjectiveMapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
};
export type PillarObjectiveMapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
};
export type PillarObjectiveMapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    where?: Prisma.PillarObjectiveMapWhereInput;
    orderBy?: Prisma.PillarObjectiveMapOrderByWithRelationInput | Prisma.PillarObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.PillarObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PillarObjectiveMapScalarFieldEnum | Prisma.PillarObjectiveMapScalarFieldEnum[];
};
export type PillarObjectiveMapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    where?: Prisma.PillarObjectiveMapWhereInput;
    orderBy?: Prisma.PillarObjectiveMapOrderByWithRelationInput | Prisma.PillarObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.PillarObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PillarObjectiveMapScalarFieldEnum | Prisma.PillarObjectiveMapScalarFieldEnum[];
};
export type PillarObjectiveMapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    where?: Prisma.PillarObjectiveMapWhereInput;
    orderBy?: Prisma.PillarObjectiveMapOrderByWithRelationInput | Prisma.PillarObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.PillarObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PillarObjectiveMapScalarFieldEnum | Prisma.PillarObjectiveMapScalarFieldEnum[];
};
export type PillarObjectiveMapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PillarObjectiveMapCreateInput, Prisma.PillarObjectiveMapUncheckedCreateInput>;
};
export type PillarObjectiveMapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PillarObjectiveMapCreateManyInput | Prisma.PillarObjectiveMapCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PillarObjectiveMapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    data: Prisma.PillarObjectiveMapCreateManyInput | Prisma.PillarObjectiveMapCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PillarObjectiveMapIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PillarObjectiveMapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PillarObjectiveMapUpdateInput, Prisma.PillarObjectiveMapUncheckedUpdateInput>;
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
};
export type PillarObjectiveMapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PillarObjectiveMapUpdateManyMutationInput, Prisma.PillarObjectiveMapUncheckedUpdateManyInput>;
    where?: Prisma.PillarObjectiveMapWhereInput;
    limit?: number;
};
export type PillarObjectiveMapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PillarObjectiveMapUpdateManyMutationInput, Prisma.PillarObjectiveMapUncheckedUpdateManyInput>;
    where?: Prisma.PillarObjectiveMapWhereInput;
    limit?: number;
    include?: Prisma.PillarObjectiveMapIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PillarObjectiveMapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.PillarObjectiveMapCreateInput, Prisma.PillarObjectiveMapUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PillarObjectiveMapUpdateInput, Prisma.PillarObjectiveMapUncheckedUpdateInput>;
};
export type PillarObjectiveMapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.PillarObjectiveMapWhereUniqueInput;
};
export type PillarObjectiveMapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PillarObjectiveMapWhereInput;
    limit?: number;
};
export type PillarObjectiveMapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PillarObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.PillarObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.PillarObjectiveMapInclude<ExtArgs> | null;
};
