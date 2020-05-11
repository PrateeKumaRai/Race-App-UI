import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/user-list/user-details.model';
import { AssetListPageModule } from './asset-list.module';
import { AssetDetailResponse } from 'src/app/model/asset-detail-response.model';
import { AddAssetPageModule } from '../add-asset.module';
import { AssetDetails } from './asset-details.model';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {

  public items1: any = [];
  users: any;
  public searchTerm: string = "";
  public items: any;
  assetDetailResponse: AssetDetailResponse;
  
  constructor(private commonService:CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private assetDetails: AssetDetails,
    
     ) { }

  ngOnInit(): void {
    this.commonService.findAssetDetail().subscribe(response => {
      console.log("response====",response);
  this.items1=response;
 // console.log(this.items)
  
    }); 
}
ngDoCheck() {
 // this.setFilteredItems();
}

filterItems(searchTerm) {
  console.log("searchTerm=",searchTerm)
  return this.items1.filter(item => {
    console.log('iteam',item.assetId)
   return item.assetId.toString().indexOf(searchTerm) > -1;
  // return item.assetOwner.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;


  });
}

setFilteredItems() {
  this.items = this.filterItems(this.searchTerm);
}

findAssetDetail()
 {
  this.commonService.findAssetDetail().subscribe(response => {
    console.log('response',response);
    this.items1 = response;
  })
}

ionViewDidLoad() {
  this.findAssetDetail();
  console.log('ionViewDidLoad UserListPage');
}
getAssetInfo(items1)
{

  this.assetDetailResponse = items1;
    this.assetDetails.assetData = this.assetDetailResponse
    this.router.navigate(['asset-details']);
  
}



}