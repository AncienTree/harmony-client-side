import { AvailabilityRoutingModule } from './availability.routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared.module';
import { AvailabilityListComponent } from './availability-list/availability-list.component';
import { AvailabilityCreationComponent } from './availability-creation/availability-creation.component';

@NgModule({
  declarations: [
    AvailabilityListComponent,
    AvailabilityCreationComponent
  ],
  imports: [
    SharedModule,
    AvailabilityRoutingModule
  ]
})
export class AvailabilityModule { }
