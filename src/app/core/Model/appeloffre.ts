import { Offre } from "./offre";
import { DevisFournisseur } from "./devis-fournisseur";
export class Appeloffre {
    idAppelOffre : number;
    reference : string;
    dateCreationC :Date;
    etat :number;
    dateLimit : Date;
    datePayment: Date;
    prixInitiale: number;
    commentaire :string;
    offres:Offre;
    DevisFournisseurs:DevisFournisseur;

    constructor(idAppelOffre:number, reference:string, dateCreationC:Date,etat:number,dateLimit:Date,datePayment:Date,prixInitiale:number, commentaire:string)
    {
        this.idAppelOffre=idAppelOffre;
        this.reference=reference;
        this.dateCreationC=dateCreationC;
        this.etat=etat;
        this.dateLimit=dateLimit;
        this.datePayment=datePayment;
        this.prixInitiale=prixInitiale;
        this.commentaire=commentaire;
    }
}
