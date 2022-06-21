import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  cartItemValue: number = 1;
  constructor(
    private bookService: BookService,
    private activateRoute: ActivatedRoute,
    private lsService: LocalStorageService,
    private toastr: ToastrService
  ) { 
    this.book = {
      _id: '',
      name: '',
      price: 0,
      sale_price: 0,
      desc: '',
      image_url: '',
      status: 0,
      category_id: ''
    }
  }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.bookService.getBook(idFromUrl).subscribe(data => {
      this.book = data;
      
    })
  }
  onInputValueChange(event: any){
    this.cartItemValue = event.target.value
  }
  onAddToCart(){
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    // const price = this.book.price-this.book.sale_price;
  
    
    const addItem = {
      id: this.book._id,
      name: this.book.name,
      price: +this.book.price,
      sale_price: this.book.sale_price,
      image_url: this.book.image_url,
      desc: this.book.desc,
      value: +this.cartItemValue
    }
    if(this.book.status == 0){
      this.toastr.warning("Sản phẩm đã hết!")
    }else{
      this.lsService.setItem(addItem);
      this.cartItemValue = 1;
      this.toastr.success("Bạn thêm thành công")
    }
    
    
  }

}
