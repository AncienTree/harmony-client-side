import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ScheduleListComponent,
  CreateScheduleComponent,
  AddUsersScheduleComponent
 } from './index';

const hrOptionsRouting: Routes = [
  { path: 'lista', component: ScheduleListComponent },
  { path: 'nowyGrafik', component: CreateScheduleComponent },
  { path: 'dodajDoGrafiku', component: AddUsersScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(hrOptionsRouting)],
  exports: [RouterModule]
})
export class HrOptionsRoutingModule {}
