import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActivationStepSkipModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivationStepSkipPayload>;
export type AggregateActivationStepSkip = {
    _count: ActivationStepSkipCountAggregateOutputType | null;
    _min: ActivationStepSkipMinAggregateOutputType | null;
    _max: ActivationStepSkipMaxAggregateOutputType | null;
};
export type ActivationStepSkipMinAggregateOutputType = {
    id: string | null;
    stepCode: string | null;
    skippedAt: Date | null;
    skippedByUserId: string | null;
};
export type ActivationStepSkipMaxAggregateOutputType = {
    id: string | null;
    stepCode: string | null;
    skippedAt: Date | null;
    skippedByUserId: string | null;
};
export type ActivationStepSkipCountAggregateOutputType = {
    id: number;
    stepCode: number;
    skippedAt: number;
    skippedByUserId: number;
    _all: number;
};
export type ActivationStepSkipMinAggregateInputType = {
    id?: true;
    stepCode?: true;
    skippedAt?: true;
    skippedByUserId?: true;
};
export type ActivationStepSkipMaxAggregateInputType = {
    id?: true;
    stepCode?: true;
    skippedAt?: true;
    skippedByUserId?: true;
};
export type ActivationStepSkipCountAggregateInputType = {
    id?: true;
    stepCode?: true;
    skippedAt?: true;
    skippedByUserId?: true;
    _all?: true;
};
export type ActivationStepSkipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationStepSkipWhereInput;
    orderBy?: Prisma.ActivationStepSkipOrderByWithRelationInput | Prisma.ActivationStepSkipOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStepSkipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivationStepSkipCountAggregateInputType;
    _min?: ActivationStepSkipMinAggregateInputType;
    _max?: ActivationStepSkipMaxAggregateInputType;
};
export type GetActivationStepSkipAggregateType<T extends ActivationStepSkipAggregateArgs> = {
    [P in keyof T & keyof AggregateActivationStepSkip]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivationStepSkip[P]> : Prisma.GetScalarType<T[P], AggregateActivationStepSkip[P]>;
};
export type ActivationStepSkipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationStepSkipWhereInput;
    orderBy?: Prisma.ActivationStepSkipOrderByWithAggregationInput | Prisma.ActivationStepSkipOrderByWithAggregationInput[];
    by: Prisma.ActivationStepSkipScalarFieldEnum[] | Prisma.ActivationStepSkipScalarFieldEnum;
    having?: Prisma.ActivationStepSkipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivationStepSkipCountAggregateInputType | true;
    _min?: ActivationStepSkipMinAggregateInputType;
    _max?: ActivationStepSkipMaxAggregateInputType;
};
export type ActivationStepSkipGroupByOutputType = {
    id: string;
    stepCode: string;
    skippedAt: Date;
    skippedByUserId: string;
    _count: ActivationStepSkipCountAggregateOutputType | null;
    _min: ActivationStepSkipMinAggregateOutputType | null;
    _max: ActivationStepSkipMaxAggregateOutputType | null;
};
export type GetActivationStepSkipGroupByPayload<T extends ActivationStepSkipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivationStepSkipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivationStepSkipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivationStepSkipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivationStepSkipGroupByOutputType[P]>;
}>>;
export type ActivationStepSkipWhereInput = {
    AND?: Prisma.ActivationStepSkipWhereInput | Prisma.ActivationStepSkipWhereInput[];
    OR?: Prisma.ActivationStepSkipWhereInput[];
    NOT?: Prisma.ActivationStepSkipWhereInput | Prisma.ActivationStepSkipWhereInput[];
    id?: Prisma.UuidFilter<"ActivationStepSkip"> | string;
    stepCode?: Prisma.StringFilter<"ActivationStepSkip"> | string;
    skippedAt?: Prisma.DateTimeFilter<"ActivationStepSkip"> | Date | string;
    skippedByUserId?: Prisma.UuidFilter<"ActivationStepSkip"> | string;
    skippedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type ActivationStepSkipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    stepCode?: Prisma.SortOrder;
    skippedAt?: Prisma.SortOrder;
    skippedByUserId?: Prisma.SortOrder;
    skippedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type ActivationStepSkipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    stepCode?: string;
    AND?: Prisma.ActivationStepSkipWhereInput | Prisma.ActivationStepSkipWhereInput[];
    OR?: Prisma.ActivationStepSkipWhereInput[];
    NOT?: Prisma.ActivationStepSkipWhereInput | Prisma.ActivationStepSkipWhereInput[];
    skippedAt?: Prisma.DateTimeFilter<"ActivationStepSkip"> | Date | string;
    skippedByUserId?: Prisma.UuidFilter<"ActivationStepSkip"> | string;
    skippedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "stepCode">;
export type ActivationStepSkipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    stepCode?: Prisma.SortOrder;
    skippedAt?: Prisma.SortOrder;
    skippedByUserId?: Prisma.SortOrder;
    _count?: Prisma.ActivationStepSkipCountOrderByAggregateInput;
    _max?: Prisma.ActivationStepSkipMaxOrderByAggregateInput;
    _min?: Prisma.ActivationStepSkipMinOrderByAggregateInput;
};
export type ActivationStepSkipScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivationStepSkipScalarWhereWithAggregatesInput | Prisma.ActivationStepSkipScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivationStepSkipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivationStepSkipScalarWhereWithAggregatesInput | Prisma.ActivationStepSkipScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ActivationStepSkip"> | string;
    stepCode?: Prisma.StringWithAggregatesFilter<"ActivationStepSkip"> | string;
    skippedAt?: Prisma.DateTimeWithAggregatesFilter<"ActivationStepSkip"> | Date | string;
    skippedByUserId?: Prisma.UuidWithAggregatesFilter<"ActivationStepSkip"> | string;
};
export type ActivationStepSkipCreateInput = {
    id?: string;
    stepCode: string;
    skippedAt?: Date | string;
    skippedBy: Prisma.AppUserCreateNestedOneWithoutActivationSkipsMadeInput;
};
export type ActivationStepSkipUncheckedCreateInput = {
    id?: string;
    stepCode: string;
    skippedAt?: Date | string;
    skippedByUserId: string;
};
export type ActivationStepSkipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepCode?: Prisma.StringFieldUpdateOperationsInput | string;
    skippedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skippedBy?: Prisma.AppUserUpdateOneRequiredWithoutActivationSkipsMadeNestedInput;
};
export type ActivationStepSkipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepCode?: Prisma.StringFieldUpdateOperationsInput | string;
    skippedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skippedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ActivationStepSkipCreateManyInput = {
    id?: string;
    stepCode: string;
    skippedAt?: Date | string;
    skippedByUserId: string;
};
export type ActivationStepSkipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepCode?: Prisma.StringFieldUpdateOperationsInput | string;
    skippedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationStepSkipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepCode?: Prisma.StringFieldUpdateOperationsInput | string;
    skippedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skippedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ActivationStepSkipListRelationFilter = {
    every?: Prisma.ActivationStepSkipWhereInput;
    some?: Prisma.ActivationStepSkipWhereInput;
    none?: Prisma.ActivationStepSkipWhereInput;
};
export type ActivationStepSkipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivationStepSkipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stepCode?: Prisma.SortOrder;
    skippedAt?: Prisma.SortOrder;
    skippedByUserId?: Prisma.SortOrder;
};
export type ActivationStepSkipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stepCode?: Prisma.SortOrder;
    skippedAt?: Prisma.SortOrder;
    skippedByUserId?: Prisma.SortOrder;
};
export type ActivationStepSkipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stepCode?: Prisma.SortOrder;
    skippedAt?: Prisma.SortOrder;
    skippedByUserId?: Prisma.SortOrder;
};
export type ActivationStepSkipCreateNestedManyWithoutSkippedByInput = {
    create?: Prisma.XOR<Prisma.ActivationStepSkipCreateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput> | Prisma.ActivationStepSkipCreateWithoutSkippedByInput[] | Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput[];
    connectOrCreate?: Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput | Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput[];
    createMany?: Prisma.ActivationStepSkipCreateManySkippedByInputEnvelope;
    connect?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
};
export type ActivationStepSkipUncheckedCreateNestedManyWithoutSkippedByInput = {
    create?: Prisma.XOR<Prisma.ActivationStepSkipCreateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput> | Prisma.ActivationStepSkipCreateWithoutSkippedByInput[] | Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput[];
    connectOrCreate?: Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput | Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput[];
    createMany?: Prisma.ActivationStepSkipCreateManySkippedByInputEnvelope;
    connect?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
};
export type ActivationStepSkipUpdateManyWithoutSkippedByNestedInput = {
    create?: Prisma.XOR<Prisma.ActivationStepSkipCreateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput> | Prisma.ActivationStepSkipCreateWithoutSkippedByInput[] | Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput[];
    connectOrCreate?: Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput | Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput[];
    upsert?: Prisma.ActivationStepSkipUpsertWithWhereUniqueWithoutSkippedByInput | Prisma.ActivationStepSkipUpsertWithWhereUniqueWithoutSkippedByInput[];
    createMany?: Prisma.ActivationStepSkipCreateManySkippedByInputEnvelope;
    set?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    disconnect?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    delete?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    connect?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    update?: Prisma.ActivationStepSkipUpdateWithWhereUniqueWithoutSkippedByInput | Prisma.ActivationStepSkipUpdateWithWhereUniqueWithoutSkippedByInput[];
    updateMany?: Prisma.ActivationStepSkipUpdateManyWithWhereWithoutSkippedByInput | Prisma.ActivationStepSkipUpdateManyWithWhereWithoutSkippedByInput[];
    deleteMany?: Prisma.ActivationStepSkipScalarWhereInput | Prisma.ActivationStepSkipScalarWhereInput[];
};
export type ActivationStepSkipUncheckedUpdateManyWithoutSkippedByNestedInput = {
    create?: Prisma.XOR<Prisma.ActivationStepSkipCreateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput> | Prisma.ActivationStepSkipCreateWithoutSkippedByInput[] | Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput[];
    connectOrCreate?: Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput | Prisma.ActivationStepSkipCreateOrConnectWithoutSkippedByInput[];
    upsert?: Prisma.ActivationStepSkipUpsertWithWhereUniqueWithoutSkippedByInput | Prisma.ActivationStepSkipUpsertWithWhereUniqueWithoutSkippedByInput[];
    createMany?: Prisma.ActivationStepSkipCreateManySkippedByInputEnvelope;
    set?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    disconnect?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    delete?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    connect?: Prisma.ActivationStepSkipWhereUniqueInput | Prisma.ActivationStepSkipWhereUniqueInput[];
    update?: Prisma.ActivationStepSkipUpdateWithWhereUniqueWithoutSkippedByInput | Prisma.ActivationStepSkipUpdateWithWhereUniqueWithoutSkippedByInput[];
    updateMany?: Prisma.ActivationStepSkipUpdateManyWithWhereWithoutSkippedByInput | Prisma.ActivationStepSkipUpdateManyWithWhereWithoutSkippedByInput[];
    deleteMany?: Prisma.ActivationStepSkipScalarWhereInput | Prisma.ActivationStepSkipScalarWhereInput[];
};
export type ActivationStepSkipCreateWithoutSkippedByInput = {
    id?: string;
    stepCode: string;
    skippedAt?: Date | string;
};
export type ActivationStepSkipUncheckedCreateWithoutSkippedByInput = {
    id?: string;
    stepCode: string;
    skippedAt?: Date | string;
};
export type ActivationStepSkipCreateOrConnectWithoutSkippedByInput = {
    where: Prisma.ActivationStepSkipWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivationStepSkipCreateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput>;
};
export type ActivationStepSkipCreateManySkippedByInputEnvelope = {
    data: Prisma.ActivationStepSkipCreateManySkippedByInput | Prisma.ActivationStepSkipCreateManySkippedByInput[];
    skipDuplicates?: boolean;
};
export type ActivationStepSkipUpsertWithWhereUniqueWithoutSkippedByInput = {
    where: Prisma.ActivationStepSkipWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivationStepSkipUpdateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedUpdateWithoutSkippedByInput>;
    create: Prisma.XOR<Prisma.ActivationStepSkipCreateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedCreateWithoutSkippedByInput>;
};
export type ActivationStepSkipUpdateWithWhereUniqueWithoutSkippedByInput = {
    where: Prisma.ActivationStepSkipWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivationStepSkipUpdateWithoutSkippedByInput, Prisma.ActivationStepSkipUncheckedUpdateWithoutSkippedByInput>;
};
export type ActivationStepSkipUpdateManyWithWhereWithoutSkippedByInput = {
    where: Prisma.ActivationStepSkipScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivationStepSkipUpdateManyMutationInput, Prisma.ActivationStepSkipUncheckedUpdateManyWithoutSkippedByInput>;
};
export type ActivationStepSkipScalarWhereInput = {
    AND?: Prisma.ActivationStepSkipScalarWhereInput | Prisma.ActivationStepSkipScalarWhereInput[];
    OR?: Prisma.ActivationStepSkipScalarWhereInput[];
    NOT?: Prisma.ActivationStepSkipScalarWhereInput | Prisma.ActivationStepSkipScalarWhereInput[];
    id?: Prisma.UuidFilter<"ActivationStepSkip"> | string;
    stepCode?: Prisma.StringFilter<"ActivationStepSkip"> | string;
    skippedAt?: Prisma.DateTimeFilter<"ActivationStepSkip"> | Date | string;
    skippedByUserId?: Prisma.UuidFilter<"ActivationStepSkip"> | string;
};
export type ActivationStepSkipCreateManySkippedByInput = {
    id?: string;
    stepCode: string;
    skippedAt?: Date | string;
};
export type ActivationStepSkipUpdateWithoutSkippedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepCode?: Prisma.StringFieldUpdateOperationsInput | string;
    skippedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationStepSkipUncheckedUpdateWithoutSkippedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepCode?: Prisma.StringFieldUpdateOperationsInput | string;
    skippedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationStepSkipUncheckedUpdateManyWithoutSkippedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepCode?: Prisma.StringFieldUpdateOperationsInput | string;
    skippedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivationStepSkipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stepCode?: boolean;
    skippedAt?: boolean;
    skippedByUserId?: boolean;
    skippedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activationStepSkip"]>;
export type ActivationStepSkipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stepCode?: boolean;
    skippedAt?: boolean;
    skippedByUserId?: boolean;
    skippedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activationStepSkip"]>;
export type ActivationStepSkipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stepCode?: boolean;
    skippedAt?: boolean;
    skippedByUserId?: boolean;
    skippedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activationStepSkip"]>;
export type ActivationStepSkipSelectScalar = {
    id?: boolean;
    stepCode?: boolean;
    skippedAt?: boolean;
    skippedByUserId?: boolean;
};
export type ActivationStepSkipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "stepCode" | "skippedAt" | "skippedByUserId", ExtArgs["result"]["activationStepSkip"]>;
export type ActivationStepSkipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skippedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type ActivationStepSkipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skippedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type ActivationStepSkipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skippedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $ActivationStepSkipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActivationStepSkip";
    objects: {
        skippedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        stepCode: string;
        skippedAt: Date;
        skippedByUserId: string;
    }, ExtArgs["result"]["activationStepSkip"]>;
    composites: {};
};
export type ActivationStepSkipGetPayload<S extends boolean | null | undefined | ActivationStepSkipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload, S>;
export type ActivationStepSkipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivationStepSkipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivationStepSkipCountAggregateInputType | true;
};
export interface ActivationStepSkipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActivationStepSkip'];
        meta: {
            name: 'ActivationStepSkip';
        };
    };
    findUnique<T extends ActivationStepSkipFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActivationStepSkipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActivationStepSkipFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivationStepSkipFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActivationStepSkipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivationStepSkipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActivationStepSkipFindManyArgs>(args?: Prisma.SelectSubset<T, ActivationStepSkipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActivationStepSkipCreateArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipCreateArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActivationStepSkipCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivationStepSkipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ActivationStepSkipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivationStepSkipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ActivationStepSkipDeleteArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActivationStepSkipUpdateArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActivationStepSkipDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivationStepSkipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActivationStepSkipUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ActivationStepSkipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ActivationStepSkipUpsertArgs>(args: Prisma.SelectSubset<T, ActivationStepSkipUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivationStepSkipClient<runtime.Types.Result.GetResult<Prisma.$ActivationStepSkipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActivationStepSkipCountArgs>(args?: Prisma.Subset<T, ActivationStepSkipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivationStepSkipCountAggregateOutputType> : number>;
    aggregate<T extends ActivationStepSkipAggregateArgs>(args: Prisma.Subset<T, ActivationStepSkipAggregateArgs>): Prisma.PrismaPromise<GetActivationStepSkipAggregateType<T>>;
    groupBy<T extends ActivationStepSkipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivationStepSkipGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivationStepSkipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivationStepSkipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivationStepSkipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActivationStepSkipFieldRefs;
}
export interface Prisma__ActivationStepSkipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    skippedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActivationStepSkipFieldRefs {
    readonly id: Prisma.FieldRef<"ActivationStepSkip", 'String'>;
    readonly stepCode: Prisma.FieldRef<"ActivationStepSkip", 'String'>;
    readonly skippedAt: Prisma.FieldRef<"ActivationStepSkip", 'DateTime'>;
    readonly skippedByUserId: Prisma.FieldRef<"ActivationStepSkip", 'String'>;
}
export type ActivationStepSkipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    where: Prisma.ActivationStepSkipWhereUniqueInput;
};
export type ActivationStepSkipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    where: Prisma.ActivationStepSkipWhereUniqueInput;
};
export type ActivationStepSkipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    where?: Prisma.ActivationStepSkipWhereInput;
    orderBy?: Prisma.ActivationStepSkipOrderByWithRelationInput | Prisma.ActivationStepSkipOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStepSkipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationStepSkipScalarFieldEnum | Prisma.ActivationStepSkipScalarFieldEnum[];
};
export type ActivationStepSkipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    where?: Prisma.ActivationStepSkipWhereInput;
    orderBy?: Prisma.ActivationStepSkipOrderByWithRelationInput | Prisma.ActivationStepSkipOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStepSkipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationStepSkipScalarFieldEnum | Prisma.ActivationStepSkipScalarFieldEnum[];
};
export type ActivationStepSkipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    where?: Prisma.ActivationStepSkipWhereInput;
    orderBy?: Prisma.ActivationStepSkipOrderByWithRelationInput | Prisma.ActivationStepSkipOrderByWithRelationInput[];
    cursor?: Prisma.ActivationStepSkipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivationStepSkipScalarFieldEnum | Prisma.ActivationStepSkipScalarFieldEnum[];
};
export type ActivationStepSkipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationStepSkipCreateInput, Prisma.ActivationStepSkipUncheckedCreateInput>;
};
export type ActivationStepSkipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActivationStepSkipCreateManyInput | Prisma.ActivationStepSkipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActivationStepSkipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    data: Prisma.ActivationStepSkipCreateManyInput | Prisma.ActivationStepSkipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ActivationStepSkipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ActivationStepSkipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationStepSkipUpdateInput, Prisma.ActivationStepSkipUncheckedUpdateInput>;
    where: Prisma.ActivationStepSkipWhereUniqueInput;
};
export type ActivationStepSkipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActivationStepSkipUpdateManyMutationInput, Prisma.ActivationStepSkipUncheckedUpdateManyInput>;
    where?: Prisma.ActivationStepSkipWhereInput;
    limit?: number;
};
export type ActivationStepSkipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivationStepSkipUpdateManyMutationInput, Prisma.ActivationStepSkipUncheckedUpdateManyInput>;
    where?: Prisma.ActivationStepSkipWhereInput;
    limit?: number;
    include?: Prisma.ActivationStepSkipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ActivationStepSkipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    where: Prisma.ActivationStepSkipWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivationStepSkipCreateInput, Prisma.ActivationStepSkipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActivationStepSkipUpdateInput, Prisma.ActivationStepSkipUncheckedUpdateInput>;
};
export type ActivationStepSkipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
    where: Prisma.ActivationStepSkipWhereUniqueInput;
};
export type ActivationStepSkipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivationStepSkipWhereInput;
    limit?: number;
};
export type ActivationStepSkipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivationStepSkipSelect<ExtArgs> | null;
    omit?: Prisma.ActivationStepSkipOmit<ExtArgs> | null;
    include?: Prisma.ActivationStepSkipInclude<ExtArgs> | null;
};
