export const CAPABILITY_KEY = 'requiresCapability';

export interface RequiredCapability {
  functionCode: string;
  level: 'INITIATE' | 'APPROVE' | 'VIEW';
}

// Route-level authorization declaration only — resolves through the SAME
// DelegationService.hasCapability() the services already use (CLAUDE.md
// Stack Decisions item 3: "one resolver, two enforcement points, zero
// duplicated rules"). Amount-tiered/maker-checker decisions stay in
// WorkflowEngineService; this only answers "may this user touch this
// endpoint at all."
//
// STACKABLE (invariant 70b discovery, CHECK24): multiple @RequiresCapability
// calls on the SAME handler are meant to be OR'd -- dozens of existing
// routes stack two (e.g. FundAccountingController.approveProductSetup:
// "either a CIO or an MD_CEO can reach the route") specifically to let
// either step's approver hit a shared "approve next step" endpoint. Plain
// SetMetadata(CAPABILITY_KEY, ...) cannot support that: Reflect.
// defineMetadata with the same key OVERWRITES on each call, so only the
// LAST-applied decorator (the topmost one in source, since method
// decorators apply bottom-up) ever survived -- meaning MD_CEO was silently
// 403'd off that route by CapabilityGuard before ever reaching
// WorkflowEngineService's own correct per-step check. Fixed by accumulating
// into an array read+appended off the SAME descriptor.value across stacked
// applications; CapabilityGuard now ORs across every entry. A single
// @RequiresCapability call is unaffected (array of length 1).
export const RequiresCapability = (functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW') =>
  (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const existing: RequiredCapability[] = Reflect.getMetadata(CAPABILITY_KEY, descriptor.value) ?? [];
    Reflect.defineMetadata(CAPABILITY_KEY, [...existing, { functionCode, level }], descriptor.value);
    return descriptor;
  };
