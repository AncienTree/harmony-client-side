import { NgModule } from '@angular/core';
import { AbsenceListComponent, EmployeeListComponent, FteComponent, LeaveListComponent } from './index';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [
    AbsenceListComponent,
    EmployeeListComponent,
    FteComponent,
    LeaveListComponent
  ],
  imports: [
    SharedModule
  ]
})

export class RaportModule {}
