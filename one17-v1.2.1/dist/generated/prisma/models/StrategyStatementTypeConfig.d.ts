import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StrategyStatementTypeConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$StrategyStatementTypeConfigPayload>;
export type AggregateStrategyStatementTypeConfig = {
    _count: StrategyStatementTypeConfigCountAggregateOutputType | null;
    _avg: StrategyStatementTypeConfigAvgAggregateOutputType | null;
    _sum: StrategyStatementTypeConfigSumAggregateOutputType | null;
    _min: StrategyStatementTypeConfigMinAggregateOutputType | null;
    _max: StrategyStatementTypeConfigMaxAggregateOutputType | null;
};
export type StrategyStatementTypeConfigAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type StrategyStatementTypeConfigSumAggregateOutputType = {
    sortOrder: number | null;
};
export type StrategyStatementTypeConfigMinAggregateOutputType = {
    code: string | null;
    label: string | null;
    description: string | null;
    allowsMultipleActive: boolean | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type StrategyStatementTypeConfigMaxAggregateOutputType = {
    code: string | null;
    label: string | null;
    description: string | null;
    allowsMultipleActive: boolean | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type StrategyStatementTypeConfigCountAggregateOutputType = {
    code: number;
    label: number;
    description: number;
    allowsMultipleActive: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type StrategyStatementTypeConfigAvgAggregateInputType = {
    sortOrder?: true;
};
export type StrategyStatementTypeConfigSumAggregateInputType = {
    sortOrder?: true;
};
export type StrategyStatementTypeConfigMinAggregateInputType = {
    code?: true;
    label?: true;
    description?: true;
    allowsMultipleActive?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type StrategyStatementTypeConfigMaxAggregateInputType = {
    code?: true;
    label?: true;
    description?: true;
    allowsMultipleActive?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
};
export type StrategyStatementTypeConfigCountAggregateInputType = {
    code?: true;
    label?: true;
    description?: true;
    allowsMultipleActive?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type StrategyStatementTypeConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    orderBy?: Prisma.StrategyStatementTypeConfigOrderByWithRelationInput | Prisma.StrategyStatementTypeConfigOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StrategyStatementTypeConfigCountAggregateInputType;
    _avg?: StrategyStatementTypeConfigAvgAggregateInputType;
    _sum?: StrategyStatementTypeConfigSumAggregateInputType;
    _min?: StrategyStatementTypeConfigMinAggregateInputType;
    _max?: StrategyStatementTypeConfigMaxAggregateInputType;
};
export type GetStrategyStatementTypeConfigAggregateType<T extends StrategyStatementTypeConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateStrategyStatementTypeConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStrategyStatementTypeConfig[P]> : Prisma.GetScalarType<T[P], AggregateStrategyStatementTypeConfig[P]>;
};
export type StrategyStatementTypeConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    orderBy?: Prisma.StrategyStatementTypeConfigOrderByWithAggregationInput | Prisma.StrategyStatementTypeConfigOrderByWithAggregationInput[];
    by: Prisma.StrategyStatementTypeConfigScalarFieldEnum[] | Prisma.StrategyStatementTypeConfigScalarFieldEnum;
    having?: Prisma.StrategyStatementTypeConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StrategyStatementTypeConfigCountAggregateInputType | true;
    _avg?: StrategyStatementTypeConfigAvgAggregateInputType;
    _sum?: StrategyStatementTypeConfigSumAggregateInputType;
    _min?: StrategyStatementTypeConfigMinAggregateInputType;
    _max?: StrategyStatementTypeConfigMaxAggregateInputType;
};
export type StrategyStatementTypeConfigGroupByOutputType = {
    code: string;
    label: string;
    description: string | null;
    allowsMultipleActive: boolean;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    _count: StrategyStatementTypeConfigCountAggregateOutputType | null;
    _avg: StrategyStatementTypeConfigAvgAggregateOutputType | null;
    _sum: StrategyStatementTypeConfigSumAggregateOutputType | null;
    _min: StrategyStatementTypeConfigMinAggregateOutputType | null;
    _max: StrategyStatementTypeConfigMaxAggregateOutputType | null;
};
export type GetStrategyStatementTypeConfigGroupByPayload<T extends StrategyStatementTypeConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StrategyStatementTypeConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StrategyStatementTypeConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StrategyStatementTypeConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StrategyStatementTypeConfigGroupByOutputType[P]>;
}>>;
export type StrategyStatementTypeConfigWhereInput = {
    AND?: Prisma.StrategyStatementTypeConfigWhereInput | Prisma.StrategyStatementTypeConfigWhereInput[];
    OR?: Prisma.StrategyStatementTypeConfigWhereInput[];
    NOT?: Prisma.StrategyStatementTypeConfigWhereInput | Prisma.StrategyStatementTypeConfigWhereInput[];
    code?: Prisma.StringFilter<"StrategyStatementTypeConfig"> | string;
    label?: Prisma.StringFilter<"StrategyStatementTypeConfig"> | string;
    description?: Prisma.StringNullableFilter<"StrategyStatementTypeConfig"> | string | null;
    allowsMultipleActive?: Prisma.BoolFilter<"StrategyStatementTypeConfig"> | boolean;
    sortOrder?: Prisma.IntFilter<"StrategyStatementTypeConfig"> | number;
    isActive?: Prisma.BoolFilter<"StrategyStatementTypeConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StrategyStatementTypeConfig"> | Date | string;
    statements?: Prisma.StrategyStatementListRelationFilter;
};
export type StrategyStatementTypeConfigOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowsMultipleActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    statements?: Prisma.StrategyStatementOrderByRelationAggregateInput;
};
export type StrategyStatementTypeConfigWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.StrategyStatementTypeConfigWhereInput | Prisma.StrategyStatementTypeConfigWhereInput[];
    OR?: Prisma.StrategyStatementTypeConfigWhereInput[];
    NOT?: Prisma.StrategyStatementTypeConfigWhereInput | Prisma.StrategyStatementTypeConfigWhereInput[];
    label?: Prisma.StringFilter<"StrategyStatementTypeConfig"> | string;
    description?: Prisma.StringNullableFilter<"StrategyStatementTypeConfig"> | string | null;
    allowsMultipleActive?: Prisma.BoolFilter<"StrategyStatementTypeConfig"> | boolean;
    sortOrder?: Prisma.IntFilter<"StrategyStatementTypeConfig"> | number;
    isActive?: Prisma.BoolFilter<"StrategyStatementTypeConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StrategyStatementTypeConfig"> | Date | string;
    statements?: Prisma.StrategyStatementListRelationFilter;
}, "code">;
export type StrategyStatementTypeConfigOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowsMultipleActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StrategyStatementTypeConfigCountOrderByAggregateInput;
    _avg?: Prisma.StrategyStatementTypeConfigAvgOrderByAggregateInput;
    _max?: Prisma.StrategyStatementTypeConfigMaxOrderByAggregateInput;
    _min?: Prisma.StrategyStatementTypeConfigMinOrderByAggregateInput;
    _sum?: Prisma.StrategyStatementTypeConfigSumOrderByAggregateInput;
};
export type StrategyStatementTypeConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.StrategyStatementTypeConfigScalarWhereWithAggregatesInput | Prisma.StrategyStatementTypeConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.StrategyStatementTypeConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StrategyStatementTypeConfigScalarWhereWithAggregatesInput | Prisma.StrategyStatementTypeConfigScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"StrategyStatementTypeConfig"> | string;
    label?: Prisma.StringWithAggregatesFilter<"StrategyStatementTypeConfig"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"StrategyStatementTypeConfig"> | string | null;
    allowsMultipleActive?: Prisma.BoolWithAggregatesFilter<"StrategyStatementTypeConfig"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"StrategyStatementTypeConfig"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"StrategyStatementTypeConfig"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StrategyStatementTypeConfig"> | Date | string;
};
export type StrategyStatementTypeConfigCreateInput = {
    code: string;
    label: string;
    description?: string | null;
    allowsMultipleActive?: boolean;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    statements?: Prisma.StrategyStatementCreateNestedManyWithoutStatementTypeInput;
};
export type StrategyStatementTypeConfigUncheckedCreateInput = {
    code: string;
    label: string;
    description?: string | null;
    allowsMultipleActive?: boolean;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    statements?: Prisma.StrategyStatementUncheckedCreateNestedManyWithoutStatementTypeInput;
};
export type StrategyStatementTypeConfigUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowsMultipleActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statements?: Prisma.StrategyStatementUpdateManyWithoutStatementTypeNestedInput;
};
export type StrategyStatementTypeConfigUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowsMultipleActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statements?: Prisma.StrategyStatementUncheckedUpdateManyWithoutStatementTypeNestedInput;
};
export type StrategyStatementTypeConfigCreateManyInput = {
    code: string;
    label: string;
    description?: string | null;
    allowsMultipleActive?: boolean;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type StrategyStatementTypeConfigUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowsMultipleActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementTypeConfigUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowsMultipleActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementTypeConfigCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    allowsMultipleActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StrategyStatementTypeConfigAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type StrategyStatementTypeConfigMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    allowsMultipleActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StrategyStatementTypeConfigMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    allowsMultipleActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StrategyStatementTypeConfigSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type StrategyStatementTypeConfigScalarRelationFilter = {
    is?: Prisma.StrategyStatementTypeConfigWhereInput;
    isNot?: Prisma.StrategyStatementTypeConfigWhereInput;
};
export type StrategyStatementTypeConfigCreateNestedOneWithoutStatementsInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementTypeConfigCreateWithoutStatementsInput, Prisma.StrategyStatementTypeConfigUncheckedCreateWithoutStatementsInput>;
    connectOrCreate?: Prisma.StrategyStatementTypeConfigCreateOrConnectWithoutStatementsInput;
    connect?: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
};
export type StrategyStatementTypeConfigUpdateOneRequiredWithoutStatementsNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementTypeConfigCreateWithoutStatementsInput, Prisma.StrategyStatementTypeConfigUncheckedCreateWithoutStatementsInput>;
    connectOrCreate?: Prisma.StrategyStatementTypeConfigCreateOrConnectWithoutStatementsInput;
    upsert?: Prisma.StrategyStatementTypeConfigUpsertWithoutStatementsInput;
    connect?: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StrategyStatementTypeConfigUpdateToOneWithWhereWithoutStatementsInput, Prisma.StrategyStatementTypeConfigUpdateWithoutStatementsInput>, Prisma.StrategyStatementTypeConfigUncheckedUpdateWithoutStatementsInput>;
};
export type StrategyStatementTypeConfigCreateWithoutStatementsInput = {
    code: string;
    label: string;
    description?: string | null;
    allowsMultipleActive?: boolean;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type StrategyStatementTypeConfigUncheckedCreateWithoutStatementsInput = {
    code: string;
    label: string;
    description?: string | null;
    allowsMultipleActive?: boolean;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type StrategyStatementTypeConfigCreateOrConnectWithoutStatementsInput = {
    where: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyStatementTypeConfigCreateWithoutStatementsInput, Prisma.StrategyStatementTypeConfigUncheckedCreateWithoutStatementsInput>;
};
export type StrategyStatementTypeConfigUpsertWithoutStatementsInput = {
    update: Prisma.XOR<Prisma.StrategyStatementTypeConfigUpdateWithoutStatementsInput, Prisma.StrategyStatementTypeConfigUncheckedUpdateWithoutStatementsInput>;
    create: Prisma.XOR<Prisma.StrategyStatementTypeConfigCreateWithoutStatementsInput, Prisma.StrategyStatementTypeConfigUncheckedCreateWithoutStatementsInput>;
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
};
export type StrategyStatementTypeConfigUpdateToOneWithWhereWithoutStatementsInput = {
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    data: Prisma.XOR<Prisma.StrategyStatementTypeConfigUpdateWithoutStatementsInput, Prisma.StrategyStatementTypeConfigUncheckedUpdateWithoutStatementsInput>;
};
export type StrategyStatementTypeConfigUpdateWithoutStatementsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowsMultipleActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementTypeConfigUncheckedUpdateWithoutStatementsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowsMultipleActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementTypeConfigCountOutputType = {
    statements: number;
};
export type StrategyStatementTypeConfigCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statements?: boolean | StrategyStatementTypeConfigCountOutputTypeCountStatementsArgs;
};
export type StrategyStatementTypeConfigCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigCountOutputTypeSelect<ExtArgs> | null;
};
export type StrategyStatementTypeConfigCountOutputTypeCountStatementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyStatementWhereInput;
};
export type StrategyStatementTypeConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    description?: boolean;
    allowsMultipleActive?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    statements?: boolean | Prisma.StrategyStatementTypeConfig$statementsArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategyStatementTypeConfigCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["strategyStatementTypeConfig"]>;
export type StrategyStatementTypeConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    description?: boolean;
    allowsMultipleActive?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["strategyStatementTypeConfig"]>;
export type StrategyStatementTypeConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    label?: boolean;
    description?: boolean;
    allowsMultipleActive?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["strategyStatementTypeConfig"]>;
export type StrategyStatementTypeConfigSelectScalar = {
    code?: boolean;
    label?: boolean;
    description?: boolean;
    allowsMultipleActive?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type StrategyStatementTypeConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "label" | "description" | "allowsMultipleActive" | "sortOrder" | "isActive" | "createdAt", ExtArgs["result"]["strategyStatementTypeConfig"]>;
export type StrategyStatementTypeConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statements?: boolean | Prisma.StrategyStatementTypeConfig$statementsArgs<ExtArgs>;
    _count?: boolean | Prisma.StrategyStatementTypeConfigCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StrategyStatementTypeConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StrategyStatementTypeConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StrategyStatementTypeConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StrategyStatementTypeConfig";
    objects: {
        statements: Prisma.$StrategyStatementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        label: string;
        description: string | null;
        allowsMultipleActive: boolean;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["strategyStatementTypeConfig"]>;
    composites: {};
};
export type StrategyStatementTypeConfigGetPayload<S extends boolean | null | undefined | StrategyStatementTypeConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload, S>;
export type StrategyStatementTypeConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StrategyStatementTypeConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StrategyStatementTypeConfigCountAggregateInputType | true;
};
export interface StrategyStatementTypeConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StrategyStatementTypeConfig'];
        meta: {
            name: 'StrategyStatementTypeConfig';
        };
    };
    findUnique<T extends StrategyStatementTypeConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StrategyStatementTypeConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StrategyStatementTypeConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, StrategyStatementTypeConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StrategyStatementTypeConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StrategyStatementTypeConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StrategyStatementTypeConfigFindManyArgs>(args?: Prisma.SelectSubset<T, StrategyStatementTypeConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StrategyStatementTypeConfigCreateArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigCreateArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StrategyStatementTypeConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, StrategyStatementTypeConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StrategyStatementTypeConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StrategyStatementTypeConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StrategyStatementTypeConfigDeleteArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StrategyStatementTypeConfigUpdateArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StrategyStatementTypeConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, StrategyStatementTypeConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StrategyStatementTypeConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StrategyStatementTypeConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StrategyStatementTypeConfigUpsertArgs>(args: Prisma.SelectSubset<T, StrategyStatementTypeConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StrategyStatementTypeConfigCountArgs>(args?: Prisma.Subset<T, StrategyStatementTypeConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StrategyStatementTypeConfigCountAggregateOutputType> : number>;
    aggregate<T extends StrategyStatementTypeConfigAggregateArgs>(args: Prisma.Subset<T, StrategyStatementTypeConfigAggregateArgs>): Prisma.PrismaPromise<GetStrategyStatementTypeConfigAggregateType<T>>;
    groupBy<T extends StrategyStatementTypeConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StrategyStatementTypeConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: StrategyStatementTypeConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StrategyStatementTypeConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrategyStatementTypeConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StrategyStatementTypeConfigFieldRefs;
}
export interface Prisma__StrategyStatementTypeConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    statements<T extends Prisma.StrategyStatementTypeConfig$statementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategyStatementTypeConfig$statementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StrategyStatementTypeConfigFieldRefs {
    readonly code: Prisma.FieldRef<"StrategyStatementTypeConfig", 'String'>;
    readonly label: Prisma.FieldRef<"StrategyStatementTypeConfig", 'String'>;
    readonly description: Prisma.FieldRef<"StrategyStatementTypeConfig", 'String'>;
    readonly allowsMultipleActive: Prisma.FieldRef<"StrategyStatementTypeConfig", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"StrategyStatementTypeConfig", 'Int'>;
    readonly isActive: Prisma.FieldRef<"StrategyStatementTypeConfig", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"StrategyStatementTypeConfig", 'DateTime'>;
}
export type StrategyStatementTypeConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
};
export type StrategyStatementTypeConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
};
export type StrategyStatementTypeConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    orderBy?: Prisma.StrategyStatementTypeConfigOrderByWithRelationInput | Prisma.StrategyStatementTypeConfigOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyStatementTypeConfigScalarFieldEnum | Prisma.StrategyStatementTypeConfigScalarFieldEnum[];
};
export type StrategyStatementTypeConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    orderBy?: Prisma.StrategyStatementTypeConfigOrderByWithRelationInput | Prisma.StrategyStatementTypeConfigOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyStatementTypeConfigScalarFieldEnum | Prisma.StrategyStatementTypeConfigScalarFieldEnum[];
};
export type StrategyStatementTypeConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    orderBy?: Prisma.StrategyStatementTypeConfigOrderByWithRelationInput | Prisma.StrategyStatementTypeConfigOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyStatementTypeConfigScalarFieldEnum | Prisma.StrategyStatementTypeConfigScalarFieldEnum[];
};
export type StrategyStatementTypeConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyStatementTypeConfigCreateInput, Prisma.StrategyStatementTypeConfigUncheckedCreateInput>;
};
export type StrategyStatementTypeConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StrategyStatementTypeConfigCreateManyInput | Prisma.StrategyStatementTypeConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategyStatementTypeConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    data: Prisma.StrategyStatementTypeConfigCreateManyInput | Prisma.StrategyStatementTypeConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategyStatementTypeConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyStatementTypeConfigUpdateInput, Prisma.StrategyStatementTypeConfigUncheckedUpdateInput>;
    where: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
};
export type StrategyStatementTypeConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StrategyStatementTypeConfigUpdateManyMutationInput, Prisma.StrategyStatementTypeConfigUncheckedUpdateManyInput>;
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    limit?: number;
};
export type StrategyStatementTypeConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyStatementTypeConfigUpdateManyMutationInput, Prisma.StrategyStatementTypeConfigUncheckedUpdateManyInput>;
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    limit?: number;
};
export type StrategyStatementTypeConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyStatementTypeConfigCreateInput, Prisma.StrategyStatementTypeConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StrategyStatementTypeConfigUpdateInput, Prisma.StrategyStatementTypeConfigUncheckedUpdateInput>;
};
export type StrategyStatementTypeConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementTypeConfigWhereUniqueInput;
};
export type StrategyStatementTypeConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyStatementTypeConfigWhereInput;
    limit?: number;
};
export type StrategyStatementTypeConfig$statementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where?: Prisma.StrategyStatementWhereInput;
    orderBy?: Prisma.StrategyStatementOrderByWithRelationInput | Prisma.StrategyStatementOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyStatementScalarFieldEnum | Prisma.StrategyStatementScalarFieldEnum[];
};
export type StrategyStatementTypeConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementTypeConfigSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementTypeConfigOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementTypeConfigInclude<ExtArgs> | null;
};
