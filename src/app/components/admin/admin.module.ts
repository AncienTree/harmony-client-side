import { NgModule } from '@angular/core';
import { ConfigComponent, ServerComponent, UsersListComponent, DialogEditComponent } from './index';
import { SharedModule } from 'src/app/modules/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
@NgModule({
  declarations: [
    ConfigComponent,
    ServerComponent,
    UsersListComponent,
    DialogEditComponent
  ],
  entryComponents: [
    DialogEditComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})

export class AdminModule {}
