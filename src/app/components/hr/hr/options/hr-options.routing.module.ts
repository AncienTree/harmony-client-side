import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ScheduleListComponent,
  CreateScheduleComponent,
  AddUsersScheduleComponent,
  SectionsComponent
 } from './index';

const hrOptionsRouting: Routes = [
  { path: 'lista', component: ScheduleListComponent },
  { path: 'nowyGrafik', component: CreateScheduleComponent },
  { path: 'dodajDoGrafiku', component: AddUsersScheduleComponent },
  { path: 'sekcje', component: SectionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(hrOptionsRouting)],
  exports: [RouterModule]
})
export class HrOptionsRoutingModule {}
