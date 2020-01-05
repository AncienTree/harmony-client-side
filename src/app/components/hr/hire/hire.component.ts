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

  checkDB = false;

  hireForm = this.fb.group({
    pesel: ['', [
      peselValidator,
      Validators.required,
      Validators.minLength(11)
    ]],
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
      // this.empl.checkInDB(this.pesel.value).subscribe( x => {
      //   this.checkDB = x;
      // });
    }
  }

  public back() {
    this.isStepOneCompleted = false;
  }
}
