import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';
import { SharedService } from './../shared.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {
  @Input() game: Game;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { }

  removeFromCart(): void {
    this.sharedService.removeFromCart(this.game);
  }

}
