import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminShowResultPage } from './adminshowresult.page';

const routes: Routes = [
  {
    path: '',
    component: AdminShowResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminShowResultRoutingModule {}
