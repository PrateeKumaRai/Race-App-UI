import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  account: { email: string } = {
    email: ''
 
  };


  constructor(private commonService:CommonService,
              private router : Router,
              private route: ActivatedRoute,
              private toastController: ToastController,
              private alertCntrl: AlertController,
              private navCtrl: NavController
    ) { 
     
    }


  ngOnInit() {
  }

  doResetPassword(){
    let userData=JSON.stringify({
      "emailId":this.account.email,
     
      });
     
      console.log(userData)
    this.commonService.forgotPassword(userData).subscribe(async (resp) => {
     console.log(resp.statusCode);
      if(resp.statusCode==200){
       let toast = await this.toastController.create({
        message: 'Check your Mail inbox for the reset link',
        duration: 3000,
        position: 'bottom',
        color: "success"
      });
      this.router.navigate([('/welcometoapp')])
      return await toast.present();
  }
  if(resp.statusCode==403){
  let toast = await this.toastController.create({
    message: 'Email Not Found',
    duration: 3000,
    position: 'bottom',
    color: "danger"
  });
  return await toast.present();
}

    });
  }  
  }


