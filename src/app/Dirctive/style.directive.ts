import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Style]'
})
export class StyleDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.stayle.border="3px solid red"
  }


@HostListener('mouseover') onMouseOver(){

  this.elementRef.nativeElement.stayle.border="3px solid red "
}
@HostListener('mouseout') onMouseOut(){

  this.elementRef.nativeElement.stayle.border="2px solid black "
}


}
