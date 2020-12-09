import { AvailabilityDashboardComponent } from './availability-dashboard/availability-dashboard.component';
import { LeavesApplicationComponent } from './application/options/leaves-application/leaves-application.component';
import { PresenceComponent } from './presence/presence.component';
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
import { DetailsComponent } from './personal-data/details/details.component';

const hrRouting: Routes = [
  { path: '', component: HrComponent, canActivateChild: [RouteGuardService], children: [
    { path: '', loadChildren: () => import('./hr/options/hr-options.module').then(m => m.HrOptionsModule) },
  ] },
  { path: 'harmonogram', component: ScheduleComponent },
  { path: 'stan-osobowy', component: PersonalDataComponent },
  { path: 'dane/:id', component: DetailsComponent },
  { path: 'zatrudnij', component: HireComponent },
  { path: 'obecnosc', component: PresenceComponent},
  { path: 'wnioski', component: ApplicationComponent },
  { path: 'wnioski/urlopy', component: LeavesApplicationComponent },
  { path: 'dyspozycyjnosc', component: AvailabilityDashboardComponent, children: [
    { path: '', loadChildren: () => import('./availability-dashboard/modules/availability.module').then(m => m.AvailabilityModule) },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(hrRouting)],
  exports: [RouterModule]
})
export class HrRoutingModule {}
