import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Article } from "../utils/interfaces/article.interface";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  apiUrl: string = "/DEMANDEACHAT-SERVICE";
  private exportUrl = '/export/articles';
  constructor(private http: HttpClient) {}

  getAllArticles() {
    return this.http.get(`${this.apiUrl}/AllArticle`);
  }

  addComment(comment: { id: number; content: string }) {
    return this.http.post(`${this.apiUrl}/addComment/${comment.id}`, {
      content: comment.content,
    });
  }

  deleteComment(idComment: number) {
    return this.http.delete(`${this.apiUrl}/deleteComment/${idComment}`);
  }

  getReactsFromComment(idComment: number) {
    return this.http.get(`${this.apiUrl}/findAllByIdComment/${idComment}`);
  }

  addReactOnComment(react: { commentId: number; react: string }) {
    return this.http.post(`${this.apiUrl}/save/${react.commentId}`, {
      react: react.react,
    });
  }
  SerachMultiple(key:string) :Observable<Article[]>
  {
    return this.http.get<Article[]>('/DEMANDEACHAT-SERVICE/SearchMultiple/'+key);
  }
  exportToPdf(): Observable<any> {
    return this.http.get('/DEMANDEACHAT-SERVICE/articles/pdfreport', { responseType: 'arraybuffer' }).pipe(
      map((response: ArrayBuffer) => {
        let blob = new Blob([response], { type: 'application/pdf' });
        let url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      })
    );
  }
  exportArticles() {
    return this.http.get('/DEMANDEACHAT-SERVICE/export/articles', { responseType: 'blob' });
  }
}
