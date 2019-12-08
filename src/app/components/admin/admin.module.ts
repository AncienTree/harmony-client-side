import { NgModule } from '@angular/core';
import { ConfigComponent, ServerComponent, UsersListComponent } from './index';
import { SharedModule } from 'src/app/modules/shared.module';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  declarations: [
    ConfigComponent,
    ServerComponent,
    UsersListComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})

export class AdminModule {}
