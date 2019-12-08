import { NgModule } from '@angular/core';
import { ConfigComponent, ServerComponent, UsersListComponent } from './index';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  declarations: [
    ConfigComponent,
    ServerComponent,
    UsersListComponent,
  ],
  imports: [
    SharedModule
  ]
})

export class AdminModule {}
