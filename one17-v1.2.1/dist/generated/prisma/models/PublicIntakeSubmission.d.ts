import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PublicIntakeSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$PublicIntakeSubmissionPayload>;
export type AggregatePublicIntakeSubmission = {
    _count: PublicIntakeSubmissionCountAggregateOutputType | null;
    _min: PublicIntakeSubmissionMinAggregateOutputType | null;
    _max: PublicIntakeSubmissionMaxAggregateOutputType | null;
};
export type PublicIntakeSubmissionMinAggregateOutputType = {
    id: string | null;
    intakeType: $Enums.PublicIntakeType | null;
    status: $Enums.PublicIntakeStatus | null;
    submittedIp: string | null;
    rejectionReason: string | null;
    promotedByUserId: string | null;
    promotedAt: Date | null;
    resultingInvestorId: string | null;
    resultingCounterpartyId: string | null;
    createdAt: Date | null;
};
export type PublicIntakeSubmissionMaxAggregateOutputType = {
    id: string | null;
    intakeType: $Enums.PublicIntakeType | null;
    status: $Enums.PublicIntakeStatus | null;
    submittedIp: string | null;
    rejectionReason: string | null;
    promotedByUserId: string | null;
    promotedAt: Date | null;
    resultingInvestorId: string | null;
    resultingCounterpartyId: string | null;
    createdAt: Date | null;
};
export type PublicIntakeSubmissionCountAggregateOutputType = {
    id: number;
    intakeType: number;
    payload: number;
    status: number;
    submittedIp: number;
    rejectionReason: number;
    promotedByUserId: number;
    promotedAt: number;
    resultingInvestorId: number;
    resultingCounterpartyId: number;
    createdAt: number;
    _all: number;
};
export type PublicIntakeSubmissionMinAggregateInputType = {
    id?: true;
    intakeType?: true;
    status?: true;
    submittedIp?: true;
    rejectionReason?: true;
    promotedByUserId?: true;
    promotedAt?: true;
    resultingInvestorId?: true;
    resultingCounterpartyId?: true;
    createdAt?: true;
};
export type PublicIntakeSubmissionMaxAggregateInputType = {
    id?: true;
    intakeType?: true;
    status?: true;
    submittedIp?: true;
    rejectionReason?: true;
    promotedByUserId?: true;
    promotedAt?: true;
    resultingInvestorId?: true;
    resultingCounterpartyId?: true;
    createdAt?: true;
};
export type PublicIntakeSubmissionCountAggregateInputType = {
    id?: true;
    intakeType?: true;
    payload?: true;
    status?: true;
    submittedIp?: true;
    rejectionReason?: true;
    promotedByUserId?: true;
    promotedAt?: true;
    resultingInvestorId?: true;
    resultingCounterpartyId?: true;
    createdAt?: true;
    _all?: true;
};
export type PublicIntakeSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    orderBy?: Prisma.PublicIntakeSubmissionOrderByWithRelationInput | Prisma.PublicIntakeSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PublicIntakeSubmissionCountAggregateInputType;
    _min?: PublicIntakeSubmissionMinAggregateInputType;
    _max?: PublicIntakeSubmissionMaxAggregateInputType;
};
export type GetPublicIntakeSubmissionAggregateType<T extends PublicIntakeSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregatePublicIntakeSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePublicIntakeSubmission[P]> : Prisma.GetScalarType<T[P], AggregatePublicIntakeSubmission[P]>;
};
export type PublicIntakeSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    orderBy?: Prisma.PublicIntakeSubmissionOrderByWithAggregationInput | Prisma.PublicIntakeSubmissionOrderByWithAggregationInput[];
    by: Prisma.PublicIntakeSubmissionScalarFieldEnum[] | Prisma.PublicIntakeSubmissionScalarFieldEnum;
    having?: Prisma.PublicIntakeSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PublicIntakeSubmissionCountAggregateInputType | true;
    _min?: PublicIntakeSubmissionMinAggregateInputType;
    _max?: PublicIntakeSubmissionMaxAggregateInputType;
};
export type PublicIntakeSubmissionGroupByOutputType = {
    id: string;
    intakeType: $Enums.PublicIntakeType;
    payload: runtime.JsonValue;
    status: $Enums.PublicIntakeStatus;
    submittedIp: string | null;
    rejectionReason: string | null;
    promotedByUserId: string | null;
    promotedAt: Date | null;
    resultingInvestorId: string | null;
    resultingCounterpartyId: string | null;
    createdAt: Date;
    _count: PublicIntakeSubmissionCountAggregateOutputType | null;
    _min: PublicIntakeSubmissionMinAggregateOutputType | null;
    _max: PublicIntakeSubmissionMaxAggregateOutputType | null;
};
export type GetPublicIntakeSubmissionGroupByPayload<T extends PublicIntakeSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PublicIntakeSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PublicIntakeSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PublicIntakeSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PublicIntakeSubmissionGroupByOutputType[P]>;
}>>;
export type PublicIntakeSubmissionWhereInput = {
    AND?: Prisma.PublicIntakeSubmissionWhereInput | Prisma.PublicIntakeSubmissionWhereInput[];
    OR?: Prisma.PublicIntakeSubmissionWhereInput[];
    NOT?: Prisma.PublicIntakeSubmissionWhereInput | Prisma.PublicIntakeSubmissionWhereInput[];
    id?: Prisma.UuidFilter<"PublicIntakeSubmission"> | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeType;
    payload?: Prisma.JsonFilter<"PublicIntakeSubmission">;
    status?: Prisma.EnumPublicIntakeStatusFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    promotedByUserId?: Prisma.UuidNullableFilter<"PublicIntakeSubmission"> | string | null;
    promotedAt?: Prisma.DateTimeNullableFilter<"PublicIntakeSubmission"> | Date | string | null;
    resultingInvestorId?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    resultingCounterpartyId?: Prisma.UuidNullableFilter<"PublicIntakeSubmission"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PublicIntakeSubmission"> | Date | string;
    promotedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentListRelationFilter;
};
export type PublicIntakeSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    intakeType?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultingInvestorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultingCounterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    promotedBy?: Prisma.AppUserOrderByWithRelationInput;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentOrderByRelationAggregateInput;
};
export type PublicIntakeSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PublicIntakeSubmissionWhereInput | Prisma.PublicIntakeSubmissionWhereInput[];
    OR?: Prisma.PublicIntakeSubmissionWhereInput[];
    NOT?: Prisma.PublicIntakeSubmissionWhereInput | Prisma.PublicIntakeSubmissionWhereInput[];
    intakeType?: Prisma.EnumPublicIntakeTypeFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeType;
    payload?: Prisma.JsonFilter<"PublicIntakeSubmission">;
    status?: Prisma.EnumPublicIntakeStatusFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    promotedByUserId?: Prisma.UuidNullableFilter<"PublicIntakeSubmission"> | string | null;
    promotedAt?: Prisma.DateTimeNullableFilter<"PublicIntakeSubmission"> | Date | string | null;
    resultingInvestorId?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    resultingCounterpartyId?: Prisma.UuidNullableFilter<"PublicIntakeSubmission"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PublicIntakeSubmission"> | Date | string;
    promotedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentListRelationFilter;
}, "id">;
export type PublicIntakeSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    intakeType?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultingInvestorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultingCounterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PublicIntakeSubmissionCountOrderByAggregateInput;
    _max?: Prisma.PublicIntakeSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.PublicIntakeSubmissionMinOrderByAggregateInput;
};
export type PublicIntakeSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PublicIntakeSubmissionScalarWhereWithAggregatesInput | Prisma.PublicIntakeSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PublicIntakeSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PublicIntakeSubmissionScalarWhereWithAggregatesInput | Prisma.PublicIntakeSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PublicIntakeSubmission"> | string;
    intakeType?: Prisma.EnumPublicIntakeTypeWithAggregatesFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeType;
    payload?: Prisma.JsonWithAggregatesFilter<"PublicIntakeSubmission">;
    status?: Prisma.EnumPublicIntakeStatusWithAggregatesFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.StringNullableWithAggregatesFilter<"PublicIntakeSubmission"> | string | null;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"PublicIntakeSubmission"> | string | null;
    promotedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"PublicIntakeSubmission"> | string | null;
    promotedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PublicIntakeSubmission"> | Date | string | null;
    resultingInvestorId?: Prisma.StringNullableWithAggregatesFilter<"PublicIntakeSubmission"> | string | null;
    resultingCounterpartyId?: Prisma.UuidNullableWithAggregatesFilter<"PublicIntakeSubmission"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PublicIntakeSubmission"> | Date | string;
};
export type PublicIntakeSubmissionCreateInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
    promotedBy?: Prisma.AppUserCreateNestedOneWithoutPublicIntakePromotedInput;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentCreateNestedManyWithoutPublicIntakeSubmissionInput;
};
export type PublicIntakeSubmissionUncheckedCreateInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedByUserId?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutPublicIntakeSubmissionInput;
};
export type PublicIntakeSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotedBy?: Prisma.AppUserUpdateOneWithoutPublicIntakePromotedNestedInput;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithoutPublicIntakeSubmissionNestedInput;
};
export type PublicIntakeSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutPublicIntakeSubmissionNestedInput;
};
export type PublicIntakeSubmissionCreateManyInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedByUserId?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
};
export type PublicIntakeSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicIntakeSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicIntakeSubmissionListRelationFilter = {
    every?: Prisma.PublicIntakeSubmissionWhereInput;
    some?: Prisma.PublicIntakeSubmissionWhereInput;
    none?: Prisma.PublicIntakeSubmissionWhereInput;
};
export type PublicIntakeSubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PublicIntakeSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intakeType?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedIp?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    promotedByUserId?: Prisma.SortOrder;
    promotedAt?: Prisma.SortOrder;
    resultingInvestorId?: Prisma.SortOrder;
    resultingCounterpartyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PublicIntakeSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intakeType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedIp?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    promotedByUserId?: Prisma.SortOrder;
    promotedAt?: Prisma.SortOrder;
    resultingInvestorId?: Prisma.SortOrder;
    resultingCounterpartyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PublicIntakeSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    intakeType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedIp?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    promotedByUserId?: Prisma.SortOrder;
    promotedAt?: Prisma.SortOrder;
    resultingInvestorId?: Prisma.SortOrder;
    resultingCounterpartyId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PublicIntakeSubmissionNullableScalarRelationFilter = {
    is?: Prisma.PublicIntakeSubmissionWhereInput | null;
    isNot?: Prisma.PublicIntakeSubmissionWhereInput | null;
};
export type PublicIntakeSubmissionCreateNestedManyWithoutPromotedByInput = {
    create?: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput> | Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput[] | Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput[];
    connectOrCreate?: Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput | Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput[];
    createMany?: Prisma.PublicIntakeSubmissionCreateManyPromotedByInputEnvelope;
    connect?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
};
export type PublicIntakeSubmissionUncheckedCreateNestedManyWithoutPromotedByInput = {
    create?: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput> | Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput[] | Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput[];
    connectOrCreate?: Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput | Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput[];
    createMany?: Prisma.PublicIntakeSubmissionCreateManyPromotedByInputEnvelope;
    connect?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
};
export type PublicIntakeSubmissionUpdateManyWithoutPromotedByNestedInput = {
    create?: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput> | Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput[] | Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput[];
    connectOrCreate?: Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput | Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput[];
    upsert?: Prisma.PublicIntakeSubmissionUpsertWithWhereUniqueWithoutPromotedByInput | Prisma.PublicIntakeSubmissionUpsertWithWhereUniqueWithoutPromotedByInput[];
    createMany?: Prisma.PublicIntakeSubmissionCreateManyPromotedByInputEnvelope;
    set?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    disconnect?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    delete?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    connect?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    update?: Prisma.PublicIntakeSubmissionUpdateWithWhereUniqueWithoutPromotedByInput | Prisma.PublicIntakeSubmissionUpdateWithWhereUniqueWithoutPromotedByInput[];
    updateMany?: Prisma.PublicIntakeSubmissionUpdateManyWithWhereWithoutPromotedByInput | Prisma.PublicIntakeSubmissionUpdateManyWithWhereWithoutPromotedByInput[];
    deleteMany?: Prisma.PublicIntakeSubmissionScalarWhereInput | Prisma.PublicIntakeSubmissionScalarWhereInput[];
};
export type PublicIntakeSubmissionUncheckedUpdateManyWithoutPromotedByNestedInput = {
    create?: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput> | Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput[] | Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput[];
    connectOrCreate?: Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput | Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput[];
    upsert?: Prisma.PublicIntakeSubmissionUpsertWithWhereUniqueWithoutPromotedByInput | Prisma.PublicIntakeSubmissionUpsertWithWhereUniqueWithoutPromotedByInput[];
    createMany?: Prisma.PublicIntakeSubmissionCreateManyPromotedByInputEnvelope;
    set?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    disconnect?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    delete?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    connect?: Prisma.PublicIntakeSubmissionWhereUniqueInput | Prisma.PublicIntakeSubmissionWhereUniqueInput[];
    update?: Prisma.PublicIntakeSubmissionUpdateWithWhereUniqueWithoutPromotedByInput | Prisma.PublicIntakeSubmissionUpdateWithWhereUniqueWithoutPromotedByInput[];
    updateMany?: Prisma.PublicIntakeSubmissionUpdateManyWithWhereWithoutPromotedByInput | Prisma.PublicIntakeSubmissionUpdateManyWithWhereWithoutPromotedByInput[];
    deleteMany?: Prisma.PublicIntakeSubmissionScalarWhereInput | Prisma.PublicIntakeSubmissionScalarWhereInput[];
};
export type EnumPublicIntakeTypeFieldUpdateOperationsInput = {
    set?: $Enums.PublicIntakeType;
};
export type EnumPublicIntakeStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublicIntakeStatus;
};
export type PublicIntakeSubmissionCreateNestedOneWithoutPrivacyNoticeAcknowledgmentsInput = {
    create?: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPrivacyNoticeAcknowledgmentsInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPrivacyNoticeAcknowledgmentsInput>;
    connectOrCreate?: Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPrivacyNoticeAcknowledgmentsInput;
    connect?: Prisma.PublicIntakeSubmissionWhereUniqueInput;
};
export type PublicIntakeSubmissionUpdateOneWithoutPrivacyNoticeAcknowledgmentsNestedInput = {
    create?: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPrivacyNoticeAcknowledgmentsInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPrivacyNoticeAcknowledgmentsInput>;
    connectOrCreate?: Prisma.PublicIntakeSubmissionCreateOrConnectWithoutPrivacyNoticeAcknowledgmentsInput;
    upsert?: Prisma.PublicIntakeSubmissionUpsertWithoutPrivacyNoticeAcknowledgmentsInput;
    disconnect?: Prisma.PublicIntakeSubmissionWhereInput | boolean;
    delete?: Prisma.PublicIntakeSubmissionWhereInput | boolean;
    connect?: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateToOneWithWhereWithoutPrivacyNoticeAcknowledgmentsInput, Prisma.PublicIntakeSubmissionUpdateWithoutPrivacyNoticeAcknowledgmentsInput>, Prisma.PublicIntakeSubmissionUncheckedUpdateWithoutPrivacyNoticeAcknowledgmentsInput>;
};
export type PublicIntakeSubmissionCreateWithoutPromotedByInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentCreateNestedManyWithoutPublicIntakeSubmissionInput;
};
export type PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutPublicIntakeSubmissionInput;
};
export type PublicIntakeSubmissionCreateOrConnectWithoutPromotedByInput = {
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput>;
};
export type PublicIntakeSubmissionCreateManyPromotedByInputEnvelope = {
    data: Prisma.PublicIntakeSubmissionCreateManyPromotedByInput | Prisma.PublicIntakeSubmissionCreateManyPromotedByInput[];
    skipDuplicates?: boolean;
};
export type PublicIntakeSubmissionUpsertWithWhereUniqueWithoutPromotedByInput = {
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedUpdateWithoutPromotedByInput>;
    create: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPromotedByInput>;
};
export type PublicIntakeSubmissionUpdateWithWhereUniqueWithoutPromotedByInput = {
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateWithoutPromotedByInput, Prisma.PublicIntakeSubmissionUncheckedUpdateWithoutPromotedByInput>;
};
export type PublicIntakeSubmissionUpdateManyWithWhereWithoutPromotedByInput = {
    where: Prisma.PublicIntakeSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateManyMutationInput, Prisma.PublicIntakeSubmissionUncheckedUpdateManyWithoutPromotedByInput>;
};
export type PublicIntakeSubmissionScalarWhereInput = {
    AND?: Prisma.PublicIntakeSubmissionScalarWhereInput | Prisma.PublicIntakeSubmissionScalarWhereInput[];
    OR?: Prisma.PublicIntakeSubmissionScalarWhereInput[];
    NOT?: Prisma.PublicIntakeSubmissionScalarWhereInput | Prisma.PublicIntakeSubmissionScalarWhereInput[];
    id?: Prisma.UuidFilter<"PublicIntakeSubmission"> | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeType;
    payload?: Prisma.JsonFilter<"PublicIntakeSubmission">;
    status?: Prisma.EnumPublicIntakeStatusFilter<"PublicIntakeSubmission"> | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    promotedByUserId?: Prisma.UuidNullableFilter<"PublicIntakeSubmission"> | string | null;
    promotedAt?: Prisma.DateTimeNullableFilter<"PublicIntakeSubmission"> | Date | string | null;
    resultingInvestorId?: Prisma.StringNullableFilter<"PublicIntakeSubmission"> | string | null;
    resultingCounterpartyId?: Prisma.UuidNullableFilter<"PublicIntakeSubmission"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PublicIntakeSubmission"> | Date | string;
};
export type PublicIntakeSubmissionCreateWithoutPrivacyNoticeAcknowledgmentsInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
    promotedBy?: Prisma.AppUserCreateNestedOneWithoutPublicIntakePromotedInput;
};
export type PublicIntakeSubmissionUncheckedCreateWithoutPrivacyNoticeAcknowledgmentsInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedByUserId?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
};
export type PublicIntakeSubmissionCreateOrConnectWithoutPrivacyNoticeAcknowledgmentsInput = {
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPrivacyNoticeAcknowledgmentsInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPrivacyNoticeAcknowledgmentsInput>;
};
export type PublicIntakeSubmissionUpsertWithoutPrivacyNoticeAcknowledgmentsInput = {
    update: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateWithoutPrivacyNoticeAcknowledgmentsInput, Prisma.PublicIntakeSubmissionUncheckedUpdateWithoutPrivacyNoticeAcknowledgmentsInput>;
    create: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateWithoutPrivacyNoticeAcknowledgmentsInput, Prisma.PublicIntakeSubmissionUncheckedCreateWithoutPrivacyNoticeAcknowledgmentsInput>;
    where?: Prisma.PublicIntakeSubmissionWhereInput;
};
export type PublicIntakeSubmissionUpdateToOneWithWhereWithoutPrivacyNoticeAcknowledgmentsInput = {
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    data: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateWithoutPrivacyNoticeAcknowledgmentsInput, Prisma.PublicIntakeSubmissionUncheckedUpdateWithoutPrivacyNoticeAcknowledgmentsInput>;
};
export type PublicIntakeSubmissionUpdateWithoutPrivacyNoticeAcknowledgmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotedBy?: Prisma.AppUserUpdateOneWithoutPublicIntakePromotedNestedInput;
};
export type PublicIntakeSubmissionUncheckedUpdateWithoutPrivacyNoticeAcknowledgmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicIntakeSubmissionCreateManyPromotedByInput = {
    id?: string;
    intakeType: $Enums.PublicIntakeType;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.PublicIntakeStatus;
    submittedIp?: string | null;
    rejectionReason?: string | null;
    promotedAt?: Date | string | null;
    resultingInvestorId?: string | null;
    resultingCounterpartyId?: string | null;
    createdAt?: Date | string;
};
export type PublicIntakeSubmissionUpdateWithoutPromotedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithoutPublicIntakeSubmissionNestedInput;
};
export type PublicIntakeSubmissionUncheckedUpdateWithoutPromotedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    privacyNoticeAcknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutPublicIntakeSubmissionNestedInput;
};
export type PublicIntakeSubmissionUncheckedUpdateManyWithoutPromotedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    intakeType?: Prisma.EnumPublicIntakeTypeFieldUpdateOperationsInput | $Enums.PublicIntakeType;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumPublicIntakeStatusFieldUpdateOperationsInput | $Enums.PublicIntakeStatus;
    submittedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resultingInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resultingCounterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicIntakeSubmissionCountOutputType = {
    privacyNoticeAcknowledgments: number;
};
export type PublicIntakeSubmissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    privacyNoticeAcknowledgments?: boolean | PublicIntakeSubmissionCountOutputTypeCountPrivacyNoticeAcknowledgmentsArgs;
};
export type PublicIntakeSubmissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionCountOutputTypeSelect<ExtArgs> | null;
};
export type PublicIntakeSubmissionCountOutputTypeCountPrivacyNoticeAcknowledgmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
};
export type PublicIntakeSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    intakeType?: boolean;
    payload?: boolean;
    status?: boolean;
    submittedIp?: boolean;
    rejectionReason?: boolean;
    promotedByUserId?: boolean;
    promotedAt?: boolean;
    resultingInvestorId?: boolean;
    resultingCounterpartyId?: boolean;
    createdAt?: boolean;
    promotedBy?: boolean | Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs>;
    privacyNoticeAcknowledgments?: boolean | Prisma.PublicIntakeSubmission$privacyNoticeAcknowledgmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PublicIntakeSubmissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["publicIntakeSubmission"]>;
export type PublicIntakeSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    intakeType?: boolean;
    payload?: boolean;
    status?: boolean;
    submittedIp?: boolean;
    rejectionReason?: boolean;
    promotedByUserId?: boolean;
    promotedAt?: boolean;
    resultingInvestorId?: boolean;
    resultingCounterpartyId?: boolean;
    createdAt?: boolean;
    promotedBy?: boolean | Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs>;
}, ExtArgs["result"]["publicIntakeSubmission"]>;
export type PublicIntakeSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    intakeType?: boolean;
    payload?: boolean;
    status?: boolean;
    submittedIp?: boolean;
    rejectionReason?: boolean;
    promotedByUserId?: boolean;
    promotedAt?: boolean;
    resultingInvestorId?: boolean;
    resultingCounterpartyId?: boolean;
    createdAt?: boolean;
    promotedBy?: boolean | Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs>;
}, ExtArgs["result"]["publicIntakeSubmission"]>;
export type PublicIntakeSubmissionSelectScalar = {
    id?: boolean;
    intakeType?: boolean;
    payload?: boolean;
    status?: boolean;
    submittedIp?: boolean;
    rejectionReason?: boolean;
    promotedByUserId?: boolean;
    promotedAt?: boolean;
    resultingInvestorId?: boolean;
    resultingCounterpartyId?: boolean;
    createdAt?: boolean;
};
export type PublicIntakeSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "intakeType" | "payload" | "status" | "submittedIp" | "rejectionReason" | "promotedByUserId" | "promotedAt" | "resultingInvestorId" | "resultingCounterpartyId" | "createdAt", ExtArgs["result"]["publicIntakeSubmission"]>;
export type PublicIntakeSubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotedBy?: boolean | Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs>;
    privacyNoticeAcknowledgments?: boolean | Prisma.PublicIntakeSubmission$privacyNoticeAcknowledgmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PublicIntakeSubmissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PublicIntakeSubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotedBy?: boolean | Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs>;
};
export type PublicIntakeSubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotedBy?: boolean | Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs>;
};
export type $PublicIntakeSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PublicIntakeSubmission";
    objects: {
        promotedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        privacyNoticeAcknowledgments: Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        intakeType: $Enums.PublicIntakeType;
        payload: runtime.JsonValue;
        status: $Enums.PublicIntakeStatus;
        submittedIp: string | null;
        rejectionReason: string | null;
        promotedByUserId: string | null;
        promotedAt: Date | null;
        resultingInvestorId: string | null;
        resultingCounterpartyId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["publicIntakeSubmission"]>;
    composites: {};
};
export type PublicIntakeSubmissionGetPayload<S extends boolean | null | undefined | PublicIntakeSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload, S>;
export type PublicIntakeSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PublicIntakeSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PublicIntakeSubmissionCountAggregateInputType | true;
};
export interface PublicIntakeSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PublicIntakeSubmission'];
        meta: {
            name: 'PublicIntakeSubmission';
        };
    };
    findUnique<T extends PublicIntakeSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PublicIntakeSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PublicIntakeSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, PublicIntakeSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PublicIntakeSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PublicIntakeSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PublicIntakeSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, PublicIntakeSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PublicIntakeSubmissionCreateArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PublicIntakeSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, PublicIntakeSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PublicIntakeSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PublicIntakeSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PublicIntakeSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PublicIntakeSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PublicIntakeSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PublicIntakeSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PublicIntakeSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PublicIntakeSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PublicIntakeSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, PublicIntakeSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__PublicIntakeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$PublicIntakeSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PublicIntakeSubmissionCountArgs>(args?: Prisma.Subset<T, PublicIntakeSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PublicIntakeSubmissionCountAggregateOutputType> : number>;
    aggregate<T extends PublicIntakeSubmissionAggregateArgs>(args: Prisma.Subset<T, PublicIntakeSubmissionAggregateArgs>): Prisma.PrismaPromise<GetPublicIntakeSubmissionAggregateType<T>>;
    groupBy<T extends PublicIntakeSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PublicIntakeSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: PublicIntakeSubmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PublicIntakeSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicIntakeSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PublicIntakeSubmissionFieldRefs;
}
export interface Prisma__PublicIntakeSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    promotedBy<T extends Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PublicIntakeSubmission$promotedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    privacyNoticeAcknowledgments<T extends Prisma.PublicIntakeSubmission$privacyNoticeAcknowledgmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PublicIntakeSubmission$privacyNoticeAcknowledgmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PublicIntakeSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"PublicIntakeSubmission", 'String'>;
    readonly intakeType: Prisma.FieldRef<"PublicIntakeSubmission", 'PublicIntakeType'>;
    readonly payload: Prisma.FieldRef<"PublicIntakeSubmission", 'Json'>;
    readonly status: Prisma.FieldRef<"PublicIntakeSubmission", 'PublicIntakeStatus'>;
    readonly submittedIp: Prisma.FieldRef<"PublicIntakeSubmission", 'String'>;
    readonly rejectionReason: Prisma.FieldRef<"PublicIntakeSubmission", 'String'>;
    readonly promotedByUserId: Prisma.FieldRef<"PublicIntakeSubmission", 'String'>;
    readonly promotedAt: Prisma.FieldRef<"PublicIntakeSubmission", 'DateTime'>;
    readonly resultingInvestorId: Prisma.FieldRef<"PublicIntakeSubmission", 'String'>;
    readonly resultingCounterpartyId: Prisma.FieldRef<"PublicIntakeSubmission", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PublicIntakeSubmission", 'DateTime'>;
}
export type PublicIntakeSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
};
export type PublicIntakeSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
};
export type PublicIntakeSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    orderBy?: Prisma.PublicIntakeSubmissionOrderByWithRelationInput | Prisma.PublicIntakeSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicIntakeSubmissionScalarFieldEnum | Prisma.PublicIntakeSubmissionScalarFieldEnum[];
};
export type PublicIntakeSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    orderBy?: Prisma.PublicIntakeSubmissionOrderByWithRelationInput | Prisma.PublicIntakeSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicIntakeSubmissionScalarFieldEnum | Prisma.PublicIntakeSubmissionScalarFieldEnum[];
};
export type PublicIntakeSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    orderBy?: Prisma.PublicIntakeSubmissionOrderByWithRelationInput | Prisma.PublicIntakeSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicIntakeSubmissionScalarFieldEnum | Prisma.PublicIntakeSubmissionScalarFieldEnum[];
};
export type PublicIntakeSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateInput, Prisma.PublicIntakeSubmissionUncheckedCreateInput>;
};
export type PublicIntakeSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PublicIntakeSubmissionCreateManyInput | Prisma.PublicIntakeSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PublicIntakeSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    data: Prisma.PublicIntakeSubmissionCreateManyInput | Prisma.PublicIntakeSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PublicIntakeSubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PublicIntakeSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateInput, Prisma.PublicIntakeSubmissionUncheckedUpdateInput>;
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
};
export type PublicIntakeSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateManyMutationInput, Prisma.PublicIntakeSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    limit?: number;
};
export type PublicIntakeSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateManyMutationInput, Prisma.PublicIntakeSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    limit?: number;
    include?: Prisma.PublicIntakeSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PublicIntakeSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublicIntakeSubmissionCreateInput, Prisma.PublicIntakeSubmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PublicIntakeSubmissionUpdateInput, Prisma.PublicIntakeSubmissionUncheckedUpdateInput>;
};
export type PublicIntakeSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
    where: Prisma.PublicIntakeSubmissionWhereUniqueInput;
};
export type PublicIntakeSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicIntakeSubmissionWhereInput;
    limit?: number;
};
export type PublicIntakeSubmission$promotedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type PublicIntakeSubmission$privacyNoticeAcknowledgmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    orderBy?: Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput | Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum | Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum[];
};
export type PublicIntakeSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicIntakeSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.PublicIntakeSubmissionOmit<ExtArgs> | null;
    include?: Prisma.PublicIntakeSubmissionInclude<ExtArgs> | null;
};
