import { Injectable } from '@angular/core';
import { UserEntity } from '../welcometoapp/userEntity.module';

@Injectable()
export class otpvalidate {
 
   
    public gmailId?:String;
    public show?: boolean;
    public token1?:string;
    public userEntity?:UserEntity;
 
    public constructor() { }
 
}