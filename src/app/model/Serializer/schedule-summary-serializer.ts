import { Serializer } from './serializer';
import { ScheduleSummary } from '../schedule-summary';


export class ScheduleSummarySerializer implements Serializer {
  fromJson(json: any): ScheduleSummary {
    const scheduleSummary = new ScheduleSummary();
    scheduleSummary.id = json.id;
    scheduleSummary.simpleEmployee = json.simpleEmployee;
    scheduleSummary.scheduleRecords = json.scheduleRecords;
    scheduleSummary.scheduleDate = json.scheduleDate;
    return scheduleSummary;
  }

  toJson(scheduleSummary: ScheduleSummary): any {
    return {
      id: scheduleSummary.id,
      simpleEmployee: scheduleSummary.simpleEmployee,
      scheduleRecords: scheduleSummary.scheduleRecords,
      scheduleDate: scheduleSummary.scheduleDate,
    };
  }
}
