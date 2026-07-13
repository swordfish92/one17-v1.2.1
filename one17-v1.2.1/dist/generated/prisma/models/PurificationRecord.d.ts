import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PurificationRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$PurificationRecordPayload>;
export type AggregatePurificationRecord = {
    _count: PurificationRecordCountAggregateOutputType | null;
    _avg: PurificationRecordAvgAggregateOutputType | null;
    _sum: PurificationRecordSumAggregateOutputType | null;
    _min: PurificationRecordMinAggregateOutputType | null;
    _max: PurificationRecordMaxAggregateOutputType | null;
};
export type PurificationRecordAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type PurificationRecordSumAggregateOutputType = {
    amountKobo: bigint | null;
};
export type PurificationRecordMinAggregateOutputType = {
    id: string | null;
    purificationRef: string | null;
    identifiedDate: Date | null;
    sourceDescription: string | null;
    amountKobo: bigint | null;
    charityRecipient: string | null;
    status: string | null;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type PurificationRecordMaxAggregateOutputType = {
    id: string | null;
    purificationRef: string | null;
    identifiedDate: Date | null;
    sourceDescription: string | null;
    amountKobo: bigint | null;
    charityRecipient: string | null;
    status: string | null;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date | null;
};
export type PurificationRecordCountAggregateOutputType = {
    id: number;
    purificationRef: number;
    identifiedDate: number;
    sourceDescription: number;
    amountKobo: number;
    charityRecipient: number;
    status: number;
    documentRef: number;
    notes: number;
    migrationSourceRef: number;
    createdAt: number;
    _all: number;
};
export type PurificationRecordAvgAggregateInputType = {
    amountKobo?: true;
};
export type PurificationRecordSumAggregateInputType = {
    amountKobo?: true;
};
export type PurificationRecordMinAggregateInputType = {
    id?: true;
    purificationRef?: true;
    identifiedDate?: true;
    sourceDescription?: true;
    amountKobo?: true;
    charityRecipient?: true;
    status?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type PurificationRecordMaxAggregateInputType = {
    id?: true;
    purificationRef?: true;
    identifiedDate?: true;
    sourceDescription?: true;
    amountKobo?: true;
    charityRecipient?: true;
    status?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
};
export type PurificationRecordCountAggregateInputType = {
    id?: true;
    purificationRef?: true;
    identifiedDate?: true;
    sourceDescription?: true;
    amountKobo?: true;
    charityRecipient?: true;
    status?: true;
    documentRef?: true;
    notes?: true;
    migrationSourceRef?: true;
    createdAt?: true;
    _all?: true;
};
export type PurificationRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurificationRecordWhereInput;
    orderBy?: Prisma.PurificationRecordOrderByWithRelationInput | Prisma.PurificationRecordOrderByWithRelationInput[];
    cursor?: Prisma.PurificationRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurificationRecordCountAggregateInputType;
    _avg?: PurificationRecordAvgAggregateInputType;
    _sum?: PurificationRecordSumAggregateInputType;
    _min?: PurificationRecordMinAggregateInputType;
    _max?: PurificationRecordMaxAggregateInputType;
};
export type GetPurificationRecordAggregateType<T extends PurificationRecordAggregateArgs> = {
    [P in keyof T & keyof AggregatePurificationRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurificationRecord[P]> : Prisma.GetScalarType<T[P], AggregatePurificationRecord[P]>;
};
export type PurificationRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurificationRecordWhereInput;
    orderBy?: Prisma.PurificationRecordOrderByWithAggregationInput | Prisma.PurificationRecordOrderByWithAggregationInput[];
    by: Prisma.PurificationRecordScalarFieldEnum[] | Prisma.PurificationRecordScalarFieldEnum;
    having?: Prisma.PurificationRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurificationRecordCountAggregateInputType | true;
    _avg?: PurificationRecordAvgAggregateInputType;
    _sum?: PurificationRecordSumAggregateInputType;
    _min?: PurificationRecordMinAggregateInputType;
    _max?: PurificationRecordMaxAggregateInputType;
};
export type PurificationRecordGroupByOutputType = {
    id: string;
    purificationRef: string;
    identifiedDate: Date | null;
    sourceDescription: string;
    amountKobo: bigint;
    charityRecipient: string | null;
    status: string;
    documentRef: string | null;
    notes: string | null;
    migrationSourceRef: string | null;
    createdAt: Date;
    _count: PurificationRecordCountAggregateOutputType | null;
    _avg: PurificationRecordAvgAggregateOutputType | null;
    _sum: PurificationRecordSumAggregateOutputType | null;
    _min: PurificationRecordMinAggregateOutputType | null;
    _max: PurificationRecordMaxAggregateOutputType | null;
};
export type GetPurificationRecordGroupByPayload<T extends PurificationRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurificationRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurificationRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurificationRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurificationRecordGroupByOutputType[P]>;
}>>;
export type PurificationRecordWhereInput = {
    AND?: Prisma.PurificationRecordWhereInput | Prisma.PurificationRecordWhereInput[];
    OR?: Prisma.PurificationRecordWhereInput[];
    NOT?: Prisma.PurificationRecordWhereInput | Prisma.PurificationRecordWhereInput[];
    id?: Prisma.UuidFilter<"PurificationRecord"> | string;
    purificationRef?: Prisma.StringFilter<"PurificationRecord"> | string;
    identifiedDate?: Prisma.DateTimeNullableFilter<"PurificationRecord"> | Date | string | null;
    sourceDescription?: Prisma.StringFilter<"PurificationRecord"> | string;
    amountKobo?: Prisma.BigIntFilter<"PurificationRecord"> | bigint | number;
    charityRecipient?: Prisma.StringNullableFilter<"PurificationRecord"> | string | null;
    status?: Prisma.StringFilter<"PurificationRecord"> | string;
    documentRef?: Prisma.StringNullableFilter<"PurificationRecord"> | string | null;
    notes?: Prisma.StringNullableFilter<"PurificationRecord"> | string | null;
    migrationSourceRef?: Prisma.StringNullableFilter<"PurificationRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PurificationRecord"> | Date | string;
};
export type PurificationRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purificationRef?: Prisma.SortOrder;
    identifiedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceDescription?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    charityRecipient?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurificationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    purificationRef?: string;
    migrationSourceRef?: string;
    AND?: Prisma.PurificationRecordWhereInput | Prisma.PurificationRecordWhereInput[];
    OR?: Prisma.PurificationRecordWhereInput[];
    NOT?: Prisma.PurificationRecordWhereInput | Prisma.PurificationRecordWhereInput[];
    identifiedDate?: Prisma.DateTimeNullableFilter<"PurificationRecord"> | Date | string | null;
    sourceDescription?: Prisma.StringFilter<"PurificationRecord"> | string;
    amountKobo?: Prisma.BigIntFilter<"PurificationRecord"> | bigint | number;
    charityRecipient?: Prisma.StringNullableFilter<"PurificationRecord"> | string | null;
    status?: Prisma.StringFilter<"PurificationRecord"> | string;
    documentRef?: Prisma.StringNullableFilter<"PurificationRecord"> | string | null;
    notes?: Prisma.StringNullableFilter<"PurificationRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PurificationRecord"> | Date | string;
}, "id" | "purificationRef" | "migrationSourceRef">;
export type PurificationRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purificationRef?: Prisma.SortOrder;
    identifiedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceDescription?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    charityRecipient?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PurificationRecordCountOrderByAggregateInput;
    _avg?: Prisma.PurificationRecordAvgOrderByAggregateInput;
    _max?: Prisma.PurificationRecordMaxOrderByAggregateInput;
    _min?: Prisma.PurificationRecordMinOrderByAggregateInput;
    _sum?: Prisma.PurificationRecordSumOrderByAggregateInput;
};
export type PurificationRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurificationRecordScalarWhereWithAggregatesInput | Prisma.PurificationRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurificationRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurificationRecordScalarWhereWithAggregatesInput | Prisma.PurificationRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PurificationRecord"> | string;
    purificationRef?: Prisma.StringWithAggregatesFilter<"PurificationRecord"> | string;
    identifiedDate?: Prisma.DateTimeNullableWithAggregatesFilter<"PurificationRecord"> | Date | string | null;
    sourceDescription?: Prisma.StringWithAggregatesFilter<"PurificationRecord"> | string;
    amountKobo?: Prisma.BigIntWithAggregatesFilter<"PurificationRecord"> | bigint | number;
    charityRecipient?: Prisma.StringNullableWithAggregatesFilter<"PurificationRecord"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"PurificationRecord"> | string;
    documentRef?: Prisma.StringNullableWithAggregatesFilter<"PurificationRecord"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"PurificationRecord"> | string | null;
    migrationSourceRef?: Prisma.StringNullableWithAggregatesFilter<"PurificationRecord"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PurificationRecord"> | Date | string;
};
export type PurificationRecordCreateInput = {
    id?: string;
    purificationRef: string;
    identifiedDate?: Date | string | null;
    sourceDescription: string;
    amountKobo: bigint | number;
    charityRecipient?: string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type PurificationRecordUncheckedCreateInput = {
    id?: string;
    purificationRef: string;
    identifiedDate?: Date | string | null;
    sourceDescription: string;
    amountKobo: bigint | number;
    charityRecipient?: string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type PurificationRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purificationRef?: Prisma.StringFieldUpdateOperationsInput | string;
    identifiedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sourceDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    charityRecipient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurificationRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purificationRef?: Prisma.StringFieldUpdateOperationsInput | string;
    identifiedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sourceDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    charityRecipient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurificationRecordCreateManyInput = {
    id?: string;
    purificationRef: string;
    identifiedDate?: Date | string | null;
    sourceDescription: string;
    amountKobo: bigint | number;
    charityRecipient?: string | null;
    status?: string;
    documentRef?: string | null;
    notes?: string | null;
    migrationSourceRef?: string | null;
    createdAt?: Date | string;
};
export type PurificationRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purificationRef?: Prisma.StringFieldUpdateOperationsInput | string;
    identifiedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sourceDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    charityRecipient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurificationRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purificationRef?: Prisma.StringFieldUpdateOperationsInput | string;
    identifiedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sourceDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    charityRecipient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    migrationSourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurificationRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purificationRef?: Prisma.SortOrder;
    identifiedDate?: Prisma.SortOrder;
    sourceDescription?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    charityRecipient?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurificationRecordAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type PurificationRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purificationRef?: Prisma.SortOrder;
    identifiedDate?: Prisma.SortOrder;
    sourceDescription?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    charityRecipient?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurificationRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purificationRef?: Prisma.SortOrder;
    identifiedDate?: Prisma.SortOrder;
    sourceDescription?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    charityRecipient?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentRef?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    migrationSourceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurificationRecordSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type PurificationRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purificationRef?: boolean;
    identifiedDate?: boolean;
    sourceDescription?: boolean;
    amountKobo?: boolean;
    charityRecipient?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["purificationRecord"]>;
export type PurificationRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purificationRef?: boolean;
    identifiedDate?: boolean;
    sourceDescription?: boolean;
    amountKobo?: boolean;
    charityRecipient?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["purificationRecord"]>;
export type PurificationRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purificationRef?: boolean;
    identifiedDate?: boolean;
    sourceDescription?: boolean;
    amountKobo?: boolean;
    charityRecipient?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["purificationRecord"]>;
export type PurificationRecordSelectScalar = {
    id?: boolean;
    purificationRef?: boolean;
    identifiedDate?: boolean;
    sourceDescription?: boolean;
    amountKobo?: boolean;
    charityRecipient?: boolean;
    status?: boolean;
    documentRef?: boolean;
    notes?: boolean;
    migrationSourceRef?: boolean;
    createdAt?: boolean;
};
export type PurificationRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purificationRef" | "identifiedDate" | "sourceDescription" | "amountKobo" | "charityRecipient" | "status" | "documentRef" | "notes" | "migrationSourceRef" | "createdAt", ExtArgs["result"]["purificationRecord"]>;
export type $PurificationRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PurificationRecord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        purificationRef: string;
        identifiedDate: Date | null;
        sourceDescription: string;
        amountKobo: bigint;
        charityRecipient: string | null;
        status: string;
        documentRef: string | null;
        notes: string | null;
        migrationSourceRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["purificationRecord"]>;
    composites: {};
};
export type PurificationRecordGetPayload<S extends boolean | null | undefined | PurificationRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload, S>;
export type PurificationRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurificationRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurificationRecordCountAggregateInputType | true;
};
export interface PurificationRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PurificationRecord'];
        meta: {
            name: 'PurificationRecord';
        };
    };
    findUnique<T extends PurificationRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, PurificationRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurificationRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurificationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurificationRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, PurificationRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurificationRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurificationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurificationRecordFindManyArgs>(args?: Prisma.SelectSubset<T, PurificationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurificationRecordCreateArgs>(args: Prisma.SelectSubset<T, PurificationRecordCreateArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurificationRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, PurificationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurificationRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurificationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurificationRecordDeleteArgs>(args: Prisma.SelectSubset<T, PurificationRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurificationRecordUpdateArgs>(args: Prisma.SelectSubset<T, PurificationRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurificationRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurificationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurificationRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, PurificationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurificationRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurificationRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurificationRecordUpsertArgs>(args: Prisma.SelectSubset<T, PurificationRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__PurificationRecordClient<runtime.Types.Result.GetResult<Prisma.$PurificationRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurificationRecordCountArgs>(args?: Prisma.Subset<T, PurificationRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurificationRecordCountAggregateOutputType> : number>;
    aggregate<T extends PurificationRecordAggregateArgs>(args: Prisma.Subset<T, PurificationRecordAggregateArgs>): Prisma.PrismaPromise<GetPurificationRecordAggregateType<T>>;
    groupBy<T extends PurificationRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurificationRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: PurificationRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurificationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurificationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurificationRecordFieldRefs;
}
export interface Prisma__PurificationRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurificationRecordFieldRefs {
    readonly id: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly purificationRef: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly identifiedDate: Prisma.FieldRef<"PurificationRecord", 'DateTime'>;
    readonly sourceDescription: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"PurificationRecord", 'BigInt'>;
    readonly charityRecipient: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly status: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly documentRef: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly notes: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly migrationSourceRef: Prisma.FieldRef<"PurificationRecord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PurificationRecord", 'DateTime'>;
}
export type PurificationRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    where: Prisma.PurificationRecordWhereUniqueInput;
};
export type PurificationRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    where: Prisma.PurificationRecordWhereUniqueInput;
};
export type PurificationRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    where?: Prisma.PurificationRecordWhereInput;
    orderBy?: Prisma.PurificationRecordOrderByWithRelationInput | Prisma.PurificationRecordOrderByWithRelationInput[];
    cursor?: Prisma.PurificationRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurificationRecordScalarFieldEnum | Prisma.PurificationRecordScalarFieldEnum[];
};
export type PurificationRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    where?: Prisma.PurificationRecordWhereInput;
    orderBy?: Prisma.PurificationRecordOrderByWithRelationInput | Prisma.PurificationRecordOrderByWithRelationInput[];
    cursor?: Prisma.PurificationRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurificationRecordScalarFieldEnum | Prisma.PurificationRecordScalarFieldEnum[];
};
export type PurificationRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    where?: Prisma.PurificationRecordWhereInput;
    orderBy?: Prisma.PurificationRecordOrderByWithRelationInput | Prisma.PurificationRecordOrderByWithRelationInput[];
    cursor?: Prisma.PurificationRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurificationRecordScalarFieldEnum | Prisma.PurificationRecordScalarFieldEnum[];
};
export type PurificationRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurificationRecordCreateInput, Prisma.PurificationRecordUncheckedCreateInput>;
};
export type PurificationRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurificationRecordCreateManyInput | Prisma.PurificationRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurificationRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    data: Prisma.PurificationRecordCreateManyInput | Prisma.PurificationRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurificationRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurificationRecordUpdateInput, Prisma.PurificationRecordUncheckedUpdateInput>;
    where: Prisma.PurificationRecordWhereUniqueInput;
};
export type PurificationRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurificationRecordUpdateManyMutationInput, Prisma.PurificationRecordUncheckedUpdateManyInput>;
    where?: Prisma.PurificationRecordWhereInput;
    limit?: number;
};
export type PurificationRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurificationRecordUpdateManyMutationInput, Prisma.PurificationRecordUncheckedUpdateManyInput>;
    where?: Prisma.PurificationRecordWhereInput;
    limit?: number;
};
export type PurificationRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    where: Prisma.PurificationRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurificationRecordCreateInput, Prisma.PurificationRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurificationRecordUpdateInput, Prisma.PurificationRecordUncheckedUpdateInput>;
};
export type PurificationRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
    where: Prisma.PurificationRecordWhereUniqueInput;
};
export type PurificationRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurificationRecordWhereInput;
    limit?: number;
};
export type PurificationRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurificationRecordSelect<ExtArgs> | null;
    omit?: Prisma.PurificationRecordOmit<ExtArgs> | null;
};
