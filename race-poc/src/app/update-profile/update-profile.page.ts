import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { EmployeeService } from '../services/employee.service';
import { otpvalidate } from '../model/otpvalidate.model';
import { UserEntity } from '../welcometoapp/userEntity.module';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  show:boolean=false;
  userEntity :UserEntity;
  data3:UserEntity;
  

  account: { empId: string, userName: string,cubical:string ,mobile:number} = {
    empId: '',
    userName: '',
    cubical: '',
    mobile:null
  };
  token: string;
  constructor(private commonService:CommonService,
    private router : Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private employeeService:EmployeeService,
    private optvalid:otpvalidate,
) { 
  
  
}

  ngOnInit() {
  }

  updatePersonalData(){
    this.router.navigate([('/update-profile-personal')])
  }

  updateSeatInfo(){
    this.router.navigate([('/update-seat')])
  }


 
}
