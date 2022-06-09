import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminBookListComponent } from './pages/admin/admin-book/admin-book-list/admin-book-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { BookDetailComponent } from './pages/client/book-detail/book-detail.component';
import { BookListComponent } from './pages/client/book-list/book-list.component';



const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'books',
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: ':id',
            component: BookDetailComponent
          }
        ]
      },
     
      {
        path: 'auth',
        children:[
          {
            path: 'login',
            component: LoginComponent
          }
        ]
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [CanAccessAdminGuard], // Đưa vào đây để kiểm soát đc trước khi vào admin
    component: AdminLayoutComponent,
    children: [
   
     {
       path: 'products',
       children: [
         {
           path: '',
           component: AdminProductListComponent
         },
         {
           path: 'create',
           component: AdminProductFormComponent
         },
         {
           path: 'edit/:id',
           component: AdminProductFormComponent
         },
         {
           path: ':id',
           component: AdminProductDetailComponent
         }// Đẩy admin/products/id xuống dưới cùng tránh việc nhầm :id = 'create'
       ]
     },
     {
       path: 'books',
       children:
       [
        {
          path: '',
          component: AdminBookListComponent
        }
        
       ]
     }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // đưa vào để route bên trên có thể dùng
})
export class AppRoutingModule { }
