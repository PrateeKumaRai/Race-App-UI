import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdminShowResultRoutingModule } from './adminshowresult-routing.module';
import { AdminShowResultPage } from './adminshowresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminShowResultRoutingModule    
  ],
  declarations: [AdminShowResultPage]
})
export class AdminShowResultPageModule {}
