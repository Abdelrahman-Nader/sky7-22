import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice: number = 0
  constructor() { }

  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts() {

    if ("cart" in localStorage) {
      console.log(localStorage)
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);

    }
    this.getCartTotalPrice();
  }
  getCartTotalPrice(){
this.totalPrice = 0;
for(let i in this.cartProducts){
  this.totalPrice += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
}
  }
}

