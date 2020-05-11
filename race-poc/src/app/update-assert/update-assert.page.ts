import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service"
import { Router, ActivatedRoute} from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-assert',
  templateUrl: './update-assert.page.html',
  styleUrls: ['./update-assert.page.scss'],
})
export class UpdateAssertPage implements OnInit {

 data1: any;
  data: any;
  myForm: FormGroup;
  account: {assetModel: string, assetId: string, assetNumber: string, ciDesccription: string,
    assetOwner: string, status: string, assetType: string,empId:any
  
  } = {
    assetModel: '', 
    assetId:'',
    assetNumber: '',
    ciDesccription: '',
    assetOwner: '',
    assetType:'',
    status:'',
    empId:''
  };

  assetId=this.route.snapshot.params;
  message: any;
  errorMessageHandlerService: any;

   validation_messages = {
    
    'assetNumber': [
      { type: 'required', message: 'asset number is required.' } 
    ],  
    'assetOwner': [
      { type: 'required', message: 'asset owner is required.' },
    ],  
    'ciDesccription': [
      { type: 'required', message: 'ciDesccription is required.' },
    ],
    
   }


  constructor(private commonService:CommonService,private router: Router,private route: ActivatedRoute) {
    

    this.myForm=new FormGroup({
	   
      assetNumber: new FormControl('', Validators.compose([
       Validators.required
    ])),
    assetOwner: new FormControl('', Validators.compose([
     Validators.required
   ])),
   ciDesccription: new FormControl('', Validators.compose([
     Validators.required
   ])),
      
     },//fromgroup 
   
   )//FormGroup end



  }
  MYASSET:any;
  ngOnInit() {

    this.data1=JSON.parse(localStorage.getItem("users1"));
    this.data= this.data1.empId;
    //this.assetId['id']
    //this.getAssetById(this.assetId['id']);
  }

  updateasset(myForm){
    myForm.value.assetNumber
    console.log("assent number",myForm.value.assetNumber)
    let assetData=JSON.stringify({
      "assetModel":this.account.assetModel,
      "assetNumber":this.account.assetNumber,
      "assetTypeId":this.account.assetType,
      "ciDesc":this.account.ciDesccription,
      "assetOwner":this.account.assetOwner,
      "status":this.account.status,
      "empId":this.data1.empId
       //"empId":125445 //this.account.empId
      });

      console.log("asset details: ", assetData);
      this.commonService.updateAsset( this.account.assetId,assetData).subscribe(response => {
        
      },errResponse => {
       
      }) 


    this.commonService.addAsset(assetData).subscribe((resp) => {
      
    
     localStorage.setItem("message","Record Updated Successfully");
       this.router.navigate(['/capasset']);
        


      
      
      // this.navCtrl.push('ContentPage');
    }, (err) => {
      
      // toast.present();
    });
  }




    
     }     
