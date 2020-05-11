import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProfilePersonalPage } from './update-profile-personal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateProfilePersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProfilePersonalPageRoutingModule {}
