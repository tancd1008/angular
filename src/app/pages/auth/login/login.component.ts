import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.loginForm.value;

    this.authService.login(submitData).subscribe(data => {
      // console.log(data);
      // 1. Nếu login thành công -> lưu dữ liệu user vào localStorage
      // setItem(key lưu trong localStorage, chuỗi giá trị);
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      // 2. Điều hướng quay về admin
      this.router.navigateByUrl('/admin/products');
    });
  }
}
