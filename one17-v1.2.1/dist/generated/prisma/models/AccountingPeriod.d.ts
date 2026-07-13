import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AccountingPeriodModel = runtime.Types.Result.DefaultSelection<Prisma.$AccountingPeriodPayload>;
export type AggregateAccountingPeriod = {
    _count: AccountingPeriodCountAggregateOutputType | null;
    _min: AccountingPeriodMinAggregateOutputType | null;
    _max: AccountingPeriodMaxAggregateOutputType | null;
};
export type AccountingPeriodMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    status: $Enums.AccountingPeriodStatus | null;
    openedByUserId: string | null;
    closedByUserId: string | null;
    closedAt: Date | null;
    closeWorkflowInstanceId: string | null;
    createdAt: Date | null;
};
export type AccountingPeriodMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    status: $Enums.AccountingPeriodStatus | null;
    openedByUserId: string | null;
    closedByUserId: string | null;
    closedAt: Date | null;
    closeWorkflowInstanceId: string | null;
    createdAt: Date | null;
};
export type AccountingPeriodCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    periodStart: number;
    periodEnd: number;
    status: number;
    openedByUserId: number;
    closedByUserId: number;
    closedAt: number;
    closeWorkflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type AccountingPeriodMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    openedByUserId?: true;
    closedByUserId?: true;
    closedAt?: true;
    closeWorkflowInstanceId?: true;
    createdAt?: true;
};
export type AccountingPeriodMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    openedByUserId?: true;
    closedByUserId?: true;
    closedAt?: true;
    closeWorkflowInstanceId?: true;
    createdAt?: true;
};
export type AccountingPeriodCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    openedByUserId?: true;
    closedByUserId?: true;
    closedAt?: true;
    closeWorkflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type AccountingPeriodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountingPeriodWhereInput;
    orderBy?: Prisma.AccountingPeriodOrderByWithRelationInput | Prisma.AccountingPeriodOrderByWithRelationInput[];
    cursor?: Prisma.AccountingPeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AccountingPeriodCountAggregateInputType;
    _min?: AccountingPeriodMinAggregateInputType;
    _max?: AccountingPeriodMaxAggregateInputType;
};
export type GetAccountingPeriodAggregateType<T extends AccountingPeriodAggregateArgs> = {
    [P in keyof T & keyof AggregateAccountingPeriod]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccountingPeriod[P]> : Prisma.GetScalarType<T[P], AggregateAccountingPeriod[P]>;
};
export type AccountingPeriodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountingPeriodWhereInput;
    orderBy?: Prisma.AccountingPeriodOrderByWithAggregationInput | Prisma.AccountingPeriodOrderByWithAggregationInput[];
    by: Prisma.AccountingPeriodScalarFieldEnum[] | Prisma.AccountingPeriodScalarFieldEnum;
    having?: Prisma.AccountingPeriodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountingPeriodCountAggregateInputType | true;
    _min?: AccountingPeriodMinAggregateInputType;
    _max?: AccountingPeriodMaxAggregateInputType;
};
export type AccountingPeriodGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    periodStart: Date;
    periodEnd: Date;
    status: $Enums.AccountingPeriodStatus;
    openedByUserId: string;
    closedByUserId: string | null;
    closedAt: Date | null;
    closeWorkflowInstanceId: string | null;
    createdAt: Date;
    _count: AccountingPeriodCountAggregateOutputType | null;
    _min: AccountingPeriodMinAggregateOutputType | null;
    _max: AccountingPeriodMaxAggregateOutputType | null;
};
export type GetAccountingPeriodGroupByPayload<T extends AccountingPeriodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccountingPeriodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccountingPeriodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccountingPeriodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccountingPeriodGroupByOutputType[P]>;
}>>;
export type AccountingPeriodWhereInput = {
    AND?: Prisma.AccountingPeriodWhereInput | Prisma.AccountingPeriodWhereInput[];
    OR?: Prisma.AccountingPeriodWhereInput[];
    NOT?: Prisma.AccountingPeriodWhereInput | Prisma.AccountingPeriodWhereInput[];
    id?: Prisma.UuidFilter<"AccountingPeriod"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"AccountingPeriod"> | string;
    periodStart?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFilter<"AccountingPeriod"> | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.UuidFilter<"AccountingPeriod"> | string;
    closedByUserId?: Prisma.UuidNullableFilter<"AccountingPeriod"> | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"AccountingPeriod"> | Date | string | null;
    closeWorkflowInstanceId?: Prisma.UuidNullableFilter<"AccountingPeriod"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    openedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    closedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type AccountingPeriodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    closeWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    openedBy?: Prisma.AppUserOrderByWithRelationInput;
    closedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type AccountingPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    closeWorkflowInstanceId?: string;
    ledgerEntityCode_periodStart_periodEnd?: Prisma.AccountingPeriodLedgerEntityCodePeriodStartPeriodEndCompoundUniqueInput;
    AND?: Prisma.AccountingPeriodWhereInput | Prisma.AccountingPeriodWhereInput[];
    OR?: Prisma.AccountingPeriodWhereInput[];
    NOT?: Prisma.AccountingPeriodWhereInput | Prisma.AccountingPeriodWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"AccountingPeriod"> | string;
    periodStart?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFilter<"AccountingPeriod"> | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.UuidFilter<"AccountingPeriod"> | string;
    closedByUserId?: Prisma.UuidNullableFilter<"AccountingPeriod"> | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"AccountingPeriod"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    openedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    closedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "closeWorkflowInstanceId" | "ledgerEntityCode_periodStart_periodEnd">;
export type AccountingPeriodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    closeWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AccountingPeriodCountOrderByAggregateInput;
    _max?: Prisma.AccountingPeriodMaxOrderByAggregateInput;
    _min?: Prisma.AccountingPeriodMinOrderByAggregateInput;
};
export type AccountingPeriodScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccountingPeriodScalarWhereWithAggregatesInput | Prisma.AccountingPeriodScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccountingPeriodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccountingPeriodScalarWhereWithAggregatesInput | Prisma.AccountingPeriodScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AccountingPeriod"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"AccountingPeriod"> | string;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"AccountingPeriod"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"AccountingPeriod"> | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusWithAggregatesFilter<"AccountingPeriod"> | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.UuidWithAggregatesFilter<"AccountingPeriod"> | string;
    closedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"AccountingPeriod"> | string | null;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AccountingPeriod"> | Date | string | null;
    closeWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"AccountingPeriod"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AccountingPeriod"> | Date | string;
};
export type AccountingPeriodCreateInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutAccountingPeriodsInput;
    openedBy: Prisma.AppUserCreateNestedOneWithoutAccountingPeriodsOpenedInput;
    closedBy?: Prisma.AppUserCreateNestedOneWithoutAccountingPeriodsClosedInput;
};
export type AccountingPeriodUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    openedByUserId: string;
    closedByUserId?: string | null;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutAccountingPeriodsNestedInput;
    openedBy?: Prisma.AppUserUpdateOneRequiredWithoutAccountingPeriodsOpenedNestedInput;
    closedBy?: Prisma.AppUserUpdateOneWithoutAccountingPeriodsClosedNestedInput;
};
export type AccountingPeriodUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    openedByUserId: string;
    closedByUserId?: string | null;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodListRelationFilter = {
    every?: Prisma.AccountingPeriodWhereInput;
    some?: Prisma.AccountingPeriodWhereInput;
    none?: Prisma.AccountingPeriodWhereInput;
};
export type AccountingPeriodOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AccountingPeriodLedgerEntityCodePeriodStartPeriodEndCompoundUniqueInput = {
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
};
export type AccountingPeriodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    closeWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AccountingPeriodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    closeWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AccountingPeriodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    openedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    closeWorkflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AccountingPeriodCreateNestedManyWithoutOpenedByInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput> | Prisma.AccountingPeriodCreateWithoutOpenedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyOpenedByInputEnvelope;
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
};
export type AccountingPeriodCreateNestedManyWithoutClosedByInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput> | Prisma.AccountingPeriodCreateWithoutClosedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyClosedByInputEnvelope;
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
};
export type AccountingPeriodUncheckedCreateNestedManyWithoutOpenedByInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput> | Prisma.AccountingPeriodCreateWithoutOpenedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyOpenedByInputEnvelope;
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
};
export type AccountingPeriodUncheckedCreateNestedManyWithoutClosedByInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput> | Prisma.AccountingPeriodCreateWithoutClosedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyClosedByInputEnvelope;
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
};
export type AccountingPeriodUpdateManyWithoutOpenedByNestedInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput> | Prisma.AccountingPeriodCreateWithoutOpenedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput[];
    upsert?: Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutOpenedByInput | Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutOpenedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyOpenedByInputEnvelope;
    set?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    disconnect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    delete?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    update?: Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutOpenedByInput | Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutOpenedByInput[];
    updateMany?: Prisma.AccountingPeriodUpdateManyWithWhereWithoutOpenedByInput | Prisma.AccountingPeriodUpdateManyWithWhereWithoutOpenedByInput[];
    deleteMany?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
};
export type AccountingPeriodUpdateManyWithoutClosedByNestedInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput> | Prisma.AccountingPeriodCreateWithoutClosedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput[];
    upsert?: Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutClosedByInput | Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutClosedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyClosedByInputEnvelope;
    set?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    disconnect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    delete?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    update?: Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutClosedByInput | Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutClosedByInput[];
    updateMany?: Prisma.AccountingPeriodUpdateManyWithWhereWithoutClosedByInput | Prisma.AccountingPeriodUpdateManyWithWhereWithoutClosedByInput[];
    deleteMany?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
};
export type AccountingPeriodUncheckedUpdateManyWithoutOpenedByNestedInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput> | Prisma.AccountingPeriodCreateWithoutOpenedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutOpenedByInput[];
    upsert?: Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutOpenedByInput | Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutOpenedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyOpenedByInputEnvelope;
    set?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    disconnect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    delete?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    update?: Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutOpenedByInput | Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutOpenedByInput[];
    updateMany?: Prisma.AccountingPeriodUpdateManyWithWhereWithoutOpenedByInput | Prisma.AccountingPeriodUpdateManyWithWhereWithoutOpenedByInput[];
    deleteMany?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
};
export type AccountingPeriodUncheckedUpdateManyWithoutClosedByNestedInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput> | Prisma.AccountingPeriodCreateWithoutClosedByInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput | Prisma.AccountingPeriodCreateOrConnectWithoutClosedByInput[];
    upsert?: Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutClosedByInput | Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutClosedByInput[];
    createMany?: Prisma.AccountingPeriodCreateManyClosedByInputEnvelope;
    set?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    disconnect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    delete?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    update?: Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutClosedByInput | Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutClosedByInput[];
    updateMany?: Prisma.AccountingPeriodUpdateManyWithWhereWithoutClosedByInput | Prisma.AccountingPeriodUpdateManyWithWhereWithoutClosedByInput[];
    deleteMany?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
};
export type AccountingPeriodCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput> | Prisma.AccountingPeriodCreateWithoutLedgerEntityInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput | Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.AccountingPeriodCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
};
export type AccountingPeriodUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput> | Prisma.AccountingPeriodCreateWithoutLedgerEntityInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput | Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.AccountingPeriodCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
};
export type AccountingPeriodUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput> | Prisma.AccountingPeriodCreateWithoutLedgerEntityInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput | Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.AccountingPeriodCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    disconnect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    delete?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    update?: Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.AccountingPeriodUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.AccountingPeriodUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
};
export type AccountingPeriodUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput> | Prisma.AccountingPeriodCreateWithoutLedgerEntityInput[] | Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput | Prisma.AccountingPeriodCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.AccountingPeriodUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.AccountingPeriodCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    disconnect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    delete?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    connect?: Prisma.AccountingPeriodWhereUniqueInput | Prisma.AccountingPeriodWhereUniqueInput[];
    update?: Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.AccountingPeriodUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.AccountingPeriodUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.AccountingPeriodUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
};
export type EnumAccountingPeriodStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountingPeriodStatus;
};
export type AccountingPeriodCreateWithoutOpenedByInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutAccountingPeriodsInput;
    closedBy?: Prisma.AppUserCreateNestedOneWithoutAccountingPeriodsClosedInput;
};
export type AccountingPeriodUncheckedCreateWithoutOpenedByInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    closedByUserId?: string | null;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodCreateOrConnectWithoutOpenedByInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput>;
};
export type AccountingPeriodCreateManyOpenedByInputEnvelope = {
    data: Prisma.AccountingPeriodCreateManyOpenedByInput | Prisma.AccountingPeriodCreateManyOpenedByInput[];
    skipDuplicates?: boolean;
};
export type AccountingPeriodCreateWithoutClosedByInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutAccountingPeriodsInput;
    openedBy: Prisma.AppUserCreateNestedOneWithoutAccountingPeriodsOpenedInput;
};
export type AccountingPeriodUncheckedCreateWithoutClosedByInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    openedByUserId: string;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodCreateOrConnectWithoutClosedByInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput>;
};
export type AccountingPeriodCreateManyClosedByInputEnvelope = {
    data: Prisma.AccountingPeriodCreateManyClosedByInput | Prisma.AccountingPeriodCreateManyClosedByInput[];
    skipDuplicates?: boolean;
};
export type AccountingPeriodUpsertWithWhereUniqueWithoutOpenedByInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccountingPeriodUpdateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedUpdateWithoutOpenedByInput>;
    create: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutOpenedByInput>;
};
export type AccountingPeriodUpdateWithWhereUniqueWithoutOpenedByInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateWithoutOpenedByInput, Prisma.AccountingPeriodUncheckedUpdateWithoutOpenedByInput>;
};
export type AccountingPeriodUpdateManyWithWhereWithoutOpenedByInput = {
    where: Prisma.AccountingPeriodScalarWhereInput;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateManyMutationInput, Prisma.AccountingPeriodUncheckedUpdateManyWithoutOpenedByInput>;
};
export type AccountingPeriodScalarWhereInput = {
    AND?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
    OR?: Prisma.AccountingPeriodScalarWhereInput[];
    NOT?: Prisma.AccountingPeriodScalarWhereInput | Prisma.AccountingPeriodScalarWhereInput[];
    id?: Prisma.UuidFilter<"AccountingPeriod"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"AccountingPeriod"> | string;
    periodStart?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFilter<"AccountingPeriod"> | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.UuidFilter<"AccountingPeriod"> | string;
    closedByUserId?: Prisma.UuidNullableFilter<"AccountingPeriod"> | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"AccountingPeriod"> | Date | string | null;
    closeWorkflowInstanceId?: Prisma.UuidNullableFilter<"AccountingPeriod"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AccountingPeriod"> | Date | string;
};
export type AccountingPeriodUpsertWithWhereUniqueWithoutClosedByInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccountingPeriodUpdateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedUpdateWithoutClosedByInput>;
    create: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedCreateWithoutClosedByInput>;
};
export type AccountingPeriodUpdateWithWhereUniqueWithoutClosedByInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateWithoutClosedByInput, Prisma.AccountingPeriodUncheckedUpdateWithoutClosedByInput>;
};
export type AccountingPeriodUpdateManyWithWhereWithoutClosedByInput = {
    where: Prisma.AccountingPeriodScalarWhereInput;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateManyMutationInput, Prisma.AccountingPeriodUncheckedUpdateManyWithoutClosedByInput>;
};
export type AccountingPeriodCreateWithoutLedgerEntityInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    openedBy: Prisma.AppUserCreateNestedOneWithoutAccountingPeriodsOpenedInput;
    closedBy?: Prisma.AppUserCreateNestedOneWithoutAccountingPeriodsClosedInput;
};
export type AccountingPeriodUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    openedByUserId: string;
    closedByUserId?: string | null;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput>;
};
export type AccountingPeriodCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.AccountingPeriodCreateManyLedgerEntityInput | Prisma.AccountingPeriodCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type AccountingPeriodUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccountingPeriodUpdateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.AccountingPeriodCreateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedCreateWithoutLedgerEntityInput>;
};
export type AccountingPeriodUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.AccountingPeriodWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateWithoutLedgerEntityInput, Prisma.AccountingPeriodUncheckedUpdateWithoutLedgerEntityInput>;
};
export type AccountingPeriodUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.AccountingPeriodScalarWhereInput;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateManyMutationInput, Prisma.AccountingPeriodUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type AccountingPeriodCreateManyOpenedByInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    closedByUserId?: string | null;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodCreateManyClosedByInput = {
    id?: string;
    ledgerEntityCode: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    openedByUserId: string;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodUpdateWithoutOpenedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutAccountingPeriodsNestedInput;
    closedBy?: Prisma.AppUserUpdateOneWithoutAccountingPeriodsClosedNestedInput;
};
export type AccountingPeriodUncheckedUpdateWithoutOpenedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodUncheckedUpdateManyWithoutOpenedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodUpdateWithoutClosedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutAccountingPeriodsNestedInput;
    openedBy?: Prisma.AppUserUpdateOneRequiredWithoutAccountingPeriodsOpenedNestedInput;
};
export type AccountingPeriodUncheckedUpdateWithoutClosedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodUncheckedUpdateManyWithoutClosedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodCreateManyLedgerEntityInput = {
    id?: string;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.AccountingPeriodStatus;
    openedByUserId: string;
    closedByUserId?: string | null;
    closedAt?: Date | string | null;
    closeWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type AccountingPeriodUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    openedBy?: Prisma.AppUserUpdateOneRequiredWithoutAccountingPeriodsOpenedNestedInput;
    closedBy?: Prisma.AppUserUpdateOneWithoutAccountingPeriodsClosedNestedInput;
};
export type AccountingPeriodUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAccountingPeriodStatusFieldUpdateOperationsInput | $Enums.AccountingPeriodStatus;
    openedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closeWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccountingPeriodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    openedByUserId?: boolean;
    closedByUserId?: boolean;
    closedAt?: boolean;
    closeWorkflowInstanceId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    openedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    closedBy?: boolean | Prisma.AccountingPeriod$closedByArgs<ExtArgs>;
}, ExtArgs["result"]["accountingPeriod"]>;
export type AccountingPeriodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    openedByUserId?: boolean;
    closedByUserId?: boolean;
    closedAt?: boolean;
    closeWorkflowInstanceId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    openedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    closedBy?: boolean | Prisma.AccountingPeriod$closedByArgs<ExtArgs>;
}, ExtArgs["result"]["accountingPeriod"]>;
export type AccountingPeriodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    openedByUserId?: boolean;
    closedByUserId?: boolean;
    closedAt?: boolean;
    closeWorkflowInstanceId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    openedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    closedBy?: boolean | Prisma.AccountingPeriod$closedByArgs<ExtArgs>;
}, ExtArgs["result"]["accountingPeriod"]>;
export type AccountingPeriodSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    openedByUserId?: boolean;
    closedByUserId?: boolean;
    closedAt?: boolean;
    closeWorkflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type AccountingPeriodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "periodStart" | "periodEnd" | "status" | "openedByUserId" | "closedByUserId" | "closedAt" | "closeWorkflowInstanceId" | "createdAt", ExtArgs["result"]["accountingPeriod"]>;
export type AccountingPeriodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    openedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    closedBy?: boolean | Prisma.AccountingPeriod$closedByArgs<ExtArgs>;
};
export type AccountingPeriodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    openedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    closedBy?: boolean | Prisma.AccountingPeriod$closedByArgs<ExtArgs>;
};
export type AccountingPeriodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    openedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    closedBy?: boolean | Prisma.AccountingPeriod$closedByArgs<ExtArgs>;
};
export type $AccountingPeriodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AccountingPeriod";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        openedBy: Prisma.$AppUserPayload<ExtArgs>;
        closedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        periodStart: Date;
        periodEnd: Date;
        status: $Enums.AccountingPeriodStatus;
        openedByUserId: string;
        closedByUserId: string | null;
        closedAt: Date | null;
        closeWorkflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["accountingPeriod"]>;
    composites: {};
};
export type AccountingPeriodGetPayload<S extends boolean | null | undefined | AccountingPeriodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload, S>;
export type AccountingPeriodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccountingPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccountingPeriodCountAggregateInputType | true;
};
export interface AccountingPeriodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AccountingPeriod'];
        meta: {
            name: 'AccountingPeriod';
        };
    };
    findUnique<T extends AccountingPeriodFindUniqueArgs>(args: Prisma.SelectSubset<T, AccountingPeriodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AccountingPeriodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccountingPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AccountingPeriodFindFirstArgs>(args?: Prisma.SelectSubset<T, AccountingPeriodFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AccountingPeriodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccountingPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AccountingPeriodFindManyArgs>(args?: Prisma.SelectSubset<T, AccountingPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AccountingPeriodCreateArgs>(args: Prisma.SelectSubset<T, AccountingPeriodCreateArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AccountingPeriodCreateManyArgs>(args?: Prisma.SelectSubset<T, AccountingPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AccountingPeriodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccountingPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AccountingPeriodDeleteArgs>(args: Prisma.SelectSubset<T, AccountingPeriodDeleteArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AccountingPeriodUpdateArgs>(args: Prisma.SelectSubset<T, AccountingPeriodUpdateArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AccountingPeriodDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccountingPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AccountingPeriodUpdateManyArgs>(args: Prisma.SelectSubset<T, AccountingPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AccountingPeriodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccountingPeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AccountingPeriodUpsertArgs>(args: Prisma.SelectSubset<T, AccountingPeriodUpsertArgs<ExtArgs>>): Prisma.Prisma__AccountingPeriodClient<runtime.Types.Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AccountingPeriodCountArgs>(args?: Prisma.Subset<T, AccountingPeriodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccountingPeriodCountAggregateOutputType> : number>;
    aggregate<T extends AccountingPeriodAggregateArgs>(args: Prisma.Subset<T, AccountingPeriodAggregateArgs>): Prisma.PrismaPromise<GetAccountingPeriodAggregateType<T>>;
    groupBy<T extends AccountingPeriodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccountingPeriodGroupByArgs['orderBy'];
    } : {
        orderBy?: AccountingPeriodGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccountingPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountingPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AccountingPeriodFieldRefs;
}
export interface Prisma__AccountingPeriodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    openedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    closedBy<T extends Prisma.AccountingPeriod$closedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountingPeriod$closedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AccountingPeriodFieldRefs {
    readonly id: Prisma.FieldRef<"AccountingPeriod", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"AccountingPeriod", 'String'>;
    readonly periodStart: Prisma.FieldRef<"AccountingPeriod", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"AccountingPeriod", 'DateTime'>;
    readonly status: Prisma.FieldRef<"AccountingPeriod", 'AccountingPeriodStatus'>;
    readonly openedByUserId: Prisma.FieldRef<"AccountingPeriod", 'String'>;
    readonly closedByUserId: Prisma.FieldRef<"AccountingPeriod", 'String'>;
    readonly closedAt: Prisma.FieldRef<"AccountingPeriod", 'DateTime'>;
    readonly closeWorkflowInstanceId: Prisma.FieldRef<"AccountingPeriod", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AccountingPeriod", 'DateTime'>;
}
export type AccountingPeriodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    where: Prisma.AccountingPeriodWhereUniqueInput;
};
export type AccountingPeriodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    where: Prisma.AccountingPeriodWhereUniqueInput;
};
export type AccountingPeriodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    where?: Prisma.AccountingPeriodWhereInput;
    orderBy?: Prisma.AccountingPeriodOrderByWithRelationInput | Prisma.AccountingPeriodOrderByWithRelationInput[];
    cursor?: Prisma.AccountingPeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountingPeriodScalarFieldEnum | Prisma.AccountingPeriodScalarFieldEnum[];
};
export type AccountingPeriodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    where?: Prisma.AccountingPeriodWhereInput;
    orderBy?: Prisma.AccountingPeriodOrderByWithRelationInput | Prisma.AccountingPeriodOrderByWithRelationInput[];
    cursor?: Prisma.AccountingPeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountingPeriodScalarFieldEnum | Prisma.AccountingPeriodScalarFieldEnum[];
};
export type AccountingPeriodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    where?: Prisma.AccountingPeriodWhereInput;
    orderBy?: Prisma.AccountingPeriodOrderByWithRelationInput | Prisma.AccountingPeriodOrderByWithRelationInput[];
    cursor?: Prisma.AccountingPeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountingPeriodScalarFieldEnum | Prisma.AccountingPeriodScalarFieldEnum[];
};
export type AccountingPeriodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountingPeriodCreateInput, Prisma.AccountingPeriodUncheckedCreateInput>;
};
export type AccountingPeriodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AccountingPeriodCreateManyInput | Prisma.AccountingPeriodCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccountingPeriodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    data: Prisma.AccountingPeriodCreateManyInput | Prisma.AccountingPeriodCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AccountingPeriodIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AccountingPeriodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateInput, Prisma.AccountingPeriodUncheckedUpdateInput>;
    where: Prisma.AccountingPeriodWhereUniqueInput;
};
export type AccountingPeriodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateManyMutationInput, Prisma.AccountingPeriodUncheckedUpdateManyInput>;
    where?: Prisma.AccountingPeriodWhereInput;
    limit?: number;
};
export type AccountingPeriodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountingPeriodUpdateManyMutationInput, Prisma.AccountingPeriodUncheckedUpdateManyInput>;
    where?: Prisma.AccountingPeriodWhereInput;
    limit?: number;
    include?: Prisma.AccountingPeriodIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AccountingPeriodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    where: Prisma.AccountingPeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountingPeriodCreateInput, Prisma.AccountingPeriodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AccountingPeriodUpdateInput, Prisma.AccountingPeriodUncheckedUpdateInput>;
};
export type AccountingPeriodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
    where: Prisma.AccountingPeriodWhereUniqueInput;
};
export type AccountingPeriodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountingPeriodWhereInput;
    limit?: number;
};
export type AccountingPeriod$closedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type AccountingPeriodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountingPeriodSelect<ExtArgs> | null;
    omit?: Prisma.AccountingPeriodOmit<ExtArgs> | null;
    include?: Prisma.AccountingPeriodInclude<ExtArgs> | null;
};
