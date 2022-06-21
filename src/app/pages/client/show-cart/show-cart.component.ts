import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BookCartType } from 'src/app/types/Books';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  cartItems: BookCartType[] = [];
  cartItemValues: number = 0;
  total_price: number = 0;
  constructor(
    private lsServives: LocalStorageService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onSetCartItems();
    // Cần 1 cách thức nào đó có thể lắng nghe việc thay đổi giá trị của ls
    // Hoặc cho biết khi nào có thể lấy dữ liệu mới
    this.lsServives.watchService().subscribe(data => {
      // Khi serviceSubject.next('') thì subscribe sẽ được gọi
      this.onSetCartItems();
    });
  }
  onSetCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    
    this.cartItemValues = 0;
    this.total_price = 0;
    
    this.cartItems.forEach(item => {
        this.cartItemValues += item.value;
        this.total_price += ((item.price/100*(100-item.sale_price))*item.value)
      })
     
      
  }
  onRemove(id: string|undefined){
    this.lsServives.removeById(id);
    this.toastr.success("Bạn xóa thành công")
  }
  ondelete(){
    this.lsServives.remove();
    this.toastr.success("Thanh toán thành công")
  }
  onDecrease(id: any){
    this.lsServives.decrease(id)
    this.toastr.success("Cập nhật thành công")

  }
  onIncrease(id: any){
    this.lsServives.increase(id);
    this.toastr.success("Cập nhật thành công")
  }
}


