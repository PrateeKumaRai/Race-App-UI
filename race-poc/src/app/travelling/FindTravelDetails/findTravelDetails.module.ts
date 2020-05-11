import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindTravelpageRoutingModule } from './findTravelDetails-routing.module';
import { FindTravelDetailPage } from './findTravelDetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindTravelpageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FindTravelDetailPage]
})
export class FindTravelModule { }