import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Privilege } from 'src/app/models/privileges';


@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  constructor(public httpclient:HttpClient) { }


  apiUrl ="/USER-SERVICE";
  
  AllPrivilege()
  {
      return this.httpclient.get<Privilege[]>("/USER-SERVICE/AllPrivileges");
  }

  DeletePrivilege(id:number){
    
    return this.httpclient.delete<any>(this.apiUrl+"/deletePrivilege/"+id)
  }

  AddPrivilege(p:Privilege){
    return this.httpclient.post<any>(this.apiUrl+"/addPrivilege", p);
  }

  UpdatePrivilege(p:Privilege)
  {
    return this.httpclient.put(this.apiUrl+"/updatePrivilege", p);
  }

  getPrivilege(id:number)
  {
    return this.httpclient.get<Privilege>(this.apiUrl+"/getPrivilegeById/"+id);
  }
}
