import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreateTravelDetailPage } from './createTravelling.page';


const routes: Routes = [

  {
    path: '',
    component: CreateTravelDetailPage
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTravelpageRoutingModule { }
