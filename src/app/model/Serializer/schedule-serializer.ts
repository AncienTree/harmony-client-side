import { Serializer } from './serializer';
import { Schedule } from '../schedule';


export class ScheduleSerializer implements Serializer {
  fromJson(json: any): Schedule {
    const schedule = new Schedule();
    schedule.id = json.id;
    schedule.employee = json.employee;
    schedule.workDate = json.workDate;
    schedule.startWork = json.startWork;
    schedule.endWork = json.endWork;
    schedule.status = json.status;
    schedule.type = json.type;
    return schedule;
  }

  toJson(schedule: Schedule): any {
    return {
      id: schedule.id,
      employee: schedule.employee,
      workDate: schedule.workDate,
      startWork: schedule.startWork,
      endWork: schedule.endWork,
      status: schedule.status,
      type: schedule.type,
    };
  }
}
