import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServService } from 'src/app/services/main-serv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  data: any = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: MainServService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getproductsById();
  }

  getproductsById() {
    this.service.getAllProducts().subscribe((response: any): void => {
      this.data = response.filter((item: any) => item.id === +this.id)[0];
    });
  }

}
