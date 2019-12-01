import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/http/users.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { map } from 'rxjs/operators';


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

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;

  constructor(private userHttp: UsersService) { }

  ngOnInit() {
    return this.userHttp.showAll().subscribe( result => {
      this.dataSource.data = result;
      this.isLoading = false;
    });
   }

   ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

   applyFilter(filter: string){
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
   }

  //  activated() {
  //   if(this.isActivated) {
  //     this.dataSource.filter = '';
  //   } else {
  //     this.dataSource.filterPredicate = (data, filter: string) => {

  //     }
  //   }
  //  }

  changeStatus(id, status){
    this.userHttp.updateStatus(id, status).subscribe();
    console.log('zmiana statusu');
    console.log(id + ' - ' + !status);
  }
}
