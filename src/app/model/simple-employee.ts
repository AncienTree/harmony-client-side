import { Resource } from './resource';

export class SimpleEmployee extends Resource {
  fullName: string;
  position: string;
  workStatus: string;
  etat: number;
  startWorkDate: string;
  endWorkDate: string;
  userSection: string;
  userLine: string;
  fte: number;
  fteStart: number;
}
