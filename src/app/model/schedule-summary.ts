import { Resource } from './resource';
import { ScheduleRecord } from './schedule-record';

export class ScheduleSummary extends Resource {
  simpleEmployee: SimpleEmployee;
  scheduleRecords: ScheduleRecord[];
  scheduleDate: Date;
}

interface SimpleEmployee {
  id: number;
  fullName: string;
  position: string;
  workStatus: string;
}
