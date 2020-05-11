
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelDetail } from './travelling/TravelDetail.module';

import { map, retry, catchError } from 'rxjs/operators';
import { errorHandle } from './travelling/errorHandle.module';
import { travellingData } from './travelling/travellingData.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
 
 //*********************** */

 base_path = 'http://35.239.248.250:8086/travel/';
 //base_path='http://localhost:8086/travel/'
  constructor(private httpClient: HttpClient,private errorHandle1: errorHandle,) { }

  registerTravel(id) {
    // alert("Inside api service"+ id);
    return this.httpClient.get(this.base_path+'travelDetail/'+id);
  }
//++++++++++++++++++++
travelDetailsByEmpId(empid): Observable<TravelDetail[]> {
  console.log("====****************3");
  return this.httpClient.get(this.base_path+'travelDetail/'+empid).pipe(
       map((data: any[]) => data.map((item: any) => {
           const model = new TravelDetail();
           console.log("Inside Api servive :: "+model )
           Object.assign(model, item);
           return model;
        })),retry(0),
        catchError((error) => this.errorHandle1.handleError(error))
       );
 
 }




  getTravelDetailsByLocation(sourcestate, deststate,srcCountry,destCountry): Observable<TravelDetail[]> {
    console.log("====****************3");
    return this.httpClient.get(this.base_path+'travelDetails/travels?sourceLocation='+sourcestate+'&destLocation='+deststate+'&srcCountry='+srcCountry+'&destCountry='+destCountry).pipe(
         map((data: any[]) => data.map((item: any) => {
             const model = new TravelDetail();
             console.log("Inside Api servive :: "+model )
             Object.assign(model, item);
             return model;
          })),retry(0),
          catchError((error) => this.errorHandle1.handleError(error))
         );
   
   }
   //============
   getTravelDetailsByDate(startdate): Observable<TravelDetail[]> {
    return this.httpClient.get(this.base_path+'travelDetails?startDate='+startdate).pipe(
         map((data: any[]) => data.map((item: any) => {
             const model = new TravelDetail();
             console.log("Inside Api servive :: "+model )
             Object.assign(model, item);
             return model;
          })),retry(0),
          catchError((error) => this.errorHandle1.handleError(error))
         );
   
   }
 //'http://3.200.186.1:7004/travel/travelDetails?startDate='
 getTravelDetailsByLocationAndDate(startdate, sourcestate, deststate,srcCountry,destCountry): Observable<TravelDetail[]> {
 return this.httpClient.get(this.base_path+'travels/travelDetails?date='+startdate+'&sourceLocation='+sourcestate+'&destLocation='+deststate+'&srcCountry='+srcCountry+'&destCountry='+destCountry).pipe(
      map((data: any[]) => data.map((item: any) => {
          const model = new TravelDetail();
          console.log("Inside Api servive :: "+model )
          Object.assign(model, item);
          return model;
       })),retry(0),
       catchError((error) => this.errorHandle1.handleError(error))
      );

}


createTravelDetails(request:TravelDetail,uploadData:FormData): Observable<any>{
  console.log("Inside Create Travel:: Api servive :: ",request,uploadData)
  
   return this.httpClient.post(this.base_path+'travels/upload',uploadData).pipe(
    retry(0),
    catchError((error) => this.errorHandle1.handleError(error))
  );
}

//********************************************** */
updateTravelDetail(request: TravelDetail): Observable<any> {
  
  console.log("Inside Create Travel:: Api servive :: ", request)
  return this.httpClient.put(this.base_path+'travels', request).pipe(
    retry(0),
    catchError((error) => this.errorHandle1.handleError(error))
  )
}

deleteTravelDetail(travelId,empId): Observable<any> {
  
  console.log("Inside Create Travel:: Api servive :: ",travelId)
  return this.httpClient.delete(this.base_path+'travels/'+empId+'/'+travelId).pipe(
    retry(0),
    catchError((error) => this.errorHandle1.handleError(error))
  )
}

readJsonFile(): Observable<any>{
  return this.httpClient.get("../travelling/country_cities.json");
}

}

