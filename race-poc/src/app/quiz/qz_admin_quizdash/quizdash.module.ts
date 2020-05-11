import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizdashPageRoutingModule } from './quizdash-routing.module';

import { QuizdashPage } from './quizdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizdashPageRoutingModule
  ],
  declarations: [QuizdashPage]
})
export class QuizdashPageModule {}
