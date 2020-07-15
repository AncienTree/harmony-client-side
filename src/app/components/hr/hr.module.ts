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
import { SectionEditComponent } from './hr/options/sections/section-edit/section-edit.component';
import { LineEditComponent } from './hr/options/lines/line-edit/line-edit.component';
import { ContractEditComponent } from './hr/options/contracts/contract-edit/contract-edit.component';
import { DayoffEditComponent } from './hr/options/dayoff/dayoff-edit/dayoff-edit.component';

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
    ContractEditComponent
  ],
  imports: [
    SharedModule,
    HrRoutingModule
  ]
})

export class HrModule {}
