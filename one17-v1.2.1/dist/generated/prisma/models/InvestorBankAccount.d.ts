import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorBankAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorBankAccountPayload>;
export type AggregateInvestorBankAccount = {
    _count: InvestorBankAccountCountAggregateOutputType | null;
    _min: InvestorBankAccountMinAggregateOutputType | null;
    _max: InvestorBankAccountMaxAggregateOutputType | null;
};
export type InvestorBankAccountMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    bankName: string | null;
    accountNumber: string | null;
    accountName: string | null;
    accountType: string | null;
    currency: string | null;
    isPrimary: boolean | null;
    verificationStatus: $Enums.DocumentVerificationStatus | null;
    verifiedByUserId: string | null;
    createdAt: Date | null;
    status: $Enums.InvestorBankAccountStatus | null;
    coolingOffEndsAt: Date | null;
};
export type InvestorBankAccountMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    bankName: string | null;
    accountNumber: string | null;
    accountName: string | null;
    accountType: string | null;
    currency: string | null;
    isPrimary: boolean | null;
    verificationStatus: $Enums.DocumentVerificationStatus | null;
    verifiedByUserId: string | null;
    createdAt: Date | null;
    status: $Enums.InvestorBankAccountStatus | null;
    coolingOffEndsAt: Date | null;
};
export type InvestorBankAccountCountAggregateOutputType = {
    id: number;
    investorId: number;
    bankName: number;
    accountNumber: number;
    accountName: number;
    accountType: number;
    currency: number;
    isPrimary: number;
    verificationStatus: number;
    verifiedByUserId: number;
    createdAt: number;
    status: number;
    coolingOffEndsAt: number;
    _all: number;
};
export type InvestorBankAccountMinAggregateInputType = {
    id?: true;
    investorId?: true;
    bankName?: true;
    accountNumber?: true;
    accountName?: true;
    accountType?: true;
    currency?: true;
    isPrimary?: true;
    verificationStatus?: true;
    verifiedByUserId?: true;
    createdAt?: true;
    status?: true;
    coolingOffEndsAt?: true;
};
export type InvestorBankAccountMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    bankName?: true;
    accountNumber?: true;
    accountName?: true;
    accountType?: true;
    currency?: true;
    isPrimary?: true;
    verificationStatus?: true;
    verifiedByUserId?: true;
    createdAt?: true;
    status?: true;
    coolingOffEndsAt?: true;
};
export type InvestorBankAccountCountAggregateInputType = {
    id?: true;
    investorId?: true;
    bankName?: true;
    accountNumber?: true;
    accountName?: true;
    accountType?: true;
    currency?: true;
    isPrimary?: true;
    verificationStatus?: true;
    verifiedByUserId?: true;
    createdAt?: true;
    status?: true;
    coolingOffEndsAt?: true;
    _all?: true;
};
export type InvestorBankAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorBankAccountWhereInput;
    orderBy?: Prisma.InvestorBankAccountOrderByWithRelationInput | Prisma.InvestorBankAccountOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorBankAccountCountAggregateInputType;
    _min?: InvestorBankAccountMinAggregateInputType;
    _max?: InvestorBankAccountMaxAggregateInputType;
};
export type GetInvestorBankAccountAggregateType<T extends InvestorBankAccountAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorBankAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorBankAccount[P]> : Prisma.GetScalarType<T[P], AggregateInvestorBankAccount[P]>;
};
export type InvestorBankAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorBankAccountWhereInput;
    orderBy?: Prisma.InvestorBankAccountOrderByWithAggregationInput | Prisma.InvestorBankAccountOrderByWithAggregationInput[];
    by: Prisma.InvestorBankAccountScalarFieldEnum[] | Prisma.InvestorBankAccountScalarFieldEnum;
    having?: Prisma.InvestorBankAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorBankAccountCountAggregateInputType | true;
    _min?: InvestorBankAccountMinAggregateInputType;
    _max?: InvestorBankAccountMaxAggregateInputType;
};
export type InvestorBankAccountGroupByOutputType = {
    id: string;
    investorId: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType: string | null;
    currency: string | null;
    isPrimary: boolean;
    verificationStatus: $Enums.DocumentVerificationStatus;
    verifiedByUserId: string | null;
    createdAt: Date;
    status: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt: Date | null;
    _count: InvestorBankAccountCountAggregateOutputType | null;
    _min: InvestorBankAccountMinAggregateOutputType | null;
    _max: InvestorBankAccountMaxAggregateOutputType | null;
};
export type GetInvestorBankAccountGroupByPayload<T extends InvestorBankAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorBankAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorBankAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorBankAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorBankAccountGroupByOutputType[P]>;
}>>;
export type InvestorBankAccountWhereInput = {
    AND?: Prisma.InvestorBankAccountWhereInput | Prisma.InvestorBankAccountWhereInput[];
    OR?: Prisma.InvestorBankAccountWhereInput[];
    NOT?: Prisma.InvestorBankAccountWhereInput | Prisma.InvestorBankAccountWhereInput[];
    id?: Prisma.UuidFilter<"InvestorBankAccount"> | string;
    investorId?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    bankName?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountNumber?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountName?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountType?: Prisma.StringNullableFilter<"InvestorBankAccount"> | string | null;
    currency?: Prisma.StringNullableFilter<"InvestorBankAccount"> | string | null;
    isPrimary?: Prisma.BoolFilter<"InvestorBankAccount"> | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFilter<"InvestorBankAccount"> | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.UuidNullableFilter<"InvestorBankAccount"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorBankAccount"> | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFilter<"InvestorBankAccount"> | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.DateTimeNullableFilter<"InvestorBankAccount"> | Date | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    verifiedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    changeRequest?: Prisma.XOR<Prisma.InvestorBankAccountChangeRequestNullableScalarRelationFilter, Prisma.InvestorBankAccountChangeRequestWhereInput> | null;
};
export type InvestorBankAccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffEndsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    verifiedBy?: Prisma.AppUserOrderByWithRelationInput;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestOrderByWithRelationInput;
};
export type InvestorBankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvestorBankAccountWhereInput | Prisma.InvestorBankAccountWhereInput[];
    OR?: Prisma.InvestorBankAccountWhereInput[];
    NOT?: Prisma.InvestorBankAccountWhereInput | Prisma.InvestorBankAccountWhereInput[];
    investorId?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    bankName?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountNumber?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountName?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountType?: Prisma.StringNullableFilter<"InvestorBankAccount"> | string | null;
    currency?: Prisma.StringNullableFilter<"InvestorBankAccount"> | string | null;
    isPrimary?: Prisma.BoolFilter<"InvestorBankAccount"> | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFilter<"InvestorBankAccount"> | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.UuidNullableFilter<"InvestorBankAccount"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorBankAccount"> | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFilter<"InvestorBankAccount"> | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.DateTimeNullableFilter<"InvestorBankAccount"> | Date | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    verifiedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    changeRequest?: Prisma.XOR<Prisma.InvestorBankAccountChangeRequestNullableScalarRelationFilter, Prisma.InvestorBankAccountChangeRequestWhereInput> | null;
}, "id">;
export type InvestorBankAccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffEndsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InvestorBankAccountCountOrderByAggregateInput;
    _max?: Prisma.InvestorBankAccountMaxOrderByAggregateInput;
    _min?: Prisma.InvestorBankAccountMinOrderByAggregateInput;
};
export type InvestorBankAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorBankAccountScalarWhereWithAggregatesInput | Prisma.InvestorBankAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorBankAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorBankAccountScalarWhereWithAggregatesInput | Prisma.InvestorBankAccountScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorBankAccount"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"InvestorBankAccount"> | string;
    bankName?: Prisma.StringWithAggregatesFilter<"InvestorBankAccount"> | string;
    accountNumber?: Prisma.StringWithAggregatesFilter<"InvestorBankAccount"> | string;
    accountName?: Prisma.StringWithAggregatesFilter<"InvestorBankAccount"> | string;
    accountType?: Prisma.StringNullableWithAggregatesFilter<"InvestorBankAccount"> | string | null;
    currency?: Prisma.StringNullableWithAggregatesFilter<"InvestorBankAccount"> | string | null;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"InvestorBankAccount"> | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusWithAggregatesFilter<"InvestorBankAccount"> | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorBankAccount"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorBankAccount"> | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusWithAggregatesFilter<"InvestorBankAccount"> | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"InvestorBankAccount"> | Date | string | null;
};
export type InvestorBankAccountCreateInput = {
    id?: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutBankAccountsInput;
    verifiedBy?: Prisma.AppUserCreateNestedOneWithoutBankAccountsVerifiedInput;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestCreateNestedOneWithoutResultingBankAccountInput;
};
export type InvestorBankAccountUncheckedCreateInput = {
    id?: string;
    investorId: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUncheckedCreateNestedOneWithoutResultingBankAccountInput;
};
export type InvestorBankAccountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutBankAccountsNestedInput;
    verifiedBy?: Prisma.AppUserUpdateOneWithoutBankAccountsVerifiedNestedInput;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUpdateOneWithoutResultingBankAccountNestedInput;
};
export type InvestorBankAccountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUncheckedUpdateOneWithoutResultingBankAccountNestedInput;
};
export type InvestorBankAccountCreateManyInput = {
    id?: string;
    investorId: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
};
export type InvestorBankAccountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestorBankAccountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestorBankAccountListRelationFilter = {
    every?: Prisma.InvestorBankAccountWhereInput;
    some?: Prisma.InvestorBankAccountWhereInput;
    none?: Prisma.InvestorBankAccountWhereInput;
};
export type InvestorBankAccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestorBankAccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffEndsAt?: Prisma.SortOrder;
};
export type InvestorBankAccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffEndsAt?: Prisma.SortOrder;
};
export type InvestorBankAccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    accountType?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coolingOffEndsAt?: Prisma.SortOrder;
};
export type InvestorBankAccountNullableScalarRelationFilter = {
    is?: Prisma.InvestorBankAccountWhereInput | null;
    isNot?: Prisma.InvestorBankAccountWhereInput | null;
};
export type InvestorBankAccountCreateNestedManyWithoutVerifiedByInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorBankAccountCreateWithoutVerifiedByInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyVerifiedByInputEnvelope;
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
};
export type InvestorBankAccountUncheckedCreateNestedManyWithoutVerifiedByInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorBankAccountCreateWithoutVerifiedByInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyVerifiedByInputEnvelope;
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
};
export type InvestorBankAccountUpdateManyWithoutVerifiedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorBankAccountCreateWithoutVerifiedByInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput[];
    upsert?: Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyVerifiedByInputEnvelope;
    set?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    disconnect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    delete?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    update?: Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutVerifiedByInput[];
    updateMany?: Prisma.InvestorBankAccountUpdateManyWithWhereWithoutVerifiedByInput | Prisma.InvestorBankAccountUpdateManyWithWhereWithoutVerifiedByInput[];
    deleteMany?: Prisma.InvestorBankAccountScalarWhereInput | Prisma.InvestorBankAccountScalarWhereInput[];
};
export type InvestorBankAccountUncheckedUpdateManyWithoutVerifiedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput> | Prisma.InvestorBankAccountCreateWithoutVerifiedByInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput | Prisma.InvestorBankAccountCreateOrConnectWithoutVerifiedByInput[];
    upsert?: Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutVerifiedByInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyVerifiedByInputEnvelope;
    set?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    disconnect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    delete?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    update?: Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutVerifiedByInput | Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutVerifiedByInput[];
    updateMany?: Prisma.InvestorBankAccountUpdateManyWithWhereWithoutVerifiedByInput | Prisma.InvestorBankAccountUpdateManyWithWhereWithoutVerifiedByInput[];
    deleteMany?: Prisma.InvestorBankAccountScalarWhereInput | Prisma.InvestorBankAccountScalarWhereInput[];
};
export type InvestorBankAccountCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput> | Prisma.InvestorBankAccountCreateWithoutInvestorInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput | Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
};
export type InvestorBankAccountUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput> | Prisma.InvestorBankAccountCreateWithoutInvestorInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput | Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
};
export type InvestorBankAccountUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput> | Prisma.InvestorBankAccountCreateWithoutInvestorInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput | Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    disconnect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    delete?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    update?: Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorBankAccountUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorBankAccountUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorBankAccountScalarWhereInput | Prisma.InvestorBankAccountScalarWhereInput[];
};
export type InvestorBankAccountUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput> | Prisma.InvestorBankAccountCreateWithoutInvestorInput[] | Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput | Prisma.InvestorBankAccountCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorBankAccountUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorBankAccountCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    disconnect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    delete?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    connect?: Prisma.InvestorBankAccountWhereUniqueInput | Prisma.InvestorBankAccountWhereUniqueInput[];
    update?: Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorBankAccountUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorBankAccountUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorBankAccountUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorBankAccountScalarWhereInput | Prisma.InvestorBankAccountScalarWhereInput[];
};
export type EnumInvestorBankAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvestorBankAccountStatus;
};
export type InvestorBankAccountCreateNestedOneWithoutChangeRequestInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutChangeRequestInput, Prisma.InvestorBankAccountUncheckedCreateWithoutChangeRequestInput>;
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutChangeRequestInput;
    connect?: Prisma.InvestorBankAccountWhereUniqueInput;
};
export type InvestorBankAccountUpdateOneWithoutChangeRequestNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutChangeRequestInput, Prisma.InvestorBankAccountUncheckedCreateWithoutChangeRequestInput>;
    connectOrCreate?: Prisma.InvestorBankAccountCreateOrConnectWithoutChangeRequestInput;
    upsert?: Prisma.InvestorBankAccountUpsertWithoutChangeRequestInput;
    disconnect?: Prisma.InvestorBankAccountWhereInput | boolean;
    delete?: Prisma.InvestorBankAccountWhereInput | boolean;
    connect?: Prisma.InvestorBankAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvestorBankAccountUpdateToOneWithWhereWithoutChangeRequestInput, Prisma.InvestorBankAccountUpdateWithoutChangeRequestInput>, Prisma.InvestorBankAccountUncheckedUpdateWithoutChangeRequestInput>;
};
export type InvestorBankAccountCreateWithoutVerifiedByInput = {
    id?: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutBankAccountsInput;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestCreateNestedOneWithoutResultingBankAccountInput;
};
export type InvestorBankAccountUncheckedCreateWithoutVerifiedByInput = {
    id?: string;
    investorId: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUncheckedCreateNestedOneWithoutResultingBankAccountInput;
};
export type InvestorBankAccountCreateOrConnectWithoutVerifiedByInput = {
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput>;
};
export type InvestorBankAccountCreateManyVerifiedByInputEnvelope = {
    data: Prisma.InvestorBankAccountCreateManyVerifiedByInput | Prisma.InvestorBankAccountCreateManyVerifiedByInput[];
    skipDuplicates?: boolean;
};
export type InvestorBankAccountUpsertWithWhereUniqueWithoutVerifiedByInput = {
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorBankAccountUpdateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedUpdateWithoutVerifiedByInput>;
    create: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedCreateWithoutVerifiedByInput>;
};
export type InvestorBankAccountUpdateWithWhereUniqueWithoutVerifiedByInput = {
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateWithoutVerifiedByInput, Prisma.InvestorBankAccountUncheckedUpdateWithoutVerifiedByInput>;
};
export type InvestorBankAccountUpdateManyWithWhereWithoutVerifiedByInput = {
    where: Prisma.InvestorBankAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateManyMutationInput, Prisma.InvestorBankAccountUncheckedUpdateManyWithoutVerifiedByInput>;
};
export type InvestorBankAccountScalarWhereInput = {
    AND?: Prisma.InvestorBankAccountScalarWhereInput | Prisma.InvestorBankAccountScalarWhereInput[];
    OR?: Prisma.InvestorBankAccountScalarWhereInput[];
    NOT?: Prisma.InvestorBankAccountScalarWhereInput | Prisma.InvestorBankAccountScalarWhereInput[];
    id?: Prisma.UuidFilter<"InvestorBankAccount"> | string;
    investorId?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    bankName?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountNumber?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountName?: Prisma.StringFilter<"InvestorBankAccount"> | string;
    accountType?: Prisma.StringNullableFilter<"InvestorBankAccount"> | string | null;
    currency?: Prisma.StringNullableFilter<"InvestorBankAccount"> | string | null;
    isPrimary?: Prisma.BoolFilter<"InvestorBankAccount"> | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFilter<"InvestorBankAccount"> | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.UuidNullableFilter<"InvestorBankAccount"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorBankAccount"> | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFilter<"InvestorBankAccount"> | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.DateTimeNullableFilter<"InvestorBankAccount"> | Date | string | null;
};
export type InvestorBankAccountCreateWithoutInvestorInput = {
    id?: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
    verifiedBy?: Prisma.AppUserCreateNestedOneWithoutBankAccountsVerifiedInput;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestCreateNestedOneWithoutResultingBankAccountInput;
};
export type InvestorBankAccountUncheckedCreateWithoutInvestorInput = {
    id?: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUncheckedCreateNestedOneWithoutResultingBankAccountInput;
};
export type InvestorBankAccountCreateOrConnectWithoutInvestorInput = {
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput>;
};
export type InvestorBankAccountCreateManyInvestorInputEnvelope = {
    data: Prisma.InvestorBankAccountCreateManyInvestorInput | Prisma.InvestorBankAccountCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type InvestorBankAccountUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorBankAccountUpdateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedCreateWithoutInvestorInput>;
};
export type InvestorBankAccountUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateWithoutInvestorInput, Prisma.InvestorBankAccountUncheckedUpdateWithoutInvestorInput>;
};
export type InvestorBankAccountUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.InvestorBankAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateManyMutationInput, Prisma.InvestorBankAccountUncheckedUpdateManyWithoutInvestorInput>;
};
export type InvestorBankAccountCreateWithoutChangeRequestInput = {
    id?: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutBankAccountsInput;
    verifiedBy?: Prisma.AppUserCreateNestedOneWithoutBankAccountsVerifiedInput;
};
export type InvestorBankAccountUncheckedCreateWithoutChangeRequestInput = {
    id?: string;
    investorId: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
};
export type InvestorBankAccountCreateOrConnectWithoutChangeRequestInput = {
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutChangeRequestInput, Prisma.InvestorBankAccountUncheckedCreateWithoutChangeRequestInput>;
};
export type InvestorBankAccountUpsertWithoutChangeRequestInput = {
    update: Prisma.XOR<Prisma.InvestorBankAccountUpdateWithoutChangeRequestInput, Prisma.InvestorBankAccountUncheckedUpdateWithoutChangeRequestInput>;
    create: Prisma.XOR<Prisma.InvestorBankAccountCreateWithoutChangeRequestInput, Prisma.InvestorBankAccountUncheckedCreateWithoutChangeRequestInput>;
    where?: Prisma.InvestorBankAccountWhereInput;
};
export type InvestorBankAccountUpdateToOneWithWhereWithoutChangeRequestInput = {
    where?: Prisma.InvestorBankAccountWhereInput;
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateWithoutChangeRequestInput, Prisma.InvestorBankAccountUncheckedUpdateWithoutChangeRequestInput>;
};
export type InvestorBankAccountUpdateWithoutChangeRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutBankAccountsNestedInput;
    verifiedBy?: Prisma.AppUserUpdateOneWithoutBankAccountsVerifiedNestedInput;
};
export type InvestorBankAccountUncheckedUpdateWithoutChangeRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestorBankAccountCreateManyVerifiedByInput = {
    id?: string;
    investorId: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
};
export type InvestorBankAccountUpdateWithoutVerifiedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutBankAccountsNestedInput;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUpdateOneWithoutResultingBankAccountNestedInput;
};
export type InvestorBankAccountUncheckedUpdateWithoutVerifiedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUncheckedUpdateOneWithoutResultingBankAccountNestedInput;
};
export type InvestorBankAccountUncheckedUpdateManyWithoutVerifiedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestorBankAccountCreateManyInvestorInput = {
    id?: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    accountType?: string | null;
    currency?: string | null;
    isPrimary?: boolean;
    verificationStatus?: $Enums.DocumentVerificationStatus;
    verifiedByUserId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Date | string | null;
};
export type InvestorBankAccountUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verifiedBy?: Prisma.AppUserUpdateOneWithoutBankAccountsVerifiedNestedInput;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUpdateOneWithoutResultingBankAccountNestedInput;
};
export type InvestorBankAccountUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changeRequest?: Prisma.InvestorBankAccountChangeRequestUncheckedUpdateOneWithoutResultingBankAccountNestedInput;
};
export type InvestorBankAccountUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    accountName?: Prisma.StringFieldUpdateOperationsInput | string;
    accountType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationStatus?: Prisma.EnumDocumentVerificationStatusFieldUpdateOperationsInput | $Enums.DocumentVerificationStatus;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvestorBankAccountStatusFieldUpdateOperationsInput | $Enums.InvestorBankAccountStatus;
    coolingOffEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestorBankAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    bankName?: boolean;
    accountNumber?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    currency?: boolean;
    isPrimary?: boolean;
    verificationStatus?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    coolingOffEndsAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs>;
    changeRequest?: boolean | Prisma.InvestorBankAccount$changeRequestArgs<ExtArgs>;
}, ExtArgs["result"]["investorBankAccount"]>;
export type InvestorBankAccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    bankName?: boolean;
    accountNumber?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    currency?: boolean;
    isPrimary?: boolean;
    verificationStatus?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    coolingOffEndsAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs>;
}, ExtArgs["result"]["investorBankAccount"]>;
export type InvestorBankAccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    bankName?: boolean;
    accountNumber?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    currency?: boolean;
    isPrimary?: boolean;
    verificationStatus?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    coolingOffEndsAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs>;
}, ExtArgs["result"]["investorBankAccount"]>;
export type InvestorBankAccountSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    bankName?: boolean;
    accountNumber?: boolean;
    accountName?: boolean;
    accountType?: boolean;
    currency?: boolean;
    isPrimary?: boolean;
    verificationStatus?: boolean;
    verifiedByUserId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    coolingOffEndsAt?: boolean;
};
export type InvestorBankAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "bankName" | "accountNumber" | "accountName" | "accountType" | "currency" | "isPrimary" | "verificationStatus" | "verifiedByUserId" | "createdAt" | "status" | "coolingOffEndsAt", ExtArgs["result"]["investorBankAccount"]>;
export type InvestorBankAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs>;
    changeRequest?: boolean | Prisma.InvestorBankAccount$changeRequestArgs<ExtArgs>;
};
export type InvestorBankAccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs>;
};
export type InvestorBankAccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    verifiedBy?: boolean | Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs>;
};
export type $InvestorBankAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorBankAccount";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        verifiedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        changeRequest: Prisma.$InvestorBankAccountChangeRequestPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        bankName: string;
        accountNumber: string;
        accountName: string;
        accountType: string | null;
        currency: string | null;
        isPrimary: boolean;
        verificationStatus: $Enums.DocumentVerificationStatus;
        verifiedByUserId: string | null;
        createdAt: Date;
        status: $Enums.InvestorBankAccountStatus;
        coolingOffEndsAt: Date | null;
    }, ExtArgs["result"]["investorBankAccount"]>;
    composites: {};
};
export type InvestorBankAccountGetPayload<S extends boolean | null | undefined | InvestorBankAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload, S>;
export type InvestorBankAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorBankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorBankAccountCountAggregateInputType | true;
};
export interface InvestorBankAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorBankAccount'];
        meta: {
            name: 'InvestorBankAccount';
        };
    };
    findUnique<T extends InvestorBankAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorBankAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorBankAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorBankAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorBankAccountFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorBankAccountCreateArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorBankAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorBankAccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorBankAccountDeleteArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorBankAccountUpdateArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorBankAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorBankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorBankAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorBankAccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorBankAccountUpsertArgs>(args: Prisma.SelectSubset<T, InvestorBankAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorBankAccountCountArgs>(args?: Prisma.Subset<T, InvestorBankAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorBankAccountCountAggregateOutputType> : number>;
    aggregate<T extends InvestorBankAccountAggregateArgs>(args: Prisma.Subset<T, InvestorBankAccountAggregateArgs>): Prisma.PrismaPromise<GetInvestorBankAccountAggregateType<T>>;
    groupBy<T extends InvestorBankAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorBankAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorBankAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorBankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorBankAccountFieldRefs;
}
export interface Prisma__InvestorBankAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    verifiedBy<T extends Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorBankAccount$verifiedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    changeRequest<T extends Prisma.InvestorBankAccount$changeRequestArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorBankAccount$changeRequestArgs<ExtArgs>>): Prisma.Prisma__InvestorBankAccountChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorBankAccountChangeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorBankAccountFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly investorId: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly bankName: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly accountNumber: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly accountName: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly accountType: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly currency: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"InvestorBankAccount", 'Boolean'>;
    readonly verificationStatus: Prisma.FieldRef<"InvestorBankAccount", 'DocumentVerificationStatus'>;
    readonly verifiedByUserId: Prisma.FieldRef<"InvestorBankAccount", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestorBankAccount", 'DateTime'>;
    readonly status: Prisma.FieldRef<"InvestorBankAccount", 'InvestorBankAccountStatus'>;
    readonly coolingOffEndsAt: Prisma.FieldRef<"InvestorBankAccount", 'DateTime'>;
}
export type InvestorBankAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    where: Prisma.InvestorBankAccountWhereUniqueInput;
};
export type InvestorBankAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    where: Prisma.InvestorBankAccountWhereUniqueInput;
};
export type InvestorBankAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    where?: Prisma.InvestorBankAccountWhereInput;
    orderBy?: Prisma.InvestorBankAccountOrderByWithRelationInput | Prisma.InvestorBankAccountOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorBankAccountScalarFieldEnum | Prisma.InvestorBankAccountScalarFieldEnum[];
};
export type InvestorBankAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    where?: Prisma.InvestorBankAccountWhereInput;
    orderBy?: Prisma.InvestorBankAccountOrderByWithRelationInput | Prisma.InvestorBankAccountOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorBankAccountScalarFieldEnum | Prisma.InvestorBankAccountScalarFieldEnum[];
};
export type InvestorBankAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    where?: Prisma.InvestorBankAccountWhereInput;
    orderBy?: Prisma.InvestorBankAccountOrderByWithRelationInput | Prisma.InvestorBankAccountOrderByWithRelationInput[];
    cursor?: Prisma.InvestorBankAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorBankAccountScalarFieldEnum | Prisma.InvestorBankAccountScalarFieldEnum[];
};
export type InvestorBankAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorBankAccountCreateInput, Prisma.InvestorBankAccountUncheckedCreateInput>;
};
export type InvestorBankAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorBankAccountCreateManyInput | Prisma.InvestorBankAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorBankAccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    data: Prisma.InvestorBankAccountCreateManyInput | Prisma.InvestorBankAccountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestorBankAccountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestorBankAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateInput, Prisma.InvestorBankAccountUncheckedUpdateInput>;
    where: Prisma.InvestorBankAccountWhereUniqueInput;
};
export type InvestorBankAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateManyMutationInput, Prisma.InvestorBankAccountUncheckedUpdateManyInput>;
    where?: Prisma.InvestorBankAccountWhereInput;
    limit?: number;
};
export type InvestorBankAccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorBankAccountUpdateManyMutationInput, Prisma.InvestorBankAccountUncheckedUpdateManyInput>;
    where?: Prisma.InvestorBankAccountWhereInput;
    limit?: number;
    include?: Prisma.InvestorBankAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestorBankAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    where: Prisma.InvestorBankAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorBankAccountCreateInput, Prisma.InvestorBankAccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorBankAccountUpdateInput, Prisma.InvestorBankAccountUncheckedUpdateInput>;
};
export type InvestorBankAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
    where: Prisma.InvestorBankAccountWhereUniqueInput;
};
export type InvestorBankAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorBankAccountWhereInput;
    limit?: number;
};
export type InvestorBankAccount$verifiedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type InvestorBankAccount$changeRequestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorBankAccountChangeRequestWhereInput;
};
export type InvestorBankAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorBankAccountSelect<ExtArgs> | null;
    omit?: Prisma.InvestorBankAccountOmit<ExtArgs> | null;
    include?: Prisma.InvestorBankAccountInclude<ExtArgs> | null;
};
