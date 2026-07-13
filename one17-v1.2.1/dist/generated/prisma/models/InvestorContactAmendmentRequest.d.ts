import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorContactAmendmentRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorContactAmendmentRequestPayload>;
export type AggregateInvestorContactAmendmentRequest = {
    _count: InvestorContactAmendmentRequestCountAggregateOutputType | null;
    _min: InvestorContactAmendmentRequestMinAggregateOutputType | null;
    _max: InvestorContactAmendmentRequestMaxAggregateOutputType | null;
};
export type InvestorContactAmendmentRequestMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    proposedContactEmail: string | null;
    proposedContactPhone: string | null;
    proposedRegisteredAddress: string | null;
    proposedTaxIdentificationNumber: string | null;
    proposedSourceOfFunds: string | null;
    proposedOccupationOrBusinessNature: string | null;
    status: $Enums.InvestorContactAmendmentStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type InvestorContactAmendmentRequestMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    proposedContactEmail: string | null;
    proposedContactPhone: string | null;
    proposedRegisteredAddress: string | null;
    proposedTaxIdentificationNumber: string | null;
    proposedSourceOfFunds: string | null;
    proposedOccupationOrBusinessNature: string | null;
    status: $Enums.InvestorContactAmendmentStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type InvestorContactAmendmentRequestCountAggregateOutputType = {
    id: number;
    investorId: number;
    proposedContactEmail: number;
    proposedContactPhone: number;
    proposedRegisteredAddress: number;
    proposedTaxIdentificationNumber: number;
    proposedSourceOfFunds: number;
    proposedOccupationOrBusinessNature: number;
    status: number;
    requestedByUserId: number;
    workflowInstanceId: number;
    rejectionNotes: number;
    createdAt: number;
    _all: number;
};
export type InvestorContactAmendmentRequestMinAggregateInputType = {
    id?: true;
    investorId?: true;
    proposedContactEmail?: true;
    proposedContactPhone?: true;
    proposedRegisteredAddress?: true;
    proposedTaxIdentificationNumber?: true;
    proposedSourceOfFunds?: true;
    proposedOccupationOrBusinessNature?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type InvestorContactAmendmentRequestMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    proposedContactEmail?: true;
    proposedContactPhone?: true;
    proposedRegisteredAddress?: true;
    proposedTaxIdentificationNumber?: true;
    proposedSourceOfFunds?: true;
    proposedOccupationOrBusinessNature?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type InvestorContactAmendmentRequestCountAggregateInputType = {
    id?: true;
    investorId?: true;
    proposedContactEmail?: true;
    proposedContactPhone?: true;
    proposedRegisteredAddress?: true;
    proposedTaxIdentificationNumber?: true;
    proposedSourceOfFunds?: true;
    proposedOccupationOrBusinessNature?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
    _all?: true;
};
export type InvestorContactAmendmentRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput | Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorContactAmendmentRequestCountAggregateInputType;
    _min?: InvestorContactAmendmentRequestMinAggregateInputType;
    _max?: InvestorContactAmendmentRequestMaxAggregateInputType;
};
export type GetInvestorContactAmendmentRequestAggregateType<T extends InvestorContactAmendmentRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorContactAmendmentRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorContactAmendmentRequest[P]> : Prisma.GetScalarType<T[P], AggregateInvestorContactAmendmentRequest[P]>;
};
export type InvestorContactAmendmentRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorContactAmendmentRequestOrderByWithAggregationInput | Prisma.InvestorContactAmendmentRequestOrderByWithAggregationInput[];
    by: Prisma.InvestorContactAmendmentRequestScalarFieldEnum[] | Prisma.InvestorContactAmendmentRequestScalarFieldEnum;
    having?: Prisma.InvestorContactAmendmentRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorContactAmendmentRequestCountAggregateInputType | true;
    _min?: InvestorContactAmendmentRequestMinAggregateInputType;
    _max?: InvestorContactAmendmentRequestMaxAggregateInputType;
};
export type InvestorContactAmendmentRequestGroupByOutputType = {
    id: string;
    investorId: string;
    proposedContactEmail: string | null;
    proposedContactPhone: string | null;
    proposedRegisteredAddress: string | null;
    proposedTaxIdentificationNumber: string | null;
    proposedSourceOfFunds: string | null;
    proposedOccupationOrBusinessNature: string | null;
    status: $Enums.InvestorContactAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date;
    _count: InvestorContactAmendmentRequestCountAggregateOutputType | null;
    _min: InvestorContactAmendmentRequestMinAggregateOutputType | null;
    _max: InvestorContactAmendmentRequestMaxAggregateOutputType | null;
};
export type GetInvestorContactAmendmentRequestGroupByPayload<T extends InvestorContactAmendmentRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorContactAmendmentRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorContactAmendmentRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorContactAmendmentRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorContactAmendmentRequestGroupByOutputType[P]>;
}>>;
export type InvestorContactAmendmentRequestWhereInput = {
    AND?: Prisma.InvestorContactAmendmentRequestWhereInput | Prisma.InvestorContactAmendmentRequestWhereInput[];
    OR?: Prisma.InvestorContactAmendmentRequestWhereInput[];
    NOT?: Prisma.InvestorContactAmendmentRequestWhereInput | Prisma.InvestorContactAmendmentRequestWhereInput[];
    id?: Prisma.UuidFilter<"InvestorContactAmendmentRequest"> | string;
    investorId?: Prisma.StringFilter<"InvestorContactAmendmentRequest"> | string;
    proposedContactEmail?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedContactPhone?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedRegisteredAddress?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedTaxIdentificationNumber?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedSourceOfFunds?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedOccupationOrBusinessNature?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFilter<"InvestorContactAmendmentRequest"> | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorContactAmendmentRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorContactAmendmentRequest"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
};
export type InvestorContactAmendmentRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedContactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedContactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedRegisteredAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedTaxIdentificationNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedSourceOfFunds?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedOccupationOrBusinessNature?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    requestedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
};
export type InvestorContactAmendmentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.InvestorContactAmendmentRequestWhereInput | Prisma.InvestorContactAmendmentRequestWhereInput[];
    OR?: Prisma.InvestorContactAmendmentRequestWhereInput[];
    NOT?: Prisma.InvestorContactAmendmentRequestWhereInput | Prisma.InvestorContactAmendmentRequestWhereInput[];
    investorId?: Prisma.StringFilter<"InvestorContactAmendmentRequest"> | string;
    proposedContactEmail?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedContactPhone?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedRegisteredAddress?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedTaxIdentificationNumber?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedSourceOfFunds?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedOccupationOrBusinessNature?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFilter<"InvestorContactAmendmentRequest"> | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorContactAmendmentRequest"> | string;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorContactAmendmentRequest"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type InvestorContactAmendmentRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedContactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedContactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedRegisteredAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedTaxIdentificationNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedSourceOfFunds?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedOccupationOrBusinessNature?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorContactAmendmentRequestCountOrderByAggregateInput;
    _max?: Prisma.InvestorContactAmendmentRequestMaxOrderByAggregateInput;
    _min?: Prisma.InvestorContactAmendmentRequestMinOrderByAggregateInput;
};
export type InvestorContactAmendmentRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorContactAmendmentRequestScalarWhereWithAggregatesInput | Prisma.InvestorContactAmendmentRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorContactAmendmentRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorContactAmendmentRequestScalarWhereWithAggregatesInput | Prisma.InvestorContactAmendmentRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string;
    proposedContactEmail?: Prisma.StringNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedContactPhone?: Prisma.StringNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedRegisteredAddress?: Prisma.StringNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedTaxIdentificationNumber?: Prisma.StringNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedSourceOfFunds?: Prisma.StringNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedOccupationOrBusinessNature?: Prisma.StringNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusWithAggregatesFilter<"InvestorContactAmendmentRequest"> | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableWithAggregatesFilter<"InvestorContactAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorContactAmendmentRequest"> | Date | string;
};
export type InvestorContactAmendmentRequestCreateInput = {
    id?: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutContactAmendmentRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorContactAmendmentRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorContactAmendmentRequestInput;
};
export type InvestorContactAmendmentRequestUncheckedCreateInput = {
    id?: string;
    investorId: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorContactAmendmentRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutContactAmendmentRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorContactAmendmentRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorContactAmendmentRequestNestedInput;
};
export type InvestorContactAmendmentRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestCreateManyInput = {
    id?: string;
    investorId: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorContactAmendmentRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestListRelationFilter = {
    every?: Prisma.InvestorContactAmendmentRequestWhereInput;
    some?: Prisma.InvestorContactAmendmentRequestWhereInput;
    none?: Prisma.InvestorContactAmendmentRequestWhereInput;
};
export type InvestorContactAmendmentRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestorContactAmendmentRequestNullableScalarRelationFilter = {
    is?: Prisma.InvestorContactAmendmentRequestWhereInput | null;
    isNot?: Prisma.InvestorContactAmendmentRequestWhereInput | null;
};
export type InvestorContactAmendmentRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedContactEmail?: Prisma.SortOrder;
    proposedContactPhone?: Prisma.SortOrder;
    proposedRegisteredAddress?: Prisma.SortOrder;
    proposedTaxIdentificationNumber?: Prisma.SortOrder;
    proposedSourceOfFunds?: Prisma.SortOrder;
    proposedOccupationOrBusinessNature?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorContactAmendmentRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedContactEmail?: Prisma.SortOrder;
    proposedContactPhone?: Prisma.SortOrder;
    proposedRegisteredAddress?: Prisma.SortOrder;
    proposedTaxIdentificationNumber?: Prisma.SortOrder;
    proposedSourceOfFunds?: Prisma.SortOrder;
    proposedOccupationOrBusinessNature?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorContactAmendmentRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedContactEmail?: Prisma.SortOrder;
    proposedContactPhone?: Prisma.SortOrder;
    proposedRegisteredAddress?: Prisma.SortOrder;
    proposedTaxIdentificationNumber?: Prisma.SortOrder;
    proposedSourceOfFunds?: Prisma.SortOrder;
    proposedOccupationOrBusinessNature?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorContactAmendmentRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
};
export type InvestorContactAmendmentRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
};
export type InvestorContactAmendmentRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.InvestorContactAmendmentRequestScalarWhereInput | Prisma.InvestorContactAmendmentRequestScalarWhereInput[];
};
export type InvestorContactAmendmentRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.InvestorContactAmendmentRequestScalarWhereInput | Prisma.InvestorContactAmendmentRequestScalarWhereInput[];
};
export type InvestorContactAmendmentRequestCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
};
export type InvestorContactAmendmentRequestUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
};
export type InvestorContactAmendmentRequestUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.InvestorContactAmendmentRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.InvestorContactAmendmentRequestWhereInput | boolean;
    delete?: Prisma.InvestorContactAmendmentRequestWhereInput | boolean;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUpdateWithoutWorkflowInstanceInput>, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorContactAmendmentRequestUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.InvestorContactAmendmentRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.InvestorContactAmendmentRequestWhereInput | boolean;
    delete?: Prisma.InvestorContactAmendmentRequestWhereInput | boolean;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUpdateWithoutWorkflowInstanceInput>, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorContactAmendmentRequestCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
};
export type InvestorContactAmendmentRequestUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
};
export type InvestorContactAmendmentRequestUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorContactAmendmentRequestScalarWhereInput | Prisma.InvestorContactAmendmentRequestScalarWhereInput[];
};
export type InvestorContactAmendmentRequestUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorContactAmendmentRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput | Prisma.InvestorContactAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorContactAmendmentRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorContactAmendmentRequestScalarWhereInput | Prisma.InvestorContactAmendmentRequestScalarWhereInput[];
};
export type EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvestorContactAmendmentStatus;
};
export type InvestorContactAmendmentRequestCreateWithoutRequestedByInput = {
    id?: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutContactAmendmentRequestsInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorContactAmendmentRequestInput;
};
export type InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    investorId: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorContactAmendmentRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput>;
};
export type InvestorContactAmendmentRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.InvestorContactAmendmentRequestCreateManyRequestedByInput | Prisma.InvestorContactAmendmentRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutRequestedByInput>;
};
export type InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateWithoutRequestedByInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type InvestorContactAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.InvestorContactAmendmentRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateManyMutationInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type InvestorContactAmendmentRequestScalarWhereInput = {
    AND?: Prisma.InvestorContactAmendmentRequestScalarWhereInput | Prisma.InvestorContactAmendmentRequestScalarWhereInput[];
    OR?: Prisma.InvestorContactAmendmentRequestScalarWhereInput[];
    NOT?: Prisma.InvestorContactAmendmentRequestScalarWhereInput | Prisma.InvestorContactAmendmentRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"InvestorContactAmendmentRequest"> | string;
    investorId?: Prisma.StringFilter<"InvestorContactAmendmentRequest"> | string;
    proposedContactEmail?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedContactPhone?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedRegisteredAddress?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedTaxIdentificationNumber?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedSourceOfFunds?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    proposedOccupationOrBusinessNature?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFilter<"InvestorContactAmendmentRequest"> | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorContactAmendmentRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorContactAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorContactAmendmentRequest"> | Date | string;
};
export type InvestorContactAmendmentRequestCreateWithoutWorkflowInstanceInput = {
    id?: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutContactAmendmentRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorContactAmendmentRequestsMadeInput;
};
export type InvestorContactAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    investorId: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    requestedByUserId: string;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorContactAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type InvestorContactAmendmentRequestUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
};
export type InvestorContactAmendmentRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateWithoutWorkflowInstanceInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorContactAmendmentRequestUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutContactAmendmentRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorContactAmendmentRequestsMadeNestedInput;
};
export type InvestorContactAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestCreateWithoutInvestorInput = {
    id?: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorContactAmendmentRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorContactAmendmentRequestInput;
};
export type InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput = {
    id?: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorContactAmendmentRequestCreateOrConnectWithoutInvestorInput = {
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput>;
};
export type InvestorContactAmendmentRequestCreateManyInvestorInputEnvelope = {
    data: Prisma.InvestorContactAmendmentRequestCreateManyInvestorInput | Prisma.InvestorContactAmendmentRequestCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type InvestorContactAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateWithoutInvestorInput>;
};
export type InvestorContactAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateWithoutInvestorInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateWithoutInvestorInput>;
};
export type InvestorContactAmendmentRequestUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.InvestorContactAmendmentRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateManyMutationInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateManyWithoutInvestorInput>;
};
export type InvestorContactAmendmentRequestCreateManyRequestedByInput = {
    id?: string;
    investorId: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorContactAmendmentRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutContactAmendmentRequestsNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorContactAmendmentRequestNestedInput;
};
export type InvestorContactAmendmentRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestCreateManyInvestorInput = {
    id?: string;
    proposedContactEmail?: string | null;
    proposedContactPhone?: string | null;
    proposedRegisteredAddress?: string | null;
    proposedTaxIdentificationNumber?: string | null;
    proposedSourceOfFunds?: string | null;
    proposedOccupationOrBusinessNature?: string | null;
    status?: $Enums.InvestorContactAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorContactAmendmentRequestUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorContactAmendmentRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorContactAmendmentRequestNestedInput;
};
export type InvestorContactAmendmentRequestUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedContactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedContactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedRegisteredAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedTaxIdentificationNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedSourceOfFunds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedOccupationOrBusinessNature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInvestorContactAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorContactAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorContactAmendmentRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    proposedContactEmail?: boolean;
    proposedContactPhone?: boolean;
    proposedRegisteredAddress?: boolean;
    proposedTaxIdentificationNumber?: boolean;
    proposedSourceOfFunds?: boolean;
    proposedOccupationOrBusinessNature?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorContactAmendmentRequest"]>;
export type InvestorContactAmendmentRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    proposedContactEmail?: boolean;
    proposedContactPhone?: boolean;
    proposedRegisteredAddress?: boolean;
    proposedTaxIdentificationNumber?: boolean;
    proposedSourceOfFunds?: boolean;
    proposedOccupationOrBusinessNature?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorContactAmendmentRequest"]>;
export type InvestorContactAmendmentRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    proposedContactEmail?: boolean;
    proposedContactPhone?: boolean;
    proposedRegisteredAddress?: boolean;
    proposedTaxIdentificationNumber?: boolean;
    proposedSourceOfFunds?: boolean;
    proposedOccupationOrBusinessNature?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorContactAmendmentRequest"]>;
export type InvestorContactAmendmentRequestSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    proposedContactEmail?: boolean;
    proposedContactPhone?: boolean;
    proposedRegisteredAddress?: boolean;
    proposedTaxIdentificationNumber?: boolean;
    proposedSourceOfFunds?: boolean;
    proposedOccupationOrBusinessNature?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
};
export type InvestorContactAmendmentRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "proposedContactEmail" | "proposedContactPhone" | "proposedRegisteredAddress" | "proposedTaxIdentificationNumber" | "proposedSourceOfFunds" | "proposedOccupationOrBusinessNature" | "status" | "requestedByUserId" | "workflowInstanceId" | "rejectionNotes" | "createdAt", ExtArgs["result"]["investorContactAmendmentRequest"]>;
export type InvestorContactAmendmentRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs>;
};
export type InvestorContactAmendmentRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs>;
};
export type InvestorContactAmendmentRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs>;
};
export type $InvestorContactAmendmentRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorContactAmendmentRequest";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        requestedBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        proposedContactEmail: string | null;
        proposedContactPhone: string | null;
        proposedRegisteredAddress: string | null;
        proposedTaxIdentificationNumber: string | null;
        proposedSourceOfFunds: string | null;
        proposedOccupationOrBusinessNature: string | null;
        status: $Enums.InvestorContactAmendmentStatus;
        requestedByUserId: string;
        workflowInstanceId: string | null;
        rejectionNotes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["investorContactAmendmentRequest"]>;
    composites: {};
};
export type InvestorContactAmendmentRequestGetPayload<S extends boolean | null | undefined | InvestorContactAmendmentRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload, S>;
export type InvestorContactAmendmentRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorContactAmendmentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorContactAmendmentRequestCountAggregateInputType | true;
};
export interface InvestorContactAmendmentRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorContactAmendmentRequest'];
        meta: {
            name: 'InvestorContactAmendmentRequest';
        };
    };
    findUnique<T extends InvestorContactAmendmentRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorContactAmendmentRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorContactAmendmentRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorContactAmendmentRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorContactAmendmentRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorContactAmendmentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorContactAmendmentRequestFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorContactAmendmentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorContactAmendmentRequestCreateArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorContactAmendmentRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorContactAmendmentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorContactAmendmentRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorContactAmendmentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorContactAmendmentRequestDeleteArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorContactAmendmentRequestUpdateArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorContactAmendmentRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorContactAmendmentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorContactAmendmentRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorContactAmendmentRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorContactAmendmentRequestUpsertArgs>(args: Prisma.SelectSubset<T, InvestorContactAmendmentRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorContactAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorContactAmendmentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorContactAmendmentRequestCountArgs>(args?: Prisma.Subset<T, InvestorContactAmendmentRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorContactAmendmentRequestCountAggregateOutputType> : number>;
    aggregate<T extends InvestorContactAmendmentRequestAggregateArgs>(args: Prisma.Subset<T, InvestorContactAmendmentRequestAggregateArgs>): Prisma.PrismaPromise<GetInvestorContactAmendmentRequestAggregateType<T>>;
    groupBy<T extends InvestorContactAmendmentRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorContactAmendmentRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorContactAmendmentRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorContactAmendmentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorContactAmendmentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorContactAmendmentRequestFieldRefs;
}
export interface Prisma__InvestorContactAmendmentRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorContactAmendmentRequestFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly investorId: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly proposedContactEmail: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly proposedContactPhone: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly proposedRegisteredAddress: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly proposedTaxIdentificationNumber: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly proposedSourceOfFunds: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly proposedOccupationOrBusinessNature: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly status: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'InvestorContactAmendmentStatus'>;
    readonly requestedByUserId: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly rejectionNotes: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestorContactAmendmentRequest", 'DateTime'>;
}
export type InvestorContactAmendmentRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
};
export type InvestorContactAmendmentRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
};
export type InvestorContactAmendmentRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput | Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorContactAmendmentRequestScalarFieldEnum | Prisma.InvestorContactAmendmentRequestScalarFieldEnum[];
};
export type InvestorContactAmendmentRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput | Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorContactAmendmentRequestScalarFieldEnum | Prisma.InvestorContactAmendmentRequestScalarFieldEnum[];
};
export type InvestorContactAmendmentRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput | Prisma.InvestorContactAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorContactAmendmentRequestScalarFieldEnum | Prisma.InvestorContactAmendmentRequestScalarFieldEnum[];
};
export type InvestorContactAmendmentRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateInput>;
};
export type InvestorContactAmendmentRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorContactAmendmentRequestCreateManyInput | Prisma.InvestorContactAmendmentRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorContactAmendmentRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    data: Prisma.InvestorContactAmendmentRequestCreateManyInput | Prisma.InvestorContactAmendmentRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestorContactAmendmentRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestorContactAmendmentRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateInput>;
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
};
export type InvestorContactAmendmentRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateManyMutationInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateManyInput>;
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    limit?: number;
};
export type InvestorContactAmendmentRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateManyMutationInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateManyInput>;
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    limit?: number;
    include?: Prisma.InvestorContactAmendmentRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestorContactAmendmentRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorContactAmendmentRequestCreateInput, Prisma.InvestorContactAmendmentRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorContactAmendmentRequestUpdateInput, Prisma.InvestorContactAmendmentRequestUncheckedUpdateInput>;
};
export type InvestorContactAmendmentRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorContactAmendmentRequestWhereUniqueInput;
};
export type InvestorContactAmendmentRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorContactAmendmentRequestWhereInput;
    limit?: number;
};
export type InvestorContactAmendmentRequest$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type InvestorContactAmendmentRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorContactAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorContactAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorContactAmendmentRequestInclude<ExtArgs> | null;
};
