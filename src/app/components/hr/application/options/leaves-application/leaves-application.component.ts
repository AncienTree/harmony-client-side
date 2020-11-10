import { EmployeeService } from './../../../../../services/http/employee/employee.service';
import { MatTableDataSource } from '@angular/material';
import { AbsenceRecordService } from './../../../../../services/http/absence-record.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

import * as _ from 'lodash';


@Component({
  selector: 'app-leaves-application',
  templateUrl: './leaves-application.component.html',
  styleUrls: ['./leaves-application.component.scss']
})
export class LeavesApplicationComponent implements OnInit {

  date = new Date();
  displayedColumns: string[] = ['no', 'employee', 'date', 'status'];
  employeeList: Employee[] = [];
  dataSource;
  isLoadingResults = false;
  displayTable = false;

  constructor(
    private absenceHttp: AbsenceRecordService,
    private employeeHttp: EmployeeService,
  ) { }

  ngOnInit() {
    this.employeeHttp.showAll().subscribe(employees => {
      this.employeeList = employees;
    });
  }

  load(option) {
    this.displayedColumns = ['no', 'employee', 'date', 'status'];
    this.isLoadingResults = true;
    switch (option) {
      case 'accepted':
        this.absenceHttp.getAbsencesRequest(option, this.date.getFullYear()).subscribe(response => {
          this.dataSource = new MatTableDataSource(response);
        });
        break;
      case 'declined':
        this.absenceHttp.getAbsencesRequest(option, this.date.getFullYear()).subscribe(response => {
          this.dataSource = new MatTableDataSource(response);
          this.displayedColumns.push('text', 'lastModifiedBy');
        });
        break;
      case 'new':
        this.absenceHttp.getAbsencesRequest(option, this.date.getFullYear()).subscribe(response => {
          this.dataSource = new MatTableDataSource(response);

        });
        break;
      default:
        break;
    }
    this.displayTable = true;
    this.isLoadingResults = false;
  }

  fullEmployee(id): string {
    const tempEmployee = _.find(this.employeeList, { id });
    return tempEmployee.lastName + ' ' + tempEmployee.firstName;
  }

}
