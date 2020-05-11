import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { GetAllAssetResp } from './get-all-asset-resp.model';


@Component({
  selector: 'app-get-all-asset',
  templateUrl: './get-all-asset.page.html',
  styleUrls: ['./get-all-asset.page.scss'],
})
export class GetAllAssetPage implements OnInit {
  assets:any
  data: any;
  data1:any;
  users:any;
 message:any;

  constructor(private router : Router,private route: ActivatedRoute,
    private commonService: CommonService,
      getAllAssetResp:GetAllAssetResp) { 
    this.assets=getAllAssetResp.userData;
  
    console.log("Response page: ",this.data);
  }

  ngOnInit() {
    
  this.data1=JSON.parse(localStorage.getItem("users1"));
  this.data= this.data1.empId;
  console.log("=====",this.data);
    //this.assetId['id']
  }

  loadAllAsset(){
             
    this.commonService.findAssetDetail().subscribe(response => {
      console.log(response);
  this.users=response;
  this.router.navigate(['/get-all-asset']);
})
}


}

