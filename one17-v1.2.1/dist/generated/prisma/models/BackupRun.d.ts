import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BackupRunModel = runtime.Types.Result.DefaultSelection<Prisma.$BackupRunPayload>;
export type AggregateBackupRun = {
    _count: BackupRunCountAggregateOutputType | null;
    _avg: BackupRunAvgAggregateOutputType | null;
    _sum: BackupRunSumAggregateOutputType | null;
    _min: BackupRunMinAggregateOutputType | null;
    _max: BackupRunMaxAggregateOutputType | null;
};
export type BackupRunAvgAggregateOutputType = {
    dumpSizeBytes: number | null;
};
export type BackupRunSumAggregateOutputType = {
    dumpSizeBytes: bigint | null;
};
export type BackupRunMinAggregateOutputType = {
    id: string | null;
    dbName: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
    status: $Enums.BackupRunStatus | null;
    dumpSizeBytes: bigint | null;
    offMachineCopyOk: boolean | null;
    errorMessage: string | null;
    reportedAt: Date | null;
};
export type BackupRunMaxAggregateOutputType = {
    id: string | null;
    dbName: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
    status: $Enums.BackupRunStatus | null;
    dumpSizeBytes: bigint | null;
    offMachineCopyOk: boolean | null;
    errorMessage: string | null;
    reportedAt: Date | null;
};
export type BackupRunCountAggregateOutputType = {
    id: number;
    dbName: number;
    startedAt: number;
    completedAt: number;
    status: number;
    dumpSizeBytes: number;
    offMachineCopyOk: number;
    errorMessage: number;
    reportedAt: number;
    _all: number;
};
export type BackupRunAvgAggregateInputType = {
    dumpSizeBytes?: true;
};
export type BackupRunSumAggregateInputType = {
    dumpSizeBytes?: true;
};
export type BackupRunMinAggregateInputType = {
    id?: true;
    dbName?: true;
    startedAt?: true;
    completedAt?: true;
    status?: true;
    dumpSizeBytes?: true;
    offMachineCopyOk?: true;
    errorMessage?: true;
    reportedAt?: true;
};
export type BackupRunMaxAggregateInputType = {
    id?: true;
    dbName?: true;
    startedAt?: true;
    completedAt?: true;
    status?: true;
    dumpSizeBytes?: true;
    offMachineCopyOk?: true;
    errorMessage?: true;
    reportedAt?: true;
};
export type BackupRunCountAggregateInputType = {
    id?: true;
    dbName?: true;
    startedAt?: true;
    completedAt?: true;
    status?: true;
    dumpSizeBytes?: true;
    offMachineCopyOk?: true;
    errorMessage?: true;
    reportedAt?: true;
    _all?: true;
};
export type BackupRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BackupRunWhereInput;
    orderBy?: Prisma.BackupRunOrderByWithRelationInput | Prisma.BackupRunOrderByWithRelationInput[];
    cursor?: Prisma.BackupRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BackupRunCountAggregateInputType;
    _avg?: BackupRunAvgAggregateInputType;
    _sum?: BackupRunSumAggregateInputType;
    _min?: BackupRunMinAggregateInputType;
    _max?: BackupRunMaxAggregateInputType;
};
export type GetBackupRunAggregateType<T extends BackupRunAggregateArgs> = {
    [P in keyof T & keyof AggregateBackupRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBackupRun[P]> : Prisma.GetScalarType<T[P], AggregateBackupRun[P]>;
};
export type BackupRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BackupRunWhereInput;
    orderBy?: Prisma.BackupRunOrderByWithAggregationInput | Prisma.BackupRunOrderByWithAggregationInput[];
    by: Prisma.BackupRunScalarFieldEnum[] | Prisma.BackupRunScalarFieldEnum;
    having?: Prisma.BackupRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BackupRunCountAggregateInputType | true;
    _avg?: BackupRunAvgAggregateInputType;
    _sum?: BackupRunSumAggregateInputType;
    _min?: BackupRunMinAggregateInputType;
    _max?: BackupRunMaxAggregateInputType;
};
export type BackupRunGroupByOutputType = {
    id: string;
    dbName: string;
    startedAt: Date;
    completedAt: Date;
    status: $Enums.BackupRunStatus;
    dumpSizeBytes: bigint | null;
    offMachineCopyOk: boolean | null;
    errorMessage: string | null;
    reportedAt: Date;
    _count: BackupRunCountAggregateOutputType | null;
    _avg: BackupRunAvgAggregateOutputType | null;
    _sum: BackupRunSumAggregateOutputType | null;
    _min: BackupRunMinAggregateOutputType | null;
    _max: BackupRunMaxAggregateOutputType | null;
};
export type GetBackupRunGroupByPayload<T extends BackupRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BackupRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BackupRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BackupRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BackupRunGroupByOutputType[P]>;
}>>;
export type BackupRunWhereInput = {
    AND?: Prisma.BackupRunWhereInput | Prisma.BackupRunWhereInput[];
    OR?: Prisma.BackupRunWhereInput[];
    NOT?: Prisma.BackupRunWhereInput | Prisma.BackupRunWhereInput[];
    id?: Prisma.UuidFilter<"BackupRun"> | string;
    dbName?: Prisma.StringFilter<"BackupRun"> | string;
    startedAt?: Prisma.DateTimeFilter<"BackupRun"> | Date | string;
    completedAt?: Prisma.DateTimeFilter<"BackupRun"> | Date | string;
    status?: Prisma.EnumBackupRunStatusFilter<"BackupRun"> | $Enums.BackupRunStatus;
    dumpSizeBytes?: Prisma.BigIntNullableFilter<"BackupRun"> | bigint | number | null;
    offMachineCopyOk?: Prisma.BoolNullableFilter<"BackupRun"> | boolean | null;
    errorMessage?: Prisma.StringNullableFilter<"BackupRun"> | string | null;
    reportedAt?: Prisma.DateTimeFilter<"BackupRun"> | Date | string;
};
export type BackupRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dbName?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dumpSizeBytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    offMachineCopyOk?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
};
export type BackupRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BackupRunWhereInput | Prisma.BackupRunWhereInput[];
    OR?: Prisma.BackupRunWhereInput[];
    NOT?: Prisma.BackupRunWhereInput | Prisma.BackupRunWhereInput[];
    dbName?: Prisma.StringFilter<"BackupRun"> | string;
    startedAt?: Prisma.DateTimeFilter<"BackupRun"> | Date | string;
    completedAt?: Prisma.DateTimeFilter<"BackupRun"> | Date | string;
    status?: Prisma.EnumBackupRunStatusFilter<"BackupRun"> | $Enums.BackupRunStatus;
    dumpSizeBytes?: Prisma.BigIntNullableFilter<"BackupRun"> | bigint | number | null;
    offMachineCopyOk?: Prisma.BoolNullableFilter<"BackupRun"> | boolean | null;
    errorMessage?: Prisma.StringNullableFilter<"BackupRun"> | string | null;
    reportedAt?: Prisma.DateTimeFilter<"BackupRun"> | Date | string;
}, "id">;
export type BackupRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dbName?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dumpSizeBytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    offMachineCopyOk?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
    _count?: Prisma.BackupRunCountOrderByAggregateInput;
    _avg?: Prisma.BackupRunAvgOrderByAggregateInput;
    _max?: Prisma.BackupRunMaxOrderByAggregateInput;
    _min?: Prisma.BackupRunMinOrderByAggregateInput;
    _sum?: Prisma.BackupRunSumOrderByAggregateInput;
};
export type BackupRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.BackupRunScalarWhereWithAggregatesInput | Prisma.BackupRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.BackupRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BackupRunScalarWhereWithAggregatesInput | Prisma.BackupRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BackupRun"> | string;
    dbName?: Prisma.StringWithAggregatesFilter<"BackupRun"> | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"BackupRun"> | Date | string;
    completedAt?: Prisma.DateTimeWithAggregatesFilter<"BackupRun"> | Date | string;
    status?: Prisma.EnumBackupRunStatusWithAggregatesFilter<"BackupRun"> | $Enums.BackupRunStatus;
    dumpSizeBytes?: Prisma.BigIntNullableWithAggregatesFilter<"BackupRun"> | bigint | number | null;
    offMachineCopyOk?: Prisma.BoolNullableWithAggregatesFilter<"BackupRun"> | boolean | null;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"BackupRun"> | string | null;
    reportedAt?: Prisma.DateTimeWithAggregatesFilter<"BackupRun"> | Date | string;
};
export type BackupRunCreateInput = {
    id?: string;
    dbName: string;
    startedAt: Date | string;
    completedAt: Date | string;
    status: $Enums.BackupRunStatus;
    dumpSizeBytes?: bigint | number | null;
    offMachineCopyOk?: boolean | null;
    errorMessage?: string | null;
    reportedAt?: Date | string;
};
export type BackupRunUncheckedCreateInput = {
    id?: string;
    dbName: string;
    startedAt: Date | string;
    completedAt: Date | string;
    status: $Enums.BackupRunStatus;
    dumpSizeBytes?: bigint | number | null;
    offMachineCopyOk?: boolean | null;
    errorMessage?: string | null;
    reportedAt?: Date | string;
};
export type BackupRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dbName?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBackupRunStatusFieldUpdateOperationsInput | $Enums.BackupRunStatus;
    dumpSizeBytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    offMachineCopyOk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BackupRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dbName?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBackupRunStatusFieldUpdateOperationsInput | $Enums.BackupRunStatus;
    dumpSizeBytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    offMachineCopyOk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BackupRunCreateManyInput = {
    id?: string;
    dbName: string;
    startedAt: Date | string;
    completedAt: Date | string;
    status: $Enums.BackupRunStatus;
    dumpSizeBytes?: bigint | number | null;
    offMachineCopyOk?: boolean | null;
    errorMessage?: string | null;
    reportedAt?: Date | string;
};
export type BackupRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dbName?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBackupRunStatusFieldUpdateOperationsInput | $Enums.BackupRunStatus;
    dumpSizeBytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    offMachineCopyOk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BackupRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dbName?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBackupRunStatusFieldUpdateOperationsInput | $Enums.BackupRunStatus;
    dumpSizeBytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    offMachineCopyOk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BackupRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dbName?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dumpSizeBytes?: Prisma.SortOrder;
    offMachineCopyOk?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
};
export type BackupRunAvgOrderByAggregateInput = {
    dumpSizeBytes?: Prisma.SortOrder;
};
export type BackupRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dbName?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dumpSizeBytes?: Prisma.SortOrder;
    offMachineCopyOk?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
};
export type BackupRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dbName?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dumpSizeBytes?: Prisma.SortOrder;
    offMachineCopyOk?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
};
export type BackupRunSumOrderByAggregateInput = {
    dumpSizeBytes?: Prisma.SortOrder;
};
export type EnumBackupRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.BackupRunStatus;
};
export type BackupRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dbName?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    dumpSizeBytes?: boolean;
    offMachineCopyOk?: boolean;
    errorMessage?: boolean;
    reportedAt?: boolean;
}, ExtArgs["result"]["backupRun"]>;
export type BackupRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dbName?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    dumpSizeBytes?: boolean;
    offMachineCopyOk?: boolean;
    errorMessage?: boolean;
    reportedAt?: boolean;
}, ExtArgs["result"]["backupRun"]>;
export type BackupRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dbName?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    dumpSizeBytes?: boolean;
    offMachineCopyOk?: boolean;
    errorMessage?: boolean;
    reportedAt?: boolean;
}, ExtArgs["result"]["backupRun"]>;
export type BackupRunSelectScalar = {
    id?: boolean;
    dbName?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    status?: boolean;
    dumpSizeBytes?: boolean;
    offMachineCopyOk?: boolean;
    errorMessage?: boolean;
    reportedAt?: boolean;
};
export type BackupRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dbName" | "startedAt" | "completedAt" | "status" | "dumpSizeBytes" | "offMachineCopyOk" | "errorMessage" | "reportedAt", ExtArgs["result"]["backupRun"]>;
export type $BackupRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BackupRun";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dbName: string;
        startedAt: Date;
        completedAt: Date;
        status: $Enums.BackupRunStatus;
        dumpSizeBytes: bigint | null;
        offMachineCopyOk: boolean | null;
        errorMessage: string | null;
        reportedAt: Date;
    }, ExtArgs["result"]["backupRun"]>;
    composites: {};
};
export type BackupRunGetPayload<S extends boolean | null | undefined | BackupRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BackupRunPayload, S>;
export type BackupRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BackupRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BackupRunCountAggregateInputType | true;
};
export interface BackupRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BackupRun'];
        meta: {
            name: 'BackupRun';
        };
    };
    findUnique<T extends BackupRunFindUniqueArgs>(args: Prisma.SelectSubset<T, BackupRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BackupRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BackupRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BackupRunFindFirstArgs>(args?: Prisma.SelectSubset<T, BackupRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BackupRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BackupRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BackupRunFindManyArgs>(args?: Prisma.SelectSubset<T, BackupRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BackupRunCreateArgs>(args: Prisma.SelectSubset<T, BackupRunCreateArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BackupRunCreateManyArgs>(args?: Prisma.SelectSubset<T, BackupRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BackupRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BackupRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BackupRunDeleteArgs>(args: Prisma.SelectSubset<T, BackupRunDeleteArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BackupRunUpdateArgs>(args: Prisma.SelectSubset<T, BackupRunUpdateArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BackupRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, BackupRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BackupRunUpdateManyArgs>(args: Prisma.SelectSubset<T, BackupRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BackupRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BackupRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BackupRunUpsertArgs>(args: Prisma.SelectSubset<T, BackupRunUpsertArgs<ExtArgs>>): Prisma.Prisma__BackupRunClient<runtime.Types.Result.GetResult<Prisma.$BackupRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BackupRunCountArgs>(args?: Prisma.Subset<T, BackupRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BackupRunCountAggregateOutputType> : number>;
    aggregate<T extends BackupRunAggregateArgs>(args: Prisma.Subset<T, BackupRunAggregateArgs>): Prisma.PrismaPromise<GetBackupRunAggregateType<T>>;
    groupBy<T extends BackupRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BackupRunGroupByArgs['orderBy'];
    } : {
        orderBy?: BackupRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BackupRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackupRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BackupRunFieldRefs;
}
export interface Prisma__BackupRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BackupRunFieldRefs {
    readonly id: Prisma.FieldRef<"BackupRun", 'String'>;
    readonly dbName: Prisma.FieldRef<"BackupRun", 'String'>;
    readonly startedAt: Prisma.FieldRef<"BackupRun", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"BackupRun", 'DateTime'>;
    readonly status: Prisma.FieldRef<"BackupRun", 'BackupRunStatus'>;
    readonly dumpSizeBytes: Prisma.FieldRef<"BackupRun", 'BigInt'>;
    readonly offMachineCopyOk: Prisma.FieldRef<"BackupRun", 'Boolean'>;
    readonly errorMessage: Prisma.FieldRef<"BackupRun", 'String'>;
    readonly reportedAt: Prisma.FieldRef<"BackupRun", 'DateTime'>;
}
export type BackupRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    where: Prisma.BackupRunWhereUniqueInput;
};
export type BackupRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    where: Prisma.BackupRunWhereUniqueInput;
};
export type BackupRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    where?: Prisma.BackupRunWhereInput;
    orderBy?: Prisma.BackupRunOrderByWithRelationInput | Prisma.BackupRunOrderByWithRelationInput[];
    cursor?: Prisma.BackupRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BackupRunScalarFieldEnum | Prisma.BackupRunScalarFieldEnum[];
};
export type BackupRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    where?: Prisma.BackupRunWhereInput;
    orderBy?: Prisma.BackupRunOrderByWithRelationInput | Prisma.BackupRunOrderByWithRelationInput[];
    cursor?: Prisma.BackupRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BackupRunScalarFieldEnum | Prisma.BackupRunScalarFieldEnum[];
};
export type BackupRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    where?: Prisma.BackupRunWhereInput;
    orderBy?: Prisma.BackupRunOrderByWithRelationInput | Prisma.BackupRunOrderByWithRelationInput[];
    cursor?: Prisma.BackupRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BackupRunScalarFieldEnum | Prisma.BackupRunScalarFieldEnum[];
};
export type BackupRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BackupRunCreateInput, Prisma.BackupRunUncheckedCreateInput>;
};
export type BackupRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BackupRunCreateManyInput | Prisma.BackupRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BackupRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    data: Prisma.BackupRunCreateManyInput | Prisma.BackupRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BackupRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BackupRunUpdateInput, Prisma.BackupRunUncheckedUpdateInput>;
    where: Prisma.BackupRunWhereUniqueInput;
};
export type BackupRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BackupRunUpdateManyMutationInput, Prisma.BackupRunUncheckedUpdateManyInput>;
    where?: Prisma.BackupRunWhereInput;
    limit?: number;
};
export type BackupRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BackupRunUpdateManyMutationInput, Prisma.BackupRunUncheckedUpdateManyInput>;
    where?: Prisma.BackupRunWhereInput;
    limit?: number;
};
export type BackupRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    where: Prisma.BackupRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.BackupRunCreateInput, Prisma.BackupRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BackupRunUpdateInput, Prisma.BackupRunUncheckedUpdateInput>;
};
export type BackupRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
    where: Prisma.BackupRunWhereUniqueInput;
};
export type BackupRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BackupRunWhereInput;
    limit?: number;
};
export type BackupRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BackupRunSelect<ExtArgs> | null;
    omit?: Prisma.BackupRunOmit<ExtArgs> | null;
};
