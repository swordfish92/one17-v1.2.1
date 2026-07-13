export class BoardDirectiveError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BoardDirectiveError';
  }
}

// Invariant 37(c)(ii): committeeTag is free text (null = Full-Board) — no
// Committee registry exists in this codebase; resolutionRef is the same
// free-text convention every boardResolutionRef/ssbResolutionRef field
// already uses (no backing Resolution table exists anywhere).
export interface IssueBoardDirectiveInput {
  title: string;
  description: string;
  committeeTag?: string;
  resolutionRef?: string;
  dueAt: Date;
}
