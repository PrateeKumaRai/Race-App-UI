import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProfilePersonalPageRoutingModule } from './update-profile-personal-routing.module';

import { UpdateProfilePersonalPage } from './update-profile-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateProfilePersonalPageRoutingModule
  ],
  declarations: [UpdateProfilePersonalPage]
})
export class UpdateProfilePersonalPageModule {}
