import { NgModule } from '@angular/core';
import {MatMultiSortModule} from 'ngx-mat-multi-sort';

import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatTreeModule,
  MatSlideToggleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatMenuModule,
  MatDividerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatTooltipModule
} from '@angular/material';

const material = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatTreeModule,
  MatSlideToggleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatMenuModule,
  MatDividerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatTooltipModule,
  MatMultiSortModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
