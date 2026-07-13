import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StatementTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$StatementTemplatePayload>;
export type AggregateStatementTemplate = {
    _count: StatementTemplateCountAggregateOutputType | null;
    _avg: StatementTemplateAvgAggregateOutputType | null;
    _sum: StatementTemplateSumAggregateOutputType | null;
    _min: StatementTemplateMinAggregateOutputType | null;
    _max: StatementTemplateMaxAggregateOutputType | null;
};
export type StatementTemplateAvgAggregateOutputType = {
    version: number | null;
};
export type StatementTemplateSumAggregateOutputType = {
    version: number | null;
};
export type StatementTemplateMinAggregateOutputType = {
    id: string | null;
    basis: $Enums.AccountingBasis | null;
    statementCode: string | null;
    name: string | null;
    version: number | null;
    status: $Enums.StatementTemplateStatus | null;
    effectiveFrom: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type StatementTemplateMaxAggregateOutputType = {
    id: string | null;
    basis: $Enums.AccountingBasis | null;
    statementCode: string | null;
    name: string | null;
    version: number | null;
    status: $Enums.StatementTemplateStatus | null;
    effectiveFrom: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type StatementTemplateCountAggregateOutputType = {
    id: number;
    basis: number;
    statementCode: number;
    name: number;
    version: number;
    status: number;
    effectiveFrom: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type StatementTemplateAvgAggregateInputType = {
    version?: true;
};
export type StatementTemplateSumAggregateInputType = {
    version?: true;
};
export type StatementTemplateMinAggregateInputType = {
    id?: true;
    basis?: true;
    statementCode?: true;
    name?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type StatementTemplateMaxAggregateInputType = {
    id?: true;
    basis?: true;
    statementCode?: true;
    name?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type StatementTemplateCountAggregateInputType = {
    id?: true;
    basis?: true;
    statementCode?: true;
    name?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type StatementTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementTemplateWhereInput;
    orderBy?: Prisma.StatementTemplateOrderByWithRelationInput | Prisma.StatementTemplateOrderByWithRelationInput[];
    cursor?: Prisma.StatementTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StatementTemplateCountAggregateInputType;
    _avg?: StatementTemplateAvgAggregateInputType;
    _sum?: StatementTemplateSumAggregateInputType;
    _min?: StatementTemplateMinAggregateInputType;
    _max?: StatementTemplateMaxAggregateInputType;
};
export type GetStatementTemplateAggregateType<T extends StatementTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateStatementTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStatementTemplate[P]> : Prisma.GetScalarType<T[P], AggregateStatementTemplate[P]>;
};
export type StatementTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementTemplateWhereInput;
    orderBy?: Prisma.StatementTemplateOrderByWithAggregationInput | Prisma.StatementTemplateOrderByWithAggregationInput[];
    by: Prisma.StatementTemplateScalarFieldEnum[] | Prisma.StatementTemplateScalarFieldEnum;
    having?: Prisma.StatementTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatementTemplateCountAggregateInputType | true;
    _avg?: StatementTemplateAvgAggregateInputType;
    _sum?: StatementTemplateSumAggregateInputType;
    _min?: StatementTemplateMinAggregateInputType;
    _max?: StatementTemplateMaxAggregateInputType;
};
export type StatementTemplateGroupByOutputType = {
    id: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version: number;
    status: $Enums.StatementTemplateStatus;
    effectiveFrom: Date | null;
    createdByUserId: string;
    createdAt: Date;
    _count: StatementTemplateCountAggregateOutputType | null;
    _avg: StatementTemplateAvgAggregateOutputType | null;
    _sum: StatementTemplateSumAggregateOutputType | null;
    _min: StatementTemplateMinAggregateOutputType | null;
    _max: StatementTemplateMaxAggregateOutputType | null;
};
export type GetStatementTemplateGroupByPayload<T extends StatementTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StatementTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StatementTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StatementTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StatementTemplateGroupByOutputType[P]>;
}>>;
export type StatementTemplateWhereInput = {
    AND?: Prisma.StatementTemplateWhereInput | Prisma.StatementTemplateWhereInput[];
    OR?: Prisma.StatementTemplateWhereInput[];
    NOT?: Prisma.StatementTemplateWhereInput | Prisma.StatementTemplateWhereInput[];
    id?: Prisma.UuidFilter<"StatementTemplate"> | string;
    basis?: Prisma.EnumAccountingBasisFilter<"StatementTemplate"> | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFilter<"StatementTemplate"> | string;
    name?: Prisma.StringFilter<"StatementTemplate"> | string;
    version?: Prisma.IntFilter<"StatementTemplate"> | number;
    status?: Prisma.EnumStatementTemplateStatusFilter<"StatementTemplate"> | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StatementTemplate"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"StatementTemplate"> | string;
    createdAt?: Prisma.DateTimeFilter<"StatementTemplate"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.StatementLineListRelationFilter;
    reportRuns?: Prisma.ReportRunListRelationFilter;
};
export type StatementTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    statementCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    lines?: Prisma.StatementLineOrderByRelationAggregateInput;
    reportRuns?: Prisma.ReportRunOrderByRelationAggregateInput;
};
export type StatementTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    basis_statementCode_version?: Prisma.StatementTemplateBasisStatementCodeVersionCompoundUniqueInput;
    AND?: Prisma.StatementTemplateWhereInput | Prisma.StatementTemplateWhereInput[];
    OR?: Prisma.StatementTemplateWhereInput[];
    NOT?: Prisma.StatementTemplateWhereInput | Prisma.StatementTemplateWhereInput[];
    basis?: Prisma.EnumAccountingBasisFilter<"StatementTemplate"> | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFilter<"StatementTemplate"> | string;
    name?: Prisma.StringFilter<"StatementTemplate"> | string;
    version?: Prisma.IntFilter<"StatementTemplate"> | number;
    status?: Prisma.EnumStatementTemplateStatusFilter<"StatementTemplate"> | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StatementTemplate"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"StatementTemplate"> | string;
    createdAt?: Prisma.DateTimeFilter<"StatementTemplate"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    lines?: Prisma.StatementLineListRelationFilter;
    reportRuns?: Prisma.ReportRunListRelationFilter;
}, "id" | "basis_statementCode_version">;
export type StatementTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    statementCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StatementTemplateCountOrderByAggregateInput;
    _avg?: Prisma.StatementTemplateAvgOrderByAggregateInput;
    _max?: Prisma.StatementTemplateMaxOrderByAggregateInput;
    _min?: Prisma.StatementTemplateMinOrderByAggregateInput;
    _sum?: Prisma.StatementTemplateSumOrderByAggregateInput;
};
export type StatementTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.StatementTemplateScalarWhereWithAggregatesInput | Prisma.StatementTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.StatementTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StatementTemplateScalarWhereWithAggregatesInput | Prisma.StatementTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StatementTemplate"> | string;
    basis?: Prisma.EnumAccountingBasisWithAggregatesFilter<"StatementTemplate"> | $Enums.AccountingBasis;
    statementCode?: Prisma.StringWithAggregatesFilter<"StatementTemplate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"StatementTemplate"> | string;
    version?: Prisma.IntWithAggregatesFilter<"StatementTemplate"> | number;
    status?: Prisma.EnumStatementTemplateStatusWithAggregatesFilter<"StatementTemplate"> | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"StatementTemplate"> | Date | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"StatementTemplate"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StatementTemplate"> | Date | string;
};
export type StatementTemplateCreateInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutStatementTemplatesMadeInput;
    lines?: Prisma.StatementLineCreateNestedManyWithoutStatementTemplateInput;
    reportRuns?: Prisma.ReportRunCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateUncheckedCreateInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    lines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutStatementTemplateInput;
    reportRuns?: Prisma.ReportRunUncheckedCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutStatementTemplatesMadeNestedInput;
    lines?: Prisma.StatementLineUpdateManyWithoutStatementTemplateNestedInput;
    reportRuns?: Prisma.ReportRunUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.StatementLineUncheckedUpdateManyWithoutStatementTemplateNestedInput;
    reportRuns?: Prisma.ReportRunUncheckedUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateCreateManyInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type StatementTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementTemplateListRelationFilter = {
    every?: Prisma.StatementTemplateWhereInput;
    some?: Prisma.StatementTemplateWhereInput;
    none?: Prisma.StatementTemplateWhereInput;
};
export type StatementTemplateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StatementTemplateBasisStatementCodeVersionCompoundUniqueInput = {
    basis: $Enums.AccountingBasis;
    statementCode: string;
    version: number;
};
export type StatementTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    statementCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StatementTemplateAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type StatementTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    statementCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StatementTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    basis?: Prisma.SortOrder;
    statementCode?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StatementTemplateSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type StatementTemplateScalarRelationFilter = {
    is?: Prisma.StatementTemplateWhereInput;
    isNot?: Prisma.StatementTemplateWhereInput;
};
export type StatementTemplateNullableScalarRelationFilter = {
    is?: Prisma.StatementTemplateWhereInput | null;
    isNot?: Prisma.StatementTemplateWhereInput | null;
};
export type StatementTemplateCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput> | Prisma.StatementTemplateCreateWithoutCreatedByInput[] | Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput | Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.StatementTemplateCreateManyCreatedByInputEnvelope;
    connect?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
};
export type StatementTemplateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput> | Prisma.StatementTemplateCreateWithoutCreatedByInput[] | Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput | Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.StatementTemplateCreateManyCreatedByInputEnvelope;
    connect?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
};
export type StatementTemplateUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput> | Prisma.StatementTemplateCreateWithoutCreatedByInput[] | Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput | Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.StatementTemplateUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.StatementTemplateUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.StatementTemplateCreateManyCreatedByInputEnvelope;
    set?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    disconnect?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    delete?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    connect?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    update?: Prisma.StatementTemplateUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.StatementTemplateUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.StatementTemplateUpdateManyWithWhereWithoutCreatedByInput | Prisma.StatementTemplateUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.StatementTemplateScalarWhereInput | Prisma.StatementTemplateScalarWhereInput[];
};
export type StatementTemplateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput> | Prisma.StatementTemplateCreateWithoutCreatedByInput[] | Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput | Prisma.StatementTemplateCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.StatementTemplateUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.StatementTemplateUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.StatementTemplateCreateManyCreatedByInputEnvelope;
    set?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    disconnect?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    delete?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    connect?: Prisma.StatementTemplateWhereUniqueInput | Prisma.StatementTemplateWhereUniqueInput[];
    update?: Prisma.StatementTemplateUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.StatementTemplateUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.StatementTemplateUpdateManyWithWhereWithoutCreatedByInput | Prisma.StatementTemplateUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.StatementTemplateScalarWhereInput | Prisma.StatementTemplateScalarWhereInput[];
};
export type EnumStatementTemplateStatusFieldUpdateOperationsInput = {
    set?: $Enums.StatementTemplateStatus;
};
export type StatementTemplateCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutLinesInput, Prisma.StatementTemplateUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutLinesInput;
    connect?: Prisma.StatementTemplateWhereUniqueInput;
};
export type StatementTemplateUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutLinesInput, Prisma.StatementTemplateUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.StatementTemplateUpsertWithoutLinesInput;
    connect?: Prisma.StatementTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StatementTemplateUpdateToOneWithWhereWithoutLinesInput, Prisma.StatementTemplateUpdateWithoutLinesInput>, Prisma.StatementTemplateUncheckedUpdateWithoutLinesInput>;
};
export type StatementTemplateCreateNestedOneWithoutReportRunsInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutReportRunsInput, Prisma.StatementTemplateUncheckedCreateWithoutReportRunsInput>;
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutReportRunsInput;
    connect?: Prisma.StatementTemplateWhereUniqueInput;
};
export type StatementTemplateUpdateOneWithoutReportRunsNestedInput = {
    create?: Prisma.XOR<Prisma.StatementTemplateCreateWithoutReportRunsInput, Prisma.StatementTemplateUncheckedCreateWithoutReportRunsInput>;
    connectOrCreate?: Prisma.StatementTemplateCreateOrConnectWithoutReportRunsInput;
    upsert?: Prisma.StatementTemplateUpsertWithoutReportRunsInput;
    disconnect?: Prisma.StatementTemplateWhereInput | boolean;
    delete?: Prisma.StatementTemplateWhereInput | boolean;
    connect?: Prisma.StatementTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StatementTemplateUpdateToOneWithWhereWithoutReportRunsInput, Prisma.StatementTemplateUpdateWithoutReportRunsInput>, Prisma.StatementTemplateUncheckedUpdateWithoutReportRunsInput>;
};
export type StatementTemplateCreateWithoutCreatedByInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    lines?: Prisma.StatementLineCreateNestedManyWithoutStatementTemplateInput;
    reportRuns?: Prisma.ReportRunCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    lines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutStatementTemplateInput;
    reportRuns?: Prisma.ReportRunUncheckedCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.StatementTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementTemplateCreateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput>;
};
export type StatementTemplateCreateManyCreatedByInputEnvelope = {
    data: Prisma.StatementTemplateCreateManyCreatedByInput | Prisma.StatementTemplateCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type StatementTemplateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.StatementTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.StatementTemplateUpdateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.StatementTemplateCreateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedCreateWithoutCreatedByInput>;
};
export type StatementTemplateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.StatementTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.StatementTemplateUpdateWithoutCreatedByInput, Prisma.StatementTemplateUncheckedUpdateWithoutCreatedByInput>;
};
export type StatementTemplateUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.StatementTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.StatementTemplateUpdateManyMutationInput, Prisma.StatementTemplateUncheckedUpdateManyWithoutCreatedByInput>;
};
export type StatementTemplateScalarWhereInput = {
    AND?: Prisma.StatementTemplateScalarWhereInput | Prisma.StatementTemplateScalarWhereInput[];
    OR?: Prisma.StatementTemplateScalarWhereInput[];
    NOT?: Prisma.StatementTemplateScalarWhereInput | Prisma.StatementTemplateScalarWhereInput[];
    id?: Prisma.UuidFilter<"StatementTemplate"> | string;
    basis?: Prisma.EnumAccountingBasisFilter<"StatementTemplate"> | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFilter<"StatementTemplate"> | string;
    name?: Prisma.StringFilter<"StatementTemplate"> | string;
    version?: Prisma.IntFilter<"StatementTemplate"> | number;
    status?: Prisma.EnumStatementTemplateStatusFilter<"StatementTemplate"> | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StatementTemplate"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"StatementTemplate"> | string;
    createdAt?: Prisma.DateTimeFilter<"StatementTemplate"> | Date | string;
};
export type StatementTemplateCreateWithoutLinesInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutStatementTemplatesMadeInput;
    reportRuns?: Prisma.ReportRunCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateUncheckedCreateWithoutLinesInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    reportRuns?: Prisma.ReportRunUncheckedCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateCreateOrConnectWithoutLinesInput = {
    where: Prisma.StatementTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementTemplateCreateWithoutLinesInput, Prisma.StatementTemplateUncheckedCreateWithoutLinesInput>;
};
export type StatementTemplateUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.StatementTemplateUpdateWithoutLinesInput, Prisma.StatementTemplateUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.StatementTemplateCreateWithoutLinesInput, Prisma.StatementTemplateUncheckedCreateWithoutLinesInput>;
    where?: Prisma.StatementTemplateWhereInput;
};
export type StatementTemplateUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.StatementTemplateWhereInput;
    data: Prisma.XOR<Prisma.StatementTemplateUpdateWithoutLinesInput, Prisma.StatementTemplateUncheckedUpdateWithoutLinesInput>;
};
export type StatementTemplateUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutStatementTemplatesMadeNestedInput;
    reportRuns?: Prisma.ReportRunUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reportRuns?: Prisma.ReportRunUncheckedUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateCreateWithoutReportRunsInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutStatementTemplatesMadeInput;
    lines?: Prisma.StatementLineCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateUncheckedCreateWithoutReportRunsInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    lines?: Prisma.StatementLineUncheckedCreateNestedManyWithoutStatementTemplateInput;
};
export type StatementTemplateCreateOrConnectWithoutReportRunsInput = {
    where: Prisma.StatementTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementTemplateCreateWithoutReportRunsInput, Prisma.StatementTemplateUncheckedCreateWithoutReportRunsInput>;
};
export type StatementTemplateUpsertWithoutReportRunsInput = {
    update: Prisma.XOR<Prisma.StatementTemplateUpdateWithoutReportRunsInput, Prisma.StatementTemplateUncheckedUpdateWithoutReportRunsInput>;
    create: Prisma.XOR<Prisma.StatementTemplateCreateWithoutReportRunsInput, Prisma.StatementTemplateUncheckedCreateWithoutReportRunsInput>;
    where?: Prisma.StatementTemplateWhereInput;
};
export type StatementTemplateUpdateToOneWithWhereWithoutReportRunsInput = {
    where?: Prisma.StatementTemplateWhereInput;
    data: Prisma.XOR<Prisma.StatementTemplateUpdateWithoutReportRunsInput, Prisma.StatementTemplateUncheckedUpdateWithoutReportRunsInput>;
};
export type StatementTemplateUpdateWithoutReportRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutStatementTemplatesMadeNestedInput;
    lines?: Prisma.StatementLineUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateUncheckedUpdateWithoutReportRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.StatementLineUncheckedUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateCreateManyCreatedByInput = {
    id?: string;
    basis: $Enums.AccountingBasis;
    statementCode: string;
    name: string;
    version?: number;
    status?: $Enums.StatementTemplateStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StatementTemplateUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.StatementLineUpdateManyWithoutStatementTemplateNestedInput;
    reportRuns?: Prisma.ReportRunUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.StatementLineUncheckedUpdateManyWithoutStatementTemplateNestedInput;
    reportRuns?: Prisma.ReportRunUncheckedUpdateManyWithoutStatementTemplateNestedInput;
};
export type StatementTemplateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basis?: Prisma.EnumAccountingBasisFieldUpdateOperationsInput | $Enums.AccountingBasis;
    statementCode?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatementTemplateStatusFieldUpdateOperationsInput | $Enums.StatementTemplateStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatementTemplateCountOutputType = {
    lines: number;
    reportRuns: number;
};
export type StatementTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | StatementTemplateCountOutputTypeCountLinesArgs;
    reportRuns?: boolean | StatementTemplateCountOutputTypeCountReportRunsArgs;
};
export type StatementTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type StatementTemplateCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementLineWhereInput;
};
export type StatementTemplateCountOutputTypeCountReportRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportRunWhereInput;
};
export type StatementTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    basis?: boolean;
    statementCode?: boolean;
    name?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.StatementTemplate$linesArgs<ExtArgs>;
    reportRuns?: boolean | Prisma.StatementTemplate$reportRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.StatementTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["statementTemplate"]>;
export type StatementTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    basis?: boolean;
    statementCode?: boolean;
    name?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["statementTemplate"]>;
export type StatementTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    basis?: boolean;
    statementCode?: boolean;
    name?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["statementTemplate"]>;
export type StatementTemplateSelectScalar = {
    id?: boolean;
    basis?: boolean;
    statementCode?: boolean;
    name?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type StatementTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "basis" | "statementCode" | "name" | "version" | "status" | "effectiveFrom" | "createdByUserId" | "createdAt", ExtArgs["result"]["statementTemplate"]>;
export type StatementTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    lines?: boolean | Prisma.StatementTemplate$linesArgs<ExtArgs>;
    reportRuns?: boolean | Prisma.StatementTemplate$reportRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.StatementTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StatementTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type StatementTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $StatementTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StatementTemplate";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        lines: Prisma.$StatementLinePayload<ExtArgs>[];
        reportRuns: Prisma.$ReportRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        basis: $Enums.AccountingBasis;
        statementCode: string;
        name: string;
        version: number;
        status: $Enums.StatementTemplateStatus;
        effectiveFrom: Date | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["statementTemplate"]>;
    composites: {};
};
export type StatementTemplateGetPayload<S extends boolean | null | undefined | StatementTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload, S>;
export type StatementTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StatementTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatementTemplateCountAggregateInputType | true;
};
export interface StatementTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StatementTemplate'];
        meta: {
            name: 'StatementTemplate';
        };
    };
    findUnique<T extends StatementTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, StatementTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StatementTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StatementTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StatementTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, StatementTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StatementTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StatementTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StatementTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, StatementTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StatementTemplateCreateArgs>(args: Prisma.SelectSubset<T, StatementTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StatementTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, StatementTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StatementTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StatementTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StatementTemplateDeleteArgs>(args: Prisma.SelectSubset<T, StatementTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StatementTemplateUpdateArgs>(args: Prisma.SelectSubset<T, StatementTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StatementTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, StatementTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StatementTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, StatementTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StatementTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StatementTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StatementTemplateUpsertArgs>(args: Prisma.SelectSubset<T, StatementTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__StatementTemplateClient<runtime.Types.Result.GetResult<Prisma.$StatementTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StatementTemplateCountArgs>(args?: Prisma.Subset<T, StatementTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StatementTemplateCountAggregateOutputType> : number>;
    aggregate<T extends StatementTemplateAggregateArgs>(args: Prisma.Subset<T, StatementTemplateAggregateArgs>): Prisma.PrismaPromise<GetStatementTemplateAggregateType<T>>;
    groupBy<T extends StatementTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StatementTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: StatementTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StatementTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatementTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StatementTemplateFieldRefs;
}
export interface Prisma__StatementTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.StatementTemplate$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementTemplate$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatementLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportRuns<T extends Prisma.StatementTemplate$reportRunsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StatementTemplate$reportRunsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StatementTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"StatementTemplate", 'String'>;
    readonly basis: Prisma.FieldRef<"StatementTemplate", 'AccountingBasis'>;
    readonly statementCode: Prisma.FieldRef<"StatementTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"StatementTemplate", 'String'>;
    readonly version: Prisma.FieldRef<"StatementTemplate", 'Int'>;
    readonly status: Prisma.FieldRef<"StatementTemplate", 'StatementTemplateStatus'>;
    readonly effectiveFrom: Prisma.FieldRef<"StatementTemplate", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"StatementTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StatementTemplate", 'DateTime'>;
}
export type StatementTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where: Prisma.StatementTemplateWhereUniqueInput;
};
export type StatementTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where: Prisma.StatementTemplateWhereUniqueInput;
};
export type StatementTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where?: Prisma.StatementTemplateWhereInput;
    orderBy?: Prisma.StatementTemplateOrderByWithRelationInput | Prisma.StatementTemplateOrderByWithRelationInput[];
    cursor?: Prisma.StatementTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementTemplateScalarFieldEnum | Prisma.StatementTemplateScalarFieldEnum[];
};
export type StatementTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where?: Prisma.StatementTemplateWhereInput;
    orderBy?: Prisma.StatementTemplateOrderByWithRelationInput | Prisma.StatementTemplateOrderByWithRelationInput[];
    cursor?: Prisma.StatementTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementTemplateScalarFieldEnum | Prisma.StatementTemplateScalarFieldEnum[];
};
export type StatementTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where?: Prisma.StatementTemplateWhereInput;
    orderBy?: Prisma.StatementTemplateOrderByWithRelationInput | Prisma.StatementTemplateOrderByWithRelationInput[];
    cursor?: Prisma.StatementTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementTemplateScalarFieldEnum | Prisma.StatementTemplateScalarFieldEnum[];
};
export type StatementTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementTemplateCreateInput, Prisma.StatementTemplateUncheckedCreateInput>;
};
export type StatementTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StatementTemplateCreateManyInput | Prisma.StatementTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StatementTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    data: Prisma.StatementTemplateCreateManyInput | Prisma.StatementTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StatementTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StatementTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementTemplateUpdateInput, Prisma.StatementTemplateUncheckedUpdateInput>;
    where: Prisma.StatementTemplateWhereUniqueInput;
};
export type StatementTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StatementTemplateUpdateManyMutationInput, Prisma.StatementTemplateUncheckedUpdateManyInput>;
    where?: Prisma.StatementTemplateWhereInput;
    limit?: number;
};
export type StatementTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatementTemplateUpdateManyMutationInput, Prisma.StatementTemplateUncheckedUpdateManyInput>;
    where?: Prisma.StatementTemplateWhereInput;
    limit?: number;
    include?: Prisma.StatementTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StatementTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where: Prisma.StatementTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatementTemplateCreateInput, Prisma.StatementTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StatementTemplateUpdateInput, Prisma.StatementTemplateUncheckedUpdateInput>;
};
export type StatementTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
    where: Prisma.StatementTemplateWhereUniqueInput;
};
export type StatementTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatementTemplateWhereInput;
    limit?: number;
};
export type StatementTemplate$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementLineSelect<ExtArgs> | null;
    omit?: Prisma.StatementLineOmit<ExtArgs> | null;
    include?: Prisma.StatementLineInclude<ExtArgs> | null;
    where?: Prisma.StatementLineWhereInput;
    orderBy?: Prisma.StatementLineOrderByWithRelationInput | Prisma.StatementLineOrderByWithRelationInput[];
    cursor?: Prisma.StatementLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatementLineScalarFieldEnum | Prisma.StatementLineScalarFieldEnum[];
};
export type StatementTemplate$reportRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatementTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatementTemplateSelect<ExtArgs> | null;
    omit?: Prisma.StatementTemplateOmit<ExtArgs> | null;
    include?: Prisma.StatementTemplateInclude<ExtArgs> | null;
};
