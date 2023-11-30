import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { Observable } from 'rxjs';
import { Category } from './model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3000/product/';
  constructor(private http: HttpClient) { }
  addProduct(data: any): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, data);
  }

  fetchCatById(id: any) {
    return this.http.get<Category>('http://localhost:3000/category/' + id)
  }

  fetchProductById(id: any):Observable<Product> {
    return this.http.get<Product>(this.baseUrl + id)
  }
  updateProduct(data: any,id:any): Observable<Product> {
    return this.http.put<Product>(this.baseUrl+id, data);
  }
}
