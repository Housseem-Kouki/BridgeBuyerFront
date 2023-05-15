import { Commande } from "./Commande";

export class Paiment {
  idPaiment?:any;
  token?:any;
  amount?:any;
  currency?:any;
  datePayment?:any;
  commandes: Commande[] = [];
}
