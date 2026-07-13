import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StrategicObjectiveModel = runtime.Types.Result.DefaultSelection<Prisma.$StrategicObjectivePayload>;
export type AggregateStrategicObjective = {
    _count: StrategicObjectiveCountAggregateOutputType | null;
    _min: StrategicObjectiveMinAggregateOutputType | null;
    _max: StrategicObjectiveMaxAggregateOutputType | null;
};
export type StrategicObjectiveMinAggregateOutputType = {
    code: string | null;
    name: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
    explanation: string | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
};
export type StrategicObjectiveMaxAggregateOutputType = {
    code: string | null;
    name: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
    explanation: string | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
};
export type StrategicObjectiveCountAggregateOutputType = {
    code: number;
    name: number;
    status: number;
    createdAt: number;
    explanation: number;
    boardResolutionRef: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    _all: number;
};
export type StrategicObjectiveMinAggregateInputType = {
    code?: true;
    name?: true;
    status?: true;
    createdAt?: true;
    explanation?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
};
export type StrategicObjectiveMaxAggregateInputType = {
    code?: true;
    name?: true;
    status?: true;
    createdAt?: true;
    explanation?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
};
export type StrategicObjectiveCountAggregateInputType = {
    code?: true;
    name?: true;
    status?: true;
    createdAt?: true;
    explanation?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    _all?: true;
};
export type StrategicObjectiveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategicObjectiveWhereInput;
    orderBy?: Prisma.StrategicObjectiveOrderByWithRelationInput | Prisma.StrategicObjectiveOrderByWithRelationInput[];
    cursor?: Prisma.StrategicObjectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StrategicObjectiveCountAggregateInputType;
    _min?: StrategicObjectiveMinAggregateInputType;
    _max?: StrategicObjectiveMaxAggregateInputType;
};
export type GetStrategicObjectiveAggregateType<T extends StrategicObjectiveAggregateArgs> = {
    [P in keyof T & keyof AggregateStrategicObjective]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStrategicObjective[P]> : Prisma.GetScalarType<T[P], AggregateStrategicObjective[P]>;
};
export type StrategicObjectiveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategicObjectiveWhereInput;
    orderBy?: Prisma.StrategicObjectiveOrderByWithAggregationInput | Prisma.StrategicObjectiveOrderByWithAggregationInput[];
    by: Prisma.StrategicObjectiveScalarFieldEnum[] | Prisma.StrategicObjectiveScalarFieldEnum;
    having?: Prisma.StrategicObjectiveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StrategicObjectiveCountAggregateInputType | true;
    _min?: StrategicObjectiveMinAggregateInputType;
    _max?: StrategicObjectiveMaxAggregateInputType;
};
export type StrategicObjectiveGroupByOutputType = {
    code: string;
    name: string;
    status: $Enums.GovernedItemStatus;
    createdAt: Date;
    explanation: string | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    _count: StrategicObjectiveCountAggregateOutputType | null;
    _min: StrategicObjectiveMinAggregateOutputType | null;
    _max: StrategicObjectiveMaxAggregateOutputType | null;
};
export type GetStrategicObjectiveGroupByPayload<T extends StrategicObjectiveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StrategicObjectiveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StrategicObjectiveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StrategicObjectiveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StrategicObjectiveGroupByOutputType[P]>;
}>>;
export type StrategicObjectiveWhereInput = {
    AND?: Prisma.StrategicObjectiveWhereInput | Prisma.StrategicObjectiveWhereInput[];
    OR?: Prisma.StrategicObjectiveWhereInput[];
    NOT?: Prisma.StrategicObjectiveWhereInput | Prisma.StrategicObjectiveWhereInput[];
    code?: Prisma.StringFilter<"StrategicObjective"> | string;
    name?: Prisma.StringFilter<"StrategicObjective"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"StrategicObjective"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"StrategicObjective"> | Date | string;
    explanation?: Prisma.StringNullableFilter<"StrategicObjective"> | string | null;
    boardResolutionRef?: Prisma.StringNullableFilter<"StrategicObjective"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"StrategicObjective"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"StrategicObjective"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"StrategicObjective"> | string | null;
    pillarMap?: Prisma.PillarObjectiveMapListRelationFilter;
    kraMap?: Prisma.KraObjectiveMapListRelationFilter;
};
export type StrategicObjectiveOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pillarMap?: Prisma.PillarObjectiveMapOrderByRelationAggregateInput;
    kraMap?: Prisma.KraObjectiveMapOrderByRelationAggregateInput;
};
export type StrategicObjectiveWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    workflowInstanceId?: string;
    AND?: Prisma.StrategicObjectiveWhereInput | Prisma.StrategicObjectiveWhereInput[];
    OR?: Prisma.StrategicObjectiveWhereInput[];
    NOT?: Prisma.StrategicObjectiveWhereInput | Prisma.StrategicObjectiveWhereInput[];
    name?: Prisma.StringFilter<"StrategicObjective"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"StrategicObjective"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"StrategicObjective"> | Date | string;
    explanation?: Prisma.StringNullableFilter<"StrategicObjective"> | string | null;
    boardResolutionRef?: Prisma.StringNullableFilter<"StrategicObjective"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"StrategicObjective"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"StrategicObjective"> | string | null;
    pillarMap?: Prisma.PillarObjectiveMapListRelationFilter;
    kraMap?: Prisma.KraObjectiveMapListRelationFilter;
}, "code" | "workflowInstanceId">;
export type StrategicObjectiveOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StrategicObjectiveCountOrderByAggregateInput;
    _max?: Prisma.StrategicObjectiveMaxOrderByAggregateInput;
    _min?: Prisma.StrategicObjectiveMinOrderByAggregateInput;
};
export type StrategicObjectiveScalarWhereWithAggregatesInput = {
    AND?: Prisma.StrategicObjectiveScalarWhereWithAggregatesInput | Prisma.StrategicObjectiveScalarWhereWithAggregatesInput[];
    OR?: Prisma.StrategicObjectiveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StrategicObjectiveScalarWhereWithAggregatesInput | Prisma.StrategicObjectiveScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"StrategicObjective"> | string;
    name?: Prisma.StringWithAggregatesFilter<"StrategicObjective"> | string;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"StrategicObjective"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StrategicObjective"> | Date | string;
    explanation?: Prisma.StringNullableWithAggregatesFilter<"StrategicObjective"> | string | null;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"StrategicObjective"> | string | null;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StrategicObjective"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StrategicObjective"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"StrategicObjective"> | string | null;
};
export type StrategicObjectiveCreateInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    pillarMap?: Prisma.PillarObjectiveMapCreateNestedManyWithoutObjectiveInput;
    kraMap?: Prisma.KraObjectiveMapCreateNestedManyWithoutObjectiveInput;
};
export type StrategicObjectiveUncheckedCreateInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    pillarMap?: Prisma.PillarObjectiveMapUncheckedCreateNestedManyWithoutObjectiveInput;
    kraMap?: Prisma.KraObjectiveMapUncheckedCreateNestedManyWithoutObjectiveInput;
};
export type StrategicObjectiveUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pillarMap?: Prisma.PillarObjectiveMapUpdateManyWithoutObjectiveNestedInput;
    kraMap?: Prisma.KraObjectiveMapUpdateManyWithoutObjectiveNestedInput;
};
export type StrategicObjectiveUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pillarMap?: Prisma.PillarObjectiveMapUncheckedUpdateManyWithoutObjectiveNestedInput;
    kraMap?: Prisma.KraObjectiveMapUncheckedUpdateManyWithoutObjectiveNestedInput;
};
export type StrategicObjectiveCreateManyInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
};
export type StrategicObjectiveUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StrategicObjectiveUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StrategicObjectiveCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type StrategicObjectiveMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type StrategicObjectiveMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type StrategicObjectiveScalarRelationFilter = {
    is?: Prisma.StrategicObjectiveWhereInput;
    isNot?: Prisma.StrategicObjectiveWhereInput;
};
export type StrategicObjectiveCreateNestedOneWithoutPillarMapInput = {
    create?: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutPillarMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutPillarMapInput>;
    connectOrCreate?: Prisma.StrategicObjectiveCreateOrConnectWithoutPillarMapInput;
    connect?: Prisma.StrategicObjectiveWhereUniqueInput;
};
export type StrategicObjectiveUpdateOneRequiredWithoutPillarMapNestedInput = {
    create?: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutPillarMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutPillarMapInput>;
    connectOrCreate?: Prisma.StrategicObjectiveCreateOrConnectWithoutPillarMapInput;
    upsert?: Prisma.StrategicObjectiveUpsertWithoutPillarMapInput;
    connect?: Prisma.StrategicObjectiveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StrategicObjectiveUpdateToOneWithWhereWithoutPillarMapInput, Prisma.StrategicObjectiveUpdateWithoutPillarMapInput>, Prisma.StrategicObjectiveUncheckedUpdateWithoutPillarMapInput>;
};
export type StrategicObjectiveCreateNestedOneWithoutKraMapInput = {
    create?: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutKraMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutKraMapInput>;
    connectOrCreate?: Prisma.StrategicObjectiveCreateOrConnectWithoutKraMapInput;
    connect?: Prisma.StrategicObjectiveWhereUniqueInput;
};
export type StrategicObjectiveUpdateOneRequiredWithoutKraMapNestedInput = {
    create?: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutKraMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutKraMapInput>;
    connectOrCreate?: Prisma.StrategicObjectiveCreateOrConnectWithoutKraMapInput;
    upsert?: Prisma.StrategicObjectiveUpsertWithoutKraMapInput;
    connect?: Prisma.StrategicObjectiveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StrategicObjectiveUpdateToOneWithWhereWithoutKraMapInput, Prisma.StrategicObjectiveUpdateWithoutKraMapInput>, Prisma.StrategicObjectiveUncheckedUpdateWithoutKraMapInput>;
};
export type StrategicObjectiveCreateWithoutPillarMapInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    kraMap?: Prisma.KraObjectiveMapCreateNestedManyWithoutObjectiveInput;
};
export type StrategicObjectiveUncheckedCreateWithoutPillarMapInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    kraMap?: Prisma.KraObjectiveMapUncheckedCreateNestedManyWithoutObjectiveInput;
};
export type StrategicObjectiveCreateOrConnectWithoutPillarMapInput = {
    where: Prisma.StrategicObjectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutPillarMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutPillarMapInput>;
};
export type StrategicObjectiveUpsertWithoutPillarMapInput = {
    update: Prisma.XOR<Prisma.StrategicObjectiveUpdateWithoutPillarMapInput, Prisma.StrategicObjectiveUncheckedUpdateWithoutPillarMapInput>;
    create: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutPillarMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutPillarMapInput>;
    where?: Prisma.StrategicObjectiveWhereInput;
};
export type StrategicObjectiveUpdateToOneWithWhereWithoutPillarMapInput = {
    where?: Prisma.StrategicObjectiveWhereInput;
    data: Prisma.XOR<Prisma.StrategicObjectiveUpdateWithoutPillarMapInput, Prisma.StrategicObjectiveUncheckedUpdateWithoutPillarMapInput>;
};
export type StrategicObjectiveUpdateWithoutPillarMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kraMap?: Prisma.KraObjectiveMapUpdateManyWithoutObjectiveNestedInput;
};
export type StrategicObjectiveUncheckedUpdateWithoutPillarMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kraMap?: Prisma.KraObjectiveMapUncheckedUpdateManyWithoutObjectiveNestedInput;
};
export type StrategicObjectiveCreateWithoutKraMapInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    pillarMap?: Prisma.PillarObjectiveMapCreateNestedManyWithoutObjectiveInput;
};
export type StrategicObjectiveUncheckedCreateWithoutKraMapInput = {
    code: string;
    name: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    pillarMap?: Prisma.PillarObjectiveMapUncheckedCreateNestedManyWithoutObjectiveInput;
};
export type StrategicObjectiveCreateOrConnectWithoutKraMapInput = {
    where: Prisma.StrategicObjectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutKraMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutKraMapInput>;
};
export type StrategicObjectiveUpsertWithoutKraMapInput = {
    update: Prisma.XOR<Prisma.StrategicObjectiveUpdateWithoutKraMapInput, Prisma.StrategicObjectiveUncheckedUpdateWithoutKraMapInput>;
    create: Prisma.XOR<Prisma.StrategicObjectiveCreateWithoutKraMapInput, Prisma.StrategicObjectiveUncheckedCreateWithoutKraMapInput>;
    where?: Prisma.StrategicObjectiveWhereInput;
};
export type StrategicObjectiveUpdateToOneWithWhereWithoutKraMapInput = {
    where?: Prisma.StrategicObjectiveWhereInput;
    data: Prisma.XOR<Prisma.StrategicObjectiveUpdateWithoutKraMapInput, Prisma.StrategicObjectiveUncheckedUpdateWithoutKraMapInput>;
};
export type StrategicObjectiveUpdateWithoutKraMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pillarMap?: Prisma.PillarObjectiveMapUpdateManyWithoutObjectiveNestedInput;
};
export type StrategicObjectiveUncheckedUpdateWithoutKraMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pillarMap?: Prisma.PillarObjectiveMapUncheckedUpdateManyWithoutObjectiveNestedInput;
};
export type StrategicObjectiveCountOutputType = {
    pillarMap: number;
    kraMap: number;
};
export type StrategicObjectiveCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pillarMap?: boolean | StrategicObjectiveCountOutputTypeCountPillarMapArgs;
    kraMap?: boolean | StrategicObjectiveCountOutputTypeCountKraMapArgs;
};
export type StrategicObjectiveCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveCountOutputTypeSelect<ExtArgs> | null;
};
export type StrategicObjectiveCountOutputTypeCountPillarMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PillarObjectiveMapWhereInput;
};
export type StrategicObjectiveCountOutputTypeCountKraMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KraObjectiveMapWhereInput;
};
export type StrategicObjectiveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    pillarMap?: boolean | Prisma.StrategicObjective$pillarMapArgs<ExtArgs>;
    kraMap?: boolean | Prisma.StrategicObjective$kraMapArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategicObjectiveCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategicObjective"]>;
export type StrategicObjectiveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
}, ExtArgs["result"]["strategicObjective"]>;
export type StrategicObjectiveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
}, ExtArgs["result"]["strategicObjective"]>;
export type StrategicObjectiveSelectScalar = {
    code?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
};
export type StrategicObjectiveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "name" | "status" | "createdAt" | "explanation" | "boardResolutionRef" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId", ExtArgs["result"]["strategicObjective"]>;
export type StrategicObjectiveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pillarMap?: boolean | Prisma.StrategicObjective$pillarMapArgs<ExtArgs>;
    kraMap?: boolean | Prisma.StrategicObjective$kraMapArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategicObjectiveCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StrategicObjectiveIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StrategicObjectiveIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StrategicObjectivePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StrategicObjective";
    objects: {
        pillarMap: Prisma.$PillarObjectiveMapPayload<ExtArgs>[];
        kraMap: Prisma.$KraObjectiveMapPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        name: string;
        status: $Enums.GovernedItemStatus;
        createdAt: Date;
        explanation: string | null;
        boardResolutionRef: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
    }, ExtArgs["result"]["strategicObjective"]>;
    composites: {};
};
export type StrategicObjectiveGetPayload<S extends boolean | null | undefined | StrategicObjectiveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload, S>;
export type StrategicObjectiveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StrategicObjectiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StrategicObjectiveCountAggregateInputType | true;
};
export interface StrategicObjectiveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StrategicObjective'];
        meta: {
            name: 'StrategicObjective';
        };
    };
    findUnique<T extends StrategicObjectiveFindUniqueArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StrategicObjectiveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StrategicObjectiveFindFirstArgs>(args?: Prisma.SelectSubset<T, StrategicObjectiveFindFirstArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StrategicObjectiveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StrategicObjectiveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StrategicObjectiveFindManyArgs>(args?: Prisma.SelectSubset<T, StrategicObjectiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StrategicObjectiveCreateArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveCreateArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StrategicObjectiveCreateManyArgs>(args?: Prisma.SelectSubset<T, StrategicObjectiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StrategicObjectiveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StrategicObjectiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StrategicObjectiveDeleteArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveDeleteArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StrategicObjectiveUpdateArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveUpdateArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StrategicObjectiveDeleteManyArgs>(args?: Prisma.SelectSubset<T, StrategicObjectiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StrategicObjectiveUpdateManyArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StrategicObjectiveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StrategicObjectiveUpsertArgs>(args: Prisma.SelectSubset<T, StrategicObjectiveUpsertArgs<ExtArgs>>): Prisma.Prisma__StrategicObjectiveClient<runtime.Types.Result.GetResult<Prisma.$StrategicObjectivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StrategicObjectiveCountArgs>(args?: Prisma.Subset<T, StrategicObjectiveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StrategicObjectiveCountAggregateOutputType> : number>;
    aggregate<T extends StrategicObjectiveAggregateArgs>(args: Prisma.Subset<T, StrategicObjectiveAggregateArgs>): Prisma.PrismaPromise<GetStrategicObjectiveAggregateType<T>>;
    groupBy<T extends StrategicObjectiveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StrategicObjectiveGroupByArgs['orderBy'];
    } : {
        orderBy?: StrategicObjectiveGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StrategicObjectiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrategicObjectiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StrategicObjectiveFieldRefs;
}
export interface Prisma__StrategicObjectiveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pillarMap<T extends Prisma.StrategicObjective$pillarMapArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategicObjective$pillarMapArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    kraMap<T extends Prisma.StrategicObjective$kraMapArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategicObjective$kraMapArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KraObjectiveMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StrategicObjectiveFieldRefs {
    readonly code: Prisma.FieldRef<"StrategicObjective", 'String'>;
    readonly name: Prisma.FieldRef<"StrategicObjective", 'String'>;
    readonly status: Prisma.FieldRef<"StrategicObjective", 'GovernedItemStatus'>;
    readonly createdAt: Prisma.FieldRef<"StrategicObjective", 'DateTime'>;
    readonly explanation: Prisma.FieldRef<"StrategicObjective", 'String'>;
    readonly boardResolutionRef: Prisma.FieldRef<"StrategicObjective", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"StrategicObjective", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"StrategicObjective", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"StrategicObjective", 'String'>;
}
export type StrategicObjectiveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    where: Prisma.StrategicObjectiveWhereUniqueInput;
};
export type StrategicObjectiveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    where: Prisma.StrategicObjectiveWhereUniqueInput;
};
export type StrategicObjectiveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    where?: Prisma.StrategicObjectiveWhereInput;
    orderBy?: Prisma.StrategicObjectiveOrderByWithRelationInput | Prisma.StrategicObjectiveOrderByWithRelationInput[];
    cursor?: Prisma.StrategicObjectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategicObjectiveScalarFieldEnum | Prisma.StrategicObjectiveScalarFieldEnum[];
};
export type StrategicObjectiveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    where?: Prisma.StrategicObjectiveWhereInput;
    orderBy?: Prisma.StrategicObjectiveOrderByWithRelationInput | Prisma.StrategicObjectiveOrderByWithRelationInput[];
    cursor?: Prisma.StrategicObjectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategicObjectiveScalarFieldEnum | Prisma.StrategicObjectiveScalarFieldEnum[];
};
export type StrategicObjectiveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    where?: Prisma.StrategicObjectiveWhereInput;
    orderBy?: Prisma.StrategicObjectiveOrderByWithRelationInput | Prisma.StrategicObjectiveOrderByWithRelationInput[];
    cursor?: Prisma.StrategicObjectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategicObjectiveScalarFieldEnum | Prisma.StrategicObjectiveScalarFieldEnum[];
};
export type StrategicObjectiveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategicObjectiveCreateInput, Prisma.StrategicObjectiveUncheckedCreateInput>;
};
export type StrategicObjectiveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StrategicObjectiveCreateManyInput | Prisma.StrategicObjectiveCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategicObjectiveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    data: Prisma.StrategicObjectiveCreateManyInput | Prisma.StrategicObjectiveCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategicObjectiveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategicObjectiveUpdateInput, Prisma.StrategicObjectiveUncheckedUpdateInput>;
    where: Prisma.StrategicObjectiveWhereUniqueInput;
};
export type StrategicObjectiveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StrategicObjectiveUpdateManyMutationInput, Prisma.StrategicObjectiveUncheckedUpdateManyInput>;
    where?: Prisma.StrategicObjectiveWhereInput;
    limit?: number;
};
export type StrategicObjectiveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategicObjectiveUpdateManyMutationInput, Prisma.StrategicObjectiveUncheckedUpdateManyInput>;
    where?: Prisma.StrategicObjectiveWhereInput;
    limit?: number;
};
export type StrategicObjectiveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    where: Prisma.StrategicObjectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategicObjectiveCreateInput, Prisma.StrategicObjectiveUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StrategicObjectiveUpdateInput, Prisma.StrategicObjectiveUncheckedUpdateInput>;
};
export type StrategicObjectiveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
    where: Prisma.StrategicObjectiveWhereUniqueInput;
};
export type StrategicObjectiveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategicObjectiveWhereInput;
    limit?: number;
};
export type StrategicObjective$pillarMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StrategicObjective$kraMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StrategicObjectiveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicObjectiveSelect<ExtArgs> | null;
    omit?: Prisma.StrategicObjectiveOmit<ExtArgs> | null;
    include?: Prisma.StrategicObjectiveInclude<ExtArgs> | null;
};
