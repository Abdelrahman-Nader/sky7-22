import { MainServService } from './../../services/main-serv.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    constructor(private service: MainServService) { }

    ngOnInit(): void {
    }
    getProducts() {
        this.service.getAllProducts().subscribe((res: any) => {
            console.log(res);
        });
    }
}
