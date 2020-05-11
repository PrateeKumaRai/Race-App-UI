import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterDataPageRoutingModule } from './filter-data-routing.module';

import { FilterDataPage } from './filter-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterDataPageRoutingModule
  ],
  declarations: [FilterDataPage]
})
export class FilterDataPageModule {}
