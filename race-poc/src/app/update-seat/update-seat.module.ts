import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSeatPageRoutingModule } from './update-seat-routing.module';

import { UpdateSeatPage } from './update-seat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSeatPageRoutingModule
  ],
  declarations: [UpdateSeatPage]
})
export class UpdateSeatPageModule {}
