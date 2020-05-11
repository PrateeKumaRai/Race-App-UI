import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { retry, catchError} from 'rxjs/operators';
import { CreateQuiz } from './qz_createquiz/createQuiz.model';
import { AddQuestion } from './qz_addquestion/addQuestion.model';
import { AddAnswers } from './qz_addquestion/addAnswer.model';
import { Admin } from './qz_admin/admin.model';
import { Observable } from 'rxjs';
import { AdminUserSync } from './qz_admin_quizdash/admin_start_quiz/admimusersync.model';
import { Player } from './qz_player/player.model';
import { Playquiz } from './qz_playquiz/playquiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizapiService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //local dev env
  //base_path = 'http://localhost:5902/api/';

  //cloud env
 // 35.239.248.250
  base_path = 'http://35.239.248.250:5902/api/';
  

  saveQuiz(request: CreateQuiz) {
    request.isPublish = 'no';
    request.pin = '';
    console.log("Inside Create Question:: Api servive :: ", request)
    return this.http.post(this.base_path + 'quiz/save', request)
  }

  addQuestions(request: AddQuestion) {
    console.log("Inside add Question:: Api servive :: ", request)
    return this.http.post(this.base_path + 'question/save', request)
  }

  addListOfAnswers(request: Array<AddAnswers>) {
    console.log("Inside the addListOfAnswers:: Api service :: ", request)
    return this.http.post(this.base_path + 'answer/save/list', request)
  }


  loginAdmin(request: Admin) {
    console.log("Inside admin:: Api servive :: ", request)
    return this.http.post(this.base_path + 'admin/login', request)
  }

  getAllQuiz(): Observable<CreateQuiz> {
    return this.http.get<CreateQuiz>(this.base_path + 'quiz/getall', this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  publishQuiz(quizId): Observable<CreateQuiz> {
    return this.http.get<CreateQuiz>(this.base_path + 'quiz/publishquiz/' + quizId, this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  getQuizByPin(pin): Observable<CreateQuiz> {
    return this.http.get<CreateQuiz>(this.base_path + 'quiz/get/publish?isPublish=yes&pin=' + pin, this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  savePlayer(request: Player) {
    return this.http.post(this.base_path + 'player/save', request)
  }

  savePlayQuiz(request: Playquiz) {
    return this.http.post(this.base_path + 'playquiz/save', request, this.httpOptions)
  }

  getAllPlayer(quizid): Observable<any> {
    return this.http.get<Player>(this.base_path + 'player/getbyquizid?quizId=' + quizid, this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  syncAdminUser(request: AdminUserSync) {
    return this.http.post(this.base_path + 'admin/syncdatauser', request, this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  getSyncAdminUser(quizid): Observable<any> {
    return this.http.get<AdminUserSync>(this.base_path + 'admin/getsync?quizId=' + quizid, this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  deleteSyncAdminUser(quizid) {
    return this.http.delete<any>(this.base_path + 'admin/deletesync/' + quizid, this.httpOptions);
  }

  getQuizResult(quizid): Observable<any> {
    return this.http.get<AdminUserSync>(this.base_path + 'admin/getquizresult?quizId=' + quizid, this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => {
          return Observable.throw(error);
        })
      )
  }

  deletePlayQuiz(quizid) {
    return this.http.delete<any>(this.base_path + 'playquiz/delete/' + quizid, this.httpOptions);
  }

  deletePlayersByQuizId(quizid) {
    return this.http.delete<any>(this.base_path + 'player/delete/' + quizid, this.httpOptions);
  }
}
