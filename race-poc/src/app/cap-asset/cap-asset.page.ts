import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { CommonService } from '../common.service';
import { HttpResponse } from '@angular/common/http';
import { Employee } from '../Employee/Employee.model';
import { capAsset } from '../capAsset.module';
import { capAssetsRes } from './capAssetsDataRes.module';
//import { Router } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { GetAssetResp } from '../add-asset/get-asset/get-asset-resp.model';
import { GetAllAssetResp } from '../add-asset/get-all-asset/get-all-asset-resp.model';

@Component({
  selector: 'app-cap-asset',
  templateUrl: './cap-asset.page.html',
  styleUrls: ['./cap-asset.page.scss'],
})
export class CapAssetPage implements OnInit {
  data1: any;
  data: any;
  users:any;
 message:any;
 constructor(private commonService: CommonService,
  private toastController: ToastController,
  private alertCntrl: AlertController,
 private navCtrl: NavController,private router: Router,private route: ActivatedRoute,
 private getAssetResp:GetAssetResp, private getAllAssetResp:GetAllAssetResp) { }
//,private capAssets: capAssetsRes,private router:Router
ngOnInit() {
 
  this.data1=JSON.parse(localStorage.getItem("users1"));
this.data= this.data1.empId;
console.log("=====",this.data);
  //this.assetId['id']
  //this.getAssetById(this.assetId['id']);
 
}

  async presentToast() {
        const toast = await this.toastController.create({
          message: localStorage.getItem("message"),
          duration: 5000,
          position:'middle',
          color:"success"
          

        });
        toast.present();
        localStorage.removeItem("message");
      }
	
    loadAsset(){
             
      this.commonService.getAssetDetails(this.data).subscribe(response => {
      console.log(response);
   this.users=response;
   this.getAssetResp.userData=response;
   this.router.navigate(['/get-asset']);
  
 })
   }
  
   loadAllAsset(){
              
     this.commonService.findAssetDetail().subscribe(response => {
     console.log(response);
  this.users=response;
  this.getAllAssetResp.userData=response;
  this.router.navigate(['/get-all-asset']);
  
 })
  }

 
	addAsset(){
  this.router.navigate(['/add-asset']);
}								   
 updateAsset(){
 this.router.navigate(['/update-assert']);
}
// SearchAssert(){
//   this.router.navigate(['/asset-list']);
// }
SearchAsset(){
  this.router.navigate(['/asset-list']);
}
ionViewDidEnter(){
  this.message=localStorage.getItem("message")
    console.log("this.message=",this.message);
    if(this.message){
      this.presentToast();
    }
}
}				  
