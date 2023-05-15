import { Facture } from "./Facture";
import { Paiment } from "./Paiment";
import { Offre } from "./offre";

export class Commande {
  idCommande?:any;
  offre:Offre;
  prixTotalHorsTaxe?:any;
  prixTotalAvecTaxe?:any;
  etatCommande?:any;
  creationCommande?:any;
  archive?:any;
  selected: boolean = false;
  facture:Facture;
  paiement:Paiment;
}
