import { EmployeeLeaveService } from './../../../../../services/http/employee/employee-leave.service';
import { EmployeeDetailsService } from './../../../../../services/http/employee/employee-details.service';
import { EmployeeContactService } from './../../../../../services/http/employee/employee-contact.service';
import { EmployeeInfoService } from './../../../../../services/http/employee/employee-info.service';
import { EmployeeService } from './../../../../../services/http/employee/employee.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import * as moment from 'moment';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  formatka;
  startdate = moment();
  startWork;
  startContract;
  endContract;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private employeeHttp: EmployeeService,
    private employeeInfoHttp: EmployeeInfoService,
    private employeeContactHttp: EmployeeContactService,
    private employeeDeatilsHttp: EmployeeDetailsService,
    private employeeLeaveHttp: EmployeeLeaveService,
    private snackBarRef: MatSnackBar,
  ) {
    this.formatka = this.data.formatka;
  }

  // Form builders
  // Employee
  employeeForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    position: ['', Validators.required],
    contractPosition: ['', Validators.required],
    contractType: ['', Validators.required],
    basicUnit: ['', Validators.required],
    unit: ['', Validators.required]
  });

  // EmployeeDetails
  employeeDetailsForm = this.fb.group({
    ltLogin: ['', Validators.required],
    ltId: ['', Validators.required],
    crmLogin: ['', Validators.required],
    crmExp: ['', Validators.required],
    userLine: ['', Validators.required],
    userSection: ['', Validators.required],
    fte: ['', Validators.required],
    fteStart: ['', Validators.required],
    goal1: ['', Validators.required],
    goal2: ['', Validators.required],
    goal3: ['', Validators.required],
    goal4: ['', Validators.required],
    goal5: ['', Validators.required]
  });

  // EmployeeInfo
  employeeInfoForm = this.fb.group({
    agreement: ['', Validators.required],
    ppk: ['', Validators.required],
    headphones: ['', Validators.required],
    locker: ['', Validators.required],
    idCard: ['', Validators.required],
    parkingCard: ['', Validators.required],
    info1: ['', Validators.required],
    info2: ['', Validators.required],
    info3: ['', Validators.required],
    info4: ['', Validators.required]
  });


  // EmployeeContact
  employeeContactForm = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', Validators.required],
    phone: ['', Validators.required],
    contact: ['', Validators.required],
    contactPhone: ['', Validators.required]
  });


  // EmployeeLeave
  employeeLeaveForm = this.fb.group({
    normal: ['', Validators.required],
    uz: ['', Validators.required],
    add: ['', Validators.required],
    past: ['', Validators.required]
  });

  ngOnInit() {
    // Init forms
    switch (this.data.formatka) {
      case 'employee':
        this.employeeForm.get('email').setValue(this.data.employee.email);
        this.employeeForm.get('position').setValue(this.data.employee.position);
        this.employeeForm.get('contractPosition').setValue(this.data.employee.contractPosition);
        this.employeeForm.get('contractType').setValue(this.data.employee.contractType);
        this.employeeForm.get('basicUnit').setValue(this.data.employee.basicUnit);
        this.employeeForm.get('unit').setValue(this.data.employee.unit);
        break;

      case 'employeeDetails':
        this.employeeDetailsForm.get('ltLogin').setValue(this.data.employee.ltLogin);
        this.employeeDetailsForm.get('ltId').setValue(this.data.employee.ltId);
        this.employeeDetailsForm.get('crmLogin').setValue(this.data.employee.crmLogin);
        this.employeeDetailsForm.get('crmExp').setValue(this.data.employee.crmAccountExpirationDate);
        this.employeeDetailsForm.get('userLine').setValue(this.data.employee.userLine);
        this.employeeDetailsForm.get('userSection').setValue(this.data.employee.userSection);
        this.employeeDetailsForm.get('fte').setValue(this.data.employee.fte);
        this.employeeDetailsForm.get('fteStart').setValue(this.data.employee.fteStart);
        this.employeeDetailsForm.get('goal1').setValue(this.data.employee.goal1);
        this.employeeDetailsForm.get('goal2').setValue(this.data.employee.goal2);
        this.employeeDetailsForm.get('goal3').setValue(this.data.employee.goal3);
        this.employeeDetailsForm.get('goal4').setValue(this.data.employee.goal4);
        this.employeeDetailsForm.get('goal5').setValue(this.data.employee.goal5);
        break;

      case 'employeeInfo':
        this.employeeInfoForm.get('agreement').setValue(this.data.employee.agreement);
        this.employeeInfoForm.get('ppk').setValue(this.data.employee.ppk);
        this.employeeInfoForm.get('headphones').setValue(this.data.employee.headphones);
        this.employeeInfoForm.get('locker').setValue(this.data.employee.locker);
        this.employeeInfoForm.get('idCard').setValue(this.data.employee.idCard);
        this.employeeInfoForm.get('parkingCard').setValue(this.data.employee.parkingCard);
        this.employeeInfoForm.get('info1').setValue(this.data.employee.info1);
        this.employeeInfoForm.get('info2').setValue(this.data.employee.info2);
        this.employeeInfoForm.get('info3').setValue(this.data.employee.info3);
        this.employeeInfoForm.get('info4').setValue(this.data.employee.info4);
        break;

      case 'employeeContact':
        this.employeeContactForm.get('address').setValue(this.data.employee.address);
        this.employeeContactForm.get('city').setValue(this.data.employee.city);
        this.employeeContactForm.get('zipCode').setValue(this.data.employee.zipCode);
        this.employeeContactForm.get('phone').setValue(this.data.employee.phoneNumber);
        this.employeeContactForm.get('contact').setValue(this.data.employee.contactPhoneNumber);
        this.employeeContactForm.get('contactPhone').setValue(this.data.employee.contactName);
        break;

      case 'employeeLeave':
        this.employeeLeaveForm.get('normal').setValue(this.data.employee.normal);
        this.employeeLeaveForm.get('uz').setValue(this.data.employee.uz);
        this.employeeLeaveForm.get('add').setValue(this.data.employee.additional);
        this.employeeLeaveForm.get('past').setValue(this.data.employee.pastYears);
        break;

      default:
        console.error('ieznany typ formatyki. Proszę spróbuj otworzyć formatkę edycji jeszcze raz.');
        break;
    }
  }

  public submitEmployee() {
    const employee = {
      id: this.data.employee.id,
      email: this.employeeForm.get('email').value,
      position: this.employeeForm.get('position').value,
      contractPosition: this.employeeForm.get('contractPosition').value,
      contractType: this.employeeForm.get('contractType').value,
      basicUnit: this.employeeForm.get('basicUnit').value,
      unit: this.employeeForm.get('unit').value
    };

    this.employeeHttp.update(employee).subscribe(response => {
      this.snackBarRef.open(response, 'close', {
        panelClass: ['green-snackbar']
      });
    });
  }

  public submitEmployeeInfo() {

  }

  public submitEmployeeContact() {

  }

  public submitEmployeeDetails() {

  }

  public submitEmployeeLeave() {

  }
}
