import { Component, OnInit } from '@angular/core';
import { capAssetsRes } from '../cap-asset/capAssetsDataRes.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asset-res',
  templateUrl: './asset-res.page.html',
  styleUrls: ['./asset-res.page.scss'],
})
export class AssetResPage implements OnInit {
  data: any;
  constructor(private router : Router,private route: ActivatedRoute,private data1: capAssetsRes) { 

    this.data = data1.storage
    console.log("Response page: ",this.data);
  }

  ngOnInit() {
  }

}

