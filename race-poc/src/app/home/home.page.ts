import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { otpvalidate } from '../model/otpvalidate.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cardItems: any[];
  user:any;
  data:any;
  show:boolean;


  constructor(private router: Router,
    private commonService:CommonService,
    private optvalid:otpvalidate
 
    ) {
      this.show=optvalid.show;
    this.data=  localStorage.getItem("data1");
    console.log(this.data);
    this.user = {
      
      avatar: 'assets/img/logo-light-icon1.png',
      name: 'Travel'
    }
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/travel.PNG',
          name: 'Travel',
          page:'travelling'
        }
      },
      {
        user: {
          avatar: 'assets/img/qubical.PNG',
          name: 'Seat',
          page:'employee'
        }
      },
      {
        user: {
          avatar: 'assets/img/user.PNG',
          name: 'Users',
          page:'userlist'
        }
      },
      {
        user: {
          avatar: 'assets/img/quiz.PNG',
          name: 'Quiz',
          page:'quiz'
        }
      },
      {
        user: {
          avatar: 'assets/img/question.PNG',
          name: 'Question',
          page:'questions'
        }
      },{
        user: {
          avatar: 'assets/img/asset.PNG',
          name: 'Asset',
          page:'capasset'
        }
      }
    ];

  }

  openQuiz(page) {
    this.router.navigate([page])
  }
  
  ngDoCheck(){
    this.show=this.optvalid.show;

  }
  ngOnInit() {
   
    this.show=this.optvalid.show;
    
    }
 
}
