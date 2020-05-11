import { GetAllAssetPage } from './get-all-asset.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
  {
    path: '',
    component: GetAllAssetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetAllAssetPageRoutingModule {}
