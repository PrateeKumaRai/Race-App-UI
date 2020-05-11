import { Component, OnInit } from '@angular/core';
import { Response } from '../response.model';
import { Player } from './player.model';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { QuizapiService } from '../quizapi.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  constructor(private quizApiService: QuizapiService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
  }

  player: any;

  savePlayer(form) {
    if ('' === form.value.nickName || null === form.value.nickName || undefined === form.value.nickName) {
      this.toastService.presentToast('Nick Name is empty !!', 'danger');
    } else {
      this.player = new Player();
      this.player.nickName = form.value.nickName;
      this.player.quizId = Number(localStorage.getItem("quizid"));
      this.quizApiService.savePlayer(this.player).subscribe((stndrdResp: Response) => {
        this.player = stndrdResp.obj;
        if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("CONFLICT")) {
          this.toastService.presentToast('Sorry Nick name already exist..', 'danger');
        } else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("BAD_REQUEST")) {
          console.log('BAD_REQUEST >>', stndrdResp.description);
          this.toastService.presentToast('Nick Name is empty !!', 'danger');
        } else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("INTERNAL_SERVER_ERROR")) {
          console.log('INTERNAL_SERVER_ERROR >>', stndrdResp.description);
          this.toastService.presentToast('Oops Something went wrong !!', 'danger');
        } else if (JSON.stringify(stndrdResp.httpstatus) == JSON.stringify("CREATED")) {
          localStorage.setItem("playerId", JSON.stringify(this.player.playerId));
          localStorage.setItem("playerName", JSON.stringify(this.player.nickName));
          this.toastService.presentToast('Succesfully Saved the Player.. !!', 'success');
          //this.router.navigate(['playquiz']);
          this.router.navigate(['playquiz/startquiz']);
        }
        console.log('Player Nick Name >>>', this.player);
      });
    }
  }

}
