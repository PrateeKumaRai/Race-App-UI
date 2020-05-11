import { Component, OnInit, NgZone } from '@angular/core';
import { CommonService } from '../common.service';
import { NavController } from '@ionic/angular/dist/providers/nav-controller';
import { NavParams } from '@ionic/angular/dist/directives/navigation/nav-params';
import { UserFilter } from '../model/UserFilter.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

import { Router } from '@angular/router';
import { UserDetailResponse } from '../model/user-detail-response.model';
import { UserDetails } from './user-details.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  public items1: any = [];
  users: any;
  public searchTerm: string = "";
  public items: any;
  userDetailResponse: UserDetailResponse;

  constructor(
    private commonService: CommonService,
    private empService: EmployeeService,
    private router: Router,
    private userDetails: UserDetails
  ) {

  }

  ngOnInit(): void {
    
    this.commonService.getAllUsers().subscribe(response => {
      console.log("**************")
      this.items1 = response;
      console.log(response);
     // console.log(this.items);
    });

  }

  ngDoCheck() {
   // this.setFilteredItems();
  }

  filterItems(searchTerm) {
    return this.items1.filter(item => {
      return item.empName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

    });
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  getEmployeeDetails() {
    this.commonService.getEmployeeDetails().subscribe(response => {
      console.log(response);
      this.users = response;
    })
  }

  ionViewDidLoad() {
    this.getEmployeeDetails();
    console.log('ionViewDidLoad UserListPage');
  }

  getUserInfo(user) {
    this.userDetailResponse = user;
    this.userDetails.userData = this.userDetailResponse
    this.router.navigate(['user-details']);
  }
}
