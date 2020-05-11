import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddquestionPage } from './addquestion.page';

const routes: Routes = [
  {
    path: '',
    component: AddquestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddquestionPageRoutingModule { }
