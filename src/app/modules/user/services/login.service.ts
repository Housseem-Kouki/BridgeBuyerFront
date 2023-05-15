import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin ="/USER-SERVICE/login";
  constructor(private http:HttpClient , private router:Router) { }

  Login(user:any){
    // this.list.push(p)
     return this.http.post<any>(this.urlLogin, user);
   }
   loggedIn() {
    return !!localStorage.getItem('accessToken')
  }
  
  getToken(){ 
    return localStorage.getItem('accessToken')
  }
  
  logoutUser(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login'])
  }

  autologout(expirationDate: number){
    setTimeout(
      ()=> {this.logoutUser();} 
      ,expirationDate 
    );
  }
}
