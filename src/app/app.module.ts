import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkTimeComponent } from './components/employee/work-time/work-time.component';
import { LeaveComponent } from './components/employee/leave/leave.component';
import { AbsenceComponent } from './components/employee/absence/absence.component';
import { AvailabilityComponent } from './components/employee/availability/availability.component';
import { ScheduleGroupComponent } from './components/manager/schedule-group/schedule-group.component';
import { ScheduleEmployeeComponent } from './components/manager/schedule-employee/schedule-employee.component';
import { CheckAbsenceComponent } from './components/manager/check-absence/check-absence.component';
import { CheckAvailabilityComponent } from './components/manager/check-availability/check-availability.component';
import { ScheduleComponent } from './components/hr/schedule/schedule.component';
import { PersonalDataComponent } from './components/hr/personal-data/personal-data.component';
import { HireComponent } from './components/hr/hire/hire.component';
import { ApplicationComponent } from './components/hr/application/application.component';
import { EmployeeListComponent } from './components/raports/employee-list/employee-list.component';
import { LeaveListComponent } from './components/raports/leave-list/leave-list.component';
import { AbsenceListComponent } from './components/raports/absence-list/absence-list.component';
import { FteComponent } from './components/raports/fte/fte.component';
import { UsersListComponent } from './components/admin/users-list/users-list.component';
import { ConfigComponent } from './components/admin/config/config.component';
import { ServerComponent } from './components/admin/server/server.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ManagerComponent } from './components/manager/manager/manager.component';
import { HrComponent } from './components/hr/hr/hr.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActiveBooleanPipe } from './pipe/active-boolean.pipe';
import { RolesPipe } from './pipe/roles.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkTimeComponent,
    LeaveComponent,
    AbsenceComponent,
    AvailabilityComponent,
    ScheduleGroupComponent,
    ScheduleEmployeeComponent,
    CheckAbsenceComponent,
    CheckAvailabilityComponent,
    ScheduleComponent,
    PersonalDataComponent,
    HireComponent,
    ApplicationComponent,
    EmployeeListComponent,
    LeaveListComponent,
    AbsenceListComponent,
    FteComponent,
    UsersListComponent,
    ConfigComponent,
    ServerComponent,
    NotFoundComponent,
    ManagerComponent,
    HrComponent,
    ActiveBooleanPipe,
    RolesPipe,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
