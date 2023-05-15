import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { Facture } from 'src/app/models/Facture';
import { PayementServiceService } from '../../services/payement-service.service';
import { CommandeServiceService } from '../../services/commande-service.service';
import { FactureServiceService } from '../../services/facture-service.service';
import { Livraison } from 'src/app/core/Models/Livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-commande-by-fournisseur',
  templateUrl: './commande-by-fournisseur.component.html',
  styleUrls: ['./commande-by-fournisseur.component.scss']
})
export class CommandeByFournisseurComponent implements OnInit {
  listeCommande: Commande[] = [];
  Commande: Commande = new Commande();
 livraison = new Livraison();
  constructor( private route: ActivatedRoute,
    private router: Router,private payementService: PayementServiceService,private livraisonService: LivraisonService,private commandeService:CommandeServiceService,private factureService: FactureServiceService) { }
    facture: Facture = {
      description: '',
      listChargeFinancieres: [],
      taxes: [],
      montantFacture: 0,
      etatFacture: false
    };

    idCommande: number;

    onSubmit(): void {
      console.log(this.idCommande);
      const idCommande = this.idCommande; // remplacer par l'identifiant de la commande à laquelle la facture doit être associée


    }
    telechargerPDF(id:number) {
      this.factureService.pdfFacture(id)
        .subscribe((response: Blob) => {
          const url = window.URL.createObjectURL(response);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'facture.pdf';
          link.click();
          window.URL.revokeObjectURL(url);
        });
    }


    creerBonDeLivraison(id:number){
      this.livraisonService.AddLivraison(id,this.livraison).subscribe(
        data => {alert('add success'); 
         this.router.navigate(['/allLivraison']);},
        error => {alert("add echoué")}
      );
  }



    ngOnInit(): void {



      this.commandeService.getAllCommande().subscribe(
        data => {this.listeCommande = data},
        error => {'Error de recuperation les utilisateurs !'}
      );






    }



    openModal(){
      $('#exampleModal').modal('show');
    }






}
