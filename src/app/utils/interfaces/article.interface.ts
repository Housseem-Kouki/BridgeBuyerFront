export interface Article {
  idarticle: number;
  nomarticle: string;
  descriptionarticle: string;
  prixestime: number;
  quantite: number;
  prixestimeAvecRemise: number;
  uniteArticle: any; // You may want to define a type for this
  natureArticle: any; // You may want to define a type for this
  comments: any[];
}

export interface ArticleFormData {
  idunitearticle: number;
  idnaturearticle: number;
  nomarticle: string;
  descriptionarticle: string;
  prixestime: number;
  quantite: number;
  prixestimeAvecRemise: number;
  uniteArticle: any;
  natureArticle: any;
}
