import { Component, OnInit } from '@angular/core';
import { BonRetour } from 'src/app/core/Models/BonRetour';
import { FactureAvoir } from 'src/app/core/Models/FactureAvoir';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-bonRetour',
  templateUrl: './bonRetour.component.html',
  styleUrls: ['./bonRetour.component.scss']
})
export class BonRetourComponent implements OnInit {
  bonRetours: BonRetour[];

  constructor(private livraisonService: LivraisonService) { }
  idFactureAvoir :number;
  IdForFactureAvoir :number;
  modalNewFactureAvoir: boolean = false
  factureAvoir : FactureAvoir = new FactureAvoir()
  showModal = false;

  ngOnInit() {
    this.getBonRetour();

  }
//Affichage Operateur
private getBonRetour(){
  this.livraisonService.getAllBonRetour().subscribe((data) => {
this.bonRetours = data;
console.log(data);
},
(error)=>{
console.log(error);

}
);
}
//Delete
deleteBonRetour(idBonRetour: number){
  this.livraisonService.DeleteBonReception(idBonRetour).subscribe( data => {
    location.reload();
    console.log(data);


  })
}
restoreBonRetour(idBonRetour: number) {
  this.livraisonService.restoreBonReception(idBonRetour)
    .subscribe(
      () =>
      console.log('Bon Retour restored successfully.'),
      (error) => console.error('Error restoring Bon Retour:', error)
    );
    location.reload();

}
// Fonction pour ouvrir le modal
openModal(idFactureAvoir: number) {
  this.idFactureAvoir = idFactureAvoir;
  this.showModal = true;
}
// Fonction pour fermer le modal
closeModal() {
  this.showModal = false;
}

// Fonction pour enregistrer les données du formulaire
saveBonRetour() {
  // Envoyer les données du formulaire au serveur ou les traiter ici
  // ...
  // Fermer le modal
  this.closeModal();
}

//Ajout facture Avoir Modal
addNewFactureAvoir(idF:any){
  this.modalNewFactureAvoir = !this.modalNewFactureAvoir
  this.IdForFactureAvoir = idF
  localStorage.setItem('idFactureAvoir' , idF)
  console.log(idF)
}

closeNewFactureAcoirModal ($event :any) : void{
  this.modalNewFactureAvoir = $event
}
}
