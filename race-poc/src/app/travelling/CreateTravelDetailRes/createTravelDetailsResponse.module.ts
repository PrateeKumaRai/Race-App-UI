import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTravelDetailResPage } from './createTravelDetailRes.page';
import { CreateTrvlDtlsRespageRoutingModule } from './CreatetravelDetailsRes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTrvlDtlsRespageRoutingModule
  ],
  declarations: [CreateTravelDetailResPage]
})
export class CreateTravelDetailsResModule { }