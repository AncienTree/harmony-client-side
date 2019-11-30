import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/http/users.service';
import { MatTableDataSource, MatSort, MatPaginator, MatSortable } from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['pozycja', 'login', 'status', 'role', 'aktywuj', 'edytuj'];
  dataSource: MatTableDataSource<any>;
  isLoading = true;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;

  constructor(private userHttp: UsersService) { }

  ngOnInit() {

   }

   ngAfterViewInit() {
    this.userHttp.showAll().subscribe(
      (result) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(result);
      console.log(result);
    });

    this.sort.sort(({id: 'login', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

   applyFilter(filter: string){
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
   }
}
