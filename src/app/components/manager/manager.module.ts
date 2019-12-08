import { NgModule } from '@angular/core';
import { CheckAbsenceComponent,
  CheckAvailabilityComponent,
  ManagerComponent,
  ScheduleEmployeeComponent,
  ScheduleGroupComponent } from './index';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [
    CheckAbsenceComponent,
    CheckAvailabilityComponent,
    ManagerComponent,
    ScheduleEmployeeComponent,
    ScheduleGroupComponent,
  ],
  imports: [
    SharedModule
  ]
})

export class ManagerModule {}
