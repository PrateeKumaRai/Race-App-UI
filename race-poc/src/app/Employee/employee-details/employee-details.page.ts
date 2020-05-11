import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { CommonService } from 'src/app/common.service';
import { seat } from 'src/app/model/seat.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {
  [x: string]: any;

  emplList: Employee[];
  emp: Employee;
  data:any;
  data1:any;
  constructor(private empService: EmployeeService,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private seat: seat
  ) {


  }

  ngOnInit(): void {

  }

  loadAll() {
    this.empService.getAllEmployee().subscribe(async (emplList: HttpResponse<Employee[]>) => {
      this.emplList = [];
      this.emplList = emplList.body;
      this.seat.employee = this.emplList;
      console.log(this.seat.employee)
      this.router.navigate([('/get-employee')])

    });
  }

  unbookSeat(){
    console.log("Hiiiiiiiiiiiiiiiiii")
    let mail = localStorage.getItem('mail');
    this.emp = new Employee();
    this.emp.emailId=mail;
    console.log( this.emp);
    this.empService.getBookedSeat(this.emp).subscribe(async (emp: HttpResponse<Employee>) => {
      console.log("***********",emp.body)
     
      this.data1=emp.body;
      if( this.data1.seatMailId != null){
        this.data=emp.body;
      
      }else{
          let toast = await this.toastController.create({
            message: 'You Have not booked any Seat',
            duration: 3000,
            position: 'bottom',
            color: "danger"
          });
          return await toast.present();
      }
      
    });
  }

  unbookSeatAfterBooking(data):void{
    console.log("***********",data)
    let mail = localStorage.getItem('mail');
    console.log(mail);
    this.emp = new Employee();
    this.emp.emailId=data.seatMailId;
    this.emp.loginMail = mail;
    this.empService.unbookSeat(this.emp).subscribe(async (emp: HttpResponse<Employee>) => {
      console.log("***********",emp.body)
      this.data=emp.body;
      console.log("++++++++++++", this.data)
      let toast = await this.toastController.create({
        message: 'Seat unbook Sucessfully',
        duration: 3000,
        position: 'bottom',
        color: "success"
      });
      return await toast.present().then(() => {
        this.navCtrl.navigateRoot('home');
      });
    });
  }
}