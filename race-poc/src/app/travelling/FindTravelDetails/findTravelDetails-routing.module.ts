import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { FindTravelDetailPage } from './findTravelDetails.page';

const routes: Routes = [


  {
    path: '',
    component: FindTravelDetailPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindTravelpageRoutingModule { }
