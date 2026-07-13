import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AuthPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$AuthPolicyPayload>;
export type AggregateAuthPolicy = {
    _count: AuthPolicyCountAggregateOutputType | null;
    _avg: AuthPolicyAvgAggregateOutputType | null;
    _sum: AuthPolicySumAggregateOutputType | null;
    _min: AuthPolicyMinAggregateOutputType | null;
    _max: AuthPolicyMaxAggregateOutputType | null;
};
export type AuthPolicyAvgAggregateOutputType = {
    id: number | null;
    maxFailedAttempts: number | null;
    lockoutMinutes: number | null;
    sessionTtlMinutes: number | null;
    minPasswordLength: number | null;
};
export type AuthPolicySumAggregateOutputType = {
    id: number | null;
    maxFailedAttempts: number | null;
    lockoutMinutes: number | null;
    sessionTtlMinutes: number | null;
    minPasswordLength: number | null;
};
export type AuthPolicyMinAggregateOutputType = {
    id: number | null;
    maxFailedAttempts: number | null;
    lockoutMinutes: number | null;
    sessionTtlMinutes: number | null;
    minPasswordLength: number | null;
    mfaRequired: boolean | null;
    updatedAt: Date | null;
};
export type AuthPolicyMaxAggregateOutputType = {
    id: number | null;
    maxFailedAttempts: number | null;
    lockoutMinutes: number | null;
    sessionTtlMinutes: number | null;
    minPasswordLength: number | null;
    mfaRequired: boolean | null;
    updatedAt: Date | null;
};
export type AuthPolicyCountAggregateOutputType = {
    id: number;
    maxFailedAttempts: number;
    lockoutMinutes: number;
    sessionTtlMinutes: number;
    minPasswordLength: number;
    mfaRequired: number;
    updatedAt: number;
    _all: number;
};
export type AuthPolicyAvgAggregateInputType = {
    id?: true;
    maxFailedAttempts?: true;
    lockoutMinutes?: true;
    sessionTtlMinutes?: true;
    minPasswordLength?: true;
};
export type AuthPolicySumAggregateInputType = {
    id?: true;
    maxFailedAttempts?: true;
    lockoutMinutes?: true;
    sessionTtlMinutes?: true;
    minPasswordLength?: true;
};
export type AuthPolicyMinAggregateInputType = {
    id?: true;
    maxFailedAttempts?: true;
    lockoutMinutes?: true;
    sessionTtlMinutes?: true;
    minPasswordLength?: true;
    mfaRequired?: true;
    updatedAt?: true;
};
export type AuthPolicyMaxAggregateInputType = {
    id?: true;
    maxFailedAttempts?: true;
    lockoutMinutes?: true;
    sessionTtlMinutes?: true;
    minPasswordLength?: true;
    mfaRequired?: true;
    updatedAt?: true;
};
export type AuthPolicyCountAggregateInputType = {
    id?: true;
    maxFailedAttempts?: true;
    lockoutMinutes?: true;
    sessionTtlMinutes?: true;
    minPasswordLength?: true;
    mfaRequired?: true;
    updatedAt?: true;
    _all?: true;
};
export type AuthPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuthPolicyWhereInput;
    orderBy?: Prisma.AuthPolicyOrderByWithRelationInput | Prisma.AuthPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AuthPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuthPolicyCountAggregateInputType;
    _avg?: AuthPolicyAvgAggregateInputType;
    _sum?: AuthPolicySumAggregateInputType;
    _min?: AuthPolicyMinAggregateInputType;
    _max?: AuthPolicyMaxAggregateInputType;
};
export type GetAuthPolicyAggregateType<T extends AuthPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuthPolicy[P]> : Prisma.GetScalarType<T[P], AggregateAuthPolicy[P]>;
};
export type AuthPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuthPolicyWhereInput;
    orderBy?: Prisma.AuthPolicyOrderByWithAggregationInput | Prisma.AuthPolicyOrderByWithAggregationInput[];
    by: Prisma.AuthPolicyScalarFieldEnum[] | Prisma.AuthPolicyScalarFieldEnum;
    having?: Prisma.AuthPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthPolicyCountAggregateInputType | true;
    _avg?: AuthPolicyAvgAggregateInputType;
    _sum?: AuthPolicySumAggregateInputType;
    _min?: AuthPolicyMinAggregateInputType;
    _max?: AuthPolicyMaxAggregateInputType;
};
export type AuthPolicyGroupByOutputType = {
    id: number;
    maxFailedAttempts: number;
    lockoutMinutes: number;
    sessionTtlMinutes: number;
    minPasswordLength: number;
    mfaRequired: boolean;
    updatedAt: Date;
    _count: AuthPolicyCountAggregateOutputType | null;
    _avg: AuthPolicyAvgAggregateOutputType | null;
    _sum: AuthPolicySumAggregateOutputType | null;
    _min: AuthPolicyMinAggregateOutputType | null;
    _max: AuthPolicyMaxAggregateOutputType | null;
};
export type GetAuthPolicyGroupByPayload<T extends AuthPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuthPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuthPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuthPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuthPolicyGroupByOutputType[P]>;
}>>;
export type AuthPolicyWhereInput = {
    AND?: Prisma.AuthPolicyWhereInput | Prisma.AuthPolicyWhereInput[];
    OR?: Prisma.AuthPolicyWhereInput[];
    NOT?: Prisma.AuthPolicyWhereInput | Prisma.AuthPolicyWhereInput[];
    id?: Prisma.IntFilter<"AuthPolicy"> | number;
    maxFailedAttempts?: Prisma.IntFilter<"AuthPolicy"> | number;
    lockoutMinutes?: Prisma.IntFilter<"AuthPolicy"> | number;
    sessionTtlMinutes?: Prisma.IntFilter<"AuthPolicy"> | number;
    minPasswordLength?: Prisma.IntFilter<"AuthPolicy"> | number;
    mfaRequired?: Prisma.BoolFilter<"AuthPolicy"> | boolean;
    updatedAt?: Prisma.DateTimeFilter<"AuthPolicy"> | Date | string;
};
export type AuthPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    maxFailedAttempts?: Prisma.SortOrder;
    lockoutMinutes?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    minPasswordLength?: Prisma.SortOrder;
    mfaRequired?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AuthPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AuthPolicyWhereInput | Prisma.AuthPolicyWhereInput[];
    OR?: Prisma.AuthPolicyWhereInput[];
    NOT?: Prisma.AuthPolicyWhereInput | Prisma.AuthPolicyWhereInput[];
    maxFailedAttempts?: Prisma.IntFilter<"AuthPolicy"> | number;
    lockoutMinutes?: Prisma.IntFilter<"AuthPolicy"> | number;
    sessionTtlMinutes?: Prisma.IntFilter<"AuthPolicy"> | number;
    minPasswordLength?: Prisma.IntFilter<"AuthPolicy"> | number;
    mfaRequired?: Prisma.BoolFilter<"AuthPolicy"> | boolean;
    updatedAt?: Prisma.DateTimeFilter<"AuthPolicy"> | Date | string;
}, "id">;
export type AuthPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    maxFailedAttempts?: Prisma.SortOrder;
    lockoutMinutes?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    minPasswordLength?: Prisma.SortOrder;
    mfaRequired?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AuthPolicyCountOrderByAggregateInput;
    _avg?: Prisma.AuthPolicyAvgOrderByAggregateInput;
    _max?: Prisma.AuthPolicyMaxOrderByAggregateInput;
    _min?: Prisma.AuthPolicyMinOrderByAggregateInput;
    _sum?: Prisma.AuthPolicySumOrderByAggregateInput;
};
export type AuthPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuthPolicyScalarWhereWithAggregatesInput | Prisma.AuthPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuthPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuthPolicyScalarWhereWithAggregatesInput | Prisma.AuthPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AuthPolicy"> | number;
    maxFailedAttempts?: Prisma.IntWithAggregatesFilter<"AuthPolicy"> | number;
    lockoutMinutes?: Prisma.IntWithAggregatesFilter<"AuthPolicy"> | number;
    sessionTtlMinutes?: Prisma.IntWithAggregatesFilter<"AuthPolicy"> | number;
    minPasswordLength?: Prisma.IntWithAggregatesFilter<"AuthPolicy"> | number;
    mfaRequired?: Prisma.BoolWithAggregatesFilter<"AuthPolicy"> | boolean;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AuthPolicy"> | Date | string;
};
export type AuthPolicyCreateInput = {
    id?: number;
    maxFailedAttempts?: number;
    lockoutMinutes?: number;
    sessionTtlMinutes?: number;
    minPasswordLength?: number;
    mfaRequired?: boolean;
    updatedAt?: Date | string;
};
export type AuthPolicyUncheckedCreateInput = {
    id?: number;
    maxFailedAttempts?: number;
    lockoutMinutes?: number;
    sessionTtlMinutes?: number;
    minPasswordLength?: number;
    mfaRequired?: boolean;
    updatedAt?: Date | string;
};
export type AuthPolicyUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    maxFailedAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockoutMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionTtlMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    minPasswordLength?: Prisma.IntFieldUpdateOperationsInput | number;
    mfaRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuthPolicyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    maxFailedAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockoutMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionTtlMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    minPasswordLength?: Prisma.IntFieldUpdateOperationsInput | number;
    mfaRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuthPolicyCreateManyInput = {
    id?: number;
    maxFailedAttempts?: number;
    lockoutMinutes?: number;
    sessionTtlMinutes?: number;
    minPasswordLength?: number;
    mfaRequired?: boolean;
    updatedAt?: Date | string;
};
export type AuthPolicyUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    maxFailedAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockoutMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionTtlMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    minPasswordLength?: Prisma.IntFieldUpdateOperationsInput | number;
    mfaRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuthPolicyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    maxFailedAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lockoutMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    sessionTtlMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    minPasswordLength?: Prisma.IntFieldUpdateOperationsInput | number;
    mfaRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuthPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    maxFailedAttempts?: Prisma.SortOrder;
    lockoutMinutes?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    minPasswordLength?: Prisma.SortOrder;
    mfaRequired?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AuthPolicyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    maxFailedAttempts?: Prisma.SortOrder;
    lockoutMinutes?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    minPasswordLength?: Prisma.SortOrder;
};
export type AuthPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    maxFailedAttempts?: Prisma.SortOrder;
    lockoutMinutes?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    minPasswordLength?: Prisma.SortOrder;
    mfaRequired?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AuthPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    maxFailedAttempts?: Prisma.SortOrder;
    lockoutMinutes?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    minPasswordLength?: Prisma.SortOrder;
    mfaRequired?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AuthPolicySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    maxFailedAttempts?: Prisma.SortOrder;
    lockoutMinutes?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    minPasswordLength?: Prisma.SortOrder;
};
export type AuthPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    maxFailedAttempts?: boolean;
    lockoutMinutes?: boolean;
    sessionTtlMinutes?: boolean;
    minPasswordLength?: boolean;
    mfaRequired?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["authPolicy"]>;
export type AuthPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    maxFailedAttempts?: boolean;
    lockoutMinutes?: boolean;
    sessionTtlMinutes?: boolean;
    minPasswordLength?: boolean;
    mfaRequired?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["authPolicy"]>;
export type AuthPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    maxFailedAttempts?: boolean;
    lockoutMinutes?: boolean;
    sessionTtlMinutes?: boolean;
    minPasswordLength?: boolean;
    mfaRequired?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["authPolicy"]>;
export type AuthPolicySelectScalar = {
    id?: boolean;
    maxFailedAttempts?: boolean;
    lockoutMinutes?: boolean;
    sessionTtlMinutes?: boolean;
    minPasswordLength?: boolean;
    mfaRequired?: boolean;
    updatedAt?: boolean;
};
export type AuthPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "maxFailedAttempts" | "lockoutMinutes" | "sessionTtlMinutes" | "minPasswordLength" | "mfaRequired" | "updatedAt", ExtArgs["result"]["authPolicy"]>;
export type $AuthPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuthPolicy";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        maxFailedAttempts: number;
        lockoutMinutes: number;
        sessionTtlMinutes: number;
        minPasswordLength: number;
        mfaRequired: boolean;
        updatedAt: Date;
    }, ExtArgs["result"]["authPolicy"]>;
    composites: {};
};
export type AuthPolicyGetPayload<S extends boolean | null | undefined | AuthPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload, S>;
export type AuthPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuthPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthPolicyCountAggregateInputType | true;
};
export interface AuthPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuthPolicy'];
        meta: {
            name: 'AuthPolicy';
        };
    };
    findUnique<T extends AuthPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, AuthPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuthPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuthPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuthPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, AuthPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuthPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuthPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuthPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, AuthPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuthPolicyCreateArgs>(args: Prisma.SelectSubset<T, AuthPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuthPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, AuthPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuthPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuthPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuthPolicyDeleteArgs>(args: Prisma.SelectSubset<T, AuthPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuthPolicyUpdateArgs>(args: Prisma.SelectSubset<T, AuthPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuthPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuthPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuthPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, AuthPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuthPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuthPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuthPolicyUpsertArgs>(args: Prisma.SelectSubset<T, AuthPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__AuthPolicyClient<runtime.Types.Result.GetResult<Prisma.$AuthPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuthPolicyCountArgs>(args?: Prisma.Subset<T, AuthPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuthPolicyCountAggregateOutputType> : number>;
    aggregate<T extends AuthPolicyAggregateArgs>(args: Prisma.Subset<T, AuthPolicyAggregateArgs>): Prisma.PrismaPromise<GetAuthPolicyAggregateType<T>>;
    groupBy<T extends AuthPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuthPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: AuthPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuthPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuthPolicyFieldRefs;
}
export interface Prisma__AuthPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuthPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"AuthPolicy", 'Int'>;
    readonly maxFailedAttempts: Prisma.FieldRef<"AuthPolicy", 'Int'>;
    readonly lockoutMinutes: Prisma.FieldRef<"AuthPolicy", 'Int'>;
    readonly sessionTtlMinutes: Prisma.FieldRef<"AuthPolicy", 'Int'>;
    readonly minPasswordLength: Prisma.FieldRef<"AuthPolicy", 'Int'>;
    readonly mfaRequired: Prisma.FieldRef<"AuthPolicy", 'Boolean'>;
    readonly updatedAt: Prisma.FieldRef<"AuthPolicy", 'DateTime'>;
}
export type AuthPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    where: Prisma.AuthPolicyWhereUniqueInput;
};
export type AuthPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    where: Prisma.AuthPolicyWhereUniqueInput;
};
export type AuthPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    where?: Prisma.AuthPolicyWhereInput;
    orderBy?: Prisma.AuthPolicyOrderByWithRelationInput | Prisma.AuthPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AuthPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuthPolicyScalarFieldEnum | Prisma.AuthPolicyScalarFieldEnum[];
};
export type AuthPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    where?: Prisma.AuthPolicyWhereInput;
    orderBy?: Prisma.AuthPolicyOrderByWithRelationInput | Prisma.AuthPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AuthPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuthPolicyScalarFieldEnum | Prisma.AuthPolicyScalarFieldEnum[];
};
export type AuthPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    where?: Prisma.AuthPolicyWhereInput;
    orderBy?: Prisma.AuthPolicyOrderByWithRelationInput | Prisma.AuthPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AuthPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuthPolicyScalarFieldEnum | Prisma.AuthPolicyScalarFieldEnum[];
};
export type AuthPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuthPolicyCreateInput, Prisma.AuthPolicyUncheckedCreateInput>;
};
export type AuthPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuthPolicyCreateManyInput | Prisma.AuthPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuthPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    data: Prisma.AuthPolicyCreateManyInput | Prisma.AuthPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuthPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuthPolicyUpdateInput, Prisma.AuthPolicyUncheckedUpdateInput>;
    where: Prisma.AuthPolicyWhereUniqueInput;
};
export type AuthPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuthPolicyUpdateManyMutationInput, Prisma.AuthPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AuthPolicyWhereInput;
    limit?: number;
};
export type AuthPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuthPolicyUpdateManyMutationInput, Prisma.AuthPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AuthPolicyWhereInput;
    limit?: number;
};
export type AuthPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    where: Prisma.AuthPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthPolicyCreateInput, Prisma.AuthPolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuthPolicyUpdateInput, Prisma.AuthPolicyUncheckedUpdateInput>;
};
export type AuthPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
    where: Prisma.AuthPolicyWhereUniqueInput;
};
export type AuthPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuthPolicyWhereInput;
    limit?: number;
};
export type AuthPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuthPolicySelect<ExtArgs> | null;
    omit?: Prisma.AuthPolicyOmit<ExtArgs> | null;
};
