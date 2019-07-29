import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  allImages = []
  ImagesDetails = []

  constructor() { 
    const ImagesDetails = [
      {"id": 1, "name": "kanye", "url": "../../assets/img/kanye.png"},
      {"id": 2, "name": "mark", "url": "../../assets/img/mark.png"},
      {"id": 3, "name": "cristina", "url": "../../assets/img/cristina.png"},
      {"id": 4, "name": "malala", "url": "../../assets/img/malala.png"},
    ]
  }
  
  // getImages() {
  //   return this.allImages = this.ImagesDetails.slice(0)
  // }
  // getImage(id: number){
  //   // return this.ImagesDetails.slice(0).find(Images => Images.id == id)
  //   return console.log('imagenes', this.ImagesDetails);
    
  // }

  
}
