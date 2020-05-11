import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { Response } from 'src/app/quiz/response.model';
import { interval } from 'rxjs';
import { QuizapiService } from '../../quizapi.service';


@Component({
  selector: 'app-admin_dashboard_quiz',
  templateUrl: './admindashboard.page.html',
  styleUrls: ['./admindashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  quizpin: String;
  public playerlist: any = [];
  quizid: any;
  sub: any;
  playercount: any;

  constructor(private quizApiService: QuizapiService, private router: Router) { }

  ngOnInit() {

    this.quizpin = localStorage.getItem("quizpin");
    this.quizid = localStorage.getItem("quizid");
    this.getAllPlayer(this.quizid);
  }


  getAllPlayer(quizid) {
    this.sub = interval(1000).subscribe(x => {
      this.quizApiService.getAllPlayer(quizid).subscribe((stndrdResp: Response) => {
        this.playerlist = stndrdResp.obj;
        if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("OK")) {
          this.playercount = this.playerlist.length;
        }
        console.log('playerlist  >>>', this.playerlist);
      });
    });
  }

  stopGetAllPlayer() {
    this.sub.unsubscribe();
  }

}
