import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const notFoundRouting: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(notFoundRouting)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {}
