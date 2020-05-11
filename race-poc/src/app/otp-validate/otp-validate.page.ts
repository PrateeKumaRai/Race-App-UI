import { Component, OnInit } from '@angular/core';
import { otpvalidate } from '../model/otpvalidate.model';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController, NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-otp-validate',
  templateUrl: './otp-validate.page.html',
  styleUrls: ['./otp-validate.page.scss'],
})
export class OtpValidatePage implements OnInit {
email:any;
users: any ;

  constructor(private data1: otpvalidate,
    private commonService:CommonService,
    private router : Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private loadingCtrl:LoadingController,
    
    ) { 
   
      this.email=data1.gmailId;
  }

  ngOnInit() {
  }

  async validateOTP(form){
    
    let userData=JSON.stringify({
      "emailId":form.email,
     "otp":form.password
      });
      console.log("************" , userData);
      this.commonService.validateOTP(userData).subscribe(async (resp) => {
        console.log(resp.statusCode);
        console.log(resp.token);
        localStorage.setItem("token",resp.token);
        localStorage.setItem("mail",form.email);
         if(resp.token!=null){
          let toast = await this.toastController.create({
           message: 'OTP Validate Sucessfully',
           duration: 3000,
           position: 'bottom',
           color: "success"
         });
        
         this.router.navigate([('/home')])
         this.getbymail();
         return await toast.present();
     }
     if(resp.statusCode==400){
     let toast = await this.toastController.create({
       message: 'OTP Not Valid',
       duration: 3000,
       position: 'bottom',
       color: "danger"
     });
    
     return await toast.present();
   }
   
       });
   
  }


  async generateOtp(){
    let loading=   await this.loadingCtrl.create({
      message:"Loading...",
      showBackdrop: false,
      spinner:"bubbles"
    });
    loading.present();
    let userData=JSON.stringify({
      "emailId":this.email,
     
      });
    console.log(userData);
    this.commonService.generateOTP(userData).subscribe(async (resp) => {
     console.log(resp.statusCode);
      if(resp.statusCode==200){
       let toast = await this.toastController.create({
        message: 'OTP has sent to your mail sucessfully',
        duration: 3000,
        position: 'bottom',
        color: "success"
      });
      loading.dismiss();
      this.router.navigate([('/otp-validate')])
      return await toast.present();
  }
  if(resp.statusCode==403){
  let toast = await this.toastController.create({
    message: 'Email Not Found',
    duration: 3000,
    position: 'bottom',
    color: "danger"
  });
  loading.dismiss();
  return await toast.present();
}
if(resp.statusCode==404){
  let toast = await this.toastController.create({
    message: 'OTP Generation Failed',
    duration: 3000,
    position: 'bottom',
    color: "danger"
  });
  loading.dismiss();
  return await toast.present();
}
    });

  }  


  getbymail(){
    let mail=localStorage.getItem('mail');
    let userData=JSON.stringify({
     "emailId":mail
     });
     
     this.commonService.getUserbyMail(userData).subscribe(response => {
      console.log("+++++++++++++++++++++++",response);
      this.users=response;
      console.log("--------------------------",this.users);
      localStorage.setItem("users1",JSON.stringify(this.users));
     
    //  let users=localStorage.setItem("users1",response);
     // this.data1=JSON.parse(localStorage.getItem("users1"));
     
      let ename=localStorage.setItem("userName",response.empName);
     //  let eId=localStorage.setItem("empId",response.empId);
       console.log(localStorage.getItem('userName'));
     //  console.log(localStorage.getItem('empId'));
     });
  }
  


}
