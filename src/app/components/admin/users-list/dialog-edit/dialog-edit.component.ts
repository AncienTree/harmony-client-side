import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/services/http/users.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent {
  login: string;
  password: string;
  status: boolean;
  role: string;

  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: Users,
    private userHttp: UsersService) {
      this.status = this.data.status;
      this.role = this.data.role;
      this.login = this.data.login;
  }

  update() {
    this.userHttp.updateUser(this.data.id, this.password, this.status, this.role).subscribe( () => {
      console.log('Update complite');
    });
    this.dialogRef.close();
  }
}
