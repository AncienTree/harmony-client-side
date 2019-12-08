import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RaportModule } from './components/raports/raport.module';
import { ManagerModule } from './components/manager/manager.module';
import { HrModule } from './components/hr/hr.module';
import { EmplModule } from './components/employee/empl.module';
import { AdminModule } from './components/admin/admin.module';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RaportModule,
    ManagerModule,
    HrModule,
    EmplModule,
    AdminModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
