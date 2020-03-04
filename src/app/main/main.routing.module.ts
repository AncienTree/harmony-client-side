import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { RouteGuardService } from 'src/app/services/route-guard.service';

const mainRouting: Routes = [
  {
    path: 'main', component: MainComponent, canActivateChild: [RouteGuardService],
    children: [
      { path: '', loadChildren: '../components/dashboard/dashboard.module#DashboardModule' },
      { path: 'empl', loadChildren: '../components/employee/empl.module#EmplModule', data: { allowedRoles: ['ROLE_ADMIN'] } },
      { path: 'manager', loadChildren: '../components/manager/manager.module#ManagerModule', data: { allowedRoles: ['ROLE_ADMIN', 'ROLE_HR', 'ROLE_SPEC', 'ROLE_MANAGER'] } },
      { path: 'hr', loadChildren: '../components/hr/hr.module#HrModule', data: { allowedRoles: ['ROLE_ADMIN', 'ROLE_HR'] } },
      { path: 'raport', loadChildren: '../components/raports/raport.module#RaportModule', data: { allowedRoles: ['ROLE_ADMIN', 'ROLE_HR'] } },
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
