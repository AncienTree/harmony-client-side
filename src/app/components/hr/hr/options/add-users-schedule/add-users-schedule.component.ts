import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { MatSnackBar } from '@angular/material';
import { Schedule } from 'src/app/model/schedule';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-add-users-schedule',
  templateUrl: './add-users-schedule.component.html',
  styleUrls: ['./add-users-schedule.component.scss']
})
export class AddUsersScheduleComponent implements OnInit {

  scheduleList;
  scheduleValue;
  disableButton = true;
  diasblePickList = true;
  isLoadingResults = false;
  selectedSchedule: Schedule;
  sourceEmployee: Employee[];
  targetEmployee: Employee[];

  constructor(
    private scheduleHttp: ScheduleService,
    private snackBarRef: MatSnackBar,
  ) { }

  ngOnInit() {
    this.scheduleHttp.getFullScheduleList().subscribe(date => {
      this.scheduleList = date;
    });
    this.targetEmployee = [];
  }

  changeSchedule(event) {
    this.selectedSchedule = event;
    this.disableButton = false;
  }

  loadList() {
    this.isLoadingResults = true;
    this.scheduleHttp.getEmployeeWithoutSchedule(this.scheduleValue.scheduleDate).subscribe(data => {
      this.sourceEmployee = data;
      this.diasblePickList = false;
      this.isLoadingResults = false;
    });
  }

  submit() {
    this.isLoadingResults = true;
    const ids: number[] = [];
    this.targetEmployee.forEach(element => {
      ids.push(element.id);
    });
    this.scheduleHttp.addUsersToSchedule(this.scheduleValue.scheduleDate, ids).subscribe(result => {
      this.snackBarRef.open(result, 'close');
      this.diasblePickList = true;
      this.isLoadingResults = false;

      this.targetEmployee = [];
    });
  }
}
