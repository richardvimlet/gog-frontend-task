import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';
import { SharedService } from './../shared.service';

@Component({
  selector: 'small-spot',
  templateUrl: './small-spot.component.html',
  styleUrls: ['./small-spot.component.less']
})
export class SmallSpotComponent implements OnInit {
  @Input() game: Game;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { }

  addToCart(): void {
    if (!this.game.inCart) {
      this.sharedService.addToCart(this.game);
    }
  }

}
