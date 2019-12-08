import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ApplicationComponent,
  HireComponent,
  HrComponent,
  PersonalDataComponent,
  ScheduleComponent
 } from './index';

const hrRouting: Routes = [
  { path: '', component: HrComponent },
  { path: 'harmonogram', component: ScheduleComponent },
  { path: 'stan-osobowy', component: PersonalDataComponent },
  { path: 'zatrudnij', component: HireComponent },
  { path: 'wnioski', component: ApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(hrRouting)],
  exports: [RouterModule]
})
export class HrRoutingModule {}
