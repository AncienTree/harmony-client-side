import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared.module';

import {
} from './index';
import { LeavesApplicationComponent } from './leaves-application/leaves-application.component';

@NgModule({
  declarations: [
    LeavesApplicationComponent,
],
  imports: [
    SharedModule
  ]
})
export class ApplicationOptionsModule { }
