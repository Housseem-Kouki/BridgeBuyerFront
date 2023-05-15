import { Livraison } from 'src/app/core/Models/Livraison';
import { BonRetour } from "./BonRetour";


export class BonReception  {
  idBonReception:number;
  dateReception:Date;
  quantiteRecevoir:number;
  quantiteAccepte:number;
  quantiteRefuse:number;
  etat:String;
  archive:boolean;
  livraison:Livraison;
  bonRetour:BonRetour;

}
