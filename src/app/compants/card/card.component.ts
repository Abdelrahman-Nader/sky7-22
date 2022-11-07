import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice: number = 0
  constructor(private toaster: ToastrService) { }

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
  getCartTotalPrice() {
    this.totalPrice = 0;
    for (let i in this.cartProducts) {
      this.totalPrice += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }
  minsAmount(index: number) {
    this.cartProducts[index].quantity--
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  plusAmount(index: number) {

    this.cartProducts[index].quantity++
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  clearCard() {
    if (this.cartProducts = []) {
      alert('Are you sure')
      // this.cartProducts = []
      this.getCartTotalPrice()
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    } else {
      this.cartProducts = []
      this.getCartTotalPrice()
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }



  }

  detect() {
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  deleteProducts(index: number) {
    this.cartProducts.splice(index, 1)
    this.getCartTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    this.toaster.success('item dellet')
  }

}

