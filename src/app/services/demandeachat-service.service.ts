import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  DemandeAchat,
  DemandeAchatFormData,
} from "../utils/interfaces/demande.interface";
import { ArticleFormData } from "../utils/interfaces/article.interface";

@Injectable({
  providedIn: "root",
})
export class DemandeachatServiceService {
  apiUrl: string = "/DEMANDEACHAT-SERVICE";
  constructor(private http: HttpClient) {}

  //demandes
  getAllDemandes() {
    return this.http.get(`${this.apiUrl}/AllDemandeAchat`);
  }

  getDemandeAchatById(id: any) {
    return this.http.get(`${this.apiUrl}/getDemandeAchatById/${id}`);
  }

  createDemande(demande: DemandeAchatFormData) {
    return this.http.post(`${this.apiUrl}/CreateDemandeAchat `, demande);
  }

  deleteDemande(id: number) {
    return this.http.delete(`${this.apiUrl}/deleteDemandeAchat/${id}`);
  }

  updateDemande(demande: DemandeAchat) {
    return this.http.put(`${this.apiUrl}/updateDemandeAchat `, demande);
  }

  getAllArticle() {
    return this.http.get(`${this.apiUrl}/AllArticle`);
  }

  createArticle(article: ArticleFormData) {
    return this.http.post(
      `${this.apiUrl}/addArticleAndAssignToUniteAndNature/${article.idunitearticle}/${article.idnaturearticle}`,
      article
    );
  }

  createUnite(unite: { nomunite: string }) {
    return this.http.post(`${this.apiUrl}/addUnite`, unite);
  }
}
