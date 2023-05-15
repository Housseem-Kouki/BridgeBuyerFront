import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appeloffre } from '../Model/appeloffre';
import { Observable } from 'rxjs';
import { Offre } from '../Model/offre';
import { DevisFournisseur } from '../Model/devis-fournisseur';
import { DemandeAchat } from '../Model/demande-achat';

@Injectable({
  providedIn: 'root'
})
export class AppeloffreService {
  //appeloffre: Appeloffre[]= [];
  api="http://localhost:9999/APPELOFFRE-SERVICE"
   idUser = localStorage.getItem("idUser");

  constructor(private http:HttpClient) {

  }

  getAllDemandeAchat(){
    return this.http.get<DemandeAchat[]>(this.api + '/AllDemandeAchat')
  }


  getAllAppelOffre(){
    return this.http.get<Appeloffre[]>(this.api + '/AllAppelOffre');

  }

  getAppelOffrebyId(id:number){
    return this.http.get<Appeloffre>(this.api + `/getAppelOffreById/${id}`);
  }


  deleteAppelOffre(id:number): Observable<Object> {
    return this.http.delete(this.api + `/deleteAppelOffre/${id}`);

  }
  updateAppelOffre(appeloffre:Appeloffre):Observable<object>{
    return this.http.put<Appeloffre>(this.api + `/updateDemandeAchat`, appeloffre);
  }

  addAndAssignAppelToDemande(appeloffre:Appeloffre ,id:number){
    return this.http.post("/APPELOFFRE-SERVICE/addAndAssignAppelToDemande/"+id,appeloffre);
  }
  addDevisAndassignAppelToDevis(devisfournisseur:DevisFournisseur,idAppel:number)
  {
    
    return this.http.post("/APPELOFFRE-SERVICE/ajouterdevispourappel/"+idAppel+"/"+this.idUser,devisfournisseur);
  }
  addAndAssignOffreToAppel(offre:Offre,idAppeloffre:number){
    return this.http.post(this.api + `/addAndAssignOffreToAppel/${idAppeloffre}`,offre);

  }

  getAppelOffreByEtat(etat:number){
    return this.http.get<Appeloffre>(this.api + `/getAppelOffreByEtat/${etat}`);
  }

  export(id:number){
     return this.http.get<Appeloffre>(this.api +`/pdf/generate${id}`);
      }


      exportPDF(idAppel: number): Observable<Blob> {
        const url = this.api +`/pdf/generate/${idAppel}`;
        return this.http.get(url, { responseType: 'blob' });
      }



      calculerRemise(id1: number, idA: number, pourcentageRemise: number): Observable<number> {
        const url = `${this.api}/calculremise?id1=${id1}&idA=${idA}&pourcentageRemise=${pourcentageRemise}`;
        return this.http.get<number>(url);
      }
  ////////////
  getAllDevisFourniseur(){
    return this.http.get<DevisFournisseur>(this.api + '/AllDevisFourniseur');
  }

  addDevisFourniseur(d :DevisFournisseur){
    return this.http.post(this.api +'/addDevisFourniseur', d);

  }
  getDevisFourniseurbyId(id:number){
    return this.http.get<DevisFournisseur>(this.api + `/getDevisFourniseurbyId/${id}`);
  }
  deleteDevisFourniseur(idDevisFourniseur:number): Observable<Object> {
    return this.http.delete(this.api + `/deleteDevisFourniseur/${idDevisFourniseur}`);

  }
  updateDevisFourniseur(devis:DevisFournisseur):Observable<object>{
    return this.http.put<DevisFournisseur>(this.api + `/updateDevisFourniseur`, devis);
  }
  calculremise(id1:number,idA:number,pourcentageRemise:string){
   return this.http.get<DevisFournisseur>(this.api + `/calculremise${id1}/${idA}/${pourcentageRemise}`);
  }
  getDevisfournisseurByIDAppel(idAppeloffre:number){
    return this.http.get<DevisFournisseur>(this.api+ `/getdevisByidAppel/${idAppeloffre}`);

  }
  ////////
  getAllOffre(){
    return this.http.get<Offre[]>(this.api + '/AllOffre');
   }
   getOffrebyId(id:number){
    return this.http.get<Offre>(this.api + `/getOffrebyid/${id}`);
  }
  deleteOffre(id:number): Observable<Object> {
    return this.http.delete(this.api + `/deleteOffre/${id}`);

  }
  updateOffre(o:Offre):Observable<object>{
    return this.http.put<Offre>(this.api + `/updateOffre`, o);
  }
  getOffreByEtat(etat:string){
    return this.http.get<Offre>(this.api + `/getOffreByEtat${etat}`);
  }

  addoffre(offre:Offre, idDevisFourniseur:number){
   return this.http.post(this.api + `/addoffre/${idDevisFourniseur}`,offre);

  }
}
