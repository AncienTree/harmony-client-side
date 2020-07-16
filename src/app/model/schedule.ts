import { Resource } from './resource';

export class Schedule extends Resource {
  scheduleDate: Date;
  active: boolean;
  visible: boolean;
  dayOff: DayOff[];
  rbh: number;
}

interface DayOff {
  id: number;
  fullName: string;
  position: string;
  workStatus: string;
}

