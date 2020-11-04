
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Employee } from './../../../model/employee';
import { AbsenceRecordService } from 'src/app/services/http/absence-record.service';
import { SectionService } from './../../../services/http/settings/section.service';
import { EmployeeService } from 'src/app/services/http/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';
import { DeclineRequestComponent } from './decline-request/decline-request.component';

import * as _ from 'lodash';

@Component({
  selector: 'app-check-absence',
  templateUrl: './check-absence.component.html',
  styleUrls: ['./check-absence.component.scss']
})
export class CheckAbsenceComponent implements OnInit {

  displayedColumns: string[] = ['no', 'employee', 'date', 'action'];
  requestSource;

  showSection = false;
  showUsers = false;
  isLoadingResults = false;
  displayTable = false;

  employeeList: Employee[] = [];
  sectionsList: Section[] = [];

  selectedSection;
  selectedEmployee;

  date = new Date();

  constructor(
    private employeeHttp: EmployeeService,
    private sectionHttp: SectionService,
    private absenceHttp: AbsenceRecordService,
    private snackBarRef: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.employeeHttp.showAll().subscribe(employees => {
      this.employeeList = employees;
    });
  }

  public loadRequests(opt) {
    this.showUsers = false;
    this.showSection = false;
    this.isLoadingResults = true;

    switch (opt) {
      case 'all':
        this.absenceHttp.showAll().subscribe(response => {
          this.requestSource = new MatTableDataSource(response);
          this.isLoadingResults = false;
          this.displayTable = true;
        });
        break;
      case 'section':
        this.absenceHttp.getSectionAbsencesRequest(this.selectedSection).subscribe(response => {
          this.requestSource = new MatTableDataSource(response);
          this.displayTable = true;
          this.isLoadingResults = false;
        });
        break;
      case 'employee':
        this.absenceHttp.getEmployeeAbsencesRequest(this.selectedEmployee).subscribe(response => {
          this.requestSource = new MatTableDataSource(response);
          this.displayTable = true;
          this.isLoadingResults = false;
        });
        break;

      default:
        break;
    }
  }

  public sections() {
    this.showUsers = false;
    this.displayTable = false;
    this.isLoadingResults = true;

    this.sectionHttp.showAll().subscribe(sekcja => {
      this.sectionsList = sekcja;
      this.isLoadingResults = false;
      this.showSection = true;
    });
  }

  public users() {
    this.showSection = false;
    this.displayTable = false;
    this.isLoadingResults = true;

    this.employeeHttp.showAll().subscribe(employees => {
      this.employeeList = employees;
      this.isLoadingResults = false;
      this.showUsers = true;
    });
  }

  cancel(record) {
    const index = this.requestSource.data.indexOf(record);
    const dialogRef = this.dialog.open(DeclineRequestComponent, {
      disableClose: true,
      data: record
    });

    dialogRef.afterClosed().subscribe(x => {
      console.log(x);

      if (x.status === 'deleted') {
        this.requestSource.data.splice(index, 1);
        this.requestSource._updateChangeSubscription();

        this.snackBarRef.open('Wniosek anulowany.', 'close', {
          panelClass: ['green-snackbar']
        });
      } else if (x.status === 'cancel') {
        this.snackBarRef.open('Anulowano akcje.', 'close', {
          panelClass: ['yellow-snackbar']
        });
      }
    });
  }

  accept(record) {
    const index = this.requestSource.data.indexOf(record);

    this.absenceHttp.acceptAbsence(record.id).subscribe(response => {
      this.requestSource.data.splice(index, 1);
      this.requestSource._updateChangeSubscription();

      this.snackBarRef.open(response, 'close', {
        panelClass: ['green-snackbar']
      });
    });
  }

  fullEmployee(id): string {
    const tempEmployee = _.find(this.employeeList, { id });
    return tempEmployee.lastName + ' ' + tempEmployee.firstName;
  }
}
