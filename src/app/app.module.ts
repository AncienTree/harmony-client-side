import { ContractEditComponent } from './components/hr/hr/options/contracts/contract-edit/contract-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RaportModule } from './components/raports/raport.module';
import { ManagerModule } from './components/manager/manager.module';
import { HrModule } from './components/hr/hr.module';
import { EmplModule } from './components/employee/empl.module';
import { AdminModule } from './components/admin/admin.module';
import { SharedModule } from './modules/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NotFoundModule } from './components/not-found/not-found.module';
import { HttpInterceptService } from './services/http/http-intercept.service';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_DATE_LOCALE, MatSortModule } from '@angular/material';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ScheduleEditComponent } from './components/hr';
import { DialogEditComponent } from './components/admin';
import { registerLocaleData } from '@angular/common';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { EditDetailsComponent } from './components/hr/personal-data/details/edit-details/edit-details.component';
import { SectionEditComponent } from './components/hr/hr/options/sections/section-edit/section-edit.component';

import localePl from '@angular/common/locales/pl';
import { Status } from './utiles/status';
import { LineEditComponent } from './components/hr/hr/options/lines/line-edit/line-edit.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
  ],
  entryComponents: [
    ScheduleEditComponent,
    DialogEditComponent,
    EditDetailsComponent,
    SectionEditComponent,
    LineEditComponent,
    ContractEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    DashboardModule,
    RaportModule,
    ManagerModule,
    HrModule,
    EmplModule,
    AdminModule,
    NotFoundModule,
    HttpClientModule,
    SharedModule,
    MatSortModule,
  ],
  providers: [
    Status,
    CookieService,
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptService,
      multi: true
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 3500 }
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pl-PL'
    },
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
