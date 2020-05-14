import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public employeeId;
  isLoadingResults = false;

  constructor(
    private route: ActivatedRoute,
    private returnRoute: Router
    ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
  }

  return() {
    this.returnRoute.navigate(['/main/hr/stan-osobowy']);
  }

}
