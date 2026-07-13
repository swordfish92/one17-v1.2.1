import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DashboardManualStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$DashboardManualStatusPayload>;
export type AggregateDashboardManualStatus = {
    _count: DashboardManualStatusCountAggregateOutputType | null;
    _avg: DashboardManualStatusAvgAggregateOutputType | null;
    _sum: DashboardManualStatusSumAggregateOutputType | null;
    _min: DashboardManualStatusMinAggregateOutputType | null;
    _max: DashboardManualStatusMaxAggregateOutputType | null;
};
export type DashboardManualStatusAvgAggregateOutputType = {
    id: number | null;
    reputationalRiskScore: number | null;
    growthTargetAumKobo: number | null;
};
export type DashboardManualStatusSumAggregateOutputType = {
    id: number | null;
    reputationalRiskScore: number | null;
    growthTargetAumKobo: bigint | null;
};
export type DashboardManualStatusMinAggregateOutputType = {
    id: number | null;
    regulatoryFilingsStatus: string | null;
    shariahSsbComplianceStatus: string | null;
    operationalRiskStatus: string | null;
    kycComplianceStatus: string | null;
    amlStatus: string | null;
    reputationalRiskScore: number | null;
    reputationalRagStatus: string | null;
    secInspectionReadinessStatus: string | null;
    growthTargetAumKobo: bigint | null;
    updatedAt: Date | null;
    updatedByUserId: string | null;
};
export type DashboardManualStatusMaxAggregateOutputType = {
    id: number | null;
    regulatoryFilingsStatus: string | null;
    shariahSsbComplianceStatus: string | null;
    operationalRiskStatus: string | null;
    kycComplianceStatus: string | null;
    amlStatus: string | null;
    reputationalRiskScore: number | null;
    reputationalRagStatus: string | null;
    secInspectionReadinessStatus: string | null;
    growthTargetAumKobo: bigint | null;
    updatedAt: Date | null;
    updatedByUserId: string | null;
};
export type DashboardManualStatusCountAggregateOutputType = {
    id: number;
    regulatoryFilingsStatus: number;
    shariahSsbComplianceStatus: number;
    operationalRiskStatus: number;
    kycComplianceStatus: number;
    amlStatus: number;
    reputationalRiskScore: number;
    reputationalRagStatus: number;
    secInspectionReadinessStatus: number;
    growthTargetAumKobo: number;
    updatedAt: number;
    updatedByUserId: number;
    _all: number;
};
export type DashboardManualStatusAvgAggregateInputType = {
    id?: true;
    reputationalRiskScore?: true;
    growthTargetAumKobo?: true;
};
export type DashboardManualStatusSumAggregateInputType = {
    id?: true;
    reputationalRiskScore?: true;
    growthTargetAumKobo?: true;
};
export type DashboardManualStatusMinAggregateInputType = {
    id?: true;
    regulatoryFilingsStatus?: true;
    shariahSsbComplianceStatus?: true;
    operationalRiskStatus?: true;
    kycComplianceStatus?: true;
    amlStatus?: true;
    reputationalRiskScore?: true;
    reputationalRagStatus?: true;
    secInspectionReadinessStatus?: true;
    growthTargetAumKobo?: true;
    updatedAt?: true;
    updatedByUserId?: true;
};
export type DashboardManualStatusMaxAggregateInputType = {
    id?: true;
    regulatoryFilingsStatus?: true;
    shariahSsbComplianceStatus?: true;
    operationalRiskStatus?: true;
    kycComplianceStatus?: true;
    amlStatus?: true;
    reputationalRiskScore?: true;
    reputationalRagStatus?: true;
    secInspectionReadinessStatus?: true;
    growthTargetAumKobo?: true;
    updatedAt?: true;
    updatedByUserId?: true;
};
export type DashboardManualStatusCountAggregateInputType = {
    id?: true;
    regulatoryFilingsStatus?: true;
    shariahSsbComplianceStatus?: true;
    operationalRiskStatus?: true;
    kycComplianceStatus?: true;
    amlStatus?: true;
    reputationalRiskScore?: true;
    reputationalRagStatus?: true;
    secInspectionReadinessStatus?: true;
    growthTargetAumKobo?: true;
    updatedAt?: true;
    updatedByUserId?: true;
    _all?: true;
};
export type DashboardManualStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardManualStatusWhereInput;
    orderBy?: Prisma.DashboardManualStatusOrderByWithRelationInput | Prisma.DashboardManualStatusOrderByWithRelationInput[];
    cursor?: Prisma.DashboardManualStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DashboardManualStatusCountAggregateInputType;
    _avg?: DashboardManualStatusAvgAggregateInputType;
    _sum?: DashboardManualStatusSumAggregateInputType;
    _min?: DashboardManualStatusMinAggregateInputType;
    _max?: DashboardManualStatusMaxAggregateInputType;
};
export type GetDashboardManualStatusAggregateType<T extends DashboardManualStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateDashboardManualStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDashboardManualStatus[P]> : Prisma.GetScalarType<T[P], AggregateDashboardManualStatus[P]>;
};
export type DashboardManualStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardManualStatusWhereInput;
    orderBy?: Prisma.DashboardManualStatusOrderByWithAggregationInput | Prisma.DashboardManualStatusOrderByWithAggregationInput[];
    by: Prisma.DashboardManualStatusScalarFieldEnum[] | Prisma.DashboardManualStatusScalarFieldEnum;
    having?: Prisma.DashboardManualStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DashboardManualStatusCountAggregateInputType | true;
    _avg?: DashboardManualStatusAvgAggregateInputType;
    _sum?: DashboardManualStatusSumAggregateInputType;
    _min?: DashboardManualStatusMinAggregateInputType;
    _max?: DashboardManualStatusMaxAggregateInputType;
};
export type DashboardManualStatusGroupByOutputType = {
    id: number;
    regulatoryFilingsStatus: string;
    shariahSsbComplianceStatus: string;
    operationalRiskStatus: string;
    kycComplianceStatus: string;
    amlStatus: string;
    reputationalRiskScore: number;
    reputationalRagStatus: string;
    secInspectionReadinessStatus: string;
    growthTargetAumKobo: bigint;
    updatedAt: Date;
    updatedByUserId: string | null;
    _count: DashboardManualStatusCountAggregateOutputType | null;
    _avg: DashboardManualStatusAvgAggregateOutputType | null;
    _sum: DashboardManualStatusSumAggregateOutputType | null;
    _min: DashboardManualStatusMinAggregateOutputType | null;
    _max: DashboardManualStatusMaxAggregateOutputType | null;
};
export type GetDashboardManualStatusGroupByPayload<T extends DashboardManualStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DashboardManualStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DashboardManualStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DashboardManualStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DashboardManualStatusGroupByOutputType[P]>;
}>>;
export type DashboardManualStatusWhereInput = {
    AND?: Prisma.DashboardManualStatusWhereInput | Prisma.DashboardManualStatusWhereInput[];
    OR?: Prisma.DashboardManualStatusWhereInput[];
    NOT?: Prisma.DashboardManualStatusWhereInput | Prisma.DashboardManualStatusWhereInput[];
    id?: Prisma.IntFilter<"DashboardManualStatus"> | number;
    regulatoryFilingsStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    shariahSsbComplianceStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    operationalRiskStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    kycComplianceStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    amlStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    reputationalRiskScore?: Prisma.IntFilter<"DashboardManualStatus"> | number;
    reputationalRagStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    secInspectionReadinessStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    growthTargetAumKobo?: Prisma.BigIntFilter<"DashboardManualStatus"> | bigint | number;
    updatedAt?: Prisma.DateTimeFilter<"DashboardManualStatus"> | Date | string;
    updatedByUserId?: Prisma.UuidNullableFilter<"DashboardManualStatus"> | string | null;
};
export type DashboardManualStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    regulatoryFilingsStatus?: Prisma.SortOrder;
    shariahSsbComplianceStatus?: Prisma.SortOrder;
    operationalRiskStatus?: Prisma.SortOrder;
    kycComplianceStatus?: Prisma.SortOrder;
    amlStatus?: Prisma.SortOrder;
    reputationalRiskScore?: Prisma.SortOrder;
    reputationalRagStatus?: Prisma.SortOrder;
    secInspectionReadinessStatus?: Prisma.SortOrder;
    growthTargetAumKobo?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type DashboardManualStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DashboardManualStatusWhereInput | Prisma.DashboardManualStatusWhereInput[];
    OR?: Prisma.DashboardManualStatusWhereInput[];
    NOT?: Prisma.DashboardManualStatusWhereInput | Prisma.DashboardManualStatusWhereInput[];
    regulatoryFilingsStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    shariahSsbComplianceStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    operationalRiskStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    kycComplianceStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    amlStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    reputationalRiskScore?: Prisma.IntFilter<"DashboardManualStatus"> | number;
    reputationalRagStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    secInspectionReadinessStatus?: Prisma.StringFilter<"DashboardManualStatus"> | string;
    growthTargetAumKobo?: Prisma.BigIntFilter<"DashboardManualStatus"> | bigint | number;
    updatedAt?: Prisma.DateTimeFilter<"DashboardManualStatus"> | Date | string;
    updatedByUserId?: Prisma.UuidNullableFilter<"DashboardManualStatus"> | string | null;
}, "id">;
export type DashboardManualStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    regulatoryFilingsStatus?: Prisma.SortOrder;
    shariahSsbComplianceStatus?: Prisma.SortOrder;
    operationalRiskStatus?: Prisma.SortOrder;
    kycComplianceStatus?: Prisma.SortOrder;
    amlStatus?: Prisma.SortOrder;
    reputationalRiskScore?: Prisma.SortOrder;
    reputationalRagStatus?: Prisma.SortOrder;
    secInspectionReadinessStatus?: Prisma.SortOrder;
    growthTargetAumKobo?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DashboardManualStatusCountOrderByAggregateInput;
    _avg?: Prisma.DashboardManualStatusAvgOrderByAggregateInput;
    _max?: Prisma.DashboardManualStatusMaxOrderByAggregateInput;
    _min?: Prisma.DashboardManualStatusMinOrderByAggregateInput;
    _sum?: Prisma.DashboardManualStatusSumOrderByAggregateInput;
};
export type DashboardManualStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.DashboardManualStatusScalarWhereWithAggregatesInput | Prisma.DashboardManualStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.DashboardManualStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DashboardManualStatusScalarWhereWithAggregatesInput | Prisma.DashboardManualStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DashboardManualStatus"> | number;
    regulatoryFilingsStatus?: Prisma.StringWithAggregatesFilter<"DashboardManualStatus"> | string;
    shariahSsbComplianceStatus?: Prisma.StringWithAggregatesFilter<"DashboardManualStatus"> | string;
    operationalRiskStatus?: Prisma.StringWithAggregatesFilter<"DashboardManualStatus"> | string;
    kycComplianceStatus?: Prisma.StringWithAggregatesFilter<"DashboardManualStatus"> | string;
    amlStatus?: Prisma.StringWithAggregatesFilter<"DashboardManualStatus"> | string;
    reputationalRiskScore?: Prisma.IntWithAggregatesFilter<"DashboardManualStatus"> | number;
    reputationalRagStatus?: Prisma.StringWithAggregatesFilter<"DashboardManualStatus"> | string;
    secInspectionReadinessStatus?: Prisma.StringWithAggregatesFilter<"DashboardManualStatus"> | string;
    growthTargetAumKobo?: Prisma.BigIntWithAggregatesFilter<"DashboardManualStatus"> | bigint | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DashboardManualStatus"> | Date | string;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"DashboardManualStatus"> | string | null;
};
export type DashboardManualStatusCreateInput = {
    id?: number;
    regulatoryFilingsStatus?: string;
    shariahSsbComplianceStatus?: string;
    operationalRiskStatus?: string;
    kycComplianceStatus?: string;
    amlStatus?: string;
    reputationalRiskScore?: number;
    reputationalRagStatus?: string;
    secInspectionReadinessStatus?: string;
    growthTargetAumKobo?: bigint | number;
    updatedAt?: Date | string;
    updatedByUserId?: string | null;
};
export type DashboardManualStatusUncheckedCreateInput = {
    id?: number;
    regulatoryFilingsStatus?: string;
    shariahSsbComplianceStatus?: string;
    operationalRiskStatus?: string;
    kycComplianceStatus?: string;
    amlStatus?: string;
    reputationalRiskScore?: number;
    reputationalRagStatus?: string;
    secInspectionReadinessStatus?: string;
    growthTargetAumKobo?: bigint | number;
    updatedAt?: Date | string;
    updatedByUserId?: string | null;
};
export type DashboardManualStatusUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    regulatoryFilingsStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    shariahSsbComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    operationalRiskStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    amlStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reputationalRiskScore?: Prisma.IntFieldUpdateOperationsInput | number;
    reputationalRagStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    secInspectionReadinessStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    growthTargetAumKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DashboardManualStatusUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    regulatoryFilingsStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    shariahSsbComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    operationalRiskStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    amlStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reputationalRiskScore?: Prisma.IntFieldUpdateOperationsInput | number;
    reputationalRagStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    secInspectionReadinessStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    growthTargetAumKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DashboardManualStatusCreateManyInput = {
    id?: number;
    regulatoryFilingsStatus?: string;
    shariahSsbComplianceStatus?: string;
    operationalRiskStatus?: string;
    kycComplianceStatus?: string;
    amlStatus?: string;
    reputationalRiskScore?: number;
    reputationalRagStatus?: string;
    secInspectionReadinessStatus?: string;
    growthTargetAumKobo?: bigint | number;
    updatedAt?: Date | string;
    updatedByUserId?: string | null;
};
export type DashboardManualStatusUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    regulatoryFilingsStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    shariahSsbComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    operationalRiskStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    amlStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reputationalRiskScore?: Prisma.IntFieldUpdateOperationsInput | number;
    reputationalRagStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    secInspectionReadinessStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    growthTargetAumKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DashboardManualStatusUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    regulatoryFilingsStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    shariahSsbComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    operationalRiskStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycComplianceStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    amlStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    reputationalRiskScore?: Prisma.IntFieldUpdateOperationsInput | number;
    reputationalRagStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    secInspectionReadinessStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    growthTargetAumKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DashboardManualStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatoryFilingsStatus?: Prisma.SortOrder;
    shariahSsbComplianceStatus?: Prisma.SortOrder;
    operationalRiskStatus?: Prisma.SortOrder;
    kycComplianceStatus?: Prisma.SortOrder;
    amlStatus?: Prisma.SortOrder;
    reputationalRiskScore?: Prisma.SortOrder;
    reputationalRagStatus?: Prisma.SortOrder;
    secInspectionReadinessStatus?: Prisma.SortOrder;
    growthTargetAumKobo?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
};
export type DashboardManualStatusAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reputationalRiskScore?: Prisma.SortOrder;
    growthTargetAumKobo?: Prisma.SortOrder;
};
export type DashboardManualStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatoryFilingsStatus?: Prisma.SortOrder;
    shariahSsbComplianceStatus?: Prisma.SortOrder;
    operationalRiskStatus?: Prisma.SortOrder;
    kycComplianceStatus?: Prisma.SortOrder;
    amlStatus?: Prisma.SortOrder;
    reputationalRiskScore?: Prisma.SortOrder;
    reputationalRagStatus?: Prisma.SortOrder;
    secInspectionReadinessStatus?: Prisma.SortOrder;
    growthTargetAumKobo?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
};
export type DashboardManualStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatoryFilingsStatus?: Prisma.SortOrder;
    shariahSsbComplianceStatus?: Prisma.SortOrder;
    operationalRiskStatus?: Prisma.SortOrder;
    kycComplianceStatus?: Prisma.SortOrder;
    amlStatus?: Prisma.SortOrder;
    reputationalRiskScore?: Prisma.SortOrder;
    reputationalRagStatus?: Prisma.SortOrder;
    secInspectionReadinessStatus?: Prisma.SortOrder;
    growthTargetAumKobo?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
};
export type DashboardManualStatusSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reputationalRiskScore?: Prisma.SortOrder;
    growthTargetAumKobo?: Prisma.SortOrder;
};
export type DashboardManualStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatoryFilingsStatus?: boolean;
    shariahSsbComplianceStatus?: boolean;
    operationalRiskStatus?: boolean;
    kycComplianceStatus?: boolean;
    amlStatus?: boolean;
    reputationalRiskScore?: boolean;
    reputationalRagStatus?: boolean;
    secInspectionReadinessStatus?: boolean;
    growthTargetAumKobo?: boolean;
    updatedAt?: boolean;
    updatedByUserId?: boolean;
}, ExtArgs["result"]["dashboardManualStatus"]>;
export type DashboardManualStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatoryFilingsStatus?: boolean;
    shariahSsbComplianceStatus?: boolean;
    operationalRiskStatus?: boolean;
    kycComplianceStatus?: boolean;
    amlStatus?: boolean;
    reputationalRiskScore?: boolean;
    reputationalRagStatus?: boolean;
    secInspectionReadinessStatus?: boolean;
    growthTargetAumKobo?: boolean;
    updatedAt?: boolean;
    updatedByUserId?: boolean;
}, ExtArgs["result"]["dashboardManualStatus"]>;
export type DashboardManualStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatoryFilingsStatus?: boolean;
    shariahSsbComplianceStatus?: boolean;
    operationalRiskStatus?: boolean;
    kycComplianceStatus?: boolean;
    amlStatus?: boolean;
    reputationalRiskScore?: boolean;
    reputationalRagStatus?: boolean;
    secInspectionReadinessStatus?: boolean;
    growthTargetAumKobo?: boolean;
    updatedAt?: boolean;
    updatedByUserId?: boolean;
}, ExtArgs["result"]["dashboardManualStatus"]>;
export type DashboardManualStatusSelectScalar = {
    id?: boolean;
    regulatoryFilingsStatus?: boolean;
    shariahSsbComplianceStatus?: boolean;
    operationalRiskStatus?: boolean;
    kycComplianceStatus?: boolean;
    amlStatus?: boolean;
    reputationalRiskScore?: boolean;
    reputationalRagStatus?: boolean;
    secInspectionReadinessStatus?: boolean;
    growthTargetAumKobo?: boolean;
    updatedAt?: boolean;
    updatedByUserId?: boolean;
};
export type DashboardManualStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "regulatoryFilingsStatus" | "shariahSsbComplianceStatus" | "operationalRiskStatus" | "kycComplianceStatus" | "amlStatus" | "reputationalRiskScore" | "reputationalRagStatus" | "secInspectionReadinessStatus" | "growthTargetAumKobo" | "updatedAt" | "updatedByUserId", ExtArgs["result"]["dashboardManualStatus"]>;
export type $DashboardManualStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DashboardManualStatus";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        regulatoryFilingsStatus: string;
        shariahSsbComplianceStatus: string;
        operationalRiskStatus: string;
        kycComplianceStatus: string;
        amlStatus: string;
        reputationalRiskScore: number;
        reputationalRagStatus: string;
        secInspectionReadinessStatus: string;
        growthTargetAumKobo: bigint;
        updatedAt: Date;
        updatedByUserId: string | null;
    }, ExtArgs["result"]["dashboardManualStatus"]>;
    composites: {};
};
export type DashboardManualStatusGetPayload<S extends boolean | null | undefined | DashboardManualStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload, S>;
export type DashboardManualStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DashboardManualStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DashboardManualStatusCountAggregateInputType | true;
};
export interface DashboardManualStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DashboardManualStatus'];
        meta: {
            name: 'DashboardManualStatus';
        };
    };
    findUnique<T extends DashboardManualStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DashboardManualStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DashboardManualStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, DashboardManualStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DashboardManualStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DashboardManualStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DashboardManualStatusFindManyArgs>(args?: Prisma.SelectSubset<T, DashboardManualStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DashboardManualStatusCreateArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusCreateArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DashboardManualStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, DashboardManualStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DashboardManualStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DashboardManualStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DashboardManualStatusDeleteArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DashboardManualStatusUpdateArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DashboardManualStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, DashboardManualStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DashboardManualStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DashboardManualStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DashboardManualStatusUpsertArgs>(args: Prisma.SelectSubset<T, DashboardManualStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__DashboardManualStatusClient<runtime.Types.Result.GetResult<Prisma.$DashboardManualStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DashboardManualStatusCountArgs>(args?: Prisma.Subset<T, DashboardManualStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DashboardManualStatusCountAggregateOutputType> : number>;
    aggregate<T extends DashboardManualStatusAggregateArgs>(args: Prisma.Subset<T, DashboardManualStatusAggregateArgs>): Prisma.PrismaPromise<GetDashboardManualStatusAggregateType<T>>;
    groupBy<T extends DashboardManualStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DashboardManualStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: DashboardManualStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DashboardManualStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardManualStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DashboardManualStatusFieldRefs;
}
export interface Prisma__DashboardManualStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DashboardManualStatusFieldRefs {
    readonly id: Prisma.FieldRef<"DashboardManualStatus", 'Int'>;
    readonly regulatoryFilingsStatus: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
    readonly shariahSsbComplianceStatus: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
    readonly operationalRiskStatus: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
    readonly kycComplianceStatus: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
    readonly amlStatus: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
    readonly reputationalRiskScore: Prisma.FieldRef<"DashboardManualStatus", 'Int'>;
    readonly reputationalRagStatus: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
    readonly secInspectionReadinessStatus: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
    readonly growthTargetAumKobo: Prisma.FieldRef<"DashboardManualStatus", 'BigInt'>;
    readonly updatedAt: Prisma.FieldRef<"DashboardManualStatus", 'DateTime'>;
    readonly updatedByUserId: Prisma.FieldRef<"DashboardManualStatus", 'String'>;
}
export type DashboardManualStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    where: Prisma.DashboardManualStatusWhereUniqueInput;
};
export type DashboardManualStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    where: Prisma.DashboardManualStatusWhereUniqueInput;
};
export type DashboardManualStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    where?: Prisma.DashboardManualStatusWhereInput;
    orderBy?: Prisma.DashboardManualStatusOrderByWithRelationInput | Prisma.DashboardManualStatusOrderByWithRelationInput[];
    cursor?: Prisma.DashboardManualStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardManualStatusScalarFieldEnum | Prisma.DashboardManualStatusScalarFieldEnum[];
};
export type DashboardManualStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    where?: Prisma.DashboardManualStatusWhereInput;
    orderBy?: Prisma.DashboardManualStatusOrderByWithRelationInput | Prisma.DashboardManualStatusOrderByWithRelationInput[];
    cursor?: Prisma.DashboardManualStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardManualStatusScalarFieldEnum | Prisma.DashboardManualStatusScalarFieldEnum[];
};
export type DashboardManualStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    where?: Prisma.DashboardManualStatusWhereInput;
    orderBy?: Prisma.DashboardManualStatusOrderByWithRelationInput | Prisma.DashboardManualStatusOrderByWithRelationInput[];
    cursor?: Prisma.DashboardManualStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardManualStatusScalarFieldEnum | Prisma.DashboardManualStatusScalarFieldEnum[];
};
export type DashboardManualStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardManualStatusCreateInput, Prisma.DashboardManualStatusUncheckedCreateInput>;
};
export type DashboardManualStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DashboardManualStatusCreateManyInput | Prisma.DashboardManualStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DashboardManualStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    data: Prisma.DashboardManualStatusCreateManyInput | Prisma.DashboardManualStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DashboardManualStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardManualStatusUpdateInput, Prisma.DashboardManualStatusUncheckedUpdateInput>;
    where: Prisma.DashboardManualStatusWhereUniqueInput;
};
export type DashboardManualStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DashboardManualStatusUpdateManyMutationInput, Prisma.DashboardManualStatusUncheckedUpdateManyInput>;
    where?: Prisma.DashboardManualStatusWhereInput;
    limit?: number;
};
export type DashboardManualStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardManualStatusUpdateManyMutationInput, Prisma.DashboardManualStatusUncheckedUpdateManyInput>;
    where?: Prisma.DashboardManualStatusWhereInput;
    limit?: number;
};
export type DashboardManualStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    where: Prisma.DashboardManualStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.DashboardManualStatusCreateInput, Prisma.DashboardManualStatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DashboardManualStatusUpdateInput, Prisma.DashboardManualStatusUncheckedUpdateInput>;
};
export type DashboardManualStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
    where: Prisma.DashboardManualStatusWhereUniqueInput;
};
export type DashboardManualStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardManualStatusWhereInput;
    limit?: number;
};
export type DashboardManualStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardManualStatusSelect<ExtArgs> | null;
    omit?: Prisma.DashboardManualStatusOmit<ExtArgs> | null;
};
