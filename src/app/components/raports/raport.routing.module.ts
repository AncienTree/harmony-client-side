import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceListComponent, EmployeeListComponent, FteComponent, LeaveListComponent } from './index';


const raportRouting: Routes = [
  { path: 'lista', component: EmployeeListComponent },
  { path: 'urlopy', component: LeaveListComponent },
  { path: 'nieobecnosci', component: AbsenceListComponent },
  { path: 'fte', component: FteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(raportRouting)],
  exports: [RouterModule]
})
export class RaportRoutingModule {}
