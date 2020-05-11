import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor(private device: Device,public alertController: AlertController) { }

  ngOnInit() {
  }
  
  async deviceInfo():Promise<void>{
    console.log('Device UUID is: ' + this.device.uuid);
   
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'UUID is: ' + this.device.uuid + "&nbsp;&nbsp;" 
        + 'Model is ' +this.device.model  + "&nbsp;&nbsp;" 
        + 'Platform is ' +this.device.platform + "&nbsp;&nbsp;"
         + 'Version is ' +this.device.version 
        + "&nbsp;&nbsp;" +'Manufacturer is ' +this.device.manufacturer,
        buttons: ['OK']
      });
      return await alert.present();
  }
 
}
