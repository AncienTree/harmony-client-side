import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared.module';
import { HrOptionsRoutingModule } from './hr-options.routing.module';

import {
  ScheduleListComponent,
  CreateScheduleComponent,
  AddUsersScheduleComponent,
  SectionsComponent,
  LinesComponent,
  DayoffComponent,
  ContractsComponent,
  MonthHoursComponent,
  FireEmployeeComponent
} from './index';

@NgModule({
  declarations: [
    ScheduleListComponent,
    CreateScheduleComponent,
    AddUsersScheduleComponent,
    SectionsComponent,
    LinesComponent,
    DayoffComponent,
    ContractsComponent,
    MonthHoursComponent,
    FireEmployeeComponent
  ],
  imports: [
    SharedModule,
    HrOptionsRoutingModule
  ]
})
export class HrOptionsModule { }
