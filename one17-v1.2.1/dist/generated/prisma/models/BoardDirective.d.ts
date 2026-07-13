import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoardDirectiveModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardDirectivePayload>;
export type AggregateBoardDirective = {
    _count: BoardDirectiveCountAggregateOutputType | null;
    _min: BoardDirectiveMinAggregateOutputType | null;
    _max: BoardDirectiveMaxAggregateOutputType | null;
};
export type BoardDirectiveMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    committeeTag: string | null;
    resolutionRef: string | null;
    dueAt: Date | null;
    issuedByUserId: string | null;
    taskId: string | null;
    status: $Enums.BoardDirectiveStatus | null;
    acknowledgedAt: Date | null;
    acknowledgedByUserId: string | null;
    reportedBackAt: Date | null;
    reportedBackByUserId: string | null;
    createdAt: Date | null;
};
export type BoardDirectiveMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    committeeTag: string | null;
    resolutionRef: string | null;
    dueAt: Date | null;
    issuedByUserId: string | null;
    taskId: string | null;
    status: $Enums.BoardDirectiveStatus | null;
    acknowledgedAt: Date | null;
    acknowledgedByUserId: string | null;
    reportedBackAt: Date | null;
    reportedBackByUserId: string | null;
    createdAt: Date | null;
};
export type BoardDirectiveCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    committeeTag: number;
    resolutionRef: number;
    dueAt: number;
    issuedByUserId: number;
    taskId: number;
    status: number;
    acknowledgedAt: number;
    acknowledgedByUserId: number;
    reportedBackAt: number;
    reportedBackByUserId: number;
    createdAt: number;
    _all: number;
};
export type BoardDirectiveMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    committeeTag?: true;
    resolutionRef?: true;
    dueAt?: true;
    issuedByUserId?: true;
    taskId?: true;
    status?: true;
    acknowledgedAt?: true;
    acknowledgedByUserId?: true;
    reportedBackAt?: true;
    reportedBackByUserId?: true;
    createdAt?: true;
};
export type BoardDirectiveMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    committeeTag?: true;
    resolutionRef?: true;
    dueAt?: true;
    issuedByUserId?: true;
    taskId?: true;
    status?: true;
    acknowledgedAt?: true;
    acknowledgedByUserId?: true;
    reportedBackAt?: true;
    reportedBackByUserId?: true;
    createdAt?: true;
};
export type BoardDirectiveCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    committeeTag?: true;
    resolutionRef?: true;
    dueAt?: true;
    issuedByUserId?: true;
    taskId?: true;
    status?: true;
    acknowledgedAt?: true;
    acknowledgedByUserId?: true;
    reportedBackAt?: true;
    reportedBackByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type BoardDirectiveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardDirectiveWhereInput;
    orderBy?: Prisma.BoardDirectiveOrderByWithRelationInput | Prisma.BoardDirectiveOrderByWithRelationInput[];
    cursor?: Prisma.BoardDirectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardDirectiveCountAggregateInputType;
    _min?: BoardDirectiveMinAggregateInputType;
    _max?: BoardDirectiveMaxAggregateInputType;
};
export type GetBoardDirectiveAggregateType<T extends BoardDirectiveAggregateArgs> = {
    [P in keyof T & keyof AggregateBoardDirective]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoardDirective[P]> : Prisma.GetScalarType<T[P], AggregateBoardDirective[P]>;
};
export type BoardDirectiveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardDirectiveWhereInput;
    orderBy?: Prisma.BoardDirectiveOrderByWithAggregationInput | Prisma.BoardDirectiveOrderByWithAggregationInput[];
    by: Prisma.BoardDirectiveScalarFieldEnum[] | Prisma.BoardDirectiveScalarFieldEnum;
    having?: Prisma.BoardDirectiveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardDirectiveCountAggregateInputType | true;
    _min?: BoardDirectiveMinAggregateInputType;
    _max?: BoardDirectiveMaxAggregateInputType;
};
export type BoardDirectiveGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    committeeTag: string | null;
    resolutionRef: string | null;
    dueAt: Date;
    issuedByUserId: string;
    taskId: string | null;
    status: $Enums.BoardDirectiveStatus;
    acknowledgedAt: Date | null;
    acknowledgedByUserId: string | null;
    reportedBackAt: Date | null;
    reportedBackByUserId: string | null;
    createdAt: Date;
    _count: BoardDirectiveCountAggregateOutputType | null;
    _min: BoardDirectiveMinAggregateOutputType | null;
    _max: BoardDirectiveMaxAggregateOutputType | null;
};
export type GetBoardDirectiveGroupByPayload<T extends BoardDirectiveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardDirectiveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardDirectiveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardDirectiveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardDirectiveGroupByOutputType[P]>;
}>>;
export type BoardDirectiveWhereInput = {
    AND?: Prisma.BoardDirectiveWhereInput | Prisma.BoardDirectiveWhereInput[];
    OR?: Prisma.BoardDirectiveWhereInput[];
    NOT?: Prisma.BoardDirectiveWhereInput | Prisma.BoardDirectiveWhereInput[];
    id?: Prisma.UuidFilter<"BoardDirective"> | string;
    title?: Prisma.StringFilter<"BoardDirective"> | string;
    description?: Prisma.StringFilter<"BoardDirective"> | string;
    committeeTag?: Prisma.StringNullableFilter<"BoardDirective"> | string | null;
    resolutionRef?: Prisma.StringNullableFilter<"BoardDirective"> | string | null;
    dueAt?: Prisma.DateTimeFilter<"BoardDirective"> | Date | string;
    issuedByUserId?: Prisma.UuidFilter<"BoardDirective"> | string;
    taskId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFilter<"BoardDirective"> | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"BoardDirective"> | Date | string | null;
    acknowledgedByUserId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    reportedBackAt?: Prisma.DateTimeNullableFilter<"BoardDirective"> | Date | string | null;
    reportedBackByUserId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BoardDirective"> | Date | string;
    issuedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    acknowledgedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    reportedBackBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    rootTask?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
    tasks?: Prisma.TaskListRelationFilter;
};
export type BoardDirectiveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    issuedByUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportedBackAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportedBackByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    issuedBy?: Prisma.AppUserOrderByWithRelationInput;
    acknowledgedBy?: Prisma.AppUserOrderByWithRelationInput;
    reportedBackBy?: Prisma.AppUserOrderByWithRelationInput;
    rootTask?: Prisma.TaskOrderByWithRelationInput;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
};
export type BoardDirectiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    taskId?: string;
    AND?: Prisma.BoardDirectiveWhereInput | Prisma.BoardDirectiveWhereInput[];
    OR?: Prisma.BoardDirectiveWhereInput[];
    NOT?: Prisma.BoardDirectiveWhereInput | Prisma.BoardDirectiveWhereInput[];
    title?: Prisma.StringFilter<"BoardDirective"> | string;
    description?: Prisma.StringFilter<"BoardDirective"> | string;
    committeeTag?: Prisma.StringNullableFilter<"BoardDirective"> | string | null;
    resolutionRef?: Prisma.StringNullableFilter<"BoardDirective"> | string | null;
    dueAt?: Prisma.DateTimeFilter<"BoardDirective"> | Date | string;
    issuedByUserId?: Prisma.UuidFilter<"BoardDirective"> | string;
    status?: Prisma.EnumBoardDirectiveStatusFilter<"BoardDirective"> | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"BoardDirective"> | Date | string | null;
    acknowledgedByUserId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    reportedBackAt?: Prisma.DateTimeNullableFilter<"BoardDirective"> | Date | string | null;
    reportedBackByUserId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BoardDirective"> | Date | string;
    issuedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    acknowledgedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    reportedBackBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    rootTask?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
    tasks?: Prisma.TaskListRelationFilter;
}, "id" | "taskId">;
export type BoardDirectiveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    issuedByUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportedBackAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportedBackByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BoardDirectiveCountOrderByAggregateInput;
    _max?: Prisma.BoardDirectiveMaxOrderByAggregateInput;
    _min?: Prisma.BoardDirectiveMinOrderByAggregateInput;
};
export type BoardDirectiveScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardDirectiveScalarWhereWithAggregatesInput | Prisma.BoardDirectiveScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardDirectiveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardDirectiveScalarWhereWithAggregatesInput | Prisma.BoardDirectiveScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BoardDirective"> | string;
    title?: Prisma.StringWithAggregatesFilter<"BoardDirective"> | string;
    description?: Prisma.StringWithAggregatesFilter<"BoardDirective"> | string;
    committeeTag?: Prisma.StringNullableWithAggregatesFilter<"BoardDirective"> | string | null;
    resolutionRef?: Prisma.StringNullableWithAggregatesFilter<"BoardDirective"> | string | null;
    dueAt?: Prisma.DateTimeWithAggregatesFilter<"BoardDirective"> | Date | string;
    issuedByUserId?: Prisma.UuidWithAggregatesFilter<"BoardDirective"> | string;
    taskId?: Prisma.UuidNullableWithAggregatesFilter<"BoardDirective"> | string | null;
    status?: Prisma.EnumBoardDirectiveStatusWithAggregatesFilter<"BoardDirective"> | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BoardDirective"> | Date | string | null;
    acknowledgedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BoardDirective"> | string | null;
    reportedBackAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BoardDirective"> | Date | string | null;
    reportedBackByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BoardDirective"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BoardDirective"> | Date | string;
};
export type BoardDirectiveCreateInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
    issuedBy: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesIssuedInput;
    acknowledgedBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesAcknowledgedInput;
    reportedBackBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesReportedBackInput;
    rootTask?: Prisma.TaskCreateNestedOneWithoutDirectiveAsRootInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardDirectivesIssuedNestedInput;
    acknowledgedBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesAcknowledgedNestedInput;
    reportedBackBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesReportedBackNestedInput;
    rootTask?: Prisma.TaskUpdateOneWithoutDirectiveAsRootNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
};
export type BoardDirectiveUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardDirectiveUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardDirectiveListRelationFilter = {
    every?: Prisma.BoardDirectiveWhereInput;
    some?: Prisma.BoardDirectiveWhereInput;
    none?: Prisma.BoardDirectiveWhereInput;
};
export type BoardDirectiveOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BoardDirectiveNullableScalarRelationFilter = {
    is?: Prisma.BoardDirectiveWhereInput | null;
    isNot?: Prisma.BoardDirectiveWhereInput | null;
};
export type BoardDirectiveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    issuedByUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    acknowledgedByUserId?: Prisma.SortOrder;
    reportedBackAt?: Prisma.SortOrder;
    reportedBackByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardDirectiveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    issuedByUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    acknowledgedByUserId?: Prisma.SortOrder;
    reportedBackAt?: Prisma.SortOrder;
    reportedBackByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardDirectiveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    resolutionRef?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    issuedByUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    acknowledgedByUserId?: Prisma.SortOrder;
    reportedBackAt?: Prisma.SortOrder;
    reportedBackByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardDirectiveCreateNestedManyWithoutIssuedByInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput> | Prisma.BoardDirectiveCreateWithoutIssuedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyIssuedByInputEnvelope;
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
};
export type BoardDirectiveCreateNestedManyWithoutAcknowledgedByInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput> | Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyAcknowledgedByInputEnvelope;
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
};
export type BoardDirectiveCreateNestedManyWithoutReportedBackByInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput> | Prisma.BoardDirectiveCreateWithoutReportedBackByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput | Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyReportedBackByInputEnvelope;
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
};
export type BoardDirectiveUncheckedCreateNestedManyWithoutIssuedByInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput> | Prisma.BoardDirectiveCreateWithoutIssuedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyIssuedByInputEnvelope;
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
};
export type BoardDirectiveUncheckedCreateNestedManyWithoutAcknowledgedByInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput> | Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyAcknowledgedByInputEnvelope;
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
};
export type BoardDirectiveUncheckedCreateNestedManyWithoutReportedBackByInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput> | Prisma.BoardDirectiveCreateWithoutReportedBackByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput | Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyReportedBackByInputEnvelope;
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
};
export type BoardDirectiveUpdateManyWithoutIssuedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput> | Prisma.BoardDirectiveCreateWithoutIssuedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput[];
    upsert?: Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutIssuedByInput | Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutIssuedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyIssuedByInputEnvelope;
    set?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    disconnect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    delete?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    update?: Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutIssuedByInput | Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutIssuedByInput[];
    updateMany?: Prisma.BoardDirectiveUpdateManyWithWhereWithoutIssuedByInput | Prisma.BoardDirectiveUpdateManyWithWhereWithoutIssuedByInput[];
    deleteMany?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
};
export type BoardDirectiveUpdateManyWithoutAcknowledgedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput> | Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput[];
    upsert?: Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutAcknowledgedByInput | Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutAcknowledgedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyAcknowledgedByInputEnvelope;
    set?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    disconnect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    delete?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    update?: Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutAcknowledgedByInput | Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutAcknowledgedByInput[];
    updateMany?: Prisma.BoardDirectiveUpdateManyWithWhereWithoutAcknowledgedByInput | Prisma.BoardDirectiveUpdateManyWithWhereWithoutAcknowledgedByInput[];
    deleteMany?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
};
export type BoardDirectiveUpdateManyWithoutReportedBackByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput> | Prisma.BoardDirectiveCreateWithoutReportedBackByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput | Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput[];
    upsert?: Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutReportedBackByInput | Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutReportedBackByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyReportedBackByInputEnvelope;
    set?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    disconnect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    delete?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    update?: Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutReportedBackByInput | Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutReportedBackByInput[];
    updateMany?: Prisma.BoardDirectiveUpdateManyWithWhereWithoutReportedBackByInput | Prisma.BoardDirectiveUpdateManyWithWhereWithoutReportedBackByInput[];
    deleteMany?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
};
export type BoardDirectiveUncheckedUpdateManyWithoutIssuedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput> | Prisma.BoardDirectiveCreateWithoutIssuedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutIssuedByInput[];
    upsert?: Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutIssuedByInput | Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutIssuedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyIssuedByInputEnvelope;
    set?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    disconnect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    delete?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    update?: Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutIssuedByInput | Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutIssuedByInput[];
    updateMany?: Prisma.BoardDirectiveUpdateManyWithWhereWithoutIssuedByInput | Prisma.BoardDirectiveUpdateManyWithWhereWithoutIssuedByInput[];
    deleteMany?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
};
export type BoardDirectiveUncheckedUpdateManyWithoutAcknowledgedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput> | Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput | Prisma.BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput[];
    upsert?: Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutAcknowledgedByInput | Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutAcknowledgedByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyAcknowledgedByInputEnvelope;
    set?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    disconnect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    delete?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    update?: Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutAcknowledgedByInput | Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutAcknowledgedByInput[];
    updateMany?: Prisma.BoardDirectiveUpdateManyWithWhereWithoutAcknowledgedByInput | Prisma.BoardDirectiveUpdateManyWithWhereWithoutAcknowledgedByInput[];
    deleteMany?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
};
export type BoardDirectiveUncheckedUpdateManyWithoutReportedBackByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput> | Prisma.BoardDirectiveCreateWithoutReportedBackByInput[] | Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput[];
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput | Prisma.BoardDirectiveCreateOrConnectWithoutReportedBackByInput[];
    upsert?: Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutReportedBackByInput | Prisma.BoardDirectiveUpsertWithWhereUniqueWithoutReportedBackByInput[];
    createMany?: Prisma.BoardDirectiveCreateManyReportedBackByInputEnvelope;
    set?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    disconnect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    delete?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    connect?: Prisma.BoardDirectiveWhereUniqueInput | Prisma.BoardDirectiveWhereUniqueInput[];
    update?: Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutReportedBackByInput | Prisma.BoardDirectiveUpdateWithWhereUniqueWithoutReportedBackByInput[];
    updateMany?: Prisma.BoardDirectiveUpdateManyWithWhereWithoutReportedBackByInput | Prisma.BoardDirectiveUpdateManyWithWhereWithoutReportedBackByInput[];
    deleteMany?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
};
export type BoardDirectiveCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutTasksInput, Prisma.BoardDirectiveUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutTasksInput;
    connect?: Prisma.BoardDirectiveWhereUniqueInput;
};
export type BoardDirectiveCreateNestedOneWithoutRootTaskInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedCreateWithoutRootTaskInput>;
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutRootTaskInput;
    connect?: Prisma.BoardDirectiveWhereUniqueInput;
};
export type BoardDirectiveUncheckedCreateNestedOneWithoutRootTaskInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedCreateWithoutRootTaskInput>;
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutRootTaskInput;
    connect?: Prisma.BoardDirectiveWhereUniqueInput;
};
export type BoardDirectiveUpdateOneWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutTasksInput, Prisma.BoardDirectiveUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.BoardDirectiveUpsertWithoutTasksInput;
    disconnect?: Prisma.BoardDirectiveWhereInput | boolean;
    delete?: Prisma.BoardDirectiveWhereInput | boolean;
    connect?: Prisma.BoardDirectiveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardDirectiveUpdateToOneWithWhereWithoutTasksInput, Prisma.BoardDirectiveUpdateWithoutTasksInput>, Prisma.BoardDirectiveUncheckedUpdateWithoutTasksInput>;
};
export type BoardDirectiveUpdateOneWithoutRootTaskNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedCreateWithoutRootTaskInput>;
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutRootTaskInput;
    upsert?: Prisma.BoardDirectiveUpsertWithoutRootTaskInput;
    disconnect?: Prisma.BoardDirectiveWhereInput | boolean;
    delete?: Prisma.BoardDirectiveWhereInput | boolean;
    connect?: Prisma.BoardDirectiveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardDirectiveUpdateToOneWithWhereWithoutRootTaskInput, Prisma.BoardDirectiveUpdateWithoutRootTaskInput>, Prisma.BoardDirectiveUncheckedUpdateWithoutRootTaskInput>;
};
export type BoardDirectiveUncheckedUpdateOneWithoutRootTaskNestedInput = {
    create?: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedCreateWithoutRootTaskInput>;
    connectOrCreate?: Prisma.BoardDirectiveCreateOrConnectWithoutRootTaskInput;
    upsert?: Prisma.BoardDirectiveUpsertWithoutRootTaskInput;
    disconnect?: Prisma.BoardDirectiveWhereInput | boolean;
    delete?: Prisma.BoardDirectiveWhereInput | boolean;
    connect?: Prisma.BoardDirectiveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardDirectiveUpdateToOneWithWhereWithoutRootTaskInput, Prisma.BoardDirectiveUpdateWithoutRootTaskInput>, Prisma.BoardDirectiveUncheckedUpdateWithoutRootTaskInput>;
};
export type EnumBoardDirectiveStatusFieldUpdateOperationsInput = {
    set?: $Enums.BoardDirectiveStatus;
};
export type BoardDirectiveCreateWithoutIssuedByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
    acknowledgedBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesAcknowledgedInput;
    reportedBackBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesReportedBackInput;
    rootTask?: Prisma.TaskCreateNestedOneWithoutDirectiveAsRootInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveUncheckedCreateWithoutIssuedByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveCreateOrConnectWithoutIssuedByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput>;
};
export type BoardDirectiveCreateManyIssuedByInputEnvelope = {
    data: Prisma.BoardDirectiveCreateManyIssuedByInput | Prisma.BoardDirectiveCreateManyIssuedByInput[];
    skipDuplicates?: boolean;
};
export type BoardDirectiveCreateWithoutAcknowledgedByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
    issuedBy: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesIssuedInput;
    reportedBackBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesReportedBackInput;
    rootTask?: Prisma.TaskCreateNestedOneWithoutDirectiveAsRootInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveCreateOrConnectWithoutAcknowledgedByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput>;
};
export type BoardDirectiveCreateManyAcknowledgedByInputEnvelope = {
    data: Prisma.BoardDirectiveCreateManyAcknowledgedByInput | Prisma.BoardDirectiveCreateManyAcknowledgedByInput[];
    skipDuplicates?: boolean;
};
export type BoardDirectiveCreateWithoutReportedBackByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
    issuedBy: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesIssuedInput;
    acknowledgedBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesAcknowledgedInput;
    rootTask?: Prisma.TaskCreateNestedOneWithoutDirectiveAsRootInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveUncheckedCreateWithoutReportedBackByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveCreateOrConnectWithoutReportedBackByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput>;
};
export type BoardDirectiveCreateManyReportedBackByInputEnvelope = {
    data: Prisma.BoardDirectiveCreateManyReportedBackByInput | Prisma.BoardDirectiveCreateManyReportedBackByInput[];
    skipDuplicates?: boolean;
};
export type BoardDirectiveUpsertWithWhereUniqueWithoutIssuedByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedUpdateWithoutIssuedByInput>;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutIssuedByInput>;
};
export type BoardDirectiveUpdateWithWhereUniqueWithoutIssuedByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutIssuedByInput, Prisma.BoardDirectiveUncheckedUpdateWithoutIssuedByInput>;
};
export type BoardDirectiveUpdateManyWithWhereWithoutIssuedByInput = {
    where: Prisma.BoardDirectiveScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateManyMutationInput, Prisma.BoardDirectiveUncheckedUpdateManyWithoutIssuedByInput>;
};
export type BoardDirectiveScalarWhereInput = {
    AND?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
    OR?: Prisma.BoardDirectiveScalarWhereInput[];
    NOT?: Prisma.BoardDirectiveScalarWhereInput | Prisma.BoardDirectiveScalarWhereInput[];
    id?: Prisma.UuidFilter<"BoardDirective"> | string;
    title?: Prisma.StringFilter<"BoardDirective"> | string;
    description?: Prisma.StringFilter<"BoardDirective"> | string;
    committeeTag?: Prisma.StringNullableFilter<"BoardDirective"> | string | null;
    resolutionRef?: Prisma.StringNullableFilter<"BoardDirective"> | string | null;
    dueAt?: Prisma.DateTimeFilter<"BoardDirective"> | Date | string;
    issuedByUserId?: Prisma.UuidFilter<"BoardDirective"> | string;
    taskId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFilter<"BoardDirective"> | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"BoardDirective"> | Date | string | null;
    acknowledgedByUserId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    reportedBackAt?: Prisma.DateTimeNullableFilter<"BoardDirective"> | Date | string | null;
    reportedBackByUserId?: Prisma.UuidNullableFilter<"BoardDirective"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BoardDirective"> | Date | string;
};
export type BoardDirectiveUpsertWithWhereUniqueWithoutAcknowledgedByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedUpdateWithoutAcknowledgedByInput>;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedCreateWithoutAcknowledgedByInput>;
};
export type BoardDirectiveUpdateWithWhereUniqueWithoutAcknowledgedByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutAcknowledgedByInput, Prisma.BoardDirectiveUncheckedUpdateWithoutAcknowledgedByInput>;
};
export type BoardDirectiveUpdateManyWithWhereWithoutAcknowledgedByInput = {
    where: Prisma.BoardDirectiveScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateManyMutationInput, Prisma.BoardDirectiveUncheckedUpdateManyWithoutAcknowledgedByInput>;
};
export type BoardDirectiveUpsertWithWhereUniqueWithoutReportedBackByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedUpdateWithoutReportedBackByInput>;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedCreateWithoutReportedBackByInput>;
};
export type BoardDirectiveUpdateWithWhereUniqueWithoutReportedBackByInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutReportedBackByInput, Prisma.BoardDirectiveUncheckedUpdateWithoutReportedBackByInput>;
};
export type BoardDirectiveUpdateManyWithWhereWithoutReportedBackByInput = {
    where: Prisma.BoardDirectiveScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateManyMutationInput, Prisma.BoardDirectiveUncheckedUpdateManyWithoutReportedBackByInput>;
};
export type BoardDirectiveCreateWithoutTasksInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
    issuedBy: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesIssuedInput;
    acknowledgedBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesAcknowledgedInput;
    reportedBackBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesReportedBackInput;
    rootTask?: Prisma.TaskCreateNestedOneWithoutDirectiveAsRootInput;
};
export type BoardDirectiveUncheckedCreateWithoutTasksInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
};
export type BoardDirectiveCreateOrConnectWithoutTasksInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutTasksInput, Prisma.BoardDirectiveUncheckedCreateWithoutTasksInput>;
};
export type BoardDirectiveCreateWithoutRootTaskInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
    issuedBy: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesIssuedInput;
    acknowledgedBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesAcknowledgedInput;
    reportedBackBy?: Prisma.AppUserCreateNestedOneWithoutBoardDirectivesReportedBackInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveUncheckedCreateWithoutRootTaskInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutDirectiveInput;
};
export type BoardDirectiveCreateOrConnectWithoutRootTaskInput = {
    where: Prisma.BoardDirectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedCreateWithoutRootTaskInput>;
};
export type BoardDirectiveUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutTasksInput, Prisma.BoardDirectiveUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutTasksInput, Prisma.BoardDirectiveUncheckedCreateWithoutTasksInput>;
    where?: Prisma.BoardDirectiveWhereInput;
};
export type BoardDirectiveUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.BoardDirectiveWhereInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutTasksInput, Prisma.BoardDirectiveUncheckedUpdateWithoutTasksInput>;
};
export type BoardDirectiveUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardDirectivesIssuedNestedInput;
    acknowledgedBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesAcknowledgedNestedInput;
    reportedBackBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesReportedBackNestedInput;
    rootTask?: Prisma.TaskUpdateOneWithoutDirectiveAsRootNestedInput;
};
export type BoardDirectiveUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardDirectiveUpsertWithoutRootTaskInput = {
    update: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedUpdateWithoutRootTaskInput>;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedCreateWithoutRootTaskInput>;
    where?: Prisma.BoardDirectiveWhereInput;
};
export type BoardDirectiveUpdateToOneWithWhereWithoutRootTaskInput = {
    where?: Prisma.BoardDirectiveWhereInput;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateWithoutRootTaskInput, Prisma.BoardDirectiveUncheckedUpdateWithoutRootTaskInput>;
};
export type BoardDirectiveUpdateWithoutRootTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardDirectivesIssuedNestedInput;
    acknowledgedBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesAcknowledgedNestedInput;
    reportedBackBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesReportedBackNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateWithoutRootTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveCreateManyIssuedByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
};
export type BoardDirectiveCreateManyAcknowledgedByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    reportedBackAt?: Date | string | null;
    reportedBackByUserId?: string | null;
    createdAt?: Date | string;
};
export type BoardDirectiveCreateManyReportedBackByInput = {
    id?: string;
    title: string;
    description: string;
    committeeTag?: string | null;
    resolutionRef?: string | null;
    dueAt: Date | string;
    issuedByUserId: string;
    taskId?: string | null;
    status?: $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Date | string | null;
    acknowledgedByUserId?: string | null;
    reportedBackAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BoardDirectiveUpdateWithoutIssuedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesAcknowledgedNestedInput;
    reportedBackBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesReportedBackNestedInput;
    rootTask?: Prisma.TaskUpdateOneWithoutDirectiveAsRootNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateWithoutIssuedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateManyWithoutIssuedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardDirectiveUpdateWithoutAcknowledgedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardDirectivesIssuedNestedInput;
    reportedBackBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesReportedBackNestedInput;
    rootTask?: Prisma.TaskUpdateOneWithoutDirectiveAsRootNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateWithoutAcknowledgedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateManyWithoutAcknowledgedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardDirectiveUpdateWithoutReportedBackByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardDirectivesIssuedNestedInput;
    acknowledgedBy?: Prisma.AppUserUpdateOneWithoutBoardDirectivesAcknowledgedNestedInput;
    rootTask?: Prisma.TaskUpdateOneWithoutDirectiveAsRootNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateWithoutReportedBackByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutDirectiveNestedInput;
};
export type BoardDirectiveUncheckedUpdateManyWithoutReportedBackByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issuedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumBoardDirectiveStatusFieldUpdateOperationsInput | $Enums.BoardDirectiveStatus;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedBackAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardDirectiveCountOutputType = {
    tasks: number;
};
export type BoardDirectiveCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | BoardDirectiveCountOutputTypeCountTasksArgs;
};
export type BoardDirectiveCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveCountOutputTypeSelect<ExtArgs> | null;
};
export type BoardDirectiveCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type BoardDirectiveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    resolutionRef?: boolean;
    dueAt?: boolean;
    issuedByUserId?: boolean;
    taskId?: boolean;
    status?: boolean;
    acknowledgedAt?: boolean;
    acknowledgedByUserId?: boolean;
    reportedBackAt?: boolean;
    reportedBackByUserId?: boolean;
    createdAt?: boolean;
    issuedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgedBy?: boolean | Prisma.BoardDirective$acknowledgedByArgs<ExtArgs>;
    reportedBackBy?: boolean | Prisma.BoardDirective$reportedBackByArgs<ExtArgs>;
    rootTask?: boolean | Prisma.BoardDirective$rootTaskArgs<ExtArgs>;
    tasks?: boolean | Prisma.BoardDirective$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardDirectiveCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardDirective"]>;
export type BoardDirectiveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    resolutionRef?: boolean;
    dueAt?: boolean;
    issuedByUserId?: boolean;
    taskId?: boolean;
    status?: boolean;
    acknowledgedAt?: boolean;
    acknowledgedByUserId?: boolean;
    reportedBackAt?: boolean;
    reportedBackByUserId?: boolean;
    createdAt?: boolean;
    issuedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgedBy?: boolean | Prisma.BoardDirective$acknowledgedByArgs<ExtArgs>;
    reportedBackBy?: boolean | Prisma.BoardDirective$reportedBackByArgs<ExtArgs>;
    rootTask?: boolean | Prisma.BoardDirective$rootTaskArgs<ExtArgs>;
}, ExtArgs["result"]["boardDirective"]>;
export type BoardDirectiveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    resolutionRef?: boolean;
    dueAt?: boolean;
    issuedByUserId?: boolean;
    taskId?: boolean;
    status?: boolean;
    acknowledgedAt?: boolean;
    acknowledgedByUserId?: boolean;
    reportedBackAt?: boolean;
    reportedBackByUserId?: boolean;
    createdAt?: boolean;
    issuedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgedBy?: boolean | Prisma.BoardDirective$acknowledgedByArgs<ExtArgs>;
    reportedBackBy?: boolean | Prisma.BoardDirective$reportedBackByArgs<ExtArgs>;
    rootTask?: boolean | Prisma.BoardDirective$rootTaskArgs<ExtArgs>;
}, ExtArgs["result"]["boardDirective"]>;
export type BoardDirectiveSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    committeeTag?: boolean;
    resolutionRef?: boolean;
    dueAt?: boolean;
    issuedByUserId?: boolean;
    taskId?: boolean;
    status?: boolean;
    acknowledgedAt?: boolean;
    acknowledgedByUserId?: boolean;
    reportedBackAt?: boolean;
    reportedBackByUserId?: boolean;
    createdAt?: boolean;
};
export type BoardDirectiveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "committeeTag" | "resolutionRef" | "dueAt" | "issuedByUserId" | "taskId" | "status" | "acknowledgedAt" | "acknowledgedByUserId" | "reportedBackAt" | "reportedBackByUserId" | "createdAt", ExtArgs["result"]["boardDirective"]>;
export type BoardDirectiveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issuedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgedBy?: boolean | Prisma.BoardDirective$acknowledgedByArgs<ExtArgs>;
    reportedBackBy?: boolean | Prisma.BoardDirective$reportedBackByArgs<ExtArgs>;
    rootTask?: boolean | Prisma.BoardDirective$rootTaskArgs<ExtArgs>;
    tasks?: boolean | Prisma.BoardDirective$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardDirectiveCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BoardDirectiveIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issuedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgedBy?: boolean | Prisma.BoardDirective$acknowledgedByArgs<ExtArgs>;
    reportedBackBy?: boolean | Prisma.BoardDirective$reportedBackByArgs<ExtArgs>;
    rootTask?: boolean | Prisma.BoardDirective$rootTaskArgs<ExtArgs>;
};
export type BoardDirectiveIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issuedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgedBy?: boolean | Prisma.BoardDirective$acknowledgedByArgs<ExtArgs>;
    reportedBackBy?: boolean | Prisma.BoardDirective$reportedBackByArgs<ExtArgs>;
    rootTask?: boolean | Prisma.BoardDirective$rootTaskArgs<ExtArgs>;
};
export type $BoardDirectivePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BoardDirective";
    objects: {
        issuedBy: Prisma.$AppUserPayload<ExtArgs>;
        acknowledgedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        reportedBackBy: Prisma.$AppUserPayload<ExtArgs> | null;
        rootTask: Prisma.$TaskPayload<ExtArgs> | null;
        tasks: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        committeeTag: string | null;
        resolutionRef: string | null;
        dueAt: Date;
        issuedByUserId: string;
        taskId: string | null;
        status: $Enums.BoardDirectiveStatus;
        acknowledgedAt: Date | null;
        acknowledgedByUserId: string | null;
        reportedBackAt: Date | null;
        reportedBackByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["boardDirective"]>;
    composites: {};
};
export type BoardDirectiveGetPayload<S extends boolean | null | undefined | BoardDirectiveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload, S>;
export type BoardDirectiveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardDirectiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardDirectiveCountAggregateInputType | true;
};
export interface BoardDirectiveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BoardDirective'];
        meta: {
            name: 'BoardDirective';
        };
    };
    findUnique<T extends BoardDirectiveFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardDirectiveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardDirectiveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardDirectiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardDirectiveFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardDirectiveFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardDirectiveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardDirectiveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardDirectiveFindManyArgs>(args?: Prisma.SelectSubset<T, BoardDirectiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardDirectiveCreateArgs>(args: Prisma.SelectSubset<T, BoardDirectiveCreateArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardDirectiveCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardDirectiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoardDirectiveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardDirectiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoardDirectiveDeleteArgs>(args: Prisma.SelectSubset<T, BoardDirectiveDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardDirectiveUpdateArgs>(args: Prisma.SelectSubset<T, BoardDirectiveUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardDirectiveDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardDirectiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardDirectiveUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardDirectiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoardDirectiveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardDirectiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoardDirectiveUpsertArgs>(args: Prisma.SelectSubset<T, BoardDirectiveUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardDirectiveClient<runtime.Types.Result.GetResult<Prisma.$BoardDirectivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardDirectiveCountArgs>(args?: Prisma.Subset<T, BoardDirectiveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardDirectiveCountAggregateOutputType> : number>;
    aggregate<T extends BoardDirectiveAggregateArgs>(args: Prisma.Subset<T, BoardDirectiveAggregateArgs>): Prisma.PrismaPromise<GetBoardDirectiveAggregateType<T>>;
    groupBy<T extends BoardDirectiveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardDirectiveGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardDirectiveGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardDirectiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardDirectiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardDirectiveFieldRefs;
}
export interface Prisma__BoardDirectiveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    issuedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    acknowledgedBy<T extends Prisma.BoardDirective$acknowledgedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardDirective$acknowledgedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reportedBackBy<T extends Prisma.BoardDirective$reportedBackByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardDirective$reportedBackByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rootTask<T extends Prisma.BoardDirective$rootTaskArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardDirective$rootTaskArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.BoardDirective$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardDirective$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardDirectiveFieldRefs {
    readonly id: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly title: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly description: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly committeeTag: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly resolutionRef: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly dueAt: Prisma.FieldRef<"BoardDirective", 'DateTime'>;
    readonly issuedByUserId: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly taskId: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly status: Prisma.FieldRef<"BoardDirective", 'BoardDirectiveStatus'>;
    readonly acknowledgedAt: Prisma.FieldRef<"BoardDirective", 'DateTime'>;
    readonly acknowledgedByUserId: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly reportedBackAt: Prisma.FieldRef<"BoardDirective", 'DateTime'>;
    readonly reportedBackByUserId: Prisma.FieldRef<"BoardDirective", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BoardDirective", 'DateTime'>;
}
export type BoardDirectiveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    where: Prisma.BoardDirectiveWhereUniqueInput;
};
export type BoardDirectiveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    where: Prisma.BoardDirectiveWhereUniqueInput;
};
export type BoardDirectiveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    where?: Prisma.BoardDirectiveWhereInput;
    orderBy?: Prisma.BoardDirectiveOrderByWithRelationInput | Prisma.BoardDirectiveOrderByWithRelationInput[];
    cursor?: Prisma.BoardDirectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardDirectiveScalarFieldEnum | Prisma.BoardDirectiveScalarFieldEnum[];
};
export type BoardDirectiveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    where?: Prisma.BoardDirectiveWhereInput;
    orderBy?: Prisma.BoardDirectiveOrderByWithRelationInput | Prisma.BoardDirectiveOrderByWithRelationInput[];
    cursor?: Prisma.BoardDirectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardDirectiveScalarFieldEnum | Prisma.BoardDirectiveScalarFieldEnum[];
};
export type BoardDirectiveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    where?: Prisma.BoardDirectiveWhereInput;
    orderBy?: Prisma.BoardDirectiveOrderByWithRelationInput | Prisma.BoardDirectiveOrderByWithRelationInput[];
    cursor?: Prisma.BoardDirectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardDirectiveScalarFieldEnum | Prisma.BoardDirectiveScalarFieldEnum[];
};
export type BoardDirectiveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardDirectiveCreateInput, Prisma.BoardDirectiveUncheckedCreateInput>;
};
export type BoardDirectiveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardDirectiveCreateManyInput | Prisma.BoardDirectiveCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardDirectiveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    data: Prisma.BoardDirectiveCreateManyInput | Prisma.BoardDirectiveCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BoardDirectiveIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BoardDirectiveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateInput, Prisma.BoardDirectiveUncheckedUpdateInput>;
    where: Prisma.BoardDirectiveWhereUniqueInput;
};
export type BoardDirectiveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateManyMutationInput, Prisma.BoardDirectiveUncheckedUpdateManyInput>;
    where?: Prisma.BoardDirectiveWhereInput;
    limit?: number;
};
export type BoardDirectiveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardDirectiveUpdateManyMutationInput, Prisma.BoardDirectiveUncheckedUpdateManyInput>;
    where?: Prisma.BoardDirectiveWhereInput;
    limit?: number;
    include?: Prisma.BoardDirectiveIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BoardDirectiveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    where: Prisma.BoardDirectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardDirectiveCreateInput, Prisma.BoardDirectiveUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardDirectiveUpdateInput, Prisma.BoardDirectiveUncheckedUpdateInput>;
};
export type BoardDirectiveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
    where: Prisma.BoardDirectiveWhereUniqueInput;
};
export type BoardDirectiveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardDirectiveWhereInput;
    limit?: number;
};
export type BoardDirective$acknowledgedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BoardDirective$reportedBackByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BoardDirective$rootTaskArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
};
export type BoardDirective$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type BoardDirectiveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardDirectiveSelect<ExtArgs> | null;
    omit?: Prisma.BoardDirectiveOmit<ExtArgs> | null;
    include?: Prisma.BoardDirectiveInclude<ExtArgs> | null;
};
