import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductCartType } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;
  cartItemValue: number = 1;
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private lsService: LocalStorageService
    ) {
    this.product = {
      _id: '',
      name: '',
      status: 0
    }
   }

  ngOnInit(): void {
    // ActivateRoute sẽ có thể đọc biến được truyền vào trên url
    // tên id được định nghĩa ở app-routing :id
    const idFromUrl = this.activateRoute.snapshot.params['id'];
    

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
      // console.log(data);
    })
    
  }
  onInputValueChange(event: any){
    this.cartItemValue = event.target.value
  }
  onAddToCart(){
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      id: this.product._id,
      name: this.product.name,
      value: +this.cartItemValue
    }
    // 2. Kiểm tra xem đã có sp này trong giỏ hàng chưa
    // 2.1 Lấy ra toàn bộ sp trong giỏ
    // const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // // 2.2 Tìm phần tử trong giỏ có id === addItem.id
    // // console.log(addItem,cartItems);
    
    // const exitsItem = cartItems.find((item: ProductCartType) => item.id === addItem.id);
    // // 3. Nếu không có thì push luôn vào làm phần tử mới
    // if(!exitsItem){
    //   cartItems.push(addItem);
    // }else{
    //   // 3.1 Nếu đã có thì cập nhật số lượng mới = số lượng cũ + thêm
    //   exitsItem.value += addItem.value;
    // }
    // // 4. Cập nhật dữ liệu giỏ hàng
    // localStorage.setItem('cart', JSON.stringify(cartItems));
    // 5. Cập nhật lại giá trị cho ô input value
    this.lsService.setItem(addItem);
    this.cartItemValue = 1;
  }

}
