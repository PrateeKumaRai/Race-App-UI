import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPlayquizPage } from './adminplayquiz.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPlayquizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPlayquizRoutingModule {}
