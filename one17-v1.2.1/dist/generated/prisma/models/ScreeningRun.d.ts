import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScreeningRunModel = runtime.Types.Result.DefaultSelection<Prisma.$ScreeningRunPayload>;
export type AggregateScreeningRun = {
    _count: ScreeningRunCountAggregateOutputType | null;
    _avg: ScreeningRunAvgAggregateOutputType | null;
    _sum: ScreeningRunSumAggregateOutputType | null;
    _min: ScreeningRunMinAggregateOutputType | null;
    _max: ScreeningRunMaxAggregateOutputType | null;
};
export type ScreeningRunAvgAggregateOutputType = {
    thresholdUsed: number | null;
};
export type ScreeningRunSumAggregateOutputType = {
    thresholdUsed: number | null;
};
export type ScreeningRunMinAggregateOutputType = {
    id: string | null;
    subjectType: $Enums.ScreeningSubjectType | null;
    subjectId: string | null;
    subjectNameScreened: string | null;
    providerMode: $Enums.ScreeningProviderMode | null;
    screenedAt: Date | null;
    thresholdUsed: number | null;
    outcome: string | null;
    initiatedByUserId: string | null;
    fingerprint: string | null;
};
export type ScreeningRunMaxAggregateOutputType = {
    id: string | null;
    subjectType: $Enums.ScreeningSubjectType | null;
    subjectId: string | null;
    subjectNameScreened: string | null;
    providerMode: $Enums.ScreeningProviderMode | null;
    screenedAt: Date | null;
    thresholdUsed: number | null;
    outcome: string | null;
    initiatedByUserId: string | null;
    fingerprint: string | null;
};
export type ScreeningRunCountAggregateOutputType = {
    id: number;
    subjectType: number;
    subjectId: number;
    subjectNameScreened: number;
    providerMode: number;
    screenedAt: number;
    thresholdUsed: number;
    listVersionsScreened: number;
    outcome: number;
    initiatedByUserId: number;
    fingerprint: number;
    _all: number;
};
export type ScreeningRunAvgAggregateInputType = {
    thresholdUsed?: true;
};
export type ScreeningRunSumAggregateInputType = {
    thresholdUsed?: true;
};
export type ScreeningRunMinAggregateInputType = {
    id?: true;
    subjectType?: true;
    subjectId?: true;
    subjectNameScreened?: true;
    providerMode?: true;
    screenedAt?: true;
    thresholdUsed?: true;
    outcome?: true;
    initiatedByUserId?: true;
    fingerprint?: true;
};
export type ScreeningRunMaxAggregateInputType = {
    id?: true;
    subjectType?: true;
    subjectId?: true;
    subjectNameScreened?: true;
    providerMode?: true;
    screenedAt?: true;
    thresholdUsed?: true;
    outcome?: true;
    initiatedByUserId?: true;
    fingerprint?: true;
};
export type ScreeningRunCountAggregateInputType = {
    id?: true;
    subjectType?: true;
    subjectId?: true;
    subjectNameScreened?: true;
    providerMode?: true;
    screenedAt?: true;
    thresholdUsed?: true;
    listVersionsScreened?: true;
    outcome?: true;
    initiatedByUserId?: true;
    fingerprint?: true;
    _all?: true;
};
export type ScreeningRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningRunWhereInput;
    orderBy?: Prisma.ScreeningRunOrderByWithRelationInput | Prisma.ScreeningRunOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScreeningRunCountAggregateInputType;
    _avg?: ScreeningRunAvgAggregateInputType;
    _sum?: ScreeningRunSumAggregateInputType;
    _min?: ScreeningRunMinAggregateInputType;
    _max?: ScreeningRunMaxAggregateInputType;
};
export type GetScreeningRunAggregateType<T extends ScreeningRunAggregateArgs> = {
    [P in keyof T & keyof AggregateScreeningRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScreeningRun[P]> : Prisma.GetScalarType<T[P], AggregateScreeningRun[P]>;
};
export type ScreeningRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningRunWhereInput;
    orderBy?: Prisma.ScreeningRunOrderByWithAggregationInput | Prisma.ScreeningRunOrderByWithAggregationInput[];
    by: Prisma.ScreeningRunScalarFieldEnum[] | Prisma.ScreeningRunScalarFieldEnum;
    having?: Prisma.ScreeningRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScreeningRunCountAggregateInputType | true;
    _avg?: ScreeningRunAvgAggregateInputType;
    _sum?: ScreeningRunSumAggregateInputType;
    _min?: ScreeningRunMinAggregateInputType;
    _max?: ScreeningRunMaxAggregateInputType;
};
export type ScreeningRunGroupByOutputType = {
    id: string;
    subjectType: $Enums.ScreeningSubjectType;
    subjectId: string;
    subjectNameScreened: string;
    providerMode: $Enums.ScreeningProviderMode;
    screenedAt: Date;
    thresholdUsed: number;
    listVersionsScreened: runtime.JsonValue;
    outcome: string;
    initiatedByUserId: string | null;
    fingerprint: string | null;
    _count: ScreeningRunCountAggregateOutputType | null;
    _avg: ScreeningRunAvgAggregateOutputType | null;
    _sum: ScreeningRunSumAggregateOutputType | null;
    _min: ScreeningRunMinAggregateOutputType | null;
    _max: ScreeningRunMaxAggregateOutputType | null;
};
export type GetScreeningRunGroupByPayload<T extends ScreeningRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScreeningRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScreeningRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScreeningRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScreeningRunGroupByOutputType[P]>;
}>>;
export type ScreeningRunWhereInput = {
    AND?: Prisma.ScreeningRunWhereInput | Prisma.ScreeningRunWhereInput[];
    OR?: Prisma.ScreeningRunWhereInput[];
    NOT?: Prisma.ScreeningRunWhereInput | Prisma.ScreeningRunWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningRun"> | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeFilter<"ScreeningRun"> | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFilter<"ScreeningRun"> | string;
    subjectNameScreened?: Prisma.StringFilter<"ScreeningRun"> | string;
    providerMode?: Prisma.EnumScreeningProviderModeFilter<"ScreeningRun"> | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFilter<"ScreeningRun"> | Date | string;
    thresholdUsed?: Prisma.IntFilter<"ScreeningRun"> | number;
    listVersionsScreened?: Prisma.JsonFilter<"ScreeningRun">;
    outcome?: Prisma.StringFilter<"ScreeningRun"> | string;
    initiatedByUserId?: Prisma.UuidNullableFilter<"ScreeningRun"> | string | null;
    fingerprint?: Prisma.StringNullableFilter<"ScreeningRun"> | string | null;
    hits?: Prisma.ScreeningHitListRelationFilter;
};
export type ScreeningRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    subjectType?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    subjectNameScreened?: Prisma.SortOrder;
    providerMode?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    thresholdUsed?: Prisma.SortOrder;
    listVersionsScreened?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fingerprint?: Prisma.SortOrderInput | Prisma.SortOrder;
    hits?: Prisma.ScreeningHitOrderByRelationAggregateInput;
};
export type ScreeningRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScreeningRunWhereInput | Prisma.ScreeningRunWhereInput[];
    OR?: Prisma.ScreeningRunWhereInput[];
    NOT?: Prisma.ScreeningRunWhereInput | Prisma.ScreeningRunWhereInput[];
    subjectType?: Prisma.EnumScreeningSubjectTypeFilter<"ScreeningRun"> | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFilter<"ScreeningRun"> | string;
    subjectNameScreened?: Prisma.StringFilter<"ScreeningRun"> | string;
    providerMode?: Prisma.EnumScreeningProviderModeFilter<"ScreeningRun"> | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFilter<"ScreeningRun"> | Date | string;
    thresholdUsed?: Prisma.IntFilter<"ScreeningRun"> | number;
    listVersionsScreened?: Prisma.JsonFilter<"ScreeningRun">;
    outcome?: Prisma.StringFilter<"ScreeningRun"> | string;
    initiatedByUserId?: Prisma.UuidNullableFilter<"ScreeningRun"> | string | null;
    fingerprint?: Prisma.StringNullableFilter<"ScreeningRun"> | string | null;
    hits?: Prisma.ScreeningHitListRelationFilter;
}, "id">;
export type ScreeningRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    subjectType?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    subjectNameScreened?: Prisma.SortOrder;
    providerMode?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    thresholdUsed?: Prisma.SortOrder;
    listVersionsScreened?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fingerprint?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ScreeningRunCountOrderByAggregateInput;
    _avg?: Prisma.ScreeningRunAvgOrderByAggregateInput;
    _max?: Prisma.ScreeningRunMaxOrderByAggregateInput;
    _min?: Prisma.ScreeningRunMinOrderByAggregateInput;
    _sum?: Prisma.ScreeningRunSumOrderByAggregateInput;
};
export type ScreeningRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScreeningRunScalarWhereWithAggregatesInput | Prisma.ScreeningRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScreeningRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScreeningRunScalarWhereWithAggregatesInput | Prisma.ScreeningRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ScreeningRun"> | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeWithAggregatesFilter<"ScreeningRun"> | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringWithAggregatesFilter<"ScreeningRun"> | string;
    subjectNameScreened?: Prisma.StringWithAggregatesFilter<"ScreeningRun"> | string;
    providerMode?: Prisma.EnumScreeningProviderModeWithAggregatesFilter<"ScreeningRun"> | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeWithAggregatesFilter<"ScreeningRun"> | Date | string;
    thresholdUsed?: Prisma.IntWithAggregatesFilter<"ScreeningRun"> | number;
    listVersionsScreened?: Prisma.JsonWithAggregatesFilter<"ScreeningRun">;
    outcome?: Prisma.StringWithAggregatesFilter<"ScreeningRun"> | string;
    initiatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ScreeningRun"> | string | null;
    fingerprint?: Prisma.StringNullableWithAggregatesFilter<"ScreeningRun"> | string | null;
};
export type ScreeningRunCreateInput = {
    id?: string;
    subjectType: $Enums.ScreeningSubjectType;
    subjectId: string;
    subjectNameScreened: string;
    providerMode: $Enums.ScreeningProviderMode;
    screenedAt?: Date | string;
    thresholdUsed: number;
    listVersionsScreened: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome: string;
    initiatedByUserId?: string | null;
    fingerprint?: string | null;
    hits?: Prisma.ScreeningHitCreateNestedManyWithoutRunInput;
};
export type ScreeningRunUncheckedCreateInput = {
    id?: string;
    subjectType: $Enums.ScreeningSubjectType;
    subjectId: string;
    subjectNameScreened: string;
    providerMode: $Enums.ScreeningProviderMode;
    screenedAt?: Date | string;
    thresholdUsed: number;
    listVersionsScreened: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome: string;
    initiatedByUserId?: string | null;
    fingerprint?: string | null;
    hits?: Prisma.ScreeningHitUncheckedCreateNestedManyWithoutRunInput;
};
export type ScreeningRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeFieldUpdateOperationsInput | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectNameScreened?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholdUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    listVersionsScreened?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome?: Prisma.StringFieldUpdateOperationsInput | string;
    initiatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hits?: Prisma.ScreeningHitUpdateManyWithoutRunNestedInput;
};
export type ScreeningRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeFieldUpdateOperationsInput | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectNameScreened?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholdUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    listVersionsScreened?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome?: Prisma.StringFieldUpdateOperationsInput | string;
    initiatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hits?: Prisma.ScreeningHitUncheckedUpdateManyWithoutRunNestedInput;
};
export type ScreeningRunCreateManyInput = {
    id?: string;
    subjectType: $Enums.ScreeningSubjectType;
    subjectId: string;
    subjectNameScreened: string;
    providerMode: $Enums.ScreeningProviderMode;
    screenedAt?: Date | string;
    thresholdUsed: number;
    listVersionsScreened: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome: string;
    initiatedByUserId?: string | null;
    fingerprint?: string | null;
};
export type ScreeningRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeFieldUpdateOperationsInput | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectNameScreened?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholdUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    listVersionsScreened?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome?: Prisma.StringFieldUpdateOperationsInput | string;
    initiatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeFieldUpdateOperationsInput | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectNameScreened?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholdUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    listVersionsScreened?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome?: Prisma.StringFieldUpdateOperationsInput | string;
    initiatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectType?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    subjectNameScreened?: Prisma.SortOrder;
    providerMode?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    thresholdUsed?: Prisma.SortOrder;
    listVersionsScreened?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
};
export type ScreeningRunAvgOrderByAggregateInput = {
    thresholdUsed?: Prisma.SortOrder;
};
export type ScreeningRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectType?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    subjectNameScreened?: Prisma.SortOrder;
    providerMode?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    thresholdUsed?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
};
export type ScreeningRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subjectType?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    subjectNameScreened?: Prisma.SortOrder;
    providerMode?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    thresholdUsed?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
};
export type ScreeningRunSumOrderByAggregateInput = {
    thresholdUsed?: Prisma.SortOrder;
};
export type ScreeningRunScalarRelationFilter = {
    is?: Prisma.ScreeningRunWhereInput;
    isNot?: Prisma.ScreeningRunWhereInput;
};
export type EnumScreeningSubjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ScreeningSubjectType;
};
export type ScreeningRunCreateNestedOneWithoutHitsInput = {
    create?: Prisma.XOR<Prisma.ScreeningRunCreateWithoutHitsInput, Prisma.ScreeningRunUncheckedCreateWithoutHitsInput>;
    connectOrCreate?: Prisma.ScreeningRunCreateOrConnectWithoutHitsInput;
    connect?: Prisma.ScreeningRunWhereUniqueInput;
};
export type ScreeningRunUpdateOneRequiredWithoutHitsNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningRunCreateWithoutHitsInput, Prisma.ScreeningRunUncheckedCreateWithoutHitsInput>;
    connectOrCreate?: Prisma.ScreeningRunCreateOrConnectWithoutHitsInput;
    upsert?: Prisma.ScreeningRunUpsertWithoutHitsInput;
    connect?: Prisma.ScreeningRunWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScreeningRunUpdateToOneWithWhereWithoutHitsInput, Prisma.ScreeningRunUpdateWithoutHitsInput>, Prisma.ScreeningRunUncheckedUpdateWithoutHitsInput>;
};
export type ScreeningRunCreateWithoutHitsInput = {
    id?: string;
    subjectType: $Enums.ScreeningSubjectType;
    subjectId: string;
    subjectNameScreened: string;
    providerMode: $Enums.ScreeningProviderMode;
    screenedAt?: Date | string;
    thresholdUsed: number;
    listVersionsScreened: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome: string;
    initiatedByUserId?: string | null;
    fingerprint?: string | null;
};
export type ScreeningRunUncheckedCreateWithoutHitsInput = {
    id?: string;
    subjectType: $Enums.ScreeningSubjectType;
    subjectId: string;
    subjectNameScreened: string;
    providerMode: $Enums.ScreeningProviderMode;
    screenedAt?: Date | string;
    thresholdUsed: number;
    listVersionsScreened: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome: string;
    initiatedByUserId?: string | null;
    fingerprint?: string | null;
};
export type ScreeningRunCreateOrConnectWithoutHitsInput = {
    where: Prisma.ScreeningRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningRunCreateWithoutHitsInput, Prisma.ScreeningRunUncheckedCreateWithoutHitsInput>;
};
export type ScreeningRunUpsertWithoutHitsInput = {
    update: Prisma.XOR<Prisma.ScreeningRunUpdateWithoutHitsInput, Prisma.ScreeningRunUncheckedUpdateWithoutHitsInput>;
    create: Prisma.XOR<Prisma.ScreeningRunCreateWithoutHitsInput, Prisma.ScreeningRunUncheckedCreateWithoutHitsInput>;
    where?: Prisma.ScreeningRunWhereInput;
};
export type ScreeningRunUpdateToOneWithWhereWithoutHitsInput = {
    where?: Prisma.ScreeningRunWhereInput;
    data: Prisma.XOR<Prisma.ScreeningRunUpdateWithoutHitsInput, Prisma.ScreeningRunUncheckedUpdateWithoutHitsInput>;
};
export type ScreeningRunUpdateWithoutHitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeFieldUpdateOperationsInput | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectNameScreened?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholdUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    listVersionsScreened?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome?: Prisma.StringFieldUpdateOperationsInput | string;
    initiatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningRunUncheckedUpdateWithoutHitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectType?: Prisma.EnumScreeningSubjectTypeFieldUpdateOperationsInput | $Enums.ScreeningSubjectType;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectNameScreened?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMode?: Prisma.EnumScreeningProviderModeFieldUpdateOperationsInput | $Enums.ScreeningProviderMode;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholdUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    listVersionsScreened?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    outcome?: Prisma.StringFieldUpdateOperationsInput | string;
    initiatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprint?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScreeningRunCountOutputType = {
    hits: number;
};
export type ScreeningRunCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hits?: boolean | ScreeningRunCountOutputTypeCountHitsArgs;
};
export type ScreeningRunCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunCountOutputTypeSelect<ExtArgs> | null;
};
export type ScreeningRunCountOutputTypeCountHitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningHitWhereInput;
};
export type ScreeningRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectType?: boolean;
    subjectId?: boolean;
    subjectNameScreened?: boolean;
    providerMode?: boolean;
    screenedAt?: boolean;
    thresholdUsed?: boolean;
    listVersionsScreened?: boolean;
    outcome?: boolean;
    initiatedByUserId?: boolean;
    fingerprint?: boolean;
    hits?: boolean | Prisma.ScreeningRun$hitsArgs<ExtArgs>;
    _count?: boolean | Prisma.ScreeningRunCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["screeningRun"]>;
export type ScreeningRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectType?: boolean;
    subjectId?: boolean;
    subjectNameScreened?: boolean;
    providerMode?: boolean;
    screenedAt?: boolean;
    thresholdUsed?: boolean;
    listVersionsScreened?: boolean;
    outcome?: boolean;
    initiatedByUserId?: boolean;
    fingerprint?: boolean;
}, ExtArgs["result"]["screeningRun"]>;
export type ScreeningRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subjectType?: boolean;
    subjectId?: boolean;
    subjectNameScreened?: boolean;
    providerMode?: boolean;
    screenedAt?: boolean;
    thresholdUsed?: boolean;
    listVersionsScreened?: boolean;
    outcome?: boolean;
    initiatedByUserId?: boolean;
    fingerprint?: boolean;
}, ExtArgs["result"]["screeningRun"]>;
export type ScreeningRunSelectScalar = {
    id?: boolean;
    subjectType?: boolean;
    subjectId?: boolean;
    subjectNameScreened?: boolean;
    providerMode?: boolean;
    screenedAt?: boolean;
    thresholdUsed?: boolean;
    listVersionsScreened?: boolean;
    outcome?: boolean;
    initiatedByUserId?: boolean;
    fingerprint?: boolean;
};
export type ScreeningRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "subjectType" | "subjectId" | "subjectNameScreened" | "providerMode" | "screenedAt" | "thresholdUsed" | "listVersionsScreened" | "outcome" | "initiatedByUserId" | "fingerprint", ExtArgs["result"]["screeningRun"]>;
export type ScreeningRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hits?: boolean | Prisma.ScreeningRun$hitsArgs<ExtArgs>;
    _count?: boolean | Prisma.ScreeningRunCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ScreeningRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ScreeningRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ScreeningRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScreeningRun";
    objects: {
        hits: Prisma.$ScreeningHitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        subjectType: $Enums.ScreeningSubjectType;
        subjectId: string;
        subjectNameScreened: string;
        providerMode: $Enums.ScreeningProviderMode;
        screenedAt: Date;
        thresholdUsed: number;
        listVersionsScreened: runtime.JsonValue;
        outcome: string;
        initiatedByUserId: string | null;
        fingerprint: string | null;
    }, ExtArgs["result"]["screeningRun"]>;
    composites: {};
};
export type ScreeningRunGetPayload<S extends boolean | null | undefined | ScreeningRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload, S>;
export type ScreeningRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScreeningRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScreeningRunCountAggregateInputType | true;
};
export interface ScreeningRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScreeningRun'];
        meta: {
            name: 'ScreeningRun';
        };
    };
    findUnique<T extends ScreeningRunFindUniqueArgs>(args: Prisma.SelectSubset<T, ScreeningRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScreeningRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScreeningRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScreeningRunFindFirstArgs>(args?: Prisma.SelectSubset<T, ScreeningRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScreeningRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScreeningRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScreeningRunFindManyArgs>(args?: Prisma.SelectSubset<T, ScreeningRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScreeningRunCreateArgs>(args: Prisma.SelectSubset<T, ScreeningRunCreateArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScreeningRunCreateManyArgs>(args?: Prisma.SelectSubset<T, ScreeningRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScreeningRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScreeningRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScreeningRunDeleteArgs>(args: Prisma.SelectSubset<T, ScreeningRunDeleteArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScreeningRunUpdateArgs>(args: Prisma.SelectSubset<T, ScreeningRunUpdateArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScreeningRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScreeningRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScreeningRunUpdateManyArgs>(args: Prisma.SelectSubset<T, ScreeningRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScreeningRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScreeningRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScreeningRunUpsertArgs>(args: Prisma.SelectSubset<T, ScreeningRunUpsertArgs<ExtArgs>>): Prisma.Prisma__ScreeningRunClient<runtime.Types.Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScreeningRunCountArgs>(args?: Prisma.Subset<T, ScreeningRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScreeningRunCountAggregateOutputType> : number>;
    aggregate<T extends ScreeningRunAggregateArgs>(args: Prisma.Subset<T, ScreeningRunAggregateArgs>): Prisma.PrismaPromise<GetScreeningRunAggregateType<T>>;
    groupBy<T extends ScreeningRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScreeningRunGroupByArgs['orderBy'];
    } : {
        orderBy?: ScreeningRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScreeningRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScreeningRunFieldRefs;
}
export interface Prisma__ScreeningRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    hits<T extends Prisma.ScreeningRun$hitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScreeningRun$hitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScreeningRunFieldRefs {
    readonly id: Prisma.FieldRef<"ScreeningRun", 'String'>;
    readonly subjectType: Prisma.FieldRef<"ScreeningRun", 'ScreeningSubjectType'>;
    readonly subjectId: Prisma.FieldRef<"ScreeningRun", 'String'>;
    readonly subjectNameScreened: Prisma.FieldRef<"ScreeningRun", 'String'>;
    readonly providerMode: Prisma.FieldRef<"ScreeningRun", 'ScreeningProviderMode'>;
    readonly screenedAt: Prisma.FieldRef<"ScreeningRun", 'DateTime'>;
    readonly thresholdUsed: Prisma.FieldRef<"ScreeningRun", 'Int'>;
    readonly listVersionsScreened: Prisma.FieldRef<"ScreeningRun", 'Json'>;
    readonly outcome: Prisma.FieldRef<"ScreeningRun", 'String'>;
    readonly initiatedByUserId: Prisma.FieldRef<"ScreeningRun", 'String'>;
    readonly fingerprint: Prisma.FieldRef<"ScreeningRun", 'String'>;
}
export type ScreeningRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    where: Prisma.ScreeningRunWhereUniqueInput;
};
export type ScreeningRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    where: Prisma.ScreeningRunWhereUniqueInput;
};
export type ScreeningRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    where?: Prisma.ScreeningRunWhereInput;
    orderBy?: Prisma.ScreeningRunOrderByWithRelationInput | Prisma.ScreeningRunOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningRunScalarFieldEnum | Prisma.ScreeningRunScalarFieldEnum[];
};
export type ScreeningRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    where?: Prisma.ScreeningRunWhereInput;
    orderBy?: Prisma.ScreeningRunOrderByWithRelationInput | Prisma.ScreeningRunOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningRunScalarFieldEnum | Prisma.ScreeningRunScalarFieldEnum[];
};
export type ScreeningRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    where?: Prisma.ScreeningRunWhereInput;
    orderBy?: Prisma.ScreeningRunOrderByWithRelationInput | Prisma.ScreeningRunOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningRunScalarFieldEnum | Prisma.ScreeningRunScalarFieldEnum[];
};
export type ScreeningRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningRunCreateInput, Prisma.ScreeningRunUncheckedCreateInput>;
};
export type ScreeningRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScreeningRunCreateManyInput | Prisma.ScreeningRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    data: Prisma.ScreeningRunCreateManyInput | Prisma.ScreeningRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningRunUpdateInput, Prisma.ScreeningRunUncheckedUpdateInput>;
    where: Prisma.ScreeningRunWhereUniqueInput;
};
export type ScreeningRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScreeningRunUpdateManyMutationInput, Prisma.ScreeningRunUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningRunWhereInput;
    limit?: number;
};
export type ScreeningRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningRunUpdateManyMutationInput, Prisma.ScreeningRunUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningRunWhereInput;
    limit?: number;
};
export type ScreeningRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    where: Prisma.ScreeningRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningRunCreateInput, Prisma.ScreeningRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScreeningRunUpdateInput, Prisma.ScreeningRunUncheckedUpdateInput>;
};
export type ScreeningRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
    where: Prisma.ScreeningRunWhereUniqueInput;
};
export type ScreeningRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningRunWhereInput;
    limit?: number;
};
export type ScreeningRun$hitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where?: Prisma.ScreeningHitWhereInput;
    orderBy?: Prisma.ScreeningHitOrderByWithRelationInput | Prisma.ScreeningHitOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningHitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningHitScalarFieldEnum | Prisma.ScreeningHitScalarFieldEnum[];
};
export type ScreeningRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningRunSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningRunOmit<ExtArgs> | null;
    include?: Prisma.ScreeningRunInclude<ExtArgs> | null;
};
