import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CertificateModel = runtime.Types.Result.DefaultSelection<Prisma.$CertificatePayload>;
export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null;
    _min: CertificateMinAggregateOutputType | null;
    _max: CertificateMaxAggregateOutputType | null;
};
export type CertificateMinAggregateOutputType = {
    id: string | null;
    certificateNumber: string | null;
    investorId: string | null;
    productAccountId: string | null;
    ndMandateAccountId: string | null;
    productClass: $Enums.CertificateProductClass | null;
    status: $Enums.CertificateStatus | null;
    pdfBytes: runtime.Bytes | null;
    documentRegisterEntryId: string | null;
    templateId: string | null;
    issuedAt: Date | null;
    createdAt: Date | null;
};
export type CertificateMaxAggregateOutputType = {
    id: string | null;
    certificateNumber: string | null;
    investorId: string | null;
    productAccountId: string | null;
    ndMandateAccountId: string | null;
    productClass: $Enums.CertificateProductClass | null;
    status: $Enums.CertificateStatus | null;
    pdfBytes: runtime.Bytes | null;
    documentRegisterEntryId: string | null;
    templateId: string | null;
    issuedAt: Date | null;
    createdAt: Date | null;
};
export type CertificateCountAggregateOutputType = {
    id: number;
    certificateNumber: number;
    investorId: number;
    productAccountId: number;
    ndMandateAccountId: number;
    productClass: number;
    status: number;
    dataSnapshot: number;
    pdfBytes: number;
    documentRegisterEntryId: number;
    templateId: number;
    issuedAt: number;
    createdAt: number;
    _all: number;
};
export type CertificateMinAggregateInputType = {
    id?: true;
    certificateNumber?: true;
    investorId?: true;
    productAccountId?: true;
    ndMandateAccountId?: true;
    productClass?: true;
    status?: true;
    pdfBytes?: true;
    documentRegisterEntryId?: true;
    templateId?: true;
    issuedAt?: true;
    createdAt?: true;
};
export type CertificateMaxAggregateInputType = {
    id?: true;
    certificateNumber?: true;
    investorId?: true;
    productAccountId?: true;
    ndMandateAccountId?: true;
    productClass?: true;
    status?: true;
    pdfBytes?: true;
    documentRegisterEntryId?: true;
    templateId?: true;
    issuedAt?: true;
    createdAt?: true;
};
export type CertificateCountAggregateInputType = {
    id?: true;
    certificateNumber?: true;
    investorId?: true;
    productAccountId?: true;
    ndMandateAccountId?: true;
    productClass?: true;
    status?: true;
    dataSnapshot?: true;
    pdfBytes?: true;
    documentRegisterEntryId?: true;
    templateId?: true;
    issuedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CertificateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CertificateCountAggregateInputType;
    _min?: CertificateMinAggregateInputType;
    _max?: CertificateMaxAggregateInputType;
};
export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
    [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCertificate[P]> : Prisma.GetScalarType<T[P], AggregateCertificate[P]>;
};
export type CertificateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithAggregationInput | Prisma.CertificateOrderByWithAggregationInput[];
    by: Prisma.CertificateScalarFieldEnum[] | Prisma.CertificateScalarFieldEnum;
    having?: Prisma.CertificateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CertificateCountAggregateInputType | true;
    _min?: CertificateMinAggregateInputType;
    _max?: CertificateMaxAggregateInputType;
};
export type CertificateGroupByOutputType = {
    id: string;
    certificateNumber: string | null;
    investorId: string;
    productAccountId: string | null;
    ndMandateAccountId: string | null;
    productClass: $Enums.CertificateProductClass;
    status: $Enums.CertificateStatus;
    dataSnapshot: runtime.JsonValue;
    pdfBytes: runtime.Bytes | null;
    documentRegisterEntryId: string | null;
    templateId: string | null;
    issuedAt: Date | null;
    createdAt: Date;
    _count: CertificateCountAggregateOutputType | null;
    _min: CertificateMinAggregateOutputType | null;
    _max: CertificateMaxAggregateOutputType | null;
};
export type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CertificateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CertificateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CertificateGroupByOutputType[P]>;
}>>;
export type CertificateWhereInput = {
    AND?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    OR?: Prisma.CertificateWhereInput[];
    NOT?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    id?: Prisma.UuidFilter<"Certificate"> | string;
    certificateNumber?: Prisma.StringNullableFilter<"Certificate"> | string | null;
    investorId?: Prisma.StringFilter<"Certificate"> | string;
    productAccountId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    productClass?: Prisma.EnumCertificateProductClassFilter<"Certificate"> | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFilter<"Certificate"> | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonFilter<"Certificate">;
    pdfBytes?: Prisma.BytesNullableFilter<"Certificate"> | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    templateId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeNullableFilter<"Certificate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Certificate"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    productAccount?: Prisma.XOR<Prisma.ProductAccountNullableScalarRelationFilter, Prisma.ProductAccountWhereInput> | null;
    ndMandateAccount?: Prisma.XOR<Prisma.NdMandateAccountNullableScalarRelationFilter, Prisma.NdMandateAccountWhereInput> | null;
    template?: Prisma.XOR<Prisma.DocumentTemplateNullableScalarRelationFilter, Prisma.DocumentTemplateWhereInput> | null;
};
export type CertificateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productClass?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dataSnapshot?: Prisma.SortOrder;
    pdfBytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentRegisterEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    productAccount?: Prisma.ProductAccountOrderByWithRelationInput;
    ndMandateAccount?: Prisma.NdMandateAccountOrderByWithRelationInput;
    template?: Prisma.DocumentTemplateOrderByWithRelationInput;
};
export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    certificateNumber?: string;
    AND?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    OR?: Prisma.CertificateWhereInput[];
    NOT?: Prisma.CertificateWhereInput | Prisma.CertificateWhereInput[];
    investorId?: Prisma.StringFilter<"Certificate"> | string;
    productAccountId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    productClass?: Prisma.EnumCertificateProductClassFilter<"Certificate"> | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFilter<"Certificate"> | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonFilter<"Certificate">;
    pdfBytes?: Prisma.BytesNullableFilter<"Certificate"> | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    templateId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeNullableFilter<"Certificate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Certificate"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    productAccount?: Prisma.XOR<Prisma.ProductAccountNullableScalarRelationFilter, Prisma.ProductAccountWhereInput> | null;
    ndMandateAccount?: Prisma.XOR<Prisma.NdMandateAccountNullableScalarRelationFilter, Prisma.NdMandateAccountWhereInput> | null;
    template?: Prisma.XOR<Prisma.DocumentTemplateNullableScalarRelationFilter, Prisma.DocumentTemplateWhereInput> | null;
}, "id" | "certificateNumber">;
export type CertificateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productClass?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dataSnapshot?: Prisma.SortOrder;
    pdfBytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    documentRegisterEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CertificateCountOrderByAggregateInput;
    _max?: Prisma.CertificateMaxOrderByAggregateInput;
    _min?: Prisma.CertificateMinOrderByAggregateInput;
};
export type CertificateScalarWhereWithAggregatesInput = {
    AND?: Prisma.CertificateScalarWhereWithAggregatesInput | Prisma.CertificateScalarWhereWithAggregatesInput[];
    OR?: Prisma.CertificateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CertificateScalarWhereWithAggregatesInput | Prisma.CertificateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Certificate"> | string;
    certificateNumber?: Prisma.StringNullableWithAggregatesFilter<"Certificate"> | string | null;
    investorId?: Prisma.StringWithAggregatesFilter<"Certificate"> | string;
    productAccountId?: Prisma.UuidNullableWithAggregatesFilter<"Certificate"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableWithAggregatesFilter<"Certificate"> | string | null;
    productClass?: Prisma.EnumCertificateProductClassWithAggregatesFilter<"Certificate"> | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusWithAggregatesFilter<"Certificate"> | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonWithAggregatesFilter<"Certificate">;
    pdfBytes?: Prisma.BytesNullableWithAggregatesFilter<"Certificate"> | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.UuidNullableWithAggregatesFilter<"Certificate"> | string | null;
    templateId?: Prisma.UuidNullableWithAggregatesFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Certificate"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Certificate"> | Date | string;
};
export type CertificateCreateInput = {
    id?: string;
    certificateNumber?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutCertificatesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutCertificatesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutCertificatesInput;
    template?: Prisma.DocumentTemplateCreateNestedOneWithoutCertificatesIssuedInput;
};
export type CertificateUncheckedCreateInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutCertificatesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutCertificatesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutCertificatesNestedInput;
    template?: Prisma.DocumentTemplateUpdateOneWithoutCertificatesIssuedNestedInput;
};
export type CertificateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateCreateManyInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateListRelationFilter = {
    every?: Prisma.CertificateWhereInput;
    some?: Prisma.CertificateWhereInput;
    none?: Prisma.CertificateWhereInput;
};
export type CertificateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CertificateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    productClass?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dataSnapshot?: Prisma.SortOrder;
    pdfBytes?: Prisma.SortOrder;
    documentRegisterEntryId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CertificateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    productClass?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pdfBytes?: Prisma.SortOrder;
    documentRegisterEntryId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CertificateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    certificateNumber?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    productAccountId?: Prisma.SortOrder;
    ndMandateAccountId?: Prisma.SortOrder;
    productClass?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pdfBytes?: Prisma.SortOrder;
    documentRegisterEntryId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CertificateCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutInvestorInput, Prisma.CertificateUncheckedCreateWithoutInvestorInput> | Prisma.CertificateCreateWithoutInvestorInput[] | Prisma.CertificateUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutInvestorInput | Prisma.CertificateCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.CertificateCreateManyInvestorInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutInvestorInput, Prisma.CertificateUncheckedCreateWithoutInvestorInput> | Prisma.CertificateCreateWithoutInvestorInput[] | Prisma.CertificateUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutInvestorInput | Prisma.CertificateCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.CertificateCreateManyInvestorInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutInvestorInput, Prisma.CertificateUncheckedCreateWithoutInvestorInput> | Prisma.CertificateCreateWithoutInvestorInput[] | Prisma.CertificateUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutInvestorInput | Prisma.CertificateCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutInvestorInput | Prisma.CertificateUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.CertificateCreateManyInvestorInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutInvestorInput | Prisma.CertificateUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutInvestorInput | Prisma.CertificateUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutInvestorInput, Prisma.CertificateUncheckedCreateWithoutInvestorInput> | Prisma.CertificateCreateWithoutInvestorInput[] | Prisma.CertificateUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutInvestorInput | Prisma.CertificateCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutInvestorInput | Prisma.CertificateUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.CertificateCreateManyInvestorInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutInvestorInput | Prisma.CertificateUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutInvestorInput | Prisma.CertificateUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateCreateNestedManyWithoutProductAccountInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutProductAccountInput, Prisma.CertificateUncheckedCreateWithoutProductAccountInput> | Prisma.CertificateCreateWithoutProductAccountInput[] | Prisma.CertificateUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutProductAccountInput | Prisma.CertificateCreateOrConnectWithoutProductAccountInput[];
    createMany?: Prisma.CertificateCreateManyProductAccountInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUncheckedCreateNestedManyWithoutProductAccountInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutProductAccountInput, Prisma.CertificateUncheckedCreateWithoutProductAccountInput> | Prisma.CertificateCreateWithoutProductAccountInput[] | Prisma.CertificateUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutProductAccountInput | Prisma.CertificateCreateOrConnectWithoutProductAccountInput[];
    createMany?: Prisma.CertificateCreateManyProductAccountInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUpdateManyWithoutProductAccountNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutProductAccountInput, Prisma.CertificateUncheckedCreateWithoutProductAccountInput> | Prisma.CertificateCreateWithoutProductAccountInput[] | Prisma.CertificateUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutProductAccountInput | Prisma.CertificateCreateOrConnectWithoutProductAccountInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutProductAccountInput | Prisma.CertificateUpsertWithWhereUniqueWithoutProductAccountInput[];
    createMany?: Prisma.CertificateCreateManyProductAccountInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutProductAccountInput | Prisma.CertificateUpdateWithWhereUniqueWithoutProductAccountInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutProductAccountInput | Prisma.CertificateUpdateManyWithWhereWithoutProductAccountInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateUncheckedUpdateManyWithoutProductAccountNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutProductAccountInput, Prisma.CertificateUncheckedCreateWithoutProductAccountInput> | Prisma.CertificateCreateWithoutProductAccountInput[] | Prisma.CertificateUncheckedCreateWithoutProductAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutProductAccountInput | Prisma.CertificateCreateOrConnectWithoutProductAccountInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutProductAccountInput | Prisma.CertificateUpsertWithWhereUniqueWithoutProductAccountInput[];
    createMany?: Prisma.CertificateCreateManyProductAccountInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutProductAccountInput | Prisma.CertificateUpdateWithWhereUniqueWithoutProductAccountInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutProductAccountInput | Prisma.CertificateUpdateManyWithWhereWithoutProductAccountInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutTemplateInput, Prisma.CertificateUncheckedCreateWithoutTemplateInput> | Prisma.CertificateCreateWithoutTemplateInput[] | Prisma.CertificateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutTemplateInput | Prisma.CertificateCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.CertificateCreateManyTemplateInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutTemplateInput, Prisma.CertificateUncheckedCreateWithoutTemplateInput> | Prisma.CertificateCreateWithoutTemplateInput[] | Prisma.CertificateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutTemplateInput | Prisma.CertificateCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.CertificateCreateManyTemplateInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutTemplateInput, Prisma.CertificateUncheckedCreateWithoutTemplateInput> | Prisma.CertificateCreateWithoutTemplateInput[] | Prisma.CertificateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutTemplateInput | Prisma.CertificateCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutTemplateInput | Prisma.CertificateUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.CertificateCreateManyTemplateInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutTemplateInput | Prisma.CertificateUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutTemplateInput | Prisma.CertificateUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutTemplateInput, Prisma.CertificateUncheckedCreateWithoutTemplateInput> | Prisma.CertificateCreateWithoutTemplateInput[] | Prisma.CertificateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutTemplateInput | Prisma.CertificateCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutTemplateInput | Prisma.CertificateUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.CertificateCreateManyTemplateInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutTemplateInput | Prisma.CertificateUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutTemplateInput | Prisma.CertificateUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type EnumCertificateProductClassFieldUpdateOperationsInput = {
    set?: $Enums.CertificateProductClass;
};
export type EnumCertificateStatusFieldUpdateOperationsInput = {
    set?: $Enums.CertificateStatus;
};
export type NullableBytesFieldUpdateOperationsInput = {
    set?: runtime.Bytes | null;
};
export type CertificateCreateNestedManyWithoutNdMandateAccountInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput> | Prisma.CertificateCreateWithoutNdMandateAccountInput[] | Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput | Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput[];
    createMany?: Prisma.CertificateCreateManyNdMandateAccountInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUncheckedCreateNestedManyWithoutNdMandateAccountInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput> | Prisma.CertificateCreateWithoutNdMandateAccountInput[] | Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput | Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput[];
    createMany?: Prisma.CertificateCreateManyNdMandateAccountInputEnvelope;
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
};
export type CertificateUpdateManyWithoutNdMandateAccountNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput> | Prisma.CertificateCreateWithoutNdMandateAccountInput[] | Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput | Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutNdMandateAccountInput | Prisma.CertificateUpsertWithWhereUniqueWithoutNdMandateAccountInput[];
    createMany?: Prisma.CertificateCreateManyNdMandateAccountInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutNdMandateAccountInput | Prisma.CertificateUpdateWithWhereUniqueWithoutNdMandateAccountInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutNdMandateAccountInput | Prisma.CertificateUpdateManyWithWhereWithoutNdMandateAccountInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateUncheckedUpdateManyWithoutNdMandateAccountNestedInput = {
    create?: Prisma.XOR<Prisma.CertificateCreateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput> | Prisma.CertificateCreateWithoutNdMandateAccountInput[] | Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput[];
    connectOrCreate?: Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput | Prisma.CertificateCreateOrConnectWithoutNdMandateAccountInput[];
    upsert?: Prisma.CertificateUpsertWithWhereUniqueWithoutNdMandateAccountInput | Prisma.CertificateUpsertWithWhereUniqueWithoutNdMandateAccountInput[];
    createMany?: Prisma.CertificateCreateManyNdMandateAccountInputEnvelope;
    set?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    disconnect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    delete?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    connect?: Prisma.CertificateWhereUniqueInput | Prisma.CertificateWhereUniqueInput[];
    update?: Prisma.CertificateUpdateWithWhereUniqueWithoutNdMandateAccountInput | Prisma.CertificateUpdateWithWhereUniqueWithoutNdMandateAccountInput[];
    updateMany?: Prisma.CertificateUpdateManyWithWhereWithoutNdMandateAccountInput | Prisma.CertificateUpdateManyWithWhereWithoutNdMandateAccountInput[];
    deleteMany?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
};
export type CertificateCreateWithoutInvestorInput = {
    id?: string;
    certificateNumber?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutCertificatesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutCertificatesInput;
    template?: Prisma.DocumentTemplateCreateNestedOneWithoutCertificatesIssuedInput;
};
export type CertificateUncheckedCreateWithoutInvestorInput = {
    id?: string;
    certificateNumber?: string | null;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateCreateOrConnectWithoutInvestorInput = {
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutInvestorInput, Prisma.CertificateUncheckedCreateWithoutInvestorInput>;
};
export type CertificateCreateManyInvestorInputEnvelope = {
    data: Prisma.CertificateCreateManyInvestorInput | Prisma.CertificateCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type CertificateUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.CertificateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CertificateUpdateWithoutInvestorInput, Prisma.CertificateUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutInvestorInput, Prisma.CertificateUncheckedCreateWithoutInvestorInput>;
};
export type CertificateUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.CertificateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CertificateUpdateWithoutInvestorInput, Prisma.CertificateUncheckedUpdateWithoutInvestorInput>;
};
export type CertificateUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.CertificateScalarWhereInput;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyWithoutInvestorInput>;
};
export type CertificateScalarWhereInput = {
    AND?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
    OR?: Prisma.CertificateScalarWhereInput[];
    NOT?: Prisma.CertificateScalarWhereInput | Prisma.CertificateScalarWhereInput[];
    id?: Prisma.UuidFilter<"Certificate"> | string;
    certificateNumber?: Prisma.StringNullableFilter<"Certificate"> | string | null;
    investorId?: Prisma.StringFilter<"Certificate"> | string;
    productAccountId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    ndMandateAccountId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    productClass?: Prisma.EnumCertificateProductClassFilter<"Certificate"> | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFilter<"Certificate"> | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonFilter<"Certificate">;
    pdfBytes?: Prisma.BytesNullableFilter<"Certificate"> | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    templateId?: Prisma.UuidNullableFilter<"Certificate"> | string | null;
    issuedAt?: Prisma.DateTimeNullableFilter<"Certificate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Certificate"> | Date | string;
};
export type CertificateCreateWithoutProductAccountInput = {
    id?: string;
    certificateNumber?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutCertificatesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutCertificatesInput;
    template?: Prisma.DocumentTemplateCreateNestedOneWithoutCertificatesIssuedInput;
};
export type CertificateUncheckedCreateWithoutProductAccountInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateCreateOrConnectWithoutProductAccountInput = {
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutProductAccountInput, Prisma.CertificateUncheckedCreateWithoutProductAccountInput>;
};
export type CertificateCreateManyProductAccountInputEnvelope = {
    data: Prisma.CertificateCreateManyProductAccountInput | Prisma.CertificateCreateManyProductAccountInput[];
    skipDuplicates?: boolean;
};
export type CertificateUpsertWithWhereUniqueWithoutProductAccountInput = {
    where: Prisma.CertificateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CertificateUpdateWithoutProductAccountInput, Prisma.CertificateUncheckedUpdateWithoutProductAccountInput>;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutProductAccountInput, Prisma.CertificateUncheckedCreateWithoutProductAccountInput>;
};
export type CertificateUpdateWithWhereUniqueWithoutProductAccountInput = {
    where: Prisma.CertificateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CertificateUpdateWithoutProductAccountInput, Prisma.CertificateUncheckedUpdateWithoutProductAccountInput>;
};
export type CertificateUpdateManyWithWhereWithoutProductAccountInput = {
    where: Prisma.CertificateScalarWhereInput;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyWithoutProductAccountInput>;
};
export type CertificateCreateWithoutTemplateInput = {
    id?: string;
    certificateNumber?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutCertificatesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutCertificatesInput;
    ndMandateAccount?: Prisma.NdMandateAccountCreateNestedOneWithoutCertificatesInput;
};
export type CertificateUncheckedCreateWithoutTemplateInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateCreateOrConnectWithoutTemplateInput = {
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutTemplateInput, Prisma.CertificateUncheckedCreateWithoutTemplateInput>;
};
export type CertificateCreateManyTemplateInputEnvelope = {
    data: Prisma.CertificateCreateManyTemplateInput | Prisma.CertificateCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type CertificateUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.CertificateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CertificateUpdateWithoutTemplateInput, Prisma.CertificateUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutTemplateInput, Prisma.CertificateUncheckedCreateWithoutTemplateInput>;
};
export type CertificateUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.CertificateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CertificateUpdateWithoutTemplateInput, Prisma.CertificateUncheckedUpdateWithoutTemplateInput>;
};
export type CertificateUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.CertificateScalarWhereInput;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyWithoutTemplateInput>;
};
export type CertificateCreateWithoutNdMandateAccountInput = {
    id?: string;
    certificateNumber?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutCertificatesInput;
    productAccount?: Prisma.ProductAccountCreateNestedOneWithoutCertificatesInput;
    template?: Prisma.DocumentTemplateCreateNestedOneWithoutCertificatesIssuedInput;
};
export type CertificateUncheckedCreateWithoutNdMandateAccountInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    productAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateCreateOrConnectWithoutNdMandateAccountInput = {
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput>;
};
export type CertificateCreateManyNdMandateAccountInputEnvelope = {
    data: Prisma.CertificateCreateManyNdMandateAccountInput | Prisma.CertificateCreateManyNdMandateAccountInput[];
    skipDuplicates?: boolean;
};
export type CertificateUpsertWithWhereUniqueWithoutNdMandateAccountInput = {
    where: Prisma.CertificateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CertificateUpdateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedUpdateWithoutNdMandateAccountInput>;
    create: Prisma.XOR<Prisma.CertificateCreateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedCreateWithoutNdMandateAccountInput>;
};
export type CertificateUpdateWithWhereUniqueWithoutNdMandateAccountInput = {
    where: Prisma.CertificateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CertificateUpdateWithoutNdMandateAccountInput, Prisma.CertificateUncheckedUpdateWithoutNdMandateAccountInput>;
};
export type CertificateUpdateManyWithWhereWithoutNdMandateAccountInput = {
    where: Prisma.CertificateScalarWhereInput;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyWithoutNdMandateAccountInput>;
};
export type CertificateCreateManyInvestorInput = {
    id?: string;
    certificateNumber?: string | null;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutCertificatesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutCertificatesNestedInput;
    template?: Prisma.DocumentTemplateUpdateOneWithoutCertificatesIssuedNestedInput;
};
export type CertificateUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateCreateManyProductAccountInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateUpdateWithoutProductAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutCertificatesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutCertificatesNestedInput;
    template?: Prisma.DocumentTemplateUpdateOneWithoutCertificatesIssuedNestedInput;
};
export type CertificateUncheckedUpdateWithoutProductAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyWithoutProductAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateCreateManyTemplateInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    productAccountId?: string | null;
    ndMandateAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutCertificatesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutCertificatesNestedInput;
    ndMandateAccount?: Prisma.NdMandateAccountUpdateOneWithoutCertificatesNestedInput;
};
export type CertificateUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ndMandateAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateCreateManyNdMandateAccountInput = {
    id?: string;
    certificateNumber?: string | null;
    investorId: string;
    productAccountId?: string | null;
    productClass: $Enums.CertificateProductClass;
    status?: $Enums.CertificateStatus;
    dataSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: runtime.Bytes | null;
    documentRegisterEntryId?: string | null;
    templateId?: string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CertificateUpdateWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutCertificatesNestedInput;
    productAccount?: Prisma.ProductAccountUpdateOneWithoutCertificatesNestedInput;
    template?: Prisma.DocumentTemplateUpdateOneWithoutCertificatesIssuedNestedInput;
};
export type CertificateUncheckedUpdateWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateUncheckedUpdateManyWithoutNdMandateAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    certificateNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    productAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productClass?: Prisma.EnumCertificateProductClassFieldUpdateOperationsInput | $Enums.CertificateProductClass;
    status?: Prisma.EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus;
    dataSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pdfBytes?: Prisma.NullableBytesFieldUpdateOperationsInput | runtime.Bytes | null;
    documentRegisterEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    certificateNumber?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    productClass?: boolean;
    status?: boolean;
    dataSnapshot?: boolean;
    pdfBytes?: boolean;
    documentRegisterEntryId?: boolean;
    templateId?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.Certificate$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.Certificate$ndMandateAccountArgs<ExtArgs>;
    template?: boolean | Prisma.Certificate$templateArgs<ExtArgs>;
}, ExtArgs["result"]["certificate"]>;
export type CertificateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    certificateNumber?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    productClass?: boolean;
    status?: boolean;
    dataSnapshot?: boolean;
    pdfBytes?: boolean;
    documentRegisterEntryId?: boolean;
    templateId?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.Certificate$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.Certificate$ndMandateAccountArgs<ExtArgs>;
    template?: boolean | Prisma.Certificate$templateArgs<ExtArgs>;
}, ExtArgs["result"]["certificate"]>;
export type CertificateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    certificateNumber?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    productClass?: boolean;
    status?: boolean;
    dataSnapshot?: boolean;
    pdfBytes?: boolean;
    documentRegisterEntryId?: boolean;
    templateId?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.Certificate$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.Certificate$ndMandateAccountArgs<ExtArgs>;
    template?: boolean | Prisma.Certificate$templateArgs<ExtArgs>;
}, ExtArgs["result"]["certificate"]>;
export type CertificateSelectScalar = {
    id?: boolean;
    certificateNumber?: boolean;
    investorId?: boolean;
    productAccountId?: boolean;
    ndMandateAccountId?: boolean;
    productClass?: boolean;
    status?: boolean;
    dataSnapshot?: boolean;
    pdfBytes?: boolean;
    documentRegisterEntryId?: boolean;
    templateId?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
};
export type CertificateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "certificateNumber" | "investorId" | "productAccountId" | "ndMandateAccountId" | "productClass" | "status" | "dataSnapshot" | "pdfBytes" | "documentRegisterEntryId" | "templateId" | "issuedAt" | "createdAt", ExtArgs["result"]["certificate"]>;
export type CertificateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.Certificate$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.Certificate$ndMandateAccountArgs<ExtArgs>;
    template?: boolean | Prisma.Certificate$templateArgs<ExtArgs>;
};
export type CertificateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.Certificate$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.Certificate$ndMandateAccountArgs<ExtArgs>;
    template?: boolean | Prisma.Certificate$templateArgs<ExtArgs>;
};
export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    productAccount?: boolean | Prisma.Certificate$productAccountArgs<ExtArgs>;
    ndMandateAccount?: boolean | Prisma.Certificate$ndMandateAccountArgs<ExtArgs>;
    template?: boolean | Prisma.Certificate$templateArgs<ExtArgs>;
};
export type $CertificatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Certificate";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        productAccount: Prisma.$ProductAccountPayload<ExtArgs> | null;
        ndMandateAccount: Prisma.$NdMandateAccountPayload<ExtArgs> | null;
        template: Prisma.$DocumentTemplatePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        certificateNumber: string | null;
        investorId: string;
        productAccountId: string | null;
        ndMandateAccountId: string | null;
        productClass: $Enums.CertificateProductClass;
        status: $Enums.CertificateStatus;
        dataSnapshot: runtime.JsonValue;
        pdfBytes: runtime.Bytes | null;
        documentRegisterEntryId: string | null;
        templateId: string | null;
        issuedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["certificate"]>;
    composites: {};
};
export type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CertificatePayload, S>;
export type CertificateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CertificateCountAggregateInputType | true;
};
export interface CertificateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Certificate'];
        meta: {
            name: 'Certificate';
        };
    };
    findUnique<T extends CertificateFindUniqueArgs>(args: Prisma.SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CertificateFindFirstArgs>(args?: Prisma.SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CertificateFindManyArgs>(args?: Prisma.SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CertificateCreateArgs>(args: Prisma.SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CertificateCreateManyArgs>(args?: Prisma.SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CertificateDeleteArgs>(args: Prisma.SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CertificateUpdateArgs>(args: Prisma.SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CertificateDeleteManyArgs>(args?: Prisma.SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CertificateUpdateManyArgs>(args: Prisma.SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CertificateUpsertArgs>(args: Prisma.SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma.Prisma__CertificateClient<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CertificateCountArgs>(args?: Prisma.Subset<T, CertificateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CertificateCountAggregateOutputType> : number>;
    aggregate<T extends CertificateAggregateArgs>(args: Prisma.Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>;
    groupBy<T extends CertificateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CertificateGroupByArgs['orderBy'];
    } : {
        orderBy?: CertificateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CertificateFieldRefs;
}
export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productAccount<T extends Prisma.Certificate$productAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Certificate$productAccountArgs<ExtArgs>>): Prisma.Prisma__ProductAccountClient<runtime.Types.Result.GetResult<Prisma.$ProductAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ndMandateAccount<T extends Prisma.Certificate$ndMandateAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Certificate$ndMandateAccountArgs<ExtArgs>>): Prisma.Prisma__NdMandateAccountClient<runtime.Types.Result.GetResult<Prisma.$NdMandateAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    template<T extends Prisma.Certificate$templateArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Certificate$templateArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CertificateFieldRefs {
    readonly id: Prisma.FieldRef<"Certificate", 'String'>;
    readonly certificateNumber: Prisma.FieldRef<"Certificate", 'String'>;
    readonly investorId: Prisma.FieldRef<"Certificate", 'String'>;
    readonly productAccountId: Prisma.FieldRef<"Certificate", 'String'>;
    readonly ndMandateAccountId: Prisma.FieldRef<"Certificate", 'String'>;
    readonly productClass: Prisma.FieldRef<"Certificate", 'CertificateProductClass'>;
    readonly status: Prisma.FieldRef<"Certificate", 'CertificateStatus'>;
    readonly dataSnapshot: Prisma.FieldRef<"Certificate", 'Json'>;
    readonly pdfBytes: Prisma.FieldRef<"Certificate", 'Bytes'>;
    readonly documentRegisterEntryId: Prisma.FieldRef<"Certificate", 'String'>;
    readonly templateId: Prisma.FieldRef<"Certificate", 'String'>;
    readonly issuedAt: Prisma.FieldRef<"Certificate", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Certificate", 'DateTime'>;
}
export type CertificateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
export type CertificateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
export type CertificateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
export type CertificateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificateCreateInput, Prisma.CertificateUncheckedCreateInput>;
};
export type CertificateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CertificateCreateManyInput | Prisma.CertificateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CertificateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    data: Prisma.CertificateCreateManyInput | Prisma.CertificateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CertificateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CertificateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificateUpdateInput, Prisma.CertificateUncheckedUpdateInput>;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyInput>;
    where?: Prisma.CertificateWhereInput;
    limit?: number;
};
export type CertificateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificateUpdateManyMutationInput, Prisma.CertificateUncheckedUpdateManyInput>;
    where?: Prisma.CertificateWhereInput;
    limit?: number;
    include?: Prisma.CertificateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CertificateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificateCreateInput, Prisma.CertificateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CertificateUpdateInput, Prisma.CertificateUncheckedUpdateInput>;
};
export type CertificateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where: Prisma.CertificateWhereUniqueInput;
};
export type CertificateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
    limit?: number;
};
export type Certificate$productAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductAccountSelect<ExtArgs> | null;
    omit?: Prisma.ProductAccountOmit<ExtArgs> | null;
    include?: Prisma.ProductAccountInclude<ExtArgs> | null;
    where?: Prisma.ProductAccountWhereInput;
};
export type Certificate$ndMandateAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NdMandateAccountSelect<ExtArgs> | null;
    omit?: Prisma.NdMandateAccountOmit<ExtArgs> | null;
    include?: Prisma.NdMandateAccountInclude<ExtArgs> | null;
    where?: Prisma.NdMandateAccountWhereInput;
};
export type Certificate$templateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where?: Prisma.DocumentTemplateWhereInput;
};
export type CertificateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    include?: Prisma.CertificateInclude<ExtArgs> | null;
};
