import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.scss']
})
export class SectionEditComponent {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    console.log(data);
  }

}
