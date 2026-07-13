import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmStressScenarioConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$WmStressScenarioConfigPayload>;
export type AggregateWmStressScenarioConfig = {
    _count: WmStressScenarioConfigCountAggregateOutputType | null;
    _avg: WmStressScenarioConfigAvgAggregateOutputType | null;
    _sum: WmStressScenarioConfigSumAggregateOutputType | null;
    _min: WmStressScenarioConfigMinAggregateOutputType | null;
    _max: WmStressScenarioConfigMaxAggregateOutputType | null;
};
export type WmStressScenarioConfigAvgAggregateOutputType = {
    version: number | null;
};
export type WmStressScenarioConfigSumAggregateOutputType = {
    version: number | null;
};
export type WmStressScenarioConfigMinAggregateOutputType = {
    id: string | null;
    scenarioCode: string | null;
    label: string | null;
    version: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type WmStressScenarioConfigMaxAggregateOutputType = {
    id: string | null;
    scenarioCode: string | null;
    label: string | null;
    version: number | null;
    status: string | null;
    createdAt: Date | null;
};
export type WmStressScenarioConfigCountAggregateOutputType = {
    id: number;
    scenarioCode: number;
    label: number;
    shockPctByAssetClass: number;
    version: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type WmStressScenarioConfigAvgAggregateInputType = {
    version?: true;
};
export type WmStressScenarioConfigSumAggregateInputType = {
    version?: true;
};
export type WmStressScenarioConfigMinAggregateInputType = {
    id?: true;
    scenarioCode?: true;
    label?: true;
    version?: true;
    status?: true;
    createdAt?: true;
};
export type WmStressScenarioConfigMaxAggregateInputType = {
    id?: true;
    scenarioCode?: true;
    label?: true;
    version?: true;
    status?: true;
    createdAt?: true;
};
export type WmStressScenarioConfigCountAggregateInputType = {
    id?: true;
    scenarioCode?: true;
    label?: true;
    shockPctByAssetClass?: true;
    version?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type WmStressScenarioConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmStressScenarioConfigWhereInput;
    orderBy?: Prisma.WmStressScenarioConfigOrderByWithRelationInput | Prisma.WmStressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmStressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmStressScenarioConfigCountAggregateInputType;
    _avg?: WmStressScenarioConfigAvgAggregateInputType;
    _sum?: WmStressScenarioConfigSumAggregateInputType;
    _min?: WmStressScenarioConfigMinAggregateInputType;
    _max?: WmStressScenarioConfigMaxAggregateInputType;
};
export type GetWmStressScenarioConfigAggregateType<T extends WmStressScenarioConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateWmStressScenarioConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmStressScenarioConfig[P]> : Prisma.GetScalarType<T[P], AggregateWmStressScenarioConfig[P]>;
};
export type WmStressScenarioConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmStressScenarioConfigWhereInput;
    orderBy?: Prisma.WmStressScenarioConfigOrderByWithAggregationInput | Prisma.WmStressScenarioConfigOrderByWithAggregationInput[];
    by: Prisma.WmStressScenarioConfigScalarFieldEnum[] | Prisma.WmStressScenarioConfigScalarFieldEnum;
    having?: Prisma.WmStressScenarioConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmStressScenarioConfigCountAggregateInputType | true;
    _avg?: WmStressScenarioConfigAvgAggregateInputType;
    _sum?: WmStressScenarioConfigSumAggregateInputType;
    _min?: WmStressScenarioConfigMinAggregateInputType;
    _max?: WmStressScenarioConfigMaxAggregateInputType;
};
export type WmStressScenarioConfigGroupByOutputType = {
    id: string;
    scenarioCode: string;
    label: string;
    shockPctByAssetClass: runtime.JsonValue;
    version: number;
    status: string;
    createdAt: Date;
    _count: WmStressScenarioConfigCountAggregateOutputType | null;
    _avg: WmStressScenarioConfigAvgAggregateOutputType | null;
    _sum: WmStressScenarioConfigSumAggregateOutputType | null;
    _min: WmStressScenarioConfigMinAggregateOutputType | null;
    _max: WmStressScenarioConfigMaxAggregateOutputType | null;
};
export type GetWmStressScenarioConfigGroupByPayload<T extends WmStressScenarioConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmStressScenarioConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmStressScenarioConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmStressScenarioConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmStressScenarioConfigGroupByOutputType[P]>;
}>>;
export type WmStressScenarioConfigWhereInput = {
    AND?: Prisma.WmStressScenarioConfigWhereInput | Prisma.WmStressScenarioConfigWhereInput[];
    OR?: Prisma.WmStressScenarioConfigWhereInput[];
    NOT?: Prisma.WmStressScenarioConfigWhereInput | Prisma.WmStressScenarioConfigWhereInput[];
    id?: Prisma.UuidFilter<"WmStressScenarioConfig"> | string;
    scenarioCode?: Prisma.StringFilter<"WmStressScenarioConfig"> | string;
    label?: Prisma.StringFilter<"WmStressScenarioConfig"> | string;
    shockPctByAssetClass?: Prisma.JsonFilter<"WmStressScenarioConfig">;
    version?: Prisma.IntFilter<"WmStressScenarioConfig"> | number;
    status?: Prisma.StringFilter<"WmStressScenarioConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmStressScenarioConfig"> | Date | string;
    assessmentRuns?: Prisma.WmRiskAssessmentRunListRelationFilter;
};
export type WmStressScenarioConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    shockPctByAssetClass?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    assessmentRuns?: Prisma.WmRiskAssessmentRunOrderByRelationAggregateInput;
};
export type WmStressScenarioConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    scenarioCode_version?: Prisma.WmStressScenarioConfigScenarioCodeVersionCompoundUniqueInput;
    AND?: Prisma.WmStressScenarioConfigWhereInput | Prisma.WmStressScenarioConfigWhereInput[];
    OR?: Prisma.WmStressScenarioConfigWhereInput[];
    NOT?: Prisma.WmStressScenarioConfigWhereInput | Prisma.WmStressScenarioConfigWhereInput[];
    scenarioCode?: Prisma.StringFilter<"WmStressScenarioConfig"> | string;
    label?: Prisma.StringFilter<"WmStressScenarioConfig"> | string;
    shockPctByAssetClass?: Prisma.JsonFilter<"WmStressScenarioConfig">;
    version?: Prisma.IntFilter<"WmStressScenarioConfig"> | number;
    status?: Prisma.StringFilter<"WmStressScenarioConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmStressScenarioConfig"> | Date | string;
    assessmentRuns?: Prisma.WmRiskAssessmentRunListRelationFilter;
}, "id" | "scenarioCode_version">;
export type WmStressScenarioConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    shockPctByAssetClass?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmStressScenarioConfigCountOrderByAggregateInput;
    _avg?: Prisma.WmStressScenarioConfigAvgOrderByAggregateInput;
    _max?: Prisma.WmStressScenarioConfigMaxOrderByAggregateInput;
    _min?: Prisma.WmStressScenarioConfigMinOrderByAggregateInput;
    _sum?: Prisma.WmStressScenarioConfigSumOrderByAggregateInput;
};
export type WmStressScenarioConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmStressScenarioConfigScalarWhereWithAggregatesInput | Prisma.WmStressScenarioConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmStressScenarioConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmStressScenarioConfigScalarWhereWithAggregatesInput | Prisma.WmStressScenarioConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmStressScenarioConfig"> | string;
    scenarioCode?: Prisma.StringWithAggregatesFilter<"WmStressScenarioConfig"> | string;
    label?: Prisma.StringWithAggregatesFilter<"WmStressScenarioConfig"> | string;
    shockPctByAssetClass?: Prisma.JsonWithAggregatesFilter<"WmStressScenarioConfig">;
    version?: Prisma.IntWithAggregatesFilter<"WmStressScenarioConfig"> | number;
    status?: Prisma.StringWithAggregatesFilter<"WmStressScenarioConfig"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmStressScenarioConfig"> | Date | string;
};
export type WmStressScenarioConfigCreateInput = {
    id?: string;
    scenarioCode: string;
    label: string;
    shockPctByAssetClass: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    createdAt?: Date | string;
    assessmentRuns?: Prisma.WmRiskAssessmentRunCreateNestedManyWithoutScenarioConfigInput;
};
export type WmStressScenarioConfigUncheckedCreateInput = {
    id?: string;
    scenarioCode: string;
    label: string;
    shockPctByAssetClass: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    createdAt?: Date | string;
    assessmentRuns?: Prisma.WmRiskAssessmentRunUncheckedCreateNestedManyWithoutScenarioConfigInput;
};
export type WmStressScenarioConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    shockPctByAssetClass?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentRuns?: Prisma.WmRiskAssessmentRunUpdateManyWithoutScenarioConfigNestedInput;
};
export type WmStressScenarioConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    shockPctByAssetClass?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessmentRuns?: Prisma.WmRiskAssessmentRunUncheckedUpdateManyWithoutScenarioConfigNestedInput;
};
export type WmStressScenarioConfigCreateManyInput = {
    id?: string;
    scenarioCode: string;
    label: string;
    shockPctByAssetClass: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    createdAt?: Date | string;
};
export type WmStressScenarioConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    shockPctByAssetClass?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmStressScenarioConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    shockPctByAssetClass?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmStressScenarioConfigScenarioCodeVersionCompoundUniqueInput = {
    scenarioCode: string;
    version: number;
};
export type WmStressScenarioConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    shockPctByAssetClass?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmStressScenarioConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmStressScenarioConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmStressScenarioConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    scenarioCode?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmStressScenarioConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmStressScenarioConfigScalarRelationFilter = {
    is?: Prisma.WmStressScenarioConfigWhereInput;
    isNot?: Prisma.WmStressScenarioConfigWhereInput;
};
export type WmStressScenarioConfigCreateNestedOneWithoutAssessmentRunsInput = {
    create?: Prisma.XOR<Prisma.WmStressScenarioConfigCreateWithoutAssessmentRunsInput, Prisma.WmStressScenarioConfigUncheckedCreateWithoutAssessmentRunsInput>;
    connectOrCreate?: Prisma.WmStressScenarioConfigCreateOrConnectWithoutAssessmentRunsInput;
    connect?: Prisma.WmStressScenarioConfigWhereUniqueInput;
};
export type WmStressScenarioConfigUpdateOneRequiredWithoutAssessmentRunsNestedInput = {
    create?: Prisma.XOR<Prisma.WmStressScenarioConfigCreateWithoutAssessmentRunsInput, Prisma.WmStressScenarioConfigUncheckedCreateWithoutAssessmentRunsInput>;
    connectOrCreate?: Prisma.WmStressScenarioConfigCreateOrConnectWithoutAssessmentRunsInput;
    upsert?: Prisma.WmStressScenarioConfigUpsertWithoutAssessmentRunsInput;
    connect?: Prisma.WmStressScenarioConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WmStressScenarioConfigUpdateToOneWithWhereWithoutAssessmentRunsInput, Prisma.WmStressScenarioConfigUpdateWithoutAssessmentRunsInput>, Prisma.WmStressScenarioConfigUncheckedUpdateWithoutAssessmentRunsInput>;
};
export type WmStressScenarioConfigCreateWithoutAssessmentRunsInput = {
    id?: string;
    scenarioCode: string;
    label: string;
    shockPctByAssetClass: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    createdAt?: Date | string;
};
export type WmStressScenarioConfigUncheckedCreateWithoutAssessmentRunsInput = {
    id?: string;
    scenarioCode: string;
    label: string;
    shockPctByAssetClass: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    createdAt?: Date | string;
};
export type WmStressScenarioConfigCreateOrConnectWithoutAssessmentRunsInput = {
    where: Prisma.WmStressScenarioConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmStressScenarioConfigCreateWithoutAssessmentRunsInput, Prisma.WmStressScenarioConfigUncheckedCreateWithoutAssessmentRunsInput>;
};
export type WmStressScenarioConfigUpsertWithoutAssessmentRunsInput = {
    update: Prisma.XOR<Prisma.WmStressScenarioConfigUpdateWithoutAssessmentRunsInput, Prisma.WmStressScenarioConfigUncheckedUpdateWithoutAssessmentRunsInput>;
    create: Prisma.XOR<Prisma.WmStressScenarioConfigCreateWithoutAssessmentRunsInput, Prisma.WmStressScenarioConfigUncheckedCreateWithoutAssessmentRunsInput>;
    where?: Prisma.WmStressScenarioConfigWhereInput;
};
export type WmStressScenarioConfigUpdateToOneWithWhereWithoutAssessmentRunsInput = {
    where?: Prisma.WmStressScenarioConfigWhereInput;
    data: Prisma.XOR<Prisma.WmStressScenarioConfigUpdateWithoutAssessmentRunsInput, Prisma.WmStressScenarioConfigUncheckedUpdateWithoutAssessmentRunsInput>;
};
export type WmStressScenarioConfigUpdateWithoutAssessmentRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    shockPctByAssetClass?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmStressScenarioConfigUncheckedUpdateWithoutAssessmentRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioCode?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    shockPctByAssetClass?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmStressScenarioConfigCountOutputType = {
    assessmentRuns: number;
};
export type WmStressScenarioConfigCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assessmentRuns?: boolean | WmStressScenarioConfigCountOutputTypeCountAssessmentRunsArgs;
};
export type WmStressScenarioConfigCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigCountOutputTypeSelect<ExtArgs> | null;
};
export type WmStressScenarioConfigCountOutputTypeCountAssessmentRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmRiskAssessmentRunWhereInput;
};
export type WmStressScenarioConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scenarioCode?: boolean;
    label?: boolean;
    shockPctByAssetClass?: boolean;
    version?: boolean;
    status?: boolean;
    createdAt?: boolean;
    assessmentRuns?: boolean | Prisma.WmStressScenarioConfig$assessmentRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.WmStressScenarioConfigCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmStressScenarioConfig"]>;
export type WmStressScenarioConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scenarioCode?: boolean;
    label?: boolean;
    shockPctByAssetClass?: boolean;
    version?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["wmStressScenarioConfig"]>;
export type WmStressScenarioConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    scenarioCode?: boolean;
    label?: boolean;
    shockPctByAssetClass?: boolean;
    version?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["wmStressScenarioConfig"]>;
export type WmStressScenarioConfigSelectScalar = {
    id?: boolean;
    scenarioCode?: boolean;
    label?: boolean;
    shockPctByAssetClass?: boolean;
    version?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type WmStressScenarioConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "scenarioCode" | "label" | "shockPctByAssetClass" | "version" | "status" | "createdAt", ExtArgs["result"]["wmStressScenarioConfig"]>;
export type WmStressScenarioConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assessmentRuns?: boolean | Prisma.WmStressScenarioConfig$assessmentRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.WmStressScenarioConfigCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WmStressScenarioConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type WmStressScenarioConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $WmStressScenarioConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmStressScenarioConfig";
    objects: {
        assessmentRuns: Prisma.$WmRiskAssessmentRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        scenarioCode: string;
        label: string;
        shockPctByAssetClass: runtime.JsonValue;
        version: number;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["wmStressScenarioConfig"]>;
    composites: {};
};
export type WmStressScenarioConfigGetPayload<S extends boolean | null | undefined | WmStressScenarioConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload, S>;
export type WmStressScenarioConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmStressScenarioConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmStressScenarioConfigCountAggregateInputType | true;
};
export interface WmStressScenarioConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmStressScenarioConfig'];
        meta: {
            name: 'WmStressScenarioConfig';
        };
    };
    findUnique<T extends WmStressScenarioConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmStressScenarioConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmStressScenarioConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, WmStressScenarioConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmStressScenarioConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmStressScenarioConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmStressScenarioConfigFindManyArgs>(args?: Prisma.SelectSubset<T, WmStressScenarioConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmStressScenarioConfigCreateArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigCreateArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmStressScenarioConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, WmStressScenarioConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmStressScenarioConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmStressScenarioConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmStressScenarioConfigDeleteArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmStressScenarioConfigUpdateArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmStressScenarioConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmStressScenarioConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmStressScenarioConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmStressScenarioConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmStressScenarioConfigUpsertArgs>(args: Prisma.SelectSubset<T, WmStressScenarioConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmStressScenarioConfigCountArgs>(args?: Prisma.Subset<T, WmStressScenarioConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmStressScenarioConfigCountAggregateOutputType> : number>;
    aggregate<T extends WmStressScenarioConfigAggregateArgs>(args: Prisma.Subset<T, WmStressScenarioConfigAggregateArgs>): Prisma.PrismaPromise<GetWmStressScenarioConfigAggregateType<T>>;
    groupBy<T extends WmStressScenarioConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmStressScenarioConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: WmStressScenarioConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmStressScenarioConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmStressScenarioConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmStressScenarioConfigFieldRefs;
}
export interface Prisma__WmStressScenarioConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assessmentRuns<T extends Prisma.WmStressScenarioConfig$assessmentRunsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmStressScenarioConfig$assessmentRunsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmStressScenarioConfigFieldRefs {
    readonly id: Prisma.FieldRef<"WmStressScenarioConfig", 'String'>;
    readonly scenarioCode: Prisma.FieldRef<"WmStressScenarioConfig", 'String'>;
    readonly label: Prisma.FieldRef<"WmStressScenarioConfig", 'String'>;
    readonly shockPctByAssetClass: Prisma.FieldRef<"WmStressScenarioConfig", 'Json'>;
    readonly version: Prisma.FieldRef<"WmStressScenarioConfig", 'Int'>;
    readonly status: Prisma.FieldRef<"WmStressScenarioConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WmStressScenarioConfig", 'DateTime'>;
}
export type WmStressScenarioConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    where: Prisma.WmStressScenarioConfigWhereUniqueInput;
};
export type WmStressScenarioConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    where: Prisma.WmStressScenarioConfigWhereUniqueInput;
};
export type WmStressScenarioConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    where?: Prisma.WmStressScenarioConfigWhereInput;
    orderBy?: Prisma.WmStressScenarioConfigOrderByWithRelationInput | Prisma.WmStressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmStressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmStressScenarioConfigScalarFieldEnum | Prisma.WmStressScenarioConfigScalarFieldEnum[];
};
export type WmStressScenarioConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    where?: Prisma.WmStressScenarioConfigWhereInput;
    orderBy?: Prisma.WmStressScenarioConfigOrderByWithRelationInput | Prisma.WmStressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmStressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmStressScenarioConfigScalarFieldEnum | Prisma.WmStressScenarioConfigScalarFieldEnum[];
};
export type WmStressScenarioConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    where?: Prisma.WmStressScenarioConfigWhereInput;
    orderBy?: Prisma.WmStressScenarioConfigOrderByWithRelationInput | Prisma.WmStressScenarioConfigOrderByWithRelationInput[];
    cursor?: Prisma.WmStressScenarioConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmStressScenarioConfigScalarFieldEnum | Prisma.WmStressScenarioConfigScalarFieldEnum[];
};
export type WmStressScenarioConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmStressScenarioConfigCreateInput, Prisma.WmStressScenarioConfigUncheckedCreateInput>;
};
export type WmStressScenarioConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmStressScenarioConfigCreateManyInput | Prisma.WmStressScenarioConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmStressScenarioConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    data: Prisma.WmStressScenarioConfigCreateManyInput | Prisma.WmStressScenarioConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmStressScenarioConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmStressScenarioConfigUpdateInput, Prisma.WmStressScenarioConfigUncheckedUpdateInput>;
    where: Prisma.WmStressScenarioConfigWhereUniqueInput;
};
export type WmStressScenarioConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmStressScenarioConfigUpdateManyMutationInput, Prisma.WmStressScenarioConfigUncheckedUpdateManyInput>;
    where?: Prisma.WmStressScenarioConfigWhereInput;
    limit?: number;
};
export type WmStressScenarioConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmStressScenarioConfigUpdateManyMutationInput, Prisma.WmStressScenarioConfigUncheckedUpdateManyInput>;
    where?: Prisma.WmStressScenarioConfigWhereInput;
    limit?: number;
};
export type WmStressScenarioConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    where: Prisma.WmStressScenarioConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmStressScenarioConfigCreateInput, Prisma.WmStressScenarioConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmStressScenarioConfigUpdateInput, Prisma.WmStressScenarioConfigUncheckedUpdateInput>;
};
export type WmStressScenarioConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
    where: Prisma.WmStressScenarioConfigWhereUniqueInput;
};
export type WmStressScenarioConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmStressScenarioConfigWhereInput;
    limit?: number;
};
export type WmStressScenarioConfig$assessmentRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    orderBy?: Prisma.WmRiskAssessmentRunOrderByWithRelationInput | Prisma.WmRiskAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmRiskAssessmentRunScalarFieldEnum | Prisma.WmRiskAssessmentRunScalarFieldEnum[];
};
export type WmStressScenarioConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmStressScenarioConfigSelect<ExtArgs> | null;
    omit?: Prisma.WmStressScenarioConfigOmit<ExtArgs> | null;
    include?: Prisma.WmStressScenarioConfigInclude<ExtArgs> | null;
};
