import { Serializer } from './serializer';
import { Schedule } from '../schedule';


export class ScheduleSerializer implements Serializer {
  fromJson(json: any): Schedule {
    const schedule = new Schedule();
    schedule.id = json.id;
    schedule.scheduleDate = json.scheduleDate;
    schedule.active = json.active;
    return schedule;
  }

  toJson(schedule: Schedule): any {
    return {
      id: schedule.id,
      scheduleDate: schedule.scheduleDate,
      active: schedule.active,
    };
  }
}
