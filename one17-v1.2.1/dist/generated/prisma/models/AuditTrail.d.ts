import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AuditTrailModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditTrailPayload>;
export type AggregateAuditTrail = {
    _count: AuditTrailCountAggregateOutputType | null;
    _avg: AuditTrailAvgAggregateOutputType | null;
    _sum: AuditTrailSumAggregateOutputType | null;
    _min: AuditTrailMinAggregateOutputType | null;
    _max: AuditTrailMaxAggregateOutputType | null;
};
export type AuditTrailAvgAggregateOutputType = {
    id: number | null;
};
export type AuditTrailSumAggregateOutputType = {
    id: bigint | null;
};
export type AuditTrailMinAggregateOutputType = {
    id: bigint | null;
    occurredAt: Date | null;
    actorUserId: string | null;
    actorRole: string | null;
    action: $Enums.AuditAction | null;
    entityType: string | null;
    entityId: string | null;
    workflowStep: string | null;
    ipAddress: string | null;
    sessionId: string | null;
    requestId: string | null;
    previousHash: string | null;
    tamperHash: string | null;
};
export type AuditTrailMaxAggregateOutputType = {
    id: bigint | null;
    occurredAt: Date | null;
    actorUserId: string | null;
    actorRole: string | null;
    action: $Enums.AuditAction | null;
    entityType: string | null;
    entityId: string | null;
    workflowStep: string | null;
    ipAddress: string | null;
    sessionId: string | null;
    requestId: string | null;
    previousHash: string | null;
    tamperHash: string | null;
};
export type AuditTrailCountAggregateOutputType = {
    id: number;
    occurredAt: number;
    actorUserId: number;
    actorRole: number;
    action: number;
    entityType: number;
    entityId: number;
    workflowStep: number;
    before: number;
    after: number;
    ipAddress: number;
    sessionId: number;
    requestId: number;
    previousHash: number;
    tamperHash: number;
    _all: number;
};
export type AuditTrailAvgAggregateInputType = {
    id?: true;
};
export type AuditTrailSumAggregateInputType = {
    id?: true;
};
export type AuditTrailMinAggregateInputType = {
    id?: true;
    occurredAt?: true;
    actorUserId?: true;
    actorRole?: true;
    action?: true;
    entityType?: true;
    entityId?: true;
    workflowStep?: true;
    ipAddress?: true;
    sessionId?: true;
    requestId?: true;
    previousHash?: true;
    tamperHash?: true;
};
export type AuditTrailMaxAggregateInputType = {
    id?: true;
    occurredAt?: true;
    actorUserId?: true;
    actorRole?: true;
    action?: true;
    entityType?: true;
    entityId?: true;
    workflowStep?: true;
    ipAddress?: true;
    sessionId?: true;
    requestId?: true;
    previousHash?: true;
    tamperHash?: true;
};
export type AuditTrailCountAggregateInputType = {
    id?: true;
    occurredAt?: true;
    actorUserId?: true;
    actorRole?: true;
    action?: true;
    entityType?: true;
    entityId?: true;
    workflowStep?: true;
    before?: true;
    after?: true;
    ipAddress?: true;
    sessionId?: true;
    requestId?: true;
    previousHash?: true;
    tamperHash?: true;
    _all?: true;
};
export type AuditTrailAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTrailWhereInput;
    orderBy?: Prisma.AuditTrailOrderByWithRelationInput | Prisma.AuditTrailOrderByWithRelationInput[];
    cursor?: Prisma.AuditTrailWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditTrailCountAggregateInputType;
    _avg?: AuditTrailAvgAggregateInputType;
    _sum?: AuditTrailSumAggregateInputType;
    _min?: AuditTrailMinAggregateInputType;
    _max?: AuditTrailMaxAggregateInputType;
};
export type GetAuditTrailAggregateType<T extends AuditTrailAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditTrail]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditTrail[P]> : Prisma.GetScalarType<T[P], AggregateAuditTrail[P]>;
};
export type AuditTrailGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTrailWhereInput;
    orderBy?: Prisma.AuditTrailOrderByWithAggregationInput | Prisma.AuditTrailOrderByWithAggregationInput[];
    by: Prisma.AuditTrailScalarFieldEnum[] | Prisma.AuditTrailScalarFieldEnum;
    having?: Prisma.AuditTrailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditTrailCountAggregateInputType | true;
    _avg?: AuditTrailAvgAggregateInputType;
    _sum?: AuditTrailSumAggregateInputType;
    _min?: AuditTrailMinAggregateInputType;
    _max?: AuditTrailMaxAggregateInputType;
};
export type AuditTrailGroupByOutputType = {
    id: bigint;
    occurredAt: Date;
    actorUserId: string | null;
    actorRole: string | null;
    action: $Enums.AuditAction;
    entityType: string;
    entityId: string;
    workflowStep: string | null;
    before: runtime.JsonValue | null;
    after: runtime.JsonValue | null;
    ipAddress: string | null;
    sessionId: string | null;
    requestId: string | null;
    previousHash: string | null;
    tamperHash: string;
    _count: AuditTrailCountAggregateOutputType | null;
    _avg: AuditTrailAvgAggregateOutputType | null;
    _sum: AuditTrailSumAggregateOutputType | null;
    _min: AuditTrailMinAggregateOutputType | null;
    _max: AuditTrailMaxAggregateOutputType | null;
};
export type GetAuditTrailGroupByPayload<T extends AuditTrailGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditTrailGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditTrailGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditTrailGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditTrailGroupByOutputType[P]>;
}>>;
export type AuditTrailWhereInput = {
    AND?: Prisma.AuditTrailWhereInput | Prisma.AuditTrailWhereInput[];
    OR?: Prisma.AuditTrailWhereInput[];
    NOT?: Prisma.AuditTrailWhereInput | Prisma.AuditTrailWhereInput[];
    id?: Prisma.BigIntFilter<"AuditTrail"> | bigint | number;
    occurredAt?: Prisma.DateTimeFilter<"AuditTrail"> | Date | string;
    actorUserId?: Prisma.UuidNullableFilter<"AuditTrail"> | string | null;
    actorRole?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    action?: Prisma.EnumAuditActionFilter<"AuditTrail"> | $Enums.AuditAction;
    entityType?: Prisma.StringFilter<"AuditTrail"> | string;
    entityId?: Prisma.StringFilter<"AuditTrail"> | string;
    workflowStep?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    before?: Prisma.JsonNullableFilter<"AuditTrail">;
    after?: Prisma.JsonNullableFilter<"AuditTrail">;
    ipAddress?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    sessionId?: Prisma.UuidNullableFilter<"AuditTrail"> | string | null;
    requestId?: Prisma.UuidNullableFilter<"AuditTrail"> | string | null;
    previousHash?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    tamperHash?: Prisma.StringFilter<"AuditTrail"> | string;
};
export type AuditTrailOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actorRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    workflowStep?: Prisma.SortOrderInput | Prisma.SortOrder;
    before?: Prisma.SortOrderInput | Prisma.SortOrder;
    after?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    previousHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    tamperHash?: Prisma.SortOrder;
};
export type AuditTrailWhereUniqueInput = Prisma.AtLeast<{
    id_occurredAt?: Prisma.AuditTrailIdOccurredAtCompoundUniqueInput;
    AND?: Prisma.AuditTrailWhereInput | Prisma.AuditTrailWhereInput[];
    OR?: Prisma.AuditTrailWhereInput[];
    NOT?: Prisma.AuditTrailWhereInput | Prisma.AuditTrailWhereInput[];
    id?: Prisma.BigIntFilter<"AuditTrail"> | bigint | number;
    occurredAt?: Prisma.DateTimeFilter<"AuditTrail"> | Date | string;
    actorUserId?: Prisma.UuidNullableFilter<"AuditTrail"> | string | null;
    actorRole?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    action?: Prisma.EnumAuditActionFilter<"AuditTrail"> | $Enums.AuditAction;
    entityType?: Prisma.StringFilter<"AuditTrail"> | string;
    entityId?: Prisma.StringFilter<"AuditTrail"> | string;
    workflowStep?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    before?: Prisma.JsonNullableFilter<"AuditTrail">;
    after?: Prisma.JsonNullableFilter<"AuditTrail">;
    ipAddress?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    sessionId?: Prisma.UuidNullableFilter<"AuditTrail"> | string | null;
    requestId?: Prisma.UuidNullableFilter<"AuditTrail"> | string | null;
    previousHash?: Prisma.StringNullableFilter<"AuditTrail"> | string | null;
    tamperHash?: Prisma.StringFilter<"AuditTrail"> | string;
}, "id_occurredAt">;
export type AuditTrailOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actorRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    workflowStep?: Prisma.SortOrderInput | Prisma.SortOrder;
    before?: Prisma.SortOrderInput | Prisma.SortOrder;
    after?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    previousHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    tamperHash?: Prisma.SortOrder;
    _count?: Prisma.AuditTrailCountOrderByAggregateInput;
    _avg?: Prisma.AuditTrailAvgOrderByAggregateInput;
    _max?: Prisma.AuditTrailMaxOrderByAggregateInput;
    _min?: Prisma.AuditTrailMinOrderByAggregateInput;
    _sum?: Prisma.AuditTrailSumOrderByAggregateInput;
};
export type AuditTrailScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditTrailScalarWhereWithAggregatesInput | Prisma.AuditTrailScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditTrailScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditTrailScalarWhereWithAggregatesInput | Prisma.AuditTrailScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"AuditTrail"> | bigint | number;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"AuditTrail"> | Date | string;
    actorUserId?: Prisma.UuidNullableWithAggregatesFilter<"AuditTrail"> | string | null;
    actorRole?: Prisma.StringNullableWithAggregatesFilter<"AuditTrail"> | string | null;
    action?: Prisma.EnumAuditActionWithAggregatesFilter<"AuditTrail"> | $Enums.AuditAction;
    entityType?: Prisma.StringWithAggregatesFilter<"AuditTrail"> | string;
    entityId?: Prisma.StringWithAggregatesFilter<"AuditTrail"> | string;
    workflowStep?: Prisma.StringNullableWithAggregatesFilter<"AuditTrail"> | string | null;
    before?: Prisma.JsonNullableWithAggregatesFilter<"AuditTrail">;
    after?: Prisma.JsonNullableWithAggregatesFilter<"AuditTrail">;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"AuditTrail"> | string | null;
    sessionId?: Prisma.UuidNullableWithAggregatesFilter<"AuditTrail"> | string | null;
    requestId?: Prisma.UuidNullableWithAggregatesFilter<"AuditTrail"> | string | null;
    previousHash?: Prisma.StringNullableWithAggregatesFilter<"AuditTrail"> | string | null;
    tamperHash?: Prisma.StringWithAggregatesFilter<"AuditTrail"> | string;
};
export type AuditTrailCreateInput = {
    id?: bigint | number;
    occurredAt?: Date | string;
    actorUserId?: string | null;
    actorRole?: string | null;
    action: $Enums.AuditAction;
    entityType: string;
    entityId: string;
    workflowStep?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ipAddress?: string | null;
    sessionId?: string | null;
    requestId?: string | null;
    previousHash?: string | null;
    tamperHash: string;
};
export type AuditTrailUncheckedCreateInput = {
    id?: bigint | number;
    occurredAt?: Date | string;
    actorUserId?: string | null;
    actorRole?: string | null;
    action: $Enums.AuditAction;
    entityType: string;
    entityId: string;
    workflowStep?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ipAddress?: string | null;
    sessionId?: string | null;
    requestId?: string | null;
    previousHash?: string | null;
    tamperHash: string;
};
export type AuditTrailUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowStep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previousHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamperHash?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditTrailUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowStep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previousHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamperHash?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditTrailCreateManyInput = {
    id?: bigint | number;
    occurredAt?: Date | string;
    actorUserId?: string | null;
    actorRole?: string | null;
    action: $Enums.AuditAction;
    entityType: string;
    entityId: string;
    workflowStep?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ipAddress?: string | null;
    sessionId?: string | null;
    requestId?: string | null;
    previousHash?: string | null;
    tamperHash: string;
};
export type AuditTrailUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowStep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previousHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamperHash?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditTrailUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowStep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previousHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamperHash?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditTrailIdOccurredAtCompoundUniqueInput = {
    id: bigint | number;
    occurredAt: Date | string;
};
export type AuditTrailCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    actorRole?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    workflowStep?: Prisma.SortOrder;
    before?: Prisma.SortOrder;
    after?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    previousHash?: Prisma.SortOrder;
    tamperHash?: Prisma.SortOrder;
};
export type AuditTrailAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AuditTrailMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    actorRole?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    workflowStep?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    previousHash?: Prisma.SortOrder;
    tamperHash?: Prisma.SortOrder;
};
export type AuditTrailMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    actorRole?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    workflowStep?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    previousHash?: Prisma.SortOrder;
    tamperHash?: Prisma.SortOrder;
};
export type AuditTrailSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type AuditTrailSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    occurredAt?: boolean;
    actorUserId?: boolean;
    actorRole?: boolean;
    action?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    workflowStep?: boolean;
    before?: boolean;
    after?: boolean;
    ipAddress?: boolean;
    sessionId?: boolean;
    requestId?: boolean;
    previousHash?: boolean;
    tamperHash?: boolean;
}, ExtArgs["result"]["auditTrail"]>;
export type AuditTrailSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    occurredAt?: boolean;
    actorUserId?: boolean;
    actorRole?: boolean;
    action?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    workflowStep?: boolean;
    before?: boolean;
    after?: boolean;
    ipAddress?: boolean;
    sessionId?: boolean;
    requestId?: boolean;
    previousHash?: boolean;
    tamperHash?: boolean;
}, ExtArgs["result"]["auditTrail"]>;
export type AuditTrailSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    occurredAt?: boolean;
    actorUserId?: boolean;
    actorRole?: boolean;
    action?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    workflowStep?: boolean;
    before?: boolean;
    after?: boolean;
    ipAddress?: boolean;
    sessionId?: boolean;
    requestId?: boolean;
    previousHash?: boolean;
    tamperHash?: boolean;
}, ExtArgs["result"]["auditTrail"]>;
export type AuditTrailSelectScalar = {
    id?: boolean;
    occurredAt?: boolean;
    actorUserId?: boolean;
    actorRole?: boolean;
    action?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    workflowStep?: boolean;
    before?: boolean;
    after?: boolean;
    ipAddress?: boolean;
    sessionId?: boolean;
    requestId?: boolean;
    previousHash?: boolean;
    tamperHash?: boolean;
};
export type AuditTrailOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "occurredAt" | "actorUserId" | "actorRole" | "action" | "entityType" | "entityId" | "workflowStep" | "before" | "after" | "ipAddress" | "sessionId" | "requestId" | "previousHash" | "tamperHash", ExtArgs["result"]["auditTrail"]>;
export type $AuditTrailPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditTrail";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        occurredAt: Date;
        actorUserId: string | null;
        actorRole: string | null;
        action: $Enums.AuditAction;
        entityType: string;
        entityId: string;
        workflowStep: string | null;
        before: runtime.JsonValue | null;
        after: runtime.JsonValue | null;
        ipAddress: string | null;
        sessionId: string | null;
        requestId: string | null;
        previousHash: string | null;
        tamperHash: string;
    }, ExtArgs["result"]["auditTrail"]>;
    composites: {};
};
export type AuditTrailGetPayload<S extends boolean | null | undefined | AuditTrailDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload, S>;
export type AuditTrailCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditTrailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditTrailCountAggregateInputType | true;
};
export interface AuditTrailDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditTrail'];
        meta: {
            name: 'AuditTrail';
        };
    };
    findUnique<T extends AuditTrailFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditTrailFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditTrailFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditTrailFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditTrailFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditTrailFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditTrailFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditTrailFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditTrailFindManyArgs>(args?: Prisma.SelectSubset<T, AuditTrailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditTrailCreateArgs>(args: Prisma.SelectSubset<T, AuditTrailCreateArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditTrailCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditTrailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditTrailCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditTrailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditTrailDeleteArgs>(args: Prisma.SelectSubset<T, AuditTrailDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditTrailUpdateArgs>(args: Prisma.SelectSubset<T, AuditTrailUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditTrailDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditTrailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditTrailUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditTrailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditTrailUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditTrailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditTrailUpsertArgs>(args: Prisma.SelectSubset<T, AuditTrailUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditTrailClient<runtime.Types.Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditTrailCountArgs>(args?: Prisma.Subset<T, AuditTrailCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditTrailCountAggregateOutputType> : number>;
    aggregate<T extends AuditTrailAggregateArgs>(args: Prisma.Subset<T, AuditTrailAggregateArgs>): Prisma.PrismaPromise<GetAuditTrailAggregateType<T>>;
    groupBy<T extends AuditTrailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditTrailGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditTrailGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditTrailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditTrailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditTrailFieldRefs;
}
export interface Prisma__AuditTrailClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditTrailFieldRefs {
    readonly id: Prisma.FieldRef<"AuditTrail", 'BigInt'>;
    readonly occurredAt: Prisma.FieldRef<"AuditTrail", 'DateTime'>;
    readonly actorUserId: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly actorRole: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly action: Prisma.FieldRef<"AuditTrail", 'AuditAction'>;
    readonly entityType: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly entityId: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly workflowStep: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly before: Prisma.FieldRef<"AuditTrail", 'Json'>;
    readonly after: Prisma.FieldRef<"AuditTrail", 'Json'>;
    readonly ipAddress: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly sessionId: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly requestId: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly previousHash: Prisma.FieldRef<"AuditTrail", 'String'>;
    readonly tamperHash: Prisma.FieldRef<"AuditTrail", 'String'>;
}
export type AuditTrailFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    where: Prisma.AuditTrailWhereUniqueInput;
};
export type AuditTrailFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    where: Prisma.AuditTrailWhereUniqueInput;
};
export type AuditTrailFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    where?: Prisma.AuditTrailWhereInput;
    orderBy?: Prisma.AuditTrailOrderByWithRelationInput | Prisma.AuditTrailOrderByWithRelationInput[];
    cursor?: Prisma.AuditTrailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditTrailScalarFieldEnum | Prisma.AuditTrailScalarFieldEnum[];
};
export type AuditTrailFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    where?: Prisma.AuditTrailWhereInput;
    orderBy?: Prisma.AuditTrailOrderByWithRelationInput | Prisma.AuditTrailOrderByWithRelationInput[];
    cursor?: Prisma.AuditTrailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditTrailScalarFieldEnum | Prisma.AuditTrailScalarFieldEnum[];
};
export type AuditTrailFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    where?: Prisma.AuditTrailWhereInput;
    orderBy?: Prisma.AuditTrailOrderByWithRelationInput | Prisma.AuditTrailOrderByWithRelationInput[];
    cursor?: Prisma.AuditTrailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditTrailScalarFieldEnum | Prisma.AuditTrailScalarFieldEnum[];
};
export type AuditTrailCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditTrailCreateInput, Prisma.AuditTrailUncheckedCreateInput>;
};
export type AuditTrailCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditTrailCreateManyInput | Prisma.AuditTrailCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditTrailCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    data: Prisma.AuditTrailCreateManyInput | Prisma.AuditTrailCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditTrailUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditTrailUpdateInput, Prisma.AuditTrailUncheckedUpdateInput>;
    where: Prisma.AuditTrailWhereUniqueInput;
};
export type AuditTrailUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditTrailUpdateManyMutationInput, Prisma.AuditTrailUncheckedUpdateManyInput>;
    where?: Prisma.AuditTrailWhereInput;
    limit?: number;
};
export type AuditTrailUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditTrailUpdateManyMutationInput, Prisma.AuditTrailUncheckedUpdateManyInput>;
    where?: Prisma.AuditTrailWhereInput;
    limit?: number;
};
export type AuditTrailUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    where: Prisma.AuditTrailWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditTrailCreateInput, Prisma.AuditTrailUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditTrailUpdateInput, Prisma.AuditTrailUncheckedUpdateInput>;
};
export type AuditTrailDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
    where: Prisma.AuditTrailWhereUniqueInput;
};
export type AuditTrailDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditTrailWhereInput;
    limit?: number;
};
export type AuditTrailDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditTrailSelect<ExtArgs> | null;
    omit?: Prisma.AuditTrailOmit<ExtArgs> | null;
};
