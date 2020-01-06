import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/http/employee.service';
import { peselValidator } from 'src/app/utiles/validators/pesel-validator';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  constructor(
    private empl: EmployeeService,
    private fb: FormBuilder
  ) { }

  @ViewChild('stepper', { static: false }) stepper;

  isStepOneCompleted = false;
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
    startWork: ['', Validators.required],
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

  private checkPesel() {
    if (this.hireForm.get('pesel').valid) {
      this.isStepOneCompleted = true;
      this.stepper.next();
      // Sprawdzanie czy istnieje w bazie
      this.empl.checkInDB(this.pesel.value).subscribe(x => {
        this.checkDB = x;
        this.isLoading = false;
        this.tempPesel = this.pesel.value;
      });
    }
  }

  public back() {
    this.isStepOneCompleted = false;
  }

  public create() {
    if (!this.checkDB) {
      this.isStepTwoCompleted = true;
      this.stepper.next();
      // Uzupełnia pesel aby nie było potrzeby ponownego wpisywania oraz datę urodzenia
      this.pesel.setValue(this.tempPesel);
      this.hireForm.get('birthday').setValue(this.getBirthday());
    }
  }

  private getBirthday(): string {


    return null;
  }

  public submit() {
    console.warn(this.hireForm.value);
  }
}
