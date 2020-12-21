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
    // Listens to the new items added or removed
    this.cartEventSubscription = this.sharedService.getCart().subscribe((data) => {
      this.handleCartChanges(data);
    })
  }

  ngAfterViewInit(): void {
    this.cartIcon = this.elementRef.nativeElement.querySelector('.cart-icon');
    // Listener to scale back the cart after increased it size on game added
    this.cartIcon.addEventListener("transitionend", function (event) {
      // If its our expected transform property
      if (event.propertyName == "transform") {
        this.classList.remove("cart-icon-scaled");
      }
    });
  }

  handleCartChanges(data): void {
    if (data.action == "add") {
      // Changes the inCart property to the game so that its updated also in the small spot template
      data.game.inCart = true;

      this.games.push(data.game);
      this.totalPrice = parseFloat((this.totalPrice + data.game.price).toFixed(2));

      // Scales and makes the cart icon bigger and then it will return back to normal
      this.cartIcon.classList.add("cart-icon-scaled");

    } else if (data.action == "remove") {
      data.game.inCart = false;

      // Removes the game from our list
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
    // Either we are on the button or the dropdown we set the flag to true
    this.isOnButton = entryPoint == "button" ? true : this.isOnButton;
    this.isOnDropdown = entryPoint == "dropdown" ? true : this.isOnDropdown;

    // If there is a timeout to close the dropdown at this point, we cancel it
    if (this.closeDropdownTimeout) {
      clearTimeout(this.closeDropdownTimeout);
    }
  }

  handleCartLeave(exitPoint: string): void {
    // Either we are on the button or the dropdown we set the flag to false
    this.isOnButton = exitPoint == "button" ? false : this.isOnButton;
    this.isOnDropdown = exitPoint == "dropdown" ? false : this.isOnDropdown;

    // We set a timeout to close the dropdown that will check if we are not over the button nor the dropdown
    this.closeDropdownTimeout = setTimeout(() => {
      if (!this.isOnButton && !this.isOnDropdown && this.elementRef.nativeElement.classList.contains("cart-active")) {
        this.closeCart();
      }
    }, 400);
    
  }

  clearCart(): void {
    // Loops our games list and removes them
    for (let i = this.games.length; i > 0; i--) {
      this.sharedService.removeFromCart(this.games[0]);
    }
  }

}
