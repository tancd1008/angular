import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  categorys: CategoryType[] = [];
  user: any;
  constructor(
    private categoryService: CategoryService,
    private lsService: LocalStorageService,
    private toastr: ToastrService,
    private router: Router
    ) { 
    }

  ngOnInit(): void {
    this.onGetListCate();
    this.user = this.lsService.getUser();
  }
  onGetListCate(){
    this.categoryService.getCategory().subscribe(data => {
      this.categorys = data;
    })
  }
  redirectToHome(){
    return this.router.navigate(['/books'])
    
  }
  onLogOut(){
    this.toastr.success('Log out')
    this.lsService.logOut();
    location.reload()
  }
}
