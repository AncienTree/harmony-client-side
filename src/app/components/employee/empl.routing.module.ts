import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AbsenceComponent,
  AvailabilityComponent,
  LeaveComponent,
  WorkTimeComponent
 } from './index';

const emplRouting: Routes = [
      { path: '', component: WorkTimeComponent },
      { path: 'urlop', component: LeaveComponent },
      { path: 'nieobecnosc', component: AbsenceComponent },
      { path: 'dyspozycyjnosc', component: AvailabilityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(emplRouting)],
  exports: [RouterModule]
})
export class EmplRoutingModule {}
