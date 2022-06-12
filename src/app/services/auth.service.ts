import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeSignUpRequest } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  private serviceSubject = new Subject<any>();// vừa giống Observerble có thể lắng nghe được, vừa phát được sự kiện để lắng nghe
  watchService(): Observable<any> {
    return this.serviceSubject.asObservable();
  }
  login(data: TypeLoginRequest): Observable<TypeLoginResponse> {
    this.serviceSubject.next('');
    return this.http.post<TypeLoginResponse>(environment.login, data);
  }
  signup(data: TypeSignUpRequest): Observable<TypeSignUpRequest>{
    return this.http.post<TypeSignUpRequest>(environment.signup, data)
  }
  logOut(){
    return localStorage.removeItem('loggedInUser')
  }
  getUser(alo: any){
    this.serviceSubject.next(1)
    JSON.parse(localStorage.getItem('loggedInUser') || 'null')
  }
  
  
}
