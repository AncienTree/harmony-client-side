import { Resource } from './resource';

export class AbsenceRecord extends Resource {
  employee: number;
  workDate: string;
  status: string;
  text: string;
  lastModifiedBy: string;
}
