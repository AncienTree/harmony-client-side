import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SectionService } from 'src/app/services/http/section.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
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

  constructor(
    private sectionHttp: SectionService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.sectionHttp.showAll().subscribe(respone => {
      this.dataSource = new MatTableDataSource(respone);
      this.change.detectChanges();
      this.isLoadingResults = false;
    });
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

}
