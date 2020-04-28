import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ScheduleListComponent
 } from './index';

const hrOptionsRouting: Routes = [
  { path: 'lista', component: ScheduleListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(hrOptionsRouting)],
  exports: [RouterModule]
})
export class HrOptionsRoutingModule {}
