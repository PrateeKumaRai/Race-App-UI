import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcometoappPageRoutingModule } from './welcometoapp-routing.module';

import { WelcometoappPage } from './welcometoapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcometoappPageRoutingModule
  ],
  declarations: [WelcometoappPage]
})
export class WelcometoappPageModule {}
