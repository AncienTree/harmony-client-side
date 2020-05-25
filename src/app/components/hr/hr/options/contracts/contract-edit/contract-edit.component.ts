import { ContractService } from './../../../../../../services/http/settings/contract.service';
import { Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, Optional, Inject } from '@angular/core';

@Component({
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.scss']
})
export class ContractEditComponent {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private contractHttp: ContractService,
    private snackBarRef: MatSnackBar,
  ) { }

  form = this.fb.group({
    name: [this.data.contract.name, Validators.required]
  });

  submit() {
    const contract = this.data.contract;
    contract.name = this.form.get('name').value;

    if (this.data.type === 'update') {
      this.contractHttp.update(contract).subscribe(response => {
        this.snackBarRef.open(response, 'close', {
          panelClass: ['green-snackbar']
        });
      });
    } else {
      contract.id = 0;
      this.contractHttp.create(contract).subscribe(
        response => {
          this.snackBarRef.open(response, 'close', {
            panelClass: ['green-snackbar']
          });
        });
    }
  }
}
