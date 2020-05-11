import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../api.service';
import { State } from '../state.component';
import { ImageDetail } from '../ImageDetail.module';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { timer } from 'rxjs';
import { ToastController, LoadingController } from '@ionic/angular';
import { otpvalidate } from '../../model/otpvalidate.model';
import { UserEntity } from '../../welcometoapp/userEntity.module';
import { travellingData } from '../travellingData.module';
import { TravelDetail } from '../TravelDetail.module';
import { TravelDetailRes } from '../TravelDetailRes.Module';

import { Country } from '../country.module';
import { CountryArray } from '../countryArray.component';



@Component({
  selector: 'app-travelling',
  templateUrl: './createTravelDetail.page.html',
  styleUrls: ['./createTravelling.page.scss'],
  providers: [State,CountryArray]
})

export class CreateTravelDetailPage implements OnInit {
  travelDetailRes: TravelDetail;
 
  file: File;
  uploadData1: FormData;
  retrievedImage: any;
  data2: any;
  myForm: FormGroup;
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
  show: boolean = false;
  show1: boolean = false;
  minDate: string;
  maxDate: string;
  minDa: String;
  stdatreq: boolean = false;
  userEntity :UserEntity;
 currentColor: string;
 travelResponse1: TravelDetailRes[];
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
    'mob_num': [
      { type: 'required', message: 'mobile number is required.' },
      { type: 'minlength', message: 'Enter 10 digit mobile number,' },
      { type: 'maxlength', message: 'mobile number should not be more than 10' },
      { type: 'pattern', message: 'mobile number must contain only numbers' }

    ],
    'selectedSrcState': [
      { type: 'required', message: 'source state location is required.' }
    ],
    'selectedDstState': [
      { type: 'required', message: 'destination state location is required.' },
    ],
    'image': [
      { type: 'required', message: 'image is required.' },
    ],
    'start_date': [
      { type: 'required', message: 'start date is required.' },
    ],
    'return_date': [
      { type: 'required', message: 'return date is required.' },
    ],
    'src_country':[
      { type: 'required', message: 'source country is required.' },
    ],
    'dest_country':[
      { type: 'required', message: 'Destination country is required.' },
    ]
  }

  constructor(private apiService: ApiService, private router: Router,
    private route: ActivatedRoute, private data: travellingData,
    private states1: State, private toastController: ToastController,
   private optval: otpvalidate,
   private loadingCtrl:LoadingController,private countryArry1:CountryArray,) {


    this.currentColor = 'lightBlue'; 
     this.userEntity=optval.userEntity;

    let currentDate = new Date();
    let year1 = currentDate.getFullYear().toString();
    let year2 = (currentDate.getFullYear() + 3).toString();
    let month1 = (currentDate.getMonth() + 1).toString();

    (12 - (currentDate.getMonth() + 1)) + (currentDate.getMonth() + 1)
    let month3 = ((12 - (currentDate.getMonth() + 1)) + (currentDate.getMonth() + 1)).toString();

    let date1 = currentDate.getDate().toString();
    if (month1.length < 2) {
      var month2 = '0' + month1;
    }
    else {
      var month2 = month1;
    }
    if (date1.length < 2) {

      var date2 = '0' + date1;
    }
    else {
      var date2 = date1;
    }

    if (month3.length < 2) {
      var month4 = '0' + month3;
    }
    else {
      var month4 = month3;
    }
    var maxDate1 = '' + 31;

    this.minDate = [year1, month2, date2].join('-').toString();
    this.maxDate = [year2, month4, maxDate1].join('-').toString();

    this.myForm = new FormGroup({

      mob_num: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
        Validators.pattern('^[0-9]*$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ])),
      start_date: new FormControl('', Validators.compose([
        Validators.required
      ])),
      return_date: new FormControl('', Validators.compose([
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
      image: new FormControl('', Validators.compose([
        Validators.required


      ])),
      employee_id: new FormControl(this.userEntity.empId)

    },//fromgroup 
      {

        validators: this.start_date.bind(this),

      },


    )//FormGroup end

  }

  ngOnInit() {
    this.data2 = this.data.message1
    fetch('/assets/country_cities.json').then(res=>res.json()).then(json=>{
     
      for (var value in json) {  
        this.map1.set(value,json[value])  
    } 
      
      });
     
  }
  OnachClick(): void {
    
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
  }



  start_date(formGroup: FormGroup) {

    const { value: start_date } = formGroup.get('start_date');
    const { value: return_date } = formGroup.get('return_date');
    let returndate = new Date(return_date);
    var re1 = new Date(returndate.getFullYear(), returndate.getMonth(), returndate.getDate());
    let startDate = new Date(start_date);
    var g1 = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    let year6 = startDate.getFullYear().toString();
    let month6 = (startDate.getMonth() + 1).toString();

    let date6 = startDate.getDate().toString();
    if (month6.length < 2) {
      var month7 = '0' + month6;
    }
    else {
      var month7 = month6;
    }
    if (date6.length < 2) {

      var date7 = '0' + date6;
    }
    else {
      var date7 = date6;
    }


    this.minDa = [year6, month7, date7].join('-').toString();

    let currentDate = new Date();

    var g2 = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    if (re1.getTime() < g1.getTime() || re1.getTime() < g2.getTime()) {
      return { dateless1: true };
    }

    if (g1.getTime() < g2.getTime()) {
      return { dateless: true };
    }
    else if (g1.getTime() > g2.getTime()) {
      return null;
    }
    else {
      return null;
    }

  }

  async createTravelDetail(form, myform) {
    let loading=   await this.loadingCtrl.create({
      message:"Loading...",
      showBackdrop: false,
     spinner:"lines"
    });
    
    this.travelDetailRes = new TravelDetail();

    this.travelDetailRes.employee_id = form.employee_id;
    this.travelDetailRes.start_date = form.start_date;
    this.travelDetailRes.return_date = form.return_date;
    this.travelDetailRes.source_location = form.selectedSrcState;
    this.travelDetailRes.dest_location = form.selectedDstState;
    this.travelDetailRes.src_country=form.src_country;
    this.travelDetailRes.dest_country=form.dest_country;
    this.travelDetailRes.mob_num = form.mob_num;
    this.uploadData1 = new FormData;
    this.uploadData1.append("myfile", this.file, this.file.name);
    this.uploadData1.append("traveldetail", new Blob([JSON.stringify(this.travelDetailRes)], { type: "application/json" }));
     loading.present();
    this.apiService.createTravelDetails(this.travelDetailRes, this.uploadData1).subscribe(async (res) => {
      this.data.createTravelStorage1 = res;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.data.createTravelStorage1.imgPic;
      localStorage.setItem("image1", JSON.stringify(this.retrievedImage));

this.getTravelDetailsByID(form.employee_id,loading);


//this.resetField(myform)


      //***********************8 */
      let toast = await this.toastController.create({
        message: 'Successful created !!',
        duration: 3000,
        position: 'bottom',
        color: "success"

      });

      return await toast.present().then(() => {
        this.router.navigate(['createTravelDetail']);


      })

    },
      async (error) => {
        loading.dismiss();
        this.data2 = error;
        let toast = await this.toastController.create({
          message: '' + this.data2,
          duration: 3000,
          position: 'middle',
          color: "danger"

        });

        return await toast.present().then(() => {
          this.router.navigate(['create']);

        })



      });

  }
 

  onOptionsSelected() {
    this.show = true;
  }
  onOptionsSelected1() {
    this.show1 = true;
  }
  statdateReq() {
    if (this.stdatreq == true) {
      this.stdatreq = false;
    }
    else {
      this.stdatreq = true;

    }

  }

  getTravelDetailsByID(employee_id: any, loading: HTMLIonLoadingElement) {
    console.log("create Travel Details getTravel line no 317");
    this.apiService.travelDetailsByEmpId(employee_id).subscribe((res) => {
      this.travelResponse1 = res;
       console.log("inside travel page after Response" );
      this.data.travelResponse1 = this.travelResponse1;
      
       loading.dismiss();
    },
      (error) => {
        this.data2 = error;
       loading.dismiss();
        this.router.navigate(['travelling']);
    
    
      }
    )
  }
  

  
  

  setFilteredItemscountry1() {
    this.items5 = this.filterItemscnry1(this.searchCntyTerm1);
    this.optionShow5=true;
    this.optionShow6=false;
  }
 
  filterItemscnry1(searchCntyTerm1) {
    return this.countryArry1.countryArry.filter(item => {
    
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
  resetField(form){
    this.show=false;
    
     form.get('start_date').reset();
     form.get('return_date').reset();
    form.get('selectedSrcState').reset();
    form.get('selectedDstState').reset();
    form.get('mob_num').reset();
    form.get('dest_country').reset();
    form.get('src_country').reset();
    form.get('searchCntyTerm1').reset();
    form.get('searchcityTerm1').reset();
    form.get('searchCntyTerm').reset();
    form.get('searchcityTerm').reset();
    //form.get('selectedSrcCntry1').reset();
    //form.get('selectedSrcState1').reset();
    //form.get('selectedDstCntry1').reset();
    //form.get('selectedDstState1').reset();
    
  }
  
}