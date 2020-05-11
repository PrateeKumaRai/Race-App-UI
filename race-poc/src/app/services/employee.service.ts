import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from '../Employee/Employee.model';
import { UserFilter } from '../model/UserFilter.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  URL = 'http://35.239.248.250:8082/seatVisulization/getUpdatedSeat';
  URL1 = 'http://35.239.248.250:8082/seatVisulization/updatedSeatStatus';
  URL2 = 'http://35.239.248.250:8082/seatVisulization/updatedSeatStatusAfterBooking';
  URL3 = 'http://35.239.248.250:8082/seatVisulization/getUpdatedSeatBymail';
  URL4 = 'http://35.239.248.250:8082/seatVisulization/cancleSeatAfterBooking';

  employee: string;
  token: any;
  userList: UserFilter[];

  constructor(private http: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + " " + localStorage.getItem('token'),
    })
   };

  updateProfile(userData, token1): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    return this.http
      .post<any>('http://35.239.248.250:8085/updateProfile', userData, httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

//http://35.239.248.250:8085/updateProfile
//http://localhost:8082/updateProfile

  updateSeatInfo(userData, token1): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token1
      })
    };
    console.log(this.httpOptions)
    return this.http
      .post<any>('http://35.239.248.250:8085/updateSeat', userData, httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }


  getAllEmployee(): Observable<HttpResponse<Employee[]>> {
    return this.http.get<Employee[]>(this.URL, { observe: 'response' });
  }

  getBookedSeat(userdata): Observable<HttpResponse<Employee>>  {
    return this.http.post<Employee>(this.URL3,userdata, { observe: 'response' });
  }

  unbookSeat(userdata): Observable<HttpResponse<Employee>>  {
    return this.http.post<Employee>(this.URL4,userdata, { observe: 'response' });
  }

  addEmployee(emp: Employee): Observable<HttpResponse<Employee>> {
    return this.http.post<Employee>(this.URL1, emp, { observe: 'response' });
  }


  updatedSeatStatusAfterBooking(employee: Employee): Observable<HttpResponse<Employee>> {
    return this.http.post<Employee>(this.URL2, employee, { observe: 'response' });
  }
}