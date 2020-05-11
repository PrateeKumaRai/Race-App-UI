import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';
import { travellingData } from './travellingData.module';
import { TravelDetailRes } from './TravelDetailRes.Module';
import { otpvalidate } from '../model/otpvalidate.model';
import { UserEntity } from '../welcometoapp/userEntity.module';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-travelling',
  templateUrl: './travelling.page.html',
  styleUrls: ['./travelling.page.scss'],
})
export class TravellingPage implements OnInit {
  empid: number;
  data1: any;
  orderForm: any;
  states2: string[];
  travelResponse: TravelDetailRes[];
  travelResponse1: TravelDetailRes[];
  imageName: String;
  retrievedImage: any;
  imgbase64: any[];
  data2: any;
  travelDetail: any;
  data3: any;
  userEntity :UserEntity;
 
  constructor(private router: Router, private route: ActivatedRoute,
    private apiService: ApiService,
    private data: travellingData,
    private optval: otpvalidate,
    private loadingCtrl:LoadingController,) {
   
      this.userEntity=optval.userEntity; 
      console.log("inside travel page ts constructor",this.userEntity );
    
    }

  async ngOnInit() {
   
    let loading=   await this.loadingCtrl.create({
      message:"Loading...",
      showBackdrop: false,
     spinner:"lines"
    });
    loading.present();
    localStorage.getItem('dataSource')
    this.data3 = JSON.parse(localStorage.getItem("travelDetail"));
    console.log("inside travel page ts nginit",this.userEntity );
    this.empid = this.userEntity.empId;
    this.apiService.travelDetailsByEmpId(this.empid).subscribe((res) => {
      this.travelResponse = res;
      this.travelResponse1 = res;
       console.log("inside travel page after Response" );
      this.data.travelResponse1 = this.travelResponse1;
      localStorage.setItem("travelDetail", JSON.stringify(this.travelResponse));
      loading.dismiss();
    },
      (error) => {
        this.data2 = error;
       loading.dismiss();
        this.router.navigate(['travelling']);


      }
    )

  }
    async travelDetailsByEmpId() {
   
    }

}
