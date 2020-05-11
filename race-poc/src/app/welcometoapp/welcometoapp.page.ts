import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from '../user-list/user-details.model';
import { UserDetailResponse } from '../model/user-detail-response.model';
import { ToastController, AlertController, NavController, LoadingController } from '@ionic/angular';
import { EmployeeService } from '../services/employee.service';
import { UserEntity } from './userEntity.module';
import { otpvalidate } from '../model/otpvalidate.model';

@Component({
  selector: 'app-welcometoapp',
  templateUrl: './welcometoapp.page.html',
  styleUrls: ['./welcometoapp.page.scss'],
})
export class WelcometoappPage implements OnInit {
  userNm: String;
  data: any;
  data1: any;
  users1: UserDetailResponse;
  users: any;
  abc: any;
  public items: any;
  token1: any;
  userEntity: UserEntity;
  data3: UserEntity;
  show: boolean = false;
  registerdata: { email: string, password: string, username: string, empName: string } = {
    email: '',
    password: '',
    username: '',
    empName: '',
  };
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };


  constructor(private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private optvalid: otpvalidate,
    private loadingCtrl: LoadingController,
  ) {

  }
  ngOnInit(): void {
  }

  async doLogin() {
    let loading = await this.loadingCtrl.create({
      message: "Loading...",
      showBackdrop: false,
      spinner: "lines"
    });
    loading.present();
    let userData = JSON.stringify({
      "emailId": this.account.email,
      "password": this.account.password
    });
    let email = JSON.stringify({
      "emailId": this.account.email,
    });

    console.log(userData)
    this.commonService.UserLogin(userData).subscribe(async (resp) => {
      console.log(resp.statusCode);
      console.log(resp);
      if (resp.statusCode == 200) {
        localStorage.setItem("token", resp.token);
        localStorage.setItem("mail", this.account.email);
        this.token1 = resp.token;
        let token = localStorage.getItem('token');

        this.getbymail(this.token1, this.account.email);

        let toast = await this.toastController.create({
          message: 'Logged in Sucessfully',
          duration: 3000,
          position: 'bottom',
          color: "success"
        });
        return await toast.present().then(() => {
          loading.dismiss();
          this.router.navigate([('/home')]);

        })
      }
      if (resp.statusCode == 402) {
        let toast = await this.toastController.create({
          message: 'Email Not Varified',
          duration: 3000,
          position: 'bottom',
          color: "danger"
        });
        loading.dismiss();
        return await toast.present();
      }

      if (resp.statusCode == 403) {
        let toast = await this.toastController.create({
          message: 'Wrong Password',
          duration: 3000,
          position: 'bottom',
          color: "danger"
        });
        loading.dismiss();
        return await toast.present();
      }

      if (resp.statusCode == 404) {
        let toast = await this.toastController.create({
          message: 'Wrong Email',
          duration: 3000,
          position: 'bottom',
          color: "danger"
        });
        loading.dismiss();
        return await toast.present();
      }

      if (resp.statusCode == 406) {
        let toast = await this.toastController.create({
          message: 'Please Provide Valid Data',
          duration: 3000,
          position: 'bottom',
          color: "danger"
        });
        loading.dismiss();
        return await toast.present();
      }

    });
  }

  getbymail(token1, mailid) {

    let userData = JSON.stringify({
      "emailId": mailid
    });

    this.commonService.getUserbyMail(userData).subscribe(response => {
      this.users = response;

      this.userEntity = response;
      console.log("+++++++++++++++++++++++", this.userEntity);
      this.optvalid.userEntity = this.userEntity;

      localStorage.setItem("userDetail", JSON.stringify(this.userEntity));
      localStorage.setItem("users1", JSON.stringify(this.users));
      let ename = localStorage.setItem("userName", response.empName);
      this.data3 = JSON.parse(localStorage.getItem("userDetail"));

      if (this.userEntity.empId == null || this.userEntity.username == null || this.userEntity.username == "") {
        console.log("inside welcomepagets if block")
        this.show = true;
        this.optvalid.show = this.show;
      }
    });
  }

  register() {
    this.router.navigate([('/signup')])
  }

  generateOtp() {
    this.router.navigate([('/otp-generate')])
  }


  forgotPass() {
    this.router.navigate([('/forgot-password')])
  }

  emailLogin() {
    this.router.navigate([('/email-login')])
  }

}