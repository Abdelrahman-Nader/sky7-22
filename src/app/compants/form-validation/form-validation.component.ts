import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor(private form: FormsModule) { }

  ngOnInit(): void {
  }
  orderSubmit(){
    console.log('order is done')
  }
  new(){

  }

}
