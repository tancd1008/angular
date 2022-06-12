import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryType } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-book-form',
  templateUrl: './admin-book-form.component.html',
  styleUrls: ['./admin-book-form.component.css']
})
export class AdminBookFormComponent implements OnInit {
  bookForm: FormGroup;
  bookId: string;
  categories: CategoryType[] = [];
  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { 
    this.bookForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(32) ]), // FormControl (Giá trị mặc định)
      price: new FormControl(0),
      sale_price: new FormControl(0),
      image_url: new FormControl(''),
      desc: new FormControl(''),
      category_id: new FormControl(''),
      status: new FormControl(1)
    });
      this.bookId = '';
    
  }

  ngOnInit(): void {
    this.bookId = this.activateRoute.snapshot.params['id']; // +'5'

    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe(data => {
        // Cập nhật data cho form (data: {id: 5, name: '...'})
        this.bookForm.patchValue({
          name: data.name,
          status: 1,
          price: data.price,
          sale_price: data.sale_price,
          image_url: data.image_url,
          desc: data.desc,
          category_id: data.category_id
        });
      })
    }
    this.categoryService.getCategorys().subscribe(data => {
      this.categories = data
      
    })
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/books');
  }
  onSubmit(){
    const data = this.bookForm.value;
    console.log(data);
    
    if (this.bookId !== '' && this.bookId !== undefined) {
      return this.bookService.updateBook(this.bookId, data).subscribe(data => {
        console.log(1);
        
        this.toastr.success("Bạn sửa thành công!")
        this.redirectToList();
      })
    }
    // 2. Call API tạo mới
    return this.bookService.createBook(data).subscribe(data => {
      // 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      console.log(2);
      
      this.toastr.success("Bạn thêm thành công!")
      this.redirectToList();
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }

}
