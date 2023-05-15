import { HttpClient } from '@angular/common/http';
import { Paiment } from 'src/app/models/Paiment';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { CommandeServiceService } from '../../services/commande-service.service';
import * as bootstrap from 'bootstrap';
import * as $ from "jquery"
import { FactureServiceService } from '../../services/facture-service.service';
import { Facture } from 'src/app/models/Facture';
import { ChargeFinanciere } from 'src/app/models/ChargeFinanciere';
import { Taxe } from 'src/app/models/Taxe';
import { PayementServiceService } from '../../services/payement-service.service';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  /// taxe
listeCommande: Commande[] = [];
Commande: Commande = new Commande();
constructor( private route: ActivatedRoute,
  private router: Router,private payementService: PayementServiceService,private commandeService:CommandeServiceService,private factureService: FactureServiceService) { }
  facture: Facture = {
    description: '',
    listChargeFinancieres: [],
    taxes: [],
    montantFacture: 0,
    etatFacture: false
  };
  chargesFinancieres: ChargeFinanciere[] = [];
  taxes: Taxe[] = [];

  idCommande: number;

  onSubmit(): void {
    console.log(this.idCommande);
    const idCommande = this.idCommande; // remplacer par l'identifiant de la commande à laquelle la facture doit être associée

    this.factureService.addFacture(this.facture, idCommande).subscribe(
      facture => console.log(facture),
      error => console.error('Erreur lors de la création de la facture :', error)
    );
    location.reload();

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

  onClickFacturePdf(Commande:Commande){
  this.factureService.pdfFacture(36);

  }

  onClickFacture(commande: any) {
    this.idCommande = commande.idCommande;
  }
  addCharge(): void {
    this.facture.listChargeFinancieres.push(new ChargeFinanciere());
  }

  removeCharge(index: number): void {
    this.facture.listChargeFinancieres.splice(index, 1);
  }

  addTaxe(): void {
    this.facture.taxes.push(new Taxe());

  }
  removeTaxe(index: number): void {
    this.facture.taxes.splice(index, 1);
  }


  ngOnInit(): void {



    this.commandeService.getAllCommande().subscribe(
      data => {this.listeCommande = data},
      error => {'Error de recuperation les utilisateurs !'}
    );

 // Récupérer la liste des charges financières depuis le serveur
 this.factureService.getAllChargeFinanciere().subscribe(
  charges => {
    this.chargesFinancieres = charges;
  },
  error => {
    console.log(error);
  }
);

// Récupérer la liste des taxes depuis le serveur
this.factureService.getAllTaxe().subscribe(
  taxes => {
    this.taxes = taxes;
  },
  error => {
    console.log(error);
  }
);





  }

  annulerCommande(id:number){
    this.commandeService.annulerCommande(id).subscribe(data=>{
      alert("annulation de Commande avec succes");location.reload(); },
      error => {alert('suppression erronée');console.log(error);}

    );
  }
  reactiveCommande(id:number){
    this.commandeService.reactiverCommande(id).subscribe(data=>{
      alert("reactivation de commande  avec succès");location.reload(); },
      error => {alert('suppression erronée');console.log(error);}
    );


  }



  openModal(){
    $('#exampleModal').modal('show');
  }

}
