import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class StyleDirective {

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border = "3px solid red"
  }


  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.style.border = "3px solid red"
  }
  @HostListener('mouseleave') onMouseLeave() {

    this.elementRef.nativeElement.style.border = "2px solid black"
  }


}
