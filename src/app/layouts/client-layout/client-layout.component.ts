import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TypeLoginResponse } from 'src/app/types/Auth';
import { CategoryType } from 'src/app/types/Category';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  categories: CategoryType[] = [];
  userData: TypeLoginResponse;
  a: number = 0;
  b: string ;
  d: string ;
  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
    ) { 
      this.userData = {
        accessToken : '',
        user :{
          _id:'',
          email:'',
          name:'',
          role:0
      }
      }
      this.b = '';
      this.d = ''
    }

  ngOnInit(): void {
    
    this.onGetListCate();
    this.checkUser();
    const checkUser = localStorage.getItem('loggedInUser');
    if(checkUser){
      this.b = "Log out";
      this.d = "Hello";
    }else{
      this.b = "Log in";
      this.d = "Sing Up"
    }

    
    this.authService.watchService().subscribe(data => {    
      console.log(100); 
      this.checkUser()
      
    })    
    
  }
  onGetListCate(){
    this.categoryService.getCategorys().subscribe(data => {
      this.categories = data;
    })
  }
  redirectToHome(){
    return this.router.navigate(['/books'])
    
  }
  onLogOut(){
    this.toastr.success('Log out')
    this.authService.logOut();
    location.reload()
  }
  checkUser(){
    
    this.userData = this.authService.getUser();
    console.log(this.userData);
    
    if(this.userData){
      this.a = 1;
     console.log("Co");
     
    }else{
      this.b = "Log in";
      this.d = "Sing Up"
      console.log("Khong");

    }

    // if(this.ktUser !== null){
    //   this.user = 0
    //   this.b = this.ktUser.user.name;
    //   console.log("Có");
      
    // }else{
    //   console.log("Không");
    //   this.user = 1;
    // }
    
    
  }
  
}
