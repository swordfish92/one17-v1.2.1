import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LetterheadTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$LetterheadTemplatePayload>;
export type AggregateLetterheadTemplate = {
    _count: LetterheadTemplateCountAggregateOutputType | null;
    _avg: LetterheadTemplateAvgAggregateOutputType | null;
    _sum: LetterheadTemplateSumAggregateOutputType | null;
    _min: LetterheadTemplateMinAggregateOutputType | null;
    _max: LetterheadTemplateMaxAggregateOutputType | null;
};
export type LetterheadTemplateAvgAggregateOutputType = {
    version: number | null;
};
export type LetterheadTemplateSumAggregateOutputType = {
    version: number | null;
};
export type LetterheadTemplateMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    companyName: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    rcNumber: string | null;
    secRegistrationLine: string | null;
    brandPrimaryColorHex: string | null;
    brandAccentColorHex: string | null;
    brandDeepColorHex: string | null;
    footerDisclaimer: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type LetterheadTemplateMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    companyName: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    rcNumber: string | null;
    secRegistrationLine: string | null;
    brandPrimaryColorHex: string | null;
    brandAccentColorHex: string | null;
    brandDeepColorHex: string | null;
    footerDisclaimer: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type LetterheadTemplateCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    companyName: number;
    addressLine1: number;
    addressLine2: number;
    rcNumber: number;
    secRegistrationLine: number;
    brandPrimaryColorHex: number;
    brandAccentColorHex: number;
    brandDeepColorHex: number;
    footerDisclaimer: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type LetterheadTemplateAvgAggregateInputType = {
    version?: true;
};
export type LetterheadTemplateSumAggregateInputType = {
    version?: true;
};
export type LetterheadTemplateMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    companyName?: true;
    addressLine1?: true;
    addressLine2?: true;
    rcNumber?: true;
    secRegistrationLine?: true;
    brandPrimaryColorHex?: true;
    brandAccentColorHex?: true;
    brandDeepColorHex?: true;
    footerDisclaimer?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type LetterheadTemplateMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    companyName?: true;
    addressLine1?: true;
    addressLine2?: true;
    rcNumber?: true;
    secRegistrationLine?: true;
    brandPrimaryColorHex?: true;
    brandAccentColorHex?: true;
    brandDeepColorHex?: true;
    footerDisclaimer?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type LetterheadTemplateCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    companyName?: true;
    addressLine1?: true;
    addressLine2?: true;
    rcNumber?: true;
    secRegistrationLine?: true;
    brandPrimaryColorHex?: true;
    brandAccentColorHex?: true;
    brandDeepColorHex?: true;
    footerDisclaimer?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type LetterheadTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LetterheadTemplateWhereInput;
    orderBy?: Prisma.LetterheadTemplateOrderByWithRelationInput | Prisma.LetterheadTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LetterheadTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LetterheadTemplateCountAggregateInputType;
    _avg?: LetterheadTemplateAvgAggregateInputType;
    _sum?: LetterheadTemplateSumAggregateInputType;
    _min?: LetterheadTemplateMinAggregateInputType;
    _max?: LetterheadTemplateMaxAggregateInputType;
};
export type GetLetterheadTemplateAggregateType<T extends LetterheadTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateLetterheadTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLetterheadTemplate[P]> : Prisma.GetScalarType<T[P], AggregateLetterheadTemplate[P]>;
};
export type LetterheadTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LetterheadTemplateWhereInput;
    orderBy?: Prisma.LetterheadTemplateOrderByWithAggregationInput | Prisma.LetterheadTemplateOrderByWithAggregationInput[];
    by: Prisma.LetterheadTemplateScalarFieldEnum[] | Prisma.LetterheadTemplateScalarFieldEnum;
    having?: Prisma.LetterheadTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LetterheadTemplateCountAggregateInputType | true;
    _avg?: LetterheadTemplateAvgAggregateInputType;
    _sum?: LetterheadTemplateSumAggregateInputType;
    _min?: LetterheadTemplateMinAggregateInputType;
    _max?: LetterheadTemplateMaxAggregateInputType;
};
export type LetterheadTemplateGroupByOutputType = {
    id: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    companyName: string;
    addressLine1: string;
    addressLine2: string | null;
    rcNumber: string;
    secRegistrationLine: string;
    brandPrimaryColorHex: string;
    brandAccentColorHex: string;
    brandDeepColorHex: string;
    footerDisclaimer: string;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: LetterheadTemplateCountAggregateOutputType | null;
    _avg: LetterheadTemplateAvgAggregateOutputType | null;
    _sum: LetterheadTemplateSumAggregateOutputType | null;
    _min: LetterheadTemplateMinAggregateOutputType | null;
    _max: LetterheadTemplateMaxAggregateOutputType | null;
};
export type GetLetterheadTemplateGroupByPayload<T extends LetterheadTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LetterheadTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LetterheadTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LetterheadTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LetterheadTemplateGroupByOutputType[P]>;
}>>;
export type LetterheadTemplateWhereInput = {
    AND?: Prisma.LetterheadTemplateWhereInput | Prisma.LetterheadTemplateWhereInput[];
    OR?: Prisma.LetterheadTemplateWhereInput[];
    NOT?: Prisma.LetterheadTemplateWhereInput | Prisma.LetterheadTemplateWhereInput[];
    id?: Prisma.UuidFilter<"LetterheadTemplate"> | string;
    version?: Prisma.IntFilter<"LetterheadTemplate"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"LetterheadTemplate"> | $Enums.GovernedItemStatus;
    companyName?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    addressLine1?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    addressLine2?: Prisma.StringNullableFilter<"LetterheadTemplate"> | string | null;
    rcNumber?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    secRegistrationLine?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    brandPrimaryColorHex?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    brandAccentColorHex?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    brandDeepColorHex?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    footerDisclaimer?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    proposedByUserId?: Prisma.UuidNullableFilter<"LetterheadTemplate"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"LetterheadTemplate"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"LetterheadTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LetterheadTemplate"> | Date | string;
};
export type LetterheadTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrderInput | Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    secRegistrationLine?: Prisma.SortOrder;
    brandPrimaryColorHex?: Prisma.SortOrder;
    brandAccentColorHex?: Prisma.SortOrder;
    brandDeepColorHex?: Prisma.SortOrder;
    footerDisclaimer?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LetterheadTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    version?: number;
    workflowInstanceId?: string;
    AND?: Prisma.LetterheadTemplateWhereInput | Prisma.LetterheadTemplateWhereInput[];
    OR?: Prisma.LetterheadTemplateWhereInput[];
    NOT?: Prisma.LetterheadTemplateWhereInput | Prisma.LetterheadTemplateWhereInput[];
    status?: Prisma.EnumGovernedItemStatusFilter<"LetterheadTemplate"> | $Enums.GovernedItemStatus;
    companyName?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    addressLine1?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    addressLine2?: Prisma.StringNullableFilter<"LetterheadTemplate"> | string | null;
    rcNumber?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    secRegistrationLine?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    brandPrimaryColorHex?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    brandAccentColorHex?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    brandDeepColorHex?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    footerDisclaimer?: Prisma.StringFilter<"LetterheadTemplate"> | string;
    proposedByUserId?: Prisma.UuidNullableFilter<"LetterheadTemplate"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"LetterheadTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LetterheadTemplate"> | Date | string;
}, "id" | "workflowInstanceId" | "version">;
export type LetterheadTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrderInput | Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    secRegistrationLine?: Prisma.SortOrder;
    brandPrimaryColorHex?: Prisma.SortOrder;
    brandAccentColorHex?: Prisma.SortOrder;
    brandDeepColorHex?: Prisma.SortOrder;
    footerDisclaimer?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LetterheadTemplateCountOrderByAggregateInput;
    _avg?: Prisma.LetterheadTemplateAvgOrderByAggregateInput;
    _max?: Prisma.LetterheadTemplateMaxOrderByAggregateInput;
    _min?: Prisma.LetterheadTemplateMinOrderByAggregateInput;
    _sum?: Prisma.LetterheadTemplateSumOrderByAggregateInput;
};
export type LetterheadTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.LetterheadTemplateScalarWhereWithAggregatesInput | Prisma.LetterheadTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.LetterheadTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LetterheadTemplateScalarWhereWithAggregatesInput | Prisma.LetterheadTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LetterheadTemplate"> | string;
    version?: Prisma.IntWithAggregatesFilter<"LetterheadTemplate"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"LetterheadTemplate"> | $Enums.GovernedItemStatus;
    companyName?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    addressLine1?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    addressLine2?: Prisma.StringNullableWithAggregatesFilter<"LetterheadTemplate"> | string | null;
    rcNumber?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    secRegistrationLine?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    brandPrimaryColorHex?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    brandAccentColorHex?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    brandDeepColorHex?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    footerDisclaimer?: Prisma.StringWithAggregatesFilter<"LetterheadTemplate"> | string;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"LetterheadTemplate"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"LetterheadTemplate"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"LetterheadTemplate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LetterheadTemplate"> | Date | string;
};
export type LetterheadTemplateCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    companyName: string;
    addressLine1: string;
    addressLine2?: string | null;
    rcNumber: string;
    secRegistrationLine: string;
    brandPrimaryColorHex: string;
    brandAccentColorHex: string;
    brandDeepColorHex: string;
    footerDisclaimer: string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type LetterheadTemplateUncheckedCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    companyName: string;
    addressLine1: string;
    addressLine2?: string | null;
    rcNumber: string;
    secRegistrationLine: string;
    brandPrimaryColorHex: string;
    brandAccentColorHex: string;
    brandDeepColorHex: string;
    footerDisclaimer: string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type LetterheadTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rcNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secRegistrationLine?: Prisma.StringFieldUpdateOperationsInput | string;
    brandPrimaryColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandAccentColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandDeepColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    footerDisclaimer?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LetterheadTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rcNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secRegistrationLine?: Prisma.StringFieldUpdateOperationsInput | string;
    brandPrimaryColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandAccentColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandDeepColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    footerDisclaimer?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LetterheadTemplateCreateManyInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    companyName: string;
    addressLine1: string;
    addressLine2?: string | null;
    rcNumber: string;
    secRegistrationLine: string;
    brandPrimaryColorHex: string;
    brandAccentColorHex: string;
    brandDeepColorHex: string;
    footerDisclaimer: string;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type LetterheadTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rcNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secRegistrationLine?: Prisma.StringFieldUpdateOperationsInput | string;
    brandPrimaryColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandAccentColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandDeepColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    footerDisclaimer?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LetterheadTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rcNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secRegistrationLine?: Prisma.StringFieldUpdateOperationsInput | string;
    brandPrimaryColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandAccentColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    brandDeepColorHex?: Prisma.StringFieldUpdateOperationsInput | string;
    footerDisclaimer?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LetterheadTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    secRegistrationLine?: Prisma.SortOrder;
    brandPrimaryColorHex?: Prisma.SortOrder;
    brandAccentColorHex?: Prisma.SortOrder;
    brandDeepColorHex?: Prisma.SortOrder;
    footerDisclaimer?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LetterheadTemplateAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type LetterheadTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    secRegistrationLine?: Prisma.SortOrder;
    brandPrimaryColorHex?: Prisma.SortOrder;
    brandAccentColorHex?: Prisma.SortOrder;
    brandDeepColorHex?: Prisma.SortOrder;
    footerDisclaimer?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LetterheadTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    rcNumber?: Prisma.SortOrder;
    secRegistrationLine?: Prisma.SortOrder;
    brandPrimaryColorHex?: Prisma.SortOrder;
    brandAccentColorHex?: Prisma.SortOrder;
    brandDeepColorHex?: Prisma.SortOrder;
    footerDisclaimer?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LetterheadTemplateSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type LetterheadTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    companyName?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    rcNumber?: boolean;
    secRegistrationLine?: boolean;
    brandPrimaryColorHex?: boolean;
    brandAccentColorHex?: boolean;
    brandDeepColorHex?: boolean;
    footerDisclaimer?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["letterheadTemplate"]>;
export type LetterheadTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    companyName?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    rcNumber?: boolean;
    secRegistrationLine?: boolean;
    brandPrimaryColorHex?: boolean;
    brandAccentColorHex?: boolean;
    brandDeepColorHex?: boolean;
    footerDisclaimer?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["letterheadTemplate"]>;
export type LetterheadTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    companyName?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    rcNumber?: boolean;
    secRegistrationLine?: boolean;
    brandPrimaryColorHex?: boolean;
    brandAccentColorHex?: boolean;
    brandDeepColorHex?: boolean;
    footerDisclaimer?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["letterheadTemplate"]>;
export type LetterheadTemplateSelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    companyName?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    rcNumber?: boolean;
    secRegistrationLine?: boolean;
    brandPrimaryColorHex?: boolean;
    brandAccentColorHex?: boolean;
    brandDeepColorHex?: boolean;
    footerDisclaimer?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type LetterheadTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "companyName" | "addressLine1" | "addressLine2" | "rcNumber" | "secRegistrationLine" | "brandPrimaryColorHex" | "brandAccentColorHex" | "brandDeepColorHex" | "footerDisclaimer" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["letterheadTemplate"]>;
export type $LetterheadTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LetterheadTemplate";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        companyName: string;
        addressLine1: string;
        addressLine2: string | null;
        rcNumber: string;
        secRegistrationLine: string;
        brandPrimaryColorHex: string;
        brandAccentColorHex: string;
        brandDeepColorHex: string;
        footerDisclaimer: string;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["letterheadTemplate"]>;
    composites: {};
};
export type LetterheadTemplateGetPayload<S extends boolean | null | undefined | LetterheadTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload, S>;
export type LetterheadTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LetterheadTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LetterheadTemplateCountAggregateInputType | true;
};
export interface LetterheadTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LetterheadTemplate'];
        meta: {
            name: 'LetterheadTemplate';
        };
    };
    findUnique<T extends LetterheadTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LetterheadTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LetterheadTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, LetterheadTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LetterheadTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LetterheadTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LetterheadTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, LetterheadTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LetterheadTemplateCreateArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LetterheadTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, LetterheadTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LetterheadTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LetterheadTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LetterheadTemplateDeleteArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LetterheadTemplateUpdateArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LetterheadTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, LetterheadTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LetterheadTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LetterheadTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LetterheadTemplateUpsertArgs>(args: Prisma.SelectSubset<T, LetterheadTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__LetterheadTemplateClient<runtime.Types.Result.GetResult<Prisma.$LetterheadTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LetterheadTemplateCountArgs>(args?: Prisma.Subset<T, LetterheadTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LetterheadTemplateCountAggregateOutputType> : number>;
    aggregate<T extends LetterheadTemplateAggregateArgs>(args: Prisma.Subset<T, LetterheadTemplateAggregateArgs>): Prisma.PrismaPromise<GetLetterheadTemplateAggregateType<T>>;
    groupBy<T extends LetterheadTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LetterheadTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: LetterheadTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LetterheadTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLetterheadTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LetterheadTemplateFieldRefs;
}
export interface Prisma__LetterheadTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LetterheadTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly version: Prisma.FieldRef<"LetterheadTemplate", 'Int'>;
    readonly status: Prisma.FieldRef<"LetterheadTemplate", 'GovernedItemStatus'>;
    readonly companyName: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly addressLine1: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly addressLine2: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly rcNumber: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly secRegistrationLine: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly brandPrimaryColorHex: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly brandAccentColorHex: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly brandDeepColorHex: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly footerDisclaimer: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"LetterheadTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LetterheadTemplate", 'DateTime'>;
}
export type LetterheadTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    where: Prisma.LetterheadTemplateWhereUniqueInput;
};
export type LetterheadTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    where: Prisma.LetterheadTemplateWhereUniqueInput;
};
export type LetterheadTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    where?: Prisma.LetterheadTemplateWhereInput;
    orderBy?: Prisma.LetterheadTemplateOrderByWithRelationInput | Prisma.LetterheadTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LetterheadTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LetterheadTemplateScalarFieldEnum | Prisma.LetterheadTemplateScalarFieldEnum[];
};
export type LetterheadTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    where?: Prisma.LetterheadTemplateWhereInput;
    orderBy?: Prisma.LetterheadTemplateOrderByWithRelationInput | Prisma.LetterheadTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LetterheadTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LetterheadTemplateScalarFieldEnum | Prisma.LetterheadTemplateScalarFieldEnum[];
};
export type LetterheadTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    where?: Prisma.LetterheadTemplateWhereInput;
    orderBy?: Prisma.LetterheadTemplateOrderByWithRelationInput | Prisma.LetterheadTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LetterheadTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LetterheadTemplateScalarFieldEnum | Prisma.LetterheadTemplateScalarFieldEnum[];
};
export type LetterheadTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LetterheadTemplateCreateInput, Prisma.LetterheadTemplateUncheckedCreateInput>;
};
export type LetterheadTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LetterheadTemplateCreateManyInput | Prisma.LetterheadTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LetterheadTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    data: Prisma.LetterheadTemplateCreateManyInput | Prisma.LetterheadTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LetterheadTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LetterheadTemplateUpdateInput, Prisma.LetterheadTemplateUncheckedUpdateInput>;
    where: Prisma.LetterheadTemplateWhereUniqueInput;
};
export type LetterheadTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LetterheadTemplateUpdateManyMutationInput, Prisma.LetterheadTemplateUncheckedUpdateManyInput>;
    where?: Prisma.LetterheadTemplateWhereInput;
    limit?: number;
};
export type LetterheadTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LetterheadTemplateUpdateManyMutationInput, Prisma.LetterheadTemplateUncheckedUpdateManyInput>;
    where?: Prisma.LetterheadTemplateWhereInput;
    limit?: number;
};
export type LetterheadTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    where: Prisma.LetterheadTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.LetterheadTemplateCreateInput, Prisma.LetterheadTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LetterheadTemplateUpdateInput, Prisma.LetterheadTemplateUncheckedUpdateInput>;
};
export type LetterheadTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
    where: Prisma.LetterheadTemplateWhereUniqueInput;
};
export type LetterheadTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LetterheadTemplateWhereInput;
    limit?: number;
};
export type LetterheadTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LetterheadTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LetterheadTemplateOmit<ExtArgs> | null;
};
