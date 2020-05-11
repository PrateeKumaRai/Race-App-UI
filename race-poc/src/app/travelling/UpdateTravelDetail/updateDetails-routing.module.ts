import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdateTravelDetailPage } from './updateTravelling.page';


const routes: Routes = [

  {
    path: '',
    component: UpdateTravelDetailPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTravelpageRoutingModule { }
