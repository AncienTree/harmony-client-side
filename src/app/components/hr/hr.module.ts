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
  EditDetailsComponent
 } from './index';
import { SharedModule } from 'src/app/modules/shared.module';
import { HrRoutingModule } from './hr.routing.module';

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
    EditDetailsComponent
  ],
  imports: [
    SharedModule,
    HrRoutingModule
  ]
})

export class HrModule {}
