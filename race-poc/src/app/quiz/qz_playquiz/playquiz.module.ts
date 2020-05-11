import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayquizRoutingModule } from './playquiz-routing.module';

import { PlayquizPage } from './playquiz.page';
import { StartquizPage } from './start_quiz/startquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayquizRoutingModule    
  ],
  declarations: [PlayquizPage]
  //declarations: [PlayquizPage,StartquizPage]
})
export class PlayquizPageModule {}
