import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<object>{
   return this.http.get('http://localhost:9999/products/report');
  }


  addProduct(obj): Observable<object>{

    return this.http.post('http://localhost:9999/products/add', obj);
 }

}
