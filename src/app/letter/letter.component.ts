import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.less']
})

export class LetterComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    let envelope = this.elementRef.nativeElement.querySelector('.envelope');

    envelope.addEventListener("animationend", function (event) {
      // If its he first animation to finish, when we display the new letter, we proceed to the next animation
      if (envelope.classList.contains("new")) {
        envelope.ownerDocument.body.classList.add('letter-display');
        envelope.classList.remove("new");
        envelope.classList.add("open");
      }
    });
  }

}
