import { NgModule } from '@angular/core';
import { AbsenceListComponent, EmployeeListComponent, FteComponent, LeaveListComponent } from './index';
import { SharedModule } from 'src/app/modules/shared.module';
import { RaportRoutingModule } from './raport.routing.module';

@NgModule({
  declarations: [
    AbsenceListComponent,
    EmployeeListComponent,
    FteComponent,
    LeaveListComponent
  ],
  imports: [
    SharedModule,
    RaportRoutingModule
  ]
})

export class RaportModule {}
