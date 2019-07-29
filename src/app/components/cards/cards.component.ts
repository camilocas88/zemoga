import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/models/card.models';

@Component({
  selector: 'cards-people',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CardsService]

})
export class CardsComponent implements OnInit {
  public titulo: string
  public cards: Card[]
  

  constructor(
    private _cs: CardsService,
   

  ) {
    this.titulo = "Previous Rulings"
  }

  ngOnInit() {
    this._cs.getCards().subscribe(
      result=> {
        console.log('result', result);
        this.cards = result
      }
    )

    
  }







}
