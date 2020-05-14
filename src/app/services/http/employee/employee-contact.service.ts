import { Injectable } from '@angular/core';
import { EmployeeContact } from 'src/app/model/employee-contact';
import { HttpService } from '../http.service';
import { environment } from 'src/environments/environment';
import { EmployeeContactSerializer } from 'src/app/model/Serializer/employee-contact-serializer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeContactService extends HttpService<EmployeeContact> {

  readonly url = environment.url;

  constructor(private http: HttpClient) {
    super(
      http,
      'employee',
      new EmployeeContactSerializer());
   }
}
