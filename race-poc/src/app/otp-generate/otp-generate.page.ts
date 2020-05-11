import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, NavController, LoadingController } from '@ionic/angular';
import { otpvalidate } from '../model/otpvalidate.model';

@Component({
  selector: 'app-otp-generate',
  templateUrl: './otp-generate.page.html',
  styleUrls: ['./otp-generate.page.scss'],
})
export class OtpGeneratePage implements OnInit {
  
  account: { email: string } = {
    email: ''
 
  };
  constructor(private commonService:CommonService,
    private router : Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private data:otpvalidate,
    private loadingCtrl:LoadingController,
    
) { 

}
  ngOnInit() {
  }

  async generateOtp(){

    let userData=JSON.stringify({
      "emailId":this.account.email,
     
      });
    
    this.commonService.generateOTP(userData).subscribe(async (resp) => {
     console.log(resp.statusCode);
      if(resp.statusCode==200){
       let toast = await this.toastController.create({
        message: 'OTP has sent to your mail sucessfully',
        duration: 3000,
        position: 'bottom',
        color: "success"
      });
    this.data.gmailId=this.account.email;
    
      this.router.navigate([('/otp-validate')])
      return await toast.present();
  }
  if(resp.statusCode==403){
  let toast = await this.toastController.create({
    message: 'Email Not Varified',
    duration: 3000,
    position: 'bottom',
    color: "danger"
  });
  
  return await toast.present();
}
if(resp.statusCode==404){
  let toast = await this.toastController.create({
    message: 'OTP Generation Failed',
    duration: 3000,
    position: 'bottom',
    color: "danger"
  });
 
  return await toast.present();
}

if(resp.statusCode==405){
  let toast = await this.toastController.create({
    message: 'Email Not Registered',
    duration: 3000,
    position: 'bottom',
    color: "danger"
  });
 
  return await toast.present();
}



    });


  }  


  
  }


