//import { Commande } from "./Commande";
import { BonReception } from "./BonReception";

export class Livraison {
  idLivraison:number;
   quantiteDelivre:number;
   dateLivraison:Date;
   etat:String;
   archive:boolean;
   // commande:Commande;
   bonReception:BonReception;

}
