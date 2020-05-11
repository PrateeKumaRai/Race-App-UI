import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/quiz/response.model';
import { Playquiz } from 'src/app/quiz/qz_playquiz/playquiz.model';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { CreateQuiz } from 'src/app/quiz/qz_createquiz/createQuiz.model';
import { Player } from '../../qz_player/player.model';
import { Quiz } from '../../qz_addquestion/quiz.model';
import { AddAnswers } from '../../qz_addquestion/addAnswer.model';
import { interval } from 'rxjs';
import { QuizapiService } from '../../quizapi.service';

@Component({
  selector: 'app-player',
  templateUrl: './startquiz.page.html',
  styleUrls: ['./startquiz.page.scss'],
})
export class StartquizPage implements OnInit {
  color: string;

  constructor(private quizApiService: QuizapiService, private toastService: ToastService, private router: Router) { }

  getQuiz: CreateQuiz;
  public quetionlist: any = [];
  qstnIndx: number;
  disablenext: boolean;
  plyquiz: any;
  player: any;
  quiz: Quiz;
  public answerlist: any = [];
  actualAnswer: AddAnswers;
  sub: any;
  syncresponse: any;
  disableanwr: boolean;
  timeLeft: number = 14;
  interval;
  tempQstnIndx: any;
  playerName:any;
  wlcomeShowMsg:boolean;
  showTimer:boolean;
  

  ngOnInit() {
    this.playerName = JSON.parse(localStorage.getItem("playerName"));
    this.getQuiz = JSON.parse(localStorage.getItem("quizByPin"));
    this.quetionlist = this.getQuiz.listQuestn;
    this.tempQstnIndx = 0;
    this.wlcomeShowMsg = true;
    this.showTimer = false;
    this.getSyncAdminUser(this.getQuiz.quizId);
    console.log('quiz in start quiz >>>', this.getQuiz);
    console.log('list of question>>>', this.getQuiz.listQuestn);
    console.log('question list size >>>', this.quetionlist.length);
  }

  loadQuestion(qstnIndx) {
    if (qstnIndx < this.quetionlist.length - 1) {
      this.qstnIndx = qstnIndx + 1;
      this.disablenext = false;
    } else {
      this.disablenext = true;
    }
  }

  savePlayquiz(form, useranswer, userisTrueAnswr, answrList, btnId, questionId) {
    let plyquiz = new Playquiz();
    let player = new Player();
    this.answerlist = answrList;

    this.actualAnswer = this.trueAnswerSearch("true", answrList);

    console.log('btnId >>>', btnId);

    console.log('answer >>>', this.actualAnswer);

    console.log('useranswer >>>', useranswer);
    console.log('userisTrueAnswr >>>', userisTrueAnswr);

    player.setplayerId(Number(localStorage.getItem("playerId")));
    this.getQuiz = JSON.parse(localStorage.getItem("quizByPin"));
    player.setquizId(this.getQuiz.quizId);
    player.setnickName('');
    player.setplayquiz(new Array<Playquiz>());

    // this.player.nickName = form.value.nickName;

    //this.plyquiz.player = this.player;
    this.getQuiz = JSON.parse(localStorage.getItem("quizByPin"));
    this.quetionlist = this.getQuiz.listQuestn;
   // console.log('this.quetionlist.length',this.quetionlist.length);

    plyquiz.setquizId(this.getQuiz.quizId);
    plyquiz.setquestionId(questionId);
    plyquiz.setplayer(player);
    plyquiz.setactualAnswer(this.actualAnswer.description);
    plyquiz.setplayerAnswr(useranswer);
    plyquiz.setanswerTime(this.timeLeft);
    plyquiz.setscore(0);
    if (this.actualAnswer.description === useranswer) {
      plyquiz.setstate('right');
      // this.color = "#00cc00";
      //document.getElementById("btnId").style.background='#00cc00';
      this.toastService.presentToast('Your Answer is Right i.e ' + this.actualAnswer.description, 'success');
    } else {
      plyquiz.setstate('wrong');
      ////document.getElementById("btnId").style.background='#cc0000';
      //this.color = "#cc0000";
      this.toastService.presentToast('Your Answer is Wrong !! Right answer is ' + this.actualAnswer.description, 'danger');
    }


    this.quizApiService.savePlayQuiz(plyquiz).subscribe((stndrdResp: Response) => {
      this.plyquiz = stndrdResp.obj;
      this.disableanwr = true;
      this.timeLeft = 0;
      this.pauseTimer();
      console.log('Play quiz saved >>>', this.plyquiz);
    });
  }


  trueAnswerSearch(isTrueAnswrKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].isTrueAnswr === isTrueAnswrKey) {
        return myArray[i];
      }
    }
  }

  getSyncAdminUser(quizid) {
    this.sub = interval(1000).subscribe(x => {
      this.quizApiService.getSyncAdminUser(quizid).subscribe((stndrdResp: Response) => {
        this.syncresponse = stndrdResp.obj;
        if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("OK")) {
          this.wlcomeShowMsg = false;
          this.showTimer = true;
          if (this.qstnIndx !== this.syncresponse.questionIndex) {
            this.disableanwr = false;
          }
          this.qstnIndx = this.syncresponse.questionIndex;
          if(this.tempQstnIndx === this.qstnIndx && this.syncresponse.isTimerOn === 'yes'){
            this.tempQstnIndx = this.tempQstnIndx + 1;
            this.timeLeft = 14;
            this.startTimer();
          }
        }
        if (this.qstnIndx === this.quetionlist.length - 1) {
          this.sub.unsubscribe();
        }
        console.log('this.syncresponse in user  >>>', this.syncresponse);
      });
    });
  }


  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        console.log('timeLeft >>>', this.timeLeft);
      } else {
        this.disableanwr = true;
        this.pauseTimer();        
      }
    }, 1000)
  }
  
  pauseTimer() {
    clearInterval(this.interval);
  }

  backToQuiz(){
    this.router.navigate(['/quiz']);
  }

}
