import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TypeLoginResponse } from 'src/app/types/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.user = {
      accessToken: '',
      user: {
        _id: '',
        name: '',
        email: ''
      }
    }
   }

  ngOnInit(): void {
    // this.redirectToHome()
  }
  redirectToHome(){
    return this.router.navigateByUrl('/');
  }
  onSubmit() {
    const submitData = this.loginForm.value;

    this.authService.login(submitData).subscribe(data => {
      // console.log(data);
      localStorage.setItem('loggedInUser', JSON.stringify(data))
      this.toastr.success("Bạn đăng nhập thành công")
      // 2. Điều hướng quay về admin
      this.redirectToHome()      
    });
  }
}
