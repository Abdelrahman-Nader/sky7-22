
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  text: any;
/**
 *
 */
constructor( private router:Router) {


}


 


  sucsses() {

    this.router.navigate(['/order-sucsess']);

  }


}

