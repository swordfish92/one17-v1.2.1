import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveTypePayload>;
export type AggregateLeaveType = {
    _count: LeaveTypeCountAggregateOutputType | null;
    _avg: LeaveTypeAvgAggregateOutputType | null;
    _sum: LeaveTypeSumAggregateOutputType | null;
    _min: LeaveTypeMinAggregateOutputType | null;
    _max: LeaveTypeMaxAggregateOutputType | null;
};
export type LeaveTypeAvgAggregateOutputType = {
    defaultAnnualDays: runtime.Decimal | null;
};
export type LeaveTypeSumAggregateOutputType = {
    defaultAnnualDays: runtime.Decimal | null;
};
export type LeaveTypeMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    defaultAnnualDays: runtime.Decimal | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type LeaveTypeMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    defaultAnnualDays: runtime.Decimal | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type LeaveTypeCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    defaultAnnualDays: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type LeaveTypeAvgAggregateInputType = {
    defaultAnnualDays?: true;
};
export type LeaveTypeSumAggregateInputType = {
    defaultAnnualDays?: true;
};
export type LeaveTypeMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    defaultAnnualDays?: true;
    isActive?: true;
    createdAt?: true;
};
export type LeaveTypeMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    defaultAnnualDays?: true;
    isActive?: true;
    createdAt?: true;
};
export type LeaveTypeCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    defaultAnnualDays?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type LeaveTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveTypeCountAggregateInputType;
    _avg?: LeaveTypeAvgAggregateInputType;
    _sum?: LeaveTypeSumAggregateInputType;
    _min?: LeaveTypeMinAggregateInputType;
    _max?: LeaveTypeMaxAggregateInputType;
};
export type GetLeaveTypeAggregateType<T extends LeaveTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveType[P]> : Prisma.GetScalarType<T[P], AggregateLeaveType[P]>;
};
export type LeaveTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithAggregationInput | Prisma.LeaveTypeOrderByWithAggregationInput[];
    by: Prisma.LeaveTypeScalarFieldEnum[] | Prisma.LeaveTypeScalarFieldEnum;
    having?: Prisma.LeaveTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveTypeCountAggregateInputType | true;
    _avg?: LeaveTypeAvgAggregateInputType;
    _sum?: LeaveTypeSumAggregateInputType;
    _min?: LeaveTypeMinAggregateInputType;
    _max?: LeaveTypeMaxAggregateInputType;
};
export type LeaveTypeGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal;
    isActive: boolean;
    createdAt: Date;
    _count: LeaveTypeCountAggregateOutputType | null;
    _avg: LeaveTypeAvgAggregateOutputType | null;
    _sum: LeaveTypeSumAggregateOutputType | null;
    _min: LeaveTypeMinAggregateOutputType | null;
    _max: LeaveTypeMaxAggregateOutputType | null;
};
export type GetLeaveTypeGroupByPayload<T extends LeaveTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveTypeGroupByOutputType[P]>;
}>>;
export type LeaveTypeWhereInput = {
    AND?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    OR?: Prisma.LeaveTypeWhereInput[];
    NOT?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    id?: Prisma.UuidFilter<"LeaveType"> | string;
    code?: Prisma.StringFilter<"LeaveType"> | string;
    name?: Prisma.StringFilter<"LeaveType"> | string;
    defaultAnnualDays?: Prisma.DecimalFilter<"LeaveType"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFilter<"LeaveType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
    entitlements?: Prisma.LeaveEntitlementListRelationFilter;
    applications?: Prisma.LeaveApplicationListRelationFilter;
};
export type LeaveTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    defaultAnnualDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    entitlements?: Prisma.LeaveEntitlementOrderByRelationAggregateInput;
    applications?: Prisma.LeaveApplicationOrderByRelationAggregateInput;
};
export type LeaveTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    OR?: Prisma.LeaveTypeWhereInput[];
    NOT?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    name?: Prisma.StringFilter<"LeaveType"> | string;
    defaultAnnualDays?: Prisma.DecimalFilter<"LeaveType"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFilter<"LeaveType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
    entitlements?: Prisma.LeaveEntitlementListRelationFilter;
    applications?: Prisma.LeaveApplicationListRelationFilter;
}, "id" | "code">;
export type LeaveTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    defaultAnnualDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeaveTypeCountOrderByAggregateInput;
    _avg?: Prisma.LeaveTypeAvgOrderByAggregateInput;
    _max?: Prisma.LeaveTypeMaxOrderByAggregateInput;
    _min?: Prisma.LeaveTypeMinOrderByAggregateInput;
    _sum?: Prisma.LeaveTypeSumOrderByAggregateInput;
};
export type LeaveTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveTypeScalarWhereWithAggregatesInput | Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveTypeScalarWhereWithAggregatesInput | Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LeaveType"> | string;
    code?: Prisma.StringWithAggregatesFilter<"LeaveType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LeaveType"> | string;
    defaultAnnualDays?: Prisma.DecimalWithAggregatesFilter<"LeaveType"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"LeaveType"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveType"> | Date | string;
};
export type LeaveTypeCreateInput = {
    id?: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    createdAt?: Date | string;
    entitlements?: Prisma.LeaveEntitlementCreateNestedManyWithoutLeaveTypeInput;
    applications?: Prisma.LeaveApplicationCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    createdAt?: Date | string;
    entitlements?: Prisma.LeaveEntitlementUncheckedCreateNestedManyWithoutLeaveTypeInput;
    applications?: Prisma.LeaveApplicationUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    entitlements?: Prisma.LeaveEntitlementUpdateManyWithoutLeaveTypeNestedInput;
    applications?: Prisma.LeaveApplicationUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    entitlements?: Prisma.LeaveEntitlementUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    applications?: Prisma.LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type LeaveTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    defaultAnnualDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeAvgOrderByAggregateInput = {
    defaultAnnualDays?: Prisma.SortOrder;
};
export type LeaveTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    defaultAnnualDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    defaultAnnualDays?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeSumOrderByAggregateInput = {
    defaultAnnualDays?: Prisma.SortOrder;
};
export type LeaveTypeScalarRelationFilter = {
    is?: Prisma.LeaveTypeWhereInput;
    isNot?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeCreateNestedOneWithoutEntitlementsInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutEntitlementsInput, Prisma.LeaveTypeUncheckedCreateWithoutEntitlementsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutEntitlementsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateOneRequiredWithoutEntitlementsNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutEntitlementsInput, Prisma.LeaveTypeUncheckedCreateWithoutEntitlementsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutEntitlementsInput;
    upsert?: Prisma.LeaveTypeUpsertWithoutEntitlementsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveTypeUpdateToOneWithWhereWithoutEntitlementsInput, Prisma.LeaveTypeUpdateWithoutEntitlementsInput>, Prisma.LeaveTypeUncheckedUpdateWithoutEntitlementsInput>;
};
export type LeaveTypeCreateNestedOneWithoutApplicationsInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutApplicationsInput, Prisma.LeaveTypeUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutApplicationsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutApplicationsInput, Prisma.LeaveTypeUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutApplicationsInput;
    upsert?: Prisma.LeaveTypeUpsertWithoutApplicationsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveTypeUpdateToOneWithWhereWithoutApplicationsInput, Prisma.LeaveTypeUpdateWithoutApplicationsInput>, Prisma.LeaveTypeUncheckedUpdateWithoutApplicationsInput>;
};
export type LeaveTypeCreateWithoutEntitlementsInput = {
    id?: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    createdAt?: Date | string;
    applications?: Prisma.LeaveApplicationCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutEntitlementsInput = {
    id?: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    createdAt?: Date | string;
    applications?: Prisma.LeaveApplicationUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutEntitlementsInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutEntitlementsInput, Prisma.LeaveTypeUncheckedCreateWithoutEntitlementsInput>;
};
export type LeaveTypeUpsertWithoutEntitlementsInput = {
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutEntitlementsInput, Prisma.LeaveTypeUncheckedUpdateWithoutEntitlementsInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutEntitlementsInput, Prisma.LeaveTypeUncheckedCreateWithoutEntitlementsInput>;
    where?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeUpdateToOneWithWhereWithoutEntitlementsInput = {
    where?: Prisma.LeaveTypeWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutEntitlementsInput, Prisma.LeaveTypeUncheckedUpdateWithoutEntitlementsInput>;
};
export type LeaveTypeUpdateWithoutEntitlementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.LeaveApplicationUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutEntitlementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateWithoutApplicationsInput = {
    id?: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    createdAt?: Date | string;
    entitlements?: Prisma.LeaveEntitlementCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    code: string;
    name: string;
    defaultAnnualDays: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    createdAt?: Date | string;
    entitlements?: Prisma.LeaveEntitlementUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutApplicationsInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutApplicationsInput, Prisma.LeaveTypeUncheckedCreateWithoutApplicationsInput>;
};
export type LeaveTypeUpsertWithoutApplicationsInput = {
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutApplicationsInput, Prisma.LeaveTypeUncheckedUpdateWithoutApplicationsInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutApplicationsInput, Prisma.LeaveTypeUncheckedCreateWithoutApplicationsInput>;
    where?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: Prisma.LeaveTypeWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutApplicationsInput, Prisma.LeaveTypeUncheckedUpdateWithoutApplicationsInput>;
};
export type LeaveTypeUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    entitlements?: Prisma.LeaveEntitlementUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultAnnualDays?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    entitlements?: Prisma.LeaveEntitlementUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCountOutputType = {
    entitlements: number;
    applications: number;
};
export type LeaveTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entitlements?: boolean | LeaveTypeCountOutputTypeCountEntitlementsArgs;
    applications?: boolean | LeaveTypeCountOutputTypeCountApplicationsArgs;
};
export type LeaveTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type LeaveTypeCountOutputTypeCountEntitlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveEntitlementWhereInput;
};
export type LeaveTypeCountOutputTypeCountApplicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveApplicationWhereInput;
};
export type LeaveTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    defaultAnnualDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    entitlements?: boolean | Prisma.LeaveType$entitlementsArgs<ExtArgs>;
    applications?: boolean | Prisma.LeaveType$applicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    defaultAnnualDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    defaultAnnualDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    defaultAnnualDays?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type LeaveTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "defaultAnnualDays" | "isActive" | "createdAt", ExtArgs["result"]["leaveType"]>;
export type LeaveTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entitlements?: boolean | Prisma.LeaveType$entitlementsArgs<ExtArgs>;
    applications?: boolean | Prisma.LeaveType$applicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeaveTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LeaveTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LeaveTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveType";
    objects: {
        entitlements: Prisma.$LeaveEntitlementPayload<ExtArgs>[];
        applications: Prisma.$LeaveApplicationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        defaultAnnualDays: runtime.Decimal;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["leaveType"]>;
    composites: {};
};
export type LeaveTypeGetPayload<S extends boolean | null | undefined | LeaveTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload, S>;
export type LeaveTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveTypeCountAggregateInputType | true;
};
export interface LeaveTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveType'];
        meta: {
            name: 'LeaveType';
        };
    };
    findUnique<T extends LeaveTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveTypeFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveTypeCreateArgs>(args: Prisma.SelectSubset<T, LeaveTypeCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveTypeDeleteArgs>(args: Prisma.SelectSubset<T, LeaveTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveTypeUpdateArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveTypeUpsertArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveTypeCountArgs>(args?: Prisma.Subset<T, LeaveTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveTypeCountAggregateOutputType> : number>;
    aggregate<T extends LeaveTypeAggregateArgs>(args: Prisma.Subset<T, LeaveTypeAggregateArgs>): Prisma.PrismaPromise<GetLeaveTypeAggregateType<T>>;
    groupBy<T extends LeaveTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveTypeFieldRefs;
}
export interface Prisma__LeaveTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    entitlements<T extends Prisma.LeaveType$entitlementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveType$entitlementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveEntitlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    applications<T extends Prisma.LeaveType$applicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveType$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveTypeFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly code: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly name: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly defaultAnnualDays: Prisma.FieldRef<"LeaveType", 'Decimal'>;
    readonly isActive: Prisma.FieldRef<"LeaveType", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LeaveType", 'DateTime'>;
}
export type LeaveTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeCreateInput, Prisma.LeaveTypeUncheckedCreateInput>;
};
export type LeaveTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveTypeCreateManyInput | Prisma.LeaveTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    data: Prisma.LeaveTypeCreateManyInput | Prisma.LeaveTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateInput, Prisma.LeaveTypeUncheckedUpdateInput>;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyInput>;
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
};
export type LeaveTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyInput>;
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
};
export type LeaveTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateInput, Prisma.LeaveTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveTypeUpdateInput, Prisma.LeaveTypeUncheckedUpdateInput>;
};
export type LeaveTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
};
export type LeaveType$entitlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveEntitlementSelect<ExtArgs> | null;
    omit?: Prisma.LeaveEntitlementOmit<ExtArgs> | null;
    include?: Prisma.LeaveEntitlementInclude<ExtArgs> | null;
    where?: Prisma.LeaveEntitlementWhereInput;
    orderBy?: Prisma.LeaveEntitlementOrderByWithRelationInput | Prisma.LeaveEntitlementOrderByWithRelationInput[];
    cursor?: Prisma.LeaveEntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveEntitlementScalarFieldEnum | Prisma.LeaveEntitlementScalarFieldEnum[];
};
export type LeaveType$applicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveApplicationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveApplicationOmit<ExtArgs> | null;
    include?: Prisma.LeaveApplicationInclude<ExtArgs> | null;
    where?: Prisma.LeaveApplicationWhereInput;
    orderBy?: Prisma.LeaveApplicationOrderByWithRelationInput | Prisma.LeaveApplicationOrderByWithRelationInput[];
    cursor?: Prisma.LeaveApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveApplicationScalarFieldEnum | Prisma.LeaveApplicationScalarFieldEnum[];
};
export type LeaveTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
};
