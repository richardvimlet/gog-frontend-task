import { Component, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Game } from '../game';
import { SharedService } from './../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class CartComponent implements AfterViewInit {
  cartEventSubscription: Subscription;
  cartIcon: HTMLBaseElement;
  games: Game[];
  totalPrice: number;
  isOnButton: boolean;
  isOnDropdown: boolean;
  closeDropdownTimeout;

  constructor(private sharedService: SharedService, private elementRef: ElementRef) {
    this.games = [];
    this.totalPrice = 0;
    this.cartEventSubscription = this.sharedService.getCart().subscribe((data) => {
      this.handleCartChanges(data);
    })
  }

  ngAfterViewInit(): void {
    this.cartIcon = this.elementRef.nativeElement.querySelector('.cart-icon');
    this.cartIcon.addEventListener("transitionend", function (event) {
      if (event.propertyName == "transform") {
        this.classList.remove("cart-icon-scaled");
      }
    });
  }

  handleCartChanges(data): void {
    if (data.action == "add") {
      data.game.inCart = true;

      this.games.push(data.game);
      this.totalPrice = parseFloat((this.totalPrice + data.game.price).toFixed(2));

      this.cartIcon.classList.add("cart-icon-scaled");

    } else if (data.action == "remove") {
      data.game.inCart = false;

      this.games.splice(this.games.indexOf(data.game), 1);
      this.totalPrice = parseFloat((this.totalPrice - data.game.price).toFixed(2));
    }
  }

  openCart(): void {
    this.elementRef.nativeElement.classList.add("cart-active");
  }

  closeCart(): void {
    this.elementRef.nativeElement.classList.remove("cart-active");
  }

  handleCartEnter(entryPoint: string): void {
    this.isOnButton = entryPoint == "button" ? true : this.isOnButton;
    this.isOnDropdown = entryPoint == "dropdown" ? true : this.isOnDropdown;

    if (this.closeDropdownTimeout) {
      clearTimeout(this.closeDropdownTimeout);
    }
  }

  handleCartLeave(exitPoint: string): void {
    this.isOnButton = exitPoint == "button" ? false : this.isOnButton;
    this.isOnDropdown = exitPoint == "dropdown" ? false : this.isOnDropdown;

    this.closeDropdownTimeout = setTimeout(() => {
      if (!this.isOnButton && !this.isOnDropdown && this.elementRef.nativeElement.classList.contains("cart-active")) {
        this.closeCart();
      }
    }, 400);
    
  }

  clearCart(): void {
    for (let i = this.games.length; i > 0; i--) {
      this.sharedService.removeFromCart(this.games[0]);
    }
  }

}
