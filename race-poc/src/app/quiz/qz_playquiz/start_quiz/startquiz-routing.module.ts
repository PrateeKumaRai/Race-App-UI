import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartquizPage } from './startquiz.page';

const routes: Routes = [
  {
    path: '',
    component: StartquizPage 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartquizRoutingModule {}
