import { Serializer } from './serializer';
import { Schedule } from '../schedule';


export class ScheduleSerializer implements Serializer {
  fromJson(json: any): Schedule {
    const schedule = new Schedule();
    schedule.id = json.id;
    schedule.scheduleDate = json.scheduleDate;
    schedule.active = json.active;
    schedule.visible = json.visible;
    schedule.dayOffs = json.dayOffs;
    schedule.rbh = json.rbh;
    return schedule;
  }

  toJson(schedule: Schedule): any {
    return {
      id: schedule.id,
      scheduleDate: schedule.scheduleDate,
      active: schedule.active,
      visible: schedule.visible,
      dayOffs: schedule.dayOffs,
      rbh: schedule.rbh
    };
  }
}
