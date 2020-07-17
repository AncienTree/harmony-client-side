import { Resource } from './resource';

export class Schedule extends Resource {
  scheduleDate: Date;
  active: boolean;
  visible: boolean;
  dayOffs: DayOff[];
  rbh: number;
}

interface DayOff {
  id: number;
  date: string;
  info: string;
}

