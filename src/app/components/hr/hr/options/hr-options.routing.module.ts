import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ScheduleListComponent,
  CreateScheduleComponent,
  AddUsersScheduleComponent,
  SectionsComponent,
  LinesComponent,
  ContractsComponent,
  DayoffComponent,
  MonthHoursComponent
 } from './index';

const hrOptionsRouting: Routes = [
  { path: 'lista', component: ScheduleListComponent },
  { path: 'nowyGrafik', component: CreateScheduleComponent },
  { path: 'dodajDoGrafiku', component: AddUsersScheduleComponent },
  { path: 'sekcje', component: SectionsComponent },
  { path: 'linie', component: LinesComponent },
  { path: 'umowy', component: ContractsComponent },
  { path: 'wolne', component: DayoffComponent },
  { path: 'rbh', component: MonthHoursComponent },
];

@NgModule({
  imports: [RouterModule.forChild(hrOptionsRouting)],
  exports: [RouterModule]
})
export class HrOptionsRoutingModule {}
