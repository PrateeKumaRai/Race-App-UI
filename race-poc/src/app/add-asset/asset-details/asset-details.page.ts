import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetDetails } from '../asset-list/asset-details.model';


@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.page.html',
  styleUrls: ['./asset-details.page.scss'],
})
export class AssetDetailsPage implements OnInit {
  data: any;
  constructor(private assetDetails: AssetDetails) {
    this.data = assetDetails.assetData
  }

  ngOnInit() {

  }

}
