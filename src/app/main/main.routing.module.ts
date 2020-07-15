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
      // tslint:disable-next-line: max-line-length
      { path: 'manager', loadChildren: '../components/manager/manager.module#ManagerModule', data: { allowedRoles: ['ROLE_ADMIN', 'ROLE_HR', 'ROLE_SPEC', 'ROLE_MANAGER', 'ROLE_SENIOR'] } },
      { path: 'hr', loadChildren: '../components/hr/hr.module#HrModule', data: { allowedRoles: ['ROLE_ADMIN', 'ROLE_HR', 'ROLE_SENIOR'] } },
      // tslint:disable-next-line: max-line-length
      { path: 'raport', loadChildren: '../components/raports/raport.module#RaportModule', data: { allowedRoles: ['ROLE_ADMIN', 'ROLE_HR', 'ROLE_SENIOR'] } },
      { path: 'admin', loadChildren: '../components/admin/admin.module#AdminModule', data: { allowedRoles: ['ROLE_ADMIN'] } },
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
