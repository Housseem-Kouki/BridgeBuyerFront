import { Component, OnInit } from '@angular/core';
import { BonReception } from 'src/app/core/Models/BonReception';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-corbeilleBonReception',
  templateUrl: './corbeilleBonReception.component.html',
  styleUrls: ['./corbeilleBonReception.component.scss']
})
export class CorbeilleBonReceptionComponent implements OnInit {
  bonReceptions: BonReception[];

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
restoreBonReception(idBonReception: number) {
  this.livraisonService.restoreBonReception(idBonReception)
    .subscribe(
      () =>
      console.log('Bon Reception restored successfully.'),
      (error) => console.error('Error restoring Bon Reception:', error)
    );
    location.reload();

}

}
