import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapAssetPageRoutingModule } from './cap-asset-routing.module';

import { CapAssetPage } from './cap-asset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapAssetPageRoutingModule
  ],
  declarations: [CapAssetPage]
})
export class CapAssetPageModule {}
