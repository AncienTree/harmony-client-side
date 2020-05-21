import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/http/employee/employee.service';
import { SectionService } from 'src/app/services/http/section.service';

@Component({
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.scss']
})
export class SectionEditComponent implements OnInit {

  liders;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private employeeHttp: EmployeeService,
    private sectionHttp: SectionService,
    private snackBarRef: MatSnackBar,
  ) { }

  form = this.fb.group({
    name: [this.data.section.name, Validators.required],
    expired: [this.data.section.expired, Validators.required],
    lider: [this.data.section.lider, Validators.required]
  });

  ngOnInit() {
    console.log(this.data);

    this.employeeHttp.getSimpleEmployeesByPosition('kierownik').subscribe(data => {
      this.liders = data;
    });
  }

  submit() {
    const section = this.data.section;
    section.name = this.form.get('name').value;
    section.lider = this.form.get('lider').value;
    section.expired = this.form.get('expired').value;

    if (this.data.type === 'update') {
      this.sectionHttp.update(section).subscribe(response => {
        this.snackBarRef.open(response, 'close', {
          panelClass: ['green-snackbar']
        });
      });
    } else {
      section.id = 0;
      this.sectionHttp.create(section).subscribe(
        response => {
          this.snackBarRef.open(response, 'close', {
            panelClass: ['green-snackbar']
          })
        },
          err => {
            // tslint:disable-next-line: max-line-length
            this.snackBarRef.open('Sekcja nie została utworzona, pamiętaj że jeden kierownik może mieć tylko jedną aktywną sekcję.', 'close', {
              panelClass: ['red-snackbar']
            });
          });
    }
  }
}
