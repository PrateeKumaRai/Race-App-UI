import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/quiz/response.model';
import { ToastService } from 'src/app/services/toast.service';
import { Router, NavigationEnd,ActivatedRoute} from '@angular/router';
import { CreateQuiz } from 'src/app/quiz/qz_createquiz/createQuiz.model';
import { Quiz } from '../../qz_addquestion/quiz.model';
import { AddAnswers } from '../../qz_addquestion/addAnswer.model';
import { AdminUserSync } from './admimusersync.model';
import { QuizapiService } from '../../quizapi.service';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-adminstartquiz',
  templateUrl: './adminstartquiz.page.html',
  styleUrls: ['./adminstartquiz.page.scss'],
})
export class AdminstartquizPage implements OnInit {
  color: string;

  constructor(private quizApiService: QuizapiService, private toastService: ToastService, private router: Router,private activatedRoute: ActivatedRoute) { }

  getQuiz: CreateQuiz;
  public quetionlist: any = [];
  qstnIndx : number;
  disablenext : boolean;
  plyquiz: any;
  player: any;
  quiz: Quiz;
  public answerlist: any = [];
  actualAnswer : AddAnswers;
  adminusersync: AdminUserSync;
  syncresponse: any;
  quizId: number;
  timeLeft: number = 14;
  interval;
  subscribeTimer: any;
  resultShow: boolean;

  ngOnInit() {
    this.getQuiz = JSON.parse(localStorage.getItem("quizByPin"));
    this.quetionlist = this.getQuiz.listQuestn;
    var qstnIndxLoad = localStorage.getItem("qstnIndxLoad");
    // this.timeLeft = 14;
    // if(null != qstnIndxLoad){
    //   this.startTimer();
    // }    
    this.qstnIndx = 0;
    this.quizId = this.getQuiz.quizId;
    this.syncAdminUserData(this.quizId,this.qstnIndx);
    console.log('quiz in start quiz >>>', this.getQuiz);
    console.log('list of question>>>', this.getQuiz.listQuestn);
    console.log('question list size >>>', this.quetionlist.length);
    this.timeLeft = 14;
    this.startTimer();
    this.resultShow = false;
    //this.timer.startTimer();
   // console.log('displayTime >>>', this.displayTime);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
     // console.log(this.activatedRoute.root);
     // this.timeLeft = 14;
      //this.startTimer();
    });
   
 
  }

  loadQuestion(qstnIndx){
    if(qstnIndx < this.quetionlist.length -1){     
      this.qstnIndx = qstnIndx + 1;
      localStorage.setItem("qstnIndxLoad", JSON.stringify(this.qstnIndx));
      this.disablenext = false;
      this.timeLeft = 14;
      this.startTimer();
      this.syncAdminUserData(this.quizId,this.qstnIndx);
    }else{
     this.disablenext = true;
     this.deleteSyncAdminUser(this.quizId);     
    }    
  }

  trueAnswerSearch(isTrueAnswrKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].isTrueAnswr === isTrueAnswrKey) {
            return myArray[i];
        }
    }
}

syncAdminUserData(quizId,questionIndex){
  this.adminusersync = new AdminUserSync();
  this.adminusersync.quizId = quizId;
  this.adminusersync.questionIndex = questionIndex;
  this.adminusersync.isTimerOn = 'yes';
  this.quizApiService.syncAdminUser(this.adminusersync).subscribe((stndrdResp: Response) => {
    this.syncresponse = stndrdResp.obj;
    console.log('adminusersync >>>', this.syncresponse);
  });
}

deleteSyncAdminUser(quizid){
  this.quizApiService.deleteSyncAdminUser(quizid).subscribe((stndrdResp: Response) => {
    this.syncresponse = stndrdResp.obj;
    console.log('deleteSyncAdminUser >>>', this.syncresponse);
  });
}

startTimer() {
  this.interval = setInterval(() => {
    if (this.timeLeft > 0) {
      this.timeLeft--;
      console.log('timeLeft >>>', this.timeLeft);
    } else {
      //this.timeLeft = 60;
      this.pauseTimer();
     // this.router.navigate(['admindashboard/adminplayquiz/adminstartquiz/adminshowresult']);
      console.log('qstnIndx >>>', this.qstnIndx);
      this.loadQuestion(this.qstnIndx);
    }
  }, 1000)
}

pauseTimer() {
  clearInterval(this.interval);
}

backToDash(){
  this.pauseTimer();
  this.deleteSyncAdminUser(this.quizId);
  this.router.navigate(['/quizdash']);
}

}
