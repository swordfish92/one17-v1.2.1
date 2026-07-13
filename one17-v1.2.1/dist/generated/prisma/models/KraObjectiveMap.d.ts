import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KraObjectiveMapModel = runtime.Types.Result.DefaultSelection<Prisma.$KraObjectiveMapPayload>;
export type AggregateKraObjectiveMap = {
    _count: KraObjectiveMapCountAggregateOutputType | null;
    _min: KraObjectiveMapMinAggregateOutputType | null;
    _max: KraObjectiveMapMaxAggregateOutputType | null;
};
export type KraObjectiveMapMinAggregateOutputType = {
    kraCode: string | null;
    objectiveCode: string | null;
};
export type KraObjectiveMapMaxAggregateOutputType = {
    kraCode: string | null;
    objectiveCode: string | null;
};
export type KraObjectiveMapCountAggregateOutputType = {
    kraCode: number;
    objectiveCode: number;
    _all: number;
};
export type KraObjectiveMapMinAggregateInputType = {
    kraCode?: true;
    objectiveCode?: true;
};
export type KraObjectiveMapMaxAggregateInputType = {
    kraCode?: true;
    objectiveCode?: true;
};
export type KraObjectiveMapCountAggregateInputType = {
    kraCode?: true;
    objectiveCode?: true;
    _all?: true;
};
export type KraObjectiveMapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KraObjectiveMapWhereInput;
    orderBy?: Prisma.KraObjectiveMapOrderByWithRelationInput | Prisma.KraObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.KraObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KraObjectiveMapCountAggregateInputType;
    _min?: KraObjectiveMapMinAggregateInputType;
    _max?: KraObjectiveMapMaxAggregateInputType;
};
export type GetKraObjectiveMapAggregateType<T extends KraObjectiveMapAggregateArgs> = {
    [P in keyof T & keyof AggregateKraObjectiveMap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKraObjectiveMap[P]> : Prisma.GetScalarType<T[P], AggregateKraObjectiveMap[P]>;
};
export type KraObjectiveMapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KraObjectiveMapWhereInput;
    orderBy?: Prisma.KraObjectiveMapOrderByWithAggregationInput | Prisma.KraObjectiveMapOrderByWithAggregationInput[];
    by: Prisma.KraObjectiveMapScalarFieldEnum[] | Prisma.KraObjectiveMapScalarFieldEnum;
    having?: Prisma.KraObjectiveMapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KraObjectiveMapCountAggregateInputType | true;
    _min?: KraObjectiveMapMinAggregateInputType;
    _max?: KraObjectiveMapMaxAggregateInputType;
};
export type KraObjectiveMapGroupByOutputType = {
    kraCode: string;
    objectiveCode: string;
    _count: KraObjectiveMapCountAggregateOutputType | null;
    _min: KraObjectiveMapMinAggregateOutputType | null;
    _max: KraObjectiveMapMaxAggregateOutputType | null;
};
export type GetKraObjectiveMapGroupByPayload<T extends KraObjectiveMapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KraObjectiveMapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KraObjectiveMapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KraObjectiveMapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KraObjectiveMapGroupByOutputType[P]>;
}>>;
export type KraObjectiveMapWhereInput = {
    AND?: Prisma.KraObjectiveMapWhereInput | Prisma.KraObjectiveMapWhereInput[];
    OR?: Prisma.KraObjectiveMapWhereInput[];
    NOT?: Prisma.KraObjectiveMapWhereInput | Prisma.KraObjectiveMapWhereInput[];
    kraCode?: Prisma.StringFilter<"KraObjectiveMap"> | string;
    objectiveCode?: Prisma.StringFilter<"KraObjectiveMap"> | string;
    kra?: Prisma.XOR<Prisma.EnterpriseKraScalarRelationFilter, Prisma.EnterpriseKraWhereInput>;
    objective?: Prisma.XOR<Prisma.StrategicObjectiveScalarRelationFilter, Prisma.StrategicObjectiveWhereInput>;
};
export type KraObjectiveMapOrderByWithRelationInput = {
    kraCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
    kra?: Prisma.EnterpriseKraOrderByWithRelationInput;
    objective?: Prisma.StrategicObjectiveOrderByWithRelationInput;
};
export type KraObjectiveMapWhereUniqueInput = Prisma.AtLeast<{
    kraCode_objectiveCode?: Prisma.KraObjectiveMapKraCodeObjectiveCodeCompoundUniqueInput;
    AND?: Prisma.KraObjectiveMapWhereInput | Prisma.KraObjectiveMapWhereInput[];
    OR?: Prisma.KraObjectiveMapWhereInput[];
    NOT?: Prisma.KraObjectiveMapWhereInput | Prisma.KraObjectiveMapWhereInput[];
    kraCode?: Prisma.StringFilter<"KraObjectiveMap"> | string;
    objectiveCode?: Prisma.StringFilter<"KraObjectiveMap"> | string;
    kra?: Prisma.XOR<Prisma.EnterpriseKraScalarRelationFilter, Prisma.EnterpriseKraWhereInput>;
    objective?: Prisma.XOR<Prisma.StrategicObjectiveScalarRelationFilter, Prisma.StrategicObjectiveWhereInput>;
}, "kraCode_objectiveCode">;
export type KraObjectiveMapOrderByWithAggregationInput = {
    kraCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
    _count?: Prisma.KraObjectiveMapCountOrderByAggregateInput;
    _max?: Prisma.KraObjectiveMapMaxOrderByAggregateInput;
    _min?: Prisma.KraObjectiveMapMinOrderByAggregateInput;
};
export type KraObjectiveMapScalarWhereWithAggregatesInput = {
    AND?: Prisma.KraObjectiveMapScalarWhereWithAggregatesInput | Prisma.KraObjectiveMapScalarWhereWithAggregatesInput[];
    OR?: Prisma.KraObjectiveMapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KraObjectiveMapScalarWhereWithAggregatesInput | Prisma.KraObjectiveMapScalarWhereWithAggregatesInput[];
    kraCode?: Prisma.StringWithAggregatesFilter<"KraObjectiveMap"> | string;
    objectiveCode?: Prisma.StringWithAggregatesFilter<"KraObjectiveMap"> | string;
};
export type KraObjectiveMapCreateInput = {
    kra: Prisma.EnterpriseKraCreateNestedOneWithoutObjectiveMapInput;
    objective: Prisma.StrategicObjectiveCreateNestedOneWithoutKraMapInput;
};
export type KraObjectiveMapUncheckedCreateInput = {
    kraCode: string;
    objectiveCode: string;
};
export type KraObjectiveMapUpdateInput = {
    kra?: Prisma.EnterpriseKraUpdateOneRequiredWithoutObjectiveMapNestedInput;
    objective?: Prisma.StrategicObjectiveUpdateOneRequiredWithoutKraMapNestedInput;
};
export type KraObjectiveMapUncheckedUpdateInput = {
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type KraObjectiveMapCreateManyInput = {
    kraCode: string;
    objectiveCode: string;
};
export type KraObjectiveMapUpdateManyMutationInput = {};
export type KraObjectiveMapUncheckedUpdateManyInput = {
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type KraObjectiveMapListRelationFilter = {
    every?: Prisma.KraObjectiveMapWhereInput;
    some?: Prisma.KraObjectiveMapWhereInput;
    none?: Prisma.KraObjectiveMapWhereInput;
};
export type KraObjectiveMapOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KraObjectiveMapKraCodeObjectiveCodeCompoundUniqueInput = {
    kraCode: string;
    objectiveCode: string;
};
export type KraObjectiveMapCountOrderByAggregateInput = {
    kraCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
};
export type KraObjectiveMapMaxOrderByAggregateInput = {
    kraCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
};
export type KraObjectiveMapMinOrderByAggregateInput = {
    kraCode?: Prisma.SortOrder;
    objectiveCode?: Prisma.SortOrder;
};
export type KraObjectiveMapCreateNestedManyWithoutObjectiveInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.KraObjectiveMapCreateWithoutObjectiveInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyObjectiveInputEnvelope;
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
};
export type KraObjectiveMapUncheckedCreateNestedManyWithoutObjectiveInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.KraObjectiveMapCreateWithoutObjectiveInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyObjectiveInputEnvelope;
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
};
export type KraObjectiveMapUpdateManyWithoutObjectiveNestedInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.KraObjectiveMapCreateWithoutObjectiveInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    upsert?: Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput | Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyObjectiveInputEnvelope;
    set?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    delete?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    update?: Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput | Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput[];
    updateMany?: Prisma.KraObjectiveMapUpdateManyWithWhereWithoutObjectiveInput | Prisma.KraObjectiveMapUpdateManyWithWhereWithoutObjectiveInput[];
    deleteMany?: Prisma.KraObjectiveMapScalarWhereInput | Prisma.KraObjectiveMapScalarWhereInput[];
};
export type KraObjectiveMapUncheckedUpdateManyWithoutObjectiveNestedInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput> | Prisma.KraObjectiveMapCreateWithoutObjectiveInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput | Prisma.KraObjectiveMapCreateOrConnectWithoutObjectiveInput[];
    upsert?: Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput | Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyObjectiveInputEnvelope;
    set?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    delete?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    update?: Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput | Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput[];
    updateMany?: Prisma.KraObjectiveMapUpdateManyWithWhereWithoutObjectiveInput | Prisma.KraObjectiveMapUpdateManyWithWhereWithoutObjectiveInput[];
    deleteMany?: Prisma.KraObjectiveMapScalarWhereInput | Prisma.KraObjectiveMapScalarWhereInput[];
};
export type KraObjectiveMapCreateNestedManyWithoutKraInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutKraInput, Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput> | Prisma.KraObjectiveMapCreateWithoutKraInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput | Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyKraInputEnvelope;
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
};
export type KraObjectiveMapUncheckedCreateNestedManyWithoutKraInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutKraInput, Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput> | Prisma.KraObjectiveMapCreateWithoutKraInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput | Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyKraInputEnvelope;
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
};
export type KraObjectiveMapUpdateManyWithoutKraNestedInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutKraInput, Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput> | Prisma.KraObjectiveMapCreateWithoutKraInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput | Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput[];
    upsert?: Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutKraInput | Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutKraInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyKraInputEnvelope;
    set?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    delete?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    update?: Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutKraInput | Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutKraInput[];
    updateMany?: Prisma.KraObjectiveMapUpdateManyWithWhereWithoutKraInput | Prisma.KraObjectiveMapUpdateManyWithWhereWithoutKraInput[];
    deleteMany?: Prisma.KraObjectiveMapScalarWhereInput | Prisma.KraObjectiveMapScalarWhereInput[];
};
export type KraObjectiveMapUncheckedUpdateManyWithoutKraNestedInput = {
    create?: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutKraInput, Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput> | Prisma.KraObjectiveMapCreateWithoutKraInput[] | Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput[];
    connectOrCreate?: Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput | Prisma.KraObjectiveMapCreateOrConnectWithoutKraInput[];
    upsert?: Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutKraInput | Prisma.KraObjectiveMapUpsertWithWhereUniqueWithoutKraInput[];
    createMany?: Prisma.KraObjectiveMapCreateManyKraInputEnvelope;
    set?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    disconnect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    delete?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    connect?: Prisma.KraObjectiveMapWhereUniqueInput | Prisma.KraObjectiveMapWhereUniqueInput[];
    update?: Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutKraInput | Prisma.KraObjectiveMapUpdateWithWhereUniqueWithoutKraInput[];
    updateMany?: Prisma.KraObjectiveMapUpdateManyWithWhereWithoutKraInput | Prisma.KraObjectiveMapUpdateManyWithWhereWithoutKraInput[];
    deleteMany?: Prisma.KraObjectiveMapScalarWhereInput | Prisma.KraObjectiveMapScalarWhereInput[];
};
export type KraObjectiveMapCreateWithoutObjectiveInput = {
    kra: Prisma.EnterpriseKraCreateNestedOneWithoutObjectiveMapInput;
};
export type KraObjectiveMapUncheckedCreateWithoutObjectiveInput = {
    kraCode: string;
};
export type KraObjectiveMapCreateOrConnectWithoutObjectiveInput = {
    where: Prisma.KraObjectiveMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput>;
};
export type KraObjectiveMapCreateManyObjectiveInputEnvelope = {
    data: Prisma.KraObjectiveMapCreateManyObjectiveInput | Prisma.KraObjectiveMapCreateManyObjectiveInput[];
    skipDuplicates?: boolean;
};
export type KraObjectiveMapUpsertWithWhereUniqueWithoutObjectiveInput = {
    where: Prisma.KraObjectiveMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.KraObjectiveMapUpdateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedUpdateWithoutObjectiveInput>;
    create: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedCreateWithoutObjectiveInput>;
};
export type KraObjectiveMapUpdateWithWhereUniqueWithoutObjectiveInput = {
    where: Prisma.KraObjectiveMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.KraObjectiveMapUpdateWithoutObjectiveInput, Prisma.KraObjectiveMapUncheckedUpdateWithoutObjectiveInput>;
};
export type KraObjectiveMapUpdateManyWithWhereWithoutObjectiveInput = {
    where: Prisma.KraObjectiveMapScalarWhereInput;
    data: Prisma.XOR<Prisma.KraObjectiveMapUpdateManyMutationInput, Prisma.KraObjectiveMapUncheckedUpdateManyWithoutObjectiveInput>;
};
export type KraObjectiveMapScalarWhereInput = {
    AND?: Prisma.KraObjectiveMapScalarWhereInput | Prisma.KraObjectiveMapScalarWhereInput[];
    OR?: Prisma.KraObjectiveMapScalarWhereInput[];
    NOT?: Prisma.KraObjectiveMapScalarWhereInput | Prisma.KraObjectiveMapScalarWhereInput[];
    kraCode?: Prisma.StringFilter<"KraObjectiveMap"> | string;
    objectiveCode?: Prisma.StringFilter<"KraObjectiveMap"> | string;
};
export type KraObjectiveMapCreateWithoutKraInput = {
    objective: Prisma.StrategicObjectiveCreateNestedOneWithoutKraMapInput;
};
export type KraObjectiveMapUncheckedCreateWithoutKraInput = {
    objectiveCode: string;
};
export type KraObjectiveMapCreateOrConnectWithoutKraInput = {
    where: Prisma.KraObjectiveMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutKraInput, Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput>;
};
export type KraObjectiveMapCreateManyKraInputEnvelope = {
    data: Prisma.KraObjectiveMapCreateManyKraInput | Prisma.KraObjectiveMapCreateManyKraInput[];
    skipDuplicates?: boolean;
};
export type KraObjectiveMapUpsertWithWhereUniqueWithoutKraInput = {
    where: Prisma.KraObjectiveMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.KraObjectiveMapUpdateWithoutKraInput, Prisma.KraObjectiveMapUncheckedUpdateWithoutKraInput>;
    create: Prisma.XOR<Prisma.KraObjectiveMapCreateWithoutKraInput, Prisma.KraObjectiveMapUncheckedCreateWithoutKraInput>;
};
export type KraObjectiveMapUpdateWithWhereUniqueWithoutKraInput = {
    where: Prisma.KraObjectiveMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.KraObjectiveMapUpdateWithoutKraInput, Prisma.KraObjectiveMapUncheckedUpdateWithoutKraInput>;
};
export type KraObjectiveMapUpdateManyWithWhereWithoutKraInput = {
    where: Prisma.KraObjectiveMapScalarWhereInput;
    data: Prisma.XOR<Prisma.KraObjectiveMapUpdateManyMutationInput, Prisma.KraObjectiveMapUncheckedUpdateManyWithoutKraInput>;
};
export type KraObjectiveMapCreateManyObjectiveInput = {
    kraCode: string;
};
export type KraObjectiveMapUpdateWithoutObjectiveInput = {
    kra?: Prisma.EnterpriseKraUpdateOneRequiredWithoutObjectiveMapNestedInput;
};
export type KraObjectiveMapUncheckedUpdateWithoutObjectiveInput = {
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type KraObjectiveMapUncheckedUpdateManyWithoutObjectiveInput = {
    kraCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type KraObjectiveMapCreateManyKraInput = {
    objectiveCode: string;
};
export type KraObjectiveMapUpdateWithoutKraInput = {
    objective?: Prisma.StrategicObjectiveUpdateOneRequiredWithoutKraMapNestedInput;
};
export type KraObjectiveMapUncheckedUpdateWithoutKraInput = {
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type KraObjectiveMapUncheckedUpdateManyWithoutKraInput = {
    objectiveCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type KraObjectiveMapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    kraCode?: boolean;
    objectiveCode?: boolean;
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kraObjectiveMap"]>;
export type KraObjectiveMapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    kraCode?: boolean;
    objectiveCode?: boolean;
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kraObjectiveMap"]>;
export type KraObjectiveMapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    kraCode?: boolean;
    objectiveCode?: boolean;
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kraObjectiveMap"]>;
export type KraObjectiveMapSelectScalar = {
    kraCode?: boolean;
    objectiveCode?: boolean;
};
export type KraObjectiveMapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"kraCode" | "objectiveCode", ExtArgs["result"]["kraObjectiveMap"]>;
export type KraObjectiveMapInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
};
export type KraObjectiveMapIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
};
export type KraObjectiveMapIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kra?: boolean | Prisma.EnterpriseKraDefaultArgs<ExtArgs>;
    objective?: boolean | Prisma.StrategicObjectiveDefaultArgs<ExtArgs>;
};
export type $KraObjectiveMapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KraObjectiveMap";
    objects: {
        kra: Prisma.$EnterpriseKraPayload<ExtArgs>;
        objective: Prisma.$StrategicObjectivePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        kraCode: string;
        objectiveCode: string;
    }, ExtArgs["result"]["kraObjectiveMap"]>;
    composites: {};
};
export type KraObjectiveMapGetPayload<S extends boolean | null | undefined | KraObjectiveMapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload, S>;
export type KraObjectiveMapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KraObjectiveMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KraObjectiveMapCountAggregateInputType | true;
};
export interface KraObjectiveMapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KraObjectiveMap'];
        meta: {
            name: 'KraObjectiveMap';
        };
    };
    findUnique<T extends KraObjectiveMapFindUniqueArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KraObjectiveMapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KraObjectiveMapFindFirstArgs>(args?: Prisma.SelectSubset<T, KraObjectiveMapFindFirstArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KraObjectiveMapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KraObjectiveMapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KraObjectiveMapFindManyArgs>(args?: Prisma.SelectSubset<T, KraObjectiveMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KraObjectiveMapCreateArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapCreateArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KraObjectiveMapCreateManyArgs>(args?: Prisma.SelectSubset<T, KraObjectiveMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KraObjectiveMapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KraObjectiveMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KraObjectiveMapDeleteArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapDeleteArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KraObjectiveMapUpdateArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapUpdateArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KraObjectiveMapDeleteManyArgs>(args?: Prisma.SelectSubset<T, KraObjectiveMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KraObjectiveMapUpdateManyArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KraObjectiveMapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KraObjectiveMapUpsertArgs>(args: Prisma.SelectSubset<T, KraObjectiveMapUpsertArgs<ExtArgs>>): Prisma.Prisma__KraObjectiveMapClient<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KraObjectiveMapCountArgs>(args?: Prisma.Subset<T, KraObjectiveMapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KraObjectiveMapCountAggregateOutputType> : number>;
    aggregate<T extends KraObjectiveMapAggregateArgs>(args: Prisma.Subset<T, KraObjectiveMapAggregateArgs>): Prisma.PrismaPromise<GetKraObjectiveMapAggregateType<T>>;
    groupBy<T extends KraObjectiveMapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KraObjectiveMapGroupByArgs['orderBy'];
    } : {
        orderBy?: KraObjectiveMapGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KraObjectiveMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKraObjectiveMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KraObjectiveMapFieldRefs;
}
export interface Prisma__KraObjectiveMapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kra<T extends Prisma.EnterpriseKraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseKraDefaultArgs<ExtArgs>>): Prisma.Prisma__EnterpriseKraClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseKraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    objective<T extends Prisma.StrategicObjectiveDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategicObjectiveDefaultArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KraObjectiveMapFieldRefs {
    readonly kraCode: Prisma.FieldRef<"KraObjectiveMap", 'String'>;
    readonly objectiveCode: Prisma.FieldRef<"KraObjectiveMap", 'String'>;
}
export type KraObjectiveMapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.KraObjectiveMapWhereUniqueInput;
};
export type KraObjectiveMapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.KraObjectiveMapWhereUniqueInput;
};
export type KraObjectiveMapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where?: Prisma.KraObjectiveMapWhereInput;
    orderBy?: Prisma.KraObjectiveMapOrderByWithRelationInput | Prisma.KraObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.KraObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KraObjectiveMapScalarFieldEnum | Prisma.KraObjectiveMapScalarFieldEnum[];
};
export type KraObjectiveMapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where?: Prisma.KraObjectiveMapWhereInput;
    orderBy?: Prisma.KraObjectiveMapOrderByWithRelationInput | Prisma.KraObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.KraObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KraObjectiveMapScalarFieldEnum | Prisma.KraObjectiveMapScalarFieldEnum[];
};
export type KraObjectiveMapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where?: Prisma.KraObjectiveMapWhereInput;
    orderBy?: Prisma.KraObjectiveMapOrderByWithRelationInput | Prisma.KraObjectiveMapOrderByWithRelationInput[];
    cursor?: Prisma.KraObjectiveMapWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KraObjectiveMapScalarFieldEnum | Prisma.KraObjectiveMapScalarFieldEnum[];
};
export type KraObjectiveMapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KraObjectiveMapCreateInput, Prisma.KraObjectiveMapUncheckedCreateInput>;
};
export type KraObjectiveMapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KraObjectiveMapCreateManyInput | Prisma.KraObjectiveMapCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KraObjectiveMapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    data: Prisma.KraObjectiveMapCreateManyInput | Prisma.KraObjectiveMapCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KraObjectiveMapIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KraObjectiveMapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KraObjectiveMapUpdateInput, Prisma.KraObjectiveMapUncheckedUpdateInput>;
    where: Prisma.KraObjectiveMapWhereUniqueInput;
};
export type KraObjectiveMapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KraObjectiveMapUpdateManyMutationInput, Prisma.KraObjectiveMapUncheckedUpdateManyInput>;
    where?: Prisma.KraObjectiveMapWhereInput;
    limit?: number;
};
export type KraObjectiveMapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KraObjectiveMapUpdateManyMutationInput, Prisma.KraObjectiveMapUncheckedUpdateManyInput>;
    where?: Prisma.KraObjectiveMapWhereInput;
    limit?: number;
    include?: Prisma.KraObjectiveMapIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KraObjectiveMapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.KraObjectiveMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.KraObjectiveMapCreateInput, Prisma.KraObjectiveMapUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KraObjectiveMapUpdateInput, Prisma.KraObjectiveMapUncheckedUpdateInput>;
};
export type KraObjectiveMapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
    where: Prisma.KraObjectiveMapWhereUniqueInput;
};
export type KraObjectiveMapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KraObjectiveMapWhereInput;
    limit?: number;
};
export type KraObjectiveMapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KraObjectiveMapSelect<ExtArgs> | null;
    omit?: Prisma.KraObjectiveMapOmit<ExtArgs> | null;
    include?: Prisma.KraObjectiveMapInclude<ExtArgs> | null;
};
