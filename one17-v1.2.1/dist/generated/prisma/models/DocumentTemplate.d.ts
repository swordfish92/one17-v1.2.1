import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentTemplatePayload>;
export type AggregateDocumentTemplate = {
    _count: DocumentTemplateCountAggregateOutputType | null;
    _avg: DocumentTemplateAvgAggregateOutputType | null;
    _sum: DocumentTemplateSumAggregateOutputType | null;
    _min: DocumentTemplateMinAggregateOutputType | null;
    _max: DocumentTemplateMaxAggregateOutputType | null;
};
export type DocumentTemplateAvgAggregateOutputType = {
    version: number | null;
};
export type DocumentTemplateSumAggregateOutputType = {
    version: number | null;
};
export type DocumentTemplateMinAggregateOutputType = {
    id: string | null;
    templateType: $Enums.DocumentTemplateType | null;
    templateKey: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    disclaimerText: string | null;
    secRuleDisclaimer: string | null;
    bodyTemplate: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type DocumentTemplateMaxAggregateOutputType = {
    id: string | null;
    templateType: $Enums.DocumentTemplateType | null;
    templateKey: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    disclaimerText: string | null;
    secRuleDisclaimer: string | null;
    bodyTemplate: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type DocumentTemplateCountAggregateOutputType = {
    id: number;
    templateType: number;
    templateKey: number;
    version: number;
    status: number;
    disclaimerText: number;
    secRuleDisclaimer: number;
    bodyTemplate: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type DocumentTemplateAvgAggregateInputType = {
    version?: true;
};
export type DocumentTemplateSumAggregateInputType = {
    version?: true;
};
export type DocumentTemplateMinAggregateInputType = {
    id?: true;
    templateType?: true;
    templateKey?: true;
    version?: true;
    status?: true;
    disclaimerText?: true;
    secRuleDisclaimer?: true;
    bodyTemplate?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type DocumentTemplateMaxAggregateInputType = {
    id?: true;
    templateType?: true;
    templateKey?: true;
    version?: true;
    status?: true;
    disclaimerText?: true;
    secRuleDisclaimer?: true;
    bodyTemplate?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type DocumentTemplateCountAggregateInputType = {
    id?: true;
    templateType?: true;
    templateKey?: true;
    version?: true;
    status?: true;
    disclaimerText?: true;
    secRuleDisclaimer?: true;
    bodyTemplate?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type DocumentTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentTemplateWhereInput;
    orderBy?: Prisma.DocumentTemplateOrderByWithRelationInput | Prisma.DocumentTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DocumentTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentTemplateCountAggregateInputType;
    _avg?: DocumentTemplateAvgAggregateInputType;
    _sum?: DocumentTemplateSumAggregateInputType;
    _min?: DocumentTemplateMinAggregateInputType;
    _max?: DocumentTemplateMaxAggregateInputType;
};
export type GetDocumentTemplateAggregateType<T extends DocumentTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentTemplate[P]> : Prisma.GetScalarType<T[P], AggregateDocumentTemplate[P]>;
};
export type DocumentTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentTemplateWhereInput;
    orderBy?: Prisma.DocumentTemplateOrderByWithAggregationInput | Prisma.DocumentTemplateOrderByWithAggregationInput[];
    by: Prisma.DocumentTemplateScalarFieldEnum[] | Prisma.DocumentTemplateScalarFieldEnum;
    having?: Prisma.DocumentTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentTemplateCountAggregateInputType | true;
    _avg?: DocumentTemplateAvgAggregateInputType;
    _sum?: DocumentTemplateSumAggregateInputType;
    _min?: DocumentTemplateMinAggregateInputType;
    _max?: DocumentTemplateMaxAggregateInputType;
};
export type DocumentTemplateGroupByOutputType = {
    id: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    disclaimerText: string | null;
    secRuleDisclaimer: string | null;
    bodyTemplate: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: DocumentTemplateCountAggregateOutputType | null;
    _avg: DocumentTemplateAvgAggregateOutputType | null;
    _sum: DocumentTemplateSumAggregateOutputType | null;
    _min: DocumentTemplateMinAggregateOutputType | null;
    _max: DocumentTemplateMaxAggregateOutputType | null;
};
export type GetDocumentTemplateGroupByPayload<T extends DocumentTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentTemplateGroupByOutputType[P]>;
}>>;
export type DocumentTemplateWhereInput = {
    AND?: Prisma.DocumentTemplateWhereInput | Prisma.DocumentTemplateWhereInput[];
    OR?: Prisma.DocumentTemplateWhereInput[];
    NOT?: Prisma.DocumentTemplateWhereInput | Prisma.DocumentTemplateWhereInput[];
    id?: Prisma.UuidFilter<"DocumentTemplate"> | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFilter<"DocumentTemplate"> | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFilter<"DocumentTemplate"> | string;
    version?: Prisma.IntFilter<"DocumentTemplate"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"DocumentTemplate"> | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.StringNullableFilter<"DocumentTemplate"> | string | null;
    secRuleDisclaimer?: Prisma.StringNullableFilter<"DocumentTemplate"> | string | null;
    bodyTemplate?: Prisma.StringNullableFilter<"DocumentTemplate"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"DocumentTemplate"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"DocumentTemplate"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"DocumentTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentTemplate"> | Date | string;
    certificatesIssued?: Prisma.CertificateListRelationFilter;
    letterInstances?: Prisma.LetterInstanceListRelationFilter;
};
export type DocumentTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    templateType?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    disclaimerText?: Prisma.SortOrderInput | Prisma.SortOrder;
    secRuleDisclaimer?: Prisma.SortOrderInput | Prisma.SortOrder;
    bodyTemplate?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    certificatesIssued?: Prisma.CertificateOrderByRelationAggregateInput;
    letterInstances?: Prisma.LetterInstanceOrderByRelationAggregateInput;
};
export type DocumentTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    templateType_templateKey_version?: Prisma.DocumentTemplateTemplateTypeTemplateKeyVersionCompoundUniqueInput;
    AND?: Prisma.DocumentTemplateWhereInput | Prisma.DocumentTemplateWhereInput[];
    OR?: Prisma.DocumentTemplateWhereInput[];
    NOT?: Prisma.DocumentTemplateWhereInput | Prisma.DocumentTemplateWhereInput[];
    templateType?: Prisma.EnumDocumentTemplateTypeFilter<"DocumentTemplate"> | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFilter<"DocumentTemplate"> | string;
    version?: Prisma.IntFilter<"DocumentTemplate"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"DocumentTemplate"> | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.StringNullableFilter<"DocumentTemplate"> | string | null;
    secRuleDisclaimer?: Prisma.StringNullableFilter<"DocumentTemplate"> | string | null;
    bodyTemplate?: Prisma.StringNullableFilter<"DocumentTemplate"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"DocumentTemplate"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"DocumentTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentTemplate"> | Date | string;
    certificatesIssued?: Prisma.CertificateListRelationFilter;
    letterInstances?: Prisma.LetterInstanceListRelationFilter;
}, "id" | "workflowInstanceId" | "templateType_templateKey_version">;
export type DocumentTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    templateType?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    disclaimerText?: Prisma.SortOrderInput | Prisma.SortOrder;
    secRuleDisclaimer?: Prisma.SortOrderInput | Prisma.SortOrder;
    bodyTemplate?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentTemplateCountOrderByAggregateInput;
    _avg?: Prisma.DocumentTemplateAvgOrderByAggregateInput;
    _max?: Prisma.DocumentTemplateMaxOrderByAggregateInput;
    _min?: Prisma.DocumentTemplateMinOrderByAggregateInput;
    _sum?: Prisma.DocumentTemplateSumOrderByAggregateInput;
};
export type DocumentTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentTemplateScalarWhereWithAggregatesInput | Prisma.DocumentTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentTemplateScalarWhereWithAggregatesInput | Prisma.DocumentTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DocumentTemplate"> | string;
    templateType?: Prisma.EnumDocumentTemplateTypeWithAggregatesFilter<"DocumentTemplate"> | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringWithAggregatesFilter<"DocumentTemplate"> | string;
    version?: Prisma.IntWithAggregatesFilter<"DocumentTemplate"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"DocumentTemplate"> | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.StringNullableWithAggregatesFilter<"DocumentTemplate"> | string | null;
    secRuleDisclaimer?: Prisma.StringNullableWithAggregatesFilter<"DocumentTemplate"> | string | null;
    bodyTemplate?: Prisma.StringNullableWithAggregatesFilter<"DocumentTemplate"> | string | null;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"DocumentTemplate"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"DocumentTemplate"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"DocumentTemplate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DocumentTemplate"> | Date | string;
};
export type DocumentTemplateCreateInput = {
    id?: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    disclaimerText?: string | null;
    secRuleDisclaimer?: string | null;
    bodyTemplate?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    certificatesIssued?: Prisma.CertificateCreateNestedManyWithoutTemplateInput;
    letterInstances?: Prisma.LetterInstanceCreateNestedManyWithoutTemplateInput;
};
export type DocumentTemplateUncheckedCreateInput = {
    id?: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    disclaimerText?: string | null;
    secRuleDisclaimer?: string | null;
    bodyTemplate?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    certificatesIssued?: Prisma.CertificateUncheckedCreateNestedManyWithoutTemplateInput;
    letterInstances?: Prisma.LetterInstanceUncheckedCreateNestedManyWithoutTemplateInput;
};
export type DocumentTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    certificatesIssued?: Prisma.CertificateUpdateManyWithoutTemplateNestedInput;
    letterInstances?: Prisma.LetterInstanceUpdateManyWithoutTemplateNestedInput;
};
export type DocumentTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    certificatesIssued?: Prisma.CertificateUncheckedUpdateManyWithoutTemplateNestedInput;
    letterInstances?: Prisma.LetterInstanceUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type DocumentTemplateCreateManyInput = {
    id?: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    disclaimerText?: string | null;
    secRuleDisclaimer?: string | null;
    bodyTemplate?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type DocumentTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentTemplateTemplateTypeTemplateKeyVersionCompoundUniqueInput = {
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
};
export type DocumentTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateType?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    disclaimerText?: Prisma.SortOrder;
    secRuleDisclaimer?: Prisma.SortOrder;
    bodyTemplate?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentTemplateAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type DocumentTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateType?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    disclaimerText?: Prisma.SortOrder;
    secRuleDisclaimer?: Prisma.SortOrder;
    bodyTemplate?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateType?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    disclaimerText?: Prisma.SortOrder;
    secRuleDisclaimer?: Prisma.SortOrder;
    bodyTemplate?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentTemplateSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type DocumentTemplateNullableScalarRelationFilter = {
    is?: Prisma.DocumentTemplateWhereInput | null;
    isNot?: Prisma.DocumentTemplateWhereInput | null;
};
export type DocumentTemplateScalarRelationFilter = {
    is?: Prisma.DocumentTemplateWhereInput;
    isNot?: Prisma.DocumentTemplateWhereInput;
};
export type EnumDocumentTemplateTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentTemplateType;
};
export type DocumentTemplateCreateNestedOneWithoutCertificatesIssuedInput = {
    create?: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutCertificatesIssuedInput, Prisma.DocumentTemplateUncheckedCreateWithoutCertificatesIssuedInput>;
    connectOrCreate?: Prisma.DocumentTemplateCreateOrConnectWithoutCertificatesIssuedInput;
    connect?: Prisma.DocumentTemplateWhereUniqueInput;
};
export type DocumentTemplateUpdateOneWithoutCertificatesIssuedNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutCertificatesIssuedInput, Prisma.DocumentTemplateUncheckedCreateWithoutCertificatesIssuedInput>;
    connectOrCreate?: Prisma.DocumentTemplateCreateOrConnectWithoutCertificatesIssuedInput;
    upsert?: Prisma.DocumentTemplateUpsertWithoutCertificatesIssuedInput;
    disconnect?: Prisma.DocumentTemplateWhereInput | boolean;
    delete?: Prisma.DocumentTemplateWhereInput | boolean;
    connect?: Prisma.DocumentTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentTemplateUpdateToOneWithWhereWithoutCertificatesIssuedInput, Prisma.DocumentTemplateUpdateWithoutCertificatesIssuedInput>, Prisma.DocumentTemplateUncheckedUpdateWithoutCertificatesIssuedInput>;
};
export type DocumentTemplateCreateNestedOneWithoutLetterInstancesInput = {
    create?: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutLetterInstancesInput, Prisma.DocumentTemplateUncheckedCreateWithoutLetterInstancesInput>;
    connectOrCreate?: Prisma.DocumentTemplateCreateOrConnectWithoutLetterInstancesInput;
    connect?: Prisma.DocumentTemplateWhereUniqueInput;
};
export type DocumentTemplateUpdateOneRequiredWithoutLetterInstancesNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutLetterInstancesInput, Prisma.DocumentTemplateUncheckedCreateWithoutLetterInstancesInput>;
    connectOrCreate?: Prisma.DocumentTemplateCreateOrConnectWithoutLetterInstancesInput;
    upsert?: Prisma.DocumentTemplateUpsertWithoutLetterInstancesInput;
    connect?: Prisma.DocumentTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentTemplateUpdateToOneWithWhereWithoutLetterInstancesInput, Prisma.DocumentTemplateUpdateWithoutLetterInstancesInput>, Prisma.DocumentTemplateUncheckedUpdateWithoutLetterInstancesInput>;
};
export type DocumentTemplateCreateWithoutCertificatesIssuedInput = {
    id?: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    disclaimerText?: string | null;
    secRuleDisclaimer?: string | null;
    bodyTemplate?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    letterInstances?: Prisma.LetterInstanceCreateNestedManyWithoutTemplateInput;
};
export type DocumentTemplateUncheckedCreateWithoutCertificatesIssuedInput = {
    id?: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    disclaimerText?: string | null;
    secRuleDisclaimer?: string | null;
    bodyTemplate?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    letterInstances?: Prisma.LetterInstanceUncheckedCreateNestedManyWithoutTemplateInput;
};
export type DocumentTemplateCreateOrConnectWithoutCertificatesIssuedInput = {
    where: Prisma.DocumentTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutCertificatesIssuedInput, Prisma.DocumentTemplateUncheckedCreateWithoutCertificatesIssuedInput>;
};
export type DocumentTemplateUpsertWithoutCertificatesIssuedInput = {
    update: Prisma.XOR<Prisma.DocumentTemplateUpdateWithoutCertificatesIssuedInput, Prisma.DocumentTemplateUncheckedUpdateWithoutCertificatesIssuedInput>;
    create: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutCertificatesIssuedInput, Prisma.DocumentTemplateUncheckedCreateWithoutCertificatesIssuedInput>;
    where?: Prisma.DocumentTemplateWhereInput;
};
export type DocumentTemplateUpdateToOneWithWhereWithoutCertificatesIssuedInput = {
    where?: Prisma.DocumentTemplateWhereInput;
    data: Prisma.XOR<Prisma.DocumentTemplateUpdateWithoutCertificatesIssuedInput, Prisma.DocumentTemplateUncheckedUpdateWithoutCertificatesIssuedInput>;
};
export type DocumentTemplateUpdateWithoutCertificatesIssuedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    letterInstances?: Prisma.LetterInstanceUpdateManyWithoutTemplateNestedInput;
};
export type DocumentTemplateUncheckedUpdateWithoutCertificatesIssuedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    letterInstances?: Prisma.LetterInstanceUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type DocumentTemplateCreateWithoutLetterInstancesInput = {
    id?: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    disclaimerText?: string | null;
    secRuleDisclaimer?: string | null;
    bodyTemplate?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    certificatesIssued?: Prisma.CertificateCreateNestedManyWithoutTemplateInput;
};
export type DocumentTemplateUncheckedCreateWithoutLetterInstancesInput = {
    id?: string;
    templateType: $Enums.DocumentTemplateType;
    templateKey: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    disclaimerText?: string | null;
    secRuleDisclaimer?: string | null;
    bodyTemplate?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    certificatesIssued?: Prisma.CertificateUncheckedCreateNestedManyWithoutTemplateInput;
};
export type DocumentTemplateCreateOrConnectWithoutLetterInstancesInput = {
    where: Prisma.DocumentTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutLetterInstancesInput, Prisma.DocumentTemplateUncheckedCreateWithoutLetterInstancesInput>;
};
export type DocumentTemplateUpsertWithoutLetterInstancesInput = {
    update: Prisma.XOR<Prisma.DocumentTemplateUpdateWithoutLetterInstancesInput, Prisma.DocumentTemplateUncheckedUpdateWithoutLetterInstancesInput>;
    create: Prisma.XOR<Prisma.DocumentTemplateCreateWithoutLetterInstancesInput, Prisma.DocumentTemplateUncheckedCreateWithoutLetterInstancesInput>;
    where?: Prisma.DocumentTemplateWhereInput;
};
export type DocumentTemplateUpdateToOneWithWhereWithoutLetterInstancesInput = {
    where?: Prisma.DocumentTemplateWhereInput;
    data: Prisma.XOR<Prisma.DocumentTemplateUpdateWithoutLetterInstancesInput, Prisma.DocumentTemplateUncheckedUpdateWithoutLetterInstancesInput>;
};
export type DocumentTemplateUpdateWithoutLetterInstancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    certificatesIssued?: Prisma.CertificateUpdateManyWithoutTemplateNestedInput;
};
export type DocumentTemplateUncheckedUpdateWithoutLetterInstancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateType?: Prisma.EnumDocumentTemplateTypeFieldUpdateOperationsInput | $Enums.DocumentTemplateType;
    templateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    disclaimerText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secRuleDisclaimer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodyTemplate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    certificatesIssued?: Prisma.CertificateUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type DocumentTemplateCountOutputType = {
    certificatesIssued: number;
    letterInstances: number;
};
export type DocumentTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    certificatesIssued?: boolean | DocumentTemplateCountOutputTypeCountCertificatesIssuedArgs;
    letterInstances?: boolean | DocumentTemplateCountOutputTypeCountLetterInstancesArgs;
};
export type DocumentTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type DocumentTemplateCountOutputTypeCountCertificatesIssuedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
};
export type DocumentTemplateCountOutputTypeCountLetterInstancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LetterInstanceWhereInput;
};
export type DocumentTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateType?: boolean;
    templateKey?: boolean;
    version?: boolean;
    status?: boolean;
    disclaimerText?: boolean;
    secRuleDisclaimer?: boolean;
    bodyTemplate?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    certificatesIssued?: boolean | Prisma.DocumentTemplate$certificatesIssuedArgs<ExtArgs>;
    letterInstances?: boolean | Prisma.DocumentTemplate$letterInstancesArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentTemplate"]>;
export type DocumentTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateType?: boolean;
    templateKey?: boolean;
    version?: boolean;
    status?: boolean;
    disclaimerText?: boolean;
    secRuleDisclaimer?: boolean;
    bodyTemplate?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["documentTemplate"]>;
export type DocumentTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateType?: boolean;
    templateKey?: boolean;
    version?: boolean;
    status?: boolean;
    disclaimerText?: boolean;
    secRuleDisclaimer?: boolean;
    bodyTemplate?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["documentTemplate"]>;
export type DocumentTemplateSelectScalar = {
    id?: boolean;
    templateType?: boolean;
    templateKey?: boolean;
    version?: boolean;
    status?: boolean;
    disclaimerText?: boolean;
    secRuleDisclaimer?: boolean;
    bodyTemplate?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type DocumentTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "templateType" | "templateKey" | "version" | "status" | "disclaimerText" | "secRuleDisclaimer" | "bodyTemplate" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["documentTemplate"]>;
export type DocumentTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    certificatesIssued?: boolean | Prisma.DocumentTemplate$certificatesIssuedArgs<ExtArgs>;
    letterInstances?: boolean | Prisma.DocumentTemplate$letterInstancesArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DocumentTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DocumentTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DocumentTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentTemplate";
    objects: {
        certificatesIssued: Prisma.$CertificatePayload<ExtArgs>[];
        letterInstances: Prisma.$LetterInstancePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        templateType: $Enums.DocumentTemplateType;
        templateKey: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        disclaimerText: string | null;
        secRuleDisclaimer: string | null;
        bodyTemplate: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["documentTemplate"]>;
    composites: {};
};
export type DocumentTemplateGetPayload<S extends boolean | null | undefined | DocumentTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload, S>;
export type DocumentTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentTemplateCountAggregateInputType | true;
};
export interface DocumentTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentTemplate'];
        meta: {
            name: 'DocumentTemplate';
        };
    };
    findUnique<T extends DocumentTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentTemplateCreateArgs>(args: Prisma.SelectSubset<T, DocumentTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentTemplateDeleteArgs>(args: Prisma.SelectSubset<T, DocumentTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentTemplateUpdateArgs>(args: Prisma.SelectSubset<T, DocumentTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentTemplateUpsertArgs>(args: Prisma.SelectSubset<T, DocumentTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentTemplateClient<runtime.Types.Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentTemplateCountArgs>(args?: Prisma.Subset<T, DocumentTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentTemplateCountAggregateOutputType> : number>;
    aggregate<T extends DocumentTemplateAggregateArgs>(args: Prisma.Subset<T, DocumentTemplateAggregateArgs>): Prisma.PrismaPromise<GetDocumentTemplateAggregateType<T>>;
    groupBy<T extends DocumentTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentTemplateFieldRefs;
}
export interface Prisma__DocumentTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    certificatesIssued<T extends Prisma.DocumentTemplate$certificatesIssuedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentTemplate$certificatesIssuedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    letterInstances<T extends Prisma.DocumentTemplate$letterInstancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentTemplate$letterInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LetterInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly templateType: Prisma.FieldRef<"DocumentTemplate", 'DocumentTemplateType'>;
    readonly templateKey: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly version: Prisma.FieldRef<"DocumentTemplate", 'Int'>;
    readonly status: Prisma.FieldRef<"DocumentTemplate", 'GovernedItemStatus'>;
    readonly disclaimerText: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly secRuleDisclaimer: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly bodyTemplate: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"DocumentTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DocumentTemplate", 'DateTime'>;
}
export type DocumentTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where: Prisma.DocumentTemplateWhereUniqueInput;
};
export type DocumentTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where: Prisma.DocumentTemplateWhereUniqueInput;
};
export type DocumentTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where?: Prisma.DocumentTemplateWhereInput;
    orderBy?: Prisma.DocumentTemplateOrderByWithRelationInput | Prisma.DocumentTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DocumentTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentTemplateScalarFieldEnum | Prisma.DocumentTemplateScalarFieldEnum[];
};
export type DocumentTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where?: Prisma.DocumentTemplateWhereInput;
    orderBy?: Prisma.DocumentTemplateOrderByWithRelationInput | Prisma.DocumentTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DocumentTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentTemplateScalarFieldEnum | Prisma.DocumentTemplateScalarFieldEnum[];
};
export type DocumentTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where?: Prisma.DocumentTemplateWhereInput;
    orderBy?: Prisma.DocumentTemplateOrderByWithRelationInput | Prisma.DocumentTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DocumentTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentTemplateScalarFieldEnum | Prisma.DocumentTemplateScalarFieldEnum[];
};
export type DocumentTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentTemplateCreateInput, Prisma.DocumentTemplateUncheckedCreateInput>;
};
export type DocumentTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentTemplateCreateManyInput | Prisma.DocumentTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    data: Prisma.DocumentTemplateCreateManyInput | Prisma.DocumentTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentTemplateUpdateInput, Prisma.DocumentTemplateUncheckedUpdateInput>;
    where: Prisma.DocumentTemplateWhereUniqueInput;
};
export type DocumentTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentTemplateUpdateManyMutationInput, Prisma.DocumentTemplateUncheckedUpdateManyInput>;
    where?: Prisma.DocumentTemplateWhereInput;
    limit?: number;
};
export type DocumentTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentTemplateUpdateManyMutationInput, Prisma.DocumentTemplateUncheckedUpdateManyInput>;
    where?: Prisma.DocumentTemplateWhereInput;
    limit?: number;
};
export type DocumentTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where: Prisma.DocumentTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentTemplateCreateInput, Prisma.DocumentTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentTemplateUpdateInput, Prisma.DocumentTemplateUncheckedUpdateInput>;
};
export type DocumentTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
    where: Prisma.DocumentTemplateWhereUniqueInput;
};
export type DocumentTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentTemplateWhereInput;
    limit?: number;
};
export type DocumentTemplate$certificatesIssuedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentTemplate$letterInstancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterInstanceSelect<ExtArgs> | null;
    omit?: Prisma.LetterInstanceOmit<ExtArgs> | null;
    include?: Prisma.LetterInstanceInclude<ExtArgs> | null;
    where?: Prisma.LetterInstanceWhereInput;
    orderBy?: Prisma.LetterInstanceOrderByWithRelationInput | Prisma.LetterInstanceOrderByWithRelationInput[];
    cursor?: Prisma.LetterInstanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LetterInstanceScalarFieldEnum | Prisma.LetterInstanceScalarFieldEnum[];
};
export type DocumentTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DocumentTemplateOmit<ExtArgs> | null;
    include?: Prisma.DocumentTemplateInclude<ExtArgs> | null;
};
