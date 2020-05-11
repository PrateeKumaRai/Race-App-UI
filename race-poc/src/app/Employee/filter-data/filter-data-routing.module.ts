import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterDataPage } from './filter-data.page';

const routes: Routes = [
  {
    path: '',
    component: FilterDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterDataPageRoutingModule {}
