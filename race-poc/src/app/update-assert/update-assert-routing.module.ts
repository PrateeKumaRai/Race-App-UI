import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAssertPage } from './update-assert.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAssertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAssertPageRoutingModule {}
