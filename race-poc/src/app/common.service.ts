import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ArgumentOutOfRangeError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './model/user';
import { capAsset } from './capAsset.module';
import { Router, ActivatedRoute } from '@angular/router';





import { UserDetails } from './user-list/user-details.model';
import { IonItemSliding } from '@ionic/angular';
import { Employee } from './Employee/Employee.model';
import { CreateQuiz } from './quiz/qz_createquiz/createQuiz.model';
import { AddQuestion } from './quiz/qz_addquestion/addQuestion.model';
import { AddAnswers } from './quiz/qz_addquestion/addAnswer.model';
import { Admin } from './quiz/qz_admin/admin.model';
import { Player } from './quiz/qz_player/player.model';
import { Playquiz } from './quiz/qz_playquiz/playquiz.model';
import { AdminUserSync } from './quiz/qz_admin_quizdash/admin_start_quiz/admimusersync.model';

@Injectable()
export class CommonService {

  token:any;
 
  base_path = 'http://localhost:8093/api/';
 
  regitser(userData: string) {
    throw new Error("Method not implemented.");
  }

   constructor(private http: HttpClient) {
    this.token= localStorage.getItem('token');
   
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  //  httpOptions1 = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'Bearer' +" " +this.token
  //   })
  // };

  // getHeaders(): HttpHeaders {
  //   let headers = new HttpHeaders();
  //   headers.append('Access-Control-Allow-Origin' , '*');
  //   headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  //   headers.append('Accept','application/json');
  //   headers.append('content-type','application/json');
  //   headers.append('Authorization','Bearer' +this.token);
  //   return headers;
  // }

  // filterItems(searchTerm) {
  //   return this.items.filter(item => {
  //     return item.username.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //   });
  // }

  updateProfile(userData):Observable<any>{
    console.log(this.httpOptions)
    return this.http
    .post<any>('http://localhost:8082/updateProfile', userData, this.httpOptions)
    .pipe(
      retry(2),
      catchError(error => {
        return Observable.throw(error);
      })
    )
  }



  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    //console.log(token);
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append("Authorization", 'Bearer ' + token);
    return headers;
  }
//http://localhost:8082/authenticate
//http://35.239.248.250:8085/authenticate
  UserLogin(userData): Observable<any> {
    console.log(this.httpOptions)
    return this.http
      .post<any>('http://35.239.248.250:8085/authenticate', userData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  getUserbyMail(userData): Observable<any> {
    console.log(this.httpOptions)
    return this.http
      .post<any>("http://35.239.248.250:8085/userDetailsbyMail",userData , this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }


  register(userData): Observable<any> {
    console.log(this.httpOptions)
        return this.http
      .post<any>('http://35.239.248.250:8085/register', userData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }


  getAllUsers(): Observable<any> {
    console.log(this.httpOptions)
    return this.http
      .get<any>("http://35.239.248.250:8085/loadAllUser", this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }


  forgotPassword(userData): Observable<any> {
    return this.http
      .post<any>('http://35.239.248.250:8085/forgot-password', userData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  generateOTP(userData): Observable<any> {
    return this.http
      .post<any>('http://35.239.248.250:8085/generateOtp', userData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }


  

  validateOTP(userData): Observable<any> {
    console.log(userData)
    return this.http
      .post<any>('http://35.239.248.250:8085/validateOtp', userData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  getEmployeeDetails(): Observable<any> {
    return this.http
      .get<User>("http://35.200.186.1:8093/api/user-service/race/employee", this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }


  getUserName(): Observable<any> {
    return this.http
      .get<User>("http://localhost:2021/seatVisulization/getUsers", this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  getRoles(): Observable<any> {
    return this.http
      .get<any>("http://35.200.186.1:8093/api/user-service/page/roles", this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  getUserCount(): Observable<any> {
    return this.http
      .get<any>("http://35.200.186.1:8093/api/user-service/page/userCount", this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  getEmployeeById(id): Observable<any> {
    return this.http
      .get<any>("http://35.200.186.1:8093/api/user-service/race/employee/" + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  deleteEmployeeById(id): Observable<any> {
    return this.http.delete<any>("http://35.200.186.1:8093/api/user-service/race/employee/" + id, this.httpOptions);
  }

  createEmployee(userdata): Observable<any> {
    return this.http
      .post<any>("http://35.200.186.1:8093/api/user-service/race/employee", userdata, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  updateEmployee(id, formData): Observable<any> {
    return this.http
      .put<any>("http://35.200.186.1:8093/api/user-service/race/employee/" + id, formData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  isUserEmailExist(email, id): Observable<any> {
    return this.http
      .get<any>("http://35.200.186.1:8093/api/user-service/race/isUserEmailExist/" + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }





  logout() {
   let data=localStorage.getItem('data1');
   localStorage.removeItem('image1');
   localStorage.removeItem('travelDetail');
   localStorage.removeItem('userDetail');
   localStorage.removeItem('data1');
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    localStorage.clear();
    sessionStorage.clear();
    return "Sucessfull Logout ";
  }

  addAsset(userdata): Observable<any> {
    return this.http
      .post<any>("http://35.239.248.250:8083/asset/assets", userdata, this.httpOptions
        )
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }
 
  updateAsset(id, formData): Observable<any> {
    return this.http
      .put<any>("http://35.239.248.250:8083/asset/assets/" + id, formData, this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }
 
  findAssetDetail(): Observable<any> {
    return this.http
      .get<capAsset>("http://35.239.248.250:8083/asset/assets", { headers: this.getHeaders() })
      .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }


 
  getAssetDetails(emp_id): Observable<any> {
    return this.http
    .get<capAsset>("http://35.239.248.250:8083/asset/getasset?emp_id=" + emp_id, { headers: this.getHeaders() })
    .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  
}
