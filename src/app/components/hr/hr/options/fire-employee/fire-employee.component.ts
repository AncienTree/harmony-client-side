import { FireDialogComponent } from './fire-dialog/fire-dialog.component';
import { EmployeeService } from 'src/app/services/http/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-fire-employee',
  templateUrl: './fire-employee.component.html',
  styleUrls: ['./fire-employee.component.scss']
})
export class FireEmployeeComponent implements OnInit {
  employees;
  fireEmployee;

  constructor(
    private eemployeeHttp: EmployeeService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.eemployeeHttp.showAll().subscribe(response => {
      this.employees = response;
    });
  }

  confirm() {
    const dialogRef = this.dialog.open(FireDialogComponent, {
      width: '550px',
      data: this.fireEmployee
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

}
