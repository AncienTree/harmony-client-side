import { EmployeeLeave } from './../../../../model/employee-leave';
import { EmployeeInfo } from './../../../../model/employee-info';
import { EmployeeDetails } from './../../../../model/employee-details';
import { Employee } from './../../../../model/employee';
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

  leave(){
    const norm = this.employeeLeave.normal;
    const uz = this.employeeLeave.uz;
    const past = this.employeeLeave.pastYears;
    const addi = this.employeeLeave.additional;

    return norm + uz + past + addi;
  }

  submitEmployee() {

  }

}
