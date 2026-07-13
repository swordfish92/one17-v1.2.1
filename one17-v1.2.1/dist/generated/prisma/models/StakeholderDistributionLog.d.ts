import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StakeholderDistributionLogModel = runtime.Types.Result.DefaultSelection<Prisma.$StakeholderDistributionLogPayload>;
export type AggregateStakeholderDistributionLog = {
    _count: StakeholderDistributionLogCountAggregateOutputType | null;
    _min: StakeholderDistributionLogMinAggregateOutputType | null;
    _max: StakeholderDistributionLogMaxAggregateOutputType | null;
};
export type StakeholderDistributionLogMinAggregateOutputType = {
    id: string | null;
    stakeholderReportRunId: string | null;
    audienceClass: $Enums.StakeholderAudienceClass | null;
    distributedByUserId: string | null;
    signOffByUserId: string | null;
    recipientDescription: string | null;
    distributedAt: Date | null;
};
export type StakeholderDistributionLogMaxAggregateOutputType = {
    id: string | null;
    stakeholderReportRunId: string | null;
    audienceClass: $Enums.StakeholderAudienceClass | null;
    distributedByUserId: string | null;
    signOffByUserId: string | null;
    recipientDescription: string | null;
    distributedAt: Date | null;
};
export type StakeholderDistributionLogCountAggregateOutputType = {
    id: number;
    stakeholderReportRunId: number;
    audienceClass: number;
    distributedByUserId: number;
    signOffByUserId: number;
    recipientDescription: number;
    distributedAt: number;
    _all: number;
};
export type StakeholderDistributionLogMinAggregateInputType = {
    id?: true;
    stakeholderReportRunId?: true;
    audienceClass?: true;
    distributedByUserId?: true;
    signOffByUserId?: true;
    recipientDescription?: true;
    distributedAt?: true;
};
export type StakeholderDistributionLogMaxAggregateInputType = {
    id?: true;
    stakeholderReportRunId?: true;
    audienceClass?: true;
    distributedByUserId?: true;
    signOffByUserId?: true;
    recipientDescription?: true;
    distributedAt?: true;
};
export type StakeholderDistributionLogCountAggregateInputType = {
    id?: true;
    stakeholderReportRunId?: true;
    audienceClass?: true;
    distributedByUserId?: true;
    signOffByUserId?: true;
    recipientDescription?: true;
    distributedAt?: true;
    _all?: true;
};
export type StakeholderDistributionLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StakeholderDistributionLogWhereInput;
    orderBy?: Prisma.StakeholderDistributionLogOrderByWithRelationInput | Prisma.StakeholderDistributionLogOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderDistributionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StakeholderDistributionLogCountAggregateInputType;
    _min?: StakeholderDistributionLogMinAggregateInputType;
    _max?: StakeholderDistributionLogMaxAggregateInputType;
};
export type GetStakeholderDistributionLogAggregateType<T extends StakeholderDistributionLogAggregateArgs> = {
    [P in keyof T & keyof AggregateStakeholderDistributionLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStakeholderDistributionLog[P]> : Prisma.GetScalarType<T[P], AggregateStakeholderDistributionLog[P]>;
};
export type StakeholderDistributionLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StakeholderDistributionLogWhereInput;
    orderBy?: Prisma.StakeholderDistributionLogOrderByWithAggregationInput | Prisma.StakeholderDistributionLogOrderByWithAggregationInput[];
    by: Prisma.StakeholderDistributionLogScalarFieldEnum[] | Prisma.StakeholderDistributionLogScalarFieldEnum;
    having?: Prisma.StakeholderDistributionLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StakeholderDistributionLogCountAggregateInputType | true;
    _min?: StakeholderDistributionLogMinAggregateInputType;
    _max?: StakeholderDistributionLogMaxAggregateInputType;
};
export type StakeholderDistributionLogGroupByOutputType = {
    id: string;
    stakeholderReportRunId: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    distributedByUserId: string;
    signOffByUserId: string | null;
    recipientDescription: string;
    distributedAt: Date;
    _count: StakeholderDistributionLogCountAggregateOutputType | null;
    _min: StakeholderDistributionLogMinAggregateOutputType | null;
    _max: StakeholderDistributionLogMaxAggregateOutputType | null;
};
export type GetStakeholderDistributionLogGroupByPayload<T extends StakeholderDistributionLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StakeholderDistributionLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StakeholderDistributionLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StakeholderDistributionLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StakeholderDistributionLogGroupByOutputType[P]>;
}>>;
export type StakeholderDistributionLogWhereInput = {
    AND?: Prisma.StakeholderDistributionLogWhereInput | Prisma.StakeholderDistributionLogWhereInput[];
    OR?: Prisma.StakeholderDistributionLogWhereInput[];
    NOT?: Prisma.StakeholderDistributionLogWhereInput | Prisma.StakeholderDistributionLogWhereInput[];
    id?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    stakeholderReportRunId?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFilter<"StakeholderDistributionLog"> | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    signOffByUserId?: Prisma.UuidNullableFilter<"StakeholderDistributionLog"> | string | null;
    recipientDescription?: Prisma.StringFilter<"StakeholderDistributionLog"> | string;
    distributedAt?: Prisma.DateTimeFilter<"StakeholderDistributionLog"> | Date | string;
    stakeholderReportRun?: Prisma.XOR<Prisma.StakeholderReportRunScalarRelationFilter, Prisma.StakeholderReportRunWhereInput>;
    distributedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    signOffBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type StakeholderDistributionLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    stakeholderReportRunId?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    distributedByUserId?: Prisma.SortOrder;
    signOffByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipientDescription?: Prisma.SortOrder;
    distributedAt?: Prisma.SortOrder;
    stakeholderReportRun?: Prisma.StakeholderReportRunOrderByWithRelationInput;
    distributedBy?: Prisma.AppUserOrderByWithRelationInput;
    signOffBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type StakeholderDistributionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StakeholderDistributionLogWhereInput | Prisma.StakeholderDistributionLogWhereInput[];
    OR?: Prisma.StakeholderDistributionLogWhereInput[];
    NOT?: Prisma.StakeholderDistributionLogWhereInput | Prisma.StakeholderDistributionLogWhereInput[];
    stakeholderReportRunId?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFilter<"StakeholderDistributionLog"> | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    signOffByUserId?: Prisma.UuidNullableFilter<"StakeholderDistributionLog"> | string | null;
    recipientDescription?: Prisma.StringFilter<"StakeholderDistributionLog"> | string;
    distributedAt?: Prisma.DateTimeFilter<"StakeholderDistributionLog"> | Date | string;
    stakeholderReportRun?: Prisma.XOR<Prisma.StakeholderReportRunScalarRelationFilter, Prisma.StakeholderReportRunWhereInput>;
    distributedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    signOffBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type StakeholderDistributionLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    stakeholderReportRunId?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    distributedByUserId?: Prisma.SortOrder;
    signOffByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipientDescription?: Prisma.SortOrder;
    distributedAt?: Prisma.SortOrder;
    _count?: Prisma.StakeholderDistributionLogCountOrderByAggregateInput;
    _max?: Prisma.StakeholderDistributionLogMaxOrderByAggregateInput;
    _min?: Prisma.StakeholderDistributionLogMinOrderByAggregateInput;
};
export type StakeholderDistributionLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.StakeholderDistributionLogScalarWhereWithAggregatesInput | Prisma.StakeholderDistributionLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.StakeholderDistributionLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StakeholderDistributionLogScalarWhereWithAggregatesInput | Prisma.StakeholderDistributionLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StakeholderDistributionLog"> | string;
    stakeholderReportRunId?: Prisma.UuidWithAggregatesFilter<"StakeholderDistributionLog"> | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassWithAggregatesFilter<"StakeholderDistributionLog"> | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.UuidWithAggregatesFilter<"StakeholderDistributionLog"> | string;
    signOffByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StakeholderDistributionLog"> | string | null;
    recipientDescription?: Prisma.StringWithAggregatesFilter<"StakeholderDistributionLog"> | string;
    distributedAt?: Prisma.DateTimeWithAggregatesFilter<"StakeholderDistributionLog"> | Date | string;
};
export type StakeholderDistributionLogCreateInput = {
    id?: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    recipientDescription: string;
    distributedAt?: Date | string;
    stakeholderReportRun: Prisma.StakeholderReportRunCreateNestedOneWithoutDistributionsInput;
    distributedBy: Prisma.AppUserCreateNestedOneWithoutStakeholderDistributionsMadeInput;
    signOffBy?: Prisma.AppUserCreateNestedOneWithoutStakeholderDistributionsSignedOffInput;
};
export type StakeholderDistributionLogUncheckedCreateInput = {
    id?: string;
    stakeholderReportRunId: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    distributedByUserId: string;
    signOffByUserId?: string | null;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stakeholderReportRun?: Prisma.StakeholderReportRunUpdateOneRequiredWithoutDistributionsNestedInput;
    distributedBy?: Prisma.AppUserUpdateOneRequiredWithoutStakeholderDistributionsMadeNestedInput;
    signOffBy?: Prisma.AppUserUpdateOneWithoutStakeholderDistributionsSignedOffNestedInput;
};
export type StakeholderDistributionLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stakeholderReportRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    signOffByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogCreateManyInput = {
    id?: string;
    stakeholderReportRunId: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    distributedByUserId: string;
    signOffByUserId?: string | null;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stakeholderReportRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    signOffByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogListRelationFilter = {
    every?: Prisma.StakeholderDistributionLogWhereInput;
    some?: Prisma.StakeholderDistributionLogWhereInput;
    none?: Prisma.StakeholderDistributionLogWhereInput;
};
export type StakeholderDistributionLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StakeholderDistributionLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stakeholderReportRunId?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    distributedByUserId?: Prisma.SortOrder;
    signOffByUserId?: Prisma.SortOrder;
    recipientDescription?: Prisma.SortOrder;
    distributedAt?: Prisma.SortOrder;
};
export type StakeholderDistributionLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stakeholderReportRunId?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    distributedByUserId?: Prisma.SortOrder;
    signOffByUserId?: Prisma.SortOrder;
    recipientDescription?: Prisma.SortOrder;
    distributedAt?: Prisma.SortOrder;
};
export type StakeholderDistributionLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stakeholderReportRunId?: Prisma.SortOrder;
    audienceClass?: Prisma.SortOrder;
    distributedByUserId?: Prisma.SortOrder;
    signOffByUserId?: Prisma.SortOrder;
    recipientDescription?: Prisma.SortOrder;
    distributedAt?: Prisma.SortOrder;
};
export type StakeholderDistributionLogCreateNestedManyWithoutDistributedByInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput> | Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyDistributedByInputEnvelope;
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
};
export type StakeholderDistributionLogCreateNestedManyWithoutSignOffByInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput> | Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManySignOffByInputEnvelope;
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
};
export type StakeholderDistributionLogUncheckedCreateNestedManyWithoutDistributedByInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput> | Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyDistributedByInputEnvelope;
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
};
export type StakeholderDistributionLogUncheckedCreateNestedManyWithoutSignOffByInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput> | Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManySignOffByInputEnvelope;
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
};
export type StakeholderDistributionLogUpdateManyWithoutDistributedByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput> | Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput[];
    upsert?: Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutDistributedByInput | Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutDistributedByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyDistributedByInputEnvelope;
    set?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    disconnect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    delete?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    update?: Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutDistributedByInput | Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutDistributedByInput[];
    updateMany?: Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutDistributedByInput | Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutDistributedByInput[];
    deleteMany?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
};
export type StakeholderDistributionLogUpdateManyWithoutSignOffByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput> | Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput[];
    upsert?: Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutSignOffByInput | Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutSignOffByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManySignOffByInputEnvelope;
    set?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    disconnect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    delete?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    update?: Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutSignOffByInput | Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutSignOffByInput[];
    updateMany?: Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutSignOffByInput | Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutSignOffByInput[];
    deleteMany?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
};
export type StakeholderDistributionLogUncheckedUpdateManyWithoutDistributedByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput> | Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput[];
    upsert?: Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutDistributedByInput | Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutDistributedByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyDistributedByInputEnvelope;
    set?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    disconnect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    delete?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    update?: Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutDistributedByInput | Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutDistributedByInput[];
    updateMany?: Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutDistributedByInput | Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutDistributedByInput[];
    deleteMany?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
};
export type StakeholderDistributionLogUncheckedUpdateManyWithoutSignOffByNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput> | Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput[];
    upsert?: Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutSignOffByInput | Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutSignOffByInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManySignOffByInputEnvelope;
    set?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    disconnect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    delete?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    update?: Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutSignOffByInput | Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutSignOffByInput[];
    updateMany?: Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutSignOffByInput | Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutSignOffByInput[];
    deleteMany?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
};
export type StakeholderDistributionLogCreateNestedManyWithoutStakeholderReportRunInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput> | Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyStakeholderReportRunInputEnvelope;
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
};
export type StakeholderDistributionLogUncheckedCreateNestedManyWithoutStakeholderReportRunInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput> | Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyStakeholderReportRunInputEnvelope;
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
};
export type StakeholderDistributionLogUpdateManyWithoutStakeholderReportRunNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput> | Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput[];
    upsert?: Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutStakeholderReportRunInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyStakeholderReportRunInputEnvelope;
    set?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    disconnect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    delete?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    update?: Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutStakeholderReportRunInput[];
    updateMany?: Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutStakeholderReportRunInput[];
    deleteMany?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
};
export type StakeholderDistributionLogUncheckedUpdateManyWithoutStakeholderReportRunNestedInput = {
    create?: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput> | Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput[] | Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput[];
    connectOrCreate?: Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput[];
    upsert?: Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogUpsertWithWhereUniqueWithoutStakeholderReportRunInput[];
    createMany?: Prisma.StakeholderDistributionLogCreateManyStakeholderReportRunInputEnvelope;
    set?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    disconnect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    delete?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    connect?: Prisma.StakeholderDistributionLogWhereUniqueInput | Prisma.StakeholderDistributionLogWhereUniqueInput[];
    update?: Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogUpdateWithWhereUniqueWithoutStakeholderReportRunInput[];
    updateMany?: Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutStakeholderReportRunInput | Prisma.StakeholderDistributionLogUpdateManyWithWhereWithoutStakeholderReportRunInput[];
    deleteMany?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
};
export type StakeholderDistributionLogCreateWithoutDistributedByInput = {
    id?: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    recipientDescription: string;
    distributedAt?: Date | string;
    stakeholderReportRun: Prisma.StakeholderReportRunCreateNestedOneWithoutDistributionsInput;
    signOffBy?: Prisma.AppUserCreateNestedOneWithoutStakeholderDistributionsSignedOffInput;
};
export type StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput = {
    id?: string;
    stakeholderReportRunId: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    signOffByUserId?: string | null;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogCreateOrConnectWithoutDistributedByInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput>;
};
export type StakeholderDistributionLogCreateManyDistributedByInputEnvelope = {
    data: Prisma.StakeholderDistributionLogCreateManyDistributedByInput | Prisma.StakeholderDistributionLogCreateManyDistributedByInput[];
    skipDuplicates?: boolean;
};
export type StakeholderDistributionLogCreateWithoutSignOffByInput = {
    id?: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    recipientDescription: string;
    distributedAt?: Date | string;
    stakeholderReportRun: Prisma.StakeholderReportRunCreateNestedOneWithoutDistributionsInput;
    distributedBy: Prisma.AppUserCreateNestedOneWithoutStakeholderDistributionsMadeInput;
};
export type StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput = {
    id?: string;
    stakeholderReportRunId: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    distributedByUserId: string;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogCreateOrConnectWithoutSignOffByInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput>;
};
export type StakeholderDistributionLogCreateManySignOffByInputEnvelope = {
    data: Prisma.StakeholderDistributionLogCreateManySignOffByInput | Prisma.StakeholderDistributionLogCreateManySignOffByInput[];
    skipDuplicates?: boolean;
};
export type StakeholderDistributionLogUpsertWithWhereUniqueWithoutDistributedByInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedUpdateWithoutDistributedByInput>;
    create: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutDistributedByInput>;
};
export type StakeholderDistributionLogUpdateWithWhereUniqueWithoutDistributedByInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateWithoutDistributedByInput, Prisma.StakeholderDistributionLogUncheckedUpdateWithoutDistributedByInput>;
};
export type StakeholderDistributionLogUpdateManyWithWhereWithoutDistributedByInput = {
    where: Prisma.StakeholderDistributionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateManyMutationInput, Prisma.StakeholderDistributionLogUncheckedUpdateManyWithoutDistributedByInput>;
};
export type StakeholderDistributionLogScalarWhereInput = {
    AND?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
    OR?: Prisma.StakeholderDistributionLogScalarWhereInput[];
    NOT?: Prisma.StakeholderDistributionLogScalarWhereInput | Prisma.StakeholderDistributionLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    stakeholderReportRunId?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFilter<"StakeholderDistributionLog"> | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.UuidFilter<"StakeholderDistributionLog"> | string;
    signOffByUserId?: Prisma.UuidNullableFilter<"StakeholderDistributionLog"> | string | null;
    recipientDescription?: Prisma.StringFilter<"StakeholderDistributionLog"> | string;
    distributedAt?: Prisma.DateTimeFilter<"StakeholderDistributionLog"> | Date | string;
};
export type StakeholderDistributionLogUpsertWithWhereUniqueWithoutSignOffByInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedUpdateWithoutSignOffByInput>;
    create: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutSignOffByInput>;
};
export type StakeholderDistributionLogUpdateWithWhereUniqueWithoutSignOffByInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateWithoutSignOffByInput, Prisma.StakeholderDistributionLogUncheckedUpdateWithoutSignOffByInput>;
};
export type StakeholderDistributionLogUpdateManyWithWhereWithoutSignOffByInput = {
    where: Prisma.StakeholderDistributionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateManyMutationInput, Prisma.StakeholderDistributionLogUncheckedUpdateManyWithoutSignOffByInput>;
};
export type StakeholderDistributionLogCreateWithoutStakeholderReportRunInput = {
    id?: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    recipientDescription: string;
    distributedAt?: Date | string;
    distributedBy: Prisma.AppUserCreateNestedOneWithoutStakeholderDistributionsMadeInput;
    signOffBy?: Prisma.AppUserCreateNestedOneWithoutStakeholderDistributionsSignedOffInput;
};
export type StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput = {
    id?: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    distributedByUserId: string;
    signOffByUserId?: string | null;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogCreateOrConnectWithoutStakeholderReportRunInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput>;
};
export type StakeholderDistributionLogCreateManyStakeholderReportRunInputEnvelope = {
    data: Prisma.StakeholderDistributionLogCreateManyStakeholderReportRunInput | Prisma.StakeholderDistributionLogCreateManyStakeholderReportRunInput[];
    skipDuplicates?: boolean;
};
export type StakeholderDistributionLogUpsertWithWhereUniqueWithoutStakeholderReportRunInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedUpdateWithoutStakeholderReportRunInput>;
    create: Prisma.XOR<Prisma.StakeholderDistributionLogCreateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedCreateWithoutStakeholderReportRunInput>;
};
export type StakeholderDistributionLogUpdateWithWhereUniqueWithoutStakeholderReportRunInput = {
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateWithoutStakeholderReportRunInput, Prisma.StakeholderDistributionLogUncheckedUpdateWithoutStakeholderReportRunInput>;
};
export type StakeholderDistributionLogUpdateManyWithWhereWithoutStakeholderReportRunInput = {
    where: Prisma.StakeholderDistributionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateManyMutationInput, Prisma.StakeholderDistributionLogUncheckedUpdateManyWithoutStakeholderReportRunInput>;
};
export type StakeholderDistributionLogCreateManyDistributedByInput = {
    id?: string;
    stakeholderReportRunId: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    signOffByUserId?: string | null;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogCreateManySignOffByInput = {
    id?: string;
    stakeholderReportRunId: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    distributedByUserId: string;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogUpdateWithoutDistributedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stakeholderReportRun?: Prisma.StakeholderReportRunUpdateOneRequiredWithoutDistributionsNestedInput;
    signOffBy?: Prisma.AppUserUpdateOneWithoutStakeholderDistributionsSignedOffNestedInput;
};
export type StakeholderDistributionLogUncheckedUpdateWithoutDistributedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stakeholderReportRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    signOffByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogUncheckedUpdateManyWithoutDistributedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stakeholderReportRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    signOffByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogUpdateWithoutSignOffByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stakeholderReportRun?: Prisma.StakeholderReportRunUpdateOneRequiredWithoutDistributionsNestedInput;
    distributedBy?: Prisma.AppUserUpdateOneRequiredWithoutStakeholderDistributionsMadeNestedInput;
};
export type StakeholderDistributionLogUncheckedUpdateWithoutSignOffByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stakeholderReportRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogUncheckedUpdateManyWithoutSignOffByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stakeholderReportRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogCreateManyStakeholderReportRunInput = {
    id?: string;
    audienceClass: $Enums.StakeholderAudienceClass;
    distributedByUserId: string;
    signOffByUserId?: string | null;
    recipientDescription: string;
    distributedAt?: Date | string;
};
export type StakeholderDistributionLogUpdateWithoutStakeholderReportRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    distributedBy?: Prisma.AppUserUpdateOneRequiredWithoutStakeholderDistributionsMadeNestedInput;
    signOffBy?: Prisma.AppUserUpdateOneWithoutStakeholderDistributionsSignedOffNestedInput;
};
export type StakeholderDistributionLogUncheckedUpdateWithoutStakeholderReportRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    signOffByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogUncheckedUpdateManyWithoutStakeholderReportRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceClass?: Prisma.EnumStakeholderAudienceClassFieldUpdateOperationsInput | $Enums.StakeholderAudienceClass;
    distributedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    signOffByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipientDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    distributedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StakeholderDistributionLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stakeholderReportRunId?: boolean;
    audienceClass?: boolean;
    distributedByUserId?: boolean;
    signOffByUserId?: boolean;
    recipientDescription?: boolean;
    distributedAt?: boolean;
    stakeholderReportRun?: boolean | Prisma.StakeholderReportRunDefaultArgs<ExtArgs>;
    distributedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    signOffBy?: boolean | Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs>;
}, ExtArgs["result"]["stakeholderDistributionLog"]>;
export type StakeholderDistributionLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stakeholderReportRunId?: boolean;
    audienceClass?: boolean;
    distributedByUserId?: boolean;
    signOffByUserId?: boolean;
    recipientDescription?: boolean;
    distributedAt?: boolean;
    stakeholderReportRun?: boolean | Prisma.StakeholderReportRunDefaultArgs<ExtArgs>;
    distributedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    signOffBy?: boolean | Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs>;
}, ExtArgs["result"]["stakeholderDistributionLog"]>;
export type StakeholderDistributionLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    stakeholderReportRunId?: boolean;
    audienceClass?: boolean;
    distributedByUserId?: boolean;
    signOffByUserId?: boolean;
    recipientDescription?: boolean;
    distributedAt?: boolean;
    stakeholderReportRun?: boolean | Prisma.StakeholderReportRunDefaultArgs<ExtArgs>;
    distributedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    signOffBy?: boolean | Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs>;
}, ExtArgs["result"]["stakeholderDistributionLog"]>;
export type StakeholderDistributionLogSelectScalar = {
    id?: boolean;
    stakeholderReportRunId?: boolean;
    audienceClass?: boolean;
    distributedByUserId?: boolean;
    signOffByUserId?: boolean;
    recipientDescription?: boolean;
    distributedAt?: boolean;
};
export type StakeholderDistributionLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "stakeholderReportRunId" | "audienceClass" | "distributedByUserId" | "signOffByUserId" | "recipientDescription" | "distributedAt", ExtArgs["result"]["stakeholderDistributionLog"]>;
export type StakeholderDistributionLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stakeholderReportRun?: boolean | Prisma.StakeholderReportRunDefaultArgs<ExtArgs>;
    distributedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    signOffBy?: boolean | Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs>;
};
export type StakeholderDistributionLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stakeholderReportRun?: boolean | Prisma.StakeholderReportRunDefaultArgs<ExtArgs>;
    distributedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    signOffBy?: boolean | Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs>;
};
export type StakeholderDistributionLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stakeholderReportRun?: boolean | Prisma.StakeholderReportRunDefaultArgs<ExtArgs>;
    distributedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    signOffBy?: boolean | Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs>;
};
export type $StakeholderDistributionLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StakeholderDistributionLog";
    objects: {
        stakeholderReportRun: Prisma.$StakeholderReportRunPayload<ExtArgs>;
        distributedBy: Prisma.$AppUserPayload<ExtArgs>;
        signOffBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        stakeholderReportRunId: string;
        audienceClass: $Enums.StakeholderAudienceClass;
        distributedByUserId: string;
        signOffByUserId: string | null;
        recipientDescription: string;
        distributedAt: Date;
    }, ExtArgs["result"]["stakeholderDistributionLog"]>;
    composites: {};
};
export type StakeholderDistributionLogGetPayload<S extends boolean | null | undefined | StakeholderDistributionLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload, S>;
export type StakeholderDistributionLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StakeholderDistributionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StakeholderDistributionLogCountAggregateInputType | true;
};
export interface StakeholderDistributionLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StakeholderDistributionLog'];
        meta: {
            name: 'StakeholderDistributionLog';
        };
    };
    findUnique<T extends StakeholderDistributionLogFindUniqueArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StakeholderDistributionLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StakeholderDistributionLogFindFirstArgs>(args?: Prisma.SelectSubset<T, StakeholderDistributionLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StakeholderDistributionLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StakeholderDistributionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StakeholderDistributionLogFindManyArgs>(args?: Prisma.SelectSubset<T, StakeholderDistributionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StakeholderDistributionLogCreateArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogCreateArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StakeholderDistributionLogCreateManyArgs>(args?: Prisma.SelectSubset<T, StakeholderDistributionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StakeholderDistributionLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StakeholderDistributionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StakeholderDistributionLogDeleteArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogDeleteArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StakeholderDistributionLogUpdateArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogUpdateArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StakeholderDistributionLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, StakeholderDistributionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StakeholderDistributionLogUpdateManyArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StakeholderDistributionLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StakeholderDistributionLogUpsertArgs>(args: Prisma.SelectSubset<T, StakeholderDistributionLogUpsertArgs<ExtArgs>>): Prisma.Prisma__StakeholderDistributionLogClient<runtime.Types.Result.GetResult<Prisma.$StakeholderDistributionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StakeholderDistributionLogCountArgs>(args?: Prisma.Subset<T, StakeholderDistributionLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StakeholderDistributionLogCountAggregateOutputType> : number>;
    aggregate<T extends StakeholderDistributionLogAggregateArgs>(args: Prisma.Subset<T, StakeholderDistributionLogAggregateArgs>): Prisma.PrismaPromise<GetStakeholderDistributionLogAggregateType<T>>;
    groupBy<T extends StakeholderDistributionLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StakeholderDistributionLogGroupByArgs['orderBy'];
    } : {
        orderBy?: StakeholderDistributionLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StakeholderDistributionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeholderDistributionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StakeholderDistributionLogFieldRefs;
}
export interface Prisma__StakeholderDistributionLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    stakeholderReportRun<T extends Prisma.StakeholderReportRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StakeholderReportRunDefaultArgs<ExtArgs>>): Prisma.Prisma__StakeholderReportRunClient<runtime.Types.Result.GetResult<Prisma.$StakeholderReportRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    distributedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    signOffBy<T extends Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StakeholderDistributionLog$signOffByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StakeholderDistributionLogFieldRefs {
    readonly id: Prisma.FieldRef<"StakeholderDistributionLog", 'String'>;
    readonly stakeholderReportRunId: Prisma.FieldRef<"StakeholderDistributionLog", 'String'>;
    readonly audienceClass: Prisma.FieldRef<"StakeholderDistributionLog", 'StakeholderAudienceClass'>;
    readonly distributedByUserId: Prisma.FieldRef<"StakeholderDistributionLog", 'String'>;
    readonly signOffByUserId: Prisma.FieldRef<"StakeholderDistributionLog", 'String'>;
    readonly recipientDescription: Prisma.FieldRef<"StakeholderDistributionLog", 'String'>;
    readonly distributedAt: Prisma.FieldRef<"StakeholderDistributionLog", 'DateTime'>;
}
export type StakeholderDistributionLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
};
export type StakeholderDistributionLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
};
export type StakeholderDistributionLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where?: Prisma.StakeholderDistributionLogWhereInput;
    orderBy?: Prisma.StakeholderDistributionLogOrderByWithRelationInput | Prisma.StakeholderDistributionLogOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderDistributionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StakeholderDistributionLogScalarFieldEnum | Prisma.StakeholderDistributionLogScalarFieldEnum[];
};
export type StakeholderDistributionLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where?: Prisma.StakeholderDistributionLogWhereInput;
    orderBy?: Prisma.StakeholderDistributionLogOrderByWithRelationInput | Prisma.StakeholderDistributionLogOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderDistributionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StakeholderDistributionLogScalarFieldEnum | Prisma.StakeholderDistributionLogScalarFieldEnum[];
};
export type StakeholderDistributionLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where?: Prisma.StakeholderDistributionLogWhereInput;
    orderBy?: Prisma.StakeholderDistributionLogOrderByWithRelationInput | Prisma.StakeholderDistributionLogOrderByWithRelationInput[];
    cursor?: Prisma.StakeholderDistributionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StakeholderDistributionLogScalarFieldEnum | Prisma.StakeholderDistributionLogScalarFieldEnum[];
};
export type StakeholderDistributionLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogCreateInput, Prisma.StakeholderDistributionLogUncheckedCreateInput>;
};
export type StakeholderDistributionLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StakeholderDistributionLogCreateManyInput | Prisma.StakeholderDistributionLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StakeholderDistributionLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    data: Prisma.StakeholderDistributionLogCreateManyInput | Prisma.StakeholderDistributionLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StakeholderDistributionLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StakeholderDistributionLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateInput, Prisma.StakeholderDistributionLogUncheckedUpdateInput>;
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
};
export type StakeholderDistributionLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateManyMutationInput, Prisma.StakeholderDistributionLogUncheckedUpdateManyInput>;
    where?: Prisma.StakeholderDistributionLogWhereInput;
    limit?: number;
};
export type StakeholderDistributionLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateManyMutationInput, Prisma.StakeholderDistributionLogUncheckedUpdateManyInput>;
    where?: Prisma.StakeholderDistributionLogWhereInput;
    limit?: number;
    include?: Prisma.StakeholderDistributionLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StakeholderDistributionLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.StakeholderDistributionLogCreateInput, Prisma.StakeholderDistributionLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StakeholderDistributionLogUpdateInput, Prisma.StakeholderDistributionLogUncheckedUpdateInput>;
};
export type StakeholderDistributionLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
    where: Prisma.StakeholderDistributionLogWhereUniqueInput;
};
export type StakeholderDistributionLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StakeholderDistributionLogWhereInput;
    limit?: number;
};
export type StakeholderDistributionLog$signOffByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type StakeholderDistributionLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StakeholderDistributionLogSelect<ExtArgs> | null;
    omit?: Prisma.StakeholderDistributionLogOmit<ExtArgs> | null;
    include?: Prisma.StakeholderDistributionLogInclude<ExtArgs> | null;
};
