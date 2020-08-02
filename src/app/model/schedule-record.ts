import { Resource } from './resource';

export class ScheduleRecord extends Resource {
  employee: number;
  workDate: string;
  startWork: string;
  endWork: string;
  status: string;
  types: string;
}
