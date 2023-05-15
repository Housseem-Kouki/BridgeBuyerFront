import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FactureAvoir } from 'src/app/core/Models/FactureAvoir';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-add-factureAvoir',
  templateUrl: './add-factureAvoir.component.html',
  styleUrls: ['./add-factureAvoir.component.scss']
})
export class AddFactureAvoirComponent implements OnInit {
 @Input() modalNewFactureAvoir :boolean = true
  @Output() closeFactureAvoirModel  = new EventEmitter<boolean>()
fact : FactureAvoir =new FactureAvoir();
idBonRetour!:any;
idFactureAvoir!:any;
  constructor(
    private livraisonService : LivraisonService,
    private _router : Router
    ) { }
  ngOnInit() {
    this.idBonRetour = localStorage.getItem('idFactureAvoir');
      console.log(this.idBonRetour);
  }
  close(){
    this.modalNewFactureAvoir = false
  }
  addFactureAvoir(fact :FactureAvoir): void {
    this.livraisonService.affecterFactureAvoirToBonRetour(this.fact, this.idBonRetour)
      .subscribe({
      next :()=> this._router.navigateByUrl('/factureAvoir')


  })
}
redirection(){
  this._router.navigate(['/factureAvoir']);
}
}
