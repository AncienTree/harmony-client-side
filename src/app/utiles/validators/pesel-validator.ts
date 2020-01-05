import { AbstractControl } from '@angular/forms';

export function peselValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const month = parseInt(control.value.substring(2, 4), 10);
  const day = parseInt(control.value.substring(4, 6), 10);

  let sum = 0;
  let valid = false;
  if ((day < 31) && (month < 23)) {
    const controlNumber = parseInt(control.value.substring(10, 11), 10);
    for (let i = 0; i < weight.length; i++) {
      sum += (parseInt(control.value.substring(i, i + 1), 10) * weight[i]);
    }
    sum = sum % 10;
    if ((10 - sum) === 10) {
      if (0 === controlNumber) {
        valid = true;
      }
    } else if ((10 - sum) === controlNumber) {
      valid = true;
    }
  }
  return valid ? null : { 'peselValidator': true };
}

