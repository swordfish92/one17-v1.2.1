import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KriDefinitionModel = runtime.Types.Result.DefaultSelection<Prisma.$KriDefinitionPayload>;
export type AggregateKriDefinition = {
    _count: KriDefinitionCountAggregateOutputType | null;
    _min: KriDefinitionMinAggregateOutputType | null;
    _max: KriDefinitionMaxAggregateOutputType | null;
};
export type KriDefinitionMinAggregateOutputType = {
    code: string | null;
    name: string | null;
    category: string | null;
    direction: $Enums.RiskAppetiteDirection | null;
    isZeroTolerance: boolean | null;
    riskAppetiteCategoryRef: string | null;
    computeStatus: $Enums.KriComputeStatus | null;
    notes: string | null;
    createdAt: Date | null;
};
export type KriDefinitionMaxAggregateOutputType = {
    code: string | null;
    name: string | null;
    category: string | null;
    direction: $Enums.RiskAppetiteDirection | null;
    isZeroTolerance: boolean | null;
    riskAppetiteCategoryRef: string | null;
    computeStatus: $Enums.KriComputeStatus | null;
    notes: string | null;
    createdAt: Date | null;
};
export type KriDefinitionCountAggregateOutputType = {
    code: number;
    name: number;
    category: number;
    direction: number;
    isZeroTolerance: number;
    riskAppetiteCategoryRef: number;
    computeStatus: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type KriDefinitionMinAggregateInputType = {
    code?: true;
    name?: true;
    category?: true;
    direction?: true;
    isZeroTolerance?: true;
    riskAppetiteCategoryRef?: true;
    computeStatus?: true;
    notes?: true;
    createdAt?: true;
};
export type KriDefinitionMaxAggregateInputType = {
    code?: true;
    name?: true;
    category?: true;
    direction?: true;
    isZeroTolerance?: true;
    riskAppetiteCategoryRef?: true;
    computeStatus?: true;
    notes?: true;
    createdAt?: true;
};
export type KriDefinitionCountAggregateInputType = {
    code?: true;
    name?: true;
    category?: true;
    direction?: true;
    isZeroTolerance?: true;
    riskAppetiteCategoryRef?: true;
    computeStatus?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type KriDefinitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriDefinitionWhereInput;
    orderBy?: Prisma.KriDefinitionOrderByWithRelationInput | Prisma.KriDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KriDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KriDefinitionCountAggregateInputType;
    _min?: KriDefinitionMinAggregateInputType;
    _max?: KriDefinitionMaxAggregateInputType;
};
export type GetKriDefinitionAggregateType<T extends KriDefinitionAggregateArgs> = {
    [P in keyof T & keyof AggregateKriDefinition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKriDefinition[P]> : Prisma.GetScalarType<T[P], AggregateKriDefinition[P]>;
};
export type KriDefinitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriDefinitionWhereInput;
    orderBy?: Prisma.KriDefinitionOrderByWithAggregationInput | Prisma.KriDefinitionOrderByWithAggregationInput[];
    by: Prisma.KriDefinitionScalarFieldEnum[] | Prisma.KriDefinitionScalarFieldEnum;
    having?: Prisma.KriDefinitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KriDefinitionCountAggregateInputType | true;
    _min?: KriDefinitionMinAggregateInputType;
    _max?: KriDefinitionMaxAggregateInputType;
};
export type KriDefinitionGroupByOutputType = {
    code: string;
    name: string;
    category: string;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance: boolean;
    riskAppetiteCategoryRef: string | null;
    computeStatus: $Enums.KriComputeStatus;
    notes: string | null;
    createdAt: Date;
    _count: KriDefinitionCountAggregateOutputType | null;
    _min: KriDefinitionMinAggregateOutputType | null;
    _max: KriDefinitionMaxAggregateOutputType | null;
};
export type GetKriDefinitionGroupByPayload<T extends KriDefinitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KriDefinitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KriDefinitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KriDefinitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KriDefinitionGroupByOutputType[P]>;
}>>;
export type KriDefinitionWhereInput = {
    AND?: Prisma.KriDefinitionWhereInput | Prisma.KriDefinitionWhereInput[];
    OR?: Prisma.KriDefinitionWhereInput[];
    NOT?: Prisma.KriDefinitionWhereInput | Prisma.KriDefinitionWhereInput[];
    code?: Prisma.StringFilter<"KriDefinition"> | string;
    name?: Prisma.StringFilter<"KriDefinition"> | string;
    category?: Prisma.StringFilter<"KriDefinition"> | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFilter<"KriDefinition"> | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFilter<"KriDefinition"> | boolean;
    riskAppetiteCategoryRef?: Prisma.StringNullableFilter<"KriDefinition"> | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFilter<"KriDefinition"> | $Enums.KriComputeStatus;
    notes?: Prisma.StringNullableFilter<"KriDefinition"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KriDefinition"> | Date | string;
    readings?: Prisma.KriReadingListRelationFilter;
};
export type KriDefinitionOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    riskAppetiteCategoryRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    computeStatus?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    readings?: Prisma.KriReadingOrderByRelationAggregateInput;
};
export type KriDefinitionWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.KriDefinitionWhereInput | Prisma.KriDefinitionWhereInput[];
    OR?: Prisma.KriDefinitionWhereInput[];
    NOT?: Prisma.KriDefinitionWhereInput | Prisma.KriDefinitionWhereInput[];
    name?: Prisma.StringFilter<"KriDefinition"> | string;
    category?: Prisma.StringFilter<"KriDefinition"> | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFilter<"KriDefinition"> | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFilter<"KriDefinition"> | boolean;
    riskAppetiteCategoryRef?: Prisma.StringNullableFilter<"KriDefinition"> | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFilter<"KriDefinition"> | $Enums.KriComputeStatus;
    notes?: Prisma.StringNullableFilter<"KriDefinition"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KriDefinition"> | Date | string;
    readings?: Prisma.KriReadingListRelationFilter;
}, "code">;
export type KriDefinitionOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    riskAppetiteCategoryRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    computeStatus?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KriDefinitionCountOrderByAggregateInput;
    _max?: Prisma.KriDefinitionMaxOrderByAggregateInput;
    _min?: Prisma.KriDefinitionMinOrderByAggregateInput;
};
export type KriDefinitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.KriDefinitionScalarWhereWithAggregatesInput | Prisma.KriDefinitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.KriDefinitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KriDefinitionScalarWhereWithAggregatesInput | Prisma.KriDefinitionScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"KriDefinition"> | string;
    name?: Prisma.StringWithAggregatesFilter<"KriDefinition"> | string;
    category?: Prisma.StringWithAggregatesFilter<"KriDefinition"> | string;
    direction?: Prisma.EnumRiskAppetiteDirectionWithAggregatesFilter<"KriDefinition"> | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolWithAggregatesFilter<"KriDefinition"> | boolean;
    riskAppetiteCategoryRef?: Prisma.StringNullableWithAggregatesFilter<"KriDefinition"> | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusWithAggregatesFilter<"KriDefinition"> | $Enums.KriComputeStatus;
    notes?: Prisma.StringNullableWithAggregatesFilter<"KriDefinition"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KriDefinition"> | Date | string;
};
export type KriDefinitionCreateInput = {
    code: string;
    name: string;
    category: string;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: string | null;
    computeStatus?: $Enums.KriComputeStatus;
    notes?: string | null;
    createdAt?: Date | string;
    readings?: Prisma.KriReadingCreateNestedManyWithoutDefinitionInput;
};
export type KriDefinitionUncheckedCreateInput = {
    code: string;
    name: string;
    category: string;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: string | null;
    computeStatus?: $Enums.KriComputeStatus;
    notes?: string | null;
    createdAt?: Date | string;
    readings?: Prisma.KriReadingUncheckedCreateNestedManyWithoutDefinitionInput;
};
export type KriDefinitionUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    riskAppetiteCategoryRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFieldUpdateOperationsInput | $Enums.KriComputeStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: Prisma.KriReadingUpdateManyWithoutDefinitionNestedInput;
};
export type KriDefinitionUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    riskAppetiteCategoryRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFieldUpdateOperationsInput | $Enums.KriComputeStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readings?: Prisma.KriReadingUncheckedUpdateManyWithoutDefinitionNestedInput;
};
export type KriDefinitionCreateManyInput = {
    code: string;
    name: string;
    category: string;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: string | null;
    computeStatus?: $Enums.KriComputeStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type KriDefinitionUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    riskAppetiteCategoryRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFieldUpdateOperationsInput | $Enums.KriComputeStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriDefinitionUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    riskAppetiteCategoryRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFieldUpdateOperationsInput | $Enums.KriComputeStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriDefinitionCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    riskAppetiteCategoryRef?: Prisma.SortOrder;
    computeStatus?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KriDefinitionMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    riskAppetiteCategoryRef?: Prisma.SortOrder;
    computeStatus?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KriDefinitionMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isZeroTolerance?: Prisma.SortOrder;
    riskAppetiteCategoryRef?: Prisma.SortOrder;
    computeStatus?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KriDefinitionScalarRelationFilter = {
    is?: Prisma.KriDefinitionWhereInput;
    isNot?: Prisma.KriDefinitionWhereInput;
};
export type EnumKriComputeStatusFieldUpdateOperationsInput = {
    set?: $Enums.KriComputeStatus;
};
export type KriDefinitionCreateNestedOneWithoutReadingsInput = {
    create?: Prisma.XOR<Prisma.KriDefinitionCreateWithoutReadingsInput, Prisma.KriDefinitionUncheckedCreateWithoutReadingsInput>;
    connectOrCreate?: Prisma.KriDefinitionCreateOrConnectWithoutReadingsInput;
    connect?: Prisma.KriDefinitionWhereUniqueInput;
};
export type KriDefinitionUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: Prisma.XOR<Prisma.KriDefinitionCreateWithoutReadingsInput, Prisma.KriDefinitionUncheckedCreateWithoutReadingsInput>;
    connectOrCreate?: Prisma.KriDefinitionCreateOrConnectWithoutReadingsInput;
    upsert?: Prisma.KriDefinitionUpsertWithoutReadingsInput;
    connect?: Prisma.KriDefinitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KriDefinitionUpdateToOneWithWhereWithoutReadingsInput, Prisma.KriDefinitionUpdateWithoutReadingsInput>, Prisma.KriDefinitionUncheckedUpdateWithoutReadingsInput>;
};
export type KriDefinitionCreateWithoutReadingsInput = {
    code: string;
    name: string;
    category: string;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: string | null;
    computeStatus?: $Enums.KriComputeStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type KriDefinitionUncheckedCreateWithoutReadingsInput = {
    code: string;
    name: string;
    category: string;
    direction: $Enums.RiskAppetiteDirection;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: string | null;
    computeStatus?: $Enums.KriComputeStatus;
    notes?: string | null;
    createdAt?: Date | string;
};
export type KriDefinitionCreateOrConnectWithoutReadingsInput = {
    where: Prisma.KriDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KriDefinitionCreateWithoutReadingsInput, Prisma.KriDefinitionUncheckedCreateWithoutReadingsInput>;
};
export type KriDefinitionUpsertWithoutReadingsInput = {
    update: Prisma.XOR<Prisma.KriDefinitionUpdateWithoutReadingsInput, Prisma.KriDefinitionUncheckedUpdateWithoutReadingsInput>;
    create: Prisma.XOR<Prisma.KriDefinitionCreateWithoutReadingsInput, Prisma.KriDefinitionUncheckedCreateWithoutReadingsInput>;
    where?: Prisma.KriDefinitionWhereInput;
};
export type KriDefinitionUpdateToOneWithWhereWithoutReadingsInput = {
    where?: Prisma.KriDefinitionWhereInput;
    data: Prisma.XOR<Prisma.KriDefinitionUpdateWithoutReadingsInput, Prisma.KriDefinitionUncheckedUpdateWithoutReadingsInput>;
};
export type KriDefinitionUpdateWithoutReadingsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    riskAppetiteCategoryRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFieldUpdateOperationsInput | $Enums.KriComputeStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriDefinitionUncheckedUpdateWithoutReadingsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    direction?: Prisma.EnumRiskAppetiteDirectionFieldUpdateOperationsInput | $Enums.RiskAppetiteDirection;
    isZeroTolerance?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    riskAppetiteCategoryRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    computeStatus?: Prisma.EnumKriComputeStatusFieldUpdateOperationsInput | $Enums.KriComputeStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriDefinitionCountOutputType = {
    readings: number;
};
export type KriDefinitionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    readings?: boolean | KriDefinitionCountOutputTypeCountReadingsArgs;
};
export type KriDefinitionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionCountOutputTypeSelect<ExtArgs> | null;
};
export type KriDefinitionCountOutputTypeCountReadingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriReadingWhereInput;
};
export type KriDefinitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    category?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: boolean;
    computeStatus?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    readings?: boolean | Prisma.KriDefinition$readingsArgs<ExtArgs>;
    _count?: boolean | Prisma.KriDefinitionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kriDefinition"]>;
export type KriDefinitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    category?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: boolean;
    computeStatus?: boolean;
    notes?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["kriDefinition"]>;
export type KriDefinitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    category?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: boolean;
    computeStatus?: boolean;
    notes?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["kriDefinition"]>;
export type KriDefinitionSelectScalar = {
    code?: boolean;
    name?: boolean;
    category?: boolean;
    direction?: boolean;
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: boolean;
    computeStatus?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type KriDefinitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "name" | "category" | "direction" | "isZeroTolerance" | "riskAppetiteCategoryRef" | "computeStatus" | "notes" | "createdAt", ExtArgs["result"]["kriDefinition"]>;
export type KriDefinitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    readings?: boolean | Prisma.KriDefinition$readingsArgs<ExtArgs>;
    _count?: boolean | Prisma.KriDefinitionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type KriDefinitionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type KriDefinitionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $KriDefinitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KriDefinition";
    objects: {
        readings: Prisma.$KriReadingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        name: string;
        category: string;
        direction: $Enums.RiskAppetiteDirection;
        isZeroTolerance: boolean;
        riskAppetiteCategoryRef: string | null;
        computeStatus: $Enums.KriComputeStatus;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["kriDefinition"]>;
    composites: {};
};
export type KriDefinitionGetPayload<S extends boolean | null | undefined | KriDefinitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload, S>;
export type KriDefinitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KriDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KriDefinitionCountAggregateInputType | true;
};
export interface KriDefinitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KriDefinition'];
        meta: {
            name: 'KriDefinition';
        };
    };
    findUnique<T extends KriDefinitionFindUniqueArgs>(args: Prisma.SelectSubset<T, KriDefinitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KriDefinitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KriDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KriDefinitionFindFirstArgs>(args?: Prisma.SelectSubset<T, KriDefinitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KriDefinitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KriDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KriDefinitionFindManyArgs>(args?: Prisma.SelectSubset<T, KriDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KriDefinitionCreateArgs>(args: Prisma.SelectSubset<T, KriDefinitionCreateArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KriDefinitionCreateManyArgs>(args?: Prisma.SelectSubset<T, KriDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KriDefinitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KriDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KriDefinitionDeleteArgs>(args: Prisma.SelectSubset<T, KriDefinitionDeleteArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KriDefinitionUpdateArgs>(args: Prisma.SelectSubset<T, KriDefinitionUpdateArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KriDefinitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, KriDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KriDefinitionUpdateManyArgs>(args: Prisma.SelectSubset<T, KriDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KriDefinitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KriDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KriDefinitionUpsertArgs>(args: Prisma.SelectSubset<T, KriDefinitionUpsertArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KriDefinitionCountArgs>(args?: Prisma.Subset<T, KriDefinitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KriDefinitionCountAggregateOutputType> : number>;
    aggregate<T extends KriDefinitionAggregateArgs>(args: Prisma.Subset<T, KriDefinitionAggregateArgs>): Prisma.PrismaPromise<GetKriDefinitionAggregateType<T>>;
    groupBy<T extends KriDefinitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KriDefinitionGroupByArgs['orderBy'];
    } : {
        orderBy?: KriDefinitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KriDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKriDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KriDefinitionFieldRefs;
}
export interface Prisma__KriDefinitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    readings<T extends Prisma.KriDefinition$readingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KriDefinition$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KriDefinitionFieldRefs {
    readonly code: Prisma.FieldRef<"KriDefinition", 'String'>;
    readonly name: Prisma.FieldRef<"KriDefinition", 'String'>;
    readonly category: Prisma.FieldRef<"KriDefinition", 'String'>;
    readonly direction: Prisma.FieldRef<"KriDefinition", 'RiskAppetiteDirection'>;
    readonly isZeroTolerance: Prisma.FieldRef<"KriDefinition", 'Boolean'>;
    readonly riskAppetiteCategoryRef: Prisma.FieldRef<"KriDefinition", 'String'>;
    readonly computeStatus: Prisma.FieldRef<"KriDefinition", 'KriComputeStatus'>;
    readonly notes: Prisma.FieldRef<"KriDefinition", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KriDefinition", 'DateTime'>;
}
export type KriDefinitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    where: Prisma.KriDefinitionWhereUniqueInput;
};
export type KriDefinitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    where: Prisma.KriDefinitionWhereUniqueInput;
};
export type KriDefinitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    where?: Prisma.KriDefinitionWhereInput;
    orderBy?: Prisma.KriDefinitionOrderByWithRelationInput | Prisma.KriDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KriDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriDefinitionScalarFieldEnum | Prisma.KriDefinitionScalarFieldEnum[];
};
export type KriDefinitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    where?: Prisma.KriDefinitionWhereInput;
    orderBy?: Prisma.KriDefinitionOrderByWithRelationInput | Prisma.KriDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KriDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriDefinitionScalarFieldEnum | Prisma.KriDefinitionScalarFieldEnum[];
};
export type KriDefinitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    where?: Prisma.KriDefinitionWhereInput;
    orderBy?: Prisma.KriDefinitionOrderByWithRelationInput | Prisma.KriDefinitionOrderByWithRelationInput[];
    cursor?: Prisma.KriDefinitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriDefinitionScalarFieldEnum | Prisma.KriDefinitionScalarFieldEnum[];
};
export type KriDefinitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriDefinitionCreateInput, Prisma.KriDefinitionUncheckedCreateInput>;
};
export type KriDefinitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KriDefinitionCreateManyInput | Prisma.KriDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KriDefinitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    data: Prisma.KriDefinitionCreateManyInput | Prisma.KriDefinitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KriDefinitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriDefinitionUpdateInput, Prisma.KriDefinitionUncheckedUpdateInput>;
    where: Prisma.KriDefinitionWhereUniqueInput;
};
export type KriDefinitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KriDefinitionUpdateManyMutationInput, Prisma.KriDefinitionUncheckedUpdateManyInput>;
    where?: Prisma.KriDefinitionWhereInput;
    limit?: number;
};
export type KriDefinitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriDefinitionUpdateManyMutationInput, Prisma.KriDefinitionUncheckedUpdateManyInput>;
    where?: Prisma.KriDefinitionWhereInput;
    limit?: number;
};
export type KriDefinitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    where: Prisma.KriDefinitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KriDefinitionCreateInput, Prisma.KriDefinitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KriDefinitionUpdateInput, Prisma.KriDefinitionUncheckedUpdateInput>;
};
export type KriDefinitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
    where: Prisma.KriDefinitionWhereUniqueInput;
};
export type KriDefinitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriDefinitionWhereInput;
    limit?: number;
};
export type KriDefinition$readingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where?: Prisma.KriReadingWhereInput;
    orderBy?: Prisma.KriReadingOrderByWithRelationInput | Prisma.KriReadingOrderByWithRelationInput[];
    cursor?: Prisma.KriReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriReadingScalarFieldEnum | Prisma.KriReadingScalarFieldEnum[];
};
export type KriDefinitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriDefinitionSelect<ExtArgs> | null;
    omit?: Prisma.KriDefinitionOmit<ExtArgs> | null;
    include?: Prisma.KriDefinitionInclude<ExtArgs> | null;
};
