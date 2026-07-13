import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DashboardTileModel = runtime.Types.Result.DefaultSelection<Prisma.$DashboardTilePayload>;
export type AggregateDashboardTile = {
    _count: DashboardTileCountAggregateOutputType | null;
    _avg: DashboardTileAvgAggregateOutputType | null;
    _sum: DashboardTileSumAggregateOutputType | null;
    _min: DashboardTileMinAggregateOutputType | null;
    _max: DashboardTileMaxAggregateOutputType | null;
};
export type DashboardTileAvgAggregateOutputType = {
    position: number | null;
};
export type DashboardTileSumAggregateOutputType = {
    position: number | null;
};
export type DashboardTileMinAggregateOutputType = {
    id: string | null;
    dashboardId: string | null;
    metricCode: string | null;
    presentation: $Enums.TilePresentation | null;
    position: number | null;
    createdAt: Date | null;
};
export type DashboardTileMaxAggregateOutputType = {
    id: string | null;
    dashboardId: string | null;
    metricCode: string | null;
    presentation: $Enums.TilePresentation | null;
    position: number | null;
    createdAt: Date | null;
};
export type DashboardTileCountAggregateOutputType = {
    id: number;
    dashboardId: number;
    metricCode: number;
    presentation: number;
    position: number;
    createdAt: number;
    _all: number;
};
export type DashboardTileAvgAggregateInputType = {
    position?: true;
};
export type DashboardTileSumAggregateInputType = {
    position?: true;
};
export type DashboardTileMinAggregateInputType = {
    id?: true;
    dashboardId?: true;
    metricCode?: true;
    presentation?: true;
    position?: true;
    createdAt?: true;
};
export type DashboardTileMaxAggregateInputType = {
    id?: true;
    dashboardId?: true;
    metricCode?: true;
    presentation?: true;
    position?: true;
    createdAt?: true;
};
export type DashboardTileCountAggregateInputType = {
    id?: true;
    dashboardId?: true;
    metricCode?: true;
    presentation?: true;
    position?: true;
    createdAt?: true;
    _all?: true;
};
export type DashboardTileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardTileWhereInput;
    orderBy?: Prisma.DashboardTileOrderByWithRelationInput | Prisma.DashboardTileOrderByWithRelationInput[];
    cursor?: Prisma.DashboardTileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DashboardTileCountAggregateInputType;
    _avg?: DashboardTileAvgAggregateInputType;
    _sum?: DashboardTileSumAggregateInputType;
    _min?: DashboardTileMinAggregateInputType;
    _max?: DashboardTileMaxAggregateInputType;
};
export type GetDashboardTileAggregateType<T extends DashboardTileAggregateArgs> = {
    [P in keyof T & keyof AggregateDashboardTile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDashboardTile[P]> : Prisma.GetScalarType<T[P], AggregateDashboardTile[P]>;
};
export type DashboardTileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardTileWhereInput;
    orderBy?: Prisma.DashboardTileOrderByWithAggregationInput | Prisma.DashboardTileOrderByWithAggregationInput[];
    by: Prisma.DashboardTileScalarFieldEnum[] | Prisma.DashboardTileScalarFieldEnum;
    having?: Prisma.DashboardTileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DashboardTileCountAggregateInputType | true;
    _avg?: DashboardTileAvgAggregateInputType;
    _sum?: DashboardTileSumAggregateInputType;
    _min?: DashboardTileMinAggregateInputType;
    _max?: DashboardTileMaxAggregateInputType;
};
export type DashboardTileGroupByOutputType = {
    id: string;
    dashboardId: string;
    metricCode: string;
    presentation: $Enums.TilePresentation;
    position: number;
    createdAt: Date;
    _count: DashboardTileCountAggregateOutputType | null;
    _avg: DashboardTileAvgAggregateOutputType | null;
    _sum: DashboardTileSumAggregateOutputType | null;
    _min: DashboardTileMinAggregateOutputType | null;
    _max: DashboardTileMaxAggregateOutputType | null;
};
export type GetDashboardTileGroupByPayload<T extends DashboardTileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DashboardTileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DashboardTileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DashboardTileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DashboardTileGroupByOutputType[P]>;
}>>;
export type DashboardTileWhereInput = {
    AND?: Prisma.DashboardTileWhereInput | Prisma.DashboardTileWhereInput[];
    OR?: Prisma.DashboardTileWhereInput[];
    NOT?: Prisma.DashboardTileWhereInput | Prisma.DashboardTileWhereInput[];
    id?: Prisma.UuidFilter<"DashboardTile"> | string;
    dashboardId?: Prisma.UuidFilter<"DashboardTile"> | string;
    metricCode?: Prisma.StringFilter<"DashboardTile"> | string;
    presentation?: Prisma.EnumTilePresentationFilter<"DashboardTile"> | $Enums.TilePresentation;
    position?: Prisma.IntFilter<"DashboardTile"> | number;
    createdAt?: Prisma.DateTimeFilter<"DashboardTile"> | Date | string;
    dashboard?: Prisma.XOR<Prisma.SavedDashboardScalarRelationFilter, Prisma.SavedDashboardWhereInput>;
};
export type DashboardTileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dashboardId?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    presentation?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    dashboard?: Prisma.SavedDashboardOrderByWithRelationInput;
};
export type DashboardTileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DashboardTileWhereInput | Prisma.DashboardTileWhereInput[];
    OR?: Prisma.DashboardTileWhereInput[];
    NOT?: Prisma.DashboardTileWhereInput | Prisma.DashboardTileWhereInput[];
    dashboardId?: Prisma.UuidFilter<"DashboardTile"> | string;
    metricCode?: Prisma.StringFilter<"DashboardTile"> | string;
    presentation?: Prisma.EnumTilePresentationFilter<"DashboardTile"> | $Enums.TilePresentation;
    position?: Prisma.IntFilter<"DashboardTile"> | number;
    createdAt?: Prisma.DateTimeFilter<"DashboardTile"> | Date | string;
    dashboard?: Prisma.XOR<Prisma.SavedDashboardScalarRelationFilter, Prisma.SavedDashboardWhereInput>;
}, "id">;
export type DashboardTileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dashboardId?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    presentation?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DashboardTileCountOrderByAggregateInput;
    _avg?: Prisma.DashboardTileAvgOrderByAggregateInput;
    _max?: Prisma.DashboardTileMaxOrderByAggregateInput;
    _min?: Prisma.DashboardTileMinOrderByAggregateInput;
    _sum?: Prisma.DashboardTileSumOrderByAggregateInput;
};
export type DashboardTileScalarWhereWithAggregatesInput = {
    AND?: Prisma.DashboardTileScalarWhereWithAggregatesInput | Prisma.DashboardTileScalarWhereWithAggregatesInput[];
    OR?: Prisma.DashboardTileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DashboardTileScalarWhereWithAggregatesInput | Prisma.DashboardTileScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DashboardTile"> | string;
    dashboardId?: Prisma.UuidWithAggregatesFilter<"DashboardTile"> | string;
    metricCode?: Prisma.StringWithAggregatesFilter<"DashboardTile"> | string;
    presentation?: Prisma.EnumTilePresentationWithAggregatesFilter<"DashboardTile"> | $Enums.TilePresentation;
    position?: Prisma.IntWithAggregatesFilter<"DashboardTile"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DashboardTile"> | Date | string;
};
export type DashboardTileCreateInput = {
    id?: string;
    metricCode: string;
    presentation: $Enums.TilePresentation;
    position: number;
    createdAt?: Date | string;
    dashboard: Prisma.SavedDashboardCreateNestedOneWithoutTilesInput;
};
export type DashboardTileUncheckedCreateInput = {
    id?: string;
    dashboardId: string;
    metricCode: string;
    presentation: $Enums.TilePresentation;
    position: number;
    createdAt?: Date | string;
};
export type DashboardTileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    presentation?: Prisma.EnumTilePresentationFieldUpdateOperationsInput | $Enums.TilePresentation;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dashboard?: Prisma.SavedDashboardUpdateOneRequiredWithoutTilesNestedInput;
};
export type DashboardTileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dashboardId?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    presentation?: Prisma.EnumTilePresentationFieldUpdateOperationsInput | $Enums.TilePresentation;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardTileCreateManyInput = {
    id?: string;
    dashboardId: string;
    metricCode: string;
    presentation: $Enums.TilePresentation;
    position: number;
    createdAt?: Date | string;
};
export type DashboardTileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    presentation?: Prisma.EnumTilePresentationFieldUpdateOperationsInput | $Enums.TilePresentation;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardTileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dashboardId?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    presentation?: Prisma.EnumTilePresentationFieldUpdateOperationsInput | $Enums.TilePresentation;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardTileListRelationFilter = {
    every?: Prisma.DashboardTileWhereInput;
    some?: Prisma.DashboardTileWhereInput;
    none?: Prisma.DashboardTileWhereInput;
};
export type DashboardTileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DashboardTileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dashboardId?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    presentation?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardTileAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type DashboardTileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dashboardId?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    presentation?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardTileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dashboardId?: Prisma.SortOrder;
    metricCode?: Prisma.SortOrder;
    presentation?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardTileSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type DashboardTileCreateNestedManyWithoutDashboardInput = {
    create?: Prisma.XOR<Prisma.DashboardTileCreateWithoutDashboardInput, Prisma.DashboardTileUncheckedCreateWithoutDashboardInput> | Prisma.DashboardTileCreateWithoutDashboardInput[] | Prisma.DashboardTileUncheckedCreateWithoutDashboardInput[];
    connectOrCreate?: Prisma.DashboardTileCreateOrConnectWithoutDashboardInput | Prisma.DashboardTileCreateOrConnectWithoutDashboardInput[];
    createMany?: Prisma.DashboardTileCreateManyDashboardInputEnvelope;
    connect?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
};
export type DashboardTileUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: Prisma.XOR<Prisma.DashboardTileCreateWithoutDashboardInput, Prisma.DashboardTileUncheckedCreateWithoutDashboardInput> | Prisma.DashboardTileCreateWithoutDashboardInput[] | Prisma.DashboardTileUncheckedCreateWithoutDashboardInput[];
    connectOrCreate?: Prisma.DashboardTileCreateOrConnectWithoutDashboardInput | Prisma.DashboardTileCreateOrConnectWithoutDashboardInput[];
    createMany?: Prisma.DashboardTileCreateManyDashboardInputEnvelope;
    connect?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
};
export type DashboardTileUpdateManyWithoutDashboardNestedInput = {
    create?: Prisma.XOR<Prisma.DashboardTileCreateWithoutDashboardInput, Prisma.DashboardTileUncheckedCreateWithoutDashboardInput> | Prisma.DashboardTileCreateWithoutDashboardInput[] | Prisma.DashboardTileUncheckedCreateWithoutDashboardInput[];
    connectOrCreate?: Prisma.DashboardTileCreateOrConnectWithoutDashboardInput | Prisma.DashboardTileCreateOrConnectWithoutDashboardInput[];
    upsert?: Prisma.DashboardTileUpsertWithWhereUniqueWithoutDashboardInput | Prisma.DashboardTileUpsertWithWhereUniqueWithoutDashboardInput[];
    createMany?: Prisma.DashboardTileCreateManyDashboardInputEnvelope;
    set?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    disconnect?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    delete?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    connect?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    update?: Prisma.DashboardTileUpdateWithWhereUniqueWithoutDashboardInput | Prisma.DashboardTileUpdateWithWhereUniqueWithoutDashboardInput[];
    updateMany?: Prisma.DashboardTileUpdateManyWithWhereWithoutDashboardInput | Prisma.DashboardTileUpdateManyWithWhereWithoutDashboardInput[];
    deleteMany?: Prisma.DashboardTileScalarWhereInput | Prisma.DashboardTileScalarWhereInput[];
};
export type DashboardTileUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: Prisma.XOR<Prisma.DashboardTileCreateWithoutDashboardInput, Prisma.DashboardTileUncheckedCreateWithoutDashboardInput> | Prisma.DashboardTileCreateWithoutDashboardInput[] | Prisma.DashboardTileUncheckedCreateWithoutDashboardInput[];
    connectOrCreate?: Prisma.DashboardTileCreateOrConnectWithoutDashboardInput | Prisma.DashboardTileCreateOrConnectWithoutDashboardInput[];
    upsert?: Prisma.DashboardTileUpsertWithWhereUniqueWithoutDashboardInput | Prisma.DashboardTileUpsertWithWhereUniqueWithoutDashboardInput[];
    createMany?: Prisma.DashboardTileCreateManyDashboardInputEnvelope;
    set?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    disconnect?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    delete?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    connect?: Prisma.DashboardTileWhereUniqueInput | Prisma.DashboardTileWhereUniqueInput[];
    update?: Prisma.DashboardTileUpdateWithWhereUniqueWithoutDashboardInput | Prisma.DashboardTileUpdateWithWhereUniqueWithoutDashboardInput[];
    updateMany?: Prisma.DashboardTileUpdateManyWithWhereWithoutDashboardInput | Prisma.DashboardTileUpdateManyWithWhereWithoutDashboardInput[];
    deleteMany?: Prisma.DashboardTileScalarWhereInput | Prisma.DashboardTileScalarWhereInput[];
};
export type EnumTilePresentationFieldUpdateOperationsInput = {
    set?: $Enums.TilePresentation;
};
export type DashboardTileCreateWithoutDashboardInput = {
    id?: string;
    metricCode: string;
    presentation: $Enums.TilePresentation;
    position: number;
    createdAt?: Date | string;
};
export type DashboardTileUncheckedCreateWithoutDashboardInput = {
    id?: string;
    metricCode: string;
    presentation: $Enums.TilePresentation;
    position: number;
    createdAt?: Date | string;
};
export type DashboardTileCreateOrConnectWithoutDashboardInput = {
    where: Prisma.DashboardTileWhereUniqueInput;
    create: Prisma.XOR<Prisma.DashboardTileCreateWithoutDashboardInput, Prisma.DashboardTileUncheckedCreateWithoutDashboardInput>;
};
export type DashboardTileCreateManyDashboardInputEnvelope = {
    data: Prisma.DashboardTileCreateManyDashboardInput | Prisma.DashboardTileCreateManyDashboardInput[];
    skipDuplicates?: boolean;
};
export type DashboardTileUpsertWithWhereUniqueWithoutDashboardInput = {
    where: Prisma.DashboardTileWhereUniqueInput;
    update: Prisma.XOR<Prisma.DashboardTileUpdateWithoutDashboardInput, Prisma.DashboardTileUncheckedUpdateWithoutDashboardInput>;
    create: Prisma.XOR<Prisma.DashboardTileCreateWithoutDashboardInput, Prisma.DashboardTileUncheckedCreateWithoutDashboardInput>;
};
export type DashboardTileUpdateWithWhereUniqueWithoutDashboardInput = {
    where: Prisma.DashboardTileWhereUniqueInput;
    data: Prisma.XOR<Prisma.DashboardTileUpdateWithoutDashboardInput, Prisma.DashboardTileUncheckedUpdateWithoutDashboardInput>;
};
export type DashboardTileUpdateManyWithWhereWithoutDashboardInput = {
    where: Prisma.DashboardTileScalarWhereInput;
    data: Prisma.XOR<Prisma.DashboardTileUpdateManyMutationInput, Prisma.DashboardTileUncheckedUpdateManyWithoutDashboardInput>;
};
export type DashboardTileScalarWhereInput = {
    AND?: Prisma.DashboardTileScalarWhereInput | Prisma.DashboardTileScalarWhereInput[];
    OR?: Prisma.DashboardTileScalarWhereInput[];
    NOT?: Prisma.DashboardTileScalarWhereInput | Prisma.DashboardTileScalarWhereInput[];
    id?: Prisma.UuidFilter<"DashboardTile"> | string;
    dashboardId?: Prisma.UuidFilter<"DashboardTile"> | string;
    metricCode?: Prisma.StringFilter<"DashboardTile"> | string;
    presentation?: Prisma.EnumTilePresentationFilter<"DashboardTile"> | $Enums.TilePresentation;
    position?: Prisma.IntFilter<"DashboardTile"> | number;
    createdAt?: Prisma.DateTimeFilter<"DashboardTile"> | Date | string;
};
export type DashboardTileCreateManyDashboardInput = {
    id?: string;
    metricCode: string;
    presentation: $Enums.TilePresentation;
    position: number;
    createdAt?: Date | string;
};
export type DashboardTileUpdateWithoutDashboardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    presentation?: Prisma.EnumTilePresentationFieldUpdateOperationsInput | $Enums.TilePresentation;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardTileUncheckedUpdateWithoutDashboardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    presentation?: Prisma.EnumTilePresentationFieldUpdateOperationsInput | $Enums.TilePresentation;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardTileUncheckedUpdateManyWithoutDashboardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricCode?: Prisma.StringFieldUpdateOperationsInput | string;
    presentation?: Prisma.EnumTilePresentationFieldUpdateOperationsInput | $Enums.TilePresentation;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardTileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dashboardId?: boolean;
    metricCode?: boolean;
    presentation?: boolean;
    position?: boolean;
    createdAt?: boolean;
    dashboard?: boolean | Prisma.SavedDashboardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dashboardTile"]>;
export type DashboardTileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dashboardId?: boolean;
    metricCode?: boolean;
    presentation?: boolean;
    position?: boolean;
    createdAt?: boolean;
    dashboard?: boolean | Prisma.SavedDashboardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dashboardTile"]>;
export type DashboardTileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dashboardId?: boolean;
    metricCode?: boolean;
    presentation?: boolean;
    position?: boolean;
    createdAt?: boolean;
    dashboard?: boolean | Prisma.SavedDashboardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dashboardTile"]>;
export type DashboardTileSelectScalar = {
    id?: boolean;
    dashboardId?: boolean;
    metricCode?: boolean;
    presentation?: boolean;
    position?: boolean;
    createdAt?: boolean;
};
export type DashboardTileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dashboardId" | "metricCode" | "presentation" | "position" | "createdAt", ExtArgs["result"]["dashboardTile"]>;
export type DashboardTileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dashboard?: boolean | Prisma.SavedDashboardDefaultArgs<ExtArgs>;
};
export type DashboardTileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dashboard?: boolean | Prisma.SavedDashboardDefaultArgs<ExtArgs>;
};
export type DashboardTileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dashboard?: boolean | Prisma.SavedDashboardDefaultArgs<ExtArgs>;
};
export type $DashboardTilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DashboardTile";
    objects: {
        dashboard: Prisma.$SavedDashboardPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dashboardId: string;
        metricCode: string;
        presentation: $Enums.TilePresentation;
        position: number;
        createdAt: Date;
    }, ExtArgs["result"]["dashboardTile"]>;
    composites: {};
};
export type DashboardTileGetPayload<S extends boolean | null | undefined | DashboardTileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload, S>;
export type DashboardTileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DashboardTileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DashboardTileCountAggregateInputType | true;
};
export interface DashboardTileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DashboardTile'];
        meta: {
            name: 'DashboardTile';
        };
    };
    findUnique<T extends DashboardTileFindUniqueArgs>(args: Prisma.SelectSubset<T, DashboardTileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DashboardTileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DashboardTileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DashboardTileFindFirstArgs>(args?: Prisma.SelectSubset<T, DashboardTileFindFirstArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DashboardTileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DashboardTileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DashboardTileFindManyArgs>(args?: Prisma.SelectSubset<T, DashboardTileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DashboardTileCreateArgs>(args: Prisma.SelectSubset<T, DashboardTileCreateArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DashboardTileCreateManyArgs>(args?: Prisma.SelectSubset<T, DashboardTileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DashboardTileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DashboardTileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DashboardTileDeleteArgs>(args: Prisma.SelectSubset<T, DashboardTileDeleteArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DashboardTileUpdateArgs>(args: Prisma.SelectSubset<T, DashboardTileUpdateArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DashboardTileDeleteManyArgs>(args?: Prisma.SelectSubset<T, DashboardTileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DashboardTileUpdateManyArgs>(args: Prisma.SelectSubset<T, DashboardTileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DashboardTileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DashboardTileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DashboardTileUpsertArgs>(args: Prisma.SelectSubset<T, DashboardTileUpsertArgs<ExtArgs>>): Prisma.Prisma__DashboardTileClient<runtime.Types.Result.GetResult<Prisma.$DashboardTilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DashboardTileCountArgs>(args?: Prisma.Subset<T, DashboardTileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DashboardTileCountAggregateOutputType> : number>;
    aggregate<T extends DashboardTileAggregateArgs>(args: Prisma.Subset<T, DashboardTileAggregateArgs>): Prisma.PrismaPromise<GetDashboardTileAggregateType<T>>;
    groupBy<T extends DashboardTileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DashboardTileGroupByArgs['orderBy'];
    } : {
        orderBy?: DashboardTileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DashboardTileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardTileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DashboardTileFieldRefs;
}
export interface Prisma__DashboardTileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    dashboard<T extends Prisma.SavedDashboardDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavedDashboardDefaultArgs<ExtArgs>>): Prisma.Prisma__SavedDashboardClient<runtime.Types.Result.GetResult<Prisma.$SavedDashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DashboardTileFieldRefs {
    readonly id: Prisma.FieldRef<"DashboardTile", 'String'>;
    readonly dashboardId: Prisma.FieldRef<"DashboardTile", 'String'>;
    readonly metricCode: Prisma.FieldRef<"DashboardTile", 'String'>;
    readonly presentation: Prisma.FieldRef<"DashboardTile", 'TilePresentation'>;
    readonly position: Prisma.FieldRef<"DashboardTile", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"DashboardTile", 'DateTime'>;
}
export type DashboardTileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where: Prisma.DashboardTileWhereUniqueInput;
};
export type DashboardTileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where: Prisma.DashboardTileWhereUniqueInput;
};
export type DashboardTileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where?: Prisma.DashboardTileWhereInput;
    orderBy?: Prisma.DashboardTileOrderByWithRelationInput | Prisma.DashboardTileOrderByWithRelationInput[];
    cursor?: Prisma.DashboardTileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardTileScalarFieldEnum | Prisma.DashboardTileScalarFieldEnum[];
};
export type DashboardTileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where?: Prisma.DashboardTileWhereInput;
    orderBy?: Prisma.DashboardTileOrderByWithRelationInput | Prisma.DashboardTileOrderByWithRelationInput[];
    cursor?: Prisma.DashboardTileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardTileScalarFieldEnum | Prisma.DashboardTileScalarFieldEnum[];
};
export type DashboardTileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where?: Prisma.DashboardTileWhereInput;
    orderBy?: Prisma.DashboardTileOrderByWithRelationInput | Prisma.DashboardTileOrderByWithRelationInput[];
    cursor?: Prisma.DashboardTileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardTileScalarFieldEnum | Prisma.DashboardTileScalarFieldEnum[];
};
export type DashboardTileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardTileCreateInput, Prisma.DashboardTileUncheckedCreateInput>;
};
export type DashboardTileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DashboardTileCreateManyInput | Prisma.DashboardTileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DashboardTileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    data: Prisma.DashboardTileCreateManyInput | Prisma.DashboardTileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DashboardTileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DashboardTileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardTileUpdateInput, Prisma.DashboardTileUncheckedUpdateInput>;
    where: Prisma.DashboardTileWhereUniqueInput;
};
export type DashboardTileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DashboardTileUpdateManyMutationInput, Prisma.DashboardTileUncheckedUpdateManyInput>;
    where?: Prisma.DashboardTileWhereInput;
    limit?: number;
};
export type DashboardTileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardTileUpdateManyMutationInput, Prisma.DashboardTileUncheckedUpdateManyInput>;
    where?: Prisma.DashboardTileWhereInput;
    limit?: number;
    include?: Prisma.DashboardTileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DashboardTileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where: Prisma.DashboardTileWhereUniqueInput;
    create: Prisma.XOR<Prisma.DashboardTileCreateInput, Prisma.DashboardTileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DashboardTileUpdateInput, Prisma.DashboardTileUncheckedUpdateInput>;
};
export type DashboardTileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
    where: Prisma.DashboardTileWhereUniqueInput;
};
export type DashboardTileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardTileWhereInput;
    limit?: number;
};
export type DashboardTileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardTileSelect<ExtArgs> | null;
    omit?: Prisma.DashboardTileOmit<ExtArgs> | null;
    include?: Prisma.DashboardTileInclude<ExtArgs> | null;
};
