import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { Router} from '@angular/router';
import { QuizapiService } from '../quizapi.service';


@Component({
  selector: 'app-player',
  templateUrl: './playquiz.page.html',
  styleUrls: ['./playquiz.page.scss'],
})
export class PlayquizPage implements OnInit {

  constructor(private quizApiService: QuizapiService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
  }

}
