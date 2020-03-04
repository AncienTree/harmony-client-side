import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { RouteGuardService } from 'src/app/services/route-guard.service';

const mainRouting: Routes = [
  {
    path: 'main', component: MainComponent, canActivateChild: [RouteGuardService],
    children: [
      { path: '', loadChildren: '../components/dashboard/dashboard.module#DashboardModule' },
      { path: 'empl', loadChildren: '../components/employee/empl.module#EmplModule' },
      { path: 'manager', loadChildren: '../components/manager/manager.module#ManagerModule' },
      { path: 'hr', loadChildren: '../components/hr/hr.module#HrModule' },
      { path: 'raport', loadChildren: '../components/raports/raport.module#RaportModule' },
      { path: 'admin', loadChildren: '../components/admin/admin.module#AdminModule' },
      { path: '**', loadChildren: '../components/not-found/not-found.module#NotFoundModule' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRouting)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
