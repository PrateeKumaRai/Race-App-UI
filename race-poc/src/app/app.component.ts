import { Component, OnInit } from '@angular/core';

import { Platform, Events, ToastController, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from './common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  msg:String;
 users:any;
 data:any;
  data1: any;
  showSplash=true;

 ngOnInit(): void {
 // this.data=localStorage.getItem('userName');
 

 }
 
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Update User Profile',
      url: '/updateProfile',
      icon: 'person'
      
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'md-power'
     
    }
     ];
  username: any;
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private commonService:CommonService,
    private router:Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController
    
  ) {
   
    this.initializeApp();
    
  }

  ngDoCheck(){
   // this.data= localStorage.getItem('data1');
    //console.log(" User Home Data", this.data);
   // let users=localStorage.getItem('users');
   // console.log(localStorage.getItem('userName'));
   //  console.log(localStorage.getItem('empId'));
    this.data=localStorage.getItem('userName');
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(4000).subscribe(()=>this.showSplash=false)
    });
  }

  async logout(){
    let token1 = localStorage.getItem('token');
    console.log("((((((((((((((((((((", token1)
    if(localStorage.getItem('token') ==null){
    
    }else{
      this.commonService.logout();
      let token = localStorage.getItem('token');
      //console.log("((((((((((((((((((((", token)
      if( token==null ){
        let toast = await this.toastController.create({
          message: 'Logout Sucessfully',
          duration: 3000,
          position: 'bottom',
          color: "success"
        });
        this.router.navigate(['welcometoapp']);
        return  await toast.present();
        
      }
    }
   
  
}

updateProfile(){
  if(localStorage.getItem('token') ==null){
    
  }else{
    this.data1=JSON.parse(localStorage.getItem("users1"));
    this.data= this.data1.empName;
    console.log("%%%%%%%%%%%%%%%%%%%",this.data)
    this.router.navigate(['update-profile']);
  }
  }
  

}
