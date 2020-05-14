import { Serializer } from './serializer';
import { EmployeeLeave } from '../employee-leave';

export class EmployeeLeaveSerializer implements Serializer {
  fromJson(json: any): EmployeeLeave {
    const employeeLeave = new EmployeeLeave();
    employeeLeave.id = json.id;
    employeeLeave.total = json.total;
    employeeLeave.normal = json.normal;
    employeeLeave.uz = json.uz;
    employeeLeave.additional = json.additional;
    employeeLeave.pastYears = json.pastYears;
    return employeeLeave;
  }

  toJson(employeeLeave: EmployeeLeave): any {
    return {
      id: employeeLeave.id,
      total: employeeLeave.total,
      normal: employeeLeave.normal,
      uz: employeeLeave.uz,
      additional: employeeLeave.additional,
      pastYears: employeeLeave.pastYears,
    };
  }
}
