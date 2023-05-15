import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevisFournisseur } from 'src/app/core/Model/devis-fournisseur';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-updatedevis',
  templateUrl: './updatedevis.component.html',
  styleUrls: ['./updatedevis.component.scss']
})
export class UpdatedevisComponent implements OnInit {

  devisfournisseur:DevisFournisseur;
  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {
    this.appeloffreservice.getAllDevisFourniseur();
  }

  updateDevisFourniseur(){
    this.appeloffreservice.updateDevisFourniseur(this.devisfournisseur)
    .subscribe(()=> console.log('complete'));
    this.router.navigate(['/devisfournisseurs/devisfournisseur/list'])
  }
}
