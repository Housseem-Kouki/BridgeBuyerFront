import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Privilege } from 'src/app/models/privileges';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  urlAddRole ="/USER-SERVICE/addRole";
  constructor(private http:HttpClient) { }

  
  addRole(p:Role): Observable<Role>{
    // this.list.push(p)
     return this.http.post<Role>(this.urlAddRole, p);
   }

   getRoles():Observable<Role[]>{
    //return this.list
    return this.http.get<Role[]>("/USER-SERVICE/AllRoles");
  }

  addRoleWithPrivileges(p:Role): Observable<Role>{
    // this.list.push(p)
     return this.http.post<Role>("/USER-SERVICE/addRoleAddRoleWithPrivilege", p);
   }
   deleteRole(id:number){
    return this.http.delete<any>("/USER-SERVICE/deleteRole/"+id);
   }

   getListPrivilégesByIdRole(id:number){
    return this.http.get<Privilege[]>("/USER-SERVICE/getListPrivilegesByIdRole/"+id);
   }
    getListUsersByIdRole(id:number){
    return this.http.get<User[]>("/USER-SERVICE/getListUsersByIdRole/"+id);
    }

    updateRole(role:Role){
      return this.http.put("/USER-SERVICE/updateRole/", role);

    }
}
