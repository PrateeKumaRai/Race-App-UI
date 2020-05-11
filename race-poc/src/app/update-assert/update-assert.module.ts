import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAssertPageRoutingModule } from './update-assert-routing.module';

import { UpdateAssertPage } from './update-assert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAssertPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateAssertPage]
})
export class UpdateAssertPageModule {}
