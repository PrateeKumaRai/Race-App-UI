import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GetAssetPageRoutingModule } from './get-asset-routing.module';
import { GetAssetPage } from './get-asset.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetAssetPageRoutingModule
  ],
  declarations: [GetAssetPage]
})
export class GetAssetPageModule {}
