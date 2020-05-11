import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CreateTravelDetailPage } from './createTravelling.page';
import { CreateTravelpageRoutingModule } from './createDetails-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTravelpageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [CreateTravelDetailPage]
})
export class CreateTravelModule { }