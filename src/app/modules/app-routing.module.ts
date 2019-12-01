import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { WorkTimeComponent } from '../components/employee/work-time/work-time.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { LeaveComponent } from '../components/employee/leave/leave.component';
import { AbsenceComponent } from '../components/employee/absence/absence.component';
import { AvailabilityComponent } from '../components/employee/availability/availability.component';
import { ManagerComponent } from '../components/manager/manager/manager.component';
import { ScheduleGroupComponent } from '../components/manager/schedule-group/schedule-group.component';
import { ScheduleEmployeeComponent } from '../components/manager/schedule-employee/schedule-employee.component';
import { CheckAbsenceComponent } from '../components/manager/check-absence/check-absence.component';
import { CheckAvailabilityComponent } from '../components/manager/check-availability/check-availability.component';
import { HrComponent } from '../components/hr/hr/hr.component';
import { ScheduleComponent } from '../components/hr/schedule/schedule.component';
import { PersonalDataComponent } from '../components/hr/personal-data/personal-data.component';
import { HireComponent } from '../components/hr/hire/hire.component';
import { ApplicationComponent } from '../components/hr/application/application.component';
import { EmployeeListComponent } from '../components/raports/employee-list/employee-list.component';
import { LeaveListComponent } from '../components/raports/leave-list/leave-list.component';
import { AbsenceListComponent } from '../components/raports/absence-list/absence-list.component';
import { FteComponent } from '../components/raports/fte/fte.component';
import { UsersListComponent } from '../components/admin/users-list/users-list.component';
import { ConfigComponent } from '../components/admin/config/config.component';
import { ServerComponent } from '../components/admin/server/server.component';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', component: DashboardComponent},
      // Routing Pracownik
      { path: 'empl', component: WorkTimeComponent },
      { path: 'empl/urlop', component: LeaveComponent },
      { path: 'empl/nieobecnosc', component: AbsenceComponent },
      { path: 'empl/dyspozycyjnosc', component: AvailabilityComponent },
      // Routing Kierownika
      { path: 'manager', component: ManagerComponent },
      { path: 'manager/grupy', component: ScheduleGroupComponent },
      { path: 'manager/pracownik', component: ScheduleEmployeeComponent },
      { path: 'manager/urlopy', component: CheckAbsenceComponent },
      { path: 'manager/dyspozycyjnosc', component: CheckAvailabilityComponent },
      // Routing HR
      { path: 'hr', component: HrComponent },
      { path: 'hr/harmonogram', component: ScheduleComponent },
      { path: 'hr/stan-osobowy', component: PersonalDataComponent },
      { path: 'hr/zatrudnij', component: HireComponent },
      { path: 'hr/wnioski', component: ApplicationComponent },
      // Routing Raporty
      { path: 'raport/lista', component: EmployeeListComponent },
      { path: 'raport/urlopy', component: LeaveListComponent },
      { path: 'raport/nieobecnosci', component: AbsenceListComponent },
      { path: 'raport/fte', component: FteComponent },
      // Routing Admin
      { path: 'admin/users', component: UsersListComponent },
      { path: 'admin/config', component: ConfigComponent },
      { path: 'admin/server', component: ServerComponent },

      { path: '**', component: NotFoundComponent },
    ]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // HashLocationStrategy
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
