import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService

  ) { 
    this.signUpForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      status: new FormControl(1),
      role: new FormControl(0)
    })
  }

  ngOnInit(): void {
  }
  redirectToLogin(){
    return this.router.navigateByUrl('/auth/login')
  }
  onSubmit(){
    
    const data = this.signUpForm.value;
    this.authService.signup(data).subscribe(data => {
      this.toastr.success("Bạn đăng ký thành công");
      this.redirectToLogin()
    })
  }
}
