import { Timestamp } from 'rxjs/internal/operators/timestamp'
import { AddQuestion } from './addQuestion.model';


export class AddAnswers {
  public questn: AddQuestion;
  public quizId?: number;
  public description?: String;
  public isTrueAnswr?: String;
  
  constructor() {
  }

  getQuestn() {
    return this.questn;
  }

  setQuestn(questn: AddQuestion) {
    this.questn = questn;
  }
  getQuizId() {
    return this.quizId;
  }

  setQuizId(quizId: number) {
    this.quizId = quizId;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description: String) {
    this.description = description;
  }

  getIsTrueAnswr() {
    return this.isTrueAnswr;
  }

  setIsTrueAnswr(isTrueAnswr: String) {
    this.isTrueAnswr = isTrueAnswr;
  }

}