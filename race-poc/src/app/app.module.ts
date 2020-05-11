import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../app/services/employee.service';
import { EmployeeDetailsPageModule } from '../app/Employee/employee-details/employee-details.module';
import { travellingData } from './travelling/travellingData.module';
import { ApiService } from './api.service';
import { WelcometoappPageModule } from './welcometoapp/welcometoapp.module';
import { CommonService } from './common.service';
import { UserListPageModule } from './user-list/user-list.module';
import { CapAssetPageModule } from './cap-asset/cap-asset.module';
import { capAssetsRes } from './cap-asset/capAssetsDataRes.module';
import { QuestionsPageModule } from './questions/questions.module';

import { UserDetailsPageModule } from './user-details/user-details.module';
import { UserDetailResponse } from './model/user-detail-response.model';
import { UserDetails } from './user-list/user-details.model';
import { otpvalidate } from './model/otpvalidate.model';

import { UpdateTravelModule } from './travelling/UpdateTravelDetail/update.module';
import { UpdateAssertPage } from './update-assert/update-assert.page';													   
import { errorHandle } from './travelling/errorHandle.module';
import { AssetDetails } from './add-asset/asset-list/asset-details.model';
import { AddAssetPageModule } from './add-asset/add-asset.module';
import { seat } from './model/seat.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GetAssetResp } from './add-asset/get-asset/get-asset-resp.model';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Device } from '@ionic-native/device/ngx';
import { GetAllAssetResp } from './add-asset/get-all-asset/get-all-asset-resp.model';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    EmployeeDetailsPageModule,
    WelcometoappPageModule,
    FormsModule,
    ReactiveFormsModule,
    UserListPageModule,
    CapAssetPageModule,
    QuestionsPageModule,
    UserDetailsPageModule,
    UpdateTravelModule
    
  ],
  providers: [
    errorHandle,
    StatusBar,
    EmployeeService,
    SplashScreen,
    travellingData,
    ApiService,
    CommonService,
    capAssetsRes,
    UserDetails,
    Events,
    AssetDetails,
    otpvalidate,
    seat,
    GetAssetResp,
    GetAllAssetResp,

  

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SocialSharing,Device
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
