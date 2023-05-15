import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { LoginService } from './modules/user/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
    canActivate(): boolean{
      const token = localStorage.getItem('accessToken');
      if (token){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
    }
}
