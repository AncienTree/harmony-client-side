import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SectionService } from 'src/app/services/http/section.service';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { SectionEditComponent } from './section-edit/section-edit.component';
import { Section } from 'src/app/model/section';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'lider', 'expired', 'action'];
  dataSource;
  isLoadingResults = true;
  isChecked = true;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private sectionHttp: SectionService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.refresh();
  }

  public refresh() {
    if (this.isChecked) {
      this.sectionHttp.showAll().subscribe(respone => {
        this.dataSource = new MatTableDataSource(respone);
        this.change.detectChanges();
        this.isLoadingResults = false;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else {
      this.sectionHttp.getAllExpired().subscribe(respone => {
        this.dataSource = new MatTableDataSource(respone);
        this.change.detectChanges();
        this.isLoadingResults = false;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  openDialog(section, type) {
    const dialogRef = this.dialog.open(SectionEditComponent, {
      width: '250px',
      data: {
        section,
        type
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.refresh();
      }, 1500);
    });
  }

  delete(section: Section) {
    if (confirm('Czy na pewno chcesz usunąć grupę ' + section.name + '?')) {
      this.sectionHttp.remove(section.id).subscribe(() => {
        this.refresh();
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
