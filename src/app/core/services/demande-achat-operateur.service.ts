import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemandeAchat } from '../Model/demande-achat';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeAchatOperateurService {
  api="/DEMANDEACHAT-SERVICE/"
  constructor(private http:HttpClient) { }

  getAllDemandeAchatForOperateur(){
    return this.http.get<DemandeAchat[]>(this.api + '/AllDemandeAchat')
  }
  Refuser(iddemandeachat:number):Observable<object>
  {
    return this.http.delete(this.api + `/deleteDemandeAchat/${iddemandeachat}`)
  }


}
