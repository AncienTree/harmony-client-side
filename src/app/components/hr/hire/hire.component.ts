import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/http/employee.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  @ViewChild('stepper', { static: false }) stepper;

  isStepOneCompleted = false;
  isStepTwoCompleted = false;

  checkDB = false;

  pesel = new FormControl('');
  constructor(private empl: EmployeeService) { }

  ngOnInit() {
  }

  private checkPesel() {
    if (this.peselValid(this.pesel.value)) {
      this.isStepOneCompleted = true;
      this.stepper.next();
      this.empl.checkInDB(this.pesel.value).subscribe( x => {
        this.checkDB = x;
      });
    }
  }

  // Weryfikacja pesela po:
  // Typie, długości(musi być 11), dzień i miesiąc musi być w określonym przedziale i po porównaniu numeru kontrolnego.
  private peselValid(pesel) {
    const reg = /^[0-9]{11}$/;

    if (typeof pesel !== 'string') {
      return false;
    } else if (reg.test(pesel) === false) {
      return false;
    } else if ((parseInt(pesel.substring(4, 6)) > 31) || (parseInt(pesel.substring(2, 4)) > 22)) {
      return false;
    } else {
      const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
      let sum = 0;
      const controlNumber = parseInt(pesel.substring(10, 11));

      for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
      }
      sum = sum % 10;
      return (10 - sum) === controlNumber;
    }
  }
}
