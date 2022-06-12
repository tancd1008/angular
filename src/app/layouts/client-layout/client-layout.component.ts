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
  user: any = [];
  alo: any = 0;
  a: any;
  b: any;
  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
    ) { 
      
    }

  ngOnInit(): void {
    this.onGetListCate();
   
    
    
    
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
  // checkUser(){
  //   this.user = this.authService.getUser(this.alo);
  //   console.log(this.user,"2");

  //   if(this.user !== null){
  //     // this.a = "Log out";
  //     // this.b = this.user.user.name;
  //     console.log("Có");
      
  //   }else{
  //     // this.a = "Log In";
  //     // this.b = "Sign Up"
  //     console.log("Không");

  //   }
    
    
  // }
  
}
