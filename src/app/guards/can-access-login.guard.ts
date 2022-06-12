import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessLoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') as string)
      if(loggedInUser){
        this.toastr.warning("Bạn đã đăng nhập!");
        this.router.navigateByUrl('/')
      }
    return true;
  }
  
}
