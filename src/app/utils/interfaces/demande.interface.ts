import { Article } from "./article.interface";

export interface DemandeAchat {
  iddemandeachat: number;
  etatdemandeachat: number;
  budget: number;
  acheteur: any;
  articles: Article[];
}

export interface PartialDemandeAchat {
  iddemandeachat?: number;
  etatdemandeachat?: number;
  budget?: number;
  acheteur?: any;
  articles?: Article[];
}

export interface DemandeAchatFormData {
  etatdemandeachat: number;
  budget: number;
  acheteur: any;
  articles: Article[];
}
