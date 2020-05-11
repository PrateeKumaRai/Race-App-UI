import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../welcometoapp/userEntity.module';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { EmployeeService } from '../services/employee.service';
import { otpvalidate } from '../model/otpvalidate.model';

@Component({
  selector: 'app-update-profile-personal',
  templateUrl: './update-profile-personal.page.html',
  styleUrls: ['./update-profile-personal.page.scss'],
})
export class UpdateProfilePersonalPage implements OnInit {

  show: boolean = false;
  userEntity: UserEntity;
  data3: UserEntity;
  
  account: {
    empId: string, userName: string, cubical: string, mobile: number,
    houseNo: string, area: string, city: string, country: string, zip: number
  } = {
      empId: '',
      userName: '',
      cubical: '',
      mobile: null,
      houseNo: '',
      area: '',
      city: '',
      country: '',
      zip: null
    };
  token: string;
  constructor(private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private employeeService: EmployeeService,
    private optvalid: otpvalidate,
  ) {


  }

  ngOnInit() {
  }

  updateProfile() {
    let mail = localStorage.getItem('mail');
    let userData = JSON.stringify({
      "empId": this.account.empId,
      "username": this.account.userName,
      "cubical": this.account.cubical,
      "emailId": mail,
      "mobile": this.account.mobile,
      "houseNo": this.account.houseNo,
      "area": this.account.area,
      "city": this.account.city,
      "country": this.account.country,
      "zip": this.account.zip
    });
    let userData1 = JSON.stringify({
      "emailId": mail
    });
    this.token = localStorage.getItem('token');
    console.log("%%%%%%%", this.token)
    this.employeeService.updateProfile(userData, this.token).subscribe(async (resp) => {
      console.log(resp.statusCode);
      if (resp.statusCode == 200) {
        this.show = false;
        this.optvalid.show = this.show;
        this.commonService.getUserbyMail(userData1).subscribe((res) => {
          if (resp.statusCode == 200) {
            this.userEntity = res;
            this.optvalid.userEntity = this.userEntity
            console.log("update profile details: ", this.userEntity)
            localStorage.setItem("userDetail1", JSON.stringify(this.userEntity));
            this.data3 = JSON.parse(localStorage.getItem("userDetail1"));
            console.log("Inside Update profile:", this.data3);
          }
        }
        );
        let toast = await this.toastController.create({
          message: 'Profile Updated Sucessfully',
          duration: 3000,
          position: 'bottom',
          color: "success"
        });
        this.router.navigate([('/home')])
        return await toast.present();
      }
else{
  if (resp.statusCode == 402 || resp.statusCode == 403) {
    let toast = await this.toastController.create({
      message: 'Profile Not Updated Sucessfully',
      duration: 3000,
      position: 'bottom',
      color: "danger"
    });
    this.router.navigate([('/update-profile')])
    return await toast.present();
  }
}
     
    });
  }

}
