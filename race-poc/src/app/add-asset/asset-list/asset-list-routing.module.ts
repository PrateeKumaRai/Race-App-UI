import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AssetListComponent } from './asset-list.component';
//import { AssetDetailResponse } from 'src/app/model/asset-detail-response.model';

const routes: Routes = [
  {
    path: '',
    component: AssetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetListPageRoutingModule {

 

}
