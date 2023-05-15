
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Taxe } from 'src/app/models/Taxe';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TaxeServiceService {
  base = "/COMMANDE-SERVICE/Commandes";

  constructor(private http:HttpClient) { }
  getAllTaxe(): Observable<Taxe[]>{
    return this.http.get<Taxe[]>(this.base+"/getAllTaxes");
  }
  getTaxeById(id:number):Observable<Taxe>{

    return this.http.get<Taxe>(this.base+'/getTaxeById/'+id) ;
  }
  DeleteTaxe(id : number):Observable<Taxe> {

    return this.http.delete<Taxe>(this.base+"/deleteTaxe/"+id);
  }
  AddTaxe(d: Taxe):Observable<Taxe>{
    return this.http.post<Taxe>(this.base+"/addTaxe", d);
}
updateTaxe(d: Taxe):Observable<Taxe>{
  return this.http.put<Taxe>(this.base+'/updateTaxe',d);

}

}



