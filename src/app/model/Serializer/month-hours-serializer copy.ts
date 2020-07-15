import { Serializer } from './serializer';
import { MonthHours } from '../month-hours';


export class MonthHoursSerializer implements Serializer {
  fromJson(json: any): MonthHours {
    const monthHours = new MonthHours();
    monthHours.id = json.id;
    monthHours.year = json.year;
    monthHours.january = json.january;
    monthHours.february = json.february;
    monthHours.march = json.march;
    monthHours.april = json.april;
    monthHours.may = json.may;
    monthHours.june = json.june;
    monthHours.july = json.july;
    monthHours.august = json.august;
    monthHours.september = json.september;
    monthHours.october = json.october;
    monthHours.november = json.november;
    monthHours.december = json.december;
    return monthHours;
  }

  toJson(monthHours: MonthHours): any {
    return {
      id: monthHours.id,
      year: monthHours.year,
      january: monthHours.january,
      february: monthHours.february,
      march: monthHours.march,
      april: monthHours.april,
      may: monthHours.may,
      june: monthHours.june,
      july: monthHours.july,
      august: monthHours.august,
      september: monthHours.september,
      october: monthHours.october,
      november: monthHours.november,
      december: monthHours.december
    };
  }
}
