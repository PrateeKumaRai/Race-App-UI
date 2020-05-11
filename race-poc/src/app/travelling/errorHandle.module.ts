import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { travellingData } from './travellingData.module';
import { throwError, Observable } from 'rxjs';
import { empty } from 'rxjs';
import { ToastController, NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class errorHandle {

  public errMessage?: any;

  constructor(private router: Router, private toastController: ToastController,
    private navCtrl: NavController) { }

  handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
      //client side error
      return throwError("client side error");
    } else {
      //Server Side error
      if (error.status == 404) {
        return throwError(error.error.errorMessage);
      }
      else if (error.status == 400) {
        return throwError("Bad Request ");
      }
      else if (error.status == 500 || error.status == 401) {
        return throwError(" Travel details not found ");
      }
    }
  }
}