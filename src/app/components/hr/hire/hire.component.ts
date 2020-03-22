import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/http/employee.service';
import { peselValidator } from 'src/app/utiles/validators/pesel-validator';
import { MatSnackBar, DateAdapter } from '@angular/material';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  constructor(
    private empl: EmployeeService,
    private fb: FormBuilder,
    private snackBarRef: MatSnackBar,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('pl');
  }

  @ViewChild('stepper', { static: false }) stepper;

  isStepTwoCompleted = false;
  isLoading = true;
  checkDB = false;
  tempPesel: string;

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
    this.empl.create(this.hireForm.value).subscribe(x => {
      console.log(this.hireForm.value);

      this.snackBarRef.open('Utworzono nowy login', 'close', {
        panelClass: ['green-snackbar']
      });
      // setTimeout(() => window.location.reload(), 1500);
    });
  }
}
