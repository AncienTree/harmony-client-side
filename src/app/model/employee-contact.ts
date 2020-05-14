import { Resource } from './resource';

export class EmployeeContact extends Resource {
  address: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  contactPhoneNumber: string;
  contactName: string;
}
