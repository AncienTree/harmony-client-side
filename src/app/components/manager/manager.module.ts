import { NgModule } from '@angular/core';
import { CheckAbsenceComponent,
  CheckAvailabilityComponent,
  ManagerComponent,
  ScheduleEmployeeComponent,
  ScheduleGroupComponent } from './index';
import { SharedModule } from 'src/app/modules/shared.module';
import { ManagerRoutingModule } from './manager.routing.module';

@NgModule({
  declarations: [
    CheckAbsenceComponent,
    CheckAvailabilityComponent,
    ManagerComponent,
    ScheduleEmployeeComponent,
    ScheduleGroupComponent,
  ],
  imports: [
    SharedModule,
    ManagerRoutingModule
  ]
})

export class ManagerModule {}
