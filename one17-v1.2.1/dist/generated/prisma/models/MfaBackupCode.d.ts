import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MfaBackupCodeModel = runtime.Types.Result.DefaultSelection<Prisma.$MfaBackupCodePayload>;
export type AggregateMfaBackupCode = {
    _count: MfaBackupCodeCountAggregateOutputType | null;
    _min: MfaBackupCodeMinAggregateOutputType | null;
    _max: MfaBackupCodeMaxAggregateOutputType | null;
};
export type MfaBackupCodeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    codeHash: string | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type MfaBackupCodeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    codeHash: string | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type MfaBackupCodeCountAggregateOutputType = {
    id: number;
    userId: number;
    codeHash: number;
    usedAt: number;
    createdAt: number;
    _all: number;
};
export type MfaBackupCodeMinAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
};
export type MfaBackupCodeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
};
export type MfaBackupCodeCountAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type MfaBackupCodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaBackupCodeWhereInput;
    orderBy?: Prisma.MfaBackupCodeOrderByWithRelationInput | Prisma.MfaBackupCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaBackupCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MfaBackupCodeCountAggregateInputType;
    _min?: MfaBackupCodeMinAggregateInputType;
    _max?: MfaBackupCodeMaxAggregateInputType;
};
export type GetMfaBackupCodeAggregateType<T extends MfaBackupCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateMfaBackupCode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMfaBackupCode[P]> : Prisma.GetScalarType<T[P], AggregateMfaBackupCode[P]>;
};
export type MfaBackupCodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaBackupCodeWhereInput;
    orderBy?: Prisma.MfaBackupCodeOrderByWithAggregationInput | Prisma.MfaBackupCodeOrderByWithAggregationInput[];
    by: Prisma.MfaBackupCodeScalarFieldEnum[] | Prisma.MfaBackupCodeScalarFieldEnum;
    having?: Prisma.MfaBackupCodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MfaBackupCodeCountAggregateInputType | true;
    _min?: MfaBackupCodeMinAggregateInputType;
    _max?: MfaBackupCodeMaxAggregateInputType;
};
export type MfaBackupCodeGroupByOutputType = {
    id: string;
    userId: string;
    codeHash: string;
    usedAt: Date | null;
    createdAt: Date;
    _count: MfaBackupCodeCountAggregateOutputType | null;
    _min: MfaBackupCodeMinAggregateOutputType | null;
    _max: MfaBackupCodeMaxAggregateOutputType | null;
};
export type GetMfaBackupCodeGroupByPayload<T extends MfaBackupCodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MfaBackupCodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MfaBackupCodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MfaBackupCodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MfaBackupCodeGroupByOutputType[P]>;
}>>;
export type MfaBackupCodeWhereInput = {
    AND?: Prisma.MfaBackupCodeWhereInput | Prisma.MfaBackupCodeWhereInput[];
    OR?: Prisma.MfaBackupCodeWhereInput[];
    NOT?: Prisma.MfaBackupCodeWhereInput | Prisma.MfaBackupCodeWhereInput[];
    id?: Prisma.UuidFilter<"MfaBackupCode"> | string;
    userId?: Prisma.UuidFilter<"MfaBackupCode"> | string;
    codeHash?: Prisma.StringFilter<"MfaBackupCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"MfaBackupCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaBackupCode"> | Date | string;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type MfaBackupCodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.AppUserOrderByWithRelationInput;
};
export type MfaBackupCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MfaBackupCodeWhereInput | Prisma.MfaBackupCodeWhereInput[];
    OR?: Prisma.MfaBackupCodeWhereInput[];
    NOT?: Prisma.MfaBackupCodeWhereInput | Prisma.MfaBackupCodeWhereInput[];
    userId?: Prisma.UuidFilter<"MfaBackupCode"> | string;
    codeHash?: Prisma.StringFilter<"MfaBackupCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"MfaBackupCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaBackupCode"> | Date | string;
    user?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type MfaBackupCodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MfaBackupCodeCountOrderByAggregateInput;
    _max?: Prisma.MfaBackupCodeMaxOrderByAggregateInput;
    _min?: Prisma.MfaBackupCodeMinOrderByAggregateInput;
};
export type MfaBackupCodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.MfaBackupCodeScalarWhereWithAggregatesInput | Prisma.MfaBackupCodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.MfaBackupCodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MfaBackupCodeScalarWhereWithAggregatesInput | Prisma.MfaBackupCodeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MfaBackupCode"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"MfaBackupCode"> | string;
    codeHash?: Prisma.StringWithAggregatesFilter<"MfaBackupCode"> | string;
    usedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MfaBackupCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MfaBackupCode"> | Date | string;
};
export type MfaBackupCodeCreateInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    user: Prisma.AppUserCreateNestedOneWithoutMfaBackupCodesInput;
};
export type MfaBackupCodeUncheckedCreateInput = {
    id?: string;
    userId: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaBackupCodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.AppUserUpdateOneRequiredWithoutMfaBackupCodesNestedInput;
};
export type MfaBackupCodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaBackupCodeCreateManyInput = {
    id?: string;
    userId: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaBackupCodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaBackupCodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaBackupCodeListRelationFilter = {
    every?: Prisma.MfaBackupCodeWhereInput;
    some?: Prisma.MfaBackupCodeWhereInput;
    none?: Prisma.MfaBackupCodeWhereInput;
};
export type MfaBackupCodeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MfaBackupCodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaBackupCodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaBackupCodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaBackupCodeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MfaBackupCodeCreateWithoutUserInput, Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput> | Prisma.MfaBackupCodeCreateWithoutUserInput[] | Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput | Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MfaBackupCodeCreateManyUserInputEnvelope;
    connect?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
};
export type MfaBackupCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MfaBackupCodeCreateWithoutUserInput, Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput> | Prisma.MfaBackupCodeCreateWithoutUserInput[] | Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput | Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MfaBackupCodeCreateManyUserInputEnvelope;
    connect?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
};
export type MfaBackupCodeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MfaBackupCodeCreateWithoutUserInput, Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput> | Prisma.MfaBackupCodeCreateWithoutUserInput[] | Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput | Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MfaBackupCodeUpsertWithWhereUniqueWithoutUserInput | Prisma.MfaBackupCodeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MfaBackupCodeCreateManyUserInputEnvelope;
    set?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    disconnect?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    delete?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    connect?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    update?: Prisma.MfaBackupCodeUpdateWithWhereUniqueWithoutUserInput | Prisma.MfaBackupCodeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MfaBackupCodeUpdateManyWithWhereWithoutUserInput | Prisma.MfaBackupCodeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MfaBackupCodeScalarWhereInput | Prisma.MfaBackupCodeScalarWhereInput[];
};
export type MfaBackupCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MfaBackupCodeCreateWithoutUserInput, Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput> | Prisma.MfaBackupCodeCreateWithoutUserInput[] | Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput | Prisma.MfaBackupCodeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MfaBackupCodeUpsertWithWhereUniqueWithoutUserInput | Prisma.MfaBackupCodeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MfaBackupCodeCreateManyUserInputEnvelope;
    set?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    disconnect?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    delete?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    connect?: Prisma.MfaBackupCodeWhereUniqueInput | Prisma.MfaBackupCodeWhereUniqueInput[];
    update?: Prisma.MfaBackupCodeUpdateWithWhereUniqueWithoutUserInput | Prisma.MfaBackupCodeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MfaBackupCodeUpdateManyWithWhereWithoutUserInput | Prisma.MfaBackupCodeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MfaBackupCodeScalarWhereInput | Prisma.MfaBackupCodeScalarWhereInput[];
};
export type MfaBackupCodeCreateWithoutUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaBackupCodeUncheckedCreateWithoutUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaBackupCodeCreateOrConnectWithoutUserInput = {
    where: Prisma.MfaBackupCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaBackupCodeCreateWithoutUserInput, Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput>;
};
export type MfaBackupCodeCreateManyUserInputEnvelope = {
    data: Prisma.MfaBackupCodeCreateManyUserInput | Prisma.MfaBackupCodeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MfaBackupCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MfaBackupCodeWhereUniqueInput;
    update: Prisma.XOR<Prisma.MfaBackupCodeUpdateWithoutUserInput, Prisma.MfaBackupCodeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MfaBackupCodeCreateWithoutUserInput, Prisma.MfaBackupCodeUncheckedCreateWithoutUserInput>;
};
export type MfaBackupCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MfaBackupCodeWhereUniqueInput;
    data: Prisma.XOR<Prisma.MfaBackupCodeUpdateWithoutUserInput, Prisma.MfaBackupCodeUncheckedUpdateWithoutUserInput>;
};
export type MfaBackupCodeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MfaBackupCodeScalarWhereInput;
    data: Prisma.XOR<Prisma.MfaBackupCodeUpdateManyMutationInput, Prisma.MfaBackupCodeUncheckedUpdateManyWithoutUserInput>;
};
export type MfaBackupCodeScalarWhereInput = {
    AND?: Prisma.MfaBackupCodeScalarWhereInput | Prisma.MfaBackupCodeScalarWhereInput[];
    OR?: Prisma.MfaBackupCodeScalarWhereInput[];
    NOT?: Prisma.MfaBackupCodeScalarWhereInput | Prisma.MfaBackupCodeScalarWhereInput[];
    id?: Prisma.UuidFilter<"MfaBackupCode"> | string;
    userId?: Prisma.UuidFilter<"MfaBackupCode"> | string;
    codeHash?: Prisma.StringFilter<"MfaBackupCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"MfaBackupCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaBackupCode"> | Date | string;
};
export type MfaBackupCodeCreateManyUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaBackupCodeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaBackupCodeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaBackupCodeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaBackupCodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaBackupCode"]>;
export type MfaBackupCodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaBackupCode"]>;
export type MfaBackupCodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaBackupCode"]>;
export type MfaBackupCodeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
};
export type MfaBackupCodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "codeHash" | "usedAt" | "createdAt", ExtArgs["result"]["mfaBackupCode"]>;
export type MfaBackupCodeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type MfaBackupCodeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type MfaBackupCodeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $MfaBackupCodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MfaBackupCode";
    objects: {
        user: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        codeHash: string;
        usedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["mfaBackupCode"]>;
    composites: {};
};
export type MfaBackupCodeGetPayload<S extends boolean | null | undefined | MfaBackupCodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload, S>;
export type MfaBackupCodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MfaBackupCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MfaBackupCodeCountAggregateInputType | true;
};
export interface MfaBackupCodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MfaBackupCode'];
        meta: {
            name: 'MfaBackupCode';
        };
    };
    findUnique<T extends MfaBackupCodeFindUniqueArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MfaBackupCodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MfaBackupCodeFindFirstArgs>(args?: Prisma.SelectSubset<T, MfaBackupCodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MfaBackupCodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MfaBackupCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MfaBackupCodeFindManyArgs>(args?: Prisma.SelectSubset<T, MfaBackupCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MfaBackupCodeCreateArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeCreateArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MfaBackupCodeCreateManyArgs>(args?: Prisma.SelectSubset<T, MfaBackupCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MfaBackupCodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MfaBackupCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MfaBackupCodeDeleteArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeDeleteArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MfaBackupCodeUpdateArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeUpdateArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MfaBackupCodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, MfaBackupCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MfaBackupCodeUpdateManyArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MfaBackupCodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MfaBackupCodeUpsertArgs>(args: Prisma.SelectSubset<T, MfaBackupCodeUpsertArgs<ExtArgs>>): Prisma.Prisma__MfaBackupCodeClient<runtime.Types.Result.GetResult<Prisma.$MfaBackupCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MfaBackupCodeCountArgs>(args?: Prisma.Subset<T, MfaBackupCodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MfaBackupCodeCountAggregateOutputType> : number>;
    aggregate<T extends MfaBackupCodeAggregateArgs>(args: Prisma.Subset<T, MfaBackupCodeAggregateArgs>): Prisma.PrismaPromise<GetMfaBackupCodeAggregateType<T>>;
    groupBy<T extends MfaBackupCodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MfaBackupCodeGroupByArgs['orderBy'];
    } : {
        orderBy?: MfaBackupCodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MfaBackupCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfaBackupCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MfaBackupCodeFieldRefs;
}
export interface Prisma__MfaBackupCodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MfaBackupCodeFieldRefs {
    readonly id: Prisma.FieldRef<"MfaBackupCode", 'String'>;
    readonly userId: Prisma.FieldRef<"MfaBackupCode", 'String'>;
    readonly codeHash: Prisma.FieldRef<"MfaBackupCode", 'String'>;
    readonly usedAt: Prisma.FieldRef<"MfaBackupCode", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MfaBackupCode", 'DateTime'>;
}
export type MfaBackupCodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    where: Prisma.MfaBackupCodeWhereUniqueInput;
};
export type MfaBackupCodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    where: Prisma.MfaBackupCodeWhereUniqueInput;
};
export type MfaBackupCodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    where?: Prisma.MfaBackupCodeWhereInput;
    orderBy?: Prisma.MfaBackupCodeOrderByWithRelationInput | Prisma.MfaBackupCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaBackupCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaBackupCodeScalarFieldEnum | Prisma.MfaBackupCodeScalarFieldEnum[];
};
export type MfaBackupCodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    where?: Prisma.MfaBackupCodeWhereInput;
    orderBy?: Prisma.MfaBackupCodeOrderByWithRelationInput | Prisma.MfaBackupCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaBackupCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaBackupCodeScalarFieldEnum | Prisma.MfaBackupCodeScalarFieldEnum[];
};
export type MfaBackupCodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    where?: Prisma.MfaBackupCodeWhereInput;
    orderBy?: Prisma.MfaBackupCodeOrderByWithRelationInput | Prisma.MfaBackupCodeOrderByWithRelationInput[];
    cursor?: Prisma.MfaBackupCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaBackupCodeScalarFieldEnum | Prisma.MfaBackupCodeScalarFieldEnum[];
};
export type MfaBackupCodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaBackupCodeCreateInput, Prisma.MfaBackupCodeUncheckedCreateInput>;
};
export type MfaBackupCodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MfaBackupCodeCreateManyInput | Prisma.MfaBackupCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MfaBackupCodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    data: Prisma.MfaBackupCodeCreateManyInput | Prisma.MfaBackupCodeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MfaBackupCodeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MfaBackupCodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaBackupCodeUpdateInput, Prisma.MfaBackupCodeUncheckedUpdateInput>;
    where: Prisma.MfaBackupCodeWhereUniqueInput;
};
export type MfaBackupCodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MfaBackupCodeUpdateManyMutationInput, Prisma.MfaBackupCodeUncheckedUpdateManyInput>;
    where?: Prisma.MfaBackupCodeWhereInput;
    limit?: number;
};
export type MfaBackupCodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaBackupCodeUpdateManyMutationInput, Prisma.MfaBackupCodeUncheckedUpdateManyInput>;
    where?: Prisma.MfaBackupCodeWhereInput;
    limit?: number;
    include?: Prisma.MfaBackupCodeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MfaBackupCodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    where: Prisma.MfaBackupCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaBackupCodeCreateInput, Prisma.MfaBackupCodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MfaBackupCodeUpdateInput, Prisma.MfaBackupCodeUncheckedUpdateInput>;
};
export type MfaBackupCodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
    where: Prisma.MfaBackupCodeWhereUniqueInput;
};
export type MfaBackupCodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaBackupCodeWhereInput;
    limit?: number;
};
export type MfaBackupCodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaBackupCodeSelect<ExtArgs> | null;
    omit?: Prisma.MfaBackupCodeOmit<ExtArgs> | null;
    include?: Prisma.MfaBackupCodeInclude<ExtArgs> | null;
};
