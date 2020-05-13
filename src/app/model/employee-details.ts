import { Resource } from './resource';

export class EmployeeDetails extends Resource {
  ltLogin: string;
  ltId: string;
  crmLogin: string;
  crmAccountExpirationDate: Date;
  userSection: string;
  userLine: string;
  fte: string;
  fteStart: string;
  goal1: string;
  goal2: string;
  goal3: string;
  goal4: string;
  goal5: string;
}
