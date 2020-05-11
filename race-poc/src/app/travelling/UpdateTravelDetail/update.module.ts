import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTravelDetailPage } from './updateTravelling.page';
import { UpdateTravelpageRoutingModule } from './updateDetails-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTravelpageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateTravelDetailPage]
})
export class UpdateTravelModule {}