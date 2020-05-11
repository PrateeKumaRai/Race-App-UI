import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayquizPage } from './playquiz.page';
import { StartquizPage } from './start_quiz/startquiz.page';

const routes: Routes = [
  {
    path: '',
    component: PlayquizPage
    // children: [
    //   {
    //     path: '',
    //    // canActivateChild: [AuthGuard],
    //     children: [
    //       { path: 'startquiz', component: StartquizPage }
    //     ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayquizRoutingModule {}
