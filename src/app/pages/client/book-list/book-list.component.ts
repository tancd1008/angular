import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookType } from 'src/app/types/Books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

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
