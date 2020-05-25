import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared.module';
import { HrOptionsRoutingModule } from './hr-options.routing.module';

import {
  ScheduleListComponent,
  CreateScheduleComponent,
  AddUsersScheduleComponent
} from './index';
import { SectionsComponent } from './sections/sections.component';
import { LinesComponent } from './lines/lines.component';
import { DayoffComponent } from './dayoff/dayoff.component';
import { ContractsComponent } from './contracts/contracts.component';
import { MonthHoursComponent } from './month-hours/month-hours.component';

@NgModule({
  declarations: [
    ScheduleListComponent,
    CreateScheduleComponent,
    AddUsersScheduleComponent,
    SectionsComponent,
    LinesComponent,
    DayoffComponent,
    ContractsComponent,
    MonthHoursComponent
  ],
  imports: [
    SharedModule,
    HrOptionsRoutingModule
  ]
})
export class HrOptionsModule { }
