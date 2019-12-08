import { NgModule } from '@angular/core';
import {
  AbsenceComponent,
  AvailabilityComponent,
  LeaveComponent,
  WorkTimeComponent
 } from './index';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [
    AbsenceComponent,
    AvailabilityComponent,
    LeaveComponent,
    WorkTimeComponent
  ],
  imports: [
    SharedModule
  ]
})

export class EmplModule {}
