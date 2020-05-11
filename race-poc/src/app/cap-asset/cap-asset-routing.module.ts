import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapAssetPage } from './cap-asset.page';

const routes: Routes = [
  {
    path: '',
    component: CapAssetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapAssetPageRoutingModule {}
