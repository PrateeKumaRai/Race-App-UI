import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from './admin.model';
import { Response } from '../response.model';
import { ToastService } from 'src/app/services/toast.service';
import { QuizapiService } from '../quizapi.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  admin: any;
  adminRes: any;

  //new
  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-5.jpg';


  constructor(private quizApiService: QuizapiService, private router: Router, private route: ActivatedRoute, private toastService: ToastService) { }

  ngOnInit() {
  }


  loginAdmin(form) {
    if ('' === form.value.uname || null === form.value.uname || undefined === form.value.uname) {
      this.toastService.presentToast('Username is empty !!', 'danger');
    } else if ('' === form.value.pswrd || null === form.value.pswrd || undefined === form.value.pswrd) {
      this.toastService.presentToast('Password is empty !!', 'danger');
    } else {
      this.admin = new Admin();
      this.admin.username = form.value.uname;
      this.admin.password = form.value.pswrd;

      this.quizApiService.loginAdmin(this.admin).subscribe((stndrdResp: Response) => {

        if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("BAD_REQUEST")) {
          console.log('BAD_REQUEST >>', stndrdResp.description);
          this.toastService.presentToast('Username/Password is empty !!', 'danger');
        } else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("UNAUTHORIZED")) {
          console.log('UNAUTHORIZED >>', stndrdResp.description);
          this.toastService.presentToast('Username/Password is incorrect !!', 'danger');
        } else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("INTERNAL_SERVER_ERROR")) {
          console.log('INTERNAL_SERVER_ERROR >>', stndrdResp.description);
          this.toastService.presentToast('Oops Something went wrong !!', 'danger');
        }
        else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("OK")) {
          this.toastService.presentToast('Login succesfully !!', 'success');
          this.router.navigate(['quizdash']);
        }

      });
    }
  }


  //new

}




