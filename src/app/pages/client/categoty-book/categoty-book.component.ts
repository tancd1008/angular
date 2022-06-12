import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BookCartType, BookType } from 'src/app/types/Books';
import { CategoryType } from 'src/app/types/Category';

@Component({
  selector: 'app-categoty-book',
  templateUrl: './categoty-book.component.html',
  styleUrls: ['./categoty-book.component.css']
})
export class CategotyBookComponent implements OnInit {
  categoryBooks: BookType[] = [];
  categorys: CategoryType;
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      this.categorys = {
        _id: '',
        name: ''
      }
     }
     private serviceSubject = new Subject<string>();// vừa giống Observerble có thể lắng nghe được, vừa phát được sự kiện để lắng nghe
     watchService(): Observable<any> {
       return this.serviceSubject.asObservable();
     }
  ngOnInit(): void {
    this.onGetBookCategory();
  }
  onGetBookCategory(){
    const id = this.activatedRoute.snapshot.params['id']
    this.categoryService.getCategoryBook(id).subscribe(data =>{
      console.log(data)
      this.categoryBooks = data.book
      this.categorys = data.category
    })
  }

}
