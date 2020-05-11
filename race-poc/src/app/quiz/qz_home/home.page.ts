import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '../response.model';
import { CreateQuiz } from 'src/app/quiz/qz_createquiz/createQuiz.model';
import { ToastService } from 'src/app/services/toast.service';
import { QuizapiService } from '../quizapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private quizApiService: QuizapiService, private toastService: ToastService, private router: Router) { }

  getQuiz: CreateQuiz;


  getQuizByPin(form) {
    if ('' === form.value.pin || null === form.value.pin || undefined === form.value.pin) {
      this.toastService.presentToast('Pin is empty Or Null !!', 'danger');

    } else {
      this.quizApiService.getQuizByPin(form.value.pin).subscribe((stndrdResp: Response) => {
        this.getQuiz = stndrdResp.obj;
        if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("NOT_FOUND")) {
          console.log('NOT_FOUND >>', stndrdResp.description);
          this.toastService.presentToast('Sorry Invalid Pin !!', 'danger');
        } else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("INTERNAL_SERVER_ERROR")) {
          console.log('INTERNAL_SERVER_ERROR >>', stndrdResp.description);
          this.toastService.presentToast('Oops Something went wrong !!', 'danger');
        } else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("OK")) {
          localStorage.setItem("quizByPin", JSON.stringify(this.getQuiz));
          localStorage.setItem("quizid", JSON.stringify(this.getQuiz.quizId));
          console.log('quiz pin >>>', this.getQuiz);
          this.router.navigate(['player']);
        }
      });
    }
  }

  numberOnly($event) {
    const charCode = ($event.which) ? $event.which : $event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
