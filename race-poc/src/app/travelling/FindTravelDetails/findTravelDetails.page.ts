import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router, ActivatedRoute } from '@angular/router';

import { TravelDetail } from '../TravelDetail.module';

import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { travellingData } from '../travellingData.module';
import { State } from '../state.component';
import { TravelDetailRes } from '../TravelDetailRes.Module';
import { Country } from '../country.module';
import { CountryArray } from '../countryArray.component';


@Component({
  selector: 'app-travelling',
  templateUrl: './findTravelDetail.page.html',
  styleUrls: ['./findTravelling.page.scss'],
  providers: [State,CountryArray]
})
export class FindTravelDetailPage implements OnInit {
  states2: string[];
  travelResponse: TravelDetailRes[];
  imageName: String;
  retrievedImage: any;
  imgbase64: any[];
  data2:any;
  myForm: FormGroup;
  show: boolean = false;
   show1: boolean = false;
   minDate:string;
   maxDate:string;
   minDa:String;
   check: boolean = true;
   check1: boolean = false;
   check3: boolean=false;
   check4: boolean=false;
   private currentColor1: string
   public searchCntyTerm1: string = "";
  public searchcityTerm1: string = "";
  public searchCntyTerm: string = "";
  public searchcityTerm: string = "";
  optionShow1:boolean=false;
  optionShow2:boolean=true;
  optionShow3:boolean=false;
  optionShow4:boolean=true;
  optionShow5:boolean=false;
  optionShow6:boolean=true;
  optionShow7:boolean=false;
  optionShow8:boolean=true;
  public cities:any
 conCity:Country;
 map1 = new Map<String, String[]>();
 allCitiesByCountry:any[];
 city4:any;
 city5:any;
 public items: any;
 items4:any;
 items5:any;

   validation_messages = {
    
      'selectedSrcState': [
        { type: 'required', message: 'source state location is required.' } 
      ],  
      'selectedDstState': [
        { type: 'required', message: 'destination state location is required.' },
      ],
      
      'startdate': [
        { type: 'required', message: 'start date is required.' },
      ],
      'enddate': [
        { type: 'required', message: 'return date is required.' },
      ],
    }



  constructor(private apiService: ApiService, private router: Router, 
    private route: ActivatedRoute, private data: travellingData, 
    private states1: State,private toastController: ToastController,
    private countryArry1:CountryArray,) {
     
       let currentDate = new Date();
      
       let year1= currentDate.getFullYear().toString();
       let year2= (currentDate.getFullYear()+5).toString();
       let month1= (currentDate.getMonth()+1).toString();
 
     ( 12- (currentDate.getMonth()+1))+(currentDate.getMonth()+1)
 let month3= (( 12-(currentDate.getMonth()+1))+(currentDate.getMonth()+1)).toString();
 
       let date1= currentDate.getDate().toString();
       if (month1.length < 2) {
         var month2 = '0' + month1;
       }
       else{
         var month2 =  month1;
       }
       if (date1.length < 2) {
       
       var date2 = '0' + date1;
       }
       else{
         var date2 =  date1;
       }
      
           if (month3.length < 2) {
             var month4 = '0' + month3;
           }
           else{
             var month4 = month3;
           }
           var maxDate1=''+31;
          
        this.minDate=   [ year1,month2,date2].join('-').toString();
        this.maxDate=   [ year2,month4,maxDate1].join('-').toString();
      
    this.myForm=new FormGroup({
	   
    startdate: new FormControl('', Validators.compose([
     Validators.required
  ])),
  enddate: new FormControl('', Validators.compose([
   Validators.required
 ])),
 selectedSrcState: new FormControl('', Validators.compose([
   Validators.required
 ])),
 selectedDstState: new FormControl('', Validators.compose([
  
   Validators.required
   
 ])),
 src_country: new FormControl('', Validators.compose([

   Validators.required

 ])),
 searchCntyTerm:new FormControl('', Validators.compose([

   Validators.required

 ])),
 searchcityTerm:new FormControl('', Validators.compose([

   Validators.required

 ])),
 searchcityTerm1:new FormControl('', Validators.compose([

   Validators.required

 ])),
 searchCntyTerm1:new FormControl('', Validators.compose([

   Validators.required

 ])),
 dest_country: new FormControl('', Validators.compose([

   Validators.required

 ])),
    
   },//fromgroup 
   { 
    validators: this.start_date.bind(this)
  }
  
 )//FormGroup end
    
   }

  ngOnInit() {
    this.currentColor1 = 'lightBlue1'; 
    fetch('/assets/country_cities.json').then(res=>res.json()).then(json=>{
     
      for (var value in json) {  
        this.map1.set(value,json[value])  
    } 
      
      });
  }
  start_date(formGroup: FormGroup) {

    const { value: start_date } = formGroup.get('startdate');
    const { value: return_date } = formGroup.get('enddate');
    let returndate=new Date(return_date);
    var re1 = new Date(returndate.getFullYear(), returndate.getMonth(), returndate.getDate());
    let startDate = new Date(start_date);
    var g1 = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    
    var year6= startDate.getFullYear().toString();
      let month6= (startDate.getMonth()+1).toString();
      let date6= startDate.getDate().toString();
      if (month6.length < 2) {
        var month7 = '0' + month6;
      }
      else{
        var month7 =  month6;
      }
      if (date6.length < 2) {
      
      var date7 = '0' + date6;
      }
      else{
        var date7 =  date6;
      }
          
       this.minDa=[year6,month7,date7].join('-').toString();
    
    let currentDate = new Date();

    var g2 = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
   
    if(re1.getTime() < g1.getTime() ||re1.getTime() < g2.getTime() ){
      return { dateless1: true };
    }
    
    if (g1.getTime() < g2.getTime()){
     
      return { dateless: true };
    }
   else if (g1.getTime() > g2.getTime()){
   
   return null;
  }
   else{
    
   return null;
}

  }

  getTravelDetailsByLocationAndDate(form, myForm) {
  

    if (this.check==false && form.selectedSrcState != "" && form.selectedDstState != "" && form.selectedSrcState != null && form.selectedDstState != null &&
    form.src_country != "" && form.src_country != "" && form.dest_country != null && form.dest_country != null ) {
      
      this.apiService.getTravelDetailsByLocation(form.selectedSrcState, form.selectedDstState,form.src_country,form.dest_country).subscribe((res) => {
       
        this.travelResponse = res;
       
        this.imgbase64 = new Array(this.travelResponse.length);
        for (let i = 0; i < this.travelResponse.length; i++) {

          this.imageName = this.travelResponse[i].imgName;
         
          this.retrievedImage = 'data:image/jpeg;base64,' + this.travelResponse[i].imgPic;
          this.imgbase64[i] = this.retrievedImage;
          this.travelResponse[i].imgPic = this.retrievedImage;
        }
        this.data.storage1 = this.travelResponse;
        this.router.navigate(['travelDetailRes']);

      },
      async (error) => {
        this.data2= error;        
        let toast = await this.toastController.create({
          message: '' + this.data2,
          duration: 3000,
          position:'middle',
         color:"danger",
         cssClass: "toastAfterHeader"
        
      
        });
      
        return await toast.present().then(() => {
          this.router.navigate(['findTravelDetail']);
      
        })
    
      });
    }//if end
    else if (form.startdate != ""  && form.startdate != null && this.check1==false) {
      
      this.apiService.getTravelDetailsByDate(form.startdate).subscribe((res) => {

        this.travelResponse = res;

        this.imgbase64 = new Array(this.travelResponse.length);
        for (let i = 0; i < this.travelResponse.length; i++) {

          this.imageName = this.travelResponse[i].imgName;
          console.log("imagename::: == ", this.imageName);
          this.retrievedImage = 'data:image/jpeg;base64,' + this.travelResponse[i].imgPic;
          this.imgbase64[i] = this.retrievedImage;
          this.travelResponse[i].imgPic = this.retrievedImage;
        }
        this.data.storage1 = this.travelResponse;
        console.log("Response of TravelDetails", this.travelResponse);
        this.router.navigate(['travelDetailRes']);

      },
      async (error) => {
        this.data2= error;  
        let toast = await this.toastController.create({
          message: '' + this.data2,
          duration: 3000,
          position:'middle',
         color:"danger",
         cssClass: "toastAfterHeader"
        });
      
        return await toast.present().then(() => {
          this.router.navigate(['findTravelDetail']);
      
        })
    
  
  
      });
      //==========
    }//elseif end

    else {
     
      this.apiService.getTravelDetailsByLocationAndDate(form.startdate,form.selectedSrcState, form.selectedDstState,form.src_country,form.dest_country).subscribe((res) => {

        this.travelResponse = res;

        this.imgbase64 = new Array(this.travelResponse.length);
        for (let i = 0; i < this.travelResponse.length; i++) {

          this.imageName = this.travelResponse[i].imgName;
          
          this.retrievedImage = 'data:image/jpeg;base64,' + this.travelResponse[i].imgPic;
          this.imgbase64[i] = this.retrievedImage;
          this.travelResponse[i].imgPic = this.retrievedImage;
        }
        this.data.storage1 = this.travelResponse;
        
        this.router.navigate(['travelDetailRes']);
      },
      async (error) => {
        this.data2= error;
      
        let toast = await this.toastController.create({
          message: '' + this.data2,
          duration: 3000,
          position:'middle',
         color:"danger",
         cssClass: "toastAfterHeader"
      
        });
      
        return await toast.present().then(() => {
          this.router.navigate(['findTravelDetail']);
      
        })

      });
    }//else end
  }

  loadState() {
    this.states2 = this.states1.states

    return this.states2;
  }
  onOptionsSelected(){
    this.show= true; 
  }
  onOptionsSelected1(){
    this.show1= true; 
  }
  onselectCheckBox(srcl1){
    const { value: start_date } = srcl1.get('startdate');
    const { value: return_date } = srcl1.get('enddate');
    const { value: src_state } = srcl1.get('selectedSrcState');
    const { value: dest_state } = srcl1.get('selectedDstState');
    if(this.check==true){
      srcl1.get('startdate').reset();
      
      this.check=false;
    }
    else{  
       this.check=true;
    }
  
  }
    onselectCheckBox1(srcl){
      
      const { value: start_date } = srcl.get('startdate');
      const { value: return_date } = srcl.get('enddate');
      const { value: src_state } = srcl.get('selectedSrcState');
      const { value: dest_state } = srcl.get('selectedDstState');
    
   if(this.check1==true){
    srcl.get('selectedSrcState').reset();
    srcl.get('selectedDstState').reset();
    srcl.get('src_country').reset();
    srcl.get('dest_country').reset();
    srcl.get('searchCntyTerm1').reset();
    srcl.get('searchcityTerm1').reset();
    srcl.get('searchCntyTerm').reset();
    srcl.get('searchcityTerm').reset();
      this.check1=false;
    }
    else{  
     
       this.check1=true;
    }
  }


  setFilteredItemscountry1() {
    this.items5 = this.filterItemscnry1(this.searchCntyTerm1);
    this.optionShow5=true;
    this.optionShow6=false;
  }
 
  filterItemscnry1(searchCntyTerm1) {
    return this.countryArry1.countryArry.filter(item => {
     // console.log("ff",item)
      return item.toLowerCase().indexOf(searchCntyTerm1.toLowerCase()) > -1;

    });
  }

 

  setFilteredItemscity1() {
    this.city5 = this.filterItemsCity1(this.searchcityTerm1);
    this.optionShow7=true;
    this.optionShow8=false;
  }

  filterItemsCity1(searchcityTerm1) {
    return this.allCitiesByCountry.filter(item => {
      return item.toLowerCase().indexOf(searchcityTerm1.toLowerCase()) > -1;

    });
  }

  



  setFilteredItemscountry() {
    this.items = this.filterItemscnry(this.searchCntyTerm);
   this.optionShow1=true;
   this.optionShow2=false;
  }

  filterItemscnry(searchCntyTerm) {
    return this.countryArry1.countryArry.filter(item => {
      return item.toLowerCase().indexOf(searchCntyTerm.toLowerCase()) > -1;

    });
  }
 
  setFilteredItemscity() {
    this.cities = this.filterItemsCity(this.searchcityTerm);
    this.optionShow3=true;
    this.optionShow4=false;
  }
  filterItemsCity(searchcityTerm) {
    return this.allCitiesByCountry.filter(item => {
      return item.toLowerCase().indexOf(searchcityTerm.toLowerCase()) > -1;

    });
  }
  loadCity(event: any){
    console.log("inside load city",event.target.value)
    this.allCitiesByCountry=this.map1.get(event.target.value)
    console.log(this.map1.get(event.target.value));
  }

  loadCountry() {
    this.items4 = this.countryArry1.countryArry
    return this.items;
  }
  loadCites() {
    this.city4 = this.allCitiesByCountry
    return this.cities;
  }
}//main class end