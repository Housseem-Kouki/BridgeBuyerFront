import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from 'src/app/models/Facture';
import { Observable } from 'rxjs';
import { ChargeFinanciere } from 'src/app/models/ChargeFinanciere';
import { Taxe } from 'src/app/models/Taxe';

@Injectable({
  providedIn: 'root'
})
export class FactureServiceService {

  base = "/COMMANDE-SERVICE/Commandes";

  constructor(private http:HttpClient) { }
  getAllFacture(): Observable<Facture[]>{
    return this.http.get<Facture[]>(this.base+"/getAllFactures");
  }
  getFactureById(id:number):Observable<Facture>{

    return this.http.get<Facture>(this.base+'/getFactureById/'+id) ;
  }

  pdfFacture(idFacture:number){

      return this.http.get(this.base+'/pdf/generate/'+idFacture, { responseType: 'blob' }) ;
  }
  DeleteFacture(id : number):Observable<Facture> {

    return this.http.delete<Facture>(this.base+"/deleteFacture/"+id);
  }

updateFacture(id:number ,d: Facture):Observable<Facture>{
  return this.http.put<Facture>(this.base+'/updateFacture/'+id,d);

}

addFacture(facture: Facture, idCommande: number): Observable<Facture> {
  return this.http.post<Facture>(`${this.base}/addFactureAndAssignToCommande/${idCommande}`, facture);
}
getAllTaxe(): Observable<Taxe[]>{
  return this.http.get<Taxe[]>(this.base+"/getAllTaxes");
}
getAllChargeFinanciere(): Observable<ChargeFinanciere[]>{
  return this.http.get<ChargeFinanciere[]>(this.base+"/getAllChargeFinancieres");
}
createFacture(facture: Facture, charges: ChargeFinanciere[], taxes: Taxe[]) {
  const chargesData = charges.map(charge => ({
    nomCharge: charge.nomCharge,
    montantCharge: charge.montantCharge
  }));

  const taxesData = taxes.map(taxe => ({
    nomTaxe: taxe.nomTaxe,
    tauxTaxe: taxe.tauxTaxe
  }));

  return this.http.post<Facture>(this.base+"/addFactureAndAssignToCommande/1", { facture, charges: chargesData, taxes: taxesData });
}
}
