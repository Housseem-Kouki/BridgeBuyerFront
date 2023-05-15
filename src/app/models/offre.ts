import { Appeloffre } from "./appeloffre";

export class Offre {
    idOffre:number;
    etat: number;
    commentaire:string;
    datecreationO:Date;
    dateValidation: Date;
    prixOffre: number;
    appeloffres:Appeloffre;


    constructor( idOffre:number,
        etat: number,
        commentaire:string,
        datecreationO:Date,
        dateValidation: Date,
        prixOffre: number,){
            this.idOffre=idOffre;
            this.etat=etat;
            this.commentaire=commentaire;
            this.datecreationO=datecreationO;
            this.dateValidation=dateValidation;
            this.prixOffre=prixOffre;
        }
}
