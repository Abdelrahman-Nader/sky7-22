import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class StyleDirective implements OnChanges {

  @Input() defColor: string = "#2c3e50";
  @Input() highColor: string = "#1abc9c";


  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border = "3px solid red"
  }
  ngOnChanges(): void {
    this.defColor = "#2c3e50";
  }
  


  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.style.border =`3px solid ${this.defColor}`
  }
  @HostListener('mouseleave') onMouseLeave() {

    this.elementRef.nativeElement.style.border = `2px solid ${this.highColor}`
  }


}
