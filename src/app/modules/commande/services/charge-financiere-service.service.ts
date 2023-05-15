import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargeFinanciere } from 'src/app/models/ChargeFinanciere';

@Injectable({
  providedIn: 'root'
})
export class ChargeFinanciereServiceService {

  base = "/COMMANDE-SERVICE/Commandes";

  constructor(private http:HttpClient) { }
  getAllChargeFinanciere(): Observable<ChargeFinanciere[]>{
    return this.http.get<ChargeFinanciere[]>(this.base+"/getAllChargeFinancieres");
  }
  getChargeFinanciereById(id:number):Observable<ChargeFinanciere>{

    return this.http.get<ChargeFinanciere>(this.base+'/getChargeFinanciereById/'+id) ;
  }
  DeleteChargeFinanciere(id : number):Observable<ChargeFinanciere> {

    return this.http.delete<ChargeFinanciere>(this.base+"/deleteChargeFinanciere/"+id);
  }
  AddChargeFinanciere(d: ChargeFinanciere):Observable<ChargeFinanciere>{
    return this.http.post<ChargeFinanciere>(this.base+"/addChargeFinanciere", d);
}
updateChargeFinanciere(d: ChargeFinanciere):Observable<ChargeFinanciere>{
  return this.http.put<ChargeFinanciere>(this.base+'/updateChargeFinanciere/',d);

}
}
