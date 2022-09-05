import { MainServService } from './../../services/main-serv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:any[]= [];

  constructor(private service:MainServService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.product = res
    })
  }
}
