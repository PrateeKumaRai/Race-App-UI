import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { State } from '../state.component';
import { TravelDetail } from '../TravelDetail.module';
import { ApiService } from 'src/app/api.service';
import { travellingData } from '../travellingData.module';
import { retry, catchError } from 'rxjs/operators';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { TravelDetailRes } from '../TravelDetailRes.Module';
import { ToastController, LoadingController } from '@ionic/angular';
import { otpvalidate } from 'src/app/model/otpvalidate.model';
import { UserEntity } from 'src/app/welcometoapp/userEntity.module';
import { Country } from '../country.module';
import { CountryArray } from '../countryArray.component';


@Component({
  selector: 'app-travelling',
  templateUrl: './updateTravelDetail.page.html',
  styleUrls: ['./updateTravel.page.scss'],
  providers: [State,CountryArray]
})

export class UpdateTravelDetailPage implements OnInit {
  travelDetailRes: TravelDetail;
  states2: string[];
  deleteMessage: any;
  data1: any;
  data2: any;
  travelResponse: TravelDetailRes[];
  travelResponse1: TravelDetailRes[];
  traveldetail:any;
  traveldetail1:any;
  orderForm:any;
  retrievedImage: any;
  show: boolean = false; 
  empId:any=310;
  selectedSrcState: any;
  selectedDstState: any;
  dest_country:any;
  src_country:any;
  travelIds: any[];
  travelIds1: any[];
  travelIds2: any[];
  submit1:any;
  myForm: FormGroup;
  userEntity :UserEntity;
  data3: any;
  empid: number;
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
 flag:boolean=false;
 travelId1:any;
 flag1:boolean=true;
 flag2:boolean=false;
 tt:boolean=true;
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
     
    }
  

  constructor(private apiService: ApiService, private router: Router,
    private route: ActivatedRoute, private toastController: ToastController,
    private data: travellingData, private states1: State,
    private optval: otpvalidate,private loadingCtrl:LoadingController,
    private countryArry1:CountryArray,) {
      
      this.travelResponse1= this.data.travelResponse1;
      
      this.userEntity=optval.userEntity;
     
      this.travelResponse=JSON.parse(localStorage.getItem("travelDetail"));
      
      
      //this.data2=JSON.parse(localStorage.getItem("users1"));
     
      this.myForm=new FormGroup({
	   
     
        // password: new FormControl('',[Validators.required,Validators.minLength(8)]),
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

   travelID: new FormControl('', Validators.compose([
    Validators.required
    
    
  ])),
  employee_id: new FormControl( this.userEntity.empId)
   
   
      
     }//fromgroup 
    
   )//FormGroup end
  }//construcor end

  async ngOnInit() {
    fetch('/assets/country_cities.json').then(res=>res.json()).then(json=>{
     
      for (var value in json) {  
        this.map1.set(value,json[value])  
    } 
      
      });
      }
  OnachClick(): void {

  }
  async getEmployeeID(){

       this.travelResponse1= this.data.travelResponse1;
    
    this.travelIds= new Array(this.travelResponse1.length);
    for (let i = 0; i < this.travelResponse1.length; i++) {
      this.travelIds[i] = this.travelResponse1[i].travel_id;
     
    }
    this.travelIds1=this.travelIds;

  }
  ngDoCheck(){
   
    this.travelResponse1= this.data.travelResponse1; 
    this.travelIds2=this.travelIds1
  }
  onOptionsSelected(value:any){
   
    if(value=="Select"){
      this.show= false; 
    }else{
     
    if(this.flag==false){
      
      for (let i = 0; i < this.travelResponse1.length; i++) {
        this.travelResponse1.indexOf(this.travelResponse1[i]);
        if (value==this.travelResponse1[i].travel_id){
      
          this.traveldetail=this.travelResponse1[i];
         
          
           this.selectedSrcState= this.traveldetail.source_location;
            this.selectedDstState= this.traveldetail.dest_location;
            this.dest_country=this.traveldetail.dest_country;
            this.src_country=this.traveldetail.src_country;
            break;
           
        }
      }
    }else{
      
       if(value!=this.travelId1){
       
        for (let i = 0; i < this.travelResponse1.length; i++) {
        
          if (value==this.travelResponse1[i].travel_id){
            this.traveldetail=this.travelResponse1[i];
           
            
             this.selectedSrcState= this.traveldetail.source_location;
              this.selectedDstState= this.traveldetail.dest_location;
              this.dest_country=this.traveldetail.dest_country;
              this.src_country=this.traveldetail.src_country;
              
             break;
          }
        
        }
       }
       else{
        this.traveldetail=this.traveldetail1;
        this.src_country=this.traveldetail1.src_country;
        this.selectedSrcState=this.traveldetail1.source_location;
        this.dest_country=this.traveldetail1.dest_country;
        this.selectedDstState=this.traveldetail1.dest_location;
     

       }
    }
    this.show= true; 
    }
  }


  updateTravelDetail(form,myform) {
   
    this.travelDetailRes = new TravelDetail();
    this.travelDetailRes.travel_id = form.travelID;
    this.travelDetailRes.employee_id = form.employee_id;
    this.travelDetailRes.start_date = form.start_date;
    this.travelDetailRes.return_date = form.return_date;
    this.travelDetailRes.source_location = form.selectedSrcState;
    this.travelDetailRes.dest_location = form.selectedDstState;
    this.travelDetailRes.src_country=form.src_country;
    this.travelDetailRes.dest_country=form.dest_country;
    this.travelDetailRes.mob_num=form.mob_num;
    
   
    this.apiService.updateTravelDetail(this.travelDetailRes).subscribe(async (res) => {
    
      this.data.createTravelStorage1 =res;
      
    this.retrievedImage = 'data:image/jpeg;base64,' +this.data.createTravelStorage1.imgPic;
    localStorage.setItem("image1", JSON.stringify(this.retrievedImage));
///******************* */
    this.traveldetail1= res;
    this.flag=true;
    this.travelId1=this.travelDetailRes.travel_id;
    this.flag1=false;
   this.flag2=true;
  this. tt=false;
  for (let i = 0; i < this.data.travelResponse1.length; i++) {
    this.travelResponse1.indexOf(this.travelResponse1[i]);
    if ( this.travelId1==this.travelResponse1[i].travel_id){
      this.travelResponse1[i].travel_id=res.travel_id;
      this.travelResponse1[i].employee_id=res.employee_id;
      this.travelResponse1[i].start_date=res.start_date;
      this.travelResponse1[i].return_date=res.return_date;
      this.travelResponse1[i]. src_country=res.src_country;
      this.travelResponse1[i]. dest_country=res.dest_country;
      this.travelResponse1[i]. source_location=res.source_location;
      this.travelResponse1[i].dest_location=res.dest_location;
      this.travelResponse1[i].mob_num=res.mob_num;
      break;
    }
  
  }

    
//************************ */
    let toast = await this.toastController.create({
      message: 'Successfully Updated!!',
      duration: 3000,
      position:'middle',
     color:"success"
  
    });
  
    return await toast.present().then(() => {
      this.show= false; 
      this.router.navigate(['createTravelDetail']);
  
    })
  
    this.resetField(form);
   

    },
      async (error) => {
        this.data1 = error;
      
        let toast = await this.toastController.create({
          message: '' + this.data1,
          duration: 3000,
          position:'middle',
         color:"danger"
      
        });
      
        return await toast.present().then(() => {
          this.show= false; 
          this.router.navigate(['updateTravelDetail']);
      
        })
        this.resetField(form);


      }
    )

  }


  deleteTravelDetail(form){
    this.travelDetailRes = new TravelDetail();
    this.travelDetailRes.travel_id = form.value.travelID;
    this.travelDetailRes.employee_id = form.value.employee_id;
    
    this.apiService.deleteTravelDetail( this.travelDetailRes.travel_id,this.travelDetailRes.employee_id).subscribe(async (res) => {
     
      this.deleteMessage =res.message;
     
      this.travelIds= new Array(this.travelResponse1.length);
    for (let i = 0; i < this.travelResponse1.length; i++) {
      if(this.travelDetailRes.travel_id==this.travelResponse1[i].travel_id){

        this.travelResponse1.splice(this.travelResponse1.indexOf(this.travelResponse1[i]), 1);
      }
     
    }
  this.resetField(form);
     
     
      let toast = await this.toastController.create({
        message: '' +  this.deleteMessage,
        duration: 3000,
        position:'middle',
       color:"success"
    
      });
    
      return await toast.present().then(() => {
        this.show= false; 
        this.router.navigate(['updateTravelDetail']);
         })

    },
      async (error) => {
        this.data1 = error;
  
     let toast = await this.toastController.create({
      message: '' + this.data1,
      duration: 3000,
      position:'middle',
     color:"danger"
  
    });
  
    return await toast.present().then(() => {
      this.router.navigate(['updateTravelDetail']);
  
    })

      }
    )

  }//end deleteTravel func

  resetField(form){
    this.show=false;
    form.get('travelID').reset();
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
    this.allCitiesByCountry=this.map1.get(event.target.value)
    
  }

  loadCountry(myForm) {
    
    const { value: start_date1 } =  myForm.get('src_country');
    this.allCitiesByCountry=this.map1.get(start_date1);
    this.items4 = this.countryArry1.countryArry
    return this.items;
  }
  loadCites() {
    this.city4 = this.allCitiesByCountry
    return this.cities;
  }

}