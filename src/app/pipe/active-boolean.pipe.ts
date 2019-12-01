import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeBoolean'
})
export class ActiveBooleanPipe implements PipeTransform {

  transform(value) {
    return value ? 'Aktywny' : 'Nieaktywny';
  }

}
