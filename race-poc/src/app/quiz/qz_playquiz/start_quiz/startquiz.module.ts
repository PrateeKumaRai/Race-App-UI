import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StartquizPage } from './startquiz.page';
import { StartquizRoutingModule } from './startquiz-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartquizRoutingModule    
  ],
  declarations: [StartquizPage]
})
export class StartquizPageModule {}
