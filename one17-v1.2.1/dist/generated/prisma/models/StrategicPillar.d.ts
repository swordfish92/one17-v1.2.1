import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StrategicPillarModel = runtime.Types.Result.DefaultSelection<Prisma.$StrategicPillarPayload>;
export type AggregateStrategicPillar = {
    _count: StrategicPillarCountAggregateOutputType | null;
    _min: StrategicPillarMinAggregateOutputType | null;
    _max: StrategicPillarMaxAggregateOutputType | null;
};
export type StrategicPillarMinAggregateOutputType = {
    code: string | null;
    name: string | null;
    description: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
    explanation: string | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
};
export type StrategicPillarMaxAggregateOutputType = {
    code: string | null;
    name: string | null;
    description: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
    explanation: string | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
};
export type StrategicPillarCountAggregateOutputType = {
    code: number;
    name: number;
    description: number;
    status: number;
    createdAt: number;
    explanation: number;
    boardResolutionRef: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    _all: number;
};
export type StrategicPillarMinAggregateInputType = {
    code?: true;
    name?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    explanation?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
};
export type StrategicPillarMaxAggregateInputType = {
    code?: true;
    name?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    explanation?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
};
export type StrategicPillarCountAggregateInputType = {
    code?: true;
    name?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    explanation?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    _all?: true;
};
export type StrategicPillarAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategicPillarWhereInput;
    orderBy?: Prisma.StrategicPillarOrderByWithRelationInput | Prisma.StrategicPillarOrderByWithRelationInput[];
    cursor?: Prisma.StrategicPillarWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StrategicPillarCountAggregateInputType;
    _min?: StrategicPillarMinAggregateInputType;
    _max?: StrategicPillarMaxAggregateInputType;
};
export type GetStrategicPillarAggregateType<T extends StrategicPillarAggregateArgs> = {
    [P in keyof T & keyof AggregateStrategicPillar]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStrategicPillar[P]> : Prisma.GetScalarType<T[P], AggregateStrategicPillar[P]>;
};
export type StrategicPillarGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategicPillarWhereInput;
    orderBy?: Prisma.StrategicPillarOrderByWithAggregationInput | Prisma.StrategicPillarOrderByWithAggregationInput[];
    by: Prisma.StrategicPillarScalarFieldEnum[] | Prisma.StrategicPillarScalarFieldEnum;
    having?: Prisma.StrategicPillarScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StrategicPillarCountAggregateInputType | true;
    _min?: StrategicPillarMinAggregateInputType;
    _max?: StrategicPillarMaxAggregateInputType;
};
export type StrategicPillarGroupByOutputType = {
    code: string;
    name: string;
    description: string | null;
    status: $Enums.GovernedItemStatus;
    createdAt: Date;
    explanation: string | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    _count: StrategicPillarCountAggregateOutputType | null;
    _min: StrategicPillarMinAggregateOutputType | null;
    _max: StrategicPillarMaxAggregateOutputType | null;
};
export type GetStrategicPillarGroupByPayload<T extends StrategicPillarGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StrategicPillarGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StrategicPillarGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StrategicPillarGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StrategicPillarGroupByOutputType[P]>;
}>>;
export type StrategicPillarWhereInput = {
    AND?: Prisma.StrategicPillarWhereInput | Prisma.StrategicPillarWhereInput[];
    OR?: Prisma.StrategicPillarWhereInput[];
    NOT?: Prisma.StrategicPillarWhereInput | Prisma.StrategicPillarWhereInput[];
    code?: Prisma.StringFilter<"StrategicPillar"> | string;
    name?: Prisma.StringFilter<"StrategicPillar"> | string;
    description?: Prisma.StringNullableFilter<"StrategicPillar"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"StrategicPillar"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"StrategicPillar"> | Date | string;
    explanation?: Prisma.StringNullableFilter<"StrategicPillar"> | string | null;
    boardResolutionRef?: Prisma.StringNullableFilter<"StrategicPillar"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"StrategicPillar"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"StrategicPillar"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"StrategicPillar"> | string | null;
    objectiveMap?: Prisma.PillarObjectiveMapListRelationFilter;
};
export type StrategicPillarOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    objectiveMap?: Prisma.PillarObjectiveMapOrderByRelationAggregateInput;
};
export type StrategicPillarWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    workflowInstanceId?: string;
    AND?: Prisma.StrategicPillarWhereInput | Prisma.StrategicPillarWhereInput[];
    OR?: Prisma.StrategicPillarWhereInput[];
    NOT?: Prisma.StrategicPillarWhereInput | Prisma.StrategicPillarWhereInput[];
    name?: Prisma.StringFilter<"StrategicPillar"> | string;
    description?: Prisma.StringNullableFilter<"StrategicPillar"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"StrategicPillar"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"StrategicPillar"> | Date | string;
    explanation?: Prisma.StringNullableFilter<"StrategicPillar"> | string | null;
    boardResolutionRef?: Prisma.StringNullableFilter<"StrategicPillar"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"StrategicPillar"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"StrategicPillar"> | string | null;
    objectiveMap?: Prisma.PillarObjectiveMapListRelationFilter;
}, "code" | "workflowInstanceId">;
export type StrategicPillarOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StrategicPillarCountOrderByAggregateInput;
    _max?: Prisma.StrategicPillarMaxOrderByAggregateInput;
    _min?: Prisma.StrategicPillarMinOrderByAggregateInput;
};
export type StrategicPillarScalarWhereWithAggregatesInput = {
    AND?: Prisma.StrategicPillarScalarWhereWithAggregatesInput | Prisma.StrategicPillarScalarWhereWithAggregatesInput[];
    OR?: Prisma.StrategicPillarScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StrategicPillarScalarWhereWithAggregatesInput | Prisma.StrategicPillarScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"StrategicPillar"> | string;
    name?: Prisma.StringWithAggregatesFilter<"StrategicPillar"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"StrategicPillar"> | string | null;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"StrategicPillar"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StrategicPillar"> | Date | string;
    explanation?: Prisma.StringNullableWithAggregatesFilter<"StrategicPillar"> | string | null;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"StrategicPillar"> | string | null;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StrategicPillar"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StrategicPillar"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"StrategicPillar"> | string | null;
};
export type StrategicPillarCreateInput = {
    code: string;
    name: string;
    description?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    objectiveMap?: Prisma.PillarObjectiveMapCreateNestedManyWithoutPillarInput;
};
export type StrategicPillarUncheckedCreateInput = {
    code: string;
    name: string;
    description?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    objectiveMap?: Prisma.PillarObjectiveMapUncheckedCreateNestedManyWithoutPillarInput;
};
export type StrategicPillarUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectiveMap?: Prisma.PillarObjectiveMapUpdateManyWithoutPillarNestedInput;
};
export type StrategicPillarUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectiveMap?: Prisma.PillarObjectiveMapUncheckedUpdateManyWithoutPillarNestedInput;
};
export type StrategicPillarCreateManyInput = {
    code: string;
    name: string;
    description?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
};
export type StrategicPillarUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StrategicPillarUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StrategicPillarCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type StrategicPillarMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type StrategicPillarMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
};
export type StrategicPillarScalarRelationFilter = {
    is?: Prisma.StrategicPillarWhereInput;
    isNot?: Prisma.StrategicPillarWhereInput;
};
export type StrategicPillarCreateNestedOneWithoutObjectiveMapInput = {
    create?: Prisma.XOR<Prisma.StrategicPillarCreateWithoutObjectiveMapInput, Prisma.StrategicPillarUncheckedCreateWithoutObjectiveMapInput>;
    connectOrCreate?: Prisma.StrategicPillarCreateOrConnectWithoutObjectiveMapInput;
    connect?: Prisma.StrategicPillarWhereUniqueInput;
};
export type StrategicPillarUpdateOneRequiredWithoutObjectiveMapNestedInput = {
    create?: Prisma.XOR<Prisma.StrategicPillarCreateWithoutObjectiveMapInput, Prisma.StrategicPillarUncheckedCreateWithoutObjectiveMapInput>;
    connectOrCreate?: Prisma.StrategicPillarCreateOrConnectWithoutObjectiveMapInput;
    upsert?: Prisma.StrategicPillarUpsertWithoutObjectiveMapInput;
    connect?: Prisma.StrategicPillarWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StrategicPillarUpdateToOneWithWhereWithoutObjectiveMapInput, Prisma.StrategicPillarUpdateWithoutObjectiveMapInput>, Prisma.StrategicPillarUncheckedUpdateWithoutObjectiveMapInput>;
};
export type StrategicPillarCreateWithoutObjectiveMapInput = {
    code: string;
    name: string;
    description?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
};
export type StrategicPillarUncheckedCreateWithoutObjectiveMapInput = {
    code: string;
    name: string;
    description?: string | null;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    explanation?: string | null;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
};
export type StrategicPillarCreateOrConnectWithoutObjectiveMapInput = {
    where: Prisma.StrategicPillarWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategicPillarCreateWithoutObjectiveMapInput, Prisma.StrategicPillarUncheckedCreateWithoutObjectiveMapInput>;
};
export type StrategicPillarUpsertWithoutObjectiveMapInput = {
    update: Prisma.XOR<Prisma.StrategicPillarUpdateWithoutObjectiveMapInput, Prisma.StrategicPillarUncheckedUpdateWithoutObjectiveMapInput>;
    create: Prisma.XOR<Prisma.StrategicPillarCreateWithoutObjectiveMapInput, Prisma.StrategicPillarUncheckedCreateWithoutObjectiveMapInput>;
    where?: Prisma.StrategicPillarWhereInput;
};
export type StrategicPillarUpdateToOneWithWhereWithoutObjectiveMapInput = {
    where?: Prisma.StrategicPillarWhereInput;
    data: Prisma.XOR<Prisma.StrategicPillarUpdateWithoutObjectiveMapInput, Prisma.StrategicPillarUncheckedUpdateWithoutObjectiveMapInput>;
};
export type StrategicPillarUpdateWithoutObjectiveMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StrategicPillarUncheckedUpdateWithoutObjectiveMapInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StrategicPillarCountOutputType = {
    objectiveMap: number;
};
export type StrategicPillarCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    objectiveMap?: boolean | StrategicPillarCountOutputTypeCountObjectiveMapArgs;
};
export type StrategicPillarCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarCountOutputTypeSelect<ExtArgs> | null;
};
export type StrategicPillarCountOutputTypeCountObjectiveMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PillarObjectiveMapWhereInput;
};
export type StrategicPillarSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    objectiveMap?: boolean | Prisma.StrategicPillar$objectiveMapArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategicPillarCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategicPillar"]>;
export type StrategicPillarSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
}, ExtArgs["result"]["strategicPillar"]>;
export type StrategicPillarSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
}, ExtArgs["result"]["strategicPillar"]>;
export type StrategicPillarSelectScalar = {
    code?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    explanation?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
};
export type StrategicPillarOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "name" | "description" | "status" | "createdAt" | "explanation" | "boardResolutionRef" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId", ExtArgs["result"]["strategicPillar"]>;
export type StrategicPillarInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    objectiveMap?: boolean | Prisma.StrategicPillar$objectiveMapArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategicPillarCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StrategicPillarIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StrategicPillarIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StrategicPillarPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StrategicPillar";
    objects: {
        objectiveMap: Prisma.$PillarObjectiveMapPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        name: string;
        description: string | null;
        status: $Enums.GovernedItemStatus;
        createdAt: Date;
        explanation: string | null;
        boardResolutionRef: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
    }, ExtArgs["result"]["strategicPillar"]>;
    composites: {};
};
export type StrategicPillarGetPayload<S extends boolean | null | undefined | StrategicPillarDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload, S>;
export type StrategicPillarCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StrategicPillarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StrategicPillarCountAggregateInputType | true;
};
export interface StrategicPillarDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StrategicPillar'];
        meta: {
            name: 'StrategicPillar';
        };
    };
    findUnique<T extends StrategicPillarFindUniqueArgs>(args: Prisma.SelectSubset<T, StrategicPillarFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StrategicPillarFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StrategicPillarFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StrategicPillarFindFirstArgs>(args?: Prisma.SelectSubset<T, StrategicPillarFindFirstArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StrategicPillarFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StrategicPillarFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StrategicPillarFindManyArgs>(args?: Prisma.SelectSubset<T, StrategicPillarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StrategicPillarCreateArgs>(args: Prisma.SelectSubset<T, StrategicPillarCreateArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StrategicPillarCreateManyArgs>(args?: Prisma.SelectSubset<T, StrategicPillarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StrategicPillarCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StrategicPillarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StrategicPillarDeleteArgs>(args: Prisma.SelectSubset<T, StrategicPillarDeleteArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StrategicPillarUpdateArgs>(args: Prisma.SelectSubset<T, StrategicPillarUpdateArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StrategicPillarDeleteManyArgs>(args?: Prisma.SelectSubset<T, StrategicPillarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StrategicPillarUpdateManyArgs>(args: Prisma.SelectSubset<T, StrategicPillarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StrategicPillarUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StrategicPillarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StrategicPillarUpsertArgs>(args: Prisma.SelectSubset<T, StrategicPillarUpsertArgs<ExtArgs>>): Prisma.Prisma__StrategicPillarClient<runtime.Types.Result.GetResult<Prisma.$StrategicPillarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StrategicPillarCountArgs>(args?: Prisma.Subset<T, StrategicPillarCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StrategicPillarCountAggregateOutputType> : number>;
    aggregate<T extends StrategicPillarAggregateArgs>(args: Prisma.Subset<T, StrategicPillarAggregateArgs>): Prisma.PrismaPromise<GetStrategicPillarAggregateType<T>>;
    groupBy<T extends StrategicPillarGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StrategicPillarGroupByArgs['orderBy'];
    } : {
        orderBy?: StrategicPillarGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StrategicPillarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrategicPillarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StrategicPillarFieldRefs;
}
export interface Prisma__StrategicPillarClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    objectiveMap<T extends Prisma.StrategicPillar$objectiveMapArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategicPillar$objectiveMapArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PillarObjectiveMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StrategicPillarFieldRefs {
    readonly code: Prisma.FieldRef<"StrategicPillar", 'String'>;
    readonly name: Prisma.FieldRef<"StrategicPillar", 'String'>;
    readonly description: Prisma.FieldRef<"StrategicPillar", 'String'>;
    readonly status: Prisma.FieldRef<"StrategicPillar", 'GovernedItemStatus'>;
    readonly createdAt: Prisma.FieldRef<"StrategicPillar", 'DateTime'>;
    readonly explanation: Prisma.FieldRef<"StrategicPillar", 'String'>;
    readonly boardResolutionRef: Prisma.FieldRef<"StrategicPillar", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"StrategicPillar", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"StrategicPillar", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"StrategicPillar", 'String'>;
}
export type StrategicPillarFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    where: Prisma.StrategicPillarWhereUniqueInput;
};
export type StrategicPillarFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    where: Prisma.StrategicPillarWhereUniqueInput;
};
export type StrategicPillarFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    where?: Prisma.StrategicPillarWhereInput;
    orderBy?: Prisma.StrategicPillarOrderByWithRelationInput | Prisma.StrategicPillarOrderByWithRelationInput[];
    cursor?: Prisma.StrategicPillarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategicPillarScalarFieldEnum | Prisma.StrategicPillarScalarFieldEnum[];
};
export type StrategicPillarFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    where?: Prisma.StrategicPillarWhereInput;
    orderBy?: Prisma.StrategicPillarOrderByWithRelationInput | Prisma.StrategicPillarOrderByWithRelationInput[];
    cursor?: Prisma.StrategicPillarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategicPillarScalarFieldEnum | Prisma.StrategicPillarScalarFieldEnum[];
};
export type StrategicPillarFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    where?: Prisma.StrategicPillarWhereInput;
    orderBy?: Prisma.StrategicPillarOrderByWithRelationInput | Prisma.StrategicPillarOrderByWithRelationInput[];
    cursor?: Prisma.StrategicPillarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategicPillarScalarFieldEnum | Prisma.StrategicPillarScalarFieldEnum[];
};
export type StrategicPillarCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategicPillarCreateInput, Prisma.StrategicPillarUncheckedCreateInput>;
};
export type StrategicPillarCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StrategicPillarCreateManyInput | Prisma.StrategicPillarCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategicPillarCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    data: Prisma.StrategicPillarCreateManyInput | Prisma.StrategicPillarCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategicPillarUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategicPillarUpdateInput, Prisma.StrategicPillarUncheckedUpdateInput>;
    where: Prisma.StrategicPillarWhereUniqueInput;
};
export type StrategicPillarUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StrategicPillarUpdateManyMutationInput, Prisma.StrategicPillarUncheckedUpdateManyInput>;
    where?: Prisma.StrategicPillarWhereInput;
    limit?: number;
};
export type StrategicPillarUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategicPillarUpdateManyMutationInput, Prisma.StrategicPillarUncheckedUpdateManyInput>;
    where?: Prisma.StrategicPillarWhereInput;
    limit?: number;
};
export type StrategicPillarUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    where: Prisma.StrategicPillarWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategicPillarCreateInput, Prisma.StrategicPillarUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StrategicPillarUpdateInput, Prisma.StrategicPillarUncheckedUpdateInput>;
};
export type StrategicPillarDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
    where: Prisma.StrategicPillarWhereUniqueInput;
};
export type StrategicPillarDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategicPillarWhereInput;
    limit?: number;
};
export type StrategicPillar$objectiveMapArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StrategicPillarDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategicPillarSelect<ExtArgs> | null;
    omit?: Prisma.StrategicPillarOmit<ExtArgs> | null;
    include?: Prisma.StrategicPillarInclude<ExtArgs> | null;
};
