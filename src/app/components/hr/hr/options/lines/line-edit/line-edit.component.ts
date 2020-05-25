import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { LineService } from 'src/app/services/http/settings/line.service';

@Component({
  templateUrl: './line-edit.component.html',
  styleUrls: ['./line-edit.component.scss']
})
export class LineEditComponent {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private lineHttp: LineService,
    private snackBarRef: MatSnackBar,
  ) { }

  form = this.fb.group({
    name: [this.data.line.name, Validators.required]
  });

  submit() {
    const line = this.data.line;
    line.name = this.form.get('name').value;

    if (this.data.type === 'update') {
      this.lineHttp.update(line).subscribe(response => {
        this.snackBarRef.open(response, 'close', {
          panelClass: ['green-snackbar']
        });
      });
    } else {
      line.id = 0;
      this.lineHttp.create(line).subscribe(
        response => {
          this.snackBarRef.open(response, 'close', {
            panelClass: ['green-snackbar']
          });
        });
    }
  }
}
