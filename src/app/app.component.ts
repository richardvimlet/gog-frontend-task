import { Component, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LetterComponent } from './letter/letter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  letterFactory = this.componentFactoryResolver.resolveComponentFactory(LetterComponent);

  constructor(private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  revealSecretButton(): void {
    this.elementRef.nativeElement.querySelector(".game-spot").classList.add("game-spot-hidden");
  }

  displayLetter(): void {
    this.elementRef.nativeElement.classList.add("hide-content");
    this.viewContainerRef.createComponent(this.letterFactory);
  }

}
