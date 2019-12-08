import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRoutingModule } from '../components/login/login.routing.module';
import { NotFoundRoutingModule } from '../components/not-found/not-found.routing.module';
import { MainRoutingModule } from '../main/main.routing.module';

const routes: Routes = [];

@NgModule({
  // HashLocationStrategy
  imports: [
    LoginRoutingModule,
    MainRoutingModule,
    NotFoundRoutingModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
