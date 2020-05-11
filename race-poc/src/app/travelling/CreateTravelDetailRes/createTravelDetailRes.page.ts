import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { TravelDetail } from '../TravelDetail.module';
import { travellingData } from '../travellingData.module';


@Component({
  selector: 'app-travelling',
  templateUrl: './createTraveldetailsRes.page.html',
  styleUrls: ['./travelRes.page.scss'],
})
export class CreateTravelDetailResPage implements OnInit {

  data: any;
  data2: any;

  constructor(private apiService: ApiService, private router: Router,
    private route: ActivatedRoute,
    private data1: travellingData) {
    this.data = data1.createTravelStorage1
    this.data2 = JSON.parse(localStorage.getItem("image1"));
  }

  ngOnInit() {
  }
  OnachClick(): void {

  }

}