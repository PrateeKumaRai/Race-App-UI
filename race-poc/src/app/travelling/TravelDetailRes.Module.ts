import { Timestamp } from 'rxjs/internal/operators/timestamp'
import { ImageDetail } from './ImageDetail.module';

export class TravelDetailRes {
    public travel_id?: number;
    public id?: number;
    employee_id?: number;
    start_date?: Date;
    return_date?: Date;
    src_country?: String;
    dest_country?:String;
    source_location?: string;
    dest_location?: String;
    status?: Boolean;
    travel_type?: String;
    created_at?: Date;
    updated_at?: Date;
    imgName?: String;
    imgType?: String;
    imgPic?: any;
    mob_num?: number;
    constructor(
        travel_id?: number,
        id?: number,
        employee_id?: number,
        start_date?: Date,
        return_date?: Date,
        src_country?: String,
        dest_country?:String,
        source_location?: string,
        dest_location?: String,
        status?: Boolean,
        travel_type?: String,
        created_at?: Date,
        updated_at?: Date,
        imgName?: String,
        imgType?: String,
        imgPic?: any,
        mob_num?: number

    ) {

    }
}



