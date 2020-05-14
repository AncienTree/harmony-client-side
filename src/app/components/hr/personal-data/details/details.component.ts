import { EmployeeLeaveService } from './../../../../services/http/employee/employee-leave.service';
import { EmployeeDetailsService } from './../../../../services/http/employee/employee-details.service';
import { EmployeeContactService } from './../../../../services/http/employee/employee-contact.service';
import { EmployeeInfoService } from './../../../../services/http/employee/employee-info.service';
import { EmployeeService } from './../../../../services/http/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public employeeId;
  isLoadingResults = false;

  constructor(
    private route: ActivatedRoute,
    private returnRoute: Router,
    private employeeHttp: EmployeeService,
    private employeeInfoHttp: EmployeeInfoService,
    private employeeContactHttp: EmployeeContactService,
    private employeeDeatilsHttp: EmployeeDetailsService,
    private employeeLeaveHttp: EmployeeLeaveService,
    ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;

    this.employeeHttp.getEmployee(this.employeeId).subscribe(result => {
      console.log(result);
    });
    this.employeeContactHttp.getContact(this.employeeId).subscribe(result => {
      console.log(result);
    });
    this.employeeInfoHttp.getInfo(this.employeeId).subscribe(result => {
      console.log(result);
    });
    this.employeeDeatilsHttp.getDetails(this.employeeId).subscribe(result => {
      console.log(result);
    });
    this.employeeLeaveHttp.getLeave(this.employeeId).subscribe(result => {
      console.log(result);
    });
  }

  return() {
    this.returnRoute.navigate(['/main/hr/stan-osobowy']);
  }

}
