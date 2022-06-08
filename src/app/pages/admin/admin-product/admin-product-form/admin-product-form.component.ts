import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  constructor(
    private productService: ProductService, // Các phương thức call Api
    private router: Router, // ĐIều hướng
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService
    ) {
    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(32), this.onValidateNameHasProduct ]), // FormControl (Giá trị mặc định)
      // price: new FormControl(0)
      status: new FormControl(1)
    });
      this.productId = '';
    
   }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id']; // +'5'

    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        // Cập nhật data cho form (data: {id: 5, name: '...'})
        this.productForm.patchValue({
          name: data.name,
          status: 1
          // price: data.price
        });
      })
    }
  }
  onValidateNameHasProduct (control: AbstractControl): ValidationErrors|null {
    const inputValue = control.value;

    if (!inputValue.includes('Product')) {
      return {hasProductError: true};
    }

    return null;
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/products');
  }
  onSubmit(){
    //1. Nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;

    if (this.productId !== '' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.toastr.success("Bạn sửa thành công!")
        this.redirectToList();
      })
    }

    // 2. Call API tạo mới
    return this.productService.createProduct(data).subscribe(data => {
      // 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      console.log(1);
      
      this.toastr.success("Bạn thêm thành công!")
      this.redirectToList();
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }
}
