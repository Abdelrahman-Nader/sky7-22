import { environment } from './../../environments/environment.prod';
import { Component } from '@angular/core';
import { MainServService } from '../services/main-serv.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {

  constructor(private service: MainServService) { }
  ngOnInit(): void {

  }

  isOpen: boolean= false
  toggelNavBar() {
    this.isOpen = !this.isOpen
  }




};
