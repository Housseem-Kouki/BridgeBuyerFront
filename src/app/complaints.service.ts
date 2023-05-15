import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Complaints } from "./core/Models/complaints";

@Injectable({
  providedIn: "root",
})
export class ComplaintsService {
  readonly API_URL = "http://localhost:8111/Emlacement-Service";

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(`${this.API_URL}/getallComplaint`);
  }
  addComplaints(Complaints: any, id: any) {
    return this.httpClient.post(
      `${this.API_URL}/add/${id}`,
      Complaints
    );
  }
  updateComplaints(data: any, id: any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/update/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(
      `http://localhost:8111/Emlacement-Service/delete/${id}`,
      { responseType: "text" }
    );
  }
  get(id: any): Observable<Complaints> {
    return this.httpClient.get<Complaints>(
      `http://localhost:8111/Emlacement-Service/get/${id}`
    );
  }
  archiverComplaint(id: any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/archiver/${id}`, {});
  }
  getNbrTotal(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/nbre`);
  }
}
