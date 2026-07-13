import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoardMinutesTransmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardMinutesTransmissionPayload>;
export type AggregateBoardMinutesTransmission = {
    _count: BoardMinutesTransmissionCountAggregateOutputType | null;
    _min: BoardMinutesTransmissionMinAggregateOutputType | null;
    _max: BoardMinutesTransmissionMaxAggregateOutputType | null;
};
export type BoardMinutesTransmissionMinAggregateOutputType = {
    id: string | null;
    minutesId: string | null;
    recipientUserId: string | null;
    transmittedByUserId: string | null;
    transmittedAt: Date | null;
    acknowledgedAt: Date | null;
};
export type BoardMinutesTransmissionMaxAggregateOutputType = {
    id: string | null;
    minutesId: string | null;
    recipientUserId: string | null;
    transmittedByUserId: string | null;
    transmittedAt: Date | null;
    acknowledgedAt: Date | null;
};
export type BoardMinutesTransmissionCountAggregateOutputType = {
    id: number;
    minutesId: number;
    recipientUserId: number;
    transmittedByUserId: number;
    transmittedAt: number;
    acknowledgedAt: number;
    _all: number;
};
export type BoardMinutesTransmissionMinAggregateInputType = {
    id?: true;
    minutesId?: true;
    recipientUserId?: true;
    transmittedByUserId?: true;
    transmittedAt?: true;
    acknowledgedAt?: true;
};
export type BoardMinutesTransmissionMaxAggregateInputType = {
    id?: true;
    minutesId?: true;
    recipientUserId?: true;
    transmittedByUserId?: true;
    transmittedAt?: true;
    acknowledgedAt?: true;
};
export type BoardMinutesTransmissionCountAggregateInputType = {
    id?: true;
    minutesId?: true;
    recipientUserId?: true;
    transmittedByUserId?: true;
    transmittedAt?: true;
    acknowledgedAt?: true;
    _all?: true;
};
export type BoardMinutesTransmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    orderBy?: Prisma.BoardMinutesTransmissionOrderByWithRelationInput | Prisma.BoardMinutesTransmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardMinutesTransmissionCountAggregateInputType;
    _min?: BoardMinutesTransmissionMinAggregateInputType;
    _max?: BoardMinutesTransmissionMaxAggregateInputType;
};
export type GetBoardMinutesTransmissionAggregateType<T extends BoardMinutesTransmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateBoardMinutesTransmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoardMinutesTransmission[P]> : Prisma.GetScalarType<T[P], AggregateBoardMinutesTransmission[P]>;
};
export type BoardMinutesTransmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    orderBy?: Prisma.BoardMinutesTransmissionOrderByWithAggregationInput | Prisma.BoardMinutesTransmissionOrderByWithAggregationInput[];
    by: Prisma.BoardMinutesTransmissionScalarFieldEnum[] | Prisma.BoardMinutesTransmissionScalarFieldEnum;
    having?: Prisma.BoardMinutesTransmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardMinutesTransmissionCountAggregateInputType | true;
    _min?: BoardMinutesTransmissionMinAggregateInputType;
    _max?: BoardMinutesTransmissionMaxAggregateInputType;
};
export type BoardMinutesTransmissionGroupByOutputType = {
    id: string;
    minutesId: string;
    recipientUserId: string;
    transmittedByUserId: string;
    transmittedAt: Date;
    acknowledgedAt: Date | null;
    _count: BoardMinutesTransmissionCountAggregateOutputType | null;
    _min: BoardMinutesTransmissionMinAggregateOutputType | null;
    _max: BoardMinutesTransmissionMaxAggregateOutputType | null;
};
export type GetBoardMinutesTransmissionGroupByPayload<T extends BoardMinutesTransmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardMinutesTransmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardMinutesTransmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardMinutesTransmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardMinutesTransmissionGroupByOutputType[P]>;
}>>;
export type BoardMinutesTransmissionWhereInput = {
    AND?: Prisma.BoardMinutesTransmissionWhereInput | Prisma.BoardMinutesTransmissionWhereInput[];
    OR?: Prisma.BoardMinutesTransmissionWhereInput[];
    NOT?: Prisma.BoardMinutesTransmissionWhereInput | Prisma.BoardMinutesTransmissionWhereInput[];
    id?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    minutesId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    recipientUserId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    transmittedByUserId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    transmittedAt?: Prisma.DateTimeFilter<"BoardMinutesTransmission"> | Date | string;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"BoardMinutesTransmission"> | Date | string | null;
    minutes?: Prisma.XOR<Prisma.BoardMinutesScalarRelationFilter, Prisma.BoardMinutesWhereInput>;
    recipient?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    transmittedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type BoardMinutesTransmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    minutesId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    transmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    minutes?: Prisma.BoardMinutesOrderByWithRelationInput;
    recipient?: Prisma.AppUserOrderByWithRelationInput;
    transmittedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type BoardMinutesTransmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    minutesId_recipientUserId?: Prisma.BoardMinutesTransmissionMinutesIdRecipientUserIdCompoundUniqueInput;
    AND?: Prisma.BoardMinutesTransmissionWhereInput | Prisma.BoardMinutesTransmissionWhereInput[];
    OR?: Prisma.BoardMinutesTransmissionWhereInput[];
    NOT?: Prisma.BoardMinutesTransmissionWhereInput | Prisma.BoardMinutesTransmissionWhereInput[];
    minutesId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    recipientUserId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    transmittedByUserId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    transmittedAt?: Prisma.DateTimeFilter<"BoardMinutesTransmission"> | Date | string;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"BoardMinutesTransmission"> | Date | string | null;
    minutes?: Prisma.XOR<Prisma.BoardMinutesScalarRelationFilter, Prisma.BoardMinutesWhereInput>;
    recipient?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    transmittedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "minutesId_recipientUserId">;
export type BoardMinutesTransmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    minutesId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    transmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BoardMinutesTransmissionCountOrderByAggregateInput;
    _max?: Prisma.BoardMinutesTransmissionMaxOrderByAggregateInput;
    _min?: Prisma.BoardMinutesTransmissionMinOrderByAggregateInput;
};
export type BoardMinutesTransmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardMinutesTransmissionScalarWhereWithAggregatesInput | Prisma.BoardMinutesTransmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardMinutesTransmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardMinutesTransmissionScalarWhereWithAggregatesInput | Prisma.BoardMinutesTransmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BoardMinutesTransmission"> | string;
    minutesId?: Prisma.UuidWithAggregatesFilter<"BoardMinutesTransmission"> | string;
    recipientUserId?: Prisma.UuidWithAggregatesFilter<"BoardMinutesTransmission"> | string;
    transmittedByUserId?: Prisma.UuidWithAggregatesFilter<"BoardMinutesTransmission"> | string;
    transmittedAt?: Prisma.DateTimeWithAggregatesFilter<"BoardMinutesTransmission"> | Date | string;
    acknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BoardMinutesTransmission"> | Date | string | null;
};
export type BoardMinutesTransmissionCreateInput = {
    id?: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
    minutes: Prisma.BoardMinutesCreateNestedOneWithoutTransmissionsInput;
    recipient: Prisma.AppUserCreateNestedOneWithoutBoardMinutesReceivedInput;
    transmittedBy: Prisma.AppUserCreateNestedOneWithoutBoardMinutesTransmittedInput;
};
export type BoardMinutesTransmissionUncheckedCreateInput = {
    id?: string;
    minutesId: string;
    recipientUserId: string;
    transmittedByUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    minutes?: Prisma.BoardMinutesUpdateOneRequiredWithoutTransmissionsNestedInput;
    recipient?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesReceivedNestedInput;
    transmittedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesTransmittedNestedInput;
};
export type BoardMinutesTransmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutesId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionCreateManyInput = {
    id?: string;
    minutesId: string;
    recipientUserId: string;
    transmittedByUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutesId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionListRelationFilter = {
    every?: Prisma.BoardMinutesTransmissionWhereInput;
    some?: Prisma.BoardMinutesTransmissionWhereInput;
    none?: Prisma.BoardMinutesTransmissionWhereInput;
};
export type BoardMinutesTransmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BoardMinutesTransmissionMinutesIdRecipientUserIdCompoundUniqueInput = {
    minutesId: string;
    recipientUserId: string;
};
export type BoardMinutesTransmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minutesId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    transmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
};
export type BoardMinutesTransmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minutesId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    transmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
};
export type BoardMinutesTransmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    minutesId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    transmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
};
export type BoardMinutesTransmissionCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput> | Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyRecipientInputEnvelope;
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
};
export type BoardMinutesTransmissionCreateNestedManyWithoutTransmittedByInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput> | Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyTransmittedByInputEnvelope;
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
};
export type BoardMinutesTransmissionUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput> | Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyRecipientInputEnvelope;
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
};
export type BoardMinutesTransmissionUncheckedCreateNestedManyWithoutTransmittedByInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput> | Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyTransmittedByInputEnvelope;
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
};
export type BoardMinutesTransmissionUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput> | Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutRecipientInput | Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyRecipientInputEnvelope;
    set?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    delete?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    update?: Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutRecipientInput | Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutRecipientInput | Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
};
export type BoardMinutesTransmissionUpdateManyWithoutTransmittedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput> | Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput[];
    upsert?: Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutTransmittedByInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyTransmittedByInputEnvelope;
    set?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    delete?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    update?: Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutTransmittedByInput[];
    updateMany?: Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutTransmittedByInput[];
    deleteMany?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
};
export type BoardMinutesTransmissionUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput> | Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutRecipientInput | Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyRecipientInputEnvelope;
    set?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    delete?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    update?: Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutRecipientInput | Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutRecipientInput | Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
};
export type BoardMinutesTransmissionUncheckedUpdateManyWithoutTransmittedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput> | Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput[];
    upsert?: Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutTransmittedByInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyTransmittedByInputEnvelope;
    set?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    delete?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    update?: Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutTransmittedByInput[];
    updateMany?: Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutTransmittedByInput | Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutTransmittedByInput[];
    deleteMany?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
};
export type BoardMinutesTransmissionCreateNestedManyWithoutMinutesInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput> | Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyMinutesInputEnvelope;
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
};
export type BoardMinutesTransmissionUncheckedCreateNestedManyWithoutMinutesInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput> | Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyMinutesInputEnvelope;
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
};
export type BoardMinutesTransmissionUpdateManyWithoutMinutesNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput> | Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput[];
    upsert?: Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutMinutesInput | Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutMinutesInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyMinutesInputEnvelope;
    set?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    delete?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    update?: Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutMinutesInput | Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutMinutesInput[];
    updateMany?: Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutMinutesInput | Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutMinutesInput[];
    deleteMany?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
};
export type BoardMinutesTransmissionUncheckedUpdateManyWithoutMinutesNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput> | Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput[] | Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput[];
    connectOrCreate?: Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput | Prisma.BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput[];
    upsert?: Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutMinutesInput | Prisma.BoardMinutesTransmissionUpsertWithWhereUniqueWithoutMinutesInput[];
    createMany?: Prisma.BoardMinutesTransmissionCreateManyMinutesInputEnvelope;
    set?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    delete?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    connect?: Prisma.BoardMinutesTransmissionWhereUniqueInput | Prisma.BoardMinutesTransmissionWhereUniqueInput[];
    update?: Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutMinutesInput | Prisma.BoardMinutesTransmissionUpdateWithWhereUniqueWithoutMinutesInput[];
    updateMany?: Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutMinutesInput | Prisma.BoardMinutesTransmissionUpdateManyWithWhereWithoutMinutesInput[];
    deleteMany?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
};
export type BoardMinutesTransmissionCreateWithoutRecipientInput = {
    id?: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
    minutes: Prisma.BoardMinutesCreateNestedOneWithoutTransmissionsInput;
    transmittedBy: Prisma.AppUserCreateNestedOneWithoutBoardMinutesTransmittedInput;
};
export type BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput = {
    id?: string;
    minutesId: string;
    transmittedByUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionCreateOrConnectWithoutRecipientInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput>;
};
export type BoardMinutesTransmissionCreateManyRecipientInputEnvelope = {
    data: Prisma.BoardMinutesTransmissionCreateManyRecipientInput | Prisma.BoardMinutesTransmissionCreateManyRecipientInput[];
    skipDuplicates?: boolean;
};
export type BoardMinutesTransmissionCreateWithoutTransmittedByInput = {
    id?: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
    minutes: Prisma.BoardMinutesCreateNestedOneWithoutTransmissionsInput;
    recipient: Prisma.AppUserCreateNestedOneWithoutBoardMinutesReceivedInput;
};
export type BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput = {
    id?: string;
    minutesId: string;
    recipientUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionCreateOrConnectWithoutTransmittedByInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput>;
};
export type BoardMinutesTransmissionCreateManyTransmittedByInputEnvelope = {
    data: Prisma.BoardMinutesTransmissionCreateManyTransmittedByInput | Prisma.BoardMinutesTransmissionCreateManyTransmittedByInput[];
    skipDuplicates?: boolean;
};
export type BoardMinutesTransmissionUpsertWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedUpdateWithoutRecipientInput>;
    create: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutRecipientInput>;
};
export type BoardMinutesTransmissionUpdateWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateWithoutRecipientInput, Prisma.BoardMinutesTransmissionUncheckedUpdateWithoutRecipientInput>;
};
export type BoardMinutesTransmissionUpdateManyWithWhereWithoutRecipientInput = {
    where: Prisma.BoardMinutesTransmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateManyMutationInput, Prisma.BoardMinutesTransmissionUncheckedUpdateManyWithoutRecipientInput>;
};
export type BoardMinutesTransmissionScalarWhereInput = {
    AND?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
    OR?: Prisma.BoardMinutesTransmissionScalarWhereInput[];
    NOT?: Prisma.BoardMinutesTransmissionScalarWhereInput | Prisma.BoardMinutesTransmissionScalarWhereInput[];
    id?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    minutesId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    recipientUserId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    transmittedByUserId?: Prisma.UuidFilter<"BoardMinutesTransmission"> | string;
    transmittedAt?: Prisma.DateTimeFilter<"BoardMinutesTransmission"> | Date | string;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"BoardMinutesTransmission"> | Date | string | null;
};
export type BoardMinutesTransmissionUpsertWithWhereUniqueWithoutTransmittedByInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedUpdateWithoutTransmittedByInput>;
    create: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutTransmittedByInput>;
};
export type BoardMinutesTransmissionUpdateWithWhereUniqueWithoutTransmittedByInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateWithoutTransmittedByInput, Prisma.BoardMinutesTransmissionUncheckedUpdateWithoutTransmittedByInput>;
};
export type BoardMinutesTransmissionUpdateManyWithWhereWithoutTransmittedByInput = {
    where: Prisma.BoardMinutesTransmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateManyMutationInput, Prisma.BoardMinutesTransmissionUncheckedUpdateManyWithoutTransmittedByInput>;
};
export type BoardMinutesTransmissionCreateWithoutMinutesInput = {
    id?: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
    recipient: Prisma.AppUserCreateNestedOneWithoutBoardMinutesReceivedInput;
    transmittedBy: Prisma.AppUserCreateNestedOneWithoutBoardMinutesTransmittedInput;
};
export type BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput = {
    id?: string;
    recipientUserId: string;
    transmittedByUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionCreateOrConnectWithoutMinutesInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput>;
};
export type BoardMinutesTransmissionCreateManyMinutesInputEnvelope = {
    data: Prisma.BoardMinutesTransmissionCreateManyMinutesInput | Prisma.BoardMinutesTransmissionCreateManyMinutesInput[];
    skipDuplicates?: boolean;
};
export type BoardMinutesTransmissionUpsertWithWhereUniqueWithoutMinutesInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedUpdateWithoutMinutesInput>;
    create: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedCreateWithoutMinutesInput>;
};
export type BoardMinutesTransmissionUpdateWithWhereUniqueWithoutMinutesInput = {
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateWithoutMinutesInput, Prisma.BoardMinutesTransmissionUncheckedUpdateWithoutMinutesInput>;
};
export type BoardMinutesTransmissionUpdateManyWithWhereWithoutMinutesInput = {
    where: Prisma.BoardMinutesTransmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateManyMutationInput, Prisma.BoardMinutesTransmissionUncheckedUpdateManyWithoutMinutesInput>;
};
export type BoardMinutesTransmissionCreateManyRecipientInput = {
    id?: string;
    minutesId: string;
    transmittedByUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionCreateManyTransmittedByInput = {
    id?: string;
    minutesId: string;
    recipientUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionUpdateWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    minutes?: Prisma.BoardMinutesUpdateOneRequiredWithoutTransmissionsNestedInput;
    transmittedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesTransmittedNestedInput;
};
export type BoardMinutesTransmissionUncheckedUpdateWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutesId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionUncheckedUpdateManyWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutesId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionUpdateWithoutTransmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    minutes?: Prisma.BoardMinutesUpdateOneRequiredWithoutTransmissionsNestedInput;
    recipient?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesReceivedNestedInput;
};
export type BoardMinutesTransmissionUncheckedUpdateWithoutTransmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutesId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionUncheckedUpdateManyWithoutTransmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutesId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionCreateManyMinutesInput = {
    id?: string;
    recipientUserId: string;
    transmittedByUserId: string;
    transmittedAt?: Date | string;
    acknowledgedAt?: Date | string | null;
};
export type BoardMinutesTransmissionUpdateWithoutMinutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipient?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesReceivedNestedInput;
    transmittedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesTransmittedNestedInput;
};
export type BoardMinutesTransmissionUncheckedUpdateWithoutMinutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionUncheckedUpdateManyWithoutMinutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    transmittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BoardMinutesTransmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minutesId?: boolean;
    recipientUserId?: boolean;
    transmittedByUserId?: boolean;
    transmittedAt?: boolean;
    acknowledgedAt?: boolean;
    minutes?: boolean | Prisma.BoardMinutesDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardMinutesTransmission"]>;
export type BoardMinutesTransmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minutesId?: boolean;
    recipientUserId?: boolean;
    transmittedByUserId?: boolean;
    transmittedAt?: boolean;
    acknowledgedAt?: boolean;
    minutes?: boolean | Prisma.BoardMinutesDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardMinutesTransmission"]>;
export type BoardMinutesTransmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    minutesId?: boolean;
    recipientUserId?: boolean;
    transmittedByUserId?: boolean;
    transmittedAt?: boolean;
    acknowledgedAt?: boolean;
    minutes?: boolean | Prisma.BoardMinutesDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardMinutesTransmission"]>;
export type BoardMinutesTransmissionSelectScalar = {
    id?: boolean;
    minutesId?: boolean;
    recipientUserId?: boolean;
    transmittedByUserId?: boolean;
    transmittedAt?: boolean;
    acknowledgedAt?: boolean;
};
export type BoardMinutesTransmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "minutesId" | "recipientUserId" | "transmittedByUserId" | "transmittedAt" | "acknowledgedAt", ExtArgs["result"]["boardMinutesTransmission"]>;
export type BoardMinutesTransmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    minutes?: boolean | Prisma.BoardMinutesDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BoardMinutesTransmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    minutes?: boolean | Prisma.BoardMinutesDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BoardMinutesTransmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    minutes?: boolean | Prisma.BoardMinutesDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $BoardMinutesTransmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BoardMinutesTransmission";
    objects: {
        minutes: Prisma.$BoardMinutesPayload<ExtArgs>;
        recipient: Prisma.$AppUserPayload<ExtArgs>;
        transmittedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        minutesId: string;
        recipientUserId: string;
        transmittedByUserId: string;
        transmittedAt: Date;
        acknowledgedAt: Date | null;
    }, ExtArgs["result"]["boardMinutesTransmission"]>;
    composites: {};
};
export type BoardMinutesTransmissionGetPayload<S extends boolean | null | undefined | BoardMinutesTransmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload, S>;
export type BoardMinutesTransmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardMinutesTransmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardMinutesTransmissionCountAggregateInputType | true;
};
export interface BoardMinutesTransmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BoardMinutesTransmission'];
        meta: {
            name: 'BoardMinutesTransmission';
        };
    };
    findUnique<T extends BoardMinutesTransmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardMinutesTransmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardMinutesTransmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardMinutesTransmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardMinutesTransmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardMinutesTransmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardMinutesTransmissionFindManyArgs>(args?: Prisma.SelectSubset<T, BoardMinutesTransmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardMinutesTransmissionCreateArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionCreateArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardMinutesTransmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardMinutesTransmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoardMinutesTransmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardMinutesTransmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoardMinutesTransmissionDeleteArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardMinutesTransmissionUpdateArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardMinutesTransmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardMinutesTransmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardMinutesTransmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoardMinutesTransmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoardMinutesTransmissionUpsertArgs>(args: Prisma.SelectSubset<T, BoardMinutesTransmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesTransmissionClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardMinutesTransmissionCountArgs>(args?: Prisma.Subset<T, BoardMinutesTransmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardMinutesTransmissionCountAggregateOutputType> : number>;
    aggregate<T extends BoardMinutesTransmissionAggregateArgs>(args: Prisma.Subset<T, BoardMinutesTransmissionAggregateArgs>): Prisma.PrismaPromise<GetBoardMinutesTransmissionAggregateType<T>>;
    groupBy<T extends BoardMinutesTransmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardMinutesTransmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardMinutesTransmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardMinutesTransmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardMinutesTransmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardMinutesTransmissionFieldRefs;
}
export interface Prisma__BoardMinutesTransmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    minutes<T extends Prisma.BoardMinutesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardMinutesDefaultArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recipient<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transmittedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardMinutesTransmissionFieldRefs {
    readonly id: Prisma.FieldRef<"BoardMinutesTransmission", 'String'>;
    readonly minutesId: Prisma.FieldRef<"BoardMinutesTransmission", 'String'>;
    readonly recipientUserId: Prisma.FieldRef<"BoardMinutesTransmission", 'String'>;
    readonly transmittedByUserId: Prisma.FieldRef<"BoardMinutesTransmission", 'String'>;
    readonly transmittedAt: Prisma.FieldRef<"BoardMinutesTransmission", 'DateTime'>;
    readonly acknowledgedAt: Prisma.FieldRef<"BoardMinutesTransmission", 'DateTime'>;
}
export type BoardMinutesTransmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
};
export type BoardMinutesTransmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
};
export type BoardMinutesTransmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    orderBy?: Prisma.BoardMinutesTransmissionOrderByWithRelationInput | Prisma.BoardMinutesTransmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardMinutesTransmissionScalarFieldEnum | Prisma.BoardMinutesTransmissionScalarFieldEnum[];
};
export type BoardMinutesTransmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    orderBy?: Prisma.BoardMinutesTransmissionOrderByWithRelationInput | Prisma.BoardMinutesTransmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardMinutesTransmissionScalarFieldEnum | Prisma.BoardMinutesTransmissionScalarFieldEnum[];
};
export type BoardMinutesTransmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    orderBy?: Prisma.BoardMinutesTransmissionOrderByWithRelationInput | Prisma.BoardMinutesTransmissionOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardMinutesTransmissionScalarFieldEnum | Prisma.BoardMinutesTransmissionScalarFieldEnum[];
};
export type BoardMinutesTransmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateInput, Prisma.BoardMinutesTransmissionUncheckedCreateInput>;
};
export type BoardMinutesTransmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardMinutesTransmissionCreateManyInput | Prisma.BoardMinutesTransmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardMinutesTransmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    data: Prisma.BoardMinutesTransmissionCreateManyInput | Prisma.BoardMinutesTransmissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BoardMinutesTransmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BoardMinutesTransmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateInput, Prisma.BoardMinutesTransmissionUncheckedUpdateInput>;
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
};
export type BoardMinutesTransmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateManyMutationInput, Prisma.BoardMinutesTransmissionUncheckedUpdateManyInput>;
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    limit?: number;
};
export type BoardMinutesTransmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateManyMutationInput, Prisma.BoardMinutesTransmissionUncheckedUpdateManyInput>;
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    limit?: number;
    include?: Prisma.BoardMinutesTransmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BoardMinutesTransmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardMinutesTransmissionCreateInput, Prisma.BoardMinutesTransmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardMinutesTransmissionUpdateInput, Prisma.BoardMinutesTransmissionUncheckedUpdateInput>;
};
export type BoardMinutesTransmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesTransmissionWhereUniqueInput;
};
export type BoardMinutesTransmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardMinutesTransmissionWhereInput;
    limit?: number;
};
export type BoardMinutesTransmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesTransmissionSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesTransmissionOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesTransmissionInclude<ExtArgs> | null;
};
