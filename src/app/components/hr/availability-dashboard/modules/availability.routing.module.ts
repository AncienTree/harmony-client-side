import { AvailabilityListComponent } from './availability-list/availability-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailabilityCreationComponent } from './availability-creation/availability-creation.component';

const availabilityRouting: Routes = [
  { path: 'lista', component: AvailabilityListComponent},
  { path: 'utworz', component: AvailabilityCreationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(availabilityRouting)],
  exports: [RouterModule]
})
export class AvailabilityRoutingModule {}
