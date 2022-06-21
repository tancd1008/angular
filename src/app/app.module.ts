import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminBookListComponent } from './pages/admin/admin-book/admin-book-list/admin-book-list.component';
import { AdminBookFormComponent } from './pages/admin/admin-book/admin-book-form/admin-book-form.component';
import { AdminBookDetailComponent } from './pages/admin/admin-book/admin-book-detail/admin-book-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { BookListComponent } from './pages/client/book-list/book-list.component';
import { BookDetailComponent } from './pages/client/book-detail/book-detail.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CategotyBookComponent } from './pages/client/categoty-book/categoty-book.component';
import { ShowCartComponent } from './pages/client/show-cart/show-cart.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { ShowStatusComponent } from './components/show-status/show-status.component';
import { AdminCategoryDetailComponent } from './pages/admin/admin-category/admin-category-detail/admin-category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowValidateComponent,
    HomeComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    LoginComponent,
    AdminBookListComponent,
    AdminBookFormComponent,
    AdminBookDetailComponent,
    CartComponent,
    BookListComponent,
    BookDetailComponent,
    SignupComponent,
    CategotyBookComponent,
    ShowCartComponent,
    AdminUserListComponent,
    AdminUserFormComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    ShowStatusComponent,
    AdminCategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
