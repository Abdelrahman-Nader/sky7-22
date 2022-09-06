import { Component, OnInit } from '@angular/core';
import { MainServService } from 'src/app/services/main-serv.service';



@Component({
    selector: 'app-products2',
    templateUrl: './products2.component.html',
    styleUrls: ['./products2.component.css']
})
export class Products2Component implements OnInit {

    products: any[] = [];
    categories: any[] = [];
    constructor(private service: MainServService) { }
    ngOnInit(): void {
        this.getProducts();
        this.getCategories();
    }
    getProducts() {
        this.service.getAllProducts().subscribe((res: any) => {
            this.products = res;
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
