import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/quiz/response.model'
import { CreateQuiz } from '../../qz_createquiz/createQuiz.model';
import { QuizapiService } from '../../quizapi.service';


@Component({
  selector: 'app-admin_play_quiz',
  templateUrl: './adminplayquiz.page.html',
  styleUrls: ['./adminplayquiz.page.scss'],
})
export class AdminPlayquizPage implements OnInit {

  constructor(private quizApiService: QuizapiService) { }

  playquizresponse: any;
  getQuiz: CreateQuiz;
  quizId: number;

  ngOnInit() {
    this.getQuiz = JSON.parse(localStorage.getItem("quizByPin"));
    this.quizId = this.getQuiz.quizId;
    //this.deletePlayQuiz(this.quizId);
  }


  deletePlayQuiz(quizid) {
    this.quizApiService.deletePlayQuiz(quizid).subscribe((stndrdResp: Response) => {
      this.playquizresponse = stndrdResp.obj;
      console.log('playquizresponse delete  >>>', this.playquizresponse);
    });
  }

}
