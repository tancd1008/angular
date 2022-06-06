import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Khai báo http để có đối tưởng HttpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) {}
  // Kiểu dữ liệu Observable sẽ giúp lắng nghe API trả về kết quả
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products)
  }
  getProduct (id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${id}`);
  }
  deleteProduct (id: string): Observable<number> {
    return this.http.delete<number>(`${environment.products}/${id}`)
  }
  // Dữ liệu gửi đi {name: string}, nhận về {id: string, name: string}
  createProduct(data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`,data)
  }
  updateProduct (id: string, data: ProductCreate): Observable<Product> {
    return this.http.put<Product>(`${environment.products}/${id}`, data);
  }
 
}
