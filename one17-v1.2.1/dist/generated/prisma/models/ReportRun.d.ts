import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReportRunModel = runtime.Types.Result.DefaultSelection<Prisma.$ReportRunPayload>;
export type AggregateReportRun = {
    _count: ReportRunCountAggregateOutputType | null;
    _min: ReportRunMinAggregateOutputType | null;
    _max: ReportRunMaxAggregateOutputType | null;
};
export type ReportRunMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    basis: $Enums.AccountingBasis | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    frameworkMapId: string | null;
    statementTemplateId: string | null;
    generatedByUserId: string | null;
    generatedAt: Date | null;
};
export type ReportRunMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    basis: $Enums.AccountingBasis | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    frameworkMapId: string | null;
    statementTemplateId: string | null;
    generatedByUserId: string | null;
    generatedAt: Date | null;
};
export type ReportRunCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    basis: number;
    periodStart: number;
    periodEnd: number;
    frameworkMapId: number;
    statementTemplateId: number;
    figures: number;
    generatedByUserId: number;
    generatedAt: number;
    _all: number;
};
export type ReportRunMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    basis?: true;
    periodStart?: true;
    periodEnd?: true;
    frameworkMapId?: true;
    statementTemplateId?: true;
    generatedByUserId?: true;
    generatedAt?: true;
};
export type ReportRunMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    basis?: true;
    periodStart?: true;
    periodEnd?: true;
    frameworkMapId?: true;
    statementTemplateId?: true;
    generatedByUserId?: true;
    generatedAt?: true;
};
export type ReportRunCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    basis?: true;
    periodStart?: true;
    periodEnd?: true;
    frameworkMapId?: true;
    statementTemplateId?: true;
    figures?: true;
    generatedByUserId?: true;
    generatedAt?: true;
    _all?: true;
};
export type ReportRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportRunWhereInput;
    orderBy?: Prisma.ReportRunOrderByWithRelationInput | Prisma.ReportRunOrderByWithRelationInput[];
    cursor?: Prisma.ReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReportRunCountAggregateInputType;
    _min?: ReportRunMinAggregateInputType;
    _max?: ReportRunMaxAggregateInputType;
};
export type GetReportRunAggregateType<T extends ReportRunAggregateArgs> = {
    [P in keyof T & keyof AggregateReportRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReportRun[P]> : Prisma.GetScalarType<T[P], AggregateReportRun[P]>;
};
export type ReportRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportRunWhereInput;
    orderBy?: Prisma.ReportRunOrderByWithAggregationInput | Prisma.ReportRunOrderByWithAggregationInput[];
    by: Prisma.ReportRunScalarFieldEnum[] | Prisma.ReportRunScalarFieldEnum;
    having?: Prisma.ReportRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReportRunCountAggregateInputType | true;
    _min?: ReportRunMinAggregateInputType;
    _max?: ReportRunMaxAggregateInputType;
};
export type ReportRunGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date;
    periodEnd: Date;
    frameworkMapId: string;
    statementTemplateId: string | null;
    figures: runtime.JsonValue;
    generatedByUserId: string;
    generatedAt: Date;
    _count: ReportRunCountAggregateOutputType | null;
    _min: ReportRunMinAggregateOutputType | null;
    _max: ReportRunMaxAggregateOutputType | null;
};
export type GetReportRunGroupByPayload<T extends ReportRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReportRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReportRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReportRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReportRunGroupByOutputType[P]>;
}>>;
export type ReportRunWhereInput = {
    AND?: Prisma.ReportRunWhereInput | Prisma.ReportRunWhereInput[];
    OR?: Prisma.ReportRunWhereInput[];
    NOT?: Prisma.ReportRunWhereInput | Prisma.ReportRunWhereInput[];
    id?: Prisma.UuidFilter<"ReportRun"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"ReportRun"> | string;
    basis?: Prisma.EnumAccountingBasisFilter<"ReportRun"> | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    frameworkMapId?: Prisma.UuidFilter<"ReportRun"> | string;
    statementTemplateId?: Prisma.UuidNullableFilter<"ReportRun"> | string | null;
    figures?: Prisma.JsonFilter<"ReportRun">;
    generatedByUserId?: Prisma.UuidFilter<"ReportRun"> | string;
    generatedAt?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    frameworkMap?: Prisma.XOR<Prisma.AccountingFrameworkMapScalarRelationFilter, Prisma.AccountingFrameworkMapWhereInput>;
    statementTemplate?: Prisma.XOR<Prisma.StatementTemplateNullableScalarRelationFilter, Prisma.StatementTemplateWhereInput> | null;
    generatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type ReportRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    frameworkMap?: Prisma.AccountingFrameworkMapOrderByWithRelationInput;
    statementTemplate?: Prisma.StatementTemplateOrderByWithRelationInput;
    generatedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type ReportRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReportRunWhereInput | Prisma.ReportRunWhereInput[];
    OR?: Prisma.ReportRunWhereInput[];
    NOT?: Prisma.ReportRunWhereInput | Prisma.ReportRunWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"ReportRun"> | string;
    basis?: Prisma.EnumAccountingBasisFilter<"ReportRun"> | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    frameworkMapId?: Prisma.UuidFilter<"ReportRun"> | string;
    statementTemplateId?: Prisma.UuidNullableFilter<"ReportRun"> | string | null;
    figures?: Prisma.JsonFilter<"ReportRun">;
    generatedByUserId?: Prisma.UuidFilter<"ReportRun"> | string;
    generatedAt?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    frameworkMap?: Prisma.XOR<Prisma.AccountingFrameworkMapScalarRelationFilter, Prisma.AccountingFrameworkMapWhereInput>;
    statementTemplate?: Prisma.XOR<Prisma.StatementTemplateNullableScalarRelationFilter, Prisma.StatementTemplateWhereInput> | null;
    generatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type ReportRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    _count?: Prisma.ReportRunCountOrderByAggregateInput;
    _max?: Prisma.ReportRunMaxOrderByAggregateInput;
    _min?: Prisma.ReportRunMinOrderByAggregateInput;
};
export type ReportRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReportRunScalarWhereWithAggregatesInput | Prisma.ReportRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReportRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReportRunScalarWhereWithAggregatesInput | Prisma.ReportRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ReportRun"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"ReportRun"> | string;
    basis?: Prisma.EnumAccountingBasisWithAggregatesFilter<"ReportRun"> | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"ReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"ReportRun"> | Date | string;
    frameworkMapId?: Prisma.UuidWithAggregatesFilter<"ReportRun"> | string;
    statementTemplateId?: Prisma.UuidNullableWithAggregatesFilter<"ReportRun"> | string | null;
    figures?: Prisma.JsonWithAggregatesFilter<"ReportRun">;
    generatedByUserId?: Prisma.UuidWithAggregatesFilter<"ReportRun"> | string;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"ReportRun"> | Date | string;
};
export type ReportRunCreateInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutReportRunsInput;
    frameworkMap: Prisma.AccountingFrameworkMapCreateNestedOneWithoutReportRunsInput;
    statementTemplate?: Prisma.StatementTemplateCreateNestedOneWithoutReportRunsInput;
    generatedBy: Prisma.AppUserCreateNestedOneWithoutReportRunsGeneratedInput;
};
export type ReportRunUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutReportRunsNestedInput;
    frameworkMap?: Prisma.AccountingFrameworkMapUpdateOneRequiredWithoutReportRunsNestedInput;
    statementTemplate?: Prisma.StatementTemplateUpdateOneWithoutReportRunsNestedInput;
    generatedBy?: Prisma.AppUserUpdateOneRequiredWithoutReportRunsGeneratedNestedInput;
};
export type ReportRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunListRelationFilter = {
    every?: Prisma.ReportRunWhereInput;
    some?: Prisma.ReportRunWhereInput;
    none?: Prisma.ReportRunWhereInput;
};
export type ReportRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReportRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    figures?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type ReportRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type ReportRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    frameworkMapId?: Prisma.SortOrder;
    statementTemplateId?: Prisma.SortOrder;
    generatedByUserId?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type ReportRunCreateNestedManyWithoutGeneratedByInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutGeneratedByInput, Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.ReportRunCreateWithoutGeneratedByInput[] | Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput[];
    createMany?: Prisma.ReportRunCreateManyGeneratedByInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUncheckedCreateNestedManyWithoutGeneratedByInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutGeneratedByInput, Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.ReportRunCreateWithoutGeneratedByInput[] | Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput[];
    createMany?: Prisma.ReportRunCreateManyGeneratedByInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUpdateManyWithoutGeneratedByNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutGeneratedByInput, Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.ReportRunCreateWithoutGeneratedByInput[] | Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutGeneratedByInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutGeneratedByInput[];
    createMany?: Prisma.ReportRunCreateManyGeneratedByInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutGeneratedByInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutGeneratedByInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutGeneratedByInput | Prisma.ReportRunUpdateManyWithWhereWithoutGeneratedByInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunUncheckedUpdateManyWithoutGeneratedByNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutGeneratedByInput, Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput> | Prisma.ReportRunCreateWithoutGeneratedByInput[] | Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput | Prisma.ReportRunCreateOrConnectWithoutGeneratedByInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutGeneratedByInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutGeneratedByInput[];
    createMany?: Prisma.ReportRunCreateManyGeneratedByInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutGeneratedByInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutGeneratedByInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutGeneratedByInput | Prisma.ReportRunUpdateManyWithWhereWithoutGeneratedByInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput> | Prisma.ReportRunCreateWithoutLedgerEntityInput[] | Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput | Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.ReportRunCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput> | Prisma.ReportRunCreateWithoutLedgerEntityInput[] | Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput | Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.ReportRunCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput> | Prisma.ReportRunCreateWithoutLedgerEntityInput[] | Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput | Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.ReportRunCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.ReportRunUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput> | Prisma.ReportRunCreateWithoutLedgerEntityInput[] | Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput | Prisma.ReportRunCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.ReportRunCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.ReportRunUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunCreateNestedManyWithoutFrameworkMapInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput> | Prisma.ReportRunCreateWithoutFrameworkMapInput[] | Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput | Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput[];
    createMany?: Prisma.ReportRunCreateManyFrameworkMapInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUncheckedCreateNestedManyWithoutFrameworkMapInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput> | Prisma.ReportRunCreateWithoutFrameworkMapInput[] | Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput | Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput[];
    createMany?: Prisma.ReportRunCreateManyFrameworkMapInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUpdateManyWithoutFrameworkMapNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput> | Prisma.ReportRunCreateWithoutFrameworkMapInput[] | Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput | Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutFrameworkMapInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutFrameworkMapInput[];
    createMany?: Prisma.ReportRunCreateManyFrameworkMapInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutFrameworkMapInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutFrameworkMapInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutFrameworkMapInput | Prisma.ReportRunUpdateManyWithWhereWithoutFrameworkMapInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunUncheckedUpdateManyWithoutFrameworkMapNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput> | Prisma.ReportRunCreateWithoutFrameworkMapInput[] | Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput | Prisma.ReportRunCreateOrConnectWithoutFrameworkMapInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutFrameworkMapInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutFrameworkMapInput[];
    createMany?: Prisma.ReportRunCreateManyFrameworkMapInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutFrameworkMapInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutFrameworkMapInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutFrameworkMapInput | Prisma.ReportRunUpdateManyWithWhereWithoutFrameworkMapInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunCreateNestedManyWithoutStatementTemplateInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput> | Prisma.ReportRunCreateWithoutStatementTemplateInput[] | Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput | Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput[];
    createMany?: Prisma.ReportRunCreateManyStatementTemplateInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUncheckedCreateNestedManyWithoutStatementTemplateInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput> | Prisma.ReportRunCreateWithoutStatementTemplateInput[] | Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput | Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput[];
    createMany?: Prisma.ReportRunCreateManyStatementTemplateInputEnvelope;
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
};
export type ReportRunUpdateManyWithoutStatementTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput> | Prisma.ReportRunCreateWithoutStatementTemplateInput[] | Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput | Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutStatementTemplateInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutStatementTemplateInput[];
    createMany?: Prisma.ReportRunCreateManyStatementTemplateInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutStatementTemplateInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutStatementTemplateInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutStatementTemplateInput | Prisma.ReportRunUpdateManyWithWhereWithoutStatementTemplateInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunUncheckedUpdateManyWithoutStatementTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.ReportRunCreateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput> | Prisma.ReportRunCreateWithoutStatementTemplateInput[] | Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput[];
    connectOrCreate?: Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput | Prisma.ReportRunCreateOrConnectWithoutStatementTemplateInput[];
    upsert?: Prisma.ReportRunUpsertWithWhereUniqueWithoutStatementTemplateInput | Prisma.ReportRunUpsertWithWhereUniqueWithoutStatementTemplateInput[];
    createMany?: Prisma.ReportRunCreateManyStatementTemplateInputEnvelope;
    set?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    disconnect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    delete?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    connect?: Prisma.ReportRunWhereUniqueInput | Prisma.ReportRunWhereUniqueInput[];
    update?: Prisma.ReportRunUpdateWithWhereUniqueWithoutStatementTemplateInput | Prisma.ReportRunUpdateWithWhereUniqueWithoutStatementTemplateInput[];
    updateMany?: Prisma.ReportRunUpdateManyWithWhereWithoutStatementTemplateInput | Prisma.ReportRunUpdateManyWithWhereWithoutStatementTemplateInput[];
    deleteMany?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
};
export type ReportRunCreateWithoutGeneratedByInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutReportRunsInput;
    frameworkMap: Prisma.AccountingFrameworkMapCreateNestedOneWithoutReportRunsInput;
    statementTemplate?: Prisma.StatementTemplateCreateNestedOneWithoutReportRunsInput;
};
export type ReportRunUncheckedCreateWithoutGeneratedByInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Date | string;
};
export type ReportRunCreateOrConnectWithoutGeneratedByInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutGeneratedByInput, Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput>;
};
export type ReportRunCreateManyGeneratedByInputEnvelope = {
    data: Prisma.ReportRunCreateManyGeneratedByInput | Prisma.ReportRunCreateManyGeneratedByInput[];
    skipDuplicates?: boolean;
};
export type ReportRunUpsertWithWhereUniqueWithoutGeneratedByInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportRunUpdateWithoutGeneratedByInput, Prisma.ReportRunUncheckedUpdateWithoutGeneratedByInput>;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutGeneratedByInput, Prisma.ReportRunUncheckedCreateWithoutGeneratedByInput>;
};
export type ReportRunUpdateWithWhereUniqueWithoutGeneratedByInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateWithoutGeneratedByInput, Prisma.ReportRunUncheckedUpdateWithoutGeneratedByInput>;
};
export type ReportRunUpdateManyWithWhereWithoutGeneratedByInput = {
    where: Prisma.ReportRunScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateManyMutationInput, Prisma.ReportRunUncheckedUpdateManyWithoutGeneratedByInput>;
};
export type ReportRunScalarWhereInput = {
    AND?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
    OR?: Prisma.ReportRunScalarWhereInput[];
    NOT?: Prisma.ReportRunScalarWhereInput | Prisma.ReportRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"ReportRun"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"ReportRun"> | string;
    basis?: Prisma.EnumAccountingBasisFilter<"ReportRun"> | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
    frameworkMapId?: Prisma.UuidFilter<"ReportRun"> | string;
    statementTemplateId?: Prisma.UuidNullableFilter<"ReportRun"> | string | null;
    figures?: Prisma.JsonFilter<"ReportRun">;
    generatedByUserId?: Prisma.UuidFilter<"ReportRun"> | string;
    generatedAt?: Prisma.DateTimeFilter<"ReportRun"> | Date | string;
};
export type ReportRunCreateWithoutLedgerEntityInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Date | string;
    frameworkMap: Prisma.AccountingFrameworkMapCreateNestedOneWithoutReportRunsInput;
    statementTemplate?: Prisma.StatementTemplateCreateNestedOneWithoutReportRunsInput;
    generatedBy: Prisma.AppUserCreateNestedOneWithoutReportRunsGeneratedInput;
};
export type ReportRunUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput>;
};
export type ReportRunCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.ReportRunCreateManyLedgerEntityInput | Prisma.ReportRunCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type ReportRunUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportRunUpdateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedCreateWithoutLedgerEntityInput>;
};
export type ReportRunUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateWithoutLedgerEntityInput, Prisma.ReportRunUncheckedUpdateWithoutLedgerEntityInput>;
};
export type ReportRunUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.ReportRunScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateManyMutationInput, Prisma.ReportRunUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type ReportRunCreateWithoutFrameworkMapInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutReportRunsInput;
    statementTemplate?: Prisma.StatementTemplateCreateNestedOneWithoutReportRunsInput;
    generatedBy: Prisma.AppUserCreateNestedOneWithoutReportRunsGeneratedInput;
};
export type ReportRunUncheckedCreateWithoutFrameworkMapInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunCreateOrConnectWithoutFrameworkMapInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput>;
};
export type ReportRunCreateManyFrameworkMapInputEnvelope = {
    data: Prisma.ReportRunCreateManyFrameworkMapInput | Prisma.ReportRunCreateManyFrameworkMapInput[];
    skipDuplicates?: boolean;
};
export type ReportRunUpsertWithWhereUniqueWithoutFrameworkMapInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportRunUpdateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedUpdateWithoutFrameworkMapInput>;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedCreateWithoutFrameworkMapInput>;
};
export type ReportRunUpdateWithWhereUniqueWithoutFrameworkMapInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateWithoutFrameworkMapInput, Prisma.ReportRunUncheckedUpdateWithoutFrameworkMapInput>;
};
export type ReportRunUpdateManyWithWhereWithoutFrameworkMapInput = {
    where: Prisma.ReportRunScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateManyMutationInput, Prisma.ReportRunUncheckedUpdateManyWithoutFrameworkMapInput>;
};
export type ReportRunCreateWithoutStatementTemplateInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutReportRunsInput;
    frameworkMap: Prisma.AccountingFrameworkMapCreateNestedOneWithoutReportRunsInput;
    generatedBy: Prisma.AppUserCreateNestedOneWithoutReportRunsGeneratedInput;
};
export type ReportRunUncheckedCreateWithoutStatementTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunCreateOrConnectWithoutStatementTemplateInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput>;
};
export type ReportRunCreateManyStatementTemplateInputEnvelope = {
    data: Prisma.ReportRunCreateManyStatementTemplateInput | Prisma.ReportRunCreateManyStatementTemplateInput[];
    skipDuplicates?: boolean;
};
export type ReportRunUpsertWithWhereUniqueWithoutStatementTemplateInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportRunUpdateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedUpdateWithoutStatementTemplateInput>;
    create: Prisma.XOR<Prisma.ReportRunCreateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedCreateWithoutStatementTemplateInput>;
};
export type ReportRunUpdateWithWhereUniqueWithoutStatementTemplateInput = {
    where: Prisma.ReportRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateWithoutStatementTemplateInput, Prisma.ReportRunUncheckedUpdateWithoutStatementTemplateInput>;
};
export type ReportRunUpdateManyWithWhereWithoutStatementTemplateInput = {
    where: Prisma.ReportRunScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportRunUpdateManyMutationInput, Prisma.ReportRunUncheckedUpdateManyWithoutStatementTemplateInput>;
};
export type ReportRunCreateManyGeneratedByInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Date | string;
};
export type ReportRunUpdateWithoutGeneratedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutReportRunsNestedInput;
    frameworkMap?: Prisma.AccountingFrameworkMapUpdateOneRequiredWithoutReportRunsNestedInput;
    statementTemplate?: Prisma.StatementTemplateUpdateOneWithoutReportRunsNestedInput;
};
export type ReportRunUncheckedUpdateWithoutGeneratedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunUncheckedUpdateManyWithoutGeneratedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunCreateManyLedgerEntityInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMap?: Prisma.AccountingFrameworkMapUpdateOneRequiredWithoutReportRunsNestedInput;
    statementTemplate?: Prisma.StatementTemplateUpdateOneWithoutReportRunsNestedInput;
    generatedBy?: Prisma.AppUserUpdateOneRequiredWithoutReportRunsGeneratedNestedInput;
};
export type ReportRunUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunCreateManyFrameworkMapInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    statementTemplateId?: string | null;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunUpdateWithoutFrameworkMapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutReportRunsNestedInput;
    statementTemplate?: Prisma.StatementTemplateUpdateOneWithoutReportRunsNestedInput;
    generatedBy?: Prisma.AppUserUpdateOneRequiredWithoutReportRunsGeneratedNestedInput;
};
export type ReportRunUncheckedUpdateWithoutFrameworkMapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunUncheckedUpdateManyWithoutFrameworkMapInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statementTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunCreateManyStatementTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    basis: $Enums.AccountingBasis;
    periodStart: Date | string;
    periodEnd: Date | string;
    frameworkMapId: string;
    figures: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId: string;
    generatedAt?: Date | string;
};
export type ReportRunUpdateWithoutStatementTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutReportRunsNestedInput;
    frameworkMap?: Prisma.AccountingFrameworkMapUpdateOneRequiredWithoutReportRunsNestedInput;
    generatedBy?: Prisma.AppUserUpdateOneRequiredWithoutReportRunsGeneratedNestedInput;
};
export type ReportRunUncheckedUpdateWithoutStatementTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunUncheckedUpdateManyWithoutStatementTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    frameworkMapId?: Prisma.StringFieldUpdateOperationsInput | string;
    figures?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    generatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReportRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    basis?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    frameworkMapId?: boolean;
    statementTemplateId?: boolean;
    figures?: boolean;
    generatedByUserId?: boolean;
    generatedAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    statementTemplate?: boolean | Prisma.ReportRun$statementTemplateArgs<ExtArgs>;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportRun"]>;
export type ReportRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    basis?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    frameworkMapId?: boolean;
    statementTemplateId?: boolean;
    figures?: boolean;
    generatedByUserId?: boolean;
    generatedAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    statementTemplate?: boolean | Prisma.ReportRun$statementTemplateArgs<ExtArgs>;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportRun"]>;
export type ReportRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    basis?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    frameworkMapId?: boolean;
    statementTemplateId?: boolean;
    figures?: boolean;
    generatedByUserId?: boolean;
    generatedAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    statementTemplate?: boolean | Prisma.ReportRun$statementTemplateArgs<ExtArgs>;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportRun"]>;
export type ReportRunSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    basis?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    frameworkMapId?: boolean;
    statementTemplateId?: boolean;
    figures?: boolean;
    generatedByUserId?: boolean;
    generatedAt?: boolean;
};
export type ReportRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "basis" | "periodStart" | "periodEnd" | "frameworkMapId" | "statementTemplateId" | "figures" | "generatedByUserId" | "generatedAt", ExtArgs["result"]["reportRun"]>;
export type ReportRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    statementTemplate?: boolean | Prisma.ReportRun$statementTemplateArgs<ExtArgs>;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type ReportRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    statementTemplate?: boolean | Prisma.ReportRun$statementTemplateArgs<ExtArgs>;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type ReportRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    frameworkMap?: boolean | Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>;
    statementTemplate?: boolean | Prisma.ReportRun$statementTemplateArgs<ExtArgs>;
    generatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $ReportRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReportRun";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        frameworkMap: Prisma.$AccountingFrameworkMapPayload<ExtArgs>;
        statementTemplate: Prisma.$StatementTemplatePayload<ExtArgs> | null;
        generatedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        basis: $Enums.AccountingBasis;
        periodStart: Date;
        periodEnd: Date;
        frameworkMapId: string;
        statementTemplateId: string | null;
        figures: runtime.JsonValue;
        generatedByUserId: string;
        generatedAt: Date;
    }, ExtArgs["result"]["reportRun"]>;
    composites: {};
};
export type ReportRunGetPayload<S extends boolean | null | undefined | ReportRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReportRunPayload, S>;
export type ReportRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReportRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReportRunCountAggregateInputType | true;
};
export interface ReportRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReportRun'];
        meta: {
            name: 'ReportRun';
        };
    };
    findUnique<T extends ReportRunFindUniqueArgs>(args: Prisma.SelectSubset<T, ReportRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReportRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReportRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReportRunFindFirstArgs>(args?: Prisma.SelectSubset<T, ReportRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReportRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReportRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReportRunFindManyArgs>(args?: Prisma.SelectSubset<T, ReportRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReportRunCreateArgs>(args: Prisma.SelectSubset<T, ReportRunCreateArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReportRunCreateManyArgs>(args?: Prisma.SelectSubset<T, ReportRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReportRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReportRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReportRunDeleteArgs>(args: Prisma.SelectSubset<T, ReportRunDeleteArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReportRunUpdateArgs>(args: Prisma.SelectSubset<T, ReportRunUpdateArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReportRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReportRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReportRunUpdateManyArgs>(args: Prisma.SelectSubset<T, ReportRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReportRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReportRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReportRunUpsertArgs>(args: Prisma.SelectSubset<T, ReportRunUpsertArgs<ExtArgs>>): Prisma.Prisma__ReportRunClient<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReportRunCountArgs>(args?: Prisma.Subset<T, ReportRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReportRunCountAggregateOutputType> : number>;
    aggregate<T extends ReportRunAggregateArgs>(args: Prisma.Subset<T, ReportRunAggregateArgs>): Prisma.PrismaPromise<GetReportRunAggregateType<T>>;
    groupBy<T extends ReportRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReportRunGroupByArgs['orderBy'];
    } : {
        orderBy?: ReportRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReportRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReportRunFieldRefs;
}
export interface Prisma__ReportRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    frameworkMap<T extends Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountingFrameworkMapDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountingFrameworkMapClient<runtime.Types.Result.GetResult<Prisma.$AccountingFrameworkMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    statementTemplate<T extends Prisma.ReportRun$statementTemplateArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReportRun$statementTemplateArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    generatedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReportRunFieldRefs {
    readonly id: Prisma.FieldRef<"ReportRun", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"ReportRun", 'String'>;
    readonly basis: Prisma.FieldRef<"ReportRun", 'AccountingBasis'>;
    readonly periodStart: Prisma.FieldRef<"ReportRun", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"ReportRun", 'DateTime'>;
    readonly frameworkMapId: Prisma.FieldRef<"ReportRun", 'String'>;
    readonly statementTemplateId: Prisma.FieldRef<"ReportRun", 'String'>;
    readonly figures: Prisma.FieldRef<"ReportRun", 'Json'>;
    readonly generatedByUserId: Prisma.FieldRef<"ReportRun", 'String'>;
    readonly generatedAt: Prisma.FieldRef<"ReportRun", 'DateTime'>;
}
export type ReportRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    where: Prisma.ReportRunWhereUniqueInput;
};
export type ReportRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    where: Prisma.ReportRunWhereUniqueInput;
};
export type ReportRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    where?: Prisma.ReportRunWhereInput;
    orderBy?: Prisma.ReportRunOrderByWithRelationInput | Prisma.ReportRunOrderByWithRelationInput[];
    cursor?: Prisma.ReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportRunScalarFieldEnum | Prisma.ReportRunScalarFieldEnum[];
};
export type ReportRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    where?: Prisma.ReportRunWhereInput;
    orderBy?: Prisma.ReportRunOrderByWithRelationInput | Prisma.ReportRunOrderByWithRelationInput[];
    cursor?: Prisma.ReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportRunScalarFieldEnum | Prisma.ReportRunScalarFieldEnum[];
};
export type ReportRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    where?: Prisma.ReportRunWhereInput;
    orderBy?: Prisma.ReportRunOrderByWithRelationInput | Prisma.ReportRunOrderByWithRelationInput[];
    cursor?: Prisma.ReportRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportRunScalarFieldEnum | Prisma.ReportRunScalarFieldEnum[];
};
export type ReportRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportRunCreateInput, Prisma.ReportRunUncheckedCreateInput>;
};
export type ReportRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReportRunCreateManyInput | Prisma.ReportRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReportRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    data: Prisma.ReportRunCreateManyInput | Prisma.ReportRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReportRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReportRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportRunUpdateInput, Prisma.ReportRunUncheckedUpdateInput>;
    where: Prisma.ReportRunWhereUniqueInput;
};
export type ReportRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReportRunUpdateManyMutationInput, Prisma.ReportRunUncheckedUpdateManyInput>;
    where?: Prisma.ReportRunWhereInput;
    limit?: number;
};
export type ReportRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportRunUpdateManyMutationInput, Prisma.ReportRunUncheckedUpdateManyInput>;
    where?: Prisma.ReportRunWhereInput;
    limit?: number;
    include?: Prisma.ReportRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReportRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    where: Prisma.ReportRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportRunCreateInput, Prisma.ReportRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReportRunUpdateInput, Prisma.ReportRunUncheckedUpdateInput>;
};
export type ReportRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
    where: Prisma.ReportRunWhereUniqueInput;
};
export type ReportRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportRunWhereInput;
    limit?: number;
};
export type ReportRun$statementTemplateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where?: Prisma.StatementTemplateWhereInput;
};
export type ReportRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportRunSelect<ExtArgs> | null;
    omit?: Prisma.ReportRunOmit<ExtArgs> | null;
    include?: Prisma.ReportRunInclude<ExtArgs> | null;
};
