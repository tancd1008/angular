import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService
    ){
    // cần có router để điều hướng nếu false
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') as string)
      console.log(loggedInUser);
      
      if(loggedInUser && loggedInUser.user.role === 1){
        return true;
      }
      if(loggedInUser && loggedInUser.user.role !== 1){
        this.toastr.error("Bạn không phải admin")
        this.router.navigateByUrl('/')
      }
      if(!loggedInUser){
        this.toastr.error("Bạn chưa đăng nhập")
        this.router.navigateByUrl('/auth/login')
      }
      
      return false;
  }
  
}
