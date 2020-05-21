import { Serializer } from './serializer';
import { Section } from '../section';


export class SectionSerializer implements Serializer {
  fromJson(json: any): Section {
    const section = new Section();
    section.id = json.id;
    section.name = json.name;
    section.lider = json.lider;
    section.expired = json.expired;
    return section;
  }

  toJson(section: Section): any {
    return {
      id: section.id,
      name: section.name,
      lider: section.lider,
      expired: section.expired,
    };
  }
}
