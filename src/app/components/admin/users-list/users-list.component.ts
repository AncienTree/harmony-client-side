import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from 'src/app/services/http/users.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['pozycja', 'login', 'role', 'status', 'aktywuj', 'edytuj'];
  dataSource = new MatTableDataSource();
  isLoading = true;
  isActivated = true;
  user: Users;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private userHttp: UsersService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.refresh();
  }

  // Odświeżanie tabeli
  refresh() {
    this.userHttp.showAll().subscribe(result => {
      this.dataSource.data = result;
      this.isLoading = false;
      this.change.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
  }

  // activated() {
  //   if (this.isActivated) {
  //     this.dataSource.filter = '';
  //   } else {
  //     this.dataSource.filterPredicate = (data: Users, filter: string) => {
  //       this.user.status.valueOf(filter) != -1;
  //     }
  //   }
  // }

  // Zmiana statusu 'aktywny'
  changeStatus(id, status) {
    this.userHttp.changeStatus(id, status).subscribe(() => {
      this.refresh();
    });
    console.log('zmiana statusu');
    console.log(id + ' - ' + !status);
  }

  // Edycja danych
  editDialog(id: number) {
    this.userHttp.read(id).subscribe(result => {
      console.log('result: ' + result.login);
      this.change.detectChanges();
      this.user = result;
    });
    // Timeout potrzebny aby Obervable mógł przypisać wynik do user
    setTimeout(() => {
      const dialogRef = this.dialog.open(DialogEditComponent, {
        width: '300px',
        data: this.user,
        disableClose: true,
        autoFocus: true
      }).afterClosed().subscribe(() => window.location.reload());
    }, 300);
  }
}
