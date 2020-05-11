import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetResPage } from './asset-res.page';

const routes: Routes = [
  {
    path: '',
    component: AssetResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetResPageRoutingModule {}
