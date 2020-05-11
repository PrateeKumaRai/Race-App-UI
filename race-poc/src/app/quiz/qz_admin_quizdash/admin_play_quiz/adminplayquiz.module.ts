import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPlayquizRoutingModule } from './adminplayquiz-routing.module';

import { AdminPlayquizPage } from './adminplayquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPlayquizRoutingModule    
  ],
  declarations: [AdminPlayquizPage]
})
export class AdminPlayquizPageModule {}
