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
import { AdminListComponent } from './pages/admin/admin-book/admin-list/admin-list.component';
import { AdminFormComponent } from './pages/admin/admin-book/admin-form/admin-form.component';
import { AdminDetailComponent } from './pages/admin/admin-book/admin-detail/admin-detail.component';

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
    AdminListComponent,
    AdminFormComponent,
    AdminDetailComponent,
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
