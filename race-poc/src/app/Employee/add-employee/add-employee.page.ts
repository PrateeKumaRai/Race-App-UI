import { EmployeeService } from 'src/app/services/employee.service';
import { ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { OnInit, Component } from '@angular/core';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {

  emp: Employee;
  data1: any;
  data: any;
  constructor(private empService: EmployeeService,
              private toastController: ToastController,
              private activateRoute: ActivatedRoute,
              private navCtrl: NavController) { }

  ngOnInit() {
   // this.emp = new Employee();
    this.data1=JSON.parse(localStorage.getItem("users1"));
    console.log(this.data1)
    this.data= this.data1.emailId;
  }
  save(form) {
    console.log('inside upadte seat method');
    console.log(form.value.cubicalStatus)
    this.emp = new Employee();
    this.emp.emailId=form.value.emailId;
    this.emp.cubicalStatus=form.value.cubicalStatus;
    this.emp.startDate=form.value.startDate;
    this.emp.returnDate=form.value.returnDate;
    console.log( this.emp);

    this.empService.addEmployee(this.emp).subscribe(async (emp: HttpResponse<Employee>) => {
      console.log(emp.body)
      if(emp.body==200){
        let toast = await this.toastController.create({
          message: 'Seat Updated Sucessfully',
          duration: 3000,
          position: 'bottom',
          color: "success"
        });
        return await toast.present().then(() => {
          this.navCtrl.navigateRoot('employee-details');
        });
      }
      if(emp.body==201){
        let toast = await this.toastController.create({
          message: 'You has not allocated any Seat ',
          duration: 3000,
          position: 'bottom',
          color: "danger"
        });
        return await toast.present().then(() => {
          this.navCtrl.navigateRoot('employee-details');
        });
      }
      if(emp.body==202){
        let toast = await this.toastController.create({
          message: 'You dont have permanent seat',
          duration: 3000,
          position: 'bottom',
          color: "danger"
        });
        return await toast.present().then(() => {
          this.navCtrl.navigateRoot('employee');
        });
       }
     
    });
}
}