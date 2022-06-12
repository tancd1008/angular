import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { BookType } from 'src/app/types/Books';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  books: BookType[] = [];
  constructor(
    private bookService: BookService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.onGetList();

  }
  onGetList(){
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
    
  }
  onUpdateStatus(productId: string| undefined, newStatus: number) {
    this.bookService.updateBook(`${productId}`, {
      status: newStatus
    }).subscribe(data => {
      console.log(newStatus);
      
      this.onGetList();
    });
  }
  onDelete(id: string | undefined){
    const confirmDelete = window.confirm('Bạn có muốn xóa không');
    // Kiểm tra dữ liệu => xóa
    if(confirmDelete && id){
      this.bookService.deleteBook(id).subscribe((data) => {
        this.toastr.success("Bạn xóa thành công!")
        this.onGetList();
      })
    }
  }

}
