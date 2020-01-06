import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/http/employee.service';
import { peselValidator } from 'src/app/utiles/validators/pesel-validator';
import { Serializer } from 'src/app/model/Serializer/serializer';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  constructor(
    private empl: EmployeeService,
    private fb: FormBuilder,
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
      // Uzupełnia pesel aby nie było potrzeby ponownego wpisywania
      this.pesel.setValue(this.tempPesel);
    }
  }

  public submit() {
    console.log(this.hireForm.value);

    this.empl.create(this.hireForm.value).subscribe(x => {
      console.log('Utworzono nowy login');
      console.log(x);
    });
  }
}
