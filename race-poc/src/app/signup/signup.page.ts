import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  account: { email: string, password: string,username:string,empName:string } = {
    email: '',
    password: '',
    username:'',
    empName:'',
  };
  constructor(private commonService:CommonService,
    private router : Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private loadingCtrl:LoadingController,
) { 

}

  ngOnInit() {
  }

  async doRegister() {
    let loading=   await this.loadingCtrl.create({
      message:"Loading...",
      showBackdrop: false,
      spinner:"bubbles"
    });
    loading.present();
    let userData=JSON.stringify({
      "emailId":this.account.email,
      "password":this.account.password,
      "empName":this.account.empName
      });

      console.log(userData)
      this.commonService.register(userData).subscribe(async (resp) => {
     console.log(resp.statusCode);
      if(resp.statusCode==200){
      
       let toast = await this.toastController.create({
        message: 'Please check your mail box to validate account',
        duration: 3000,
        position: 'bottom',
        color: "success"
      });
      loading.dismiss();
      this.router.navigate([('/welcometoapp')])
      return await toast.present();
      
  }
  if(resp.statusCode==406){
      
    let toast = await this.toastController.create({
     message: 'Unable To send Mail',
     duration: 3000,
     position: 'bottom',
     color: "danger"
   });
   loading.dismiss();
   this.router.navigate([('/welcometoapp')])
   return await toast.present();
}


  if(resp.statusCode==402){
      
    let toast = await this.toastController.create({
     message: 'Email already Registered',
     duration: 3000,
     position: 'bottom',
     color: "danger"
   });
   loading.dismiss();
   return await toast.present();
}

if(resp.statusCode==403){
      
  let toast = await this.toastController.create({
   message: 'Please Provide Vaild Input Data',
   duration: 3000,
   position: 'bottom',
   color: "danger"
 });
 loading.dismiss();
 return await toast.present();
}



    });
  }  
}
