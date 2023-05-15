import { Injectable } from '@angular/core';
import { Commande } from 'src/app/models/Commande';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  base = "/COMMANDE-SERVICE/Commandes";

  constructor(private http:HttpClient ) { }
  getAllCommande(): Observable<Commande[]>{


    return this.http.get<Commande[]>(this.base+"/getAllCommandes");
  }
  getCommandeByUser(): Observable<Commande[]>{
    id: Number;
    idstatic:Number;
    const idstatic= 4317;
    const id = localStorage.getItem("idUser");
    return this.http.get<Commande[]>(this.base+"/getCommandeByUser/"+id);
  }
  getCommandeByFournisseur(): Observable<Commande[]>{
    return this.http.get<Commande[]>(this.base+"/getCommandeFournisuer");
  }


  getCommandeById(id:number):Observable<Commande>{

    return this.http.get<Commande>(this.base+'/getCommandeById/'+id) ;
  }

  annulerCommande(id:number):Observable<Commande>{

    return this.http.put<Commande>(this.base+'/annulerCommande/'+id,null);
  }
  DeleteCommande(id : number):Observable<Commande> {

    return this.http.delete<Commande>(this.base+"/deleteCommande/"+id);
  }
  AddCommande(id:number, d: Commande):Observable<Commande>{

    return this.http.post<Commande>(this.base+"/addCommandeAndAssignToOffre/"+id, d);
}


updateCommande(id:number ,d: Commande):Observable<Commande>{
  return this.http.put<Commande>(this.base+'/updateCommande/'+id,d);

}
reactiverCommande(id:number):Observable<Commande>{

  return this.http.put<Commande>(this.base+'/reactiver/'+id,null);
}
}
