import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainServService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(environment.baseApi + 'products')
  }

  logo(){
    return this.http.get(environment._logoimge)
  }
  getAllCategoris(){
    return this.http.get( environment.baseApi + 'products/categories')
  }
  getproductsCategoriey(keyword: string){
    return this.http.get( environment.baseApi + 'products/category/'+keyword)
  }
  getproductsById(id: any){
    return this.http.get( environment.baseApi + 'products/'+id)
  }
}

