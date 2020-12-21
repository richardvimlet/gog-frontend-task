import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'small-spots-list',
  templateUrl: './small-spots-list.component.html',
  styleUrls: ['./small-spots-list.component.less']
})
export class SmallSpotsListComponent implements OnInit {
  games: Game[];

  constructor() {}

  ngOnInit() {
    
    // Manually added games
    this.games = [
      {
        "title": "ODDWORLD: STRANGER'S WRATH",
        "cover": "assets/img/oddworld_cover.jpg",
        "price": 9.99,
        "discount": 50
      },
      {
        "title": "CHAOS ON DEPONIA",
        "cover": "assets/img/deponia_2_cover.jpg",
        "owned": true,
        "price": 9.99
      },
      {
        "title": "THE SETTLERS 2: GOLD EDITION",
        "cover": "assets/img/settlers_2_cover.jpg",
        "price": 5.99
      },
      {
        "title": "NEVERWINTER NIGHTS",
        "cover": "assets/img/neverwinter_nights_cover.jpg",
        "price": 4.99,
        "discount": 50
      },
      {
        "title": "ASSASIN'S CREED: DIRECTOR'S CUT",
        "cover": "assets/img/assasins_creed_cover.jpg",
        "price": 9.99
      }
    ];
  }

}
