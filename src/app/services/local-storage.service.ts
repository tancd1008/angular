import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCartType } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  // Định nghĩa xem cách nào lắng nghe được localStorage
  private serviceSubject = new Subject<string>();// vừa giống Observerble có thể lắng nghe được, vừa phát được sự kiện để lắng nghe
  watchService(): Observable<any> {
    return this.serviceSubject.asObservable();
  }
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  setItem(addItem: ProductCartType) {
    //1. Cập nhật dữ liệu vao localstorage 
    const cartItems = this.getItem();
   
    const exitsItem = cartItems.find((item: ProductCartType) => item.id === addItem.id);
    if(!exitsItem){
      cartItems.push(addItem);
    }else{
      exitsItem.value += addItem.value;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    //2. Phát tín hiệu để lắng nghe watchService
    this.serviceSubject.next('');
  }
}