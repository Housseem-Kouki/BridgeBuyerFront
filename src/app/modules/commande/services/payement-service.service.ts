import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiment } from 'src/app/models/Paiment';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Commande } from 'src/app/models/Commande';

@Injectable({
  providedIn: 'root'
})
export class PayementServiceService {

  base = "COMMANDE-SERVICE/api/payment";

  payerCommandes(commandes: Commande[]) {
    const commandesAPayer = commandes.filter(c => c.selected);
    if (commandesAPayer.length > 0) {
      const paymentRequest = {
        token: 'tok_visa', // Remplacez ce token par le token de carte de crédit réel
        currency: 'usd',
        commandes: commandesAPayer
      };
      return this.http.post<Paiment>(this.base+'/payer', paymentRequest).pipe(
        tap(paiment => {
          console.log('Le paiement a été effectué avec succès !');
          commandesAPayer.forEach(c => {
            c.etatCommande = 2; // Mettez à jour l'état de la commande à "facturé"
          });
        }),
        catchError(error => {
          console.error('Le paiement a échoué :', error);
          return throwError(error);
        })
      );
    } else {
      return throwError('Aucune commande sélectionnée !');
    }
  }
  constructor(private http:HttpClient) { }
  getAllPaiment(): Observable<Paiment[]>{
    return this.http.get<Paiment[]>(this.base+"/getAllPaiments");
  }
  getPaimentById(id:number):Observable<Paiment>{

    return this.http.get<Paiment>(this.base+'/getPaimentById/'+id) ;
  }
  DeletePaiment(id : number):Observable<Paiment> {

    return this.http.delete<Paiment>(this.base+"/deletePaiment/"+id);
  }
  AddPaiment(d: Paiment):Observable<Paiment>{
    return this.http.post<Paiment>(this.base+"/payer", d);
}
updatePaiment(id:number ,d: Paiment):Observable<Paiment>{
  return this.http.put<Paiment>(this.base+'/updatePaiment/'+id,d);

}
}
