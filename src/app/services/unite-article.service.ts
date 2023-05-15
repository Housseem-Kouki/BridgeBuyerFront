import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Unite } from "../utils/interfaces/unite.interface";

@Injectable({
  providedIn: "root",
})
export class UniteArticleService {
  apiUrl: string = "/DEMANDEACHAT-SERVICE";
  constructor(private http: HttpClient) {}

  getAllUnite() {
    return this.http.get(`${this.apiUrl}/AllUnite`);
  }

  createUnite(unite: { nomunite: string }) {
    return this.http.post(`${this.apiUrl}/addUnite`, unite);
  }

  updateUnite(unite: Unite) {
    return this.http.put(`${this.apiUrl}/updateUnite`, unite);
  }

  deleteUnite(id: number) {
    return this.http.delete(`${this.apiUrl}/deleteUnite/${id}`);
  }
}
