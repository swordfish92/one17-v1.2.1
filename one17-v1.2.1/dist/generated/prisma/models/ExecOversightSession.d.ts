import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExecOversightSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$ExecOversightSessionPayload>;
export type AggregateExecOversightSession = {
    _count: ExecOversightSessionCountAggregateOutputType | null;
    _min: ExecOversightSessionMinAggregateOutputType | null;
    _max: ExecOversightSessionMaxAggregateOutputType | null;
};
export type ExecOversightSessionMinAggregateOutputType = {
    id: string | null;
    principalType: $Enums.OversightPrincipalType | null;
    investorId: string | null;
    counterpartyId: string | null;
    viewedByUserId: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
    ipAddress: string | null;
};
export type ExecOversightSessionMaxAggregateOutputType = {
    id: string | null;
    principalType: $Enums.OversightPrincipalType | null;
    investorId: string | null;
    counterpartyId: string | null;
    viewedByUserId: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
    ipAddress: string | null;
};
export type ExecOversightSessionCountAggregateOutputType = {
    id: number;
    principalType: number;
    investorId: number;
    counterpartyId: number;
    viewedByUserId: number;
    startedAt: number;
    endedAt: number;
    ipAddress: number;
    _all: number;
};
export type ExecOversightSessionMinAggregateInputType = {
    id?: true;
    principalType?: true;
    investorId?: true;
    counterpartyId?: true;
    viewedByUserId?: true;
    startedAt?: true;
    endedAt?: true;
    ipAddress?: true;
};
export type ExecOversightSessionMaxAggregateInputType = {
    id?: true;
    principalType?: true;
    investorId?: true;
    counterpartyId?: true;
    viewedByUserId?: true;
    startedAt?: true;
    endedAt?: true;
    ipAddress?: true;
};
export type ExecOversightSessionCountAggregateInputType = {
    id?: true;
    principalType?: true;
    investorId?: true;
    counterpartyId?: true;
    viewedByUserId?: true;
    startedAt?: true;
    endedAt?: true;
    ipAddress?: true;
    _all?: true;
};
export type ExecOversightSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExecOversightSessionWhereInput;
    orderBy?: Prisma.ExecOversightSessionOrderByWithRelationInput | Prisma.ExecOversightSessionOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExecOversightSessionCountAggregateInputType;
    _min?: ExecOversightSessionMinAggregateInputType;
    _max?: ExecOversightSessionMaxAggregateInputType;
};
export type GetExecOversightSessionAggregateType<T extends ExecOversightSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateExecOversightSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExecOversightSession[P]> : Prisma.GetScalarType<T[P], AggregateExecOversightSession[P]>;
};
export type ExecOversightSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExecOversightSessionWhereInput;
    orderBy?: Prisma.ExecOversightSessionOrderByWithAggregationInput | Prisma.ExecOversightSessionOrderByWithAggregationInput[];
    by: Prisma.ExecOversightSessionScalarFieldEnum[] | Prisma.ExecOversightSessionScalarFieldEnum;
    having?: Prisma.ExecOversightSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExecOversightSessionCountAggregateInputType | true;
    _min?: ExecOversightSessionMinAggregateInputType;
    _max?: ExecOversightSessionMaxAggregateInputType;
};
export type ExecOversightSessionGroupByOutputType = {
    id: string;
    principalType: $Enums.OversightPrincipalType;
    investorId: string | null;
    counterpartyId: string | null;
    viewedByUserId: string;
    startedAt: Date;
    endedAt: Date | null;
    ipAddress: string | null;
    _count: ExecOversightSessionCountAggregateOutputType | null;
    _min: ExecOversightSessionMinAggregateOutputType | null;
    _max: ExecOversightSessionMaxAggregateOutputType | null;
};
export type GetExecOversightSessionGroupByPayload<T extends ExecOversightSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExecOversightSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExecOversightSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExecOversightSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExecOversightSessionGroupByOutputType[P]>;
}>>;
export type ExecOversightSessionWhereInput = {
    AND?: Prisma.ExecOversightSessionWhereInput | Prisma.ExecOversightSessionWhereInput[];
    OR?: Prisma.ExecOversightSessionWhereInput[];
    NOT?: Prisma.ExecOversightSessionWhereInput | Prisma.ExecOversightSessionWhereInput[];
    id?: Prisma.UuidFilter<"ExecOversightSession"> | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFilter<"ExecOversightSession"> | $Enums.OversightPrincipalType;
    investorId?: Prisma.StringNullableFilter<"ExecOversightSession"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"ExecOversightSession"> | string | null;
    viewedByUserId?: Prisma.UuidFilter<"ExecOversightSession"> | string;
    startedAt?: Prisma.DateTimeFilter<"ExecOversightSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"ExecOversightSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"ExecOversightSession"> | string | null;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    viewedByUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type ExecOversightSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    principalType?: Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    viewedByUserId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    counterparty?: Prisma.CounterpartyOrderByWithRelationInput;
    viewedByUser?: Prisma.AppUserOrderByWithRelationInput;
};
export type ExecOversightSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExecOversightSessionWhereInput | Prisma.ExecOversightSessionWhereInput[];
    OR?: Prisma.ExecOversightSessionWhereInput[];
    NOT?: Prisma.ExecOversightSessionWhereInput | Prisma.ExecOversightSessionWhereInput[];
    principalType?: Prisma.EnumOversightPrincipalTypeFilter<"ExecOversightSession"> | $Enums.OversightPrincipalType;
    investorId?: Prisma.StringNullableFilter<"ExecOversightSession"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"ExecOversightSession"> | string | null;
    viewedByUserId?: Prisma.UuidFilter<"ExecOversightSession"> | string;
    startedAt?: Prisma.DateTimeFilter<"ExecOversightSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"ExecOversightSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"ExecOversightSession"> | string | null;
    investor?: Prisma.XOR<Prisma.InvestorNullableScalarRelationFilter, Prisma.InvestorWhereInput> | null;
    counterparty?: Prisma.XOR<Prisma.CounterpartyNullableScalarRelationFilter, Prisma.CounterpartyWhereInput> | null;
    viewedByUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type ExecOversightSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    principalType?: Prisma.SortOrder;
    investorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    viewedByUserId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ExecOversightSessionCountOrderByAggregateInput;
    _max?: Prisma.ExecOversightSessionMaxOrderByAggregateInput;
    _min?: Prisma.ExecOversightSessionMinOrderByAggregateInput;
};
export type ExecOversightSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExecOversightSessionScalarWhereWithAggregatesInput | Prisma.ExecOversightSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExecOversightSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExecOversightSessionScalarWhereWithAggregatesInput | Prisma.ExecOversightSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ExecOversightSession"> | string;
    principalType?: Prisma.EnumOversightPrincipalTypeWithAggregatesFilter<"ExecOversightSession"> | $Enums.OversightPrincipalType;
    investorId?: Prisma.StringNullableWithAggregatesFilter<"ExecOversightSession"> | string | null;
    counterpartyId?: Prisma.UuidNullableWithAggregatesFilter<"ExecOversightSession"> | string | null;
    viewedByUserId?: Prisma.UuidWithAggregatesFilter<"ExecOversightSession"> | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"ExecOversightSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ExecOversightSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"ExecOversightSession"> | string | null;
};
export type ExecOversightSessionCreateInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
    investor?: Prisma.InvestorCreateNestedOneWithoutExecOversightSessionsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutExecOversightSessionsInput;
    viewedByUser: Prisma.AppUserCreateNestedOneWithoutExecOversightSessionsViewedInput;
};
export type ExecOversightSessionUncheckedCreateInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    investorId?: string | null;
    counterpartyId?: string | null;
    viewedByUserId: string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investor?: Prisma.InvestorUpdateOneWithoutExecOversightSessionsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutExecOversightSessionsNestedInput;
    viewedByUser?: Prisma.AppUserUpdateOneRequiredWithoutExecOversightSessionsViewedNestedInput;
};
export type ExecOversightSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionCreateManyInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    investorId?: string | null;
    counterpartyId?: string | null;
    viewedByUserId: string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionListRelationFilter = {
    every?: Prisma.ExecOversightSessionWhereInput;
    some?: Prisma.ExecOversightSessionWhereInput;
    none?: Prisma.ExecOversightSessionWhereInput;
};
export type ExecOversightSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExecOversightSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    principalType?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    viewedByUserId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type ExecOversightSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    principalType?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    viewedByUserId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type ExecOversightSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    principalType?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    counterpartyId?: Prisma.SortOrder;
    viewedByUserId?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
};
export type ExecOversightSessionCreateNestedManyWithoutViewedByUserInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput> | Prisma.ExecOversightSessionCreateWithoutViewedByUserInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput | Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyViewedByUserInputEnvelope;
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
};
export type ExecOversightSessionUncheckedCreateNestedManyWithoutViewedByUserInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput> | Prisma.ExecOversightSessionCreateWithoutViewedByUserInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput | Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyViewedByUserInputEnvelope;
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
};
export type ExecOversightSessionUpdateManyWithoutViewedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput> | Prisma.ExecOversightSessionCreateWithoutViewedByUserInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput | Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput[];
    upsert?: Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutViewedByUserInput | Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutViewedByUserInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyViewedByUserInputEnvelope;
    set?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    delete?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    update?: Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutViewedByUserInput | Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutViewedByUserInput[];
    updateMany?: Prisma.ExecOversightSessionUpdateManyWithWhereWithoutViewedByUserInput | Prisma.ExecOversightSessionUpdateManyWithWhereWithoutViewedByUserInput[];
    deleteMany?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
};
export type ExecOversightSessionUncheckedUpdateManyWithoutViewedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput> | Prisma.ExecOversightSessionCreateWithoutViewedByUserInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput | Prisma.ExecOversightSessionCreateOrConnectWithoutViewedByUserInput[];
    upsert?: Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutViewedByUserInput | Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutViewedByUserInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyViewedByUserInputEnvelope;
    set?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    delete?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    update?: Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutViewedByUserInput | Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutViewedByUserInput[];
    updateMany?: Prisma.ExecOversightSessionUpdateManyWithWhereWithoutViewedByUserInput | Prisma.ExecOversightSessionUpdateManyWithWhereWithoutViewedByUserInput[];
    deleteMany?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
};
export type ExecOversightSessionCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput> | Prisma.ExecOversightSessionCreateWithoutInvestorInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput | Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyInvestorInputEnvelope;
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
};
export type ExecOversightSessionUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput> | Prisma.ExecOversightSessionCreateWithoutInvestorInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput | Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyInvestorInputEnvelope;
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
};
export type ExecOversightSessionUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput> | Prisma.ExecOversightSessionCreateWithoutInvestorInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput | Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutInvestorInput | Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyInvestorInputEnvelope;
    set?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    delete?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    update?: Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutInvestorInput | Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.ExecOversightSessionUpdateManyWithWhereWithoutInvestorInput | Prisma.ExecOversightSessionUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
};
export type ExecOversightSessionUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput> | Prisma.ExecOversightSessionCreateWithoutInvestorInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput | Prisma.ExecOversightSessionCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutInvestorInput | Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyInvestorInputEnvelope;
    set?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    delete?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    update?: Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutInvestorInput | Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.ExecOversightSessionUpdateManyWithWhereWithoutInvestorInput | Prisma.ExecOversightSessionUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
};
export type ExecOversightSessionCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput> | Prisma.ExecOversightSessionCreateWithoutCounterpartyInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput | Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
};
export type ExecOversightSessionUncheckedCreateNestedManyWithoutCounterpartyInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput> | Prisma.ExecOversightSessionCreateWithoutCounterpartyInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput | Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyCounterpartyInputEnvelope;
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
};
export type ExecOversightSessionUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput> | Prisma.ExecOversightSessionCreateWithoutCounterpartyInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput | Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyCounterpartyInputEnvelope;
    set?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    delete?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    update?: Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.ExecOversightSessionUpdateManyWithWhereWithoutCounterpartyInput | Prisma.ExecOversightSessionUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
};
export type ExecOversightSessionUncheckedUpdateManyWithoutCounterpartyNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput> | Prisma.ExecOversightSessionCreateWithoutCounterpartyInput[] | Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput[];
    connectOrCreate?: Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput | Prisma.ExecOversightSessionCreateOrConnectWithoutCounterpartyInput[];
    upsert?: Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutCounterpartyInput | Prisma.ExecOversightSessionUpsertWithWhereUniqueWithoutCounterpartyInput[];
    createMany?: Prisma.ExecOversightSessionCreateManyCounterpartyInputEnvelope;
    set?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    delete?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    connect?: Prisma.ExecOversightSessionWhereUniqueInput | Prisma.ExecOversightSessionWhereUniqueInput[];
    update?: Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutCounterpartyInput | Prisma.ExecOversightSessionUpdateWithWhereUniqueWithoutCounterpartyInput[];
    updateMany?: Prisma.ExecOversightSessionUpdateManyWithWhereWithoutCounterpartyInput | Prisma.ExecOversightSessionUpdateManyWithWhereWithoutCounterpartyInput[];
    deleteMany?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
};
export type EnumOversightPrincipalTypeFieldUpdateOperationsInput = {
    set?: $Enums.OversightPrincipalType;
};
export type ExecOversightSessionCreateWithoutViewedByUserInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
    investor?: Prisma.InvestorCreateNestedOneWithoutExecOversightSessionsInput;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutExecOversightSessionsInput;
};
export type ExecOversightSessionUncheckedCreateWithoutViewedByUserInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    investorId?: string | null;
    counterpartyId?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionCreateOrConnectWithoutViewedByUserInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput>;
};
export type ExecOversightSessionCreateManyViewedByUserInputEnvelope = {
    data: Prisma.ExecOversightSessionCreateManyViewedByUserInput | Prisma.ExecOversightSessionCreateManyViewedByUserInput[];
    skipDuplicates?: boolean;
};
export type ExecOversightSessionUpsertWithWhereUniqueWithoutViewedByUserInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExecOversightSessionUpdateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedUpdateWithoutViewedByUserInput>;
    create: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedCreateWithoutViewedByUserInput>;
};
export type ExecOversightSessionUpdateWithWhereUniqueWithoutViewedByUserInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateWithoutViewedByUserInput, Prisma.ExecOversightSessionUncheckedUpdateWithoutViewedByUserInput>;
};
export type ExecOversightSessionUpdateManyWithWhereWithoutViewedByUserInput = {
    where: Prisma.ExecOversightSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateManyMutationInput, Prisma.ExecOversightSessionUncheckedUpdateManyWithoutViewedByUserInput>;
};
export type ExecOversightSessionScalarWhereInput = {
    AND?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
    OR?: Prisma.ExecOversightSessionScalarWhereInput[];
    NOT?: Prisma.ExecOversightSessionScalarWhereInput | Prisma.ExecOversightSessionScalarWhereInput[];
    id?: Prisma.UuidFilter<"ExecOversightSession"> | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFilter<"ExecOversightSession"> | $Enums.OversightPrincipalType;
    investorId?: Prisma.StringNullableFilter<"ExecOversightSession"> | string | null;
    counterpartyId?: Prisma.UuidNullableFilter<"ExecOversightSession"> | string | null;
    viewedByUserId?: Prisma.UuidFilter<"ExecOversightSession"> | string;
    startedAt?: Prisma.DateTimeFilter<"ExecOversightSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"ExecOversightSession"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"ExecOversightSession"> | string | null;
};
export type ExecOversightSessionCreateWithoutInvestorInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
    counterparty?: Prisma.CounterpartyCreateNestedOneWithoutExecOversightSessionsInput;
    viewedByUser: Prisma.AppUserCreateNestedOneWithoutExecOversightSessionsViewedInput;
};
export type ExecOversightSessionUncheckedCreateWithoutInvestorInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    counterpartyId?: string | null;
    viewedByUserId: string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionCreateOrConnectWithoutInvestorInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput>;
};
export type ExecOversightSessionCreateManyInvestorInputEnvelope = {
    data: Prisma.ExecOversightSessionCreateManyInvestorInput | Prisma.ExecOversightSessionCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type ExecOversightSessionUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExecOversightSessionUpdateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedCreateWithoutInvestorInput>;
};
export type ExecOversightSessionUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateWithoutInvestorInput, Prisma.ExecOversightSessionUncheckedUpdateWithoutInvestorInput>;
};
export type ExecOversightSessionUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.ExecOversightSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateManyMutationInput, Prisma.ExecOversightSessionUncheckedUpdateManyWithoutInvestorInput>;
};
export type ExecOversightSessionCreateWithoutCounterpartyInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
    investor?: Prisma.InvestorCreateNestedOneWithoutExecOversightSessionsInput;
    viewedByUser: Prisma.AppUserCreateNestedOneWithoutExecOversightSessionsViewedInput;
};
export type ExecOversightSessionUncheckedCreateWithoutCounterpartyInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    investorId?: string | null;
    viewedByUserId: string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionCreateOrConnectWithoutCounterpartyInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput>;
};
export type ExecOversightSessionCreateManyCounterpartyInputEnvelope = {
    data: Prisma.ExecOversightSessionCreateManyCounterpartyInput | Prisma.ExecOversightSessionCreateManyCounterpartyInput[];
    skipDuplicates?: boolean;
};
export type ExecOversightSessionUpsertWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExecOversightSessionUpdateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedUpdateWithoutCounterpartyInput>;
    create: Prisma.XOR<Prisma.ExecOversightSessionCreateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedCreateWithoutCounterpartyInput>;
};
export type ExecOversightSessionUpdateWithWhereUniqueWithoutCounterpartyInput = {
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateWithoutCounterpartyInput, Prisma.ExecOversightSessionUncheckedUpdateWithoutCounterpartyInput>;
};
export type ExecOversightSessionUpdateManyWithWhereWithoutCounterpartyInput = {
    where: Prisma.ExecOversightSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateManyMutationInput, Prisma.ExecOversightSessionUncheckedUpdateManyWithoutCounterpartyInput>;
};
export type ExecOversightSessionCreateManyViewedByUserInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    investorId?: string | null;
    counterpartyId?: string | null;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionUpdateWithoutViewedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investor?: Prisma.InvestorUpdateOneWithoutExecOversightSessionsNestedInput;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutExecOversightSessionsNestedInput;
};
export type ExecOversightSessionUncheckedUpdateWithoutViewedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionUncheckedUpdateManyWithoutViewedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionCreateManyInvestorInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    counterpartyId?: string | null;
    viewedByUserId: string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty?: Prisma.CounterpartyUpdateOneWithoutExecOversightSessionsNestedInput;
    viewedByUser?: Prisma.AppUserUpdateOneRequiredWithoutExecOversightSessionsViewedNestedInput;
};
export type ExecOversightSessionUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    counterpartyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionCreateManyCounterpartyInput = {
    id?: string;
    principalType: $Enums.OversightPrincipalType;
    investorId?: string | null;
    viewedByUserId: string;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    ipAddress?: string | null;
};
export type ExecOversightSessionUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investor?: Prisma.InvestorUpdateOneWithoutExecOversightSessionsNestedInput;
    viewedByUser?: Prisma.AppUserUpdateOneRequiredWithoutExecOversightSessionsViewedNestedInput;
};
export type ExecOversightSessionUncheckedUpdateWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionUncheckedUpdateManyWithoutCounterpartyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principalType?: Prisma.EnumOversightPrincipalTypeFieldUpdateOperationsInput | $Enums.OversightPrincipalType;
    investorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viewedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExecOversightSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    principalType?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    viewedByUserId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    ipAddress?: boolean;
    investor?: boolean | Prisma.ExecOversightSession$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ExecOversightSession$counterpartyArgs<ExtArgs>;
    viewedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["execOversightSession"]>;
export type ExecOversightSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    principalType?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    viewedByUserId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    ipAddress?: boolean;
    investor?: boolean | Prisma.ExecOversightSession$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ExecOversightSession$counterpartyArgs<ExtArgs>;
    viewedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["execOversightSession"]>;
export type ExecOversightSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    principalType?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    viewedByUserId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    ipAddress?: boolean;
    investor?: boolean | Prisma.ExecOversightSession$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ExecOversightSession$counterpartyArgs<ExtArgs>;
    viewedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["execOversightSession"]>;
export type ExecOversightSessionSelectScalar = {
    id?: boolean;
    principalType?: boolean;
    investorId?: boolean;
    counterpartyId?: boolean;
    viewedByUserId?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    ipAddress?: boolean;
};
export type ExecOversightSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "principalType" | "investorId" | "counterpartyId" | "viewedByUserId" | "startedAt" | "endedAt" | "ipAddress", ExtArgs["result"]["execOversightSession"]>;
export type ExecOversightSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.ExecOversightSession$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ExecOversightSession$counterpartyArgs<ExtArgs>;
    viewedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type ExecOversightSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.ExecOversightSession$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ExecOversightSession$counterpartyArgs<ExtArgs>;
    viewedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type ExecOversightSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.ExecOversightSession$investorArgs<ExtArgs>;
    counterparty?: boolean | Prisma.ExecOversightSession$counterpartyArgs<ExtArgs>;
    viewedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $ExecOversightSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExecOversightSession";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs> | null;
        counterparty: Prisma.$CounterpartyPayload<ExtArgs> | null;
        viewedByUser: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        principalType: $Enums.OversightPrincipalType;
        investorId: string | null;
        counterpartyId: string | null;
        viewedByUserId: string;
        startedAt: Date;
        endedAt: Date | null;
        ipAddress: string | null;
    }, ExtArgs["result"]["execOversightSession"]>;
    composites: {};
};
export type ExecOversightSessionGetPayload<S extends boolean | null | undefined | ExecOversightSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload, S>;
export type ExecOversightSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExecOversightSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExecOversightSessionCountAggregateInputType | true;
};
export interface ExecOversightSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExecOversightSession'];
        meta: {
            name: 'ExecOversightSession';
        };
    };
    findUnique<T extends ExecOversightSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExecOversightSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExecOversightSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, ExecOversightSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExecOversightSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExecOversightSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExecOversightSessionFindManyArgs>(args?: Prisma.SelectSubset<T, ExecOversightSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExecOversightSessionCreateArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionCreateArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExecOversightSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, ExecOversightSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExecOversightSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExecOversightSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExecOversightSessionDeleteArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExecOversightSessionUpdateArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExecOversightSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExecOversightSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExecOversightSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExecOversightSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExecOversightSessionUpsertArgs>(args: Prisma.SelectSubset<T, ExecOversightSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__ExecOversightSessionClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExecOversightSessionCountArgs>(args?: Prisma.Subset<T, ExecOversightSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExecOversightSessionCountAggregateOutputType> : number>;
    aggregate<T extends ExecOversightSessionAggregateArgs>(args: Prisma.Subset<T, ExecOversightSessionAggregateArgs>): Prisma.PrismaPromise<GetExecOversightSessionAggregateType<T>>;
    groupBy<T extends ExecOversightSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExecOversightSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: ExecOversightSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExecOversightSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecOversightSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExecOversightSessionFieldRefs;
}
export interface Prisma__ExecOversightSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.ExecOversightSession$investorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExecOversightSession$investorArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    counterparty<T extends Prisma.ExecOversightSession$counterpartyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExecOversightSession$counterpartyArgs<ExtArgs>>): Prisma.Prisma__CounterpartyClient<runtime.Types.Result.GetResult<Prisma.$CounterpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    viewedByUser<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExecOversightSessionFieldRefs {
    readonly id: Prisma.FieldRef<"ExecOversightSession", 'String'>;
    readonly principalType: Prisma.FieldRef<"ExecOversightSession", 'OversightPrincipalType'>;
    readonly investorId: Prisma.FieldRef<"ExecOversightSession", 'String'>;
    readonly counterpartyId: Prisma.FieldRef<"ExecOversightSession", 'String'>;
    readonly viewedByUserId: Prisma.FieldRef<"ExecOversightSession", 'String'>;
    readonly startedAt: Prisma.FieldRef<"ExecOversightSession", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"ExecOversightSession", 'DateTime'>;
    readonly ipAddress: Prisma.FieldRef<"ExecOversightSession", 'String'>;
}
export type ExecOversightSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    where: Prisma.ExecOversightSessionWhereUniqueInput;
};
export type ExecOversightSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    where: Prisma.ExecOversightSessionWhereUniqueInput;
};
export type ExecOversightSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    where?: Prisma.ExecOversightSessionWhereInput;
    orderBy?: Prisma.ExecOversightSessionOrderByWithRelationInput | Prisma.ExecOversightSessionOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExecOversightSessionScalarFieldEnum | Prisma.ExecOversightSessionScalarFieldEnum[];
};
export type ExecOversightSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    where?: Prisma.ExecOversightSessionWhereInput;
    orderBy?: Prisma.ExecOversightSessionOrderByWithRelationInput | Prisma.ExecOversightSessionOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExecOversightSessionScalarFieldEnum | Prisma.ExecOversightSessionScalarFieldEnum[];
};
export type ExecOversightSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    where?: Prisma.ExecOversightSessionWhereInput;
    orderBy?: Prisma.ExecOversightSessionOrderByWithRelationInput | Prisma.ExecOversightSessionOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExecOversightSessionScalarFieldEnum | Prisma.ExecOversightSessionScalarFieldEnum[];
};
export type ExecOversightSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExecOversightSessionCreateInput, Prisma.ExecOversightSessionUncheckedCreateInput>;
};
export type ExecOversightSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExecOversightSessionCreateManyInput | Prisma.ExecOversightSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExecOversightSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    data: Prisma.ExecOversightSessionCreateManyInput | Prisma.ExecOversightSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExecOversightSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExecOversightSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateInput, Prisma.ExecOversightSessionUncheckedUpdateInput>;
    where: Prisma.ExecOversightSessionWhereUniqueInput;
};
export type ExecOversightSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateManyMutationInput, Prisma.ExecOversightSessionUncheckedUpdateManyInput>;
    where?: Prisma.ExecOversightSessionWhereInput;
    limit?: number;
};
export type ExecOversightSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExecOversightSessionUpdateManyMutationInput, Prisma.ExecOversightSessionUncheckedUpdateManyInput>;
    where?: Prisma.ExecOversightSessionWhereInput;
    limit?: number;
    include?: Prisma.ExecOversightSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExecOversightSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    where: Prisma.ExecOversightSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExecOversightSessionCreateInput, Prisma.ExecOversightSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExecOversightSessionUpdateInput, Prisma.ExecOversightSessionUncheckedUpdateInput>;
};
export type ExecOversightSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
    where: Prisma.ExecOversightSessionWhereUniqueInput;
};
export type ExecOversightSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExecOversightSessionWhereInput;
    limit?: number;
};
export type ExecOversightSession$investorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorSelect<ExtArgs> | null;
    omit?: Prisma.InvestorOmit<ExtArgs> | null;
    include?: Prisma.InvestorInclude<ExtArgs> | null;
    where?: Prisma.InvestorWhereInput;
};
export type ExecOversightSession$counterpartyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CounterpartySelect<ExtArgs> | null;
    omit?: Prisma.CounterpartyOmit<ExtArgs> | null;
    include?: Prisma.CounterpartyInclude<ExtArgs> | null;
    where?: Prisma.CounterpartyWhereInput;
};
export type ExecOversightSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightSessionSelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightSessionOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightSessionInclude<ExtArgs> | null;
};
