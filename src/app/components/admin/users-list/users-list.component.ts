import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/http/users.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['pozycja', 'login', 'status', 'role', 'aktywuj', 'edytuj'];
  dataSource = new MatTableDataSource();
  isLoading = true;

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
}
