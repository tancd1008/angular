import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryType } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories: CategoryType[] = [];
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onGetList();
    
  }
  onGetList(){
    this.categoryService.getCategorys().subscribe(data => {
      this.categories = data
    })
   
  }
  onUpdateStatus(productId: string, newStatus: number) {
    this.categoryService.updateCategory(`${productId}`, {
      status: newStatus
    }).subscribe(data => {
      console.log(newStatus);
      
      this.onGetList();
    });
  }
  onDelete(id: string){
    const confirmDelete = window.confirm('Bạn có muốn xóa không');
    // Kiểm tra dữ liệu => xóa
    if(confirmDelete && id){
      this.categoryService.deleteCategory(id).subscribe((data) => {
        this.toastr.success("Bạn xóa thành công!")
        this.onGetList();
      })
    }
  }
}
