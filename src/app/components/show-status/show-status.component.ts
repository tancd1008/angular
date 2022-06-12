import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductCreate } from 'src/app/types/Product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-status',
  templateUrl: './show-status.component.html',
  styleUrls: ['./show-status.component.css']
})
export class ShowStatusComponent implements OnInit {
  @Input() table: any;
  
  constructor(
    private http: HttpClient,
    private  productService: ProductService
  ) { }

  ngOnInit(
    
  ): void {
  }
  
}
