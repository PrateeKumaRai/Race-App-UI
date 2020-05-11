
import { Injectable } from '@angular/core';
import { TravelDetail } from './TravelDetail.module';

@Injectable()
export class State {
   
states:Array<string>=[
    'AndhraPradesh',
    'ArunachalPradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',	
    'HimachalPradesh',
   'JammuAndKashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya',
  'Maharashtra',
   'Manipur',
   'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'TamilNadu',
    'Telangana',
    'Tripura',
    'UttarPradesh',
    'Uttarakhand',
    'WestBengal'];
    public storage?: State[];
    public createTravelStorage?:TravelDetail;

    public constructor(

    ) { }


}