import { LivraisonService } from 'src/app/core/services/livraison.service';
import { FactureAvoir } from './../../../core/Models/FactureAvoir';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factureAvoir',
  templateUrl: './factureAvoir.component.html',
  styleUrls: ['./factureAvoir.component.scss']
})
export class FactureAvoirComponent implements OnInit {
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



//Delete
deleteFactureAvoir(idFactureAvoir: number){
this.livraisonService.DeleteFactureAvoir(idFactureAvoir).subscribe( data => {
  location.reload();
  console.log(data);


})
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
