import { EmployeeLeave } from './../../../../model/employee-leave';
import { EmployeeInfo } from './../../../../model/employee-info';
import { EmployeeDetails } from './../../../../model/employee-details';
import { Employee } from './../../../../model/employee';
import { EmployeeLeaveService } from './../../../../services/http/employee/employee-leave.service';
import { EmployeeDetailsService } from './../../../../services/http/employee/employee-details.service';
import { EmployeeContactService } from './../../../../services/http/employee/employee-contact.service';
import { EmployeeInfoService } from './../../../../services/http/employee/employee-info.service';
import { EmployeeService } from './../../../../services/http/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeContact } from 'src/app/model/employee-contact';
import { MatDialog } from '@angular/material';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { SectionService } from 'src/app/services/http/section.service';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private returnRoute: Router,
    private dialog: MatDialog,
    private employeeHttp: EmployeeService,
    private employeeInfoHttp: EmployeeInfoService,
    private employeeContactHttp: EmployeeContactService,
    private employeeDeatilsHttp: EmployeeDetailsService,
    private employeeLeaveHttp: EmployeeLeaveService,
    private sectionHttp: SectionService
  ) { }

  employeeId;
  isLoadingResults = true;
  employee: Employee;
  employeeDetails: EmployeeDetails;
  employeeInfo: EmployeeInfo;
  employeeLeave: EmployeeLeave;
  employeeContact: EmployeeContact;
  sections: Section[];

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;

    // Pobieranie danych pracownika
    this.refresh();
  }

  refresh() {
    this.getSection();
    this.employeeHttp.getEmployee(this.employeeId).subscribe(result => {
      this.employee = result;
      this.isLoadingResults = false;
    });
    this.employeeContactHttp.getContact(this.employeeId).subscribe(result => {
      this.employeeContact = result;
    });
    this.employeeInfoHttp.getInfo(this.employeeId).subscribe(result => {
      this.employeeInfo = result;
    });
    this.employeeDeatilsHttp.getDetails(this.employeeId).subscribe(result => {
      this.employeeDetails = result;
    });
    this.employeeLeaveHttp.getLeave(this.employeeId).subscribe(result => {
      this.employeeLeave = result;
    });
  }

  private getSection() {
    this.sectionHttp.getAllExpired().subscribe(result => {
      this.sections = result;
    });
  }

  return() {
    this.returnRoute.navigate(['/main/hr/stan-osobowy']);
  }

  leave() {
    const norm = this.employeeLeave.normal;
    const uz = this.employeeLeave.uz;
    const past = this.employeeLeave.pastYears;
    const addi = this.employeeLeave.additional;

    return norm + uz + past + addi;
  }

  openDialog(dataEmployeeType, formType) {
    const dialogRef = this.dialog.open(EditDetailsComponent, {
      data: {
        employee: dataEmployeeType,
        formatka: formType
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  editEmployee() {
    this.openDialog(this.employee, 'employee');
  }

  editEmployeeInfo() {
    this.openDialog(this.employeeInfo, 'employeeInfo');
  }

  editEmployeeContact() {
    this.openDialog(this.employeeContact, 'employeeContact');
  }

  editEmployeeDeatils() {
    this.openDialog(this.employeeDetails, 'employeeDetails');
  }

  editEmployeeLeave() {
    this.openDialog(this.employeeLeave, 'employeeLeave');
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
