import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateQuiz } from './createQuiz.model';
import { Response } from '../response.model';
import { ToastService } from 'src/app/services/toast.service';
import { QuizapiService } from '../quizapi.service';



@Component({
  selector: 'app-createquestion',
  templateUrl: './createquiz.page.html',
  styleUrls: ['./createquiz.page.scss'],
})
export class CreatequizPage implements OnInit {

  quizTitleS: any;
  quizRes: CreateQuiz;

  constructor(private quizApiService: QuizapiService, private router: Router, private route: ActivatedRoute, private toastService: ToastService) { }

  ngOnInit() {
  }
  saveQuiz(form) {
    if('' === form.value.title || null === form.value.title || undefined === form.value.title){
      this.toastService.presentToast('Title is empty !!', 'danger');
    }else if('' === form.value.desc || null === form.value.desc || undefined === form.value.desc){
       this.toastService.presentToast('Description is empty !!', 'danger');
    }else{
      this.quizTitleS = form.value;
      console.log("form======", form.value.title);
      this.quizRes = new CreateQuiz();
      this.quizRes.title = form.value.title;
      this.quizRes.description = form.value.desc;
      console.log("all request elememt === :: ", form.value.selectedState);
      console.log("Quiz Object**** ::  ", form.value);
      this.quizApiService.saveQuiz(this.quizRes).subscribe((stndrdResp: Response) => {
        console.log("Quiz Details ::>>", stndrdResp);
        this.quizRes = stndrdResp.obj;
        localStorage.setItem("quizId",JSON.stringify(this.quizRes.quizId));
        var quizId = localStorage.getItem("quizId");
        console.log("quizId::>>", quizId);
        this.router.navigate(['addquestion']);     
      });
    }
  }

}
