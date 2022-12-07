import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSavedPhotos();
  }

  openCamera() {
    this.photoService
      .addNewToGallery()
      .then((res) => {
        console.log('Photo taken');
      })
      .catch((error) => {
        throw new Error('Customized error');
      });
  }

  deletePhotos() {
    this.photoService.deletePhotos();
  }
}
