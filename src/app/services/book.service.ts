import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookType } from '../types/Books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}
  getBooks(): Observable<BookType[]>{
    return this.http.get<BookType[]>(environment.books)
  }
  getBook(id: string): Observable<BookType>{
    return this.http.get<BookType>(`${environment.books}/${id}`)
  }
}
