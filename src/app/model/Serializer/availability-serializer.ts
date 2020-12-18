import { Availability } from './../availability';
import { Serializer } from './serializer';


export class AvailabilitySerializer implements Serializer {
  fromJson(json: any): Availability {
    const availability = new Availability();
    availability.id = json.id;
    availability.availabilityDate = json.availabilityDate;
    availability.active = json.active;
    return availability;
  }

  toJson(availability: Availability): any {
    return {
      id: availability.id,
      availabilityDate: availability.availabilityDate,
      active: availability.active,
    };
  }
}
