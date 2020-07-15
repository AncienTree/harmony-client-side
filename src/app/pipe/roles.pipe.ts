import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roles'
})
export class RolesPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'ROLE_USER') {
      return 'Użytkownik';
    } else if (value === 'ROLE_SPEC') {
      return 'Specjalista';
    } else if (value === 	'ROLE_MANAGER') {
      return 'Lider';
    } else if (value === 	'ROLE_SENIOR') {
      return 'Kierownik';
    } else if (value === 'ROLE_HR') {
      return 'HR';
    } else if (value === 'ROLE_ADMIN') {
      return 'Administrator';
    }
    return 'Nieznany';
  }

}
