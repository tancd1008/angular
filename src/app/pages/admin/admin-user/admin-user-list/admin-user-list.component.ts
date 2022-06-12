import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserType } from 'src/app/types/Auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: UserType[] = [];
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList(){
    this.authService.listUsers().subscribe((data) => {
      // Khi có dữ liệu sẽ gán về cho danh sách
      console.log(data);
      
      this.users = data;
    });
  }
  onUpdateStatus(productId: string, newStatus: number) {
    this.authService.updateUser(`${productId}`, {
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
      this.authService.deleteUser(id).subscribe((data) => {
        this.toastr.success("Bạn xóa thành công!")
        this.onGetList();
      })
    }
  }
}
