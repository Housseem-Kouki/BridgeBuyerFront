import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevisFournisseur } from 'src/app/core/Model/devis-fournisseur';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-detailsdevis',
  templateUrl: './detailsdevis.component.html',
  styleUrls: ['./detailsdevis.component.scss']
})
export class DetailsdevisComponent implements OnInit {
  devisfournisseur:DevisFournisseur;
  devisFournisseur:DevisFournisseur;

  Listdevis:DevisFournisseur[];
  id:any;

  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {
    this.appeloffreservice.getAllDevisFourniseur().subscribe(
      data => {this.devisFournisseur = data;console.log(data)},
      error => {  alert("error de recuperation liste devis fournisseur")}
    );
  }
  getdevisbyID(id:number){
  this.appeloffreservice.getDevisFourniseurbyId(id).
  subscribe((data=>{this.devisfournisseur=data}),
  error => {alert("erreur recuperation ")});
}
Accept(id:number){
  this.appeloffreservice.getDevisFourniseurbyId(this.id)
  .subscribe(devisfournisseur=> console.log('appel doffre lancer')) ;
}
confirmer(idDevisFourniseur:number){
  this.appeloffreservice.getDevisFourniseurbyId(idDevisFourniseur).
  subscribe((data=>{this.devisfournisseur=data}),
  error => {alert("erreur recuperation ")});
  
}
}
