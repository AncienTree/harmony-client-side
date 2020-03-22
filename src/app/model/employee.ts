import { Resource } from './resource';

export class Employee extends Resource {
  firstName: string;
  lastName: string;
  pesel: string;
  sex: string;
  birthday: Date;
  email: string;
  position: string;
  contractPosition: string;
  workStatus: string;
  contractType: string;
  basicUnit: string;
  unit: string;
  startWorkDate: Date;
  endWorkDate: Date;
  startContractDate: Date;
  endContractDate: Date;
}
