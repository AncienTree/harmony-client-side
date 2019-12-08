import { NgModule } from '@angular/core';
import { AbsenceListComponent, EmployeeListComponent, FteComponent, LeaveListComponent } from './index';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AbsenceListComponent,
    EmployeeListComponent,
    FteComponent,
    LeaveListComponent
  ],
  imports: [
    CommonModule
  ]
})

export class RaportModule {}
