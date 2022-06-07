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

import { AdminBookListComponent } from './pages/admin/admin-book/admin-book-list/admin-book-list.component';
import { AdminBookFormComponent } from './pages/admin/admin-book/admin-book-form/admin-book-form.component';
import { AdminBookDetailComponent } from './pages/admin/admin-book/admin-book-detail/admin-book-detail.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
