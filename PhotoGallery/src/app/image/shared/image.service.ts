import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
    { "id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/campus_2.jpg"}
]