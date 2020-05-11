import { Playquiz } from 'src/app/quiz/qz_playquiz/playquiz.model';

export class Player {
    private playerId?: number;
    private quizId?: number;
    private nickName?: String;
    private playquiz: Array<Playquiz>;
 

    constructor() { }

    public getplayerId(){
        return this.playerId;
    }
    public setplayerId(value: number) {
        this.playerId = value;
    }
    public getquizId(){
        return this.quizId;
    }
    public setquizId(value: number) {
        this.quizId = value;
    }
    public getnickName(){
        return this.nickName;
    }
    public setnickName(value: String) {
        this.nickName = value;
    }
    public getplayquiz(){
        return this.playquiz;
    }
    public setplayquiz(value: Array<Playquiz>) {
        this.playquiz = value;
    }


}



