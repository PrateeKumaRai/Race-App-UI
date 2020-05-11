import { Player } from 'src/app/quiz/qz_player/player.model';

export class AdminUserSync {
    public syncId?: number;
    public quizId?: number;
    public questionIndex?: number;
    public isTimerOn?: String;
    
    constructor() { }

    public getsyncId(): number {
        return this.syncId;
    }
    public setsyncId(value: number) {
        this.syncId = value;
    }
    public getquizId(): number {
        return this.quizId;
    }
    public setquizId(value: number) {
        this.quizId = value;
    }
    public getquestionIndex(): number {
        return this.questionIndex;
    }
    public setquestionIndex(value: number) {
        this.questionIndex = value;
    }
    public getisTimerOn(): String {
        return this.isTimerOn;
    }
    public setisTimerOn(value: String) {
        this.isTimerOn = value;
    }

 }



