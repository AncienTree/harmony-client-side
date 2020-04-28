import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared.module';
import { HrOptionsRoutingModule } from './hr-options.routing.module';

import { ScheduleListComponent } from './index';

@NgModule({
  declarations: [
    ScheduleListComponent,
  ],
  imports: [
    SharedModule,
    HrOptionsRoutingModule
  ]
})
export class HrOptionsModule { }
