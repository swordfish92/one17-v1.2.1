import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StressScenarioConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$StressScenarioConfigPayload>;
export type AggregateStressScenarioConfig = {
    _count: StressScenarioConfigCountAggregateOutputType | null;
    _avg: StressScenarioConfigAvgAggregateOutputType | null;
    _sum: StressScenarioConfigSumAggregateOutputType | null;
    _min: StressScenarioConfigMinAggregateOutputType | null;
    _max: StressScenarioConfigMaxAggregateOutputType | null;
};
export type StressScenarioConfigAvgAggregateOutputType = {
    version: number | null;
};
export type StressScenarioConfigSumAggregateOutputType = {
    version: number | null;
};
export type StressScenarioConfigMinAggregateOutputType = {
    id: string | null;
    modelType: $Enums.StressModelType | null;
    scenarioCode: string | null;
    scenarioLabel: string | null;
    version: number | null;
    status: $Enums.StressConfigStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type StressScenarioConfigMaxAggregateOutputType = {
    id: string | null;
    modelType: $Enums.StressModelType | null;
    scenarioCode: string | null;
    scenarioLabel: string | null;
    version: number | null;
    status: $Enums.StressConfigStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type StressScenarioConfigCountAggregateOutputType = {
    id: number;
    modelType: number;
    scenarioCode: number;
    scenarioLabel: number;
    version: number;
    status: number;
    parameters: number;
    boardResolutionRef: number;
    proposedByUserId: number;
    approvedByUserId: number;
    effectiveFrom: number;
    createdAt: number;
    _all: number;
};
export type StressScenarioConfigAvgAggregateInputType = {
    version?: true;
};
export type StressScenarioConfigSumAggregateInputType = {
    version?: true;
};
export type StressScenarioConfigMinAggregateInputType = {
    id?: true;
    modelType?: true;
    scenarioCode?: true;
    scenarioLabel?: true;
    version?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type StressScenarioConfigMaxAggregateInputType = {
    id?: true;
    modelType?: true;
    scenarioCode?: true;
    scenarioLabel?: true;
    version?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type StressScenarioConfigCountAggregateInputType = {
    id?: true;
    modelType?: true;
    scenarioCode?: true;
    scenarioLabel?: true;
    version?: true;
    status?: true;
    parameters?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    effectiveFrom?: true;
    createdAt?: true;
    _all?: true;
};
export type StressScenarioConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StressScenarioConfigWhereInput;
    orderBy?: Prisma.StressScenarioConfigOrderByWithRelationInput | Prisma.StressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.StressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StressScenarioConfigCountAggregateInputType;
    _avg?: StressScenarioConfigAvgAggregateInputType;
    _sum?: StressScenarioConfigSumAggregateInputType;
    _min?: StressScenarioConfigMinAggregateInputType;
    _max?: StressScenarioConfigMaxAggregateInputType;
};
export type GetStressScenarioConfigAggregateType<T extends StressScenarioConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateStressScenarioConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStressScenarioConfig[P]> : Prisma.GetScalarType<T[P], AggregateStressScenarioConfig[P]>;
};
export type StressScenarioConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StressScenarioConfigWhereInput;
    orderBy?: Prisma.StressScenarioConfigOrderByWithAggregationInput | Prisma.StressScenarioConfigOrderByWithAggregationInput[];
    by: Prisma.StressScenarioConfigScalarFieldEnum[] | Prisma.StressScenarioConfigScalarFieldEnum;
    having?: Prisma.StressScenarioConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StressScenarioConfigCountAggregateInputType | true;
    _avg?: StressScenarioConfigAvgAggregateInputType;
    _sum?: StressScenarioConfigSumAggregateInputType;
    _min?: StressScenarioConfigMinAggregateInputType;
    _max?: StressScenarioConfigMaxAggregateInputType;
};
export type StressScenarioConfigGroupByOutputType = {
    id: string;
    modelType: $Enums.StressModelType;
    scenarioCode: string;
    scenarioLabel: string;
    version: number;
    status: $Enums.StressConfigStatus;
    parameters: runtime.JsonValue;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date;
    _count: StressScenarioConfigCountAggregateOutputType | null;
    _avg: StressScenarioConfigAvgAggregateOutputType | null;
    _sum: StressScenarioConfigSumAggregateOutputType | null;
    _min: StressScenarioConfigMinAggregateOutputType | null;
    _max: StressScenarioConfigMaxAggregateOutputType | null;
};
export type GetStressScenarioConfigGroupByPayload<T extends StressScenarioConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StressScenarioConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StressScenarioConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StressScenarioConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StressScenarioConfigGroupByOutputType[P]>;
}>>;
export type StressScenarioConfigWhereInput = {
    AND?: Prisma.StressScenarioConfigWhereInput | Prisma.StressScenarioConfigWhereInput[];
    OR?: Prisma.StressScenarioConfigWhereInput[];
    NOT?: Prisma.StressScenarioConfigWhereInput | Prisma.StressScenarioConfigWhereInput[];
    id?: Prisma.UuidFilter<"StressScenarioConfig"> | string;
    modelType?: Prisma.EnumStressModelTypeFilter<"StressScenarioConfig"> | $Enums.StressModelType;
    scenarioCode?: Prisma.StringFilter<"StressScenarioConfig"> | string;
    scenarioLabel?: Prisma.StringFilter<"StressScenarioConfig"> | string;
    version?: Prisma.IntFilter<"StressScenarioConfig"> | number;
    status?: Prisma.EnumStressConfigStatusFilter<"StressScenarioConfig"> | $Enums.StressConfigStatus;
    parameters?: Prisma.JsonFilter<"StressScenarioConfig">;
    boardResolutionRef?: Prisma.StringNullableFilter<"StressScenarioConfig"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"StressScenarioConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"StressScenarioConfig"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StressScenarioConfig"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StressScenarioConfig"> | Date | string;
};
export type StressScenarioConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    parameters?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StressScenarioConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    modelType_scenarioCode_version?: Prisma.StressScenarioConfigModelTypeScenarioCodeVersionCompoundUniqueInput;
    AND?: Prisma.StressScenarioConfigWhereInput | Prisma.StressScenarioConfigWhereInput[];
    OR?: Prisma.StressScenarioConfigWhereInput[];
    NOT?: Prisma.StressScenarioConfigWhereInput | Prisma.StressScenarioConfigWhereInput[];
    modelType?: Prisma.EnumStressModelTypeFilter<"StressScenarioConfig"> | $Enums.StressModelType;
    scenarioCode?: Prisma.StringFilter<"StressScenarioConfig"> | string;
    scenarioLabel?: Prisma.StringFilter<"StressScenarioConfig"> | string;
    version?: Prisma.IntFilter<"StressScenarioConfig"> | number;
    status?: Prisma.EnumStressConfigStatusFilter<"StressScenarioConfig"> | $Enums.StressConfigStatus;
    parameters?: Prisma.JsonFilter<"StressScenarioConfig">;
    boardResolutionRef?: Prisma.StringNullableFilter<"StressScenarioConfig"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"StressScenarioConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"StressScenarioConfig"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StressScenarioConfig"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StressScenarioConfig"> | Date | string;
}, "id" | "modelType_scenarioCode_version">;
export type StressScenarioConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    parameters?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StressScenarioConfigCountOrderByAggregateInput;
    _avg?: Prisma.StressScenarioConfigAvgOrderByAggregateInput;
    _max?: Prisma.StressScenarioConfigMaxOrderByAggregateInput;
    _min?: Prisma.StressScenarioConfigMinOrderByAggregateInput;
    _sum?: Prisma.StressScenarioConfigSumOrderByAggregateInput;
};
export type StressScenarioConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.StressScenarioConfigScalarWhereWithAggregatesInput | Prisma.StressScenarioConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.StressScenarioConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StressScenarioConfigScalarWhereWithAggregatesInput | Prisma.StressScenarioConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StressScenarioConfig"> | string;
    modelType?: Prisma.EnumStressModelTypeWithAggregatesFilter<"StressScenarioConfig"> | $Enums.StressModelType;
    scenarioCode?: Prisma.StringWithAggregatesFilter<"StressScenarioConfig"> | string;
    scenarioLabel?: Prisma.StringWithAggregatesFilter<"StressScenarioConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"StressScenarioConfig"> | number;
    status?: Prisma.EnumStressConfigStatusWithAggregatesFilter<"StressScenarioConfig"> | $Enums.StressConfigStatus;
    parameters?: Prisma.JsonWithAggregatesFilter<"StressScenarioConfig">;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"StressScenarioConfig"> | string | null;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StressScenarioConfig"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StressScenarioConfig"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"StressScenarioConfig"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StressScenarioConfig"> | Date | string;
};
export type StressScenarioConfigCreateInput = {
    id?: string;
    modelType: $Enums.StressModelType;
    scenarioCode: string;
    scenarioLabel: string;
    version: number;
    status?: $Enums.StressConfigStatus;
    parameters: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StressScenarioConfigUncheckedCreateInput = {
    id?: string;
    modelType: $Enums.StressModelType;
    scenarioCode: string;
    scenarioLabel: string;
    version: number;
    status?: $Enums.StressConfigStatus;
    parameters: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StressScenarioConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStressConfigStatusFieldUpdateOperationsInput | $Enums.StressConfigStatus;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StressScenarioConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStressConfigStatusFieldUpdateOperationsInput | $Enums.StressConfigStatus;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StressScenarioConfigCreateManyInput = {
    id?: string;
    modelType: $Enums.StressModelType;
    scenarioCode: string;
    scenarioLabel: string;
    version: number;
    status?: $Enums.StressConfigStatus;
    parameters: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StressScenarioConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStressConfigStatusFieldUpdateOperationsInput | $Enums.StressConfigStatus;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StressScenarioConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelType?: Prisma.EnumStressModelTypeFieldUpdateOperationsInput | $Enums.StressModelType;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStressConfigStatusFieldUpdateOperationsInput | $Enums.StressConfigStatus;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StressScenarioConfigModelTypeScenarioCodeVersionCompoundUniqueInput = {
    modelType: $Enums.StressModelType;
    scenarioCode: string;
    version: number;
};
export type StressScenarioConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    parameters?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StressScenarioConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type StressScenarioConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StressScenarioConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelType?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StressScenarioConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type EnumStressModelTypeFieldUpdateOperationsInput = {
    set?: $Enums.StressModelType;
};
export type EnumStressConfigStatusFieldUpdateOperationsInput = {
    set?: $Enums.StressConfigStatus;
};
export type StressScenarioConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelType?: boolean;
    scenarioCode?: boolean;
    scenarioLabel?: boolean;
    version?: boolean;
    status?: boolean;
    parameters?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["stressScenarioConfig"]>;
export type StressScenarioConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelType?: boolean;
    scenarioCode?: boolean;
    scenarioLabel?: boolean;
    version?: boolean;
    status?: boolean;
    parameters?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["stressScenarioConfig"]>;
export type StressScenarioConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelType?: boolean;
    scenarioCode?: boolean;
    scenarioLabel?: boolean;
    version?: boolean;
    status?: boolean;
    parameters?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["stressScenarioConfig"]>;
export type StressScenarioConfigSelectScalar = {
    id?: boolean;
    modelType?: boolean;
    scenarioCode?: boolean;
    scenarioLabel?: boolean;
    version?: boolean;
    status?: boolean;
    parameters?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
};
export type StressScenarioConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modelType" | "scenarioCode" | "scenarioLabel" | "version" | "status" | "parameters" | "boardResolutionRef" | "proposedByUserId" | "approvedByUserId" | "effectiveFrom" | "createdAt", ExtArgs["result"]["stressScenarioConfig"]>;
export type $StressScenarioConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StressScenarioConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        modelType: $Enums.StressModelType;
        scenarioCode: string;
        scenarioLabel: string;
        version: number;
        status: $Enums.StressConfigStatus;
        parameters: runtime.JsonValue;
        boardResolutionRef: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        effectiveFrom: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["stressScenarioConfig"]>;
    composites: {};
};
export type StressScenarioConfigGetPayload<S extends boolean | null | undefined | StressScenarioConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload, S>;
export type StressScenarioConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StressScenarioConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StressScenarioConfigCountAggregateInputType | true;
};
export interface StressScenarioConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StressScenarioConfig'];
        meta: {
            name: 'StressScenarioConfig';
        };
    };
    findUnique<T extends StressScenarioConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StressScenarioConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StressScenarioConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, StressScenarioConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StressScenarioConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StressScenarioConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StressScenarioConfigFindManyArgs>(args?: Prisma.SelectSubset<T, StressScenarioConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StressScenarioConfigCreateArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigCreateArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StressScenarioConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, StressScenarioConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StressScenarioConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StressScenarioConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StressScenarioConfigDeleteArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StressScenarioConfigUpdateArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StressScenarioConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, StressScenarioConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StressScenarioConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StressScenarioConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StressScenarioConfigUpsertArgs>(args: Prisma.SelectSubset<T, StressScenarioConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__StressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$StressScenarioConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StressScenarioConfigCountArgs>(args?: Prisma.Subset<T, StressScenarioConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StressScenarioConfigCountAggregateOutputType> : number>;
    aggregate<T extends StressScenarioConfigAggregateArgs>(args: Prisma.Subset<T, StressScenarioConfigAggregateArgs>): Prisma.PrismaPromise<GetStressScenarioConfigAggregateType<T>>;
    groupBy<T extends StressScenarioConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StressScenarioConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: StressScenarioConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StressScenarioConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStressScenarioConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StressScenarioConfigFieldRefs;
}
export interface Prisma__StressScenarioConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StressScenarioConfigFieldRefs {
    readonly id: Prisma.FieldRef<"StressScenarioConfig", 'String'>;
    readonly modelType: Prisma.FieldRef<"StressScenarioConfig", 'StressModelType'>;
    readonly scenarioCode: Prisma.FieldRef<"StressScenarioConfig", 'String'>;
    readonly scenarioLabel: Prisma.FieldRef<"StressScenarioConfig", 'String'>;
    readonly version: Prisma.FieldRef<"StressScenarioConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"StressScenarioConfig", 'StressConfigStatus'>;
    readonly parameters: Prisma.FieldRef<"StressScenarioConfig", 'Json'>;
    readonly boardResolutionRef: Prisma.FieldRef<"StressScenarioConfig", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"StressScenarioConfig", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"StressScenarioConfig", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"StressScenarioConfig", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"StressScenarioConfig", 'DateTime'>;
}
export type StressScenarioConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    where: Prisma.StressScenarioConfigWhereUniqueInput;
};
export type StressScenarioConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    where: Prisma.StressScenarioConfigWhereUniqueInput;
};
export type StressScenarioConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    where?: Prisma.StressScenarioConfigWhereInput;
    orderBy?: Prisma.StressScenarioConfigOrderByWithRelationInput | Prisma.StressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.StressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StressScenarioConfigScalarFieldEnum | Prisma.StressScenarioConfigScalarFieldEnum[];
};
export type StressScenarioConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    where?: Prisma.StressScenarioConfigWhereInput;
    orderBy?: Prisma.StressScenarioConfigOrderByWithRelationInput | Prisma.StressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.StressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StressScenarioConfigScalarFieldEnum | Prisma.StressScenarioConfigScalarFieldEnum[];
};
export type StressScenarioConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    where?: Prisma.StressScenarioConfigWhereInput;
    orderBy?: Prisma.StressScenarioConfigOrderByWithRelationInput | Prisma.StressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.StressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StressScenarioConfigScalarFieldEnum | Prisma.StressScenarioConfigScalarFieldEnum[];
};
export type StressScenarioConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StressScenarioConfigCreateInput, Prisma.StressScenarioConfigUncheckedCreateInput>;
};
export type StressScenarioConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StressScenarioConfigCreateManyInput | Prisma.StressScenarioConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StressScenarioConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    data: Prisma.StressScenarioConfigCreateManyInput | Prisma.StressScenarioConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StressScenarioConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StressScenarioConfigUpdateInput, Prisma.StressScenarioConfigUncheckedUpdateInput>;
    where: Prisma.StressScenarioConfigWhereUniqueInput;
};
export type StressScenarioConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StressScenarioConfigUpdateManyMutationInput, Prisma.StressScenarioConfigUncheckedUpdateManyInput>;
    where?: Prisma.StressScenarioConfigWhereInput;
    limit?: number;
};
export type StressScenarioConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StressScenarioConfigUpdateManyMutationInput, Prisma.StressScenarioConfigUncheckedUpdateManyInput>;
    where?: Prisma.StressScenarioConfigWhereInput;
    limit?: number;
};
export type StressScenarioConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    where: Prisma.StressScenarioConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.StressScenarioConfigCreateInput, Prisma.StressScenarioConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StressScenarioConfigUpdateInput, Prisma.StressScenarioConfigUncheckedUpdateInput>;
};
export type StressScenarioConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
    where: Prisma.StressScenarioConfigWhereUniqueInput;
};
export type StressScenarioConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StressScenarioConfigWhereInput;
    limit?: number;
};
export type StressScenarioConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.StressScenarioConfigOmit<ExtArgs> | null;
};
