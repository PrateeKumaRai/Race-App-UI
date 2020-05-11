import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreatequizPageRoutingModule } from './createquiz-routing.module';
import { CreatequizPage } from './createquiz.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatequizPageRoutingModule
  ],
  declarations: [CreatequizPage]
})
export class CreatequizPageModule { }
