import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { TravelDetail } from '../TravelDetail.module';
import { travellingData } from '../travellingData.module';

@Component({
  selector: 'app-travelling',
  templateUrl: './traveldetailsResponse.page.html',
  styleUrls: ['./travelRes.page.scss'],
})
export class TravelDetailResPage implements OnInit {

  res1: TravelDetail;
  res2: TravelDetail = new TravelDetail();
  data: any;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private data1: travellingData) {
    this.data = data1.storage1

  }

  ngOnInit() {
  }
  OnachClick(): void {
  }

}