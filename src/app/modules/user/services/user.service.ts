import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urluser ="/USER-SERVICE/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    })
  };
  constructor(private http:HttpClient ) { }
  getUsers():Observable<User[]>{
    //return this.list
    return this.http.get<User[]>(this.urluser+"AllUsers" , this.httpOptions);
  }

  urlhello ="http://localhost:9999/USER-SERVICE/helloUser";
  getHello():Observable<string>{
    return this.http.get<string>(this.urlhello);
  }

  getProductById(){
    //return this.list
    return this.http.get<String>(this.urlhello);
  }


 
  getUserFromToken(accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get("/USER-SERVICE/currentUser", { headers });
  }


  AddUser(user:User){
    return this.http.post<any>("/USER-SERVICE/addUser", user);
  }

  forgetPassword(email:string){
    return this.http.get<String>("/USER-SERVICE/requestPasswordReset/"+email);
  }

  resetPassword(data:any,token:string){
    return this.http.post<any>("/USER-SERVICE/password-reset?token="+token, data);

  }

  deleteUser(id:number){
    return this.http.delete<any>("/USER-SERVICE/deleteUser/"+id);
  }

  desActiverUser(id:number){
    return this.http.put<any>("/USER-SERVICE/desActiverUser/"+id , null);
  }

  getUser(id:number){
    return this.http.get<any>("/USER-SERVICE/getUserById/"+id );
  }
  
}
