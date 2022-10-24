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
  data: any= [];
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service:MainServService) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.loading= true
    this.service.getproductsById(this.id).subscribe(res => {
      this.loading=false;
      this.data= res
    })
  }

}
