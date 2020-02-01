import { Component } from '@angular/core';
import { ScheduleSummaryService } from 'src/app/services/http/schedule-summary.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  displayedColumns = ['fullName', 'position', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  dataSource = new MatTableDataSource();
  month = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  constructor(
    private scheduleHttp: ScheduleSummaryService,
  ) { }

  refresh(date) {
    console.log(date);

    this.scheduleHttp.getScheduleByMonth(date)
      .subscribe(result => {
        this.dataSource.data = result;
        console.log(result);

      });
  }

  testLog(object) {
    console.log(object);
  }
}
