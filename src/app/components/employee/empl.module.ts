import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbsenceComponent,
  AvailabilityComponent,
  LeaveComponent,
  WorkTimeComponent
 } from './index';

@NgModule({
  declarations: [
    AbsenceComponent,
    AvailabilityComponent,
    LeaveComponent,
    WorkTimeComponent
  ],
  imports: [
    CommonModule
  ]
})

export class EmplModule {}
