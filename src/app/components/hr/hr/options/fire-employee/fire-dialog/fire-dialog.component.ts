import { EmployeeService } from './../../../../../../services/http/employee/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  templateUrl: './fire-dialog.component.html',
  styleUrls: ['./fire-dialog.component.scss']
})
export class FireDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FireDialogComponent>,
    private employeeHttp: EmployeeService,
    private snackBarRef: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }

  fire() {
    this.employeeHttp.fireEmployee(this.data.id).subscribe(response => {
      this.snackBarRef.open(response, 'close', {
        panelClass: ['green-snackbar']
      });
      this.dialogRef.close();
    });
  }
}
