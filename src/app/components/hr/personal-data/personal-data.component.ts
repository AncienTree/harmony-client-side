import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EmployeeService } from 'src/app/services/http/employee/employee.service';
import { MatMultiSort } from 'ngx-mat-multi-sort';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/services/http/settings/section.service';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['no', 'fullName', 'ltLogin', 'position', 'userSection', 'userLine', 'lider', 'workStatus', 'contractType', 'etat',
    'startContractDate', 'endContractDate', 'startWorkDate', 'endWorkDate', 'crm', 'email', 'leave', 'action'];
  dataSource;
  isLoadingResults = true;
  counter: Counter;
  sections: Section[];

  // @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatMultiSort, { static: false }) sort: MatMultiSort;

  constructor(
    private emplHttp: EmployeeService,
    private sectionHttp: SectionService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.getSection();
    this.emplHttp.getPersnoalDate().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;

      this.emplHttp.counter().subscribe(count =>  this.counter = count);

      this.isLoadingResults = false;
      this.change.detectChanges();
    });
  }

  private getSection() {
    this.sectionHttp.getAllExpired().subscribe(result => {
      this.sections = result;
    });
  }

  public onSelect(user) {
    this.router.navigate(['/main/hr/dane/', user.id]);
  }

  public searchLider(name: string) {
    const section = this.sections.find(x => x.name === name);

    if (typeof(section) !== 'undefined') {
      return section.lider;
    } else {
      return 'error';
    }
  }
}

interface Counter {
  working: number;
  l4: number;
  suspend: number;
  not_working: number;
}
