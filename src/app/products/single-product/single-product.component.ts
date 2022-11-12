import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() data: any = {}
  @Output() item = new EventEmitter();

  addButton:boolean = false;
  amount:number = 1;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  add(){
    if(this.amount > 0){

      this.item.emit({item:this.data, quantity:this.amount})
    } else {
      this.toastr.error('Please enter quantity')
    }

  }

}
