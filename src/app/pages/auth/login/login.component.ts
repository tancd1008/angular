import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
   }

  ngOnInit(): void {
    // this.redirectToHome()
  }
  redirectToHome(){
    return this.router.navigateByUrl('/');
  }
  onSubmit() {
    const submitData = this.loginForm.value;

    return this.authService.login(submitData).subscribe(data => {
      // console.log(data);
      // 1. Nếu login thành công -> lưu dữ liệu user vào localStorage
      // setItem(key lưu trong localStorage, chuỗi giá trị);
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      this.toastr.success("Bạn đăng nhập thành công")
      // 2. Điều hướng quay về admin
      this.redirectToHome()      
    });
  }
}
