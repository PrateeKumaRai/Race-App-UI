import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpValidatePageRoutingModule } from './otp-validate-routing.module';

import { OtpValidatePage } from './otp-validate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpValidatePageRoutingModule
  ],
  declarations: [OtpValidatePage]
})
export class OtpValidatePageModule {}
