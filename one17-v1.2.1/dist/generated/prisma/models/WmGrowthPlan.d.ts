import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmGrowthPlanModel = runtime.Types.Result.DefaultSelection<Prisma.$WmGrowthPlanPayload>;
export type AggregateWmGrowthPlan = {
    _count: WmGrowthPlanCountAggregateOutputType | null;
    _avg: WmGrowthPlanAvgAggregateOutputType | null;
    _sum: WmGrowthPlanSumAggregateOutputType | null;
    _min: WmGrowthPlanMinAggregateOutputType | null;
    _max: WmGrowthPlanMaxAggregateOutputType | null;
};
export type WmGrowthPlanAvgAggregateOutputType = {
    version: number | null;
};
export type WmGrowthPlanSumAggregateOutputType = {
    version: number | null;
};
export type WmGrowthPlanMinAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    version: number | null;
    horizon: string | null;
    reviewSchedule: string | null;
    isActive: boolean | null;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WmGrowthPlanMaxAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    version: number | null;
    horizon: string | null;
    reviewSchedule: string | null;
    isActive: boolean | null;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WmGrowthPlanCountAggregateOutputType = {
    id: number;
    wmClientProfileId: number;
    version: number;
    horizon: number;
    milestones: number;
    targetGlidePath: number;
    reviewSchedule: number;
    isActive: number;
    clientAcknowledgedAt: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type WmGrowthPlanAvgAggregateInputType = {
    version?: true;
};
export type WmGrowthPlanSumAggregateInputType = {
    version?: true;
};
export type WmGrowthPlanMinAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    horizon?: true;
    reviewSchedule?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WmGrowthPlanMaxAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    horizon?: true;
    reviewSchedule?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WmGrowthPlanCountAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    horizon?: true;
    milestones?: true;
    targetGlidePath?: true;
    reviewSchedule?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type WmGrowthPlanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmGrowthPlanWhereInput;
    orderBy?: Prisma.WmGrowthPlanOrderByWithRelationInput | Prisma.WmGrowthPlanOrderByWithRelationInput[];
    cursor?: Prisma.WmGrowthPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmGrowthPlanCountAggregateInputType;
    _avg?: WmGrowthPlanAvgAggregateInputType;
    _sum?: WmGrowthPlanSumAggregateInputType;
    _min?: WmGrowthPlanMinAggregateInputType;
    _max?: WmGrowthPlanMaxAggregateInputType;
};
export type GetWmGrowthPlanAggregateType<T extends WmGrowthPlanAggregateArgs> = {
    [P in keyof T & keyof AggregateWmGrowthPlan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmGrowthPlan[P]> : Prisma.GetScalarType<T[P], AggregateWmGrowthPlan[P]>;
};
export type WmGrowthPlanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmGrowthPlanWhereInput;
    orderBy?: Prisma.WmGrowthPlanOrderByWithAggregationInput | Prisma.WmGrowthPlanOrderByWithAggregationInput[];
    by: Prisma.WmGrowthPlanScalarFieldEnum[] | Prisma.WmGrowthPlanScalarFieldEnum;
    having?: Prisma.WmGrowthPlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmGrowthPlanCountAggregateInputType | true;
    _avg?: WmGrowthPlanAvgAggregateInputType;
    _sum?: WmGrowthPlanSumAggregateInputType;
    _min?: WmGrowthPlanMinAggregateInputType;
    _max?: WmGrowthPlanMaxAggregateInputType;
};
export type WmGrowthPlanGroupByOutputType = {
    id: string;
    wmClientProfileId: string;
    version: number;
    horizon: string;
    milestones: runtime.JsonValue;
    targetGlidePath: runtime.JsonValue;
    reviewSchedule: string;
    isActive: boolean;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string;
    createdAt: Date;
    _count: WmGrowthPlanCountAggregateOutputType | null;
    _avg: WmGrowthPlanAvgAggregateOutputType | null;
    _sum: WmGrowthPlanSumAggregateOutputType | null;
    _min: WmGrowthPlanMinAggregateOutputType | null;
    _max: WmGrowthPlanMaxAggregateOutputType | null;
};
export type GetWmGrowthPlanGroupByPayload<T extends WmGrowthPlanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmGrowthPlanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmGrowthPlanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmGrowthPlanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmGrowthPlanGroupByOutputType[P]>;
}>>;
export type WmGrowthPlanWhereInput = {
    AND?: Prisma.WmGrowthPlanWhereInput | Prisma.WmGrowthPlanWhereInput[];
    OR?: Prisma.WmGrowthPlanWhereInput[];
    NOT?: Prisma.WmGrowthPlanWhereInput | Prisma.WmGrowthPlanWhereInput[];
    id?: Prisma.UuidFilter<"WmGrowthPlan"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    version?: Prisma.IntFilter<"WmGrowthPlan"> | number;
    horizon?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    milestones?: Prisma.JsonFilter<"WmGrowthPlan">;
    targetGlidePath?: Prisma.JsonFilter<"WmGrowthPlan">;
    reviewSchedule?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    isActive?: Prisma.BoolFilter<"WmGrowthPlan"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmGrowthPlan"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmGrowthPlan"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmGrowthPlan"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
};
export type WmGrowthPlanOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    horizon?: Prisma.SortOrder;
    milestones?: Prisma.SortOrder;
    targetGlidePath?: Prisma.SortOrder;
    reviewSchedule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wmClientProfile?: Prisma.WmClientProfileOrderByWithRelationInput;
};
export type WmGrowthPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    wmClientProfileId_version?: Prisma.WmGrowthPlanWmClientProfileIdVersionCompoundUniqueInput;
    AND?: Prisma.WmGrowthPlanWhereInput | Prisma.WmGrowthPlanWhereInput[];
    OR?: Prisma.WmGrowthPlanWhereInput[];
    NOT?: Prisma.WmGrowthPlanWhereInput | Prisma.WmGrowthPlanWhereInput[];
    wmClientProfileId?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    version?: Prisma.IntFilter<"WmGrowthPlan"> | number;
    horizon?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    milestones?: Prisma.JsonFilter<"WmGrowthPlan">;
    targetGlidePath?: Prisma.JsonFilter<"WmGrowthPlan">;
    reviewSchedule?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    isActive?: Prisma.BoolFilter<"WmGrowthPlan"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmGrowthPlan"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmGrowthPlan"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmGrowthPlan"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
}, "id" | "wmClientProfileId_version">;
export type WmGrowthPlanOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    horizon?: Prisma.SortOrder;
    milestones?: Prisma.SortOrder;
    targetGlidePath?: Prisma.SortOrder;
    reviewSchedule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmGrowthPlanCountOrderByAggregateInput;
    _avg?: Prisma.WmGrowthPlanAvgOrderByAggregateInput;
    _max?: Prisma.WmGrowthPlanMaxOrderByAggregateInput;
    _min?: Prisma.WmGrowthPlanMinOrderByAggregateInput;
    _sum?: Prisma.WmGrowthPlanSumOrderByAggregateInput;
};
export type WmGrowthPlanScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmGrowthPlanScalarWhereWithAggregatesInput | Prisma.WmGrowthPlanScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmGrowthPlanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmGrowthPlanScalarWhereWithAggregatesInput | Prisma.WmGrowthPlanScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmGrowthPlan"> | string;
    wmClientProfileId?: Prisma.StringWithAggregatesFilter<"WmGrowthPlan"> | string;
    version?: Prisma.IntWithAggregatesFilter<"WmGrowthPlan"> | number;
    horizon?: Prisma.StringWithAggregatesFilter<"WmGrowthPlan"> | string;
    milestones?: Prisma.JsonWithAggregatesFilter<"WmGrowthPlan">;
    targetGlidePath?: Prisma.JsonWithAggregatesFilter<"WmGrowthPlan">;
    reviewSchedule?: Prisma.StringWithAggregatesFilter<"WmGrowthPlan"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"WmGrowthPlan"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WmGrowthPlan"> | Date | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"WmGrowthPlan"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmGrowthPlan"> | Date | string;
};
export type WmGrowthPlanCreateInput = {
    id?: string;
    version: number;
    horizon: string;
    milestones: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule: string;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    wmClientProfile: Prisma.WmClientProfileCreateNestedOneWithoutGrowthPlansInput;
};
export type WmGrowthPlanUncheckedCreateInput = {
    id?: string;
    wmClientProfileId: string;
    version: number;
    horizon: string;
    milestones: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule: string;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmGrowthPlanUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    horizon?: Prisma.StringFieldUpdateOperationsInput | string;
    milestones?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientProfile?: Prisma.WmClientProfileUpdateOneRequiredWithoutGrowthPlansNestedInput;
};
export type WmGrowthPlanUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    horizon?: Prisma.StringFieldUpdateOperationsInput | string;
    milestones?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmGrowthPlanCreateManyInput = {
    id?: string;
    wmClientProfileId: string;
    version: number;
    horizon: string;
    milestones: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule: string;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmGrowthPlanUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    horizon?: Prisma.StringFieldUpdateOperationsInput | string;
    milestones?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmGrowthPlanUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    horizon?: Prisma.StringFieldUpdateOperationsInput | string;
    milestones?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmGrowthPlanListRelationFilter = {
    every?: Prisma.WmGrowthPlanWhereInput;
    some?: Prisma.WmGrowthPlanWhereInput;
    none?: Prisma.WmGrowthPlanWhereInput;
};
export type WmGrowthPlanOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmGrowthPlanWmClientProfileIdVersionCompoundUniqueInput = {
    wmClientProfileId: string;
    version: number;
};
export type WmGrowthPlanCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    horizon?: Prisma.SortOrder;
    milestones?: Prisma.SortOrder;
    targetGlidePath?: Prisma.SortOrder;
    reviewSchedule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmGrowthPlanAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmGrowthPlanMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    horizon?: Prisma.SortOrder;
    reviewSchedule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmGrowthPlanMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    horizon?: Prisma.SortOrder;
    reviewSchedule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmGrowthPlanSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmGrowthPlanCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput[] | Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput | Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmGrowthPlanCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
};
export type WmGrowthPlanUncheckedCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput[] | Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput | Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmGrowthPlanCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
};
export type WmGrowthPlanUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput[] | Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput | Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmGrowthPlanUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmGrowthPlanUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmGrowthPlanCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    disconnect?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    delete?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    connect?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    update?: Prisma.WmGrowthPlanUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmGrowthPlanUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmGrowthPlanUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmGrowthPlanUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmGrowthPlanScalarWhereInput | Prisma.WmGrowthPlanScalarWhereInput[];
};
export type WmGrowthPlanUncheckedUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput[] | Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput | Prisma.WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmGrowthPlanUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmGrowthPlanUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmGrowthPlanCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    disconnect?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    delete?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    connect?: Prisma.WmGrowthPlanWhereUniqueInput | Prisma.WmGrowthPlanWhereUniqueInput[];
    update?: Prisma.WmGrowthPlanUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmGrowthPlanUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmGrowthPlanUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmGrowthPlanUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmGrowthPlanScalarWhereInput | Prisma.WmGrowthPlanScalarWhereInput[];
};
export type WmGrowthPlanCreateWithoutWmClientProfileInput = {
    id?: string;
    version: number;
    horizon: string;
    milestones: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule: string;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput = {
    id?: string;
    version: number;
    horizon: string;
    milestones: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule: string;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmGrowthPlanCreateOrConnectWithoutWmClientProfileInput = {
    where: Prisma.WmGrowthPlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmGrowthPlanCreateManyWmClientProfileInputEnvelope = {
    data: Prisma.WmGrowthPlanCreateManyWmClientProfileInput | Prisma.WmGrowthPlanCreateManyWmClientProfileInput[];
    skipDuplicates?: boolean;
};
export type WmGrowthPlanUpsertWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmGrowthPlanWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmGrowthPlanUpdateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedUpdateWithoutWmClientProfileInput>;
    create: Prisma.XOR<Prisma.WmGrowthPlanCreateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmGrowthPlanUpdateWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmGrowthPlanWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmGrowthPlanUpdateWithoutWmClientProfileInput, Prisma.WmGrowthPlanUncheckedUpdateWithoutWmClientProfileInput>;
};
export type WmGrowthPlanUpdateManyWithWhereWithoutWmClientProfileInput = {
    where: Prisma.WmGrowthPlanScalarWhereInput;
    data: Prisma.XOR<Prisma.WmGrowthPlanUpdateManyMutationInput, Prisma.WmGrowthPlanUncheckedUpdateManyWithoutWmClientProfileInput>;
};
export type WmGrowthPlanScalarWhereInput = {
    AND?: Prisma.WmGrowthPlanScalarWhereInput | Prisma.WmGrowthPlanScalarWhereInput[];
    OR?: Prisma.WmGrowthPlanScalarWhereInput[];
    NOT?: Prisma.WmGrowthPlanScalarWhereInput | Prisma.WmGrowthPlanScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmGrowthPlan"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    version?: Prisma.IntFilter<"WmGrowthPlan"> | number;
    horizon?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    milestones?: Prisma.JsonFilter<"WmGrowthPlan">;
    targetGlidePath?: Prisma.JsonFilter<"WmGrowthPlan">;
    reviewSchedule?: Prisma.StringFilter<"WmGrowthPlan"> | string;
    isActive?: Prisma.BoolFilter<"WmGrowthPlan"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmGrowthPlan"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmGrowthPlan"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmGrowthPlan"> | Date | string;
};
export type WmGrowthPlanCreateManyWmClientProfileInput = {
    id?: string;
    version: number;
    horizon: string;
    milestones: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule: string;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmGrowthPlanUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    horizon?: Prisma.StringFieldUpdateOperationsInput | string;
    milestones?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmGrowthPlanUncheckedUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    horizon?: Prisma.StringFieldUpdateOperationsInput | string;
    milestones?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmGrowthPlanUncheckedUpdateManyWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    horizon?: Prisma.StringFieldUpdateOperationsInput | string;
    milestones?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    targetGlidePath?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    reviewSchedule?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmGrowthPlanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    horizon?: boolean;
    milestones?: boolean;
    targetGlidePath?: boolean;
    reviewSchedule?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmGrowthPlan"]>;
export type WmGrowthPlanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    horizon?: boolean;
    milestones?: boolean;
    targetGlidePath?: boolean;
    reviewSchedule?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmGrowthPlan"]>;
export type WmGrowthPlanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    horizon?: boolean;
    milestones?: boolean;
    targetGlidePath?: boolean;
    reviewSchedule?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmGrowthPlan"]>;
export type WmGrowthPlanSelectScalar = {
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    horizon?: boolean;
    milestones?: boolean;
    targetGlidePath?: boolean;
    reviewSchedule?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type WmGrowthPlanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientProfileId" | "version" | "horizon" | "milestones" | "targetGlidePath" | "reviewSchedule" | "isActive" | "clientAcknowledgedAt" | "createdByUserId" | "createdAt", ExtArgs["result"]["wmGrowthPlan"]>;
export type WmGrowthPlanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmGrowthPlanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmGrowthPlanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type $WmGrowthPlanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmGrowthPlan";
    objects: {
        wmClientProfile: Prisma.$WmClientProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientProfileId: string;
        version: number;
        horizon: string;
        milestones: runtime.JsonValue;
        targetGlidePath: runtime.JsonValue;
        reviewSchedule: string;
        isActive: boolean;
        clientAcknowledgedAt: Date | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["wmGrowthPlan"]>;
    composites: {};
};
export type WmGrowthPlanGetPayload<S extends boolean | null | undefined | WmGrowthPlanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload, S>;
export type WmGrowthPlanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmGrowthPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmGrowthPlanCountAggregateInputType | true;
};
export interface WmGrowthPlanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmGrowthPlan'];
        meta: {
            name: 'WmGrowthPlan';
        };
    };
    findUnique<T extends WmGrowthPlanFindUniqueArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmGrowthPlanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmGrowthPlanFindFirstArgs>(args?: Prisma.SelectSubset<T, WmGrowthPlanFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmGrowthPlanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmGrowthPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmGrowthPlanFindManyArgs>(args?: Prisma.SelectSubset<T, WmGrowthPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmGrowthPlanCreateArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanCreateArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmGrowthPlanCreateManyArgs>(args?: Prisma.SelectSubset<T, WmGrowthPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmGrowthPlanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmGrowthPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmGrowthPlanDeleteArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanDeleteArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmGrowthPlanUpdateArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanUpdateArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmGrowthPlanDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmGrowthPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmGrowthPlanUpdateManyArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmGrowthPlanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmGrowthPlanUpsertArgs>(args: Prisma.SelectSubset<T, WmGrowthPlanUpsertArgs<ExtArgs>>): Prisma.Prisma__WmGrowthPlanClient<runtime.Types.Result.GetResult<Prisma.$WmGrowthPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmGrowthPlanCountArgs>(args?: Prisma.Subset<T, WmGrowthPlanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmGrowthPlanCountAggregateOutputType> : number>;
    aggregate<T extends WmGrowthPlanAggregateArgs>(args: Prisma.Subset<T, WmGrowthPlanAggregateArgs>): Prisma.PrismaPromise<GetWmGrowthPlanAggregateType<T>>;
    groupBy<T extends WmGrowthPlanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmGrowthPlanGroupByArgs['orderBy'];
    } : {
        orderBy?: WmGrowthPlanGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmGrowthPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmGrowthPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmGrowthPlanFieldRefs;
}
export interface Prisma__WmGrowthPlanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientProfile<T extends Prisma.WmClientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientProfileClient<runtime.Types.Result.GetResult<Prisma.$WmClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmGrowthPlanFieldRefs {
    readonly id: Prisma.FieldRef<"WmGrowthPlan", 'String'>;
    readonly wmClientProfileId: Prisma.FieldRef<"WmGrowthPlan", 'String'>;
    readonly version: Prisma.FieldRef<"WmGrowthPlan", 'Int'>;
    readonly horizon: Prisma.FieldRef<"WmGrowthPlan", 'String'>;
    readonly milestones: Prisma.FieldRef<"WmGrowthPlan", 'Json'>;
    readonly targetGlidePath: Prisma.FieldRef<"WmGrowthPlan", 'Json'>;
    readonly reviewSchedule: Prisma.FieldRef<"WmGrowthPlan", 'String'>;
    readonly isActive: Prisma.FieldRef<"WmGrowthPlan", 'Boolean'>;
    readonly clientAcknowledgedAt: Prisma.FieldRef<"WmGrowthPlan", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"WmGrowthPlan", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WmGrowthPlan", 'DateTime'>;
}
export type WmGrowthPlanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    where: Prisma.WmGrowthPlanWhereUniqueInput;
};
export type WmGrowthPlanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    where: Prisma.WmGrowthPlanWhereUniqueInput;
};
export type WmGrowthPlanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    where?: Prisma.WmGrowthPlanWhereInput;
    orderBy?: Prisma.WmGrowthPlanOrderByWithRelationInput | Prisma.WmGrowthPlanOrderByWithRelationInput[];
    cursor?: Prisma.WmGrowthPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmGrowthPlanScalarFieldEnum | Prisma.WmGrowthPlanScalarFieldEnum[];
};
export type WmGrowthPlanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    where?: Prisma.WmGrowthPlanWhereInput;
    orderBy?: Prisma.WmGrowthPlanOrderByWithRelationInput | Prisma.WmGrowthPlanOrderByWithRelationInput[];
    cursor?: Prisma.WmGrowthPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmGrowthPlanScalarFieldEnum | Prisma.WmGrowthPlanScalarFieldEnum[];
};
export type WmGrowthPlanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    where?: Prisma.WmGrowthPlanWhereInput;
    orderBy?: Prisma.WmGrowthPlanOrderByWithRelationInput | Prisma.WmGrowthPlanOrderByWithRelationInput[];
    cursor?: Prisma.WmGrowthPlanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmGrowthPlanScalarFieldEnum | Prisma.WmGrowthPlanScalarFieldEnum[];
};
export type WmGrowthPlanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmGrowthPlanCreateInput, Prisma.WmGrowthPlanUncheckedCreateInput>;
};
export type WmGrowthPlanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmGrowthPlanCreateManyInput | Prisma.WmGrowthPlanCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmGrowthPlanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    data: Prisma.WmGrowthPlanCreateManyInput | Prisma.WmGrowthPlanCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmGrowthPlanIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmGrowthPlanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmGrowthPlanUpdateInput, Prisma.WmGrowthPlanUncheckedUpdateInput>;
    where: Prisma.WmGrowthPlanWhereUniqueInput;
};
export type WmGrowthPlanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmGrowthPlanUpdateManyMutationInput, Prisma.WmGrowthPlanUncheckedUpdateManyInput>;
    where?: Prisma.WmGrowthPlanWhereInput;
    limit?: number;
};
export type WmGrowthPlanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmGrowthPlanUpdateManyMutationInput, Prisma.WmGrowthPlanUncheckedUpdateManyInput>;
    where?: Prisma.WmGrowthPlanWhereInput;
    limit?: number;
    include?: Prisma.WmGrowthPlanIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmGrowthPlanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    where: Prisma.WmGrowthPlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmGrowthPlanCreateInput, Prisma.WmGrowthPlanUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmGrowthPlanUpdateInput, Prisma.WmGrowthPlanUncheckedUpdateInput>;
};
export type WmGrowthPlanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
    where: Prisma.WmGrowthPlanWhereUniqueInput;
};
export type WmGrowthPlanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmGrowthPlanWhereInput;
    limit?: number;
};
export type WmGrowthPlanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmGrowthPlanSelect<ExtArgs> | null;
    omit?: Prisma.WmGrowthPlanOmit<ExtArgs> | null;
    include?: Prisma.WmGrowthPlanInclude<ExtArgs> | null;
};
