import { Component, OnInit } from '@angular/core';
import { BonRetour } from 'src/app/core/Models/BonRetour';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-corbeilleBonRetour',
  templateUrl: './corbeilleBonRetour.component.html',
  styleUrls: ['./corbeilleBonRetour.component.scss']
})
export class CorbeilleBonRetourComponent implements OnInit {
  bonRetours: BonRetour[];

  constructor(private livraisonService: LivraisonService) { }

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
restoreBonRetour(idBonRetour: number) {
  this.livraisonService.restoreBonReception(idBonRetour)
    .subscribe(
      () =>
      console.log('Bon Retour restored successfully.'),
      (error) => console.error('Error restoring Bon Retour:', error)
    );
    location.reload();

}
}
