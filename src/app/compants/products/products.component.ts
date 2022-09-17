import { Component, OnInit } from '@angular/core';
import { MainServService } from 'src/app/services/main-serv.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
categories: any[] = [];
  constructor(private service: MainServService ) { }


ngOnInit(): void {
    this.getProducts();
    this.getCategories();
}
getProducts() {
    this.service.getAllProducts().subscribe ((res: any) => {
        this.products = res
    }, error => {
        alert("error");
    });
}
getCategories() {
    this.service.getAllCategoris().subscribe((res: any) => {
        this.categories = res;
        console.log(res);
    }, error => {
        alert("error");
    });
}
filterCategorie(event: any) {
    let value = event.target.value;
    this.getproud(value);
    console.log(value);
}
getproud(keyword: any) {
    this.service.getproductsCategoriey(keyword).subscribe((res: any) => {
        this.products = res;
    });
}

}
