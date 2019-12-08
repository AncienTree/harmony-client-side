import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent, ServerComponent, UsersListComponent } from './index';
import { MaterialModule } from 'src/app/modules/material.module';
import { ActiveBooleanPipe } from 'src/app/pipe/active-boolean.pipe';
import { RolesPipe } from 'src/app/pipe/roles.pipe';

@NgModule({
  declarations: [
    ConfigComponent,
    ServerComponent,
    UsersListComponent,
    ActiveBooleanPipe,
    RolesPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class AdminModule {}
