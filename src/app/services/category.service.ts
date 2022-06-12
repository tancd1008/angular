import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryType, CategoryTypeCreate } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  getCategorys(): Observable<CategoryType[]>{
    return this.http.get<CategoryType[]>(environment.categories)
  }
  getCategory(id: string): Observable<any>{
    return this.http.get<any>(`${environment.categories}/${id}`)
  }
  getCategoryBook(id:string):Observable<any>{
    return this.http.get<any>(`${environment.categories}/${id}`)
  }
  updateCategory (id: string, data: CategoryTypeCreate): Observable<CategoryType> {
    return this.http.patch<CategoryType>(`${environment.categories}/${id}`, data);
  }
  deleteCategory (id: string): Observable<number> {
    return this.http.delete<number>(`${environment.categories}/${id}`)
  }
  createBook(data: CategoryTypeCreate): Observable<CategoryType> {
    return this.http.post<CategoryType>(`${environment.categories}`,data)
  }
}
