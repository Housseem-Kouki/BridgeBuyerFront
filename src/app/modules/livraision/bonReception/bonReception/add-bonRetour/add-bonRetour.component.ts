import { LivraisonService } from 'src/app/core/services/livraison.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BonRetour } from 'src/app/core/Models/BonRetour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bonRetour',
  templateUrl: './add-bonRetour.component.html',
  styleUrls: ['./add-bonRetour.component.scss']
})
export class AddBonRetourComponent implements OnInit {

  @Input() modalNewBonReception :boolean = true
  @Output() closeBonReceptionModel  = new EventEmitter<boolean>()

  brt : BonRetour = new BonRetour();
  idBonReception!:any;
  constructor(
    private livraisonService : LivraisonService,
    private _router : Router
    ) { }

    ngOnInit() {
      this.idBonReception = localStorage.getItem('idBonRetour');
      console.log(this.idBonReception);
    }

    close(){
      this.modalNewBonReception = false
    }
  addBonRetour(brt:BonRetour): void {
    this.livraisonService.addBonRetour(this.brt, this.idBonReception).subscribe({
     next :()=> this._router.navigateByUrl('/bonRetour')
    })
    //location.reload();
  }
  redirection(){
    this._router.navigate(['/bonRetour']);
  }
}
