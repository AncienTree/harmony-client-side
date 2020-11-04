import { NgModule } from '@angular/core';
import { CheckAbsenceComponent,
  CheckAvailabilityComponent,
  ManagerComponent,
  ScheduleEmployeeComponent,
  ScheduleGroupComponent,
  DeclineRequestComponent
 } from './index';
import { SharedModule } from 'src/app/modules/shared.module';
import { ManagerRoutingModule } from './manager.routing.module';

@NgModule({
  declarations: [
    CheckAbsenceComponent,
    CheckAvailabilityComponent,
    ManagerComponent,
    ScheduleEmployeeComponent,
    ScheduleGroupComponent,
    DeclineRequestComponent,
  ],
  imports: [
    SharedModule,
    ManagerRoutingModule
  ]
})

export class ManagerModule {}
