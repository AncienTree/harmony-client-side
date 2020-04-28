import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ApplicationComponent,
  HireComponent,
  HrComponent,
  PersonalDataComponent,
  ScheduleComponent
 } from './index';
import { RouteGuardService } from 'src/app/services/route-guard.service';

const hrRouting: Routes = [
  // { path: '', component: HrComponent, canActivateChild: [RouteGuardService], children: [
  //   { path: '', loadChildren: './hr/options/hr-options.module#HrOptionsModule' },
  // ] },
  { path: '', component: HrComponent, canActivateChild: [RouteGuardService], children: [
    { path: '', loadChildren: () => import('./hr/options/hr-options.module').then(m => m.HrOptionsModule) },
  ] },
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
