import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ZakatDeclaredItemModel = runtime.Types.Result.DefaultSelection<Prisma.$ZakatDeclaredItemPayload>;
export type AggregateZakatDeclaredItem = {
    _count: ZakatDeclaredItemCountAggregateOutputType | null;
    _avg: ZakatDeclaredItemAvgAggregateOutputType | null;
    _sum: ZakatDeclaredItemSumAggregateOutputType | null;
    _min: ZakatDeclaredItemMinAggregateOutputType | null;
    _max: ZakatDeclaredItemMaxAggregateOutputType | null;
};
export type ZakatDeclaredItemAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type ZakatDeclaredItemSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type ZakatDeclaredItemMinAggregateOutputType = {
    id: string | null;
    zakatAssessmentRunId: string | null;
    scheduleType: $Enums.ZakatScheduleType | null;
    description: string | null;
    amountKobo: bigint | null;
    zakatability: $Enums.ZakatItemZakatability | null;
    custodyFlag: $Enums.WmCustodyFlag | null;
    verificationTag: $Enums.WmVerificationTag | null;
    declarationSource: $Enums.ZakatDeclarationSource | null;
    declaredByUserId: string | null;
    verifiedByUserId: string | null;
    verifiedAt: Date | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type ZakatDeclaredItemMaxAggregateOutputType = {
    id: string | null;
    zakatAssessmentRunId: string | null;
    scheduleType: $Enums.ZakatScheduleType | null;
    description: string | null;
    amountKobo: bigint | null;
    zakatability: $Enums.ZakatItemZakatability | null;
    custodyFlag: $Enums.WmCustodyFlag | null;
    verificationTag: $Enums.WmVerificationTag | null;
    declarationSource: $Enums.ZakatDeclarationSource | null;
    declaredByUserId: string | null;
    verifiedByUserId: string | null;
    verifiedAt: Date | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type ZakatDeclaredItemCountAggregateOutputType = {
    id: number;
    zakatAssessmentRunId: number;
    scheduleType: number;
    description: number;
    amountKobo: number;
    zakatability: number;
    custodyFlag: number;
    verificationTag: number;
    declarationSource: number;
    declaredByUserId: number;
    verifiedByUserId: number;
    verifiedAt: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type ZakatDeclaredItemAvgAggregateInputType = {
    amountKobo?: true;
};
export type ZakatDeclaredItemSumAggregateInputType = {
    amountKobo?: true;
};
export type ZakatDeclaredItemMinAggregateInputType = {
    id?: true;
    zakatAssessmentRunId?: true;
    scheduleType?: true;
    description?: true;
    amountKobo?: true;
    zakatability?: true;
    custodyFlag?: true;
    verificationTag?: true;
    declarationSource?: true;
    declaredByUserId?: true;
    verifiedByUserId?: true;
    verifiedAt?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type ZakatDeclaredItemMaxAggregateInputType = {
    id?: true;
    zakatAssessmentRunId?: true;
    scheduleType?: true;
    description?: true;
    amountKobo?: true;
    zakatability?: true;
    custodyFlag?: true;
    verificationTag?: true;
    declarationSource?: true;
    declaredByUserId?: true;
    verifiedByUserId?: true;
    verifiedAt?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type ZakatDeclaredItemCountAggregateInputType = {
    id?: true;
    zakatAssessmentRunId?: true;
    scheduleType?: true;
    description?: true;
    amountKobo?: true;
    zakatability?: true;
    custodyFlag?: true;
    verificationTag?: true;
    declarationSource?: true;
    declaredByUserId?: true;
    verifiedByUserId?: true;
    verifiedAt?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type ZakatDeclaredItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatDeclaredItemWhereInput;
    orderBy?: Prisma.ZakatDeclaredItemOrderByWithRelationInput | Prisma.ZakatDeclaredItemOrderByWithRelationInput[];
    cursor?: Prisma.ZakatDeclaredItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ZakatDeclaredItemCountAggregateInputType;
    _avg?: ZakatDeclaredItemAvgAggregateInputType;
    _sum?: ZakatDeclaredItemSumAggregateInputType;
    _min?: ZakatDeclaredItemMinAggregateInputType;
    _max?: ZakatDeclaredItemMaxAggregateInputType;
};
export type GetZakatDeclaredItemAggregateType<T extends ZakatDeclaredItemAggregateArgs> = {
    [P in keyof T & keyof AggregateZakatDeclaredItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZakatDeclaredItem[P]> : Prisma.GetScalarType<T[P], AggregateZakatDeclaredItem[P]>;
};
export type ZakatDeclaredItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatDeclaredItemWhereInput;
    orderBy?: Prisma.ZakatDeclaredItemOrderByWithAggregationInput | Prisma.ZakatDeclaredItemOrderByWithAggregationInput[];
    by: Prisma.ZakatDeclaredItemScalarFieldEnum[] | Prisma.ZakatDeclaredItemScalarFieldEnum;
    having?: Prisma.ZakatDeclaredItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZakatDeclaredItemCountAggregateInputType | true;
    _avg?: ZakatDeclaredItemAvgAggregateInputType;
    _sum?: ZakatDeclaredItemSumAggregateInputType;
    _min?: ZakatDeclaredItemMinAggregateInputType;
    _max?: ZakatDeclaredItemMaxAggregateInputType;
};
export type ZakatDeclaredItemGroupByOutputType = {
    id: string;
    zakatAssessmentRunId: string;
    scheduleType: $Enums.ZakatScheduleType;
    description: string;
    amountKobo: bigint;
    zakatability: $Enums.ZakatItemZakatability;
    custodyFlag: $Enums.WmCustodyFlag;
    verificationTag: $Enums.WmVerificationTag;
    declarationSource: $Enums.ZakatDeclarationSource;
    declaredByUserId: string | null;
    verifiedByUserId: string | null;
    verifiedAt: Date | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: ZakatDeclaredItemCountAggregateOutputType | null;
    _avg: ZakatDeclaredItemAvgAggregateOutputType | null;
    _sum: ZakatDeclaredItemSumAggregateOutputType | null;
    _min: ZakatDeclaredItemMinAggregateOutputType | null;
    _max: ZakatDeclaredItemMaxAggregateOutputType | null;
};
export type GetZakatDeclaredItemGroupByPayload<T extends ZakatDeclaredItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZakatDeclaredItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZakatDeclaredItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZakatDeclaredItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZakatDeclaredItemGroupByOutputType[P]>;
}>>;
export type ZakatDeclaredItemWhereInput = {
    AND?: Prisma.ZakatDeclaredItemWhereInput | Prisma.ZakatDeclaredItemWhereInput[];
    OR?: Prisma.ZakatDeclaredItemWhereInput[];
    NOT?: Prisma.ZakatDeclaredItemWhereInput | Prisma.ZakatDeclaredItemWhereInput[];
    id?: Prisma.UuidFilter<"ZakatDeclaredItem"> | string;
    zakatAssessmentRunId?: Prisma.UuidFilter<"ZakatDeclaredItem"> | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFilter<"ZakatDeclaredItem"> | $Enums.ZakatScheduleType;
    description?: Prisma.StringFilter<"ZakatDeclaredItem"> | string;
    amountKobo?: Prisma.BigIntFilter<"ZakatDeclaredItem"> | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFilter<"ZakatDeclaredItem"> | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFilter<"ZakatDeclaredItem"> | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFilter<"ZakatDeclaredItem"> | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFilter<"ZakatDeclaredItem"> | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    verifiedByUserId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"ZakatDeclaredItem"> | Date | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ZakatDeclaredItem"> | Date | string;
    run?: Prisma.XOR<Prisma.ZakatAssessmentRunScalarRelationFilter, Prisma.ZakatAssessmentRunWhereInput>;
};
export type ZakatDeclaredItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    zakatAssessmentRunId?: Prisma.SortOrder;
    scheduleType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    zakatability?: Prisma.SortOrder;
    custodyFlag?: Prisma.SortOrder;
    verificationTag?: Prisma.SortOrder;
    declarationSource?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    run?: Prisma.ZakatAssessmentRunOrderByWithRelationInput;
};
export type ZakatDeclaredItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.ZakatDeclaredItemWhereInput | Prisma.ZakatDeclaredItemWhereInput[];
    OR?: Prisma.ZakatDeclaredItemWhereInput[];
    NOT?: Prisma.ZakatDeclaredItemWhereInput | Prisma.ZakatDeclaredItemWhereInput[];
    zakatAssessmentRunId?: Prisma.UuidFilter<"ZakatDeclaredItem"> | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFilter<"ZakatDeclaredItem"> | $Enums.ZakatScheduleType;
    description?: Prisma.StringFilter<"ZakatDeclaredItem"> | string;
    amountKobo?: Prisma.BigIntFilter<"ZakatDeclaredItem"> | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFilter<"ZakatDeclaredItem"> | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFilter<"ZakatDeclaredItem"> | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFilter<"ZakatDeclaredItem"> | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFilter<"ZakatDeclaredItem"> | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    verifiedByUserId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"ZakatDeclaredItem"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ZakatDeclaredItem"> | Date | string;
    run?: Prisma.XOR<Prisma.ZakatAssessmentRunScalarRelationFilter, Prisma.ZakatAssessmentRunWhereInput>;
}, "id" | "workflowInstanceId">;
export type ZakatDeclaredItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    zakatAssessmentRunId?: Prisma.SortOrder;
    scheduleType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    zakatability?: Prisma.SortOrder;
    custodyFlag?: Prisma.SortOrder;
    verificationTag?: Prisma.SortOrder;
    declarationSource?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ZakatDeclaredItemCountOrderByAggregateInput;
    _avg?: Prisma.ZakatDeclaredItemAvgOrderByAggregateInput;
    _max?: Prisma.ZakatDeclaredItemMaxOrderByAggregateInput;
    _min?: Prisma.ZakatDeclaredItemMinOrderByAggregateInput;
    _sum?: Prisma.ZakatDeclaredItemSumOrderByAggregateInput;
};
export type ZakatDeclaredItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.ZakatDeclaredItemScalarWhereWithAggregatesInput | Prisma.ZakatDeclaredItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.ZakatDeclaredItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ZakatDeclaredItemScalarWhereWithAggregatesInput | Prisma.ZakatDeclaredItemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ZakatDeclaredItem"> | string;
    zakatAssessmentRunId?: Prisma.UuidWithAggregatesFilter<"ZakatDeclaredItem"> | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeWithAggregatesFilter<"ZakatDeclaredItem"> | $Enums.ZakatScheduleType;
    description?: Prisma.StringWithAggregatesFilter<"ZakatDeclaredItem"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"ZakatDeclaredItem"> | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityWithAggregatesFilter<"ZakatDeclaredItem"> | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagWithAggregatesFilter<"ZakatDeclaredItem"> | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagWithAggregatesFilter<"ZakatDeclaredItem"> | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceWithAggregatesFilter<"ZakatDeclaredItem"> | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatDeclaredItem"> | string | null;
    verifiedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatDeclaredItem"> | string | null;
    verifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ZakatDeclaredItem"> | Date | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatDeclaredItem"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ZakatDeclaredItem"> | Date | string;
};
export type ZakatDeclaredItemCreateInput = {
    id?: string;
    scheduleType: $Enums.ZakatScheduleType;
    description: string;
    amountKobo: bigint | number;
    zakatability: $Enums.ZakatItemZakatability;
    custodyFlag: $Enums.WmCustodyFlag;
    verificationTag?: $Enums.WmVerificationTag;
    declarationSource?: $Enums.ZakatDeclarationSource;
    declaredByUserId?: string | null;
    verifiedByUserId?: string | null;
    verifiedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    run: Prisma.ZakatAssessmentRunCreateNestedOneWithoutItemsInput;
};
export type ZakatDeclaredItemUncheckedCreateInput = {
    id?: string;
    zakatAssessmentRunId: string;
    scheduleType: $Enums.ZakatScheduleType;
    description: string;
    amountKobo: bigint | number;
    zakatability: $Enums.ZakatItemZakatability;
    custodyFlag: $Enums.WmCustodyFlag;
    verificationTag?: $Enums.WmVerificationTag;
    declarationSource?: $Enums.ZakatDeclarationSource;
    declaredByUserId?: string | null;
    verifiedByUserId?: string | null;
    verifiedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type ZakatDeclaredItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFieldUpdateOperationsInput | $Enums.ZakatScheduleType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFieldUpdateOperationsInput | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFieldUpdateOperationsInput | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFieldUpdateOperationsInput | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    run?: Prisma.ZakatAssessmentRunUpdateOneRequiredWithoutItemsNestedInput;
};
export type ZakatDeclaredItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zakatAssessmentRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFieldUpdateOperationsInput | $Enums.ZakatScheduleType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFieldUpdateOperationsInput | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFieldUpdateOperationsInput | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFieldUpdateOperationsInput | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatDeclaredItemCreateManyInput = {
    id?: string;
    zakatAssessmentRunId: string;
    scheduleType: $Enums.ZakatScheduleType;
    description: string;
    amountKobo: bigint | number;
    zakatability: $Enums.ZakatItemZakatability;
    custodyFlag: $Enums.WmCustodyFlag;
    verificationTag?: $Enums.WmVerificationTag;
    declarationSource?: $Enums.ZakatDeclarationSource;
    declaredByUserId?: string | null;
    verifiedByUserId?: string | null;
    verifiedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type ZakatDeclaredItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFieldUpdateOperationsInput | $Enums.ZakatScheduleType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFieldUpdateOperationsInput | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFieldUpdateOperationsInput | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFieldUpdateOperationsInput | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatDeclaredItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zakatAssessmentRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFieldUpdateOperationsInput | $Enums.ZakatScheduleType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFieldUpdateOperationsInput | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFieldUpdateOperationsInput | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFieldUpdateOperationsInput | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatDeclaredItemListRelationFilter = {
    every?: Prisma.ZakatDeclaredItemWhereInput;
    some?: Prisma.ZakatDeclaredItemWhereInput;
    none?: Prisma.ZakatDeclaredItemWhereInput;
};
export type ZakatDeclaredItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ZakatDeclaredItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zakatAssessmentRunId?: Prisma.SortOrder;
    scheduleType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    zakatability?: Prisma.SortOrder;
    custodyFlag?: Prisma.SortOrder;
    verificationTag?: Prisma.SortOrder;
    declarationSource?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ZakatDeclaredItemAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type ZakatDeclaredItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zakatAssessmentRunId?: Prisma.SortOrder;
    scheduleType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    zakatability?: Prisma.SortOrder;
    custodyFlag?: Prisma.SortOrder;
    verificationTag?: Prisma.SortOrder;
    declarationSource?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ZakatDeclaredItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zakatAssessmentRunId?: Prisma.SortOrder;
    scheduleType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    zakatability?: Prisma.SortOrder;
    custodyFlag?: Prisma.SortOrder;
    verificationTag?: Prisma.SortOrder;
    declarationSource?: Prisma.SortOrder;
    declaredByUserId?: Prisma.SortOrder;
    verifiedByUserId?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ZakatDeclaredItemSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type ZakatDeclaredItemCreateNestedManyWithoutRunInput = {
    create?: Prisma.XOR<Prisma.ZakatDeclaredItemCreateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput> | Prisma.ZakatDeclaredItemCreateWithoutRunInput[] | Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput | Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput[];
    createMany?: Prisma.ZakatDeclaredItemCreateManyRunInputEnvelope;
    connect?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
};
export type ZakatDeclaredItemUncheckedCreateNestedManyWithoutRunInput = {
    create?: Prisma.XOR<Prisma.ZakatDeclaredItemCreateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput> | Prisma.ZakatDeclaredItemCreateWithoutRunInput[] | Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput | Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput[];
    createMany?: Prisma.ZakatDeclaredItemCreateManyRunInputEnvelope;
    connect?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
};
export type ZakatDeclaredItemUpdateManyWithoutRunNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatDeclaredItemCreateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput> | Prisma.ZakatDeclaredItemCreateWithoutRunInput[] | Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput | Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput[];
    upsert?: Prisma.ZakatDeclaredItemUpsertWithWhereUniqueWithoutRunInput | Prisma.ZakatDeclaredItemUpsertWithWhereUniqueWithoutRunInput[];
    createMany?: Prisma.ZakatDeclaredItemCreateManyRunInputEnvelope;
    set?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    disconnect?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    delete?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    connect?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    update?: Prisma.ZakatDeclaredItemUpdateWithWhereUniqueWithoutRunInput | Prisma.ZakatDeclaredItemUpdateWithWhereUniqueWithoutRunInput[];
    updateMany?: Prisma.ZakatDeclaredItemUpdateManyWithWhereWithoutRunInput | Prisma.ZakatDeclaredItemUpdateManyWithWhereWithoutRunInput[];
    deleteMany?: Prisma.ZakatDeclaredItemScalarWhereInput | Prisma.ZakatDeclaredItemScalarWhereInput[];
};
export type ZakatDeclaredItemUncheckedUpdateManyWithoutRunNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatDeclaredItemCreateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput> | Prisma.ZakatDeclaredItemCreateWithoutRunInput[] | Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput[];
    connectOrCreate?: Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput | Prisma.ZakatDeclaredItemCreateOrConnectWithoutRunInput[];
    upsert?: Prisma.ZakatDeclaredItemUpsertWithWhereUniqueWithoutRunInput | Prisma.ZakatDeclaredItemUpsertWithWhereUniqueWithoutRunInput[];
    createMany?: Prisma.ZakatDeclaredItemCreateManyRunInputEnvelope;
    set?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    disconnect?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    delete?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    connect?: Prisma.ZakatDeclaredItemWhereUniqueInput | Prisma.ZakatDeclaredItemWhereUniqueInput[];
    update?: Prisma.ZakatDeclaredItemUpdateWithWhereUniqueWithoutRunInput | Prisma.ZakatDeclaredItemUpdateWithWhereUniqueWithoutRunInput[];
    updateMany?: Prisma.ZakatDeclaredItemUpdateManyWithWhereWithoutRunInput | Prisma.ZakatDeclaredItemUpdateManyWithWhereWithoutRunInput[];
    deleteMany?: Prisma.ZakatDeclaredItemScalarWhereInput | Prisma.ZakatDeclaredItemScalarWhereInput[];
};
export type EnumZakatScheduleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ZakatScheduleType;
};
export type EnumZakatItemZakatabilityFieldUpdateOperationsInput = {
    set?: $Enums.ZakatItemZakatability;
};
export type EnumZakatDeclarationSourceFieldUpdateOperationsInput = {
    set?: $Enums.ZakatDeclarationSource;
};
export type ZakatDeclaredItemCreateWithoutRunInput = {
    id?: string;
    scheduleType: $Enums.ZakatScheduleType;
    description: string;
    amountKobo: bigint | number;
    zakatability: $Enums.ZakatItemZakatability;
    custodyFlag: $Enums.WmCustodyFlag;
    verificationTag?: $Enums.WmVerificationTag;
    declarationSource?: $Enums.ZakatDeclarationSource;
    declaredByUserId?: string | null;
    verifiedByUserId?: string | null;
    verifiedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type ZakatDeclaredItemUncheckedCreateWithoutRunInput = {
    id?: string;
    scheduleType: $Enums.ZakatScheduleType;
    description: string;
    amountKobo: bigint | number;
    zakatability: $Enums.ZakatItemZakatability;
    custodyFlag: $Enums.WmCustodyFlag;
    verificationTag?: $Enums.WmVerificationTag;
    declarationSource?: $Enums.ZakatDeclarationSource;
    declaredByUserId?: string | null;
    verifiedByUserId?: string | null;
    verifiedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type ZakatDeclaredItemCreateOrConnectWithoutRunInput = {
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatDeclaredItemCreateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput>;
};
export type ZakatDeclaredItemCreateManyRunInputEnvelope = {
    data: Prisma.ZakatDeclaredItemCreateManyRunInput | Prisma.ZakatDeclaredItemCreateManyRunInput[];
    skipDuplicates?: boolean;
};
export type ZakatDeclaredItemUpsertWithWhereUniqueWithoutRunInput = {
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.ZakatDeclaredItemUpdateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedUpdateWithoutRunInput>;
    create: Prisma.XOR<Prisma.ZakatDeclaredItemCreateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedCreateWithoutRunInput>;
};
export type ZakatDeclaredItemUpdateWithWhereUniqueWithoutRunInput = {
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.ZakatDeclaredItemUpdateWithoutRunInput, Prisma.ZakatDeclaredItemUncheckedUpdateWithoutRunInput>;
};
export type ZakatDeclaredItemUpdateManyWithWhereWithoutRunInput = {
    where: Prisma.ZakatDeclaredItemScalarWhereInput;
    data: Prisma.XOR<Prisma.ZakatDeclaredItemUpdateManyMutationInput, Prisma.ZakatDeclaredItemUncheckedUpdateManyWithoutRunInput>;
};
export type ZakatDeclaredItemScalarWhereInput = {
    AND?: Prisma.ZakatDeclaredItemScalarWhereInput | Prisma.ZakatDeclaredItemScalarWhereInput[];
    OR?: Prisma.ZakatDeclaredItemScalarWhereInput[];
    NOT?: Prisma.ZakatDeclaredItemScalarWhereInput | Prisma.ZakatDeclaredItemScalarWhereInput[];
    id?: Prisma.UuidFilter<"ZakatDeclaredItem"> | string;
    zakatAssessmentRunId?: Prisma.UuidFilter<"ZakatDeclaredItem"> | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFilter<"ZakatDeclaredItem"> | $Enums.ZakatScheduleType;
    description?: Prisma.StringFilter<"ZakatDeclaredItem"> | string;
    amountKobo?: Prisma.BigIntFilter<"ZakatDeclaredItem"> | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFilter<"ZakatDeclaredItem"> | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFilter<"ZakatDeclaredItem"> | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFilter<"ZakatDeclaredItem"> | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFilter<"ZakatDeclaredItem"> | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    verifiedByUserId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"ZakatDeclaredItem"> | Date | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"ZakatDeclaredItem"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ZakatDeclaredItem"> | Date | string;
};
export type ZakatDeclaredItemCreateManyRunInput = {
    id?: string;
    scheduleType: $Enums.ZakatScheduleType;
    description: string;
    amountKobo: bigint | number;
    zakatability: $Enums.ZakatItemZakatability;
    custodyFlag: $Enums.WmCustodyFlag;
    verificationTag?: $Enums.WmVerificationTag;
    declarationSource?: $Enums.ZakatDeclarationSource;
    declaredByUserId?: string | null;
    verifiedByUserId?: string | null;
    verifiedAt?: Date | string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type ZakatDeclaredItemUpdateWithoutRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFieldUpdateOperationsInput | $Enums.ZakatScheduleType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFieldUpdateOperationsInput | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFieldUpdateOperationsInput | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFieldUpdateOperationsInput | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatDeclaredItemUncheckedUpdateWithoutRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFieldUpdateOperationsInput | $Enums.ZakatScheduleType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFieldUpdateOperationsInput | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFieldUpdateOperationsInput | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFieldUpdateOperationsInput | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatDeclaredItemUncheckedUpdateManyWithoutRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleType?: Prisma.EnumZakatScheduleTypeFieldUpdateOperationsInput | $Enums.ZakatScheduleType;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    zakatability?: Prisma.EnumZakatItemZakatabilityFieldUpdateOperationsInput | $Enums.ZakatItemZakatability;
    custodyFlag?: Prisma.EnumWmCustodyFlagFieldUpdateOperationsInput | $Enums.WmCustodyFlag;
    verificationTag?: Prisma.EnumWmVerificationTagFieldUpdateOperationsInput | $Enums.WmVerificationTag;
    declarationSource?: Prisma.EnumZakatDeclarationSourceFieldUpdateOperationsInput | $Enums.ZakatDeclarationSource;
    declaredByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ZakatDeclaredItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zakatAssessmentRunId?: boolean;
    scheduleType?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    zakatability?: boolean;
    custodyFlag?: boolean;
    verificationTag?: boolean;
    declarationSource?: boolean;
    declaredByUserId?: boolean;
    verifiedByUserId?: boolean;
    verifiedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    run?: boolean | Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatDeclaredItem"]>;
export type ZakatDeclaredItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zakatAssessmentRunId?: boolean;
    scheduleType?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    zakatability?: boolean;
    custodyFlag?: boolean;
    verificationTag?: boolean;
    declarationSource?: boolean;
    declaredByUserId?: boolean;
    verifiedByUserId?: boolean;
    verifiedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    run?: boolean | Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatDeclaredItem"]>;
export type ZakatDeclaredItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zakatAssessmentRunId?: boolean;
    scheduleType?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    zakatability?: boolean;
    custodyFlag?: boolean;
    verificationTag?: boolean;
    declarationSource?: boolean;
    declaredByUserId?: boolean;
    verifiedByUserId?: boolean;
    verifiedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    run?: boolean | Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatDeclaredItem"]>;
export type ZakatDeclaredItemSelectScalar = {
    id?: boolean;
    zakatAssessmentRunId?: boolean;
    scheduleType?: boolean;
    description?: boolean;
    amountKobo?: boolean;
    zakatability?: boolean;
    custodyFlag?: boolean;
    verificationTag?: boolean;
    declarationSource?: boolean;
    declaredByUserId?: boolean;
    verifiedByUserId?: boolean;
    verifiedAt?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type ZakatDeclaredItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "zakatAssessmentRunId" | "scheduleType" | "description" | "amountKobo" | "zakatability" | "custodyFlag" | "verificationTag" | "declarationSource" | "declaredByUserId" | "verifiedByUserId" | "verifiedAt" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["zakatDeclaredItem"]>;
export type ZakatDeclaredItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    run?: boolean | Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs>;
};
export type ZakatDeclaredItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    run?: boolean | Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs>;
};
export type ZakatDeclaredItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    run?: boolean | Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs>;
};
export type $ZakatDeclaredItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ZakatDeclaredItem";
    objects: {
        run: Prisma.$ZakatAssessmentRunPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        zakatAssessmentRunId: string;
        scheduleType: $Enums.ZakatScheduleType;
        description: string;
        amountKobo: bigint;
        zakatability: $Enums.ZakatItemZakatability;
        custodyFlag: $Enums.WmCustodyFlag;
        verificationTag: $Enums.WmVerificationTag;
        declarationSource: $Enums.ZakatDeclarationSource;
        declaredByUserId: string | null;
        verifiedByUserId: string | null;
        verifiedAt: Date | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["zakatDeclaredItem"]>;
    composites: {};
};
export type ZakatDeclaredItemGetPayload<S extends boolean | null | undefined | ZakatDeclaredItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload, S>;
export type ZakatDeclaredItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ZakatDeclaredItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZakatDeclaredItemCountAggregateInputType | true;
};
export interface ZakatDeclaredItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ZakatDeclaredItem'];
        meta: {
            name: 'ZakatDeclaredItem';
        };
    };
    findUnique<T extends ZakatDeclaredItemFindUniqueArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ZakatDeclaredItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ZakatDeclaredItemFindFirstArgs>(args?: Prisma.SelectSubset<T, ZakatDeclaredItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ZakatDeclaredItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ZakatDeclaredItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ZakatDeclaredItemFindManyArgs>(args?: Prisma.SelectSubset<T, ZakatDeclaredItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ZakatDeclaredItemCreateArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemCreateArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ZakatDeclaredItemCreateManyArgs>(args?: Prisma.SelectSubset<T, ZakatDeclaredItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ZakatDeclaredItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ZakatDeclaredItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ZakatDeclaredItemDeleteArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemDeleteArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ZakatDeclaredItemUpdateArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemUpdateArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ZakatDeclaredItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, ZakatDeclaredItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ZakatDeclaredItemUpdateManyArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ZakatDeclaredItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ZakatDeclaredItemUpsertArgs>(args: Prisma.SelectSubset<T, ZakatDeclaredItemUpsertArgs<ExtArgs>>): Prisma.Prisma__ZakatDeclaredItemClient<runtime.Types.Result.GetResult<Prisma.$ZakatDeclaredItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ZakatDeclaredItemCountArgs>(args?: Prisma.Subset<T, ZakatDeclaredItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZakatDeclaredItemCountAggregateOutputType> : number>;
    aggregate<T extends ZakatDeclaredItemAggregateArgs>(args: Prisma.Subset<T, ZakatDeclaredItemAggregateArgs>): Prisma.PrismaPromise<GetZakatDeclaredItemAggregateType<T>>;
    groupBy<T extends ZakatDeclaredItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ZakatDeclaredItemGroupByArgs['orderBy'];
    } : {
        orderBy?: ZakatDeclaredItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ZakatDeclaredItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZakatDeclaredItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ZakatDeclaredItemFieldRefs;
}
export interface Prisma__ZakatDeclaredItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    run<T extends Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ZakatAssessmentRunDefaultArgs<ExtArgs>>): Prisma.Prisma__ZakatAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ZakatDeclaredItemFieldRefs {
    readonly id: Prisma.FieldRef<"ZakatDeclaredItem", 'String'>;
    readonly zakatAssessmentRunId: Prisma.FieldRef<"ZakatDeclaredItem", 'String'>;
    readonly scheduleType: Prisma.FieldRef<"ZakatDeclaredItem", 'ZakatScheduleType'>;
    readonly description: Prisma.FieldRef<"ZakatDeclaredItem", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"ZakatDeclaredItem", 'BigInt'>;
    readonly zakatability: Prisma.FieldRef<"ZakatDeclaredItem", 'ZakatItemZakatability'>;
    readonly custodyFlag: Prisma.FieldRef<"ZakatDeclaredItem", 'WmCustodyFlag'>;
    readonly verificationTag: Prisma.FieldRef<"ZakatDeclaredItem", 'WmVerificationTag'>;
    readonly declarationSource: Prisma.FieldRef<"ZakatDeclaredItem", 'ZakatDeclarationSource'>;
    readonly declaredByUserId: Prisma.FieldRef<"ZakatDeclaredItem", 'String'>;
    readonly verifiedByUserId: Prisma.FieldRef<"ZakatDeclaredItem", 'String'>;
    readonly verifiedAt: Prisma.FieldRef<"ZakatDeclaredItem", 'DateTime'>;
    readonly workflowInstanceId: Prisma.FieldRef<"ZakatDeclaredItem", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ZakatDeclaredItem", 'DateTime'>;
}
export type ZakatDeclaredItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
};
export type ZakatDeclaredItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
};
export type ZakatDeclaredItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where?: Prisma.ZakatDeclaredItemWhereInput;
    orderBy?: Prisma.ZakatDeclaredItemOrderByWithRelationInput | Prisma.ZakatDeclaredItemOrderByWithRelationInput[];
    cursor?: Prisma.ZakatDeclaredItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatDeclaredItemScalarFieldEnum | Prisma.ZakatDeclaredItemScalarFieldEnum[];
};
export type ZakatDeclaredItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where?: Prisma.ZakatDeclaredItemWhereInput;
    orderBy?: Prisma.ZakatDeclaredItemOrderByWithRelationInput | Prisma.ZakatDeclaredItemOrderByWithRelationInput[];
    cursor?: Prisma.ZakatDeclaredItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatDeclaredItemScalarFieldEnum | Prisma.ZakatDeclaredItemScalarFieldEnum[];
};
export type ZakatDeclaredItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where?: Prisma.ZakatDeclaredItemWhereInput;
    orderBy?: Prisma.ZakatDeclaredItemOrderByWithRelationInput | Prisma.ZakatDeclaredItemOrderByWithRelationInput[];
    cursor?: Prisma.ZakatDeclaredItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatDeclaredItemScalarFieldEnum | Prisma.ZakatDeclaredItemScalarFieldEnum[];
};
export type ZakatDeclaredItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatDeclaredItemCreateInput, Prisma.ZakatDeclaredItemUncheckedCreateInput>;
};
export type ZakatDeclaredItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ZakatDeclaredItemCreateManyInput | Prisma.ZakatDeclaredItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ZakatDeclaredItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    data: Prisma.ZakatDeclaredItemCreateManyInput | Prisma.ZakatDeclaredItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ZakatDeclaredItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ZakatDeclaredItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatDeclaredItemUpdateInput, Prisma.ZakatDeclaredItemUncheckedUpdateInput>;
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
};
export type ZakatDeclaredItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ZakatDeclaredItemUpdateManyMutationInput, Prisma.ZakatDeclaredItemUncheckedUpdateManyInput>;
    where?: Prisma.ZakatDeclaredItemWhereInput;
    limit?: number;
};
export type ZakatDeclaredItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatDeclaredItemUpdateManyMutationInput, Prisma.ZakatDeclaredItemUncheckedUpdateManyInput>;
    where?: Prisma.ZakatDeclaredItemWhereInput;
    limit?: number;
    include?: Prisma.ZakatDeclaredItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ZakatDeclaredItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatDeclaredItemCreateInput, Prisma.ZakatDeclaredItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ZakatDeclaredItemUpdateInput, Prisma.ZakatDeclaredItemUncheckedUpdateInput>;
};
export type ZakatDeclaredItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
    where: Prisma.ZakatDeclaredItemWhereUniqueInput;
};
export type ZakatDeclaredItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatDeclaredItemWhereInput;
    limit?: number;
};
export type ZakatDeclaredItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatDeclaredItemSelect<ExtArgs> | null;
    omit?: Prisma.ZakatDeclaredItemOmit<ExtArgs> | null;
    include?: Prisma.ZakatDeclaredItemInclude<ExtArgs> | null;
};
