import { Serializer } from './serializer';
import { ScheduleRecord } from '../schedule-record';


export class ScheduleRecordSerializer implements Serializer {
  fromJson(json: any): ScheduleRecord {
    const schedule = new ScheduleRecord();
    schedule.id = json.id;
    schedule.employee = json.employee;
    schedule.workDate = json.workDate;
    schedule.startWork = json.startWork;
    schedule.endWork = json.endWork;
    schedule.status = json.status;
    schedule.type = json.type;
    schedule.update = json.update;
    return schedule;
  }

  toJson(schedule: ScheduleRecord): any {
    return {
      id: schedule.id,
      employee: schedule.employee,
      workDate: schedule.workDate,
      startWork: schedule.startWork,
      endWork: schedule.endWork,
      status: schedule.status,
      type: schedule.type,
      update: schedule.update,
    };
  }
}
