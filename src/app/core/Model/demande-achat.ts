import { Appeloffre } from './appeloffre';
export class DemandeAchat {
  iddemandeachat:number;
  etatdemandeachat:number;
  budget:number;
  appeloffre:Appeloffre;
  constructor(iddemandeachat:number,etatdemandeachat:number,budget:number){
this.iddemandeachat=iddemandeachat;
this.etatdemandeachat=etatdemandeachat;
this.budget=budget;
  }

}
