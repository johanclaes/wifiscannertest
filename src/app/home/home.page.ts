import { Component } from '@angular/core';
// import {WifiScanner} from 'capacitor-wifi-scanner';
import {WifiScanner} from '../../../wifi-scanner'
import {IScanResultaten3} from '../../models/IScanResultaten3'
import {IOutputResultaten3} from '../../models/IOutputResultaten3'
import {IOutputResult3} from '../../models/IOutputResult3'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // metingenWifi:IScanResultaten3 = {meetpunten : [
  //     {BSSID:'abc' , SSID:'hangar58', capabilities:'ddk', centerFreq0: 2422, centerFreq1: 58, channelWidth:5, frequency: 55, level: -55,  timestamp: 55 },
  //     {BSSID:'abc' , SSID:'telenet1', capabilities:'ddk', centerFreq0: 2412, centerFreq1: 58, channelWidth:5, frequency: 55, level: -69,  timestamp: 55 },
  //     {BSSID:'abc' , SSID:'jolo', capabilities:'ddk', centerFreq0: 5210, centerFreq1: 58, channelWidth:5, frequency: 55, level: -90,  timestamp: 55 }
  //   ]}

  // gekuisteMetingen : IOutputResultaten3 = {meetpunten : [{SSID : 'jolo', channel : 11, level : -45}]};
  gekuisteMetingen : IOutputResultaten3 = {meetpunten : []};

  channel : number = 0;
  propereMeting : IOutputResult3 = {SSID:'', channel:0, level:0}


  constructor() {
      // private wifiscanner1:WifiScannerWeb
     WifiScanner.requestPermissions();
  }

  async getSSIDS() {
    console.log('Starting scan !!!');
    this.gekuisteMetingen.meetpunten = [];

    const x = await WifiScanner.scanNetworks();
    // console.log(x);

    x.scanResults.forEach(   (param1) => {
      // console.log(param1.SSID)

      switch (param1.centerFreq0) {
        case 2412 :
          this.channel = 1;
          break;
        case 2417 :
          this.channel = 2;
          break;
        case 2422 :
          this.channel = 3;
          break;
        case 2427 :
          this.channel = 4;
          break;
        case 2432 :
          this.channel = 5;
          break;
        case 2437 :
          this.channel = 6;
          break;
        case 2442 :
          this.channel = 7;
          break;
        case 2447 :
          this.channel = 8;
          break;
        case 2452 :
          this.channel = 9;
          break;
        case 2457 :
          this.channel = 10;
          break;
        case 2462 :
          this.channel = 11;
          break;
        case 2467 :
          this.channel = 12;
          break;
        case 2472 :
          this.channel = 13;
          break;
        case 2484 :
          this.channel = 14;
          break;

        case 5170 :
          this.channel = 36;
          break;
        case 5190 :
          this.channel = 40;
          break;
        case 5210 :
          this.channel = 44;
          break;
        case 5230 :
          this.channel = 48;
          break;
        case 5250 :
          this.channel = 52;
          break;
        case 5270 :
          this.channel = 56;
          break;
        case 5290 :
          this.channel = 60;
          break;
        case 5310 :
          this.channel = 64;
          break;
        case 5490 :
          this.channel = 100;
          break;
        default:
          this.channel = 55555;
      }

      this.propereMeting = {SSID:param1.SSID,channel:this.channel,level:param1.level}

      this.gekuisteMetingen.meetpunten.push(this.propereMeting)


    } )



  }

}
