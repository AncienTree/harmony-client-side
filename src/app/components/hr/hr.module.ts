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
    PresenceRecordComponent
  ],
  imports: [
    SharedModule,
    HrRoutingModule
  ]
})

export class HrModule {}
