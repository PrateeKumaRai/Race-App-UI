import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpGeneratePage } from './otp-generate.page';

const routes: Routes = [
  {
    path: '',
    component: OtpGeneratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpGeneratePageRoutingModule {}
