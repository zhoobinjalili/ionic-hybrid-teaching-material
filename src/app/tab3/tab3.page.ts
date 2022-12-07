import { Component, OnInit } from '@angular/core';

import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  networkStatus: any;

  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.networkService
      .getNetworkStatus()
      .then((res) => {
        this.networkStatus = res;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  refresh() {
    this.ngOnInit();
  }
}
