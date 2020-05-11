import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AssetDetailsPage } from './asset-details.page';
import { AssetDetailsPageRoutingModule } from './asset-details-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetDetailsPageRoutingModule
  ],
  declarations: [AssetDetailsPage]
})
export class AssetDetailsPageModule {}
