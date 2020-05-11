import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssetListComponent } from './asset-list.component';
import { AssetListPageRoutingModule } from './asset-list-routing.module';
import { AssetDetailResponse } from 'src/app/model/asset-detail-response.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetListPageRoutingModule
  ],
  declarations: [AssetListComponent]
})
export class AssetListPageModule {

   
}
