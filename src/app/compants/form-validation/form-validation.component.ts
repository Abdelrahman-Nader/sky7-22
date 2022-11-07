
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  text: any;


  sucsses() {

    alert('Congratulations, you have successfully completed your purchase')

  }


}

