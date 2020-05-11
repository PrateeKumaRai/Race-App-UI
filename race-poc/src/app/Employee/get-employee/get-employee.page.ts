import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { CommonService } from 'src/app/common.service';
import { seat } from 'src/app/model/seat.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.page.html',
  styleUrls: ['./get-employee.page.scss'],
})
export class GetEmployeePage implements OnInit {
  [x: string]: any;
  emp: Employee;
filter:any;
  emplList: Employee[];
  constructor(private empService: EmployeeService,
    private toastController: ToastController,
    private alertCntrl: AlertController,
    private navCtrl: NavController,
    private commonService: CommonService,
    private seat: seat
  ) {
    this.emplList = seat.employee
    console.log(this.emplList)
  }

  ngOnInit(): void {
 
  }
  
  updateSeatAfterBooking(employee: any) {
    console.log('inside save method');
    let mail = localStorage.getItem('mail');
    console.log(mail);
    this.employeeDetails = new Employee();
    this.employeeDetails.cubicalNumber = employee.cubicalNumber;
    this.employeeDetails.emailId = employee.emailId;
    this.employeeDetails.loginMail = mail;
    console.log(this.employeeDetails);
    this.empService.updatedSeatStatusAfterBooking(this.employeeDetails).subscribe(async (employeeDetails: HttpResponse<Employee>) => {
      console.log(employeeDetails.body)
      if (employeeDetails.body == 200) {
        let toast = await this.toastController.create({
          message: '' + this.employeeDetails.cubicalNumber + ' Seat is Booked',
          duration: 3000,
          position: 'bottom',
          color: "success"
        });
        return await toast.present().then(() => {
          this.navCtrl.navigateRoot('home');
        });
      }
      if (employeeDetails.body == 201) {
        let toast = await this.toastController.create({
          message: 'You already have seat',
          duration: 3000,
          position: 'bottom',
          color: "danger"
        });
        return await toast.present().then(() => {
          this.navCtrl.navigateRoot('home');
        });
      }

    });
  }

  onContextChange(filter){
    console.log(filter)

  }

}
