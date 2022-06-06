import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
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

}
