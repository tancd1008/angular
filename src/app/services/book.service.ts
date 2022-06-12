import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookType, BookTypeCreate } from '../types/Books';

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
  deleteBook (id: string): Observable<number> {
    return this.http.delete<number>(`${environment.books}/${id}`)
  }
  // Dữ liệu gửi đi {name: string}, nhận về {id: string, name: string}
  createBook(data: BookTypeCreate): Observable<BookType> {
    return this.http.post<BookType>(`${environment.books}`,data)
  }
  updateBook (id: string, data: BookTypeCreate): Observable<BookType> {
    return this.http.patch<BookType>(`${environment.books}/${id}`, data);
  }
}
