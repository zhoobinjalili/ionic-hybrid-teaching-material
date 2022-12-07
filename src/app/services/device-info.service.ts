import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  constructor() {}

  async getId(): Promise<any> {
    return await Device.getId();
  }

  async getInfo(): Promise<any> {
    return await Device.getInfo();
  }

  async getBatteryInfo(): Promise<any> {
    return await Device.getBatteryInfo();
  }

  async getLanguageTag(): Promise<any> {
    return await Device.getLanguageTag();
  }
}
