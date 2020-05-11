import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetResPageRoutingModule } from './asset-res-routing.module';

import { AssetResPage } from './asset-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetResPageRoutingModule
  ],
  declarations: [AssetResPage]
})
export class AssetResPageModule {}
