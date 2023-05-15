import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
//import { HttpHandler, HttpRequest } from '@angular/common/http';
//import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  
  constructor(private injector: Injector ){}
  intercept(req, next) {
    let authService = this.injector.get(LoginService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken()  , console.log(req.headers))
     
      }
    )
    console.log('Headers: ', req.headers); 
    return next.handle(tokenizedReq)
  
}
}
