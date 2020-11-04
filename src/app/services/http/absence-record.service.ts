import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { AbsenceRecord } from './../../model/absence-record';
import { AbsenceRecordSerializer } from './../../model/Serializer/absence-record-serializer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbsenceRecordService extends HttpService<AbsenceRecord> {

  constructor(private http: HttpClient) {
    super(
      http,
      'schedule/absence',
      new AbsenceRecordSerializer()
    );
   }

   public getEmployeeAbsencesRequest(employeeId): Observable<AbsenceRecord[]> {
    return this.http
      .get<AbsenceRecord[]>(`${this.url}/schedule/absence/employee/${employeeId}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getSectionAbsencesRequest(sectionId): Observable<AbsenceRecord[]> {
    return this.http
      .get<AbsenceRecord[]>(`${this.url}/schedule/absence/section/${sectionId}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public getMy(opt, year): Observable<AbsenceRecord[]> {
    return this.http
      .get<AbsenceRecord[]>(`${this.url}/schedule/absence/my?opt=${opt}&year=${year}`)
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public submitAbsence(data: AbsenceRecord[]): Observable<any> {
    return this.http
      .post(`${this.url}/schedule/absence/`, data, { responseType: 'text'})
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public acceptAbsence(id): Observable<any> {
    return this.http
      .post(`${this.url}/schedule/absence/accept`, id, { responseType: 'text'})
      .pipe(
        catchError(super.errorHandl)
      );
  }

  public declineAbsence(record: AbsenceRecord): Observable<any> {
    return this.http
      .post(`${this.url}/schedule/absence/decline`, record, { responseType: 'text'})
      .pipe(
        catchError(super.errorHandl)
      );
  }
}
