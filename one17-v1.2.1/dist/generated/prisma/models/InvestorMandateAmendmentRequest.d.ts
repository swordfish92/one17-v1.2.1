import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorMandateAmendmentRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorMandateAmendmentRequestPayload>;
export type AggregateInvestorMandateAmendmentRequest = {
    _count: InvestorMandateAmendmentRequestCountAggregateOutputType | null;
    _avg: InvestorMandateAmendmentRequestAvgAggregateOutputType | null;
    _sum: InvestorMandateAmendmentRequestSumAggregateOutputType | null;
    _min: InvestorMandateAmendmentRequestMinAggregateOutputType | null;
    _max: InvestorMandateAmendmentRequestMaxAggregateOutputType | null;
};
export type InvestorMandateAmendmentRequestAvgAggregateOutputType = {
    proposedTargetReturnRate: runtime.Decimal | null;
};
export type InvestorMandateAmendmentRequestSumAggregateOutputType = {
    proposedTargetReturnRate: runtime.Decimal | null;
};
export type InvestorMandateAmendmentRequestMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    proposedTargetReturnRate: runtime.Decimal | null;
    proposedRolloverDefault: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver: boolean | null;
    status: $Enums.InvestorMandateAmendmentStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type InvestorMandateAmendmentRequestMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    proposedTargetReturnRate: runtime.Decimal | null;
    proposedRolloverDefault: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver: boolean | null;
    status: $Enums.InvestorMandateAmendmentStatus | null;
    requestedByUserId: string | null;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date | null;
};
export type InvestorMandateAmendmentRequestCountAggregateOutputType = {
    id: number;
    investorId: number;
    proposedTargetReturnRate: number;
    proposedRolloverDefault: number;
    proposedEarlyExitWaiver: number;
    status: number;
    requestedByUserId: number;
    workflowInstanceId: number;
    rejectionNotes: number;
    createdAt: number;
    _all: number;
};
export type InvestorMandateAmendmentRequestAvgAggregateInputType = {
    proposedTargetReturnRate?: true;
};
export type InvestorMandateAmendmentRequestSumAggregateInputType = {
    proposedTargetReturnRate?: true;
};
export type InvestorMandateAmendmentRequestMinAggregateInputType = {
    id?: true;
    investorId?: true;
    proposedTargetReturnRate?: true;
    proposedRolloverDefault?: true;
    proposedEarlyExitWaiver?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type InvestorMandateAmendmentRequestMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    proposedTargetReturnRate?: true;
    proposedRolloverDefault?: true;
    proposedEarlyExitWaiver?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
};
export type InvestorMandateAmendmentRequestCountAggregateInputType = {
    id?: true;
    investorId?: true;
    proposedTargetReturnRate?: true;
    proposedRolloverDefault?: true;
    proposedEarlyExitWaiver?: true;
    status?: true;
    requestedByUserId?: true;
    workflowInstanceId?: true;
    rejectionNotes?: true;
    createdAt?: true;
    _all?: true;
};
export type InvestorMandateAmendmentRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput | Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorMandateAmendmentRequestCountAggregateInputType;
    _avg?: InvestorMandateAmendmentRequestAvgAggregateInputType;
    _sum?: InvestorMandateAmendmentRequestSumAggregateInputType;
    _min?: InvestorMandateAmendmentRequestMinAggregateInputType;
    _max?: InvestorMandateAmendmentRequestMaxAggregateInputType;
};
export type GetInvestorMandateAmendmentRequestAggregateType<T extends InvestorMandateAmendmentRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorMandateAmendmentRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorMandateAmendmentRequest[P]> : Prisma.GetScalarType<T[P], AggregateInvestorMandateAmendmentRequest[P]>;
};
export type InvestorMandateAmendmentRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorMandateAmendmentRequestOrderByWithAggregationInput | Prisma.InvestorMandateAmendmentRequestOrderByWithAggregationInput[];
    by: Prisma.InvestorMandateAmendmentRequestScalarFieldEnum[] | Prisma.InvestorMandateAmendmentRequestScalarFieldEnum;
    having?: Prisma.InvestorMandateAmendmentRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorMandateAmendmentRequestCountAggregateInputType | true;
    _avg?: InvestorMandateAmendmentRequestAvgAggregateInputType;
    _sum?: InvestorMandateAmendmentRequestSumAggregateInputType;
    _min?: InvestorMandateAmendmentRequestMinAggregateInputType;
    _max?: InvestorMandateAmendmentRequestMaxAggregateInputType;
};
export type InvestorMandateAmendmentRequestGroupByOutputType = {
    id: string;
    investorId: string;
    proposedTargetReturnRate: runtime.Decimal | null;
    proposedRolloverDefault: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver: boolean | null;
    status: $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId: string | null;
    rejectionNotes: string | null;
    createdAt: Date;
    _count: InvestorMandateAmendmentRequestCountAggregateOutputType | null;
    _avg: InvestorMandateAmendmentRequestAvgAggregateOutputType | null;
    _sum: InvestorMandateAmendmentRequestSumAggregateOutputType | null;
    _min: InvestorMandateAmendmentRequestMinAggregateOutputType | null;
    _max: InvestorMandateAmendmentRequestMaxAggregateOutputType | null;
};
export type GetInvestorMandateAmendmentRequestGroupByPayload<T extends InvestorMandateAmendmentRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorMandateAmendmentRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorMandateAmendmentRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorMandateAmendmentRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorMandateAmendmentRequestGroupByOutputType[P]>;
}>>;
export type InvestorMandateAmendmentRequestWhereInput = {
    AND?: Prisma.InvestorMandateAmendmentRequestWhereInput | Prisma.InvestorMandateAmendmentRequestWhereInput[];
    OR?: Prisma.InvestorMandateAmendmentRequestWhereInput[];
    NOT?: Prisma.InvestorMandateAmendmentRequestWhereInput | Prisma.InvestorMandateAmendmentRequestWhereInput[];
    id?: Prisma.UuidFilter<"InvestorMandateAmendmentRequest"> | string;
    investorId?: Prisma.StringFilter<"InvestorMandateAmendmentRequest"> | string;
    proposedTargetReturnRate?: Prisma.DecimalNullableFilter<"InvestorMandateAmendmentRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.EnumRolloverDefaultNullableFilter<"InvestorMandateAmendmentRequest"> | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.BoolNullableFilter<"InvestorMandateAmendmentRequest"> | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFilter<"InvestorMandateAmendmentRequest"> | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorMandateAmendmentRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestorMandateAmendmentRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorMandateAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorMandateAmendmentRequest"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
};
export type InvestorMandateAmendmentRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedTargetReturnRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedRolloverDefault?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedEarlyExitWaiver?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    requestedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
};
export type InvestorMandateAmendmentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.InvestorMandateAmendmentRequestWhereInput | Prisma.InvestorMandateAmendmentRequestWhereInput[];
    OR?: Prisma.InvestorMandateAmendmentRequestWhereInput[];
    NOT?: Prisma.InvestorMandateAmendmentRequestWhereInput | Prisma.InvestorMandateAmendmentRequestWhereInput[];
    investorId?: Prisma.StringFilter<"InvestorMandateAmendmentRequest"> | string;
    proposedTargetReturnRate?: Prisma.DecimalNullableFilter<"InvestorMandateAmendmentRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.EnumRolloverDefaultNullableFilter<"InvestorMandateAmendmentRequest"> | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.BoolNullableFilter<"InvestorMandateAmendmentRequest"> | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFilter<"InvestorMandateAmendmentRequest"> | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorMandateAmendmentRequest"> | string;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorMandateAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorMandateAmendmentRequest"> | Date | string;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type InvestorMandateAmendmentRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedTargetReturnRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedRolloverDefault?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedEarlyExitWaiver?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvestorMandateAmendmentRequestCountOrderByAggregateInput;
    _avg?: Prisma.InvestorMandateAmendmentRequestAvgOrderByAggregateInput;
    _max?: Prisma.InvestorMandateAmendmentRequestMaxOrderByAggregateInput;
    _min?: Prisma.InvestorMandateAmendmentRequestMinOrderByAggregateInput;
    _sum?: Prisma.InvestorMandateAmendmentRequestSumOrderByAggregateInput;
};
export type InvestorMandateAmendmentRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorMandateAmendmentRequestScalarWhereWithAggregatesInput | Prisma.InvestorMandateAmendmentRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorMandateAmendmentRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorMandateAmendmentRequestScalarWhereWithAggregatesInput | Prisma.InvestorMandateAmendmentRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | string;
    proposedTargetReturnRate?: Prisma.DecimalNullableWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.EnumRolloverDefaultNullableWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.BoolNullableWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.UuidWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorMandateAmendmentRequest"> | Date | string;
};
export type InvestorMandateAmendmentRequestCreateInput = {
    id?: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutMandateAmendmentRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorMandateAmendmentRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorMandateAmendmentRequestInput;
};
export type InvestorMandateAmendmentRequestUncheckedCreateInput = {
    id?: string;
    investorId: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorMandateAmendmentRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutMandateAmendmentRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorMandateAmendmentRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorMandateAmendmentRequestNestedInput;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestCreateManyInput = {
    id?: string;
    investorId: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorMandateAmendmentRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestListRelationFilter = {
    every?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    some?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    none?: Prisma.InvestorMandateAmendmentRequestWhereInput;
};
export type InvestorMandateAmendmentRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestorMandateAmendmentRequestNullableScalarRelationFilter = {
    is?: Prisma.InvestorMandateAmendmentRequestWhereInput | null;
    isNot?: Prisma.InvestorMandateAmendmentRequestWhereInput | null;
};
export type InvestorMandateAmendmentRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedTargetReturnRate?: Prisma.SortOrder;
    proposedRolloverDefault?: Prisma.SortOrder;
    proposedEarlyExitWaiver?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorMandateAmendmentRequestAvgOrderByAggregateInput = {
    proposedTargetReturnRate?: Prisma.SortOrder;
};
export type InvestorMandateAmendmentRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedTargetReturnRate?: Prisma.SortOrder;
    proposedRolloverDefault?: Prisma.SortOrder;
    proposedEarlyExitWaiver?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorMandateAmendmentRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    proposedTargetReturnRate?: Prisma.SortOrder;
    proposedRolloverDefault?: Prisma.SortOrder;
    proposedEarlyExitWaiver?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    rejectionNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvestorMandateAmendmentRequestSumOrderByAggregateInput = {
    proposedTargetReturnRate?: Prisma.SortOrder;
};
export type InvestorMandateAmendmentRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
};
export type InvestorMandateAmendmentRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
};
export type InvestorMandateAmendmentRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.InvestorMandateAmendmentRequestScalarWhereInput | Prisma.InvestorMandateAmendmentRequestScalarWhereInput[];
};
export type InvestorMandateAmendmentRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.InvestorMandateAmendmentRequestScalarWhereInput | Prisma.InvestorMandateAmendmentRequestScalarWhereInput[];
};
export type InvestorMandateAmendmentRequestCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
};
export type InvestorMandateAmendmentRequestUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
};
export type InvestorMandateAmendmentRequestUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.InvestorMandateAmendmentRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.InvestorMandateAmendmentRequestWhereInput | boolean;
    delete?: Prisma.InvestorMandateAmendmentRequestWhereInput | boolean;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUpdateWithoutWorkflowInstanceInput>, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.InvestorMandateAmendmentRequestUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.InvestorMandateAmendmentRequestWhereInput | boolean;
    delete?: Prisma.InvestorMandateAmendmentRequestWhereInput | boolean;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUpdateWithoutWorkflowInstanceInput>, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorMandateAmendmentRequestCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
};
export type InvestorMandateAmendmentRequestUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
};
export type InvestorMandateAmendmentRequestUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorMandateAmendmentRequestScalarWhereInput | Prisma.InvestorMandateAmendmentRequestScalarWhereInput[];
};
export type InvestorMandateAmendmentRequestUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput> | Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput[] | Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorMandateAmendmentRequestCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    disconnect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    delete?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    connect?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput | Prisma.InvestorMandateAmendmentRequestWhereUniqueInput[];
    update?: Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorMandateAmendmentRequestScalarWhereInput | Prisma.InvestorMandateAmendmentRequestScalarWhereInput[];
};
export type NullableEnumRolloverDefaultFieldUpdateOperationsInput = {
    set?: $Enums.RolloverDefault | null;
};
export type EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvestorMandateAmendmentStatus;
};
export type InvestorMandateAmendmentRequestCreateWithoutRequestedByInput = {
    id?: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutMandateAmendmentRequestsInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorMandateAmendmentRequestInput;
};
export type InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    investorId: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorMandateAmendmentRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput>;
};
export type InvestorMandateAmendmentRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.InvestorMandateAmendmentRequestCreateManyRequestedByInput | Prisma.InvestorMandateAmendmentRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutRequestedByInput>;
};
export type InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateWithoutRequestedByInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.InvestorMandateAmendmentRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateManyMutationInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type InvestorMandateAmendmentRequestScalarWhereInput = {
    AND?: Prisma.InvestorMandateAmendmentRequestScalarWhereInput | Prisma.InvestorMandateAmendmentRequestScalarWhereInput[];
    OR?: Prisma.InvestorMandateAmendmentRequestScalarWhereInput[];
    NOT?: Prisma.InvestorMandateAmendmentRequestScalarWhereInput | Prisma.InvestorMandateAmendmentRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"InvestorMandateAmendmentRequest"> | string;
    investorId?: Prisma.StringFilter<"InvestorMandateAmendmentRequest"> | string;
    proposedTargetReturnRate?: Prisma.DecimalNullableFilter<"InvestorMandateAmendmentRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.EnumRolloverDefaultNullableFilter<"InvestorMandateAmendmentRequest"> | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.BoolNullableFilter<"InvestorMandateAmendmentRequest"> | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFilter<"InvestorMandateAmendmentRequest"> | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.UuidFilter<"InvestorMandateAmendmentRequest"> | string;
    workflowInstanceId?: Prisma.UuidNullableFilter<"InvestorMandateAmendmentRequest"> | string | null;
    rejectionNotes?: Prisma.StringNullableFilter<"InvestorMandateAmendmentRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvestorMandateAmendmentRequest"> | Date | string;
};
export type InvestorMandateAmendmentRequestCreateWithoutWorkflowInstanceInput = {
    id?: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    investor: Prisma.InvestorCreateNestedOneWithoutMandateAmendmentRequestsInput;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorMandateAmendmentRequestsMadeInput;
};
export type InvestorMandateAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    investorId: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId: string;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorMandateAmendmentRequestCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type InvestorMandateAmendmentRequestUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
};
export type InvestorMandateAmendmentRequestUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateWithoutWorkflowInstanceInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type InvestorMandateAmendmentRequestUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutMandateAmendmentRequestsNestedInput;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorMandateAmendmentRequestsMadeNestedInput;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestCreateWithoutInvestorInput = {
    id?: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
    requestedBy: Prisma.AppUserCreateNestedOneWithoutInvestorMandateAmendmentRequestsMadeInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutInvestorMandateAmendmentRequestInput;
};
export type InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput = {
    id?: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorMandateAmendmentRequestCreateOrConnectWithoutInvestorInput = {
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput>;
};
export type InvestorMandateAmendmentRequestCreateManyInvestorInputEnvelope = {
    data: Prisma.InvestorMandateAmendmentRequestCreateManyInvestorInput | Prisma.InvestorMandateAmendmentRequestCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type InvestorMandateAmendmentRequestUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateWithoutInvestorInput>;
};
export type InvestorMandateAmendmentRequestUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateWithoutInvestorInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateWithoutInvestorInput>;
};
export type InvestorMandateAmendmentRequestUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.InvestorMandateAmendmentRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateManyMutationInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateManyWithoutInvestorInput>;
};
export type InvestorMandateAmendmentRequestCreateManyRequestedByInput = {
    id?: string;
    investorId: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorMandateAmendmentRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutMandateAmendmentRequestsNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorMandateAmendmentRequestNestedInput;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestCreateManyInvestorInput = {
    id?: string;
    proposedTargetReturnRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: boolean | null;
    status?: $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId: string;
    workflowInstanceId?: string | null;
    rejectionNotes?: string | null;
    createdAt?: Date | string;
};
export type InvestorMandateAmendmentRequestUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.AppUserUpdateOneRequiredWithoutInvestorMandateAmendmentRequestsMadeNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutInvestorMandateAmendmentRequestNestedInput;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedTargetReturnRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    proposedRolloverDefault?: Prisma.NullableEnumRolloverDefaultFieldUpdateOperationsInput | $Enums.RolloverDefault | null;
    proposedEarlyExitWaiver?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    status?: Prisma.EnumInvestorMandateAmendmentStatusFieldUpdateOperationsInput | $Enums.InvestorMandateAmendmentStatus;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvestorMandateAmendmentRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    proposedTargetReturnRate?: boolean;
    proposedRolloverDefault?: boolean;
    proposedEarlyExitWaiver?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorMandateAmendmentRequest"]>;
export type InvestorMandateAmendmentRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    proposedTargetReturnRate?: boolean;
    proposedRolloverDefault?: boolean;
    proposedEarlyExitWaiver?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorMandateAmendmentRequest"]>;
export type InvestorMandateAmendmentRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    proposedTargetReturnRate?: boolean;
    proposedRolloverDefault?: boolean;
    proposedEarlyExitWaiver?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["investorMandateAmendmentRequest"]>;
export type InvestorMandateAmendmentRequestSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    proposedTargetReturnRate?: boolean;
    proposedRolloverDefault?: boolean;
    proposedEarlyExitWaiver?: boolean;
    status?: boolean;
    requestedByUserId?: boolean;
    workflowInstanceId?: boolean;
    rejectionNotes?: boolean;
    createdAt?: boolean;
};
export type InvestorMandateAmendmentRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "proposedTargetReturnRate" | "proposedRolloverDefault" | "proposedEarlyExitWaiver" | "status" | "requestedByUserId" | "workflowInstanceId" | "rejectionNotes" | "createdAt", ExtArgs["result"]["investorMandateAmendmentRequest"]>;
export type InvestorMandateAmendmentRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs>;
};
export type InvestorMandateAmendmentRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs>;
};
export type InvestorMandateAmendmentRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs>;
};
export type $InvestorMandateAmendmentRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorMandateAmendmentRequest";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        requestedBy: Prisma.$AppUserPayload<ExtArgs>;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        proposedTargetReturnRate: runtime.Decimal | null;
        proposedRolloverDefault: $Enums.RolloverDefault | null;
        proposedEarlyExitWaiver: boolean | null;
        status: $Enums.InvestorMandateAmendmentStatus;
        requestedByUserId: string;
        workflowInstanceId: string | null;
        rejectionNotes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["investorMandateAmendmentRequest"]>;
    composites: {};
};
export type InvestorMandateAmendmentRequestGetPayload<S extends boolean | null | undefined | InvestorMandateAmendmentRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload, S>;
export type InvestorMandateAmendmentRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorMandateAmendmentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorMandateAmendmentRequestCountAggregateInputType | true;
};
export interface InvestorMandateAmendmentRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorMandateAmendmentRequest'];
        meta: {
            name: 'InvestorMandateAmendmentRequest';
        };
    };
    findUnique<T extends InvestorMandateAmendmentRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorMandateAmendmentRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorMandateAmendmentRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorMandateAmendmentRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorMandateAmendmentRequestFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorMandateAmendmentRequestCreateArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorMandateAmendmentRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorMandateAmendmentRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorMandateAmendmentRequestDeleteArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorMandateAmendmentRequestUpdateArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorMandateAmendmentRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorMandateAmendmentRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorMandateAmendmentRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorMandateAmendmentRequestUpsertArgs>(args: Prisma.SelectSubset<T, InvestorMandateAmendmentRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorMandateAmendmentRequestClient<runtime.Types.Result.GetResult<Prisma.$InvestorMandateAmendmentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorMandateAmendmentRequestCountArgs>(args?: Prisma.Subset<T, InvestorMandateAmendmentRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorMandateAmendmentRequestCountAggregateOutputType> : number>;
    aggregate<T extends InvestorMandateAmendmentRequestAggregateArgs>(args: Prisma.Subset<T, InvestorMandateAmendmentRequestAggregateArgs>): Prisma.PrismaPromise<GetInvestorMandateAmendmentRequestAggregateType<T>>;
    groupBy<T extends InvestorMandateAmendmentRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorMandateAmendmentRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorMandateAmendmentRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorMandateAmendmentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorMandateAmendmentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorMandateAmendmentRequestFieldRefs;
}
export interface Prisma__InvestorMandateAmendmentRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorMandateAmendmentRequestFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'String'>;
    readonly investorId: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'String'>;
    readonly proposedTargetReturnRate: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'Decimal'>;
    readonly proposedRolloverDefault: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'RolloverDefault'>;
    readonly proposedEarlyExitWaiver: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'Boolean'>;
    readonly status: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'InvestorMandateAmendmentStatus'>;
    readonly requestedByUserId: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'String'>;
    readonly rejectionNotes: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvestorMandateAmendmentRequest", 'DateTime'>;
}
export type InvestorMandateAmendmentRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
};
export type InvestorMandateAmendmentRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
};
export type InvestorMandateAmendmentRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput | Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorMandateAmendmentRequestScalarFieldEnum | Prisma.InvestorMandateAmendmentRequestScalarFieldEnum[];
};
export type InvestorMandateAmendmentRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput | Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorMandateAmendmentRequestScalarFieldEnum | Prisma.InvestorMandateAmendmentRequestScalarFieldEnum[];
};
export type InvestorMandateAmendmentRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    orderBy?: Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput | Prisma.InvestorMandateAmendmentRequestOrderByWithRelationInput[];
    cursor?: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorMandateAmendmentRequestScalarFieldEnum | Prisma.InvestorMandateAmendmentRequestScalarFieldEnum[];
};
export type InvestorMandateAmendmentRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateInput>;
};
export type InvestorMandateAmendmentRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorMandateAmendmentRequestCreateManyInput | Prisma.InvestorMandateAmendmentRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorMandateAmendmentRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    data: Prisma.InvestorMandateAmendmentRequestCreateManyInput | Prisma.InvestorMandateAmendmentRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestorMandateAmendmentRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestorMandateAmendmentRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateInput>;
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
};
export type InvestorMandateAmendmentRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateManyMutationInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateManyInput>;
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    limit?: number;
};
export type InvestorMandateAmendmentRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateManyMutationInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateManyInput>;
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    limit?: number;
    include?: Prisma.InvestorMandateAmendmentRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestorMandateAmendmentRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestCreateInput, Prisma.InvestorMandateAmendmentRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorMandateAmendmentRequestUpdateInput, Prisma.InvestorMandateAmendmentRequestUncheckedUpdateInput>;
};
export type InvestorMandateAmendmentRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
    where: Prisma.InvestorMandateAmendmentRequestWhereUniqueInput;
};
export type InvestorMandateAmendmentRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorMandateAmendmentRequestWhereInput;
    limit?: number;
};
export type InvestorMandateAmendmentRequest$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type InvestorMandateAmendmentRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorMandateAmendmentRequestSelect<ExtArgs> | null;
    omit?: Prisma.InvestorMandateAmendmentRequestOmit<ExtArgs> | null;
    include?: Prisma.InvestorMandateAmendmentRequestInclude<ExtArgs> | null;
};
