import { NgModule } from '@angular/core';

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
  MatSnackBarModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
