import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared.module';
import { HrOptionsRoutingModule } from './hr-options.routing.module';

import {
  ScheduleListComponent,
  CreateScheduleComponent,
  AddUsersScheduleComponent
} from './index';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  declarations: [
    ScheduleListComponent,
    CreateScheduleComponent,
    AddUsersScheduleComponent,
    SectionsComponent
  ],
  imports: [
    SharedModule,
    HrOptionsRoutingModule
  ]
})
export class HrOptionsModule { }
