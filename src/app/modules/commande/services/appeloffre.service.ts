import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Offre } from 'src/app/models/offre';

@Injectable({
  providedIn: 'root'
})
export class AppeloffreService {
  //appeloffre: Appeloffre[]= [];

  base = "http://localhost:9999/APPELOFFRE-SERVICE";
  constructor(private http:HttpClient) {

  }



  ////////
  getAllOffre(){
    return this.http.get<Offre[]>(this.base+'/AllOffre');
   }
   getOffrebyId(id:number){
    return this.http.get<Offre>(this.base + `/getOffrebyid/${id}`);
  }
  deleteOffre(id:number): Observable<Object> {
    return this.http.delete(this.base + `/deleteOffre/${id}`);

  }
  updateOffre(o:Offre):Observable<object>{
    return this.http.put<Offre>(this.base + `/updateOffre`, o);
  }
  getOffreByEtat(etat:string){
    return this.http.get<Offre>(this.base + `/getOffreByEtat${etat}`);
  }
}
