import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/quiz/response.model';
import { ToastService } from 'src/app/services/toast.service';
import { Router} from '@angular/router';
import { CreateQuiz } from 'src/app/quiz/qz_createquiz/createQuiz.model';
import { KeyValue } from '@angular/common';
import { QuizapiService } from '../../quizapi.service';



@Component({
  selector: 'app-admin_show_result',
  templateUrl: './adminshowresult.page.html',
  styleUrls: ['./adminshowresult.page.scss'],
})
export class AdminShowResultPage implements OnInit {

  quizresult: any;
  getQuiz: CreateQuiz;
  series = [];
  showresult: any;
  testObject: { [key: string]: number };
  firstPlyrName: any;
  secondPlyrName: any;
  thirdPlyrName: any;
  firstPlyrScore: any;
  secondPlyrScore: any;
  thirdPlyrScore: any;
  timeLeftShwResult: number = 5;
  interval;

  constructor(private quizApiService: QuizapiService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
    this.getQuiz = JSON.parse(localStorage.getItem("quizByPin"));
    this.getQuizResult(this.getQuiz.quizId);
   //this.startTimer();

   //new
  }



  getQuizResult(quizid) {
    this.quizApiService.getQuizResult(quizid).subscribe((stndrdResp: Response) => {
      this.showresult = stndrdResp.obj;

      if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("OK")) {
        this.testObject = this.showresult;
        var arr = Object.entries(this.testObject);
        var map = new Map(arr);
  
        let i = 0;
        map.forEach((value: number, key: string) => {
          console.log('keys >>>' + i + " " + key, value);
          if (i === 0) {
            this.firstPlyrName = key;
            this.firstPlyrScore = value;
          }
          else if (i === 1) {
            this.secondPlyrName = key;
            this.secondPlyrScore = value;
          }
          else if (i === 2) {
            this.thirdPlyrName = key;
            this.thirdPlyrScore = value;
          }
          ++i;
        });
      }
      console.log('this.showresult  >>>', this.showresult);
    });
  }

  originalOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return 0;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeftShwResult > 0) {
        this.timeLeftShwResult--;
        console.log('timeLeft in show result>>>', this.timeLeftShwResult);
      } else {
         this.pauseTimer();
      this.router.navigate(['admindashboard/adminplayquiz/adminstartquiz']);
    
        console.log('redirect to >>>','admindashboard/adminplayquiz/adminstartquiz');
      }
    }, 1000)
  }
  
  pauseTimer() {
    clearInterval(this.interval);
  }

}
