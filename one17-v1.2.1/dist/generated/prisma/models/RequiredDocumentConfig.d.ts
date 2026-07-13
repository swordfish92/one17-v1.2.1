import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RequiredDocumentConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$RequiredDocumentConfigPayload>;
export type AggregateRequiredDocumentConfig = {
    _count: RequiredDocumentConfigCountAggregateOutputType | null;
    _min: RequiredDocumentConfigMinAggregateOutputType | null;
    _max: RequiredDocumentConfigMaxAggregateOutputType | null;
};
export type RequiredDocumentConfigMinAggregateOutputType = {
    id: string | null;
    applicationType: string | null;
    documentType: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type RequiredDocumentConfigMaxAggregateOutputType = {
    id: string | null;
    applicationType: string | null;
    documentType: string | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type RequiredDocumentConfigCountAggregateOutputType = {
    id: number;
    applicationType: number;
    documentType: number;
    status: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type RequiredDocumentConfigMinAggregateInputType = {
    id?: true;
    applicationType?: true;
    documentType?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type RequiredDocumentConfigMaxAggregateInputType = {
    id?: true;
    applicationType?: true;
    documentType?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type RequiredDocumentConfigCountAggregateInputType = {
    id?: true;
    applicationType?: true;
    documentType?: true;
    status?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type RequiredDocumentConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequiredDocumentConfigWhereInput;
    orderBy?: Prisma.RequiredDocumentConfigOrderByWithRelationInput | Prisma.RequiredDocumentConfigOrderByWithRelationInput[];
    cursor?: Prisma.RequiredDocumentConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RequiredDocumentConfigCountAggregateInputType;
    _min?: RequiredDocumentConfigMinAggregateInputType;
    _max?: RequiredDocumentConfigMaxAggregateInputType;
};
export type GetRequiredDocumentConfigAggregateType<T extends RequiredDocumentConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateRequiredDocumentConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRequiredDocumentConfig[P]> : Prisma.GetScalarType<T[P], AggregateRequiredDocumentConfig[P]>;
};
export type RequiredDocumentConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequiredDocumentConfigWhereInput;
    orderBy?: Prisma.RequiredDocumentConfigOrderByWithAggregationInput | Prisma.RequiredDocumentConfigOrderByWithAggregationInput[];
    by: Prisma.RequiredDocumentConfigScalarFieldEnum[] | Prisma.RequiredDocumentConfigScalarFieldEnum;
    having?: Prisma.RequiredDocumentConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RequiredDocumentConfigCountAggregateInputType | true;
    _min?: RequiredDocumentConfigMinAggregateInputType;
    _max?: RequiredDocumentConfigMaxAggregateInputType;
};
export type RequiredDocumentConfigGroupByOutputType = {
    id: string;
    applicationType: string;
    documentType: string;
    status: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt: Date;
    _count: RequiredDocumentConfigCountAggregateOutputType | null;
    _min: RequiredDocumentConfigMinAggregateOutputType | null;
    _max: RequiredDocumentConfigMaxAggregateOutputType | null;
};
export type GetRequiredDocumentConfigGroupByPayload<T extends RequiredDocumentConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RequiredDocumentConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RequiredDocumentConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RequiredDocumentConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RequiredDocumentConfigGroupByOutputType[P]>;
}>>;
export type RequiredDocumentConfigWhereInput = {
    AND?: Prisma.RequiredDocumentConfigWhereInput | Prisma.RequiredDocumentConfigWhereInput[];
    OR?: Prisma.RequiredDocumentConfigWhereInput[];
    NOT?: Prisma.RequiredDocumentConfigWhereInput | Prisma.RequiredDocumentConfigWhereInput[];
    id?: Prisma.UuidFilter<"RequiredDocumentConfig"> | string;
    applicationType?: Prisma.StringFilter<"RequiredDocumentConfig"> | string;
    documentType?: Prisma.StringFilter<"RequiredDocumentConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"RequiredDocumentConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"RequiredDocumentConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"RequiredDocumentConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type RequiredDocumentConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationType?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type RequiredDocumentConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    applicationType_documentType?: Prisma.RequiredDocumentConfigApplicationTypeDocumentTypeCompoundUniqueInput;
    AND?: Prisma.RequiredDocumentConfigWhereInput | Prisma.RequiredDocumentConfigWhereInput[];
    OR?: Prisma.RequiredDocumentConfigWhereInput[];
    NOT?: Prisma.RequiredDocumentConfigWhereInput | Prisma.RequiredDocumentConfigWhereInput[];
    applicationType?: Prisma.StringFilter<"RequiredDocumentConfig"> | string;
    documentType?: Prisma.StringFilter<"RequiredDocumentConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"RequiredDocumentConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"RequiredDocumentConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"RequiredDocumentConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "applicationType_documentType">;
export type RequiredDocumentConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationType?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RequiredDocumentConfigCountOrderByAggregateInput;
    _max?: Prisma.RequiredDocumentConfigMaxOrderByAggregateInput;
    _min?: Prisma.RequiredDocumentConfigMinOrderByAggregateInput;
};
export type RequiredDocumentConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.RequiredDocumentConfigScalarWhereWithAggregatesInput | Prisma.RequiredDocumentConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.RequiredDocumentConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RequiredDocumentConfigScalarWhereWithAggregatesInput | Prisma.RequiredDocumentConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RequiredDocumentConfig"> | string;
    applicationType?: Prisma.StringWithAggregatesFilter<"RequiredDocumentConfig"> | string;
    documentType?: Prisma.StringWithAggregatesFilter<"RequiredDocumentConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"RequiredDocumentConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"RequiredDocumentConfig"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RequiredDocumentConfig"> | Date | string;
};
export type RequiredDocumentConfigCreateInput = {
    id?: string;
    applicationType: string;
    documentType: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutRequiredDocumentConfigsCreatedInput;
};
export type RequiredDocumentConfigUncheckedCreateInput = {
    id?: string;
    applicationType: string;
    documentType: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type RequiredDocumentConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutRequiredDocumentConfigsCreatedNestedInput;
};
export type RequiredDocumentConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequiredDocumentConfigCreateManyInput = {
    id?: string;
    applicationType: string;
    documentType: string;
    status?: $Enums.GovernedItemStatus;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type RequiredDocumentConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequiredDocumentConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequiredDocumentConfigListRelationFilter = {
    every?: Prisma.RequiredDocumentConfigWhereInput;
    some?: Prisma.RequiredDocumentConfigWhereInput;
    none?: Prisma.RequiredDocumentConfigWhereInput;
};
export type RequiredDocumentConfigOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RequiredDocumentConfigApplicationTypeDocumentTypeCompoundUniqueInput = {
    applicationType: string;
    documentType: string;
};
export type RequiredDocumentConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationType?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RequiredDocumentConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationType?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RequiredDocumentConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationType?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RequiredDocumentConfigCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput> | Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput[] | Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput | Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.RequiredDocumentConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
};
export type RequiredDocumentConfigUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput> | Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput[] | Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput | Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.RequiredDocumentConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
};
export type RequiredDocumentConfigUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput> | Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput[] | Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput | Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.RequiredDocumentConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.RequiredDocumentConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.RequiredDocumentConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    disconnect?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    delete?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    connect?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    update?: Prisma.RequiredDocumentConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.RequiredDocumentConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.RequiredDocumentConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.RequiredDocumentConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.RequiredDocumentConfigScalarWhereInput | Prisma.RequiredDocumentConfigScalarWhereInput[];
};
export type RequiredDocumentConfigUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput> | Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput[] | Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput | Prisma.RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.RequiredDocumentConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.RequiredDocumentConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.RequiredDocumentConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    disconnect?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    delete?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    connect?: Prisma.RequiredDocumentConfigWhereUniqueInput | Prisma.RequiredDocumentConfigWhereUniqueInput[];
    update?: Prisma.RequiredDocumentConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.RequiredDocumentConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.RequiredDocumentConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.RequiredDocumentConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.RequiredDocumentConfigScalarWhereInput | Prisma.RequiredDocumentConfigScalarWhereInput[];
};
export type RequiredDocumentConfigCreateWithoutCreatedByInput = {
    id?: string;
    applicationType: string;
    documentType: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    applicationType: string;
    documentType: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type RequiredDocumentConfigCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput>;
};
export type RequiredDocumentConfigCreateManyCreatedByInputEnvelope = {
    data: Prisma.RequiredDocumentConfigCreateManyCreatedByInput | Prisma.RequiredDocumentConfigCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type RequiredDocumentConfigUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.RequiredDocumentConfigUpdateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.RequiredDocumentConfigCreateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedCreateWithoutCreatedByInput>;
};
export type RequiredDocumentConfigUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.RequiredDocumentConfigUpdateWithoutCreatedByInput, Prisma.RequiredDocumentConfigUncheckedUpdateWithoutCreatedByInput>;
};
export type RequiredDocumentConfigUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.RequiredDocumentConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.RequiredDocumentConfigUpdateManyMutationInput, Prisma.RequiredDocumentConfigUncheckedUpdateManyWithoutCreatedByInput>;
};
export type RequiredDocumentConfigScalarWhereInput = {
    AND?: Prisma.RequiredDocumentConfigScalarWhereInput | Prisma.RequiredDocumentConfigScalarWhereInput[];
    OR?: Prisma.RequiredDocumentConfigScalarWhereInput[];
    NOT?: Prisma.RequiredDocumentConfigScalarWhereInput | Prisma.RequiredDocumentConfigScalarWhereInput[];
    id?: Prisma.UuidFilter<"RequiredDocumentConfig"> | string;
    applicationType?: Prisma.StringFilter<"RequiredDocumentConfig"> | string;
    documentType?: Prisma.StringFilter<"RequiredDocumentConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"RequiredDocumentConfig"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidFilter<"RequiredDocumentConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"RequiredDocumentConfig"> | Date | string;
};
export type RequiredDocumentConfigCreateManyCreatedByInput = {
    id?: string;
    applicationType: string;
    documentType: string;
    status?: $Enums.GovernedItemStatus;
    createdAt?: Date | string;
};
export type RequiredDocumentConfigUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequiredDocumentConfigUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequiredDocumentConfigUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RequiredDocumentConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationType?: boolean;
    documentType?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["requiredDocumentConfig"]>;
export type RequiredDocumentConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationType?: boolean;
    documentType?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["requiredDocumentConfig"]>;
export type RequiredDocumentConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationType?: boolean;
    documentType?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["requiredDocumentConfig"]>;
export type RequiredDocumentConfigSelectScalar = {
    id?: boolean;
    applicationType?: boolean;
    documentType?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type RequiredDocumentConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationType" | "documentType" | "status" | "createdByUserId" | "createdAt", ExtArgs["result"]["requiredDocumentConfig"]>;
export type RequiredDocumentConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type RequiredDocumentConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type RequiredDocumentConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $RequiredDocumentConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RequiredDocumentConfig";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicationType: string;
        documentType: string;
        status: $Enums.GovernedItemStatus;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["requiredDocumentConfig"]>;
    composites: {};
};
export type RequiredDocumentConfigGetPayload<S extends boolean | null | undefined | RequiredDocumentConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload, S>;
export type RequiredDocumentConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RequiredDocumentConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RequiredDocumentConfigCountAggregateInputType | true;
};
export interface RequiredDocumentConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RequiredDocumentConfig'];
        meta: {
            name: 'RequiredDocumentConfig';
        };
    };
    findUnique<T extends RequiredDocumentConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RequiredDocumentConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RequiredDocumentConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, RequiredDocumentConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RequiredDocumentConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RequiredDocumentConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RequiredDocumentConfigFindManyArgs>(args?: Prisma.SelectSubset<T, RequiredDocumentConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RequiredDocumentConfigCreateArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigCreateArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RequiredDocumentConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, RequiredDocumentConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RequiredDocumentConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RequiredDocumentConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RequiredDocumentConfigDeleteArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RequiredDocumentConfigUpdateArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RequiredDocumentConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, RequiredDocumentConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RequiredDocumentConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RequiredDocumentConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RequiredDocumentConfigUpsertArgs>(args: Prisma.SelectSubset<T, RequiredDocumentConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__RequiredDocumentConfigClient<runtime.Types.Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RequiredDocumentConfigCountArgs>(args?: Prisma.Subset<T, RequiredDocumentConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RequiredDocumentConfigCountAggregateOutputType> : number>;
    aggregate<T extends RequiredDocumentConfigAggregateArgs>(args: Prisma.Subset<T, RequiredDocumentConfigAggregateArgs>): Prisma.PrismaPromise<GetRequiredDocumentConfigAggregateType<T>>;
    groupBy<T extends RequiredDocumentConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RequiredDocumentConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: RequiredDocumentConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RequiredDocumentConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequiredDocumentConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RequiredDocumentConfigFieldRefs;
}
export interface Prisma__RequiredDocumentConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RequiredDocumentConfigFieldRefs {
    readonly id: Prisma.FieldRef<"RequiredDocumentConfig", 'String'>;
    readonly applicationType: Prisma.FieldRef<"RequiredDocumentConfig", 'String'>;
    readonly documentType: Prisma.FieldRef<"RequiredDocumentConfig", 'String'>;
    readonly status: Prisma.FieldRef<"RequiredDocumentConfig", 'GovernedItemStatus'>;
    readonly createdByUserId: Prisma.FieldRef<"RequiredDocumentConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RequiredDocumentConfig", 'DateTime'>;
}
export type RequiredDocumentConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
};
export type RequiredDocumentConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
};
export type RequiredDocumentConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    where?: Prisma.RequiredDocumentConfigWhereInput;
    orderBy?: Prisma.RequiredDocumentConfigOrderByWithRelationInput | Prisma.RequiredDocumentConfigOrderByWithRelationInput[];
    cursor?: Prisma.RequiredDocumentConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequiredDocumentConfigScalarFieldEnum | Prisma.RequiredDocumentConfigScalarFieldEnum[];
};
export type RequiredDocumentConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    where?: Prisma.RequiredDocumentConfigWhereInput;
    orderBy?: Prisma.RequiredDocumentConfigOrderByWithRelationInput | Prisma.RequiredDocumentConfigOrderByWithRelationInput[];
    cursor?: Prisma.RequiredDocumentConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequiredDocumentConfigScalarFieldEnum | Prisma.RequiredDocumentConfigScalarFieldEnum[];
};
export type RequiredDocumentConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    where?: Prisma.RequiredDocumentConfigWhereInput;
    orderBy?: Prisma.RequiredDocumentConfigOrderByWithRelationInput | Prisma.RequiredDocumentConfigOrderByWithRelationInput[];
    cursor?: Prisma.RequiredDocumentConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RequiredDocumentConfigScalarFieldEnum | Prisma.RequiredDocumentConfigScalarFieldEnum[];
};
export type RequiredDocumentConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequiredDocumentConfigCreateInput, Prisma.RequiredDocumentConfigUncheckedCreateInput>;
};
export type RequiredDocumentConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RequiredDocumentConfigCreateManyInput | Prisma.RequiredDocumentConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RequiredDocumentConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    data: Prisma.RequiredDocumentConfigCreateManyInput | Prisma.RequiredDocumentConfigCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RequiredDocumentConfigIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RequiredDocumentConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequiredDocumentConfigUpdateInput, Prisma.RequiredDocumentConfigUncheckedUpdateInput>;
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
};
export type RequiredDocumentConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RequiredDocumentConfigUpdateManyMutationInput, Prisma.RequiredDocumentConfigUncheckedUpdateManyInput>;
    where?: Prisma.RequiredDocumentConfigWhereInput;
    limit?: number;
};
export type RequiredDocumentConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RequiredDocumentConfigUpdateManyMutationInput, Prisma.RequiredDocumentConfigUncheckedUpdateManyInput>;
    where?: Prisma.RequiredDocumentConfigWhereInput;
    limit?: number;
    include?: Prisma.RequiredDocumentConfigIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RequiredDocumentConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.RequiredDocumentConfigCreateInput, Prisma.RequiredDocumentConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RequiredDocumentConfigUpdateInput, Prisma.RequiredDocumentConfigUncheckedUpdateInput>;
};
export type RequiredDocumentConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
    where: Prisma.RequiredDocumentConfigWhereUniqueInput;
};
export type RequiredDocumentConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RequiredDocumentConfigWhereInput;
    limit?: number;
};
export type RequiredDocumentConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RequiredDocumentConfigSelect<ExtArgs> | null;
    omit?: Prisma.RequiredDocumentConfigOmit<ExtArgs> | null;
    include?: Prisma.RequiredDocumentConfigInclude<ExtArgs> | null;
};
