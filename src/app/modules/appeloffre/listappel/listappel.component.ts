import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { error } from 'console';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DevisFournisseur } from 'src/app/core/Model/devis-fournisseur';
import { Commande } from 'src/app/models/Commande';
import { CommandeServiceService } from '../../commande/services/commande-service.service';

@Component({
  selector: 'app-listappel',
  templateUrl: './listappel.component.html',
  styleUrls: ['./listappel.component.scss']
})
export class ListappelComponent implements OnInit {
  ListAppeloffre:Appeloffre[];
 idAppeloffre:any; 
  appeloffre:Appeloffre ;

  devisFournisseur: DevisFournisseur = new DevisFournisseur();
  commande= new Commande();
  newdevis = { } as any ;
  iddemandeachat:any;
  etat:number;
  constructor( private appeloffreservice:AppeloffreService , private router:Router , private http:HttpClient) { }
    devis(idAppeloffre:number){
    this.router.navigate(['/devisfournisseur/', idAppeloffre]);

 }

    ngOnInit(): void {

      this.appeloffreservice.getAllAppelOffre().subscribe(
        data => {this.ListAppeloffre = data;console.log(data)},
        error => {  alert("error de recuperation liste appel d'offre")}
      );
    }
  
  Creerdevis(){
      console.log(this.devisFournisseur)
    this.appeloffreservice.addDevisAndassignAppelToDevis(this.devisFournisseur,this.idApp).subscribe(
   data=>{ this.router.navigate(['devisfournisseur'])}
    )
  }
  getAppelOffreByEtat(etat:number){
    this.router.navigate(['/getbyetat',etat]);

  }

  updateAppelOffre(idAppeloffre:number){
    this.router.navigate(['/appeloffres/Appeloffre/update',idAppeloffre] );
  }

  exportPDF(idAppel: number) {
            console.log('PDF called')

    this.appeloffreservice.exportPDF(idAppel).subscribe(
     (data: Blob) => {const blob = new Blob([data], { type: 'application/pdf' });
     const url = URL.createObjectURL(blob);
     const link = document.createElement('a');
     link.href = url;
     link.download = 'export.pdf';
     link.click();
     URL.revokeObjectURL(url);
   }, error => {
     console.log(error);
   });

   

  }


  idApp : number;
  openModalAddDevis(idAppelOffre:number){
    this.idApp = idAppelOffre;
    $('#modalupdaterole').modal('show');
  }


}
