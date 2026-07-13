import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaxRuleConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxRuleConfigPayload>;
export type AggregateTaxRuleConfig = {
    _count: TaxRuleConfigCountAggregateOutputType | null;
    _avg: TaxRuleConfigAvgAggregateOutputType | null;
    _sum: TaxRuleConfigSumAggregateOutputType | null;
    _min: TaxRuleConfigMinAggregateOutputType | null;
    _max: TaxRuleConfigMaxAggregateOutputType | null;
};
export type TaxRuleConfigAvgAggregateOutputType = {
    version: number | null;
    consolidatedReliefFlatKobo: number | null;
    consolidatedReliefPctOfGross: runtime.Decimal | null;
    pensionEmployeePct: runtime.Decimal | null;
    nhfPct: runtime.Decimal | null;
};
export type TaxRuleConfigSumAggregateOutputType = {
    version: number | null;
    consolidatedReliefFlatKobo: bigint | null;
    consolidatedReliefPctOfGross: runtime.Decimal | null;
    pensionEmployeePct: runtime.Decimal | null;
    nhfPct: runtime.Decimal | null;
};
export type TaxRuleConfigMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    consolidatedReliefFlatKobo: bigint | null;
    consolidatedReliefPctOfGross: runtime.Decimal | null;
    pensionEmployeePct: runtime.Decimal | null;
    nhfPct: runtime.Decimal | null;
    status: $Enums.GovernedItemStatus | null;
    validatedByUserId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type TaxRuleConfigMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    consolidatedReliefFlatKobo: bigint | null;
    consolidatedReliefPctOfGross: runtime.Decimal | null;
    pensionEmployeePct: runtime.Decimal | null;
    nhfPct: runtime.Decimal | null;
    status: $Enums.GovernedItemStatus | null;
    validatedByUserId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type TaxRuleConfigCountAggregateOutputType = {
    id: number;
    version: number;
    consolidatedReliefFlatKobo: number;
    consolidatedReliefPctOfGross: number;
    bands: number;
    pensionEmployeePct: number;
    nhfPct: number;
    status: number;
    validatedByUserId: number;
    effectiveFrom: number;
    createdAt: number;
    _all: number;
};
export type TaxRuleConfigAvgAggregateInputType = {
    version?: true;
    consolidatedReliefFlatKobo?: true;
    consolidatedReliefPctOfGross?: true;
    pensionEmployeePct?: true;
    nhfPct?: true;
};
export type TaxRuleConfigSumAggregateInputType = {
    version?: true;
    consolidatedReliefFlatKobo?: true;
    consolidatedReliefPctOfGross?: true;
    pensionEmployeePct?: true;
    nhfPct?: true;
};
export type TaxRuleConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    consolidatedReliefFlatKobo?: true;
    consolidatedReliefPctOfGross?: true;
    pensionEmployeePct?: true;
    nhfPct?: true;
    status?: true;
    validatedByUserId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type TaxRuleConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    consolidatedReliefFlatKobo?: true;
    consolidatedReliefPctOfGross?: true;
    pensionEmployeePct?: true;
    nhfPct?: true;
    status?: true;
    validatedByUserId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type TaxRuleConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    consolidatedReliefFlatKobo?: true;
    consolidatedReliefPctOfGross?: true;
    bands?: true;
    pensionEmployeePct?: true;
    nhfPct?: true;
    status?: true;
    validatedByUserId?: true;
    effectiveFrom?: true;
    createdAt?: true;
    _all?: true;
};
export type TaxRuleConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRuleConfigWhereInput;
    orderBy?: Prisma.TaxRuleConfigOrderByWithRelationInput | Prisma.TaxRuleConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRuleConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaxRuleConfigCountAggregateInputType;
    _avg?: TaxRuleConfigAvgAggregateInputType;
    _sum?: TaxRuleConfigSumAggregateInputType;
    _min?: TaxRuleConfigMinAggregateInputType;
    _max?: TaxRuleConfigMaxAggregateInputType;
};
export type GetTaxRuleConfigAggregateType<T extends TaxRuleConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxRuleConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxRuleConfig[P]> : Prisma.GetScalarType<T[P], AggregateTaxRuleConfig[P]>;
};
export type TaxRuleConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRuleConfigWhereInput;
    orderBy?: Prisma.TaxRuleConfigOrderByWithAggregationInput | Prisma.TaxRuleConfigOrderByWithAggregationInput[];
    by: Prisma.TaxRuleConfigScalarFieldEnum[] | Prisma.TaxRuleConfigScalarFieldEnum;
    having?: Prisma.TaxRuleConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxRuleConfigCountAggregateInputType | true;
    _avg?: TaxRuleConfigAvgAggregateInputType;
    _sum?: TaxRuleConfigSumAggregateInputType;
    _min?: TaxRuleConfigMinAggregateInputType;
    _max?: TaxRuleConfigMaxAggregateInputType;
};
export type TaxRuleConfigGroupByOutputType = {
    id: string;
    version: number;
    consolidatedReliefFlatKobo: bigint;
    consolidatedReliefPctOfGross: runtime.Decimal;
    bands: runtime.JsonValue;
    pensionEmployeePct: runtime.Decimal;
    nhfPct: runtime.Decimal;
    status: $Enums.GovernedItemStatus;
    validatedByUserId: string | null;
    effectiveFrom: Date;
    createdAt: Date;
    _count: TaxRuleConfigCountAggregateOutputType | null;
    _avg: TaxRuleConfigAvgAggregateOutputType | null;
    _sum: TaxRuleConfigSumAggregateOutputType | null;
    _min: TaxRuleConfigMinAggregateOutputType | null;
    _max: TaxRuleConfigMaxAggregateOutputType | null;
};
export type GetTaxRuleConfigGroupByPayload<T extends TaxRuleConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxRuleConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxRuleConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxRuleConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxRuleConfigGroupByOutputType[P]>;
}>>;
export type TaxRuleConfigWhereInput = {
    AND?: Prisma.TaxRuleConfigWhereInput | Prisma.TaxRuleConfigWhereInput[];
    OR?: Prisma.TaxRuleConfigWhereInput[];
    NOT?: Prisma.TaxRuleConfigWhereInput | Prisma.TaxRuleConfigWhereInput[];
    id?: Prisma.UuidFilter<"TaxRuleConfig"> | string;
    version?: Prisma.IntFilter<"TaxRuleConfig"> | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntFilter<"TaxRuleConfig"> | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonFilter<"TaxRuleConfig">;
    pensionEmployeePct?: Prisma.DecimalFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"TaxRuleConfig"> | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.UuidNullableFilter<"TaxRuleConfig"> | string | null;
    effectiveFrom?: Prisma.DateTimeFilter<"TaxRuleConfig"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"TaxRuleConfig"> | Date | string;
    payrollRuns?: Prisma.PayrollRunListRelationFilter;
};
export type TaxRuleConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    consolidatedReliefFlatKobo?: Prisma.SortOrder;
    consolidatedReliefPctOfGross?: Prisma.SortOrder;
    bands?: Prisma.SortOrder;
    pensionEmployeePct?: Prisma.SortOrder;
    nhfPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payrollRuns?: Prisma.PayrollRunOrderByRelationAggregateInput;
};
export type TaxRuleConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    version?: number;
    AND?: Prisma.TaxRuleConfigWhereInput | Prisma.TaxRuleConfigWhereInput[];
    OR?: Prisma.TaxRuleConfigWhereInput[];
    NOT?: Prisma.TaxRuleConfigWhereInput | Prisma.TaxRuleConfigWhereInput[];
    consolidatedReliefFlatKobo?: Prisma.BigIntFilter<"TaxRuleConfig"> | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonFilter<"TaxRuleConfig">;
    pensionEmployeePct?: Prisma.DecimalFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"TaxRuleConfig"> | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.UuidNullableFilter<"TaxRuleConfig"> | string | null;
    effectiveFrom?: Prisma.DateTimeFilter<"TaxRuleConfig"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"TaxRuleConfig"> | Date | string;
    payrollRuns?: Prisma.PayrollRunListRelationFilter;
}, "id" | "version">;
export type TaxRuleConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    consolidatedReliefFlatKobo?: Prisma.SortOrder;
    consolidatedReliefPctOfGross?: Prisma.SortOrder;
    bands?: Prisma.SortOrder;
    pensionEmployeePct?: Prisma.SortOrder;
    nhfPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TaxRuleConfigCountOrderByAggregateInput;
    _avg?: Prisma.TaxRuleConfigAvgOrderByAggregateInput;
    _max?: Prisma.TaxRuleConfigMaxOrderByAggregateInput;
    _min?: Prisma.TaxRuleConfigMinOrderByAggregateInput;
    _sum?: Prisma.TaxRuleConfigSumOrderByAggregateInput;
};
export type TaxRuleConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxRuleConfigScalarWhereWithAggregatesInput | Prisma.TaxRuleConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxRuleConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxRuleConfigScalarWhereWithAggregatesInput | Prisma.TaxRuleConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaxRuleConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"TaxRuleConfig"> | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntWithAggregatesFilter<"TaxRuleConfig"> | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalWithAggregatesFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonWithAggregatesFilter<"TaxRuleConfig">;
    pensionEmployeePct?: Prisma.DecimalWithAggregatesFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalWithAggregatesFilter<"TaxRuleConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"TaxRuleConfig"> | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"TaxRuleConfig"> | string | null;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"TaxRuleConfig"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaxRuleConfig"> | Date | string;
};
export type TaxRuleConfigCreateInput = {
    id?: string;
    version: number;
    consolidatedReliefFlatKobo: bigint | number;
    consolidatedReliefPctOfGross: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    validatedByUserId?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
    payrollRuns?: Prisma.PayrollRunCreateNestedManyWithoutTaxRuleConfigInput;
};
export type TaxRuleConfigUncheckedCreateInput = {
    id?: string;
    version: number;
    consolidatedReliefFlatKobo: bigint | number;
    consolidatedReliefPctOfGross: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    validatedByUserId?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
    payrollRuns?: Prisma.PayrollRunUncheckedCreateNestedManyWithoutTaxRuleConfigInput;
};
export type TaxRuleConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payrollRuns?: Prisma.PayrollRunUpdateManyWithoutTaxRuleConfigNestedInput;
};
export type TaxRuleConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payrollRuns?: Prisma.PayrollRunUncheckedUpdateManyWithoutTaxRuleConfigNestedInput;
};
export type TaxRuleConfigCreateManyInput = {
    id?: string;
    version: number;
    consolidatedReliefFlatKobo: bigint | number;
    consolidatedReliefPctOfGross: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    validatedByUserId?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
};
export type TaxRuleConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRuleConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRuleConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    consolidatedReliefFlatKobo?: Prisma.SortOrder;
    consolidatedReliefPctOfGross?: Prisma.SortOrder;
    bands?: Prisma.SortOrder;
    pensionEmployeePct?: Prisma.SortOrder;
    nhfPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validatedByUserId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRuleConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    consolidatedReliefFlatKobo?: Prisma.SortOrder;
    consolidatedReliefPctOfGross?: Prisma.SortOrder;
    pensionEmployeePct?: Prisma.SortOrder;
    nhfPct?: Prisma.SortOrder;
};
export type TaxRuleConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    consolidatedReliefFlatKobo?: Prisma.SortOrder;
    consolidatedReliefPctOfGross?: Prisma.SortOrder;
    pensionEmployeePct?: Prisma.SortOrder;
    nhfPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validatedByUserId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRuleConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    consolidatedReliefFlatKobo?: Prisma.SortOrder;
    consolidatedReliefPctOfGross?: Prisma.SortOrder;
    pensionEmployeePct?: Prisma.SortOrder;
    nhfPct?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validatedByUserId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TaxRuleConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    consolidatedReliefFlatKobo?: Prisma.SortOrder;
    consolidatedReliefPctOfGross?: Prisma.SortOrder;
    pensionEmployeePct?: Prisma.SortOrder;
    nhfPct?: Prisma.SortOrder;
};
export type TaxRuleConfigScalarRelationFilter = {
    is?: Prisma.TaxRuleConfigWhereInput;
    isNot?: Prisma.TaxRuleConfigWhereInput;
};
export type TaxRuleConfigCreateNestedOneWithoutPayrollRunsInput = {
    create?: Prisma.XOR<Prisma.TaxRuleConfigCreateWithoutPayrollRunsInput, Prisma.TaxRuleConfigUncheckedCreateWithoutPayrollRunsInput>;
    connectOrCreate?: Prisma.TaxRuleConfigCreateOrConnectWithoutPayrollRunsInput;
    connect?: Prisma.TaxRuleConfigWhereUniqueInput;
};
export type TaxRuleConfigUpdateOneRequiredWithoutPayrollRunsNestedInput = {
    create?: Prisma.XOR<Prisma.TaxRuleConfigCreateWithoutPayrollRunsInput, Prisma.TaxRuleConfigUncheckedCreateWithoutPayrollRunsInput>;
    connectOrCreate?: Prisma.TaxRuleConfigCreateOrConnectWithoutPayrollRunsInput;
    upsert?: Prisma.TaxRuleConfigUpsertWithoutPayrollRunsInput;
    connect?: Prisma.TaxRuleConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxRuleConfigUpdateToOneWithWhereWithoutPayrollRunsInput, Prisma.TaxRuleConfigUpdateWithoutPayrollRunsInput>, Prisma.TaxRuleConfigUncheckedUpdateWithoutPayrollRunsInput>;
};
export type TaxRuleConfigCreateWithoutPayrollRunsInput = {
    id?: string;
    version: number;
    consolidatedReliefFlatKobo: bigint | number;
    consolidatedReliefPctOfGross: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    validatedByUserId?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
};
export type TaxRuleConfigUncheckedCreateWithoutPayrollRunsInput = {
    id?: string;
    version: number;
    consolidatedReliefFlatKobo: bigint | number;
    consolidatedReliefPctOfGross: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    validatedByUserId?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
};
export type TaxRuleConfigCreateOrConnectWithoutPayrollRunsInput = {
    where: Prisma.TaxRuleConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRuleConfigCreateWithoutPayrollRunsInput, Prisma.TaxRuleConfigUncheckedCreateWithoutPayrollRunsInput>;
};
export type TaxRuleConfigUpsertWithoutPayrollRunsInput = {
    update: Prisma.XOR<Prisma.TaxRuleConfigUpdateWithoutPayrollRunsInput, Prisma.TaxRuleConfigUncheckedUpdateWithoutPayrollRunsInput>;
    create: Prisma.XOR<Prisma.TaxRuleConfigCreateWithoutPayrollRunsInput, Prisma.TaxRuleConfigUncheckedCreateWithoutPayrollRunsInput>;
    where?: Prisma.TaxRuleConfigWhereInput;
};
export type TaxRuleConfigUpdateToOneWithWhereWithoutPayrollRunsInput = {
    where?: Prisma.TaxRuleConfigWhereInput;
    data: Prisma.XOR<Prisma.TaxRuleConfigUpdateWithoutPayrollRunsInput, Prisma.TaxRuleConfigUncheckedUpdateWithoutPayrollRunsInput>;
};
export type TaxRuleConfigUpdateWithoutPayrollRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRuleConfigUncheckedUpdateWithoutPayrollRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    consolidatedReliefFlatKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    consolidatedReliefPctOfGross?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bands?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pensionEmployeePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    nhfPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    validatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxRuleConfigCountOutputType = {
    payrollRuns: number;
};
export type TaxRuleConfigCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payrollRuns?: boolean | TaxRuleConfigCountOutputTypeCountPayrollRunsArgs;
};
export type TaxRuleConfigCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigCountOutputTypeSelect<ExtArgs> | null;
};
export type TaxRuleConfigCountOutputTypeCountPayrollRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayrollRunWhereInput;
};
export type TaxRuleConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    consolidatedReliefFlatKobo?: boolean;
    consolidatedReliefPctOfGross?: boolean;
    bands?: boolean;
    pensionEmployeePct?: boolean;
    nhfPct?: boolean;
    status?: boolean;
    validatedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    payrollRuns?: boolean | Prisma.TaxRuleConfig$payrollRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaxRuleConfigCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxRuleConfig"]>;
export type TaxRuleConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    consolidatedReliefFlatKobo?: boolean;
    consolidatedReliefPctOfGross?: boolean;
    bands?: boolean;
    pensionEmployeePct?: boolean;
    nhfPct?: boolean;
    status?: boolean;
    validatedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["taxRuleConfig"]>;
export type TaxRuleConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    consolidatedReliefFlatKobo?: boolean;
    consolidatedReliefPctOfGross?: boolean;
    bands?: boolean;
    pensionEmployeePct?: boolean;
    nhfPct?: boolean;
    status?: boolean;
    validatedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["taxRuleConfig"]>;
export type TaxRuleConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    consolidatedReliefFlatKobo?: boolean;
    consolidatedReliefPctOfGross?: boolean;
    bands?: boolean;
    pensionEmployeePct?: boolean;
    nhfPct?: boolean;
    status?: boolean;
    validatedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
};
export type TaxRuleConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "consolidatedReliefFlatKobo" | "consolidatedReliefPctOfGross" | "bands" | "pensionEmployeePct" | "nhfPct" | "status" | "validatedByUserId" | "effectiveFrom" | "createdAt", ExtArgs["result"]["taxRuleConfig"]>;
export type TaxRuleConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payrollRuns?: boolean | Prisma.TaxRuleConfig$payrollRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaxRuleConfigCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TaxRuleConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TaxRuleConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TaxRuleConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxRuleConfig";
    objects: {
        payrollRuns: Prisma.$PayrollRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        consolidatedReliefFlatKobo: bigint;
        consolidatedReliefPctOfGross: runtime.Decimal;
        bands: runtime.JsonValue;
        pensionEmployeePct: runtime.Decimal;
        nhfPct: runtime.Decimal;
        status: $Enums.GovernedItemStatus;
        validatedByUserId: string | null;
        effectiveFrom: Date;
        createdAt: Date;
    }, ExtArgs["result"]["taxRuleConfig"]>;
    composites: {};
};
export type TaxRuleConfigGetPayload<S extends boolean | null | undefined | TaxRuleConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload, S>;
export type TaxRuleConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxRuleConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxRuleConfigCountAggregateInputType | true;
};
export interface TaxRuleConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxRuleConfig'];
        meta: {
            name: 'TaxRuleConfig';
        };
    };
    findUnique<T extends TaxRuleConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaxRuleConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaxRuleConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxRuleConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaxRuleConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxRuleConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaxRuleConfigFindManyArgs>(args?: Prisma.SelectSubset<T, TaxRuleConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaxRuleConfigCreateArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigCreateArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaxRuleConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxRuleConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaxRuleConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxRuleConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaxRuleConfigDeleteArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaxRuleConfigUpdateArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaxRuleConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxRuleConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaxRuleConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaxRuleConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaxRuleConfigUpsertArgs>(args: Prisma.SelectSubset<T, TaxRuleConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxRuleConfigClient<runtime.Types.Result.GetResult<Prisma.$TaxRuleConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaxRuleConfigCountArgs>(args?: Prisma.Subset<T, TaxRuleConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxRuleConfigCountAggregateOutputType> : number>;
    aggregate<T extends TaxRuleConfigAggregateArgs>(args: Prisma.Subset<T, TaxRuleConfigAggregateArgs>): Prisma.PrismaPromise<GetTaxRuleConfigAggregateType<T>>;
    groupBy<T extends TaxRuleConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxRuleConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxRuleConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxRuleConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxRuleConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaxRuleConfigFieldRefs;
}
export interface Prisma__TaxRuleConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payrollRuns<T extends Prisma.TaxRuleConfig$payrollRunsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRuleConfig$payrollRunsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayrollRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaxRuleConfigFieldRefs {
    readonly id: Prisma.FieldRef<"TaxRuleConfig", 'String'>;
    readonly version: Prisma.FieldRef<"TaxRuleConfig", 'Int'>;
    readonly consolidatedReliefFlatKobo: Prisma.FieldRef<"TaxRuleConfig", 'BigInt'>;
    readonly consolidatedReliefPctOfGross: Prisma.FieldRef<"TaxRuleConfig", 'Decimal'>;
    readonly bands: Prisma.FieldRef<"TaxRuleConfig", 'Json'>;
    readonly pensionEmployeePct: Prisma.FieldRef<"TaxRuleConfig", 'Decimal'>;
    readonly nhfPct: Prisma.FieldRef<"TaxRuleConfig", 'Decimal'>;
    readonly status: Prisma.FieldRef<"TaxRuleConfig", 'GovernedItemStatus'>;
    readonly validatedByUserId: Prisma.FieldRef<"TaxRuleConfig", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"TaxRuleConfig", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"TaxRuleConfig", 'DateTime'>;
}
export type TaxRuleConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    where: Prisma.TaxRuleConfigWhereUniqueInput;
};
export type TaxRuleConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    where: Prisma.TaxRuleConfigWhereUniqueInput;
};
export type TaxRuleConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    where?: Prisma.TaxRuleConfigWhereInput;
    orderBy?: Prisma.TaxRuleConfigOrderByWithRelationInput | Prisma.TaxRuleConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRuleConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRuleConfigScalarFieldEnum | Prisma.TaxRuleConfigScalarFieldEnum[];
};
export type TaxRuleConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    where?: Prisma.TaxRuleConfigWhereInput;
    orderBy?: Prisma.TaxRuleConfigOrderByWithRelationInput | Prisma.TaxRuleConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRuleConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRuleConfigScalarFieldEnum | Prisma.TaxRuleConfigScalarFieldEnum[];
};
export type TaxRuleConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    where?: Prisma.TaxRuleConfigWhereInput;
    orderBy?: Prisma.TaxRuleConfigOrderByWithRelationInput | Prisma.TaxRuleConfigOrderByWithRelationInput[];
    cursor?: Prisma.TaxRuleConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxRuleConfigScalarFieldEnum | Prisma.TaxRuleConfigScalarFieldEnum[];
};
export type TaxRuleConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRuleConfigCreateInput, Prisma.TaxRuleConfigUncheckedCreateInput>;
};
export type TaxRuleConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaxRuleConfigCreateManyInput | Prisma.TaxRuleConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxRuleConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    data: Prisma.TaxRuleConfigCreateManyInput | Prisma.TaxRuleConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxRuleConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRuleConfigUpdateInput, Prisma.TaxRuleConfigUncheckedUpdateInput>;
    where: Prisma.TaxRuleConfigWhereUniqueInput;
};
export type TaxRuleConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaxRuleConfigUpdateManyMutationInput, Prisma.TaxRuleConfigUncheckedUpdateManyInput>;
    where?: Prisma.TaxRuleConfigWhereInput;
    limit?: number;
};
export type TaxRuleConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxRuleConfigUpdateManyMutationInput, Prisma.TaxRuleConfigUncheckedUpdateManyInput>;
    where?: Prisma.TaxRuleConfigWhereInput;
    limit?: number;
};
export type TaxRuleConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    where: Prisma.TaxRuleConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxRuleConfigCreateInput, Prisma.TaxRuleConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaxRuleConfigUpdateInput, Prisma.TaxRuleConfigUncheckedUpdateInput>;
};
export type TaxRuleConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
    where: Prisma.TaxRuleConfigWhereUniqueInput;
};
export type TaxRuleConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxRuleConfigWhereInput;
    limit?: number;
};
export type TaxRuleConfig$payrollRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayrollRunSelect<ExtArgs> | null;
    omit?: Prisma.PayrollRunOmit<ExtArgs> | null;
    include?: Prisma.PayrollRunInclude<ExtArgs> | null;
    where?: Prisma.PayrollRunWhereInput;
    orderBy?: Prisma.PayrollRunOrderByWithRelationInput | Prisma.PayrollRunOrderByWithRelationInput[];
    cursor?: Prisma.PayrollRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayrollRunScalarFieldEnum | Prisma.PayrollRunScalarFieldEnum[];
};
export type TaxRuleConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxRuleConfigSelect<ExtArgs> | null;
    omit?: Prisma.TaxRuleConfigOmit<ExtArgs> | null;
    include?: Prisma.TaxRuleConfigInclude<ExtArgs> | null;
};
