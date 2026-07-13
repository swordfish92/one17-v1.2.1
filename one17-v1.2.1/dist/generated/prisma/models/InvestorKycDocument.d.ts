import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorKycDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorKycDocumentPayload>;
export type AggregateInvestorKycDocument = {
    _count: InvestorKycDocumentCountAggregateOutputType | null;
    _min: InvestorKycDocumentMinAggregateOutputType | null;
    _max: InvestorKycDocumentMaxAggregateOutputType | null;
};
export type InvestorKycDocumentMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    documentType: string | null;
    documentNumber: string | null;
    fileReference: string | null;
    issuedDate: Date | null;
    expiryDate: Date | null;
    verificationStatus: $Enums.DocumentVerificationStatus | null;
    uploadedByUserId: string | null;
    verifiedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestorKycDocumentMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    documentType: string | null;
    documentNumber: string | null;
    fileReference: string | null;
    issuedDate: Date | null;
    expiryDate: Date | null;
    verificationStatus: $Enums.DocumentVerificationStatus | null;
    uploadedByUserId: string | null;
    verifiedByUserId: string | null;
    createdAt: Date | null;
};
export type InvestorKycDocumentCountAggregateOutputType = {
    id: number;
    investorId: number;
    documentType: number;
    documentNumber: number;
    fileReference: number;
    issuedDate: number;
    expiryDate: number;
    verificationStatus: number;
    uploadedByUserId: number;
    verifiedByUserId: number;
    createdAt: number;
    _all: number;
};
export type InvestorKycDocumentMinAggregateInputType = {
    id?: true;
    investorId?: true;
    documentType?: true;
    documentNumber?: true;
    fileReference?: true;
    issuedDate?: true;
    expiryDate?: true;
    verificationStatus?: true;
    uploadedByUserId?: true;
    verifiedByUserId?: true;
    createdAt?: true;
};
export type InvestorKycDocumentMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    documentType?: true;
    documentNumber?: true;
    fileReference?: true;
    issuedDate?: true;
    expiryDate?: true;
    verificationStatus?: true;
    uploadedByUserId?: true;
    verifiedByUserId?: true;
    createdAt?: true;
};
export type InvestorKycDocumentCountAggregateInputType = {
    id?: true;
    investorId?: true;
    documentType?: true;
    documentNumber?: true;
    fileReference?: true;
    issuedDate?: true;
    expiryDate?: true;
    verificationStatus?: true;
    uploadedByUserId?: true;
    verifiedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type InvestorKycDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorKycDocumentWhereInput;
    orderBy?: Prisma.InvestorKycDocumentOrderByWithRelationInput | Prisma.InvestorKycDocumentOrderByWithRelationInput[];
    cursor?: Prisma.InvestorKycDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorKycDocumentCountAggregateInputType;
    _min?: InvestorKycDocumentMinAggregateInputType;
    _max?: InvestorKycDocumentMaxAggregateInputType;
};
export type GetInvestorKycDocumentAggregateType<T extends InvestorKycDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorKycDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorKycDocument[P]> : Prisma.GetScalarType<T[P], AggregateInvestorKycDocument[P]>;
};
export type InvestorKycDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorKycDocumentWhereInput;
    orderBy?: Prisma.InvestorKycDocumentOrderByWithAggregationInput | Prisma.InvestorKycDocumentOrderByWithAggregationInput[];
    by: Prisma.InvestorKycDocumentScalarFieldEnum[] | Prisma.InvestorKycDocumentScalarFieldEnum;
    having?: Prisma.InvestorKycDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorKycDocumentCountAggregateInputType | true;
    _min?: InvestorKycDocumentMinAggregateInputType;
    _max?: InvestorKycDocumentMaxAggregateInputType;
};
export type InvestorKycDocumentGroupByOutputType = {
    id: string;
    investorId: string;
    documentType: string;
    documentNumber: string | null;
    fileReference: string;
    issuedDate: Date | null;
    expiryDate: Date | null;
    verificationStatus: $Enums.DocumentVerificationStatus;
    uploadedByUserId: string;
    verifiedByUserId: string | null;
    createdAt: Date;
    _count: InvestorKycDocumentCountAggregateOutputType | null;
    _min: InvestorKycDocumentMinAggregateOutputType | null;
    _max: InvestorKycDocumentMaxAggregateOutputType | null;
};
export type GetInvestorKycDocumentGroupByPayload<T extends InvestorKycDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorKycDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorKycDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorKycDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorKycDocumentGroupByOutputType[P]>;
}>>;
export type InvestorKycDocumentWhereInput = {
    AND?: Prisma.InvestorKycDocumentWhereInput | Prisma.InvestorKycDocumentWhereInput[];
    OR?: Prisma.InvestorKycDocumentWhereInput[];
    NOT?: Prisma.InvestorKycDocumentWhereInput | Prisma.InvestorKycDocumentWhereInput[];
    id?: Prisma.UuidFilter<"InvestorKycDocument"> | string;
    investorId?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    documentType?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    documentNumber?: Prisma.StringNullableFilter<"InvestorKycDocument"> | string | null;
    fileReference?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    issuedDate?: Prisma.DateTimeNullableFilter<"InvestorKycDocument"> | Date | string | null;
    expiryDate?: Prisma.DateTimeNullableFilter<"InvestorKycDocument"> | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFilter<"InvestorKycDocument"> | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.UuidFilter<"InvestorKycDocument"> | string;
    verifiedByUserId?: Prisma.UuidNullableFilter<"InvestorKycDocument"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorKycDocument"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    verifiedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type InvestorKycDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    issuedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiryDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    uploadedBy?: Prisma.AppUserOrderByWithRelationInput;
    verifiedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type InvestorKycDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvestorKycDocumentWhereInput | Prisma.InvestorKycDocumentWhereInput[];
    OR?: Prisma.InvestorKycDocumentWhereInput[];
    NOT?: Prisma.InvestorKycDocumentWhereInput | Prisma.InvestorKycDocumentWhereInput[];
    investorId?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    documentType?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    documentNumber?: Prisma.StringNullableFilter<"InvestorKycDocument"> | string | null;
    fileReference?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    issuedDate?: Prisma.DateTimeNullableFilter<"InvestorKycDocument"> | Date | string | null;
    expiryDate?: Prisma.DateTimeNullableFilter<"InvestorKycDocument"> | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFilter<"InvestorKycDocument"> | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.UuidFilter<"InvestorKycDocument"> | string;
    verifiedByUserId?: Prisma.UuidNullableFilter<"InvestorKycDocument"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorKycDocument"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    verifiedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type InvestorKycDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    issuedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiryDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorKycDocumentCountOrderByAggregateInput;
    _max?: Prisma.InvestorKycDocumentMaxOrderByAggregateInput;
    _min?: Prisma.InvestorKycDocumentMinOrderByAggregateInput;
};
export type InvestorKycDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorKycDocumentScalarWhereWithAggregatesInput | Prisma.InvestorKycDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorKycDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorKycDocumentScalarWhereWithAggregatesInput | Prisma.InvestorKycDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorKycDocument"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"InvestorKycDocument"> | string;
    documentType?: Prisma.StringWithAggregatesFilter<"InvestorKycDocument"> | string;
    documentNumber?: Prisma.StringNullableWithAggregatesFilter<"InvestorKycDocument"> | string | null;
    fileReference?: Prisma.StringWithAggregatesFilter<"InvestorKycDocument"> | string;
    issuedDate?: Prisma.DateTimeNullableWithAggregatesFilter<"InvestorKycDocument"> | Date | string | null;
    expiryDate?: Prisma.DateTimeNullableWithAggregatesFilter<"InvestorKycDocument"> | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusWithAggregatesFilter<"InvestorKycDocument"> | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.UuidWithAggregatesFilter<"InvestorKycDocument"> | string;
    verifiedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorKycDocument"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorKycDocument"> | Date | string;
};
export type InvestorKycDocumentCreateInput = {
    id?: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutKycDocumentsInput;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutKycDocumentsUploadedInput;
    verifiedBy?: Prisma.AppUserCreateNestedOneWithoutKycDocumentsVerifiedInput;
};
export type InvestorKycDocumentUncheckedCreateInput = {
    id?: string;
    investorId: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    uploadedByUserId: string;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorKycDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutKycDocumentsNestedInput;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutKycDocumentsUploadedNestedInput;
    verifiedBy?: Prisma.AppUserUpdateOneWithoutKycDocumentsVerifiedNestedInput;
};
export type InvestorKycDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentCreateManyInput = {
    id?: string;
    investorId: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    uploadedByUserId: string;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorKycDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentListRelationFilter = {
    every?: Prisma.InvestorKycDocumentWhereInput;
    some?: Prisma.InvestorKycDocumentWhereInput;
    none?: Prisma.InvestorKycDocumentWhereInput;
};
export type InvestorKycDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestorKycDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentNumber?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    issuedDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorKycDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentNumber?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    issuedDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorKycDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentNumber?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    issuedDate?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorKycDocumentCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput> | Prisma.InvestorKycDocumentCreateWithoutUploadedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyUploadedByInputEnvelope;
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
};
export type InvestorKycDocumentCreateNestedManyWithoutVerifiedByInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyVerifiedByInputEnvelope;
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
};
export type InvestorKycDocumentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput> | Prisma.InvestorKycDocumentCreateWithoutUploadedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyUploadedByInputEnvelope;
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
};
export type InvestorKycDocumentUncheckedCreateNestedManyWithoutVerifiedByInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyVerifiedByInputEnvelope;
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
};
export type InvestorKycDocumentUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput> | Prisma.InvestorKycDocumentCreateWithoutUploadedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyUploadedByInputEnvelope;
    set?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    disconnect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    delete?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    update?: Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutUploadedByInput | Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
};
export type InvestorKycDocumentUpdateManyWithoutVerifiedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput[];
    upsert?: Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyVerifiedByInputEnvelope;
    set?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    disconnect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    delete?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    update?: Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutVerifiedByInput[];
    updateMany?: Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutVerifiedByInput | Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutVerifiedByInput[];
    deleteMany?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
};
export type InvestorKycDocumentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput> | Prisma.InvestorKycDocumentCreateWithoutUploadedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyUploadedByInputEnvelope;
    set?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    disconnect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    delete?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    update?: Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutUploadedByInput | Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
};
export type InvestorKycDocumentUncheckedUpdateManyWithoutVerifiedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput[];
    upsert?: Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyVerifiedByInputEnvelope;
    set?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    disconnect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    delete?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    update?: Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutVerifiedByInput[];
    updateMany?: Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutVerifiedByInput | Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutVerifiedByInput[];
    deleteMany?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
};
export type InvestorKycDocumentCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput> | Prisma.InvestorKycDocumentCreateWithoutInvestorInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
};
export type InvestorKycDocumentUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput> | Prisma.InvestorKycDocumentCreateWithoutInvestorInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
};
export type InvestorKycDocumentUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput> | Prisma.InvestorKycDocumentCreateWithoutInvestorInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    disconnect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    delete?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    update?: Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
};
export type InvestorKycDocumentUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput> | Prisma.InvestorKycDocumentCreateWithoutInvestorInput[] | Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput | Prisma.InvestorKycDocumentCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorKycDocumentUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorKycDocumentCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    disconnect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    delete?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    connect?: Prisma.InvestorKycDocumentWhereUniqueInput | Prisma.InvestorKycDocumentWhereUniqueInput[];
    update?: Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorKycDocumentUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorKycDocumentUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
};
export type EnumDocumentVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentVerificationStatus;
};
export type InvestorKycDocumentCreateWithoutUploadedByInput = {
    id?: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutKycDocumentsInput;
    verifiedBy?: Prisma.AppUserCreateNestedOneWithoutKycDocumentsVerifiedInput;
};
export type InvestorKycDocumentUncheckedCreateWithoutUploadedByInput = {
    id?: string;
    investorId: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorKycDocumentCreateOrConnectWithoutUploadedByInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput>;
};
export type InvestorKycDocumentCreateManyUploadedByInputEnvelope = {
    data: Prisma.InvestorKycDocumentCreateManyUploadedByInput | Prisma.InvestorKycDocumentCreateManyUploadedByInput[];
    skipDuplicates?: boolean;
};
export type InvestorKycDocumentCreateWithoutVerifiedByInput = {
    id?: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutKycDocumentsInput;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutKycDocumentsUploadedInput;
};
export type InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput = {
    id?: string;
    investorId: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type InvestorKycDocumentCreateOrConnectWithoutVerifiedByInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput>;
};
export type InvestorKycDocumentCreateManyVerifiedByInputEnvelope = {
    data: Prisma.InvestorKycDocumentCreateManyVerifiedByInput | Prisma.InvestorKycDocumentCreateManyVerifiedByInput[];
    skipDuplicates?: boolean;
};
export type InvestorKycDocumentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorKycDocumentUpdateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedUpdateWithoutUploadedByInput>;
    create: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutUploadedByInput>;
};
export type InvestorKycDocumentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateWithoutUploadedByInput, Prisma.InvestorKycDocumentUncheckedUpdateWithoutUploadedByInput>;
};
export type InvestorKycDocumentUpdateManyWithWhereWithoutUploadedByInput = {
    where: Prisma.InvestorKycDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateManyMutationInput, Prisma.InvestorKycDocumentUncheckedUpdateManyWithoutUploadedByInput>;
};
export type InvestorKycDocumentScalarWhereInput = {
    AND?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
    OR?: Prisma.InvestorKycDocumentScalarWhereInput[];
    NOT?: Prisma.InvestorKycDocumentScalarWhereInput | Prisma.InvestorKycDocumentScalarWhereInput[];
    id?: Prisma.UuidFilter<"InvestorKycDocument"> | string;
    investorId?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    documentType?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    documentNumber?: Prisma.StringNullableFilter<"InvestorKycDocument"> | string | null;
    fileReference?: Prisma.StringFilter<"InvestorKycDocument"> | string;
    issuedDate?: Prisma.DateTimeNullableFilter<"InvestorKycDocument"> | Date | string | null;
    expiryDate?: Prisma.DateTimeNullableFilter<"InvestorKycDocument"> | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFilter<"InvestorKycDocument"> | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.UuidFilter<"InvestorKycDocument"> | string;
    verifiedByUserId?: Prisma.UuidNullableFilter<"InvestorKycDocument"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorKycDocument"> | Date | string;
};
export type InvestorKycDocumentUpsertWithWhereUniqueWithoutVerifiedByInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorKycDocumentUpdateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedUpdateWithoutVerifiedByInput>;
    create: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutVerifiedByInput>;
};
export type InvestorKycDocumentUpdateWithWhereUniqueWithoutVerifiedByInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateWithoutVerifiedByInput, Prisma.InvestorKycDocumentUncheckedUpdateWithoutVerifiedByInput>;
};
export type InvestorKycDocumentUpdateManyWithWhereWithoutVerifiedByInput = {
    where: Prisma.InvestorKycDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateManyMutationInput, Prisma.InvestorKycDocumentUncheckedUpdateManyWithoutVerifiedByInput>;
};
export type InvestorKycDocumentCreateWithoutInvestorInput = {
    id?: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutKycDocumentsUploadedInput;
    verifiedBy?: Prisma.AppUserCreateNestedOneWithoutKycDocumentsVerifiedInput;
};
export type InvestorKycDocumentUncheckedCreateWithoutInvestorInput = {
    id?: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    uploadedByUserId: string;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorKycDocumentCreateOrConnectWithoutInvestorInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput>;
};
export type InvestorKycDocumentCreateManyInvestorInputEnvelope = {
    data: Prisma.InvestorKycDocumentCreateManyInvestorInput | Prisma.InvestorKycDocumentCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type InvestorKycDocumentUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorKycDocumentUpdateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.InvestorKycDocumentCreateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedCreateWithoutInvestorInput>;
};
export type InvestorKycDocumentUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateWithoutInvestorInput, Prisma.InvestorKycDocumentUncheckedUpdateWithoutInvestorInput>;
};
export type InvestorKycDocumentUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.InvestorKycDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateManyMutationInput, Prisma.InvestorKycDocumentUncheckedUpdateManyWithoutInvestorInput>;
};
export type InvestorKycDocumentCreateManyUploadedByInput = {
    id?: string;
    investorId: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorKycDocumentCreateManyVerifiedByInput = {
    id?: string;
    investorId: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    uploadedByUserId: string;
    createdAt?: Date | string;
};
export type InvestorKycDocumentUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutKycDocumentsNestedInput;
    verifiedBy?: Prisma.AppUserUpdateOneWithoutKycDocumentsVerifiedNestedInput;
};
export type InvestorKycDocumentUncheckedUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentUpdateWithoutVerifiedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutKycDocumentsNestedInput;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutKycDocumentsUploadedNestedInput;
};
export type InvestorKycDocumentUncheckedUpdateWithoutVerifiedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentUncheckedUpdateManyWithoutVerifiedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentCreateManyInvestorInput = {
    id?: string;
    documentType: string;
    documentNumber?: string | null;
    fileReference: string;
    issuedDate?: Date | string | null;
    expiryDate?: Date | string | null;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    uploadedByUserId: string;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
};
export type InvestorKycDocumentUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutKycDocumentsUploadedNestedInput;
    verifiedBy?: Prisma.AppUserUpdateOneWithoutKycDocumentsVerifiedNestedInput;
};
export type InvestorKycDocumentUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorKycDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    documentType?: boolean;
    documentNumber?: boolean;
    fileReference?: boolean;
    issuedDate?: boolean;
    expiryDate?: boolean;
    verificationStatus?: boolean;
    uploadedByUserId?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs>;
}, ExtArgs["result"]["investorKycDocument"]>;
export type InvestorKycDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    documentType?: boolean;
    documentNumber?: boolean;
    fileReference?: boolean;
    issuedDate?: boolean;
    expiryDate?: boolean;
    verificationStatus?: boolean;
    uploadedByUserId?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs>;
}, ExtArgs["result"]["investorKycDocument"]>;
export type InvestorKycDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    documentType?: boolean;
    documentNumber?: boolean;
    fileReference?: boolean;
    issuedDate?: boolean;
    expiryDate?: boolean;
    verificationStatus?: boolean;
    uploadedByUserId?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs>;
}, ExtArgs["result"]["investorKycDocument"]>;
export type InvestorKycDocumentSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    documentType?: boolean;
    documentNumber?: boolean;
    fileReference?: boolean;
    issuedDate?: boolean;
    expiryDate?: boolean;
    verificationStatus?: boolean;
    uploadedByUserId?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
};
export type InvestorKycDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "documentType" | "documentNumber" | "fileReference" | "issuedDate" | "expiryDate" | "verificationStatus" | "uploadedByUserId" | "verifiedByUserId" | "createdAt", ExtArgs["result"]["investorKycDocument"]>;
export type InvestorKycDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs>;
};
export type InvestorKycDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs>;
};
export type InvestorKycDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs>;
};
export type $InvestorKycDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorKycDocument";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        uploadedBy: Prisma.$AppUserPayload<ExtArgs>;
        verifiedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        documentType: string;
        documentNumber: string | null;
        fileReference: string;
        issuedDate: Date | null;
        expiryDate: Date | null;
        verificationStatus: $Enums.DocumentVerificationStatus;
        uploadedByUserId: string;
        verifiedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["investorKycDocument"]>;
    composites: {};
};
export type InvestorKycDocumentGetPayload<S extends boolean | null | undefined | InvestorKycDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload, S>;
export type InvestorKycDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorKycDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorKycDocumentCountAggregateInputType | true;
};
export interface InvestorKycDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorKycDocument'];
        meta: {
            name: 'InvestorKycDocument';
        };
    };
    findUnique<T extends InvestorKycDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorKycDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorKycDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorKycDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorKycDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorKycDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorKycDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorKycDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorKycDocumentCreateArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorKycDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorKycDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorKycDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorKycDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorKycDocumentDeleteArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorKycDocumentUpdateArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorKycDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorKycDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorKycDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorKycDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorKycDocumentUpsertArgs>(args: Prisma.SelectSubset<T, InvestorKycDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorKycDocumentClient<runtime.Types.Result.GetResult<Prisma.$InvestorKycDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorKycDocumentCountArgs>(args?: Prisma.Subset<T, InvestorKycDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorKycDocumentCountAggregateOutputType> : number>;
    aggregate<T extends InvestorKycDocumentAggregateArgs>(args: Prisma.Subset<T, InvestorKycDocumentAggregateArgs>): Prisma.PrismaPromise<GetInvestorKycDocumentAggregateType<T>>;
    groupBy<T extends InvestorKycDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorKycDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorKycDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorKycDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorKycDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorKycDocumentFieldRefs;
}
export interface Prisma__InvestorKycDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    uploadedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    verifiedBy<T extends Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorKycDocument$verifiedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorKycDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorKycDocument", 'String'>;
    readonly investorId: Prisma.FieldRef<"InvestorKycDocument", 'String'>;
    readonly documentType: Prisma.FieldRef<"InvestorKycDocument", 'String'>;
    readonly documentNumber: Prisma.FieldRef<"InvestorKycDocument", 'String'>;
    readonly fileReference: Prisma.FieldRef<"InvestorKycDocument", 'String'>;
    readonly issuedDate: Prisma.FieldRef<"InvestorKycDocument", 'DateTime'>;
    readonly expiryDate: Prisma.FieldRef<"InvestorKycDocument", 'DateTime'>;
    readonly verificationStatus: Prisma.FieldRef<"InvestorKycDocument", 'DocumentVerificationStatus'>;
    readonly uploadedByUserId: Prisma.FieldRef<"InvestorKycDocument", 'String'>;
    readonly verifiedByUserId: Prisma.FieldRef<"InvestorKycDocument", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestorKycDocument", 'DateTime'>;
}
export type InvestorKycDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
};
export type InvestorKycDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
};
export type InvestorKycDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    where?: Prisma.InvestorKycDocumentWhereInput;
    orderBy?: Prisma.InvestorKycDocumentOrderByWithRelationInput | Prisma.InvestorKycDocumentOrderByWithRelationInput[];
    cursor?: Prisma.InvestorKycDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorKycDocumentScalarFieldEnum | Prisma.InvestorKycDocumentScalarFieldEnum[];
};
export type InvestorKycDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    where?: Prisma.InvestorKycDocumentWhereInput;
    orderBy?: Prisma.InvestorKycDocumentOrderByWithRelationInput | Prisma.InvestorKycDocumentOrderByWithRelationInput[];
    cursor?: Prisma.InvestorKycDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorKycDocumentScalarFieldEnum | Prisma.InvestorKycDocumentScalarFieldEnum[];
};
export type InvestorKycDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    where?: Prisma.InvestorKycDocumentWhereInput;
    orderBy?: Prisma.InvestorKycDocumentOrderByWithRelationInput | Prisma.InvestorKycDocumentOrderByWithRelationInput[];
    cursor?: Prisma.InvestorKycDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorKycDocumentScalarFieldEnum | Prisma.InvestorKycDocumentScalarFieldEnum[];
};
export type InvestorKycDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorKycDocumentCreateInput, Prisma.InvestorKycDocumentUncheckedCreateInput>;
};
export type InvestorKycDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorKycDocumentCreateManyInput | Prisma.InvestorKycDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorKycDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    data: Prisma.InvestorKycDocumentCreateManyInput | Prisma.InvestorKycDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestorKycDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestorKycDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateInput, Prisma.InvestorKycDocumentUncheckedUpdateInput>;
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
};
export type InvestorKycDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateManyMutationInput, Prisma.InvestorKycDocumentUncheckedUpdateManyInput>;
    where?: Prisma.InvestorKycDocumentWhereInput;
    limit?: number;
};
export type InvestorKycDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorKycDocumentUpdateManyMutationInput, Prisma.InvestorKycDocumentUncheckedUpdateManyInput>;
    where?: Prisma.InvestorKycDocumentWhereInput;
    limit?: number;
    include?: Prisma.InvestorKycDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestorKycDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorKycDocumentCreateInput, Prisma.InvestorKycDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorKycDocumentUpdateInput, Prisma.InvestorKycDocumentUncheckedUpdateInput>;
};
export type InvestorKycDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
    where: Prisma.InvestorKycDocumentWhereUniqueInput;
};
export type InvestorKycDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorKycDocumentWhereInput;
    limit?: number;
};
export type InvestorKycDocument$verifiedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type InvestorKycDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorKycDocumentSelect<ExtArgs> | null;
    omit?: Prisma.InvestorKycDocumentOmit<ExtArgs> | null;
    include?: Prisma.InvestorKycDocumentInclude<ExtArgs> | null;
};
