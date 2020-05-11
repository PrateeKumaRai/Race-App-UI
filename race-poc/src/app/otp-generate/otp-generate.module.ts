import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpGeneratePageRoutingModule } from './otp-generate-routing.module';

import { OtpGeneratePage } from './otp-generate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpGeneratePageRoutingModule
  ],
  declarations: [OtpGeneratePage]
})
export class OtpGeneratePageModule {}
