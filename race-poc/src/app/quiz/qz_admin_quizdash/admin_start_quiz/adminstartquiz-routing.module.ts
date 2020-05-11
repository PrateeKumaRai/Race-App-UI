import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminstartquizPage } from './adminstartquiz.page';

const routes: Routes = [
  {
    path: '',
    component: AdminstartquizPage 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminStartquizRoutingModule {}
