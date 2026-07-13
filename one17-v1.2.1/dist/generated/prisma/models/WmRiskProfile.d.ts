import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmRiskProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$WmRiskProfilePayload>;
export type AggregateWmRiskProfile = {
    _count: WmRiskProfileCountAggregateOutputType | null;
    _avg: WmRiskProfileAvgAggregateOutputType | null;
    _sum: WmRiskProfileSumAggregateOutputType | null;
    _min: WmRiskProfileMinAggregateOutputType | null;
    _max: WmRiskProfileMaxAggregateOutputType | null;
};
export type WmRiskProfileAvgAggregateOutputType = {
    version: number | null;
};
export type WmRiskProfileSumAggregateOutputType = {
    version: number | null;
};
export type WmRiskProfileMinAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    version: number | null;
    riskBand: $Enums.WmRiskBand | null;
    isActive: boolean | null;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WmRiskProfileMaxAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    version: number | null;
    riskBand: $Enums.WmRiskBand | null;
    isActive: boolean | null;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WmRiskProfileCountAggregateOutputType = {
    id: number;
    wmClientProfileId: number;
    version: number;
    questionnaireResponses: number;
    riskBand: number;
    isActive: number;
    clientAcknowledgedAt: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type WmRiskProfileAvgAggregateInputType = {
    version?: true;
};
export type WmRiskProfileSumAggregateInputType = {
    version?: true;
};
export type WmRiskProfileMinAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    riskBand?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WmRiskProfileMaxAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    riskBand?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WmRiskProfileCountAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    questionnaireResponses?: true;
    riskBand?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type WmRiskProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmRiskProfileWhereInput;
    orderBy?: Prisma.WmRiskProfileOrderByWithRelationInput | Prisma.WmRiskProfileOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmRiskProfileCountAggregateInputType;
    _avg?: WmRiskProfileAvgAggregateInputType;
    _sum?: WmRiskProfileSumAggregateInputType;
    _min?: WmRiskProfileMinAggregateInputType;
    _max?: WmRiskProfileMaxAggregateInputType;
};
export type GetWmRiskProfileAggregateType<T extends WmRiskProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateWmRiskProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmRiskProfile[P]> : Prisma.GetScalarType<T[P], AggregateWmRiskProfile[P]>;
};
export type WmRiskProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmRiskProfileWhereInput;
    orderBy?: Prisma.WmRiskProfileOrderByWithAggregationInput | Prisma.WmRiskProfileOrderByWithAggregationInput[];
    by: Prisma.WmRiskProfileScalarFieldEnum[] | Prisma.WmRiskProfileScalarFieldEnum;
    having?: Prisma.WmRiskProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmRiskProfileCountAggregateInputType | true;
    _avg?: WmRiskProfileAvgAggregateInputType;
    _sum?: WmRiskProfileSumAggregateInputType;
    _min?: WmRiskProfileMinAggregateInputType;
    _max?: WmRiskProfileMaxAggregateInputType;
};
export type WmRiskProfileGroupByOutputType = {
    id: string;
    wmClientProfileId: string;
    version: number;
    questionnaireResponses: runtime.JsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive: boolean;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string;
    createdAt: Date;
    _count: WmRiskProfileCountAggregateOutputType | null;
    _avg: WmRiskProfileAvgAggregateOutputType | null;
    _sum: WmRiskProfileSumAggregateOutputType | null;
    _min: WmRiskProfileMinAggregateOutputType | null;
    _max: WmRiskProfileMaxAggregateOutputType | null;
};
export type GetWmRiskProfileGroupByPayload<T extends WmRiskProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmRiskProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmRiskProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmRiskProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmRiskProfileGroupByOutputType[P]>;
}>>;
export type WmRiskProfileWhereInput = {
    AND?: Prisma.WmRiskProfileWhereInput | Prisma.WmRiskProfileWhereInput[];
    OR?: Prisma.WmRiskProfileWhereInput[];
    NOT?: Prisma.WmRiskProfileWhereInput | Prisma.WmRiskProfileWhereInput[];
    id?: Prisma.UuidFilter<"WmRiskProfile"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmRiskProfile"> | string;
    version?: Prisma.IntFilter<"WmRiskProfile"> | number;
    questionnaireResponses?: Prisma.JsonFilter<"WmRiskProfile">;
    riskBand?: Prisma.EnumWmRiskBandFilter<"WmRiskProfile"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFilter<"WmRiskProfile"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmRiskProfile"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmRiskProfile"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmRiskProfile"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
};
export type WmRiskProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    questionnaireResponses?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wmClientProfile?: Prisma.WmClientProfileOrderByWithRelationInput;
};
export type WmRiskProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    wmClientProfileId_version?: Prisma.WmRiskProfileWmClientProfileIdVersionCompoundUniqueInput;
    AND?: Prisma.WmRiskProfileWhereInput | Prisma.WmRiskProfileWhereInput[];
    OR?: Prisma.WmRiskProfileWhereInput[];
    NOT?: Prisma.WmRiskProfileWhereInput | Prisma.WmRiskProfileWhereInput[];
    wmClientProfileId?: Prisma.StringFilter<"WmRiskProfile"> | string;
    version?: Prisma.IntFilter<"WmRiskProfile"> | number;
    questionnaireResponses?: Prisma.JsonFilter<"WmRiskProfile">;
    riskBand?: Prisma.EnumWmRiskBandFilter<"WmRiskProfile"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFilter<"WmRiskProfile"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmRiskProfile"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmRiskProfile"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmRiskProfile"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
}, "id" | "wmClientProfileId_version">;
export type WmRiskProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    questionnaireResponses?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmRiskProfileCountOrderByAggregateInput;
    _avg?: Prisma.WmRiskProfileAvgOrderByAggregateInput;
    _max?: Prisma.WmRiskProfileMaxOrderByAggregateInput;
    _min?: Prisma.WmRiskProfileMinOrderByAggregateInput;
    _sum?: Prisma.WmRiskProfileSumOrderByAggregateInput;
};
export type WmRiskProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmRiskProfileScalarWhereWithAggregatesInput | Prisma.WmRiskProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmRiskProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmRiskProfileScalarWhereWithAggregatesInput | Prisma.WmRiskProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmRiskProfile"> | string;
    wmClientProfileId?: Prisma.StringWithAggregatesFilter<"WmRiskProfile"> | string;
    version?: Prisma.IntWithAggregatesFilter<"WmRiskProfile"> | number;
    questionnaireResponses?: Prisma.JsonWithAggregatesFilter<"WmRiskProfile">;
    riskBand?: Prisma.EnumWmRiskBandWithAggregatesFilter<"WmRiskProfile"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolWithAggregatesFilter<"WmRiskProfile"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WmRiskProfile"> | Date | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"WmRiskProfile"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmRiskProfile"> | Date | string;
};
export type WmRiskProfileCreateInput = {
    id?: string;
    version: number;
    questionnaireResponses: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    wmClientProfile: Prisma.WmClientProfileCreateNestedOneWithoutRiskProfilesInput;
};
export type WmRiskProfileUncheckedCreateInput = {
    id?: string;
    wmClientProfileId: string;
    version: number;
    questionnaireResponses: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmRiskProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    questionnaireResponses?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientProfile?: Prisma.WmClientProfileUpdateOneRequiredWithoutRiskProfilesNestedInput;
};
export type WmRiskProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    questionnaireResponses?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskProfileCreateManyInput = {
    id?: string;
    wmClientProfileId: string;
    version: number;
    questionnaireResponses: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmRiskProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    questionnaireResponses?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    questionnaireResponses?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskProfileListRelationFilter = {
    every?: Prisma.WmRiskProfileWhereInput;
    some?: Prisma.WmRiskProfileWhereInput;
    none?: Prisma.WmRiskProfileWhereInput;
};
export type WmRiskProfileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmRiskProfileWmClientProfileIdVersionCompoundUniqueInput = {
    wmClientProfileId: string;
    version: number;
};
export type WmRiskProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    questionnaireResponses?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmRiskProfileAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmRiskProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmRiskProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmRiskProfileSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmRiskProfileCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmRiskProfileCreateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskProfileCreateWithoutWmClientProfileInput[] | Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskProfileCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
};
export type WmRiskProfileUncheckedCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmRiskProfileCreateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskProfileCreateWithoutWmClientProfileInput[] | Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskProfileCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
};
export type WmRiskProfileUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmRiskProfileCreateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskProfileCreateWithoutWmClientProfileInput[] | Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmRiskProfileUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskProfileUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskProfileCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    disconnect?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    delete?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    connect?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    update?: Prisma.WmRiskProfileUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskProfileUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmRiskProfileUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmRiskProfileUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmRiskProfileScalarWhereInput | Prisma.WmRiskProfileScalarWhereInput[];
};
export type WmRiskProfileUncheckedUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmRiskProfileCreateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskProfileCreateWithoutWmClientProfileInput[] | Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskProfileCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmRiskProfileUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskProfileUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskProfileCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    disconnect?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    delete?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    connect?: Prisma.WmRiskProfileWhereUniqueInput | Prisma.WmRiskProfileWhereUniqueInput[];
    update?: Prisma.WmRiskProfileUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskProfileUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmRiskProfileUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmRiskProfileUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmRiskProfileScalarWhereInput | Prisma.WmRiskProfileScalarWhereInput[];
};
export type WmRiskProfileCreateWithoutWmClientProfileInput = {
    id?: string;
    version: number;
    questionnaireResponses: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmRiskProfileUncheckedCreateWithoutWmClientProfileInput = {
    id?: string;
    version: number;
    questionnaireResponses: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmRiskProfileCreateOrConnectWithoutWmClientProfileInput = {
    where: Prisma.WmRiskProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmRiskProfileCreateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmRiskProfileCreateManyWmClientProfileInputEnvelope = {
    data: Prisma.WmRiskProfileCreateManyWmClientProfileInput | Prisma.WmRiskProfileCreateManyWmClientProfileInput[];
    skipDuplicates?: boolean;
};
export type WmRiskProfileUpsertWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmRiskProfileWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmRiskProfileUpdateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedUpdateWithoutWmClientProfileInput>;
    create: Prisma.XOR<Prisma.WmRiskProfileCreateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmRiskProfileUpdateWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmRiskProfileWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmRiskProfileUpdateWithoutWmClientProfileInput, Prisma.WmRiskProfileUncheckedUpdateWithoutWmClientProfileInput>;
};
export type WmRiskProfileUpdateManyWithWhereWithoutWmClientProfileInput = {
    where: Prisma.WmRiskProfileScalarWhereInput;
    data: Prisma.XOR<Prisma.WmRiskProfileUpdateManyMutationInput, Prisma.WmRiskProfileUncheckedUpdateManyWithoutWmClientProfileInput>;
};
export type WmRiskProfileScalarWhereInput = {
    AND?: Prisma.WmRiskProfileScalarWhereInput | Prisma.WmRiskProfileScalarWhereInput[];
    OR?: Prisma.WmRiskProfileScalarWhereInput[];
    NOT?: Prisma.WmRiskProfileScalarWhereInput | Prisma.WmRiskProfileScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmRiskProfile"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmRiskProfile"> | string;
    version?: Prisma.IntFilter<"WmRiskProfile"> | number;
    questionnaireResponses?: Prisma.JsonFilter<"WmRiskProfile">;
    riskBand?: Prisma.EnumWmRiskBandFilter<"WmRiskProfile"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFilter<"WmRiskProfile"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmRiskProfile"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmRiskProfile"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmRiskProfile"> | Date | string;
};
export type WmRiskProfileCreateManyWmClientProfileInput = {
    id?: string;
    version: number;
    questionnaireResponses: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmRiskProfileUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    questionnaireResponses?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskProfileUncheckedUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    questionnaireResponses?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskProfileUncheckedUpdateManyWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    questionnaireResponses?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    questionnaireResponses?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmRiskProfile"]>;
export type WmRiskProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    questionnaireResponses?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmRiskProfile"]>;
export type WmRiskProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    questionnaireResponses?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmRiskProfile"]>;
export type WmRiskProfileSelectScalar = {
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    questionnaireResponses?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type WmRiskProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientProfileId" | "version" | "questionnaireResponses" | "riskBand" | "isActive" | "clientAcknowledgedAt" | "createdByUserId" | "createdAt", ExtArgs["result"]["wmRiskProfile"]>;
export type WmRiskProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmRiskProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmRiskProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type $WmRiskProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmRiskProfile";
    objects: {
        wmClientProfile: Prisma.$WmClientProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientProfileId: string;
        version: number;
        questionnaireResponses: runtime.JsonValue;
        riskBand: $Enums.WmRiskBand;
        isActive: boolean;
        clientAcknowledgedAt: Date | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["wmRiskProfile"]>;
    composites: {};
};
export type WmRiskProfileGetPayload<S extends boolean | null | undefined | WmRiskProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload, S>;
export type WmRiskProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmRiskProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmRiskProfileCountAggregateInputType | true;
};
export interface WmRiskProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmRiskProfile'];
        meta: {
            name: 'WmRiskProfile';
        };
    };
    findUnique<T extends WmRiskProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, WmRiskProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmRiskProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmRiskProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmRiskProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, WmRiskProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmRiskProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmRiskProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmRiskProfileFindManyArgs>(args?: Prisma.SelectSubset<T, WmRiskProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmRiskProfileCreateArgs>(args: Prisma.SelectSubset<T, WmRiskProfileCreateArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmRiskProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, WmRiskProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmRiskProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmRiskProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmRiskProfileDeleteArgs>(args: Prisma.SelectSubset<T, WmRiskProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmRiskProfileUpdateArgs>(args: Prisma.SelectSubset<T, WmRiskProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmRiskProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmRiskProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmRiskProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, WmRiskProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmRiskProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmRiskProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmRiskProfileUpsertArgs>(args: Prisma.SelectSubset<T, WmRiskProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__WmRiskProfileClient<runtime.Types.Result.GetResult<Prisma.$WmRiskProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmRiskProfileCountArgs>(args?: Prisma.Subset<T, WmRiskProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmRiskProfileCountAggregateOutputType> : number>;
    aggregate<T extends WmRiskProfileAggregateArgs>(args: Prisma.Subset<T, WmRiskProfileAggregateArgs>): Prisma.PrismaPromise<GetWmRiskProfileAggregateType<T>>;
    groupBy<T extends WmRiskProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmRiskProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: WmRiskProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmRiskProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmRiskProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmRiskProfileFieldRefs;
}
export interface Prisma__WmRiskProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientProfile<T extends Prisma.WmClientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientProfileClient<runtime.Types.Result.GetResult<Prisma.$WmClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmRiskProfileFieldRefs {
    readonly id: Prisma.FieldRef<"WmRiskProfile", 'String'>;
    readonly wmClientProfileId: Prisma.FieldRef<"WmRiskProfile", 'String'>;
    readonly version: Prisma.FieldRef<"WmRiskProfile", 'Int'>;
    readonly questionnaireResponses: Prisma.FieldRef<"WmRiskProfile", 'Json'>;
    readonly riskBand: Prisma.FieldRef<"WmRiskProfile", 'WmRiskBand'>;
    readonly isActive: Prisma.FieldRef<"WmRiskProfile", 'Boolean'>;
    readonly clientAcknowledgedAt: Prisma.FieldRef<"WmRiskProfile", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"WmRiskProfile", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WmRiskProfile", 'DateTime'>;
}
export type WmRiskProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    where: Prisma.WmRiskProfileWhereUniqueInput;
};
export type WmRiskProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    where: Prisma.WmRiskProfileWhereUniqueInput;
};
export type WmRiskProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    where?: Prisma.WmRiskProfileWhereInput;
    orderBy?: Prisma.WmRiskProfileOrderByWithRelationInput | Prisma.WmRiskProfileOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmRiskProfileScalarFieldEnum | Prisma.WmRiskProfileScalarFieldEnum[];
};
export type WmRiskProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    where?: Prisma.WmRiskProfileWhereInput;
    orderBy?: Prisma.WmRiskProfileOrderByWithRelationInput | Prisma.WmRiskProfileOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmRiskProfileScalarFieldEnum | Prisma.WmRiskProfileScalarFieldEnum[];
};
export type WmRiskProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    where?: Prisma.WmRiskProfileWhereInput;
    orderBy?: Prisma.WmRiskProfileOrderByWithRelationInput | Prisma.WmRiskProfileOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmRiskProfileScalarFieldEnum | Prisma.WmRiskProfileScalarFieldEnum[];
};
export type WmRiskProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmRiskProfileCreateInput, Prisma.WmRiskProfileUncheckedCreateInput>;
};
export type WmRiskProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmRiskProfileCreateManyInput | Prisma.WmRiskProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmRiskProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    data: Prisma.WmRiskProfileCreateManyInput | Prisma.WmRiskProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmRiskProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmRiskProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmRiskProfileUpdateInput, Prisma.WmRiskProfileUncheckedUpdateInput>;
    where: Prisma.WmRiskProfileWhereUniqueInput;
};
export type WmRiskProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmRiskProfileUpdateManyMutationInput, Prisma.WmRiskProfileUncheckedUpdateManyInput>;
    where?: Prisma.WmRiskProfileWhereInput;
    limit?: number;
};
export type WmRiskProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmRiskProfileUpdateManyMutationInput, Prisma.WmRiskProfileUncheckedUpdateManyInput>;
    where?: Prisma.WmRiskProfileWhereInput;
    limit?: number;
    include?: Prisma.WmRiskProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmRiskProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    where: Prisma.WmRiskProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmRiskProfileCreateInput, Prisma.WmRiskProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmRiskProfileUpdateInput, Prisma.WmRiskProfileUncheckedUpdateInput>;
};
export type WmRiskProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
    where: Prisma.WmRiskProfileWhereUniqueInput;
};
export type WmRiskProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmRiskProfileWhereInput;
    limit?: number;
};
export type WmRiskProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskProfileSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskProfileOmit<ExtArgs> | null;
    include?: Prisma.WmRiskProfileInclude<ExtArgs> | null;
};
