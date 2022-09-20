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
loading: boolean =false
  constructor(private service: MainServService ) { }


ngOnInit(): void {
    this.getProducts();
    this.getCategories();
}
getProducts() {
  this.loading = true;
    this.service.getAllProducts().subscribe ((res: any) => {
        this.products = res
        this.loading =false;
    }, error => {
      this.loading =false;
        alert("error");
    });
}
getCategories() {
  this.loading = true;
    this.service.getAllCategoris().subscribe((res: any) => {
        this.categories = res;
        this.loading =false;
    }, error => {
      this.loading =false;
        alert("error");
    });
}
filterCategorie(event: any) {

    let value = event.target.value;
    (value =="all") ? this.getProducts() : this.getproud(value)
}
getproud(keyword: any) {
  this.loading = true;
    this.service.getproductsCategoriey(keyword).subscribe((res: any) => {
      this.loading = false
        this.products = res;
    });
}

}
