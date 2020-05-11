import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetEmployeePageRoutingModule } from './get-employee-routing.module';

import { GetEmployeePage } from './get-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetEmployeePageRoutingModule
  ],
  declarations: [GetEmployeePage]
})
export class GetEmployeePageModule {}
