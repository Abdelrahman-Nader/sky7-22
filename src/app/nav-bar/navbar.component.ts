import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {

  isOpen: boolean= false
  toggelNavBar() {
    this.isOpen = !this.isOpen
  }

};
