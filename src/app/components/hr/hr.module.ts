import { NgModule } from '@angular/core';
import {
  ApplicationComponent,
  HireComponent,
  HrComponent,
  PersonalDataComponent,
  ScheduleComponent
 } from './index';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [
    ApplicationComponent,
    HireComponent,
    HrComponent,
    PersonalDataComponent,
    ScheduleComponent
  ],
  imports: [
    SharedModule
  ]
})

export class HrModule {}
