import { ChargeFinanciere } from "./ChargeFinanciere";
import { Taxe } from "./Taxe";

export class Facture {
  idFacture?: number;
  description: string;
  listChargeFinancieres: ChargeFinanciere[];
  taxes: Taxe[];
  montantFacture: number;
  etatFacture: boolean;
}

