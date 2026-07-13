import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmolumentStructureModel = runtime.Types.Result.DefaultSelection<Prisma.$EmolumentStructurePayload>;
export type AggregateEmolumentStructure = {
    _count: EmolumentStructureCountAggregateOutputType | null;
    _avg: EmolumentStructureAvgAggregateOutputType | null;
    _sum: EmolumentStructureSumAggregateOutputType | null;
    _min: EmolumentStructureMinAggregateOutputType | null;
    _max: EmolumentStructureMaxAggregateOutputType | null;
};
export type EmolumentStructureAvgAggregateOutputType = {
    notch: number | null;
    annualAmountKobo: number | null;
    version: number | null;
};
export type EmolumentStructureSumAggregateOutputType = {
    notch: number | null;
    annualAmountKobo: bigint | null;
    version: number | null;
};
export type EmolumentStructureMinAggregateOutputType = {
    id: string | null;
    cadre: string | null;
    notch: number | null;
    component: string | null;
    annualAmountKobo: bigint | null;
    componentType: $Enums.EmolumentComponentType | null;
    taxable: boolean | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    effectiveFrom: Date | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type EmolumentStructureMaxAggregateOutputType = {
    id: string | null;
    cadre: string | null;
    notch: number | null;
    component: string | null;
    annualAmountKobo: bigint | null;
    componentType: $Enums.EmolumentComponentType | null;
    taxable: boolean | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    effectiveFrom: Date | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type EmolumentStructureCountAggregateOutputType = {
    id: number;
    cadre: number;
    notch: number;
    component: number;
    annualAmountKobo: number;
    componentType: number;
    taxable: number;
    version: number;
    status: number;
    effectiveFrom: number;
    createdByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    migrationSourceRef: number;
    createdAt: number;
    _all: number;
};
export type EmolumentStructureAvgAggregateInputType = {
    notch?: true;
    annualAmountKobo?: true;
    version?: true;
};
export type EmolumentStructureSumAggregateInputType = {
    notch?: true;
    annualAmountKobo?: true;
    version?: true;
};
export type EmolumentStructureMinAggregateInputType = {
    id?: true;
    cadre?: true;
    notch?: true;
    component?: true;
    annualAmountKobo?: true;
    componentType?: true;
    taxable?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type EmolumentStructureMaxAggregateInputType = {
    id?: true;
    cadre?: true;
    notch?: true;
    component?: true;
    annualAmountKobo?: true;
    componentType?: true;
    taxable?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type EmolumentStructureCountAggregateInputType = {
    id?: true;
    cadre?: true;
    notch?: true;
    component?: true;
    annualAmountKobo?: true;
    componentType?: true;
    taxable?: true;
    version?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    migrationSourceRef?: true;
    createdAt?: true;
    _all?: true;
};
export type EmolumentStructureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmolumentStructureWhereInput;
    orderBy?: Prisma.EmolumentStructureOrderByWithRelationInput | Prisma.EmolumentStructureOrderByWithRelationInput[];
    cursor?: Prisma.EmolumentStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmolumentStructureCountAggregateInputType;
    _avg?: EmolumentStructureAvgAggregateInputType;
    _sum?: EmolumentStructureSumAggregateInputType;
    _min?: EmolumentStructureMinAggregateInputType;
    _max?: EmolumentStructureMaxAggregateInputType;
};
export type GetEmolumentStructureAggregateType<T extends EmolumentStructureAggregateArgs> = {
    [P in keyof T & keyof AggregateEmolumentStructure]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmolumentStructure[P]> : Prisma.GetScalarType<T[P], AggregateEmolumentStructure[P]>;
};
export type EmolumentStructureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmolumentStructureWhereInput;
    orderBy?: Prisma.EmolumentStructureOrderByWithAggregationInput | Prisma.EmolumentStructureOrderByWithAggregationInput[];
    by: Prisma.EmolumentStructureScalarFieldEnum[] | Prisma.EmolumentStructureScalarFieldEnum;
    having?: Prisma.EmolumentStructureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmolumentStructureCountAggregateInputType | true;
    _avg?: EmolumentStructureAvgAggregateInputType;
    _sum?: EmolumentStructureSumAggregateInputType;
    _min?: EmolumentStructureMinAggregateInputType;
    _max?: EmolumentStructureMaxAggregateInputType;
};
export type EmolumentStructureGroupByOutputType = {
    id: string;
    cadre: string;
    notch: number;
    component: string;
    annualAmountKobo: bigint;
    componentType: $Enums.EmolumentComponentType;
    taxable: boolean;
    version: number;
    status: $Enums.GovernedItemStatus;
    effectiveFrom: Date;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    migrationSourceRef: string | null;
    createdAt: Date;
    _count: EmolumentStructureCountAggregateOutputType | null;
    _avg: EmolumentStructureAvgAggregateOutputType | null;
    _sum: EmolumentStructureSumAggregateOutputType | null;
    _min: EmolumentStructureMinAggregateOutputType | null;
    _max: EmolumentStructureMaxAggregateOutputType | null;
};
export type GetEmolumentStructureGroupByPayload<T extends EmolumentStructureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmolumentStructureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmolumentStructureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmolumentStructureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmolumentStructureGroupByOutputType[P]>;
}>>;
export type EmolumentStructureWhereInput = {
    AND?: Prisma.EmolumentStructureWhereInput | Prisma.EmolumentStructureWhereInput[];
    OR?: Prisma.EmolumentStructureWhereInput[];
    NOT?: Prisma.EmolumentStructureWhereInput | Prisma.EmolumentStructureWhereInput[];
    id?: Prisma.UuidFilter<"EmolumentStructure"> | string;
    cadre?: Prisma.StringFilter<"EmolumentStructure"> | string;
    notch?: Prisma.IntFilter<"EmolumentStructure"> | number;
    component?: Prisma.StringFilter<"EmolumentStructure"> | string;
    annualAmountKobo?: Prisma.BigIntFilter<"EmolumentStructure"> | bigint | number;
    componentType?: Prisma.EnumEmolumentComponentTypeFilter<"EmolumentStructure"> | $Enums.EmolumentComponentType;
    taxable?: Prisma.BoolFilter<"EmolumentStructure"> | boolean;
    version?: Prisma.IntFilter<"EmolumentStructure"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"EmolumentStructure"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFilter<"EmolumentStructure"> | Date | string;
    createdByUserId?: Prisma.UuidNullableFilter<"EmolumentStructure"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"EmolumentStructure"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmolumentStructure"> | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"EmolumentStructure"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmolumentStructure"> | Date | string;
};
export type EmolumentStructureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    annualAmountKobo?: Prisma.SortOrder;
    componentType?: Prisma.SortOrder;
    taxable?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmolumentStructureWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cadre_notch_component_version?: Prisma.EmolumentStructureCadreNotchComponentVersionCompoundUniqueInput;
    AND?: Prisma.EmolumentStructureWhereInput | Prisma.EmolumentStructureWhereInput[];
    OR?: Prisma.EmolumentStructureWhereInput[];
    NOT?: Prisma.EmolumentStructureWhereInput | Prisma.EmolumentStructureWhereInput[];
    cadre?: Prisma.StringFilter<"EmolumentStructure"> | string;
    notch?: Prisma.IntFilter<"EmolumentStructure"> | number;
    component?: Prisma.StringFilter<"EmolumentStructure"> | string;
    annualAmountKobo?: Prisma.BigIntFilter<"EmolumentStructure"> | bigint | number;
    componentType?: Prisma.EnumEmolumentComponentTypeFilter<"EmolumentStructure"> | $Enums.EmolumentComponentType;
    taxable?: Prisma.BoolFilter<"EmolumentStructure"> | boolean;
    version?: Prisma.IntFilter<"EmolumentStructure"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"EmolumentStructure"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFilter<"EmolumentStructure"> | Date | string;
    createdByUserId?: Prisma.UuidNullableFilter<"EmolumentStructure"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"EmolumentStructure"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"EmolumentStructure"> | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"EmolumentStructure"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmolumentStructure"> | Date | string;
}, "id" | "cadre_notch_component_version">;
export type EmolumentStructureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    annualAmountKobo?: Prisma.SortOrder;
    componentType?: Prisma.SortOrder;
    taxable?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmolumentStructureCountOrderByAggregateInput;
    _avg?: Prisma.EmolumentStructureAvgOrderByAggregateInput;
    _max?: Prisma.EmolumentStructureMaxOrderByAggregateInput;
    _min?: Prisma.EmolumentStructureMinOrderByAggregateInput;
    _sum?: Prisma.EmolumentStructureSumOrderByAggregateInput;
};
export type EmolumentStructureScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmolumentStructureScalarWhereWithAggregatesInput | Prisma.EmolumentStructureScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmolumentStructureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmolumentStructureScalarWhereWithAggregatesInput | Prisma.EmolumentStructureScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmolumentStructure"> | string;
    cadre?: Prisma.StringWithAggregatesFilter<"EmolumentStructure"> | string;
    notch?: Prisma.IntWithAggregatesFilter<"EmolumentStructure"> | number;
    component?: Prisma.StringWithAggregatesFilter<"EmolumentStructure"> | string;
    annualAmountKobo?: Prisma.BigIntWithAggregatesFilter<"EmolumentStructure"> | bigint | number;
    componentType?: Prisma.EnumEmolumentComponentTypeWithAggregatesFilter<"EmolumentStructure"> | $Enums.EmolumentComponentType;
    taxable?: Prisma.BoolWithAggregatesFilter<"EmolumentStructure"> | boolean;
    version?: Prisma.IntWithAggregatesFilter<"EmolumentStructure"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"EmolumentStructure"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"EmolumentStructure"> | Date | string;
    createdByUserId?: Prisma.UuidNullableWithAggregatesFilter<"EmolumentStructure"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"EmolumentStructure"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"EmolumentStructure"> | string | null;
    migrationSourceRef?: Prisma.StringNullableWithAggregatesFilter<"EmolumentStructure"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmolumentStructure"> | Date | string;
};
export type EmolumentStructureCreateInput = {
    id?: string;
    cadre: string;
    notch: number;
    component: string;
    annualAmountKobo: bigint | number;
    componentType: $Enums.EmolumentComponentType;
    taxable?: boolean;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type EmolumentStructureUncheckedCreateInput = {
    id?: string;
    cadre: string;
    notch: number;
    component: string;
    annualAmountKobo: bigint | number;
    componentType: $Enums.EmolumentComponentType;
    taxable?: boolean;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type EmolumentStructureUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    component?: Prisma.StringFieldUpdateOperationsInput | string;
    annualAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    componentType?: Prisma.EnumEmolumentComponentTypeFieldUpdateOperationsInput | $Enums.EmolumentComponentType;
    taxable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmolumentStructureUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    component?: Prisma.StringFieldUpdateOperationsInput | string;
    annualAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    componentType?: Prisma.EnumEmolumentComponentTypeFieldUpdateOperationsInput | $Enums.EmolumentComponentType;
    taxable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmolumentStructureCreateManyInput = {
    id?: string;
    cadre: string;
    notch: number;
    component: string;
    annualAmountKobo: bigint | number;
    componentType: $Enums.EmolumentComponentType;
    taxable?: boolean;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom: Date | string;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type EmolumentStructureUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    component?: Prisma.StringFieldUpdateOperationsInput | string;
    annualAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    componentType?: Prisma.EnumEmolumentComponentTypeFieldUpdateOperationsInput | $Enums.EmolumentComponentType;
    taxable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmolumentStructureUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cadre?: Prisma.StringFieldUpdateOperationsInput | string;
    notch?: Prisma.IntFieldUpdateOperationsInput | number;
    component?: Prisma.StringFieldUpdateOperationsInput | string;
    annualAmountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    componentType?: Prisma.EnumEmolumentComponentTypeFieldUpdateOperationsInput | $Enums.EmolumentComponentType;
    taxable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmolumentStructureCadreNotchComponentVersionCompoundUniqueInput = {
    cadre: string;
    notch: number;
    component: string;
    version: number;
};
export type EmolumentStructureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    annualAmountKobo?: Prisma.SortOrder;
    componentType?: Prisma.SortOrder;
    taxable?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmolumentStructureAvgOrderByAggregateInput = {
    notch?: Prisma.SortOrder;
    annualAmountKobo?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type EmolumentStructureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    annualAmountKobo?: Prisma.SortOrder;
    componentType?: Prisma.SortOrder;
    taxable?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmolumentStructureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    notch?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    annualAmountKobo?: Prisma.SortOrder;
    componentType?: Prisma.SortOrder;
    taxable?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmolumentStructureSumOrderByAggregateInput = {
    notch?: Prisma.SortOrder;
    annualAmountKobo?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type EnumEmolumentComponentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmolumentComponentType;
};
export type EmolumentStructureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cadre?: boolean;
    notch?: boolean;
    component?: boolean;
    annualAmountKobo?: boolean;
    componentType?: boolean;
    taxable?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["emolumentStructure"]>;
export type EmolumentStructureSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cadre?: boolean;
    notch?: boolean;
    component?: boolean;
    annualAmountKobo?: boolean;
    componentType?: boolean;
    taxable?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["emolumentStructure"]>;
export type EmolumentStructureSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cadre?: boolean;
    notch?: boolean;
    component?: boolean;
    annualAmountKobo?: boolean;
    componentType?: boolean;
    taxable?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["emolumentStructure"]>;
export type EmolumentStructureSelectScalar = {
    id?: boolean;
    cadre?: boolean;
    notch?: boolean;
    component?: boolean;
    annualAmountKobo?: boolean;
    componentType?: boolean;
    taxable?: boolean;
    version?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
};
export type EmolumentStructureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cadre" | "notch" | "component" | "annualAmountKobo" | "componentType" | "taxable" | "version" | "status" | "effectiveFrom" | "createdByUserId" | "approvedByUserId" | "workflowInstanceId" | "migrationSourceRef" | "createdAt", ExtArgs["result"]["emolumentStructure"]>;
export type $EmolumentStructurePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmolumentStructure";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cadre: string;
        notch: number;
        component: string;
        annualAmountKobo: bigint;
        componentType: $Enums.EmolumentComponentType;
        taxable: boolean;
        version: number;
        status: $Enums.GovernedItemStatus;
        effectiveFrom: Date;
        createdByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        migrationSourceRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["emolumentStructure"]>;
    composites: {};
};
export type EmolumentStructureGetPayload<S extends boolean | null | undefined | EmolumentStructureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload, S>;
export type EmolumentStructureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmolumentStructureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmolumentStructureCountAggregateInputType | true;
};
export interface EmolumentStructureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmolumentStructure'];
        meta: {
            name: 'EmolumentStructure';
        };
    };
    findUnique<T extends EmolumentStructureFindUniqueArgs>(args: Prisma.SelectSubset<T, EmolumentStructureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmolumentStructureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmolumentStructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmolumentStructureFindFirstArgs>(args?: Prisma.SelectSubset<T, EmolumentStructureFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmolumentStructureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmolumentStructureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmolumentStructureFindManyArgs>(args?: Prisma.SelectSubset<T, EmolumentStructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmolumentStructureCreateArgs>(args: Prisma.SelectSubset<T, EmolumentStructureCreateArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmolumentStructureCreateManyArgs>(args?: Prisma.SelectSubset<T, EmolumentStructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmolumentStructureCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmolumentStructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmolumentStructureDeleteArgs>(args: Prisma.SelectSubset<T, EmolumentStructureDeleteArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmolumentStructureUpdateArgs>(args: Prisma.SelectSubset<T, EmolumentStructureUpdateArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmolumentStructureDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmolumentStructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmolumentStructureUpdateManyArgs>(args: Prisma.SelectSubset<T, EmolumentStructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmolumentStructureUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmolumentStructureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmolumentStructureUpsertArgs>(args: Prisma.SelectSubset<T, EmolumentStructureUpsertArgs<ExtArgs>>): Prisma.Prisma__EmolumentStructureClient<runtime.Types.Result.GetResult<Prisma.$EmolumentStructurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmolumentStructureCountArgs>(args?: Prisma.Subset<T, EmolumentStructureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmolumentStructureCountAggregateOutputType> : number>;
    aggregate<T extends EmolumentStructureAggregateArgs>(args: Prisma.Subset<T, EmolumentStructureAggregateArgs>): Prisma.PrismaPromise<GetEmolumentStructureAggregateType<T>>;
    groupBy<T extends EmolumentStructureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmolumentStructureGroupByArgs['orderBy'];
    } : {
        orderBy?: EmolumentStructureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmolumentStructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmolumentStructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmolumentStructureFieldRefs;
}
export interface Prisma__EmolumentStructureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmolumentStructureFieldRefs {
    readonly id: Prisma.FieldRef<"EmolumentStructure", 'String'>;
    readonly cadre: Prisma.FieldRef<"EmolumentStructure", 'String'>;
    readonly notch: Prisma.FieldRef<"EmolumentStructure", 'Int'>;
    readonly component: Prisma.FieldRef<"EmolumentStructure", 'String'>;
    readonly annualAmountKobo: Prisma.FieldRef<"EmolumentStructure", 'BigInt'>;
    readonly componentType: Prisma.FieldRef<"EmolumentStructure", 'EmolumentComponentType'>;
    readonly taxable: Prisma.FieldRef<"EmolumentStructure", 'Boolean'>;
    readonly version: Prisma.FieldRef<"EmolumentStructure", 'Int'>;
    readonly status: Prisma.FieldRef<"EmolumentStructure", 'GovernedItemStatus'>;
    readonly effectiveFrom: Prisma.FieldRef<"EmolumentStructure", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"EmolumentStructure", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"EmolumentStructure", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"EmolumentStructure", 'String'>;
    readonly migrationSourceRef: Prisma.FieldRef<"EmolumentStructure", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmolumentStructure", 'DateTime'>;
}
export type EmolumentStructureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    where: Prisma.EmolumentStructureWhereUniqueInput;
};
export type EmolumentStructureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    where: Prisma.EmolumentStructureWhereUniqueInput;
};
export type EmolumentStructureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    where?: Prisma.EmolumentStructureWhereInput;
    orderBy?: Prisma.EmolumentStructureOrderByWithRelationInput | Prisma.EmolumentStructureOrderByWithRelationInput[];
    cursor?: Prisma.EmolumentStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmolumentStructureScalarFieldEnum | Prisma.EmolumentStructureScalarFieldEnum[];
};
export type EmolumentStructureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    where?: Prisma.EmolumentStructureWhereInput;
    orderBy?: Prisma.EmolumentStructureOrderByWithRelationInput | Prisma.EmolumentStructureOrderByWithRelationInput[];
    cursor?: Prisma.EmolumentStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmolumentStructureScalarFieldEnum | Prisma.EmolumentStructureScalarFieldEnum[];
};
export type EmolumentStructureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    where?: Prisma.EmolumentStructureWhereInput;
    orderBy?: Prisma.EmolumentStructureOrderByWithRelationInput | Prisma.EmolumentStructureOrderByWithRelationInput[];
    cursor?: Prisma.EmolumentStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmolumentStructureScalarFieldEnum | Prisma.EmolumentStructureScalarFieldEnum[];
};
export type EmolumentStructureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmolumentStructureCreateInput, Prisma.EmolumentStructureUncheckedCreateInput>;
};
export type EmolumentStructureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmolumentStructureCreateManyInput | Prisma.EmolumentStructureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmolumentStructureCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    data: Prisma.EmolumentStructureCreateManyInput | Prisma.EmolumentStructureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmolumentStructureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmolumentStructureUpdateInput, Prisma.EmolumentStructureUncheckedUpdateInput>;
    where: Prisma.EmolumentStructureWhereUniqueInput;
};
export type EmolumentStructureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmolumentStructureUpdateManyMutationInput, Prisma.EmolumentStructureUncheckedUpdateManyInput>;
    where?: Prisma.EmolumentStructureWhereInput;
    limit?: number;
};
export type EmolumentStructureUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmolumentStructureUpdateManyMutationInput, Prisma.EmolumentStructureUncheckedUpdateManyInput>;
    where?: Prisma.EmolumentStructureWhereInput;
    limit?: number;
};
export type EmolumentStructureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    where: Prisma.EmolumentStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmolumentStructureCreateInput, Prisma.EmolumentStructureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmolumentStructureUpdateInput, Prisma.EmolumentStructureUncheckedUpdateInput>;
};
export type EmolumentStructureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
    where: Prisma.EmolumentStructureWhereUniqueInput;
};
export type EmolumentStructureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmolumentStructureWhereInput;
    limit?: number;
};
export type EmolumentStructureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmolumentStructureSelect<ExtArgs> | null;
    omit?: Prisma.EmolumentStructureOmit<ExtArgs> | null;
};
