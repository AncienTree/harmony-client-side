import { ContractEditComponent } from './contract-edit/contract-edit.component';
import { ContractService } from './../../../../../services/http/settings/contract.service';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'action'];
  dataSource;
  isLoadingResults = true;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private contractHttp: ContractService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.refresh();
  }

  public refresh() {
      this.contractHttp.getAll().subscribe(respone => {
        this.dataSource = new MatTableDataSource(respone);
        this.change.detectChanges();
        this.isLoadingResults = false;
        this.dataSource.sort = this.sort;
      });
  }

  openDialog(contract, type) {
    const dialogRef = this.dialog.open(ContractEditComponent, {
      width: '250px',
      data: {
        contract,
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
    if (confirm('Czy na pewno chcesz usunąć umowę ' + line.name + '?')) {
      this.contractHttp.remove(line.id).subscribe(() => {
        this.refresh();
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
