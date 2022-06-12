import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: string;
  constructor(
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.categoryForm = new FormGroup ({
      name: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(32) ]),
      status: new FormControl(1)
    })
    this.categoryId = ''
   }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['id']; // +'5'

    if (this.categoryId) {
      this.categoryService.getCategory(this.categoryId).subscribe(data => {
        // Cập nhật data cho form (data: {id: 5, name: '...'})
        console.log(data);
        const {category} = data
        console.log(category);
        
        this.categoryForm.patchValue({
          name: category.name,
          status: 1
          // price: data.price
        });
      })
    }
  }
  onSubmit(){
    const data = this.categoryForm.value;

    if (this.categoryId !== '' && this.categoryId !== undefined) {
      return this.categoryService.updateCategory(this.categoryId, data).subscribe(data => {
        this.toastr.success("Bạn sửa thành công!")
        this.redirectToList();
      })
    }

    // 2. Call API tạo mới
    return this.categoryService.createBook(data).subscribe(data => {
      // 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      console.log(1);
      
      this.toastr.success("Bạn thêm thành công!")
      this.redirectToList();
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/categories');
  }

}
