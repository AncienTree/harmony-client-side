import { Serializer } from './serializer';
import { Schedule } from '../schedule';


export class ScheduleSerializer implements Serializer {
  fromJson(json: any): Schedule {
    const schedule = new Schedule();
    schedule.id = json.id;
    schedule.scheduleDate = json.scheduleDate;
    schedule.active = json.active;
    schedule.visible = json.visible;
    schedule.dayOff = json.dayOff;
    schedule.rbh = json.rbh;
    return schedule;
  }

  toJson(schedule: Schedule): any {
    return {
      id: schedule.id,
      scheduleDate: schedule.scheduleDate,
      active: schedule.active,
      visible: schedule.visible,
      dayOff: schedule.dayOff,
      rbh: schedule.rbh
    };
  }
}
