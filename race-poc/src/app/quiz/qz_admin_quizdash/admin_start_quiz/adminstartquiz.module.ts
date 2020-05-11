import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdminstartquizPage } from './adminstartquiz.page';
import { AdminStartquizRoutingModule } from './adminstartquiz-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminStartquizRoutingModule    
  ],
  declarations: [AdminstartquizPage]
})
export class AdminStartquizPageModule {}
