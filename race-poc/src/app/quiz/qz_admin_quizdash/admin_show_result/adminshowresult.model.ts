
export class AdminShowResult {
    
    private playerId?: number;
    private nickName?: String;
    private state?: String;
    private quizId?: number;   

    constructor() { }


    public getplayerId(): number {
        return this.playerId;
    }
    public setplayerId(value: number) {
        this.playerId = value;
    }
    public getnickName(): String {
        return this.nickName;
    }
    public setnickName(value: String) {
        this.nickName = value;
    }
    public getstate(): String {
        return this.state;
    }
    public setstate(value: String) {
        this.state = value;
    }
    public getquizId(): number {
        return this.quizId;
    }
    public setquizId(value: number) {
        this.quizId = value;
    }

    
}



