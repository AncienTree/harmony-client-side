import { Resource } from './resource';
import { ScheduleRecord } from './schedule-record';
import { SimpleEmployee } from './simple-employee';

export class ScheduleSummary extends Resource {
  simpleEmployee: SimpleEmployee;
  scheduleRecords: ScheduleRecord[];
  scheduleDate: Date;
}
