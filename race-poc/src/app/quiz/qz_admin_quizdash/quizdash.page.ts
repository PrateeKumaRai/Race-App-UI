import { Component, OnInit } from '@angular/core';
import { Response } from '../response.model';
import { CreateQuiz } from 'src/app/quiz/qz_createquiz/createQuiz.model';
import { Router,NavigationEnd} from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { QuizapiService } from '../quizapi.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-quizdash',
  templateUrl: './quizdash.page.html',
  styleUrls: ['./quizdash.page.scss'],
})
export class QuizdashPage implements OnInit {

  constructor(private quizApiService: QuizapiService, private router: Router, private toastService: ToastService) { }

  public quiz: any = [];
  updateQuiz: CreateQuiz;
  getQuiz: CreateQuiz;
  playerresponse: any;
  myObserver = null;

  ngOnInit() {
    //this.getAllQuiz();
    this.myObserver = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.getAllQuiz();
    });
  }

  ngOnDestroy() {
    this.myObserver.unsubscribe();
  }

  publishQuiz(quizId) {
    console.log('quizId', quizId);
    this.quizApiService.publishQuiz(quizId).subscribe((stndrdResp: Response) => {
      this.updateQuiz = stndrdResp.obj;
      this.showUpdatedQuiz(this.updateQuiz);
      console.log('updateQuiz', this.updateQuiz);
    });
  }

  getAllQuiz() {
    this.quizApiService.getAllQuiz().subscribe((stndrdResp: Response) => {
      this.quiz = stndrdResp.obj;
      console.log('quiz  >>>', this.quiz);
    });
  }

  showUpdatedQuiz(newItem) {
    let updateItem = this.quiz.find(this.findIndexToUpdate, newItem.quizId);
    let index = this.quiz.indexOf(updateItem);
    this.quiz[index] = newItem;
  }

  findIndexToUpdate(newItem) {
    return newItem.quizId === this;
  }

  getQuizByPin(form) {
    if ('' === form.value.pin || null === form.value.pin || undefined === form.value.pin) 
    {
      this.toastService.presentToast('Pin is empty Or Null !!', 'danger');
    }
    else {
        this.quizApiService.getQuizByPin(form.value.pin).subscribe((stndrdResp: Response) => {
        this.getQuiz = stndrdResp.obj;
        if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("NOT_FOUND")) {
          console.log('NOT_FOUND >>', stndrdResp.description);
          this.toastService.presentToast('Sorry Invalid Pin !!', 'danger');
        }else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("INTERNAL_SERVER_ERROR")) {
          console.log('INTERNAL_SERVER_ERROR >>', stndrdResp.description);
          this.toastService.presentToast('Oops Something went wrong !!', 'danger');
        }else if(JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("OK")){          
          localStorage.setItem("quizByPin", JSON.stringify(this.getQuiz));
          localStorage.setItem("quizpin", form.value.pin);
          localStorage.setItem("quizid", JSON.stringify(this.getQuiz.quizId));
          console.log('quiz pin >>>', this.getQuiz);
          this.deletePlayersByQuizId(this.getQuiz.quizId);
          this.router.navigate(['admindashboard']);
        }
      });
    }
  }

  numberOnly($event){
    const charCode = ($event.which) ? $event.which : $event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  
  deletePlayersByQuizId(quizid) {
    this.quizApiService.deletePlayersByQuizId(quizid).subscribe((stndrdResp: Response) => {
      this.playerresponse = stndrdResp.obj;
      console.log('playerresponse delete  >>>', this.playerresponse);
    });
  }

}
