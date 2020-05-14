import { Serializer } from './serializer';
import { EmployeeInfo } from '../employee-info';

export class EmployeeInfoSerializer implements Serializer {
  fromJson(json: any): EmployeeInfo {
    const employeeInfo = new EmployeeInfo();
    employeeInfo.id = json.id;
    employeeInfo.agreement = json.agreement;
    employeeInfo.ppk = json.ppk;
    employeeInfo.headphones = json.headphones;
    employeeInfo.locker = json.locker;
    employeeInfo.idCard = json.idCard;
    employeeInfo.parkingCard = json.parkingCard;
    employeeInfo.info1 = json.info1;
    employeeInfo.info2 = json.info2;
    employeeInfo.info3 = json.info3;
    employeeInfo.info4 = json.info4;
    return employeeInfo;
  }

  toJson(employeeInfo: EmployeeInfo): any {
    return {
      id: employeeInfo.id,
      agreement: employeeInfo.agreement,
      ppk: employeeInfo.ppk,
      headphones: employeeInfo.headphones,
      locker: employeeInfo.locker,
      idCard: employeeInfo.idCard,
      parkingCard: employeeInfo.parkingCard,
      info1: employeeInfo.info1,
      info2: employeeInfo.info2,
      info3: employeeInfo.info3,
      info4: employeeInfo.info4,
    };
  }
}
