import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTravelDetailResPage } from './createTravelDetailRes.page';

const routes: Routes = [

  {
    path: '',
    component: CreateTravelDetailResPage
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTrvlDtlsRespageRoutingModule { }
