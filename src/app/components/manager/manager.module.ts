import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckAbsenceComponent,
  CheckAvailabilityComponent,
  ManagerComponent,
  ScheduleEmployeeComponent,
  ScheduleGroupComponent } from './index';

@NgModule({
  declarations: [
    CheckAbsenceComponent,
    CheckAvailabilityComponent,
    ManagerComponent,
    ScheduleEmployeeComponent,
    ScheduleGroupComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class ManagerModule {}
