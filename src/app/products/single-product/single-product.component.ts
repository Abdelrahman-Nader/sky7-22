import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() data: any = {}
  @Output() item = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.item.emit(this.data)
  }
}
