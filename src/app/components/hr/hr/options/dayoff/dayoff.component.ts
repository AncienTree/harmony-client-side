import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DayoffService } from 'src/app/services/http/settings/dayoff.service';

@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrls: ['./dayoff.component.scss']
})
export class DayoffComponent implements OnInit {

  case;
  year: string;
  disableTable = false;
  displayedColumns: string[] = ['no', 'date', 'info', 'action'];
  dataSource;
  isLoadingResults = false;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dayOffHttp: DayoffService,
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
}
