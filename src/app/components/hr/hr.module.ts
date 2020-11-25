import { LeavesApplicationComponent } from './application/options/leaves-application/leaves-application.component';
import { NgModule } from '@angular/core';
import {
  ApplicationComponent,
  HireComponent,
  HrComponent,
  PersonalDataComponent,
  ScheduleComponent,
  ScheduleEditComponent,
  RecordComponent,
  DetailsComponent,
  EditDetailsComponent,
  PresenceComponent,
  SectionEditComponent,
  LineEditComponent,
  ContractEditComponent,
  DayoffEditComponent,
  MonthHoursEditComponent
 } from './index';
import { SharedModule } from 'src/app/modules/shared.module';
import { HrRoutingModule } from './hr.routing.module';
import { PresenceRecordComponent } from './presence/presence-record/presence-record.component';
import { FireDialogComponent } from './hr/options/fire-employee/fire-dialog/fire-dialog.component';
import { DisplayHoursComponent } from './schedule/display-hours/display-hours.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    HireComponent,
    HrComponent,
    PersonalDataComponent,
    ScheduleComponent,
    ScheduleEditComponent,
    RecordComponent,
    DetailsComponent,
    EditDetailsComponent,
    SectionEditComponent,
    LineEditComponent,
    DayoffEditComponent,
    ContractEditComponent,
    MonthHoursEditComponent,
    PresenceComponent,
    PresenceRecordComponent,
    FireDialogComponent,
    LeavesApplicationComponent,
    DisplayHoursComponent
  ],
  imports: [
    SharedModule,
    HrRoutingModule
  ]
})

export class HrModule {}
