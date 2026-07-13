import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CalendarGatewayProviderModel = runtime.Types.Result.DefaultSelection<Prisma.$CalendarGatewayProviderPayload>;
export type AggregateCalendarGatewayProvider = {
    _count: CalendarGatewayProviderCountAggregateOutputType | null;
    _avg: CalendarGatewayProviderAvgAggregateOutputType | null;
    _sum: CalendarGatewayProviderSumAggregateOutputType | null;
    _min: CalendarGatewayProviderMinAggregateOutputType | null;
    _max: CalendarGatewayProviderMaxAggregateOutputType | null;
};
export type CalendarGatewayProviderAvgAggregateOutputType = {
    providerSlot: number | null;
};
export type CalendarGatewayProviderSumAggregateOutputType = {
    providerSlot: number | null;
};
export type CalendarGatewayProviderMinAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    adapterType: $Enums.CalendarAdapterType | null;
    name: string | null;
    clientId: string | null;
    clientSecret: string | null;
    tenantId: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    pendingName: string | null;
    pendingClientId: string | null;
    pendingClientSecret: string | null;
    pendingTenantId: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    createdAt: Date | null;
};
export type CalendarGatewayProviderMaxAggregateOutputType = {
    id: string | null;
    providerSlot: number | null;
    adapterType: $Enums.CalendarAdapterType | null;
    name: string | null;
    clientId: string | null;
    clientSecret: string | null;
    tenantId: string | null;
    isActive: boolean | null;
    configuredByUserId: string | null;
    pendingName: string | null;
    pendingClientId: string | null;
    pendingClientSecret: string | null;
    pendingTenantId: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    createdAt: Date | null;
};
export type CalendarGatewayProviderCountAggregateOutputType = {
    id: number;
    providerSlot: number;
    adapterType: number;
    name: number;
    clientId: number;
    clientSecret: number;
    tenantId: number;
    isActive: number;
    configuredByUserId: number;
    pendingName: number;
    pendingClientId: number;
    pendingClientSecret: number;
    pendingTenantId: number;
    pendingIsActive: number;
    pendingProposedByUserId: number;
    configWorkflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type CalendarGatewayProviderAvgAggregateInputType = {
    providerSlot?: true;
};
export type CalendarGatewayProviderSumAggregateInputType = {
    providerSlot?: true;
};
export type CalendarGatewayProviderMinAggregateInputType = {
    id?: true;
    providerSlot?: true;
    adapterType?: true;
    name?: true;
    clientId?: true;
    clientSecret?: true;
    tenantId?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingName?: true;
    pendingClientId?: true;
    pendingClientSecret?: true;
    pendingTenantId?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    createdAt?: true;
};
export type CalendarGatewayProviderMaxAggregateInputType = {
    id?: true;
    providerSlot?: true;
    adapterType?: true;
    name?: true;
    clientId?: true;
    clientSecret?: true;
    tenantId?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingName?: true;
    pendingClientId?: true;
    pendingClientSecret?: true;
    pendingTenantId?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    createdAt?: true;
};
export type CalendarGatewayProviderCountAggregateInputType = {
    id?: true;
    providerSlot?: true;
    adapterType?: true;
    name?: true;
    clientId?: true;
    clientSecret?: true;
    tenantId?: true;
    isActive?: true;
    configuredByUserId?: true;
    pendingName?: true;
    pendingClientId?: true;
    pendingClientSecret?: true;
    pendingTenantId?: true;
    pendingIsActive?: true;
    pendingProposedByUserId?: true;
    configWorkflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type CalendarGatewayProviderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarGatewayProviderWhereInput;
    orderBy?: Prisma.CalendarGatewayProviderOrderByWithRelationInput | Prisma.CalendarGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.CalendarGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CalendarGatewayProviderCountAggregateInputType;
    _avg?: CalendarGatewayProviderAvgAggregateInputType;
    _sum?: CalendarGatewayProviderSumAggregateInputType;
    _min?: CalendarGatewayProviderMinAggregateInputType;
    _max?: CalendarGatewayProviderMaxAggregateInputType;
};
export type GetCalendarGatewayProviderAggregateType<T extends CalendarGatewayProviderAggregateArgs> = {
    [P in keyof T & keyof AggregateCalendarGatewayProvider]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalendarGatewayProvider[P]> : Prisma.GetScalarType<T[P], AggregateCalendarGatewayProvider[P]>;
};
export type CalendarGatewayProviderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarGatewayProviderWhereInput;
    orderBy?: Prisma.CalendarGatewayProviderOrderByWithAggregationInput | Prisma.CalendarGatewayProviderOrderByWithAggregationInput[];
    by: Prisma.CalendarGatewayProviderScalarFieldEnum[] | Prisma.CalendarGatewayProviderScalarFieldEnum;
    having?: Prisma.CalendarGatewayProviderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CalendarGatewayProviderCountAggregateInputType | true;
    _avg?: CalendarGatewayProviderAvgAggregateInputType;
    _sum?: CalendarGatewayProviderSumAggregateInputType;
    _min?: CalendarGatewayProviderMinAggregateInputType;
    _max?: CalendarGatewayProviderMaxAggregateInputType;
};
export type CalendarGatewayProviderGroupByOutputType = {
    id: string;
    providerSlot: number;
    adapterType: $Enums.CalendarAdapterType;
    name: string;
    clientId: string | null;
    clientSecret: string | null;
    tenantId: string | null;
    isActive: boolean;
    configuredByUserId: string | null;
    pendingName: string | null;
    pendingClientId: string | null;
    pendingClientSecret: string | null;
    pendingTenantId: string | null;
    pendingIsActive: boolean | null;
    pendingProposedByUserId: string | null;
    configWorkflowInstanceId: string | null;
    createdAt: Date;
    _count: CalendarGatewayProviderCountAggregateOutputType | null;
    _avg: CalendarGatewayProviderAvgAggregateOutputType | null;
    _sum: CalendarGatewayProviderSumAggregateOutputType | null;
    _min: CalendarGatewayProviderMinAggregateOutputType | null;
    _max: CalendarGatewayProviderMaxAggregateOutputType | null;
};
export type GetCalendarGatewayProviderGroupByPayload<T extends CalendarGatewayProviderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CalendarGatewayProviderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CalendarGatewayProviderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CalendarGatewayProviderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CalendarGatewayProviderGroupByOutputType[P]>;
}>>;
export type CalendarGatewayProviderWhereInput = {
    AND?: Prisma.CalendarGatewayProviderWhereInput | Prisma.CalendarGatewayProviderWhereInput[];
    OR?: Prisma.CalendarGatewayProviderWhereInput[];
    NOT?: Prisma.CalendarGatewayProviderWhereInput | Prisma.CalendarGatewayProviderWhereInput[];
    id?: Prisma.UuidFilter<"CalendarGatewayProvider"> | string;
    providerSlot?: Prisma.IntFilter<"CalendarGatewayProvider"> | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeFilter<"CalendarGatewayProvider"> | $Enums.CalendarAdapterType;
    name?: Prisma.StringFilter<"CalendarGatewayProvider"> | string;
    clientId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    clientSecret?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    tenantId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    isActive?: Prisma.BoolFilter<"CalendarGatewayProvider"> | boolean;
    configuredByUserId?: Prisma.UuidNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingName?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingClientId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingClientSecret?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingTenantId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingIsActive?: Prisma.BoolNullableFilter<"CalendarGatewayProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"CalendarGatewayProvider"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableFilter<"CalendarGatewayProvider"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarGatewayProvider"> | Date | string;
    connections?: Prisma.ExternalCalendarConnectionListRelationFilter;
};
export type CalendarGatewayProviderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    adapterType?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingClientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingClientSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingTenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    connections?: Prisma.ExternalCalendarConnectionOrderByRelationAggregateInput;
};
export type CalendarGatewayProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerSlot?: number;
    configWorkflowInstanceId?: string;
    AND?: Prisma.CalendarGatewayProviderWhereInput | Prisma.CalendarGatewayProviderWhereInput[];
    OR?: Prisma.CalendarGatewayProviderWhereInput[];
    NOT?: Prisma.CalendarGatewayProviderWhereInput | Prisma.CalendarGatewayProviderWhereInput[];
    adapterType?: Prisma.EnumCalendarAdapterTypeFilter<"CalendarGatewayProvider"> | $Enums.CalendarAdapterType;
    name?: Prisma.StringFilter<"CalendarGatewayProvider"> | string;
    clientId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    clientSecret?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    tenantId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    isActive?: Prisma.BoolFilter<"CalendarGatewayProvider"> | boolean;
    configuredByUserId?: Prisma.UuidNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingName?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingClientId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingClientSecret?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingTenantId?: Prisma.StringNullableFilter<"CalendarGatewayProvider"> | string | null;
    pendingIsActive?: Prisma.BoolNullableFilter<"CalendarGatewayProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableFilter<"CalendarGatewayProvider"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarGatewayProvider"> | Date | string;
    connections?: Prisma.ExternalCalendarConnectionListRelationFilter;
}, "id" | "providerSlot" | "configWorkflowInstanceId">;
export type CalendarGatewayProviderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    adapterType?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingName?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingClientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingClientSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingTenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CalendarGatewayProviderCountOrderByAggregateInput;
    _avg?: Prisma.CalendarGatewayProviderAvgOrderByAggregateInput;
    _max?: Prisma.CalendarGatewayProviderMaxOrderByAggregateInput;
    _min?: Prisma.CalendarGatewayProviderMinOrderByAggregateInput;
    _sum?: Prisma.CalendarGatewayProviderSumOrderByAggregateInput;
};
export type CalendarGatewayProviderScalarWhereWithAggregatesInput = {
    AND?: Prisma.CalendarGatewayProviderScalarWhereWithAggregatesInput | Prisma.CalendarGatewayProviderScalarWhereWithAggregatesInput[];
    OR?: Prisma.CalendarGatewayProviderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CalendarGatewayProviderScalarWhereWithAggregatesInput | Prisma.CalendarGatewayProviderScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CalendarGatewayProvider"> | string;
    providerSlot?: Prisma.IntWithAggregatesFilter<"CalendarGatewayProvider"> | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeWithAggregatesFilter<"CalendarGatewayProvider"> | $Enums.CalendarAdapterType;
    name?: Prisma.StringWithAggregatesFilter<"CalendarGatewayProvider"> | string;
    clientId?: Prisma.StringNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    clientSecret?: Prisma.StringNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    tenantId?: Prisma.StringNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"CalendarGatewayProvider"> | boolean;
    configuredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    pendingName?: Prisma.StringNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    pendingClientId?: Prisma.StringNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    pendingClientSecret?: Prisma.StringNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    pendingTenantId?: Prisma.StringNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    pendingIsActive?: Prisma.BoolNullableWithAggregatesFilter<"CalendarGatewayProvider"> | boolean | null;
    pendingProposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    configWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"CalendarGatewayProvider"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarGatewayProvider"> | Date | string;
};
export type CalendarGatewayProviderCreateInput = {
    id?: string;
    providerSlot: number;
    adapterType: $Enums.CalendarAdapterType;
    name: string;
    clientId?: string | null;
    clientSecret?: string | null;
    tenantId?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingClientId?: string | null;
    pendingClientSecret?: string | null;
    pendingTenantId?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    connections?: Prisma.ExternalCalendarConnectionCreateNestedManyWithoutProviderInput;
};
export type CalendarGatewayProviderUncheckedCreateInput = {
    id?: string;
    providerSlot: number;
    adapterType: $Enums.CalendarAdapterType;
    name: string;
    clientId?: string | null;
    clientSecret?: string | null;
    tenantId?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingClientId?: string | null;
    pendingClientSecret?: string | null;
    pendingTenantId?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    connections?: Prisma.ExternalCalendarConnectionUncheckedCreateNestedManyWithoutProviderInput;
};
export type CalendarGatewayProviderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeFieldUpdateOperationsInput | $Enums.CalendarAdapterType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingTenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    connections?: Prisma.ExternalCalendarConnectionUpdateManyWithoutProviderNestedInput;
};
export type CalendarGatewayProviderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeFieldUpdateOperationsInput | $Enums.CalendarAdapterType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingTenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    connections?: Prisma.ExternalCalendarConnectionUncheckedUpdateManyWithoutProviderNestedInput;
};
export type CalendarGatewayProviderCreateManyInput = {
    id?: string;
    providerSlot: number;
    adapterType: $Enums.CalendarAdapterType;
    name: string;
    clientId?: string | null;
    clientSecret?: string | null;
    tenantId?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingClientId?: string | null;
    pendingClientSecret?: string | null;
    pendingTenantId?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CalendarGatewayProviderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeFieldUpdateOperationsInput | $Enums.CalendarAdapterType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingTenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarGatewayProviderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeFieldUpdateOperationsInput | $Enums.CalendarAdapterType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingTenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarGatewayProviderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    adapterType?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    clientSecret?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingClientId?: Prisma.SortOrder;
    pendingClientSecret?: Prisma.SortOrder;
    pendingTenantId?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarGatewayProviderAvgOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type CalendarGatewayProviderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    adapterType?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    clientSecret?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingClientId?: Prisma.SortOrder;
    pendingClientSecret?: Prisma.SortOrder;
    pendingTenantId?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarGatewayProviderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerSlot?: Prisma.SortOrder;
    adapterType?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    clientSecret?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    configuredByUserId?: Prisma.SortOrder;
    pendingName?: Prisma.SortOrder;
    pendingClientId?: Prisma.SortOrder;
    pendingClientSecret?: Prisma.SortOrder;
    pendingTenantId?: Prisma.SortOrder;
    pendingIsActive?: Prisma.SortOrder;
    pendingProposedByUserId?: Prisma.SortOrder;
    configWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CalendarGatewayProviderSumOrderByAggregateInput = {
    providerSlot?: Prisma.SortOrder;
};
export type CalendarGatewayProviderScalarRelationFilter = {
    is?: Prisma.CalendarGatewayProviderWhereInput;
    isNot?: Prisma.CalendarGatewayProviderWhereInput;
};
export type EnumCalendarAdapterTypeFieldUpdateOperationsInput = {
    set?: $Enums.CalendarAdapterType;
};
export type CalendarGatewayProviderCreateNestedOneWithoutConnectionsInput = {
    create?: Prisma.XOR<Prisma.CalendarGatewayProviderCreateWithoutConnectionsInput, Prisma.CalendarGatewayProviderUncheckedCreateWithoutConnectionsInput>;
    connectOrCreate?: Prisma.CalendarGatewayProviderCreateOrConnectWithoutConnectionsInput;
    connect?: Prisma.CalendarGatewayProviderWhereUniqueInput;
};
export type CalendarGatewayProviderUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: Prisma.XOR<Prisma.CalendarGatewayProviderCreateWithoutConnectionsInput, Prisma.CalendarGatewayProviderUncheckedCreateWithoutConnectionsInput>;
    connectOrCreate?: Prisma.CalendarGatewayProviderCreateOrConnectWithoutConnectionsInput;
    upsert?: Prisma.CalendarGatewayProviderUpsertWithoutConnectionsInput;
    connect?: Prisma.CalendarGatewayProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CalendarGatewayProviderUpdateToOneWithWhereWithoutConnectionsInput, Prisma.CalendarGatewayProviderUpdateWithoutConnectionsInput>, Prisma.CalendarGatewayProviderUncheckedUpdateWithoutConnectionsInput>;
};
export type CalendarGatewayProviderCreateWithoutConnectionsInput = {
    id?: string;
    providerSlot: number;
    adapterType: $Enums.CalendarAdapterType;
    name: string;
    clientId?: string | null;
    clientSecret?: string | null;
    tenantId?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingClientId?: string | null;
    pendingClientSecret?: string | null;
    pendingTenantId?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CalendarGatewayProviderUncheckedCreateWithoutConnectionsInput = {
    id?: string;
    providerSlot: number;
    adapterType: $Enums.CalendarAdapterType;
    name: string;
    clientId?: string | null;
    clientSecret?: string | null;
    tenantId?: string | null;
    isActive?: boolean;
    configuredByUserId?: string | null;
    pendingName?: string | null;
    pendingClientId?: string | null;
    pendingClientSecret?: string | null;
    pendingTenantId?: string | null;
    pendingIsActive?: boolean | null;
    pendingProposedByUserId?: string | null;
    configWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type CalendarGatewayProviderCreateOrConnectWithoutConnectionsInput = {
    where: Prisma.CalendarGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarGatewayProviderCreateWithoutConnectionsInput, Prisma.CalendarGatewayProviderUncheckedCreateWithoutConnectionsInput>;
};
export type CalendarGatewayProviderUpsertWithoutConnectionsInput = {
    update: Prisma.XOR<Prisma.CalendarGatewayProviderUpdateWithoutConnectionsInput, Prisma.CalendarGatewayProviderUncheckedUpdateWithoutConnectionsInput>;
    create: Prisma.XOR<Prisma.CalendarGatewayProviderCreateWithoutConnectionsInput, Prisma.CalendarGatewayProviderUncheckedCreateWithoutConnectionsInput>;
    where?: Prisma.CalendarGatewayProviderWhereInput;
};
export type CalendarGatewayProviderUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: Prisma.CalendarGatewayProviderWhereInput;
    data: Prisma.XOR<Prisma.CalendarGatewayProviderUpdateWithoutConnectionsInput, Prisma.CalendarGatewayProviderUncheckedUpdateWithoutConnectionsInput>;
};
export type CalendarGatewayProviderUpdateWithoutConnectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeFieldUpdateOperationsInput | $Enums.CalendarAdapterType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingTenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarGatewayProviderUncheckedUpdateWithoutConnectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerSlot?: Prisma.IntFieldUpdateOperationsInput | number;
    adapterType?: Prisma.EnumCalendarAdapterTypeFieldUpdateOperationsInput | $Enums.CalendarAdapterType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    configuredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingClientSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingTenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pendingIsActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pendingProposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    configWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarGatewayProviderCountOutputType = {
    connections: number;
};
export type CalendarGatewayProviderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    connections?: boolean | CalendarGatewayProviderCountOutputTypeCountConnectionsArgs;
};
export type CalendarGatewayProviderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderCountOutputTypeSelect<ExtArgs> | null;
};
export type CalendarGatewayProviderCountOutputTypeCountConnectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExternalCalendarConnectionWhereInput;
};
export type CalendarGatewayProviderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    adapterType?: boolean;
    name?: boolean;
    clientId?: boolean;
    clientSecret?: boolean;
    tenantId?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingClientId?: boolean;
    pendingClientSecret?: boolean;
    pendingTenantId?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
    connections?: boolean | Prisma.CalendarGatewayProvider$connectionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CalendarGatewayProviderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendarGatewayProvider"]>;
export type CalendarGatewayProviderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    adapterType?: boolean;
    name?: boolean;
    clientId?: boolean;
    clientSecret?: boolean;
    tenantId?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingClientId?: boolean;
    pendingClientSecret?: boolean;
    pendingTenantId?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["calendarGatewayProvider"]>;
export type CalendarGatewayProviderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerSlot?: boolean;
    adapterType?: boolean;
    name?: boolean;
    clientId?: boolean;
    clientSecret?: boolean;
    tenantId?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingClientId?: boolean;
    pendingClientSecret?: boolean;
    pendingTenantId?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["calendarGatewayProvider"]>;
export type CalendarGatewayProviderSelectScalar = {
    id?: boolean;
    providerSlot?: boolean;
    adapterType?: boolean;
    name?: boolean;
    clientId?: boolean;
    clientSecret?: boolean;
    tenantId?: boolean;
    isActive?: boolean;
    configuredByUserId?: boolean;
    pendingName?: boolean;
    pendingClientId?: boolean;
    pendingClientSecret?: boolean;
    pendingTenantId?: boolean;
    pendingIsActive?: boolean;
    pendingProposedByUserId?: boolean;
    configWorkflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type CalendarGatewayProviderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerSlot" | "adapterType" | "name" | "clientId" | "clientSecret" | "tenantId" | "isActive" | "configuredByUserId" | "pendingName" | "pendingClientId" | "pendingClientSecret" | "pendingTenantId" | "pendingIsActive" | "pendingProposedByUserId" | "configWorkflowInstanceId" | "createdAt", ExtArgs["result"]["calendarGatewayProvider"]>;
export type CalendarGatewayProviderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    connections?: boolean | Prisma.CalendarGatewayProvider$connectionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CalendarGatewayProviderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CalendarGatewayProviderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CalendarGatewayProviderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CalendarGatewayProviderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CalendarGatewayProvider";
    objects: {
        connections: Prisma.$ExternalCalendarConnectionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerSlot: number;
        adapterType: $Enums.CalendarAdapterType;
        name: string;
        clientId: string | null;
        clientSecret: string | null;
        tenantId: string | null;
        isActive: boolean;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingTenantId: string | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["calendarGatewayProvider"]>;
    composites: {};
};
export type CalendarGatewayProviderGetPayload<S extends boolean | null | undefined | CalendarGatewayProviderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload, S>;
export type CalendarGatewayProviderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CalendarGatewayProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CalendarGatewayProviderCountAggregateInputType | true;
};
export interface CalendarGatewayProviderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CalendarGatewayProvider'];
        meta: {
            name: 'CalendarGatewayProvider';
        };
    };
    findUnique<T extends CalendarGatewayProviderFindUniqueArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CalendarGatewayProviderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CalendarGatewayProviderFindFirstArgs>(args?: Prisma.SelectSubset<T, CalendarGatewayProviderFindFirstArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CalendarGatewayProviderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CalendarGatewayProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CalendarGatewayProviderFindManyArgs>(args?: Prisma.SelectSubset<T, CalendarGatewayProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CalendarGatewayProviderCreateArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderCreateArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CalendarGatewayProviderCreateManyArgs>(args?: Prisma.SelectSubset<T, CalendarGatewayProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CalendarGatewayProviderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CalendarGatewayProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CalendarGatewayProviderDeleteArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderDeleteArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CalendarGatewayProviderUpdateArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderUpdateArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CalendarGatewayProviderDeleteManyArgs>(args?: Prisma.SelectSubset<T, CalendarGatewayProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CalendarGatewayProviderUpdateManyArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CalendarGatewayProviderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CalendarGatewayProviderUpsertArgs>(args: Prisma.SelectSubset<T, CalendarGatewayProviderUpsertArgs<ExtArgs>>): Prisma.Prisma__CalendarGatewayProviderClient<runtime.Types.Result.GetResult<Prisma.$CalendarGatewayProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CalendarGatewayProviderCountArgs>(args?: Prisma.Subset<T, CalendarGatewayProviderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CalendarGatewayProviderCountAggregateOutputType> : number>;
    aggregate<T extends CalendarGatewayProviderAggregateArgs>(args: Prisma.Subset<T, CalendarGatewayProviderAggregateArgs>): Prisma.PrismaPromise<GetCalendarGatewayProviderAggregateType<T>>;
    groupBy<T extends CalendarGatewayProviderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CalendarGatewayProviderGroupByArgs['orderBy'];
    } : {
        orderBy?: CalendarGatewayProviderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CalendarGatewayProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarGatewayProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CalendarGatewayProviderFieldRefs;
}
export interface Prisma__CalendarGatewayProviderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    connections<T extends Prisma.CalendarGatewayProvider$connectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CalendarGatewayProvider$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExternalCalendarConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CalendarGatewayProviderFieldRefs {
    readonly id: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly providerSlot: Prisma.FieldRef<"CalendarGatewayProvider", 'Int'>;
    readonly adapterType: Prisma.FieldRef<"CalendarGatewayProvider", 'CalendarAdapterType'>;
    readonly name: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly clientId: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly clientSecret: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly tenantId: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly isActive: Prisma.FieldRef<"CalendarGatewayProvider", 'Boolean'>;
    readonly configuredByUserId: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly pendingName: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly pendingClientId: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly pendingClientSecret: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly pendingTenantId: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly pendingIsActive: Prisma.FieldRef<"CalendarGatewayProvider", 'Boolean'>;
    readonly pendingProposedByUserId: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly configWorkflowInstanceId: Prisma.FieldRef<"CalendarGatewayProvider", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CalendarGatewayProvider", 'DateTime'>;
}
export type CalendarGatewayProviderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.CalendarGatewayProviderWhereUniqueInput;
};
export type CalendarGatewayProviderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.CalendarGatewayProviderWhereUniqueInput;
};
export type CalendarGatewayProviderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    where?: Prisma.CalendarGatewayProviderWhereInput;
    orderBy?: Prisma.CalendarGatewayProviderOrderByWithRelationInput | Prisma.CalendarGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.CalendarGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarGatewayProviderScalarFieldEnum | Prisma.CalendarGatewayProviderScalarFieldEnum[];
};
export type CalendarGatewayProviderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    where?: Prisma.CalendarGatewayProviderWhereInput;
    orderBy?: Prisma.CalendarGatewayProviderOrderByWithRelationInput | Prisma.CalendarGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.CalendarGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarGatewayProviderScalarFieldEnum | Prisma.CalendarGatewayProviderScalarFieldEnum[];
};
export type CalendarGatewayProviderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    where?: Prisma.CalendarGatewayProviderWhereInput;
    orderBy?: Prisma.CalendarGatewayProviderOrderByWithRelationInput | Prisma.CalendarGatewayProviderOrderByWithRelationInput[];
    cursor?: Prisma.CalendarGatewayProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarGatewayProviderScalarFieldEnum | Prisma.CalendarGatewayProviderScalarFieldEnum[];
};
export type CalendarGatewayProviderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarGatewayProviderCreateInput, Prisma.CalendarGatewayProviderUncheckedCreateInput>;
};
export type CalendarGatewayProviderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CalendarGatewayProviderCreateManyInput | Prisma.CalendarGatewayProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarGatewayProviderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    data: Prisma.CalendarGatewayProviderCreateManyInput | Prisma.CalendarGatewayProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarGatewayProviderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarGatewayProviderUpdateInput, Prisma.CalendarGatewayProviderUncheckedUpdateInput>;
    where: Prisma.CalendarGatewayProviderWhereUniqueInput;
};
export type CalendarGatewayProviderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CalendarGatewayProviderUpdateManyMutationInput, Prisma.CalendarGatewayProviderUncheckedUpdateManyInput>;
    where?: Prisma.CalendarGatewayProviderWhereInput;
    limit?: number;
};
export type CalendarGatewayProviderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarGatewayProviderUpdateManyMutationInput, Prisma.CalendarGatewayProviderUncheckedUpdateManyInput>;
    where?: Prisma.CalendarGatewayProviderWhereInput;
    limit?: number;
};
export type CalendarGatewayProviderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.CalendarGatewayProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarGatewayProviderCreateInput, Prisma.CalendarGatewayProviderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CalendarGatewayProviderUpdateInput, Prisma.CalendarGatewayProviderUncheckedUpdateInput>;
};
export type CalendarGatewayProviderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
    where: Prisma.CalendarGatewayProviderWhereUniqueInput;
};
export type CalendarGatewayProviderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarGatewayProviderWhereInput;
    limit?: number;
};
export type CalendarGatewayProvider$connectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExternalCalendarConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ExternalCalendarConnectionOmit<ExtArgs> | null;
    include?: Prisma.ExternalCalendarConnectionInclude<ExtArgs> | null;
    where?: Prisma.ExternalCalendarConnectionWhereInput;
    orderBy?: Prisma.ExternalCalendarConnectionOrderByWithRelationInput | Prisma.ExternalCalendarConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ExternalCalendarConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExternalCalendarConnectionScalarFieldEnum | Prisma.ExternalCalendarConnectionScalarFieldEnum[];
};
export type CalendarGatewayProviderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarGatewayProviderSelect<ExtArgs> | null;
    omit?: Prisma.CalendarGatewayProviderOmit<ExtArgs> | null;
    include?: Prisma.CalendarGatewayProviderInclude<ExtArgs> | null;
};
