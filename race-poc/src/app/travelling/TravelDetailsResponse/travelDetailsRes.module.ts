import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelDetailsRespageRoutingModule } from './TravelDetailsRes-routing.module';
import { TravelDetailResPage } from './travelDetailRes.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelDetailsRespageRoutingModule
  ],
  declarations: [TravelDetailResPage]
})
export class TravelDetailsResModule { }