import { Serializer } from './serializer';
import { EmployeeDetails } from '../employee-details';

export class EmployeeDetailsSerializer implements Serializer {
  fromJson(json: any): EmployeeDetails {
    const employeeDetails = new EmployeeDetails();
    employeeDetails.id = json.id;
    employeeDetails.ltLogin = json.firstName;
    employeeDetails.ltId = json.lastName;
    employeeDetails.crmLogin = json.pesel;
    employeeDetails.crmAccountExpirationDate = json.sex;
    employeeDetails.userSection = json.birthday;
    employeeDetails.userLine = json.email;
    employeeDetails.fte = json.position;
    employeeDetails.fteStart = json.contractPosition;
    employeeDetails.goal1 = json.workStatus;
    employeeDetails.goal2 = json.contractType;
    employeeDetails.goal3 = json.basicUnit;
    employeeDetails.goal4 = json.unit;
    employeeDetails.goal5 = json.unit;

    return employeeDetails;
  }

  toJson(employeeDetails: EmployeeDetails): any {
    return {
      id: employeeDetails.id,
      ltLogin: employeeDetails.ltLogin,
      ltId: employeeDetails.ltId,
      crmLogin: employeeDetails.crmLogin,
      crmAccountExpirationDate: employeeDetails.crmAccountExpirationDate,
      userSection: employeeDetails.userSection,
      userLine: employeeDetails.userLine,
      fte: employeeDetails.fte,
      fteStart: employeeDetails.fteStart,
      goal1: employeeDetails.goal1,
      goal2: employeeDetails.goal2,
      goal3: employeeDetails.goal3,
      goal4: employeeDetails.goal4,
      goal5: employeeDetails.goal5
    };
  }
}
