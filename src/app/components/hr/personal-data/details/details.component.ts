import { EmployeeLeave } from './../../../../model/employee-leave';
import { EmployeeInfo } from './../../../../model/employee-info';
import { EmployeeDetails } from './../../../../model/employee-details';
import { Employee } from './../../../../model/employee';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeLeaveService } from './../../../../services/http/employee/employee-leave.service';
import { EmployeeDetailsService } from './../../../../services/http/employee/employee-details.service';
import { EmployeeContactService } from './../../../../services/http/employee/employee-contact.service';
import { EmployeeInfoService } from './../../../../services/http/employee/employee-info.service';
import { EmployeeService } from './../../../../services/http/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeContact } from 'src/app/model/employee-contact';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private returnRoute: Router,
    private fb: FormBuilder,
    private employeeHttp: EmployeeService,
    private employeeInfoHttp: EmployeeInfoService,
    private employeeContactHttp: EmployeeContactService,
    private employeeDeatilsHttp: EmployeeDetailsService,
    private employeeLeaveHttp: EmployeeLeaveService,
  ) { }

  employeeId;
  isLoadingResults = false;
  employee: Employee;
  employeeDetails: EmployeeDetails;
  employeeInfo: EmployeeInfo;
  employeeLeave: EmployeeLeave;
  employeeContact: EmployeeContact;

  // // Formatki
  // // Podstawowe dance
  // employeeForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   pesel: ['', Validators.required],
  //   sex: [''],
  //   birthday: ['', Validators.required],
  //   email: ['', Validators.required],
  //   position: ['', Validators.required],
  //   contractPosition: ['', Validators.required],
  //   workStatus: ['', Validators.required],
  //   contractType: ['', Validators.required],
  //   basicUnit: ['', Validators.required],
  //   unit: ['', Validators.required],
  //   startWorkDate: [''],
  //   startContractDate: [''],
  //   endWorkDate: [''],
  //   endContractDate: ['']
  // });

  // // Dane kontaktowe
  // employeeContactForm = this.fb.group({
  //   address: ['', Validators.required],
  //   city: ['', Validators.required],
  //   zipCode: ['', Validators.required],
  //   phoneNumber: ['', Validators.required],
  //   contactPhoneNumber: ['', Validators.required],
  //   contactName: ['', Validators.required]
  // });

  // // Dane informacyjne
  // employeeInfoForm = this.fb.group({
  //   agreement: ['', Validators.required],
  //   ppk: ['', Validators.required],
  //   headphones: ['', Validators.required],
  //   locker: ['', Validators.required],
  //   idCard: ['', Validators.required],
  //   parkingCard: [''],
  //   info1: [''],
  //   info2: [''],
  //   info3: [''],
  //   info4: ['']
  // });

  // // Dane dodatkowe
  // employeeDetailsForm = this.fb.group({
  //   ltLogin: ['', Validators.required],
  //   ltId: ['', Validators.required],
  //   crmLogin: ['', Validators.required],
  //   crmAccountExpirationDate: [''],
  //   userSection: ['', Validators.required],
  //   userLine: ['', Validators.required],
  //   fte: [''],
  //   fteStart: [''],
  //   goal1: [''],
  //   goal2: [''],
  //   goal3: [''],
  //   goal4: [''],
  //   goal5: ['']
  // });

  // // Dane urlopowe
  // employeeLeaveForm = this.fb.group({
  //   normal: ['', Validators.required],
  //   uz: ['', Validators.required],
  //   additional: ['', Validators.required],
  //   pastYears: ['', Validators.required],
  // });

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;

    // Pobieranie danych pracownika
    this.employeeHttp.getEmployee(this.employeeId).subscribe(result => {
      this.employee = result;
    });
    this.employeeContactHttp.getContact(this.employeeId).subscribe(result => {
      this.employeeContact = result;
    });
    this.employeeInfoHttp.getInfo(this.employeeId).subscribe(result => {
      this.employeeInfo = result;
    });
    this.employeeDeatilsHttp.getDetails(this.employeeId).subscribe(result => {
      this.employeeDetails = result;
    });
    this.employeeLeaveHttp.getLeave(this.employeeId).subscribe(result => {
      this.employeeLeave = result;
    });
    setTimeout(() => {
      console.log(this.employee);
    }, 2000);
  }

  return() {
    this.returnRoute.navigate(['/main/hr/stan-osobowy']);
  }

  submitEmployee() {

  }

}
