import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TransmittedDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$TransmittedDocumentPayload>;
export type AggregateTransmittedDocument = {
    _count: TransmittedDocumentCountAggregateOutputType | null;
    _min: TransmittedDocumentMinAggregateOutputType | null;
    _max: TransmittedDocumentMaxAggregateOutputType | null;
};
export type TransmittedDocumentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    fileReference: string | null;
    docType: string | null;
    transmittedByUserId: string | null;
    createdAt: Date | null;
};
export type TransmittedDocumentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    fileReference: string | null;
    docType: string | null;
    transmittedByUserId: string | null;
    createdAt: Date | null;
};
export type TransmittedDocumentCountAggregateOutputType = {
    id: number;
    title: number;
    fileReference: number;
    docType: number;
    transmittedByUserId: number;
    createdAt: number;
    _all: number;
};
export type TransmittedDocumentMinAggregateInputType = {
    id?: true;
    title?: true;
    fileReference?: true;
    docType?: true;
    transmittedByUserId?: true;
    createdAt?: true;
};
export type TransmittedDocumentMaxAggregateInputType = {
    id?: true;
    title?: true;
    fileReference?: true;
    docType?: true;
    transmittedByUserId?: true;
    createdAt?: true;
};
export type TransmittedDocumentCountAggregateInputType = {
    id?: true;
    title?: true;
    fileReference?: true;
    docType?: true;
    transmittedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type TransmittedDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransmittedDocumentWhereInput;
    orderBy?: Prisma.TransmittedDocumentOrderByWithRelationInput | Prisma.TransmittedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransmittedDocumentCountAggregateInputType;
    _min?: TransmittedDocumentMinAggregateInputType;
    _max?: TransmittedDocumentMaxAggregateInputType;
};
export type GetTransmittedDocumentAggregateType<T extends TransmittedDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateTransmittedDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransmittedDocument[P]> : Prisma.GetScalarType<T[P], AggregateTransmittedDocument[P]>;
};
export type TransmittedDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransmittedDocumentWhereInput;
    orderBy?: Prisma.TransmittedDocumentOrderByWithAggregationInput | Prisma.TransmittedDocumentOrderByWithAggregationInput[];
    by: Prisma.TransmittedDocumentScalarFieldEnum[] | Prisma.TransmittedDocumentScalarFieldEnum;
    having?: Prisma.TransmittedDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransmittedDocumentCountAggregateInputType | true;
    _min?: TransmittedDocumentMinAggregateInputType;
    _max?: TransmittedDocumentMaxAggregateInputType;
};
export type TransmittedDocumentGroupByOutputType = {
    id: string;
    title: string;
    fileReference: string;
    docType: string | null;
    transmittedByUserId: string;
    createdAt: Date;
    _count: TransmittedDocumentCountAggregateOutputType | null;
    _min: TransmittedDocumentMinAggregateOutputType | null;
    _max: TransmittedDocumentMaxAggregateOutputType | null;
};
export type GetTransmittedDocumentGroupByPayload<T extends TransmittedDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransmittedDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransmittedDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransmittedDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransmittedDocumentGroupByOutputType[P]>;
}>>;
export type TransmittedDocumentWhereInput = {
    AND?: Prisma.TransmittedDocumentWhereInput | Prisma.TransmittedDocumentWhereInput[];
    OR?: Prisma.TransmittedDocumentWhereInput[];
    NOT?: Prisma.TransmittedDocumentWhereInput | Prisma.TransmittedDocumentWhereInput[];
    id?: Prisma.UuidFilter<"TransmittedDocument"> | string;
    title?: Prisma.StringFilter<"TransmittedDocument"> | string;
    fileReference?: Prisma.StringFilter<"TransmittedDocument"> | string;
    docType?: Prisma.StringNullableFilter<"TransmittedDocument"> | string | null;
    transmittedByUserId?: Prisma.UuidFilter<"TransmittedDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"TransmittedDocument"> | Date | string;
    transmittedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    recipients?: Prisma.TransmittedDocumentRecipientListRelationFilter;
};
export type TransmittedDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    docType?: Prisma.SortOrderInput | Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    transmittedBy?: Prisma.AppUserOrderByWithRelationInput;
    recipients?: Prisma.TransmittedDocumentRecipientOrderByRelationAggregateInput;
};
export type TransmittedDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TransmittedDocumentWhereInput | Prisma.TransmittedDocumentWhereInput[];
    OR?: Prisma.TransmittedDocumentWhereInput[];
    NOT?: Prisma.TransmittedDocumentWhereInput | Prisma.TransmittedDocumentWhereInput[];
    title?: Prisma.StringFilter<"TransmittedDocument"> | string;
    fileReference?: Prisma.StringFilter<"TransmittedDocument"> | string;
    docType?: Prisma.StringNullableFilter<"TransmittedDocument"> | string | null;
    transmittedByUserId?: Prisma.UuidFilter<"TransmittedDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"TransmittedDocument"> | Date | string;
    transmittedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    recipients?: Prisma.TransmittedDocumentRecipientListRelationFilter;
}, "id">;
export type TransmittedDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    docType?: Prisma.SortOrderInput | Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TransmittedDocumentCountOrderByAggregateInput;
    _max?: Prisma.TransmittedDocumentMaxOrderByAggregateInput;
    _min?: Prisma.TransmittedDocumentMinOrderByAggregateInput;
};
export type TransmittedDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransmittedDocumentScalarWhereWithAggregatesInput | Prisma.TransmittedDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransmittedDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransmittedDocumentScalarWhereWithAggregatesInput | Prisma.TransmittedDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TransmittedDocument"> | string;
    title?: Prisma.StringWithAggregatesFilter<"TransmittedDocument"> | string;
    fileReference?: Prisma.StringWithAggregatesFilter<"TransmittedDocument"> | string;
    docType?: Prisma.StringNullableWithAggregatesFilter<"TransmittedDocument"> | string | null;
    transmittedByUserId?: Prisma.UuidWithAggregatesFilter<"TransmittedDocument"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TransmittedDocument"> | Date | string;
};
export type TransmittedDocumentCreateInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    createdAt?: Date | string;
    transmittedBy: Prisma.AppUserCreateNestedOneWithoutTransmittedDocumentsSentInput;
    recipients?: Prisma.TransmittedDocumentRecipientCreateNestedManyWithoutDocumentInput;
};
export type TransmittedDocumentUncheckedCreateInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    transmittedByUserId: string;
    createdAt?: Date | string;
    recipients?: Prisma.TransmittedDocumentRecipientUncheckedCreateNestedManyWithoutDocumentInput;
};
export type TransmittedDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transmittedBy?: Prisma.AppUserUpdateOneRequiredWithoutTransmittedDocumentsSentNestedInput;
    recipients?: Prisma.TransmittedDocumentRecipientUpdateManyWithoutDocumentNestedInput;
};
export type TransmittedDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recipients?: Prisma.TransmittedDocumentRecipientUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type TransmittedDocumentCreateManyInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    transmittedByUserId: string;
    createdAt?: Date | string;
};
export type TransmittedDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentListRelationFilter = {
    every?: Prisma.TransmittedDocumentWhereInput;
    some?: Prisma.TransmittedDocumentWhereInput;
    none?: Prisma.TransmittedDocumentWhereInput;
};
export type TransmittedDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransmittedDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransmittedDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransmittedDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    docType?: Prisma.SortOrder;
    transmittedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransmittedDocumentScalarRelationFilter = {
    is?: Prisma.TransmittedDocumentWhereInput;
    isNot?: Prisma.TransmittedDocumentWhereInput;
};
export type TransmittedDocumentCreateNestedManyWithoutTransmittedByInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput> | Prisma.TransmittedDocumentCreateWithoutTransmittedByInput[] | Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput | Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput[];
    createMany?: Prisma.TransmittedDocumentCreateManyTransmittedByInputEnvelope;
    connect?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
};
export type TransmittedDocumentUncheckedCreateNestedManyWithoutTransmittedByInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput> | Prisma.TransmittedDocumentCreateWithoutTransmittedByInput[] | Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput | Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput[];
    createMany?: Prisma.TransmittedDocumentCreateManyTransmittedByInputEnvelope;
    connect?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
};
export type TransmittedDocumentUpdateManyWithoutTransmittedByNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput> | Prisma.TransmittedDocumentCreateWithoutTransmittedByInput[] | Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput | Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput[];
    upsert?: Prisma.TransmittedDocumentUpsertWithWhereUniqueWithoutTransmittedByInput | Prisma.TransmittedDocumentUpsertWithWhereUniqueWithoutTransmittedByInput[];
    createMany?: Prisma.TransmittedDocumentCreateManyTransmittedByInputEnvelope;
    set?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentUpdateWithWhereUniqueWithoutTransmittedByInput | Prisma.TransmittedDocumentUpdateWithWhereUniqueWithoutTransmittedByInput[];
    updateMany?: Prisma.TransmittedDocumentUpdateManyWithWhereWithoutTransmittedByInput | Prisma.TransmittedDocumentUpdateManyWithWhereWithoutTransmittedByInput[];
    deleteMany?: Prisma.TransmittedDocumentScalarWhereInput | Prisma.TransmittedDocumentScalarWhereInput[];
};
export type TransmittedDocumentUncheckedUpdateManyWithoutTransmittedByNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput> | Prisma.TransmittedDocumentCreateWithoutTransmittedByInput[] | Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput[];
    connectOrCreate?: Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput | Prisma.TransmittedDocumentCreateOrConnectWithoutTransmittedByInput[];
    upsert?: Prisma.TransmittedDocumentUpsertWithWhereUniqueWithoutTransmittedByInput | Prisma.TransmittedDocumentUpsertWithWhereUniqueWithoutTransmittedByInput[];
    createMany?: Prisma.TransmittedDocumentCreateManyTransmittedByInputEnvelope;
    set?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    disconnect?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    delete?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    connect?: Prisma.TransmittedDocumentWhereUniqueInput | Prisma.TransmittedDocumentWhereUniqueInput[];
    update?: Prisma.TransmittedDocumentUpdateWithWhereUniqueWithoutTransmittedByInput | Prisma.TransmittedDocumentUpdateWithWhereUniqueWithoutTransmittedByInput[];
    updateMany?: Prisma.TransmittedDocumentUpdateManyWithWhereWithoutTransmittedByInput | Prisma.TransmittedDocumentUpdateManyWithWhereWithoutTransmittedByInput[];
    deleteMany?: Prisma.TransmittedDocumentScalarWhereInput | Prisma.TransmittedDocumentScalarWhereInput[];
};
export type TransmittedDocumentCreateNestedOneWithoutRecipientsInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutRecipientsInput, Prisma.TransmittedDocumentUncheckedCreateWithoutRecipientsInput>;
    connectOrCreate?: Prisma.TransmittedDocumentCreateOrConnectWithoutRecipientsInput;
    connect?: Prisma.TransmittedDocumentWhereUniqueInput;
};
export type TransmittedDocumentUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutRecipientsInput, Prisma.TransmittedDocumentUncheckedCreateWithoutRecipientsInput>;
    connectOrCreate?: Prisma.TransmittedDocumentCreateOrConnectWithoutRecipientsInput;
    upsert?: Prisma.TransmittedDocumentUpsertWithoutRecipientsInput;
    connect?: Prisma.TransmittedDocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransmittedDocumentUpdateToOneWithWhereWithoutRecipientsInput, Prisma.TransmittedDocumentUpdateWithoutRecipientsInput>, Prisma.TransmittedDocumentUncheckedUpdateWithoutRecipientsInput>;
};
export type TransmittedDocumentCreateWithoutTransmittedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    createdAt?: Date | string;
    recipients?: Prisma.TransmittedDocumentRecipientCreateNestedManyWithoutDocumentInput;
};
export type TransmittedDocumentUncheckedCreateWithoutTransmittedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    createdAt?: Date | string;
    recipients?: Prisma.TransmittedDocumentRecipientUncheckedCreateNestedManyWithoutDocumentInput;
};
export type TransmittedDocumentCreateOrConnectWithoutTransmittedByInput = {
    where: Prisma.TransmittedDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput>;
};
export type TransmittedDocumentCreateManyTransmittedByInputEnvelope = {
    data: Prisma.TransmittedDocumentCreateManyTransmittedByInput | Prisma.TransmittedDocumentCreateManyTransmittedByInput[];
    skipDuplicates?: boolean;
};
export type TransmittedDocumentUpsertWithWhereUniqueWithoutTransmittedByInput = {
    where: Prisma.TransmittedDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransmittedDocumentUpdateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedUpdateWithoutTransmittedByInput>;
    create: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedCreateWithoutTransmittedByInput>;
};
export type TransmittedDocumentUpdateWithWhereUniqueWithoutTransmittedByInput = {
    where: Prisma.TransmittedDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentUpdateWithoutTransmittedByInput, Prisma.TransmittedDocumentUncheckedUpdateWithoutTransmittedByInput>;
};
export type TransmittedDocumentUpdateManyWithWhereWithoutTransmittedByInput = {
    where: Prisma.TransmittedDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentUpdateManyMutationInput, Prisma.TransmittedDocumentUncheckedUpdateManyWithoutTransmittedByInput>;
};
export type TransmittedDocumentScalarWhereInput = {
    AND?: Prisma.TransmittedDocumentScalarWhereInput | Prisma.TransmittedDocumentScalarWhereInput[];
    OR?: Prisma.TransmittedDocumentScalarWhereInput[];
    NOT?: Prisma.TransmittedDocumentScalarWhereInput | Prisma.TransmittedDocumentScalarWhereInput[];
    id?: Prisma.UuidFilter<"TransmittedDocument"> | string;
    title?: Prisma.StringFilter<"TransmittedDocument"> | string;
    fileReference?: Prisma.StringFilter<"TransmittedDocument"> | string;
    docType?: Prisma.StringNullableFilter<"TransmittedDocument"> | string | null;
    transmittedByUserId?: Prisma.UuidFilter<"TransmittedDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"TransmittedDocument"> | Date | string;
};
export type TransmittedDocumentCreateWithoutRecipientsInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    createdAt?: Date | string;
    transmittedBy: Prisma.AppUserCreateNestedOneWithoutTransmittedDocumentsSentInput;
};
export type TransmittedDocumentUncheckedCreateWithoutRecipientsInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    transmittedByUserId: string;
    createdAt?: Date | string;
};
export type TransmittedDocumentCreateOrConnectWithoutRecipientsInput = {
    where: Prisma.TransmittedDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutRecipientsInput, Prisma.TransmittedDocumentUncheckedCreateWithoutRecipientsInput>;
};
export type TransmittedDocumentUpsertWithoutRecipientsInput = {
    update: Prisma.XOR<Prisma.TransmittedDocumentUpdateWithoutRecipientsInput, Prisma.TransmittedDocumentUncheckedUpdateWithoutRecipientsInput>;
    create: Prisma.XOR<Prisma.TransmittedDocumentCreateWithoutRecipientsInput, Prisma.TransmittedDocumentUncheckedCreateWithoutRecipientsInput>;
    where?: Prisma.TransmittedDocumentWhereInput;
};
export type TransmittedDocumentUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: Prisma.TransmittedDocumentWhereInput;
    data: Prisma.XOR<Prisma.TransmittedDocumentUpdateWithoutRecipientsInput, Prisma.TransmittedDocumentUncheckedUpdateWithoutRecipientsInput>;
};
export type TransmittedDocumentUpdateWithoutRecipientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transmittedBy?: Prisma.AppUserUpdateOneRequiredWithoutTransmittedDocumentsSentNestedInput;
};
export type TransmittedDocumentUncheckedUpdateWithoutRecipientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transmittedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentCreateManyTransmittedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    docType?: string | null;
    createdAt?: Date | string;
};
export type TransmittedDocumentUpdateWithoutTransmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recipients?: Prisma.TransmittedDocumentRecipientUpdateManyWithoutDocumentNestedInput;
};
export type TransmittedDocumentUncheckedUpdateWithoutTransmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recipients?: Prisma.TransmittedDocumentRecipientUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type TransmittedDocumentUncheckedUpdateManyWithoutTransmittedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    docType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransmittedDocumentCountOutputType = {
    recipients: number;
};
export type TransmittedDocumentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recipients?: boolean | TransmittedDocumentCountOutputTypeCountRecipientsArgs;
};
export type TransmittedDocumentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentCountOutputTypeSelect<ExtArgs> | null;
};
export type TransmittedDocumentCountOutputTypeCountRecipientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransmittedDocumentRecipientWhereInput;
};
export type TransmittedDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    docType?: boolean;
    transmittedByUserId?: boolean;
    createdAt?: boolean;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    recipients?: boolean | Prisma.TransmittedDocument$recipientsArgs<ExtArgs>;
    _count?: boolean | Prisma.TransmittedDocumentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transmittedDocument"]>;
export type TransmittedDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    docType?: boolean;
    transmittedByUserId?: boolean;
    createdAt?: boolean;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transmittedDocument"]>;
export type TransmittedDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    docType?: boolean;
    transmittedByUserId?: boolean;
    createdAt?: boolean;
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transmittedDocument"]>;
export type TransmittedDocumentSelectScalar = {
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    docType?: boolean;
    transmittedByUserId?: boolean;
    createdAt?: boolean;
};
export type TransmittedDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "fileReference" | "docType" | "transmittedByUserId" | "createdAt", ExtArgs["result"]["transmittedDocument"]>;
export type TransmittedDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    recipients?: boolean | Prisma.TransmittedDocument$recipientsArgs<ExtArgs>;
    _count?: boolean | Prisma.TransmittedDocumentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TransmittedDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type TransmittedDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transmittedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $TransmittedDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TransmittedDocument";
    objects: {
        transmittedBy: Prisma.$AppUserPayload<ExtArgs>;
        recipients: Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        fileReference: string;
        docType: string | null;
        transmittedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["transmittedDocument"]>;
    composites: {};
};
export type TransmittedDocumentGetPayload<S extends boolean | null | undefined | TransmittedDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload, S>;
export type TransmittedDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransmittedDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransmittedDocumentCountAggregateInputType | true;
};
export interface TransmittedDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TransmittedDocument'];
        meta: {
            name: 'TransmittedDocument';
        };
    };
    findUnique<T extends TransmittedDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransmittedDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransmittedDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransmittedDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransmittedDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransmittedDocumentCreateArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransmittedDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransmittedDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransmittedDocumentDeleteArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransmittedDocumentUpdateArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransmittedDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransmittedDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransmittedDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransmittedDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransmittedDocumentUpsertArgs>(args: Prisma.SelectSubset<T, TransmittedDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__TransmittedDocumentClient<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransmittedDocumentCountArgs>(args?: Prisma.Subset<T, TransmittedDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransmittedDocumentCountAggregateOutputType> : number>;
    aggregate<T extends TransmittedDocumentAggregateArgs>(args: Prisma.Subset<T, TransmittedDocumentAggregateArgs>): Prisma.PrismaPromise<GetTransmittedDocumentAggregateType<T>>;
    groupBy<T extends TransmittedDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransmittedDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: TransmittedDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransmittedDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransmittedDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransmittedDocumentFieldRefs;
}
export interface Prisma__TransmittedDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transmittedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recipients<T extends Prisma.TransmittedDocument$recipientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransmittedDocument$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransmittedDocumentRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransmittedDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"TransmittedDocument", 'String'>;
    readonly title: Prisma.FieldRef<"TransmittedDocument", 'String'>;
    readonly fileReference: Prisma.FieldRef<"TransmittedDocument", 'String'>;
    readonly docType: Prisma.FieldRef<"TransmittedDocument", 'String'>;
    readonly transmittedByUserId: Prisma.FieldRef<"TransmittedDocument", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TransmittedDocument", 'DateTime'>;
}
export type TransmittedDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentWhereUniqueInput;
};
export type TransmittedDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentWhereUniqueInput;
};
export type TransmittedDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    where?: Prisma.TransmittedDocumentWhereInput;
    orderBy?: Prisma.TransmittedDocumentOrderByWithRelationInput | Prisma.TransmittedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransmittedDocumentScalarFieldEnum | Prisma.TransmittedDocumentScalarFieldEnum[];
};
export type TransmittedDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    where?: Prisma.TransmittedDocumentWhereInput;
    orderBy?: Prisma.TransmittedDocumentOrderByWithRelationInput | Prisma.TransmittedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransmittedDocumentScalarFieldEnum | Prisma.TransmittedDocumentScalarFieldEnum[];
};
export type TransmittedDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    where?: Prisma.TransmittedDocumentWhereInput;
    orderBy?: Prisma.TransmittedDocumentOrderByWithRelationInput | Prisma.TransmittedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.TransmittedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransmittedDocumentScalarFieldEnum | Prisma.TransmittedDocumentScalarFieldEnum[];
};
export type TransmittedDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransmittedDocumentCreateInput, Prisma.TransmittedDocumentUncheckedCreateInput>;
};
export type TransmittedDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransmittedDocumentCreateManyInput | Prisma.TransmittedDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransmittedDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    data: Prisma.TransmittedDocumentCreateManyInput | Prisma.TransmittedDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TransmittedDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TransmittedDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransmittedDocumentUpdateInput, Prisma.TransmittedDocumentUncheckedUpdateInput>;
    where: Prisma.TransmittedDocumentWhereUniqueInput;
};
export type TransmittedDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransmittedDocumentUpdateManyMutationInput, Prisma.TransmittedDocumentUncheckedUpdateManyInput>;
    where?: Prisma.TransmittedDocumentWhereInput;
    limit?: number;
};
export type TransmittedDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransmittedDocumentUpdateManyMutationInput, Prisma.TransmittedDocumentUncheckedUpdateManyInput>;
    where?: Prisma.TransmittedDocumentWhereInput;
    limit?: number;
    include?: Prisma.TransmittedDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TransmittedDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransmittedDocumentCreateInput, Prisma.TransmittedDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransmittedDocumentUpdateInput, Prisma.TransmittedDocumentUncheckedUpdateInput>;
};
export type TransmittedDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
    where: Prisma.TransmittedDocumentWhereUniqueInput;
};
export type TransmittedDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransmittedDocumentWhereInput;
    limit?: number;
};
export type TransmittedDocument$recipientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TransmittedDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransmittedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.TransmittedDocumentOmit<ExtArgs> | null;
    include?: Prisma.TransmittedDocumentInclude<ExtArgs> | null;
};
