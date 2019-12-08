import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActiveBooleanPipe } from '../pipe/active-boolean.pipe';
import { RolesPipe } from '../pipe/roles.pipe';



@NgModule({
  declarations: [
    ActiveBooleanPipe,
    RolesPipe,
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
  ]
})
export class SharedModule { }
