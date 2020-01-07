import { Resource } from './resource';
import { Time } from '@angular/common';

export class Schedule extends Resource {
  employee: number;
  workDate: Date;
  startWork: Time;
  endWork: Time;
  status: string;
  type: string;
}
