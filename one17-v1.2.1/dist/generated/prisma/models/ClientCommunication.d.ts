import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientCommunicationModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientCommunicationPayload>;
export type AggregateClientCommunication = {
    _count: ClientCommunicationCountAggregateOutputType | null;
    _min: ClientCommunicationMinAggregateOutputType | null;
    _max: ClientCommunicationMaxAggregateOutputType | null;
};
export type ClientCommunicationMinAggregateOutputType = {
    id: string | null;
    leadId: string | null;
    investorId: string | null;
    counterpartyId: string | null;
    channel: string | null;
    direction: $Enums.CommunicationDirection | null;
    subject: string | null;
    summary: string | null;
    routedToFunctionCode: string | null;
    loggedByUserId: string | null;
    occurredAt: Date | null;
    createdAt: Date | null;
};
export type ClientCommunicationMaxAggregateOutputType = {
    id: string | null;
    leadId: string | null;
    investorId: string | null;
    counterpartyId: string | null;
    channel: string | null;
    direction: $Enums.CommunicationDirection | null;
    subject: string | null;
    summary: string | null;
    routedToFunctionCode: string | null;
    loggedByUserId: string | null;
    occurredAt: Date | null;
    createdAt: Date | null;
};
export type ClientCommunicationCountAggregateOutputType = {
    id: number;
    leadId: number;
    investorId: number;
    counterpartyId: number;
    channel: number;
    direction: number;
    subject: number;
    summary: number;
    routedToFunctionCode: number;
    loggedByUserId: number;
    occurredAt: number;
    createdAt: number;
    _all: number;
};
export type ClientCommunicationMinAggregateInputType = {
    id?: true;
    leadId?: true;
    investorId?: true;
    counterpartyId?: true;
    channel?: true;
    direction?: true;
    subject?: true;
    summary?: true;
    routedToFunctionCode?: true;
    loggedByUserId?: true;
    occurredAt?: true;
    createdAt?: true;
};
export type ClientCommunicationMaxAggregateInputType = {
    id?: true;
    leadId?: true;
    investorId?: true;
    counterpartyId?: true;
    channel?: true;
    direction?: true;
    subject?: true;
    summary?: true;
    routedToFunctionCode?: true;
    loggedByUserId?: true;
    occurredAt?: true;
    createdAt?: true;
};
export type ClientCommunicationCountAggregateInputType = {
    id?: true;
    leadId?: true;
    investorId?: true;
    counterpartyId?: true;
    channel?: true;
    direction?: true;
    subject?: true;
    summary?: true;
    routedToFunctionCode?: true;
    loggedByUserId?: true;
    occurredAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ClientCommunicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientCommunicationWhereInput;
    orderBy?: Prisma.ClientCommunicationOrderByWithRelationInput | Prisma.ClientCommunicationOrderByWithRelationInput[];
    cursor?: Prisma.ClientCommunicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientCommunicationCountAggregateInputType;
    _min?: ClientCommunicationMinAggregateInputType;
    _max?: ClientCommunicationMaxAggregateInputType;
};
export type GetClientCommunicationAggregateType<T extends ClientCommunicationAggregateArgs> = {
    [P in keyof T & keyof AggregateClientCommunication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClientCommunication[P]> : Prisma.GetScalarType<T[P], AggregateClientCommunication[P]>;
};
export type ClientCommunicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientCommunicationWhereInput;
    orderBy?: Prisma.ClientCommunicationOrderByWithAggregationInput | Prisma.ClientCommunicationOrderByWithAggregationInput[];
    by: Prisma.ClientCommunicationScalarFieldEnum[] | Prisma.ClientCommunicationScalarFieldEnum;
    having?: Prisma.ClientCommunicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCommunicationCountAggregateInputType | true;
    _min?: ClientCommunicationMinAggregateInputType;
    _max?: ClientCommunicationMaxAggregateInputType;
};
export type ClientCommunicationGroupByOutputType = {
    id: string;
    leadId: string | null;
    investorId: string | null;
    counterpartyId: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject: string | null;
    summary: string;
    routedToFunctionCode: string | null;
    loggedByUserId: string | null;
    occurredAt: Date;
    createdAt: Date;
    _count: ClientCommunicationCountAggregateOutputType | null;
    _min: ClientCommunicationMinAggregateOutputType | null;
    _max: ClientCommunicationMaxAggregateOutputType | null;
};
export type GetClientCommunicationGroupByPayload<T extends ClientCommunicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientCommunicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientCommunicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientCommunicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientCommunicationGroupByOutputType[P]>;
}>>;
export type ClientCommunicationWhereInput = {
    AND?: Prisma.ClientCommunicationWhereInput | Prisma.ClientCommunicationWhereInput[];
    OR?: Prisma.ClientCommunicationWhereInput[];
    NOT?: Prisma.ClientCommunicationWhereInput | Prisma.ClientCommunicationWhereInput[];
    id?: Prisma.UuidFilter<"ClientCommunication"> | string;
    leadId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    investorId?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    channel?: Prisma.StringFilter<"ClientCommunication"> | string;
    direction?: Prisma.EnumCommunicationDirectionFilter<"ClientCommunication"> | $Enums.CommunicationDirection;
    subject?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    summary?: Prisma.StringFilter<"ClientCommunication"> | string;
    routedToFunctionCode?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    loggedByUserId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    occurredAt?: Prisma.DateTimeFilter<"ClientCommunication"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ClientCommunication"> | Date | string;
    lead?: Prisma.XOR<Prisma.LeadNullableScalarRelationFilter, Prisma.LeadWhereInput> | null;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    loggedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type ClientCommunicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    leadId?: Prisma.SortOrderInput | Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    routedToFunctionCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    loggedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lead?: Prisma.LeadOrderByWithRelationInput;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    loggedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type ClientCommunicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClientCommunicationWhereInput | Prisma.ClientCommunicationWhereInput[];
    OR?: Prisma.ClientCommunicationWhereInput[];
    NOT?: Prisma.ClientCommunicationWhereInput | Prisma.ClientCommunicationWhereInput[];
    leadId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    investorId?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    channel?: Prisma.StringFilter<"ClientCommunication"> | string;
    direction?: Prisma.EnumCommunicationDirectionFilter<"ClientCommunication"> | $Enums.CommunicationDirection;
    subject?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    summary?: Prisma.StringFilter<"ClientCommunication"> | string;
    routedToFunctionCode?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    loggedByUserId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    occurredAt?: Prisma.DateTimeFilter<"ClientCommunication"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ClientCommunication"> | Date | string;
    lead?: Prisma.XOR<Prisma.LeadNullableScalarRelationFilter, Prisma.LeadWhereInput> | null;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    loggedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type ClientCommunicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    leadId?: Prisma.SortOrderInput | Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    routedToFunctionCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    loggedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ClientCommunicationCountOrderByAggregateInput;
    _max?: Prisma.ClientCommunicationMaxOrderByAggregateInput;
    _min?: Prisma.ClientCommunicationMinOrderByAggregateInput;
};
export type ClientCommunicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientCommunicationScalarWhereWithAggregatesInput | Prisma.ClientCommunicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientCommunicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientCommunicationScalarWhereWithAggregatesInput | Prisma.ClientCommunicationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ClientCommunication"> | string;
    leadId?: Prisma.UuidNullableWithAggregatesFilter<"ClientCommunication"> | string | null;
    investorId?: Prisma.StringNullableWithAggregatesFilter<"ClientCommunication"> | string | null;
    counterpartyId?: Prisma.UuidNullableWithAggregatesFilter<"ClientCommunication"> | string | null;
    channel?: Prisma.StringWithAggregatesFilter<"ClientCommunication"> | string;
    direction?: Prisma.EnumCommunicationDirectionWithAggregatesFilter<"ClientCommunication"> | $Enums.CommunicationDirection;
    subject?: Prisma.StringNullableWithAggregatesFilter<"ClientCommunication"> | string | null;
    summary?: Prisma.StringWithAggregatesFilter<"ClientCommunication"> | string;
    routedToFunctionCode?: Prisma.StringNullableWithAggregatesFilter<"ClientCommunication"> | string | null;
    loggedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ClientCommunication"> | string | null;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"ClientCommunication"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ClientCommunication"> | Date | string;
};
export type ClientCommunicationCreateInput = {
    id?: string;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
    lead?: Prisma.LeadCreateNestedOneWithoutClientCommunicationsInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutCommunicationsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutCommunicationsInput;
    loggedBy?: Prisma.AppUserCreateNestedOneWithoutCommunicationsLoggedInput;
};
export type ClientCommunicationUncheckedCreateInput = {
    id?: string;
    leadId?: string | null;
    investorId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lead?: Prisma.LeadUpdateOneWithoutClientCommunicationsNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutCommunicationsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutCommunicationsNestedInput;
    loggedBy?: Prisma.AppUserUpdateOneWithoutCommunicationsLoggedNestedInput;
};
export type ClientCommunicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationCreateManyInput = {
    id?: string;
    leadId?: string | null;
    investorId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationListRelationFilter = {
    every?: Prisma.ClientCommunicationWhereInput;
    some?: Prisma.ClientCommunicationWhereInput;
    none?: Prisma.ClientCommunicationWhereInput;
};
export type ClientCommunicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClientCommunicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    leadId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    routedToFunctionCode?: Prisma.SortOrder;
    loggedByUserId?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClientCommunicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    leadId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    routedToFunctionCode?: Prisma.SortOrder;
    loggedByUserId?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClientCommunicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    leadId?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    routedToFunctionCode?: Prisma.SortOrder;
    loggedByUserId?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClientCommunicationCreateNestedManyWithoutLoggedByInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput> | Prisma.ClientCommunicationCreateWithoutLoggedByInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput | Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLoggedByInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUncheckedCreateNestedManyWithoutLoggedByInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput> | Prisma.ClientCommunicationCreateWithoutLoggedByInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput | Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLoggedByInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUpdateManyWithoutLoggedByNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput> | Prisma.ClientCommunicationCreateWithoutLoggedByInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput | Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLoggedByInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLoggedByInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLoggedByInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLoggedByInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLoggedByInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutLoggedByInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutLoggedByInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type ClientCommunicationUncheckedUpdateManyWithoutLoggedByNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput> | Prisma.ClientCommunicationCreateWithoutLoggedByInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput | Prisma.ClientCommunicationCreateOrConnectWithoutLoggedByInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLoggedByInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLoggedByInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLoggedByInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLoggedByInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLoggedByInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutLoggedByInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutLoggedByInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type ClientCommunicationCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput> | Prisma.ClientCommunicationCreateWithoutInvestorInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput | Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.ClientCommunicationCreateManyInvestorInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput> | Prisma.ClientCommunicationCreateWithoutInvestorInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput | Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.ClientCommunicationCreateManyInvestorInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput> | Prisma.ClientCommunicationCreateWithoutInvestorInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput | Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutInvestorInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.ClientCommunicationCreateManyInvestorInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutInvestorInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutInvestorInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type ClientCommunicationUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput> | Prisma.ClientCommunicationCreateWithoutInvestorInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput | Prisma.ClientCommunicationCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutInvestorInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.ClientCommunicationCreateManyInvestorInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutInvestorInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutInvestorInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type ClientCommunicationCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput> | Prisma.ClientCommunicationCreateWithoutCounterpartyInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput | Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.ClientCommunicationCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput> | Prisma.ClientCommunicationCreateWithoutCounterpartyInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput | Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.ClientCommunicationCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput> | Prisma.ClientCommunicationCreateWithoutCounterpartyInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput | Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.ClientCommunicationCreateManyCounterpartyInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutCounterpartyInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type ClientCommunicationUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput> | Prisma.ClientCommunicationCreateWithoutCounterpartyInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput | Prisma.ClientCommunicationCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.ClientCommunicationCreateManyCounterpartyInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutCounterpartyInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type ClientCommunicationCreateNestedManyWithoutLeadInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLeadInput, Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput> | Prisma.ClientCommunicationCreateWithoutLeadInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput | Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLeadInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUncheckedCreateNestedManyWithoutLeadInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLeadInput, Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput> | Prisma.ClientCommunicationCreateWithoutLeadInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput | Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLeadInputEnvelope;
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
};
export type ClientCommunicationUpdateManyWithoutLeadNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLeadInput, Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput> | Prisma.ClientCommunicationCreateWithoutLeadInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput | Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLeadInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLeadInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLeadInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLeadInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLeadInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutLeadInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutLeadInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type ClientCommunicationUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLeadInput, Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput> | Prisma.ClientCommunicationCreateWithoutLeadInput[] | Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput[];
    connectOrCreate?: Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput | Prisma.ClientCommunicationCreateOrConnectWithoutLeadInput[];
    upsert?: Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLeadInput | Prisma.ClientCommunicationUpsertWithWhereUniqueWithoutLeadInput[];
    createMany?: Prisma.ClientCommunicationCreateManyLeadInputEnvelope;
    set?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    disconnect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    delete?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    connect?: Prisma.ClientCommunicationWhereUniqueInput | Prisma.ClientCommunicationWhereUniqueInput[];
    update?: Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLeadInput | Prisma.ClientCommunicationUpdateWithWhereUniqueWithoutLeadInput[];
    updateMany?: Prisma.ClientCommunicationUpdateManyWithWhereWithoutLeadInput | Prisma.ClientCommunicationUpdateManyWithWhereWithoutLeadInput[];
    deleteMany?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
};
export type EnumCommunicationDirectionFieldUpdateOperationsInput = {
    set?: $Enums.CommunicationDirection;
};
export type ClientCommunicationCreateWithoutLoggedByInput = {
    id?: string;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
    lead?: Prisma.LeadCreateNestedOneWithoutClientCommunicationsInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutCommunicationsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutCommunicationsInput;
};
export type ClientCommunicationUncheckedCreateWithoutLoggedByInput = {
    id?: string;
    leadId?: string | null;
    investorId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationCreateOrConnectWithoutLoggedByInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput>;
};
export type ClientCommunicationCreateManyLoggedByInputEnvelope = {
    data: Prisma.ClientCommunicationCreateManyLoggedByInput | Prisma.ClientCommunicationCreateManyLoggedByInput[];
    skipDuplicates?: boolean;
};
export type ClientCommunicationUpsertWithWhereUniqueWithoutLoggedByInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedUpdateWithoutLoggedByInput>;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedCreateWithoutLoggedByInput>;
};
export type ClientCommunicationUpdateWithWhereUniqueWithoutLoggedByInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutLoggedByInput, Prisma.ClientCommunicationUncheckedUpdateWithoutLoggedByInput>;
};
export type ClientCommunicationUpdateManyWithWhereWithoutLoggedByInput = {
    where: Prisma.ClientCommunicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateManyMutationInput, Prisma.ClientCommunicationUncheckedUpdateManyWithoutLoggedByInput>;
};
export type ClientCommunicationScalarWhereInput = {
    AND?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
    OR?: Prisma.ClientCommunicationScalarWhereInput[];
    NOT?: Prisma.ClientCommunicationScalarWhereInput | Prisma.ClientCommunicationScalarWhereInput[];
    id?: Prisma.UuidFilter<"ClientCommunication"> | string;
    leadId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    investorId?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    channel?: Prisma.StringFilter<"ClientCommunication"> | string;
    direction?: Prisma.EnumCommunicationDirectionFilter<"ClientCommunication"> | $Enums.CommunicationDirection;
    subject?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    summary?: Prisma.StringFilter<"ClientCommunication"> | string;
    routedToFunctionCode?: Prisma.StringNullableFilter<"ClientCommunication"> | string | null;
    loggedByUserId?: Prisma.UuidNullableFilter<"ClientCommunication"> | string | null;
    occurredAt?: Prisma.DateTimeFilter<"ClientCommunication"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ClientCommunication"> | Date | string;
};
export type ClientCommunicationCreateWithoutInvestorInput = {
    id?: string;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
    lead?: Prisma.LeadCreateNestedOneWithoutClientCommunicationsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutCommunicationsInput;
    loggedBy?: Prisma.AppUserCreateNestedOneWithoutCommunicationsLoggedInput;
};
export type ClientCommunicationUncheckedCreateWithoutInvestorInput = {
    id?: string;
    leadId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationCreateOrConnectWithoutInvestorInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput>;
};
export type ClientCommunicationCreateManyInvestorInputEnvelope = {
    data: Prisma.ClientCommunicationCreateManyInvestorInput | Prisma.ClientCommunicationCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type ClientCommunicationUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedCreateWithoutInvestorInput>;
};
export type ClientCommunicationUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutInvestorInput, Prisma.ClientCommunicationUncheckedUpdateWithoutInvestorInput>;
};
export type ClientCommunicationUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.ClientCommunicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateManyMutationInput, Prisma.ClientCommunicationUncheckedUpdateManyWithoutInvestorInput>;
};
export type ClientCommunicationCreateWithoutCounterpartyInput = {
    id?: string;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
    lead?: Prisma.LeadCreateNestedOneWithoutClientCommunicationsInput;
    investor?: Prisma.InvestorCreateNestedOneWithoutCommunicationsInput;
    loggedBy?: Prisma.AppUserCreateNestedOneWithoutCommunicationsLoggedInput;
};
export type ClientCommunicationUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    leadId?: string | null;
    investorId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput>;
};
export type ClientCommunicationCreateManyCounterpartyInputEnvelope = {
    data: Prisma.ClientCommunicationCreateManyCounterpartyInput | Prisma.ClientCommunicationCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type ClientCommunicationUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedCreateWithoutCounterpartyInput>;
};
export type ClientCommunicationUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutCounterpartyInput, Prisma.ClientCommunicationUncheckedUpdateWithoutCounterpartyInput>;
};
export type ClientCommunicationUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.ClientCommunicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateManyMutationInput, Prisma.ClientCommunicationUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type ClientCommunicationCreateWithoutLeadInput = {
    id?: string;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
    investor?: Prisma.InvestorCreateNestedOneWithoutCommunicationsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutCommunicationsInput;
    loggedBy?: Prisma.AppUserCreateNestedOneWithoutCommunicationsLoggedInput;
};
export type ClientCommunicationUncheckedCreateWithoutLeadInput = {
    id?: string;
    investorId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationCreateOrConnectWithoutLeadInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLeadInput, Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput>;
};
export type ClientCommunicationCreateManyLeadInputEnvelope = {
    data: Prisma.ClientCommunicationCreateManyLeadInput | Prisma.ClientCommunicationCreateManyLeadInput[];
    skipDuplicates?: boolean;
};
export type ClientCommunicationUpsertWithWhereUniqueWithoutLeadInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutLeadInput, Prisma.ClientCommunicationUncheckedUpdateWithoutLeadInput>;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateWithoutLeadInput, Prisma.ClientCommunicationUncheckedCreateWithoutLeadInput>;
};
export type ClientCommunicationUpdateWithWhereUniqueWithoutLeadInput = {
    where: Prisma.ClientCommunicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateWithoutLeadInput, Prisma.ClientCommunicationUncheckedUpdateWithoutLeadInput>;
};
export type ClientCommunicationUpdateManyWithWhereWithoutLeadInput = {
    where: Prisma.ClientCommunicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateManyMutationInput, Prisma.ClientCommunicationUncheckedUpdateManyWithoutLeadInput>;
};
export type ClientCommunicationCreateManyLoggedByInput = {
    id?: string;
    leadId?: string | null;
    investorId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationUpdateWithoutLoggedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lead?: Prisma.LeadUpdateOneWithoutClientCommunicationsNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutCommunicationsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutCommunicationsNestedInput;
};
export type ClientCommunicationUncheckedUpdateWithoutLoggedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationUncheckedUpdateManyWithoutLoggedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationCreateManyInvestorInput = {
    id?: string;
    leadId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lead?: Prisma.LeadUpdateOneWithoutClientCommunicationsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutCommunicationsNestedInput;
    loggedBy?: Prisma.AppUserUpdateOneWithoutCommunicationsLoggedNestedInput;
};
export type ClientCommunicationUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationCreateManyCounterpartyInput = {
    id?: string;
    leadId?: string | null;
    investorId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lead?: Prisma.LeadUpdateOneWithoutClientCommunicationsNestedInput;
    investor?: Prisma.InvestorUpdateOneWithoutCommunicationsNestedInput;
    loggedBy?: Prisma.AppUserUpdateOneWithoutCommunicationsLoggedNestedInput;
};
export type ClientCommunicationUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationCreateManyLeadInput = {
    id?: string;
    investorId?: string | null;
    counterpartyId?: string | null;
    channel: string;
    direction: $Enums.CommunicationDirection;
    subject?: string | null;
    summary: string;
    routedToFunctionCode?: string | null;
    loggedByUserId?: string | null;
    occurredAt: Date | string;
    createdAt?: Date | string;
};
export type ClientCommunicationUpdateWithoutLeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    investor?: Prisma.InvestorUpdateOneWithoutCommunicationsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutCommunicationsNestedInput;
    loggedBy?: Prisma.AppUserUpdateOneWithoutCommunicationsLoggedNestedInput;
};
export type ClientCommunicationUncheckedUpdateWithoutLeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationUncheckedUpdateManyWithoutLeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    routedToFunctionCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loggedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientCommunicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    leadId?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    channel?: boolean;
    direction?: boolean;
    subject?: boolean;
    summary?: boolean;
    routedToFunctionCode?: boolean;
    loggedByUserId?: boolean;
    occurredAt?: boolean;
    createdAt?: boolean;
    lead?: boolean | Prisma.ClientCommunication$leadArgs<ExtArgs>;
    investor?: boolean | Prisma.ClientCommunication$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ClientCommunication$counterpartyArgs<ExtArgs>;
    loggedBy?: boolean | Prisma.ClientCommunication$loggedByArgs<ExtArgs>;
}, ExtArgs["result"]["clientCommunication"]>;
export type ClientCommunicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    leadId?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    channel?: boolean;
    direction?: boolean;
    subject?: boolean;
    summary?: boolean;
    routedToFunctionCode?: boolean;
    loggedByUserId?: boolean;
    occurredAt?: boolean;
    createdAt?: boolean;
    lead?: boolean | Prisma.ClientCommunication$leadArgs<ExtArgs>;
    investor?: boolean | Prisma.ClientCommunication$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ClientCommunication$counterpartyArgs<ExtArgs>;
    loggedBy?: boolean | Prisma.ClientCommunication$loggedByArgs<ExtArgs>;
}, ExtArgs["result"]["clientCommunication"]>;
export type ClientCommunicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    leadId?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    channel?: boolean;
    direction?: boolean;
    subject?: boolean;
    summary?: boolean;
    routedToFunctionCode?: boolean;
    loggedByUserId?: boolean;
    occurredAt?: boolean;
    createdAt?: boolean;
    lead?: boolean | Prisma.ClientCommunication$leadArgs<ExtArgs>;
    investor?: boolean | Prisma.ClientCommunication$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ClientCommunication$counterpartyArgs<ExtArgs>;
    loggedBy?: boolean | Prisma.ClientCommunication$loggedByArgs<ExtArgs>;
}, ExtArgs["result"]["clientCommunication"]>;
export type ClientCommunicationSelectScalar = {
    id?: boolean;
    leadId?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    channel?: boolean;
    direction?: boolean;
    subject?: boolean;
    summary?: boolean;
    routedToFunctionCode?: boolean;
    loggedByUserId?: boolean;
    occurredAt?: boolean;
    createdAt?: boolean;
};
export type ClientCommunicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "leadId" | "investorId" | "counterpartyId" | "channel" | "direction" | "subject" | "summary" | "routedToFunctionCode" | "loggedByUserId" | "occurredAt" | "createdAt", ExtArgs["result"]["clientCommunication"]>;
export type ClientCommunicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lead?: boolean | Prisma.ClientCommunication$leadArgs<ExtArgs>;
    investor?: boolean | Prisma.ClientCommunication$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ClientCommunication$counterpartyArgs<ExtArgs>;
    loggedBy?: boolean | Prisma.ClientCommunication$loggedByArgs<ExtArgs>;
};
export type ClientCommunicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lead?: boolean | Prisma.ClientCommunication$leadArgs<ExtArgs>;
    investor?: boolean | Prisma.ClientCommunication$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ClientCommunication$counterpartyArgs<ExtArgs>;
    loggedBy?: boolean | Prisma.ClientCommunication$loggedByArgs<ExtArgs>;
};
export type ClientCommunicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lead?: boolean | Prisma.ClientCommunication$leadArgs<ExtArgs>;
    investor?: boolean | Prisma.ClientCommunication$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ClientCommunication$counterpartyArgs<ExtArgs>;
    loggedBy?: boolean | Prisma.ClientCommunication$loggedByArgs<ExtArgs>;
};
export type $ClientCommunicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClientCommunication";
    objects: {
        lead: Prisma.$LeadPayload<ExtArgs> | null;
        investor: Prisma.$InvestorPayload<ExtArgs> | null;
        counterparty: Prisma.$CounterpartyPayload<ExtArgs> | null;
        loggedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        leadId: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        channel: string;
        direction: $Enums.CommunicationDirection;
        subject: string | null;
        summary: string;
        routedToFunctionCode: string | null;
        loggedByUserId: string | null;
        occurredAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["clientCommunication"]>;
    composites: {};
};
export type ClientCommunicationGetPayload<S extends boolean | null | undefined | ClientCommunicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload, S>;
export type ClientCommunicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientCommunicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCommunicationCountAggregateInputType | true;
};
export interface ClientCommunicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClientCommunication'];
        meta: {
            name: 'ClientCommunication';
        };
    };
    findUnique<T extends ClientCommunicationFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientCommunicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientCommunicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientCommunicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientCommunicationFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientCommunicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientCommunicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientCommunicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientCommunicationFindManyArgs>(args?: Prisma.SelectSubset<T, ClientCommunicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientCommunicationCreateArgs>(args: Prisma.SelectSubset<T, ClientCommunicationCreateArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientCommunicationCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientCommunicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientCommunicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientCommunicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientCommunicationDeleteArgs>(args: Prisma.SelectSubset<T, ClientCommunicationDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientCommunicationUpdateArgs>(args: Prisma.SelectSubset<T, ClientCommunicationUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientCommunicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientCommunicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientCommunicationUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientCommunicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientCommunicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientCommunicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientCommunicationUpsertArgs>(args: Prisma.SelectSubset<T, ClientCommunicationUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientCommunicationClient<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientCommunicationCountArgs>(args?: Prisma.Subset<T, ClientCommunicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientCommunicationCountAggregateOutputType> : number>;
    aggregate<T extends ClientCommunicationAggregateArgs>(args: Prisma.Subset<T, ClientCommunicationAggregateArgs>): Prisma.PrismaPromise<GetClientCommunicationAggregateType<T>>;
    groupBy<T extends ClientCommunicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientCommunicationGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientCommunicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientCommunicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientCommunicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientCommunicationFieldRefs;
}
export interface Prisma__ClientCommunicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lead<T extends Prisma.ClientCommunication$leadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientCommunication$leadArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    investor<T extends Prisma.ClientCommunication$investorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientCommunication$investorArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    counterparty<T extends Prisma.ClientCommunication$counterpartyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientCommunication$counterpartyArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    loggedBy<T extends Prisma.ClientCommunication$loggedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientCommunication$loggedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientCommunicationFieldRefs {
    readonly id: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly leadId: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly investorId: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly channel: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly direction: Prisma.FieldRef<"ClientCommunication", 'CommunicationDirection'>;
    readonly subject: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly summary: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly routedToFunctionCode: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly loggedByUserId: Prisma.FieldRef<"ClientCommunication", 'String'>;
    readonly occurredAt: Prisma.FieldRef<"ClientCommunication", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ClientCommunication", 'DateTime'>;
}
export type ClientCommunicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    where: Prisma.ClientCommunicationWhereUniqueInput;
};
export type ClientCommunicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    where: Prisma.ClientCommunicationWhereUniqueInput;
};
export type ClientCommunicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    where?: Prisma.ClientCommunicationWhereInput;
    orderBy?: Prisma.ClientCommunicationOrderByWithRelationInput | Prisma.ClientCommunicationOrderByWithRelationInput[];
    cursor?: Prisma.ClientCommunicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientCommunicationScalarFieldEnum | Prisma.ClientCommunicationScalarFieldEnum[];
};
export type ClientCommunicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    where?: Prisma.ClientCommunicationWhereInput;
    orderBy?: Prisma.ClientCommunicationOrderByWithRelationInput | Prisma.ClientCommunicationOrderByWithRelationInput[];
    cursor?: Prisma.ClientCommunicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientCommunicationScalarFieldEnum | Prisma.ClientCommunicationScalarFieldEnum[];
};
export type ClientCommunicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    where?: Prisma.ClientCommunicationWhereInput;
    orderBy?: Prisma.ClientCommunicationOrderByWithRelationInput | Prisma.ClientCommunicationOrderByWithRelationInput[];
    cursor?: Prisma.ClientCommunicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientCommunicationScalarFieldEnum | Prisma.ClientCommunicationScalarFieldEnum[];
};
export type ClientCommunicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientCommunicationCreateInput, Prisma.ClientCommunicationUncheckedCreateInput>;
};
export type ClientCommunicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientCommunicationCreateManyInput | Prisma.ClientCommunicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientCommunicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    data: Prisma.ClientCommunicationCreateManyInput | Prisma.ClientCommunicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClientCommunicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClientCommunicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateInput, Prisma.ClientCommunicationUncheckedUpdateInput>;
    where: Prisma.ClientCommunicationWhereUniqueInput;
};
export type ClientCommunicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateManyMutationInput, Prisma.ClientCommunicationUncheckedUpdateManyInput>;
    where?: Prisma.ClientCommunicationWhereInput;
    limit?: number;
};
export type ClientCommunicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientCommunicationUpdateManyMutationInput, Prisma.ClientCommunicationUncheckedUpdateManyInput>;
    where?: Prisma.ClientCommunicationWhereInput;
    limit?: number;
    include?: Prisma.ClientCommunicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClientCommunicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    where: Prisma.ClientCommunicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCommunicationCreateInput, Prisma.ClientCommunicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientCommunicationUpdateInput, Prisma.ClientCommunicationUncheckedUpdateInput>;
};
export type ClientCommunicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
    where: Prisma.ClientCommunicationWhereUniqueInput;
};
export type ClientCommunicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientCommunicationWhereInput;
    limit?: number;
};
export type ClientCommunication$leadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where?: Prisma.LeadWhereInput;
};
export type ClientCommunication$investorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOmit<ExtArgs> | null;
    include?: Prisma.InvestorInclude<ExtArgs> | null;
    where?: Prisma.InvestorWhereInput;
};
export type ClientCommunication$counterpartyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartySelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyWhereInput;
};
export type ClientCommunication$loggedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ClientCommunicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCommunicationSelect<ExtArgs> | null;
    omit?: Prisma.ClientCommunicationOmit<ExtArgs> | null;
    include?: Prisma.ClientCommunicationInclude<ExtArgs> | null;
};
