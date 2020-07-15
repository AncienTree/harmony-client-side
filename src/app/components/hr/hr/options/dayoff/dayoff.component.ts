import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { DayoffService } from 'src/app/services/http/settings/dayoff.service';
import { DayoffEditComponent } from './dayoff-edit/dayoff-edit.component';
import * as moment from 'moment';

@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrls: ['./dayoff.component.scss']
})
export class DayoffComponent implements OnInit {

  case;
  year: string;
  month: string;
  disableTable = false;
  displayedColumns: string[] = ['no', 'date', 'info', 'action'];
  dataSource;
  isLoadingResults = false;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dayOffHttp: DayoffService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  switchCase(arg) {
    this.case = arg;
  }

  delete(day) {
    if (confirm('Czy na pewno chcesz usunąć linię ' + day.name + '?')) {
      this.dayOffHttp.remove(day.id).subscribe(() => {
      });
    }
  }

  loadYear() {
    this.isLoadingResults = true;
    this.dayOffHttp.getDaysByYear(this.year).subscribe(respone => {
      this.dataSource = new MatTableDataSource(respone);
      this.disableTable = true;
      this.isLoadingResults = false;
    });
  }

  loadMonth() {
    // Obliczanie ostatniego dnia miesiąca
    const year: number = +this.month.substring(0, 4);
    const month: number = +this.month.substring(5, 7);
    const lastDay = moment(new Date(year, month, 0)).format('YYYY-MM-DD').toString();

    this.isLoadingResults = true;
    this.dayOffHttp.getDays(this.month, lastDay).subscribe(respone => {
      this.dataSource = new MatTableDataSource(respone);
      this.disableTable = true;
      this.isLoadingResults = false;
    });
  }

  refresh() {
    if (this.case === 'year') {
      this.loadYear();
    } else if (this.case === 'month') {
      this.loadMonth();
    }
  }

  openDialog(day, type) {
    const dialogRef = this.dialog.open(DayoffEditComponent, {
      width: '250px',
      data: {
        day,
        type
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.refresh();
      }, 1500);
    });
  }

  closeDatePicker(eventData: any, dp?: any) {
    const stringDate = moment(eventData).format('YYYY-MM-DD').toString();
    this.month = stringDate;

    dp.close();
  }
}
