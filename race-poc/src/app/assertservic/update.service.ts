import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ArgumentOutOfRangeError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IonItemSliding } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { 

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append("Authorization", 'Bearer ' + token);
    return headers;
  }

  updateAsset(id,formData): Observable<any> {
    return this.http
    .put<any>('http://35.200.186.1:8093/api/asset-service/assets/updateAsset'+'/'+id,formData,
    {headers:this.getHeaders()})
    .pipe(
        retry(2),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }
}

