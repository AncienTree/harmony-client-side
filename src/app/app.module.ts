import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './layout/navi/navigator/navigator.component';
import { MenuComponent } from './layout/navi/menu/menu.component';
import { FooterComponent } from './layout/navi/footer/footer.component';
import { TestComponent } from './layout/test/test.component';
import { TesthttpService } from './services/testhttp.service';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UserComponent } from './layout/user/user.component';
import { AdminComponent } from './layout/admin/admin.component';
import { HrComponent } from './layout/hr/hr.component';
import { RaportsComponent } from './layout/raports/raports.component';
import { NotFoundComponent } from './layout/error-page/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    MenuComponent,
    FooterComponent,
    TestComponent,
    DashboardComponent,
    UserComponent,
    AdminComponent,
    HrComponent,
    RaportsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TesthttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
