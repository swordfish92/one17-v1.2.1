export class CalendarError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalendarError';
  }
}

export interface CreatePersonalEntryInput {
  title: string;
  description?: string;
  startsAt: Date;
  endsAt?: Date;
  reminderLeadMinutes?: number;
}

export interface UpdatePersonalEntryInput {
  title?: string;
  description?: string;
  startsAt?: Date;
  endsAt?: Date;
  reminderLeadMinutes?: number;
}

export interface CreateMeetingInput {
  title: string;
  description?: string;
  startsAt: Date;
  endsAt?: Date;
  attendeeUserIds: string[];
  reminderLeadMinutes?: number;
}

export interface BusyBlock {
  startsAt: Date;
  endsAt: Date;
}
