import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private cartSubject = new Subject<any>();

  addToCart(game: Game) {
    this.cartSubject.next({ action: "add", game: game });
  }

  removeFromCart(game: Game) {
    this.cartSubject.next({ action: "remove", game: game });
  }

  getCartSubject(): Observable<any> {
    return this.cartSubject.asObservable();
  }

}