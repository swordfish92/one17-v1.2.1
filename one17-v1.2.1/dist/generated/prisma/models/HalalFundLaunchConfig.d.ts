import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HalalFundLaunchConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$HalalFundLaunchConfigPayload>;
export type AggregateHalalFundLaunchConfig = {
    _count: HalalFundLaunchConfigCountAggregateOutputType | null;
    _avg: HalalFundLaunchConfigAvgAggregateOutputType | null;
    _sum: HalalFundLaunchConfigSumAggregateOutputType | null;
    _min: HalalFundLaunchConfigMinAggregateOutputType | null;
    _max: HalalFundLaunchConfigMaxAggregateOutputType | null;
};
export type HalalFundLaunchConfigAvgAggregateOutputType = {
    version: number | null;
    launchPrice: runtime.Decimal | null;
    offerSpreadPct: runtime.Decimal | null;
    bidSpreadPct: runtime.Decimal | null;
};
export type HalalFundLaunchConfigSumAggregateOutputType = {
    version: number | null;
    launchPrice: runtime.Decimal | null;
    offerSpreadPct: runtime.Decimal | null;
    bidSpreadPct: runtime.Decimal | null;
};
export type HalalFundLaunchConfigMinAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    launchDate: Date | null;
    launchPrice: runtime.Decimal | null;
    offerSpreadPct: runtime.Decimal | null;
    bidSpreadPct: runtime.Decimal | null;
    boardResolutionRef: string | null;
    ssbResolutionRef: string | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type HalalFundLaunchConfigMaxAggregateOutputType = {
    id: string | null;
    ledgerEntityCode: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    launchDate: Date | null;
    launchPrice: runtime.Decimal | null;
    offerSpreadPct: runtime.Decimal | null;
    bidSpreadPct: runtime.Decimal | null;
    boardResolutionRef: string | null;
    ssbResolutionRef: string | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    createdAt: Date | null;
};
export type HalalFundLaunchConfigCountAggregateOutputType = {
    id: number;
    ledgerEntityCode: number;
    version: number;
    status: number;
    launchDate: number;
    launchPrice: number;
    offerSpreadPct: number;
    bidSpreadPct: number;
    feeRates: number;
    boardResolutionRef: number;
    ssbResolutionRef: number;
    createdByUserId: number;
    approvedByUserId: number;
    createdAt: number;
    _all: number;
};
export type HalalFundLaunchConfigAvgAggregateInputType = {
    version?: true;
    launchPrice?: true;
    offerSpreadPct?: true;
    bidSpreadPct?: true;
};
export type HalalFundLaunchConfigSumAggregateInputType = {
    version?: true;
    launchPrice?: true;
    offerSpreadPct?: true;
    bidSpreadPct?: true;
};
export type HalalFundLaunchConfigMinAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    version?: true;
    status?: true;
    launchDate?: true;
    launchPrice?: true;
    offerSpreadPct?: true;
    bidSpreadPct?: true;
    boardResolutionRef?: true;
    ssbResolutionRef?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type HalalFundLaunchConfigMaxAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    version?: true;
    status?: true;
    launchDate?: true;
    launchPrice?: true;
    offerSpreadPct?: true;
    bidSpreadPct?: true;
    boardResolutionRef?: true;
    ssbResolutionRef?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    createdAt?: true;
};
export type HalalFundLaunchConfigCountAggregateInputType = {
    id?: true;
    ledgerEntityCode?: true;
    version?: true;
    status?: true;
    launchDate?: true;
    launchPrice?: true;
    offerSpreadPct?: true;
    bidSpreadPct?: true;
    feeRates?: true;
    boardResolutionRef?: true;
    ssbResolutionRef?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type HalalFundLaunchConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    orderBy?: Prisma.HalalFundLaunchConfigOrderByWithRelationInput | Prisma.HalalFundLaunchConfigOrderByWithRelationInput[];
    cursor?: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HalalFundLaunchConfigCountAggregateInputType;
    _avg?: HalalFundLaunchConfigAvgAggregateInputType;
    _sum?: HalalFundLaunchConfigSumAggregateInputType;
    _min?: HalalFundLaunchConfigMinAggregateInputType;
    _max?: HalalFundLaunchConfigMaxAggregateInputType;
};
export type GetHalalFundLaunchConfigAggregateType<T extends HalalFundLaunchConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateHalalFundLaunchConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHalalFundLaunchConfig[P]> : Prisma.GetScalarType<T[P], AggregateHalalFundLaunchConfig[P]>;
};
export type HalalFundLaunchConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    orderBy?: Prisma.HalalFundLaunchConfigOrderByWithAggregationInput | Prisma.HalalFundLaunchConfigOrderByWithAggregationInput[];
    by: Prisma.HalalFundLaunchConfigScalarFieldEnum[] | Prisma.HalalFundLaunchConfigScalarFieldEnum;
    having?: Prisma.HalalFundLaunchConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HalalFundLaunchConfigCountAggregateInputType | true;
    _avg?: HalalFundLaunchConfigAvgAggregateInputType;
    _sum?: HalalFundLaunchConfigSumAggregateInputType;
    _min?: HalalFundLaunchConfigMinAggregateInputType;
    _max?: HalalFundLaunchConfigMaxAggregateInputType;
};
export type HalalFundLaunchConfigGroupByOutputType = {
    id: string;
    ledgerEntityCode: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    launchDate: Date;
    launchPrice: runtime.Decimal;
    offerSpreadPct: runtime.Decimal;
    bidSpreadPct: runtime.Decimal;
    feeRates: runtime.JsonValue;
    boardResolutionRef: string | null;
    ssbResolutionRef: string | null;
    createdByUserId: string;
    approvedByUserId: string | null;
    createdAt: Date;
    _count: HalalFundLaunchConfigCountAggregateOutputType | null;
    _avg: HalalFundLaunchConfigAvgAggregateOutputType | null;
    _sum: HalalFundLaunchConfigSumAggregateOutputType | null;
    _min: HalalFundLaunchConfigMinAggregateOutputType | null;
    _max: HalalFundLaunchConfigMaxAggregateOutputType | null;
};
export type GetHalalFundLaunchConfigGroupByPayload<T extends HalalFundLaunchConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HalalFundLaunchConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HalalFundLaunchConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HalalFundLaunchConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HalalFundLaunchConfigGroupByOutputType[P]>;
}>>;
export type HalalFundLaunchConfigWhereInput = {
    AND?: Prisma.HalalFundLaunchConfigWhereInput | Prisma.HalalFundLaunchConfigWhereInput[];
    OR?: Prisma.HalalFundLaunchConfigWhereInput[];
    NOT?: Prisma.HalalFundLaunchConfigWhereInput | Prisma.HalalFundLaunchConfigWhereInput[];
    id?: Prisma.UuidFilter<"HalalFundLaunchConfig"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"HalalFundLaunchConfig"> | string;
    version?: Prisma.IntFilter<"HalalFundLaunchConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"HalalFundLaunchConfig"> | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFilter<"HalalFundLaunchConfig"> | Date | string;
    launchPrice?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonFilter<"HalalFundLaunchConfig">;
    boardResolutionRef?: Prisma.StringNullableFilter<"HalalFundLaunchConfig"> | string | null;
    ssbResolutionRef?: Prisma.StringNullableFilter<"HalalFundLaunchConfig"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"HalalFundLaunchConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"HalalFundLaunchConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"HalalFundLaunchConfig"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type HalalFundLaunchConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    launchPrice?: Prisma.SortOrder;
    offerSpreadPct?: Prisma.SortOrder;
    bidSpreadPct?: Prisma.SortOrder;
    feeRates?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    ssbResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ledgerEntity?: Prisma.LedgerEntityOrderByWithRelationInput;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type HalalFundLaunchConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ledgerEntityCode_version?: Prisma.HalalFundLaunchConfigLedgerEntityCodeVersionCompoundUniqueInput;
    AND?: Prisma.HalalFundLaunchConfigWhereInput | Prisma.HalalFundLaunchConfigWhereInput[];
    OR?: Prisma.HalalFundLaunchConfigWhereInput[];
    NOT?: Prisma.HalalFundLaunchConfigWhereInput | Prisma.HalalFundLaunchConfigWhereInput[];
    ledgerEntityCode?: Prisma.StringFilter<"HalalFundLaunchConfig"> | string;
    version?: Prisma.IntFilter<"HalalFundLaunchConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"HalalFundLaunchConfig"> | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFilter<"HalalFundLaunchConfig"> | Date | string;
    launchPrice?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonFilter<"HalalFundLaunchConfig">;
    boardResolutionRef?: Prisma.StringNullableFilter<"HalalFundLaunchConfig"> | string | null;
    ssbResolutionRef?: Prisma.StringNullableFilter<"HalalFundLaunchConfig"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"HalalFundLaunchConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"HalalFundLaunchConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"HalalFundLaunchConfig"> | Date | string;
    ledgerEntity?: Prisma.XOR<Prisma.LedgerEntityScalarRelationFilter, Prisma.LedgerEntityWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "ledgerEntityCode_version">;
export type HalalFundLaunchConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    launchPrice?: Prisma.SortOrder;
    offerSpreadPct?: Prisma.SortOrder;
    bidSpreadPct?: Prisma.SortOrder;
    feeRates?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    ssbResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.HalalFundLaunchConfigCountOrderByAggregateInput;
    _avg?: Prisma.HalalFundLaunchConfigAvgOrderByAggregateInput;
    _max?: Prisma.HalalFundLaunchConfigMaxOrderByAggregateInput;
    _min?: Prisma.HalalFundLaunchConfigMinOrderByAggregateInput;
    _sum?: Prisma.HalalFundLaunchConfigSumOrderByAggregateInput;
};
export type HalalFundLaunchConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.HalalFundLaunchConfigScalarWhereWithAggregatesInput | Prisma.HalalFundLaunchConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.HalalFundLaunchConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HalalFundLaunchConfigScalarWhereWithAggregatesInput | Prisma.HalalFundLaunchConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"HalalFundLaunchConfig"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"HalalFundLaunchConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"HalalFundLaunchConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"HalalFundLaunchConfig"> | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeWithAggregatesFilter<"HalalFundLaunchConfig"> | Date | string;
    launchPrice?: Prisma.DecimalWithAggregatesFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalWithAggregatesFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalWithAggregatesFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonWithAggregatesFilter<"HalalFundLaunchConfig">;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"HalalFundLaunchConfig"> | string | null;
    ssbResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"HalalFundLaunchConfig"> | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"HalalFundLaunchConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"HalalFundLaunchConfig"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HalalFundLaunchConfig"> | Date | string;
};
export type HalalFundLaunchConfigCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutHalalFundLaunchConfigsInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutHfLaunchConfigsCreatedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutHfLaunchConfigsApprovedInput;
};
export type HalalFundLaunchConfigUncheckedCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdByUserId: string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutHalalFundLaunchConfigsNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutHfLaunchConfigsCreatedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutHfLaunchConfigsApprovedNestedInput;
};
export type HalalFundLaunchConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigCreateManyInput = {
    id?: string;
    ledgerEntityCode: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdByUserId: string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigListRelationFilter = {
    every?: Prisma.HalalFundLaunchConfigWhereInput;
    some?: Prisma.HalalFundLaunchConfigWhereInput;
    none?: Prisma.HalalFundLaunchConfigWhereInput;
};
export type HalalFundLaunchConfigOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HalalFundLaunchConfigLedgerEntityCodeVersionCompoundUniqueInput = {
    ledgerEntityCode: string;
    version: number;
};
export type HalalFundLaunchConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    launchPrice?: Prisma.SortOrder;
    offerSpreadPct?: Prisma.SortOrder;
    bidSpreadPct?: Prisma.SortOrder;
    feeRates?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    ssbResolutionRef?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HalalFundLaunchConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    launchPrice?: Prisma.SortOrder;
    offerSpreadPct?: Prisma.SortOrder;
    bidSpreadPct?: Prisma.SortOrder;
};
export type HalalFundLaunchConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    launchPrice?: Prisma.SortOrder;
    offerSpreadPct?: Prisma.SortOrder;
    bidSpreadPct?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    ssbResolutionRef?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HalalFundLaunchConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    launchPrice?: Prisma.SortOrder;
    offerSpreadPct?: Prisma.SortOrder;
    bidSpreadPct?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    ssbResolutionRef?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HalalFundLaunchConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    launchPrice?: Prisma.SortOrder;
    offerSpreadPct?: Prisma.SortOrder;
    bidSpreadPct?: Prisma.SortOrder;
};
export type HalalFundLaunchConfigCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
};
export type HalalFundLaunchConfigCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyApprovedByInputEnvelope;
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
};
export type HalalFundLaunchConfigUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
};
export type HalalFundLaunchConfigUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyApprovedByInputEnvelope;
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
};
export type HalalFundLaunchConfigUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    disconnect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    delete?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    update?: Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
};
export type HalalFundLaunchConfigUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyApprovedByInputEnvelope;
    set?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    disconnect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    delete?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    update?: Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutApprovedByInput | Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
};
export type HalalFundLaunchConfigUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    disconnect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    delete?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    update?: Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
};
export type HalalFundLaunchConfigUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput> | Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyApprovedByInputEnvelope;
    set?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    disconnect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    delete?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    update?: Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutApprovedByInput | Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
};
export type HalalFundLaunchConfigCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
};
export type HalalFundLaunchConfigUncheckedCreateNestedManyWithoutLedgerEntityInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyLedgerEntityInputEnvelope;
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
};
export type HalalFundLaunchConfigUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    disconnect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    delete?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    update?: Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
};
export type HalalFundLaunchConfigUncheckedUpdateManyWithoutLedgerEntityNestedInput = {
    create?: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput> | Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput[] | Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput[];
    connectOrCreate?: Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput[];
    upsert?: Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigUpsertWithWhereUniqueWithoutLedgerEntityInput[];
    createMany?: Prisma.HalalFundLaunchConfigCreateManyLedgerEntityInputEnvelope;
    set?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    disconnect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    delete?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    connect?: Prisma.HalalFundLaunchConfigWhereUniqueInput | Prisma.HalalFundLaunchConfigWhereUniqueInput[];
    update?: Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigUpdateWithWhereUniqueWithoutLedgerEntityInput[];
    updateMany?: Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutLedgerEntityInput | Prisma.HalalFundLaunchConfigUpdateManyWithWhereWithoutLedgerEntityInput[];
    deleteMany?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
};
export type HalalFundLaunchConfigCreateWithoutCreatedByInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutHalalFundLaunchConfigsInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutHfLaunchConfigsApprovedInput;
};
export type HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    ledgerEntityCode: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput>;
};
export type HalalFundLaunchConfigCreateManyCreatedByInputEnvelope = {
    data: Prisma.HalalFundLaunchConfigCreateManyCreatedByInput | Prisma.HalalFundLaunchConfigCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type HalalFundLaunchConfigCreateWithoutApprovedByInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdAt?: Date | string;
    ledgerEntity: Prisma.LedgerEntityCreateNestedOneWithoutHalalFundLaunchConfigsInput;
    createdBy: Prisma.AppUserCreateNestedOneWithoutHfLaunchConfigsCreatedInput;
};
export type HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    ledgerEntityCode: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput>;
};
export type HalalFundLaunchConfigCreateManyApprovedByInputEnvelope = {
    data: Prisma.HalalFundLaunchConfigCreateManyApprovedByInput | Prisma.HalalFundLaunchConfigCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type HalalFundLaunchConfigUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutCreatedByInput>;
};
export type HalalFundLaunchConfigUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateWithoutCreatedByInput, Prisma.HalalFundLaunchConfigUncheckedUpdateWithoutCreatedByInput>;
};
export type HalalFundLaunchConfigUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.HalalFundLaunchConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateManyMutationInput, Prisma.HalalFundLaunchConfigUncheckedUpdateManyWithoutCreatedByInput>;
};
export type HalalFundLaunchConfigScalarWhereInput = {
    AND?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
    OR?: Prisma.HalalFundLaunchConfigScalarWhereInput[];
    NOT?: Prisma.HalalFundLaunchConfigScalarWhereInput | Prisma.HalalFundLaunchConfigScalarWhereInput[];
    id?: Prisma.UuidFilter<"HalalFundLaunchConfig"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"HalalFundLaunchConfig"> | string;
    version?: Prisma.IntFilter<"HalalFundLaunchConfig"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"HalalFundLaunchConfig"> | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFilter<"HalalFundLaunchConfig"> | Date | string;
    launchPrice?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFilter<"HalalFundLaunchConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonFilter<"HalalFundLaunchConfig">;
    boardResolutionRef?: Prisma.StringNullableFilter<"HalalFundLaunchConfig"> | string | null;
    ssbResolutionRef?: Prisma.StringNullableFilter<"HalalFundLaunchConfig"> | string | null;
    createdByUserId?: Prisma.UuidFilter<"HalalFundLaunchConfig"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"HalalFundLaunchConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"HalalFundLaunchConfig"> | Date | string;
};
export type HalalFundLaunchConfigUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutApprovedByInput>;
};
export type HalalFundLaunchConfigUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateWithoutApprovedByInput, Prisma.HalalFundLaunchConfigUncheckedUpdateWithoutApprovedByInput>;
};
export type HalalFundLaunchConfigUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.HalalFundLaunchConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateManyMutationInput, Prisma.HalalFundLaunchConfigUncheckedUpdateManyWithoutApprovedByInput>;
};
export type HalalFundLaunchConfigCreateWithoutLedgerEntityInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutHfLaunchConfigsCreatedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutHfLaunchConfigsApprovedInput;
};
export type HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdByUserId: string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigCreateOrConnectWithoutLedgerEntityInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput>;
};
export type HalalFundLaunchConfigCreateManyLedgerEntityInputEnvelope = {
    data: Prisma.HalalFundLaunchConfigCreateManyLedgerEntityInput | Prisma.HalalFundLaunchConfigCreateManyLedgerEntityInput[];
    skipDuplicates?: boolean;
};
export type HalalFundLaunchConfigUpsertWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedUpdateWithoutLedgerEntityInput>;
    create: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedCreateWithoutLedgerEntityInput>;
};
export type HalalFundLaunchConfigUpdateWithWhereUniqueWithoutLedgerEntityInput = {
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateWithoutLedgerEntityInput, Prisma.HalalFundLaunchConfigUncheckedUpdateWithoutLedgerEntityInput>;
};
export type HalalFundLaunchConfigUpdateManyWithWhereWithoutLedgerEntityInput = {
    where: Prisma.HalalFundLaunchConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateManyMutationInput, Prisma.HalalFundLaunchConfigUncheckedUpdateManyWithoutLedgerEntityInput>;
};
export type HalalFundLaunchConfigCreateManyCreatedByInput = {
    id?: string;
    ledgerEntityCode: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigCreateManyApprovedByInput = {
    id?: string;
    ledgerEntityCode: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutHalalFundLaunchConfigsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutHfLaunchConfigsApprovedNestedInput;
};
export type HalalFundLaunchConfigUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntity?: Prisma.LedgerEntityUpdateOneRequiredWithoutHalalFundLaunchConfigsNestedInput;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutHfLaunchConfigsCreatedNestedInput;
};
export type HalalFundLaunchConfigUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigCreateManyLedgerEntityInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    launchDate: Date | string;
    launchPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    ssbResolutionRef?: string | null;
    createdByUserId: string;
    approvedByUserId?: string | null;
    createdAt?: Date | string;
};
export type HalalFundLaunchConfigUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutHfLaunchConfigsCreatedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutHfLaunchConfigsApprovedNestedInput;
};
export type HalalFundLaunchConfigUncheckedUpdateWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigUncheckedUpdateManyWithoutLedgerEntityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    launchDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    launchPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    offerSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bidSpreadPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    feeRates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ssbResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HalalFundLaunchConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    version?: boolean;
    status?: boolean;
    launchDate?: boolean;
    launchPrice?: boolean;
    offerSpreadPct?: boolean;
    bidSpreadPct?: boolean;
    feeRates?: boolean;
    boardResolutionRef?: boolean;
    ssbResolutionRef?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["halalFundLaunchConfig"]>;
export type HalalFundLaunchConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    version?: boolean;
    status?: boolean;
    launchDate?: boolean;
    launchPrice?: boolean;
    offerSpreadPct?: boolean;
    bidSpreadPct?: boolean;
    feeRates?: boolean;
    boardResolutionRef?: boolean;
    ssbResolutionRef?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["halalFundLaunchConfig"]>;
export type HalalFundLaunchConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ledgerEntityCode?: boolean;
    version?: boolean;
    status?: boolean;
    launchDate?: boolean;
    launchPrice?: boolean;
    offerSpreadPct?: boolean;
    bidSpreadPct?: boolean;
    feeRates?: boolean;
    boardResolutionRef?: boolean;
    ssbResolutionRef?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["halalFundLaunchConfig"]>;
export type HalalFundLaunchConfigSelectScalar = {
    id?: boolean;
    ledgerEntityCode?: boolean;
    version?: boolean;
    status?: boolean;
    launchDate?: boolean;
    launchPrice?: boolean;
    offerSpreadPct?: boolean;
    bidSpreadPct?: boolean;
    feeRates?: boolean;
    boardResolutionRef?: boolean;
    ssbResolutionRef?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    createdAt?: boolean;
};
export type HalalFundLaunchConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ledgerEntityCode" | "version" | "status" | "launchDate" | "launchPrice" | "offerSpreadPct" | "bidSpreadPct" | "feeRates" | "boardResolutionRef" | "ssbResolutionRef" | "createdByUserId" | "approvedByUserId" | "createdAt", ExtArgs["result"]["halalFundLaunchConfig"]>;
export type HalalFundLaunchConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs>;
};
export type HalalFundLaunchConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs>;
};
export type HalalFundLaunchConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntity?: boolean | Prisma.LedgerEntityDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs>;
};
export type $HalalFundLaunchConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HalalFundLaunchConfig";
    objects: {
        ledgerEntity: Prisma.$LedgerEntityPayload<ExtArgs>;
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ledgerEntityCode: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        launchDate: Date;
        launchPrice: runtime.Decimal;
        offerSpreadPct: runtime.Decimal;
        bidSpreadPct: runtime.Decimal;
        feeRates: runtime.JsonValue;
        boardResolutionRef: string | null;
        ssbResolutionRef: string | null;
        createdByUserId: string;
        approvedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["halalFundLaunchConfig"]>;
    composites: {};
};
export type HalalFundLaunchConfigGetPayload<S extends boolean | null | undefined | HalalFundLaunchConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload, S>;
export type HalalFundLaunchConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HalalFundLaunchConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HalalFundLaunchConfigCountAggregateInputType | true;
};
export interface HalalFundLaunchConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HalalFundLaunchConfig'];
        meta: {
            name: 'HalalFundLaunchConfig';
        };
    };
    findUnique<T extends HalalFundLaunchConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HalalFundLaunchConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HalalFundLaunchConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, HalalFundLaunchConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HalalFundLaunchConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HalalFundLaunchConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HalalFundLaunchConfigFindManyArgs>(args?: Prisma.SelectSubset<T, HalalFundLaunchConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HalalFundLaunchConfigCreateArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigCreateArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HalalFundLaunchConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, HalalFundLaunchConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HalalFundLaunchConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HalalFundLaunchConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HalalFundLaunchConfigDeleteArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HalalFundLaunchConfigUpdateArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HalalFundLaunchConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, HalalFundLaunchConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HalalFundLaunchConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HalalFundLaunchConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HalalFundLaunchConfigUpsertArgs>(args: Prisma.SelectSubset<T, HalalFundLaunchConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__HalalFundLaunchConfigClient<runtime.Types.Result.GetResult<Prisma.$HalalFundLaunchConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HalalFundLaunchConfigCountArgs>(args?: Prisma.Subset<T, HalalFundLaunchConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HalalFundLaunchConfigCountAggregateOutputType> : number>;
    aggregate<T extends HalalFundLaunchConfigAggregateArgs>(args: Prisma.Subset<T, HalalFundLaunchConfigAggregateArgs>): Prisma.PrismaPromise<GetHalalFundLaunchConfigAggregateType<T>>;
    groupBy<T extends HalalFundLaunchConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HalalFundLaunchConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: HalalFundLaunchConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HalalFundLaunchConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHalalFundLaunchConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HalalFundLaunchConfigFieldRefs;
}
export interface Prisma__HalalFundLaunchConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ledgerEntity<T extends Prisma.LedgerEntityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntityDefaultArgs<ExtArgs>>): Prisma.Prisma__LedgerEntityClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HalalFundLaunchConfig$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HalalFundLaunchConfigFieldRefs {
    readonly id: Prisma.FieldRef<"HalalFundLaunchConfig", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"HalalFundLaunchConfig", 'String'>;
    readonly version: Prisma.FieldRef<"HalalFundLaunchConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"HalalFundLaunchConfig", 'GovernedItemStatus'>;
    readonly launchDate: Prisma.FieldRef<"HalalFundLaunchConfig", 'DateTime'>;
    readonly launchPrice: Prisma.FieldRef<"HalalFundLaunchConfig", 'Decimal'>;
    readonly offerSpreadPct: Prisma.FieldRef<"HalalFundLaunchConfig", 'Decimal'>;
    readonly bidSpreadPct: Prisma.FieldRef<"HalalFundLaunchConfig", 'Decimal'>;
    readonly feeRates: Prisma.FieldRef<"HalalFundLaunchConfig", 'Json'>;
    readonly boardResolutionRef: Prisma.FieldRef<"HalalFundLaunchConfig", 'String'>;
    readonly ssbResolutionRef: Prisma.FieldRef<"HalalFundLaunchConfig", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"HalalFundLaunchConfig", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"HalalFundLaunchConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"HalalFundLaunchConfig", 'DateTime'>;
}
export type HalalFundLaunchConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
};
export type HalalFundLaunchConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
};
export type HalalFundLaunchConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    orderBy?: Prisma.HalalFundLaunchConfigOrderByWithRelationInput | Prisma.HalalFundLaunchConfigOrderByWithRelationInput[];
    cursor?: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HalalFundLaunchConfigScalarFieldEnum | Prisma.HalalFundLaunchConfigScalarFieldEnum[];
};
export type HalalFundLaunchConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    orderBy?: Prisma.HalalFundLaunchConfigOrderByWithRelationInput | Prisma.HalalFundLaunchConfigOrderByWithRelationInput[];
    cursor?: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HalalFundLaunchConfigScalarFieldEnum | Prisma.HalalFundLaunchConfigScalarFieldEnum[];
};
export type HalalFundLaunchConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    orderBy?: Prisma.HalalFundLaunchConfigOrderByWithRelationInput | Prisma.HalalFundLaunchConfigOrderByWithRelationInput[];
    cursor?: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HalalFundLaunchConfigScalarFieldEnum | Prisma.HalalFundLaunchConfigScalarFieldEnum[];
};
export type HalalFundLaunchConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateInput, Prisma.HalalFundLaunchConfigUncheckedCreateInput>;
};
export type HalalFundLaunchConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HalalFundLaunchConfigCreateManyInput | Prisma.HalalFundLaunchConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HalalFundLaunchConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    data: Prisma.HalalFundLaunchConfigCreateManyInput | Prisma.HalalFundLaunchConfigCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HalalFundLaunchConfigIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HalalFundLaunchConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateInput, Prisma.HalalFundLaunchConfigUncheckedUpdateInput>;
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
};
export type HalalFundLaunchConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateManyMutationInput, Prisma.HalalFundLaunchConfigUncheckedUpdateManyInput>;
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    limit?: number;
};
export type HalalFundLaunchConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateManyMutationInput, Prisma.HalalFundLaunchConfigUncheckedUpdateManyInput>;
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    limit?: number;
    include?: Prisma.HalalFundLaunchConfigIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HalalFundLaunchConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.HalalFundLaunchConfigCreateInput, Prisma.HalalFundLaunchConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HalalFundLaunchConfigUpdateInput, Prisma.HalalFundLaunchConfigUncheckedUpdateInput>;
};
export type HalalFundLaunchConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
    where: Prisma.HalalFundLaunchConfigWhereUniqueInput;
};
export type HalalFundLaunchConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HalalFundLaunchConfigWhereInput;
    limit?: number;
};
export type HalalFundLaunchConfig$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type HalalFundLaunchConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HalalFundLaunchConfigSelect<ExtArgs> | null;
    omit?: Prisma.HalalFundLaunchConfigOmit<ExtArgs> | null;
    include?: Prisma.HalalFundLaunchConfigInclude<ExtArgs> | null;
};
