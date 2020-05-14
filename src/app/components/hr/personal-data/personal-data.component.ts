import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { EmployeeService } from 'src/app/services/http/employee.service';
import { MatMultiSort } from 'ngx-mat-multi-sort';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['no', 'lastName', 'position', 'userSection', 'userLine', 'lider', 'workStatus', 'sex', 'birthday', 'contractType', 'startContractDate', 'endContractDate', 'crm', 'email'];
  dataSource;
  isLoadingResults = true;
  counter: Counter;

  // @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatMultiSort, { static: false }) sort: MatMultiSort;

  constructor(
    private emplHttp: EmployeeService,
    private change: ChangeDetectorRef,
  ) {
    this.emplHttp.counter().subscribe(result => {
      this.counter = result;
    });
  }

  ngOnInit() {
    this.refresh();

  }

  private refresh() {
    this.emplHttp.getEmployee().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;

      this.isLoadingResults = false;
      this.change.detectChanges();
      console.log(result);

    });

  }
}

interface Counter {
  working: number;
  l4: number;
  suspend: number;
  not_working: number;
}
