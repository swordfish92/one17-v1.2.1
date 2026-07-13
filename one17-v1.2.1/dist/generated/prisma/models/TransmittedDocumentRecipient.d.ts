import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TransmittedDocumentRecipientModel = runtime.Types.Result.DefaultSelection<Prisma.$TransmittedDocumentRecipientPayload>;
export type AggregateTransmittedDocumentRecipient = {
    _count: TransmittedDocumentRecipientCountAggregateOutputType | null;
    _min: TransmittedDocumentRecipientMinAggregateOutputType | null;
    _max: TransmittedDocumentRecipientMaxAggregateOutputType | null;
};
export type TransmittedDocumentRecipientMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    recipientUserId: string | null;
    taskId: string | null;
    acknowledgedAt: Date | null;
    createdAt: Date | null;
};
export type TransmittedDocumentRecipientMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    recipientUserId: string | null;
    taskId: string | null;
    acknowledgedAt: Date | null;
    createdAt: Date | null;
};
export type TransmittedDocumentRecipientCountAggregateOutputType = {
    id: number;
    documentId: number;
    recipientUserId: number;
    taskId: number;
    acknowledgedAt: number;
    createdAt: number;
    _all: number;
};
export type TransmittedDocumentRecipientMinAggregateInputType = {
    id?: true;
    documentId?: true;
    recipientUserId?: true;
    taskId?: true;
    acknowledgedAt?: true;
    createdAt?: true;
};
export type TransmittedDocumentRecipientMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    recipientUserId?: true;
    taskId?: true;
    acknowledgedAt?: true;
    createdAt?: true;
};
export type TransmittedDocumentRecipientCountAggregateInputType = {
    id?: true;
    documentId?: true;
    recipientUserId?: true;
    taskId?: true;
    acknowledgedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type TransmittedDocumentRecipientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    orderBy?: Prisma.TransmittedDocumentRecipientOrderByWithRelationInput | Prisma.TransmittedDocumentRecipientOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransmittedDocumentRecipientCountAggregateInputType;
    _min?: TransmittedDocumentRecipientMinAggregateInputType;
    _max?: TransmittedDocumentRecipientMaxAggregateInputType;
};
export type GetTransmittedDocumentRecipientAggregateType<T extends TransmittedDocumentRecipientAggregateArgs> = {
    [P in keyof T & keyof AggregateTransmittedDocumentRecipient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransmittedDocumentRecipient[P]> : Prisma.GetScalarType<T[P], AggregateTransmittedDocumentRecipient[P]>;
};
export type TransmittedDocumentRecipientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    orderBy?: Prisma.TransmittedDocumentRecipientOrderByWithAggregationInput | Prisma.TransmittedDocumentRecipientOrderByWithAggregationInput[];
    by: Prisma.TransmittedDocumentRecipientScalarFieldEnum[] | Prisma.TransmittedDocumentRecipientScalarFieldEnum;
    having?: Prisma.TransmittedDocumentRecipientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransmittedDocumentRecipientCountAggregateInputType | true;
    _min?: TransmittedDocumentRecipientMinAggregateInputType;
    _max?: TransmittedDocumentRecipientMaxAggregateInputType;
};
export type TransmittedDocumentRecipientGroupByOutputType = {
    id: string;
    documentId: string;
    recipientUserId: string;
    taskId: string | null;
    acknowledgedAt: Date | null;
    createdAt: Date;
    _count: TransmittedDocumentRecipientCountAggregateOutputType | null;
    _min: TransmittedDocumentRecipientMinAggregateOutputType | null;
    _max: TransmittedDocumentRecipientMaxAggregateOutputType | null;
};
export type GetTransmittedDocumentRecipientGroupByPayload<T extends TransmittedDocumentRecipientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransmittedDocumentRecipientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransmittedDocumentRecipientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransmittedDocumentRecipientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransmittedDocumentRecipientGroupByOutputType[P]>;
}>>;
export type TransmittedDocumentRecipientWhereInput = {
    AND?: Prisma.TransmittedDocumentRecipientWhereInput | Prisma.TransmittedDocumentRecipientWhereInput[];
    OR?: Prisma.TransmittedDocumentRecipientWhereInput[];
    NOT?: Prisma.TransmittedDocumentRecipientWhereInput | Prisma.TransmittedDocumentRecipientWhereInput[];
    id?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    documentId?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    recipientUserId?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    taskId?: Prisma.UuidNullableFilter<"TransmittedDocumentRecipient"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"TransmittedDocumentRecipient"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TransmittedDocumentRecipient"> | Date | string;
    document?: Prisma.XOR<Prisma.TransmittedDocumentScalarRelationFilter, Prisma.TransmittedDocumentWhereInput>;
    recipient?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    task?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
};
export type TransmittedDocumentRecipientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    document?: Prisma.TransmittedDocumentOrderByWithRelationInput;
    recipient?: Prisma.AppUserOrderByWithRelationInput;
    task?: Prisma.TaskOrderByWithRelationInput;
};
export type TransmittedDocumentRecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    documentId_recipientUserId?: Prisma.TransmittedDocumentRecipientDocumentIdRecipientUserIdCompoundUniqueInput;
    AND?: Prisma.TransmittedDocumentRecipientWhereInput | Prisma.TransmittedDocumentRecipientWhereInput[];
    OR?: Prisma.TransmittedDocumentRecipientWhereInput[];
    NOT?: Prisma.TransmittedDocumentRecipientWhereInput | Prisma.TransmittedDocumentRecipientWhereInput[];
    documentId?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    recipientUserId?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    taskId?: Prisma.UuidNullableFilter<"TransmittedDocumentRecipient"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"TransmittedDocumentRecipient"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TransmittedDocumentRecipient"> | Date | string;
    document?: Prisma.XOR<Prisma.TransmittedDocumentScalarRelationFilter, Prisma.TransmittedDocumentWhereInput>;
    recipient?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    task?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
}, "id" | "documentId_recipientUserId">;
export type TransmittedDocumentRecipientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TransmittedDocumentRecipientCountOrderByAggregateInput;
    _max?: Prisma.TransmittedDocumentRecipientMaxOrderByAggregateInput;
    _min?: Prisma.TransmittedDocumentRecipientMinOrderByAggregateInput;
};
export type TransmittedDocumentRecipientScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransmittedDocumentRecipientScalarWhereWithAggregatesInput | Prisma.TransmittedDocumentRecipientScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransmittedDocumentRecipientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransmittedDocumentRecipientScalarWhereWithAggregatesInput | Prisma.TransmittedDocumentRecipientScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TransmittedDocumentRecipient"> | string;
    documentId?: Prisma.UuidWithAggregatesFilter<"TransmittedDocumentRecipient"> | string;
    recipientUserId?: Prisma.UuidWithAggregatesFilter<"TransmittedDocumentRecipient"> | string;
    taskId?: Prisma.UuidNullableWithAggregatesFilter<"TransmittedDocumentRecipient"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TransmittedDocumentRecipient"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TransmittedDocumentRecipient"> | Date | string;
};
export type TransmittedDocumentRecipientCreateInput = {
    id?: string;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    document: Prisma.TransmittedDocumentCreateNestedOneWithoutRecipientsInput;
    recipient: Prisma.AppUserCreateNestedOneWithoutTransmittedDocumentsReceivedInput;
    task?: Prisma.TaskCreateNestedOneWithoutTransmittedDocumentRecipientsInput;
};
export type TransmittedDocumentRecipientUncheckedCreateInput = {
    id?: string;
    documentId: string;
    recipientUserId: string;
    taskId?: string | null;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.TransmittedDocumentUpdateOneRequiredWithoutRecipientsNestedInput;
    recipient?: Prisma.AppUserUpdateOneRequiredWithoutTransmittedDocumentsReceivedNestedInput;
    task?: Prisma.TaskUpdateOneWithoutTransmittedDocumentRecipientsNestedInput;
};
export type TransmittedDocumentRecipientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientCreateManyInput = {
    id?: string;
    documentId: string;
    recipientUserId: string;
    taskId?: string | null;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientListRelationFilter = {
    every?: Prisma.TransmittedDocumentRecipientWhereInput;
    some?: Prisma.TransmittedDocumentRecipientWhereInput;
    none?: Prisma.TransmittedDocumentRecipientWhereInput;
};
export type TransmittedDocumentRecipientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransmittedDocumentRecipientDocumentIdRecipientUserIdCompoundUniqueInput = {
    documentId: string;
    recipientUserId: string;
};
export type TransmittedDocumentRecipientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransmittedDocumentRecipientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransmittedDocumentRecipientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    recipientUserId?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransmittedDocumentRecipientCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput> | Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyRecipientInputEnvelope;
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
};
export type TransmittedDocumentRecipientUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput> | Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyRecipientInputEnvelope;
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
};
export type TransmittedDocumentRecipientUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput> | Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutRecipientInput | Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyRecipientInputEnvelope;
    set?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutRecipientInput | Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutRecipientInput | Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
};
export type TransmittedDocumentRecipientUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput> | Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutRecipientInput | Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyRecipientInputEnvelope;
    set?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutRecipientInput | Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutRecipientInput | Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
};
export type TransmittedDocumentRecipientCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput> | Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyTaskInputEnvelope;
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
};
export type TransmittedDocumentRecipientUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput> | Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyTaskInputEnvelope;
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
};
export type TransmittedDocumentRecipientUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput> | Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutTaskInput | Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyTaskInputEnvelope;
    set?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutTaskInput | Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutTaskInput | Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
};
export type TransmittedDocumentRecipientUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput> | Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutTaskInput | Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyTaskInputEnvelope;
    set?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutTaskInput | Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutTaskInput | Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
};
export type TransmittedDocumentRecipientCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput> | Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyDocumentInputEnvelope;
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
};
export type TransmittedDocumentRecipientUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput> | Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyDocumentInputEnvelope;
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
};
export type TransmittedDocumentRecipientUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput> | Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput | Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyDocumentInputEnvelope;
    set?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput | Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutDocumentInput | Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
};
export type TransmittedDocumentRecipientUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput> | Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput[] | Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput | Prisma.TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput | Prisma.TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.TransmittedDocumentRecipientCreateManyDocumentInputEnvelope;
    set?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentRecipientWhereUniqueInput | Prisma.TransmittedDocumentRecipientWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput | Prisma.TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutDocumentInput | Prisma.TransmittedDocumentRecipientUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
};
export type TransmittedDocumentRecipientCreateWithoutRecipientInput = {
    id?: string;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    document: Prisma.TransmittedDocumentCreateNestedOneWithoutRecipientsInput;
    task?: Prisma.TaskCreateNestedOneWithoutTransmittedDocumentRecipientsInput;
};
export type TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput = {
    id?: string;
    documentId: string;
    taskId?: string | null;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientCreateOrConnectWithoutRecipientInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput>;
};
export type TransmittedDocumentRecipientCreateManyRecipientInputEnvelope = {
    data: Prisma.TransmittedDocumentRecipientCreateManyRecipientInput | Prisma.TransmittedDocumentRecipientCreateManyRecipientInput[];
    skipDuplicates?: boolean;
};
export type TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateWithoutRecipientInput>;
    create: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutRecipientInput>;
};
export type TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateWithoutRecipientInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateWithoutRecipientInput>;
};
export type TransmittedDocumentRecipientUpdateManyWithWhereWithoutRecipientInput = {
    where: Prisma.TransmittedDocumentRecipientScalarWhereInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateManyMutationInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateManyWithoutRecipientInput>;
};
export type TransmittedDocumentRecipientScalarWhereInput = {
    AND?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
    OR?: Prisma.TransmittedDocumentRecipientScalarWhereInput[];
    NOT?: Prisma.TransmittedDocumentRecipientScalarWhereInput | Prisma.TransmittedDocumentRecipientScalarWhereInput[];
    id?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    documentId?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    recipientUserId?: Prisma.UuidFilter<"TransmittedDocumentRecipient"> | string;
    taskId?: Prisma.UuidNullableFilter<"TransmittedDocumentRecipient"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"TransmittedDocumentRecipient"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TransmittedDocumentRecipient"> | Date | string;
};
export type TransmittedDocumentRecipientCreateWithoutTaskInput = {
    id?: string;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    document: Prisma.TransmittedDocumentCreateNestedOneWithoutRecipientsInput;
    recipient: Prisma.AppUserCreateNestedOneWithoutTransmittedDocumentsReceivedInput;
};
export type TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput = {
    id?: string;
    documentId: string;
    recipientUserId: string;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientCreateOrConnectWithoutTaskInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput>;
};
export type TransmittedDocumentRecipientCreateManyTaskInputEnvelope = {
    data: Prisma.TransmittedDocumentRecipientCreateManyTaskInput | Prisma.TransmittedDocumentRecipientCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutTaskInput>;
};
export type TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateWithoutTaskInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateWithoutTaskInput>;
};
export type TransmittedDocumentRecipientUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.TransmittedDocumentRecipientScalarWhereInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateManyMutationInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateManyWithoutTaskInput>;
};
export type TransmittedDocumentRecipientCreateWithoutDocumentInput = {
    id?: string;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
    recipient: Prisma.AppUserCreateNestedOneWithoutTransmittedDocumentsReceivedInput;
    task?: Prisma.TaskCreateNestedOneWithoutTransmittedDocumentRecipientsInput;
};
export type TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput = {
    id?: string;
    recipientUserId: string;
    taskId?: string | null;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientCreateOrConnectWithoutDocumentInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput>;
};
export type TransmittedDocumentRecipientCreateManyDocumentInputEnvelope = {
    data: Prisma.TransmittedDocumentRecipientCreateManyDocumentInput | Prisma.TransmittedDocumentRecipientCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type TransmittedDocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedCreateWithoutDocumentInput>;
};
export type TransmittedDocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateWithoutDocumentInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateWithoutDocumentInput>;
};
export type TransmittedDocumentRecipientUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.TransmittedDocumentRecipientScalarWhereInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateManyMutationInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateManyWithoutDocumentInput>;
};
export type TransmittedDocumentRecipientCreateManyRecipientInput = {
    id?: string;
    documentId: string;
    taskId?: string | null;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientUpdateWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.TransmittedDocumentUpdateOneRequiredWithoutRecipientsNestedInput;
    task?: Prisma.TaskUpdateOneWithoutTransmittedDocumentRecipientsNestedInput;
};
export type TransmittedDocumentRecipientUncheckedUpdateWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientUncheckedUpdateManyWithoutRecipientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientCreateManyTaskInput = {
    id?: string;
    documentId: string;
    recipientUserId: string;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.TransmittedDocumentUpdateOneRequiredWithoutRecipientsNestedInput;
    recipient?: Prisma.AppUserUpdateOneRequiredWithoutTransmittedDocumentsReceivedNestedInput;
};
export type TransmittedDocumentRecipientUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientCreateManyDocumentInput = {
    id?: string;
    recipientUserId: string;
    taskId?: string | null;
    acknowledgedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentRecipientUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recipient?: Prisma.AppUserUpdateOneRequiredWithoutTransmittedDocumentsReceivedNestedInput;
    task?: Prisma.TaskUpdateOneWithoutTransmittedDocumentRecipientsNestedInput;
};
export type TransmittedDocumentRecipientUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentRecipientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    recipientUserId?: boolean;
    taskId?: boolean;
    acknowledgedAt?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.TransmittedDocumentDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs>;
}, ExtArgs["result"]["transmittedDocumentRecipient"]>;
export type TransmittedDocumentRecipientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    recipientUserId?: boolean;
    taskId?: boolean;
    acknowledgedAt?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.TransmittedDocumentDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs>;
}, ExtArgs["result"]["transmittedDocumentRecipient"]>;
export type TransmittedDocumentRecipientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    recipientUserId?: boolean;
    taskId?: boolean;
    acknowledgedAt?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.TransmittedDocumentDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs>;
}, ExtArgs["result"]["transmittedDocumentRecipient"]>;
export type TransmittedDocumentRecipientSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    recipientUserId?: boolean;
    taskId?: boolean;
    acknowledgedAt?: boolean;
    createdAt?: boolean;
};
export type TransmittedDocumentRecipientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "documentId" | "recipientUserId" | "taskId" | "acknowledgedAt" | "createdAt", ExtArgs["result"]["transmittedDocumentRecipient"]>;
export type TransmittedDocumentRecipientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.TransmittedDocumentDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs>;
};
export type TransmittedDocumentRecipientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.TransmittedDocumentDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs>;
};
export type TransmittedDocumentRecipientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.TransmittedDocumentDefaultArgs<ExtArgs>;
    recipient?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    task?: boolean | Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs>;
};
export type $TransmittedDocumentRecipientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TransmittedDocumentRecipient";
    objects: {
        document: Prisma.$TransmittedDocumentPayload<ExtArgs>;
        recipient: Prisma.$AppUserPayload<ExtArgs>;
        task: Prisma.$TaskPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        documentId: string;
        recipientUserId: string;
        taskId: string | null;
        acknowledgedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["transmittedDocumentRecipient"]>;
    composites: {};
};
export type TransmittedDocumentRecipientGetPayload<S extends boolean | null | undefined | TransmittedDocumentRecipientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload, S>;
export type TransmittedDocumentRecipientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransmittedDocumentRecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransmittedDocumentRecipientCountAggregateInputType | true;
};
export interface TransmittedDocumentRecipientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TransmittedDocumentRecipient'];
        meta: {
            name: 'TransmittedDocumentRecipient';
        };
    };
    findUnique<T extends TransmittedDocumentRecipientFindUniqueArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransmittedDocumentRecipientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransmittedDocumentRecipientFindFirstArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentRecipientFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransmittedDocumentRecipientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentRecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransmittedDocumentRecipientFindManyArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentRecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransmittedDocumentRecipientCreateArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientCreateArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransmittedDocumentRecipientCreateManyArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentRecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransmittedDocumentRecipientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentRecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransmittedDocumentRecipientDeleteArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientDeleteArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransmittedDocumentRecipientUpdateArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientUpdateArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransmittedDocumentRecipientDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentRecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransmittedDocumentRecipientUpdateManyArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransmittedDocumentRecipientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransmittedDocumentRecipientUpsertArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentRecipientUpsertArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentRecipientClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransmittedDocumentRecipientCountArgs>(args?: Prisma.Subset<T, TransmittedDocumentRecipientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransmittedDocumentRecipientCountAggregateOutputType> : number>;
    aggregate<T extends TransmittedDocumentRecipientAggregateArgs>(args: Prisma.Subset<T, TransmittedDocumentRecipientAggregateArgs>): Prisma.PrismaPromise<GetTransmittedDocumentRecipientAggregateType<T>>;
    groupBy<T extends TransmittedDocumentRecipientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransmittedDocumentRecipientGroupByArgs['orderBy'];
    } : {
        orderBy?: TransmittedDocumentRecipientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransmittedDocumentRecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransmittedDocumentRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransmittedDocumentRecipientFieldRefs;
}
export interface Prisma__TransmittedDocumentRecipientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    document<T extends Prisma.TransmittedDocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransmittedDocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recipient<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    task<T extends Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransmittedDocumentRecipient$taskArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransmittedDocumentRecipientFieldRefs {
    readonly id: Prisma.FieldRef<"TransmittedDocumentRecipient", 'String'>;
    readonly documentId: Prisma.FieldRef<"TransmittedDocumentRecipient", 'String'>;
    readonly recipientUserId: Prisma.FieldRef<"TransmittedDocumentRecipient", 'String'>;
    readonly taskId: Prisma.FieldRef<"TransmittedDocumentRecipient", 'String'>;
    readonly acknowledgedAt: Prisma.FieldRef<"TransmittedDocumentRecipient", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"TransmittedDocumentRecipient", 'DateTime'>;
}
export type TransmittedDocumentRecipientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
};
export type TransmittedDocumentRecipientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
};
export type TransmittedDocumentRecipientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    orderBy?: Prisma.TransmittedDocumentRecipientOrderByWithRelationInput | Prisma.TransmittedDocumentRecipientOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransmittedDocumentRecipientScalarFieldEnum | Prisma.TransmittedDocumentRecipientScalarFieldEnum[];
};
export type TransmittedDocumentRecipientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    orderBy?: Prisma.TransmittedDocumentRecipientOrderByWithRelationInput | Prisma.TransmittedDocumentRecipientOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransmittedDocumentRecipientScalarFieldEnum | Prisma.TransmittedDocumentRecipientScalarFieldEnum[];
};
export type TransmittedDocumentRecipientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    orderBy?: Prisma.TransmittedDocumentRecipientOrderByWithRelationInput | Prisma.TransmittedDocumentRecipientOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransmittedDocumentRecipientScalarFieldEnum | Prisma.TransmittedDocumentRecipientScalarFieldEnum[];
};
export type TransmittedDocumentRecipientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateInput, Prisma.TransmittedDocumentRecipientUncheckedCreateInput>;
};
export type TransmittedDocumentRecipientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransmittedDocumentRecipientCreateManyInput | Prisma.TransmittedDocumentRecipientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransmittedDocumentRecipientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    data: Prisma.TransmittedDocumentRecipientCreateManyInput | Prisma.TransmittedDocumentRecipientCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TransmittedDocumentRecipientIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TransmittedDocumentRecipientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateInput>;
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
};
export type TransmittedDocumentRecipientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateManyMutationInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateManyInput>;
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    limit?: number;
};
export type TransmittedDocumentRecipientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateManyMutationInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateManyInput>;
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    limit?: number;
    include?: Prisma.TransmittedDocumentRecipientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TransmittedDocumentRecipientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransmittedDocumentRecipientCreateInput, Prisma.TransmittedDocumentRecipientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransmittedDocumentRecipientUpdateInput, Prisma.TransmittedDocumentRecipientUncheckedUpdateInput>;
};
export type TransmittedDocumentRecipientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentRecipientWhereUniqueInput;
};
export type TransmittedDocumentRecipientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
    limit?: number;
};
export type TransmittedDocumentRecipient$taskArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
};
export type TransmittedDocumentRecipientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentRecipientSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentRecipientOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentRecipientInclude<ExtArgs> | null;
};
