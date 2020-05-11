import { Timestamp } from 'rxjs/internal/operators/timestamp'

export class TravelDetail {
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
        mob_num?: number

    ) {

    }
}



