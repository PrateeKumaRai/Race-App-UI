import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardRoutingModule } from './admindashboard-routing.module';

import { AdminDashboardPage } from './admindashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardRoutingModule    
  ],
  declarations: [AdminDashboardPage]
})
export class AdminDashboardPageModule {}
