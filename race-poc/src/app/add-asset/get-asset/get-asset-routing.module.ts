import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAssetPage } from './get-asset.page';




const routes: Routes = [
  {
    path: '',
    component: GetAssetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetAssetPageRoutingModule {}
