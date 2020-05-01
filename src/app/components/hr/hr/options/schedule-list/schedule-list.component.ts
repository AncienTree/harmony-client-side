import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Schedule } from 'src/app/model/schedule';
import { ScheduleService } from 'src/app/services/http/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  scheduleList;
  scheduleValue;
  disableButton = true;
  selectedSchedule: Schedule;

  constructor(
    private scheduleHttp: ScheduleService,
    private snackBarRef: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.scheduleHttp.getFullScheduleList().subscribe(date => {
      this.scheduleList = date;
    });
  }

  changeSchedule(event) {
    this.selectedSchedule = event;
    this.disableButton = false;
  }

  isActive(type) {
    if (typeof (this.selectedSchedule) !== 'undefined') {
      if (type === 'aktywny') {
        return this.selectedSchedule.active;
      }
      return this.selectedSchedule.visible;
    }
    return false;
  }

  sendChanges(visible, active) {
    if (visible === false && active === true) {
      this.snackBarRef.open('Grafik nie może pozostać aktywny gdy jego widocznośc zostnie wyłączona', 'close', {
        panelClass: ['red-snackbar']
      });
    } else {
      this.scheduleHttp.updateSchedule(this.scheduleValue.id, active, visible).subscribe();
      this.router.navigateByUrl('/main/hr');
      this.snackBarRef.open('Aktualizacja grafiku powiodła się.', 'close');
    }
  }
}
