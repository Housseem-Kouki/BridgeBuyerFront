import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Livraison } from '../Models/Livraison';
import { Observable } from 'rxjs';
import { BonReception } from '../Models/BonReception';
import { BonRetour } from '../Models/BonRetour';
import { FactureAvoir } from '../Models/FactureAvoir';
@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
api="http://localhost:9999/LIVRAISION-SERVICE"
  constructor(private http:HttpClient) { }
//...........Livraison............

  //Affichage operateur
  getAllLivraison(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.api+"/AllLivraison");
  }


  //Affichage acheteur
  getAlllivraisonByuser(id: number): Observable<Livraison[]> {
    const url = `${this.api}/getAlllivraisonByAcheteur/${id}`;
    return this.http.get<Livraison[]>(url);
  }

  //Affichage fournisseur
  getLivraisonsByFournisseur(id: number): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(`${this.api}/getAlllivraisonByFournisseur/${id}`);
  }

  //Delete
  DeleteLivraison(idLivraison:number):Observable<any>{

    return this.http.delete("http://localhost:9999/LIVRAISION-SERVICE/delete/"+idLivraison)
  }

  //Restaure
  restoreLivraison(idLivraison: number) {
    const url = `${this.api}/restaure/${idLivraison}`;
    return this.http.put(url , null)
  }
  //Ajour manuel
  AddLivraison(id:number ,liv:Livraison){
    return this.http.post<Livraison>(this.api+"/addAndAssignToCommande/"+id, liv);
   
  }


  //Valider livraison
  validerBL(idLivraison: number): Observable<Livraison> {
    const url = `${this.api}/valideeBL/${idLivraison}`;
    return this.http.put<Livraison>(url, {});
  }

  //Tri selon quantite
  sortLivraisonsByQuantity(): Observable<Livraison[]> {
    const url = `${this.api}/sort/quantiteDelivre`;
    return this.http.get<Livraison[]>(url);
  }

//Recherche avancée
SearchMultiple(key: string): Observable<Livraison[]> {
  return this.http.get<Livraison[]>(`${this.api}/SearchMultipleLivraison/${key}`);
}
/*
searchLivraisons(quantiteDelivre?: number, dateLivraison?: Date, etat?: string): Observable<Livraison[]> {
  let url = `${this.api}/search`;
  if (quantiteDelivre || dateLivraison || etat) {
    url += '?';
    if (quantiteDelivre) {
      url += `quantiteDelivre=${quantiteDelivre}&`;
    }
    if (dateLivraison) {
      url += `dateLivraison=${dateLivraison}&`;
    }
    if (etat) {
      url += `etat=${etat}&`;
    }
    url = url.slice(0, -1); // Remove trailing "&" or "?"
  }
  return this.http.get<Livraison[]>(url);
}*/

  //PDF
  generatePdf(idLivraison: number): Observable<Blob> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/pdf');
    return this.http.get(`${this.api}/pdf/generate/${idLivraison}`, { headers: headers, responseType: 'blob' });
  }


  //...........BonReception............
  //Ajout
  addBonReception(idLivraison: number, bonReceptions: BonReception): Observable<BonReception> {
    const url = `${this.api}/addBonReception/${idLivraison}`;
    return this.http.post<BonReception>(url, bonReceptions);
  }


    //Affichage operateur
    getAllBonReception(): Observable<BonReception[]> {
      return this.http.get<BonReception[]>(this.api+"/AllBonReception");
    }

    //Affichage acheteur
    getBonReceptByUser(idUser: number): Observable<BonReception[]> {
      return this.http.get<BonReception[]>(`/api/bonReception/getBonReceptByUser/${idUser}`);
    }

   //Delete
   DeleteBonReception(idBonReception:number):Observable<any>{

    return this.http.delete<any>(this.api+"/deleteBonReception/"+idBonReception)
  }

  //Restaure
  restoreBonReception(idBonReception: number) {
    const url = `${this.api}/restaureBR/${idBonReception}`;
    return this.http.put(url,null);
  }





    //...........BonRetour............
 //Affichage operateur
 getAllBonRetour(): Observable<BonRetour[]> {
  return this.http.get<BonRetour[]>(this.api+"/AllBonRetour");
}

//Add and assign
addBonRetour(bonRetour: BonRetour, idBonReception: number): Observable<BonRetour> {
  return this.http.post<BonRetour>(`${this.api}/addBonRetour/${idBonReception}`, bonRetour);
}

//Delete
DeleteBonRetour(idBonRetour:number):Observable<any>{

return this.http.delete<any>(this.api+"/deleteBonRetour/"+idBonRetour)
}

//Restaure
restoreBonRetour(idBonRetour: number) {
const url = `${this.api}/restaureBRT/${idBonRetour}`;
return this.http.put(url,null);
}

//AdedAndAssign facture avoir
affecterFactureAvoirToBonRetour(fact:FactureAvoir, idBonRetour: number): Observable<BonRetour> {
  return this.http.post<BonRetour>(`${this.api}/bon-retour/affecterFactureAvoirToBonRetour/${idBonRetour}`, fact);
}

  //    //...........FactureAvoir............
   //Affichage operateur
 getAllFactureAvoir(): Observable<FactureAvoir[]> {
  return this.http.get<FactureAvoir[]>(this.api+"/AllFactureAvoir");
}


//Delete
DeleteFactureAvoir(idFactureAvoir:number):Observable<any>{

return this.http.delete<any>(this.api+"/deleteFactureAvoir/"+idFactureAvoir)
}

//Restaure
restoreFactureAvoir(idFactureAvoir: number) {
const url = `${this.api}/restaureFA/${idFactureAvoir}`;
return this.http.put(url,null);
}
}
