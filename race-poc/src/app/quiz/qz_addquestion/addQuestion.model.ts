import { Timestamp } from 'rxjs/internal/operators/timestamp'
import { Quiz } from './quiz.model';
import { AddAnswers } from './addAnswer.model';

export class AddQuestion {

  public questionId?: number;
  public quiz: Quiz;
  public questnDescp?: String;
  private answr: Array<AddAnswers>;

  
  constructor() {

  }

  getQuestionId() {
    return this.questionId;
  }

  setQuestionId(questionId: number) {
    this.questionId = questionId;
  }

  getQuestnDescp() {
    return this.questnDescp;
  }

  setQuestnDescp(questnDescp: String) {
    this.questnDescp = questnDescp;
  }

  getQuiz() {
    return this.quiz;
  }

  setQuiz(quiz: Quiz) {
    this.quiz = quiz;
  }

  public getAnswr(){
    return this.answr;
  }
  public setAnswr(value: Array<AddAnswers>) {
    this.answr = value;
  }


}



