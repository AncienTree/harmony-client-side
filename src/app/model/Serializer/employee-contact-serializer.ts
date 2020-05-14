import { Serializer } from './serializer';
import { EmployeeContact } from '../employee-contact';

export class EmployeeContactSerializer implements Serializer {
  fromJson(json: any): EmployeeContact {
    const employeeContact = new EmployeeContact();
    employeeContact.id = json.id;
    employeeContact.address = json.address;
    employeeContact.city = json.city;
    employeeContact.zipCode = json.zipCode;
    employeeContact.phoneNumber = json.phoneNumber;
    employeeContact.contactPhoneNumber = json.contactPhoneNumber;
    employeeContact.contactName = json.contactName;
    return employeeContact;
  }

  toJson(employeeContact: EmployeeContact): any {
    return {
      id: employeeContact.id,
      address: employeeContact.address,
      city: employeeContact.city,
      zipCode: employeeContact.zipCode,
      phoneNumber: employeeContact.phoneNumber,
      contactPhoneNumber: employeeContact.contactPhoneNumber,
      contactName: employeeContact.contactName,
    };
  }
}
