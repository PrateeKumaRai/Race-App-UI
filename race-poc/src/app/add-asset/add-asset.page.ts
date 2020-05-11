import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service"
import { NgModule }      from '@angular/core';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular'; 
//import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
//import { Validators,FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormGroup,FormControl, FormArray, FormBuilder,
  Validators,ReactiveFormsModule  } from '@angular/forms';





@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.page.html',
  styleUrls: ['./add-asset.page.scss'],
})
export class AddAssetPage implements OnInit {


  data1: any;
  data: any;
  myForm: FormGroup;
  account: {assetModel: string, assetNumber: string, ciDesccription: string,
    assetOwner: string, assetType: string,empId:any
  
  } = {
    assetModel: '', 
    assetNumber: '',
    ciDesccription: '',
    assetOwner: '',
    assetType:'',
    empId:''
  };
  validation_messages = {
    
    'assetNumber': [
      { type: 'required', message: 'asset number is required.' } 
    ], 
    'assetOwner': [
      { type: 'required', message: 'asset owner is required.' },
    ], 
    'assetModel': [
      { type: 'required', message: 'asset model is required.' },
    ],  
    'ciDesccription': [
      { type: 'required', message: 'ciDesccription is required.' },
    ],
    
   }
  formBuilder: any;

  constructor(private commonService:CommonService,private router: Router,formBuilder: FormBuilder,
    private route: ActivatedRoute) { 

      this.myForm=new FormGroup({
	   
        assetNumber: new FormControl('', Validators.compose([
         Validators.required
      ])),
      assetOwner: new FormControl('', Validators.compose([
       Validators.required
     ])),
     assetModel: new FormControl('', Validators.compose([
      Validators.required
    ])),

     ciDesccription: new FormControl('', Validators.compose([
       Validators.required
     ])),
        
       },//fromgroup 
     
     )//FormGroup end
  
  
  

    }
    get f() {
      return this.myForm.controls;
     }
    MYASSET:any;
    ngOnInit() {


      this.data1=JSON.parse(localStorage.getItem("users1"));
    this.data= this.data1.empId;
    console.log("=====",this.data);
      //this.assetId['id']
      //this.getAssetById(this.assetId['id']);
    
  }

  addAsset(myForm){
    //myForm.value.assetNumber
    //console.log("assent number",myForm.value.assetNumber)
    let assetData=JSON.stringify({
      "assetModel":this.account.assetModel,
      "assetNumber":this.account.assetNumber,
      "assetTypeId":this.account.assetType,
      "ciDesc":this.account.ciDesccription,
      "assetOwner":this.account.assetOwner,
      "empId":this.data1.empId
       //"empId":125445 //this.account.empId
      });
    this.commonService.addAsset(assetData).subscribe((resp) => {
      // localStorage.setItem("token",resp['token']);
      //console.log('resp=',resp)
     // localStorage.setItem("message","Record Added Successfully");

     

    //  <ion-label position="fixed"><b style="color: blue;font-size:100%">Source : </b></ion-label>
    
     localStorage.setItem("message","Record Added Successfully");
       this.router.navigate(['/capasset']);
        


      
      
      // this.navCtrl.push('ContentPage');
    }, (err) => {
      
      // toast.present();
    });
  }



}






