import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private subject = new Subject<any>();

  addToCart(game: Game) {
    this.subject.next({ action: "add", game: game });
  }

  removeFromCart(game: Game) {
    this.subject.next({ action: "remove", game: game });
  }

  getCart(): Observable<any> {
    return this.subject.asObservable();
  }

}