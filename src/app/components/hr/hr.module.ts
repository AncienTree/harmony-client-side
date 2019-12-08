import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApplicationComponent,
  HireComponent,
  HrComponent,
  PersonalDataComponent,
  ScheduleComponent
 } from './index';

@NgModule({
  declarations: [
    ApplicationComponent,
    HireComponent,
    HrComponent,
    PersonalDataComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HrModule {}
