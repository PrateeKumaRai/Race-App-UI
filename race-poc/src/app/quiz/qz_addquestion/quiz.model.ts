import { AddQuestion } from './addQuestion.model';

export class Quiz {

  public quizId?: number;
  public title?: String;
  public description?: String;
  public listQuestn?: Array<AddQuestion>;
  public isPublish?: String;
  public pin?: String;


  constructor() {

  }
  public getQuizId() {
    return this.quizId;
  }
  public setQuizId(quizId: number) {
    this.quizId = quizId;
  }
  public getTitle(){
    return this.title;
  }
  public setTitle(value: String) {
    this.title = value;
  }
  public getDescription(){
    return this.description;
  }
  public setDescription(value: String) {
    this.description = value;
  }
  public getListQuestn(){
    return this.listQuestn;
  }
  public setListQuestn(value: Array<AddQuestion>) {
    this.listQuestn = value;
  }
  public getIsPublish(){
    return this.isPublish;
  }
  public setIsPublish(value: String) {
    this.isPublish = value;
  }
  public getPin() {
    return this.pin;
  }
  public setPin(value: String) {
    this.pin = value;
  }


} 