import { AbsenceRecord } from './../absence-record';
import { Serializer } from './serializer';

export class AbsenceRecordSerializer implements Serializer {
  fromJson(json: any): AbsenceRecord {
    const record = new AbsenceRecord();
    record.id = json.id;
    record.employee = json.employee;
    record.workDate = json.workDate;
    return record;
  }

  toJson(record: AbsenceRecord): any {
    return {
      id: record.id,
      employee: record.employee,
      workDate: record.workDate
    };
  }
}
