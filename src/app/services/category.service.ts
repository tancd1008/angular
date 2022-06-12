import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryType } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  getCategorys(): Observable<CategoryType[]>{
    return this.http.get<CategoryType[]>(environment.categorys)
  }
  getCategoryBook(id:string):Observable<any>{
    return this.http.get<any>(`${environment.categorys}/${id}`)
  }
}
