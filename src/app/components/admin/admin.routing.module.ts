import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent, ServerComponent, UsersListComponent } from './index';

const adminRouting: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'server', component: ServerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRouting)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
