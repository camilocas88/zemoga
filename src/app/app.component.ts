import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';
import { Card } from './models/card.models';


interface myCards {
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  
}
