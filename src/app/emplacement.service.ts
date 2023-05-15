import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Emplacement } from "./emplacement";
import { Departement } from "./departement";
import { AdresseExpedition } from "./adresse-expedition";

@Injectable({
  providedIn: "root",
})
export class EmplacementService {
  private API_URL = "http://localhost:8111/Emlacement-Service";
  constructor(private httpClient: HttpClient) {}
  addDepartement(Departement: any, idE: any): Observable<any> {
    return this.httpClient.post(
      `${this.API_URL}/addDepartement/${idE}`,
      Departement
    );
  }
  addEmplacement(Emplacement: any, idA: any): Observable<any> {
    return this.httpClient.post(
      `${this.API_URL}/addEmplacement/${idA}`,
      Emplacement
    );
  }
  getByIdEmplacement(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/getEmplacementById/${id}`);
  }
  getAllEmplacements(): Observable<Emplacement[]> {
    return this.httpClient.get<Emplacement[]>(
      `${this.API_URL}/AllEmplacements`
    );
  }
  editEmplacement(Emplacement: any, id: any): Observable<any> {
    return this.httpClient.put(
      `${this.API_URL}/updateEmplacement/${id}`,
      Emplacement
    );
  }
  deleteEmplacement(id: any): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/deleteEmplacement/${id}`);
  }
  trierEmplacement(): Observable<Emplacement[]> {
    return this.httpClient.get<Emplacement[]>(
      `${this.API_URL}/getAllEmplacementTrie`
    );
  }
  getAllDepartements(): Observable<Departement[]> {
    return this.httpClient.get<Departement[]>(
      `${this.API_URL}/AllDepartements`
    );
  }
  getByIdDepartement(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/getDepartementById/${id}`);
  }

  addAdressExpedition(AdresseExpedition: any): Observable<any> {
    return this.httpClient.post(
      `${this.API_URL}/addAdresseExpedition`,
      AdresseExpedition
    );
  }
  getAlladdExp(): Observable<AdresseExpedition[]> {
    return this.httpClient.get<AdresseExpedition[]>(
      `${this.API_URL}/AllAdresseExpeditions`
    );
  }
}
