import { Component, OnInit } from '@angular/core';
import { FactureAvoir } from 'src/app/core/Models/FactureAvoir';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-corbeilleFactureAvoir',
  templateUrl: './corbeilleFactureAvoir.component.html',
  styleUrls: ['./corbeilleFactureAvoir.component.scss']
})
export class CorbeilleFactureAvoirComponent implements OnInit {

  factureAvoirs: FactureAvoir[];
  constructor(private livraisonService: LivraisonService) { }
  ngOnInit() {
    this.getFactureAvoir();

  }
//Affichage Operateur
private getFactureAvoir(){
  this.livraisonService.getAllFactureAvoir().subscribe((data) => {
this.factureAvoirs = data;
console.log(data);
},
(error)=>{
console.log(error);

}
);

}
restoreFactureAvoir(idFactureAvoir: number) {
  this.livraisonService.restoreFactureAvoir(idFactureAvoir)
    .subscribe(
      () =>
      console.log('FactureAvoir restored successfully.'),
      (error) => console.error('Error restoring FactureAvoir:', error)
    );
    location.reload();

  }
}
