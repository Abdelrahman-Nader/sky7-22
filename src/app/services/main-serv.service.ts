import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}
