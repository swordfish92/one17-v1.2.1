import { CalendarService } from '../calendar/calendar.service';
export declare class CalendarFeedController {
    private readonly calendar;
    constructor(calendar: CalendarService);
    getFeed(token: string): Promise<string>;
}
