import { Resource } from './resource';

export class Schedule extends Resource {
  scheduleDate: Date;
  active: boolean;
  visible: boolean;
}
