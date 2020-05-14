import { Serializer } from './serializer';
import { EmployeeDetails } from '../employee-details';

export class EmployeeDetailsSerializer implements Serializer {
  fromJson(json: any): EmployeeDetails {
    const employeeDetails = new EmployeeDetails();
    employeeDetails.id = json.id;
    employeeDetails.ltLogin = json.ltLogin;
    employeeDetails.ltId = json.ltId;
    employeeDetails.crmLogin = json.crmLogin;
    employeeDetails.crmAccountExpirationDate = json.crmAccountExpirationDate;
    employeeDetails.userSection = json.userSection;
    employeeDetails.userLine = json.userLine;
    employeeDetails.fte = json.fte;
    employeeDetails.fteStart = json.fteStart;
    employeeDetails.goal1 = json.goal1;
    employeeDetails.goal2 = json.goal2;
    employeeDetails.goal3 = json.goal3;
    employeeDetails.goal4 = json.goal4;
    employeeDetails.goal5 = json.goal5;

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
