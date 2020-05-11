import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetAllAssetPageRoutingModule } from './get-all-asset-routing.module';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GetAllAssetPage } from './get-all-asset.page';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetAllAssetPageRoutingModule
  ],
  declarations: [ GetAllAssetPage]
})
export class GetAllAssetPageModule {}
