import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargeFinanciere } from 'src/app/models/ChargeFinanciere';
import { Commande } from 'src/app/models/Commande';
import { PayementServiceService } from '../../services/payement-service.service';
import { CommandeServiceService } from '../../services/commande-service.service';
import { Facture } from 'src/app/models/Facture';
import { Taxe } from 'src/app/models/Taxe';
import { FactureServiceService } from '../../services/facture-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Paiment } from 'src/app/models/Paiment';


@Component({
  selector: 'app-commande-by-user',
  templateUrl: './commande-by-user.component.html',
  styleUrls: ['./commande-by-user.component.scss']
})
export class CommandeByUserComponent implements OnInit {
  [x: string]: any;
  openPaymentModal() {
    this.modalService.open('#payment-modal', { centered: true });
  }

  listeCommande:  Commande[] = [];
  Commande: Commande = new Commande();
  constructor(private modalService: NgbModal, private route: ActivatedRoute,
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


    }
    onPayer() {
      // Récupérer les commandes sélectionnées
      const commandesSelectionnees = this.listeCommande.filter(c => c.selected);

      // Calculer le total hors taxe, la TVA et le total à payer
      const totalHorsTaxe = commandesSelectionnees.reduce((acc, c) => acc + c.prixTotalHorsTaxe, 0);
      const tva = totalHorsTaxe * 0.20; // Supposons que la TVA est de 20%
      let totalAvecTaxe = 0;

      // Mettre à jour les prix totaux avec taxe et calculer le total avec taxe
      commandesSelectionnees.forEach(c => {
        c.prixTotalAvecTaxe = c.prixTotalHorsTaxe * 1.20; // Ajouter la taxe de 20%
        totalAvecTaxe += c.prixTotalAvecTaxe;
      });

      // Ouvrir la modal de paiement
      $('#modalPaiement').modal('show');

      // Mettre à jour les valeurs dans la modal
      $('#modalPaiement .modal-body table tbody').empty();
      commandesSelectionnees.forEach(c => {
        const ligneCommande = `<tr><td>${c.offre.commentaire}</td></tr>`;
        $('#modalPaiement .modal-body table tbody').append(ligneCommande);
      });
      const totalHorsTaxeText = `Total hors taxe : ${totalHorsTaxe} DT`;
      const tvaText = `TVA : ${tva} DT`;
      const totalAPayerText = `Total à payer : ${totalAvecTaxe} DT`;
      $('#modalPaiement .modal-body p:nth-of-type(1)').text(totalHorsTaxeText);
      $('#modalPaiement .modal-body p:nth-of-type(2)').text(tvaText);
      $('#modalPaiement .modal-body p:nth-of-type(3)').text(totalAPayerText);

      // Mettre à jour le total à payer dans la modal
      $('#modalPaiement #totalAPayer').text(totalAPayerText);

      // Ajouter un écouteur d'événement pour le soumission du formulaire de paiement
      $('#modalPaiement form').submit(event => {
        event.preventDefault();

        const numeroCarte = $('#modalPaiement #numeroCarte').val();

        const currency = $('#modalPaiement #numeroCarte').val();
        const dateExpiration = $('#modalPaiement #dateExpiration').val();
        const email = $('#modalPaiement #email').val();

        // Envoyer les détails de paiement au serveur
        // ...

        // Fermer la modal de paiement
        $('#modalPaiement').modal('hide');
      });
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




    getMontantTotalAvecTVA() {
      return this.montantTotal * (1 + this.tauxTVA);
    }


    onPayerr() {

      this.payementService.payerCommandes(this.listeCommande).subscribe(
        () => {
          console.log('Le paiement a été effectué avec succès !');
        },
        error => {
          console.error('Le paiement a échoué :', error);
        }
        
      );
      location.reload();
    }

    ngOnInit(): void {



      this.commandeService.getCommandeByUser().subscribe(
        data => {console.log("this is data"+data) ,this.listeCommande = data},
        error => {'Error de recuperation les utilisateurs !'}
      );






    }



    openModal(){
      $('#exampleModal').modal('show');
    }


}
