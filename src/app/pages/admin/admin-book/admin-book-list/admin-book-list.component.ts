import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookType } from 'src/app/types/Books';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  books: BookType[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList(){
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

}
