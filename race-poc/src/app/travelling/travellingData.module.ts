import { Injectable } from '@angular/core';
import { TravelDetail } from './TravelDetail.module';
import { TravelDetailRes } from './TravelDetailRes.Module';

@Injectable()
export class travellingData {

    public storage?: TravelDetail[];
    public createTravelStorage?: TravelDetail;
    public createTravelStorage1?: TravelDetailRes;
    public storage1?: TravelDetailRes[];
    public message1?: String;
    public travelResponse1?: TravelDetailRes[];
    public items?:any;


    public constructor() { }

}