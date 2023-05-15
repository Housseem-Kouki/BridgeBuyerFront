import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArticleFormData } from "../utils/interfaces/article.interface";

@Injectable({
  providedIn: "root",
})
export class NatureArticleService {
  apiUrl: string = "/DEMANDEACHAT-SERVICE";
  constructor(private http: HttpClient) {}

  //demandes
  getAllNatureArticle() {
    return this.http.get(`${this.apiUrl}/AllNatureArticle`);
  }
  getAllUnite() {
    return this.http.get(`${this.apiUrl}/AllUnite`);
  }

  deleteNatureArticle(id: number) {
    return this.http.delete(`${this.apiUrl}/deleteNatureArticle/${id}`);
  }

  createNatureArticle(article: any) {
    return this.http.post(`${this.apiUrl}/addNatureArticle`, article);
  }

  updateNatureArticle(article: any) {
    return this.http.put(`${this.apiUrl}/updateNatureArticle`, article);
  }
}
