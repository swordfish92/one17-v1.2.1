export interface ProposeRiskAppetiteMatrixVersionInput {
  proposedByUserId: string;
  // Clone an existing version's categories as the starting point for the new
  // proposal (e.g. the seeded v1 DRAFT) — a Board revision amends thresholds,
  // it doesn't usually invent a category list from scratch.
  cloneFromVersionId?: string;
}

export interface UpdateCategoryThresholdsInput {
  matrixVersionId: string;
  sortOrder: number;
  greenThreshold?: number;
  amberThreshold?: number;
  redThreshold?: number;
  actorUserId: string;
}

export interface ApproveRiskAppetiteMatrixVersionInput {
  workflowInstanceId: string;
  approverUserId: string;
  boardResolutionRef: string;
}

// AMD-12 rule 2: "the ERM module cannot arm live RAG statuses without an
// approved appetite matrix version." getActiveMatrix() returns this sentinel
// — never the DRAFT content dressed up as live — when no version has been
// approved yet (UAT-AMD-12: "ERM RAG shows AWAITING APPROVED MATRIX ... not
// fake green, before appetite version approval").
export type ActiveRiskAppetiteMatrixResult =
  | { status: 'AWAITING_APPROVED_MATRIX' }
  | {
      status: 'ACTIVE';
      version: number;
      effectiveFrom: Date | null;
      categories: {
        riskCategory: string;
        appetiteStatement: string | null;
        direction: string;
        isZeroTolerance: boolean;
        greenThreshold: string | null;
        amberThreshold: string | null;
        redThreshold: string | null;
      }[];
    };

export interface ApproveRiskRegisterEntryInput {
  id: string;
  approverUserId: string;
  boardResolutionRef?: string;
}

export class RiskLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RiskLifecycleError';
  }
}
