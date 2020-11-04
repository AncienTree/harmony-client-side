import { AbsenceRecordService } from 'src/app/services/http/absence-record.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { AbsenceRecord } from 'src/app/model/absence-record';

@Component({
  templateUrl: './decline-request.component.html',
  styleUrls: ['./decline-request.component.scss']
})
export class DeclineRequestComponent {
  text;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AbsenceRecord,
    private dialogRef: MatDialogRef<DeclineRequestComponent>,
    private absenceHttp: AbsenceRecordService
  ) { }

  save() {
    this.data.text = this.text;
    this.absenceHttp.declineAbsence(this.data).subscribe(() => {
      this.dialogRef.close({ status: 'deleted' });
    });
  }

  cancel() {
    this.dialogRef.close({ status: 'cancel' });
  }
}
