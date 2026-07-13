export class BoardCalendarError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BoardCalendarError';
  }
}

// Invariant 37(c)(iii): committeeTag is free text (null = Full-Board) —
// same convention as BoardDirective (no Committee registry exists).
export interface CreateBoardCalendarEventInput {
  title: string;
  description?: string;
  committeeTag?: string;
  startsAt: Date;
  endsAt?: Date;
}

// Invariant 55(b): "REPORT/PRESENTATION SUBMISSION workflow (CEO/MD submits
// packs against calendar items; CS tracks receipt/completeness)."
export interface SubmitReportPackInput {
  calendarEventId: string;
  title: string;
  fileReference: string;
}
