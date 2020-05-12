import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'WORK') {
      return 'Pracuje';
    } else if (value === 'L4') {
      return 'Choroba';
    } else if (value === 	'SUSPENDED') {
      return 'Zawieszony';
    } else if (value === 'NOT_WORK') {
      return 'Nie pracuje';
    }
    return 'Nieznany';
  }

}
