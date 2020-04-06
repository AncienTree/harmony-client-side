import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/http/employee.service';
import { peselValidator } from 'src/app/utiles/validators/pesel-validator';
import { MatSnackBar, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
})
export class HireComponent implements OnInit {

  constructor(
    private empl: EmployeeService,
    private fb: FormBuilder,
    private snackBarRef: MatSnackBar,
  ) { }

  @ViewChild('stepper', { static: false }) stepper;

  isStepTwoCompleted = false;
  isLoading = true;
  checkDB = false;
  tempPesel: string;
  startdate = moment();

  // Formatki
  hireForm = this.fb.group({
    pesel: ['', [peselValidator, Validators.pattern('[0-9]{11}'), Validators.required]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    sex: ['', Validators.required],
    birthday: ['', Validators.required],
    startWorkDate: ['', Validators.required],
    position: ['', Validators.required],
    contractPosition: ['', Validators.required],
    contractType: ['', Validators.required],
    basicUnit: ['', Validators.required],
    unit: ['', Validators.required]
  });


  get pesel() {
    return this.hireForm.get('pesel');
  }

  ngOnInit() {
  }

  checkPesel() {
    if (!this.hireForm.get('pesel').invalid) {
      this.stepper.next();
      // Sprawdzanie czy istnieje w bazie
      this.empl.checkInDB(this.pesel.value).subscribe(x => {
        this.checkDB = x;
        this.isLoading = false;
        this.tempPesel = this.pesel.value;
      });
    }
  }

  public create() {
    if (!this.checkDB) {
      this.isStepTwoCompleted = true;
      this.stepper.next();
      // Uzupełnia pesel aby nie było potrzeby ponownego wpisywania
      this.pesel.setValue(this.tempPesel);
    }
  }

  public submit() {
    const testDate = moment(this.hireForm.get('birthday').value).format('YYYY-MM-DD').toString();
    const startWorkDate = moment(this.hireForm.get('startWorkDate').value).format('YYYY-MM-DD').toString();
    this.hireForm.get('birthday').setValue(testDate);
    this.hireForm.get('startWorkDate').setValue(startWorkDate);

    this.empl.create(this.hireForm.value).subscribe(x => {
      this.snackBarRef.open('Utworzono nowy login', 'close', {
        panelClass: ['green-snackbar']
      });
      setTimeout(() => window.location.reload(), 1500);
    });
  }
}
