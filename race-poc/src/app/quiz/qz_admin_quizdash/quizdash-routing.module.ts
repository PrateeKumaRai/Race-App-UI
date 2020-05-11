import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizdashPage } from './quizdash.page';

const routes: Routes = [
  {
    path: '',
    component: QuizdashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizdashPageRoutingModule {}
