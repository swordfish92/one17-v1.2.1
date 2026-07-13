import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeadModel = runtime.Types.Result.DefaultSelection<Prisma.$LeadPayload>;
export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null;
    _min: LeadMinAggregateOutputType | null;
    _max: LeadMaxAggregateOutputType | null;
};
export type LeadMinAggregateOutputType = {
    id: string | null;
    fullNameOrCompany: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    source: string | null;
    status: $Enums.LeadStatus | null;
    convertedInvestorId: string | null;
    notes: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type LeadMaxAggregateOutputType = {
    id: string | null;
    fullNameOrCompany: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    source: string | null;
    status: $Enums.LeadStatus | null;
    convertedInvestorId: string | null;
    notes: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type LeadCountAggregateOutputType = {
    id: number;
    fullNameOrCompany: number;
    contactEmail: number;
    contactPhone: number;
    source: number;
    status: number;
    convertedInvestorId: number;
    notes: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type LeadMinAggregateInputType = {
    id?: true;
    fullNameOrCompany?: true;
    contactEmail?: true;
    contactPhone?: true;
    source?: true;
    status?: true;
    convertedInvestorId?: true;
    notes?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type LeadMaxAggregateInputType = {
    id?: true;
    fullNameOrCompany?: true;
    contactEmail?: true;
    contactPhone?: true;
    source?: true;
    status?: true;
    convertedInvestorId?: true;
    notes?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type LeadCountAggregateInputType = {
    id?: true;
    fullNameOrCompany?: true;
    contactEmail?: true;
    contactPhone?: true;
    source?: true;
    status?: true;
    convertedInvestorId?: true;
    notes?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type LeadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithRelationInput | Prisma.LeadOrderByWithRelationInput[];
    cursor?: Prisma.LeadWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeadCountAggregateInputType;
    _min?: LeadMinAggregateInputType;
    _max?: LeadMaxAggregateInputType;
};
export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
    [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLead[P]> : Prisma.GetScalarType<T[P], AggregateLead[P]>;
};
export type LeadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithAggregationInput | Prisma.LeadOrderByWithAggregationInput[];
    by: Prisma.LeadScalarFieldEnum[] | Prisma.LeadScalarFieldEnum;
    having?: Prisma.LeadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeadCountAggregateInputType | true;
    _min?: LeadMinAggregateInputType;
    _max?: LeadMaxAggregateInputType;
};
export type LeadGroupByOutputType = {
    id: string;
    fullNameOrCompany: string;
    contactEmail: string | null;
    contactPhone: string | null;
    source: string | null;
    status: $Enums.LeadStatus;
    convertedInvestorId: string | null;
    notes: string | null;
    createdByUserId: string;
    createdAt: Date;
    _count: LeadCountAggregateOutputType | null;
    _min: LeadMinAggregateOutputType | null;
    _max: LeadMaxAggregateOutputType | null;
};
export type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeadGroupByOutputType[P]>;
}>>;
export type LeadWhereInput = {
    AND?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    OR?: Prisma.LeadWhereInput[];
    NOT?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    id?: Prisma.UuidFilter<"Lead"> | string;
    fullNameOrCompany?: Prisma.StringFilter<"Lead"> | string;
    contactEmail?: Prisma.StringNullableFilter<"Lead"> | string | null;
    contactPhone?: Prisma.StringNullableFilter<"Lead"> | string | null;
    source?: Prisma.StringNullableFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    notes?: Prisma.StringNullableFilter<"Lead"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"Lead"> | string;
    createdAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    convertedInvestor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    clientCommunications?: Prisma.ClientCommunicationListRelationFilter;
};
export type LeadOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullNameOrCompany?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convertedInvestorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    convertedInvestor?: Prisma.InvestorOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    clientCommunications?: Prisma.ClientCommunicationOrderByRelationAggregateInput;
};
export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    convertedInvestorId?: string;
    AND?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    OR?: Prisma.LeadWhereInput[];
    NOT?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    fullNameOrCompany?: Prisma.StringFilter<"Lead"> | string;
    contactEmail?: Prisma.StringNullableFilter<"Lead"> | string | null;
    contactPhone?: Prisma.StringNullableFilter<"Lead"> | string | null;
    source?: Prisma.StringNullableFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus;
    notes?: Prisma.StringNullableFilter<"Lead"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"Lead"> | string;
    createdAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    convertedInvestor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    clientCommunications?: Prisma.ClientCommunicationListRelationFilter;
}, "id" | "convertedInvestorId">;
export type LeadOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullNameOrCompany?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convertedInvestorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeadCountOrderByAggregateInput;
    _max?: Prisma.LeadMaxOrderByAggregateInput;
    _min?: Prisma.LeadMinOrderByAggregateInput;
};
export type LeadScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeadScalarWhereWithAggregatesInput | Prisma.LeadScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeadScalarWhereWithAggregatesInput | Prisma.LeadScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Lead"> | string;
    fullNameOrCompany?: Prisma.StringWithAggregatesFilter<"Lead"> | string;
    contactEmail?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    contactPhone?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"Lead"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Lead"> | Date | string;
};
export type LeadCreateInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    notes?: string | null;
    createdAt?: Date | string;
    convertedInvestor?: Prisma.InvestorCreateNestedOneWithoutLeadOriginInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutLeadsCreatedInput;
    clientCommunications?: Prisma.ClientCommunicationCreateNestedManyWithoutLeadInput;
};
export type LeadUncheckedCreateInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    convertedInvestorId?: string | null;
    notes?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    clientCommunications?: Prisma.ClientCommunicationUncheckedCreateNestedManyWithoutLeadInput;
};
export type LeadUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convertedInvestor?: Prisma.InvestorUpdateOneWithoutLeadOriginNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutLeadsCreatedNestedInput;
    clientCommunications?: Prisma.ClientCommunicationUpdateManyWithoutLeadNestedInput;
};
export type LeadUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientCommunications?: Prisma.ClientCommunicationUncheckedUpdateManyWithoutLeadNestedInput;
};
export type LeadCreateManyInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    convertedInvestorId?: string | null;
    notes?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type LeadUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeadUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeadListRelationFilter = {
    every?: Prisma.LeadWhereInput;
    some?: Prisma.LeadWhereInput;
    none?: Prisma.LeadWhereInput;
};
export type LeadOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeadNullableScalarRelationFilter = {
    is?: Prisma.LeadWhereInput | null;
    isNot?: Prisma.LeadWhereInput | null;
};
export type LeadCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullNameOrCompany?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convertedInvestorId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeadMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullNameOrCompany?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convertedInvestorId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeadMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullNameOrCompany?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convertedInvestorId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeadCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCreatedByInput, Prisma.LeadUncheckedCreateWithoutCreatedByInput> | Prisma.LeadCreateWithoutCreatedByInput[] | Prisma.LeadUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCreatedByInput | Prisma.LeadCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.LeadCreateManyCreatedByInputEnvelope;
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
};
export type LeadUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCreatedByInput, Prisma.LeadUncheckedCreateWithoutCreatedByInput> | Prisma.LeadCreateWithoutCreatedByInput[] | Prisma.LeadUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCreatedByInput | Prisma.LeadCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.LeadCreateManyCreatedByInputEnvelope;
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
};
export type LeadUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCreatedByInput, Prisma.LeadUncheckedCreateWithoutCreatedByInput> | Prisma.LeadCreateWithoutCreatedByInput[] | Prisma.LeadUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCreatedByInput | Prisma.LeadCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.LeadUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.LeadUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.LeadCreateManyCreatedByInputEnvelope;
    set?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    disconnect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    delete?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    update?: Prisma.LeadUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.LeadUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.LeadUpdateManyWithWhereWithoutCreatedByInput | Prisma.LeadUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
};
export type LeadUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCreatedByInput, Prisma.LeadUncheckedCreateWithoutCreatedByInput> | Prisma.LeadCreateWithoutCreatedByInput[] | Prisma.LeadUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCreatedByInput | Prisma.LeadCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.LeadUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.LeadUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.LeadCreateManyCreatedByInputEnvelope;
    set?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    disconnect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    delete?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    update?: Prisma.LeadUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.LeadUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.LeadUpdateManyWithWhereWithoutCreatedByInput | Prisma.LeadUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
};
export type LeadCreateNestedOneWithoutConvertedInvestorInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutConvertedInvestorInput, Prisma.LeadUncheckedCreateWithoutConvertedInvestorInput>;
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutConvertedInvestorInput;
    connect?: Prisma.LeadWhereUniqueInput;
};
export type LeadUncheckedCreateNestedOneWithoutConvertedInvestorInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutConvertedInvestorInput, Prisma.LeadUncheckedCreateWithoutConvertedInvestorInput>;
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutConvertedInvestorInput;
    connect?: Prisma.LeadWhereUniqueInput;
};
export type LeadUpdateOneWithoutConvertedInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutConvertedInvestorInput, Prisma.LeadUncheckedCreateWithoutConvertedInvestorInput>;
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutConvertedInvestorInput;
    upsert?: Prisma.LeadUpsertWithoutConvertedInvestorInput;
    disconnect?: Prisma.LeadWhereInput | boolean;
    delete?: Prisma.LeadWhereInput | boolean;
    connect?: Prisma.LeadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeadUpdateToOneWithWhereWithoutConvertedInvestorInput, Prisma.LeadUpdateWithoutConvertedInvestorInput>, Prisma.LeadUncheckedUpdateWithoutConvertedInvestorInput>;
};
export type LeadUncheckedUpdateOneWithoutConvertedInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutConvertedInvestorInput, Prisma.LeadUncheckedCreateWithoutConvertedInvestorInput>;
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutConvertedInvestorInput;
    upsert?: Prisma.LeadUpsertWithoutConvertedInvestorInput;
    disconnect?: Prisma.LeadWhereInput | boolean;
    delete?: Prisma.LeadWhereInput | boolean;
    connect?: Prisma.LeadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeadUpdateToOneWithWhereWithoutConvertedInvestorInput, Prisma.LeadUpdateWithoutConvertedInvestorInput>, Prisma.LeadUncheckedUpdateWithoutConvertedInvestorInput>;
};
export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus;
};
export type LeadCreateNestedOneWithoutClientCommunicationsInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutClientCommunicationsInput, Prisma.LeadUncheckedCreateWithoutClientCommunicationsInput>;
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutClientCommunicationsInput;
    connect?: Prisma.LeadWhereUniqueInput;
};
export type LeadUpdateOneWithoutClientCommunicationsNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutClientCommunicationsInput, Prisma.LeadUncheckedCreateWithoutClientCommunicationsInput>;
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutClientCommunicationsInput;
    upsert?: Prisma.LeadUpsertWithoutClientCommunicationsInput;
    disconnect?: Prisma.LeadWhereInput | boolean;
    delete?: Prisma.LeadWhereInput | boolean;
    connect?: Prisma.LeadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeadUpdateToOneWithWhereWithoutClientCommunicationsInput, Prisma.LeadUpdateWithoutClientCommunicationsInput>, Prisma.LeadUncheckedUpdateWithoutClientCommunicationsInput>;
};
export type LeadCreateWithoutCreatedByInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    notes?: string | null;
    createdAt?: Date | string;
    convertedInvestor?: Prisma.InvestorCreateNestedOneWithoutLeadOriginInput;
    clientCommunications?: Prisma.ClientCommunicationCreateNestedManyWithoutLeadInput;
};
export type LeadUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    convertedInvestorId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    clientCommunications?: Prisma.ClientCommunicationUncheckedCreateNestedManyWithoutLeadInput;
};
export type LeadCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.LeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeadCreateWithoutCreatedByInput, Prisma.LeadUncheckedCreateWithoutCreatedByInput>;
};
export type LeadCreateManyCreatedByInputEnvelope = {
    data: Prisma.LeadCreateManyCreatedByInput | Prisma.LeadCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type LeadUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.LeadWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeadUpdateWithoutCreatedByInput, Prisma.LeadUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.LeadCreateWithoutCreatedByInput, Prisma.LeadUncheckedCreateWithoutCreatedByInput>;
};
export type LeadUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.LeadWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeadUpdateWithoutCreatedByInput, Prisma.LeadUncheckedUpdateWithoutCreatedByInput>;
};
export type LeadUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.LeadScalarWhereInput;
    data: Prisma.XOR<Prisma.LeadUpdateManyMutationInput, Prisma.LeadUncheckedUpdateManyWithoutCreatedByInput>;
};
export type LeadScalarWhereInput = {
    AND?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
    OR?: Prisma.LeadScalarWhereInput[];
    NOT?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
    id?: Prisma.UuidFilter<"Lead"> | string;
    fullNameOrCompany?: Prisma.StringFilter<"Lead"> | string;
    contactEmail?: Prisma.StringNullableFilter<"Lead"> | string | null;
    contactPhone?: Prisma.StringNullableFilter<"Lead"> | string | null;
    source?: Prisma.StringNullableFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    notes?: Prisma.StringNullableFilter<"Lead"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"Lead"> | string;
    createdAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
};
export type LeadCreateWithoutConvertedInvestorInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    notes?: string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutLeadsCreatedInput;
    clientCommunications?: Prisma.ClientCommunicationCreateNestedManyWithoutLeadInput;
};
export type LeadUncheckedCreateWithoutConvertedInvestorInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    notes?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    clientCommunications?: Prisma.ClientCommunicationUncheckedCreateNestedManyWithoutLeadInput;
};
export type LeadCreateOrConnectWithoutConvertedInvestorInput = {
    where: Prisma.LeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeadCreateWithoutConvertedInvestorInput, Prisma.LeadUncheckedCreateWithoutConvertedInvestorInput>;
};
export type LeadUpsertWithoutConvertedInvestorInput = {
    update: Prisma.XOR<Prisma.LeadUpdateWithoutConvertedInvestorInput, Prisma.LeadUncheckedUpdateWithoutConvertedInvestorInput>;
    create: Prisma.XOR<Prisma.LeadCreateWithoutConvertedInvestorInput, Prisma.LeadUncheckedCreateWithoutConvertedInvestorInput>;
    where?: Prisma.LeadWhereInput;
};
export type LeadUpdateToOneWithWhereWithoutConvertedInvestorInput = {
    where?: Prisma.LeadWhereInput;
    data: Prisma.XOR<Prisma.LeadUpdateWithoutConvertedInvestorInput, Prisma.LeadUncheckedUpdateWithoutConvertedInvestorInput>;
};
export type LeadUpdateWithoutConvertedInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutLeadsCreatedNestedInput;
    clientCommunications?: Prisma.ClientCommunicationUpdateManyWithoutLeadNestedInput;
};
export type LeadUncheckedUpdateWithoutConvertedInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientCommunications?: Prisma.ClientCommunicationUncheckedUpdateManyWithoutLeadNestedInput;
};
export type LeadCreateWithoutClientCommunicationsInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    notes?: string | null;
    createdAt?: Date | string;
    convertedInvestor?: Prisma.InvestorCreateNestedOneWithoutLeadOriginInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutLeadsCreatedInput;
};
export type LeadUncheckedCreateWithoutClientCommunicationsInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    convertedInvestorId?: string | null;
    notes?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type LeadCreateOrConnectWithoutClientCommunicationsInput = {
    where: Prisma.LeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeadCreateWithoutClientCommunicationsInput, Prisma.LeadUncheckedCreateWithoutClientCommunicationsInput>;
};
export type LeadUpsertWithoutClientCommunicationsInput = {
    update: Prisma.XOR<Prisma.LeadUpdateWithoutClientCommunicationsInput, Prisma.LeadUncheckedUpdateWithoutClientCommunicationsInput>;
    create: Prisma.XOR<Prisma.LeadCreateWithoutClientCommunicationsInput, Prisma.LeadUncheckedCreateWithoutClientCommunicationsInput>;
    where?: Prisma.LeadWhereInput;
};
export type LeadUpdateToOneWithWhereWithoutClientCommunicationsInput = {
    where?: Prisma.LeadWhereInput;
    data: Prisma.XOR<Prisma.LeadUpdateWithoutClientCommunicationsInput, Prisma.LeadUncheckedUpdateWithoutClientCommunicationsInput>;
};
export type LeadUpdateWithoutClientCommunicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convertedInvestor?: Prisma.InvestorUpdateOneWithoutLeadOriginNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutLeadsCreatedNestedInput;
};
export type LeadUncheckedUpdateWithoutClientCommunicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeadCreateManyCreatedByInput = {
    id?: string;
    fullNameOrCompany: string;
    contactEmail?: string | null;
    contactPhone?: string | null;
    source?: string | null;
    status?: $Enums.LeadStatus;
    convertedInvestorId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type LeadUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convertedInvestor?: Prisma.InvestorUpdateOneWithoutLeadOriginNestedInput;
    clientCommunications?: Prisma.ClientCommunicationUpdateManyWithoutLeadNestedInput;
};
export type LeadUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientCommunications?: Prisma.ClientCommunicationUncheckedUpdateManyWithoutLeadNestedInput;
};
export type LeadUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullNameOrCompany?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    convertedInvestorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeadCountOutputType = {
    clientCommunications: number;
};
export type LeadCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientCommunications?: boolean | LeadCountOutputTypeCountClientCommunicationsArgs;
};
export type LeadCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadCountOutputTypeSelect<ExtArgs> | null;
};
export type LeadCountOutputTypeCountClientCommunicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientCommunicationWhereInput;
};
export type LeadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullNameOrCompany?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    source?: boolean;
    status?: boolean;
    convertedInvestorId?: boolean;
    notes?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    convertedInvestor?: boolean | Prisma.Lead$convertedInvestorArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    clientCommunications?: boolean | Prisma.Lead$clientCommunicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeadCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lead"]>;
export type LeadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullNameOrCompany?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    source?: boolean;
    status?: boolean;
    convertedInvestorId?: boolean;
    notes?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    convertedInvestor?: boolean | Prisma.Lead$convertedInvestorArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lead"]>;
export type LeadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullNameOrCompany?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    source?: boolean;
    status?: boolean;
    convertedInvestorId?: boolean;
    notes?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    convertedInvestor?: boolean | Prisma.Lead$convertedInvestorArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lead"]>;
export type LeadSelectScalar = {
    id?: boolean;
    fullNameOrCompany?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    source?: boolean;
    status?: boolean;
    convertedInvestorId?: boolean;
    notes?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type LeadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullNameOrCompany" | "contactEmail" | "contactPhone" | "source" | "status" | "convertedInvestorId" | "notes" | "createdByUserId" | "createdAt", ExtArgs["result"]["lead"]>;
export type LeadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    convertedInvestor?: boolean | Prisma.Lead$convertedInvestorArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    clientCommunications?: boolean | Prisma.Lead$clientCommunicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeadCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    convertedInvestor?: boolean | Prisma.Lead$convertedInvestorArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type LeadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    convertedInvestor?: boolean | Prisma.Lead$convertedInvestorArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $LeadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lead";
    objects: {
        convertedInvestor: Prisma.$InvestorPayload<ExtArgs> | null;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        clientCommunications: Prisma.$ClientCommunicationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fullNameOrCompany: string;
        contactEmail: string | null;
        contactPhone: string | null;
        source: string | null;
        status: $Enums.LeadStatus;
        convertedInvestorId: string | null;
        notes: string | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["lead"]>;
    composites: {};
};
export type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeadPayload, S>;
export type LeadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeadCountAggregateInputType | true;
};
export interface LeadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lead'];
        meta: {
            name: 'Lead';
        };
    };
    findUnique<T extends LeadFindUniqueArgs>(args: Prisma.SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeadFindFirstArgs>(args?: Prisma.SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeadFindManyArgs>(args?: Prisma.SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeadCreateArgs>(args: Prisma.SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeadCreateManyArgs>(args?: Prisma.SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeadDeleteArgs>(args: Prisma.SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeadUpdateArgs>(args: Prisma.SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeadDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeadUpdateManyArgs>(args: Prisma.SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeadUpsertArgs>(args: Prisma.SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeadCountArgs>(args?: Prisma.Subset<T, LeadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeadCountAggregateOutputType> : number>;
    aggregate<T extends LeadAggregateArgs>(args: Prisma.Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>;
    groupBy<T extends LeadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeadGroupByArgs['orderBy'];
    } : {
        orderBy?: LeadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeadFieldRefs;
}
export interface Prisma__LeadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    convertedInvestor<T extends Prisma.Lead$convertedInvestorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lead$convertedInvestorArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    clientCommunications<T extends Prisma.Lead$clientCommunicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lead$clientCommunicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientCommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeadFieldRefs {
    readonly id: Prisma.FieldRef<"Lead", 'String'>;
    readonly fullNameOrCompany: Prisma.FieldRef<"Lead", 'String'>;
    readonly contactEmail: Prisma.FieldRef<"Lead", 'String'>;
    readonly contactPhone: Prisma.FieldRef<"Lead", 'String'>;
    readonly source: Prisma.FieldRef<"Lead", 'String'>;
    readonly status: Prisma.FieldRef<"Lead", 'LeadStatus'>;
    readonly convertedInvestorId: Prisma.FieldRef<"Lead", 'String'>;
    readonly notes: Prisma.FieldRef<"Lead", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"Lead", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Lead", 'DateTime'>;
}
export type LeadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithRelationInput | Prisma.LeadOrderByWithRelationInput[];
    cursor?: Prisma.LeadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeadScalarFieldEnum | Prisma.LeadScalarFieldEnum[];
};
export type LeadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithRelationInput | Prisma.LeadOrderByWithRelationInput[];
    cursor?: Prisma.LeadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeadScalarFieldEnum | Prisma.LeadScalarFieldEnum[];
};
export type LeadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithRelationInput | Prisma.LeadOrderByWithRelationInput[];
    cursor?: Prisma.LeadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeadScalarFieldEnum | Prisma.LeadScalarFieldEnum[];
};
export type LeadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeadCreateInput, Prisma.LeadUncheckedCreateInput>;
};
export type LeadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeadCreateManyInput | Prisma.LeadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    data: Prisma.LeadCreateManyInput | Prisma.LeadCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeadIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeadUpdateInput, Prisma.LeadUncheckedUpdateInput>;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeadUpdateManyMutationInput, Prisma.LeadUncheckedUpdateManyInput>;
    where?: Prisma.LeadWhereInput;
    limit?: number;
};
export type LeadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeadUpdateManyMutationInput, Prisma.LeadUncheckedUpdateManyInput>;
    where?: Prisma.LeadWhereInput;
    limit?: number;
    include?: Prisma.LeadIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeadCreateInput, Prisma.LeadUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeadUpdateInput, Prisma.LeadUncheckedUpdateInput>;
};
export type LeadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeadWhereInput;
    limit?: number;
};
export type Lead$convertedInvestorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOmit<ExtArgs> | null;
    include?: Prisma.InvestorInclude<ExtArgs> | null;
    where?: Prisma.InvestorWhereInput;
};
export type Lead$clientCommunicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
};
