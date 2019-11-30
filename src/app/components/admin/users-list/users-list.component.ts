import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/http/users.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['pozycja', 'login', 'status', 'rola', 'aktywuj', 'edytuj'];
  dataSource: MatTableDataSource<any>;
  isLoading = true;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userHttp: UsersService) { }

  ngOnInit() {
    this.userHttp.showAll().subscribe(
      (result) => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(result);
      console.log(result);
    });
   }

   ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

   applyFilter(filter: string){
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
   }
}
