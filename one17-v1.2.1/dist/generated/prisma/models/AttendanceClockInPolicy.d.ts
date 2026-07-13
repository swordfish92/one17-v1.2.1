import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceClockInPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceClockInPolicyPayload>;
export type AggregateAttendanceClockInPolicy = {
    _count: AttendanceClockInPolicyCountAggregateOutputType | null;
    _avg: AttendanceClockInPolicyAvgAggregateOutputType | null;
    _sum: AttendanceClockInPolicySumAggregateOutputType | null;
    _min: AttendanceClockInPolicyMinAggregateOutputType | null;
    _max: AttendanceClockInPolicyMaxAggregateOutputType | null;
};
export type AttendanceClockInPolicyAvgAggregateOutputType = {
    graceWindowMinutes: number | null;
    expectedHoursPerDay: runtime.Decimal | null;
};
export type AttendanceClockInPolicySumAggregateOutputType = {
    graceWindowMinutes: number | null;
    expectedHoursPerDay: runtime.Decimal | null;
};
export type AttendanceClockInPolicyMinAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    cadre: string | null;
    expectedStartTime: string | null;
    graceWindowMinutes: number | null;
    expectedHoursPerDay: runtime.Decimal | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
};
export type AttendanceClockInPolicyMaxAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    cadre: string | null;
    expectedStartTime: string | null;
    graceWindowMinutes: number | null;
    expectedHoursPerDay: runtime.Decimal | null;
    status: $Enums.GovernedItemStatus | null;
    createdAt: Date | null;
};
export type AttendanceClockInPolicyCountAggregateOutputType = {
    id: number;
    orgUnitCode: number;
    cadre: number;
    expectedStartTime: number;
    graceWindowMinutes: number;
    expectedHoursPerDay: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type AttendanceClockInPolicyAvgAggregateInputType = {
    graceWindowMinutes?: true;
    expectedHoursPerDay?: true;
};
export type AttendanceClockInPolicySumAggregateInputType = {
    graceWindowMinutes?: true;
    expectedHoursPerDay?: true;
};
export type AttendanceClockInPolicyMinAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    cadre?: true;
    expectedStartTime?: true;
    graceWindowMinutes?: true;
    expectedHoursPerDay?: true;
    status?: true;
    createdAt?: true;
};
export type AttendanceClockInPolicyMaxAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    cadre?: true;
    expectedStartTime?: true;
    graceWindowMinutes?: true;
    expectedHoursPerDay?: true;
    status?: true;
    createdAt?: true;
};
export type AttendanceClockInPolicyCountAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    cadre?: true;
    expectedStartTime?: true;
    graceWindowMinutes?: true;
    expectedHoursPerDay?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type AttendanceClockInPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    orderBy?: Prisma.AttendanceClockInPolicyOrderByWithRelationInput | Prisma.AttendanceClockInPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceClockInPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceClockInPolicyCountAggregateInputType;
    _avg?: AttendanceClockInPolicyAvgAggregateInputType;
    _sum?: AttendanceClockInPolicySumAggregateInputType;
    _min?: AttendanceClockInPolicyMinAggregateInputType;
    _max?: AttendanceClockInPolicyMaxAggregateInputType;
};
export type GetAttendanceClockInPolicyAggregateType<T extends AttendanceClockInPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceClockInPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceClockInPolicy[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceClockInPolicy[P]>;
};
export type AttendanceClockInPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    orderBy?: Prisma.AttendanceClockInPolicyOrderByWithAggregationInput | Prisma.AttendanceClockInPolicyOrderByWithAggregationInput[];
    by: Prisma.AttendanceClockInPolicyScalarFieldEnum[] | Prisma.AttendanceClockInPolicyScalarFieldEnum;
    having?: Prisma.AttendanceClockInPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceClockInPolicyCountAggregateInputType | true;
    _avg?: AttendanceClockInPolicyAvgAggregateInputType;
    _sum?: AttendanceClockInPolicySumAggregateInputType;
    _min?: AttendanceClockInPolicyMinAggregateInputType;
    _max?: AttendanceClockInPolicyMaxAggregateInputType;
};
export type AttendanceClockInPolicyGroupByOutputType = {
    id: string;
    orgUnitCode: string | null;
    cadre: string | null;
    expectedStartTime: string;
    graceWindowMinutes: number;
    expectedHoursPerDay: runtime.Decimal;
    status: $Enums.GovernedItemStatus;
    createdAt: Date;
    _count: AttendanceClockInPolicyCountAggregateOutputType | null;
    _avg: AttendanceClockInPolicyAvgAggregateOutputType | null;
    _sum: AttendanceClockInPolicySumAggregateOutputType | null;
    _min: AttendanceClockInPolicyMinAggregateOutputType | null;
    _max: AttendanceClockInPolicyMaxAggregateOutputType | null;
};
export type GetAttendanceClockInPolicyGroupByPayload<T extends AttendanceClockInPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceClockInPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceClockInPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceClockInPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceClockInPolicyGroupByOutputType[P]>;
}>>;
export type AttendanceClockInPolicyWhereInput = {
    AND?: Prisma.AttendanceClockInPolicyWhereInput | Prisma.AttendanceClockInPolicyWhereInput[];
    OR?: Prisma.AttendanceClockInPolicyWhereInput[];
    NOT?: Prisma.AttendanceClockInPolicyWhereInput | Prisma.AttendanceClockInPolicyWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceClockInPolicy"> | string;
    orgUnitCode?: Prisma.StringNullableFilter<"AttendanceClockInPolicy"> | string | null;
    cadre?: Prisma.StringNullableFilter<"AttendanceClockInPolicy"> | string | null;
    expectedStartTime?: Prisma.StringFilter<"AttendanceClockInPolicy"> | string;
    graceWindowMinutes?: Prisma.IntFilter<"AttendanceClockInPolicy"> | number;
    expectedHoursPerDay?: Prisma.DecimalFilter<"AttendanceClockInPolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"AttendanceClockInPolicy"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"AttendanceClockInPolicy"> | Date | string;
};
export type AttendanceClockInPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    cadre?: Prisma.SortOrderInput | Prisma.SortOrder;
    expectedStartTime?: Prisma.SortOrder;
    graceWindowMinutes?: Prisma.SortOrder;
    expectedHoursPerDay?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceClockInPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orgUnitCode_cadre?: Prisma.AttendanceClockInPolicyOrgUnitCodeCadreCompoundUniqueInput;
    AND?: Prisma.AttendanceClockInPolicyWhereInput | Prisma.AttendanceClockInPolicyWhereInput[];
    OR?: Prisma.AttendanceClockInPolicyWhereInput[];
    NOT?: Prisma.AttendanceClockInPolicyWhereInput | Prisma.AttendanceClockInPolicyWhereInput[];
    orgUnitCode?: Prisma.StringNullableFilter<"AttendanceClockInPolicy"> | string | null;
    cadre?: Prisma.StringNullableFilter<"AttendanceClockInPolicy"> | string | null;
    expectedStartTime?: Prisma.StringFilter<"AttendanceClockInPolicy"> | string;
    graceWindowMinutes?: Prisma.IntFilter<"AttendanceClockInPolicy"> | number;
    expectedHoursPerDay?: Prisma.DecimalFilter<"AttendanceClockInPolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"AttendanceClockInPolicy"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFilter<"AttendanceClockInPolicy"> | Date | string;
}, "id" | "orgUnitCode_cadre">;
export type AttendanceClockInPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    cadre?: Prisma.SortOrderInput | Prisma.SortOrder;
    expectedStartTime?: Prisma.SortOrder;
    graceWindowMinutes?: Prisma.SortOrder;
    expectedHoursPerDay?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceClockInPolicyCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceClockInPolicyAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceClockInPolicyMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceClockInPolicyMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceClockInPolicySumOrderByAggregateInput;
};
export type AttendanceClockInPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceClockInPolicyScalarWhereWithAggregatesInput | Prisma.AttendanceClockInPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceClockInPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceClockInPolicyScalarWhereWithAggregatesInput | Prisma.AttendanceClockInPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AttendanceClockInPolicy"> | string;
    orgUnitCode?: Prisma.StringNullableWithAggregatesFilter<"AttendanceClockInPolicy"> | string | null;
    cadre?: Prisma.StringNullableWithAggregatesFilter<"AttendanceClockInPolicy"> | string | null;
    expectedStartTime?: Prisma.StringWithAggregatesFilter<"AttendanceClockInPolicy"> | string;
    graceWindowMinutes?: Prisma.IntWithAggregatesFilter<"AttendanceClockInPolicy"> | number;
    expectedHoursPerDay?: Prisma.DecimalWithAggregatesFilter<"AttendanceClockInPolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"AttendanceClockInPolicy"> | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceClockInPolicy"> | Date | string;
};
export type AttendanceClockInPolicyCreateInput = {
    id?: string;
    orgUnitCode?: string | null;
    cadre?: string | null;
    expectedStartTime: string;
    graceWindowMinutes: number;
    expectedHoursPerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type AttendanceClockInPolicyUncheckedCreateInput = {
    id?: string;
    orgUnitCode?: string | null;
    cadre?: string | null;
    expectedStartTime: string;
    graceWindowMinutes: number;
    expectedHoursPerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type AttendanceClockInPolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cadre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expectedStartTime?: Prisma.StringFieldUpdateOperationsInput | string;
    graceWindowMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedHoursPerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceClockInPolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cadre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expectedStartTime?: Prisma.StringFieldUpdateOperationsInput | string;
    graceWindowMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedHoursPerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceClockInPolicyCreateManyInput = {
    id?: string;
    orgUnitCode?: string | null;
    cadre?: string | null;
    expectedStartTime: string;
    graceWindowMinutes: number;
    expectedHoursPerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type AttendanceClockInPolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cadre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expectedStartTime?: Prisma.StringFieldUpdateOperationsInput | string;
    graceWindowMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedHoursPerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceClockInPolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cadre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expectedStartTime?: Prisma.StringFieldUpdateOperationsInput | string;
    graceWindowMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedHoursPerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceClockInPolicyOrgUnitCodeCadreCompoundUniqueInput = {
    orgUnitCode: string;
    cadre: string;
};
export type AttendanceClockInPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    expectedStartTime?: Prisma.SortOrder;
    graceWindowMinutes?: Prisma.SortOrder;
    expectedHoursPerDay?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceClockInPolicyAvgOrderByAggregateInput = {
    graceWindowMinutes?: Prisma.SortOrder;
    expectedHoursPerDay?: Prisma.SortOrder;
};
export type AttendanceClockInPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    expectedStartTime?: Prisma.SortOrder;
    graceWindowMinutes?: Prisma.SortOrder;
    expectedHoursPerDay?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceClockInPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    cadre?: Prisma.SortOrder;
    expectedStartTime?: Prisma.SortOrder;
    graceWindowMinutes?: Prisma.SortOrder;
    expectedHoursPerDay?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttendanceClockInPolicySumOrderByAggregateInput = {
    graceWindowMinutes?: Prisma.SortOrder;
    expectedHoursPerDay?: Prisma.SortOrder;
};
export type AttendanceClockInPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    expectedStartTime?: boolean;
    graceWindowMinutes?: boolean;
    expectedHoursPerDay?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["attendanceClockInPolicy"]>;
export type AttendanceClockInPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    expectedStartTime?: boolean;
    graceWindowMinutes?: boolean;
    expectedHoursPerDay?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["attendanceClockInPolicy"]>;
export type AttendanceClockInPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    expectedStartTime?: boolean;
    graceWindowMinutes?: boolean;
    expectedHoursPerDay?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["attendanceClockInPolicy"]>;
export type AttendanceClockInPolicySelectScalar = {
    id?: boolean;
    orgUnitCode?: boolean;
    cadre?: boolean;
    expectedStartTime?: boolean;
    graceWindowMinutes?: boolean;
    expectedHoursPerDay?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type AttendanceClockInPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orgUnitCode" | "cadre" | "expectedStartTime" | "graceWindowMinutes" | "expectedHoursPerDay" | "status" | "createdAt", ExtArgs["result"]["attendanceClockInPolicy"]>;
export type $AttendanceClockInPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceClockInPolicy";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orgUnitCode: string | null;
        cadre: string | null;
        expectedStartTime: string;
        graceWindowMinutes: number;
        expectedHoursPerDay: runtime.Decimal;
        status: $Enums.GovernedItemStatus;
        createdAt: Date;
    }, ExtArgs["result"]["attendanceClockInPolicy"]>;
    composites: {};
};
export type AttendanceClockInPolicyGetPayload<S extends boolean | null | undefined | AttendanceClockInPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload, S>;
export type AttendanceClockInPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceClockInPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceClockInPolicyCountAggregateInputType | true;
};
export interface AttendanceClockInPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceClockInPolicy'];
        meta: {
            name: 'AttendanceClockInPolicy';
        };
    };
    findUnique<T extends AttendanceClockInPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceClockInPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceClockInPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceClockInPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceClockInPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceClockInPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceClockInPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceClockInPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceClockInPolicyCreateArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceClockInPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceClockInPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceClockInPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceClockInPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceClockInPolicyDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceClockInPolicyUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceClockInPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceClockInPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceClockInPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceClockInPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceClockInPolicyUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceClockInPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceClockInPolicyClient<runtime.Types.Result.GetResult<Prisma.$AttendanceClockInPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceClockInPolicyCountArgs>(args?: Prisma.Subset<T, AttendanceClockInPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceClockInPolicyCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceClockInPolicyAggregateArgs>(args: Prisma.Subset<T, AttendanceClockInPolicyAggregateArgs>): Prisma.PrismaPromise<GetAttendanceClockInPolicyAggregateType<T>>;
    groupBy<T extends AttendanceClockInPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceClockInPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceClockInPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceClockInPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceClockInPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceClockInPolicyFieldRefs;
}
export interface Prisma__AttendanceClockInPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceClockInPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceClockInPolicy", 'String'>;
    readonly orgUnitCode: Prisma.FieldRef<"AttendanceClockInPolicy", 'String'>;
    readonly cadre: Prisma.FieldRef<"AttendanceClockInPolicy", 'String'>;
    readonly expectedStartTime: Prisma.FieldRef<"AttendanceClockInPolicy", 'String'>;
    readonly graceWindowMinutes: Prisma.FieldRef<"AttendanceClockInPolicy", 'Int'>;
    readonly expectedHoursPerDay: Prisma.FieldRef<"AttendanceClockInPolicy", 'Decimal'>;
    readonly status: Prisma.FieldRef<"AttendanceClockInPolicy", 'GovernedItemStatus'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceClockInPolicy", 'DateTime'>;
}
export type AttendanceClockInPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    where: Prisma.AttendanceClockInPolicyWhereUniqueInput;
};
export type AttendanceClockInPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    where: Prisma.AttendanceClockInPolicyWhereUniqueInput;
};
export type AttendanceClockInPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    orderBy?: Prisma.AttendanceClockInPolicyOrderByWithRelationInput | Prisma.AttendanceClockInPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceClockInPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceClockInPolicyScalarFieldEnum | Prisma.AttendanceClockInPolicyScalarFieldEnum[];
};
export type AttendanceClockInPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    orderBy?: Prisma.AttendanceClockInPolicyOrderByWithRelationInput | Prisma.AttendanceClockInPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceClockInPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceClockInPolicyScalarFieldEnum | Prisma.AttendanceClockInPolicyScalarFieldEnum[];
};
export type AttendanceClockInPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    orderBy?: Prisma.AttendanceClockInPolicyOrderByWithRelationInput | Prisma.AttendanceClockInPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceClockInPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceClockInPolicyScalarFieldEnum | Prisma.AttendanceClockInPolicyScalarFieldEnum[];
};
export type AttendanceClockInPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceClockInPolicyCreateInput, Prisma.AttendanceClockInPolicyUncheckedCreateInput>;
};
export type AttendanceClockInPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceClockInPolicyCreateManyInput | Prisma.AttendanceClockInPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceClockInPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    data: Prisma.AttendanceClockInPolicyCreateManyInput | Prisma.AttendanceClockInPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceClockInPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceClockInPolicyUpdateInput, Prisma.AttendanceClockInPolicyUncheckedUpdateInput>;
    where: Prisma.AttendanceClockInPolicyWhereUniqueInput;
};
export type AttendanceClockInPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceClockInPolicyUpdateManyMutationInput, Prisma.AttendanceClockInPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    limit?: number;
};
export type AttendanceClockInPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceClockInPolicyUpdateManyMutationInput, Prisma.AttendanceClockInPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    limit?: number;
};
export type AttendanceClockInPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    where: Prisma.AttendanceClockInPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceClockInPolicyCreateInput, Prisma.AttendanceClockInPolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceClockInPolicyUpdateInput, Prisma.AttendanceClockInPolicyUncheckedUpdateInput>;
};
export type AttendanceClockInPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
    where: Prisma.AttendanceClockInPolicyWhereUniqueInput;
};
export type AttendanceClockInPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceClockInPolicyWhereInput;
    limit?: number;
};
export type AttendanceClockInPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceClockInPolicySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceClockInPolicyOmit<ExtArgs> | null;
};
