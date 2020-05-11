import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddquestionPageRoutingModule } from './addquestion-routing.module';

import { AddquestionPage } from './addquestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddquestionPageRoutingModule
  ],
  declarations: [AddquestionPage]
})
export class AddquestionPageModule { }
