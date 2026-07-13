import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiCapabilityFlagModel = runtime.Types.Result.DefaultSelection<Prisma.$AiCapabilityFlagPayload>;
export type AggregateAiCapabilityFlag = {
    _count: AiCapabilityFlagCountAggregateOutputType | null;
    _min: AiCapabilityFlagMinAggregateOutputType | null;
    _max: AiCapabilityFlagMaxAggregateOutputType | null;
};
export type AiCapabilityFlagMinAggregateOutputType = {
    capabilityCode: string | null;
    isEnabled: boolean | null;
    updatedByUserId: string | null;
    workflowInstanceId: string | null;
    updatedAt: Date | null;
};
export type AiCapabilityFlagMaxAggregateOutputType = {
    capabilityCode: string | null;
    isEnabled: boolean | null;
    updatedByUserId: string | null;
    workflowInstanceId: string | null;
    updatedAt: Date | null;
};
export type AiCapabilityFlagCountAggregateOutputType = {
    capabilityCode: number;
    isEnabled: number;
    updatedByUserId: number;
    workflowInstanceId: number;
    updatedAt: number;
    _all: number;
};
export type AiCapabilityFlagMinAggregateInputType = {
    capabilityCode?: true;
    isEnabled?: true;
    updatedByUserId?: true;
    workflowInstanceId?: true;
    updatedAt?: true;
};
export type AiCapabilityFlagMaxAggregateInputType = {
    capabilityCode?: true;
    isEnabled?: true;
    updatedByUserId?: true;
    workflowInstanceId?: true;
    updatedAt?: true;
};
export type AiCapabilityFlagCountAggregateInputType = {
    capabilityCode?: true;
    isEnabled?: true;
    updatedByUserId?: true;
    workflowInstanceId?: true;
    updatedAt?: true;
    _all?: true;
};
export type AiCapabilityFlagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiCapabilityFlagWhereInput;
    orderBy?: Prisma.AiCapabilityFlagOrderByWithRelationInput | Prisma.AiCapabilityFlagOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiCapabilityFlagCountAggregateInputType;
    _min?: AiCapabilityFlagMinAggregateInputType;
    _max?: AiCapabilityFlagMaxAggregateInputType;
};
export type GetAiCapabilityFlagAggregateType<T extends AiCapabilityFlagAggregateArgs> = {
    [P in keyof T & keyof AggregateAiCapabilityFlag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiCapabilityFlag[P]> : Prisma.GetScalarType<T[P], AggregateAiCapabilityFlag[P]>;
};
export type AiCapabilityFlagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiCapabilityFlagWhereInput;
    orderBy?: Prisma.AiCapabilityFlagOrderByWithAggregationInput | Prisma.AiCapabilityFlagOrderByWithAggregationInput[];
    by: Prisma.AiCapabilityFlagScalarFieldEnum[] | Prisma.AiCapabilityFlagScalarFieldEnum;
    having?: Prisma.AiCapabilityFlagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiCapabilityFlagCountAggregateInputType | true;
    _min?: AiCapabilityFlagMinAggregateInputType;
    _max?: AiCapabilityFlagMaxAggregateInputType;
};
export type AiCapabilityFlagGroupByOutputType = {
    capabilityCode: string;
    isEnabled: boolean;
    updatedByUserId: string | null;
    workflowInstanceId: string | null;
    updatedAt: Date;
    _count: AiCapabilityFlagCountAggregateOutputType | null;
    _min: AiCapabilityFlagMinAggregateOutputType | null;
    _max: AiCapabilityFlagMaxAggregateOutputType | null;
};
export type GetAiCapabilityFlagGroupByPayload<T extends AiCapabilityFlagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiCapabilityFlagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiCapabilityFlagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiCapabilityFlagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiCapabilityFlagGroupByOutputType[P]>;
}>>;
export type AiCapabilityFlagWhereInput = {
    AND?: Prisma.AiCapabilityFlagWhereInput | Prisma.AiCapabilityFlagWhereInput[];
    OR?: Prisma.AiCapabilityFlagWhereInput[];
    NOT?: Prisma.AiCapabilityFlagWhereInput | Prisma.AiCapabilityFlagWhereInput[];
    capabilityCode?: Prisma.StringFilter<"AiCapabilityFlag"> | string;
    isEnabled?: Prisma.BoolFilter<"AiCapabilityFlag"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"AiCapabilityFlag"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"AiCapabilityFlag"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"AiCapabilityFlag"> | Date | string;
    updatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type AiCapabilityFlagOrderByWithRelationInput = {
    capabilityCode?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type AiCapabilityFlagWhereUniqueInput = Prisma.AtLeast<{
    capabilityCode?: string;
    AND?: Prisma.AiCapabilityFlagWhereInput | Prisma.AiCapabilityFlagWhereInput[];
    OR?: Prisma.AiCapabilityFlagWhereInput[];
    NOT?: Prisma.AiCapabilityFlagWhereInput | Prisma.AiCapabilityFlagWhereInput[];
    isEnabled?: Prisma.BoolFilter<"AiCapabilityFlag"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"AiCapabilityFlag"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"AiCapabilityFlag"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"AiCapabilityFlag"> | Date | string;
    updatedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "capabilityCode">;
export type AiCapabilityFlagOrderByWithAggregationInput = {
    capabilityCode?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AiCapabilityFlagCountOrderByAggregateInput;
    _max?: Prisma.AiCapabilityFlagMaxOrderByAggregateInput;
    _min?: Prisma.AiCapabilityFlagMinOrderByAggregateInput;
};
export type AiCapabilityFlagScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiCapabilityFlagScalarWhereWithAggregatesInput | Prisma.AiCapabilityFlagScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiCapabilityFlagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiCapabilityFlagScalarWhereWithAggregatesInput | Prisma.AiCapabilityFlagScalarWhereWithAggregatesInput[];
    capabilityCode?: Prisma.StringWithAggregatesFilter<"AiCapabilityFlag"> | string;
    isEnabled?: Prisma.BoolWithAggregatesFilter<"AiCapabilityFlag"> | boolean;
    updatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"AiCapabilityFlag"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"AiCapabilityFlag"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AiCapabilityFlag"> | Date | string;
};
export type AiCapabilityFlagCreateInput = {
    capabilityCode: string;
    isEnabled?: boolean;
    workflowInstanceId?: string | null;
    updatedAt?: Date | string;
    updatedBy?: Prisma.AppUserCreateNestedOneWithoutAiCapabilityFlagsUpdatedInput;
};
export type AiCapabilityFlagUncheckedCreateInput = {
    capabilityCode: string;
    isEnabled?: boolean;
    updatedByUserId?: string | null;
    workflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type AiCapabilityFlagUpdateInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.AppUserUpdateOneWithoutAiCapabilityFlagsUpdatedNestedInput;
};
export type AiCapabilityFlagUncheckedUpdateInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiCapabilityFlagCreateManyInput = {
    capabilityCode: string;
    isEnabled?: boolean;
    updatedByUserId?: string | null;
    workflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type AiCapabilityFlagUpdateManyMutationInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiCapabilityFlagUncheckedUpdateManyInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiCapabilityFlagListRelationFilter = {
    every?: Prisma.AiCapabilityFlagWhereInput;
    some?: Prisma.AiCapabilityFlagWhereInput;
    none?: Prisma.AiCapabilityFlagWhereInput;
};
export type AiCapabilityFlagOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiCapabilityFlagCountOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiCapabilityFlagMaxOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiCapabilityFlagMinOrderByAggregateInput = {
    capabilityCode?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    updatedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AiCapabilityFlagCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput> | Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput[] | Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput | Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.AiCapabilityFlagCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
};
export type AiCapabilityFlagUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput> | Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput[] | Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput | Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.AiCapabilityFlagCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
};
export type AiCapabilityFlagUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput> | Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput[] | Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput | Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.AiCapabilityFlagUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.AiCapabilityFlagUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.AiCapabilityFlagCreateManyUpdatedByInputEnvelope;
    set?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    disconnect?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    delete?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    connect?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    update?: Prisma.AiCapabilityFlagUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.AiCapabilityFlagUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.AiCapabilityFlagUpdateManyWithWhereWithoutUpdatedByInput | Prisma.AiCapabilityFlagUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.AiCapabilityFlagScalarWhereInput | Prisma.AiCapabilityFlagScalarWhereInput[];
};
export type AiCapabilityFlagUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput> | Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput[] | Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput | Prisma.AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.AiCapabilityFlagUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.AiCapabilityFlagUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.AiCapabilityFlagCreateManyUpdatedByInputEnvelope;
    set?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    disconnect?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    delete?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    connect?: Prisma.AiCapabilityFlagWhereUniqueInput | Prisma.AiCapabilityFlagWhereUniqueInput[];
    update?: Prisma.AiCapabilityFlagUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.AiCapabilityFlagUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.AiCapabilityFlagUpdateManyWithWhereWithoutUpdatedByInput | Prisma.AiCapabilityFlagUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.AiCapabilityFlagScalarWhereInput | Prisma.AiCapabilityFlagScalarWhereInput[];
};
export type AiCapabilityFlagCreateWithoutUpdatedByInput = {
    capabilityCode: string;
    isEnabled?: boolean;
    workflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput = {
    capabilityCode: string;
    isEnabled?: boolean;
    workflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type AiCapabilityFlagCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput>;
};
export type AiCapabilityFlagCreateManyUpdatedByInputEnvelope = {
    data: Prisma.AiCapabilityFlagCreateManyUpdatedByInput | Prisma.AiCapabilityFlagCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type AiCapabilityFlagUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiCapabilityFlagUpdateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.AiCapabilityFlagCreateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedCreateWithoutUpdatedByInput>;
};
export type AiCapabilityFlagUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiCapabilityFlagUpdateWithoutUpdatedByInput, Prisma.AiCapabilityFlagUncheckedUpdateWithoutUpdatedByInput>;
};
export type AiCapabilityFlagUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.AiCapabilityFlagScalarWhereInput;
    data: Prisma.XOR<Prisma.AiCapabilityFlagUpdateManyMutationInput, Prisma.AiCapabilityFlagUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type AiCapabilityFlagScalarWhereInput = {
    AND?: Prisma.AiCapabilityFlagScalarWhereInput | Prisma.AiCapabilityFlagScalarWhereInput[];
    OR?: Prisma.AiCapabilityFlagScalarWhereInput[];
    NOT?: Prisma.AiCapabilityFlagScalarWhereInput | Prisma.AiCapabilityFlagScalarWhereInput[];
    capabilityCode?: Prisma.StringFilter<"AiCapabilityFlag"> | string;
    isEnabled?: Prisma.BoolFilter<"AiCapabilityFlag"> | boolean;
    updatedByUserId?: Prisma.UuidNullableFilter<"AiCapabilityFlag"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"AiCapabilityFlag"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"AiCapabilityFlag"> | Date | string;
};
export type AiCapabilityFlagCreateManyUpdatedByInput = {
    capabilityCode: string;
    isEnabled?: boolean;
    workflowInstanceId?: string | null;
    updatedAt?: Date | string;
};
export type AiCapabilityFlagUpdateWithoutUpdatedByInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiCapabilityFlagUncheckedUpdateWithoutUpdatedByInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiCapabilityFlagUncheckedUpdateManyWithoutUpdatedByInput = {
    capabilityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiCapabilityFlagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    isEnabled?: boolean;
    updatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["aiCapabilityFlag"]>;
export type AiCapabilityFlagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    isEnabled?: boolean;
    updatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["aiCapabilityFlag"]>;
export type AiCapabilityFlagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    capabilityCode?: boolean;
    isEnabled?: boolean;
    updatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean | Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["aiCapabilityFlag"]>;
export type AiCapabilityFlagSelectScalar = {
    capabilityCode?: boolean;
    isEnabled?: boolean;
    updatedByUserId?: boolean;
    workflowInstanceId?: boolean;
    updatedAt?: boolean;
};
export type AiCapabilityFlagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"capabilityCode" | "isEnabled" | "updatedByUserId" | "workflowInstanceId" | "updatedAt", ExtArgs["result"]["aiCapabilityFlag"]>;
export type AiCapabilityFlagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs>;
};
export type AiCapabilityFlagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs>;
};
export type AiCapabilityFlagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updatedBy?: boolean | Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs>;
};
export type $AiCapabilityFlagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiCapabilityFlag";
    objects: {
        updatedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        capabilityCode: string;
        isEnabled: boolean;
        updatedByUserId: string | null;
        workflowInstanceId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["aiCapabilityFlag"]>;
    composites: {};
};
export type AiCapabilityFlagGetPayload<S extends boolean | null | undefined | AiCapabilityFlagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload, S>;
export type AiCapabilityFlagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiCapabilityFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiCapabilityFlagCountAggregateInputType | true;
};
export interface AiCapabilityFlagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiCapabilityFlag'];
        meta: {
            name: 'AiCapabilityFlag';
        };
    };
    findUnique<T extends AiCapabilityFlagFindUniqueArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiCapabilityFlagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiCapabilityFlagFindFirstArgs>(args?: Prisma.SelectSubset<T, AiCapabilityFlagFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiCapabilityFlagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiCapabilityFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiCapabilityFlagFindManyArgs>(args?: Prisma.SelectSubset<T, AiCapabilityFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiCapabilityFlagCreateArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagCreateArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiCapabilityFlagCreateManyArgs>(args?: Prisma.SelectSubset<T, AiCapabilityFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiCapabilityFlagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiCapabilityFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiCapabilityFlagDeleteArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagDeleteArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiCapabilityFlagUpdateArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagUpdateArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiCapabilityFlagDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiCapabilityFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiCapabilityFlagUpdateManyArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiCapabilityFlagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiCapabilityFlagUpsertArgs>(args: Prisma.SelectSubset<T, AiCapabilityFlagUpsertArgs<ExtArgs>>): Prisma.Prisma__AiCapabilityFlagClient<runtime.Types.Result.GetResult<Prisma.$AiCapabilityFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiCapabilityFlagCountArgs>(args?: Prisma.Subset<T, AiCapabilityFlagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiCapabilityFlagCountAggregateOutputType> : number>;
    aggregate<T extends AiCapabilityFlagAggregateArgs>(args: Prisma.Subset<T, AiCapabilityFlagAggregateArgs>): Prisma.PrismaPromise<GetAiCapabilityFlagAggregateType<T>>;
    groupBy<T extends AiCapabilityFlagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiCapabilityFlagGroupByArgs['orderBy'];
    } : {
        orderBy?: AiCapabilityFlagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiCapabilityFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiCapabilityFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiCapabilityFlagFieldRefs;
}
export interface Prisma__AiCapabilityFlagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    updatedBy<T extends Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AiCapabilityFlag$updatedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiCapabilityFlagFieldRefs {
    readonly capabilityCode: Prisma.FieldRef<"AiCapabilityFlag", 'String'>;
    readonly isEnabled: Prisma.FieldRef<"AiCapabilityFlag", 'Boolean'>;
    readonly updatedByUserId: Prisma.FieldRef<"AiCapabilityFlag", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"AiCapabilityFlag", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"AiCapabilityFlag", 'DateTime'>;
}
export type AiCapabilityFlagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
};
export type AiCapabilityFlagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
};
export type AiCapabilityFlagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    where?: Prisma.AiCapabilityFlagWhereInput;
    orderBy?: Prisma.AiCapabilityFlagOrderByWithRelationInput | Prisma.AiCapabilityFlagOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiCapabilityFlagScalarFieldEnum | Prisma.AiCapabilityFlagScalarFieldEnum[];
};
export type AiCapabilityFlagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    where?: Prisma.AiCapabilityFlagWhereInput;
    orderBy?: Prisma.AiCapabilityFlagOrderByWithRelationInput | Prisma.AiCapabilityFlagOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiCapabilityFlagScalarFieldEnum | Prisma.AiCapabilityFlagScalarFieldEnum[];
};
export type AiCapabilityFlagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    where?: Prisma.AiCapabilityFlagWhereInput;
    orderBy?: Prisma.AiCapabilityFlagOrderByWithRelationInput | Prisma.AiCapabilityFlagOrderByWithRelationInput[];
    cursor?: Prisma.AiCapabilityFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiCapabilityFlagScalarFieldEnum | Prisma.AiCapabilityFlagScalarFieldEnum[];
};
export type AiCapabilityFlagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiCapabilityFlagCreateInput, Prisma.AiCapabilityFlagUncheckedCreateInput>;
};
export type AiCapabilityFlagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiCapabilityFlagCreateManyInput | Prisma.AiCapabilityFlagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiCapabilityFlagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    data: Prisma.AiCapabilityFlagCreateManyInput | Prisma.AiCapabilityFlagCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AiCapabilityFlagIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AiCapabilityFlagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiCapabilityFlagUpdateInput, Prisma.AiCapabilityFlagUncheckedUpdateInput>;
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
};
export type AiCapabilityFlagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiCapabilityFlagUpdateManyMutationInput, Prisma.AiCapabilityFlagUncheckedUpdateManyInput>;
    where?: Prisma.AiCapabilityFlagWhereInput;
    limit?: number;
};
export type AiCapabilityFlagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiCapabilityFlagUpdateManyMutationInput, Prisma.AiCapabilityFlagUncheckedUpdateManyInput>;
    where?: Prisma.AiCapabilityFlagWhereInput;
    limit?: number;
    include?: Prisma.AiCapabilityFlagIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AiCapabilityFlagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiCapabilityFlagCreateInput, Prisma.AiCapabilityFlagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiCapabilityFlagUpdateInput, Prisma.AiCapabilityFlagUncheckedUpdateInput>;
};
export type AiCapabilityFlagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
    where: Prisma.AiCapabilityFlagWhereUniqueInput;
};
export type AiCapabilityFlagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiCapabilityFlagWhereInput;
    limit?: number;
};
export type AiCapabilityFlag$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type AiCapabilityFlagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiCapabilityFlagSelect<ExtArgs> | null;
    omit?: Prisma.AiCapabilityFlagOmit<ExtArgs> | null;
    include?: Prisma.AiCapabilityFlagInclude<ExtArgs> | null;
};
