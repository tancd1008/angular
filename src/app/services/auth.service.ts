import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeSignUpRequest, UserType, UserTypeUpdate } from '../types/Auth';

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
  getUser(){
   const user =  JSON.parse(localStorage.getItem('loggedInUser') as string)
   if(!user){
    return false;
   }
   
   this.serviceSubject.next('');
   return user

  }
  listUsers(): Observable<UserType[]>{
    return this.http.get<UserType[]>(environment.users)
  }
  updateUser (id: string, data: UserTypeUpdate): Observable<UserType> {
    return this.http.patch<UserType>(`${environment.users}/${id}`, data);
  }
  deleteUser (id: string): Observable<number> {
    return this.http.delete<number>(`${environment.users}/${id}`)
  }
  
  
}
