import { LivraisonService } from 'src/app/core/services/livraison.service';
import { Component, OnInit } from '@angular/core';
import { BonReception } from 'src/app/core/Models/BonReception';
import { BonRetour } from 'src/app/core/Models/BonRetour';

@Component({
  selector: 'app-bonReception',
  templateUrl: './bonReception.component.html',
  styleUrls: ['./bonReception.component.scss']
})
export class BonReceptionComponent implements OnInit {
  bonReceptions: BonReception[];

  idBonRetour :number;
IdForBonRetour :number;
modalNewBonReception: boolean = false
bonRetour : BonRetour = new BonRetour()
showModal = false;

  constructor(private livraisonService: LivraisonService) { }

  ngOnInit() {
    this.getBonReception();

  }

  //Affichage Operateur
  private getBonReception(){
    this.livraisonService.getAllBonReception().subscribe((data) => {
  this.bonReceptions = data;
  console.log(data);
},
(error)=>{
  console.log(error);

}
);

}

//Ajout
addBonReception(idLivraison:number,bonReceptions:BonReception): void {
  this.livraisonService.addBonReception(idLivraison, bonReceptions)
    .subscribe(bonReception => {
      console.log(bonReception);
      // Add success notification
    });
}

//Delete
deleteBonReception(idBonReception: number){
  this.livraisonService.DeleteBonReception(idBonReception).subscribe( data => {
    location.reload();
    console.log(data);


  })
}
restoreBonReception(idBonReception: number) {
  this.livraisonService.restoreBonReception(idBonReception)
    .subscribe(
      () =>
      console.log('Bon Reception restored successfully.'),
      (error) => console.error('Error restoring Bon Reception:', error)
    );
    location.reload();

}


// Fonction pour ouvrir le modal
openModal(idBonRetour: number) {
  this.idBonRetour = idBonRetour;
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

//Ajout Bon retour Modal
addNewRetour(idBR:any){
  this.modalNewBonReception = !this.modalNewBonReception
  this.IdForBonRetour = idBR
  localStorage.setItem('idBonRetour' , idBR)
  console.log(idBR)
}

closeNewBonReceptionModal ($event :any) : void{
  this.modalNewBonReception = $event
}

}
