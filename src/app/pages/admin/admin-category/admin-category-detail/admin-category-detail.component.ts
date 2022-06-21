import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { BookType } from 'src/app/types/Books';
import { CategoryType } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-detail',
  templateUrl: './admin-category-detail.component.html',
  styleUrls: ['./admin-category-detail.component.css']
})
export class AdminCategoryDetailComponent implements OnInit {
  category: CategoryType;
  books: BookType[] = [];
  sl: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.category = {
      _id: '',
      name: '',
      status: 0
    }
   }

  ngOnInit(): void {
    this.onGetCategory()
  }
  onGetCategory(){
    const id = this.activatedRoute.snapshot.params['id']
    this.categoryService.getCategoryBook(id).subscribe(data =>{
      console.log(data)
      this.category = data.category;
      this.books = data.book
      this.sl  = this.books.length;
    })
    
    
  }

}
