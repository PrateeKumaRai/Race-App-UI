import { Component, OnInit } from '@angular/core';
import { AddQuestion } from './addQuestion.model';
import { Quiz } from './quiz.model';
import { AddAnswers } from './addAnswer.model';
import { Response } from '../response.model';
import { ToastService } from 'src/app/services/toast.service';
import { QuizapiService } from '../quizapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.page.html',
  styleUrls: ['./addquestion.page.scss'],
})

export class AddquestionPage implements OnInit {
  message: any;
  orderForm: any;
  addquestionRes: any;
  quizData: Quiz;
  toastController: any;
  public quiz: any = [];

  check1: boolean;
  check2: boolean;
  check3: boolean;
  check4: boolean;
  constructor(private quizApiService: QuizapiService, private toastService: ToastService,private router: Router) {
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
  }

  ngOnInit() {

  }

  addQuestions(form) {
    if ('' === form.value.title || null === form.value.title || undefined === form.value.title) {
      this.toastService.presentToast('Question is empty !!', 'danger');
    } else {
      this.addquestionRes = new AddQuestion();
      this.quizData = new Quiz();
      this.quizData.setQuizId(Number(localStorage.getItem("quizId")));
      this.addquestionRes.setQuestnDescp(form.value.title);
      this.addquestionRes.setQuiz(this.quizData);


      this.quizApiService.addQuestions(this.addquestionRes).subscribe((stndrdResp: Response) => {
        console.log("Questions", stndrdResp);
        this.addquestionRes = stndrdResp.obj;
        localStorage.setItem("questionId", JSON.stringify(this.addquestionRes.questionId));
        var questionId = localStorage.getItem("questionId");
        console.log("questionId::>>", questionId);
      });
    }
  }

  disablecheck1: boolean;
  disablecheck2: boolean;
  disablecheck3: boolean;
  disablecheck4: boolean;

  dynamicheckbox(e, checkboxno, form) {
    if (checkboxno === 'check1') {
      if (e.target.checked) {
        this.disablecheck2 = true;
        this.disablecheck3 = true;
        this.disablecheck4 = true;
        console.log("check1 checked true::>>", checkboxno);
      } else {
        this.disablecheck2 = false;
        this.disablecheck3 = false;
        this.disablecheck4 = false;
        console.log("check1 checked false::>>", checkboxno);
      }
    }
    else if (checkboxno === 'check2') {
      if (e.target.checked) {
        this.disablecheck1 = true;
        this.disablecheck3 = true;
        this.disablecheck4 = true;
      } else {
        this.disablecheck1 = false;
        this.disablecheck3 = false;
        this.disablecheck4 = false;
      }
    }
    else if (checkboxno === 'check3') {
      if (e.target.checked) {
        this.disablecheck1 = true;
        this.disablecheck2 = true;
        this.disablecheck4 = true;
      } else {
        this.disablecheck1 = false;
        this.disablecheck2 = false;
        this.disablecheck4 = false;
      }
    }
    else if (checkboxno === 'check4') {
      if (e.target.checked) {
        this.disablecheck1 = true;
        this.disablecheck2 = true;
        this.disablecheck3 = true;
      } else {
        this.disablecheck1 = false;
        this.disablecheck2 = false;
        this.disablecheck3 = false;
      }
    }

  }

  resetForm(form) {
    form.resetForm();
  }

  // Save List Of Answer
  addListOfAnswer(form) {

    if ('' === form.value.title || null === form.value.title || undefined === form.value.title) {
      this.toastService.presentToast('Question is empty !!', 'danger');
    } else if ('' === form.value.ans1 || null === form.value.ans1 || undefined === form.value.ans1) {
      this.toastService.presentToast('Ans 1 is empty !!', 'danger');
    } else if ('' === form.value.ans2 || null === form.value.ans2 || undefined === form.value.ans2) {
      this.toastService.presentToast('Ans 2 is empty !!', 'danger');
    } else if ('' === form.value.ans3 || null === form.value.ans3 || undefined === form.value.ans3) {
      this.toastService.presentToast('Ans 3 is empty !!', 'danger');
    } else if ('' === form.value.ans4 || null === form.value.ans4 || undefined === form.value.ans4) {
      this.toastService.presentToast('Ans 4 is empty !!', 'danger');
    } else if (false === form.value.check1 || false === form.value.check2 || false === form.value.check3
      || false === form.value.check4 || null === form.value.check1 || null === form.value.check2 ||
       null === form.value.check3 || null === form.value.check4) {
      this.toastService.presentToast('One correct answer should be selected !!', 'danger');
    } else {
      console.log('answr1', form.value.ans1);
      console.log('answr2', form.value.ans2);
      console.log('answr3', form.value.ans3);
      console.log('answr4', form.value.ans4);


      console.log('checkbox1', form.value.check1);
      console.log('checkbox2', form.value.check2);
      console.log('checkbox3', form.value.check3);
      console.log('checkbox4', form.value.check4);

      if (form.value.check1 === true) {
        form.value.check2 = false;
        form.value.check3 = false;
        form.value.check4 = false;
      }
      else if (form.value.check2 === true) {
        form.value.check1 = false;
        form.value.check3 = false;
        form.value.check4 = false;
      }
      else if (form.value.check3 === true) {
        form.value.check1 = false;
        form.value.check2 = false;
        form.value.check4 = false;
      }
      else if (form.value.check4 === true) {
        form.value.check1 = false;
        form.value.check2 = false;
        form.value.check3 = false;
      }



      let listAnswr = new Array<AddAnswers>();

      //First Answer Start
      let answr1 = new AddAnswers();
      let questn1 = new AddQuestion();
      let quiz1 = new Quiz();

      //Populate the quiz details
      quiz1.setQuizId(Number(localStorage.getItem("quizId")));
      quiz1.setTitle('');
      quiz1.setDescription('');
      quiz1.setListQuestn(new Array<AddQuestion>());
      quiz1.setIsPublish('');
      quiz1.setPin('');

      //Populate the question details
      questn1.setQuestionId(Number(localStorage.getItem("questionId")));
      questn1.setQuiz(quiz1);
      questn1.setQuestnDescp('');
      questn1.setAnswr(new Array<AddAnswers>());

      //Populate the answer details
      answr1.setQuestn(questn1);
      answr1.setQuizId(Number(localStorage.getItem("quizId")));
      answr1.setDescription(form.value.ans1);
      answr1.setIsTrueAnswr(form.value.check1);

      //First Answer End


      //Second Answer Start
      let answr2 = new AddAnswers();
      let questn2 = new AddQuestion();
      let quiz2 = new Quiz();

      //Populate the quiz details
      quiz2.setQuizId(Number(localStorage.getItem("quizId")));
      quiz2.setTitle('');
      quiz2.setDescription('');
      quiz2.setListQuestn(new Array<AddQuestion>());
      quiz2.setIsPublish('');
      quiz2.setPin('');

      //Populate the question details
      questn2.setQuestionId(Number(localStorage.getItem("questionId")));
      questn2.setQuiz(quiz2);
      questn2.setQuestnDescp('');
      questn2.setAnswr(new Array<AddAnswers>());

      //Populate the answer details
      answr2.setQuestn(questn2);
      answr2.setQuizId(Number(localStorage.getItem("quizId")));
      answr2.setDescription(form.value.ans2);
      answr2.setIsTrueAnswr(form.value.check2);

      //Second Answer End


      //Third Answer Start
      let answr3 = new AddAnswers();
      let questn3 = new AddQuestion();
      let quiz3 = new Quiz();

      //Populate the quiz details
      quiz3.setQuizId(Number(localStorage.getItem("quizId")));
      quiz3.setTitle('');
      quiz3.setDescription('');
      quiz3.setListQuestn(new Array<AddQuestion>());
      quiz3.setIsPublish('');
      quiz3.setPin('');

      //Populate the question details
      questn3.setQuestionId(Number(localStorage.getItem("questionId")));
      questn3.setQuiz(quiz3);
      questn3.setQuestnDescp('');
      questn3.setAnswr(new Array<AddAnswers>());

      //Populate the answer details
      answr3.setQuestn(questn3);
      answr3.setQuizId(Number(localStorage.getItem("quizId")));
      answr3.setDescription(form.value.ans3);
      answr3.setIsTrueAnswr(form.value.check3);

      //Third Answer End


      //Four Answer Start
      let answr4 = new AddAnswers();
      let questn4 = new AddQuestion();
      let quiz4 = new Quiz();

      //Populate the quiz details
      quiz4.setQuizId(Number(localStorage.getItem("quizId")));
      quiz4.setTitle('');
      quiz4.setDescription('');
      quiz4.setListQuestn(new Array<AddQuestion>());
      quiz4.setIsPublish('');
      quiz4.setPin('');

      //Populate the question details
      questn4.setQuestionId(Number(localStorage.getItem("questionId")));
      questn4.setQuiz(quiz4);
      questn4.setQuestnDescp('');
      questn4.setAnswr(new Array<AddAnswers>());

      //Populate the answer details
      answr4.setQuestn(questn4);
      answr4.setQuizId(Number(localStorage.getItem("quizId")));
      answr4.setDescription(form.value.ans4);
      answr4.setIsTrueAnswr(form.value.check4);

      //Four Answer End

      listAnswr.push(answr1);
      listAnswr.push(answr2);
      listAnswr.push(answr3);
      listAnswr.push(answr4);

      console.log("List Of Answers", listAnswr);
      this.quizApiService.addListOfAnswers(listAnswr).subscribe((res) => {
        console.log("List of Answers After Saving", res);
        this.toastService.presentToast('Succesfully Saved the Answers.. !!', 'success');
      });
    }
  }

  submit() {
    this.orderForm.reset();
  }

  backToQuizDash(){
    //this.getAllQuiz();
    this.router.navigate(['/quizdash']);
  }

  getAllQuiz() {
    this.quizApiService.getAllQuiz().subscribe((stndrdResp: Response) => {
      this.quiz = stndrdResp.obj;
      console.log('quiz  >>>', this.quiz);
    });
  }

  

}
