import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BookType } from 'src/app/types/Books';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: BookType;
  constructor(
    private bookService: BookService,
    private activateRoute: ActivatedRoute,
    private lsService: LocalStorageService
  ) { 
    this.book = {
      _id: '',
      name: '',
      price: 0,
      sale_price: 0,
      desc: '',
      image_url: '',
    }
  }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.bookService.getBook(idFromUrl).subscribe(data => {
      this.book = data;
      console.log(data);
      
    })
  }

}
