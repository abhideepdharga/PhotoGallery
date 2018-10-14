import { ImageService } from './../image/shared/image.service';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  title = 'Recent Photos';
  visibleImages: any[] = [];

  constructor(private imageService: ImageService){
    this.visibleImages = this.imageService.getImages();
  }
}
