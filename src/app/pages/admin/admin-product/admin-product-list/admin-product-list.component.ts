import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [];
   }
   // Khi component render xong sẽ chạy 1 lần ngInit
  ngOnInit(): void {
   this.onGetList();
  }
  // lấy ds sẽ đc gọi khi lần đầu render và sao khi xóa mỗi phần tử

  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      // Khi có dữ liệu sẽ gán về cho danh sách
      this.products = data;
    });
  }
  onDelete(id: string){
    // confirm
    const confirmDelete = window.confirm('Bạn có muốn xóa không');
    // Kiểm tra dữ liệu => xóa
    if(confirmDelete && id){
      this.productService.deleteProduct(id).subscribe((data) => {
        this.onGetList();
      })
    }
    // Cập nhật danh sách
  }
  onUpdateStatus(productId: string, newStatus: number) {
    this.productService.updateProduct(`${productId}`, {
      status: newStatus
    }).subscribe(data => {
      console.log(newStatus);
      
      this.onGetList();
    });
  }
}
