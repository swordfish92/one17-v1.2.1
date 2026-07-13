import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoardMinutesModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardMinutesPayload>;
export type AggregateBoardMinutes = {
    _count: BoardMinutesCountAggregateOutputType | null;
    _min: BoardMinutesMinAggregateOutputType | null;
    _max: BoardMinutesMaxAggregateOutputType | null;
};
export type BoardMinutesMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    fileReference: string | null;
    committeeTag: string | null;
    uploadedByUserId: string | null;
    createdAt: Date | null;
};
export type BoardMinutesMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    fileReference: string | null;
    committeeTag: string | null;
    uploadedByUserId: string | null;
    createdAt: Date | null;
};
export type BoardMinutesCountAggregateOutputType = {
    id: number;
    title: number;
    fileReference: number;
    committeeTag: number;
    uploadedByUserId: number;
    createdAt: number;
    _all: number;
};
export type BoardMinutesMinAggregateInputType = {
    id?: true;
    title?: true;
    fileReference?: true;
    committeeTag?: true;
    uploadedByUserId?: true;
    createdAt?: true;
};
export type BoardMinutesMaxAggregateInputType = {
    id?: true;
    title?: true;
    fileReference?: true;
    committeeTag?: true;
    uploadedByUserId?: true;
    createdAt?: true;
};
export type BoardMinutesCountAggregateInputType = {
    id?: true;
    title?: true;
    fileReference?: true;
    committeeTag?: true;
    uploadedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type BoardMinutesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardMinutesWhereInput;
    orderBy?: Prisma.BoardMinutesOrderByWithRelationInput | Prisma.BoardMinutesOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardMinutesCountAggregateInputType;
    _min?: BoardMinutesMinAggregateInputType;
    _max?: BoardMinutesMaxAggregateInputType;
};
export type GetBoardMinutesAggregateType<T extends BoardMinutesAggregateArgs> = {
    [P in keyof T & keyof AggregateBoardMinutes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoardMinutes[P]> : Prisma.GetScalarType<T[P], AggregateBoardMinutes[P]>;
};
export type BoardMinutesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardMinutesWhereInput;
    orderBy?: Prisma.BoardMinutesOrderByWithAggregationInput | Prisma.BoardMinutesOrderByWithAggregationInput[];
    by: Prisma.BoardMinutesScalarFieldEnum[] | Prisma.BoardMinutesScalarFieldEnum;
    having?: Prisma.BoardMinutesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardMinutesCountAggregateInputType | true;
    _min?: BoardMinutesMinAggregateInputType;
    _max?: BoardMinutesMaxAggregateInputType;
};
export type BoardMinutesGroupByOutputType = {
    id: string;
    title: string;
    fileReference: string;
    committeeTag: string | null;
    uploadedByUserId: string;
    createdAt: Date;
    _count: BoardMinutesCountAggregateOutputType | null;
    _min: BoardMinutesMinAggregateOutputType | null;
    _max: BoardMinutesMaxAggregateOutputType | null;
};
export type GetBoardMinutesGroupByPayload<T extends BoardMinutesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardMinutesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardMinutesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardMinutesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardMinutesGroupByOutputType[P]>;
}>>;
export type BoardMinutesWhereInput = {
    AND?: Prisma.BoardMinutesWhereInput | Prisma.BoardMinutesWhereInput[];
    OR?: Prisma.BoardMinutesWhereInput[];
    NOT?: Prisma.BoardMinutesWhereInput | Prisma.BoardMinutesWhereInput[];
    id?: Prisma.UuidFilter<"BoardMinutes"> | string;
    title?: Prisma.StringFilter<"BoardMinutes"> | string;
    fileReference?: Prisma.StringFilter<"BoardMinutes"> | string;
    committeeTag?: Prisma.StringNullableFilter<"BoardMinutes"> | string | null;
    uploadedByUserId?: Prisma.UuidFilter<"BoardMinutes"> | string;
    createdAt?: Prisma.DateTimeFilter<"BoardMinutes"> | Date | string;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    transmissions?: Prisma.BoardMinutesTransmissionListRelationFilter;
};
export type BoardMinutesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    uploadedBy?: Prisma.AppUserOrderByWithRelationInput;
    transmissions?: Prisma.BoardMinutesTransmissionOrderByRelationAggregateInput;
};
export type BoardMinutesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BoardMinutesWhereInput | Prisma.BoardMinutesWhereInput[];
    OR?: Prisma.BoardMinutesWhereInput[];
    NOT?: Prisma.BoardMinutesWhereInput | Prisma.BoardMinutesWhereInput[];
    title?: Prisma.StringFilter<"BoardMinutes"> | string;
    fileReference?: Prisma.StringFilter<"BoardMinutes"> | string;
    committeeTag?: Prisma.StringNullableFilter<"BoardMinutes"> | string | null;
    uploadedByUserId?: Prisma.UuidFilter<"BoardMinutes"> | string;
    createdAt?: Prisma.DateTimeFilter<"BoardMinutes"> | Date | string;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    transmissions?: Prisma.BoardMinutesTransmissionListRelationFilter;
}, "id">;
export type BoardMinutesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BoardMinutesCountOrderByAggregateInput;
    _max?: Prisma.BoardMinutesMaxOrderByAggregateInput;
    _min?: Prisma.BoardMinutesMinOrderByAggregateInput;
};
export type BoardMinutesScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardMinutesScalarWhereWithAggregatesInput | Prisma.BoardMinutesScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardMinutesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardMinutesScalarWhereWithAggregatesInput | Prisma.BoardMinutesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BoardMinutes"> | string;
    title?: Prisma.StringWithAggregatesFilter<"BoardMinutes"> | string;
    fileReference?: Prisma.StringWithAggregatesFilter<"BoardMinutes"> | string;
    committeeTag?: Prisma.StringNullableWithAggregatesFilter<"BoardMinutes"> | string | null;
    uploadedByUserId?: Prisma.UuidWithAggregatesFilter<"BoardMinutes"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BoardMinutes"> | Date | string;
};
export type BoardMinutesCreateInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    createdAt?: Date | string;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutBoardMinutesUploadedInput;
    transmissions?: Prisma.BoardMinutesTransmissionCreateNestedManyWithoutMinutesInput;
};
export type BoardMinutesUncheckedCreateInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
    transmissions?: Prisma.BoardMinutesTransmissionUncheckedCreateNestedManyWithoutMinutesInput;
};
export type BoardMinutesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesUploadedNestedInput;
    transmissions?: Prisma.BoardMinutesTransmissionUpdateManyWithoutMinutesNestedInput;
};
export type BoardMinutesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transmissions?: Prisma.BoardMinutesTransmissionUncheckedUpdateManyWithoutMinutesNestedInput;
};
export type BoardMinutesCreateManyInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BoardMinutesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardMinutesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardMinutesListRelationFilter = {
    every?: Prisma.BoardMinutesWhereInput;
    some?: Prisma.BoardMinutesWhereInput;
    none?: Prisma.BoardMinutesWhereInput;
};
export type BoardMinutesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BoardMinutesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardMinutesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardMinutesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    committeeTag?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardMinutesScalarRelationFilter = {
    is?: Prisma.BoardMinutesWhereInput;
    isNot?: Prisma.BoardMinutesWhereInput;
};
export type BoardMinutesCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesCreateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput> | Prisma.BoardMinutesCreateWithoutUploadedByInput[] | Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput | Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.BoardMinutesCreateManyUploadedByInputEnvelope;
    connect?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
};
export type BoardMinutesUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesCreateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput> | Prisma.BoardMinutesCreateWithoutUploadedByInput[] | Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput | Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.BoardMinutesCreateManyUploadedByInputEnvelope;
    connect?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
};
export type BoardMinutesUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesCreateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput> | Prisma.BoardMinutesCreateWithoutUploadedByInput[] | Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput | Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.BoardMinutesUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.BoardMinutesUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.BoardMinutesCreateManyUploadedByInputEnvelope;
    set?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    delete?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    connect?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    update?: Prisma.BoardMinutesUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.BoardMinutesUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.BoardMinutesUpdateManyWithWhereWithoutUploadedByInput | Prisma.BoardMinutesUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.BoardMinutesScalarWhereInput | Prisma.BoardMinutesScalarWhereInput[];
};
export type BoardMinutesUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesCreateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput> | Prisma.BoardMinutesCreateWithoutUploadedByInput[] | Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput | Prisma.BoardMinutesCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.BoardMinutesUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.BoardMinutesUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.BoardMinutesCreateManyUploadedByInputEnvelope;
    set?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    disconnect?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    delete?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    connect?: Prisma.BoardMinutesWhereUniqueInput | Prisma.BoardMinutesWhereUniqueInput[];
    update?: Prisma.BoardMinutesUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.BoardMinutesUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.BoardMinutesUpdateManyWithWhereWithoutUploadedByInput | Prisma.BoardMinutesUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.BoardMinutesScalarWhereInput | Prisma.BoardMinutesScalarWhereInput[];
};
export type BoardMinutesCreateNestedOneWithoutTransmissionsInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesCreateWithoutTransmissionsInput, Prisma.BoardMinutesUncheckedCreateWithoutTransmissionsInput>;
    connectOrCreate?: Prisma.BoardMinutesCreateOrConnectWithoutTransmissionsInput;
    connect?: Prisma.BoardMinutesWhereUniqueInput;
};
export type BoardMinutesUpdateOneRequiredWithoutTransmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.BoardMinutesCreateWithoutTransmissionsInput, Prisma.BoardMinutesUncheckedCreateWithoutTransmissionsInput>;
    connectOrCreate?: Prisma.BoardMinutesCreateOrConnectWithoutTransmissionsInput;
    upsert?: Prisma.BoardMinutesUpsertWithoutTransmissionsInput;
    connect?: Prisma.BoardMinutesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardMinutesUpdateToOneWithWhereWithoutTransmissionsInput, Prisma.BoardMinutesUpdateWithoutTransmissionsInput>, Prisma.BoardMinutesUncheckedUpdateWithoutTransmissionsInput>;
};
export type BoardMinutesCreateWithoutUploadedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    createdAt?: Date | string;
    transmissions?: Prisma.BoardMinutesTransmissionCreateNestedManyWithoutMinutesInput;
};
export type BoardMinutesUncheckedCreateWithoutUploadedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    createdAt?: Date | string;
    transmissions?: Prisma.BoardMinutesTransmissionUncheckedCreateNestedManyWithoutMinutesInput;
};
export type BoardMinutesCreateOrConnectWithoutUploadedByInput = {
    where: Prisma.BoardMinutesWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardMinutesCreateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput>;
};
export type BoardMinutesCreateManyUploadedByInputEnvelope = {
    data: Prisma.BoardMinutesCreateManyUploadedByInput | Prisma.BoardMinutesCreateManyUploadedByInput[];
    skipDuplicates?: boolean;
};
export type BoardMinutesUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.BoardMinutesWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardMinutesUpdateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedUpdateWithoutUploadedByInput>;
    create: Prisma.XOR<Prisma.BoardMinutesCreateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedCreateWithoutUploadedByInput>;
};
export type BoardMinutesUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.BoardMinutesWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardMinutesUpdateWithoutUploadedByInput, Prisma.BoardMinutesUncheckedUpdateWithoutUploadedByInput>;
};
export type BoardMinutesUpdateManyWithWhereWithoutUploadedByInput = {
    where: Prisma.BoardMinutesScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardMinutesUpdateManyMutationInput, Prisma.BoardMinutesUncheckedUpdateManyWithoutUploadedByInput>;
};
export type BoardMinutesScalarWhereInput = {
    AND?: Prisma.BoardMinutesScalarWhereInput | Prisma.BoardMinutesScalarWhereInput[];
    OR?: Prisma.BoardMinutesScalarWhereInput[];
    NOT?: Prisma.BoardMinutesScalarWhereInput | Prisma.BoardMinutesScalarWhereInput[];
    id?: Prisma.UuidFilter<"BoardMinutes"> | string;
    title?: Prisma.StringFilter<"BoardMinutes"> | string;
    fileReference?: Prisma.StringFilter<"BoardMinutes"> | string;
    committeeTag?: Prisma.StringNullableFilter<"BoardMinutes"> | string | null;
    uploadedByUserId?: Prisma.UuidFilter<"BoardMinutes"> | string;
    createdAt?: Prisma.DateTimeFilter<"BoardMinutes"> | Date | string;
};
export type BoardMinutesCreateWithoutTransmissionsInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    createdAt?: Date | string;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutBoardMinutesUploadedInput;
};
export type BoardMinutesUncheckedCreateWithoutTransmissionsInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type BoardMinutesCreateOrConnectWithoutTransmissionsInput = {
    where: Prisma.BoardMinutesWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardMinutesCreateWithoutTransmissionsInput, Prisma.BoardMinutesUncheckedCreateWithoutTransmissionsInput>;
};
export type BoardMinutesUpsertWithoutTransmissionsInput = {
    update: Prisma.XOR<Prisma.BoardMinutesUpdateWithoutTransmissionsInput, Prisma.BoardMinutesUncheckedUpdateWithoutTransmissionsInput>;
    create: Prisma.XOR<Prisma.BoardMinutesCreateWithoutTransmissionsInput, Prisma.BoardMinutesUncheckedCreateWithoutTransmissionsInput>;
    where?: Prisma.BoardMinutesWhereInput;
};
export type BoardMinutesUpdateToOneWithWhereWithoutTransmissionsInput = {
    where?: Prisma.BoardMinutesWhereInput;
    data: Prisma.XOR<Prisma.BoardMinutesUpdateWithoutTransmissionsInput, Prisma.BoardMinutesUncheckedUpdateWithoutTransmissionsInput>;
};
export type BoardMinutesUpdateWithoutTransmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutBoardMinutesUploadedNestedInput;
};
export type BoardMinutesUncheckedUpdateWithoutTransmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardMinutesCreateManyUploadedByInput = {
    id?: string;
    title: string;
    fileReference: string;
    committeeTag?: string | null;
    createdAt?: Date | string;
};
export type BoardMinutesUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transmissions?: Prisma.BoardMinutesTransmissionUpdateManyWithoutMinutesNestedInput;
};
export type BoardMinutesUncheckedUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transmissions?: Prisma.BoardMinutesTransmissionUncheckedUpdateManyWithoutMinutesNestedInput;
};
export type BoardMinutesUncheckedUpdateManyWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    committeeTag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardMinutesCountOutputType = {
    transmissions: number;
};
export type BoardMinutesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transmissions?: boolean | BoardMinutesCountOutputTypeCountTransmissionsArgs;
};
export type BoardMinutesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesCountOutputTypeSelect<ExtArgs> | null;
};
export type BoardMinutesCountOutputTypeCountTransmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardMinutesTransmissionWhereInput;
};
export type BoardMinutesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    committeeTag?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmissions?: boolean | Prisma.BoardMinutes$transmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardMinutesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardMinutes"]>;
export type BoardMinutesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    committeeTag?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardMinutes"]>;
export type BoardMinutesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    committeeTag?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boardMinutes"]>;
export type BoardMinutesSelectScalar = {
    id?: boolean;
    title?: boolean;
    fileReference?: boolean;
    committeeTag?: boolean;
    uploadedByUserId?: boolean;
    createdAt?: boolean;
};
export type BoardMinutesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "fileReference" | "committeeTag" | "uploadedByUserId" | "createdAt", ExtArgs["result"]["boardMinutes"]>;
export type BoardMinutesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    transmissions?: boolean | Prisma.BoardMinutes$transmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardMinutesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BoardMinutesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type BoardMinutesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $BoardMinutesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BoardMinutes";
    objects: {
        uploadedBy: Prisma.$AppUserPayload<ExtArgs>;
        transmissions: Prisma.$BoardMinutesTransmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        fileReference: string;
        committeeTag: string | null;
        uploadedByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["boardMinutes"]>;
    composites: {};
};
export type BoardMinutesGetPayload<S extends boolean | null | undefined | BoardMinutesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload, S>;
export type BoardMinutesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardMinutesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardMinutesCountAggregateInputType | true;
};
export interface BoardMinutesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BoardMinutes'];
        meta: {
            name: 'BoardMinutes';
        };
    };
    findUnique<T extends BoardMinutesFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardMinutesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardMinutesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardMinutesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardMinutesFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardMinutesFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardMinutesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardMinutesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardMinutesFindManyArgs>(args?: Prisma.SelectSubset<T, BoardMinutesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardMinutesCreateArgs>(args: Prisma.SelectSubset<T, BoardMinutesCreateArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardMinutesCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardMinutesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoardMinutesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardMinutesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoardMinutesDeleteArgs>(args: Prisma.SelectSubset<T, BoardMinutesDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardMinutesUpdateArgs>(args: Prisma.SelectSubset<T, BoardMinutesUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardMinutesDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardMinutesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardMinutesUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardMinutesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoardMinutesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardMinutesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoardMinutesUpsertArgs>(args: Prisma.SelectSubset<T, BoardMinutesUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardMinutesClient<runtime.Types.Result.GetResult<Prisma.$BoardMinutesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardMinutesCountArgs>(args?: Prisma.Subset<T, BoardMinutesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardMinutesCountAggregateOutputType> : number>;
    aggregate<T extends BoardMinutesAggregateArgs>(args: Prisma.Subset<T, BoardMinutesAggregateArgs>): Prisma.PrismaPromise<GetBoardMinutesAggregateType<T>>;
    groupBy<T extends BoardMinutesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardMinutesGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardMinutesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardMinutesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardMinutesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardMinutesFieldRefs;
}
export interface Prisma__BoardMinutesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    uploadedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transmissions<T extends Prisma.BoardMinutes$transmissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardMinutes$transmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardMinutesTransmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardMinutesFieldRefs {
    readonly id: Prisma.FieldRef<"BoardMinutes", 'String'>;
    readonly title: Prisma.FieldRef<"BoardMinutes", 'String'>;
    readonly fileReference: Prisma.FieldRef<"BoardMinutes", 'String'>;
    readonly committeeTag: Prisma.FieldRef<"BoardMinutes", 'String'>;
    readonly uploadedByUserId: Prisma.FieldRef<"BoardMinutes", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BoardMinutes", 'DateTime'>;
}
export type BoardMinutesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesWhereUniqueInput;
};
export type BoardMinutesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesWhereUniqueInput;
};
export type BoardMinutesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    where?: Prisma.BoardMinutesWhereInput;
    orderBy?: Prisma.BoardMinutesOrderByWithRelationInput | Prisma.BoardMinutesOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardMinutesScalarFieldEnum | Prisma.BoardMinutesScalarFieldEnum[];
};
export type BoardMinutesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    where?: Prisma.BoardMinutesWhereInput;
    orderBy?: Prisma.BoardMinutesOrderByWithRelationInput | Prisma.BoardMinutesOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardMinutesScalarFieldEnum | Prisma.BoardMinutesScalarFieldEnum[];
};
export type BoardMinutesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    where?: Prisma.BoardMinutesWhereInput;
    orderBy?: Prisma.BoardMinutesOrderByWithRelationInput | Prisma.BoardMinutesOrderByWithRelationInput[];
    cursor?: Prisma.BoardMinutesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardMinutesScalarFieldEnum | Prisma.BoardMinutesScalarFieldEnum[];
};
export type BoardMinutesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardMinutesCreateInput, Prisma.BoardMinutesUncheckedCreateInput>;
};
export type BoardMinutesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardMinutesCreateManyInput | Prisma.BoardMinutesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardMinutesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    data: Prisma.BoardMinutesCreateManyInput | Prisma.BoardMinutesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BoardMinutesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BoardMinutesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardMinutesUpdateInput, Prisma.BoardMinutesUncheckedUpdateInput>;
    where: Prisma.BoardMinutesWhereUniqueInput;
};
export type BoardMinutesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardMinutesUpdateManyMutationInput, Prisma.BoardMinutesUncheckedUpdateManyInput>;
    where?: Prisma.BoardMinutesWhereInput;
    limit?: number;
};
export type BoardMinutesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardMinutesUpdateManyMutationInput, Prisma.BoardMinutesUncheckedUpdateManyInput>;
    where?: Prisma.BoardMinutesWhereInput;
    limit?: number;
    include?: Prisma.BoardMinutesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BoardMinutesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardMinutesCreateInput, Prisma.BoardMinutesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardMinutesUpdateInput, Prisma.BoardMinutesUncheckedUpdateInput>;
};
export type BoardMinutesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
    where: Prisma.BoardMinutesWhereUniqueInput;
};
export type BoardMinutesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardMinutesWhereInput;
    limit?: number;
};
export type BoardMinutes$transmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BoardMinutesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardMinutesSelect<ExtArgs> | null;
    omit?: Prisma.BoardMinutesOmit<ExtArgs> | null;
    include?: Prisma.BoardMinutesInclude<ExtArgs> | null;
};
