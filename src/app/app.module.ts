import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmallSpotsListComponent } from './small-spots-list/small-spots-list.component';
import { SmallSpotComponent } from './small-spot/small-spot.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { LetterComponent } from './letter/letter.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallSpotsListComponent,
    SmallSpotComponent,
    CartComponent,
    CartItemComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
