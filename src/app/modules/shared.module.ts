import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActiveBooleanPipe } from '../pipe/active-boolean.pipe';
import { RolesPipe } from '../pipe/roles.pipe';
import { StatusPipe } from '../pipe/status.pipe';



@NgModule({
  declarations: [
    ActiveBooleanPipe,
    RolesPipe,
    StatusPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    ActiveBooleanPipe,
    RolesPipe,
    StatusPipe,
  ]
})
export class SharedModule { }
