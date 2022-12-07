import { Component, OnInit } from '@angular/core';

import { DeviceInfoService } from '../services/device-info.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  deviceId: any;
  deviceInfo: any;
  batteryInfo: any;
  languageTag: any;

  constructor(private deviceInfoService: DeviceInfoService) {}

  ngOnInit(): void {
    Promise.all([
      this.deviceInfoService.getId(),
      this.deviceInfoService.getInfo(),
      this.deviceInfoService.getBatteryInfo(),
      this.deviceInfoService.getLanguageTag(),
    ]).then(([res1, res2, res3, res4]) => {
      this.deviceId = res1;
      this.deviceInfo = res2;
      this.batteryInfo = res3;
      this.languageTag = res4;
    });
  }

  refresh() {
    this.ngOnInit();
  }
}
