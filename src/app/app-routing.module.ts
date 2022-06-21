import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { CanAccessLoginGuard } from './guards/can-access-login.guard';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminBookFormComponent } from './pages/admin/admin-book/admin-book-form/admin-book-form.component';
import { AdminBookListComponent } from './pages/admin/admin-book/admin-book-list/admin-book-list.component';
import { AdminCategoryDetailComponent } from './pages/admin/admin-category/admin-category-detail/admin-category-detail.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { BookDetailComponent } from './pages/client/book-detail/book-detail.component';
import { BookListComponent } from './pages/client/book-list/book-list.component';
import { CategotyBookComponent } from './pages/client/categoty-book/categoty-book.component';
import { ShowCartComponent } from './pages/client/show-cart/show-cart.component';



const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: BookListComponent
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
        path: 'category',
        children: [
          {
            path: ':id',
            component: CategotyBookComponent
          }
        ]
      },
      {
        path: 'cart',
        component: ShowCartComponent
      },
      {
        path: 'auth',
        canActivate: [CanAccessLoginGuard],
        children:[
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'signup',
            component: SignupComponent
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
        path: '',
        component: AdminProductListComponent
      },
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
        },
        {
          path: 'create',
          component: AdminBookFormComponent
        },
        {
          path: 'edit/:id',
          component: AdminBookFormComponent
        }
        
       ]
     },
     {
      path: 'users',
      component: AdminUserListComponent
     },
     {
      path: 'categories',
      children: [
        {
          path: '',
          component: AdminCategoryListComponent
        },
        {
          path: 'create',
          component: AdminCategoryFormComponent
        },
        {
          path: 'edit/:id',
          component: AdminCategoryFormComponent
        },
        {
          path: ':id',
          component: AdminCategoryDetailComponent
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
