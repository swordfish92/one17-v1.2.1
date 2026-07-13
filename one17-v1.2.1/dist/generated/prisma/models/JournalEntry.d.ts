import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JournalEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$JournalEntryPayload>;
export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null;
    _min: JournalEntryMinAggregateOutputType | null;
    _max: JournalEntryMaxAggregateOutputType | null;
};
export type JournalEntryMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    journalReference: string | null;
    entryDate: Date | null;
    description: string | null;
    status: $Enums.JournalEntryStatus | null;
    postedAt: Date | null;
    journalClass: $Enums.JournalClass | null;
    divergenceType: string | null;
    adjustmentForBasis: $Enums.AccountingBasis | null;
    interEntityRef: string | null;
    postingWorkflowInstanceId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type JournalEntryMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    journalReference: string | null;
    entryDate: Date | null;
    description: string | null;
    status: $Enums.JournalEntryStatus | null;
    postedAt: Date | null;
    journalClass: $Enums.JournalClass | null;
    divergenceType: string | null;
    adjustmentForBasis: $Enums.AccountingBasis | null;
    interEntityRef: string | null;
    postingWorkflowInstanceId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type JournalEntryCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    journalReference: number;
    entryDate: number;
    description: number;
    status: number;
    postedAt: number;
    journalClass: number;
    divergenceType: number;
    adjustmentForBasis: number;
    interEntityRef: number;
    postingWorkflowInstanceId: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type JournalEntryMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    journalReference?: true;
    entryDate?: true;
    description?: true;
    status?: true;
    postedAt?: true;
    journalClass?: true;
    divergenceType?: true;
    adjustmentForBasis?: true;
    interEntityRef?: true;
    postingWorkflowInstanceId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type JournalEntryMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    journalReference?: true;
    entryDate?: true;
    description?: true;
    status?: true;
    postedAt?: true;
    journalClass?: true;
    divergenceType?: true;
    adjustmentForBasis?: true;
    interEntityRef?: true;
    postingWorkflowInstanceId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type JournalEntryCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    journalReference?: true;
    entryDate?: true;
    description?: true;
    status?: true;
    postedAt?: true;
    journalClass?: true;
    divergenceType?: true;
    adjustmentForBasis?: true;
    interEntityRef?: true;
    postingWorkflowInstanceId?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type JournalEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryWhereInput;
    orderBy?: Prisma.JournalEntryOrderByWithRelationInput | Prisma.JournalEntryOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JournalEntryCountAggregateInputType;
    _min?: JournalEntryMinAggregateInputType;
    _max?: JournalEntryMaxAggregateInputType;
};
export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJournalEntry[P]> : Prisma.GetScalarType<T[P], AggregateJournalEntry[P]>;
};
export type JournalEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryWhereInput;
    orderBy?: Prisma.JournalEntryOrderByWithAggregationInput | Prisma.JournalEntryOrderByWithAggregationInput[];
    by: Prisma.JournalEntryScalarFieldEnum[] | Prisma.JournalEntryScalarFieldEnum;
    having?: Prisma.JournalEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JournalEntryCountAggregateInputType | true;
    _min?: JournalEntryMinAggregateInputType;
    _max?: JournalEntryMaxAggregateInputType;
};
export type JournalEntryGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date;
    description: string;
    status: $Enums.JournalEntryStatus;
    postedAt: Date | null;
    journalClass: $Enums.JournalClass;
    divergenceType: string | null;
    adjustmentForBasis: $Enums.AccountingBasis | null;
    interEntityRef: string | null;
    postingWorkflowInstanceId: string | null;
    createdByUserId: string;
    createdAt: Date;
    _count: JournalEntryCountAggregateOutputType | null;
    _min: JournalEntryMinAggregateOutputType | null;
    _max: JournalEntryMaxAggregateOutputType | null;
};
export type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JournalEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JournalEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JournalEntryGroupByOutputType[P]>;
}>>;
export type JournalEntryWhereInput = {
    AND?: Prisma.JournalEntryWhereInput | Prisma.JournalEntryWhereInput[];
    OR?: Prisma.JournalEntryWhereInput[];
    NOT?: Prisma.JournalEntryWhereInput | Prisma.JournalEntryWhereInput[];
    id?: Prisma.UuidFilter<"JournalEntry"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"JournalEntry"> | string;
    journalReference?: Prisma.StringFilter<"JournalEntry"> | string;
    entryDate?: Prisma.DateTimeFilter<"JournalEntry"> | Date | string;
    description?: Prisma.StringFilter<"JournalEntry"> | string;
    status?: Prisma.EnumJournalEntryStatusFilter<"JournalEntry"> | $Enums.JournalEntryStatus;
    postedAt?: Prisma.DateTimeNullableFilter<"JournalEntry"> | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFilter<"JournalEntry"> | $Enums.JournalClass;
    divergenceType?: Prisma.StringNullableFilter<"JournalEntry"> | string | null;
    adjustmentForBasis?: Prisma.EnumAccountingBasisNullableFilter<"JournalEntry"> | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.StringNullableFilter<"JournalEntry"> | string | null;
    postingWorkflowInstanceId?: Prisma.UuidNullableFilter<"JournalEntry"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"JournalEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"JournalEntry"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.JournalEntryLineListRelationFilter;
    transactions?: Prisma.TxnListRelationFilter;
};
export type JournalEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    journalReference?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    postedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    journalClass?: Prisma.SortOrder;
    divergenceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjustmentForBasis?: Prisma.SortOrderInput | Prisma.SortOrder;
    interEntityRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    postingWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    lines?: Prisma.JournalEntryLineOrderByRelationAggregateInput;
    transactions?: Prisma.TxnOrderByRelationAggregateInput;
};
export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    postingWorkflowInstanceId?: string;
    AND?: Prisma.JournalEntryWhereInput | Prisma.JournalEntryWhereInput[];
    OR?: Prisma.JournalEntryWhereInput[];
    NOT?: Prisma.JournalEntryWhereInput | Prisma.JournalEntryWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"JournalEntry"> | string;
    journalReference?: Prisma.StringFilter<"JournalEntry"> | string;
    entryDate?: Prisma.DateTimeFilter<"JournalEntry"> | Date | string;
    description?: Prisma.StringFilter<"JournalEntry"> | string;
    status?: Prisma.EnumJournalEntryStatusFilter<"JournalEntry"> | $Enums.JournalEntryStatus;
    postedAt?: Prisma.DateTimeNullableFilter<"JournalEntry"> | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFilter<"JournalEntry"> | $Enums.JournalClass;
    divergenceType?: Prisma.StringNullableFilter<"JournalEntry"> | string | null;
    adjustmentForBasis?: Prisma.EnumAccountingBasisNullableFilter<"JournalEntry"> | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.StringNullableFilter<"JournalEntry"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"JournalEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"JournalEntry"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.JournalEntryLineListRelationFilter;
    transactions?: Prisma.TxnListRelationFilter;
}, "id" | "postingWorkflowInstanceId">;
export type JournalEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    journalReference?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    postedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    journalClass?: Prisma.SortOrder;
    divergenceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    adjustmentForBasis?: Prisma.SortOrderInput | Prisma.SortOrder;
    interEntityRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    postingWorkflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.JournalEntryCountOrderByAggregateInput;
    _max?: Prisma.JournalEntryMaxOrderByAggregateInput;
    _min?: Prisma.JournalEntryMinOrderByAggregateInput;
};
export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.JournalEntryScalarWhereWithAggregatesInput | Prisma.JournalEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.JournalEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JournalEntryScalarWhereWithAggregatesInput | Prisma.JournalEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"JournalEntry"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"JournalEntry"> | string;
    journalReference?: Prisma.StringWithAggregatesFilter<"JournalEntry"> | string;
    entryDate?: Prisma.DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string;
    description?: Prisma.StringWithAggregatesFilter<"JournalEntry"> | string;
    status?: Prisma.EnumJournalEntryStatusWithAggregatesFilter<"JournalEntry"> | $Enums.JournalEntryStatus;
    postedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"JournalEntry"> | Date | string | null;
    journalClass?: Prisma.EnumJournalClassWithAggregatesFilter<"JournalEntry"> | $Enums.JournalClass;
    divergenceType?: Prisma.StringNullableWithAggregatesFilter<"JournalEntry"> | string | null;
    adjustmentForBasis?: Prisma.EnumAccountingBasisNullableWithAggregatesFilter<"JournalEntry"> | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.StringNullableWithAggregatesFilter<"JournalEntry"> | string | null;
    postingWorkflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"JournalEntry"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"JournalEntry"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string;
};
export type JournalEntryCreateInput = {
    id?: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutJournalEntriesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutJournalEntriesCreatedInput;
    lines?: Prisma.JournalEntryLineCreateNestedManyWithoutJournalEntryInput;
    transactions?: Prisma.TxnCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    lines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutJournalEntryInput;
    transactions?: Prisma.TxnUncheckedCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutJournalEntriesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutJournalEntriesCreatedNestedInput;
    lines?: Prisma.JournalEntryLineUpdateManyWithoutJournalEntryNestedInput;
    transactions?: Prisma.TxnUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutJournalEntryNestedInput;
    transactions?: Prisma.TxnUncheckedUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type JournalEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalEntryListRelationFilter = {
    every?: Prisma.JournalEntryWhereInput;
    some?: Prisma.JournalEntryWhereInput;
    none?: Prisma.JournalEntryWhereInput;
};
export type JournalEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JournalEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    journalReference?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    postedAt?: Prisma.SortOrder;
    journalClass?: Prisma.SortOrder;
    divergenceType?: Prisma.SortOrder;
    adjustmentForBasis?: Prisma.SortOrder;
    interEntityRef?: Prisma.SortOrder;
    postingWorkflowInstanceId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JournalEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    journalReference?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    postedAt?: Prisma.SortOrder;
    journalClass?: Prisma.SortOrder;
    divergenceType?: Prisma.SortOrder;
    adjustmentForBasis?: Prisma.SortOrder;
    interEntityRef?: Prisma.SortOrder;
    postingWorkflowInstanceId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JournalEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    journalReference?: Prisma.SortOrder;
    entryDate?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    postedAt?: Prisma.SortOrder;
    journalClass?: Prisma.SortOrder;
    divergenceType?: Prisma.SortOrder;
    adjustmentForBasis?: Prisma.SortOrder;
    interEntityRef?: Prisma.SortOrder;
    postingWorkflowInstanceId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JournalEntryScalarRelationFilter = {
    is?: Prisma.JournalEntryWhereInput;
    isNot?: Prisma.JournalEntryWhereInput;
};
export type JournalEntryNullableScalarRelationFilter = {
    is?: Prisma.JournalEntryWhereInput | null;
    isNot?: Prisma.JournalEntryWhereInput | null;
};
export type JournalEntryCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutCreatedByInput, Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput> | Prisma.JournalEntryCreateWithoutCreatedByInput[] | Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput | Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.JournalEntryCreateManyCreatedByInputEnvelope;
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
};
export type JournalEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutCreatedByInput, Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput> | Prisma.JournalEntryCreateWithoutCreatedByInput[] | Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput | Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.JournalEntryCreateManyCreatedByInputEnvelope;
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
};
export type JournalEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutCreatedByInput, Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput> | Prisma.JournalEntryCreateWithoutCreatedByInput[] | Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput | Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.JournalEntryUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.JournalEntryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.JournalEntryCreateManyCreatedByInputEnvelope;
    set?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    delete?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    update?: Prisma.JournalEntryUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.JournalEntryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.JournalEntryUpdateManyWithWhereWithoutCreatedByInput | Prisma.JournalEntryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.JournalEntryScalarWhereInput | Prisma.JournalEntryScalarWhereInput[];
};
export type JournalEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutCreatedByInput, Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput> | Prisma.JournalEntryCreateWithoutCreatedByInput[] | Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput | Prisma.JournalEntryCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.JournalEntryUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.JournalEntryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.JournalEntryCreateManyCreatedByInputEnvelope;
    set?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    delete?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    update?: Prisma.JournalEntryUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.JournalEntryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.JournalEntryUpdateManyWithWhereWithoutCreatedByInput | Prisma.JournalEntryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.JournalEntryScalarWhereInput | Prisma.JournalEntryScalarWhereInput[];
};
export type JournalEntryCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.JournalEntryCreateWithoutLedgerEntityInput[] | Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.JournalEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
};
export type JournalEntryUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.JournalEntryCreateWithoutLedgerEntityInput[] | Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.JournalEntryCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
};
export type JournalEntryUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.JournalEntryCreateWithoutLedgerEntityInput[] | Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.JournalEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.JournalEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.JournalEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    delete?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    update?: Prisma.JournalEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.JournalEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.JournalEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.JournalEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.JournalEntryScalarWhereInput | Prisma.JournalEntryScalarWhereInput[];
};
export type JournalEntryUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput> | Prisma.JournalEntryCreateWithoutLedgerEntityInput[] | Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput | Prisma.JournalEntryCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.JournalEntryUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.JournalEntryUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.JournalEntryCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    disconnect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    delete?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    connect?: Prisma.JournalEntryWhereUniqueInput | Prisma.JournalEntryWhereUniqueInput[];
    update?: Prisma.JournalEntryUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.JournalEntryUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.JournalEntryUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.JournalEntryUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.JournalEntryScalarWhereInput | Prisma.JournalEntryScalarWhereInput[];
};
export type EnumJournalEntryStatusFieldUpdateOperationsInput = {
    set?: $Enums.JournalEntryStatus;
};
export type EnumJournalClassFieldUpdateOperationsInput = {
    set?: $Enums.JournalClass;
};
export type NullableEnumAccountingBasisFieldUpdateOperationsInput = {
    set?: $Enums.AccountingBasis | null;
};
export type JournalEntryCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutLinesInput, Prisma.JournalEntryUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutLinesInput;
    connect?: Prisma.JournalEntryWhereUniqueInput;
};
export type JournalEntryUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutLinesInput, Prisma.JournalEntryUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.JournalEntryUpsertWithoutLinesInput;
    connect?: Prisma.JournalEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JournalEntryUpdateToOneWithWhereWithoutLinesInput, Prisma.JournalEntryUpdateWithoutLinesInput>, Prisma.JournalEntryUncheckedUpdateWithoutLinesInput>;
};
export type JournalEntryCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutTransactionsInput, Prisma.JournalEntryUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.JournalEntryWhereUniqueInput;
};
export type JournalEntryUpdateOneWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.JournalEntryCreateWithoutTransactionsInput, Prisma.JournalEntryUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.JournalEntryCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.JournalEntryUpsertWithoutTransactionsInput;
    disconnect?: Prisma.JournalEntryWhereInput | boolean;
    delete?: Prisma.JournalEntryWhereInput | boolean;
    connect?: Prisma.JournalEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JournalEntryUpdateToOneWithWhereWithoutTransactionsInput, Prisma.JournalEntryUpdateWithoutTransactionsInput>, Prisma.JournalEntryUncheckedUpdateWithoutTransactionsInput>;
};
export type JournalEntryCreateWithoutCreatedByInput = {
    id?: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutJournalEntriesInput;
    lines?: Prisma.JournalEntryLineCreateNestedManyWithoutJournalEntryInput;
    transactions?: Prisma.TxnCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    lines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutJournalEntryInput;
    transactions?: Prisma.TxnUncheckedCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutCreatedByInput, Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput>;
};
export type JournalEntryCreateManyCreatedByInputEnvelope = {
    data: Prisma.JournalEntryCreateManyCreatedByInput | Prisma.JournalEntryCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type JournalEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.JournalEntryUpdateWithoutCreatedByInput, Prisma.JournalEntryUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutCreatedByInput, Prisma.JournalEntryUncheckedCreateWithoutCreatedByInput>;
};
export type JournalEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.JournalEntryUpdateWithoutCreatedByInput, Prisma.JournalEntryUncheckedUpdateWithoutCreatedByInput>;
};
export type JournalEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.JournalEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.JournalEntryUpdateManyMutationInput, Prisma.JournalEntryUncheckedUpdateManyWithoutCreatedByInput>;
};
export type JournalEntryScalarWhereInput = {
    AND?: Prisma.JournalEntryScalarWhereInput | Prisma.JournalEntryScalarWhereInput[];
    OR?: Prisma.JournalEntryScalarWhereInput[];
    NOT?: Prisma.JournalEntryScalarWhereInput | Prisma.JournalEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"JournalEntry"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"JournalEntry"> | string;
    journalReference?: Prisma.StringFilter<"JournalEntry"> | string;
    entryDate?: Prisma.DateTimeFilter<"JournalEntry"> | Date | string;
    description?: Prisma.StringFilter<"JournalEntry"> | string;
    status?: Prisma.EnumJournalEntryStatusFilter<"JournalEntry"> | $Enums.JournalEntryStatus;
    postedAt?: Prisma.DateTimeNullableFilter<"JournalEntry"> | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFilter<"JournalEntry"> | $Enums.JournalClass;
    divergenceType?: Prisma.StringNullableFilter<"JournalEntry"> | string | null;
    adjustmentForBasis?: Prisma.EnumAccountingBasisNullableFilter<"JournalEntry"> | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.StringNullableFilter<"JournalEntry"> | string | null;
    postingWorkflowInstanceId?: Prisma.UuidNullableFilter<"JournalEntry"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"JournalEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"JournalEntry"> | Date | string;
};
export type JournalEntryCreateWithoutLedgerEntityInput = {
    id?: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutJournalEntriesCreatedInput;
    lines?: Prisma.JournalEntryLineCreateNestedManyWithoutJournalEntryInput;
    transactions?: Prisma.TxnCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    lines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutJournalEntryInput;
    transactions?: Prisma.TxnUncheckedCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type JournalEntryCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.JournalEntryCreateManyLedgerEntityInput | Prisma.JournalEntryCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type JournalEntryUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.JournalEntryUpdateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedCreateWithoutLedgerEntityInput>;
};
export type JournalEntryUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.JournalEntryUpdateWithoutLedgerEntityInput, Prisma.JournalEntryUncheckedUpdateWithoutLedgerEntityInput>;
};
export type JournalEntryUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.JournalEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.JournalEntryUpdateManyMutationInput, Prisma.JournalEntryUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type JournalEntryCreateWithoutLinesInput = {
    id?: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutJournalEntriesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutJournalEntriesCreatedInput;
    transactions?: Prisma.TxnCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryUncheckedCreateWithoutLinesInput = {
    id?: string;
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    transactions?: Prisma.TxnUncheckedCreateNestedManyWithoutPostedJournalEntryInput;
};
export type JournalEntryCreateOrConnectWithoutLinesInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutLinesInput, Prisma.JournalEntryUncheckedCreateWithoutLinesInput>;
};
export type JournalEntryUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.JournalEntryUpdateWithoutLinesInput, Prisma.JournalEntryUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutLinesInput, Prisma.JournalEntryUncheckedCreateWithoutLinesInput>;
    where?: Prisma.JournalEntryWhereInput;
};
export type JournalEntryUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.JournalEntryWhereInput;
    data: Prisma.XOR<Prisma.JournalEntryUpdateWithoutLinesInput, Prisma.JournalEntryUncheckedUpdateWithoutLinesInput>;
};
export type JournalEntryUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutJournalEntriesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutJournalEntriesCreatedNestedInput;
    transactions?: Prisma.TxnUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TxnUncheckedUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryCreateWithoutTransactionsInput = {
    id?: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutJournalEntriesInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutJournalEntriesCreatedInput;
    lines?: Prisma.JournalEntryLineCreateNestedManyWithoutJournalEntryInput;
};
export type JournalEntryUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    lines?: Prisma.JournalEntryLineUncheckedCreateNestedManyWithoutJournalEntryInput;
};
export type JournalEntryCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.JournalEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutTransactionsInput, Prisma.JournalEntryUncheckedCreateWithoutTransactionsInput>;
};
export type JournalEntryUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.JournalEntryUpdateWithoutTransactionsInput, Prisma.JournalEntryUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.JournalEntryCreateWithoutTransactionsInput, Prisma.JournalEntryUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.JournalEntryWhereInput;
};
export type JournalEntryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.JournalEntryWhereInput;
    data: Prisma.XOR<Prisma.JournalEntryUpdateWithoutTransactionsInput, Prisma.JournalEntryUncheckedUpdateWithoutTransactionsInput>;
};
export type JournalEntryUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutJournalEntriesNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutJournalEntriesCreatedNestedInput;
    lines?: Prisma.JournalEntryLineUpdateManyWithoutJournalEntryNestedInput;
};
export type JournalEntryUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutJournalEntryNestedInput;
};
export type JournalEntryCreateManyCreatedByInput = {
    id?: string;
    ledgerEntityCode: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type JournalEntryUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutJournalEntriesNestedInput;
    lines?: Prisma.JournalEntryLineUpdateManyWithoutJournalEntryNestedInput;
    transactions?: Prisma.TxnUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutJournalEntryNestedInput;
    transactions?: Prisma.TxnUncheckedUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalEntryCreateManyLedgerEntityInput = {
    id?: string;
    journalReference: string;
    entryDate: Date | string;
    description: string;
    status?: $Enums.JournalEntryStatus;
    postedAt?: Date | string | null;
    journalClass?: $Enums.JournalClass;
    divergenceType?: string | null;
    adjustmentForBasis?: $Enums.AccountingBasis | null;
    interEntityRef?: string | null;
    postingWorkflowInstanceId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type JournalEntryUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutJournalEntriesCreatedNestedInput;
    lines?: Prisma.JournalEntryLineUpdateManyWithoutJournalEntryNestedInput;
    transactions?: Prisma.TxnUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.JournalEntryLineUncheckedUpdateManyWithoutJournalEntryNestedInput;
    transactions?: Prisma.TxnUncheckedUpdateManyWithoutPostedJournalEntryNestedInput;
};
export type JournalEntryUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journalReference?: Prisma.StringFieldUpdateOperationsInput | string;
    entryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus;
    postedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    journalClass?: Prisma.EnumJournalClassFieldUpdateOperationsInput | $Enums.JournalClass;
    divergenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adjustmentForBasis?: Prisma.NullableEnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis | null;
    interEntityRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postingWorkflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalEntryCountOutputType = {
    lines: number;
    transactions: number;
};
export type JournalEntryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | JournalEntryCountOutputTypeCountLinesArgs;
    transactions?: boolean | JournalEntryCountOutputTypeCountTransactionsArgs;
};
export type JournalEntryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryCountOutputTypeSelect<ExtArgs> | null;
};
export type JournalEntryCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryLineWhereInput;
};
export type JournalEntryCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TxnWhereInput;
};
export type JournalEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    journalReference?: boolean;
    entryDate?: boolean;
    description?: boolean;
    status?: boolean;
    postedAt?: boolean;
    journalClass?: boolean;
    divergenceType?: boolean;
    adjustmentForBasis?: boolean;
    interEntityRef?: boolean;
    postingWorkflowInstanceId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.JournalEntry$linesArgs<ExtArgs>;
    transactions?: boolean | Prisma.JournalEntry$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.JournalEntryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalEntry"]>;
export type JournalEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    journalReference?: boolean;
    entryDate?: boolean;
    description?: boolean;
    status?: boolean;
    postedAt?: boolean;
    journalClass?: boolean;
    divergenceType?: boolean;
    adjustmentForBasis?: boolean;
    interEntityRef?: boolean;
    postingWorkflowInstanceId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalEntry"]>;
export type JournalEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    journalReference?: boolean;
    entryDate?: boolean;
    description?: boolean;
    status?: boolean;
    postedAt?: boolean;
    journalClass?: boolean;
    divergenceType?: boolean;
    adjustmentForBasis?: boolean;
    interEntityRef?: boolean;
    postingWorkflowInstanceId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalEntry"]>;
export type JournalEntrySelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    journalReference?: boolean;
    entryDate?: boolean;
    description?: boolean;
    status?: boolean;
    postedAt?: boolean;
    journalClass?: boolean;
    divergenceType?: boolean;
    adjustmentForBasis?: boolean;
    interEntityRef?: boolean;
    postingWorkflowInstanceId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type JournalEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "journalReference" | "entryDate" | "description" | "status" | "postedAt" | "journalClass" | "divergenceType" | "adjustmentForBasis" | "interEntityRef" | "postingWorkflowInstanceId" | "createdByUserId" | "createdAt", ExtArgs["result"]["journalEntry"]>;
export type JournalEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.JournalEntry$linesArgs<ExtArgs>;
    transactions?: boolean | Prisma.JournalEntry$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.JournalEntryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JournalEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type JournalEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $JournalEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JournalEntry";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        lines: Prisma.$JournalEntryLinePayload<ExtArgs>[];
        transactions: Prisma.$TxnPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        journalReference: string;
        entryDate: Date;
        description: string;
        status: $Enums.JournalEntryStatus;
        postedAt: Date | null;
        journalClass: $Enums.JournalClass;
        divergenceType: string | null;
        adjustmentForBasis: $Enums.AccountingBasis | null;
        interEntityRef: string | null;
        postingWorkflowInstanceId: string | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["journalEntry"]>;
    composites: {};
};
export type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload, S>;
export type JournalEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JournalEntryCountAggregateInputType | true;
};
export interface JournalEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'];
        meta: {
            name: 'JournalEntry';
        };
    };
    findUnique<T extends JournalEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JournalEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JournalEntryFindManyArgs>(args?: Prisma.SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JournalEntryCreateArgs>(args: Prisma.SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JournalEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JournalEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JournalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JournalEntryDeleteArgs>(args: Prisma.SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JournalEntryUpdateArgs>(args: Prisma.SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JournalEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JournalEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JournalEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JournalEntryUpsertArgs>(args: Prisma.SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__JournalEntryClient<runtime.Types.Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JournalEntryCountArgs>(args?: Prisma.Subset<T, JournalEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JournalEntryCountAggregateOutputType> : number>;
    aggregate<T extends JournalEntryAggregateArgs>(args: Prisma.Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>;
    groupBy<T extends JournalEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JournalEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: JournalEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JournalEntryFieldRefs;
}
export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.JournalEntry$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JournalEntry$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.JournalEntry$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JournalEntry$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TxnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JournalEntryFieldRefs {
    readonly id: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly journalReference: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly entryDate: Prisma.FieldRef<"JournalEntry", 'DateTime'>;
    readonly description: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly status: Prisma.FieldRef<"JournalEntry", 'JournalEntryStatus'>;
    readonly postedAt: Prisma.FieldRef<"JournalEntry", 'DateTime'>;
    readonly journalClass: Prisma.FieldRef<"JournalEntry", 'JournalClass'>;
    readonly divergenceType: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly adjustmentForBasis: Prisma.FieldRef<"JournalEntry", 'AccountingBasis'>;
    readonly interEntityRef: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly postingWorkflowInstanceId: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"JournalEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"JournalEntry", 'DateTime'>;
}
export type JournalEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    where: Prisma.JournalEntryWhereUniqueInput;
};
export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    where: Prisma.JournalEntryWhereUniqueInput;
};
export type JournalEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryWhereInput;
    orderBy?: Prisma.JournalEntryOrderByWithRelationInput | Prisma.JournalEntryOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalEntryScalarFieldEnum | Prisma.JournalEntryScalarFieldEnum[];
};
export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryWhereInput;
    orderBy?: Prisma.JournalEntryOrderByWithRelationInput | Prisma.JournalEntryOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalEntryScalarFieldEnum | Prisma.JournalEntryScalarFieldEnum[];
};
export type JournalEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryWhereInput;
    orderBy?: Prisma.JournalEntryOrderByWithRelationInput | Prisma.JournalEntryOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalEntryScalarFieldEnum | Prisma.JournalEntryScalarFieldEnum[];
};
export type JournalEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalEntryCreateInput, Prisma.JournalEntryUncheckedCreateInput>;
};
export type JournalEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JournalEntryCreateManyInput | Prisma.JournalEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JournalEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    data: Prisma.JournalEntryCreateManyInput | Prisma.JournalEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.JournalEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type JournalEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalEntryUpdateInput, Prisma.JournalEntryUncheckedUpdateInput>;
    where: Prisma.JournalEntryWhereUniqueInput;
};
export type JournalEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JournalEntryUpdateManyMutationInput, Prisma.JournalEntryUncheckedUpdateManyInput>;
    where?: Prisma.JournalEntryWhereInput;
    limit?: number;
};
export type JournalEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalEntryUpdateManyMutationInput, Prisma.JournalEntryUncheckedUpdateManyInput>;
    where?: Prisma.JournalEntryWhereInput;
    limit?: number;
    include?: Prisma.JournalEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type JournalEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    where: Prisma.JournalEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalEntryCreateInput, Prisma.JournalEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JournalEntryUpdateInput, Prisma.JournalEntryUncheckedUpdateInput>;
};
export type JournalEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
    where: Prisma.JournalEntryWhereUniqueInput;
};
export type JournalEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalEntryWhereInput;
    limit?: number;
};
export type JournalEntry$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntryLineSelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryLineOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryLineInclude<ExtArgs> | null;
    where?: Prisma.JournalEntryLineWhereInput;
    orderBy?: Prisma.JournalEntryLineOrderByWithRelationInput | Prisma.JournalEntryLineOrderByWithRelationInput[];
    cursor?: Prisma.JournalEntryLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalEntryLineScalarFieldEnum | Prisma.JournalEntryLineScalarFieldEnum[];
};
export type JournalEntry$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TxnSelect<ExtArgs> | null;
    omit?: Prisma.TxnOmit<ExtArgs> | null;
    include?: Prisma.TxnInclude<ExtArgs> | null;
    where?: Prisma.TxnWhereInput;
    orderBy?: Prisma.TxnOrderByWithRelationInput | Prisma.TxnOrderByWithRelationInput[];
    cursor?: Prisma.TxnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TxnScalarFieldEnum | Prisma.TxnScalarFieldEnum[];
};
export type JournalEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalEntrySelect<ExtArgs> | null;
    omit?: Prisma.JournalEntryOmit<ExtArgs> | null;
    include?: Prisma.JournalEntryInclude<ExtArgs> | null;
};
