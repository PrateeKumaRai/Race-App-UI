import { HttpClient } from '@angular/common/http';

export class Response {
    public httpstatus?: HttpClient;
    public description?: String;
    public obj?: Object;
  
    constructor( ) {  }

    public getHttpstatus(){
        return this.httpstatus;
    }
    public setHttpstatus(value: HttpClient) {
        this.httpstatus = value;
    }
    public getDescription(){
        return this.description;
    }
    public setDescription(value: String) {
        this.description = value;
    }
    public getObj(){
        return this.obj;
    }
    public setObj(value: Object) {
        this.obj = value;
    }


}