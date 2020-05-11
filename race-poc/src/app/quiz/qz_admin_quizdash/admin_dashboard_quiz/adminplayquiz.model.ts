import { Player } from 'src/app/quiz/qz_player/player.model';

export class Playquiz {
    private playquizId?: number;
    private player?: Player;
    private quizId?: number;
    private questionId?: number;
    private playerAnswr?: String;
    private actualAnswer?: String;
    private state?: String;

    constructor() { }

    public getplayquizId(): number {
        return this.playquizId;
    }
    public setplayquizId(value: number) {
        this.playquizId = value;
    }
    public getplayer(): Player {
        return this.player;
    }
    public setplayer(value: Player) {
        this.player = value;
    }
    public getquizId(): number {
        return this.quizId;
    }
    public setquizId(value: number) {
        this.quizId = value;
    }
    public getquestionId(): number {
        return this.questionId;
    }
    public setquestionId(value: number) {
        this.questionId = value;
    }
    public getplayerAnswr(): String {
        return this.playerAnswr;
    }
    public setplayerAnswr(value: String) {
        this.playerAnswr = value;
    }
    public getactualAnswer(): String {
        return this.actualAnswer;
    }
    public setactualAnswer(value: String) {
        this.actualAnswer = value;
    }
    public getstate(): String {
        return this.state;
    }
    public setstate(value: String) {
        this.state = value;
    }
}



