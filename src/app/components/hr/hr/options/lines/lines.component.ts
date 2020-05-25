import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { LineService } from 'src/app/services/http/settings/line.service';
import { LineEditComponent } from './line-edit/line-edit.component';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'action'];
  dataSource;
  isLoadingResults = true;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private lineHttp: LineService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.refresh();
  }

  public refresh() {
      this.lineHttp.getAll().subscribe(respone => {
        this.dataSource = new MatTableDataSource(respone);
        this.change.detectChanges();
        this.isLoadingResults = false;
        this.dataSource.sort = this.sort;
      });
  }

  openDialog(line, type) {
    const dialogRef = this.dialog.open(LineEditComponent, {
      width: '250px',
      data: {
        line,
        type
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.refresh();
      }, 1500);
    });
  }

  delete(line) {
    if (confirm('Czy na pewno chcesz usunąć linię ' + line.name + '?')) {
      this.lineHttp.remove(line.id).subscribe(() => {
        this.refresh();
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
