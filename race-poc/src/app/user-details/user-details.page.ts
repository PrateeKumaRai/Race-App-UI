import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from '../user-list/user-details.model';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';





@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})


export class UserDetailsPage implements OnInit {
  data: any;
  data1: any;
  
  constructor(private userDetails: UserDetails,private socialSharing: SocialSharing) {
    this.data = userDetails.userData
  }

  ngOnInit() {

  }


  sendWhatsapp(data,data1){
    console.log(data)
    console.log(data1)
    let message="Hi " +data1;
    let image=null;
    let url=null;
    let mobile="91"+data;
    console.log(mobile)
    this.socialSharing.shareViaWhatsAppToReceiver(mobile, message, image, url).then(() => {
    }).catch(() => {
      
    });
  }

  mailto(email) {
    window.open(`mailto:${email}`, '_system');

 }

}
