import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BonReception } from 'src/app/core/Models/BonReception';
import { LivraisonService } from 'src/app/core/services/livraison.service';


@Component({
  selector: 'app-add-livraison',
  templateUrl: './add-livraison.component.html',
  styleUrls: ['./add-livraison.component.scss']
})
export class AddLivraisonComponent implements OnInit {

  @Input() modalNewLivraision :boolean = true
  @Output() closeLivraisonModel  = new EventEmitter<boolean>()

  bonReception : BonReception = new BonReception();

  idLivrForBn!:any

  constructor(
    private livraisonService : LivraisonService
  ) { }

  ngOnInit() {
    this.idLivrForBn = localStorage.getItem('idLivrai');
  }

  close(){
    this.modalNewLivraision = false
  }

  addBonReception(bonReceptions:BonReception): void {
    this.livraisonService.addBonReception(this.idLivrForBn, bonReceptions)
      .subscribe(bonReception => {
        console.log(bonReception);
        // Add success notification
       
        setTimeout(function(){
          window.location.reload();
       }, 4000)
      });
  }
}
