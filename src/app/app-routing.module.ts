import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AdminComponent } from './layout/admin/admin.component';
import { HrComponent } from './layout/hr/hr.component';
import { UserComponent } from './layout/user/user.component';
import { RaportsComponent } from './layout/raports/raports.component';
import { NotFoundComponent } from './layout/error-page/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'hr',
    component: HrComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'raports',
    component: RaportsComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
