import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckAbsenceComponent,
  CheckAvailabilityComponent,
  ManagerComponent,
  ScheduleEmployeeComponent,
  ScheduleGroupComponent } from './index';

const managerRouting: Routes = [
  { path: '', component: ManagerComponent, },
  { path: 'grupy', component: ScheduleGroupComponent },
  { path: 'pracownik', component: ScheduleEmployeeComponent },
  { path: 'urlopy', component: CheckAbsenceComponent },
  { path: 'dyspozycyjnosc', component: CheckAvailabilityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(managerRouting)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {}
