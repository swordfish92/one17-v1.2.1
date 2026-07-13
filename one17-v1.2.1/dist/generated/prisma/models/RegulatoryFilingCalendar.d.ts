import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RegulatoryFilingCalendarModel = runtime.Types.Result.DefaultSelection<Prisma.$RegulatoryFilingCalendarPayload>;
export type AggregateRegulatoryFilingCalendar = {
    _count: RegulatoryFilingCalendarCountAggregateOutputType | null;
    _avg: RegulatoryFilingCalendarAvgAggregateOutputType | null;
    _sum: RegulatoryFilingCalendarSumAggregateOutputType | null;
    _min: RegulatoryFilingCalendarMinAggregateOutputType | null;
    _max: RegulatoryFilingCalendarMaxAggregateOutputType | null;
};
export type RegulatoryFilingCalendarAvgAggregateOutputType = {
    deadlineDayOfMonth: number | null;
};
export type RegulatoryFilingCalendarSumAggregateOutputType = {
    deadlineDayOfMonth: number | null;
};
export type RegulatoryFilingCalendarMinAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    ledgerEntityCode: string | null;
    frequency: string | null;
    deadlineDayOfMonth: number | null;
    deadlineRule: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type RegulatoryFilingCalendarMaxAggregateOutputType = {
    id: string | null;
    regulatorTemplateId: string | null;
    ledgerEntityCode: string | null;
    frequency: string | null;
    deadlineDayOfMonth: number | null;
    deadlineRule: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type RegulatoryFilingCalendarCountAggregateOutputType = {
    id: number;
    regulatorTemplateId: number;
    ledgerEntityCode: number;
    frequency: number;
    deadlineDayOfMonth: number;
    deadlineRule: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type RegulatoryFilingCalendarAvgAggregateInputType = {
    deadlineDayOfMonth?: true;
};
export type RegulatoryFilingCalendarSumAggregateInputType = {
    deadlineDayOfMonth?: true;
};
export type RegulatoryFilingCalendarMinAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    ledgerEntityCode?: true;
    frequency?: true;
    deadlineDayOfMonth?: true;
    deadlineRule?: true;
    isActive?: true;
    createdAt?: true;
};
export type RegulatoryFilingCalendarMaxAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    ledgerEntityCode?: true;
    frequency?: true;
    deadlineDayOfMonth?: true;
    deadlineRule?: true;
    isActive?: true;
    createdAt?: true;
};
export type RegulatoryFilingCalendarCountAggregateInputType = {
    id?: true;
    regulatorTemplateId?: true;
    ledgerEntityCode?: true;
    frequency?: true;
    deadlineDayOfMonth?: true;
    deadlineRule?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type RegulatoryFilingCalendarAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    orderBy?: Prisma.RegulatoryFilingCalendarOrderByWithRelationInput | Prisma.RegulatoryFilingCalendarOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegulatoryFilingCalendarCountAggregateInputType;
    _avg?: RegulatoryFilingCalendarAvgAggregateInputType;
    _sum?: RegulatoryFilingCalendarSumAggregateInputType;
    _min?: RegulatoryFilingCalendarMinAggregateInputType;
    _max?: RegulatoryFilingCalendarMaxAggregateInputType;
};
export type GetRegulatoryFilingCalendarAggregateType<T extends RegulatoryFilingCalendarAggregateArgs> = {
    [P in keyof T & keyof AggregateRegulatoryFilingCalendar]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegulatoryFilingCalendar[P]> : Prisma.GetScalarType<T[P], AggregateRegulatoryFilingCalendar[P]>;
};
export type RegulatoryFilingCalendarGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    orderBy?: Prisma.RegulatoryFilingCalendarOrderByWithAggregationInput | Prisma.RegulatoryFilingCalendarOrderByWithAggregationInput[];
    by: Prisma.RegulatoryFilingCalendarScalarFieldEnum[] | Prisma.RegulatoryFilingCalendarScalarFieldEnum;
    having?: Prisma.RegulatoryFilingCalendarScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegulatoryFilingCalendarCountAggregateInputType | true;
    _avg?: RegulatoryFilingCalendarAvgAggregateInputType;
    _sum?: RegulatoryFilingCalendarSumAggregateInputType;
    _min?: RegulatoryFilingCalendarMinAggregateInputType;
    _max?: RegulatoryFilingCalendarMaxAggregateInputType;
};
export type RegulatoryFilingCalendarGroupByOutputType = {
    id: string;
    regulatorTemplateId: string;
    ledgerEntityCode: string;
    frequency: string;
    deadlineDayOfMonth: number | null;
    deadlineRule: string | null;
    isActive: boolean;
    createdAt: Date;
    _count: RegulatoryFilingCalendarCountAggregateOutputType | null;
    _avg: RegulatoryFilingCalendarAvgAggregateOutputType | null;
    _sum: RegulatoryFilingCalendarSumAggregateOutputType | null;
    _min: RegulatoryFilingCalendarMinAggregateOutputType | null;
    _max: RegulatoryFilingCalendarMaxAggregateOutputType | null;
};
export type GetRegulatoryFilingCalendarGroupByPayload<T extends RegulatoryFilingCalendarGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegulatoryFilingCalendarGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegulatoryFilingCalendarGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegulatoryFilingCalendarGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegulatoryFilingCalendarGroupByOutputType[P]>;
}>>;
export type RegulatoryFilingCalendarWhereInput = {
    AND?: Prisma.RegulatoryFilingCalendarWhereInput | Prisma.RegulatoryFilingCalendarWhereInput[];
    OR?: Prisma.RegulatoryFilingCalendarWhereInput[];
    NOT?: Prisma.RegulatoryFilingCalendarWhereInput | Prisma.RegulatoryFilingCalendarWhereInput[];
    id?: Prisma.UuidFilter<"RegulatoryFilingCalendar"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatoryFilingCalendar"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"RegulatoryFilingCalendar"> | string;
    frequency?: Prisma.StringFilter<"RegulatoryFilingCalendar"> | string;
    deadlineDayOfMonth?: Prisma.IntNullableFilter<"RegulatoryFilingCalendar"> | number | null;
    deadlineRule?: Prisma.StringNullableFilter<"RegulatoryFilingCalendar"> | string | null;
    isActive?: Prisma.BoolFilter<"RegulatoryFilingCalendar"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"RegulatoryFilingCalendar"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
};
export type RegulatoryFilingCalendarOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    deadlineDayOfMonth?: Prisma.SortOrderInput | Prisma.SortOrder;
    deadlineRule?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    regulatorTemplate?: Prisma.RegulatorTemplateOrderByWithRelationInput;
};
export type RegulatoryFilingCalendarWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RegulatoryFilingCalendarWhereInput | Prisma.RegulatoryFilingCalendarWhereInput[];
    OR?: Prisma.RegulatoryFilingCalendarWhereInput[];
    NOT?: Prisma.RegulatoryFilingCalendarWhereInput | Prisma.RegulatoryFilingCalendarWhereInput[];
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatoryFilingCalendar"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"RegulatoryFilingCalendar"> | string;
    frequency?: Prisma.StringFilter<"RegulatoryFilingCalendar"> | string;
    deadlineDayOfMonth?: Prisma.IntNullableFilter<"RegulatoryFilingCalendar"> | number | null;
    deadlineRule?: Prisma.StringNullableFilter<"RegulatoryFilingCalendar"> | string | null;
    isActive?: Prisma.BoolFilter<"RegulatoryFilingCalendar"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"RegulatoryFilingCalendar"> | Date | string;
    regulatorTemplate?: Prisma.XOR<Prisma.RegulatorTemplateScalarRelationFilter, Prisma.RegulatorTemplateWhereInput>;
}, "id">;
export type RegulatoryFilingCalendarOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    deadlineDayOfMonth?: Prisma.SortOrderInput | Prisma.SortOrder;
    deadlineRule?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RegulatoryFilingCalendarCountOrderByAggregateInput;
    _avg?: Prisma.RegulatoryFilingCalendarAvgOrderByAggregateInput;
    _max?: Prisma.RegulatoryFilingCalendarMaxOrderByAggregateInput;
    _min?: Prisma.RegulatoryFilingCalendarMinOrderByAggregateInput;
    _sum?: Prisma.RegulatoryFilingCalendarSumOrderByAggregateInput;
};
export type RegulatoryFilingCalendarScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegulatoryFilingCalendarScalarWhereWithAggregatesInput | Prisma.RegulatoryFilingCalendarScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegulatoryFilingCalendarScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegulatoryFilingCalendarScalarWhereWithAggregatesInput | Prisma.RegulatoryFilingCalendarScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RegulatoryFilingCalendar"> | string;
    regulatorTemplateId?: Prisma.UuidWithAggregatesFilter<"RegulatoryFilingCalendar"> | string;
    ledgerEntityCode?: Prisma.StringWithAggregatesFilter<"RegulatoryFilingCalendar"> | string;
    frequency?: Prisma.StringWithAggregatesFilter<"RegulatoryFilingCalendar"> | string;
    deadlineDayOfMonth?: Prisma.IntNullableWithAggregatesFilter<"RegulatoryFilingCalendar"> | number | null;
    deadlineRule?: Prisma.StringNullableWithAggregatesFilter<"RegulatoryFilingCalendar"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"RegulatoryFilingCalendar"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RegulatoryFilingCalendar"> | Date | string;
};
export type RegulatoryFilingCalendarCreateInput = {
    id?: string;
    ledgerEntityCode: string;
    frequency: string;
    deadlineDayOfMonth?: number | null;
    deadlineRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    regulatorTemplate: Prisma.RegulatorTemplateCreateNestedOneWithoutFilingCalendarsInput;
};
export type RegulatoryFilingCalendarUncheckedCreateInput = {
    id?: string;
    regulatorTemplateId: string;
    ledgerEntityCode: string;
    frequency: string;
    deadlineDayOfMonth?: number | null;
    deadlineRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type RegulatoryFilingCalendarUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency?: Prisma.StringFieldUpdateOperationsInput | string;
    deadlineDayOfMonth?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deadlineRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    regulatorTemplate?: Prisma.RegulatorTemplateUpdateOneRequiredWithoutFilingCalendarsNestedInput;
};
export type RegulatoryFilingCalendarUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency?: Prisma.StringFieldUpdateOperationsInput | string;
    deadlineDayOfMonth?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deadlineRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingCalendarCreateManyInput = {
    id?: string;
    regulatorTemplateId: string;
    ledgerEntityCode: string;
    frequency: string;
    deadlineDayOfMonth?: number | null;
    deadlineRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type RegulatoryFilingCalendarUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency?: Prisma.StringFieldUpdateOperationsInput | string;
    deadlineDayOfMonth?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deadlineRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingCalendarUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    regulatorTemplateId?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency?: Prisma.StringFieldUpdateOperationsInput | string;
    deadlineDayOfMonth?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deadlineRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingCalendarListRelationFilter = {
    every?: Prisma.RegulatoryFilingCalendarWhereInput;
    some?: Prisma.RegulatoryFilingCalendarWhereInput;
    none?: Prisma.RegulatoryFilingCalendarWhereInput;
};
export type RegulatoryFilingCalendarOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegulatoryFilingCalendarCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    deadlineDayOfMonth?: Prisma.SortOrder;
    deadlineRule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulatoryFilingCalendarAvgOrderByAggregateInput = {
    deadlineDayOfMonth?: Prisma.SortOrder;
};
export type RegulatoryFilingCalendarMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    deadlineDayOfMonth?: Prisma.SortOrder;
    deadlineRule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulatoryFilingCalendarMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    regulatorTemplateId?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    deadlineDayOfMonth?: Prisma.SortOrder;
    deadlineRule?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulatoryFilingCalendarSumOrderByAggregateInput = {
    deadlineDayOfMonth?: Prisma.SortOrder;
};
export type RegulatoryFilingCalendarCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingCalendarCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
};
export type RegulatoryFilingCalendarUncheckedCreateNestedManyWithoutRegulatorTemplateInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingCalendarCreateManyRegulatorTemplateInputEnvelope;
    connect?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
};
export type RegulatoryFilingCalendarUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.RegulatoryFilingCalendarUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingCalendarCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    disconnect?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    delete?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    connect?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    update?: Prisma.RegulatoryFilingCalendarUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.RegulatoryFilingCalendarUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.RegulatoryFilingCalendarScalarWhereInput | Prisma.RegulatoryFilingCalendarScalarWhereInput[];
};
export type RegulatoryFilingCalendarUncheckedUpdateManyWithoutRegulatorTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput> | Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput[] | Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput[];
    connectOrCreate?: Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput[];
    upsert?: Prisma.RegulatoryFilingCalendarUpsertWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarUpsertWithWhereUniqueWithoutRegulatorTemplateInput[];
    createMany?: Prisma.RegulatoryFilingCalendarCreateManyRegulatorTemplateInputEnvelope;
    set?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    disconnect?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    delete?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    connect?: Prisma.RegulatoryFilingCalendarWhereUniqueInput | Prisma.RegulatoryFilingCalendarWhereUniqueInput[];
    update?: Prisma.RegulatoryFilingCalendarUpdateWithWhereUniqueWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarUpdateWithWhereUniqueWithoutRegulatorTemplateInput[];
    updateMany?: Prisma.RegulatoryFilingCalendarUpdateManyWithWhereWithoutRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarUpdateManyWithWhereWithoutRegulatorTemplateInput[];
    deleteMany?: Prisma.RegulatoryFilingCalendarScalarWhereInput | Prisma.RegulatoryFilingCalendarScalarWhereInput[];
};
export type RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    frequency: string;
    deadlineDayOfMonth?: number | null;
    deadlineRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    frequency: string;
    deadlineDayOfMonth?: number | null;
    deadlineRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type RegulatoryFilingCalendarCreateOrConnectWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingCalendarCreateManyRegulatorTemplateInputEnvelope = {
    data: Prisma.RegulatoryFilingCalendarCreateManyRegulatorTemplateInput | Prisma.RegulatoryFilingCalendarCreateManyRegulatorTemplateInput[];
    skipDuplicates?: boolean;
};
export type RegulatoryFilingCalendarUpsertWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegulatoryFilingCalendarUpdateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedUpdateWithoutRegulatorTemplateInput>;
    create: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingCalendarUpdateWithWhereUniqueWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegulatoryFilingCalendarUpdateWithoutRegulatorTemplateInput, Prisma.RegulatoryFilingCalendarUncheckedUpdateWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingCalendarUpdateManyWithWhereWithoutRegulatorTemplateInput = {
    where: Prisma.RegulatoryFilingCalendarScalarWhereInput;
    data: Prisma.XOR<Prisma.RegulatoryFilingCalendarUpdateManyMutationInput, Prisma.RegulatoryFilingCalendarUncheckedUpdateManyWithoutRegulatorTemplateInput>;
};
export type RegulatoryFilingCalendarScalarWhereInput = {
    AND?: Prisma.RegulatoryFilingCalendarScalarWhereInput | Prisma.RegulatoryFilingCalendarScalarWhereInput[];
    OR?: Prisma.RegulatoryFilingCalendarScalarWhereInput[];
    NOT?: Prisma.RegulatoryFilingCalendarScalarWhereInput | Prisma.RegulatoryFilingCalendarScalarWhereInput[];
    id?: Prisma.UuidFilter<"RegulatoryFilingCalendar"> | string;
    regulatorTemplateId?: Prisma.UuidFilter<"RegulatoryFilingCalendar"> | string;
    ledgerEntityCode?: Prisma.StringFilter<"RegulatoryFilingCalendar"> | string;
    frequency?: Prisma.StringFilter<"RegulatoryFilingCalendar"> | string;
    deadlineDayOfMonth?: Prisma.IntNullableFilter<"RegulatoryFilingCalendar"> | number | null;
    deadlineRule?: Prisma.StringNullableFilter<"RegulatoryFilingCalendar"> | string | null;
    isActive?: Prisma.BoolFilter<"RegulatoryFilingCalendar"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"RegulatoryFilingCalendar"> | Date | string;
};
export type RegulatoryFilingCalendarCreateManyRegulatorTemplateInput = {
    id?: string;
    ledgerEntityCode: string;
    frequency: string;
    deadlineDayOfMonth?: number | null;
    deadlineRule?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type RegulatoryFilingCalendarUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency?: Prisma.StringFieldUpdateOperationsInput | string;
    deadlineDayOfMonth?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deadlineRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingCalendarUncheckedUpdateWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency?: Prisma.StringFieldUpdateOperationsInput | string;
    deadlineDayOfMonth?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deadlineRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingCalendarUncheckedUpdateManyWithoutRegulatorTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency?: Prisma.StringFieldUpdateOperationsInput | string;
    deadlineDayOfMonth?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deadlineRule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulatoryFilingCalendarSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    frequency?: boolean;
    deadlineDayOfMonth?: boolean;
    deadlineRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulatoryFilingCalendar"]>;
export type RegulatoryFilingCalendarSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    frequency?: boolean;
    deadlineDayOfMonth?: boolean;
    deadlineRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulatoryFilingCalendar"]>;
export type RegulatoryFilingCalendarSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    frequency?: boolean;
    deadlineDayOfMonth?: boolean;
    deadlineRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulatoryFilingCalendar"]>;
export type RegulatoryFilingCalendarSelectScalar = {
    id?: boolean;
    regulatorTemplateId?: boolean;
    ledgerEntityCode?: boolean;
    frequency?: boolean;
    deadlineDayOfMonth?: boolean;
    deadlineRule?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type RegulatoryFilingCalendarOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "regulatorTemplateId" | "ledgerEntityCode" | "frequency" | "deadlineDayOfMonth" | "deadlineRule" | "isActive" | "createdAt", ExtArgs["result"]["regulatoryFilingCalendar"]>;
export type RegulatoryFilingCalendarInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type RegulatoryFilingCalendarIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type RegulatoryFilingCalendarIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regulatorTemplate?: boolean | Prisma.RegulatorTemplateDefaultArgs<ExtArgs>;
};
export type $RegulatoryFilingCalendarPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegulatoryFilingCalendar";
    objects: {
        regulatorTemplate: Prisma.$RegulatorTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        regulatorTemplateId: string;
        ledgerEntityCode: string;
        frequency: string;
        deadlineDayOfMonth: number | null;
        deadlineRule: string | null;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["regulatoryFilingCalendar"]>;
    composites: {};
};
export type RegulatoryFilingCalendarGetPayload<S extends boolean | null | undefined | RegulatoryFilingCalendarDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload, S>;
export type RegulatoryFilingCalendarCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegulatoryFilingCalendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegulatoryFilingCalendarCountAggregateInputType | true;
};
export interface RegulatoryFilingCalendarDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegulatoryFilingCalendar'];
        meta: {
            name: 'RegulatoryFilingCalendar';
        };
    };
    findUnique<T extends RegulatoryFilingCalendarFindUniqueArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegulatoryFilingCalendarFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegulatoryFilingCalendarFindFirstArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingCalendarFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegulatoryFilingCalendarFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingCalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegulatoryFilingCalendarFindManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingCalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegulatoryFilingCalendarCreateArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarCreateArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegulatoryFilingCalendarCreateManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingCalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegulatoryFilingCalendarCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingCalendarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegulatoryFilingCalendarDeleteArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarDeleteArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegulatoryFilingCalendarUpdateArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarUpdateArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegulatoryFilingCalendarDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegulatoryFilingCalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegulatoryFilingCalendarUpdateManyArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegulatoryFilingCalendarUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegulatoryFilingCalendarUpsertArgs>(args: Prisma.SelectSubset<T, RegulatoryFilingCalendarUpsertArgs<ExtArgs>>): Prisma.Prisma__RegulatoryFilingCalendarClient<runtime.Types.Result.GetResult<Prisma.$RegulatoryFilingCalendarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegulatoryFilingCalendarCountArgs>(args?: Prisma.Subset<T, RegulatoryFilingCalendarCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegulatoryFilingCalendarCountAggregateOutputType> : number>;
    aggregate<T extends RegulatoryFilingCalendarAggregateArgs>(args: Prisma.Subset<T, RegulatoryFilingCalendarAggregateArgs>): Prisma.PrismaPromise<GetRegulatoryFilingCalendarAggregateType<T>>;
    groupBy<T extends RegulatoryFilingCalendarGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegulatoryFilingCalendarGroupByArgs['orderBy'];
    } : {
        orderBy?: RegulatoryFilingCalendarGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegulatoryFilingCalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulatoryFilingCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegulatoryFilingCalendarFieldRefs;
}
export interface Prisma__RegulatoryFilingCalendarClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    regulatorTemplate<T extends Prisma.RegulatorTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegulatorTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__RegulatorTemplateClient<runtime.Types.Result.GetResult<Prisma.$RegulatorTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegulatoryFilingCalendarFieldRefs {
    readonly id: Prisma.FieldRef<"RegulatoryFilingCalendar", 'String'>;
    readonly regulatorTemplateId: Prisma.FieldRef<"RegulatoryFilingCalendar", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"RegulatoryFilingCalendar", 'String'>;
    readonly frequency: Prisma.FieldRef<"RegulatoryFilingCalendar", 'String'>;
    readonly deadlineDayOfMonth: Prisma.FieldRef<"RegulatoryFilingCalendar", 'Int'>;
    readonly deadlineRule: Prisma.FieldRef<"RegulatoryFilingCalendar", 'String'>;
    readonly isActive: Prisma.FieldRef<"RegulatoryFilingCalendar", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"RegulatoryFilingCalendar", 'DateTime'>;
}
export type RegulatoryFilingCalendarFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
};
export type RegulatoryFilingCalendarFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
};
export type RegulatoryFilingCalendarFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    orderBy?: Prisma.RegulatoryFilingCalendarOrderByWithRelationInput | Prisma.RegulatoryFilingCalendarOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryFilingCalendarScalarFieldEnum | Prisma.RegulatoryFilingCalendarScalarFieldEnum[];
};
export type RegulatoryFilingCalendarFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    orderBy?: Prisma.RegulatoryFilingCalendarOrderByWithRelationInput | Prisma.RegulatoryFilingCalendarOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryFilingCalendarScalarFieldEnum | Prisma.RegulatoryFilingCalendarScalarFieldEnum[];
};
export type RegulatoryFilingCalendarFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    orderBy?: Prisma.RegulatoryFilingCalendarOrderByWithRelationInput | Prisma.RegulatoryFilingCalendarOrderByWithRelationInput[];
    cursor?: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulatoryFilingCalendarScalarFieldEnum | Prisma.RegulatoryFilingCalendarScalarFieldEnum[];
};
export type RegulatoryFilingCalendarCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateInput>;
};
export type RegulatoryFilingCalendarCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegulatoryFilingCalendarCreateManyInput | Prisma.RegulatoryFilingCalendarCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegulatoryFilingCalendarCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    data: Prisma.RegulatoryFilingCalendarCreateManyInput | Prisma.RegulatoryFilingCalendarCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegulatoryFilingCalendarIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegulatoryFilingCalendarUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryFilingCalendarUpdateInput, Prisma.RegulatoryFilingCalendarUncheckedUpdateInput>;
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
};
export type RegulatoryFilingCalendarUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegulatoryFilingCalendarUpdateManyMutationInput, Prisma.RegulatoryFilingCalendarUncheckedUpdateManyInput>;
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    limit?: number;
};
export type RegulatoryFilingCalendarUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulatoryFilingCalendarUpdateManyMutationInput, Prisma.RegulatoryFilingCalendarUncheckedUpdateManyInput>;
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    limit?: number;
    include?: Prisma.RegulatoryFilingCalendarIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegulatoryFilingCalendarUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulatoryFilingCalendarCreateInput, Prisma.RegulatoryFilingCalendarUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegulatoryFilingCalendarUpdateInput, Prisma.RegulatoryFilingCalendarUncheckedUpdateInput>;
};
export type RegulatoryFilingCalendarDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
    where: Prisma.RegulatoryFilingCalendarWhereUniqueInput;
};
export type RegulatoryFilingCalendarDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulatoryFilingCalendarWhereInput;
    limit?: number;
};
export type RegulatoryFilingCalendarDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulatoryFilingCalendarSelect<ExtArgs> | null;
    omit?: Prisma.RegulatoryFilingCalendarOmit<ExtArgs> | null;
    include?: Prisma.RegulatoryFilingCalendarInclude<ExtArgs> | null;
};
