import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpValidatePage } from './otp-validate.page';

const routes: Routes = [
  {
    path: '',
    component: OtpValidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpValidatePageRoutingModule {}
