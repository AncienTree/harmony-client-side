import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { EmployeeService } from 'src/app/services/http/employee.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['no', 'lastName', 'position', 'workStatus', 'sex', 'birthday', 'contractType', 'startContractDate', 'endContractDate'];
  dataSource;
  isLoadingResults = true;
  counter: Counter;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

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

    });

  }
}

interface Counter {
  working: number;
  l4: number;
  suspend: number;
  not_working: number;
}
