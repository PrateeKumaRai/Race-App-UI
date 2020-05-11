import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { GetAssetResp } from './get-asset-resp.model';

@Component({
  selector: 'app-get-asset',
  templateUrl: './get-asset.page.html',
  styleUrls: ['./get-asset.page.scss'],
})
export class GetAssetPage implements OnInit {
  assets:any
  data: any;
  data1:any;
  users:any;
 message:any;

  constructor(private router : Router,private route: ActivatedRoute,
    private commonService: CommonService,
      getAssetResp:GetAssetResp) { 
    this.assets=getAssetResp.userData;
  
    console.log("Response page: ",this.data);
  }

  ngOnInit() {
    
  this.data1=JSON.parse(localStorage.getItem("users1"));
  this.data= this.data1.empId;
  console.log("=====",this.data);
    //this.assetId['id']
  }

  loadAsset(){
             
    this.commonService.getAssetDetails(this.data).subscribe(response => {
      console.log(response);
  this.users=response;
  this.router.navigate(['/get-asset']);
})
}


}

