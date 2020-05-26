import { Serializer } from './serializer';
import { Employee } from '../employee';

export class EmployeeSerializer implements Serializer {
  fromJson(json: any): Employee {
    const employee = new Employee();
    employee.id = json.id;
    employee.firstName = json.firstName;
    employee.lastName = json.lastName;
    employee.pesel = json.pesel;
    employee.sex = json.sex;
    employee.birthday = json.birthday;
    employee.email = json.email;
    employee.etat = json.etat;
    employee.position = json.position;
    employee.contractPosition = json.contractPosition;
    employee.workStatus = json.workStatus;
    employee.contractType = json.contractType;
    employee.basicUnit = json.basicUnit;
    employee.unit = json.unit;
    employee.startWorkDate = json.startWorkDate;
    employee.endWorkDate = json.endWorkDate;
    employee.startContractDate = json.startContractDate;
    employee.endContractDate = json.endContractDate;
    employee.created = json.created;
    return employee;
  }

  toJson(employee: Employee): any {
    return {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      pesel: employee.pesel,
      sex: employee.sex,
      birthday: employee.birthday,
      email: employee.email,
      etat: employee.etat,
      position: employee.position,
      contractPosition: employee.contractPosition,
      workStatus: employee.workStatus,
      contractType: employee.contractType,
      basicUnit: employee.basicUnit,
      unit: employee.unit,
      startWorkDate: employee.startWorkDate,
      endWorkDate: employee.endWorkDate,
      startContractDate: employee.startContractDate,
      endContractDate: employee.endContractDate,
      created: employee.created
    };
  }
}
