import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from 'src/app/services/http/users.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { Users } from 'src/app/model/users';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private change: ChangeDetectorRef,
    private authServ: AuthenticationService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  // Odświeżanie tabeli
  refresh() {
    this.userHttp.showAll()
      .pipe(
        map((response) => {
          response = response.filter((data) => data.status === this.isActivated);
          return response;
        })
      )
      .subscribe(result => {
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

  // Zmiana statusu 'aktywny'
  changeStatus(id, status) {
    if (confirm('Czy na pewno chcesz zmienić status')) {
      this.userHttp.changeStatus(id, status).subscribe(() => {
        this.refresh();
      });
    }
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
    }, 600);
  }

  isLoggedUser(user) {
    return(this.authServ.getAuthenticatedUser() === user);
  }

  statusColor(user: Users) {
    if (!this.isLoggedUser(user.login)) {
      if (user.status === true) {
        return 'red';
      } else {
        return 'green';
      }
    }
    return 'grey';
  }
}
