export class BoardMinutesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BoardMinutesError';
  }
}

// Invariant 37(c)(v): committeeTag mirrors BoardDirective's/BoardCalendarEvent's
// own free-text convention (null = Full-Board).
export interface UploadBoardMinutesInput {
  title: string;
  fileReference: string;
  committeeTag?: string;
}
